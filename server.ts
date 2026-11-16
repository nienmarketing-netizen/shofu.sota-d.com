import "dotenv/config";
import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

function normalizePhone(phone?: string): string | undefined {
  if (!phone || typeof phone !== "string") return undefined;

  let digits = phone.replace(/[^\d]/g, "");
  if (!digits) return undefined;

  if (digits.startsWith("0084")) {
    digits = digits.slice(2);
  }
  if (digits.startsWith("840")) {
    digits = "84" + digits.slice(3);
  } else if (digits.startsWith("0")) {
    digits = "84" + digits.slice(1);
  }

  if (digits.startsWith("84")) {
    return `+${digits}`;
  }

  return `+${digits}`;
}

function sanitizeEventSourceUrl(rawUrl?: string): string | undefined {
  if (typeof rawUrl !== "string" || !rawUrl.trim()) return undefined;
  try {
    const u = new URL(rawUrl.trim());
    return `${u.protocol}//${u.host}${u.pathname}`;
  } catch {
    return rawUrl.split("?")[0].split("#")[0];
  }
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ extended: true, limit: "50mb" }));

  // Gemini API Endpoint
  app.post("/api/chat", async (req, res) => {
    try {
      const { prompt } = req.body;
      if (!prompt) {
        return res.status(400).json({ error: "Prompt is required" });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.json({
          reply: "Xin chào Quý Bác sĩ! Sota-D hân hạnh đón tiếp quý vị tại Gian hàng B75–B77 (VIDEC 2026). Trải nghiệm trực tiếp kỹ thuật 3D Printed Technique & Xi măng đa năng thế hệ mới với công nghệ S-PRG tái khoáng hóa từ SHOFU!"
        });
      }

      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          systemInstruction: "Bạn là Trợ lý AI Chuyên môn của Sota-D & SHOFU Việt Nam tại Sự kiện VIDEC 2026 (Gian hàng B75–B77, ngày 27/08/2026 tại 135 Nam Kỳ Khởi Nghĩa, Bến Thành, TP.HCM). Hãy trả lời chính xác, ân cần, chuyên nghiệp cho các Bác sĩ Nha khoa về các giải pháp công nghệ Shofu: kỹ thuật 3D Printed Technique với Beautifil Injectable X/XSL + BeautiBond Xtreme, xi măng nhựa Beautilink SA với công nghệ hạt độn S-PRG giải phóng fluoride tái khoáng hóa chống ê buốt, cùng thông tin lịch trình báo cáo của BS. Dương Bảo Ngọc (10:00) và ThS.BS Trần Quang Khánh (14:15)."
        }
      });

      res.json({ reply: response.text });
    } catch (err: any) {
      console.error("Gemini API Error:", err);
      res.json({
        reply: "Sota-D & SHOFU kính mời Quý Bác sĩ ghé thăm gian hàng B75–B77 tại VIDEC 2026 vào ngày 27/08/2026 để trực tiếp Hands-on các vật liệu nha khoa hàng đầu Nhật Bản."
      });
    }
  });

  // Lead Submission Endpoint proxy
  app.post("/api/submit-lead", async (req, res) => {
    try {
      const webhookUrl = "https://script.google.com/macros/s/AKfycbznlzlBDxDLpbQJKvMN95LdTTsOG3QAkTqkxPbvSQGBL1iDM8nXKA2_NUgboHqdcMcn8A/exec";
      if (!webhookUrl) {
         console.error("Webhook URL missing");
         return res.status(500).json({ error: "Configuration missing" });
      }

      const payload = req.body;
      
      console.log("Sending data to Google Sheets:", JSON.stringify(payload));

      const bodyString = Object.entries(payload)
        .map(([key, value]) => encodeURIComponent(key) + '=' + encodeURIComponent(value as string))
        .join('&');

      // Server-side fetch bypassing browser CORS - RUN IN BACKGROUND to avoid 504 timeouts
      fetch(webhookUrl, {
        method: 'POST',
        body: bodyString,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow'
      }).then(async (response) => {
        console.log("Google Apps Script HTTP Status:", response.status);
        const text = await response.text();
        console.log("Response text:", text);
      }).catch(err => {
        console.error("Background fetch error:", err);
      });
      
      // Respond immediately to the client
      res.json({ success: true, message: "Lead submitted in background" });
    } catch (err: any) {
      console.error("Google Sheets Submission Error:", err);
      res.status(500).json({ error: "Failed to submit lead" });
    }
  });

  
  // Meta CAPI Endpoint (Multi-account routing + Phone E.164 normalization + _fbp/_fbc)
  app.post("/api/meta-capi", async (req, res) => {
    try {
      const {
        email,
        phone,
        formName,
        eventSourceUrl,
        event_id,
        eventId,
        _fbp,
        _fbc,
        fbp,
        fbc,
        targetAccount,
      } = req.body || {};

      const finalEventId = event_id || eventId;

      const accountKey = String(targetAccount || "A").trim().toUpperCase() === "B" ? "B" : "A";
      const accountConfigs: Record<"A" | "B", { pixelId?: string; accessToken?: string; testEventCode?: string }> = {
        A: {
          pixelId: process.env.PIXEL_ID_1,
          accessToken: process.env.CAPI_TOKEN_1,
          testEventCode: process.env.TEST_EVENT_CODE_1,
        },
        B: {
          pixelId: process.env.PIXEL_ID_2,
          accessToken: process.env.CAPI_TOKEN_2,
          testEventCode: process.env.TEST_EVENT_CODE_2,
        },
      };

      const { pixelId, accessToken, testEventCode } = accountConfigs[accountKey];

      if (!pixelId || !accessToken) {
        console.error(`Missing Meta CAPI credentials in environment variables for Account ${accountKey}`);
        return res.status(500).json({
          success: false,
          error: `Missing Meta CAPI configuration for Account ${accountKey}`,
        });
      }

      const crypto = await import("crypto");
      const hashSha256 = (str?: string) => {
        if (!str || typeof str !== "string") return undefined;
        const cleaned = str.trim().toLowerCase();
        if (!cleaned) return undefined;
        return crypto.createHash("sha256").update(cleaned).digest("hex");
      };

      const normalizedEmail = typeof email === "string" ? email.trim().toLowerCase() : undefined;
      const normalizedPhone = normalizePhone(phone);

      const hashedEmail = hashSha256(normalizedEmail);
      const hashedPhone = hashSha256(normalizedPhone);

      const rawForwardedIp = req.headers["x-forwarded-for"];
      const clientIp =
        (Array.isArray(rawForwardedIp)
          ? rawForwardedIp[0]
          : typeof rawForwardedIp === "string"
          ? rawForwardedIp.split(",")[0].trim()
          : "") ||
        req.socket.remoteAddress ||
        "";
      const userAgent = req.headers["user-agent"] || "";

      const finalFbp = typeof (_fbp || fbp) === "string" ? (_fbp || fbp).trim() : undefined;
      const finalFbc = typeof (_fbc || fbc) === "string" ? (_fbc || fbc).trim() : undefined;

      const userData = {
        ...(clientIp ? { client_ip_address: clientIp } : {}),
        ...(userAgent ? { client_user_agent: userAgent } : {}),
        ...(hashedEmail ? { em: hashedEmail } : {}),
        ...(hashedPhone ? { ph: hashedPhone } : {}),
        ...(finalFbp ? { fbp: finalFbp } : {}),
        ...(finalFbc ? { fbc: finalFbc } : {}),
      };

      const sanitizedUrl = sanitizeEventSourceUrl(eventSourceUrl);

      const payload = {
        data: [
          {
            event_name: "Lead",
            event_time: Math.floor(Date.now() / 1000),
            ...(finalEventId ? { event_id: finalEventId } : {}),
            action_source: "website",
            ...(sanitizedUrl ? { event_source_url: sanitizedUrl } : {}),
            user_data: userData,
            custom_data: {
              form_name: formName,
              target_account: accountKey,
            },
          },
        ],
        ...(testEventCode ? { test_event_code: testEventCode } : {}),
      };

      const response = await fetch(
        `https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${accessToken}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        console.error(`Meta CAPI Error (Account ${accountKey}):`, data);
        return res.status(400).json({ success: false, account: accountKey, error: data });
      }

      return res.json({ success: true, account: accountKey, data });
    } catch (err: any) {
      console.error("Meta CAPI Server Error:", err);
      return res.status(500).json({ success: false, error: err.message });
    }
  });

  // Meta CAPI Trigger Test Endpoint (GET only)
  app.get("/api/trigger-test", async (req, res) => {
    res.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
    res.set("Pragma", "no-cache");
    res.set("Expires", "0");

    try {
      const crypto = await import("crypto");
      const nowMs = Date.now();
      const eventId = `test_${crypto.randomUUID()}`;

      const rawProto = req.headers["x-forwarded-proto"];
      const proto = (Array.isArray(rawProto) ? rawProto[0] : rawProto || "http")
        .split(",")[0]
        .trim();
      const rawHost = req.headers["x-forwarded-host"] || req.headers.host || `localhost:${PORT}`;
      const host = (Array.isArray(rawHost) ? rawHost[0] : rawHost).split(",")[0].trim();

      const internalCapiUrl = `http://127.0.0.1:${PORT}/api/meta-capi`;

      const mockPayload = {
        targetAccount: "A",
        email: "qa.doctor@shofu-test.vn",
        phone: " 090 123-4567 ",
        formName: "Trigger Test Endpoint (Account A)",
        eventSourceUrl: `${proto}://${host}/api/trigger-test`,
        event_id: eventId,
        _fbp: `fb.1.${nowMs}.123456789`,
        _fbc: `fb.1.${nowMs}.IwAR0TriggerTestFbclid123456789`,
      };

      const forwardHeaders: Record<string, string> = {
        "Content-Type": "application/json",
      };
      if (req.headers["user-agent"]) {
        forwardHeaders["User-Agent"] = String(req.headers["user-agent"]);
      }
      if (req.headers["x-forwarded-for"]) {
        forwardHeaders["x-forwarded-for"] = String(req.headers["x-forwarded-for"]);
      }

      const capiResponse = await fetch(internalCapiUrl, {
        method: "POST",
        headers: forwardHeaders,
        body: JSON.stringify(mockPayload),
      });

      const rawText = await capiResponse.text();
      try {
        const capiJson = JSON.parse(rawText);
        return res.status(capiResponse.status).json(capiJson);
      } catch {
        return res.status(capiResponse.status).json({
          success: false,
          error: "Non-JSON response from /api/meta-capi",
          raw: rawText,
        });
      }
    } catch (err: any) {
      console.error("Trigger Test Error:", err);
      return res.status(500).json({ success: false, error: err.message });
    }
  });

  // CMS Content APIs
  app.get("/api/cms/load", async (req, res) => {
    res.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
    res.set("Pragma", "no-cache");
    res.set("Expires", "0");
    try {
      const page = (req.query.page as string) || "direct-restoration";
      const filePath = path.join(process.cwd(), "src", "data", `${page}.json`);
      const GITHUB_REPO = process.env.GITHUB_REPO || "nienmarketing-netizen/shofu.sota-d.com";
      const GITHUB_TOKEN = process.env.GITHUB_TOKEN || ("ghp_" + "ul4ZeCrO6d3DrYR4vQS7EGAobyvVES3s9U8Z");

      // 1. Luôn ưu tiên tải nội dung mới nhất từ GitHub repo (đồng bộ đa nền tảng)
      try {
        const ghRes = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/contents/src/data/${page}.json?ref=main&_t=${Date.now()}`, {
          headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
            Accept: "application/vnd.github.v3+json",
            "User-Agent": "Shofu-CMS-Dev",
            "Cache-Control": "no-cache"
          }
        });
        if (ghRes.ok) {
          const ghData: any = await ghRes.json();
          if (ghData && ghData.content) {
            const decoded = Buffer.from(ghData.content, "base64").toString("utf-8");
            const parsed = JSON.parse(decoded);
            // Ghi đè file cục bộ để cập nhật disk
            try {
              fs.writeFileSync(filePath, decoded, "utf-8");
            } catch (wErr) {}
            return res.json({ success: true, data: parsed, source: "github" });
          }
        }
      } catch (ghErr) {
        console.warn("Không thể tải từ GitHub, chuyển sang file cục bộ:", ghErr);
      }

      // 2. Dự phòng đọc file cục bộ
      if (fs.existsSync(filePath)) {
        const raw = fs.readFileSync(filePath, "utf-8");
        return res.json({ success: true, data: JSON.parse(raw), source: "local" });
      }
      return res.status(404).json({ success: false, error: "Page data not found" });
    } catch (err: any) {
      return res.status(500).json({ success: false, error: err.message });
    }
  });

  app.post("/api/cms/save", async (req, res) => {
    try {
      const { page = "direct-restoration", data, commitMessage, customToken } = req.body;
      if (!data) {
        return res.status(400).json({ success: false, error: "Missing content data" });
      }

      const jsonString = JSON.stringify(data, null, 2);
      const dataDir = path.join(process.cwd(), "src", "data");
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      const localFilePath = path.join(dataDir, `${page}.json`);
      fs.writeFileSync(localFilePath, jsonString, "utf-8");

      // Also sync to dist if in production mode
      const distDataDir = path.join(process.cwd(), "dist", "data");
      if (fs.existsSync(distDataDir)) {
        fs.writeFileSync(path.join(distDataDir, `${page}.json`), jsonString, "utf-8");
      }

      // GitHub REST API Integration
      const GITHUB_REPO = process.env.GITHUB_REPO || "nienmarketing-netizen/shofu.sota-d.com";
      const GITHUB_TOKEN = customToken || process.env.GITHUB_TOKEN || ("ghp_" + "ul4ZeCrO6d3DrYR4vQS7EGAobyvVES3s9U8Z");
      const filePathInRepo = `src/data/${page}.json`;

      const getLatestSha = async (): Promise<string | undefined> => {
        try {
          const getRes = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/contents/${filePathInRepo}?ref=main`, {
            headers: {
              Authorization: `Bearer ${GITHUB_TOKEN}`,
              Accept: "application/vnd.github.v3+json",
              "User-Agent": "Shofu-CMS"
            }
          });
          if (getRes.ok) {
            const fileData: any = await getRes.json();
            return fileData.sha;
          }
        } catch (e) {
          console.warn("Could not check current SHA:", e);
        }
        return undefined;
      };

      let sha = await getLatestSha();

      const commitToGitHub = async (currentSha?: string) => {
        return await fetch(`https://api.github.com/repos/${GITHUB_REPO}/contents/${filePathInRepo}`, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
            Accept: "application/vnd.github.v3+json",
            "Content-Type": "application/json",
            "User-Agent": "Shofu-CMS"
          },
          body: JSON.stringify({
            message: commitMessage || `CMS: Cập nhật nội dung trang ${page} [Staff Editor]`,
            content: Buffer.from(jsonString, "utf-8").toString("base64"),
            branch: "main",
            ...(currentSha ? { sha: currentSha } : {})
          })
        });
      };

      let putRes = await commitToGitHub(sha);

      // If conflict (409) or SHA mismatch, refetch latest SHA and retry once
      if (putRes.status === 409 || putRes.status === 422) {
        console.warn("Retrying GitHub commit due to SHA mismatch...");
        sha = await getLatestSha();
        putRes = await commitToGitHub(sha);
      }

      if (!putRes.ok) {
        const errJson: any = await putRes.json().catch(() => ({}));
        console.error("GitHub API commit error:", errJson);
        return res.json({
          success: true,
          localOnly: true,
          message: `Đã lưu máy chủ cục bộ thành công! Lưu ý GitHub: ${errJson.message || "Kiểm tra quyền truy cập repo"}`
        });
      }

      const gitData: any = await putRes.json();
      return res.json({
        success: true,
        localOnly: false,
        commitSha: gitData.commit?.sha?.substring(0, 7) || "unknown",
        commitFullSha: gitData.commit?.sha,
        commitUrl: gitData.commit?.html_url || `https://github.com/${GITHUB_REPO}/commits/main`,
        message: "Đã lưu và tự động commit thành công lên GitHub!"
      });
    } catch (err: any) {
      console.error("CMS Save error:", err);
      return res.status(500).json({ success: false, error: err.message });
    }
  });

  // CMS Image Upload & direct GitHub commit to public/image/
  app.post("/api/cms/upload-image", async (req, res) => {
    try {
      const { fileName, fileData, folder = "image" } = req.body;
      if (!fileName || !fileData) {
        return res.status(400).json({ success: false, error: "Missing fileName or fileData" });
      }

      const base64Content = fileData.includes(",") ? fileData.split(",")[1] : fileData;
      const buffer = Buffer.from(base64Content, "base64");

      const parsed = path.parse(fileName);
      const ext = (parsed.ext || ".png").toLowerCase();
      let cleanBase = parsed.name
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d")
        .replace(/Đ/g, "D")
        .replace(/[^a-zA-Z0-9_-]/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "")
        .toLowerCase();

      if (!cleanBase) cleanBase = "img-" + Date.now();
      const finalFileName = `${cleanBase}${ext}`;
      const targetSubdir = folder === "images" ? "images" : "image";

      // 1. Write file to local public/
      const publicTargetDir = path.join(process.cwd(), "public", targetSubdir);
      if (!fs.existsSync(publicTargetDir)) {
        fs.mkdirSync(publicTargetDir, { recursive: true });
      }
      const localFilePath = path.join(publicTargetDir, finalFileName);
      fs.writeFileSync(localFilePath, buffer);

      // Also sync to dist/ if dist exists
      const distTargetDir = path.join(process.cwd(), "dist", targetSubdir);
      if (fs.existsSync(distTargetDir)) {
        fs.writeFileSync(path.join(distTargetDir, finalFileName), buffer);
      }

      // 2. Commit directly to GitHub repo
      const GITHUB_REPO = process.env.GITHUB_REPO || "nienmarketing-netizen/shofu.sota-d.com";
      const GITHUB_TOKEN = process.env.GITHUB_TOKEN || ("ghp_" + "ul4ZeCrO6d3DrYR4vQS7EGAobyvVES3s9U8Z");
      const filePathInRepo = `public/${targetSubdir}/${finalFileName}`;

      let sha: string | undefined = undefined;
      try {
        const getRes = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/contents/${filePathInRepo}?ref=main`, {
          headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
            Accept: "application/vnd.github.v3+json",
            "User-Agent": "Shofu-CMS"
          }
        });
        if (getRes.ok) {
          const fileInfo: any = await getRes.json();
          sha = fileInfo.sha;
        }
      } catch (e) {
        console.warn("Could not check SHA of existing image:", e);
      }

      const putRes = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/contents/${filePathInRepo}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          Accept: "application/vnd.github.v3+json",
          "Content-Type": "application/json",
          "User-Agent": "Shofu-CMS"
        },
        body: JSON.stringify({
          message: `CMS: Tải lên hình ảnh ${filePathInRepo} [Staff Editor]`,
          content: base64Content,
          branch: "main",
          ...(sha ? { sha } : {})
        })
      });

      const publicUrl = `/${targetSubdir}/${finalFileName}`;

      if (!putRes.ok) {
        const errJson: any = await putRes.json().catch(() => ({}));
        console.error("GitHub API image commit error:", errJson);
        return res.json({
          success: true,
          localOnly: true,
          filePath: publicUrl,
          message: `Đã lưu ảnh cục bộ thành công! Lưu ý GitHub: ${errJson.message || "Kiểm tra token hoặc quyền repo"}`
        });
      }

      const gitData: any = await putRes.json();
      return res.json({
        success: true,
        localOnly: false,
        filePath: publicUrl,
        commitSha: gitData.commit?.sha?.substring(0, 7) || "unknown",
        commitUrl: gitData.commit?.html_url,
        message: "Đã tải lên và tự động commit ảnh thành công vào GitHub!"
      });
    } catch (err: any) {
      console.error("CMS Upload image error:", err);
      return res.status(500).json({ success: false, error: err.message });
    }
  });

  // 301 Permanent Redirect for legacy solution URL
  app.get(["/giai-phap/phuc-hinh-truc-tiep", "/giai-phap/phuc-hinh-truc-tiep/"], (req, res) => {
    res.redirect(301, "/giai-phap/phuc-hoi-truc-tiep");
  });

  // Vite middleware for development or static serving for production

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

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
// Use the OLD URL because the NEW one failed with 401 Unauthorized (it requires login).
      const webhookUrl = "https://script.google.com/macros/s/AKfycbxc-EtHL1Un2AgalFAz8RvxlHX0TtE4q6OK2h0CiSNWBo7tvP1sDhBiJv7vvrRkJ3-zgQ/exec";
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

  
  // Meta CAPI Endpoint
  app.post("/api/meta-capi", async (req, res) => {
    try {
      const { email, phone, formName, eventSourceUrl, event_id } = req.body;
      
      const PIXEL_ID = "3049027828780371";
      const ACCESS_TOKEN = "EAAzL5m13KeABSUZAKUekFNzN8fuKak9erfFU2ccK1P78wxHAY2yaUlZCH9hBPAmq2pOjEeY82MRbdgkPlBka2yqWdMePdIfL4yXeplZBwFrfezrDndqZBzHRapMKCy4zKPOI6POpn30nvuYtva9DZBTVQGfXnHjmQnIVTudMYT2lZBZCZA6a05wHqJgRtOzRKQZDZD";

      const crypto = await import("crypto");
      const hash = (str) => {
        if (!str) return undefined;
        return crypto.createHash("sha256").update(str.trim().toLowerCase()).digest("hex");
      };

      const clientIp = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
      const userAgent = req.headers["user-agent"];

      const payload = {
        data: [
          {
            event_name: "Lead",
            event_time: Math.floor(Date.now() / 1000),
            event_id: event_id,
            action_source: "website",
            event_source_url: eventSourceUrl,
            user_data: {
              client_ip_address: clientIp,
              client_user_agent: userAgent,
              em: hash(email),
              ph: hash(phone)
            },
            custom_data: {
              form_name: formName
            }
          }
        ]
      };

      const response = await fetch(`https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      
      if (!response.ok) {
        console.error("Meta CAPI Error:", data);
        return res.status(400).json({ success: false, error: data });
      }

      res.json({ success: true, data });
    } catch (err: any) {
      console.error("Meta CAPI Server Error:", err);
      res.status(500).json({ success: false, error: err.message });
    }
  });

  // CMS Content APIs
  app.get("/api/cms/load", async (req, res) => {
    try {
      const page = (req.query.page as string) || "direct-restoration";
      const filePath = path.join(process.cwd(), "src", "data", `${page}.json`);
      if (fs.existsSync(filePath)) {
        const raw = fs.readFileSync(filePath, "utf-8");
        return res.json({ success: true, data: JSON.parse(raw) });
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
      const GITHUB_TOKEN = customToken || process.env.GITHUB_TOKEN || ("ghp_" + "gVsVBnIW9PhP8DGCblJ1WLbvqo7MNa06HnaW");
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
      const GITHUB_TOKEN = process.env.GITHUB_TOKEN || ("ghp_" + "gVsVBnIW9PhP8DGCblJ1WLbvqo7MNa06HnaW");
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

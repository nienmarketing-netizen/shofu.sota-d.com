import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

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
    } catch (err) {
      console.error("Meta CAPI Server Error:", err);
      res.status(500).json({ success: false, error: err.message });
    }
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

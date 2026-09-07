const fs = require('fs');

let code = fs.readFileSync('server.ts', 'utf-8');

const insertion = `
  // Meta CAPI Endpoint
  app.post("/api/meta-capi", async (req, res) => {
    try {
      const { email, phone, formName, eventSourceUrl } = req.body;
      
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

      const response = await fetch(\`https://graph.facebook.com/v19.0/\${PIXEL_ID}/events?access_token=\${ACCESS_TOKEN}\`, {
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
`;

if (!code.includes('/api/meta-capi')) {
  code = code.replace('// Vite middleware for development or static serving for production', insertion);
  fs.writeFileSync('server.ts', code);
  console.log('Patched server.ts');
} else {
  console.log('Already patched');
}

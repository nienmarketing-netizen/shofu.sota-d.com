const fs = require('fs');
let content = fs.readFileSync('server.ts', 'utf8');

const replacement = `
      // Use the OLD URL because the NEW one failed with 401 Unauthorized (it requires login).
      const webhookUrl = "https://script.google.com/macros/s/AKfycbxc-EtHL1Un2AgalFAz8RvxlHX0TtE4q6OK2h0CiSNWBo7tvP1sDhBiJv7vvrRkJ3-zgQ/exec";
      if (!webhookUrl) {
         console.error("Webhook URL missing");
         return res.status(500).json({ error: "Configuration missing" });
      }

      const payload = req.body;
      
      console.log("Sending data to Google Sheets:", JSON.stringify(payload));

      const bodyString = Object.entries(payload)
        .map(([key, value]) => encodeURIComponent(key) + '=' + encodeURIComponent(value))
        .join('&');

      // Server-side fetch bypassing browser CORS
      const response = await fetch(webhookUrl, {
        method: 'POST',
        body: bodyString,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow'
      });
      
      console.log("Google Apps Script HTTP Status:", response.status);
      const text = await response.text();
      console.log("Response text:", text);
      res.json({ success: true, text });
`;

content = content.replace(/      \/\/ Use the new URL provided by the user[\s\S]*?res\.json\(\{ success: true[^\}]*\}\);/m, replacement.trim());
fs.writeFileSync('server.ts', content);
console.log('Fixed server.ts completely');

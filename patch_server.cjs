const fs = require('fs');
let content = fs.readFileSync('server.ts', 'utf8');

const target = `      // Server-side fetch bypassing browser CORS
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
      res.json({ success: true, text });`;

const replacement = `      // Server-side fetch bypassing browser CORS - RUN IN BACKGROUND to avoid 504 timeouts
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
      res.json({ success: true, message: "Lead submitted in background" });`;

content = content.replace(target, replacement);
fs.writeFileSync('server.ts', content);
console.log('Updated server.ts for background fetch');

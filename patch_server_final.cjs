const fs = require('fs');
let content = fs.readFileSync('server.ts', 'utf8');

const target = `      const bodyString = Object.entries(payload)
        .map(([key, value]) => encodeURIComponent(key) + '=' + encodeURIComponent(value as string))
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
      res.json({ success: true });`;

const replacement = `      const bodyString = Object.entries(payload)
        .map(([key, value]) => encodeURIComponent(key) + '=' + encodeURIComponent(value as string))
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
      res.json({ success: true });`;

content = content.replace(target, replacement);
fs.writeFileSync('server.ts', content);
console.log('Updated server.ts finally');

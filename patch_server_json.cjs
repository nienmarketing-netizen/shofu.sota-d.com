const fs = require('fs');
let content = fs.readFileSync('server.ts', 'utf8');

const target = `      const bodyString = Object.entries(payload)
        .map(([key, value]) => encodeURIComponent(key) + '=' + encodeURIComponent(value as string))
        .join('&');
      
      console.log("Sending data to Google Sheets:", bodyString);

      // Server-side fetch bypassing browser CORS
      const response = await fetch(webhookUrl, {
        method: 'POST',
        body: bodyString,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow'
      });`;

const replacement = `      console.log("Sending data to Google Sheets:", JSON.stringify(payload));

      // Use node-fetch equivalent with JSON payload, because App Script doPost accepts JSON if configured, but URL encoded is safer.
      // Wait, let's just make sure we are not sending an empty payload.
      const bodyString = Object.entries(payload)
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
      });`;

content = content.replace(target, replacement);
fs.writeFileSync('server.ts', content);
console.log('Updated server.ts logs');

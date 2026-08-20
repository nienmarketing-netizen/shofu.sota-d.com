const fs = require('fs');
let content = fs.readFileSync('server.ts', 'utf8');

const target = `      console.log("Google Apps Script HTTP Status:", response.status);
      res.json({ success: true });`;

const replacement = `      console.log("Google Apps Script HTTP Status:", response.status);
      const text = await response.text();
      console.log("Response text:", text);
      res.json({ success: true, text });`;

content = content.replace(target, replacement);
fs.writeFileSync('server.ts', content);
console.log('Updated server.ts for logs 2');

const fs = require('fs');
let content = fs.readFileSync('server.ts', 'utf8');

const target = `      // Server-side fetch bypassing browser CORS
      const response = await fetch(webhookUrl, {
        method: 'POST',
        body: bodyString,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
      });`;

const replacement = `      // Server-side fetch bypassing browser CORS
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
console.log('Updated server.ts fetch options');

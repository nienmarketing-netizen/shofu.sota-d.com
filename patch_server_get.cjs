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
      });`;

const replacement = `      // Append parameters to URL and use GET method for apps script testing
      const fetchUrl = webhookUrl + '?' + bodyString;
      
      // Server-side fetch bypassing browser CORS
      const response = await fetch(fetchUrl, {
        method: 'GET',
        redirect: 'follow'
      });`;

content = content.replace(target, replacement);
fs.writeFileSync('server.ts', content);
console.log('Updated server.ts to GET');

const fs = require('fs');

let content = fs.readFileSync('server.ts', 'utf-8');

// Add event_id to req.body destructing
content = content.replace(
  /const { email, phone, formName, eventSourceUrl } = req\.body;/,
  'const { email, phone, formName, eventSourceUrl, event_id } = req.body;'
);

// Add event_id to the payload object
content = content.replace(
  /event_name: "Lead",\s+event_time: Math\.floor\(Date\.now\(\) \/ 1000\),/g,
  'event_name: "Lead",\n            event_time: Math.floor(Date.now() / 1000),\n            event_id: event_id,'
);

fs.writeFileSync('server.ts', content);
console.log('Patched server.ts');

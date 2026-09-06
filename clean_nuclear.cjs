const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf-8');
html = html.replace(/<!-- NUCLEAR CURSOR FIX -->[\s\S]*?<\/script>/, '');
fs.writeFileSync('index.html', html);

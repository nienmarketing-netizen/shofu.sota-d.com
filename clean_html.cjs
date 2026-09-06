const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf-8');
html = html.replace(/<style id="force-cursor-style">[\s\S]*?<\/style>/, '');
fs.writeFileSync('index.html', html);

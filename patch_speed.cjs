const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', 'utf8');

content = content.replace(/animation: marquee-left 40s linear infinite;/g, 'animation: marquee-left 57s linear infinite;');
content = content.replace(/animation: marquee-right 40s linear infinite;/g, 'animation: marquee-right 57s linear infinite;');

fs.writeFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', content);
console.log("Speed updated");

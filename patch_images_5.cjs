const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/ShofuOffers.tsx', 'utf-8');
console.log(content.substring(content.indexOf('bg-slate-800')-50, content.indexOf('bg-slate-800')+100));

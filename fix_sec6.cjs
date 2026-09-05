const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/DirectRestoration.tsx', 'utf-8');

const oldS = '<section className="py-20 lg:py-28 bg-slate-200 bg-grid-pattern relative border-t border-slate-300 overflow-hidden">';
const newS = '<section className="py-20 lg:py-28 bg-slate-50 bg-grid-pattern relative border-t border-slate-200 overflow-hidden">';

content = content.replace(oldS, newS);
fs.writeFileSync('src/components/shofu/solutions/DirectRestoration.tsx', content);

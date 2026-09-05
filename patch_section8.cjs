const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', 'utf8');

content = content.replace('<section className="py-20 lg:py-28 bg-white relative">', '<section className="py-20 lg:py-28 bg-slate-50 bg-grid-pattern relative border-t border-slate-200">');

fs.writeFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', content);
console.log("Section 8 background updated");

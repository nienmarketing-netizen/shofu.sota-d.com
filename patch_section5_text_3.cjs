const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', 'utf8');

content = content.replace('<p className="text-slate-400 text-lg leading-relaxed">\n                  Bác sĩ nay chỉ cần thực hiện', '<p className="text-slate-400 text-sm sm:text-base leading-relaxed">\n                  Bác sĩ nay chỉ cần thực hiện');

fs.writeFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', content);
console.log("Text sizes updated");

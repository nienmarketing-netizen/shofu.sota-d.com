const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', 'utf8');

content = content.replace('<p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">Để thấu hiểu', '<p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">Để thấu hiểu');

fs.writeFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', content);
console.log("Text sizes updated");

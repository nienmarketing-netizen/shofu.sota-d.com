const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', 'utf8');

const s1 = `<span className="text-sm font-bold text-slate-800 leading-tight">96% Phục hình sạch</span>`;
const r1 = `<span className="text-sm font-bold text-slate-800 leading-tight">96% tỉ lệ lưu giữ</span>`;

const s2 = `<span className="text-sm text-slate-600 leading-tight">Sâu răng thứ phát</span>`;
const r2 = `<span className="text-sm font-bold text-slate-800 leading-tight">0% sâu răng thứ phát</span>`;

content = content.replace(s1, r1);
content = content.replace(s2, r2);

fs.writeFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', content);

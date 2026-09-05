const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', 'utf8');

const target1 = `<div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-500 shrink-0" />
                  <h4 className="font-heading font-bold text-sm md:text-lg text-slate-900">Sự thật "đắt đỏ" của vòi trộn Automix</h4>
                </div>`;
const replacement1 = `<div className="inline-flex items-center gap-2 mb-4 bg-red-500/10 border border-red-500/20 px-3 py-2 rounded-xl">
                  <AlertTriangle className="w-5 h-5 text-red-600 shrink-0" />
                  <h4 className="font-heading font-bold text-sm md:text-base text-red-800">Sự thật "đắt đỏ" của vòi trộn Automix</h4>
                </div>`;

const target2 = `<div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-6 h-6 text-[#00ADEF] shrink-0" />
                  <h4 className="font-heading font-bold text-sm md:text-lg text-slate-900">Tối ưu lợi nhuận với BeautiLink SA</h4>
                </div>`;
const replacement2 = `<div className="inline-flex items-center gap-2 mb-4 bg-[#00ADEF]/10 border border-[#00ADEF]/20 px-3 py-2 rounded-xl">
                  <TrendingUp className="w-5 h-5 text-[#00ADEF] shrink-0" />
                  <h4 className="font-heading font-bold text-sm md:text-base text-sky-800">Tối ưu lợi nhuận với BeautiLink SA</h4>
                </div>`;

if (content.includes(target1) && content.includes(target2)) {
    content = content.replace(target1, replacement1);
    content = content.replace(target2, replacement2);
    fs.writeFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', content);
    console.log("Success");
} else {
    console.log("Failed to find targets");
}

const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/DirectRestoration.tsx', 'utf-8');

const oldS = '<span className="text-[#fb2c36] font-mono text-sm font-bold uppercase tracking-wider mb-3 block">Góc Khuất Lâm Sàng</span>\n            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-slate-900 leading-[1.3] mb-4 tracking-tight">Trám răng xoang II sâu dưới nướu luôn là "cơn ác mộng" âm thầm</h2>';

const newS = '<div className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 font-bold text-[10px] min-[375px]:text-[11px] sm:text-xs md:text-sm tracking-wide mb-6 whitespace-nowrap">\n              <AlertTriangle className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />\n              <span>GÓC KHUẤT LÂM SÀNG</span>\n            </div>\n            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-slate-900 leading-[1.3] mb-4 tracking-tight">Trám răng xoang II sâu dưới nướu luôn là <br className="hidden md:block" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-600">"cơn ác mộng" âm thầm</span></h2>';

content = content.replace(oldS, newS);
fs.writeFileSync('src/components/shofu/solutions/DirectRestoration.tsx', content);

const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', 'utf8');

const targetStr = `<div className="flex items-center gap-3 md:gap-4 bg-slate-50 rounded-xl p-4 md:p-5 border border-slate-100 mt-auto">
                <div className="flex-1 text-center">
                  <div className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Phòng khám trả cho</div>
                  <div className="text-2xl md:text-3xl font-black text-[#00ADEF]">100%</div>
                  <div className="text-[10px] text-slate-400 uppercase mt-1 tracking-wider">Tuýp vật liệu</div>
                </div>
                <div className="text-slate-300 shrink-0 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
                <div className="flex-1 text-center">
                  <div className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Nhưng chỉ dùng</div>
                  <div className="text-2xl md:text-3xl font-black text-amber-500">{"< 50%"}</div>
                  <div className="text-[10px] text-slate-400 uppercase mt-1 tracking-wider">Thực tế</div>
                </div>
              </div>`;

const replacementStr = `<div className="flex justify-center mt-auto">
                <img 
                  src="https://raw.githubusercontent.com/nienmarketing-netizen/shofu.sota-d.com/main/public/images/voi-tron-automix-lang-phi-vat-lieu.webp" 
                  alt="Lãng phí vật liệu khi dùng vòi trộn Automix" 
                  className="w-full h-auto object-contain rounded-xl drop-shadow-sm border border-slate-200"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>`;

if (content.includes(targetStr)) {
    content = content.replace(targetStr, replacementStr);
    fs.writeFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', content);
    console.log("Replaced block with image");
} else {
    console.log("Target string not found");
}

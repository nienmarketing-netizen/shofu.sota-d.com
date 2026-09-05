const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', 'utf8');

const targetStr = `{/* Floating Badges */}
            <div className="mt-8 grid gap-4">
              <div className="bg-white p-4 rounded-2xl shadow-[0_8px_30px_-4px_rgba(0,0,0,0.06)] border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-[#00ADEF]"></div>
                <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-2 pl-3">JADA 8 Năm</div>
                <div className="flex flex-col gap-2 pl-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00ADEF] shrink-0 mt-0.5" />
                    <span className="text-sm font-bold text-slate-800 leading-tight">100% Tỷ lệ lưu giữ</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00ADEF] shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-600 leading-tight">0% Ê buốt / Sâu thứ phát</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-2xl shadow-[0_8px_30px_-4px_rgba(0,0,0,0.06)] border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-amber-500"></div>
                <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-2 pl-3">JADA 13 Năm</div>
                <div className="flex flex-col gap-2 pl-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-sm font-bold text-slate-800 leading-tight">96% tỉ lệ lưu giữ</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-sm font-bold text-slate-800 leading-tight">0% sâu răng thứ phát</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl shadow-[0_8px_30px_-4px_rgba(0,0,0,0.06)] border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-500"></div>
                <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-2 pl-3">Nature Research</div>
                <div className="flex flex-col gap-2 pl-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-sm font-bold text-slate-800 leading-tight">Ức chế gen pdh operon</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-600 leading-tight">Triệt tiêu Biofilm</span>
                  </div>
                </div>
              </div>
            </div>`;

const replacementStr = `{/* S-PRG Image */}
            <div className="mt-8 flex justify-center">
              <img 
                src="https://raw.githubusercontent.com/nienmarketing-netizen/shofu.sota-d.com/main/public/images/S-PRG-triet-tieu-e-buot.webp?v=${Date.now()}" 
                alt="S-PRG Triệt tiêu ê buốt" 
                className="w-full h-auto object-contain"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>`;

if (content.includes(targetStr)) {
    content = content.replace(targetStr, replacementStr);
    fs.writeFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', content);
    console.log("Successfully replaced badges with S-PRG image");
} else {
    console.log("Target string not found in IndirectRestoration.tsx");
}

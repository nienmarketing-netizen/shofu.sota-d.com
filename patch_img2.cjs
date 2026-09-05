const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', 'utf8');

const targetStr = `<div className="grid grid-cols-2 gap-4 mt-auto">
                {/* Automix */}
                <div className="bg-slate-50 rounded-xl p-4 md:p-5 border border-slate-100 text-center flex flex-col justify-center">
                  <div className="text-[10px] md:text-xs text-slate-500 font-bold uppercase mb-4 tracking-wider">Automix (8.6g)</div>
                  <div className="space-y-4">
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase mb-1 tracking-wider">Số ca thực tế</div>
                      <div className="text-xl font-bold text-slate-800">22 <span className="text-xs font-normal text-slate-500">ca</span></div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase mb-1 tracking-wider">Chi phí / Ca</div>
                      <div className="text-lg font-bold text-red-500">159.000đ</div>
                    </div>
                  </div>
                </div>

                {/* Handmix */}
                <div className="bg-[#00ADEF]/5 rounded-xl p-4 md:p-5 border border-[#00ADEF]/20 text-center relative overflow-hidden flex flex-col justify-center">
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#00ADEF]"></div>
                  <div className="text-[10px] md:text-xs text-[#00ADEF] font-bold uppercase mb-4 tracking-wider">BeautiLink SA Handmix (15.6g)</div>
                  <div className="space-y-4">
                    <div>
                      <div className="text-[10px] text-slate-500 uppercase mb-1 tracking-wider">Số ca thực tế</div>
                      <div className="text-xl font-black text-slate-900">120 <span className="text-xs font-normal text-slate-500">ca</span></div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500 uppercase mb-1 tracking-wider">Chi phí / Ca</div>
                      <div className="text-lg font-black text-amber-600">26.600đ</div>
                    </div>
                  </div>
                </div>
              </div>`;

const replacementStr = `<div className="flex justify-center mt-auto">
                <img 
                  src="https://raw.githubusercontent.com/nienmarketing-netizen/shofu.sota-d.com/main/public/images/tiet-kiem-800tr-voi-beautilink-SA.webp?v=${Date.now()}" 
                  alt="Tiết kiệm chi phí với BeautiLink SA" 
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>`;

if (content.includes(targetStr)) {
    content = content.replace(targetStr, replacementStr);
    fs.writeFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', content);
    console.log("Successfully replaced block with image!");
} else {
    console.log("Target string not found.");
}

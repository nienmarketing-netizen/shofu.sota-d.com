import fs from 'fs';

let content = fs.readFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', 'utf8');

const targetContent = `          <div className="w-full lg:w-[40%] relative">
            {/* Visual Halo Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00ADEF]/20 to-[#C43838]/20 blur-3xl rounded-full scale-110 z-0 animate-pulse"></div>
            
            <div className="relative z-10 grid grid-cols-2 gap-4 items-center">
              <div className="space-y-4">
                <img src="https://cdn.jsdelivr.net/gh/nienmarketing-netizen/sota-d@03c66c4af6e28e2a69254e4d674c5a45ab53e988/beautibond-xtreme.png" alt="BeautiBond Xtreme" className="w-full rounded-2xl bg-white shadow-lg p-4 mix-blend-multiply border border-slate-100" />
                <div className="bg-white/80 backdrop-blur-sm border border-slate-100 p-3 rounded-xl text-center shadow-sm">
                  <span className="block text-[#00ADEF] font-bold text-xs uppercase tracking-widest">Pretreatment</span>
                  <span className="font-heading font-black text-sm text-slate-900">BeautiBond Xtreme</span>
                </div>
              </div>
              <div className="space-y-4 -mt-12">
                <img src="https://cdn.jsdelivr.net/gh/nienmarketing-netizen/sota-d@03c66c4af6e28e2a69254e4d674c5a45ab53e988/BeautilinkSA.png" alt="BeautiLink SA" className="w-full rounded-2xl bg-white shadow-lg p-4 mix-blend-multiply border border-slate-100" />
                <div className="bg-white/80 backdrop-blur-sm border border-slate-100 p-3 rounded-xl text-center shadow-sm">
                  <span className="block text-[#C43838] font-bold text-xs uppercase tracking-widest">Luting Cement</span>
                  <span className="font-heading font-black text-sm text-slate-900">BeautiLink SA</span>
                </div>
              </div>
            </div>
          </div>`;

const replacement = `          <div className="w-full lg:w-[40%] relative flex justify-center">
            {/* Lớp Hào quang sinh học tỏa sáng */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#00ADEF]/30 to-[#C43838]/30 blur-[80px] rounded-full z-0 animate-pulse"></div>
            
            {/* Bức ảnh PNG tách nền duy nhất */}
            <img 
              referrerPolicy="no-referrer"
              src="https://raw.githubusercontent.com/nienmarketing-netizen/shofu.sota-d.com/main/public/images/BeautilinkSA%26BeautiBondXtreme.png" 
              alt="Bộ đôi BBX và BeautiLink SA" 
              className="w-full max-w-[550px] h-auto object-contain relative z-10 hover:scale-105 transition-transform duration-700 drop-shadow-2xl" 
            />
          </div>`;

content = content.replace(targetContent, replacement);
fs.writeFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', content);
console.log('Replaced successfully');

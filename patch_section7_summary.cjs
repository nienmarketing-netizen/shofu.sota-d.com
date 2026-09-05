const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', 'utf8');

const targetStr = `              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">`;

const replacementStr = `              </div>

              <div className="bg-slate-800/50 rounded-2xl p-6 md:p-8 border border-slate-700/50 mb-10 w-full flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-[50px] rounded-full pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-sky-500/10 blur-[50px] rounded-full pointer-events-none"></div>
                
                <div className="text-center md:text-left relative z-10">
                  <p className="text-slate-400 text-sm font-medium mb-1 uppercase tracking-wider">Tổng giá trị</p>
                  <div className="flex items-baseline justify-center md:justify-start gap-2">
                    <p className="text-slate-400 text-2xl md:text-3xl font-bold line-through decoration-red-500/50 decoration-2">5.915.000đ</p>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">(Combo 3.415.000đ + Quà tặng 2.500.000đ)</p>
                </div>
                
                <div className="hidden md:block w-px h-16 bg-slate-700 relative z-10"></div>
                <div className="block md:hidden w-full h-px bg-slate-700 relative z-10"></div>
                
                <div className="text-center md:text-right relative z-10">
                  <p className="text-amber-400 text-sm font-medium mb-1 uppercase tracking-wider">Mức đầu tư ưu đãi</p>
                  <p className="font-heading font-extrabold text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200">3.415.000đ</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">`;

if (content.includes(targetStr)) {
    content = content.replace(targetStr, replacementStr);
    fs.writeFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', content);
    console.log("Summary box added");
} else {
    console.log("Target not found");
}

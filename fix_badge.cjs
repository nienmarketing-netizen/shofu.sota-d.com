const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/DirectRestoration.tsx', 'utf-8');

const oldBadge = `<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 border border-sky-200 backdrop-blur-sm mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 text-[#00ADEF]" />
              <span className="font-mono text-xs font-bold text-sky-800 uppercase tracking-wider">Giải Pháp Phục Hình Trực Tiếp MiCD</span>
            </div>`;

const newBadge = `<div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#00ADEF]/10 border border-[#00ADEF]/20 mb-6 max-w-full overflow-hidden relative">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#00ADEF] animate-pulse shrink-0 relative z-10 shadow-[0_0_4px_rgba(0,173,239,0.8)]"></div>
              <div className="flex overflow-hidden relative w-full [mask-image:linear-gradient(to_right,transparent,black_10px,black_90%,transparent)] sm:[mask-image:none]">
                <div className="font-mono text-[10.5px] min-[375px]:text-[11.5px] sm:text-xs font-bold text-[#00ADEF] tracking-tight sm:tracking-wide whitespace-nowrap flex animate-marquee sm:!animate-none sm:!transform-none w-max">
                  <span className="pr-8 sm:pr-0">Giải pháp phục hình trực tiếp MiCD</span>
                  <span className="pr-8 sm:hidden">Giải pháp phục hình trực tiếp MiCD</span>
                </div>
              </div>
            </div>`;

content = content.replace(oldBadge, newBadge);

fs.writeFileSync('src/components/shofu/solutions/DirectRestoration.tsx', content);

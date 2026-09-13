const fs = require('fs');

let file_path = "/app/applet/src/components/shofu/solutions/DirectRestoration.tsx";
let content = fs.readFileSync(file_path, 'utf8');

const targetTop = `<section className="py-20 lg:py-28 bg-white relative border-t border-slate-200 overflow-hidden">
        <div className="w-[90%] lg:w-[80%] mx-auto relative z-10 mb-12">`;

const replacementTop = `<section className="py-20 lg:py-28 bg-white relative border-t border-slate-200 overflow-hidden">
        <style dangerouslySetInnerHTML={{__html: \`
          @keyframes marquee-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes marquee-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-marquee-left {
            animation: marquee-left 57s linear infinite;
          }
          .animate-marquee-right {
            animation: marquee-right 57s linear infinite;
          }
          .animate-marquee-left:hover, .animate-marquee-right:hover {
            animation-play-state: paused;
          }
        \`}} />
        <div className="w-[90%] lg:w-[80%] mx-auto relative z-10 mb-12">`;

const targetBottom = `              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: FAQ */}`;

const replacementBottom = `              </div>
            </div>
          </div>
        </div>
        
        <div className="w-[90%] lg:w-[80%] mx-auto relative z-10 mt-12 md:mt-16 text-center">
          <button 
              onClick={() => openCampaignModal("Gia nhập cộng đồng MiCD - Giải pháp Trám Composite Trực Tiếp")}
            className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#00ADEF] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-[10.5px] min-[375px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-sky-500 hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap flex-nowrap"
          >
            <Gift className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0" />
            <span className="truncate">Gia nhập cộng đồng MiCD</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </button>
        </div>
      </section>

      {/* SECTION 6: FAQ */}`;

content = content.replace(targetTop, replacementTop);
content = content.replace(targetBottom, replacementBottom);

fs.writeFileSync(file_path, content);
console.log("Patched section 5.5");

const fs = require('fs');

let file_path = "/app/applet/src/components/shofu/solutions/DirectRestoration.tsx";
let content = fs.readFileSync(file_path, 'utf8');

// Replace end of Section 5
const target5 = /<ImagePlaceholder[\s\S]*?className="aspect-\[21\/9\] w-full bg-slate-800 border-slate-700"[\s\S]*?text="Mockup tài liệu góc chụp bài báo cáo lâm sàng chính thức từ Đại học Florida đăng trên JADA, kết hợp biểu đồ hình tròn hiển thị nổi bật hai con số 100% và 96% bằng màu Cyan thương hiệu cực kỳ bắt mắt."[\s\S]*?\/>\s*<\/div>\s*<\/div>\s*<\/section>/;

const replacement5 = `<ImagePlaceholder 
              className="aspect-[21/9] w-full bg-slate-800 border-slate-700" 
              text="Mockup tài liệu góc chụp bài báo cáo lâm sàng chính thức từ Đại học Florida đăng trên JADA, kết hợp biểu đồ hình tròn hiển thị nổi bật hai con số 100% và 96% bằng màu Cyan thương hiệu cực kỳ bắt mắt." 
            />
          </div>
          
          <div className="flex justify-center mt-12 w-full">
            <CtaButton ctaName="TaiBaoCaoLamSang" 
               onClick={() => openCampaignModal("Tải Full báo cáo lâm sàng 13 năm Đại Học Florida")}
              className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#00ADEF] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-[10.5px] min-[375px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-sky-500 hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap flex-nowrap"
            >
              <span className="truncate">TẢI FULL BÁO CÁO LÂM SÀNG 13 NĂM</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </CtaButton>
          </div>

        </div>
      </section>`;

// Replace end of Section 6
const target6 = /isOpen=\{openFaqIndex === idx\}\s*onClick=\{\(\) => setOpenFaqIndex\(openFaqIndex === idx \? -1 : idx\)\}\s*\/>\s*\)\)\}\s*<\/div>\s*<\/div>\s*<\/section>/;

const replacement6 = `isOpen={openFaqIndex === idx}
                 onClick={() => setOpenFaqIndex(openFaqIndex === idx ? -1 : idx)}
              />
            ))}
          </div>
          
          <div className="flex justify-center mt-12 w-full">
            <CtaButton ctaName="GiaiDapThacMac" 
               onClick={() => openCampaignModal("Gửi câu hỏi thắc mắc chuyên sâu & Nhận tư vấn 1:1")}
              className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-slate-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-[10.5px] min-[375px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-slate-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap flex-nowrap"
            >
              <span className="truncate">GỬI THẮC MẮC CHUYÊN SÂU & NHẬN TƯ VẤN 1:1</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </CtaButton>
          </div>

        </div>
      </section>`;

content = content.replace(target5, replacement5);
content = content.replace(target6, replacement6);

fs.writeFileSync(file_path, content);
console.log("Patched Missing CTAs");

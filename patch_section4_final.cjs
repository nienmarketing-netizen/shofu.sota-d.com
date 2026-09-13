const fs = require('fs');

let file_path = "/app/applet/src/components/shofu/solutions/DirectRestoration.tsx";
let content = fs.readFileSync(file_path, 'utf8');

const targetSection = `<section className="py-20 lg:py-28 bg-slate-100 bg-grid-pattern relative overflow-hidden border-t border-slate-200">
        <div className="w-[90%] lg:w-[80%] mx-auto relative z-10 flex flex-col lg:flex-row gap-0 lg:gap-12 items-center lg:items-start">
          <div className="w-full lg:w-1/2 contents lg:block">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-slate-900 leading-[1.3] mb-2 lg:mb-4 tracking-tight order-1 lg:order-none w-full text-center lg:text-left">
              Công nghệ hạt độn sinh học S-PRG – <span className="text-[#00ADEF] block sm:inline mt-1 sm:mt-0">"Bình ắc quy" ion bảo vệ chủ động</span>
            </h2>
            <p className="font-body text-base sm:text-lg text-slate-600 leading-relaxed mb-8 order-3 lg:order-none w-full text-center lg:text-left">
              Điểm cốt lõi làm nên <strong className="text-slate-900 font-bold">sức mạnh trị liệu vượt trội</strong> của hệ sinh thái Giomer là <strong className="text-[#00ADEF] font-bold">hạt độn sinh học S-PRG độc quyền</strong> của Shofu. <strong className="text-slate-900 font-bold">Cấu trúc hạt độn 3 lớp</strong> gồm lõi thủy tinh đa chức năng đã phản ứng trước, hoạt động như một "bình ắc quy sinh học" liên tục <strong className="text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">giải phóng và tự sạc lại 6 loại ion sinh học</strong> giúp <span className="text-slate-900 font-bold border-b-2 border-sky-300">tái khoáng hóa ngà răng</span> và <span className="text-slate-900 font-bold border-b-2 border-red-300">chống mảng bám vĩnh cửu</span>.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 order-4 lg:order-none w-full">
              <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col gap-3">
                <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-[#00ADEF]" />
                </div>
                <h4 className="font-heading font-bold text-slate-900 text-[15px]">Cơ chế sạc và nhả Fluoride (F<sup>-</sup>) vĩnh cửu</h4>
                <p className="text-sm text-slate-600 font-body leading-relaxed">Phóng thích ion bảo vệ và tự sạc lại Fluoride ngoại sinh mỗi khi bệnh nhân đánh răng để tái khoáng hóa mô ngà răng thật.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col gap-3">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-red-500" />
                </div>
                <h4 className="font-heading font-bold text-slate-900 text-[15px]">Kháng khuẩn ở cấp độ phân tử</h4>
                <p className="text-sm text-slate-600 font-body leading-relaxed">Ion Borate ức chế trực tiếp gen của S. mutans, triệt tiêu khả năng bám dính tạo mảng sinh học (Nghiên cứu Nature 2018).</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
                  <Droplets className="w-5 h-5 text-emerald-500" />
                </div>
                <h4 className="font-heading font-bold text-slate-900 text-[15px]">Trung hòa Axit chủ động</h4>
                <p className="text-sm text-slate-600 font-body leading-relaxed">Phóng thích ion để kiềm hóa môi trường quanh phục hồi khi pH &lt; 5.5, chặn đứng khử khoáng men ngà.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center">
                  <Award className="w-5 h-5 text-amber-500" />
                </div>
                <h4 className="font-heading font-bold text-slate-900 text-[15px]">Bảo vệ bờ viền phục hình</h4>
                <p className="text-sm text-slate-600 font-body leading-relaxed">Kháng mảng bám sinh học giúp giữ vùng nướu quanh đường hoàn tất luôn hồng hào, săn chắc dài lâu.</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-2 lg:order-none my-6 lg:my-0 w-full">
             <img 
              src="/image/Shofu-S-PRG-technology.webp"
              alt="Công nghệ hạt độn sinh học S-PRG"
              className="w-full max-w-[500px] h-auto object-contain block lg:pt-2" 
              loading="lazy"
             />
          </div>
        </div>
      </section>`;

const replacementSection = `<section className="py-20 lg:py-28 bg-slate-100 bg-grid-pattern relative overflow-hidden border-t border-slate-200">
        <div className="w-[90%] lg:w-[80%] mx-auto relative z-10 flex flex-col gap-0 lg:gap-12">
          
          {/* Top Row: Text + Image */}
          <div className="contents lg:flex lg:flex-row lg:gap-12 lg:items-start w-full">
            <div className="w-full lg:w-1/2 contents lg:block">
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-slate-900 leading-[1.3] mb-2 lg:mb-4 tracking-tight order-1 lg:order-none w-full text-center lg:text-left">
                Công nghệ hạt độn sinh học S-PRG – <span className="text-[#00ADEF] block sm:inline mt-1 sm:mt-0">"Bình ắc quy" ion bảo vệ chủ động</span>
              </h2>
              <p className="font-body text-base sm:text-lg text-slate-600 leading-relaxed mb-8 lg:mb-0 order-3 lg:order-none w-full text-center lg:text-left">
                Điểm cốt lõi làm nên <strong className="text-slate-900 font-bold">sức mạnh trị liệu vượt trội</strong> của hệ sinh thái Giomer là <strong className="text-[#00ADEF] font-bold">hạt độn sinh học S-PRG độc quyền</strong> của Shofu. <strong className="text-slate-900 font-bold">Cấu trúc hạt độn 3 lớp</strong> gồm lõi thủy tinh đa chức năng đã phản ứng trước, hoạt động như một "bình ắc quy sinh học" liên tục <strong className="text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">giải phóng và tự sạc lại 6 loại ion sinh học</strong> giúp <span className="text-slate-900 font-bold border-b-2 border-sky-300">tái khoáng hóa ngà răng</span> và <span className="text-slate-900 font-bold border-b-2 border-red-300">chống mảng bám vĩnh cửu</span>.
              </p>
            </div>
            
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-2 lg:order-none my-6 lg:my-0">
               <img 
                src="/image/Shofu-S-PRG-technology.webp"
                alt="Công nghệ hạt độn sinh học S-PRG"
                className="w-full max-w-[500px] h-auto object-contain block lg:pt-2" 
                loading="lazy"
               />
            </div>
          </div>

          {/* Bottom Row: 4 USPs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 order-4 lg:order-none w-full mt-2 lg:mt-0">
            <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#00ADEF]" />
              </div>
              <h4 className="font-heading font-bold text-slate-900 text-[15px]">Cơ chế sạc và nhả Fluoride (F<sup>-</sup>) vĩnh cửu</h4>
              <p className="text-sm text-slate-600 font-body leading-relaxed">Phóng thích ion bảo vệ và tự sạc lại Fluoride ngoại sinh mỗi khi bệnh nhân đánh răng để tái khoáng hóa mô ngà răng thật.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-red-500" />
              </div>
              <h4 className="font-heading font-bold text-slate-900 text-[15px]">Kháng khuẩn ở cấp độ phân tử</h4>
              <p className="text-sm text-slate-600 font-body leading-relaxed">Ion Borate ức chế trực tiếp gen của S. mutans, triệt tiêu khả năng bám dính tạo mảng sinh học (Nghiên cứu Nature 2018).</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
                <Droplets className="w-5 h-5 text-emerald-500" />
              </div>
              <h4 className="font-heading font-bold text-slate-900 text-[15px]">Trung hòa Axit chủ động</h4>
              <p className="text-sm text-slate-600 font-body leading-relaxed">Phóng thích ion để kiềm hóa môi trường quanh phục hồi khi pH &lt; 5.5, chặn đứng khử khoáng men ngà.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center">
                <Award className="w-5 h-5 text-amber-500" />
              </div>
              <h4 className="font-heading font-bold text-slate-900 text-[15px]">Bảo vệ bờ viền phục hình</h4>
              <p className="text-sm text-slate-600 font-body leading-relaxed">Kháng mảng bám sinh học giúp giữ vùng nướu quanh đường hoàn tất luôn hồng hào, săn chắc dài lâu.</p>
            </div>
          </div>
        </div>
      </section>`;

content = content.replace(targetSection, replacementSection);

fs.writeFileSync(file_path, content);
console.log("Patched Section 4 layout PC USPs");

const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', 'utf8');

const targetStart = '<div className="text-white text-center relative overflow-hidden">';
const targetEnd = '              <ShieldCheck className="w-4 h-4 text-emerald-400" /> Cam kết hoàn tiền 100% trong 30 ngày nếu xảy ra ê buốt do vật liệu.\n            </p>';

let startIndex = content.indexOf(targetStart);
let endIndex = content.indexOf(targetEnd);

if (startIndex !== -1 && endIndex !== -1) {
  const replacement = `<div className="text-white text-left relative overflow-hidden">
          
          
          <div className="relative z-10 w-full flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            
            {/* Left Column (70%) */}
            <div className="w-full lg:w-[65%] xl:w-[70%]">
              <span className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-amber-500/20 border border-amber-500/30 mb-6 max-w-full overflow-hidden font-mono text-[9px] min-[375px]:text-[10px] sm:text-xs font-bold text-amber-400 tracking-tight sm:tracking-wide">
                Đặc quyền đồng hành không thể từ chối
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-white leading-[1.3] mb-10 tracking-tight">
                Gói giải pháp đồng bộ <br className="hidden sm:block" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200">"Giomer không ê buốt"</span> – An tâm lâm sàng
              </h2>
              
              <div className="bg-slate-800/80 rounded-2xl p-6 md:p-8 border border-slate-700 mb-8 text-left">
                <h3 className="font-heading font-bold text-xl md:text-2xl text-amber-400 mb-4 border-b border-slate-700 pb-4">Combo dán - gắn đồng bộ trị giá 3.415.000đ</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span className="text-slate-300">01 Lọ Keo dán Universal BeautiBond Xtreme (5ml)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span className="text-slate-300">01 Ống Xi măng BeautiLink SA Handmix (15.6g) khổng lồ</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-2xl p-6 md:p-8 border border-amber-500/30 mb-10 text-left">
                <h3 className="font-heading font-bold text-xl md:text-2xl text-white mb-4 border-b border-amber-500/30 pb-4 flex items-center gap-2">
                  <Gift className="w-6 h-6 text-amber-400" /> Bộ quà tặng đặc quyền (Trị giá 2.500.000đ)
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1"><Gift className="w-4 h-4 text-amber-400" /></div>
                    <p className="text-slate-300"><strong className="text-white">Quà tặng vật lý:</strong> 01 Lọ BBX Trial (2ml) để trải nghiệm thực tế ngay tại phòng khám trước khi khui lọ chính.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1"><Gift className="w-4 h-4 text-amber-400" /></div>
                    <p className="text-slate-300"><strong className="text-white">Tài liệu số chuyên sâu:</strong> Sổ tay E-Guide "Khoảng Xi Măng Ghép Lâm Sàng & Quy Trình Xử Lý Bề Mặt Sứ".</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1"><Gift className="w-4 h-4 text-amber-400" /></div>
                    <p className="text-slate-300"><strong className="text-white">Đặc quyền đào tạo:</strong> Vé tham gia Group Học Thuật Kín gỡ rối ca lâm sàng trực tiếp qua Zalo 1:1.</p>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center sm:justify-start">
                <button 
                  onClick={openOffer}
                  className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#00ADEF] text-white px-3 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-[10.5px] min-[375px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-white hover:text-slate-900 hover:shadow-xl hover:shadow-white/20 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap flex-nowrap"
                >
                  <span className="truncate">ĐĂNG KÝ "GIOMER KHÔNG Ê BUỐT" - NHẬN QUÀ 2.5TR!</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </button>
              </div>
              
              <p className="mt-6 text-sm text-slate-400 flex items-center justify-center sm:justify-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Cam kết hoàn tiền 100% trong 30 ngày nếu xảy ra ê buốt do vật liệu.
              </p>
            </div>
            
            {/* Right Column (30%) - Image */}
            <div className="w-full lg:w-[35%] xl:w-[30%] relative flex justify-center items-center">
              <img 
                src="https://raw.githubusercontent.com/nienmarketing-netizen/shofu.sota-d.com/main/public/images/beautilink-bbx.png" 
                alt="Combo BeautiLink SA và BeautiBond Xtreme" 
                className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[400px] h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 rounded-2xl" 
                referrerPolicy="no-referrer"
              />
            </div>`;
  
  let endBlock = content.substring(endIndex + targetEnd.length);
  content = content.substring(0, startIndex) + replacement + endBlock;
  fs.writeFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', content);
  console.log("Updated layout successfully");
} else {
  console.log("Could not find targets");
}

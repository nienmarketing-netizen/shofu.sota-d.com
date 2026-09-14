import React, { useState } from 'react';
import { Gift, CheckCircle2, ArrowRight, ShieldCheck, Zap, Layers, Beaker, ChevronDown, Sparkles, AlertTriangle, ShieldAlert, Syringe, Shield, Star, Award, Microscope, Droplets, Target, Quote, XCircle } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { CampaignModal } from '../../CampaignModal';
import { CtaButton } from '../../ui/CtaButton';

const ImagePlaceholder = ({ className, text }: { className?: string; text: string }) => (
  <div className={`flex items-center justify-center p-4 text-center ${className}`}>
    <span className="text-slate-400 text-sm">{text}</span>
  </div>
);

export function PreventiveDentistry() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Lớp phủ PRG Barrier Coat mỏng 15µm có dễ bị chải răng làm trôi không? Tác dụng kéo dài bao lâu?",
      answer: "PRG Barrier Coat chứa monomer tự dán dính kỵ nước, bám chặt vào ngà răng và chịu được tác động cơ học chải răng hàng ngày. Tác dụng giải phóng ion chống ê buốt và kháng khuẩn duy trì kéo dài từ 3 đến 6 tháng cho 1 lần bôi."
    },
    {
      question: "BeautiSealant không Etching bằng Axit Phosphoric thì lực dán dính có đảm bảo không bị sút màng Sealant?",
      answer: "Hoàn toàn đảm bảo. BeautiSealant sử dụng Self-Etch Primer chứa monomer chức năng MDP dịu nhẹ, tạo liên kết vi cơ học và hóa học bền vững với men răng mà không làm phá hủy men răng trẻ em, đồng thời loại bỏ rào cản nhạy cảm kỹ thuật do độ ẩm."
    },
    {
      question: "Sản phẩm có chứa HEMA hay gây kích ứng mô nướu trẻ em không?",
      answer: "Toàn bộ dòng sản phẩm phòng ngừa của Shofu (PRG Barrier Coat & BeautiSealant) đều 100% HEMA-Free, Acetone-Free, Alcohol-Free, vô cùng êm dịu, không gây bỏng rát mô nướu và an toàn tuyệt đối cho trẻ nhỏ cũng như bệnh nhân lớn tuổi."
    },
    {
      question: "Hạt độn S-PRG giải phóng ion liên tục thì màng phủ có bị xốp hay đục màu theo thời gian không?",
      answer: "Không. Cấu trúc S-PRG được bọc trong màng biến tính bề mặt bền vững, các ion khuếch tán qua mạng lưới vi mô mà không làm phá hủy cấu trúc khung polyme, giúp màng phủ giữ độ trong suốt và nhẵn mịn vĩnh cửu."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-[#00ADEF]/20 selection:text-[#00ADEF]">
      
      {/* SECTION 1: HERO */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-900 border-b border-slate-800">
        <div className="absolute inset-0 bg-grid-pattern-light opacity-50 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-900 via-transparent to-slate-900 pointer-events-none"></div>
        <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-amber-500/10 blur-[120px] pointer-events-none"></div>
        
        <div className="w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 w-full text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-4 h-4" />
              <span>✦ TRIẾT LÝ NHA KHOA PHÒNG NGỪA MiCD & TRỊ LIỆU SINH HỌC TỪ SHOFU (NHẬT BẢN) ✦</span>
            </div>
            
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.15] mb-6 tracking-tight">
              Làm Chủ Giải Pháp <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200">Nha Khoa Phòng Ngừa Chủ Động</span>
            </h1>
            
            <p className="font-body text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              Đừng chỉ chờ răng hỏng để "trám bít cơ học". Làm chủ giải pháp Nha khoa Phòng ngừa Chủ động cùng bộ đôi công nghệ <strong>PRG Barrier Coat</strong> & <strong>BeautiSealant</strong>: Triệt tiêu 100% ê buốt ngà tức thì (kéo dài đến 6 tháng), trám bít hố rãnh không cần Etching, và liên tục sạc-nhả 6 loại ion sinh học bảo vệ răng khỏi sâu thứ phát.
            </p>

            <ul className="space-y-4 mb-10 max-w-2xl mx-auto lg:mx-0 text-left">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-slate-200 text-sm sm:text-base leading-relaxed"><strong>🇯🇵 100% Made in Japan:</strong> Công nghệ hạt độn S-PRG độc quyền từ Tập đoàn Shofu.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-slate-200 text-sm sm:text-base leading-relaxed"><strong>🧪 Bằng chứng Y văn JADA & Nature 2018:</strong> Chứng minh khả năng trung hòa axit và ức chế vi khuẩn S. mutans ở cấp độ gen.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-slate-200 text-sm sm:text-base leading-relaxed"><strong>🛡️ Màng Phủ HEMA-Free 15µm:</strong> Tự dán, kỵ nước, không cồn, không Acetone, an toàn tuyệt đối cho cả trẻ em và người già.</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <CtaButton 
                onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-4 rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all group flex items-center justify-center gap-2"
              >
                ĐẶT MUA GÓI TẬP TRỰC TIẾP PHÒNG NGỪA - TRỢ GIÁ 30%
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </CtaButton>
              <CtaButton 
                onClick={() => document.getElementById('lead-magnet')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                className="bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 border border-blue-500/30 font-bold px-6 py-4 rounded-xl transition-all group flex items-center justify-center gap-2"
              >
                TẢI SỔ TAY PHÁC ĐỒ PHÒNG NGỪA MiCD (EBOOK MIỄN PHÍ)
              </CtaButton>
            </div>
          </div>
          
          <div className="w-full lg:w-[45%] relative">
             <ImagePlaceholder 
                className="aspect-[4/3] w-full rounded-2xl bg-slate-800 border border-slate-700/50 shadow-2xl relative z-10" 
                text="Hình ảnh minh hoạ hệ thống Nha khoa Phòng ngừa Shofu" 
             />
          </div>
        </div>
      </section>

      {/* SECTION 2: PAIN POINTS */}
      <section className="py-20 lg:py-28 bg-slate-900 relative overflow-hidden border-y border-slate-800 text-white">
        <div className="absolute inset-0 bg-grid-pattern-light opacity-100 pointer-events-none"></div>
        <div className="w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 font-mono text-xs sm:text-sm font-bold tracking-wider mb-6 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse shrink-0"></div>
              <span className="normal-case">Điểm mù lâm sàng</span>
            </div>
            
            <h2 className="font-heading font-extrabold text-2xl min-[375px]:text-3xl sm:text-4xl lg:text-[2.75rem] text-white leading-[1.3] mb-4 tracking-tight max-w-4xl mx-auto">
              Có phải Bác sĩ đang bế tắc trước những ca bệnh <br className="hidden md:block" />
              <span className="text-red-500">"không thể trám bít"</span> này mỗi ngày?
            </h2>

            <div className="w-24 h-1 bg-red-500 mx-auto my-6"></div>

            <p className="font-body text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Nha khoa truyền thống dạy chúng ta cách "mài và trám" khi lỗ sâu đã xuất hiện. Nhưng đối với nhóm bệnh nhân nguy cơ cao hoặc tổn thương mô răng chưa đến mức phải can thiệp xâm lấn, Bác sĩ thường rơi vào <strong className="text-white">3 điểm mù lâm sàng âm thầm đe dọa uy tín phòng khám:</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 lg:mb-16">
            {/* Card 1 */}
            <div className="relative rounded-3xl p-6 sm:p-8 md:p-10 pb-0 sm:pb-8 md:pb-10 transition-all flex flex-col justify-between">
              <div className="absolute inset-0 rounded-3xl border border-slate-700/70 bg-slate-800/50 backdrop-blur-md pointer-events-none hover:border-slate-500/70 transition-colors shadow-[0_4px_20px_-4px_rgba(0,0,0,0.3)] [mask-image:linear-gradient(to_bottom,black_0px,black_185px,transparent_240px)] [-webkit-mask-image:linear-gradient(to_bottom,black_0px,black_185px,transparent_240px)] sm:[mask-image:none] sm:[-webkit-mask-image:none]" />
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-700/50 border border-slate-600/50 flex items-center justify-center text-slate-300 shrink-0 shadow-sm">
                    <AlertTriangle className="w-6 h-6 text-slate-300" />
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-700/50 text-slate-300 border border-slate-600/50 font-mono text-xs font-bold uppercase tracking-wider">Thực tế lâm sàng</span>
                </div>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-6">3 Rào Cản Phòng Ngừa</h3>
                <div className="space-y-3 -mx-6 sm:mx-0">
                  <div className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl border border-slate-700/60 bg-slate-800/80 hover:bg-slate-800 hover:border-slate-600 transition-all">
                    <div className="w-6 h-6 rounded-full bg-slate-700 text-slate-200 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</div>
                    <div>
                      <h4 className="font-heading font-bold text-white text-sm sm:text-base">Ám ảnh ê buốt tái phát ở bệnh nhân mòn răng, tụt nướu & tẩy trắng</h4>
                      <p className="font-body text-slate-400 text-xs sm:text-sm leading-relaxed mt-0.5">Bôi các chất chống ê buốt thông thường chỉ mang tính chất "giảm đau ngọn". Sau vài ngày đến vài tuần, màng phủ bị rửa trôi, ống ngà hở trở lại khiến bệnh nhân tiếp tục than phiền vì nhạy cảm nóng lạnh.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl border border-slate-700/60 bg-slate-800/80 hover:bg-slate-800 hover:border-slate-600 transition-all">
                    <div className="w-6 h-6 rounded-full bg-slate-700 text-slate-200 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</div>
                    <div>
                      <h4 className="font-heading font-bold text-white text-sm sm:text-base">Rào cản kỹ thuật khi trám bít hố rãnh (Sealant) cho trẻ nhỏ hiếu động</h4>
                      <p className="font-body text-slate-400 text-xs sm:text-sm leading-relaxed mt-0.5">Trẻ em không thể ngồi yên để Bác sĩ thực hiện quy trình Acid Etching rửa nước – thổi khô lách cách. Chỉ một giọt nước bọt ngấm vào là toàn bộ màng Sealant bị bong tróc, tạo kẽ hở cho vi khuẩn ẩn nấp gây sâu răng bùng phát dưới lớp trám.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl border border-slate-700/60 bg-slate-800/80 hover:bg-slate-800 hover:border-slate-600 transition-all">
                    <div className="w-6 h-6 rounded-full bg-slate-700 text-slate-200 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</div>
                    <div>
                      <h4 className="font-heading font-bold text-white text-sm sm:text-base">Sự bất lực trước nhóm bệnh nhân nguy cơ sâu răng cao</h4>
                      <p className="font-body text-slate-400 text-xs sm:text-sm leading-relaxed mt-0.5">Bệnh nhân đang niềng răng (quanh mắc cài bám đầy mảng bám), răng chen chúc khó vệ sinh, đốm trắng đe dọa mất khoáng hay người già lộ chân răng... Vật liệu trám thụ động thông thường hoàn toàn "bất động", không có khả năng chống lại sự tấn công của axit vi khuẩn.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative rounded-3xl p-6 sm:p-8 md:p-10 pb-0 sm:pb-8 md:pb-10 transition-all flex flex-col justify-between overflow-hidden group">
              <div className="absolute inset-0 rounded-3xl border border-red-500/30 bg-slate-800/50 backdrop-blur-md pointer-events-none hover:border-red-500/60 transition-colors shadow-[0_4px_25px_-4px_rgba(239,68,68,0.1)] [mask-image:linear-gradient(to_bottom,black_0px,black_185px,transparent_240px)] [-webkit-mask-image:linear-gradient(to_bottom,black_0px,black_185px,transparent_240px)] sm:[mask-image:none] sm:[-webkit-mask-image:none]" />
              <div className="absolute top-0 right-0 w-52 h-52 bg-red-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-red-500/20 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0 shadow-sm">
                    <ShieldAlert className="w-6 h-6 text-red-400" />
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 font-mono text-xs font-bold uppercase tracking-wider">Căn nguyên khoa học</span>
                </div>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-6">Sự thụ động của vật liệu truyền thống</h3>
                <div className="space-y-3 -mx-6 sm:mx-0">
                  <div className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl border border-red-500/20 bg-slate-800/80 hover:border-red-500/40 transition-all shadow-sm">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">!</div>
                    <div>
                      <h4 className="font-heading font-bold text-white text-sm sm:text-base">Vật liệu hoàn toàn "bất động"</h4>
                      <p className="font-body text-slate-400 text-xs sm:text-sm leading-relaxed mt-0.5">Không có khả năng tương tác với môi trường miệng, không chống lại sự tấn công của axit do vi khuẩn tiết ra.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl border border-red-500/20 bg-slate-800/80 hover:border-red-500/40 transition-all shadow-sm">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">!</div>
                    <div>
                      <h4 className="font-heading font-bold text-white text-sm sm:text-base">Véc-ni chống ê buốt dễ bị rửa trôi</h4>
                      <p className="font-body text-slate-400 text-xs sm:text-sm leading-relaxed mt-0.5">Fluoride dạng bôi thông thường nằm thụ động trên bề mặt, bị rửa trôi nhanh chóng sau vài tuần, lộ ống ngà hở.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl border border-red-500/20 bg-slate-800/80 hover:border-red-500/40 transition-all shadow-sm">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">!</div>
                    <div>
                      <h4 className="font-heading font-bold text-white text-sm sm:text-base">Sealant nhạy cảm kỹ thuật cao</h4>
                      <p className="font-body text-slate-400 text-xs sm:text-sm leading-relaxed mt-0.5">Dễ nhiễm bẩn nước bọt, tạo vi kẽ hở cho vi khuẩn ẩn nấp, gây sâu răng bùng phát ẩn dưới lớp trám.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6 text-center max-w-4xl mx-auto">
             <h3 className="text-red-400 font-bold text-lg mb-2">🚨 KẾT LUẬN LÂM SÀNG</h3>
             <p className="text-red-200">Bác sĩ không thao tác sai, nhưng chính việc dùng <strong className="text-white">VẬT LIỆU THỤ ĐỘNG</strong> đã vô tình biến các vùng nguy cơ thành "quả bom nổ chậm" dưới nướu!</p>
          </div>
        </div>
      </section>

      {/* SECTION 3: BIOACTIVE SOLUTION */}
      <section className="py-20 lg:py-28 bg-slate-100 bg-grid-pattern relative overflow-hidden border-t border-slate-200">
        <div className="w-[90%] lg:w-[80%] mx-auto relative z-10 flex flex-col gap-0 lg:gap-12">
          
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <div className="flex-1 w-full space-y-6">
              <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-amber-100 text-amber-700 font-mono font-bold text-xs mb-2 border border-amber-200 uppercase tracking-wider">
                Triết lý MiCD
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 leading-[1.2] tracking-tight">
                Từ Phục Hình Thụ Động Đến <br />
                <span className="text-[#00ADEF]">Trị Liệu Sinh Học Chủ Động</span>
              </h2>
              <div className="w-16 h-1 bg-[#00ADEF]"></div>
              
              <p className="font-body text-slate-600 text-base sm:text-lg leading-relaxed">
                Để giải quyết tận gốc nguy cơ sâu răng và nhạy cảm ngà, vật liệu nha khoa không được phép nằm "trơ" cơ học. <strong>Vật liệu phải SỐNG và tương tác liên tục với môi trường miệng.</strong>
              </p>
              
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#00ADEF]"></div>
                <h4 className="font-heading font-bold text-slate-900 mb-2">Cốt Lõi Công Nghệ Hạt Độn Sinh Học S-PRG (Giomer) Khép Kín 3 Lớp</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Không giống như Fluoride dạng véc-ni thụ động dễ bị trôi, hạt độn S-PRG (Surface Pre-Reacted Glass-ionomer) của Shofu chứa lõi thủy tinh đa chức năng fluoro-boro-alumino-silicate, hoạt động như một <strong className="text-[#00ADEF]">"Bình ắc quy sinh học"</strong> liên tục giải phóng và tự sạc lại 6 loại ion y tế:
                </p>
              </div>
            </div>
            
            <div className="w-full lg:w-[45%] relative">
               <ImagePlaceholder 
                  className="aspect-square w-full rounded-full bg-white border-4 border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative z-10" 
                  text="Hình ảnh minh họa hạt độn S-PRG giải phóng 6 ion" 
               />
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 lg:mt-0">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-xl mb-4 border border-blue-100">F⁻</div>
              <h4 className="font-heading font-bold text-slate-900 mb-2">Fluoride & Strontium (Sr²⁺)</h4>
              <p className="text-slate-600 text-sm">Tương tác trực tiếp với Hydroxyapatite tạo thành phức hợp Strontium-Fluorapatite tái khoáng hóa ngà răng, bít kín vĩnh viễn các ống ngà hở.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center font-bold text-xl mb-4 border border-teal-100">Na⁺</div>
              <h4 className="font-heading font-bold text-slate-900 mb-2">Sodium & Silicate (SiO₃²⁻)</h4>
              <p className="text-slate-600 text-sm">Thúc đẩy sự phục hồi vi mô ngà răng bị suy thoái.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center font-bold text-xl mb-4 border border-purple-100">BO₃³⁻</div>
              <h4 className="font-heading font-bold text-slate-900 mb-2">Borate (Kháng Khuẩn)</h4>
              <p className="text-slate-600 text-sm">Ứng dụng y văn Nature 2018: ức chế trực tiếp gen pdh operon của S. mutans, triệt tiêu khả năng tạo mảng sinh học (Biofilm) ngay cả khi có đường sucrose.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-3">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center font-bold text-xl mb-4 border border-amber-100 shrink-0">Al³⁺</div>
                <div>
                  <h4 className="font-heading font-bold text-slate-900 mb-2">Aluminum (Trung hòa Axit)</h4>
                  <p className="text-slate-600 text-sm">Trung hòa axit chủ động, kiềm hóa môi trường quanh răng khi pH giảm xuống dưới 5.5, ngăn chặn triệt để quá trình khử khoáng.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CORE PRODUCTS */}
      <section className="py-20 lg:py-28 bg-slate-50 relative border-y border-slate-200">
        <div className="w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 leading-[1.3] tracking-tight">
              Vũ Khí Cốt Lõi Của Giải Pháp Phòng Ngừa Shofu
            </h2>
            <div className="w-24 h-1 bg-[#00ADEF] mx-auto my-6"></div>
          </div>

          <div className="flex flex-col gap-12 lg:gap-16">
            {/* PRG Barrier Coat */}
            <div className="flex flex-col lg:flex-row gap-8 items-center bg-white rounded-3xl p-8 lg:p-12 border border-slate-200 shadow-xl shadow-slate-200/50">
              <div className="w-full lg:w-1/2 relative">
                <ImagePlaceholder className="w-full aspect-[4/3] rounded-2xl bg-slate-100 border border-slate-200" text="Ảnh PRG Barrier Coat" />
              </div>
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs uppercase tracking-wide">1. Véc-ni chống ê buốt</div>
                <h3 className="font-heading font-bold text-2xl text-slate-900">PRG BARRIER COAT – ÁO GIÁP BIOACTIVE MỎNG 15µM</h3>
                <p className="text-slate-600">Vật liệu phủ bảo vệ ngà răng sinh học không chứa HEMA, không cồn, không Acetone, giải phóng ion kéo dài lên đến 6 tháng chỉ sau một lần bôi duy nhất.</p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00ADEF] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700"><strong>Màng phủ siêu mỏng 15 micron:</strong> Tự dán dính, không gây cộm cấn khớp cắn hay thay đổi hình thể răng.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00ADEF] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700"><strong>Quy trình 1 bước tinh gọn:</strong> Bôi véc-ni ➔ Chiếu đèn 10s ➔ Lau sạch lớp ức chế oxy bằng bông ẩm. Không cần Etching, không nhạy cảm kỹ thuật.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00ADEF] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700"><strong>Chỉ định đa năng:</strong> Điều trị triệt tiêu ê buốt tức thì (mòn cổ, tụt nướu, tẩy trắng) & Bảo vệ chống sâu răng (răng mới mọc, đốm trắng, kẽ răng, quanh mắc cài).</p>
                  </div>
                </div>
              </div>
            </div>

            {/* BeautiSealant */}
            <div className="flex flex-col lg:flex-row-reverse gap-8 items-center bg-white rounded-3xl p-8 lg:p-12 border border-slate-200 shadow-xl shadow-slate-200/50">
              <div className="w-full lg:w-1/2 relative">
                <ImagePlaceholder className="w-full aspect-[4/3] rounded-2xl bg-slate-100 border border-slate-200" text="Ảnh BeautiSealant" />
              </div>
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-xs uppercase tracking-wide">2. Trám bít hố rãnh</div>
                <h3 className="font-heading font-bold text-2xl text-slate-900">BEAUTISEALANT – KHÔNG CẦN ETCHING</h3>
                <p className="text-slate-600">Giải pháp trám bít hố rãnh thế hệ mới giúp tối ưu hóa thời gian ghế nha (Chair-time) cho Bác sĩ Nha khoa Trẻ em và Nha khoa Tổng quát.</p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00ADEF] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700"><strong>Zero Etching Technique:</strong> Sử dụng Self-Etch Primer chứa Monomer MDP dịu nhẹ dán dính hóa học chắc chắn mà không cần dùng Axit Phosphoric Etching rửa nước, loại bỏ 100% rủi ro nhiễm nước bọt ở trẻ nhỏ.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00ADEF] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700"><strong>Đầu bơm Tip 27Ga siêu nhỏ:</strong> Tự san bằng và đắp lót len lỏi chính xác vào các đáy hố rãnh hẹp mà không tạo bọt khí.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00ADEF] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700"><strong>Tích hợp S-PRG Ion Shield:</strong> Bảo vệ hố rãnh khỏi mảng bám vi khuẩn, liên tục sạc Fluoride từ kem đánh răng hàng ngày.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Beautifil Kids SA & Flow Plus */}
            <div className="flex flex-col lg:flex-row gap-8 items-center bg-white rounded-3xl p-8 lg:p-12 border border-slate-200 shadow-xl shadow-slate-200/50">
              <div className="w-full lg:w-1/2 relative">
                <ImagePlaceholder className="w-full aspect-[4/3] rounded-2xl bg-slate-100 border border-slate-200" text="Ảnh Beautifil Flow Plus / Kids SA" />
              </div>
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-700 font-bold text-xs uppercase tracking-wide">3. Composite Dự phòng tự dán</div>
                <h3 className="font-heading font-bold text-2xl text-slate-900">BEAUTIFIL KIDS SA & BEAUTIFIL FLOW PLUS</h3>
                <p className="text-slate-600">Dòng Composite lỏng dòng chảy tối ưu cho các xoang trám nhỏ Class I, Class V và phục hình nha khoa nhi, tự dán dính không cần Bonding riêng biệt, phóng thích Fluoride tái tạo răng thật.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: SCIENTIFIC PROOF */}
      <section className="py-20 lg:py-28 bg-slate-900 relative border-y border-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-light opacity-100 pointer-events-none"></div>
        <div className="w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-white leading-[1.3] mb-4 tracking-tight">Bằng chứng <span className="text-[#00ADEF]">Y văn vững chắc</span></h2>
            <p className="font-body text-base sm:text-lg text-slate-400 max-w-3xl mx-auto">
              "Chất lượng của bất kỳ công nghệ nha khoa nào cũng phải được bảo chứng bằng dữ liệu lâm sàng thực tế."
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            
            {/* 1. JADA */}
            <div className="col-span-1 lg:col-span-2 relative rounded-3xl p-6 sm:p-8 pb-0 sm:pb-8 transition-all flex flex-col group">
              <div className="absolute inset-0 rounded-3xl border border-slate-700/50 bg-slate-800/50 backdrop-blur-md pointer-events-none group-hover:border-[#00ADEF]/50 group-hover:shadow-[0_0_30px_rgba(0,173,239,0.15)] transition-all duration-300" />
              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="flex-1 w-full flex flex-col">
                  <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-blue-500/20 text-blue-400 font-mono font-bold text-xs mb-4 border border-blue-500/30 w-max">1. Bảo chứng Y văn JADA</div>
                  <h3 className="font-heading font-bold text-xl text-white mb-2">Đại học Florida - Theo dõi 8 năm & 13 năm</h3>
                  <p className="text-slate-400 font-body text-sm mb-6">Chứng minh khả năng phòng thủ sinh học vĩnh cửu của hệ sinh thái Giomer.</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 -mx-6 sm:mx-0 mt-4 lg:mt-6">
                    <div className="bg-slate-900/50 rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-slate-700/50">
                      <div className="text-[#00ADEF] font-mono font-bold text-sm mb-2">Mốc 8 năm</div>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /><span><strong className="text-white">100%</strong> Tỷ lệ lưu giữ phục hình</span></li>
                        <li className="flex items-start gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /><span><strong className="text-white">0%</strong> Ê buốt ngà</span></li>
                        <li className="flex items-start gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /><span><strong className="text-white">0%</strong> Sâu răng thứ phát</span></li>
                      </ul>
                    </div>
                    <div className="bg-slate-900/50 rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-slate-700/50">
                      <div className="text-[#00ADEF] font-mono font-bold text-sm mb-2">Mốc 13 năm</div>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /><span><strong className="text-[#00ADEF] text-lg">96%</strong> Phục hình hoàn toàn sạch bóng sâu răng tái phát.</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Nature */}
            <div className="col-span-1 relative rounded-3xl p-6 sm:p-8 pb-0 sm:pb-8 transition-all flex flex-col group">
              <div className="absolute inset-0 rounded-3xl border border-slate-700/50 bg-slate-800/50 backdrop-blur-md pointer-events-none group-hover:border-[#00ADEF]/50 transition-all duration-300" />
              <div className="relative z-10 flex flex-col">
                <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-purple-500/20 text-purple-400 font-mono font-bold text-xs mb-4 border border-purple-500/30 w-max">2. Đột phá từ Tạp chí Nature</div>
                <h3 className="font-heading font-bold text-xl text-white mb-2">Scientific Reports 2018</h3>
                <p className="text-slate-400 font-body text-[13px] mb-5">Thử nghiệm kính hiển vi điện tử quét (SEM) minh chứng hiệu quả ức chế mảng bám.</p>
                <div className="space-y-4 -mx-6 sm:mx-0 mt-4 lg:mt-6">
                  <div className="text-sm text-slate-300 leading-relaxed bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
                    Sau 24 giờ không đánh răng, bề mặt chứa hạt độn S-PRG hoàn toàn sạch bóng vi khuẩn, hoàn toàn không bị lớp màng sinh học Biofilm bám đọng so với các vật liệu composite trơ thông thường.
                  </div>
                </div>
              </div>
            </div>

            {/* Quotes */}
            <div className="col-span-1 flex flex-col gap-6 lg:gap-8">
              <div className="relative rounded-3xl p-6 sm:p-8 transition-all flex flex-col flex-1 group">
                <div className="absolute inset-0 rounded-3xl border border-slate-700/50 bg-slate-800/50 backdrop-blur-md pointer-events-none group-hover:border-[#00ADEF]/50 transition-all duration-300" />
                <div className="relative z-10 flex flex-col h-full">
                  <Quote className="w-8 h-8 text-slate-600 mb-4" />
                  <p className="text-slate-300 text-sm italic mb-4 flex-1">"Công nghệ véc-ni PRG Barrier Coat và BeautiSealant ứng dụng S-PRG hoạt động như một phép màu giúp tăng tốc quy trình lâm sàng cho các bé nhỏ hiếu động nhờ loại bỏ hoàn toàn bước Etching nhạy cảm."</p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div>
                      <div className="text-white font-bold text-sm">Dr. Shukan Kanuga</div>
                      <div className="text-slate-400 text-xs">Hiệp hội Nha khoa Trẻ em Hoa Kỳ, California</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative rounded-3xl p-6 sm:p-8 transition-all flex flex-col flex-1 group">
                <div className="absolute inset-0 rounded-3xl border border-slate-700/50 bg-slate-800/50 backdrop-blur-md pointer-events-none group-hover:border-[#00ADEF]/50 transition-all duration-300" />
                <div className="relative z-10 flex flex-col h-full">
                  <Quote className="w-8 h-8 text-slate-600 mb-4" />
                  <p className="text-slate-300 text-sm italic mb-4 flex-1">"Khả năng chống ê buốt ngà của PRG Barrier Coat kéo dài tới vài tháng là chìa khóa giúp phòng khám của tôi xử lý êm đẹp các ca tụt nướu và mòn cổ răng mà không cần xâm lấn mài mô răng."</p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div>
                      <div className="text-white font-bold text-sm">Prof. Tanaka</div>
                      <div className="text-slate-400 text-xs">Đại học Y khoa Tokyo, Nhật Bản</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6: THE CORE OFFER */}
      <section id="offer" className="py-20 lg:py-28 bg-slate-900 relative border-y border-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-light opacity-100 pointer-events-none"></div>
        <div className="w-[90%] lg:w-[80%] mx-auto relative z-10">
          
          <div className="text-center mb-12">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-white leading-[1.3] mb-4 tracking-tight">GÓI KHỞI ĐỘNG <span className="text-[#00ADEF]">NHA KHOA PHÒNG NGỪA MiCD</span></h2>
            <p className="font-body text-slate-400 max-w-2xl mx-auto">Đặc quyền hỗ trợ trải nghiệm lâm sàng từ Sota-D – Giới hạn 20 phòng khám đăng ký sớm nhất.</p>
          </div>

          <div className="bg-slate-800/50 rounded-[2rem] border border-slate-700/50 overflow-hidden shadow-2xl relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 relative">
              <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-3/4 bg-gradient-to-b from-transparent via-slate-700 to-transparent z-20"></div>
              
              {/* Box 1: Core Products */}
              <div className="p-8 md:p-12 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 blur-[80px] rounded-full pointer-events-none transition-all duration-500"></div>
                <div className="relative z-10 space-y-8">
                  <div>
                    <h3 className="font-heading font-bold text-xl md:text-2xl text-amber-400 border-b border-slate-700 pb-4 mb-6">📦 Bộ sản phẩm cốt lõi</h3>
                    <ul className="space-y-5">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-white font-bold text-sm md:text-base block">01 Bộ PRG Barrier Coat Mini-Kit (8 liều Base + 0.9ml Active)</span>
                          <span className="text-slate-400 text-sm line-through">945.000đ</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-white font-bold text-sm md:text-base block">01 Bộ BeautiSealant Set (Paste 1.2g + Primer 6ml)</span>
                          <span className="text-slate-400 text-sm line-through">1.600.000đ</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-white font-bold text-sm md:text-base block">01 Tuýp Composite Beautifil Flow Plus F02 / F00 (2g)</span>
                          <span className="text-slate-400 text-sm line-through">850.000đ</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Box 2: Gifts */}
              <div className="p-8 md:p-12 relative overflow-hidden group bg-slate-800/30">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[80px] rounded-full pointer-events-none transition-all duration-500"></div>
                <div className="relative z-10 space-y-8">
                  <div>
                    <h3 className="font-heading font-bold text-xl md:text-2xl text-white border-b border-amber-500/30 pb-4 mb-6">🎁 Bộ quà tặng tài trợ 100%</h3>
                    <ul className="space-y-5">
                      <li className="flex items-start gap-3">
                        <div className="bg-amber-500/20 p-1.5 rounded-lg shrink-0 mt-0.5"><Gift className="w-4 h-4 text-amber-400" /></div>
                        <div>
                          <span className="text-amber-100 font-medium text-sm md:text-base block"><strong className="text-white font-bold">Quà vật lý:</strong> Bộ đĩa đánh bóng mịn Super-Snap Mini Kit</span>
                          <span className="text-slate-400 text-sm">Trị giá: 450.000đ</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-amber-500/20 p-1.5 rounded-lg shrink-0 mt-0.5"><Award className="w-4 h-4 text-amber-400" /></div>
                        <div>
                          <span className="text-amber-100 font-medium text-sm md:text-base block"><strong className="text-white font-bold">Tài liệu:</strong> Phác đồ "Triệt Tiêu Ê Buốt & Kiểm Soát Sâu Răng Nguy Cơ Cao Theo Triết Lý MiCD"</span>
                          <span className="text-slate-400 text-sm">Trị giá: 1.500.000đ</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-amber-500/20 p-1.5 rounded-lg shrink-0 mt-0.5"><Star className="w-4 h-4 text-amber-400" /></div>
                        <div>
                          <span className="text-amber-100 font-medium text-sm md:text-base block"><strong className="text-white font-bold">Đặc quyền:</strong> Vé Zalo VIP Group - Cố vấn lâm sàng 1:1 cùng Chuyên gia Sota-D trong 30 ngày</span>
                          <span className="text-slate-400 text-sm">Trị giá: 2.000.000đ</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Price Footer */}
            <div className="bg-slate-900 p-8 md:p-12 border-t border-slate-700/50">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto">
                <div className="text-center md:text-left">
                  <p className="text-slate-400 text-sm font-medium mb-1 uppercase tracking-wider">Tổng giá trị thực tế</p>
                  <p className="text-slate-500 text-2xl font-bold line-through mb-2">7.345.000đ</p>
                  <div className="inline-block px-3 py-1 bg-red-500/20 text-red-400 border border-red-500/30 rounded-lg text-sm font-bold">Tiết kiệm &gt;50%</div>
                </div>
                
                <div className="text-center md:text-right">
                  <p className="text-emerald-400 text-sm font-bold mb-1 uppercase tracking-wider">Giá ưu đãi trọn gói hôm nay</p>
                  <p className="text-white text-4xl sm:text-5xl font-extrabold tracking-tight">3.395.000<span className="text-2xl text-slate-400 font-medium ml-1">đ</span></p>
                </div>
              </div>
              
              <div className="mt-10 max-w-2xl mx-auto">
                <CtaButton 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-lg px-8 py-5 rounded-2xl shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_50px_rgba(16,185,129,0.5)] transition-all flex justify-center items-center gap-3 group"
                >
                  <Gift className="w-6 h-6 animate-pulse" />
                  ĐĂNG KÝ NHẬN ƯU ĐÃI ĐẶC QUYỀN
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </CtaButton>
              </div>
              
              <div className="mt-8 bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 text-center max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-4">
                <ShieldCheck className="w-12 h-12 text-amber-400 shrink-0" />
                <div className="text-left">
                  <h4 className="text-amber-400 font-bold mb-1">CAM KẾT ĐẢO NGƯỢC RỦI RO (RISK REVERSAL)</h4>
                  <p className="text-amber-200/80 text-sm">Dùng thử 1 liều PRG Barrier Coat đầu tiên. Nếu Bác sĩ cảm thấy không hiệu quả hoặc không hợp tay nghề, Sota-D hỗ trợ thu hồi bộ sản phẩm còn lại và <strong>hoàn tiền 100% không cần giải thích!</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: LEAD MAGNET */}
      <section id="lead-magnet" className="py-20 lg:py-28 bg-slate-50 relative border-y border-slate-200">
        <div className="w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 leading-[1.3] tracking-tight">
              Dành Cho Bác Sĩ Cần Thêm Thông Tin
            </h2>
            <p className="font-body text-slate-600 mt-4 max-w-2xl mx-auto text-lg">Nếu Bác sĩ cần thêm thông tin y văn hoặc muốn thử nghiệm trước khi quyết định đặt hàng, hãy nhận ngay tài liệu chuyên môn và mẫu thử dưới đây:</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Ebook */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-200 shadow-xl flex flex-col justify-between hover:shadow-2xl transition-shadow">
              <div>
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 font-bold text-xs uppercase tracking-wide mb-6">📘 SỔ TAY LÂM SÀNG PHÒNG NGỪA</div>
                <h3 className="font-heading font-bold text-2xl text-slate-900 mb-4 leading-snug">Phác Đồ 4 Bước Trị Liệu Ê Buốt & Kiểm Soát Sâu Răng Nguy Cơ Cao Theo Triết Lý MiCD (File PDF)</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">Hướng dẫn từng bước xử lý mòn cổ răng, tụt nướu, chăm sóc răng niềng quanh mắc cài và quy trình trám hố rãnh không Etching.</p>
              </div>
              <CtaButton className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl flex justify-center items-center gap-2">
                ĐIỀN SĐT NHẬN EBOOK QUA ZALO NGAY
              </CtaButton>
            </div>
            
            {/* Sample Kit */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-200 shadow-xl flex flex-col justify-between hover:shadow-2xl transition-shadow">
              <div>
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs uppercase tracking-wide mb-6">🎁 NHẬN KIT MẪU THỬ MIỄN PHÍ</div>
                <h3 className="font-heading font-bold text-2xl text-slate-900 mb-4 leading-snug">Trải Nghiệm Mẫu Thử Tận Phòng Khám</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">Sota-D dành tặng 30 suất trải nghiệm mẫu thử PRG Barrier Coat (Bộ Mini) giao tận tay Bác sĩ trên toàn quốc hoàn toàn Miễn Phí.</p>
              </div>
              <CtaButton className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl flex justify-center items-center gap-2">
                ĐĂNG KÝ NHẬN SAMPLE KIT TẠI ĐÂY
              </CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: FAQ */}
      <section className="py-20 bg-white relative border-t border-slate-200">
        <div className="w-[90%] md:w-[70%] max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 mb-4">Câu Hỏi Thường Gặp</h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openFaqIndex === index ? 'border-[#00ADEF] bg-blue-50/50 shadow-md' : 'border-slate-200 bg-white hover:border-slate-300'}`}
              >
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                >
                  <span className="font-heading font-bold text-slate-800 pr-8">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${openFaqIndex === index ? 'bg-[#00ADEF] text-white' : 'bg-slate-100 text-slate-500'}`}>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                
                <AnimatePresence>
                  {openFaqIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 mt-2 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CampaignModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}

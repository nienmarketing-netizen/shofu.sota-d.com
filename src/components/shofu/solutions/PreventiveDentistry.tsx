import React, { useState } from 'react';
import { Gift, CheckCircle2, ArrowRight, ShieldCheck, Zap, Layers, Beaker, ChevronDown, Sparkles, AlertTriangle, ShieldAlert, Syringe, Shield, Star, Award, Microscope, Droplets, Target, Quote, XCircle } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { CampaignModal } from '../../CampaignModal';
import { CtaButton } from '../../ui/CtaButton';

const ImagePlaceholder = ({ className, text }: { className?: string; text: string }) => (
  <div className={`flex items-center justify-center p-4 text-center ${className} bg-slate-100/80 backdrop-blur-sm border-dashed border-2 border-slate-300 shadow-sm`}>
    <span className="text-slate-500 font-medium font-body text-sm sm:text-base">{text}</span>
  </div>
);

const AccordionItem: React.FC<{ question: string, answer: React.ReactNode, isOpen: boolean, onClick: () => void }> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border border-slate-200 rounded-2xl mb-4 bg-white overflow-hidden shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:border-[#C43838]/30">
      <button
        className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none group"
        onClick={onClick}
      >
        <span className="font-heading font-bold text-slate-900 text-base sm:text-lg group-hover:text-[#C43838] transition-colors pr-6">
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-[#C43838] text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-red-50 group-hover:text-[#C43838]'}`}>
          <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-slate-600 font-body text-[15px] sm:text-base leading-relaxed border-t border-slate-100 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export function PreventiveDentistry() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [campaignModalTitle, setCampaignModalTitle] = useState('');

  const openCampaignModal = (title: string) => {
    setCampaignModalTitle(title);
    setIsModalOpen(true);
  };

  const faqs = [
    {
      q: "Lớp phủ PRG Barrier Coat mỏng 15µm có dễ bị chải răng làm trôi không? Tác dụng kéo dài bao lâu?",
      a: (
        <>
          PRG Barrier Coat chứa monomer tự dán dính kỵ nước, bám chặt vào ngà răng và chịu được tác động cơ học chải răng hàng ngày. Tác dụng giải phóng ion chống ê buốt và kháng khuẩn duy trì kéo dài từ 3 đến 6 tháng cho 1 lần bôi.
        </>
      )
    },
    {
      q: "BeautiSealant không Etching bằng Axit Phosphoric thì lực dán dính có đảm bảo không bị sút màng Sealant?",
      a: (
        <>
          Hoàn toàn đảm bảo. BeautiSealant sử dụng Self-Etch Primer chứa monomer chức năng MDP dịu nhẹ, tạo liên kết vi cơ học và hóa học bền vững với men răng mà không làm phá hủy men răng trẻ em, đồng thời loại bỏ rào cản nhạy cảm kỹ thuật do độ ẩm.
        </>
      )
    },
    {
      q: "Sản phẩm có chứa HEMA hay gây kích ứng mô nướu trẻ em không?",
      a: (
        <>
          Toàn bộ dòng sản phẩm phòng ngừa của Shofu (PRG Barrier Coat & BeautiSealant) đều 100% HEMA-Free, Acetone-Free, Alcohol-Free, vô cùng êm dịu, không gây bỏng rát mô nướu và an toàn tuyệt đối cho trẻ nhỏ cũng như bệnh nhân lớn tuổi.
        </>
      )
    },
    {
      q: "Hạt độn S-PRG giải phóng ion liên tục thì màng phủ có bị xốp hay đục màu theo thời gian không?",
      a: (
        <>
          Không. Cấu trúc S-PRG được bọc trong màng biến tính bề mặt bền vững, các ion khuếch tán qua mạng lưới vi mô mà không làm phá hủy cấu trúc khung polyme, giúp màng phủ giữ độ trong suốt và nhẵn mịn vĩnh cửu.
        </>
      )
    }
  ];

  return (
    <div className="w-full flex flex-col">
      {/* SECTION 1: HERO */}
      <section className="relative bg-slate-50 bg-grid-pattern pt-[100px] pb-16 md:pt-[120px] md:pb-24 overflow-hidden border-b border-slate-200">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#C43838]/10 to-transparent rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        <div className="w-[90%] lg:w-[85%] xl:w-[80%] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 items-start relative z-10">
          <div className="w-full lg:w-[65%] xl:w-[60%] text-left">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#C43838]/10 border border-[#C43838]/20 mb-6 max-w-full overflow-hidden relative">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#C43838] animate-pulse shrink-0 relative z-10 shadow-[0_0_4px_rgba(196,56,56,0.8)]"></div>
              <div className="flex overflow-hidden relative w-full [mask-image:linear-gradient(to_right,transparent,black_10px,black_90%,transparent)] sm:[mask-image:none]">
                <div className="font-mono text-[10.5px] min-[375px]:text-[11.5px] sm:text-xs font-bold text-[#C43838] tracking-tight sm:tracking-wide whitespace-nowrap flex animate-marquee sm:!animate-none sm:!transform-none w-max">
                  <span className="pr-8 sm:pr-0">✦ TRIẾT LÝ NHA KHOA PHÒNG NGỪA MiCD & TRỊ LIỆU SINH HỌC TỪ SHOFU (NHẬT BẢN) ✦</span>
                  <span className="pr-8 sm:hidden">✦ TRIẾT LÝ NHA KHOA PHÒNG NGỪA MiCD & TRỊ LIỆU SINH HỌC TỪ SHOFU (NHẬT BẢN) ✦</span>
                </div>
              </div>
            </div>
            
            <h1 className="font-heading font-extrabold text-3xl min-[375px]:text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-6xl text-slate-900 leading-[1.2] mb-6 tracking-tight lg:pr-4 xl:pr-0 lg:-mr-8 xl:-mr-12 text-left">
              Làm Chủ Giải Pháp <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C43838] to-[#E54848]">Nha Khoa Phòng Ngừa Chủ Động</span>
            </h1>
            
            {/* Mobile Image */}
            <div className="lg:hidden my-6 sm:my-8 flex justify-start">
              <ImagePlaceholder 
                  className="w-full max-w-[340px] sm:max-w-[420px] aspect-[4/3] rounded-2xl bg-white border border-slate-200 shadow-md relative z-10" 
                  text="Hình ảnh minh hoạ hệ thống Nha khoa Phòng ngừa Shofu" 
               />
            </div>
            
            <p className="font-body text-base sm:text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl text-left">
              Đừng chỉ chờ răng hỏng để "trám bít cơ học". Làm chủ giải pháp Nha khoa Phòng ngừa Chủ động cùng bộ đôi công nghệ <strong className="font-bold text-[#C43838] bg-red-50 px-1.5 py-0.5 rounded">PRG Barrier Coat</strong> & <strong className="font-bold text-[#C43838] bg-red-50 px-1.5 py-0.5 rounded">BeautiSealant</strong>: Triệt tiêu 100% ê buốt ngà tức thì (kéo dài đến 6 tháng), trám bít hố rãnh không cần Etching, và liên tục sạc-nhả 6 loại ion sinh học bảo vệ răng khỏi sâu thứ phát.
            </p>

            <ul className="space-y-3 mb-10 text-left">
              <li className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl border border-slate-200/80 bg-white/50 backdrop-blur-sm shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
                <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xl">🇯🇵</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-[15px] mb-1 leading-snug text-left">100% Made in Japan</h4>
                  <p className="text-slate-600 text-[13px] sm:text-sm leading-relaxed text-left">Công nghệ hạt độn S-PRG độc quyền từ Tập đoàn Shofu.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl border border-slate-200/80 bg-white/50 backdrop-blur-sm shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
                <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xl">🧪</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-[15px] mb-1 leading-snug text-left">Bằng chứng Y văn JADA & Nature 2018</h4>
                  <p className="text-slate-600 text-[13px] sm:text-sm leading-relaxed text-left">Chứng minh khả năng trung hòa axit và ức chế vi khuẩn S. mutans ở cấp độ gen.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl border border-slate-200/80 bg-white/50 backdrop-blur-sm shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
                <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xl">🛡️</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-[15px] mb-1 leading-snug text-left">Màng Phủ HEMA-Free 15µm</h4>
                  <p className="text-slate-600 text-[13px] sm:text-sm leading-relaxed text-left">Tự dán, kỵ nước, không cồn, không Acetone, an toàn tuyệt đối cho cả trẻ em và người già.</p>
                </div>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-start">
              <CtaButton 
                onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#C43838] text-white px-3 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-[10.5px] min-[375px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-red-600 hover:shadow-xl hover:shadow-red-600/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap flex-nowrap"
              >
                <span className="truncate">ĐẶT MUA GÓI PHÒNG NGỪA - TRỢ GIÁ 30%</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </CtaButton>
              <CtaButton 
                onClick={() => document.getElementById('lead-magnet')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-white text-slate-700 border border-slate-300 px-3 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-[10.5px] min-[375px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-slate-50 hover:border-slate-400 hover:text-slate-900 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap flex-nowrap"
              >
                <span className="truncate">TẢI SỔ TAY PHÁC ĐỒ PHÒNG NGỪA MiCD (EBOOK MIỄN PHÍ)</span>
              </CtaButton>
            </div>
          </div>
          
          {/* Desktop Image */}
          <div className="hidden lg:block w-full lg:w-[35%] xl:w-[40%] relative mt-8 lg:mt-0">
             <ImagePlaceholder 
                className="w-full aspect-[3/4] xl:aspect-[4/5] rounded-3xl bg-white border border-slate-200 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] relative z-10" 
                text="Hình ảnh minh hoạ hệ thống Nha khoa Phòng ngừa Shofu" 
             />
          </div>
        </div>
      </section>

      {/* SECTION 2: PAIN POINTS (GÓC KHUẤT LÂM SÀNG) - DARK THEME */}
      <section className="py-20 lg:py-28 bg-slate-900 relative overflow-hidden border-y border-slate-800 text-white">
        <div className="absolute inset-0 bg-grid-pattern-light opacity-100 pointer-events-none"></div>
        <div className="w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
          {/* Header */}
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

          {/* 3 Pain points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 lg:mb-16">
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 md:p-8 flex flex-col gap-4">
               <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
               </div>
               <h3 className="font-heading font-bold text-xl text-white">1. Ám ảnh ê buốt tái phát ở bệnh nhân mòn răng, tụt nướu & tẩy trắng</h3>
               <p className="font-body text-slate-400 text-sm leading-relaxed">
                 Bôi các chất chống ê buốt thông thường chỉ mang tính chất "giảm đau ngọn". Sau vài ngày đến vài tuần, màng phủ bị rửa trôi, ống ngà hở trở lại khiến bệnh nhân tiếp tục than phiền vì nhạy cảm nóng lạnh.
               </p>
            </div>
            
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 md:p-8 flex flex-col gap-4">
               <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-amber-400" />
               </div>
               <h3 className="font-heading font-bold text-xl text-white">2. Rào cản kỹ thuật khi trám bít hố rãnh (Sealant) cho trẻ nhỏ hiếu động</h3>
               <p className="font-body text-slate-400 text-sm leading-relaxed">
                 Trẻ em không thể ngồi yên để Bác sĩ thực hiện quy trình Acid Etching rửa nước – thổi khô lách cách. Chỉ một giọt nước bọt ngấm vào là toàn bộ màng Sealant bị bong tróc, tạo kẽ hở cho vi khuẩn ẩn nấp gây sâu răng bùng phát dưới lớp trám.
               </p>
            </div>
            
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 md:p-8 flex flex-col gap-4">
               <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-orange-400" />
               </div>
               <h3 className="font-heading font-bold text-xl text-white">3. Sự bất lực trước nhóm bệnh nhân nguy cơ sâu răng cao (Caries Risk)</h3>
               <p className="font-body text-slate-400 text-sm leading-relaxed">
                 Bệnh nhân đang niềng răng (quanh mắc cài bám đầy mảng bám), răng chen chúc khó vệ sinh, đốm trắng đe dọa mất khoáng hay người già lộ chân răng... Vật liệu trám thụ động thông thường hoàn toàn "bất động", không có khả năng chống lại sự tấn công của axit vi khuẩn.
               </p>
            </div>
          </div>
          
          <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-5 sm:p-6 text-center max-w-4xl mx-auto">
             <div className="flex items-center justify-center gap-2 mb-2 text-red-400 font-bold font-heading text-lg">
                <ShieldAlert className="w-6 h-6 shrink-0" />
                <span>KẾT LUẬN LÂM SÀNG</span>
             </div>
             <p className="font-body text-slate-300 text-[15px] sm:text-base leading-relaxed">
                Bác sĩ không thao tác sai, nhưng chính việc dùng <strong className="text-white">VẬT LIỆU THỤ ĐỘNG</strong> đã vô tình biến các vùng nguy cơ thành <strong className="text-red-400">"quả bom nổ chậm"</strong> dưới nướu!
             </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: BIOACTIVE SOLUTION */}
      <section className="py-20 lg:py-28 bg-slate-50 bg-grid-pattern relative overflow-hidden border-t border-slate-200">
        <div className="w-[90%] lg:w-[80%] mx-auto relative z-10 flex flex-col gap-0 lg:gap-12">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <div className="flex-1 w-full space-y-6">
              <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-[#C43838]/10 text-[#C43838] font-mono font-bold text-xs mb-4 border border-[#C43838]/20 uppercase tracking-wider">
                Triết lý MiCD
              </div>
              <h2 className="font-heading font-extrabold text-2xl min-[400px]:text-3xl sm:text-4xl lg:text-[2.75rem] text-slate-900 leading-[1.3] mb-4 tracking-tight">
                Từ Phục Hình Thụ Động Đến <br className="hidden sm:block" />
                <span className="text-[#C43838]">Trị Liệu Sinh Học Chủ Động</span>
              </h2>
              <div className="w-24 h-1 bg-[#C43838]"></div>
              
              <p className="font-body text-slate-600 text-base sm:text-lg leading-relaxed">
                Để giải quyết tận gốc nguy cơ sâu răng và nhạy cảm ngà, vật liệu nha khoa không được phép nằm "trơ" cơ học. Vật liệu phải <strong className="text-slate-900 font-bold">SỐNG</strong> và tương tác liên tục với môi trường miệng.
              </p>
              
              <h3 className="font-heading font-bold text-xl text-slate-900 pt-4">Cốt Lõi Công Nghệ Hạt Độn Sinh Học S-PRG (Giomer) Khép Kín 3 Lớp:</h3>
              <p className="font-body text-slate-600 text-sm sm:text-base leading-relaxed pb-4">
                Không giống như Fluoride dạng véc-ni thụ động dễ bị trôi, hạt độn S-PRG (Surface Pre-Reacted Glass-ionomer) của Shofu chứa lõi thủy tinh đa chức năng fluoro-boro-alumino-silicate, hoạt động như một <strong className="text-[#C43838]">"Bình ắc quy sinh học"</strong> liên tục giải phóng và tự sạc lại 6 loại ion y tế:
              </p>

              <div className="space-y-4">
                <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center shrink-0">
                    <Zap className="w-5 h-5 text-[#C43838]" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-slate-900 text-sm sm:text-base">Fluoride (F⁻) & Strontium (Sr²⁺)</h4>
                    <p className="font-body text-slate-600 text-[13px] sm:text-sm mt-1 leading-relaxed">Tương tác trực tiếp với Hydroxyapatite tạo thành phức hợp Strontium-Fluorapatite tái khoáng hóa ngà răng, bít kín vĩnh viễn các ống ngà hở.</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-slate-900 text-sm sm:text-base">Sodium (Na⁺) & Silicate (SiO₃²⁻)</h4>
                    <p className="font-body text-slate-600 text-[13px] sm:text-sm mt-1 leading-relaxed">Thúc đẩy sự phục hồi vi mô ngà răng bị suy thoái.</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center shrink-0">
                    <Microscope className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-slate-900 text-sm sm:text-base">Borate (BO₃³⁻)</h4>
                    <p className="font-body text-slate-600 text-[13px] sm:text-sm mt-1 leading-relaxed">Ứng dụng bằng chứng y văn công bố trên tạp chí Nature (Scientific Reports 2018): ức chế trực tiếp gen pdh operon của vi khuẩn Streptococcus mutans, triệt tiêu khả năng tạo mảng sinh học (Biofilm) ngay cả khi có đường sucrose.</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                    <Droplets className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-slate-900 text-sm sm:text-base">Aluminum (Al³⁺)</h4>
                    <p className="font-body text-slate-600 text-[13px] sm:text-sm mt-1 leading-relaxed">Trung hòa axit chủ động, kiềm hóa môi trường quanh răng khi pH giảm xuống dưới 5.5, ngăn chặn triệt để quá trình khử khoáng.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-[45%] relative mt-8 lg:mt-0">
              <ImagePlaceholder 
                 className="w-full aspect-[4/5] rounded-3xl bg-white border border-slate-200 shadow-xl relative z-10" 
                 text="Hình ảnh minh hoạ S-PRG giải phóng 6 Ion" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CORE PRODUCTS */}
      <section className="py-20 lg:py-28 bg-white relative border-y border-slate-200">
        <div className="w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-slate-900 leading-[1.3] tracking-tight">
              Vũ Khí Cốt Lõi Của Giải Pháp Phòng Ngừa Shofu
            </h2>
            <div className="w-24 h-1 bg-[#C43838] mx-auto my-6"></div>
          </div>

          <div className="space-y-16 lg:space-y-24">
            {/* PRODUCT 1 */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
               <div className="w-full lg:w-1/2 relative">
                  <ImagePlaceholder className="w-full aspect-square md:aspect-[4/3] rounded-3xl bg-slate-50 border border-slate-200 shadow-xl" text="Ảnh PRG Barrier Coat" />
               </div>
               <div className="w-full lg:w-1/2 flex flex-col gap-6">
                  <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-red-50 text-red-600 font-bold text-xs uppercase tracking-wide w-fit">
                    1. Véc-ni chống ê buốt
                  </div>
                  <h3 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 leading-snug">
                     PRG BARRIER COAT – ÁO GIÁP BIOACTIVE MỎNG 15µM
                  </h3>
                  <p className="font-body text-slate-600 text-base leading-relaxed">
                     Vật liệu phủ bảo vệ ngà răng sinh học không chứa HEMA, không cồn, không Acetone, giải phóng ion kéo dài lên đến 6 tháng chỉ sau một lần bôi duy nhất.
                  </p>
                  <div className="space-y-4 pt-2">
                     <div className="flex gap-3 items-start">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                        <div>
                           <strong className="text-slate-900">Màng phủ siêu mỏng 15 micron:</strong> Tự dán dính, không gây cộm cấn khớp cắn hay thay đổi hình thể răng.
                        </div>
                     </div>
                     <div className="flex gap-3 items-start">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                        <div>
                           <strong className="text-slate-900">Quy trình 1 bước tinh gọn:</strong> Bôi véc-ni ➔ Chiếu đèn 10 giây ➔ Lau sạch lớp ức chế oxy bằng bông ẩm. Không cần Etching, không nhạy cảm kỹ thuật.
                        </div>
                     </div>
                     <div className="flex gap-3 items-start">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                        <div>
                           <strong className="text-slate-900">Chỉ định lâm sàng đa năng:</strong> Điều trị triệt tiêu ê buốt tức thì do mòn răng, mòn cổ, tụt nướu, nhạy cảm sau tẩy trắng. Bảo vệ chống sâu răng chủ động: Răng vĩnh viễn mới mọc, răng đốm trắng (nguy cơ sâu răng sớm), bề mặt chân răng bị lộ, răng quanh mắc cài chỉnh nha, kẽ răng chen chúc.
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* PRODUCT 2 */}
            <div className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-16 items-center">
               <div className="w-full lg:w-1/2 relative">
                  <ImagePlaceholder className="w-full aspect-square md:aspect-[4/3] rounded-3xl bg-slate-50 border border-slate-200 shadow-xl" text="Ảnh BeautiSealant" />
               </div>
               <div className="w-full lg:w-1/2 flex flex-col gap-6">
                  <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 font-bold text-xs uppercase tracking-wide w-fit">
                    2. Trám bít hố rãnh
                  </div>
                  <h3 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 leading-snug">
                     BEAUTISEALANT – SELF-ETCHING SEALANT KHÔNG CẦN ETCHING
                  </h3>
                  <p className="font-body text-slate-600 text-base leading-relaxed">
                     Giải pháp trám bít hố rãnh thế hệ mới giúp tối ưu hóa thời gian ghế nha (Chair-time) cho Bác sĩ Nha khoa Trẻ em và Nha khoa Tổng quát.
                  </p>
                  <div className="space-y-4 pt-2">
                     <div className="flex gap-3 items-start">
                        <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                        <div>
                           <strong className="text-slate-900">Zero Etching Technique:</strong> Sử dụng Self-Etch Primer dịu nhẹ chứa Monomer MDP dán dính hóa học chắc chắn mà không cần dùng Axit Phosphoric Etching rửa nước, loại bỏ 100% rủi ro nhiễm nước bọt ở trẻ nhỏ.
                        </div>
                     </div>
                     <div className="flex gap-3 items-start">
                        <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                        <div>
                           <strong className="text-slate-900">Đầu bơm Tip 27Ga siêu nhỏ:</strong> Tự san bằng và đắp lót len lỏi chính xác vào các đáy hố rãnh hẹp mà không tạo bọt khí.
                        </div>
                     </div>
                     <div className="flex gap-3 items-start">
                        <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                        <div>
                           <strong className="text-slate-900">Tích hợp S-PRG Ion Shield:</strong> Bảo vệ hố rãnh khỏi mảng bám vi khuẩn, liên tục sạc Fluoride từ kem đánh răng hàng ngày.
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            
            {/* PRODUCT 3 */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
               <div className="w-full lg:w-1/2 relative">
                  <ImagePlaceholder className="w-full aspect-square md:aspect-[4/3] rounded-3xl bg-slate-50 border border-slate-200 shadow-xl" text="Ảnh Beautifil Kids SA & Flow Plus" />
               </div>
               <div className="w-full lg:w-1/2 flex flex-col gap-6">
                  <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-600 font-bold text-xs uppercase tracking-wide w-fit">
                    3. Phục hồi dự phòng
                  </div>
                  <h3 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 leading-snug">
                     BEAUTIFIL KIDS SA & BEAUTIFIL FLOW PLUS – COMPOSITE TỰ DÁN
                  </h3>
                  <p className="font-body text-slate-600 text-base leading-relaxed">
                     Dòng Composite lỏng dòng chảy tối ưu cho các xoang trám nhỏ Class I, Class V và phục hình nha khoa nhi, tự dán dính không cần Bonding riêng biệt, phóng thích Fluoride tái tạo răng thật.
                  </p>
                  <div className="pt-4">
                     <CtaButton onClick={() => openCampaignModal("Tư vấn Vũ khí Phòng ngừa Shofu")} className="bg-[#C43838] hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full flex items-center gap-2 w-fit text-sm">
                        NHẬN BÁO GIÁ VÀ TƯ VẤN <ArrowRight className="w-4 h-4"/>
                     </CtaButton>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: SCIENTIFIC PROOF */}
      <section className="py-20 lg:py-28 bg-slate-900 relative border-y border-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-light opacity-100 pointer-events-none"></div>
        <div className="w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-white leading-[1.3] mb-6 tracking-tight">
              Bằng Chứng Y Văn Vững Chắc
            </h2>
            <p className="font-body text-base sm:text-lg text-slate-300 max-w-2xl mx-auto italic">
              "Chất lượng của bất kỳ công nghệ nha khoa nào cũng phải được bảo chứng bằng dữ liệu lâm sàng thực tế."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Proof 1 */}
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-3xl p-8 lg:p-10 flex flex-col gap-6">
              <div className="w-16 h-16 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center border border-blue-500/30">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-white">1. Bảo chứng Y văn JADA (Đại học Florida - Theo dõi 8 năm & 13 năm)</h3>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                   <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 shrink-0" />
                   <span className="text-slate-300 font-body leading-relaxed"><strong className="text-white">Mốc 8 năm:</strong> 100% Tỷ lệ lưu giữ phục hình | 0% Ê buốt ngà | 0% Sâu răng thứ phát.</span>
                </li>
                <li className="flex gap-3 items-start">
                   <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 shrink-0" />
                   <span className="text-slate-300 font-body leading-relaxed"><strong className="text-white">Mốc 13 năm:</strong> 96% Phục hình hoàn toàn sạch bóng sâu răng tái phát, chứng minh khả năng phòng thủ sinh học vĩnh cửu của hệ sinh thái Giomer.</span>
                </li>
              </ul>
            </div>
            
            {/* Proof 2 */}
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-3xl p-8 lg:p-10 flex flex-col gap-6">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center border border-emerald-500/30">
                <Microscope className="w-8 h-8" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-white">2. Nghiên cứu Đột phá từ Tạp chí Nature (Scientific Reports 2018)</h3>
              <p className="text-slate-300 font-body leading-relaxed">
                Thử nghiệm kính hiển vi điện tử quét (SEM) minh chứng: Sau 24 giờ không đánh răng, bề mặt chứa hạt độn S-PRG hoàn toàn sạch bóng vi khuẩn, hoàn toàn không bị lớp màng sinh học Biofilm bám đọng so với các vật liệu composite trơ thông thường.
              </p>
            </div>
          </div>

          {/* Testimonials */}
          <div className="text-center mb-8">
            <h3 className="font-heading font-bold text-2xl text-white">3. Đánh giá từ Chuyên gia Lâm sàng Quốc tế & Trong nước</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 md:p-8">
               <Quote className="w-8 h-8 text-slate-500 mb-4 opacity-50" />
               <p className="font-body text-slate-300 text-[15px] sm:text-base leading-relaxed italic mb-6">
                 "Công nghệ véc-ni PRG Barrier Coat và BeautiSealant ứng dụng S-PRG hoạt động như một phép màu giúp tăng tốc quy trình lâm sàng cho các bé nhỏ hiếu động nhờ loại bỏ hoàn toàn bước Etching nhạy cảm."
               </p>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center font-bold text-slate-300 text-lg">
                    SK
                  </div>
                  <div className="text-left">
                     <p className="font-bold text-white text-sm">Dr. Shukan Kanuga</p>
                     <p className="text-slate-400 text-xs mt-0.5">Hiệp hội Nha khoa Trẻ em Hoa Kỳ, California</p>
                  </div>
               </div>
            </div>
            
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 md:p-8">
               <Quote className="w-8 h-8 text-slate-500 mb-4 opacity-50" />
               <p className="font-body text-slate-300 text-[15px] sm:text-base leading-relaxed italic mb-6">
                 "Khả năng chống ê buốt ngà của PRG Barrier Coat kéo dài tới vài tháng là chìa khóa giúp phòng khám của tôi xử lý êm đẹp các ca tụt nướu và mòn cổ răng mà không cần xâm lấn mài mô răng."
               </p>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center font-bold text-slate-300 text-lg">
                    PT
                  </div>
                  <div className="text-left">
                     <p className="font-bold text-white text-sm">Prof. Tanaka</p>
                     <p className="text-slate-400 text-xs mt-0.5">Đại học Y khoa Tokyo, Nhật Bản</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CORE OFFER */}
      <section id="offer" className="py-20 lg:py-28 bg-[#C43838] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-light opacity-20 pointer-events-none"></div>
        <div className="absolute -top-[50%] -left-[10%] w-[80%] h-[100%] rounded-full bg-red-500/50 blur-[150px] pointer-events-none"></div>
        
        <div className="w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <div className="w-full lg:w-1/2 text-white">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/40 border border-red-950/60 font-mono text-xs sm:text-sm font-bold tracking-wider mb-6 shadow-sm backdrop-blur-sm">
              <Gift className="w-4 h-4 text-amber-300" />
              <span className="text-red-100">ƯU ĐÃI ĐỘC QUYỀN TRONG THÁNG NÀY</span>
            </div>
            
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-[1.2] mb-6 tracking-tight">
              GÓI KHỞI ĐỘNG:<br/> <span className="text-amber-300">"NHA KHOA PHÒNG NGỪA & TRỊ LIỆU SINH HỌC MiCD"</span>
            </h2>
            
            <p className="text-red-100 font-body text-base sm:text-lg leading-relaxed mb-8 opacity-90 max-w-xl">
              (Đặc quyền hỗ trợ trải nghiệm lâm sàng từ Sota-D – Giới hạn 20 phòng khám đăng ký sớm nhất)
            </p>
            
            <div className="bg-red-950/30 backdrop-blur-sm border border-red-900/50 rounded-2xl p-6 sm:p-8 mb-8 space-y-6 shadow-xl">
              <div className="space-y-4">
                 <h4 className="font-heading font-bold text-lg text-amber-300 border-b border-red-900/50 pb-2">📦 BỘ SẢN PHẨM CỐT LÕI</h4>
                 <ul className="space-y-3 font-body text-sm sm:text-base">
                    <li className="flex items-start gap-3">
                       <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                       <div><strong className="text-white">1. PRG Barrier Coat Mini-Kit</strong> (8 liều Base + 0.9ml Active) <span className="block text-red-200/70 text-xs mt-0.5">Trị giá niêm yết: 945.000 VNĐ</span></div>
                    </li>
                    <li className="flex items-start gap-3">
                       <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                       <div><strong className="text-white">2. BeautiSealant Set</strong> (01 Paste 1.2g + 01 Primer 6ml) <span className="block text-red-200/70 text-xs mt-0.5">Trị giá niêm yết: 1.600.000 VNĐ</span></div>
                    </li>
                    <li className="flex items-start gap-3">
                       <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                       <div><strong className="text-white">3. Beautifil Flow Plus F02 / F00</strong> (Composite lỏng sinh học 2g) <span className="block text-red-200/70 text-xs mt-0.5">Trị giá niêm yết: 850.000 VNĐ</span></div>
                    </li>
                 </ul>
              </div>

              <div className="space-y-4 pt-4 border-t border-red-900/50">
                 <h4 className="font-heading font-bold text-lg text-amber-300 border-b border-red-900/50 pb-2">🎁 BỘ QUÀ TẶNG TÀI TRỢ 100%</h4>
                 <ul className="space-y-3 font-body text-sm sm:text-base">
                    <li className="flex items-start gap-3">
                       <Gift className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                       <div><strong className="text-white">Bonus 1:</strong> Bộ đĩa đánh bóng mịn Super-Snap Mini Kit (Trị giá 450.000 VNĐ)</div>
                    </li>
                    <li className="flex items-start gap-3">
                       <Gift className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                       <div><strong className="text-white">Bonus 2:</strong> E-Guidebook Phác đồ "Triệt Tiêu Ê Buốt & Kiểm Soát Sâu Răng..." (Trị giá 1.500.000 VNĐ)</div>
                    </li>
                    <li className="flex items-start gap-3">
                       <Gift className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                       <div><strong className="text-white">Bonus 3:</strong> Vé Đặc Quyền Zalo VIP Group - Cố vấn lâm sàng 1:1 (Trị giá 2.000.000 VNĐ)</div>
                    </li>
                 </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-red-950/40 p-4 sm:p-6 rounded-2xl border border-red-900/50">
               <div>
                  <p className="text-red-200 text-sm mb-1 font-medium line-through">Tổng giá trị thực tế: 7.345.000 VNĐ</p>
                  <div className="flex items-end gap-2">
                     <span className="text-3xl sm:text-4xl font-heading font-extrabold text-amber-300">3.395.000<span className="text-xl sm:text-2xl">đ</span></span>
                  </div>
                  <p className="text-emerald-400 font-bold text-sm mt-1 flex items-center gap-1"><Sparkles className="w-4 h-4"/> Tiết kiệm &gt;50% hôm nay</p>
               </div>
               
               <CtaButton onClick={() => openCampaignModal("Đặt Mua Gói Khởi Động Nha Khoa Phòng Ngừa - 3.395.000đ")} className="w-full sm:w-auto bg-amber-400 hover:bg-amber-300 text-red-950 font-bold py-4 px-8 rounded-xl flex justify-center items-center gap-2 transition-all shadow-[0_0_30px_rgba(251,191,36,0.3)] hover:shadow-[0_0_40px_rgba(251,191,36,0.5)] whitespace-nowrap ml-auto">
                 ĐĂNG KÝ MUA NGAY <ArrowRight className="w-5 h-5"/>
               </CtaButton>
            </div>
            
            <div className="mt-6 flex gap-3 p-4 bg-emerald-500/20 border border-emerald-500/30 rounded-xl">
               <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
               <p className="text-sm font-body text-emerald-50"><strong className="text-emerald-300 font-bold uppercase">Cam kết đảo ngược rủi ro:</strong> Dùng thử 1 liều PRG Barrier Coat đầu tiên. Nếu Bác sĩ cảm thấy không hiệu quả hoặc không hợp tay nghề, Sota-D hỗ trợ thu hồi bộ sản phẩm còn lại và <strong className="text-white">hoàn tiền 100%</strong> không cần giải thích!</p>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative hidden lg:block">
            <ImagePlaceholder className="w-full aspect-[4/5] rounded-3xl bg-red-900/30 border border-red-800 shadow-2xl" text="Ảnh Gói Khởi Động Phòng Ngừa" />
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
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 font-bold text-xs uppercase tracking-wide mb-6">📘 LEAD MAGNET 1: SỔ TAY LÂM SÀNG PHÒNG NGỪA</div>
                <h3 className="font-heading font-bold text-2xl text-slate-900 mb-4 leading-snug">Phác Đồ 4 Bước Trị Liệu Ê Buốt & Kiểm Soát Sâu Răng Nguy Cơ Cao Theo Triết Lý MiCD (File PDF 15 Trang)</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">Nội dung: Hướng dẫn từng bước xử lý mòn cổ răng, tụt nướu, chăm sóc răng niềng quanh mắc cài và quy trình trám hố rãnh không Etching.</p>
              </div>
              <CtaButton onClick={() => openCampaignModal("Điền SĐT nhận Ebook MiCD qua Zalo")} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl flex justify-center items-center gap-2 transition-colors">
                ĐIỀN SĐT NHẬN EBOOK QUA ZALO NGAY
              </CtaButton>
            </div>
            
            {/* Sample Kit */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-200 shadow-xl flex flex-col justify-between hover:shadow-2xl transition-shadow">
              <div>
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs uppercase tracking-wide mb-6">🎁 LEAD MAGNET 2: NHẬN KIT MẪU THỬ</div>
                <h3 className="font-heading font-bold text-2xl text-slate-900 mb-4 leading-snug">Đăng Ký Nhận Kit Mẫu Thử Tận Phòng Khám</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">Sota-D dành tặng 30 suất trải nghiệm mẫu thử PRG Barrier Coat (Bộ Mini) giao tận tay Bác sĩ trên toàn quốc hoàn toàn Miễn Phí.</p>
              </div>
              <CtaButton onClick={() => openCampaignModal("Đăng ký nhận Sample Kit PRG Barrier Coat")} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl flex justify-center items-center gap-2 transition-colors">
                ĐĂNG KÝ NHẬN SAMPLE KIT TẠI ĐÂY
              </CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: FAQ */}
      <section className="py-20 lg:py-28 bg-white relative border-t border-slate-200 overflow-hidden">
        <div className="w-[90%] lg:w-[80%] mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-slate-900 leading-[1.3] mb-4 tracking-tight">Câu Hỏi Thường Gặp <br className="block sm:hidden" /><span className="text-[#C43838]">(FAQs Chuẩn Y Khoa)</span></h2>
          </div>
          <div className="space-y-4 order-6 lg:order-none">
            {faqs.map((faq, idx) => (
              <AccordionItem 
                key={idx}
                question={faq.q}
                answer={faq.a}
                isOpen={openFaqIndex === idx} 
                onClick={() => setOpenFaqIndex(openFaqIndex === idx ? -1 : idx)}
              />
            ))}
          </div>
        </div>
      </section>
      
      <CampaignModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title={campaignModalTitle} 
      />
    </div>
  );
}

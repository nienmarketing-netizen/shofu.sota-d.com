import React, { useState } from 'react';
import { Gift, BookOpen, CheckCircle, ArrowRight, ShieldCheck, Zap, Layers, Beaker, ChevronDown, Sparkles, AlertTriangle, ShieldAlert, Syringe, Shield, Star, Award, Microscope, Droplets, Target, Quote, XCircle } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { CampaignModal } from '../../CampaignModal';
import { CtaButton } from '../../ui/CtaButton';

const ImagePlaceholder = ({ className, text }: { className?: string; text: string }) => (
  <div className={`flex items-center justify-center p-4 text-center ${className} bg-slate-100/80 border-dashed border-2 border-slate-300 shadow-sm`}>
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
            <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-slate-600 font-body text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const row1Feedbacks = [
  {
    quote: "Công nghệ véc-ni PRG Barrier Coat và BeautiSealant ứng dụng S-PRG hoạt động như một phép màu giúp tăng tốc quy trình lâm sàng cho các bé nhỏ hiếu động nhờ loại bỏ hoàn toàn bước Etching nhạy cảm.",
    name: "Dr. Shukan Kanuga",
    title: "Hiệp hội Nha khoa Trẻ em Hoa Kỳ, California"
  },
  {
    quote: "Từ ngày ứng dụng PRG Barrier Coat vào phòng khám, các ca mòn cổ răng và ê buốt ngà được xử lý cực kỳ nhẹ nhàng, bệnh nhân phản hồi rất tích cực vì không cần mài răng.",
    name: "BS. Nguyễn Văn Tuấn",
    title: "Phòng khám Nha khoa Nụ Cười Mới"
  },
  {
    quote: "Khả năng chống ê buốt ngà của PRG Barrier Coat kéo dài tới vài tháng là chìa khóa giúp phòng khám của tôi xử lý êm đẹp các ca tụt nướu và mòn cổ răng mà không cần xâm lấn mài mô răng.",
    name: "Prof. Tanaka",
    title: "Đại học Y khoa Tokyo, Nhật Bản"
  },
  {
    quote: "Trám hố rãnh với BeautiSealant thực sự thay đổi cách chúng tôi làm việc. Không cần Etching, không lo đọng nước bọt, bảo vệ răng sâu cho trẻ em nhanh chóng và an toàn tuyệt đối.",
    name: "BS. Lê Thị Bích Ngọc",
    title: "Nha khoa Trẻ em KidSmile"
  },
  {
    quote: "Hạt độn S-PRG là bước tiến vượt bậc của nha khoa phòng ngừa. Nó không chỉ trám bít mà còn chủ động giải phóng Fluoride và các ion có lợi để tái khoáng hóa men răng liên tục.",
    name: "Dr. Howard Farran",
    title: "Tạp chí Nha khoa Dentaltown"
  }
];

const row2Feedbacks = [
  {
    quote: "Giải pháp phòng ngừa của Shofu giúp tôi xây dựng niềm tin tuyệt đối với phụ huynh khi điều trị cho trẻ. Đặc biệt là trẻ sợ đau, thao tác nhanh và êm ái là ưu điểm tuyệt đối.",
    name: "BS. Trần Trọng Cường",
    title: "Bác sĩ trưởng khoa Răng Hàm Mặt"
  },
  {
    quote: "Tôi dùng Giomer cho tất cả các ca sâu răng nguy cơ cao. Khả năng nạp và nhả Fluoride như một trạm sạc bảo vệ răng khỏi axit vi khuẩn là điều mà composite thông thường không làm được.",
    name: "Dr. Sarah Collins",
    title: "Chuyên gia Nha khoa Tổng quát, Úc"
  },
  {
    quote: "Màng bảo vệ PRG Barrier Coat thực sự hiệu quả với những bệnh nhân niềng răng. Việc bôi xung quanh mắc cài giúp ngăn ngừa đốm trắng do mất khoáng rất rõ rệt sau 6 tháng theo dõi.",
    name: "BS. Phạm Minh Đạt",
    title: "Chuyên gia Chỉnh nha quốc tế"
  },
  {
    quote: "Nha khoa bảo tồn sinh học với Giomer giúp chúng ta bảo vệ ngà sống một cách chủ động. Không chỉ phục hình, chúng ta đang trị liệu cho mô răng thực sự.",
    name: "Dr. David Clark",
    title: "Học viện Bioclear, Hoa Kỳ"
  },
  {
    quote: "Sự kết hợp giữa BeautiSealant và PRG Barrier Coat mang lại một hệ sinh thái phòng ngừa toàn diện. Dễ sử dụng, độ dán dính tuyệt vời và hoàn toàn không gây ê buốt.",
    name: "BS. Phạm Hoàng Yến",
    title: "Giám đốc chuyên môn Nha khoa Thẩm mỹ"
  }
];

const FeedbackCard: React.FC<{ item: any }> = ({ item }) => (
  <div className="w-[320px] sm:w-[400px] shrink-0 bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:bg-slate-800 transition-colors">
     <div>
       <Quote className="w-8 h-8 text-slate-500 mb-4 opacity-50" />
       <p className="font-body text-slate-300 text-sm sm:text-base leading-relaxed italic mb-6">
         "{item.quote}"
       </p>
     </div>
     <div className="flex items-center gap-4">
        <div className="text-left">
           <p className="font-bold text-white text-sm">{item.name}</p>
           <p className="text-slate-400 text-xs mt-0.5">{item.title}</p>
        </div>
     </div>
  </div>
);

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
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-tr from-[#C43838]/15 via-[#C43838]/5 to-transparent rounded-full transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        <div className="w-[90%] lg:w-[85%] xl:w-[80%] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 items-start relative z-10">
          <div className="w-full lg:w-[65%] xl:w-[60%] text-left">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#C43838]/10 border border-[#C43838]/20 mb-6 max-w-full overflow-hidden relative">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#C43838] animate-pulse shrink-0 relative z-10 shadow-[0_0_4px_rgba(196,56,56,0.8)]"></div>
              <div className="flex overflow-hidden relative w-full ">
                <div className="font-mono text-[10.5px] min-[375px]:text-[11.5px] sm:text-xs font-bold text-[#C43838] tracking-tight sm:tracking-wide whitespace-nowrap flex animate-marquee-slow w-max">
                  <span className="pr-8">✦ Triết lý nha khoa phòng ngừa MiCD & trị liệu sinh học từ Shofu (Nhật Bản) ✦</span>
                  <span className="pr-8">✦ Triết lý nha khoa phòng ngừa MiCD & trị liệu sinh học từ Shofu (Nhật Bản) ✦</span>
                </div>
              </div>
            </div>
            
            <h1 className="font-heading font-extrabold text-[1.65rem] min-[375px]:text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl text-slate-900 leading-[1.3] mb-6 tracking-tight lg:pr-4 xl:pr-0 lg:-mr-8 xl:-mr-12 text-left">
              Làm chủ giải pháp <br className="block lg:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C43838] to-[#E54848]">nha khoa phòng ngừa</span> <br className="block lg:hidden" />
              <span className="hidden lg:inline"> </span>theo triết lý MiCD
            </h1>
            
            {/* Mobile Image */}
            <div className="lg:hidden my-6 sm:my-8 flex justify-start">
              <img fetchPriority="high" loading="eager" src="/image/Shofu-giai-phap-nha-khoa-phong-ngua.webp" alt="Hệ thống Nha khoa Phòng ngừa Shofu" referrerPolicy="no-referrer" className="w-full max-w-[340px] sm:max-w-[420px] h-auto object-contain relative z-10" />
            </div>
            
            <p className="font-body text-base sm:text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl text-left">
              Đừng chỉ chờ răng hỏng để "trám bít cơ học". Làm chủ giải pháp Nha khoa Phòng ngừa Chủ động cùng bộ đôi công nghệ <strong className="font-bold text-[#C43838] bg-red-50 px-1.5 py-0.5 rounded">PRG Barrier Coat</strong> & <strong className="font-bold text-[#C43838] bg-red-50 px-1.5 py-0.5 rounded">BeautiSealant</strong>: Triệt tiêu 100% ê buốt ngà tức thì (kéo dài đến 6 tháng), trám bít hố rãnh không cần Etching, và liên tục sạc-nhả 6 loại ion sinh học bảo vệ răng khỏi sâu thứ phát.
            </p>



          </div>
          
          {/* Desktop Image */}
          <div className="hidden lg:block w-full lg:w-[35%] xl:w-[40%] relative mt-8 lg:mt-0">
             <img fetchPriority="high" loading="eager" src="/image/Shofu-giai-phap-nha-khoa-phong-ngua.webp" alt="Hệ thống Nha khoa Phòng ngừa Shofu" referrerPolicy="no-referrer" className="w-full h-auto object-contain relative z-10 drop-shadow-2xl lg:-ml-4 xl:-ml-8" />
          </div>
        </div>
        {/* USPs Separated */}
        <div className="w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10 mt-12 pb-4">
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <li className="flex flex-row sm:flex-col items-start sm:items-center text-left sm:text-center gap-4 sm:gap-3 p-4 sm:p-5 rounded-xl border border-slate-200/80 bg-white/70 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                  <span className="text-xl sm:text-2xl">🇯🇵</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-1 leading-snug">Made in Japan</h4>
                  <p className="text-slate-600 text-sm leading-relaxed mt-1 sm:mt-0">Công nghệ hạt độn S-PRG độc quyền từ Tập đoàn Shofu.</p>
                </div>
              </li>
              <li className="flex flex-row sm:flex-col items-start sm:items-center text-left sm:text-center gap-4 sm:gap-3 p-4 sm:p-5 rounded-xl border border-slate-200/80 bg-white/70 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-rose-50 flex items-center justify-center shrink-0">
                  <span className="text-xl sm:text-2xl">🧪</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-1 leading-snug">Chứng nhận Y văn</h4>
                  <p className="text-slate-600 text-sm leading-relaxed mt-1 sm:mt-0">JADA & Nature 2018 chứng minh khả năng trung hòa axit và ức chế S. mutans.</p>
                </div>
              </li>
              <li className="flex flex-row sm:flex-col items-start sm:items-center text-left sm:text-center gap-4 sm:gap-3 p-4 sm:p-5 rounded-xl border border-slate-200/80 bg-white/70 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-amber-50 flex items-center justify-center shrink-0">
                  <span className="text-xl sm:text-2xl">🛡️</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-1 leading-snug">Màng phủ HEMA-Free</h4>
                  <p className="text-slate-600 text-sm leading-relaxed mt-1 sm:mt-0">Tự dán, kỵ nước, không cồn, không Acetone, an toàn cho trẻ em và người già.</p>
                </div>
              </li>
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-10">
              <CtaButton 
                onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#C43838] text-white px-4 sm:px-8 py-3.5 sm:py-4 rounded-full font-mono text-[11px] min-[375px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-red-600 hover:shadow-xl hover:shadow-red-600/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap flex-nowrap"
              >
                <span className="truncate">NHẬN ƯU ĐÃI GÓI PHÒNG NGỪA CHỦ ĐỘNG</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </CtaButton>
              <CtaButton 
                onClick={() => document.getElementById('lead-magnet')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-white text-slate-700 border border-slate-300 px-4 sm:px-8 py-3.5 sm:py-4 rounded-full font-mono text-[11px] min-[375px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-slate-50 hover:border-slate-400 hover:text-slate-900 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap flex-nowrap"
              >
                <span className="truncate">NHẬN SỔ TAY PHÁC ĐỒ PHÒNG NGỪA</span>
              </CtaButton>
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
            
            <h2 className="font-heading font-extrabold text-2xl min-[375px]:text-3xl sm:text-4xl lg:text-[2.5rem] xl:text-[2.75rem] text-white leading-[1.3] mb-4 tracking-tight text-center">
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
               <h3 className="font-heading font-bold text-lg sm:text-xl text-white">1. Ám ảnh ê buốt tái phát ở bệnh nhân mòn răng, tụt nướu & tẩy trắng</h3>
               <p className="font-body text-slate-400 text-sm leading-relaxed">
                 Bôi các chất chống ê buốt thông thường chỉ mang tính chất "giảm đau ngọn". Sau vài ngày đến vài tuần, màng phủ bị rửa trôi, ống ngà hở trở lại khiến bệnh nhân tiếp tục than phiền vì nhạy cảm nóng lạnh.
               </p>
            </div>
            
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 md:p-8 flex flex-col gap-4">
               <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-amber-400" />
               </div>
               <h3 className="font-heading font-bold text-lg sm:text-xl text-white">2. Rào cản kỹ thuật khi trám bít hố rãnh (Sealant) cho trẻ nhỏ hiếu động</h3>
               <p className="font-body text-slate-400 text-sm leading-relaxed">
                 Trẻ em không thể ngồi yên để Bác sĩ thực hiện quy trình Acid Etching rửa nước – thổi khô lách cách. Chỉ một giọt nước bọt ngấm vào là toàn bộ màng Sealant bị bong tróc, tạo kẽ hở cho vi khuẩn ẩn nấp gây sâu răng bùng phát dưới lớp trám.
               </p>
            </div>
            
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 md:p-8 flex flex-col gap-4">
               <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-orange-400" />
               </div>
               <h3 className="font-heading font-bold text-lg sm:text-xl text-white">3. Sự bất lực trước nhóm bệnh nhân nguy cơ sâu răng cao (Caries Risk)</h3>
               <p className="font-body text-slate-400 text-sm leading-relaxed">
                 Bệnh nhân đang niềng răng (quanh mắc cài bám đầy mảng bám), răng chen chúc khó vệ sinh, đốm trắng đe dọa mất khoáng hay người già lộ chân răng... Vật liệu trám thụ động thông thường hoàn toàn "bất động", không có khả năng chống lại sự tấn công của axit vi khuẩn.
               </p>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 w-full max-w-5xl mx-auto">
            <div className="w-full lg:w-1/2">
              <img loading="lazy" 
                 src="/image/nha-khoa-phong-ngua-va-nhung-diem-mu.webp" 
                 alt="Nha khoa phòng ngừa và những điểm mù" 
                 referrerPolicy="no-referrer" 
                 className="w-full lg:w-[70%] lg:mx-auto h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="w-full lg:w-1/2">
               <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6 sm:p-8 text-left h-full flex items-center shadow-xl">
                 <p className="font-body text-slate-300 text-base sm:text-lg leading-relaxed">
                    Bác sĩ không thao tác sai, nhưng chính việc dùng <strong className="text-white">VẬT LIỆU THỤ ĐỘNG</strong> đã vô tình biến các vùng nguy cơ thành <strong className="text-red-400 text-lg">"quả bom nổ chậm"</strong> dưới nướu!
                 </p>
               </div>
            </div>
          </div>
          <div className="mt-12 md:mt-16 text-center">
            <CtaButton onClick={() => openCampaignModal("TÌM HIỂU GIẢI PHÁP KHẮC PHỤC NGAY")} className="group relative inline-flex items-center justify-center gap-2 bg-[#C43838] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-mono text-xs sm:text-sm font-bold uppercase tracking-wide sm:tracking-wider hover:bg-red-600 hover:shadow-xl hover:shadow-red-600/30 transition-all duration-300 hover:-translate-y-1">
              <span>TÌM HIỂU GIẢI PHÁP KHẮC PHỤC NGAY</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </CtaButton>
          </div>
        </div>
      </section>

      {/* SECTION 3: BIOACTIVE SOLUTION */}
      <section className="py-20 lg:py-28 bg-slate-50 bg-grid-pattern relative overflow-hidden border-t border-slate-200">
        <div className="w-[90%] lg:w-[80%] mx-auto relative z-10 flex flex-col gap-0 lg:gap-12">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <div className="flex-1 w-full space-y-6">
              <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-[#C43838]/10 text-[#C43838] font-mono font-bold text-xs mb-4 border border-[#C43838]/20 tracking-wider">
                Triết lý MiCD
              </div>
              <h2 className="font-heading font-extrabold text-2xl min-[400px]:text-3xl sm:text-4xl lg:text-[2.75rem] text-slate-900 leading-[1.3] mb-4 tracking-tight">
                Từ phục hình thụ động đến <br className="hidden sm:block" />
                <span className="text-[#C43838]">trị liệu sinh học chủ động</span>
              </h2>
              <div className="w-24 h-1 bg-[#C43838]"></div>
              
              <p className="font-body text-slate-600 text-base sm:text-lg leading-relaxed">
                Để giải quyết tận gốc nguy cơ sâu răng và nhạy cảm ngà, vật liệu nha khoa không được phép nằm "trơ" cơ học. Vật liệu phải <strong className="text-slate-900 font-bold">SỐNG</strong> và tương tác liên tục với môi trường miệng.
              </p>
              
              {/* Mobile Image */}
              <div className="block lg:hidden w-full relative pt-2 pb-6">
                 <img loading="lazy" src="/image/Shofu-S-PRG-technology.webp" alt="Công nghệ S-PRG giải phóng 6 Ion" referrerPolicy="no-referrer" className="w-full max-w-[320px] mx-auto h-auto object-contain relative z-10 drop-shadow-xl" />
              </div>
              <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900 pt-4">Cốt lõi công nghệ hạt độn sinh học S-PRG (Giomer) khép kín 3 lớp:</h3>
              <p className="font-body text-slate-600 text-base leading-relaxed pb-4">
                Không giống như Fluoride dạng véc-ni thụ động dễ bị trôi, hạt độn S-PRG (Surface Pre-Reacted Glass-ionomer) của Shofu chứa lõi thủy tinh đa chức năng fluoro-boro-alumino-silicate, hoạt động như một <strong className="text-[#C43838]">"Bình ắc quy sinh học"</strong> liên tục giải phóng và tự sạc lại 6 loại ion y tế:
              </p>

              
            </div>
            
            <div className="hidden lg:block w-full lg:w-[45%] relative mt-8 lg:mt-0">
              <img loading="lazy" src="/image/Shofu-S-PRG-technology.webp" alt="Công nghệ S-PRG giải phóng 6 Ion" referrerPolicy="no-referrer" className="w-full h-auto object-contain relative z-10 drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500" />
            </div>
          </div>
          {/* 4 Ions Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 w-full max-w-full">
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-row sm:flex-col items-center sm:text-center gap-4 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-rose-50 flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-[#C43838]" />
              </div>
              <div className="flex-1 text-left sm:text-center">
                <h4 className="font-heading font-bold text-slate-900 text-base mb-1 sm:mb-2 leading-tight">F⁻ & Sr²⁺</h4>
                <p className="font-body text-slate-600 text-sm leading-relaxed">Tái khoáng hóa ngà răng, bít kín vĩnh viễn các ống ngà hở.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-row sm:flex-col items-center sm:text-center gap-4 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <div className="flex-1 text-left sm:text-center">
                <h4 className="font-heading font-bold text-slate-900 text-base mb-1 sm:mb-2 leading-tight">Na⁺ & SiO₃²⁻</h4>
                <p className="font-body text-slate-600 text-sm leading-relaxed">Thúc đẩy sự phục hồi vi mô cấu trúc ngà răng bị suy thoái.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-row sm:flex-col items-center sm:text-center gap-4 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-amber-50 flex items-center justify-center shrink-0">
                <Microscope className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
              </div>
              <div className="flex-1 text-left sm:text-center">
                <h4 className="font-heading font-bold text-slate-900 text-base mb-1 sm:mb-2 leading-tight">BO₃³⁻</h4>
                <p className="font-body text-slate-600 text-sm leading-relaxed">Ức chế vi khuẩn S. mutans, triệt tiêu sự hình thành Biofilm.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-row sm:flex-col items-center sm:text-center gap-4 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                <Droplets className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
              </div>
              <div className="flex-1 text-left sm:text-center">
                <h4 className="font-heading font-bold text-slate-900 text-base mb-1 sm:mb-2 leading-tight">Al³⁺</h4>
                <p className="font-body text-slate-600 text-sm leading-relaxed">Trung hòa axit chủ động, ngăn chặn triệt để quá trình khử khoáng.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 md:mt-16 text-center">
            <CtaButton onClick={() => openCampaignModal("TƯ VẤN ỨNG DỤNG CÔNG NGHỆ GIOMER")} className="group relative inline-flex items-center justify-center gap-2 bg-[#C43838] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-mono text-xs sm:text-sm font-bold uppercase tracking-wide sm:tracking-wider hover:bg-red-600 hover:shadow-xl hover:shadow-red-600/30 transition-all duration-300 hover:-translate-y-1">
              <span>TƯ VẤN ỨNG DỤNG CÔNG NGHỆ GIOMER</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </CtaButton>
          </div>
        </div>
      </section>

      {/* SECTION 4: CORE PRODUCTS */}
      <section className="py-20 lg:py-28 bg-white bg-grid-pattern relative border-y border-slate-200 overflow-hidden">
        <div className="w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-slate-900 leading-[1.3] tracking-tight">
              Giải pháp <span className="relative inline-block"><span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#C43838] to-[#E54848]">phòng ngừa chủ động</span><span className="absolute bottom-0 sm:bottom-1 left-0 w-full h-2.5 sm:h-3.5 bg-red-100/80 -z-10 rounded-sm skew-x-[-10deg]"></span></span> từ Shofu
            </h2>
            <div className="w-24 h-1 bg-[#C43838] mx-auto my-6"></div>
          </div>

          <div className="space-y-16 lg:space-y-24">
                        {/* PRODUCT 1 */}
            <div className="flex flex-col gap-8">
               <div className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-16 items-center">
                  <div className="w-full lg:w-1/2 flex flex-col gap-5 sm:gap-6">
                     <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-red-50 text-red-600 font-bold text-xs tracking-wide w-fit">
                       1. Véc-ni chống ê buốt
                     </div>
                     <h3 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 leading-tight">
                        PRG Barrier Coat – Áo giáp bioactive mỏng 15µm
                     </h3>
                     {/* Mobile Image */}
                     <div className="block lg:hidden w-full relative py-4">
                        <img loading="lazy" src="/image/PRG-Barrier-Coat-Shofu.webp" alt="PRG Barrier Coat" referrerPolicy="no-referrer" className="w-full max-w-[300px] mx-auto h-auto object-contain drop-shadow-xl" />
                     </div>
                     <p className="font-body text-slate-600 text-base leading-relaxed">
                        Vật liệu phủ bảo vệ ngà răng sinh học không chứa HEMA, không cồn, không Acetone, giải phóng ion kéo dài lên đến 6 tháng chỉ sau một lần bôi duy nhất.
                     </p>
                  </div>
                  {/* Desktop Image */}
                  <div className="hidden lg:block w-full lg:w-1/2 relative">
                     <img loading="lazy" src="/image/PRG-Barrier-Coat-Shofu.webp" alt="PRG Barrier Coat" referrerPolicy="no-referrer" className="w-full h-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500" />
                  </div>
               </div>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="flex gap-3 items-start p-3 sm:p-4 rounded-xl border transition-colors bg-red-50/50 border-red-100 hover:bg-red-50 hover:border-red-200">
                     <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                     <div className="text-sm sm:text-base text-slate-700 leading-relaxed">
                        <strong className="text-slate-900 font-bold">100% HEMA-Free & Acetone-Free:</strong> An toàn tuyệt đối, kỵ nước (hydrophobic) giúp màng phủ kháng mòn tối đa trước nước bọt. Không gây viêm nướu, không kích ứng tủy.
                     </div>
                  </div>
                  <div className="flex gap-3 items-start p-3 sm:p-4 rounded-xl border transition-colors bg-red-50/50 border-red-100 hover:bg-red-50 hover:border-red-200">
                     <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                     <div className="text-sm sm:text-base text-slate-700 leading-relaxed">
                        <strong className="text-slate-900 font-bold">Màng phủ siêu mỏng 15 micron:</strong> Tự dán dính, không gây cộm cấn khớp cắn hay thay đổi hình thể răng.
                     </div>
                  </div>
                  <div className="flex gap-3 items-start p-3 sm:p-4 rounded-xl border transition-colors bg-red-50/50 border-red-100 hover:bg-red-50 hover:border-red-200">
                     <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                     <div className="text-sm sm:text-base text-slate-700 leading-relaxed">
                        <strong className="text-slate-900 font-bold">Quy trình 1 bước tinh gọn:</strong> Bôi véc-ni ➔ Chiếu đèn 10 giây ➔ Lau sạch lớp ức chế oxy bằng bông ẩm. Không cần Etching, không nhạy cảm kỹ thuật.
                     </div>
                  </div>
                  <div className="flex gap-3 items-start p-3 sm:p-4 rounded-xl border transition-colors bg-red-50/50 border-red-100 hover:bg-red-50 hover:border-red-200">
                     <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                     <div className="text-sm sm:text-base text-slate-700 leading-relaxed">
                        <strong className="text-slate-900 font-bold">Chỉ định lâm sàng đa năng:</strong> Điều trị triệt tiêu ê buốt tức thì do mòn răng, mòn cổ, tụt nướu, nhạy cảm sau tẩy trắng. Bảo vệ chống sâu răng chủ động.
                     </div>
                  </div>
               </div>
            </div>

            {/* PRODUCT 2 */}
            <div className="flex flex-col gap-8">
               <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
                  <div className="w-full lg:w-1/2 flex flex-col gap-5 sm:gap-6">
                     <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 font-bold text-xs tracking-wide w-fit">
                       2. Trám bít hố rãnh
                     </div>
                     <h3 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 leading-tight">
                        BeautiSealant – Self-etching sealant không cần Etching
                     </h3>
                     {/* Mobile Image */}
                     <div className="block lg:hidden w-full relative py-4">
                        <img loading="lazy" src="/image/BeautiSealant-shofu.webp" alt="BeautiSealant" referrerPolicy="no-referrer" className="w-full max-w-[300px] mx-auto h-auto object-contain drop-shadow-xl" />
                     </div>
                     <p className="font-body text-slate-600 text-base leading-relaxed">
                        Giải pháp trám bít hố rãnh thế hệ mới giúp tối ưu hóa thời gian ghế nha (Chair-time) cho Bác sĩ Nha khoa Trẻ em và Nha khoa Tổng quát.
                     </p>
                  </div>
                  {/* Desktop Image */}
                  <div className="hidden lg:block w-full lg:w-1/2 relative">
                     <img loading="lazy" src="/image/BeautiSealant-shofu.webp" alt="BeautiSealant" referrerPolicy="no-referrer" className="w-full h-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500" />
                  </div>
               </div>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="flex gap-3 items-start p-3 sm:p-4 rounded-xl bg-blue-50/50 border border-blue-100 hover:bg-blue-50 hover:border-blue-200 transition-colors">
                     <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                     <div className="text-sm sm:text-base text-slate-700 leading-relaxed">
                        <strong className="text-slate-900 font-bold">Zero Etching Technique:</strong> Sử dụng Self-Etch Primer dịu nhẹ chứa Monomer MDP dán dính hóa học chắc chắn mà không cần dùng Axit Phosphoric Etching rửa nước.
                     </div>
                  </div>
                  <div className="flex gap-3 items-start p-3 sm:p-4 rounded-xl bg-blue-50/50 border border-blue-100 hover:bg-blue-50 hover:border-blue-200 transition-colors">
                     <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                     <div className="text-sm sm:text-base text-slate-700 leading-relaxed">
                        <strong className="text-slate-900 font-bold">Đầu bơm Tip 27Ga siêu nhỏ:</strong> Tự san bằng và đắp lót len lỏi chính xác vào các đáy hố rãnh hẹp mà không tạo bọt khí.
                     </div>
                  </div>
                  <div className="flex gap-3 items-start p-3 sm:p-4 rounded-xl bg-blue-50/50 border border-blue-100 hover:bg-blue-50 hover:border-blue-200 transition-colors">
                     <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                     <div className="text-sm sm:text-base text-slate-700 leading-relaxed">
                        <strong className="text-slate-900 font-bold">Tích hợp S-PRG Ion Shield:</strong> Bảo vệ hố rãnh khỏi mảng bám vi khuẩn, liên tục sạc Fluoride từ kem đánh răng hàng ngày.
                     </div>
                  </div>
               </div>
            </div>
          </div>
          <div className="mt-12 md:mt-16 text-center">
            <CtaButton onClick={() => openCampaignModal("NHẬN BÁO GIÁ VÀ TƯ VẤN SẢN PHẨM")} className="group relative inline-flex items-center justify-center gap-2 bg-[#C43838] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-mono text-xs sm:text-sm font-bold uppercase tracking-wide sm:tracking-wider hover:bg-red-600 hover:shadow-xl hover:shadow-red-600/30 transition-all duration-300 hover:-translate-y-1">
              <span>NHẬN BÁO GIÁ VÀ TƯ VẤN SẢN PHẨM</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </CtaButton>
          </div>
        </div>
      </section>

      {/* SECTION 5: SCIENTIFIC PROOF */}
      <section className="py-20 lg:py-28 bg-slate-900 relative border-y border-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-light opacity-100 pointer-events-none"></div>
        <div className="w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-white leading-[1.3] mb-6 tracking-tight">
              Bằng chứng y văn <br className="block sm:hidden" /><span className="relative inline-block px-3 py-1 mt-1 sm:mt-0"><span className="absolute inset-0 bg-red-500/20 border border-red-500/30 rounded-xl -rotate-2 shadow-[0_0_15px_rgba(239,68,68,0.2)]"></span><span className="relative text-amber-300">vững chắc</span></span>
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
              <h3 className="font-heading font-bold text-lg sm:text-2xl text-white">1. Bảo chứng y văn JADA (Đại học Florida - Theo dõi 8 năm & 13 năm)</h3>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                   <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 shrink-0" />
                   <span className="text-slate-300 font-body text-sm sm:text-base leading-relaxed"><strong className="text-white">Mốc 8 năm:</strong> 100% Tỷ lệ lưu giữ phục hình | 0% Ê buốt ngà | 0% Sâu răng thứ phát.</span>
                </li>
                <li className="flex gap-3 items-start">
                   <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 shrink-0" />
                   <span className="text-slate-300 font-body text-sm sm:text-base leading-relaxed"><strong className="text-white">Mốc 13 năm:</strong> 96% Phục hình hoàn toàn sạch bóng sâu răng tái phát, chứng minh khả năng phòng thủ sinh học vĩnh cửu của hệ sinh thái Giomer.</span>
                </li>
              </ul>
            </div>
            
            {/* Proof 2 */}
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-3xl p-8 lg:p-10 flex flex-col gap-6">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center border border-emerald-500/30">
                <Microscope className="w-8 h-8" />
              </div>
              <h3 className="font-heading font-bold text-lg sm:text-2xl text-white">2. Nghiên cứu đột phá từ Tạp chí Nature (Scientific Reports 2018)</h3>
              <p className="text-slate-300 font-body text-sm sm:text-base leading-relaxed">
                Thử nghiệm kính hiển vi điện tử quét (SEM) minh chứng: Sau 24 giờ không đánh răng, bề mặt chứa hạt độn S-PRG hoàn toàn sạch bóng vi khuẩn, hoàn toàn không bị lớp màng sinh học Biofilm bám đọng so với các vật liệu composite trơ thông thường.
              </p>
            </div>
          </div>

          {/* Testimonials */}
          <div className="text-center mb-8">
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">3. Đánh giá từ chuyên gia lâm sàng quốc tế & trong nước</h3>
          </div>
          <div className="w-full relative py-4 mask-image-horizontal">
            <div className="flex w-max animate-marquee-slow hover:[animation-play-state:paused] gap-6">
               {[...row1Feedbacks, ...row1Feedbacks, ...row1Feedbacks, ...row1Feedbacks].map((item, idx) => (
                 <FeedbackCard key={`row1-${idx}`} item={item} />
               ))}
            </div>
            <div className="flex w-max animate-marquee-slow hover:[animation-play-state:paused] gap-6 mt-6" style={{ animationDirection: 'reverse' }}>
               {[...row2Feedbacks, ...row2Feedbacks, ...row2Feedbacks, ...row2Feedbacks].map((item, idx) => (
                 <FeedbackCard key={`row2-${idx}`} item={item} />
               ))}
            </div>
          </div>
          <div className="mt-12 md:mt-16 text-center">
            <CtaButton onClick={() => openCampaignModal("ỨNG DỤNG NGAY CHO PHÒNG KHÁM")} className="group relative inline-flex items-center justify-center gap-2 bg-[#C43838] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-mono text-xs sm:text-sm font-bold uppercase tracking-wide sm:tracking-wider hover:bg-red-600 hover:shadow-xl hover:shadow-red-600/30 transition-all duration-300 hover:-translate-y-1">
              <span>ỨNG DỤNG NGAY CHO PHÒNG KHÁM</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </CtaButton>
          </div>
        </div>
      </section>

      {/* SECTION 6: CORE OFFER */}
      <section id="offer" className="py-20 lg:py-28 bg-slate-900 bg-grid-pattern-light relative overflow-hidden">
        
        <div className="absolute -top-[50%] -left-[10%] w-[80%] h-[100%] rounded-full bg-gradient-to-tr from-red-500/10 to-transparent pointer-events-none"></div>
        
        <div className="w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
          <div className="text-center text-white mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/40 border border-red-950/60 font-mono text-xs sm:text-sm font-bold tracking-wider mb-6 shadow-sm mx-auto">
              <Gift className="w-4 h-4 text-amber-300" />
              <span className="text-red-100">Ưu đãi độc quyền trong tháng này</span>
            </div>
            
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.3] mb-6 tracking-tight">
              Gói khởi động:<br className="hidden md:block" /> <span className="text-amber-300">"Nha khoa phòng ngừa & trị liệu sinh học MiCD"</span>
            </h2>
            
            <p className="text-red-100 font-body text-base sm:text-lg leading-relaxed opacity-90 max-w-2xl mx-auto">
              (Đặc quyền hỗ trợ trải nghiệm lâm sàng từ Sota-D – Giới hạn 20 phòng khám đăng ký sớm nhất)
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
            <div className="bg-red-950/30 border border-red-900/50 rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col">
              <div className="w-full relative mb-6">
                 <ImagePlaceholder className="w-full aspect-[4/3] rounded-xl bg-red-900/30 border border-red-800/50 shadow-inner" text="Ảnh Bộ sản phẩm cốt lõi" />
              </div>
              <div className="space-y-4 flex-1">
                 <h4 className="font-heading font-bold text-lg text-amber-300 border-b border-red-900/50 pb-2">Bộ sản phẩm cốt lõi</h4>
                 <ul className="space-y-3 font-body text-sm sm:text-base">
                    <li className="flex items-start gap-3">
                       <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" /><div className="text-slate-300"><strong className="text-white">01 Bộ PRG Barrier Coat Mini-Kit</strong> <br/> (8 liều Base + 0.9ml Active)</div>
                    </li>
                    <li className="flex items-start gap-3">
                       <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" /><div className="text-slate-300"><strong className="text-white">01 Bộ BeautiSealant Set</strong> <br/> (01 Tuýp Paste 1.2g + 01 Chai Primer 6ml)</div>
                    </li>
              </ul>
              </div>
            </div>
            
            <div className="bg-red-950/30 border border-red-900/50 rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col">
              <div className="w-full relative mb-6">
                 <ImagePlaceholder className="w-full aspect-[4/3] rounded-xl bg-red-900/30 border border-red-800/50 shadow-inner" text="Ảnh Bộ quà tặng" />
              </div>
              <div className="space-y-4 flex-1">
                 <h4 className="font-heading font-bold text-lg text-amber-300 border-b border-red-900/50 pb-2">Bộ quà tặng tài trợ 100%</h4>
                 <ul className="space-y-3 font-body text-sm sm:text-base">
                    <li className="flex items-start gap-3">
                       <Gift className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                       <div className="text-slate-300"><strong className="text-white">Bonus 1:</strong> Bộ đĩa đánh bóng mịn Super-Snap Mini Kit</div>
                    </li>
                    <li className="flex items-start gap-3">
                       <Gift className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                       <div className="text-slate-300"><strong className="text-white">Bonus 2:</strong> E-Guidebook Phác đồ "Triệt Tiêu Ê Buốt & Kiểm Soát Sâu Răng Nguy Cơ Cao Theo Triết Lý MiCD"</div>
                    </li>
                    <li className="flex items-start gap-3">
                       <Gift className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                       <div className="text-slate-300"><strong className="text-white">Bonus 3:</strong> Vé Đặc Quyền Zalo VIP Group - Cố vấn lâm sàng 1:1 cùng Chuyên gia Sota-D trong 30 ngày</div>
                    </li>
                 </ul>
              </div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-red-950/40 rounded-2xl p-6 md:p-8 border border-red-900/50 mb-8 w-full flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-tr from-amber-500/15 to-transparent rounded-full pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-red-500/15 to-transparent rounded-full pointer-events-none"></div>
              
              <div className="text-center md:text-left relative z-10">
                <p className="text-red-200 text-sm font-medium mb-1 uppercase tracking-wider">Tổng giá trị</p>
                <div className="flex items-baseline justify-center md:justify-start gap-2">
                  <p className="text-red-200 text-2xl md:text-3xl font-bold line-through decoration-red-500/50 decoration-2">6.495.000đ</p>
                </div>
              </div>
              
              <div className="hidden md:block w-px h-16 bg-red-900/50 relative z-10"></div>
              <div className="block md:hidden w-full h-px bg-red-900/50 relative z-10"></div>
              
              <div className="text-center md:text-right relative z-10">
                <p className="text-amber-400 text-sm font-medium mb-1 uppercase tracking-wider">Mức đầu tư ưu đãi</p>
                <p className="font-heading font-extrabold text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200">2.545.000đ</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
              <CtaButton onClick={() => openCampaignModal("Đặt Mua Gói Khởi Động Nha Khoa Phòng Ngừa - 2.545.000đ")} className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#C43838] text-white px-3 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-[10.5px] min-[375px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-red-600 hover:shadow-xl hover:shadow-red-600/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap flex-nowrap">
                <span className="truncate">ĐĂNG KÝ MUA NGAY</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </CtaButton>
            </div>
            
            <div className="mt-4 flex justify-center">
               <div className="inline-flex items-center justify-center px-3 sm:px-4 py-1.5 sm:py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full w-full sm:w-auto">
                  <span className="text-emerald-300 font-medium text-[11px] min-[375px]:text-xs sm:text-sm whitespace-nowrap text-center w-full">Hoàn tiền 100% nếu Bác sĩ không hài lòng!</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: LEAD MAGNET */}
      <section id="lead-magnet" className="py-20 lg:py-28 bg-slate-50 bg-grid-pattern relative border-y border-slate-200 overflow-hidden">
        <div className="w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-slate-900 leading-[1.3] tracking-tight">
              Dành cho Bác sĩ cần <span className="relative inline-block"><span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#C43838] to-[#E54848]">thêm thông tin</span><span className="absolute bottom-0 sm:bottom-1 left-0 w-full h-2.5 sm:h-3.5 bg-red-100/80 -z-10 rounded-sm skew-x-[-10deg]"></span></span>
            </h2>
            <p className="font-body text-slate-600 mt-4 max-w-2xl mx-auto text-base sm:text-lg">Nếu Bác sĩ cần thêm thông tin y văn hoặc muốn thử nghiệm trước khi quyết định đặt hàng, hãy nhận ngay tài liệu chuyên môn và mẫu thử dưới đây:</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Ebook */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-200 shadow-xl flex flex-col justify-between hover:shadow-2xl transition-shadow">
              <div>
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-sky-100 text-[#00ADEF] font-bold text-xs tracking-wide mb-6">Sổ tay lâm sàng độc quyền</div>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 mb-4 leading-snug">Phác đồ triệt tiêu ê buốt & kiểm soát sâu răng nguy cơ cao theo triết lý MiCD</h3>
                <p className="text-slate-600 text-sm sm:text-base mb-8 leading-relaxed">Nội dung: Hướng dẫn từng bước xử lý mòn cổ răng, tụt nướu, chăm sóc răng niềng quanh mắc cài và quy trình trám hố rãnh không Etching.</p>
              </div>
              <CtaButton onClick={() => openCampaignModal("Điền SĐT nhận Ebook MiCD qua Zalo")} className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#C43838] text-white px-3 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-[10.5px] min-[375px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-red-600 hover:shadow-xl hover:shadow-red-600/30 transition-all duration-300 hover:-translate-y-1 w-full whitespace-nowrap flex-nowrap mt-auto">
                <span className="truncate">NHẬN EBOOK QUA ZALO</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </CtaButton>
            </div>
            
            {/* Sample Kit */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-200 shadow-xl flex flex-col justify-between hover:shadow-2xl transition-shadow">
              <div>
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs tracking-wide mb-6">Nhận kit mẫu thử</div>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 mb-4 leading-snug">Đăng ký nhận kit mẫu thử tận phòng khám</h3>
                <p className="text-slate-600 text-sm sm:text-base mb-8 leading-relaxed">Sota-D dành tặng 30 suất trải nghiệm mẫu thử PRG Barrier Coat giao tận tay Bác sĩ trên toàn quốc hoàn toàn Miễn Phí.</p>
              </div>
              <CtaButton onClick={() => openCampaignModal("Đăng ký nhận Sample Kit PRG Barrier Coat")} className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#C43838] text-white px-3 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-[10.5px] min-[375px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-red-600 hover:shadow-xl hover:shadow-red-600/30 transition-all duration-300 hover:-translate-y-1 w-full whitespace-nowrap flex-nowrap mt-auto">
                <span className="truncate">ĐĂNG KÝ NHẬN MẪU THỬ</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: FAQ */}
      <section className="py-20 lg:py-28 bg-white bg-grid-pattern relative border-t border-slate-200 overflow-hidden">
        <div className="w-[90%] lg:w-[80%] mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-slate-900 leading-[1.3] mb-4 tracking-tight">Giải đáp <span className="relative inline-block"><span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#C43838] to-[#E54848]">hoài nghi lâm sàng</span><span className="absolute bottom-0 sm:bottom-1 left-0 w-full h-2.5 sm:h-3.5 bg-red-100/80 -z-10 rounded-sm skew-x-[-10deg]"></span></span></h2>
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
          <div className="mt-12 md:mt-16 text-center">
            <CtaButton onClick={() => openCampaignModal("Bác sĩ còn câu hỏi? Nhận tư vấn ngay")} className="group relative inline-flex items-center justify-center gap-2 bg-[#C43838] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-mono text-xs sm:text-sm font-bold uppercase tracking-wide sm:tracking-wider hover:bg-red-600 hover:shadow-xl hover:shadow-red-600/30 transition-all duration-300 hover:-translate-y-1">
              <span>BÁC SĨ CÒN CÂU HỎI? NHẬN TƯ VẤN NGAY</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </CtaButton>
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

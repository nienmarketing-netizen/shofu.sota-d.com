import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Layers, 
  Beaker, 
  ChevronDown, 
  Sparkles, 
  AlertTriangle,
  ShieldAlert,
  Syringe,
  Shield,
  Star,
  Award,
  Microscope,
  Droplets,
  Target,
  Quote,
  XCircle
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { CampaignModal } from '../../CampaignModal';
import { CtaButton } from '../../ui/CtaButton';

const ImagePlaceholder = ({ text, className = "" }: { text: string, className?: string }) => (
  <div className={`flex items-center justify-center p-8 text-center bg-slate-50 border-2 border-dashed border-slate-300 rounded-2xl ${className}`}>
    <p className="font-mono text-sm text-slate-500 font-medium">
      <span className="block text-[#00ADEF] mb-2">📸 [GHI CHÚ HÌNH ẢNH]</span>
      {text}
    </p>
  </div>
);

const AccordionItem: React.FC<{ question: string, answer: string, isOpen: boolean, onClick: () => void }> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white mb-4 transition-all duration-300">
      <button 
         onClick={onClick}
        className="w-full px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between text-left font-heading font-bold text-slate-900 focus:outline-none"
      >
        <span className="text-sm sm:text-base pr-8">{question}</span>
        <ChevronDown className={`w-5 h-5 text-[#00ADEF] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-5 pb-4 sm:px-6 sm:pb-5 font-body text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export function DirectRestoration() {
  const [isCampaignModalOpen, setIsCampaignModalOpen] = useState(false);
  const [campaignModalTitle, setCampaignModalTitle] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number>(0);

  const openCampaignModal = (title: string) => {
    setCampaignModalTitle(title);
    setIsCampaignModalOpen(true);
  };

  const faqs = [
    {
      q: "Phục hồi composite xoang II sâu có nhất thiết phải cô lập đê cao su tuyệt đối để tránh ê buốt không?",
      a: "Đê cao su là tiêu chuẩn vàng. Tuy nhiên, keo dán BeautiBond Xtreme HEMA-Free kỵ nước với dung môi bay hơi siêu nhanh Acetone tự thâm nhập và bít kín ống ngà ẩm, triệt tiêu 100% ê buốt sau phục hồi bất chấp độ ẩm lâm sàng."
    },
    {
      q: "Làm thế nào để giải quyết triệt để tình trạng composite dính dụng cụ điêu khắc múi rãnh?",
      a: "Bác sĩ nên lau sạch dụng cụ định kỳ, vo tròn composite hoặc nhúng nhẹ đầu khắc vào dung dịch hỗ trợ tạo hình Modeling Liquid của Shofu để điêu khắc mượt mà, lướt êm không dính cây."
    },
    {
      q: "Hạt độn S-PRG liên tục giải phóng ion thì phục hồi có bị mòn nhanh hay rỗng xốp theo thời gian không?",
      a: "Hoàn toàn không. S-PRG được bọc trong màng biến tính bền vững và phân bổ đồng đều trong mạng nhựa polymer. Beautifil II LS đạt lực nén 364 MPa, lực uốn 120 MPa đảm bảo kháng mòn cao và bóng láng vĩnh cửu."
    },
    {
      q: "Lực dán tự soi mòn (Self-Etch) của BeautiBond Xtreme có bị suy giảm theo thời gian không?",
      a: "Tuyệt đối không. BBX ứng dụng công nghệ ARS bọc giáp bảo vệ Silane kháng axit kết hợp monomer MDP tạo liên kết hóa học siêu cường, duy trì lực dán bền bỉ ~30-35 MPa bất chấp lão hóa nhiệt."
    }
  ];

  return (
    <div className="w-full flex flex-col">
      {/* SECTION 1: HERO */}
      <section className="relative bg-slate-50 bg-grid-pattern pt-[100px] pb-16 md:pt-[120px] md:pb-24 overflow-hidden border-b border-slate-200">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#00ADEF]/10 to-transparent rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        <div className="w-[90%] lg:w-[85%] xl:w-[80%] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 items-start relative z-10">
          <div className="w-full lg:w-[65%] xl:w-[60%] text-left">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#00ADEF]/10 border border-[#00ADEF]/20 mb-6 max-w-full overflow-hidden relative">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#00ADEF] animate-pulse shrink-0 relative z-10 shadow-[0_0_4px_rgba(0,173,239,0.8)]"></div>
              <div className="flex overflow-hidden relative w-full [mask-image:linear-gradient(to_right,transparent,black_10px,black_90%,transparent)] sm:[mask-image:none]">
                <div className="font-mono text-[10.5px] min-[375px]:text-[11.5px] sm:text-xs font-bold text-[#00ADEF] tracking-tight sm:tracking-wide whitespace-nowrap flex animate-marquee sm:!animate-none sm:!transform-none w-max">
                  <span className="pr-8 sm:pr-0">Giải pháp phục hồi trực tiếp MiCD</span>
                  <span className="pr-8 sm:hidden">Giải pháp phục hồi trực tiếp MiCD</span>
                </div>
              </div>
            </div>
            
            <h1 className="font-heading font-extrabold text-2xl min-[375px]:text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl text-slate-900 leading-[1.3] mb-6 tracking-tight lg:pr-4 xl:pr-0 lg:-mr-8 xl:-mr-12 text-left">
              Chấm dứt ám ảnh ê buốt & sâu răng thứ phát trong <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ADEF] to-[#007AA8]">phục hồi xoang II răng sau</span>
            </h1>

            {/* Mobile Image: Hiển thị ngay dưới headline ở mobile, ẩn ở desktop */}
            <div className="lg:hidden my-6 sm:my-8 flex justify-start">
              <img 
                referrerPolicy="no-referrer"
                src="/images/giai-phap-phuc-hoi-truc-tiep-shofu.webp"
                alt="Giải pháp phục hồi trực tiếp Shofu"
                className="w-full max-w-[340px] sm:max-w-[420px] h-auto object-contain block drop-shadow-md"
                loading="eager"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('raw.githubusercontent.com')) {
                    target.src = "https://raw.githubusercontent.com/nienmarketing-netizen/shofu.sota-d.com/main/public/images/giai-phap-phuc-hoi-truc-tiep-shofu.webp";
                  }
                }}
              />
            </div>
            
            <p className="font-body text-base sm:text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl text-left">
              Trải nghiệm bước dịch chuyển đột phá từ "Phục hồi cơ học thụ động" sang <strong className="text-slate-900">"Trị liệu sinh học chủ động"</strong> với hệ sinh thái Giomer ứng dụng công nghệ hạt độn S-PRG từ <strong className="text-slate-900">Shofu Nhật Bản</strong>. Quy trình lâm sàng được tối giản hóa tối đa, giúp <strong className="text-slate-900">bảo tồn cấu trúc ngà sống</strong> và giải phóng hoàn toàn áp lực nhạy cảm kỹ thuật cho Bác sĩ.
            </p>
            
            <ul className="space-y-3 mb-10 text-left">
              <li className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl border border-slate-200/80 bg-white/50 backdrop-blur-sm shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
                <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-[#C43838]" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-[15px] mb-1 leading-snug text-left">Triệt tiêu nguy cơ ê buốt</h4>
                  <p className="text-slate-600 text-[13px] sm:text-sm leading-relaxed text-left">Nhờ màng dán kỵ nước HEMA-Free của keo dán thế hệ 8 BeautiBond Xtreme.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl border border-slate-200/80 bg-white/50 backdrop-blur-sm shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                  <Layers className="w-4 h-4 text-[#00ADEF]" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-[15px] mb-1 leading-snug text-left">Chống vi thấm và hở kẽ đường viền</h4>
                  <p className="text-slate-600 text-[13px] sm:text-sm leading-relaxed text-left">Nhờ dòng composite đặc Beautifil II LS sở hữu độ co rút thể tích cực thấp kỷ lục chỉ 0.85% Vol.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl border border-slate-200/80 bg-white/50 backdrop-blur-sm shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
                <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-[15px] mb-1 leading-snug text-left">Màng khiên bảo vệ sinh học 24/7</h4>
                  <p className="text-slate-600 text-[13px] sm:text-sm leading-relaxed text-left">Chống sâu răng tái phát nhờ cơ chế phóng thích và tự sạc lại 6 loại ion của hạt độn S-PRG.</p>
                </div>
              </li>
            </ul>

            <CtaButton ctaName="MoKhoaCombo_MiCD" 
               onClick={() => openCampaignModal("Mở khóa combo phục hồi MiCD & nhận bộ kít mài bóng")}
              className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#00ADEF] text-white px-3 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-[10.5px] min-[375px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-sky-500 hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap flex-nowrap"
            >
              <span className="truncate">MỞ KHÓA COMBO PHỤC HỒI MiCD & QUÀ TẶNG</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </CtaButton>
          </div>
          
          <div className="hidden lg:flex w-full lg:w-[35%] xl:w-[40%] relative justify-center items-start lg:pt-[54px]">
            <img 
              referrerPolicy="no-referrer"
              src="/images/giai-phap-phuc-hoi-truc-tiep-shofu.webp"
              alt="Giải pháp phục hồi trực tiếp Shofu"
              className="w-full max-w-[440px] h-auto object-contain block relative z-10 hover:scale-[1.02] transition-transform duration-500 drop-shadow-lg"
              loading="eager"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.includes('raw.githubusercontent.com')) {
                  target.src = "https://raw.githubusercontent.com/nienmarketing-netizen/shofu.sota-d.com/main/public/images/giai-phap-phuc-hoi-truc-tiep-shofu.webp";
                }
              }}
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
              <span className="normal-case">Góc khuất lâm sàng</span>
            </div>
            
            <h2 className="font-heading font-extrabold text-2xl min-[375px]:text-3xl sm:text-4xl lg:text-[2.75rem] text-white leading-[1.3] mb-4 tracking-tight max-w-4xl mx-auto">
              Phục hồi răng xoang II sâu dưới nướu luôn là <br className="hidden md:block" />
              <span className="text-slate-400">cơn ác mộng</span> <span className="text-red-500">âm thầm</span>
            </h2>

            <div className="w-24 h-1 bg-red-500 mx-auto my-6"></div>

            <p className="font-body text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Nhiều Bác sĩ thường <strong className="text-slate-100 font-semibold">tự dằn vặt và đổ lỗi</strong> cho kỹ năng thao tác <span className="text-amber-300 font-medium">thổi khô sai kỹ thuật</span> hay <span className="text-amber-300 font-medium">đặt đai trám chưa khít</span>. Nhưng <strong className="text-white font-semibold">sự thật chứng minh</strong>: <span className="text-red-400 font-bold">gốc rễ thất bại</span> nằm ở <span className="inline-block px-2.5 py-0.5 rounded-lg bg-red-500/15 border border-red-500/30 text-red-200 font-bold shadow-sm">bản chất hạn chế của vật liệu thế hệ cũ</span>.
            </p>
          </div>

          {/* 2 Main Comparison Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 lg:mb-16">
            {/* Card 1: Thách thức thao tác lâm sàng */}
            <div className="bg-slate-800/50 backdrop-blur-md rounded-3xl border border-slate-700/70 hover:border-slate-500/70 p-6 sm:p-8 md:p-10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.3)] transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-700/50 border border-slate-600/50 flex items-center justify-center text-slate-300 shrink-0 shadow-sm">
                    <AlertTriangle className="w-6 h-6 text-slate-300" />
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-700/50 text-slate-300 border border-slate-600/50 font-mono text-xs font-bold uppercase tracking-wider">
                    Thực tế lâm sàng
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-2">
                  Áp lực thao tác trên ghế điều trị
                </h3>
                <p className="font-body text-sm sm:text-[15px] text-slate-400 mb-6 leading-relaxed">
                  Những rào cản kỹ thuật khiến ca phục hồi xoang II trở thành phép thử căng thẳng cho nhiều Bác sĩ:
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl border border-slate-700/60 bg-slate-800/80 hover:bg-slate-800 hover:border-slate-600 transition-all">
                    <div className="w-6 h-6 rounded-full bg-slate-700 text-slate-200 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</div>
                    <div>
                      <h4 className="font-heading font-bold text-white text-sm sm:text-base">Khó cô lập bờ nướu sâu</h4>
                      <p className="font-body text-slate-400 text-xs sm:text-sm leading-relaxed mt-0.5">Dịch khe nướu, máu và hơi thở rỉ liên tục làm phá vỡ bề mặt dán dính nhạy cảm.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl border border-slate-700/60 bg-slate-800/80 hover:bg-slate-800 hover:border-slate-600 transition-all">
                    <div className="w-6 h-6 rounded-full bg-slate-700 text-slate-200 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</div>
                    <div>
                      <h4 className="font-heading font-bold text-white text-sm sm:text-base">Nhạy cảm kỹ thuật thổi khô</h4>
                      <p className="font-body text-slate-400 text-xs sm:text-sm leading-relaxed mt-0.5">Quá khô làm sập khung collagen ngà; thổi chưa đủ ẩm làm loãng nồng độ keo dán.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl border border-slate-700/60 bg-slate-800/80 hover:bg-slate-800 hover:border-slate-600 transition-all">
                    <div className="w-6 h-6 rounded-full bg-slate-700 text-slate-200 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</div>
                    <div>
                      <h4 className="font-heading font-bold text-white text-sm sm:text-base">Khó tạo tiếp xúc bên khít sát</h4>
                      <p className="font-body text-slate-400 text-xs sm:text-sm leading-relaxed mt-0.5">Đáy xoang sâu khiến việc đặt đai trám khó khít sát, dễ gây nhồi nhét thức ăn dai dẳng.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl border border-slate-700/60 bg-slate-800/80 hover:bg-slate-800 hover:border-slate-600 transition-all">
                    <div className="w-6 h-6 rounded-full bg-slate-700 text-slate-200 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">4</div>
                    <div>
                      <h4 className="font-heading font-bold text-white text-sm sm:text-base">Ứng suất co ngót giật cùi răng (C-Factor cao)</h4>
                      <p className="font-body text-slate-400 text-xs sm:text-sm leading-relaxed mt-0.5">Composite co ngót kéo rách đáy xoang, gây vi kẽ hở và cơn đau buốt tức thì khi ăn nhai.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-700/80">
                <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-4 sm:p-5 flex items-start gap-3">
                  <Quote className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <p className="font-body text-slate-300 text-sm sm:text-[15px] italic leading-relaxed">
                    "Nhiều Bác sĩ luôn thấp thỏm mỗi khi bệnh nhân quay lại tái khám với lời than phiền: Răng trám xong về ăn nhai cứ bị buốt nhói."
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Sự thật khoa học do vật liệu cũ */}
            <div className="bg-slate-800/50 backdrop-blur-md rounded-3xl border border-red-500/30 hover:border-red-500/60 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] p-6 sm:p-8 md:p-10 shadow-[0_4px_25px_-4px_rgba(239,68,68,0.1)] transition-all flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-52 h-52 bg-red-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-red-500/20 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0 shadow-sm">
                    <ShieldAlert className="w-6 h-6 text-red-400" />
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 font-mono text-xs font-bold uppercase tracking-wider">
                    Căn nguyên khoa học
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-2">
                  Giới hạn cố hữu của vật liệu cũ
                </h3>
                <p className="font-body text-sm sm:text-[15px] text-slate-400 mb-6 leading-relaxed">
                  Cơ chế hóa học và cấu trúc vật liệu cơ học thụ động chính là thủ phạm âm thầm gây hỏng phục hồi:
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl border border-red-500/20 bg-slate-800/80 hover:border-red-500/40 transition-all shadow-sm">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">!</div>
                    <div>
                      <h4 className="font-heading font-bold text-white text-sm sm:text-base">Monomer HEMA ưa nước (Hydrophilic)</h4>
                      <p className="font-body text-slate-400 text-xs sm:text-sm leading-relaxed mt-0.5">Hút ẩm từ ống ngà như một miếng bọt biển, kích hoạt men MMPs tự phân hủy lớp lai dán sau 6-12 tháng.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl border border-red-500/20 bg-slate-800/80 hover:border-red-500/40 transition-all shadow-sm">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">!</div>
                    <div>
                      <h4 className="font-heading font-bold text-white text-sm sm:text-base">Độ co ngót thể tích cao (2.5% - 4% Vol)</h4>
                      <p className="font-body text-slate-400 text-xs sm:text-sm leading-relaxed mt-0.5">Ứng suất co ngót lớn kéo tách rời màng dán, tạo đường vi nứt kẽ vi thể sâu dưới bờ nướu.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl border border-red-500/20 bg-slate-800/80 hover:border-red-500/40 transition-all shadow-sm">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">!</div>
                    <div>
                      <h4 className="font-heading font-bold text-white text-sm sm:text-base">Vật liệu trơ, hoàn toàn thụ động</h4>
                      <p className="font-body text-slate-400 text-xs sm:text-sm leading-relaxed mt-0.5">Không phóng thích ion kháng khuẩn, không trung hòa axit, biến vi kẽ hở thành ổ vi khuẩn gây sâu tái phát.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-red-500/20 relative z-10">
                <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-4 sm:p-5">
                  <div className="flex items-center gap-2 mb-1 text-red-400 font-bold font-heading text-sm sm:text-base">
                    <ShieldAlert className="w-5 h-5 shrink-0 text-red-400" />
                    <span>Kết luận y khoa</span>
                  </div>
                  <p className="font-body text-slate-300 text-sm sm:text-[15px] leading-relaxed">
                    Bác sĩ không thao tác sai — chính <strong className="text-red-400">bản chất vật liệu thế hệ cũ</strong> đã âm thầm phá vỡ công sức tỉ mỉ của bạn!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Comparative Matrix */}
          <div className="bg-slate-800/60 backdrop-blur-md rounded-3xl border border-slate-700/80 p-6 sm:p-8 md:p-10 shadow-2xl mb-12">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-[#00ADEF] font-mono text-xs font-bold uppercase tracking-wider">Đối chiếu cơ chế</span>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mt-1">
                Sự khác biệt giữa 2 trường phái phục hồi
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Cũ */}
              <div className="p-5 sm:p-6 rounded-2xl bg-red-950/20 border border-red-500/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-red-400 font-bold font-heading text-base mb-4">
                    <XCircle className="w-5 h-5 shrink-0 text-red-400" />
                    <span>Vật liệu cũ (Cơ học thụ động)</span>
                  </div>
                  <ul className="space-y-3 text-sm text-slate-300 font-body">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0"></span>
                      <span>Chứa HEMA ưa nước gây ngấm ẩm và thủy phân lớp lai sau thời gian ngắn.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0"></span>
                      <span>Co ngót thể tích cao (2.5% - 4.0%) kéo tách rời đường viền đáy xoang II.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0"></span>
                      <span>Vật liệu trơ sinh học: không bảo vệ men ngà, không kháng khuẩn.</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-4 pt-3 border-t border-red-500/20 text-xs font-semibold text-red-400">
                  Hậu quả: Nguy cơ cao ê buốt sau trám & sâu răng thứ phát tái phát.
                </div>
              </div>

              {/* Mới */}
              <div className="p-5 sm:p-6 rounded-2xl bg-sky-950/20 border border-[#00ADEF]/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[#00ADEF] font-bold font-heading text-base mb-4">
                    <CheckCircle2 className="w-5 h-5 shrink-0 text-[#00ADEF]" />
                    <span>Hệ sinh thái Giomer Shofu (Trị liệu sinh học)</span>
                  </div>
                  <ul className="space-y-3 text-sm text-slate-300 font-body">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00ADEF] mt-2 shrink-0"></span>
                      <span>Keo BeautiBond Xtreme <strong className="text-white">HEMA-Free kỵ nước</strong>, khóa chặt ống ngà vĩnh viễn.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00ADEF] mt-2 shrink-0"></span>
                      <span>Composite Beautifil II LS <strong className="text-white">co ngót kỷ lục 0.85% Vol</strong>, khít sát tuyệt đối.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00ADEF] mt-2 shrink-0"></span>
                      <span>Hạt độn S-PRG <strong className="text-white">phóng thích 6 loại ion sinh học</strong> kháng khuẩn, chống axit 24/7.</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-4 pt-3 border-t border-[#00ADEF]/20 text-xs font-semibold text-[#00ADEF]">
                  Thành quả: Triệt tiêu hoàn toàn ê buốt, bảo tồn cấu trúc ngà sống dài lâu.
                </div>
              </div>
            </div>
          </div>

          {/* Microscopic Split-Screen SEM Graphic Placeholder */}
          <div className="w-full max-w-5xl mx-auto relative rounded-3xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-800">
            <ImagePlaceholder 
              className="aspect-[16/9] w-full bg-slate-800 border-0" 
              text="Biểu đồ so sánh dạng Split-Screen 16:9 sắc nét. Bên trái (Đỏ): Lát cắt vi mô nứt dọc ống ngà do co rút, HEMA hút nước vi khuẩn bám. Bên phải (Cyan): Màng keo kỵ nước mỏng bít chặt, composite co rút thấp khít sát, giải phóng ion tiêu diệt vi khuẩn." 
            />
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 md:mt-16 text-center">
            <CtaButton ctaName="SoHuuTronBoGiaiPhap" 
               onClick={() => openCampaignModal("Sở hữu trọn bộ giải pháp phục hồi sinh học & Đặc quyền đào tạo 1:1")}
              className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#00ADEF] text-white px-3 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-[10.5px] min-[375px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-sky-500 hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap flex-nowrap"
            >
              <span className="truncate">SỞ HỮU TRỌN BỘ GIẢI PHÁP PHỤC HỒI SINH HỌC</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </CtaButton>
          </div>
        </div>
      </section>

      {/* SECTION 3: 3-STEP PROCESS */}
      <section className="py-20 lg:py-28 bg-slate-50 bg-grid-pattern relative overflow-hidden border-t border-slate-200">
        
        <div className="w-[90%] lg:w-[80%] mx-auto relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-slate-900 leading-[1.3] mb-4 tracking-tight">
              Hệ sinh thái Giomer: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ADEF] to-[#007AA8]">Quy trình phục hồi trực tiếp 3 bước tối giản</span>
            </h2>
            <p className="font-body text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
              Thiết lập quy trình phục hồi trực tiếp vị tha trên lâm sàng, giải phóng hoàn toàn áp lực kỹ thuật cho Bác sĩ.
            </p>
          </div>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl border border-white p-8 md:p-12 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex flex-col lg:flex-row gap-10 items-center hover:border-slate-200 hover:shadow-md transition-all">
              <div className="w-full lg:w-1/2">
                <ImagePlaceholder 
                  className="aspect-[4/3] w-full bg-white shadow-lg rounded-2xl" 
                  text="Ảnh chụp thực tế sản phẩm BeautiBond Xtreme 5ml thiết kế nắp bật một tay, bên cạnh là lát cắt kính hiển vi SEM mô tả lớp tua nhựa dán (resin tags) cắm sâu, đồng đều bịt kín các ống ngà." 
                />
              </div>
              <div className="w-full lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 font-mono text-xs font-bold mb-4">
                  Bước 1
                </div>
                <h3 className="font-heading font-bold text-xl text-slate-900 mb-4">Keo dán universal kỵ nước BeautiBond Xtreme (BBX)</h3>
                <h4 className="font-heading font-bold text-[#00ADEF] text-sm md:text-lg mb-2">Khóa chặt ống ngà kỵ nước – Chấm dứt hiện tượng thủy phân liên kết dán</h4>
                <p className="font-body text-sm text-slate-600 leading-relaxed mb-6">
                  BBX loại bỏ hoàn toàn thành phần HEMA ưa nước. Ứng dụng hệ dung môi Acetone bay hơi nhanh giúp đưa 4 monomer chức năng (đặc biệt là biến thể 10-MDP và Carboxylic) thâm nhập sâu vào các ống ngà ẩm, tạo màng dán dính kỵ nước cực kỳ bền vững.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-white border border-slate-200 rounded-xl p-4 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:border-sky-200 hover:shadow-md transition-all">
                    <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center shrink-0">
                      <Zap className="w-5 h-5 text-[#00ADEF]" />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900 font-heading">Màng dán siêu mỏng vô song ~5µm (Filler-Free)</h5>
                      <p className="text-sm text-slate-600 font-body">Lan chảy loang mỏng hoàn hảo dưới lực thổi khí nhẹ, ngăn chặn tuyệt đối tình trạng đọng keo ở góc chuyển tiếp, giúp phục hình khít sát tuyệt đối.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white border border-slate-200 rounded-xl p-4 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:border-sky-200 hover:shadow-md transition-all">
                    <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center shrink-0">
                      <Zap className="w-5 h-5 text-[#00ADEF]" />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900 font-heading">Quy trình "True Universal" tự soi mòn (Self-Etch)</h5>
                      <p className="text-sm text-slate-600 font-body">Chỉ 1 lớp duy nhất dán trực tiếp lên mọi bề mặt và mọi vật liệu phục hình mà không cần mua thêm primer rời. Quy trình chớp nhoáng: Thoa keo ➔ Thổi khô ➔ Chiếu đèn 5 giây.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl border border-white p-8 md:p-12 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex flex-col lg:flex-row-reverse gap-10 items-center hover:border-slate-200 hover:shadow-md transition-all">
              <div className="w-full lg:w-1/2">
                <ImagePlaceholder 
                  className="aspect-[4/3] w-full bg-white shadow-lg" 
                  text="Ảnh chụp cận cảnh tuýp composite Beautifil II LS màu sắc sang trọng bên cạnh hình ảnh cùi răng sau khi hoàn thiện phục hồi mặt nhai, các múi răng được điêu khắc sắc nét, chân thực không tì vết." 
                />
              </div>
              <div className="w-full lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 font-mono text-xs font-bold mb-4">
                  Bước 2
                </div>
                <h3 className="font-heading font-bold text-xl text-slate-900 mb-4">Composite đặc giảm co rút Beautifil II LS</h3>
                <h4 className="font-heading font-bold text-[#00ADEF] text-sm md:text-lg mb-2">Điêu khắc múi rãnh vững chãi – Triệt tiêu ứng suất co ngót trùng hợp</h4>
                <p className="font-body text-sm text-slate-600 leading-relaxed mb-6">
                  Beautifil II LS sở hữu tỷ lệ hạt độn cao (83 wt%) giúp giảm thiểu tối đa độ co ngót thể tích xuống mức kỷ lục <strong>0.85% Vol</strong> và ứng suất co ngót tối thiểu chỉ <strong>1.37 MPa</strong>. Bảo vệ đường hoàn tất khỏi hiện tượng nứt kẽ vi thể và đổi màu đường viền sau nhiều năm ăn nhai.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-white border border-slate-200 rounded-xl p-4 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:border-sky-200 hover:shadow-md transition-all">
                    <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center shrink-0">
                      <Shield className="w-5 h-5 text-[#00ADEF]" />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900 font-heading">Độ bền nén 364 MPa & độ bền uốn 120 MPa</h5>
                      <p className="text-sm text-slate-600 font-body">Chịu lực uốn và lực nhai cực đại ở vùng răng sau, chống mẻ vỡ vượt trội.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white border border-slate-200 rounded-xl p-4 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:border-sky-200 hover:shadow-md transition-all">
                    <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center shrink-0">
                      <Shield className="w-5 h-5 text-[#00ADEF]" />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900 font-heading">Hiệu ứng quang học "Tắc kè hoa" sinh động</h5>
                      <p className="text-sm text-slate-600 font-body">Tự động hòa quyện sắc độ với men ngà xung quanh, dễ dàng đánh bóng đạt độ bóng sáng tự nhiên chỉ trong vài giây.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl border border-white p-8 md:p-12 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex flex-col lg:flex-row gap-10 items-center hover:border-slate-200 hover:shadow-md transition-all">
              <div className="w-full lg:w-1/2">
                <ImagePlaceholder 
                  className="aspect-[4/3] w-full bg-white shadow-lg rounded-2xl" 
                  text="Hình ảnh mô phỏng 3D đầu bơm siêu nhỏ của xi-lanh Beautifil Injectable X đang bơm trực tiếp composite vào kẽ bên xoang II của răng cối một cách mượt mà, không bọt khí." 
                />
              </div>
              <div className="w-full lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 font-mono text-xs font-bold mb-4">
                  Bước 3
                </div>
                <h3 className="font-heading font-bold text-xl text-slate-900 mb-4">Composite đắp lớp Beautifil Injectable X</h3>
                <h4 className="font-heading font-bold text-[#00ADEF] text-sm md:text-lg mb-2">Sức mạnh hạt độn Nano-Optimized Silane – Lấp đầy mọi hốc sâu vi thể</h4>
                <p className="font-body text-sm text-slate-600 leading-relaxed mb-6">
                  Với đặc tính lưu biến thông minh (thixotropic), Beautifil Injectable X định hình cực tốt khi đắp lớp nhưng tự động chảy loang phẳng láng dưới áp lực. Vật liệu len lỏi hoàn hảo vào các ngóc ngách xoang II hẹp dưới nướu mà không tạo bọt khí.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-white border border-slate-200 rounded-xl p-4 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:border-sky-200 hover:shadow-md transition-all">
                    <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center shrink-0">
                      <Target className="w-5 h-5 text-[#00ADEF]" />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900 font-heading">Độ bền nén cơ học siêu cường 400 MPa</h5>
                      <p className="text-sm text-slate-600 font-body">Thừa hưởng độ bền nén vượt trội tương đương composite đặc, ứng dụng đắp khối mặt nhai chịu lực trực tiếp.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white border border-slate-200 rounded-xl p-4 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:border-sky-200 hover:shadow-md transition-all">
                    <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center shrink-0">
                      <Target className="w-5 h-5 text-[#00ADEF]" />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900 font-heading">Kiểm soát bám dính dụng cụ xuất sắc</h5>
                      <p className="text-sm text-slate-600 font-body">Khắc phục triệt để rào cản dính cây phục hồi. Thao tác nhàn tênh khi kết hợp các mẹo lâm sàng (như vo tròn composite, sử dụng đầu thám trâm nhọn, lau sạch dụng cụ định kỳ hoặc dùng dung dịch hỗ trợ tạo hình Modeling Liquid).</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
             <CtaButton ctaName="TaiMienPhiPhacDo" 
               onClick={() => openCampaignModal("Tải miễn phí phác đồ 'Kiểm soát co ngót xoang II' cho phòng khám")}
              className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-slate-900 text-white px-3 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-[10.5px] min-[375px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-slate-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap flex-nowrap"
            >
              <span className="truncate">TẢI MIỄN PHÍ PHÁC ĐỒ KIỂM SOÁT CO NGÓT XOANG II</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </CtaButton>
          </div>
        </div>
      </section>

      {/* SECTION 4: CORE TECHNOLOGY */}
      <section className="py-20 lg:py-28 bg-slate-100 bg-grid-pattern relative overflow-hidden border-t border-slate-200">
        <div className="w-[90%] lg:w-[80%] mx-auto relative z-10 flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-slate-900 leading-[1.3] mb-4 tracking-tight">
              Công nghệ hạt độn sinh học S-PRG – <span className="text-[#00ADEF]">"Bình ắc quy" ion bảo vệ chủ động</span>
            </h2>
            <p className="font-body text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              Điểm cốt lõi làm nên sức mạnh trị liệu vượt trội của hệ sinh thái Giomer là hạt độn sinh học S-PRG độc quyền của Shofu. Cấu trúc hạt độn 3 lớp gồm lõi thủy tinh đa chức năng đã phản ứng trước, hoạt động như một "bình ắc quy sinh học" liên tục giải phóng và tự sạc lại 6 loại ion sinh học giúp tái khoáng hóa ngà răng và chống mảng bám vĩnh cửu.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col gap-3">
                <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-[#00ADEF]" />
                </div>
                <h4 className="font-heading font-bold text-slate-900 text-[15px]">Cơ chế sạc và nhả Fluoride ($F^-$) vĩnh cửu</h4>
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
          <div className="w-full lg:w-1/2">
             <ImagePlaceholder 
                className="aspect-square w-full" 
                text="Sơ đồ 3D cấu tạo hạt độn S-PRG (Cyan & Đỏ). Hạt độn trung tâm tỏa 6 quầng sáng đại diện 6 ion bảo vệ hướng về phía chiếc răng thật đang được bao bọc bởi lớp màng sinh học lấp lánh." 
             />
          </div>
        </div>
      </section>

      {/* SECTION 5: SOCIAL PROOF */}
      <section className="py-20 lg:py-28 bg-slate-900 relative border-y border-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-light opacity-100 pointer-events-none"></div>
        <div className="w-[90%] lg:w-[80%] mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-white leading-[1.3] mb-4 tracking-tight">Chứng cứ lâm sàng & đánh giá</h2>
            <p className="font-body text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
              Sota-D mang đến những bằng chứng thép từ các nghiên cứu lâm sàng độc lập uy tín nhất thế giới đăng trên tạp chí JADA (Journal of the American Dental Association):
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 hover:border-[#00ADEF]/50 hover:shadow-[0_0_30px_rgba(0,173,239,0.15)] transition-all duration-300 rounded-3xl p-8 text-center flex flex-col items-center">
              <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#00ADEF]/20 text-[#00ADEF] font-mono font-bold text-sm mb-4">Theo dõi 8 năm</div>
              <div className="text-6xl font-extrabold text-[#00ADEF] mb-4">100%</div>
              <h3 className="font-heading font-bold text-xl text-white mb-4">Tỷ lệ lưu giữ</h3>
              <p className="text-slate-400 font-body text-sm mb-4">0% Ê buốt | 0% Thất bại | 0% Sâu răng</p>
              <p className="text-slate-300 font-body leading-relaxed">Kết quả theo dõi lâm sàng sau 8 năm (Đại học Florida): Ghi nhận đạt 100% tỷ lệ lưu giữ phục hình, hoàn toàn không phát hiện bất kỳ ca thất bại phục hình, ê buốt sau điều trị hay sâu răng thứ phát bờ viền dán nào.</p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 hover:border-[#00ADEF]/50 hover:shadow-[0_0_30px_rgba(0,173,239,0.15)] transition-all duration-300 rounded-3xl p-8 text-center flex flex-col items-center">
              <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#00ADEF]/20 text-[#00ADEF] font-mono font-bold text-sm mb-4">Theo dõi 13 năm</div>
              <div className="text-6xl font-extrabold text-[#00ADEF] mb-4">96%</div>
              <h3 className="font-heading font-bold text-xl text-white mb-4">Phục hình sạch bóng sâu răng</h3>
              <p className="text-slate-400 font-body text-sm mb-4">Kháng vi thấm vững bền tuyệt đối</p>
              <p className="text-slate-300 font-body leading-relaxed">Kết quả theo dõi lâm sàng sau 13 năm (Đại học Florida): Đạt 96% tỷ lệ phục hồi không xuất hiện sâu răng thứ phát, chứng minh khả năng phòng thủ sinh học và kháng vi thấm vững bền tuyệt đối theo thời gian.</p>
            </div>
          </div>
          
          <div className="w-full max-w-4xl mx-auto">
            <ImagePlaceholder 
              className="aspect-[21/9] w-full bg-slate-800 border-slate-700" 
              text="Mockup tài liệu góc chụp bài báo cáo lâm sàng chính thức từ Đại học Florida đăng trên JADA, kết hợp biểu đồ hình tròn hiển thị nổi bật hai con số 100% và 96% bằng màu Cyan thương hiệu cực kỳ bắt mắt." 
            />
          </div>
        </div>
      </section>

      {/* SECTION 6: FAQ */}
      <section className="py-20 lg:py-28 bg-slate-50 bg-grid-pattern relative border-t border-slate-200 overflow-hidden">
        <div className="w-[90%] lg:w-[80%] mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-slate-900 leading-[1.3] mb-4 tracking-tight">Câu hỏi thường gặp</h2>
          </div>
          <div className="space-y-4">
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

      {/* SECTION 7: THE CORE OFFER */}
      <section className="py-20 lg:py-28 bg-slate-900 relative border-b border-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-light opacity-100 pointer-events-none"></div>
        <div className="w-[90%] lg:w-[80%] mx-auto relative z-10">
          <div className="text-center relative">
            <span className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-amber-500/20 border border-amber-500/30 mb-6 font-mono text-[10px] sm:text-xs font-bold text-amber-400 tracking-wide">
              Đặc quyền đồng hành không thể từ chối
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-white leading-[1.3] mb-10 tracking-tight">
              Gói giải pháp đồng bộ <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200">combo "Phục hồi sinh học MiCD - Chặn đứng ê buốt"</span>
            </h2>
          </div>

          <div className="bg-slate-800/80 rounded-3xl p-8 md:p-10 border border-slate-700 mb-8 w-full max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="flex-1 space-y-8">
                <div>
                  <h3 className="font-heading font-bold text-2xl text-amber-400 mb-4 border-b border-slate-700 pb-4">Bộ 3 sản phẩm cốt lõi</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-slate-300">01 Bộ keo dán Universal thế hệ 8 BeautiBond Xtreme (5ml)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-slate-300">01 Tuýp composite đặc giảm co rút Beautifil II (4.5g) hoặc Beautifil II LS (4g)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-slate-300">01 Tuýp composite siêu lực nén Beautifil Injectable X (2.2g)</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-heading font-bold text-2xl text-white mb-4 border-b border-amber-500/30 pb-4">🎁 Bộ 3 quà tặng tài trợ 100%</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="bg-amber-500/20 p-1.5 rounded-lg shrink-0"><Award className="w-4 h-4 text-amber-400" /></div>
                      <span className="text-amber-100 font-medium">Quà vật lý: 01 Bộ mũi mài bóng Composite Polishing Kit CA</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-amber-500/20 p-1.5 rounded-lg shrink-0"><Award className="w-4 h-4 text-amber-400" /></div>
                      <span className="text-amber-100 font-medium">Tài liệu: Phác đồ E-Guide "Làm chủ lớp lai & Kỹ thuật phục hồi xoang II"</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-amber-500/20 p-1.5 rounded-lg shrink-0"><Award className="w-4 h-4 text-amber-400" /></div>
                      <span className="text-amber-100 font-medium">Đặc quyền: Vé gia nhập Group gỡ rối lâm sàng Zalo 1:1 trong 30 ngày</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="w-full lg:w-[40%]">
                 <ImagePlaceholder 
                    className="h-full min-h-[300px] w-full bg-slate-900 border-slate-700" 
                    text="Mockup trọn bộ Combo đối xứng: BBX, Beautifil II LS, Injectable X ở giữa. Bên trái: Tablet hiển thị Ebook E-Guide màu Navy. Bên phải: Hộp nhựa Polishing Kit CA. Dưới: Thẻ VIP Zalo Access kim loại đen chữ vàng." 
                 />
              </div>
            </div>
          </div>

          <div className="w-full max-w-5xl mx-auto bg-slate-800/50 rounded-2xl p-6 md:p-8 border border-slate-700/50 mb-10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-[50px] rounded-full pointer-events-none"></div>
            
            <div className="text-center md:text-left relative z-10">
              <p className="text-slate-400 text-sm font-medium mb-1 uppercase tracking-wider">Tổng giá trị</p>
              <div className="flex items-baseline justify-center md:justify-start gap-2">
                <p className="text-slate-400 text-2xl md:text-3xl font-bold line-through decoration-red-500/50 decoration-2">7.250.000đ</p>
              </div>
              <p className="text-xs text-slate-500 mt-1">(Bác sĩ chỉ thanh toán phần vật lý 3 sản phẩm chính)</p>
            </div>
            
            <div className="hidden md:block w-px h-16 bg-slate-700 relative z-10"></div>
            <div className="block md:hidden w-full h-px bg-slate-700 relative z-10"></div>
            
            <div className="text-center md:text-right relative z-10">
              <p className="text-amber-400 text-sm font-medium mb-1 uppercase tracking-wider">Mức đầu tư trải nghiệm</p>
              <p className="font-heading font-extrabold text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200">3.250.000đ</p>
            </div>
          </div>

          <div className="w-full max-w-5xl mx-auto space-y-4 mb-10 text-slate-300 font-body text-sm md:text-base bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
            <h4 className="font-bold text-white mb-2 flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-emerald-400" /> Bảo chứng đồng hành 3 lớp (Rủi ro bằng 0)</h4>
            <p><strong>Bảo chứng 1 (Dứt ê buốt):</strong> Hỗ trợ 1:1 trong 5 ca phục hồi sống đầu tiên. Nếu bệnh nhân ê buốt, chuyên gia call gỡ lỗi. Nếu không hợp tay, thu hồi và hoàn tiền 100%.</p>
            <p><strong>Bảo chứng 2 (Bảo hiểm thói quen):</strong> Trong 30 ngày, nếu thao tác không hợp, hỗ trợ thu hồi sản phẩm chưa dùng và quy đổi vật tư khác giá trị tương đương.</p>
            <p><strong>Bảo chứng 3 (Bảo hành tồn kho 90 ngày):</strong> Đổi mới 1-1 ngay lập tức nếu lỗi đông cứng khi mở nắp trong vòng 90 ngày.</p>
          </div>

          <div className="flex justify-center w-full">
            <CtaButton ctaName="DangKyNhanUuDaiNgay" 
               onClick={() => openCampaignModal("Mở khóa combo phục hồi MiCD & nhận bộ kít mài bóng")}
              className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#00ADEF] text-white px-3 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-[10.5px] min-[375px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-sky-500 hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap flex-nowrap"
            >
              <span className="truncate">ĐĂNG KÝ NHẬN ƯU ĐÃI NGAY</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </CtaButton>
          </div>
        </div>
      </section>

      <CampaignModal
        isOpen={isCampaignModalOpen}
        onClose={() => setIsCampaignModalOpen(false)}
        title={campaignModalTitle}
      />
    </div>
  );
}

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, Zap, Coins, AlertTriangle, HeartPulse, Banknote, TrendingUp, 
  Droplet, Droplets, Microscope, ArrowRight, Gift, ChevronDown, CheckCircle2,
  Clock, Shield, BarChart3, TestTube, Quote, Image as ImageIcon,
  Unlink, Layers, Umbrella
} from 'lucide-react';

const FaqItem = ({ question, answer }: { question: string, answer: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white mb-4 transition-all duration-300">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between text-left font-heading font-bold text-slate-900 focus:outline-none"
      >
        <span className="text-sm sm:text-base pr-8">{question}</span>
        <ChevronDown className={`w-5 h-5 text-[#00ADEF] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const YoutubeAutoplay = ({ videoId }: { videoId: string }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!iframeRef.current?.contentWindow) return;
        
        if (entry.isIntersecting) {
          // Send play command
          iframeRef.current.contentWindow.postMessage(
            JSON.stringify({ event: 'command', func: 'playVideo', args: [] }),
            '*'
          );
        } else {
          // Send pause command
          iframeRef.current.contentWindow.postMessage(
            JSON.stringify({ event: 'command', func: 'pauseVideo', args: [] }),
            '*'
          );
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full aspect-video rounded-2xl overflow-hidden my-6 bg-slate-900 shadow-inner border border-slate-200 pointer-events-none select-none"
    >
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <iframe
          ref={iframeRef}
          onLoad={() => setIsLoaded(true)}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 pointer-events-none ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&disablekb=1&fs=0&modestbranding=1&playsinline=1&rel=0&iv_load_policy=3&enablejsapi=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      
      {/* Loading spinner while iframe initializes */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center text-slate-300 bg-slate-100 z-10">
          <div className="w-8 h-8 rounded-full border-2 border-slate-300 border-t-slate-500 animate-spin"></div>
        </div>
      )}
      
      {/* Invisible overlay blocking absolutely all pointer interactions */}
      <div className="absolute inset-0 z-20 w-full h-full bg-transparent"></div>
    </div>
  );
};

export function IndirectRestoration() {
  const openOffer = () => {
    window.dispatchEvent(new CustomEvent("open-offer-modal", { detail: { offerId: 1 } }));
  };

  return (
    <div className="w-full flex flex-col">
      {/* SECTION 1: HERO SECTION */}
      <section className="pb-16 pt-[120px] lg:pb-24 lg:pt-[140px] bg-slate-50 bg-grid-pattern relative overflow-hidden border-b border-slate-200">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#00ADEF]/10 to-transparent rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        
        <div className="w-[90%] lg:w-[85%] xl:w-[80%] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 items-center relative z-10">
          <div className="w-full lg:w-[65%] xl:w-[60%]">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#00ADEF]/10 border border-[#00ADEF]/20 mb-6 max-w-full overflow-hidden relative">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#00ADEF] animate-pulse shrink-0 relative z-10 shadow-[0_0_4px_rgba(0,173,239,0.8)]"></div>
              <div className="flex overflow-hidden relative w-full [mask-image:linear-gradient(to_right,transparent,black_10px,black_90%,transparent)] sm:[mask-image:none]">
                <div className="font-mono text-[10.5px] min-[375px]:text-[11.5px] sm:text-xs font-bold text-[#00ADEF] tracking-tight sm:tracking-wide whitespace-nowrap flex animate-marquee sm:!animate-none sm:!transform-none w-max">
                  <span className="pr-8 sm:pr-0">Xu thế nha khoa can thiệp tối thiểu & phục hồi Bioplastic</span>
                  <span className="pr-8 sm:hidden">Xu thế nha khoa can thiệp tối thiểu & phục hồi Bioplastic</span>
                </div>
              </div>
            </div>
            <h1 className="font-heading font-extrabold text-2xl min-[375px]:text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl text-slate-900 leading-[1.3] mb-6 tracking-tight lg:pr-4 xl:pr-0 lg:-mr-8 xl:-mr-12">
              Chấm dứt ám ảnh <br className="md:hidden" />
              <span className="text-[#00ADEF]">sút mão</span>, <span className="text-[#00ADEF]">ê buốt sau gắn</span> <br className="md:hidden" />
              và <span className="text-[#00ADEF]">lãng phí vật tư</span>!
            </h1>
            {/* MOBILE ONLY IMAGE */}
            <div className="w-full relative flex justify-center lg:hidden mb-10 mt-6">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-gradient-to-tr from-[#00ADEF]/30 to-[#C43838]/30 blur-[60px] rounded-full z-0 animate-pulse"></div>
              <img 
                referrerPolicy="no-referrer"
                src="https://raw.githubusercontent.com/nienmarketing-netizen/shofu.sota-d.com/main/public/images/beautilink-bbx.webp" 
                alt="Bộ đôi BBX và BeautiLink SA" 
                className="w-[80%] max-w-[320px] h-auto object-contain relative z-10 hover:scale-105 transition-transform duration-700 drop-shadow-2xl" 
              />
            </div>
            <p className="font-body text-base sm:text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Kiến tạo liên kết sinh học kỵ nước <strong className="text-slate-900">siêu mỏng 24µm</strong> với bộ đôi <strong className="text-slate-900">BeautiBond Xtreme (HEMA-Free)</strong> & <strong className="text-slate-900">BeautiLink SA (S-PRG)</strong>. Dán chặt Zirconia <strong className="text-slate-900">~50 MPa</strong>, lột sạch xi măng dư sau <strong className="text-amber-600">1-2 giây Tack-cure</strong> và tối ưu hóa chi phí chạm đáy chỉ <strong className="text-emerald-600">~16.600đ/ca gắn</strong>.
            </p>
            
            <ul className="space-y-3 mb-10">
              <li className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl border border-slate-200/80 bg-white/50 backdrop-blur-sm shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
                <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-[#C43838]" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-[15px] mb-1 leading-snug">Triệt tiêu ê buốt tức thì và muộn</h4>
                  <p className="text-slate-600 text-[13px] sm:text-sm leading-relaxed">Bảo vệ tủy răng sống bằng màng ngăn kỵ nước không chứa HEMA.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl border border-slate-200/80 bg-white/50 backdrop-blur-sm shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                  <Zap className="w-4 h-4 text-[#00ADEF]" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-[15px] mb-1 leading-snug">Quy trình "True Universal" 1 bước</h4>
                  <p className="text-slate-600 text-[13px] sm:text-sm leading-relaxed">Gắn chặt Zirconia, sứ Lithium Disilicate mà không cần Primer rời lách cách.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl border border-slate-200/80 bg-white/50 backdrop-blur-sm shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
                <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center shrink-0 mt-0.5">
                  <Coins className="w-4 h-4 text-amber-500" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-[15px] mb-1 leading-snug">Hiệu năng kinh tế đỉnh cao</h4>
                  <p className="text-slate-600 text-[13px] sm:text-sm leading-relaxed">Ống Handmix khổng lồ 15.6g thực hiện tới 120 ca lâm sàng.</p>
                </div>
              </li>
            </ul>

            <button 
              onClick={openOffer}
              className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#00ADEF] text-white px-3 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-[10.5px] min-[375px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-sky-500 hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap flex-nowrap"
            >
              <Gift className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0" />
              <span className="truncate">NHẬN MẪU THỬ BBX 2ml & ƯU ĐÃI</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </button>
            <p className="font-body text-xs sm:text-sm font-medium opacity-90 text-slate-500 mt-4 text-center sm:text-left">Trọn gói giải pháp bảo chứng bởi JADA & Dental Advisor</p>
          </div>
          
          <div className="hidden lg:flex w-full lg:w-[35%] xl:w-[40%] relative justify-center">
            {/* Lớp Hào quang sinh học tỏa sáng */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#00ADEF]/30 to-[#C43838]/30 blur-[80px] rounded-full z-0 animate-pulse"></div>
            
            {/* Bức ảnh WebP tách nền duy nhất */}
            <img 
              referrerPolicy="no-referrer"
              src="https://raw.githubusercontent.com/nienmarketing-netizen/shofu.sota-d.com/main/public/images/beautilink-bbx.webp" 
              alt="Bộ đôi BBX và BeautiLink SA" 
              className="w-full max-w-[550px] h-auto object-contain relative z-10 hover:scale-105 transition-transform duration-700 drop-shadow-2xl" 
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: THE PAIN POINTS */}
      <section className="py-20 lg:py-28 bg-slate-900 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-grid-pattern-light opacity-100"></div>
        <div className="w-[90%] lg:w-[80%] mx-auto relative z-10">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="font-heading font-extrabold text-xl min-[375px]:text-2xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl text-white leading-[1.3] mb-6 tracking-tight">
            Có phải bác sĩ đang <br className="md:hidden" />
            <span className="text-slate-400">âm thầm chịu đựng</span> <br className="md:hidden" />
            <span className="text-red-500">những rủi ro</span> này mỗi ngày?
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto"></div>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 backdrop-blur-md border border-red-500/30 rounded-3xl px-1 sm:px-3 py-6 sm:p-8 hover:border-red-500/60 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] transition-all duration-300 flex flex-col items-center text-center">
            <div className="w-11 h-11 md:w-16 md:h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-6 border border-red-500/30">
              <Unlink className="w-6 h-6 md:w-8 md:h-8 text-red-400" />
            </div>
            <h3 className="font-heading font-bold text-[14.5px] min-[375px]:text-[16px] min-[400px]:text-[17px] sm:text-xl text-white mb-4 whitespace-nowrap sm:whitespace-normal tracking-tight sm:tracking-normal">Sút phục hình & Ê buốt muộn</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Keo dán chứa HEMA hoạt động như "bọt biển" <strong className="text-slate-300">ngậm dịch ngà</strong>. Theo thời gian, HEMA bị <strong className="text-red-400">thủy phân phân hủy lớp lai</strong>, gây <strong className="text-red-400">bong sút, rò rỉ vi kẽ</strong> và <strong className="text-amber-400">ê buốt muộn tàn nhẫn</strong> cho bệnh nhân.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-md border border-red-500/30 rounded-3xl px-1 sm:px-3 py-6 sm:p-8 hover:border-red-500/60 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] transition-all duration-300 flex flex-col items-center text-center">
            <div className="w-11 h-11 md:w-16 md:h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-6 border border-red-500/30">
              <Layers className="w-6 h-6 md:w-8 md:h-8 text-red-400" />
            </div>
            <h3 className="font-heading font-bold text-[14.5px] min-[375px]:text-[16px] min-[400px]:text-[17px] sm:text-xl text-white mb-4 whitespace-nowrap sm:whitespace-normal tracking-tight sm:tracking-normal">Kênh cộm khớp & Hở đường viền</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Lớp màng (film thickness) của xi măng/keo cũ <strong className="text-red-400">quá dày (30-50µm)</strong> làm "đội" các phục hình Veneer, Tabletop siêu mỏng, <strong className="text-amber-400">gây cộm khớp</strong>, buộc phải mài chỉnh hoặc chịu rủi ro <strong className="text-red-400">nứt vỡ sứ giòn</strong>.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-md border border-red-500/30 rounded-3xl px-1 sm:px-3 py-6 sm:p-8 hover:border-red-500/60 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] transition-all duration-300 flex flex-col items-center text-center">
            <div className="w-11 h-11 md:w-16 md:h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-6 border border-red-500/30">
              <Banknote className="w-6 h-6 md:w-8 md:h-8 text-red-400" />
            </div>
            <h3 className="font-heading font-bold text-[14.5px] min-[375px]:text-[16px] min-[400px]:text-[17px] sm:text-xl text-white mb-4 whitespace-nowrap sm:whitespace-normal tracking-tight sm:tracking-normal">"Đốt tiền" do Thể tích chết Automix</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Vòi trộn Automix <strong className="text-red-400">lãng phí 0.25g - 0.44g xi măng</strong> kẹt lại mỗi lần bơm. Mỗi ca gắn <strong className="text-amber-400">vứt đi hàng chục ngàn đồng</strong>. Cộng thêm hàng tá chai Primer sứ lỉnh kỉnh dễ bay hơi làm <strong className="text-red-400">phồng rộp chi phí</strong>.
            </p>
          </div>
        </div>

        <div className="mt-12 md:mt-16 text-center relative z-10">
          <button 
            onClick={openOffer}
            className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#00ADEF] text-white px-3 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-[10.5px] min-[375px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-sky-500 hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap flex-nowrap"
          >
            <Gift className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0" />
            <span className="truncate">TƯ VẤN GIẢI PHÁP TRIỆT TIÊU RỦI RO</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </button>
        </div>

        </div>
      </section>

      {/* SECTION 3: THE GOLD STANDARD */}
      <section className="py-20 lg:py-28 bg-slate-50 bg-grid-pattern relative overflow-hidden border-b border-slate-200">
        <div className="w-[90%] lg:w-[80%] mx-auto space-y-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="font-heading font-extrabold text-2xl min-[375px]:text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl text-slate-900 leading-[1.3] mb-4 tracking-tight">
            <span className="text-amber-500">Tiêu chuẩn vàng</span> mới:<br />Bộ đôi liên kết sinh học <span className="text-[#00ADEF]">không thể phá hủy</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">Sự kết hợp hoàn hảo tạo nên khoảng ghép vô hình 24µm vững chắc.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white bg-gradient-to-br from-[#00ADEF]/5 to-[#007AA8]/10 rounded-[2rem] px-5 py-8 sm:p-8 md:p-12 border border-[#00ADEF]/20 relative overflow-hidden flex flex-col h-full justify-between">
            <div className="relative z-10">
              <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">Keo dán BeautiBond Xtreme</h3>
              <p className="text-[#007AA8] font-bold text-sm uppercase tracking-wider mb-6">Universal Thế hệ thứ 8</p>
              
              {/* Product Image Area */}
              <div className="mb-8 relative z-10 flex justify-center items-center">
                <div className="w-full rounded-2xl border border-[#00ADEF]/10 bg-white shadow-sm overflow-hidden relative group">
                  <img referrerPolicy="no-referrer" src="https://cdn.jsdelivr.net/gh/nienmarketing-netizen/sota-d@03c66c4af6e28e2a69254e4d674c5a45ab53e988/beautibond-xtreme.png" alt="BeautiBond Xtreme" className="w-full h-auto object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                </div>
              </div>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                    <Microscope className="w-6 h-6 text-[#00ADEF]" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm sm:text-[15px] mb-1 leading-snug text-slate-900">Màng keo kỷ lục chỉ 5µm</h4>
                    <p className="text-slate-600 text-[13px] sm:text-sm leading-relaxed">Khoá chặt vi kẽ, không lo cộm khớp, ngăn ngừa ố màu đường viền.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                    <Umbrella className="w-6 h-6 text-[#00ADEF]" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm sm:text-[15px] mb-1 leading-snug text-slate-900">Công nghệ HEMA-Free kỵ nước</h4>
                    <p className="text-slate-600 text-[13px] sm:text-sm leading-relaxed">Tuyệt đối không hút nước, chống thủy phân và ngăn ngừa nhạy cảm ngà vĩnh viễn.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                    <ShieldCheck className="w-6 h-6 text-[#00ADEF]" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm sm:text-[15px] mb-1 leading-snug text-slate-900">Quadra-Functional & ARS</h4>
                    <p className="text-slate-600 text-[13px] sm:text-sm leading-relaxed">Bọc giáp Silane kháng axit giúp dán bền bỉ lên men, ngà, Zirconia, sứ Lithium Disilicate không cần Primer rời.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white bg-gradient-to-br from-[#C43838]/5 to-[#8C2828]/10 rounded-[2rem] px-5 py-8 sm:p-8 md:p-12 border border-[#C43838]/20 relative overflow-hidden flex flex-col h-full justify-between">
            <div className="relative z-10">
              <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">Xi măng BeautiLink SA</h3>
              <p className="text-[#C43838] font-bold text-sm uppercase tracking-wider mb-6">Tự dán sinh học Dual-Cure</p>
              
              {/* Product Image Area */}
              <div className="mb-8 relative z-10 flex justify-center items-center">
                <div className="w-full rounded-2xl border border-[#C43838]/10 bg-white shadow-sm overflow-hidden relative group">
                  <img referrerPolicy="no-referrer" src="https://cdn.jsdelivr.net/gh/nienmarketing-netizen/sota-d@03c66c4af6e28e2a69254e4d674c5a45ab53e988/BeautilinkSA.png" alt="BeautiLink SA" className="w-full h-auto object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                </div>
              </div>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                    <Microscope className="w-6 h-6 text-[#C43838]" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm sm:text-[15px] mb-1 leading-snug text-slate-900">Màng phim siêu mỏng 14µm</h4>
                    <p className="text-slate-600 text-[13px] sm:text-sm leading-relaxed">Chảy loang thixotropic tuyệt hảo tạo đường hoàn tất vô hình.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                    <Clock className="w-6 h-6 text-[#C43838]" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm sm:text-[15px] mb-1 leading-snug text-slate-900">Dọn dư "One-Sweep" 1-2 giây</h4>
                    <p className="text-slate-600 text-[13px] sm:text-sm leading-relaxed">Hóa dẻo dạng gel dai cao su, lột sạch nguyên khối chỉ bằng một đường gạt.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                    <Shield className="w-6 h-6 text-[#C43838]" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm sm:text-[15px] mb-1 leading-snug text-slate-900">Hạt độn hoạt tính sinh học S-PRG</h4>
                    <p className="text-slate-600 text-[13px] sm:text-sm leading-relaxed">Liên tục phóng thích 6 ion đệm giúp trung hòa axit, kháng mảng bám, ngăn ngừa sâu răng dưới viền dán.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* The 24um Diagram */}
        <div className="rounded-3xl py-8 max-w-6xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Headline (Order 1 on Mobile, Top Left on Desktop) */}
            <div className="order-1 lg:col-start-1 lg:row-start-1 lg:self-end">
              <h4 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 leading-tight">
                Cấu trúc lớp lai kép <span className="text-[#00ADEF]">siêu mỏng</span> khít sát <span className="text-amber-500">tuyệt đối</span>
              </h4>
            </div>

            {/* Diagram Image (Order 2 on Mobile, Right Column on Desktop) */}
            <div className="order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 flex flex-col items-center w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto">
              <img 
                src="https://raw.githubusercontent.com/nienmarketing-netizen/shofu.sota-d.com/main/public/images/Shofu-double-hybrid-link-system.webp" 
                alt="Sơ đồ cấu trúc lớp lai kép siêu mỏng 24µm" 
                className="w-full h-auto object-contain drop-shadow-sm rounded-xl"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* USPs and Text (Order 3 on Mobile, Bottom Left on Desktop) */}
            <div className="order-3 lg:col-start-1 lg:row-start-2 lg:self-start space-y-6">
              <p className="text-slate-600 text-base leading-relaxed">
                Sự kết hợp hoàn hảo giữa <strong className="text-slate-900">màng keo kỷ lục 5µm</strong> của BeautiBond Xtreme và lớp <strong className="text-slate-900">xi măng siêu mỏng 14µm</strong> của BeautiLink SA tạo nên một <strong className="text-[#00ADEF]">khoảng ghép vô hình chỉ 24µm</strong>, thiết lập <strong className="text-amber-600">tiêu chuẩn mới</strong> trong phục hình gián tiếp.
              </p>
              <ul className="space-y-4 pt-2">
                <li className="flex items-start gap-4 p-5 rounded-2xl border border-slate-200/80 bg-white/60 backdrop-blur-sm shadow-sm hover:bg-white/90 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-[#00ADEF] shrink-0" />
                  <p className="text-sm text-slate-700 leading-relaxed"><strong>Thẩm mỹ hoàn hảo:</strong> Không ố vàng đường viền theo thời gian nhờ công nghệ HEMA-Free kỵ nước.</p>
                </li>
                <li className="flex items-start gap-4 p-5 rounded-2xl border border-slate-200/80 bg-white/60 backdrop-blur-sm shadow-sm hover:bg-white/90 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-[#00ADEF] shrink-0" />
                  <p className="text-sm text-slate-700 leading-relaxed"><strong>Khớp cắn chuẩn xác:</strong> Triệt tiêu hoàn toàn rủi ro cộm cấn, kênh phục hình sau khi gắn.</p>
                </li>
                <li className="flex items-start gap-4 p-5 rounded-2xl border border-slate-200/80 bg-white/60 backdrop-blur-sm shadow-sm hover:bg-white/90 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-[#00ADEF] shrink-0" />
                  <p className="text-sm text-slate-700 leading-relaxed"><strong>Bảo vệ sinh học:</strong> Hạt độn S-PRG ngăn chặn vi khuẩn xâm nhập vi kẽ, bảo vệ cùi răng vĩnh viễn.</p>
                </li>
              </ul>
            </div>
            
          </div>
        </div>

        <div className="mt-4 md:mt-12 text-center">
          <button 
            onClick={openOffer}
            className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#00ADEF] text-white px-3 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-[10.5px] min-[375px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-sky-500 hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap flex-nowrap"
          >
            <Gift className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0" />
            <span className="truncate">Yêu cầu tư vấn</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </button>
        </div>

        </div>
      </section>

      {/* SECTION 4: DEEP DIVE INTO USPS */}
      <section className="py-20 lg:py-28 bg-slate-200 bg-grid-pattern relative overflow-hidden border-b border-slate-300">
        <div className="w-[90%] lg:w-[80%] mx-auto space-y-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-slate-900 leading-[1.3] mb-4 tracking-tight">
            Sức mạnh <br className="sm:hidden" />
            <span className="text-[#00ADEF]">thuyết phục</span> <span className="text-amber-500">tuyệt đối</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
            <strong className="text-slate-900">Bảo chứng y văn vững chắc</strong> và hiệu suất thực tế được <strong className="text-emerald-600">kiểm chứng bởi Bác sĩ trên hơn 100 quốc gia</strong> và vùng lãnh thổ.
          </p>
        </div>
        
        {/* USP 1 */}
        <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl border border-white p-8 md:p-12 shadow-sm flex flex-col md:flex-row gap-8 items-center hover:border-slate-200 hover:shadow-md transition-all">
          <div className="w-full md:w-1/2 space-y-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 text-white mb-2">
              <span className="font-heading font-black text-xl">1</span>
            </div>
            <h3 className="font-heading font-bold text-xl text-slate-900">Lực dán siêu cường không suy giảm qua 5,000 chu kỳ sốc nhiệt khắt khe</h3>
            
            {/* Mobile Image (Visible only on mobile, between headline and body) */}
            <div className="w-full md:hidden my-6">
              <img 
                src="https://raw.githubusercontent.com/nienmarketing-netizen/shofu.sota-d.com/main/public/images/share-bond-strength-on-zirconia%20copy.webp" 
                alt="Lực dán trượt (MPa) trên Zirconia sau Lão hóa nhiệt" 
                className="w-full h-auto object-contain rounded-2xl drop-shadow-sm border border-slate-200"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            <p className="font-body text-sm md:text-base text-slate-600 leading-relaxed">
              Báo cáo của The Dental Advisor (Số 168 - Tháng 8/2024) ghi nhận BeautiLink SA đạt lực dán trượt khổng lồ <strong className="text-[#00ADEF] font-bold text-lg">~50 MPa</strong> và <strong className="text-slate-900 font-bold bg-amber-100 px-1 rounded">không suy giảm</strong> sau <strong className="text-slate-900 font-bold">5.000 chu kỳ sốc nhiệt</strong> (Thermocycling).
            </p>
          </div>
          
          {/* Desktop Image (Visible only on md and up) */}
          <div className="w-full md:w-1/2 hidden md:block">
            <img 
              src="https://raw.githubusercontent.com/nienmarketing-netizen/shofu.sota-d.com/main/public/images/share-bond-strength-on-zirconia%20copy.webp" 
              alt="Lực dán trượt (MPa) trên Zirconia sau Lão hóa nhiệt" 
              className="w-full h-auto object-contain rounded-2xl drop-shadow-sm border border-slate-200"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* USP 2 & 3 in Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl border border-white p-8 md:p-10 shadow-sm hover:border-slate-200 hover:shadow-md transition-all">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 text-white mb-6">
              <span className="font-heading font-black text-xl">2</span>
            </div>
            <h3 className="font-heading font-bold text-xl text-slate-900 mb-4">"Sát thủ" dọn xi măng dư "One-Sweep"</h3>
            
            <YoutubeAutoplay videoId="K85voUZxMV8" />

            <p className="font-body text-sm text-slate-600 leading-relaxed mb-6">
              Giải phóng <strong className="text-amber-600 font-bold">30% thời gian</strong> trên ghế nha. Không còn cạo vụn xi măng cứng ngắc làm tứa máu nướu. Chiếu đèn <strong className="text-slate-800 font-bold">1-2 giây</strong> (Tack-cure), xi măng <strong className="text-[#00ADEF] font-bold">hóa gel dai dẻo</strong>. Dùng thám châm <strong className="text-slate-900 font-bold">bóc nguyên khối</strong> trong một đường gạt.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <Clock className="w-6 h-6 text-amber-500 shrink-0" />
                <span className="font-bold text-slate-800 text-sm">Tiết kiệm thời gian, tăng trải nghiệm bệnh nhân</span>
              </div>
              <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <HeartPulse className="w-6 h-6 text-rose-500 shrink-0" />
                <span className="font-bold text-slate-800 text-sm">Bảo vệ mô nướu & viền phục hình</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 grid gap-4">
              <div className="flex gap-4 items-center bg-slate-50 p-5 rounded-2xl border border-slate-100">
                <div className="font-heading font-black text-4xl text-[#00ADEF] tracking-tighter leading-none shrink-0">75<span className="text-2xl">%</span></div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Đánh giá thao tác & dọn dư <strong className="text-slate-800">tốt hơn</strong> các dòng đang dùng.
                </p>
              </div>
              <div className="flex gap-4 items-center bg-slate-50 p-5 rounded-2xl border border-slate-100">
                <div className="font-heading font-black text-4xl text-amber-500 tracking-tighter leading-none shrink-0">86<span className="text-2xl">%</span></div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Đánh giá thời gian làm việc <strong className="text-slate-800">vừa vặn</strong>, không gây áp lực.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl border border-white p-8 md:p-10 shadow-sm hover:border-slate-200 hover:shadow-md transition-all">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 text-white mb-6">
              <span className="font-heading font-black text-xl">3</span>
            </div>
            <h3 className="font-heading font-bold text-xl text-slate-900 mb-4">Lá chắn Sinh học S-PRG</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              S-PRG là <strong className="text-emerald-600 font-bold">"bình ắc quy sinh học"</strong>. <strong className="text-[#00ADEF] font-bold text-base">6 Ion</strong> (F-, Sr2+, BO33-, Al3+, SiO32-, Na+) <strong className="text-slate-800 font-bold">liên tục khuếch tán</strong> qua màng dán để <strong className="text-slate-800 font-bold">bít kín ống ngà hở</strong>, <strong className="text-slate-800 font-bold">trung hòa axit</strong> và tạo lớp màng <strong className="text-slate-800 font-bold">kháng biofilm ngăn mảng bám</strong>.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <Shield className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="font-bold text-slate-800 text-sm">Bảo vệ mô ngà sống & Đường hoàn tất an toàn trọn đời phục hình.</span>
              </div>
              <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <Zap className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-slate-700 text-sm"><strong className="text-slate-900 font-bold">"Trạm sạc" Ion sinh học 24/7</strong> – Chủ động tái khoáng và nuôi dưỡng răng thật.</span>
              </div>
              <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <ShieldCheck className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-slate-700 text-sm"><strong className="text-slate-900 font-bold">Màng chắn kháng mảng bám</strong> – Nướu săn chắc, viền dán không hôi miệng.</span>
              </div>
              <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <TestTube className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <span className="text-slate-700 text-sm"><strong className="text-slate-900 font-bold">Tự động trung hòa Axit</strong> – Triệt tiêu môi trường ăn mòn bờ viền.</span>
              </div>
            </div>

            {/* Floating Badges */}
            <div className="mt-8 grid gap-4">
              <div className="bg-white p-4 rounded-2xl shadow-[0_8px_30px_-4px_rgba(0,0,0,0.06)] border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-[#00ADEF]"></div>
                <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-2 pl-3">JADA 8 Năm</div>
                <div className="flex flex-col gap-2 pl-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00ADEF] shrink-0 mt-0.5" />
                    <span className="text-sm font-bold text-slate-800 leading-tight">100% Tỷ lệ lưu giữ</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00ADEF] shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-600 leading-tight">0% Ê buốt / Sâu thứ phát</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-2xl shadow-[0_8px_30px_-4px_rgba(0,0,0,0.06)] border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-amber-500"></div>
                <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-2 pl-3">JADA 13 Năm</div>
                <div className="flex flex-col gap-2 pl-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-sm font-bold text-slate-800 leading-tight">96% tỉ lệ lưu giữ</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-sm font-bold text-slate-800 leading-tight">0% sâu răng thứ phát</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl shadow-[0_8px_30px_-4px_rgba(0,0,0,0.06)] border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-500"></div>
                <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-2 pl-3">Nature Research</div>
                <div className="flex flex-col gap-2 pl-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-sm font-bold text-slate-800 leading-tight">Ức chế gen pdh operon</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-600 leading-tight">Triệt tiêu Biofilm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* USP 4 */}
        <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8 md:p-10 shadow-sm border border-white hover:border-slate-200 hover:shadow-md transition-all overflow-hidden relative">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 text-white mb-6">
              <span className="font-heading font-black text-xl">4</span>
            </div>
            <h3 className="font-heading font-bold text-xl text-slate-900 mb-4">
              Tối ưu ROI – "Tuyên chiến" với lãng phí
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Block 1: Problem */}
            <div className="flex flex-col justify-between lg:bg-white/40 lg:border lg:border-white/60 lg:rounded-2xl lg:p-8 lg:shadow-sm">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-500 shrink-0" />
                  <h4 className="font-heading font-bold text-sm md:text-lg text-slate-900">Sự thật "đắt đỏ" của vòi trộn Automix</h4>
                </div>
                <p className="font-body text-sm text-slate-600 leading-relaxed mb-6">
                  Lượng xi măng kẹt lại trong vòi trộn (0.25g - 0.44g) <strong className="text-red-500 font-bold">lớn hơn hoặc bằng</strong> chính lượng xi măng được dùng cho răng của bệnh nhân.
                </p>
              </div>
              
              <div className="flex items-center gap-3 md:gap-4 bg-slate-50 rounded-xl p-4 md:p-5 border border-slate-100 mt-auto">
                <div className="flex-1 text-center">
                  <div className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Phòng khám trả cho</div>
                  <div className="text-2xl md:text-3xl font-black text-[#00ADEF]">100%</div>
                  <div className="text-[10px] text-slate-400 uppercase mt-1 tracking-wider">Tuýp vật liệu</div>
                </div>
                <div className="text-slate-300 shrink-0 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
                <div className="flex-1 text-center">
                  <div className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Nhưng chỉ dùng</div>
                  <div className="text-2xl md:text-3xl font-black text-amber-500">{"< 50%"}</div>
                  <div className="text-[10px] text-slate-400 uppercase mt-1 tracking-wider">Thực tế</div>
                </div>
              </div>
            </div>

            {/* Block 2: Solution Comparison */}
            <div className="flex flex-col lg:bg-white/40 lg:border lg:border-white/60 lg:rounded-2xl lg:p-8 lg:shadow-sm">
              <div className="text-center mb-6">
                <h4 className="font-heading font-bold text-sm md:text-lg text-slate-900 mb-4">Tối ưu lợi nhuận với BeautiLink SA</h4>
                <div className="flex flex-col items-center gap-1.5 sm:gap-2">
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-amber-50 text-amber-600 font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[11px] sm:text-sm border border-amber-200 whitespace-nowrap">
                    <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" /> 
                    <span>Tiết kiệm ~800 triệu VNĐ/năm</span>
                  </div>
                  <span className="text-[10px] sm:text-xs italic text-slate-500">Với quy mô ~500 răng sứ/tháng</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-auto">
                {/* Automix */}
                <div className="bg-slate-50 rounded-xl p-4 md:p-5 border border-slate-100 text-center flex flex-col justify-center">
                  <div className="text-[10px] md:text-xs text-slate-500 font-bold uppercase mb-4 tracking-wider">Automix (8.6g)</div>
                  <div className="space-y-4">
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase mb-1 tracking-wider">Số ca thực tế</div>
                      <div className="text-xl font-bold text-slate-800">22 <span className="text-xs font-normal text-slate-500">ca</span></div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase mb-1 tracking-wider">Chi phí / Ca</div>
                      <div className="text-lg font-bold text-red-500">159.000đ</div>
                    </div>
                  </div>
                </div>

                {/* Handmix */}
                <div className="bg-[#00ADEF]/5 rounded-xl p-4 md:p-5 border border-[#00ADEF]/20 text-center relative overflow-hidden flex flex-col justify-center">
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#00ADEF]"></div>
                  <div className="text-[10px] md:text-xs text-[#00ADEF] font-bold uppercase mb-4 tracking-wider">BeautiLink SA Handmix (15.6g)</div>
                  <div className="space-y-4">
                    <div>
                      <div className="text-[10px] text-slate-500 uppercase mb-1 tracking-wider">Số ca thực tế</div>
                      <div className="text-xl font-black text-slate-900">120 <span className="text-xs font-normal text-slate-500">ca</span></div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-500 uppercase mb-1 tracking-wider">Chi phí / Ca</div>
                      <div className="text-lg font-black text-amber-600">26.600đ</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 md:mt-16 text-center relative z-10">
          <button 
            onClick={openOffer}
            className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#00ADEF] text-white px-3 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-[10.5px] min-[375px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-sky-500 hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap flex-nowrap"
          >
            <Gift className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0" />
            <span className="truncate">Tư vấn giải pháp tối ưu chi phí</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </button>
        </div>

        </div>
      </section>

      {/* SECTION 5: CLINICAL WORKFLOW REWRITE */}
      <section className="py-20 lg:py-28 bg-slate-900 relative border-b border-slate-800 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern-light opacity-100 pointer-events-none"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#00ADEF]/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="w-[90%] lg:w-[80%] mx-auto relative z-10">
          
          <div className="max-w-5xl mx-auto mb-16 lg:mb-24 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="text-center lg:text-left flex-1">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-bold text-[10px] min-[375px]:text-[11px] sm:text-xs md:text-sm tracking-wide mb-6 whitespace-nowrap">
                <AlertTriangle className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span>Triệt tiêu sai số lâm sàng & tài chính</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-white leading-[1.3] mb-0 tracking-tight">
                Đập tan "ma trận" <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ADEF] to-blue-400">chai lọ phục hình</span>
              </h2>
            </div>
            
            <div className="flex justify-center flex-1 w-full lg:w-auto mt-2 lg:mt-0">
              <div className="relative group inline-block">
                <img 
                  referrerPolicy="no-referrer"
                  src="https://raw.githubusercontent.com/nienmarketing-netizen/shofu.sota-d.com/main/public/images/ma-tran-chai-lo-phuc-hinh.webp" 
                  alt="Ma trận chai lọ phục hình" 
                  className="w-full max-w-[280px] sm:max-w-[350px] lg:max-w-[400px] h-auto object-contain drop-shadow-2xl grayscale opacity-70 group-hover:scale-105 transition-transform duration-500 rounded-2xl" 
                  loading="lazy"
                />
                {/* Red X Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:scale-105 transition-transform duration-500">
                  <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 drop-shadow-[0_0_15px_rgba(239,68,68,0.7)]">
                    <div className="absolute top-1/2 left-0 w-full h-4 sm:h-5 bg-red-600 rounded-full rotate-45 -translate-y-1/2 border-2 border-white/20 shadow-lg"></div>
                    <div className="absolute top-1/2 left-0 w-full h-4 sm:h-5 bg-red-600 rounded-full -rotate-45 -translate-y-1/2 border-2 border-white/20 shadow-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SỰ XUNG ĐỘT HÓA HỌC */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <h3 className="font-heading font-bold text-xl text-white mb-4">
                Nguồn gốc "ma trận": <br className="block sm:hidden" />
                <span className="text-[#00ADEF]">Sự xung đột hóa học</span>
              </h3>
              <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">Để thấu hiểu "ma trận chai lọ", cần nhìn vào <strong className="text-white">bản chất hóa học riêng biệt</strong> của từng <strong className="text-amber-400">giao diện bám dính</strong>.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Sứ thủy tinh */}
              <div className="bg-slate-800/50 border border-slate-700/50 p-6 sm:p-8 rounded-2xl flex flex-col relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#00ADEF]"></div>
                <h4 className="font-heading font-bold text-sm md:text-lg text-white mb-6 text-center pb-4 border-b border-slate-700">Sứ thủy tinh</h4>
                <div className="flex justify-center mb-6">
                  <img src="https://raw.githubusercontent.com/nienmarketing-netizen/shofu.sota-d.com/main/public/images/su-thuy-tinh.webp" alt="Sứ thủy tinh" className="w-full max-w-[150px] h-auto object-contain" referrerPolicy="no-referrer" />
                </div>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed text-center mt-auto">
                  Đòi hỏi soi mòn vi cơ học bằng <strong className="text-red-400">Acid HF</strong>, sau đó bắt buộc quét Silane độc lập để tạo mạng lưới liên kết siloxane.
                </p>
              </div>

              {/* Zirconia */}
              <div className="bg-slate-800/50 border border-slate-700/50 p-6 sm:p-8 rounded-2xl flex flex-col relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#00ADEF]"></div>
                <h4 className="font-heading font-bold text-sm md:text-lg text-white mb-6 text-center pb-4 border-b border-slate-700">Zirconia & kim loại</h4>
                <div className="flex justify-center mb-6">
                  <img src="https://raw.githubusercontent.com/nienmarketing-netizen/shofu.sota-d.com/main/public/images/zironia.webp" alt="Zirconia & kim loại" className="w-full max-w-[150px] h-auto object-contain" referrerPolicy="no-referrer" />
                </div>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed text-center mt-auto">
                  Bề mặt trơ với <strong className="text-red-400">Acid HF</strong>. Bắt buộc phải có các Primer chứa monomer chức năng để tạo liên kết ion trực tiếp.
                </p>
              </div>

              {/* Mô răng */}
              <div className="bg-slate-800/50 border border-slate-700/50 p-6 sm:p-8 rounded-2xl flex flex-col relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#00ADEF]"></div>
                <h4 className="font-heading font-bold text-sm md:text-lg text-white mb-6 text-center pb-4 border-b border-slate-700">Mô răng</h4>
                <div className="flex justify-center mb-6">
                  <img src="https://raw.githubusercontent.com/nienmarketing-netizen/shofu.sota-d.com/main/public/images/mo-rang.webp" alt="Mô răng" className="w-full max-w-[150px] h-auto object-contain" referrerPolicy="no-referrer" />
                </div>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed text-center mt-auto">
                  Đòi hỏi hệ thống keo dán (Bond) để xâm nhập và tạo ra lớp lai (hybrid layer) vững chắc.
                </p>
              </div>
            </div>

            <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6 text-center flex flex-col sm:flex-row items-center justify-center gap-4 max-w-4xl mx-auto">
              <p className="text-red-100 text-sm sm:text-base text-center">
                Chính sự khác biệt lý hóa khắt khe này đã ép buộc quy trình lâm sàng phải <strong className="text-red-400 font-bold text-lg uppercase block mt-1">SỬ DỤNG HÀNG LOẠT <br className="sm:hidden" /> HOÁ CHẤT RỜI RẠC</strong>
              </p>
            </div>
          </div>

          {/* HẬU QUẢ */}
          <div className="mb-24 bg-slate-800/30 rounded-3xl p-8 sm:p-12 border border-slate-700/50">
            <div className="text-center mb-12">
              <h3 className="font-heading font-bold text-xl text-red-500 mb-4">
                Hậu quả của chuỗi <br className="sm:hidden" /> thao tác cồng kềnh
              </h3>
            </div>
            
            <div className="flex flex-col space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                <div className="space-y-6 flex flex-col justify-center">
                  <div className="flex gap-4">
                    <Coins className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400 shrink-0 mt-1" />
                    <p className="text-slate-300 leading-relaxed text-base sm:text-lg">Tỷ lệ <strong className="text-white">chi phí vật tư (COGS) liên tục leo thang</strong> do phức tạp trong <strong className="text-white">quản lý tồn kho</strong>.</p>
                  </div>
                  <div className="flex gap-4">
                    <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-rose-400 shrink-0 mt-1" />
                    <p className="text-slate-300 leading-relaxed text-base sm:text-lg">Sự gia tăng tuyến tính của số lượng thao tác lâm sàng tỷ lệ thuận với rủi ro xảy ra <strong className="text-white">"sai số nhân sự"</strong>.</p>
                  </div>
                  <div className="flex gap-4">
                    <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400 shrink-0 mt-1" />
                    <p className="text-slate-300 leading-relaxed text-base sm:text-lg">Chỉ một khoảnh khắc đưa nhầm chai Primer hoặc sai lệch thời gian lưu dung dịch, <strong className="text-white">toàn bộ cấu trúc dán dính sẽ sụp đổ.</strong></p>
                  </div>
                </div>
                {/* Visual Flowchart */}
                <div className="flex flex-col items-center justify-center p-6 bg-slate-900/80 rounded-2xl border border-slate-700">
                  <div className="flex justify-center w-full">
                    <img src="https://raw.githubusercontent.com/nienmarketing-netizen/shofu.sota-d.com/main/public/images/chuoi-thao-tac-cong-kenh.webp" alt="Chuỗi thao tác cồng kềnh" className="w-full h-auto object-contain" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center text-center gap-4 bg-red-500/10 p-6 sm:p-8 rounded-2xl border border-red-500/20 w-full mt-4">
                <AlertTriangle className="w-8 h-8 sm:w-10 sm:h-10 text-red-500 shrink-0" />
                <p className="text-red-200 leading-relaxed text-base sm:text-lg max-w-3xl">
                  Hậu quả trực tiếp: <strong className="text-red-400 font-bold">Bong tróc phục hình, vi sút viền,</strong> và tình trạng <strong className="text-red-400 font-bold">nhạy cảm ê buốt trầm trọng</strong> cho bệnh nhân.
                </p>
              </div>
            </div>
          </div>

          {/* PHÁC ĐỒ 3 BƯỚC */}
          <div className="max-w-4xl mx-auto">
            <div className="max-w-3xl mx-auto mb-16 flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="text-center md:text-left flex-1">
                <h3 className="font-heading font-bold text-2xl md:text-3xl text-white mb-4">
                  Phác đồ <span className="text-[#00ADEF]">3 bước đơn giản</span>
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Bác sĩ nay chỉ cần thực hiện <strong className="text-white">3 bước thao tác đơn giản</strong> với bộ đôi <span className="text-[#00ADEF] font-bold">BeautiBond Xtreme</span> và <span className="text-[#C43838] font-bold">BeautiLink SA</span>:
                </p>
              </div>
              
              <div className="flex justify-center flex-1 w-full md:w-auto">
                <img 
                  referrerPolicy="no-referrer"
                  src="https://raw.githubusercontent.com/nienmarketing-netizen/shofu.sota-d.com/main/public/images/beautilink-bbx.webp" 
                  alt="Bộ đôi BBX và BeautiLink SA" 
                  className="w-full max-w-[200px] sm:max-w-[250px] h-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500" 
                  loading="lazy"
                />
              </div>
            </div>
            
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-6 sm:before:ml-[3.25rem] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#00ADEF]/0 before:via-[#00ADEF]/50 before:to-[#00ADEF]/0">
              
              {/* Step 1 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-slate-900 bg-[#00ADEF] text-white font-heading font-bold text-xl shadow-[0_0_0_4px_rgba(0,173,239,0.2)] z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  01
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-slate-800/80 border border-[#00ADEF]/30 p-6 rounded-2xl shadow-lg hover:border-[#00ADEF] transition-colors">
                  <h4 className="font-heading font-bold text-[#00ADEF] text-sm md:text-lg mb-2">Bước 1 – Quét keo:</h4>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    Nhỏ <strong className="text-white">một giọt duy nhất</strong> BeautiBond Xtreme và quét đều lên cả bề mặt cùi răng và lòng phục hình.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-slate-900 bg-[#00ADEF] text-white font-heading font-bold text-xl shadow-[0_0_0_4px_rgba(0,173,239,0.2)] z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  02
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-slate-800/80 border border-[#00ADEF]/30 p-6 rounded-2xl shadow-lg hover:border-[#00ADEF] transition-colors">
                  <h4 className="font-heading font-bold text-[#00ADEF] text-sm md:text-lg mb-2">Bước 2 – Thổi hơi:</h4>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    Thổi hơi để dàn mỏng màng keo xuống ngưỡng <strong className="text-white">5µm</strong>. Sự bốc hơi dung môi làm tăng vọt nồng độ monomer acid, từ đó mở khóa màng bảo vệ của phân tử ARS.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-slate-900 bg-[#00ADEF] text-white font-heading font-bold text-xl shadow-[0_0_0_4px_rgba(0,173,239,0.2)] z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  03
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-slate-800/80 border border-[#00ADEF]/30 p-6 rounded-2xl shadow-lg hover:border-[#00ADEF] transition-colors">
                  <h4 className="font-heading font-bold text-[#00ADEF] text-sm md:text-lg mb-2">Bước 3 – Chiếu đèn & bơm xi măng:</h4>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    Quang trùng hợp trong <strong className="text-white">5 đến 10 giây</strong>, sau đó bơm trực tiếp xi măng BeautiLink SA vào lòng phục hình.
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="mt-12 md:mt-16 text-center relative z-10">
            <button 
              onClick={openOffer}
              className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#00ADEF] text-white px-3 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-[10.5px] min-[375px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-sky-500 hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap flex-nowrap"
            >
              <Gift className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0" />
              <span className="truncate">Trải nghiệm phác đồ 3 bước</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </button>
          </div>

        </div>
      </section>

      {/* SECTION 6: SOCIAL PROOF */}
      <section className="py-20 lg:py-28 bg-slate-100 bg-grid-pattern relative overflow-hidden">
        <style dangerouslySetInnerHTML={{__html: `
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
        `}} />
        <div className="w-[90%] lg:w-[80%] mx-auto relative z-10">
        <Quote className="absolute -top-10 -left-10 w-40 h-40 text-slate-200 opacity-50" />
          <div className="text-center max-w-4xl mx-auto mb-16 relative z-10">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 mb-4"><span className="text-[#00ADEF]">Hàng ngàn nha sĩ và chuyên gia</span> đã chọn</h2>
        </div>
        </div> {/* Close w-[90%] container here so marquee can be full width */}
        
        {/* Marquee Wrapper (Full Width) */}
        <div className="relative z-10 w-full overflow-hidden flex flex-col gap-6 lg:gap-8 pb-4">
          
          {/* ALL SCREENS (2 Rows) */}
          <div className="flex flex-col gap-6 w-full overflow-hidden">
            {/* Row 1 - Left */}
            <div className="flex overflow-hidden group w-full">
              <div className="flex animate-marquee-left w-max hover:animation-play-state-paused">
                {(() => {
                  const t1 = [
                    { text: "\"Dòng sản phẩm tự dán ứng dụng công nghệ S-PRG hoạt động như một phép màu giúp tăng tốc quy trình lâm sàng cho các bé nhỏ hiếu động nhờ loại bỏ các bước nhạy cảm kỹ thuật.\"", name: "Dr. Shukan Kanuga", role: "Hiệp hội Nha khoa Trẻ em Hoa Kỳ, CA" },
                    { text: "\"Khả năng che màu cùi răng của BeautiLink SA Opaque thực sự ấn tượng. Viền phục hình luôn tự nhiên và không bao giờ bị ánh xám sau nhiều năm.\"", name: "Dr. Nguyễn Hải Đăng", role: "Chuyên gia Phục hình, Hà Nội" },
                    { text: "\"Hệ thống Giomer đáp ứng trọn vẹn xu hướng vật liệu sinh học tự trị liệu nhờ cơ chế trung hòa axit, giải phóng và tái sạc ion liên tục.\"", name: "Dr. Jennifer Bell", role: "Viện Thẩm mỹ Nha khoa Quốc tế, NC" },
                    { text: "\"Lớp keo dán siêu mỏng dưới 5 micron tối ưu hóa khoảng ghép khít sát tuyệt đối, đồng thời là cầu nối lý tưởng giúp ion sinh học khuếch tán để bảo vệ mô răng.\"", name: "Prof. Keiichi Hosaka", role: "ĐH Tokushima, Nhật Bản" },
                    { text: "\"Điều làm tôi an tâm nhất khi dùng keo dán BBX là không còn lo bệnh nhân phàn nàn ê buốt sau gắn Veneer. Thao tác lại vô cùng tinh gọn.\"", name: "Dr. Lê Huỳnh Anh", role: "Nha khoa Thẩm mỹ, Đà Nẵng" },
                    { text: "\"Gắn phục hình chưa bao giờ dễ dàng và an tâm đến thế. Bệnh nhân của tôi hoàn toàn không phàn nàn về bất kỳ cơn ê buốt nào sau điều trị. Điều này thực sự nâng tầm trải nghiệm phòng khám.\"", name: "Dr. Michael Smith", role: "Chuyên gia Phục hình, New York" },
                    { text: "\"Từ khi chuyển sang hệ thống Shofu, tỷ lệ sút phục hình tại phòng khám giảm gần như bằng không. Sự ổn định và bền vững khác biệt hoàn toàn so với trước đây.\"", name: "Dr. Trần Văn An", role: "Chuyên gia Phục hình thẩm mỹ, TP.HCM" }
                  ];
                  const dup = [...t1, ...t1];
                  return dup.map((item, idx) => (
                    <div key={`row-1-${idx}`} className="bg-white rounded-2xl p-5 lg:p-6 shadow-sm flex flex-col w-[280px] sm:w-[320px] lg:w-[350px] shrink-0 mx-2 sm:mx-3 border border-slate-100 whitespace-normal">
                      <p className="font-body text-[13.5px] sm:text-[14px] text-slate-600 italic mb-5 lg:mb-6 leading-relaxed flex-1">{item.text}</p>
                      <div className="border-t border-slate-100 pt-4 lg:pt-5 mt-auto">
                        <h4 className="font-heading font-bold text-sm sm:text-[15px] mb-1 text-slate-900">{item.name}</h4>
                        <p className="text-[11px] sm:text-xs text-slate-500">{item.role}</p>
                      </div>
                    </div>
                  ));
                })()}
              </div>
            </div>
            
            {/* Row 2 - Right */}
            <div className="flex overflow-hidden group w-full">
              <div className="flex animate-marquee-right w-max hover:animation-play-state-paused">
                {(() => {
                  const t2 = [
                    { text: "\"BeautiLink SA giúp tiết kiệm một lượng thời gian khổng lồ. Quy trình đơn giản hơn, dọn dẹp xi măng thừa cực kỳ dễ dàng và độ lưu giữ vô cùng vượt trội.\"", name: "Dr. Anna Lee", role: "Bác sĩ trưởng, Tuổi trẻ Nha khoa, Sydney" },
                    { text: "\"Từ ngày dùng xi măng của Shofu, tốc độ dọn dẹp xi măng thừa giảm xuống chỉ còn vài giây. Rất sạch sẽ và không gây kích ứng nướu.\"", name: "Dr. Phạm Hoàng Tuấn", role: "Bác sĩ trưởng, Cần Thơ" },
                    { text: "\"Điều tôi thích nhất ở keo dán BeautiBond Xtreme là tính kỵ nước tuyệt đối. Nó tạo ra lớp màng bảo vệ hoàn hảo, ngăn chặn sự thoái hóa lớp lai theo thời gian.\"", name: "Dr. Elena Rodriguez", role: "Viện thẩm mỹ Madrid, Tây Ban Nha" },
                    { text: "\"Công nghệ hạt độn sinh học S-PRG thực sự thay đổi luật chơi trong việc ngăn ngừa sâu răng thứ phát dưới lớp phục hình, giúp viền luôn khỏe mạnh.\"", name: "Prof. Tanaka", role: "Đại học Y khoa Tokyo, Nhật Bản" },
                    { text: "\"Tỷ lệ lưu giữ của BeautiLink SA với các ca cùi ngắn rất tuyệt vời. Kết hợp cùng BBX tạo nên một màng bảo vệ viền khít sát đến hoàn hảo.\"", name: "Dr. Vũ Thanh Trà", role: "Chuyên gia RHM, Hải Phòng" },
                    { text: "\"Việc loại bỏ các chai lọ primer lỉnh kỉnh giúp tôi kiểm soát vật tư phòng khám tốt hơn hẳn. Ít sai sót lâm sàng hơn, hiệu quả kinh tế cao hơn rõ rệt.\"", name: "Dr. William Chen", role: "Quản lý chuỗi nha khoa, Singapore" },
                    { text: "\"Màng keo dán siêu mỏng giúp việc gắn các mặt dán veneer trở nên chính xác tuyệt đối mà không sợ cộm khớp hay làm đổi màu phục hình sứ.\"", name: "Dr. Maria Garcia", role: "Nha khoa Cao cấp, Brazil" }
                  ];
                  const dup = [...t2, ...t2];
                  return dup.map((item, idx) => (
                    <div key={`row-2-${idx}`} className="bg-white rounded-2xl p-5 lg:p-6 shadow-sm flex flex-col w-[280px] sm:w-[320px] lg:w-[350px] shrink-0 mx-2 sm:mx-3 border border-slate-100 whitespace-normal">
                      <p className="font-body text-[13.5px] sm:text-[14px] text-slate-600 italic mb-5 lg:mb-6 leading-relaxed flex-1">{item.text}</p>
                      <div className="border-t border-slate-100 pt-4 lg:pt-5 mt-auto">
                        <h4 className="font-heading font-bold text-sm sm:text-[15px] mb-1 text-slate-900">{item.name}</h4>
                        <p className="text-[11px] sm:text-xs text-slate-500">{item.role}</p>
                      </div>
                    </div>
                  ));
                })()}
              </div>
            </div>
          </div>

        </div>
        {/* Re-open w-[90%] container for the button */}
        <div className="w-[90%] lg:w-[80%] mx-auto relative z-10">
<div className="mt-12 md:mt-16 text-center relative z-10">
          <button 
            onClick={openOffer}
            className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#00ADEF] text-white px-3 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-[10.5px] min-[375px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-sky-500 hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap flex-nowrap"
          >
            <Gift className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0" />
            <span className="truncate">Gia nhập cộng đồng MiCD</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </button>
        </div>

        </div>
      </section>

      {/* SECTION 7: THE CORE OFFER */}
      <section className="py-20 lg:py-28 bg-slate-900 relative border-b border-slate-800">
        <div className="absolute inset-0 bg-grid-pattern-light opacity-100 pointer-events-none"></div>
        <div className="w-[90%] lg:w-[80%] mx-auto relative z-10">
          <div className="w-full">
        <div className="text-white text-center relative overflow-hidden">
          
          <div className="relative z-10 w-full flex flex-col items-center">
            
              <span className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-amber-500/20 border border-amber-500/30 mb-6 max-w-full overflow-hidden font-mono text-[9px] min-[375px]:text-[10px] sm:text-xs font-bold text-amber-400 tracking-tight sm:tracking-wide">
                Đặc quyền đồng hành không thể từ chối
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-white leading-[1.3] mb-10 tracking-tight">
                Gói giải pháp đồng bộ <br className="hidden sm:block" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200">"Giomer không ê buốt"</span> – An tâm lâm sàng
              </h2>
              
              <div className="bg-slate-800/80 rounded-2xl p-6 md:p-8 border border-slate-700 mb-8 w-full text-left flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-xl md:text-2xl text-amber-400 mb-4 border-b border-slate-700 pb-4">Combo dán - gắn đồng bộ</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                      <span className="text-slate-300 text-sm sm:text-base leading-relaxed">01 Lọ Keo dán Universal BeautiBond Xtreme (5ml)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                      <span className="text-slate-300 text-sm sm:text-base leading-relaxed">01 Ống Xi măng BeautiLink SA Handmix (15.6g) khổng lồ</span>
                    </li>
                  </ul>
                </div>
                
                <div className="w-full md:w-[40%] lg:w-[35%] flex justify-center items-center">
                  <img 
                    src="https://raw.githubusercontent.com/nienmarketing-netizen/shofu.sota-d.com/main/public/images/beautilink-bbx.webp" 
                    alt="Combo BeautiLink SA và BeautiBond Xtreme" 
                    className="w-full max-w-[196px] h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" 
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-2xl p-6 md:p-8 border border-amber-500/30 mb-10 w-full text-left flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-xl md:text-2xl text-white mb-4 border-b border-amber-500/30 pb-4">
                    Bộ quà tặng đặc quyền
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="mt-1"><Gift className="w-4 h-4 text-amber-400" /></div>
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed"><strong className="text-white">Quà tặng vật lý:</strong> 01 Lọ BBX Trial (2ml) để trải nghiệm thực tế ngay tại phòng khám trước khi khui lọ chính.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1"><Gift className="w-4 h-4 text-amber-400" /></div>
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed"><strong className="text-white">Tài liệu số chuyên sâu:</strong> Sổ tay E-Guide "Khoảng Xi Măng Ghép Lâm Sàng & Quy Trình Xử Lý Bề Mặt Sứ".</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1"><Gift className="w-4 h-4 text-amber-400" /></div>
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed"><strong className="text-white">Đặc quyền đào tạo:</strong> Vé tham gia Group Học Thuật Kín gỡ rối ca lâm sàng trực tiếp qua Zalo 1:1.</p>
                    </li>
                  </ul>
                </div>
                
                <div className="w-full md:w-[40%] lg:w-[35%] flex justify-center items-center">
                  <img 
                    src="https://raw.githubusercontent.com/nienmarketing-netizen/shofu.sota-d.com/main/public/images/qua-tang-giomer-khong-e-buot.webp" 
                    alt="Bộ quà tặng đặc quyền Giomer" 
                    className="w-full max-w-[235px] h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" 
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

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

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
                <button 
                  onClick={openOffer}
                  className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#00ADEF] text-white px-3 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-[10.5px] min-[375px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-white hover:text-slate-900 hover:shadow-xl hover:shadow-white/20 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap flex-nowrap"
                >
                  <span className="truncate">ĐĂNG KÝ COMBO "GIOMER KHÔNG Ê BUỐT"</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </button>
              </div>
              
              <p className="mt-6 text-sm text-slate-400 flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Hoàn tiền 100% nếu Bác sĩ không hài lòng.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* SECTION 8: FAQ */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="w-[90%] lg:w-[80%] mx-auto">
          <div className="max-w-3xl mx-auto">
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-slate-900 leading-[1.3] text-center mb-10 tracking-tight">Giải đáp <br className="block sm:hidden" /><span className="text-[#00ADEF]">hoài nghi lâm sàng</span></h2>
        
        <FaqItem 
          question="Xi măng trộn tay (Handmix) liệu có đều và đồng nhất bằng vòi Automix tự động không?"
          answer={
            <>
              <strong>Giải đáp lâm sàng: Hoàn toàn đều và đồng nhất.</strong> Tỷ lệ 1:1 của hai dải xi măng BeautiLink SA được thiết kế với màu sắc tương phản rõ rệt. Khi trộn tay trên giấy trong 10 giây, sự chuyển màu đồng nhất 100% sẽ là tín hiệu trực quan báo hiệu xi măng đã đạt độ hòa quyện hoàn hảo. Định dạng Handmix tuýp khổng lồ 15.6g (9ml) đáp ứng tới 120 ca gắn, giúp triệt tiêu hoàn toàn lượng xi măng lãng phí bị đông cứng trong đầu vòi Automix.
            </>
          }
        />
        <FaqItem 
          question="Keo dán BeautiBond Xtreme kỵ nước và HEMA-free thì có khó thâm nhập vào ống ngà ẩm không?"
          answer={
            <>
              <strong>Giải đáp lâm sàng: Hoàn toàn không.</strong> BBX ứng dụng hệ dung môi Acetone thẩm thấu nhanh, đóng vai trò là "chất dẫn" đưa các monomer kỵ nước thâm nhập sâu vào các ống ngà ẩm. Ngay sau khi thổi khô 3 giây để bay hơi dung môi, BBX tạo thành lớp màng dán dính kỵ nước mỏng 5µm bít kín ống ngà, ngăn chặn sự thâm nhập của dịch ngà và triệt tiêu hoàn toàn ê buốt.
            </>
          }
        />
        <FaqItem 
          question="Keo dán màng 5µm và xi măng 14µm thì có ảnh hưởng lực dán cơ học của phục hình gián tiếp không?"
          answer={
            <>
              <strong>Giải đáp lâm sàng: Ngược lại, đây là độ dày lý tưởng nhất cho phục hình gián tiếp.</strong> Tổng độ dày lớp lai kép 24µm (BBX 5µm + BeautiLink SA 14µm) giúp viền dán khít sát tuyệt đối, loại bỏ nguy cơ cộm khớp hay vi kẽ đường hoàn tất. Thử nghiệm độc lập của The Dental Advisor ghi nhận lực dán trượt trên Zirconia đạt mức ~50 MPa và giữ vững ổn định sau 5.000 chu kỳ sốc nhiệt.
            </>
          }
        />
        <FaqItem 
          question="Xi măng có trùng hợp (Self-cure) hoàn toàn dưới các mão Zirconia đục hoặc mão kim loại vùng tối không?"
          answer={
            <>
              <strong>Giải đáp lâm sàng: Hoàn toàn đảm bảo.</strong> BeautiLink SA là xi măng resin tự dán Dual-cure (Trùng hợp kép) sở hữu hệ thống chất xúc tác phản ứng cao. Trong các vùng tối ánh sáng đèn không thể xuyên qua (như dưới mão Zirconia dày, mão kim loại, chốt tủy), phản ứng tự trùng hợp hóa học (Self-cure) tự động kích hoạt hoàn toàn ở 3 phút trong nhiệt độ miệng (37°C), đảm bảo lực dán trượt và độ bền uốn (flexural strength) tối đa mà không phụ thuộc vào đèn quang trùng hợp.
            </>
          }
        />
        <FaqItem 
          question="Gắn mão Zirconia hay sứ Lithium Disilicate (E.max) với BeautiLink SA có bắt buộc phải bôi Silane hoặc Primer Zirconia rời không?"
          answer={
            <>
              <strong>Giải đáp lâm sàng: Không cần thiết đối với các phục hình có độ lưu giữ cơ học tiêu chuẩn.</strong>
              <br /><br />
              Trong thành phần BeautiLink SA đã tích hợp sẵn Phosphonic Acid Monomer (tự liên kết hóa trị trực tiếp với oxit kim loại trên Zirconia/Kim loại) và Silane Coupling Agent thế hệ mới (tự liên kết với sứ thủy tinh/Lithium Disilicate).
              <br /><br />
              Đối với các phục hình lưu kém (Veneer, Tabletop, Onlay mỏng), Bác sĩ chỉ cần quét thêm 1 lớp keo dán Universal BeautiBond Xtreme vào lòng phục hình và cùi răng để nhân đôi lực dán mà không cần mua thêm bất kỳ chai Silane hay Primer Zirconia rời nào khác.
            </>
          }
        />
        <FaqItem 
          question="Xi măng Dual-cure có bị đổi màu hay ố vàng đường viền dán sau một thời gian sử dụng không?"
          answer={
            <>
              <strong>Giải đáp lâm sàng: Đảm bảo độ ổn định màu sắc vượt trội.</strong> BeautiLink SA được kỹ sư vật liệu Shofu tối ưu hóa hệ thống xúc tác trùng hợp, giúp giữ màu sắc ổn định (Stable shades) trọn đời phục hình. Sản phẩm cung cấp 3 tông màu lâm sàng thực tế (Clear, Ivory, Opaque) với khả năng che màu ngà chẻ/cùi kim loại tối màu hoàn hảo (đặc biệt là màu Opaque) mà không bị viền đen hay ố vàng theo thời gian.
            </>
          }
        />
        <FaqItem 
          question="Nếu lỡ tay chiếu đèn quá 1–2 giây khi Tack-cure, xi măng dư có bị đông cứng ngắc gây kẹt kẽ răng không?"
          answer={
            <>
              <strong>Giải đáp lâm sàng: Bác sĩ hoàn toàn có thể yên tâm điều khiển.</strong> Hệ xúc tác của BeautiLink SA được thiết kế để tạo ra khoảng cửa sổ thao tác linh hoạt. Chiếu đèn chớp 1–2 giây sẽ đưa xi măng dư trào ra về trạng thái gel dẻo như cao su. Bác sĩ có 2 phút thời gian làm việc (Working Time) thong thả từ lúc trộn, và ngay cả khi lỡ chiếu lâu hơn 1-2 giây, xi măng vẫn giữ độ đàn hồi dẻo dai đủ để thám trâm lột sạch nguyên khối mà không dính chặt vào nướu hay làm trầy xước viền sứ.
            </>
          }
        />
        <FaqItem 
          question="Sau khi gắn phục hình trên cùi răng sống, bệnh nhân có bị nhạy cảm ngà hay ê buốt hậu phẫu không?"
          answer={
            <>
              <strong>Giải đáp lâm sàng: Tỷ lệ ê buốt hậu phẫu tiệm cận mức 0%.</strong> Sự kết hợp giữa màng keo dán kỵ nước BBX không chứa HEMA bít kín ống ngà và hạt độn sinh học S-PRG trong BeautiLink SA liên tục giải phóng 6 ion đệm (đặc biệt là Fluoride & Strontium). Các ion này hỗ trợ tái khoáng hóa ngà răng và bịt kín mọi kẽ hở vi thể, mang lại sự dễ chịu tuyệt đối cho bệnh nhân ngay sau khi hết thuốc tê.
            </>
          }
        />
        <FaqItem 
          question="Bộ đôi sản phẩm có bắt buộc phải bảo quản trong tủ lạnh không? Hạn sử dụng bao lâu trong điều kiện khí hậu Việt Nam?"
          answer={
            <>
              <strong>Giải đáp lâm sàng: Không bắt buộc để tủ lạnh nếu nhiệt độ phòng dưới 25°C.</strong>
              <br /><br />
              BeautiLink SA có hạn sử dụng 24 tháng trong túi foil bạc niêm phong nguyên bản (dùng trong vòng 6 tháng sau khi mở túi).
              <br /><br />
              Sản phẩm ứng dụng công nghệ xúc tác "ngủ đông" (steric hindrance) kháng nhiệt ẩm vượt trội. Ở các vùng khí hậu nhiệt đới nóng ẩm có nhiệt độ phòng thường xuyên {'>'} 25°C, Bác sĩ chỉ cần cất tuýp xi măng vào ngăn mát tủ lạnh và lấy ra trước khi sử dụng để tuýp về nhiệt độ phòng là có thể thao tác hoàn hảo.
            </>
          }
        />
          
          <div className="mt-12 md:mt-16 text-center relative z-10">
            <button 
              onClick={openOffer}
              className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#00ADEF] text-white px-3 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-[10.5px] min-[375px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-sky-500 hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap flex-nowrap"
            >
              <Gift className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0" />
              <span className="truncate">Bác sĩ còn câu hỏi? Nhận tư vấn ngay</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </button>
          </div>

          </div>
        </div>
      </section>

    </div>
  );
}

import { CtaButton } from "../../ui/CtaButton";
import { CampaignModal } from '../../CampaignModal';
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import defaultData from '../../../data/indirect-restoration.json';
import { 
  ShieldCheck, Zap, Coins, AlertTriangle, HeartPulse, Banknote, TrendingUp, 
  Droplet, Droplets, Microscope, ArrowRight, Gift, ChevronDown, CheckCircle2,
  Clock, Shield, BarChart3, TestTube, Quote, Image as ImageIcon,
  Unlink, Layers, Umbrella, Sparkles,
  AlertCircle, ShieldAlert, DollarSign, Flame, Ban, XCircle, Activity, FileWarning
} from 'lucide-react';

const FaqItem: React.FC<{ question: string; answer: React.ReactNode }> = ({ question, answer }) => {
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

const renderIndirectFeatureIcon = (iconName?: string, iconSvg?: string, colorClass = "text-[#00ADEF]") => {
  if (iconSvg) {
    if (iconSvg.startsWith('<svg')) {
      return (
        <span
          className="w-6 h-6 inline-flex items-center justify-center [&>svg]:w-full [&>svg]:h-full"
          dangerouslySetInnerHTML={{ __html: iconSvg }}
        />
      );
    }
    return <img src={iconSvg} alt="Feature icon" className="w-6 h-6 object-contain" />;
  }

  const cls = `w-6 h-6 ${colorClass}`;
  switch (iconName) {
    case 'Microscope': return <Microscope className={cls} />;
    case 'Umbrella': return <Umbrella className={cls} />;
    case 'ShieldCheck': return <ShieldCheck className={cls} />;
    case 'Clock': return <Clock className={cls} />;
    case 'Shield': return <Shield className={cls} />;
    case 'Sparkles': return <Sparkles className={cls} />;
    case 'Zap': return <Zap className={cls} />;
    case 'Layers': return <Layers className={cls} />;
    case 'Droplet': return <Droplet className={cls} />;
    default: return <CheckCircle2 className={cls} />;
  }
};

const renderIndirectConsequenceIcon = (
  iconName?: string,
  iconSvg?: string,
  iconColor?: string,
  className = "w-6 h-6 sm:w-8 sm:h-8 shrink-0 mt-1"
) => {
  const isHexOrRgb = iconColor && (iconColor.startsWith('#') || iconColor.startsWith('rgb'));
  const colorClass = (!isHexOrRgb && iconColor) ? iconColor : '';
  const colorStyle = isHexOrRgb ? { color: iconColor } : undefined;

  if (iconSvg) {
    if (iconSvg.startsWith('<svg')) {
      return (
        <span
          className={`inline-flex items-center justify-center [&>svg]:w-full [&>svg]:h-full ${className} ${colorClass}`}
          style={colorStyle}
          dangerouslySetInnerHTML={{ __html: iconSvg }}
        />
      );
    }
    return <img src={iconSvg} alt="Consequence icon" className={`${className} object-contain`} style={colorStyle} />;
  }

  const props = {
    className: `${className} ${colorClass}`,
    style: colorStyle
  };

  switch (iconName) {
    case 'Coins': return <Coins {...props} />;
    case 'TrendingUp': return <TrendingUp {...props} />;
    case 'Clock': return <Clock {...props} />;
    case 'AlertTriangle': return <AlertTriangle {...props} />;
    case 'AlertCircle': return <AlertCircle {...props} />;
    case 'ShieldAlert': return <ShieldAlert {...props} />;
    case 'DollarSign': return <DollarSign {...props} />;
    case 'Flame': return <Flame {...props} />;
    case 'Zap': return <Zap {...props} />;
    case 'Ban': return <Ban {...props} />;
    case 'XCircle': return <XCircle {...props} />;
    case 'Activity': return <Activity {...props} />;
    case 'FileWarning': return <FileWarning {...props} />;
    default: return <Coins {...props} />;
  }
};

export function IndirectRestoration({ overrideContent }: { overrideContent?: any } = {}) {
  const [content, setContent] = useState(overrideContent || defaultData);
  const [isCampaignModalOpen, setIsCampaignModalOpen] = useState(false);
  const [campaignModalTitle, setCampaignModalTitle] = useState('');
  const [modalConfig, setModalConfig] = useState<{
    title: string;
    formTitle?: string;
    formDescription?: string;
    extraContentHtml?: string;
    redirectThanks?: boolean;
    targetUrl?: string;
    resourceTitle?: string;
    ctaId?: string;
  }>({ title: '' });

  useEffect(() => {
    if (overrideContent) {
      setContent(overrideContent);
      return;
    }
    const loadDynamicContent = async () => {
      let loaded = false;
      // 1. Kiểm tra localStorage (phục hồi tức thì dữ liệu vừa chỉnh sửa)
      try {
        const local = localStorage.getItem('shofu_indirect_restoration_data');
        if (local) {
          const parsed = JSON.parse(local);
          if (parsed && parsed.hero && typeof parsed.hero.headline === 'string' && parsed.hero.headline.trim()) {
            setContent(parsed);
            loaded = true;
          } else {
            localStorage.removeItem('shofu_indirect_restoration_data');
          }
        }
      } catch (e) {}

      // 2. Tải qua API CMS
      try {
        const res = await fetch(`/api/cms/load?page=indirect-restoration&_t=${Date.now()}`);
        if (res.ok) {
          const json = await res.json();
          if (json.success && json.data) {
            setContent(json.data);
            loaded = true;
          }
        }
      } catch (e) {}

      // 3. Fallback đọc từ GitHub Raw
      if (!loaded) {
        try {
          const ghRes = await fetch(
            `https://raw.githubusercontent.com/nienmarketing-netizen/shofu.sota-d.com/main/src/data/indirect-restoration.json?_t=${Date.now()}`,
            { cache: 'no-store' }
          );
          if (ghRes.ok) {
            const data = await ghRes.json();
            if (data && data.hero) {
              setContent(data);
            }
          }
        } catch (ghErr) {}
      }
    };

    loadDynamicContent();
  }, []);

  const openCampaignModal = (config: string | {
    title: string;
    formTitle?: string;
    formDescription?: string;
    extraContentHtml?: string;
    redirectThanks?: boolean;
    targetUrl?: string;
    resourceTitle?: string;
    ctaId?: string;
  }) => {
    if (typeof config === 'string') {
      setCampaignModalTitle(config);
      setModalConfig({ title: config });
    } else {
      setCampaignModalTitle(config.title);
      setModalConfig(config);
    }
    setIsCampaignModalOpen(true);
  };

  const openOffer = () => {
    window.dispatchEvent(new CustomEvent("open-offer-modal", { detail: { offerId: 1 } }));
  };

  return (
    <div className="w-full flex flex-col">
      {/* SECTION 1: HERO SECTION */}
      <section className="pb-16 pt-[120px] lg:pb-24 lg:pt-[140px] bg-slate-50 bg-grid-pattern relative overflow-hidden border-b border-slate-200">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00ADEF]/15 via-[#00ADEF]/5 to-transparent rounded-full transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        
        <div className="w-[90%] lg:w-[85%] xl:w-[80%] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 items-center relative z-10">
          <div className="w-full lg:w-[65%] xl:w-[60%]">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#00ADEF]/10 border border-[#00ADEF]/20 mb-6 max-w-full overflow-hidden relative">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#00ADEF] animate-pulse shrink-0 relative z-10 shadow-[0_0_4px_rgba(0,173,239,0.8)]"></div>
              <div className="flex overflow-hidden relative w-full [mask-image:linear-gradient(to_right,transparent,black_10px,black_90%,transparent)] sm:[mask-image:none]">
                <div className="font-mono text-[10.5px] min-[375px]:text-[11.5px] sm:text-xs font-bold text-[#00ADEF] tracking-tight sm:tracking-wide whitespace-nowrap flex animate-marquee sm:!animate-none sm:!transform-none w-max">
                  <span className="pr-8 sm:pr-0">{content.hero?.badge || "Xu thế nha khoa can thiệp tối thiểu & Vật liệu sinh học (Bioactive)"}</span>
                  <span className="pr-8 sm:hidden">{content.hero?.badge || "Xu thế nha khoa can thiệp tối thiểu & Vật liệu sinh học (Bioactive)"}</span>
                </div>
              </div>
            </div>
            <h1 
              dangerouslySetInnerHTML={{ __html: content.hero?.headline || '' }}
              className="font-heading font-extrabold text-2xl min-[375px]:text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl text-slate-900 leading-[1.3] mb-6 tracking-tight lg:pr-4 xl:pr-0 lg:-mr-8 xl:-mr-12"
            />
            {/* MOBILE ONLY IMAGE */}
            <div className="w-full relative flex justify-center lg:hidden mb-10 mt-6">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-gradient-to-tr from-[#00ADEF]/30 to-[#C43838]/30 blur-[60px] rounded-full z-0 animate-pulse"></div>
              <img 
                referrerPolicy="no-referrer"
                src={content.hero?.image || "/image/beautilink-bbx-new.webp"} 
                alt="Bộ đôi BBX và BeautiLink SA" 
                className="w-[80%] max-w-[320px] h-auto object-contain relative z-10 hover:scale-105 transition-transform duration-700 drop-shadow-2xl" 
              />
            </div>
            <p 
              dangerouslySetInnerHTML={{ __html: content.hero?.body || '' }}
              className="font-body text-base sm:text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            />
            
            <ul className="space-y-3 mb-10">
              {(content.hero?.usps || []).map((usp, idx) => (
                <li key={usp.id || idx} className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl border border-slate-200/80 bg-white/50 backdrop-blur-sm shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
                  <div className={`w-8 h-8 rounded-full ${idx === 0 ? 'bg-red-50' : idx === 1 ? 'bg-blue-50' : 'bg-amber-50'} flex items-center justify-center shrink-0 mt-0.5`}>
                    {idx === 0 ? <ShieldCheck className="w-4 h-4 text-[#C43838]" /> : idx === 1 ? <Zap className="w-4 h-4 text-[#00ADEF]" /> : <Coins className="w-4 h-4 text-amber-500" />}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-[15px] mb-1 leading-snug">{usp.title}</h4>
                    <p className="text-slate-600 text-[13px] sm:text-sm leading-relaxed">{usp.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <button 
              onClick={() => openCampaignModal({
                title: content.hero?.ctaText || "Nhận mẫu thử BBX 2ml & Ưu đãi",
                formTitle: content.hero?.ctaFormTitle,
                formDescription: content.hero?.ctaFormDesc,
                extraContentHtml: content.hero?.ctaFormExtraHtml,
                redirectThanks: content.hero?.ctaRedirectThanks,
                targetUrl: content.hero?.ctaTargetUrl,
                resourceTitle: content.hero?.ctaResourceTitle,
                ctaId: "hero_cta"
              })}
              className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#00ADEF] text-white px-3 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-[10.5px] min-[375px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-sky-500 hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap flex-nowrap"
            >
              <Gift className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0" />
              <span className="truncate">{content.hero?.ctaText || "NHẬN MẪU THỬ BBX 2ml & ƯU ĐÃI"}</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </button>
            <p className="font-body text-xs sm:text-sm font-medium opacity-90 text-slate-500 mt-4 text-center sm:text-left">{content.hero?.footerNote || "Trọn gói giải pháp bảo chứng bởi JADA & Dental Advisor"}</p>
          </div>
          
          <div className="hidden lg:flex w-full lg:w-[35%] xl:w-[40%] relative justify-center">
            {/* Lớp Hào quang sinh học tỏa sáng */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00ADEF]/20 to-[#C43838]/20 rounded-full z-0 animate-pulse"></div>
            
            {/* Bức ảnh WebP tách nền duy nhất */}
            <img 
              referrerPolicy="no-referrer"
              src={content.hero?.image || "/image/beautilink-bbx-new.webp"} 
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
          <h2 
            dangerouslySetInnerHTML={{ __html: content.painPoints?.headline || '' }}
            className="font-heading font-extrabold text-xl min-[375px]:text-2xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl text-white leading-[1.3] mb-6 tracking-tight"
          />
          <div className="w-24 h-1 bg-red-500 mx-auto"></div>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {(content.painPoints?.items || []).map((item, idx) => (
            <div key={item.id || idx} className="bg-slate-800/50 backdrop-blur-md border border-red-500/30 rounded-3xl px-1 sm:px-3 py-6 sm:p-8 hover:border-red-500/60 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-11 h-11 md:w-16 md:h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-6 border border-red-500/30">
                {idx === 0 ? <Unlink className="w-6 h-6 md:w-8 md:h-8 text-red-400" /> : idx === 1 ? <Layers className="w-6 h-6 md:w-8 md:h-8 text-red-400" /> : <Banknote className="w-6 h-6 md:w-8 md:h-8 text-red-400" />}
              </div>
              <h3 className="font-heading font-bold text-[14.5px] min-[375px]:text-[16px] min-[400px]:text-[17px] sm:text-xl text-white mb-4 whitespace-nowrap sm:whitespace-normal tracking-tight sm:tracking-normal">{item.title}</h3>
              <p 
                dangerouslySetInnerHTML={{ __html: item.description }}
                className="text-slate-400 text-sm leading-relaxed"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center relative z-10">
          <button 
            onClick={() => openCampaignModal({
              title: content.painPoints?.ctaText || "TƯ VẤN GIẢI PHÁP TRIỆT TIÊU RỦI RO",
              formTitle: content.painPoints?.ctaFormTitle,
              formDescription: content.painPoints?.ctaFormDesc,
              extraContentHtml: content.painPoints?.ctaFormExtraHtml,
              redirectThanks: content.painPoints?.ctaRedirectThanks,
              targetUrl: content.painPoints?.ctaTargetUrl,
              resourceTitle: content.painPoints?.ctaResourceTitle,
              ctaId: "pain_points_cta"
            })}
            className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#00ADEF] text-white px-3 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-[10.5px] min-[375px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-sky-500 hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap flex-nowrap"
          >
            <Gift className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0" />
            <span className="truncate">{content.painPoints?.ctaText || "TƯ VẤN GIẢI PHÁP TRIỆT TIÊU RỦI RO"}</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </button>
        </div>

        </div>
      </section>

      {/* SECTION 3: THE GOLD STANDARD */}
      <section className="py-20 lg:py-28 bg-slate-50 bg-grid-pattern relative overflow-hidden border-b border-slate-200">
        <div className="w-[90%] lg:w-[80%] mx-auto space-y-12 relative z-10">
        <div className="text-center w-full max-w-6xl mx-auto">
          <h2 
            className="font-heading font-extrabold text-2xl min-[375px]:text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3rem] text-slate-900 leading-[1.3] mb-4 tracking-tight"
            dangerouslySetInnerHTML={{ 
              __html: content.goldStandard?.headline || '<span class="text-amber-500">Tiêu chuẩn vàng</span> mới:<br /><span class="inline-block lg:whitespace-nowrap">Bộ đôi liên kết sinh học <span class="text-[#00ADEF]">không thể phá hủy</span></span>' 
            }}
          />
          {content.goldStandard?.description && (
            <p className="font-body text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
              {content.goldStandard.description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product 1: BeautiBond Xtreme */}
          <div className="bg-white bg-gradient-to-br from-[#00ADEF]/5 to-[#007AA8]/10 rounded-[2rem] px-5 py-8 sm:p-8 md:p-12 border border-[#00ADEF]/20 relative overflow-hidden flex flex-col h-full justify-between">
            <div className="relative z-10">
              <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">
                {content.goldStandard?.product1?.title || 'Keo dán BeautiBond Xtreme'}
              </h3>
              <p className="text-[#007AA8] font-bold text-sm uppercase tracking-wider mb-6">
                {content.goldStandard?.product1?.subtitle || 'Universal Thế hệ thứ 8'}
              </p>
              
              {/* Product Image Area */}
              <div className="mb-8 relative z-10 flex justify-center items-center">
                <div className="w-full rounded-2xl border border-[#00ADEF]/10 bg-white shadow-sm overflow-hidden relative group">
                  <img 
                    referrerPolicy="no-referrer" 
                    src={content.goldStandard?.product1?.image || "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/sota-d@03c66c4af6e28e2a69254e4d674c5a45ab53e988/beautibond-xtreme.png"} 
                    alt={content.goldStandard?.product1?.title || "BeautiBond Xtreme"} 
                    className="w-full h-auto object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700" 
                    loading="lazy" 
                  />
                </div>
              </div>

              <ul className="space-y-6">
                {(content.goldStandard?.product1?.features || []).map((feat: any, idx: number) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                      {renderIndirectFeatureIcon(feat.iconName, feat.iconSvg, "text-[#00ADEF]")}
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-sm sm:text-[15px] mb-1 leading-snug text-slate-900">
                        {feat.title}
                      </h4>
                      <p className="text-slate-600 text-[13px] sm:text-sm leading-relaxed font-body">
                        {feat.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Product 2: BeautiLink SA */}
          <div className="bg-white bg-gradient-to-br from-[#C43838]/5 to-[#8C2828]/10 rounded-[2rem] px-5 py-8 sm:p-8 md:p-12 border border-[#C43838]/20 relative overflow-hidden flex flex-col h-full justify-between">
            <div className="relative z-10">
              <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">
                {content.goldStandard?.product2?.title || 'Xi măng BeautiLink SA'}
              </h3>
              <p className="text-[#C43838] font-bold text-sm uppercase tracking-wider mb-6">
                {content.goldStandard?.product2?.subtitle || 'Tự dán lưỡng trùng hợp tích hợp hạt độn Giomer S-PRG'}
              </p>
              
              {/* Product Image Area */}
              <div className="mb-8 relative z-10 flex justify-center items-center">
                <div className="w-full rounded-2xl border border-[#C43838]/10 bg-white shadow-sm overflow-hidden relative group">
                  <img 
                    referrerPolicy="no-referrer" 
                    src={content.goldStandard?.product2?.image || "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/sota-d@03c66c4af6e28e2a69254e4d674c5a45ab53e988/BeautilinkSA.png"} 
                    alt={content.goldStandard?.product2?.title || "BeautiLink SA"} 
                    className="w-full h-auto object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700" 
                    loading="lazy" 
                  />
                </div>
              </div>

              <ul className="space-y-6">
                {(content.goldStandard?.product2?.features || []).map((feat: any, idx: number) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                      {renderIndirectFeatureIcon(feat.iconName, feat.iconSvg, "text-[#C43838]")}
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-sm sm:text-[15px] mb-1 leading-snug text-slate-900">
                        {feat.title}
                      </h4>
                      <p className="text-slate-600 text-[13px] sm:text-sm leading-relaxed font-body">
                        {feat.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* The 24um Diagram */}
        <div className="rounded-3xl py-8 max-w-6xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Headline */}
            <div className="order-1 lg:col-start-1 lg:row-start-1 lg:self-end">
              <h4 
                className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 leading-tight"
                dangerouslySetInnerHTML={{ 
                  __html: content.goldStandard?.diagram?.title || 'Cấu trúc liên kết đa tầng <span class="text-[#00ADEF]">siêu mỏng</span> khít sát <span class="text-amber-500">tuyệt đối</span>' 
                }}
              />
            </div>

            {/* Diagram Image */}
            <div className="order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 flex flex-col items-center w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto">
              <img 
                src={content.goldStandard?.diagram?.image || "/images/Shofu-double-hybrid-link-system.webp"} 
                alt="Sơ đồ cấu trúc liên kết đa tầng siêu mỏng 24µm" 
                className="w-full h-auto object-contain drop-shadow-sm rounded-xl"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* USPs and Text */}
            <div className="order-3 lg:col-start-1 lg:row-start-2 lg:self-start space-y-6">
              <p 
                className="text-slate-600 text-base leading-relaxed"
                dangerouslySetInnerHTML={{ 
                  __html: content.goldStandard?.diagram?.description || 'Sự kết hợp hoàn hảo giữa <strong class="text-slate-900">độ dày màng siêu mỏng (chỉ 5µm)</strong> của BeautiBond Xtreme và lớp <strong class="text-slate-900">xi măng siêu mỏng 14µm</strong> của BeautiLink SA tạo nên một <strong class="text-[#00ADEF]">khoảng ghép vô hình chỉ 24µm</strong>, thiết lập <strong class="text-amber-600">tiêu chuẩn mới</strong> trong phục hình gián tiếp.' 
                }}
              />
              <ul className="space-y-4 pt-2">
                {(content.goldStandard?.diagram?.points || [
                  '<strong>Thẩm mỹ hoàn hảo:</strong> Không đổi màu phục hình theo thời gian nhờ công nghệ HEMA-Free kỵ nước.',
                  '<strong>Khớp cắn chuẩn xác:</strong> Triệt tiêu hoàn toàn rủi ro cộm cấn, kênh phục hình sau khi gắn.',
                  '<strong>Bảo vệ sinh học:</strong> Hạt độn S-PRG ngăn chặn vi khuẩn xâm nhập vi kẽ ống ngà, bảo vệ cùi răng sau khi gắn.'
                ]).map((pt: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-4 p-5 rounded-2xl border border-slate-200/80 bg-white/60 backdrop-blur-sm shadow-sm hover:bg-white/90 transition-colors">
                    <CheckCircle2 className="w-6 h-6 text-[#00ADEF] shrink-0" />
                    <p 
                      className="text-sm text-slate-700 leading-relaxed font-body"
                      dangerouslySetInnerHTML={{ __html: pt }}
                    />
                  </li>
                ))}
              </ul>
            </div>
            
          </div>
        </div>

        <div className="mt-4 md:mt-12 text-center">
          <button 
            onClick={() => openCampaignModal({
              title: content.goldStandard?.ctaText || "Yêu cầu tư vấn",
              formTitle: content.goldStandard?.ctaFormTitle,
              formDescription: content.goldStandard?.ctaFormDesc,
              extraContentHtml: content.goldStandard?.ctaFormExtraHtml,
              redirectThanks: content.goldStandard?.ctaRedirectThanks,
              targetUrl: content.goldStandard?.ctaTargetUrl,
              resourceTitle: content.goldStandard?.ctaResourceTitle,
              ctaId: "gold_standard_cta"
            })}
            className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#00ADEF] text-white px-3 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-[10.5px] min-[375px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-sky-500 hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap flex-nowrap"
          >
            <Gift className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0" />
            <span className="truncate">{content.goldStandard?.ctaText || "Yêu cầu tư vấn"}</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </button>
        </div>

        </div>
      </section>

      {/* SECTION 4: DEEP DIVE INTO USPS */}
      <section className="py-20 lg:py-28 bg-slate-200 bg-grid-pattern relative overflow-hidden border-b border-slate-300">
        <div className="w-[90%] lg:w-[80%] mx-auto space-y-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 
            className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-slate-900 leading-[1.3] mb-4 tracking-tight"
            dangerouslySetInnerHTML={{ __html: content.evidence?.headline || 'Sức mạnh <br class="sm:hidden" /><span class="text-[#00ADEF]">thuyết phục</span> <span class="text-amber-500">tuyệt đối</span>' }}
          />
          {content.evidence?.description && (
            <p 
              className="font-body text-base sm:text-lg text-slate-600 max-w-3xl mx-auto"
              dangerouslySetInnerHTML={{ __html: content.evidence.description }}
            />
          )}
        </div>
        
        {/* USP 1 */}
        <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl border border-white p-8 md:p-12 shadow-sm flex flex-col md:flex-row gap-8 items-center hover:border-slate-200 hover:shadow-md transition-all">
          <div className="w-full md:w-1/2 space-y-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 text-white mb-2">
              <span className="font-heading font-black text-xl">1</span>
            </div>
            <h3 className="font-heading font-bold text-xl text-slate-900">
              {content.evidence?.usp1?.title || 'Lực dán siêu cường không suy giảm qua 5,000 chu kỳ sốc nhiệt khắt khe'}
            </h3>
            
            {/* Mobile Image */}
            <div className="w-full md:hidden my-6">
              <img 
                src={content.evidence?.usp1?.image || "/images/share-bond-strength-on-zirconia%20copy.webp"} 
                alt={content.evidence?.usp1?.title || "Lực dán trượt (MPa)"} 
                className="w-full h-auto object-contain rounded-2xl drop-shadow-sm border border-slate-200"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            <p 
              className="font-body text-sm md:text-base text-slate-600 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: content.evidence?.usp1?.description || '' }}
            />
          </div>
          
          {/* Desktop Image */}
          <div className="w-full md:w-1/2 hidden md:block">
            <img 
              src={content.evidence?.usp1?.image || "/images/share-bond-strength-on-zirconia%20copy.webp"} 
              alt={content.evidence?.usp1?.title || "Lực dán trượt (MPa)"} 
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
            <h3 className="font-heading font-bold text-xl text-slate-900 mb-4">
              {content.evidence?.usp2?.title || 'Kiểm soát dọn xi măng dư "One-Sweep"'}
            </h3>
            
            {content.evidence?.usp2?.youtubeId && (
              <YoutubeAutoplay videoId={content.evidence.usp2.youtubeId} />
            )}

            <p 
              className="font-body text-sm text-slate-600 leading-relaxed mb-6"
              dangerouslySetInnerHTML={{ __html: content.evidence?.usp2?.description || '' }}
            />
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

            {content.evidence?.usp2?.feedbackImage && (
              <div className="mt-3 pt-3 border-t border-slate-100 flex justify-center -mx-4 sm:-mx-6">
                <img 
                  src={content.evidence.usp2.feedbackImage} 
                  alt="Đánh giá từ Bác sĩ về BeautiLink SA" 
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            )}
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl border border-white p-8 md:p-10 shadow-sm hover:border-slate-200 hover:shadow-md transition-all">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 text-white mb-6">
              <span className="font-heading font-black text-xl">3</span>
            </div>
            <h3 className="font-heading font-bold text-xl text-slate-900 mb-4">
              {content.evidence?.usp3?.title || 'Lá chắn Sinh học S-PRG'}
            </h3>
            <p 
              className="text-slate-600 text-sm leading-relaxed mb-6"
              dangerouslySetInnerHTML={{ __html: content.evidence?.usp3?.description || '' }}
            />
            <div className="space-y-3">
              <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <Shield className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="font-bold text-slate-800 text-sm">Bảo vệ mô ngà sống & Đường hoàn tất, duy trì độ ổn định sinh học dài hạn.</span>
              </div>
              <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <Zap className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-slate-700 text-sm"><strong className="text-slate-900 font-bold">"Trạm sạc" Ion sinh học 24/7</strong> – Chủ động tái khoáng và nuôi dưỡng răng thật.</span>
              </div>
              <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <ShieldCheck className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-slate-700 text-sm"><strong className="text-slate-900 font-bold">Ức chế hình thành Biofilm</strong> – Nướu săn chắc, kiểm soát mảng bám, hạn chế viêm nướu viền.</span>
              </div>
              <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <TestTube className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <span className="text-slate-700 text-sm"><strong className="text-slate-900 font-bold">Tự động trung hòa Axit</strong> – Trung hòa acid, đệm pH tại vùng tiếp xúc.</span>
              </div>
            </div>

            {/* S-PRG Image */}
            {content.evidence?.usp3?.image && (
              <div className="mt-3 flex justify-center -mx-4 sm:-mx-6">
                <img 
                  src={content.evidence.usp3.image} 
                  alt={content.evidence?.usp3?.title || "S-PRG Triệt tiêu ê buốt"} 
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            )}
          </div>
        </div>

        {/* USP 4 */}
        <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8 md:p-10 shadow-sm border border-white hover:border-slate-200 hover:shadow-md transition-all overflow-hidden relative">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 text-white mb-6">
              <span className="font-heading font-black text-xl">4</span>
            </div>
            <h3 className="font-heading font-bold text-xl text-slate-900 mb-4">
              {content.evidence?.usp4?.title || 'Tối ưu ROI – "Tuyên chiến" với lãng phí'}
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Block 1: Problem */}
            <div className="flex flex-col justify-between bg-white/40 border border-white/60 rounded-2xl p-6 lg:p-8 shadow-sm">
              <div>
                <div className="inline-flex items-center gap-2 mb-4 bg-red-500/10 border border-red-500/20 px-3 py-2 rounded-xl">
                  <AlertTriangle className="w-5 h-5 text-red-600 shrink-0" />
                  <h4 className="font-heading font-bold text-sm md:text-base text-red-800">
                    {content.evidence?.usp4?.problemTitle || 'Sự thật "đắt đỏ" của vòi trộn Automix'}
                  </h4>
                </div>
                <p 
                  className="font-body text-sm text-slate-600 leading-relaxed mb-6"
                  dangerouslySetInnerHTML={{ __html: content.evidence?.usp4?.problemDescription || '' }}
                />
              </div>
              
              {content.evidence?.usp4?.problemImage && (
                <div className="flex justify-center mt-auto">
                  <img 
                    src={content.evidence.usp4.problemImage} 
                    alt="Lãng phí vật liệu khi dùng vòi trộn Automix" 
                    className="w-full h-auto object-contain"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}
            </div>

            {/* Block 2: Solution Comparison */}
            <div className="flex flex-col bg-white/40 border border-white/60 rounded-2xl p-6 lg:p-8 shadow-sm">
              <div>
                <div className="inline-flex items-center gap-2 mb-4 bg-[#00ADEF]/10 border border-[#00ADEF]/20 px-3 py-2 rounded-xl">
                  <TrendingUp className="w-5 h-5 text-[#00ADEF] shrink-0" />
                  <h4 className="font-heading font-bold text-sm md:text-base text-sky-800">
                    {content.evidence?.usp4?.solutionTitle || 'Tối ưu lợi nhuận với BeautiLink SA'}
                  </h4>
                </div>
                <p 
                  className="font-body text-sm text-slate-600 leading-relaxed mb-6"
                  dangerouslySetInnerHTML={{ __html: content.evidence?.usp4?.solutionDescription || '' }}
                />
              </div>

              {content.evidence?.usp4?.solutionImage && (
                <div className="flex justify-center mt-auto">
                  <img 
                    src={content.evidence.usp4.solutionImage} 
                    alt="Tiết kiệm chi phí với BeautiLink SA" 
                    className="w-full h-auto object-contain"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="mt-12 md:mt-16 text-center relative z-10">
          <button 
            onClick={() => openCampaignModal({
              title: content.evidence?.ctaText || "Tư vấn giải pháp tối ưu chi phí",
              formTitle: content.evidence?.ctaFormTitle,
              formDescription: content.evidence?.ctaFormDesc,
              extraContentHtml: content.evidence?.ctaFormExtraHtml,
              redirectThanks: content.evidence?.ctaRedirectThanks,
              targetUrl: content.evidence?.ctaTargetUrl,
              resourceTitle: content.evidence?.ctaResourceTitle,
              ctaId: "evidence_cta"
            })}
            className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#00ADEF] text-white px-3 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-[10.5px] min-[375px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-sky-500 hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap flex-nowrap"
          >
            <Gift className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0" />
            <span className="truncate">{content.evidence?.ctaText || "Tư vấn giải pháp tối ưu chi phí"}</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </button>
        </div>

        </div>
      </section>

      {/* SECTION 5: CLINICAL WORKFLOW REWRITE */}
      <section className="py-20 lg:py-28 bg-slate-900 relative border-b border-slate-800 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern-light opacity-100 pointer-events-none"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00ADEF]/10 to-transparent rounded-full pointer-events-none"></div>
        <div className="w-[90%] lg:w-[80%] mx-auto relative z-10">
          
          <div className="max-w-5xl mx-auto mb-16 lg:mb-24 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="text-center lg:text-left flex-1">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-bold text-[10px] min-[375px]:text-[11px] sm:text-xs md:text-sm tracking-wide mb-6 whitespace-nowrap">
                <span>{content.workflow?.badge || 'Triệt tiêu sai số lâm sàng & tài chính'}</span>
              </div>
              <h2 
                className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-white leading-[1.3] mb-0 tracking-tight"
                dangerouslySetInnerHTML={{ 
                  __html: content.workflow?.headline || 'Đập tan "ma trận" <br /><span class="text-transparent bg-clip-text bg-gradient-to-r from-[#00ADEF] to-blue-400">chai lọ phục hình</span>' 
                }}
              />
            </div>
            
            <div className="flex justify-center flex-1 w-full lg:w-auto mt-2 lg:mt-0">
              <div className="relative group inline-block">
                <img 
                  referrerPolicy="no-referrer"
                  src={content.workflow?.image || "/images/ma-tran-chai-lo-phuc-hinh.webp"} 
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
              <h3 
                className="font-heading font-bold text-xl text-white mb-4"
                dangerouslySetInnerHTML={{ 
                  __html: content.workflow?.interfacesTitle || 'Nguồn gốc "ma trận": <br class="block sm:hidden" /><span class="text-[#00ADEF]">Sự xung đột hóa học</span>' 
                }}
              />
              <p 
                className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto"
                dangerouslySetInnerHTML={{ 
                  __html: content.workflow?.interfacesSubtitle || 'Để thấu hiểu "ma trận chai lọ", cần nhìn vào <strong class="text-white">bản chất hóa học riêng biệt</strong> của từng <strong class="text-amber-400">giao diện bám dính</strong>.' 
                }}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {(content.workflow?.interfaces || [
                {
                  title: 'Sứ thủy tinh',
                  image: '/images/su-thuy-tinh.webp',
                  description: 'Đòi hỏi soi mòn vi cơ học bằng <strong class="text-red-400">Acid HF</strong>, sau đó bắt buộc quét Silane độc lập để tạo mạng lưới liên kết siloxane.'
                },
                {
                  title: 'Zirconia & kim loại',
                  image: '/images/zironia.webp',
                  description: 'Bề mặt trơ với <strong class="text-red-400">Acid HF</strong>. Bắt buộc phải có các Primer chứa monomer chức năng để tạo liên kết ion trực tiếp.'
                },
                {
                  title: 'Mô răng',
                  image: '/images/mo-rang.webp',
                  description: 'Đòi hỏi hệ thống keo dán (Bond) để xâm nhập và tạo ra lớp lai (hybrid layer) vững chắc.'
                }
              ]).map((it: any, idx: number) => (
                <div key={idx} className="bg-slate-800/50 border border-slate-700/50 p-6 sm:p-8 rounded-2xl flex flex-col relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#00ADEF]"></div>
                  <h4 className="font-heading font-bold text-sm md:text-lg text-white mb-6 text-center pb-4 border-b border-slate-700">
                    {it.title}
                  </h4>
                  {it.image && (
                    <div className="flex justify-center mb-6">
                      <img src={it.image} alt={it.title} className="w-full max-w-[150px] h-auto object-contain" referrerPolicy="no-referrer" />
                    </div>
                  )}
                  <p 
                    className="text-slate-400 text-sm sm:text-base leading-relaxed text-center mt-auto"
                    dangerouslySetInnerHTML={{ __html: it.description }}
                  />
                </div>
              ))}
            </div>

            <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6 text-center flex flex-col sm:flex-row items-center justify-center gap-4 max-w-4xl mx-auto">
              <p 
                className="text-red-100 text-sm sm:text-base text-center"
                dangerouslySetInnerHTML={{ 
                  __html: content.workflow?.calloutText || 'Chính sự khác biệt lý hóa khắt khe này đã ép buộc quy trình lâm sàng phải <strong class="text-red-400 font-bold text-lg uppercase block mt-1">SỬ DỤNG HÀNG LOẠT <br class="sm:hidden" /> HOÁ CHẤT RỜI RẠC</strong>' 
                }}
              />
            </div>
          </div>

          {/* HẬU QUẢ */}
          <div className="mb-24 bg-slate-800/30 rounded-3xl p-8 sm:p-12 border border-slate-700/50">
            <div className="text-center mb-12">
              <h3 
                className="font-heading font-bold text-xl text-red-500 mb-4"
                dangerouslySetInnerHTML={{ 
                  __html: content.workflow?.consequencesTitle || 'Hậu quả của chuỗi <br class="sm:hidden" /> thao tác cồng kềnh' 
                }}
              />
            </div>
            
            <div className="flex flex-col space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                <div className="space-y-6 flex flex-col justify-center">
                  {(content.workflow?.consequences || [
                    'Tỷ lệ <strong class="text-white">chi phí vật tư (COGS) liên tục leo thang</strong> do phức tạp trong <strong class="text-white">quản lý tồn kho</strong>.',
                    'Sự gia tăng tuyến tính của số lượng thao tác lâm sàng tỷ lệ thuận với rủi ro xảy ra <strong class="text-white">"sai số nhân sự"</strong>.',
                    'Chỉ một khoảnh khắc đưa nhầm chai Primer hoặc sai lệch thời gian lưu dung dịch, <strong class="text-white">toàn bộ cấu trúc dán dính sẽ sụp đổ.</strong>'
                  ]).map((c: any, cIdx: number) => {
                    const text = typeof c === 'string' ? c : (c.text || '');
                    const defaultIcons = ['Coins', 'TrendingUp', 'Clock'];
                    const defaultColors = ['#34d399', '#fb7185', '#fbbf24'];
                    const iconName = typeof c === 'string' ? defaultIcons[cIdx % 3] : (c.iconName || defaultIcons[cIdx % 3]);
                    const iconSvg = typeof c === 'string' ? undefined : c.iconSvg;
                    const iconColor = typeof c === 'string' ? defaultColors[cIdx % 3] : (c.iconColor || defaultColors[cIdx % 3]);

                    return (
                      <div key={cIdx} className="flex gap-4">
                        {renderIndirectConsequenceIcon(iconName, iconSvg, iconColor)}
                        <p 
                          className="text-slate-300 leading-relaxed text-sm sm:text-base"
                          dangerouslySetInnerHTML={{ __html: text }}
                        />
                      </div>
                    );
                  })}
                </div>
                {/* Visual Flowchart */}
                <div className="flex flex-col items-center justify-center p-6 bg-slate-900/80 rounded-2xl border border-slate-700">
                  <div className="flex justify-center w-full">
                    <img 
                      src={content.workflow?.consequencesFlowImage || "/images/chuoi-thao-tac-cong-kenh.webp"} 
                      alt="Chuỗi thao tác cồng kềnh" 
                      className="w-full h-auto object-contain" 
                      referrerPolicy="no-referrer" 
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center text-center gap-4 bg-red-500/10 p-6 sm:p-8 rounded-2xl border border-red-500/20 w-full mt-4">
                <AlertTriangle className="w-8 h-8 sm:w-10 sm:h-10 text-red-500 shrink-0" />
                <p 
                  className="text-red-200 leading-relaxed text-sm sm:text-base max-w-3xl"
                  dangerouslySetInnerHTML={{ 
                    __html: content.workflow?.consequencesWarning || 'Hậu quả trực tiếp: <strong class="text-red-400 font-bold">Bong tróc phục hình, vi sút viền,</strong> và tình trạng <strong class="text-red-400 font-bold">nhạy cảm ê buốt trầm trọng</strong> cho bệnh nhân.' 
                  }}
                />
              </div>
            </div>
          </div>

          {/* PHÁC ĐỒ 3 BƯỚC */}
          <div className="max-w-4xl mx-auto">
            <div className="max-w-3xl mx-auto mb-16 flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="text-center md:text-left flex-1">
                <h3 
                  className="font-heading font-bold text-2xl md:text-3xl text-white mb-4"
                  dangerouslySetInnerHTML={{ 
                    __html: content.workflow?.protocolTitle || 'Phác đồ <span class="text-[#00ADEF]">3 bước đơn giản</span>' 
                  }}
                />
                <p 
                  className="text-slate-400 text-sm sm:text-base leading-relaxed"
                  dangerouslySetInnerHTML={{ 
                    __html: content.workflow?.protocolSubtitle || 'Bác sĩ nay chỉ cần thực hiện <strong class="text-white">3 bước thao tác đơn giản</strong> với bộ đôi <span class="text-[#00ADEF] font-bold">BeautiBond Xtreme</span> và <span class="text-[#C43838] font-bold">BeautiLink SA</span>:' 
                  }}
                />
              </div>
              
              <div className="flex justify-center flex-1 w-full md:w-auto">
                <img 
                  referrerPolicy="no-referrer"
                  src={content.workflow?.protocolImage || "/image/beautilink-bbx-new.webp"} 
                  alt="Bộ đôi BBX và BeautiLink SA" 
                  className="w-full max-w-[200px] sm:max-w-[250px] h-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500" 
                  loading="lazy"
                />
              </div>
            </div>
            
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-6 sm:before:ml-[3.25rem] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#00ADEF]/0 before:via-[#00ADEF]/50 before:to-[#00ADEF]/0">
              {(content.workflow?.steps || [
                {
                  stepNumber: '01',
                  title: 'Bước 1: Thoa BeautiBond Xtreme',
                  description: 'Chuẩn bị bề mặt cùi răng sạch và xử lý với BeautiBond Xtreme để sẵn sàng cho bước gắn.'
                },
                {
                  stepNumber: '02',
                  title: 'Bước 2: Thổi cát',
                  description: 'Thổi hơi để dàn mỏng màng keo xuống ngưỡng <strong class="text-white">5µm</strong>. Sự bốc hơi dung môi làm tăng vọt nồng độ monomer acid, từ đó mở khóa màng bảo vệ của phân tử ARS.'
                },
                {
                  stepNumber: '03',
                  title: 'Bước 3: Trộn Cement và gắn phục hình',
                  description: 'Đặt Cement vào lòng phục hình rồi đặt lên cùi răng và ấn lực vừa đủ. Sau đó quang trùng hợp 10-20 giây và đánh bóng.'
                }
              ]).map((step: any, sIdx: number) => (
                <div key={sIdx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-slate-900 bg-[#00ADEF] text-white font-heading font-bold text-xl shadow-[0_0_0_4px_rgba(0,173,239,0.2)] z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    {step.stepNumber || `0${sIdx + 1}`}
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-slate-800/80 border border-[#00ADEF]/30 p-6 rounded-2xl shadow-lg hover:border-[#00ADEF] transition-colors">
                    <h4 className="font-heading font-bold text-[#00ADEF] text-sm md:text-lg mb-2">
                      {step.title}
                    </h4>
                    <p 
                      className="text-slate-300 text-sm sm:text-base leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: step.description }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 md:mt-16 text-center relative z-10">
            <button 
              onClick={() => openCampaignModal({
                title: content.workflow?.ctaText || "Trải nghiệm phác đồ 3 bước",
                formTitle: (content.workflow as any)?.ctaFormTitle,
                formDescription: (content.workflow as any)?.ctaFormDesc,
                extraContentHtml: (content.workflow as any)?.ctaFormExtraHtml,
                redirectThanks: (content.workflow as any)?.ctaRedirectThanks,
                targetUrl: (content.workflow as any)?.ctaTargetUrl,
                resourceTitle: (content.workflow as any)?.ctaResourceTitle,
                ctaId: "workflow_cta"
              })}
              className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#00ADEF] text-white px-3 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-[10.5px] min-[375px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-sky-500 hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap flex-nowrap"
            >
              <Gift className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0" />
              <span className="truncate">{content.workflow?.ctaText || "Trải nghiệm phác đồ 3 bước"}</span>
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
          <h2 
            dangerouslySetInnerHTML={{ __html: content.testimonials?.headline || '' }}
            className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 mb-4" 
          />
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
                  const t1 = content.testimonials?.row1 || [];
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
                  const t2 = content.testimonials?.row2 || [];
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
          <button 
            onClick={() => openCampaignModal({
              title: content.testimonials?.ctaText || "Gia nhập cộng đồng MiCD",
              formTitle: content.testimonials?.ctaFormTitle,
              formDescription: content.testimonials?.ctaFormDesc,
              extraContentHtml: content.testimonials?.ctaFormExtraHtml,
              redirectThanks: content.testimonials?.ctaRedirectThanks,
              targetUrl: content.testimonials?.ctaTargetUrl,
              resourceTitle: content.testimonials?.ctaResourceTitle,
              ctaId: "testimonials_cta"
            })}
            className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#00ADEF] text-white px-3 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-[10.5px] min-[375px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-sky-500 hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap flex-nowrap"
          >
            <Gift className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0" />
            <span className="truncate">{content.testimonials?.ctaText || "Gia nhập cộng đồng MiCD"}</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </button>
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
                {content.offer?.badge || "Đặc quyền đồng hành không thể từ chối"}
              </span>
              <h2 
                dangerouslySetInnerHTML={{ __html: content.offer?.headline || '' }}
                className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-white leading-[1.3] mb-10 tracking-tight"
              />
              
              <div className="bg-slate-800/80 rounded-2xl p-6 md:p-8 border border-slate-700 mb-8 w-full text-left flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-xl md:text-2xl text-amber-400 mb-4 border-b border-slate-700 pb-4">{content.offer?.comboTitle || "Combo dán - gắn đồng bộ"}</h3>
                  <ul className="space-y-4">
                    {(content.offer?.comboItems || []).map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                        <span className="text-slate-300 text-sm sm:text-base leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="w-full md:w-[40%] lg:w-[35%] flex justify-center items-center">
                  <img 
                    src={content.offer?.comboImage || "/image/beautilink-bbx-new.webp"} 
                    alt="Combo BeautiLink SA và BeautiBond Xtreme" 
                    className="w-full max-w-[196px] h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" 
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-2xl p-6 md:p-8 border border-amber-500/30 mb-10 w-full text-left flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-xl md:text-2xl text-white mb-4 border-b border-amber-500/30 pb-4">
                    {content.offer?.giftsTitle || "Bộ quà tặng đặc quyền"}
                  </h3>
                  <ul className="space-y-4">
                    {(content.offer?.gifts || []).map((gift, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="mt-1"><Gift className="w-4 h-4 text-amber-400" /></div>
                        <p 
                          dangerouslySetInnerHTML={{ __html: gift }}
                          className="text-slate-300 text-sm sm:text-base leading-relaxed" 
                        />
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="w-full md:w-[40%] lg:w-[35%] flex justify-center items-center">
                  <img 
                    src={content.offer?.giftImage || "/images/qua-tang-giomer-khong-e-buot.webp"} 
                    alt="Bộ quà tặng đặc quyền Giomer" 
                    className="w-full max-w-[235px] h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" 
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-2xl p-6 md:p-8 border border-slate-700/50 mb-10 w-full flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/15 to-transparent rounded-full pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-500/15 to-transparent rounded-full pointer-events-none"></div>
                
                <div className="text-center md:text-left relative z-10">
                  <p className="text-slate-400 text-sm font-medium mb-1 uppercase tracking-wider">Tổng giá trị</p>
                  <div className="flex items-baseline justify-center md:justify-start gap-2">
                    <p className="text-slate-400 text-2xl md:text-3xl font-bold line-through decoration-red-500/50 decoration-2">{content.offer?.originalPrice || "3.250.000đ"}</p>
                  </div>
                </div>
                
                <div className="hidden md:block w-px h-16 bg-slate-700 relative z-10"></div>
                <div className="block md:hidden w-full h-px bg-slate-700 relative z-10"></div>
                
                <div className="text-center md:text-right relative z-10">
                  <p className="text-amber-400 text-sm font-medium mb-1 uppercase tracking-wider">Mức đầu tư ưu đãi</p>
                  <p className="font-heading font-extrabold text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200">{content.offer?.offerPrice || "1.497.000vnđ"}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
                <button 
                  onClick={() => openCampaignModal({
                    title: content.offer?.ctaText || "Đăng ký combo 'Giomer không ê buốt'",
                    formTitle: content.offer?.ctaFormTitle,
                    formDescription: content.offer?.ctaFormDesc,
                    extraContentHtml: content.offer?.ctaFormExtraHtml,
                    redirectThanks: content.offer?.ctaRedirectThanks,
                    targetUrl: content.offer?.ctaTargetUrl,
                    resourceTitle: content.offer?.ctaResourceTitle,
                    ctaId: "offer_combo_cta"
                  })}
                  className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#00ADEF] text-white px-3 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-[10.5px] min-[375px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-white hover:text-slate-900 hover:shadow-xl hover:shadow-white/20 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap flex-nowrap"
                >
                  <span className="truncate">{content.offer?.ctaText || "ĐĂNG KÝ COMBO \"GIOMER KHÔNG Ê BUỐT\""}</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </button>
              </div>
              
              <p className="mt-6 text-sm text-slate-400 flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> {content.offer?.guarantee || "Hoàn tiền 100% nếu Bác sĩ không hài lòng."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* SECTION 8: FAQ */}
      <section className="py-20 lg:py-28 bg-slate-50 bg-grid-pattern relative border-t border-slate-200">
        <div className="w-[90%] lg:w-[80%] mx-auto">
          <div className="max-w-3xl mx-auto">
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-slate-900 leading-[1.3] text-center mb-10 tracking-tight">Giải đáp <br className="block sm:hidden" /><span className="text-[#00ADEF]">hoài nghi lâm sàng</span></h2>
        
        {(content.faqs || []).map((faq) => (
          <FaqItem 
            key={faq.id}
            question={faq.q}
            answer={<span dangerouslySetInnerHTML={{ __html: faq.a }} />}
          />
        ))}
          
          <div className="mt-12 md:mt-16 text-center relative z-10">
            <button 
               onClick={() => openCampaignModal("Bác sĩ còn câu hỏi? Nhận tư vấn ngay")}
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

      <CampaignModal
        isOpen={isCampaignModalOpen}
        onClose={() => setIsCampaignModalOpen(false)}
        title={campaignModalTitle}
        formTitle={modalConfig.formTitle}
        formDescription={modalConfig.formDescription}
        extraContentHtml={modalConfig.extraContentHtml}
        redirectThanks={modalConfig.redirectThanks}
        targetUrl={modalConfig.targetUrl}
        resourceTitle={modalConfig.resourceTitle}
        ctaId={modalConfig.ctaId}
      />
    </div>
  );
}

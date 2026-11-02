import React, { useState, useEffect } from 'react';
import { 
  Gift, 
  CheckCircle, 
  ArrowRight, 
  ShieldCheck, 
  ChevronDown, 
  Download, 
  RefreshCw, 
  HandHeart, 
  Quote, 
  Microscope,
  CheckSquare
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { CampaignModal } from '../../CampaignModal';
import { CtaButton } from '../../ui/CtaButton';

import defaultData from '../../../data/comprehensive-solution.json';
import { DEFAULT_COMPREHENSIVE_DATA } from '../../../pages/admin/comprehensive-solution/defaultData';
import { ComprehensiveSolutionData } from '../../../pages/admin/comprehensive-solution/types';
import { renderUspIcon } from '../../../pages/admin/comprehensive-solution/Section1HeroEditor';

const AccordionItem: React.FC<{ 
  question: string; 
  answer: React.ReactNode; 
  isOpen: boolean; 
  onClick: () => void 
}> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border border-slate-200 rounded-2xl mb-4 bg-white overflow-hidden shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:border-[#8C2828]/30">
      <button
        className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none group"
        onClick={onClick}
      >
        <span 
          className="font-heading font-bold text-slate-900 text-base sm:text-lg group-hover:text-[#8C2828] transition-colors pr-6"
          dangerouslySetInnerHTML={{ __html: question }}
        />
        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-[#8C2828] text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-red-50 group-hover:text-[#8C2828]'}`}>
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

const DarkAccordionItem: React.FC<{ 
  question: string; 
  answer: React.ReactNode; 
  isOpen: boolean; 
  onClick: () => void; 
  icon?: string 
}> = ({ question, answer, isOpen, onClick, icon }) => {
  return (
    <div className="border border-slate-700/80 rounded-2xl mb-4 bg-slate-800/80 overflow-hidden shadow-sm transition-all duration-300 hover:border-blue-500/30">
      <button
        className="w-full flex items-start justify-between p-5 sm:p-6 text-left focus:outline-none group"
        onClick={onClick}
      >
        <div className="flex items-start gap-4 pr-6">
          {icon && <span className="text-2xl leading-none mt-0.5 shrink-0">{icon}</span>}
          <span 
            className="font-heading font-bold text-white text-sm sm:text-base leading-snug group-hover:text-blue-400 transition-colors"
            dangerouslySetInnerHTML={{ __html: question }}
          />
        </div>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-blue-500/20 text-blue-400' : 'bg-slate-700/50 text-slate-400 group-hover:bg-blue-500/10 group-hover:text-blue-400'}`}>
          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
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
            <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-4 border-t border-slate-700/50">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FeedbackCard: React.FC<{ item: any }> = ({ item }) => (
  <div className="w-[320px] sm:w-[400px] shrink-0 bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:bg-slate-800 transition-colors">
    <div>
      <Quote className="w-8 h-8 text-slate-500 mb-4 opacity-50" />
      <p 
        className="font-body text-slate-300 text-sm sm:text-base leading-relaxed italic mb-6"
        dangerouslySetInnerHTML={{ __html: item.quote ? (item.quote.startsWith('"') ? item.quote : `"${item.quote}"`) : '' }}
      />
    </div>
    <div className="flex items-center gap-4">
      <div className="text-left">
        <p className="font-bold text-white text-sm" dangerouslySetInnerHTML={{ __html: item.name || '' }} />
        <p className="text-slate-400 text-xs mt-0.5" dangerouslySetInnerHTML={{ __html: item.title || '' }} />
      </div>
    </div>
  </div>
);

export const ComprehensiveSolution: React.FC<{ overrideContent?: ComprehensiveSolutionData }> = ({ overrideContent }) => {
  const [cmsData, setCmsData] = useState<ComprehensiveSolutionData>(() => {
    if (overrideContent) return overrideContent;
    try {
      const local = localStorage.getItem('shofu_comprehensive_solution_data');
      if (local) {
        const parsed = JSON.parse(local);
        if (parsed?.hero?.headline) return parsed;
      }
    } catch (e) {}
    return (defaultData?.hero?.headline ? defaultData : DEFAULT_COMPREHENSIVE_DATA) as unknown as ComprehensiveSolutionData;
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number>(-1);
  const [openPillars, setOpenPillars] = useState<number[]>([1]);

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

  const openCampaignModal = (
    title: string,
    formTitle?: string,
    formDesc?: string,
    extraHtml?: string,
    redirectThanks?: boolean,
    targetUrl?: string,
    resourceTitle?: string
  ) => {
    setModalConfig({
      title,
      formTitle: formTitle || title,
      formDescription: formDesc,
      extraContentHtml: extraHtml,
      redirectThanks: redirectThanks ?? false,
      targetUrl,
      resourceTitle
    });
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (overrideContent) {
      setCmsData(overrideContent);
      return;
    }

    const loadDynamicContent = async () => {
      let loaded = false;
      try {
        const local = localStorage.getItem('shofu_comprehensive_solution_data');
        if (local) {
          const parsed = JSON.parse(local);
          if (parsed?.hero?.headline) {
            setCmsData(parsed);
            loaded = true;
          }
        }
      } catch (e) {}

      try {
        const res = await fetch(`/api/cms/load?page=comprehensive-solution&_t=${Date.now()}`);
        if (res.ok) {
          const json = await res.json();
          if (json.success && json.data) {
            setCmsData(json.data);
            loaded = true;
          }
        }
      } catch (e) {}

      if (!loaded) {
        try {
          const ghRes = await fetch(
            `https://raw.githubusercontent.com/nienmarketing-netizen/shofu.sota-d.com/main/src/data/comprehensive-solution.json?_t=${Date.now()}`,
            { cache: 'no-store' }
          );
          if (ghRes.ok) {
            const ghData = await ghRes.json();
            setCmsData(ghData);
          }
        } catch (e) {}
      }
    };

    loadDynamicContent();
  }, [overrideContent]);

  const togglePillar = (id: number) => {
    setOpenPillars(prev => prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]);
  };

  const { hero, painPoints, bioactive, coreProducts, evidence, offer, faq } = cmsData;

  const halfPillars = Math.ceil((evidence?.scientificPillars || []).length / 2);
  const pillarsCol1 = (evidence?.scientificPillars || []).slice(0, halfPillars);
  const pillarsCol2 = (evidence?.scientificPillars || []).slice(halfPillars);

  return (
    <div className="w-full flex flex-col">
      {/* SECTION 1: HERO */}
      <section className="relative bg-slate-50 bg-grid-pattern pt-[100px] pb-16 md:pt-[120px] md:pb-24 overflow-hidden border-b border-slate-200">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-tr from-[#8C2828]/15 via-[#8C2828]/5 to-transparent rounded-full transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        <div className="w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
            <div className="w-full lg:w-3/5 flex flex-col items-center lg:items-start text-center lg:text-left">
              {/* Badge Marquee */}
              {hero.badge && (
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100/80 border border-red-200 text-[#8C2828] font-mono text-xs sm:text-sm font-bold tracking-wider mb-6 sm:mb-8 shadow-sm overflow-hidden w-[90vw] sm:w-fit max-w-[320px] sm:max-w-md relative">
                  <div className="shrink-0 flex items-center justify-center z-10 pl-1 pr-1 bg-red-100/80">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8C2828]"></span>
                    </span>
                  </div>
                  
                  <div className="flex-1 overflow-hidden relative whitespace-nowrap [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <div className="flex w-max animate-marquee-slow hover:[animation-play-state:paused]">
                      <span className="text-[10px] sm:text-xs pr-8" dangerouslySetInnerHTML={{ __html: hero.badge }} />
                      <span className="text-[10px] sm:text-xs pr-8" dangerouslySetInnerHTML={{ __html: hero.badge }} />
                    </div>
                  </div>
                </div>
              )}
              
              <h1 
                className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] text-slate-900 leading-[1.2] mb-6 tracking-tight"
                dangerouslySetInnerHTML={{ __html: hero.headline }}
              />

              {/* Mobile Image (hidden on lg) */}
              <div className="w-full relative lg:hidden mb-12 mt-4 px-6">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#8C2828]/20 to-transparent rounded-full blur-3xl pointer-events-none"></div>
                <div className="w-full relative z-10 flex items-center justify-center">
                  <img
                    src={hero.mobileImage || hero.image || "/image/shofu-giai-phap-toan-dien-5-san-pham.webp"}
                    alt="Hệ sinh thái Master Ecosystem - Bộ 5 sản phẩm cốt lõi Shofu"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto max-h-[300px] object-contain drop-shadow-xl"
                  />
                </div>

                {/* Mobile Floating elements: Bioactive */}
                <div className="absolute -left-2 -top-5 bg-white/95 backdrop-blur-md p-2 rounded-xl shadow-xl border border-slate-200/80 z-20 flex items-center gap-2 animate-float-sway">
                  <div className="w-7 h-7 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shrink-0 shadow-sm">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-xs whitespace-nowrap">Bioactive</div>
                    <div className="text-[10px] text-slate-500 whitespace-nowrap">Trị liệu sinh học</div>
                  </div>
                </div>

                {/* Mobile Floating elements: HEMA-Free */}
                <div className="absolute -right-2 -bottom-5 bg-white/95 backdrop-blur-md p-2 rounded-xl shadow-xl border border-slate-200/80 z-20 flex items-center gap-2 animate-float-sway-delayed">
                  <div className="w-7 h-7 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0 shadow-sm">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-xs whitespace-nowrap">HEMA-Free</div>
                    <div className="text-[10px] text-slate-500 whitespace-nowrap">Kháng nước 100%</div>
                  </div>
                </div>
              </div>
              
              <div 
                className="font-body text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl"
                dangerouslySetInnerHTML={{ __html: hero.subheadline }}
              />

              {/* USPs List */}
              {hero.usps && hero.usps.length > 0 && (
                <div className="flex flex-col gap-4 mb-10 w-full max-w-2xl">
                  {hero.usps.map((usp, idx) => (
                    <div key={usp.id || idx} className="flex items-start gap-3 bg-white/60 p-3 rounded-xl border border-slate-200/60 shadow-sm text-left">
                      <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                        {renderUspIcon(usp.iconName)}
                      </div>
                      <div className="font-body text-sm sm:text-base text-slate-700 leading-tight mt-1.5">
                        <strong className="text-slate-900" dangerouslySetInnerHTML={{ __html: usp.title }} />
                        {usp.description ? ': ' : ''}
                        <span dangerouslySetInnerHTML={{ __html: usp.description }} />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start">
                <CtaButton 
                  onClick={() => openCampaignModal(
                    hero.ctaText || "Sở hữu gói Master Ecosystem - Tài trợ 100% quà tặng",
                    hero.ctaFormTitle,
                    hero.ctaFormDesc,
                    hero.ctaFormExtraHtml,
                    hero.ctaRedirectThanks,
                    hero.ctaTargetUrl,
                    hero.ctaResourceTitle
                  )} 
                  className="group relative inline-flex items-center justify-center gap-2 bg-[#8C2828] text-white px-6 py-4 rounded-full font-mono text-sm font-bold tracking-wide hover:bg-red-900 hover:shadow-xl hover:shadow-red-900/30 transition-all duration-300"
                >
                  <span dangerouslySetInnerHTML={{ __html: hero.ctaText || 'Sở hữu gói Master Ecosystem' }} />
                  <ArrowRight className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </CtaButton>
                
                {hero.secondaryCtaText && (
                  <CtaButton 
                    onClick={() => openCampaignModal(
                      hero.secondaryCtaFormTitle || hero.secondaryCtaText,
                      hero.secondaryCtaFormTitle || hero.secondaryCtaText,
                      hero.secondaryCtaFormDesc ?? hero.ctaFormDesc,
                      hero.secondaryCtaFormExtraHtml ?? hero.ctaFormExtraHtml,
                      hero.secondaryCtaRedirectThanks ?? hero.ctaRedirectThanks,
                      hero.secondaryCtaTargetUrl ?? hero.ctaTargetUrl,
                      hero.secondaryCtaResourceTitle ?? hero.ctaResourceTitle
                    )} 
                    className="group relative inline-flex items-center justify-center gap-2 bg-white text-[#8C2828] border-2 border-[#8C2828] px-6 py-4 rounded-full font-mono text-sm font-bold tracking-wide hover:bg-red-50 hover:shadow-lg transition-all duration-300"
                  >
                    <Download className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:-translate-y-1 transition-all" />
                    <span dangerouslySetInnerHTML={{ __html: hero.secondaryCtaText }} />
                  </CtaButton>
                )}
              </div>
            </div>
            
            {/* Desktop Image */}
            <div className="w-full lg:w-2/5 relative hidden lg:block lg:pt-[54px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#8C2828]/20 to-transparent rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="w-full relative z-10 flex items-center justify-center">
                <img
                  src={hero.image || "/image/shofu-giai-phap-toan-dien-5-san-pham-pc.webp"}
                  alt="Hệ sinh thái Master Ecosystem - Bộ 5 sản phẩm cốt lõi Shofu"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto max-h-[580px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Floating element: Bioactive */}
              <div className="absolute -left-10 xl:-left-16 top-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-2xl border border-slate-200/90 z-20 flex items-center gap-3 animate-float-sway">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm whitespace-nowrap">Bioactive</div>
                  <div className="text-xs text-slate-500 whitespace-nowrap">Trị liệu sinh học</div>
                </div>
              </div>
              
              {/* Floating element: HEMA-Free */}
              <div className="absolute -right-8 xl:-right-14 bottom-2 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-2xl border border-slate-200/90 z-20 flex items-center gap-3 animate-float-sway-delayed">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm whitespace-nowrap">HEMA-Free</div>
                  <div className="text-xs text-slate-500 whitespace-nowrap">Kháng nước 100%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: 4 PAIN POINTS - DARK THEME */}
      <section className="py-20 lg:py-28 bg-slate-900 relative border-y border-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-light opacity-100 pointer-events-none"></div>
        <div className="w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 
              className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-white leading-[1.3] mb-6 tracking-tight"
              dangerouslySetInnerHTML={{ __html: painPoints.headline }}
            />
            <div className="w-24 h-1 bg-[#8C2828] mx-auto my-6"></div>
            <div 
              className="font-body text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto"
              dangerouslySetInnerHTML={{ __html: painPoints.subheadline }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {(painPoints.cards || []).map((card, idx) => {
              const borderColors = [
                'hover:border-red-500/50',
                'hover:border-amber-500/50',
                'hover:border-blue-500/50',
                'hover:border-emerald-500/50'
              ][idx % 4];
              const badgeColors = [
                'bg-red-500/10 border-red-500/20 text-red-400',
                'bg-amber-500/10 border-amber-500/20 text-amber-400',
                'bg-blue-500/10 border-blue-500/20 text-blue-400',
                'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
              ][idx % 4];

              return (
                <div 
                  key={card.id || idx} 
                  className={`bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 sm:p-8 transition-colors duration-300 ${borderColors}`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 ${badgeColors}`}>
                      <span className="font-heading font-bold text-2xl">{card.number || idx + 1}</span>
                    </div>
                    <h3 
                      className="font-heading font-bold text-xl sm:text-2xl text-white leading-tight"
                      dangerouslySetInnerHTML={{ __html: card.title }}
                    />
                  </div>
                  <div 
                    className="font-body text-slate-400 text-sm sm:text-base leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: card.description }}
                  />
                </div>
              );
            })}
          </div>

          {painPoints.calloutText && (
            <div 
              className="mt-8 text-center text-sm sm:text-base text-slate-300 font-medium"
              dangerouslySetInnerHTML={{ __html: painPoints.calloutText }}
            />
          )}
        
          <div className="mt-12 text-center">
            <CtaButton 
              onClick={() => openCampaignModal(
                painPoints.ctaText || "Nhận giải pháp khắc phục điểm mù lâm sàng",
                painPoints.ctaFormTitle,
                painPoints.ctaFormDesc,
                painPoints.ctaFormExtraHtml,
                painPoints.ctaRedirectThanks,
                painPoints.ctaTargetUrl,
                painPoints.ctaResourceTitle
              )} 
              className="group relative inline-flex items-center justify-center gap-2 bg-amber-400 text-slate-900 px-4 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-xs sm:text-base whitespace-nowrap font-bold tracking-wide hover:bg-amber-300 hover:shadow-xl hover:shadow-amber-400/20 transition-all duration-300"
            >
              <span dangerouslySetInnerHTML={{ __html: painPoints.ctaText || 'Khắc phục điểm mù lâm sàng ngay' }} />
              <ArrowRight className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </CtaButton>
          </div>
        </div>
      </section>

      {/* SECTION 3: PARADIGM SHIFT (MiCD & S-PRG) */}
      <section className="py-20 lg:py-28 bg-white bg-grid-pattern relative overflow-hidden border-b border-slate-200">
        <div className="w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 font-mono text-xs sm:text-sm font-bold tracking-wider mb-6">
              <RefreshCw className="w-4 h-4" />
              <span dangerouslySetInnerHTML={{ __html: bioactive.badge || 'Bước ngoặt tư duy' }} />
            </div>
            
            <h2 
              className="font-heading font-extrabold text-[1.35rem] min-[375px]:text-[1.6rem] sm:text-4xl lg:text-[2.75rem] leading-[1.3] mb-6 tracking-tight text-slate-900"
              dangerouslySetInnerHTML={{ __html: bioactive.headline }}
            />
            
            <div 
              className="font-body text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto"
              dangerouslySetInnerHTML={{ __html: bioactive.intro }}
            />
          </div>

          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {(bioactive.ions || []).map((ion, idx) => {
                const ionThemes = [
                  { 
                    gradient: 'from-white to-blue-50/80', 
                    border: 'border-blue-100 shadow-blue-100/50 hover:shadow-blue-200/50 hover:border-blue-200',
                    circle: 'bg-blue-100 border-blue-200 text-blue-600'
                  },
                  { 
                    gradient: 'from-white to-emerald-50/80', 
                    border: 'border-emerald-100 shadow-emerald-100/50 hover:shadow-emerald-200/50 hover:border-emerald-200',
                    circle: 'bg-emerald-100 border-emerald-200 text-emerald-600'
                  },
                  { 
                    gradient: 'from-white to-amber-50/80', 
                    border: 'border-amber-100 shadow-amber-100/50 hover:shadow-amber-200/50 hover:border-amber-200',
                    circle: 'bg-amber-100 border-amber-200 text-amber-600'
                  },
                  { 
                    gradient: 'from-white to-purple-50/80', 
                    border: 'border-purple-100 shadow-purple-100/50 hover:shadow-purple-200/50 hover:border-purple-200',
                    circle: 'bg-purple-100 border-purple-200 text-purple-600'
                  }
                ][idx % 4];

                return (
                  <div 
                    key={ion.id || idx}
                    className={`bg-gradient-to-b ${ionThemes.gradient} p-6 rounded-2xl border ${ionThemes.border} shadow-sm flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-md transition-all duration-300`}
                  >
                    <div className={`w-16 h-16 rounded-full border flex items-center justify-center mb-4 ${ionThemes.circle}`}>
                      <span className="font-heading font-bold text-lg" dangerouslySetInnerHTML={{ __html: ion.ionName }} />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2" dangerouslySetInnerHTML={{ __html: ion.title }} />
                    <p className="text-sm text-slate-600 font-body" dangerouslySetInnerHTML={{ __html: ion.description }} />
                  </div>
                );
              })}
            </div>

            <div className="text-center">
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 mb-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
                <span dangerouslySetInnerHTML={{ __html: bioactive.batteryTitle || 'Lá chắn 6 ion sinh học' }} />
                <span className="inline-block font-mono text-sm sm:text-base text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full shadow-sm tracking-wide">Giomer Molecular Shield</span>
              </h3>
              <div 
                className="text-slate-600 font-body max-w-2xl mx-auto leading-relaxed text-base sm:text-lg"
                dangerouslySetInnerHTML={{ __html: bioactive.batteryDesc }}
              />
            </div>
          </div>
        
          <div className="mt-12 text-center">
            <CtaButton 
              onClick={() => openCampaignModal(
                bioactive.ctaText || "Nâng cấp vật liệu sinh học S-PRG",
                bioactive.ctaFormTitle,
                bioactive.ctaFormDesc,
                bioactive.ctaFormExtraHtml,
                bioactive.ctaRedirectThanks,
                bioactive.ctaTargetUrl,
                bioactive.ctaResourceTitle
              )} 
              className="group relative inline-flex items-center justify-center gap-2 bg-[#8C2828] text-white px-4 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-xs sm:text-base whitespace-nowrap font-bold tracking-wide hover:bg-red-900 hover:shadow-xl hover:shadow-red-900/30 transition-all duration-300"
            >
              <span dangerouslySetInnerHTML={{ __html: bioactive.ctaText || 'Nâng cấp vật liệu sinh học S-PRG' }} />
              <ArrowRight className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </CtaButton>
          </div>
        </div>
      </section>

      {/* SECTION 4: MASTER ECOSYSTEM PRODUCTS */}
      <section className="py-20 lg:py-28 bg-slate-50 bg-grid-pattern relative overflow-hidden border-b border-slate-200">
        <div className="w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 
              className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-slate-900 leading-[1.3] mb-6 tracking-tight"
              dangerouslySetInnerHTML={{ __html: coreProducts.headline }}
            />
            <div 
              className="font-body text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto"
              dangerouslySetInnerHTML={{ __html: coreProducts.intro }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8">
            {(coreProducts.products || []).map((prod, idx) => {
              const colSpan = idx < 3 ? 'lg:col-span-2' : 'lg:col-span-3';
              const tagColors = [
                'bg-red-50 text-red-600',
                'bg-blue-50 text-blue-600',
                'bg-purple-50 text-purple-600',
                'bg-amber-50 text-amber-600',
                'bg-emerald-50 text-emerald-600'
              ][idx % 5];

              return (
                <div 
                  key={prod.id || idx} 
                  className={`${colSpan} bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`inline-flex px-3 py-1 rounded-full text-xs font-bold ${tagColors}`}>
                      {prod.tag}
                    </div>
                    <span className="text-4xl font-heading font-black text-slate-100">
                      {prod.stepNumber || (idx + 1 < 10 ? `0${idx + 1}` : `${idx + 1}`)}
                    </span>
                  </div>
                  
                  <h3 
                    className="font-heading font-bold text-xl text-slate-900 mb-4"
                    dangerouslySetInnerHTML={{ __html: prod.name }}
                  />

                  <div className="w-full aspect-[4/3] relative mb-6 flex items-center justify-center bg-slate-50 rounded-2xl overflow-hidden group">
                    <img 
                      src={prod.image} 
                      alt={prod.name} 
                      className="w-full h-full object-contain p-4 sm:p-6 drop-shadow-xl group-hover:scale-110 transition-transform duration-500" 
                      referrerPolicy="no-referrer" 
                    />
                  </div>

                  <ul className="space-y-3 font-body text-slate-600 text-sm flex-1">
                    {(prod.features || []).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span dangerouslySetInnerHTML={{ __html: feat }} />
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        
          <div className="mt-12 text-center">
            <CtaButton 
              onClick={() => openCampaignModal(
                coreProducts.ctaText || "Nhận báo giá hệ sinh thái Giomer 360",
                coreProducts.ctaFormTitle,
                coreProducts.ctaFormDesc,
                coreProducts.ctaFormExtraHtml,
                coreProducts.ctaRedirectThanks,
                coreProducts.ctaTargetUrl,
                coreProducts.ctaResourceTitle
              )} 
              className="group relative inline-flex items-center justify-center gap-2 bg-[#8C2828] text-white px-4 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-xs sm:text-base whitespace-nowrap font-bold tracking-wide hover:bg-red-900 hover:shadow-xl hover:shadow-red-900/30 transition-all duration-300"
            >
              <span dangerouslySetInnerHTML={{ __html: coreProducts.ctaText || 'Khám phá trọn bộ Hệ sinh thái Giomer' }} />
              <ArrowRight className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </CtaButton>
          </div>
        </div>
      </section>

      {/* SECTION 5: SCIENTIFIC PROOF */}
      <section className="py-20 lg:py-28 bg-slate-900 relative border-y border-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-light opacity-100 pointer-events-none"></div>
        <div className="w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 
              className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-white leading-[1.3] mb-6 tracking-tight"
              dangerouslySetInnerHTML={{ __html: evidence.headline }}
            />
            <div 
              className="text-slate-300 font-body max-w-2xl mx-auto text-base sm:text-lg leading-relaxed"
              dangerouslySetInnerHTML={{ __html: evidence.subheadline }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="flex flex-col">
              {pillarsCol1.map((pillar) => (
                <DarkAccordionItem
                  key={pillar.id}
                  icon={pillar.icon}
                  question={pillar.title}
                  answer={
                    <ul className="space-y-3">
                      {(pillar.points || []).map((pt, pIdx) => (
                        <li key={pIdx} className="flex gap-3 items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                          <span 
                            className="text-slate-300 font-body text-sm sm:text-base leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: pt }}
                          />
                        </li>
                      ))}
                    </ul>
                  }
                  isOpen={openPillars.includes(pillar.id)}
                  onClick={() => togglePillar(pillar.id)}
                />
              ))}
            </div>
            
            <div className="flex flex-col">
              {pillarsCol2.map((pillar) => (
                <DarkAccordionItem
                  key={pillar.id}
                  icon={pillar.icon}
                  question={pillar.title}
                  answer={
                    <ul className="space-y-3">
                      {(pillar.points || []).map((pt, pIdx) => (
                        <li key={pIdx} className="flex gap-3 items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                          <span 
                            className="text-slate-300 font-body text-sm sm:text-base leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: pt }}
                          />
                        </li>
                      ))}
                    </ul>
                  }
                  isOpen={openPillars.includes(pillar.id)}
                  onClick={() => togglePillar(pillar.id)}
                />
              ))}
            </div>
          </div>
        
          {/* Testimonials */}
          {((evidence.testimonialsRow1 && evidence.testimonialsRow1.length > 0) || (evidence.testimonialsRow2 && evidence.testimonialsRow2.length > 0)) && (
            <div className="mt-20">
              <div className="text-center mb-8">
                <h3 
                  className="font-heading font-bold text-xl sm:text-2xl text-white"
                  dangerouslySetInnerHTML={{ __html: evidence.testimonialsHeadline || 'Đánh giá từ chuyên gia lâm sàng quốc tế & trong nước' }}
                />
              </div>
              <div className="w-full relative py-4 mask-image-horizontal">
                {evidence.testimonialsRow1 && evidence.testimonialsRow1.length > 0 && (
                  <div className="flex w-max animate-marquee-slow hover:[animation-play-state:paused] gap-6">
                    {[...evidence.testimonialsRow1, ...evidence.testimonialsRow1].map((item, idx) => (
                      <FeedbackCard key={`row1-${idx}`} item={item} />
                    ))}
                  </div>
                )}
                {evidence.testimonialsRow2 && evidence.testimonialsRow2.length > 0 && (
                  <div className="flex w-max animate-marquee-slow hover:[animation-play-state:paused] gap-6 mt-6" style={{ animationDirection: 'reverse' }}>
                    {[...evidence.testimonialsRow2, ...evidence.testimonialsRow2].map((item, idx) => (
                      <FeedbackCard key={`row2-${idx}`} item={item} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="mt-12 text-center">
            <CtaButton 
              onClick={() => openCampaignModal(
                evidence.ctaText || "Gia nhập cộng đồng MiCD",
                evidence.ctaFormTitle,
                evidence.ctaFormDesc,
                evidence.ctaFormExtraHtml,
                evidence.ctaRedirectThanks,
                evidence.ctaTargetUrl,
                evidence.ctaResourceTitle
              )} 
              className="group relative inline-flex items-center justify-center gap-2 bg-blue-500 text-white px-4 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-xs sm:text-base whitespace-nowrap font-bold tracking-wide hover:bg-blue-400 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
            >
              <HandHeart className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:-translate-y-1 transition-all" />
              <span dangerouslySetInnerHTML={{ __html: evidence.ctaText || 'Gia nhập cộng đồng MiCD' }} />
            </CtaButton>
          </div>
        </div>
      </section>

      {/* SECTION 6: CORE OFFER */}
      <section className="py-20 lg:py-28 bg-[#8C2828] bg-grid-pattern-light relative overflow-hidden" id="offer">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-white/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>
        <div className="w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
          <div className="text-center text-white mb-16">
            {offer.badge && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/20 border border-white/20 font-mono text-xs sm:text-sm font-bold tracking-wider mb-6">
                <Gift className="w-4 h-4 text-amber-300" />
                <span className="text-white" dangerouslySetInnerHTML={{ __html: offer.badge }} />
              </div>
            )}
            <h2 
              className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.3] mb-6"
              dangerouslySetInnerHTML={{ __html: offer.headline }}
            />
            {offer.subheadline && (
              <div 
                className="text-white/80 font-body text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
                dangerouslySetInnerHTML={{ __html: offer.subheadline }}
              />
            )}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 mb-12">
            {/* Box 1: Core Products */}
            <div className="bg-white/95 backdrop-blur-xl rounded-[2rem] p-8 lg:p-10 shadow-[0_20px_40px_rgb(0,0,0,0.08)] border border-white/60 flex flex-col relative overflow-hidden transition-all hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] hover:-translate-y-1 duration-500">
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80"></div>
              
              <div className="w-full relative mb-8 flex items-center justify-center">
                <img
                  loading="lazy"
                  src={offer.coreBox?.image || "/image/shofu-giai-phap-toan-dien-5-san-pham.webp"}
                  alt={offer.coreBox?.title || "Bộ 5 sản phẩm cốt lõi"}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain max-h-[260px] drop-shadow-xl hover:scale-105 transition-transform duration-500 mx-auto"
                />
              </div>
              <h4 className="font-heading font-extrabold text-2xl text-slate-800 mb-8 flex items-center justify-center gap-4">
                <span 
                  className="bg-clip-text text-transparent bg-gradient-to-r from-[#8C2828] to-red-600"
                  dangerouslySetInnerHTML={{ __html: offer.coreBox?.title || 'Bộ 5 sản phẩm cốt lõi' }}
                />
              </h4>
              <ul className="space-y-5 font-body text-sm md:text-base flex-1 text-slate-700">
                {(offer.coreBox?.items || []).map((it, idx) => (
                  <li key={idx} className="flex justify-start items-start gap-4">
                    <div className="flex gap-3 items-start">
                      <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span dangerouslySetInnerHTML={{ __html: it }} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Box 2: VIP Gifts */}
            <div className="bg-[#6A1A1A]/90 backdrop-blur-xl border border-amber-400/30 rounded-[2rem] p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.2)] flex flex-col relative overflow-hidden transition-transform hover:-translate-y-1 duration-500">
              {offer.giftBox?.badge && (
                <div 
                  className="absolute top-8 right-8 bg-gradient-to-r from-amber-400 to-amber-300 text-amber-950 font-bold text-xs px-4 py-2 rounded-full shadow-sm z-10 tracking-wide uppercase"
                  dangerouslySetInnerHTML={{ __html: offer.giftBox.badge }}
                />
              )}
              <div className="w-full relative mb-8 flex items-center justify-center">
                <img
                  loading="lazy"
                  src={offer.giftBox?.image || "/image/shofu-giai-phap-toan-dien-bo-qua-tang.webp"}
                  alt={offer.giftBox?.title || "Bộ quà tặng và đặc quyền VIP"}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain max-h-[260px] drop-shadow-xl hover:scale-105 transition-transform duration-500 mx-auto"
                />
              </div>
              <h4 
                className="font-heading font-bold text-2xl text-amber-400 mb-6 flex items-center gap-3"
                dangerouslySetInnerHTML={{ __html: offer.giftBox?.title || 'Quà tặng & đặc quyền VIP' }}
              />
              <ul className="space-y-5 font-body text-sm md:text-base flex-1 text-amber-50/90">
                {(offer.giftBox?.items || []).map((it, idx) => (
                  <li key={idx} className="flex justify-start items-start gap-4">
                    <div className="flex gap-3 items-start">
                      <Gift className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <span dangerouslySetInnerHTML={{ __html: it }} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Price Bar */}
          <div className="w-full mx-auto bg-black/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 mb-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 blur-[50px] rounded-full pointer-events-none"></div>
            
            <div className="text-center md:text-left relative z-10">
              <p className="text-white/60 text-sm font-medium mb-1 uppercase tracking-wider">Tổng giá trị</p>
              <div className="flex items-baseline justify-center md:justify-start gap-2">
                <p 
                  className="text-white/60 text-2xl md:text-3xl font-bold line-through decoration-red-500/50 decoration-2"
                  dangerouslySetInnerHTML={{ __html: offer.originalPrice || '13.735.000đ' }}
                />
              </div>
            </div>
            
            <div className="hidden md:block w-px h-16 bg-white/20 relative z-10 flex-shrink-0"></div>
            <div className="block md:hidden w-full h-px bg-white/20 relative z-10"></div>
            
            <div className="text-center md:text-right relative z-10 flex-1">
              <div className="flex flex-col md:items-end">
                <p className="text-amber-400 text-sm font-medium mb-2 uppercase tracking-wider flex flex-col sm:flex-row items-center justify-center md:justify-end gap-2">
                  <span>Mức đầu tư trải nghiệm</span>
                </p>
                <p 
                  className="font-heading font-extrabold text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200 drop-shadow-sm"
                  dangerouslySetInnerHTML={{ __html: offer.salePrice || '5.450.000đ' }}
                />
              </div>
            </div>
          </div>

          {/* Commitments */}
          {offer.commitments && offer.commitments.length > 0 && (
            <div className="mt-16 border-t border-white/20 pt-16">
              <div className="w-full text-center">
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-10 leading-snug sm:leading-tight">
                  <span className="block sm:inline">Cam kết <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200 drop-shadow-sm">bảo vệ 3 lớp</span></span>{' '}
                  <span className="block sm:inline">từ <span className="text-amber-400 drop-shadow-sm">Sota-D</span></span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 text-left">
                  {offer.commitments.map((com, idx) => {
                    const comIcons = [
                      <ShieldCheck className="w-7 h-7" />,
                      <RefreshCw className="w-7 h-7" />,
                      <CheckSquare className="w-7 h-7" />
                    ][idx % 3];
                    const comColors = [
                      'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
                      'bg-blue-500/20 text-blue-300 border-blue-500/30',
                      'bg-purple-500/20 text-purple-300 border-purple-500/30'
                    ][idx % 3];

                    return (
                      <div key={idx} className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 lg:p-10 rounded-[2rem] flex flex-col items-center text-center hover:bg-white/10 transition-all duration-500">
                        <div className={`w-14 h-14 border rounded-2xl flex items-center justify-center mb-6 ${comColors}`}>
                          {comIcons}
                        </div>
                        <h4 
                          className="font-heading font-bold text-lg sm:text-xl text-white mb-3"
                          dangerouslySetInnerHTML={{ __html: com.title }}
                        />
                        <div 
                          className="text-sm sm:text-base text-white/70 font-body leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: com.desc }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        
          <div className="mt-12 text-center">
            <CtaButton 
              onClick={() => openCampaignModal(
                offer.ctaText || "Đăng ký nhận Ưu đãi Master Ecosystem",
                offer.ctaFormTitle,
                offer.ctaFormDesc,
                offer.ctaFormExtraHtml,
                offer.ctaRedirectThanks,
                offer.ctaTargetUrl,
                offer.ctaResourceTitle
              )} 
              className="group relative inline-flex items-center justify-center gap-2 bg-amber-400 text-slate-900 px-4 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-xs sm:text-base whitespace-nowrap font-bold tracking-wide hover:bg-amber-300 hover:shadow-xl hover:shadow-amber-400/30 transition-all duration-300 mt-8"
            >
              <Gift className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:-rotate-12 transition-all" />
              <span dangerouslySetInnerHTML={{ __html: offer.ctaText || 'Đăng ký giữ chỗ Ưu đãi ngay' }} />
            </CtaButton>
          </div>
        </div>
      </section>

      {/* SECTION 7: FAQ */}
      <section className="py-20 bg-white bg-grid-pattern relative overflow-hidden border-b border-slate-200">
        <div className="w-[90%] lg:w-[60%] mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 
              className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 leading-snug sm:leading-[1.3] tracking-tight"
              dangerouslySetInnerHTML={{ __html: faq.headline || 'Giải đáp hoài nghi lâm sàng' }}
            />
          </div>
          
          <div className="space-y-2">
            {(faq.items || []).map((item, index) => (
              <AccordionItem
                key={item.id || index}
                question={item.q}
                answer={<div dangerouslySetInnerHTML={{ __html: item.a }} />}
                isOpen={openFaqIndex === index}
                onClick={() => setOpenFaqIndex(openFaqIndex === index ? -1 : index)}
              />
            ))}
          </div>
        
          <div className="mt-12 text-center">
            <CtaButton 
              onClick={() => openCampaignModal(
                faq.ctaText || "Nhận tư vấn chuyên sâu 1:1",
                faq.ctaFormTitle,
                faq.ctaFormDesc,
                faq.ctaFormExtraHtml,
                faq.ctaRedirectThanks,
                faq.ctaTargetUrl,
                faq.ctaResourceTitle
              )} 
              className="group relative inline-flex items-center justify-center gap-2 bg-[#8C2828] text-white px-4 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-xs sm:text-base whitespace-nowrap font-bold tracking-wide hover:bg-red-900 hover:shadow-xl hover:shadow-red-900/30 transition-all duration-300"
            >
              <span dangerouslySetInnerHTML={{ __html: faq.ctaText || 'Bác sĩ còn câu hỏi? Nhận tư vấn ngay' }} />
              <ArrowRight className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </CtaButton>
          </div>
        </div>
      </section>

      {/* Modal Popup */}
      <CampaignModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        {...modalConfig}
      />
    </div>
  );
};

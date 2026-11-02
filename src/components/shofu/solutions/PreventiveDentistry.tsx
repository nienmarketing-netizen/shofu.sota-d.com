import React, { useState, useEffect } from 'react';
import { 
  Gift, 
  BookOpen, 
  CheckCircle, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  ChevronDown, 
  Sparkles, 
  AlertTriangle, 
  Microscope, 
  Droplets, 
  Quote 
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { CampaignModal } from '../../CampaignModal';
import { CtaButton } from '../../ui/CtaButton';
import defaultData from '../../../data/preventive-dentistry.json';
import { PreventiveDentistryData } from '../../../pages/admin/preventive-dentistry/types';
import { renderUspIcon } from '../../../pages/admin/preventive-dentistry/Section1HeroEditor';

const AccordionItem: React.FC<{ question: string; answer: React.ReactNode; isOpen: boolean; onClick: () => void }> = ({ question, answer, isOpen, onClick }) => {
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

export function PreventiveDentistry({ overrideContent }: { overrideContent?: PreventiveDentistryData }) {
  const [content, setContent] = useState<PreventiveDentistryData>(() => {
    if (overrideContent) return overrideContent;
    try {
      const local = localStorage.getItem('shofu_preventive_dentistry_data');
      if (local) {
        const parsed = JSON.parse(local);
        if (parsed?.hero?.headline) return parsed;
      }
    } catch (e) {}
    return defaultData as unknown as PreventiveDentistryData;
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
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
      setContent(overrideContent);
      return;
    }

    const loadDynamicContent = async () => {
      let loaded = false;
      try {
        const local = localStorage.getItem('shofu_preventive_dentistry_data');
        if (local) {
          const parsed = JSON.parse(local);
          if (parsed?.hero?.headline) {
            setContent(parsed);
            loaded = true;
          }
        }
      } catch (e) {}

      try {
        const res = await fetch(`/api/cms/load?page=preventive-dentistry&_t=${Date.now()}`);
        if (res.ok) {
          const json = await res.json();
          if (json.success && json.data) {
            setContent(json.data);
            loaded = true;
          }
        }
      } catch (e) {}

      if (!loaded) {
        try {
          const ghRes = await fetch(
            `https://raw.githubusercontent.com/nienmarketing-netizen/shofu.sota-d.com/main/src/data/preventive-dentistry.json?_t=${Date.now()}`,
            { cache: 'no-store' }
          );
          if (ghRes.ok) {
            const ghData = await ghRes.json();
            setContent(ghData);
          }
        } catch (e) {}
      }
    };

    loadDynamicContent();
  }, [overrideContent]);

  const { hero, painPoints, bioactive, coreProducts, evidence, offer, leadMagnet, faq } = content;

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
                  <span className="pr-8">{hero.badge || '✦ Triết lý nha khoa phòng ngừa MiCD & trị liệu sinh học từ Shofu (Nhật Bản) ✦'}</span>
                  <span className="pr-8">{hero.badge || '✦ Triết lý nha khoa phòng ngừa MiCD & trị liệu sinh học từ Shofu (Nhật Bản) ✦'}</span>
                </div>
              </div>
            </div>
            
            <h1 
              className="font-heading font-extrabold text-[1.65rem] min-[375px]:text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl text-slate-900 leading-[1.3] mb-6 tracking-tight lg:pr-4 xl:pr-0 lg:-mr-8 xl:-mr-12 text-left"
              dangerouslySetInnerHTML={{ __html: hero.headline }}
            />
            
            {/* Mobile Image */}
            <div className="lg:hidden my-6 sm:my-8 flex justify-start">
              <img 
                fetchPriority="high" 
                loading="eager" 
                src={hero.image} 
                alt="Hệ thống Nha khoa Phòng ngừa Shofu" 
                referrerPolicy="no-referrer" 
                className="w-full max-w-[340px] sm:max-w-[420px] h-auto object-contain relative z-10" 
              />
            </div>
            
            <p 
              className="font-body text-base sm:text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl text-left"
              dangerouslySetInnerHTML={{ __html: hero.body }}
            />
          </div>
          
          {/* Desktop Image */}
          <div className="hidden lg:block w-full lg:w-[35%] xl:w-[40%] relative mt-8 lg:mt-0">
             <img 
               fetchPriority="high" 
               loading="eager" 
               src={hero.image} 
               alt="Hệ thống Nha khoa Phòng ngừa Shofu" 
               referrerPolicy="no-referrer" 
               className="w-full h-auto object-contain relative z-10 drop-shadow-2xl lg:-ml-4 xl:-ml-8" 
             />
          </div>
        </div>

        {/* USPs */}
        <div className="w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10 mt-12 pb-4">
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {hero.usps.map((usp, idx) => (
                <li key={usp.id || idx} className="flex flex-row sm:flex-col items-start sm:items-center text-left sm:text-center gap-4 sm:gap-3 p-4 sm:p-5 rounded-xl border border-slate-200/80 bg-white/70 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-50 flex items-center justify-center shrink-0 text-[#C43838]">
                    {renderUspIcon(usp.iconName, "w-5 h-5 sm:w-6 sm:h-6 text-[#C43838]")}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-1 leading-snug">{usp.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed mt-1 sm:mt-0">{usp.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-10">
              <CtaButton 
                onClick={() => {
                  const offerEl = document.getElementById('offer');
                  if (offerEl) {
                    offerEl.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    openCampaignModal(
                      hero.ctaText,
                      hero.ctaFormTitle,
                      hero.ctaFormDesc,
                      hero.ctaFormExtraHtml,
                      hero.ctaRedirectThanks,
                      hero.ctaTargetUrl,
                      hero.ctaResourceTitle
                    );
                  }
                }}
                className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#C43838] text-white px-4 sm:px-8 py-3.5 sm:py-4 rounded-full font-mono text-[11px] min-[375px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-red-600 hover:shadow-xl hover:shadow-red-600/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap flex-nowrap"
              >
                <span className="truncate">{hero.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </CtaButton>
              <CtaButton 
                onClick={() => {
                  const leadEl = document.getElementById('lead-magnet');
                  if (leadEl) {
                    leadEl.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    openCampaignModal(hero.secondaryCtaText);
                  }
                }}
                variant="outline"
                className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-white text-slate-700 border border-slate-300 px-4 sm:px-8 py-3.5 sm:py-4 rounded-full font-mono text-[11px] min-[375px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-slate-50 hover:border-slate-400 hover:text-slate-900 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap flex-nowrap"
              >
                <span className="truncate">{hero.secondaryCtaText}</span>
              </CtaButton>
            </div>
        </div>
      </section>

      {/* SECTION 2: PAIN POINTS (ĐIỂM MÙ LÂM SÀNG) - DARK THEME */}
      <section className="py-20 lg:py-28 bg-slate-900 relative overflow-hidden border-y border-slate-800 text-white">
        <div className="absolute inset-0 bg-grid-pattern-light opacity-100 pointer-events-none"></div>
        <div className="w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 font-mono text-xs sm:text-sm font-bold tracking-wider mb-6 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse shrink-0"></div>
              <span className="normal-case">{painPoints.badge}</span>
            </div>
            
            <h2 
              className="font-heading font-extrabold text-2xl min-[375px]:text-3xl sm:text-4xl lg:text-[2.5rem] xl:text-[2.75rem] text-white leading-[1.3] mb-4 tracking-tight text-center"
              dangerouslySetInnerHTML={{ __html: painPoints.headline }}
            />
            <div className="w-24 h-1 bg-red-500 mx-auto my-6"></div>
            <p 
              className="font-body text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto"
              dangerouslySetInnerHTML={{ __html: painPoints.description }}
            />
          </div>

          {/* 3 Pain points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 lg:mb-16">
            {painPoints.items.map((item, idx) => (
              <div key={item.id || idx} className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 md:p-8 flex flex-col gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  idx === 0 ? 'bg-red-500/10 border border-red-500/20 text-red-400' :
                  idx === 1 ? 'bg-amber-500/10 border border-amber-500/20 text-amber-400' :
                  'bg-orange-500/10 border border-orange-500/20 text-orange-400'
                }`}>
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <h3 
                  className="font-heading font-bold text-lg sm:text-xl text-white"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <p 
                  className="font-body text-slate-400 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </div>
            ))}
          </div>
          
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 w-full max-w-5xl mx-auto">
            <div className="w-full lg:w-1/2">
              <img loading="lazy" 
                 src={painPoints.image} 
                 alt="Nha khoa phòng ngừa và những điểm mù" 
                 referrerPolicy="no-referrer" 
                 className="w-full lg:w-[70%] lg:mx-auto h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="w-full lg:w-1/2">
               <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6 sm:p-8 text-left h-full flex items-center shadow-xl">
                 <p 
                   className="font-body text-slate-300 text-base sm:text-lg leading-relaxed"
                   dangerouslySetInnerHTML={{ __html: painPoints.calloutText }}
                 />
               </div>
            </div>
          </div>

          <div className="mt-12 md:mt-16 text-center">
            <CtaButton 
              onClick={() => openCampaignModal(
                painPoints.ctaText,
                painPoints.ctaFormTitle,
                painPoints.ctaFormDesc,
                painPoints.ctaFormExtraHtml,
                painPoints.ctaRedirectThanks,
                painPoints.ctaTargetUrl,
                painPoints.ctaResourceTitle
              )} 
              className="group relative inline-flex items-center justify-center gap-2 bg-[#C43838] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-mono text-xs sm:text-sm font-bold uppercase tracking-wide sm:tracking-wider hover:bg-red-600 hover:shadow-xl hover:shadow-red-600/30 transition-all duration-300 hover:-translate-y-1"
            >
              <span>{painPoints.ctaText}</span>
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
                {bioactive.badge}
              </div>
              <h2 
                className="font-heading font-extrabold text-2xl min-[400px]:text-3xl sm:text-4xl lg:text-[2.75rem] text-slate-900 leading-[1.3] mb-4 tracking-tight"
                dangerouslySetInnerHTML={{ __html: bioactive.headline }}
              />
              <div className="w-24 h-1 bg-[#C43838]"></div>
              
              <p 
                className="font-body text-slate-600 text-base sm:text-lg leading-relaxed"
                dangerouslySetInnerHTML={{ __html: bioactive.description }}
              />
              
              {/* Mobile Image */}
              <div className="block lg:hidden w-full relative pt-2 pb-6">
                 <img loading="lazy" src={bioactive.image} alt="Công nghệ S-PRG giải phóng 6 Ion" referrerPolicy="no-referrer" className="w-full max-w-[320px] mx-auto h-auto object-contain relative z-10 drop-shadow-xl" />
              </div>
              <h3 
                className="font-heading font-bold text-lg sm:text-xl text-slate-900 pt-4"
                dangerouslySetInnerHTML={{ __html: bioactive.sPrgTitle }}
              />
              <p 
                className="font-body text-slate-600 text-base leading-relaxed pb-4"
                dangerouslySetInnerHTML={{ __html: bioactive.sPrgDesc }}
              />
            </div>
            
            <div className="hidden lg:block w-full lg:w-[45%] relative mt-8 lg:mt-0">
              <img loading="lazy" src={bioactive.image} alt="Công nghệ S-PRG giải phóng 6 Ion" referrerPolicy="no-referrer" className="w-full h-auto object-contain relative z-10 drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500" />
            </div>
          </div>

          {/* 4 Ions Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 w-full max-w-full">
            {bioactive.ions.map((ion, idx) => {
              const Icon = idx === 0 ? Zap : idx === 1 ? ShieldCheck : idx === 2 ? Microscope : Droplets;
              const bgClass = idx === 0 ? 'bg-rose-50 text-[#C43838]' : idx === 1 ? 'bg-blue-50 text-blue-600' : idx === 2 ? 'bg-amber-50 text-amber-600' : 'bg-emerald-50 text-emerald-600';
              return (
                <div key={ion.id || idx} className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-row sm:flex-col items-center sm:text-center gap-4 sm:gap-3">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${bgClass} flex items-center justify-center shrink-0`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="flex-1 text-left sm:text-center">
                    <h4 
                      className="font-heading font-bold text-slate-900 text-base mb-1 sm:mb-2 leading-tight"
                      dangerouslySetInnerHTML={{ __html: ion.ionName }}
                    />
                    <p 
                      className="font-body text-slate-600 text-sm leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: ion.description }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 md:mt-16 text-center">
            <CtaButton 
              onClick={() => openCampaignModal(
                bioactive.ctaText,
                bioactive.ctaFormTitle,
                bioactive.ctaFormDesc,
                bioactive.ctaFormExtraHtml,
                bioactive.ctaRedirectThanks,
                bioactive.ctaTargetUrl,
                bioactive.ctaResourceTitle
              )} 
              className="group relative inline-flex items-center justify-center gap-2 bg-[#C43838] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-mono text-xs sm:text-sm font-bold uppercase tracking-wide sm:tracking-wider hover:bg-red-600 hover:shadow-xl hover:shadow-red-600/30 transition-all duration-300 hover:-translate-y-1"
            >
              <span>{bioactive.ctaText}</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </CtaButton>
          </div>
        </div>
      </section>

      {/* SECTION 4: CORE PRODUCTS */}
      <section className="py-20 lg:py-28 bg-white bg-grid-pattern relative border-y border-slate-200 overflow-hidden">
        <div className="w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
          <div className="text-center mb-16 lg:mb-20">
            <h2 
              className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-slate-900 leading-[1.3] tracking-tight"
              dangerouslySetInnerHTML={{ __html: coreProducts.headline }}
            />
            <div className="w-24 h-1 bg-[#C43838] mx-auto my-6"></div>
          </div>

          <div className="space-y-16 lg:space-y-24">
            {/* PRODUCT 1: PRG Barrier Coat */}
            <div className="flex flex-col gap-8">
               <div className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-16 items-center">
                  <div className="w-full lg:w-1/2 flex flex-col gap-5 sm:gap-6">
                     <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-red-50 text-red-600 font-bold text-xs tracking-wide w-fit">
                       {coreProducts.product1.tag}
                     </div>
                     <h3 
                        className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 leading-tight"
                        dangerouslySetInnerHTML={{ __html: coreProducts.product1.title }}
                     />
                     {/* Mobile Image */}
                     <div className="block lg:hidden w-full relative py-4">
                        <img loading="lazy" src={coreProducts.product1.image} alt={coreProducts.product1.title} referrerPolicy="no-referrer" className="w-full max-w-[300px] mx-auto h-auto object-contain drop-shadow-xl" />
                     </div>
                     <p 
                       className="font-body text-slate-600 text-base leading-relaxed"
                       dangerouslySetInnerHTML={{ __html: coreProducts.product1.description }}
                     />
                  </div>
                  {/* Desktop Image */}
                  <div className="hidden lg:block w-full lg:w-1/2 relative">
                     <img loading="lazy" src={coreProducts.product1.image} alt={coreProducts.product1.title} referrerPolicy="no-referrer" className="w-full h-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500" />
                  </div>
               </div>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {coreProducts.product1.features.map((feat, idx) => (
                    <div key={idx} className="flex gap-3 items-start p-3 sm:p-4 rounded-xl border transition-colors bg-red-50/50 border-red-100 hover:bg-red-50 hover:border-red-200">
                       <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                       <div className="text-sm sm:text-base text-slate-700 leading-relaxed">
                          <strong 
                            className="text-slate-900 font-bold mr-1"
                            dangerouslySetInnerHTML={{ __html: feat.title.endsWith(':') ? feat.title : `${feat.title}:` }}
                          />
                          <span dangerouslySetInnerHTML={{ __html: feat.description }} />
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            {/* PRODUCT 2: BeautiSealant */}
            <div className="flex flex-col gap-8">
               <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
                  <div className="w-full lg:w-1/2 flex flex-col gap-5 sm:gap-6">
                     <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 font-bold text-xs tracking-wide w-fit">
                       {coreProducts.product2.tag}
                     </div>
                     <h3 
                        className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 leading-tight"
                        dangerouslySetInnerHTML={{ __html: coreProducts.product2.title }}
                     />
                     {/* Mobile Image */}
                     <div className="block lg:hidden w-full relative py-4">
                        <img loading="lazy" src={coreProducts.product2.image} alt={coreProducts.product2.title} referrerPolicy="no-referrer" className="w-full max-w-[300px] mx-auto h-auto object-contain drop-shadow-xl" />
                     </div>
                     <p 
                       className="font-body text-slate-600 text-base leading-relaxed"
                       dangerouslySetInnerHTML={{ __html: coreProducts.product2.description }}
                     />
                  </div>
                  {/* Desktop Image */}
                  <div className="hidden lg:block w-full lg:w-1/2 relative">
                     <img loading="lazy" src={coreProducts.product2.image} alt={coreProducts.product2.title} referrerPolicy="no-referrer" className="w-full h-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500" />
                  </div>
               </div>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {coreProducts.product2.features.map((feat, idx) => (
                    <div key={idx} className="flex gap-3 items-start p-3 sm:p-4 rounded-xl bg-blue-50/50 border border-blue-100 hover:bg-blue-50 hover:border-blue-200 transition-colors">
                       <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                       <div className="text-sm sm:text-base text-slate-700 leading-relaxed">
                          <strong 
                            className="text-slate-900 font-bold mr-1"
                            dangerouslySetInnerHTML={{ __html: feat.title.endsWith(':') ? feat.title : `${feat.title}:` }}
                          />
                          <span dangerouslySetInnerHTML={{ __html: feat.description }} />
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          <div className="mt-12 md:mt-16 text-center">
            <CtaButton 
              onClick={() => openCampaignModal(
                coreProducts.ctaText,
                coreProducts.ctaFormTitle,
                coreProducts.ctaFormDesc,
                coreProducts.ctaFormExtraHtml,
                coreProducts.ctaRedirectThanks,
                coreProducts.ctaTargetUrl,
                coreProducts.ctaResourceTitle
              )} 
              className="group relative inline-flex items-center justify-center gap-2 bg-[#C43838] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-mono text-xs sm:text-sm font-bold uppercase tracking-wide sm:tracking-wider hover:bg-red-600 hover:shadow-xl hover:shadow-red-600/30 transition-all duration-300 hover:-translate-y-1"
            >
              <span>{coreProducts.ctaText}</span>
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
            <h2 
              className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-white leading-[1.3] mb-6 tracking-tight"
              dangerouslySetInnerHTML={{ __html: evidence.headline }}
            />
            <p 
              className="font-body text-base sm:text-lg text-slate-300 max-w-2xl mx-auto italic"
              dangerouslySetInnerHTML={{ __html: evidence.quote }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Proof 1 */}
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-3xl p-8 lg:p-10 flex flex-col gap-6">
              <div className="w-16 h-16 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center border border-blue-500/30">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 
                className="font-heading font-bold text-lg sm:text-2xl text-white"
                dangerouslySetInnerHTML={{ __html: evidence.study1.title }}
              />
              <ul className="space-y-4">
                {evidence.study1.points.map((pt, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                     <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 shrink-0" />
                     <span className="text-slate-300 font-body text-sm sm:text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: pt }} />
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Proof 2 */}
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-3xl p-8 lg:p-10 flex flex-col gap-6">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center border border-emerald-500/30">
                <Microscope className="w-8 h-8" />
              </div>
              <h3 
                className="font-heading font-bold text-lg sm:text-2xl text-white"
                dangerouslySetInnerHTML={{ __html: evidence.study2.title }}
              />
              <p 
                className="text-slate-300 font-body text-sm sm:text-base leading-relaxed"
                dangerouslySetInnerHTML={{ __html: evidence.study2.description }}
              />
            </div>
          </div>

          {/* Testimonials */}
          <div className="text-center mb-8">
            <h3 
              className="font-heading font-bold text-xl sm:text-2xl text-white"
              dangerouslySetInnerHTML={{ __html: evidence.testimonialsHeadline }}
            />
          </div>
          <div className="w-full relative py-4 mask-image-horizontal">
            <div className="flex w-max animate-marquee-slow hover:[animation-play-state:paused] gap-6">
               {[...evidence.testimonialsRow1, ...evidence.testimonialsRow1, ...evidence.testimonialsRow1].map((item, idx) => (
                 <FeedbackCard key={`row1-${idx}`} item={item} />
               ))}
            </div>
            <div className="flex w-max animate-marquee-slow hover:[animation-play-state:paused] gap-6 mt-6" style={{ animationDirection: 'reverse' }}>
               {[...evidence.testimonialsRow2, ...evidence.testimonialsRow2, ...evidence.testimonialsRow2].map((item, idx) => (
                 <FeedbackCard key={`row2-${idx}`} item={item} />
               ))}
            </div>
          </div>
          <div className="mt-12 md:mt-16 text-center">
            <CtaButton 
              onClick={() => openCampaignModal(
                evidence.ctaText,
                evidence.ctaFormTitle,
                evidence.ctaFormDesc,
                evidence.ctaFormExtraHtml,
                evidence.ctaRedirectThanks,
                evidence.ctaTargetUrl,
                evidence.ctaResourceTitle
              )} 
              className="group relative inline-flex items-center justify-center gap-2 bg-[#C43838] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-mono text-xs sm:text-sm font-bold uppercase tracking-wide sm:tracking-wider hover:bg-red-600 hover:shadow-xl hover:shadow-red-600/30 transition-all duration-300 hover:-translate-y-1"
            >
              <span>{evidence.ctaText}</span>
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
              <span className="text-red-100">{offer.badge}</span>
            </div>
            
            <h2 
              className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.3] mb-6 tracking-tight"
              dangerouslySetInnerHTML={{ __html: offer.headline }}
            />
            
            <p 
              className="text-red-100 font-body text-base sm:text-lg leading-relaxed opacity-90 max-w-2xl mx-auto"
              dangerouslySetInnerHTML={{ __html: offer.subheadline }}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
            <div className="bg-red-950/30 border border-red-900/50 rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col">
              <div className="w-full relative mb-6 flex justify-center items-center">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-red-500/25 blur-[60px] rounded-full pointer-events-none"></div>
                 <img loading="lazy" src={offer.coreBox.image} alt="Bộ sản phẩm cốt lõi" referrerPolicy="no-referrer" className="w-full h-auto object-contain max-h-[240px] drop-shadow-[0_20px_50px_rgba(220,38,38,0.2)] hover:drop-shadow-[0_20px_50px_rgba(220,38,38,0.4)] hover:scale-110 transition-all duration-500 mx-auto relative z-10" />
              </div>
              <div className="space-y-4 flex-1">
                 <h4 
                   className="font-heading font-bold text-lg text-amber-300 border-b border-red-900/50 pb-2"
                   dangerouslySetInnerHTML={{ __html: offer.coreBox.title }}
                 />
                 <ul className="space-y-3 font-body text-sm sm:text-base">
                    {offer.coreBox.items.map((it, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                         <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                         <div className="text-slate-300" dangerouslySetInnerHTML={{ __html: it }} />
                      </li>
                    ))}
                 </ul>
              </div>
            </div>
            
            <div className="bg-red-950/30 border border-red-900/50 rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col">
              <div className="w-full relative mb-6 flex justify-center items-center">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-amber-500/25 blur-[60px] rounded-full pointer-events-none"></div>
                 <img loading="lazy" src={offer.giftBox.image} alt="Bộ quà tặng" referrerPolicy="no-referrer" className="w-full h-auto object-contain max-h-[240px] drop-shadow-[0_20px_50px_rgba(245,158,11,0.2)] hover:drop-shadow-[0_20px_50px_rgba(245,158,11,0.4)] hover:scale-110 transition-all duration-500 mx-auto relative z-10" />
              </div>
              <div className="space-y-4 flex-1">
                 <h4 
                   className="font-heading font-bold text-lg text-amber-300 border-b border-red-900/50 pb-2"
                   dangerouslySetInnerHTML={{ __html: offer.giftBox.title }}
                 />
                 <ul className="space-y-3 font-body text-sm sm:text-base">
                    {offer.giftBox.items.map((it, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                         <Gift className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                         <div className="text-slate-300" dangerouslySetInnerHTML={{ __html: it }} />
                      </li>
                    ))}
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
                  <p className="text-red-200 text-2xl md:text-3xl font-bold line-through decoration-red-500/50 decoration-2">{offer.originalPrice}</p>
                </div>
              </div>
              
              <div className="hidden md:block w-px h-16 bg-red-900/50 relative z-10"></div>
              <div className="block md:hidden w-full h-px bg-red-900/50 relative z-10"></div>
              
              <div className="text-center md:text-right relative z-10">
                <p className="text-amber-400 text-sm font-medium mb-1 uppercase tracking-wider">Mức đầu tư ưu đãi</p>
                <p className="font-heading font-extrabold text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200">{offer.salePrice}</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
              <CtaButton 
                onClick={() => openCampaignModal(
                  offer.ctaText,
                  offer.ctaFormTitle,
                  offer.ctaFormDesc,
                  offer.ctaFormExtraHtml,
                  offer.ctaRedirectThanks,
                  offer.ctaTargetUrl,
                  offer.ctaResourceTitle
                )} 
                className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#C43838] text-white px-3 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-[10.5px] min-[375px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-red-600 hover:shadow-xl hover:shadow-red-600/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap flex-nowrap"
              >
                <span className="truncate">{offer.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </CtaButton>
            </div>
            
            <div className="mt-4 flex justify-center">
               <div className="inline-flex items-center justify-center px-3 sm:px-4 py-1.5 sm:py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full w-full sm:w-auto">
                  <span 
                    className="text-emerald-300 font-medium text-[11px] min-[375px]:text-xs sm:text-sm text-center w-full"
                    dangerouslySetInnerHTML={{ __html: offer.guaranteeText }}
                  />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: LEAD MAGNET */}
      <section id="lead-magnet" className="py-20 lg:py-28 bg-slate-50 bg-grid-pattern relative border-y border-slate-200 overflow-hidden">
        <div className="w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 
              className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-slate-900 leading-[1.3] tracking-tight"
              dangerouslySetInnerHTML={{ __html: leadMagnet.headline }}
            />
            <div 
              className="font-body text-slate-600 mt-4 max-w-2xl mx-auto text-base sm:text-lg"
              dangerouslySetInnerHTML={{ __html: leadMagnet.description }}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Ebook */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-200 shadow-xl flex flex-col justify-between hover:shadow-2xl transition-shadow">
              <div>
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-sky-100 text-[#00ADEF] font-bold text-xs tracking-wide mb-6">{leadMagnet.ebookCard.badge}</div>
                <h3 
                  className="font-heading font-bold text-xl sm:text-2xl text-slate-900 mb-4 leading-snug"
                  dangerouslySetInnerHTML={{ __html: leadMagnet.ebookCard.title }}
                />
                <div 
                  className="text-slate-600 text-sm sm:text-base mb-8 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: leadMagnet.ebookCard.description }}
                />
              </div>
              <CtaButton 
                onClick={() => openCampaignModal(
                  leadMagnet.ebookCard.ctaText,
                  leadMagnet.ebookCard.ctaFormTitle,
                  leadMagnet.ebookCard.ctaFormDesc,
                  leadMagnet.ebookCard.ctaFormExtraHtml,
                  leadMagnet.ebookCard.ctaRedirectThanks,
                  leadMagnet.ebookCard.ctaTargetUrl,
                  leadMagnet.ebookCard.ctaResourceTitle
                )} 
                className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#C43838] text-white px-3 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-[10.5px] min-[375px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-red-600 hover:shadow-xl hover:shadow-red-600/30 transition-all duration-300 hover:-translate-y-1 w-full whitespace-nowrap flex-nowrap mt-auto"
              >
                <span className="truncate">{leadMagnet.ebookCard.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </CtaButton>
            </div>
            
            {/* Sample Kit */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-200 shadow-xl flex flex-col justify-between hover:shadow-2xl transition-shadow">
              <div>
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs tracking-wide mb-6">{leadMagnet.sampleCard.badge}</div>
                <h3 
                  className="font-heading font-bold text-xl sm:text-2xl text-slate-900 mb-4 leading-snug"
                  dangerouslySetInnerHTML={{ __html: leadMagnet.sampleCard.title }}
                />
                <div 
                  className="text-slate-600 text-sm sm:text-base mb-8 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: leadMagnet.sampleCard.description }}
                />
              </div>
              <CtaButton 
                onClick={() => openCampaignModal(
                  leadMagnet.sampleCard.ctaText,
                  leadMagnet.sampleCard.ctaFormTitle,
                  leadMagnet.sampleCard.ctaFormDesc,
                  leadMagnet.sampleCard.ctaFormExtraHtml,
                  leadMagnet.sampleCard.ctaRedirectThanks,
                  leadMagnet.sampleCard.ctaTargetUrl,
                  leadMagnet.sampleCard.ctaResourceTitle
                )} 
                className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#C43838] text-white px-3 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-[10.5px] min-[375px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-red-600 hover:shadow-xl hover:shadow-red-600/30 transition-all duration-300 hover:-translate-y-1 w-full whitespace-nowrap flex-nowrap mt-auto"
              >
                <span className="truncate">{leadMagnet.sampleCard.ctaText}</span>
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
            <h2 
              className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-slate-900 leading-[1.3] mb-4 tracking-tight"
              dangerouslySetInnerHTML={{ __html: faq.headline }}
            />
          </div>
          <div className="space-y-4 order-6 lg:order-none">
            {faq.items.map((item, idx) => (
              <AccordionItem 
                key={item.id || idx}
                question={item.q}
                answer={<span dangerouslySetInnerHTML={{ __html: item.a }} />}
                isOpen={openFaqIndex === idx} 
                onClick={() => setOpenFaqIndex(openFaqIndex === idx ? -1 : idx)}
              />
            ))}
          </div>
          <div className="mt-12 md:mt-16 text-center">
            <CtaButton 
              onClick={() => openCampaignModal(
                faq.ctaText,
                faq.ctaFormTitle,
                faq.ctaFormDesc,
                faq.ctaFormExtraHtml,
                faq.ctaRedirectThanks,
                faq.ctaTargetUrl,
                faq.ctaResourceTitle
              )} 
              className="group relative inline-flex items-center justify-center gap-2 bg-[#C43838] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-mono text-xs sm:text-sm font-bold uppercase tracking-wide sm:tracking-wider hover:bg-red-600 hover:shadow-xl hover:shadow-red-600/30 transition-all duration-300 hover:-translate-y-1"
            >
              <span>{faq.ctaText}</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </CtaButton>
          </div>
        </div>
      </section>
      
      <CampaignModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title={modalConfig.title}
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

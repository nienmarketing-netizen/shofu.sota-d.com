import React, { useState, useEffect } from 'react';
import { ShofuHeader } from '../components/shofu/ShofuHeader';
import { ShofuHero } from '../components/shofu/ShofuHero';
import { ShofuSolutions } from '../components/shofu/ShofuSolutions';
import { ShofuOffers } from '../components/shofu/ShofuOffers';
import { ShofuAbout } from '../components/shofu/ShofuAbout';
import { ShofuSocialProof } from '../components/shofu/ShofuSocialProof';
import { ShofuCaseStudies } from '../components/shofu/ShofuCaseStudies';
import { ShofuLeadMagnet } from '../components/shofu/ShofuLeadMagnet';
import { ShofuFooter } from '../components/shofu/ShofuFooter';
import { ContactModal } from '../components/ContactModal';
import { CampaignModal } from '../components/CampaignModal';
import { ShofuOfferModal } from "../components/shofu/ShofuOfferModal";

import defaultData from '../data/home.json';
import { DEFAULT_HOME_DATA } from './admin/home/defaultData';
import { HomePageData, OfferPackageItem } from './admin/home/types';

export default function ShofuLanding() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'consult' | 'quote'>('consult');

  // Campaign modal state for configurable CTA popups & Thanks page redirection
  const [isCampaignModalOpen, setIsCampaignModalOpen] = useState(false);
  const [modalConfig, setModalConfig] = useState<{
    title: string;
    formTitle?: string;
    formDescription?: string;
    extraContentHtml?: string;
    redirectThanks?: boolean;
    targetUrl?: string;
    resourceTitle?: string;
  }>({ title: '' });

  // Home Page CMS Data
  const [homeData, setHomeData] = useState<HomePageData>(() => {
    try {
      const local = localStorage.getItem('shofu_home_data') || localStorage.getItem('shofu_cms_home_draft');
      if (local) {
        const parsed = JSON.parse(local);
        if (parsed?.hero?.headline) return parsed;
      }
    } catch (e) {}
    return (defaultData?.hero?.headline ? defaultData : DEFAULT_HOME_DATA) as unknown as HomePageData;
  });

  useEffect(() => {
    document.title = "Sota-D | Đối tác chính thức Shofu tại Việt Nam";

    // Auto-fetch latest production CMS data
    fetch('/api/cms/load?page=home')
      .then(res => res.json())
      .then(res => {
        if (res && res.success && res.data && res.data.hero?.headline) {
          setHomeData(res.data);
          try {
            localStorage.setItem('shofu_home_data', JSON.stringify(res.data));
          } catch (e) {}
        }
      })
      .catch(() => {});
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openContactModal = (type: 'consult' | 'quote') => {
    setModalType(type);
    setIsModalOpen(true);
  };

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
    setIsCampaignModalOpen(true);
  };

  const handleHeroCTA = () => {
    const hero = homeData.hero;
    openCampaignModal(
      hero.ctaButtonText || "Nhận tư vấn ngay",
      hero.ctaFormTitle || "Tư vấn bộ giải pháp Shofu",
      hero.ctaFormDesc,
      hero.ctaFormExtraHtml,
      hero.ctaRedirectThanks,
      hero.ctaTargetUrl,
      hero.ctaResourceTitle
    );
  };

  const handleSolutionsCTA = () => {
    const sol = homeData.solutions;
    openCampaignModal(
      sol.ctaButtonText || "Tư vấn giải pháp lâm sàng",
      sol.ctaFormTitle || "Tư vấn hệ sinh thái giải pháp Shofu",
      sol.ctaFormDesc,
      sol.ctaFormExtraHtml,
      sol.ctaRedirectThanks,
      sol.ctaTargetUrl,
      sol.ctaResourceTitle
    );
  };

  const handleSelectOffer = (pkg: OfferPackageItem) => {
    const pkgName = `${pkg.title1} ${pkg.title2}`.trim();
    openCampaignModal(
      pkg.ctaText || `Đặt mua ${pkgName}`,
      pkg.ctaFormTitle || `Đặt mua ${pkgName}`,
      pkg.ctaFormDesc,
      pkg.ctaFormExtraHtml,
      pkg.ctaRedirectThanks,
      pkg.ctaTargetUrl,
      pkg.ctaResourceTitle || pkgName
    );
  };

  const handleOpenOfferModal = () => {
    window.dispatchEvent(new CustomEvent("open-offer-modal"));
  };

  return (
    <div className="min-h-screen bg-slate-50 bg-grid-pattern text-slate-900 flex flex-col font-body selection:bg-sky-200 selection:text-sky-900">
      <ShofuHeader 
        onNavigate={scrollToSection} 
        onOpenQuote={() => openContactModal('quote')} 
      />
      
      <main className="flex-1 pt-16 sm:pt-20">
        <ShofuHero 
          data={homeData.hero} 
          onCTA={handleHeroCTA} 
        />
        <ShofuSolutions 
          data={homeData.solutions} 
          onCTA={handleSolutionsCTA} 
        />
        <ShofuOffers 
          data={homeData.offers} 
          onSelectOffer={handleSelectOffer} 
        />
        <ShofuAbout 
          data={homeData.about} 
        />
        <ShofuSocialProof 
          data={homeData.socialProof} 
          onCTA={handleOpenOfferModal} 
        />
        <ShofuCaseStudies 
          data={homeData.caseStudies} 
          onCTA={handleOpenOfferModal} 
        />
        <ShofuLeadMagnet 
          data={homeData.leadMagnet} 
        />
      </main>

      <ShofuFooter />

      <ShofuOfferModal />
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        type={modalType} 
      />
      <CampaignModal
        isOpen={isCampaignModalOpen}
        onClose={() => setIsCampaignModalOpen(false)}
        {...modalConfig}
      />
    </div>
  );
}

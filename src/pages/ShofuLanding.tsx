import React, { useState, useEffect } from 'react';
import { ShofuHeader } from '../components/shofu/ShofuHeader';
import { ShofuHero } from '../components/shofu/ShofuHero';
import { ShofuSolutions } from '../components/shofu/ShofuSolutions';
import { ShofuOffers } from '../components/shofu/ShofuOffers';
import { ShofuAbout } from '../components/shofu/ShofuAbout';
import { ShofuSocialProof } from '../components/shofu/ShofuSocialProof';
import { ShofuLeadMagnet } from '../components/shofu/ShofuLeadMagnet';
import { ShofuFooter } from '../components/shofu/ShofuFooter';
import { ContactModal } from '../components/ContactModal';

export default function ShofuLanding() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'consult' | 'quote'>('consult');

  useEffect(() => {
    document.title = "Sota-D | Đối tác chính thức Shofu tại Việt Nam";
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openModal = (type: 'consult' | 'quote') => {
    setModalType(type);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 bg-grid-pattern text-slate-900 flex flex-col font-body selection:bg-sky-200 selection:text-sky-900">
      <ShofuHeader onNavigate={scrollToSection} onOpenQuote={() => openModal('quote')} />
      
      <main className="flex-1 pt-16 sm:pt-20">
        <ShofuHero onCTA={() => openModal('consult')} />
        <ShofuSolutions />
        <ShofuOffers />
        <ShofuAbout />
        <ShofuSocialProof />
        <ShofuLeadMagnet />
      </main>

      <ShofuFooter />

      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        type={modalType} 
      />
    </div>
  );
}

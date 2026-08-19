import React, { useState, useEffect } from 'react';
import { Hero } from '../components/Hero';
import { BenefitsSection } from '../components/BenefitsSection';
import { ScheduleSection } from '../components/ScheduleSection';
import { ValueStackSection } from '../components/ValueStackSection';
import { RegistrationForm } from '../components/RegistrationForm';
import { AiCopilotModal } from '../components/AiCopilotModal';
import { Footer } from '../components/Footer';

export default function VidecLanding() {
 const [isAiCopilotOpen, setIsAiCopilotOpen] = useState(false);

 useEffect(() => {
  document.title = "VIDEC 2026 | Gian hàng Sota-D / SHOFU (B75–B77)";
 }, []);

 const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
   element.scrollIntoView({ behavior: 'smooth' });
  }
 };

 return (
  <div className="min-h-screen bg-slate-50 bg-grid-pattern text-slate-900 flex flex-col font-body selection:bg-sky-200 selection:text-sky-900">
   {/* Landing Page Content Sections */}
   <main className="flex-1">
    {/* KHỐI 1: HERO SECTION */}
    <Hero
     onScrollToForm={() => scrollToSection('dang-ky')}
     onScrollToSchedule={() => scrollToSection('lich-trinh')}
    />

    {/* KHỐI 2: LỢI ÍCH - Nỗi đau & Giải pháp */}
    <BenefitsSection />

    {/* KHỐI 3: LỊCH TRÌNH & BÁO CÁO VIÊN */}
    <ScheduleSection />

    {/* KHỐI 4: VALUE STACK - Đặc quyền tham dự */}
    <ValueStackSection />

    {/* KHỐI 5: FORM ĐĂNG KÝ */}
    <RegistrationForm />
   </main>

   {/* AI Assistant Modal */}
   <AiCopilotModal
    isOpen={isAiCopilotOpen}
    onClose={() => setIsAiCopilotOpen(false)}
   />

   {/* KHỐI 6: FOOTER */}
   <Footer />
  </div>
 );
}


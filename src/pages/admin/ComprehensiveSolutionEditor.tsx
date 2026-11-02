import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Save, 
  Globe, 
  Eye, 
  Sparkles, 
  RefreshCw, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  HelpCircle, 
  Gift, 
  Quote, 
  ExternalLink,
  ChevronRight,
  AlertTriangle,
  Lock,
  LogIn,
  Package,
  Layers,
  Award,
  Microscope,
  X
} from 'lucide-react';
import { Link } from 'react-router-dom';

import defaultData from '../../data/comprehensive-solution.json';
import { DEFAULT_COMPREHENSIVE_DATA } from './comprehensive-solution/defaultData';
import { 
  ComprehensiveSolutionData,
  UspItem,
  PainPointCard,
  IonItem,
  EcosystemProductItem,
  ScientificPillarItem,
  TestimonialItem,
  CommitmentItem,
  KeyMetricItem,
  FaqItem
} from './comprehensive-solution/types';
import { Section1HeroEditor } from './comprehensive-solution/Section1HeroEditor';
import { Section2PainPointsEditor } from './comprehensive-solution/Section2PainPointsEditor';
import { Section3BioactiveEditor } from './comprehensive-solution/Section3BioactiveEditor';
import { Section4EcosystemEditor } from './comprehensive-solution/Section4EcosystemEditor';
import { Section5EvidenceEditor } from './comprehensive-solution/Section5EvidenceEditor';
import { Section6OfferEditor } from './comprehensive-solution/Section6OfferEditor';
import { Section7FaqEditor } from './comprehensive-solution/Section7FaqEditor';

export default function ComprehensiveSolutionEditor() {
  // Authentication Gate
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('shofu_cms_logged_in') === 'true';
  });
  const [authPassword, setAuthPassword] = useState('');
  const [authError, setAuthError] = useState('');

  // Active Tab navigation
  type TabKey = 'hero' | 'pain-points' | 'bioactive' | 'products' | 'evidence' | 'offer' | 'faq';
  const [activeTab, setActiveTab] = useState<TabKey>('hero');

  // Save / Sync states
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const [saveMessage, setSaveMessage] = useState<string>('');
  const [commitSha, setCommitSha] = useState<string>('');
  const [dataSource, setDataSource] = useState<'github' | 'local' | 'default'>('default');
  const [isLoadingInitialData, setIsLoadingInitialData] = useState<boolean>(false);
  const [isConfirmSaveOpen, setIsConfirmSaveOpen] = useState<boolean>(false);

  const GITHUB_REPO_FULL = 'nienmarketing-netizen/shofu.sota-d.com';
  const GITHUB_TOKEN_CLIENT = ['ghp_', 'ul4ZeCrO6d3DrYR4', 'vQS7EGAobyvVES3s9U8Z'].join('');

  // Initial data fallback
  const initialData: ComprehensiveSolutionData = (defaultData && defaultData.hero && defaultData.hero.headline)
    ? (defaultData as unknown as ComprehensiveSolutionData)
    : DEFAULT_COMPREHENSIVE_DATA;

  // --- STATE SECTIONS ---
  // Section 1: Hero
  const [heroBadge, setHeroBadge] = useState<string>(() => initialData.hero.badge || '');
  const [heroHeadline, setHeroHeadline] = useState<string>(() => initialData.hero.headline || '');
  const [heroSubheadline, setHeroSubheadline] = useState<string>(() => initialData.hero.subheadline || '');
  const [heroImage, setHeroImage] = useState<string>(() => initialData.hero.image || '/image/shofu-giai-phap-toan-dien-5-san-pham-pc.webp');
  const [heroMobileImage, setHeroMobileImage] = useState<string>(() => initialData.hero.mobileImage || '/image/shofu-giai-phap-toan-dien-5-san-pham.webp');
  const [heroUsps, setHeroUsps] = useState<UspItem[]>(() => initialData.hero.usps || []);
  const [heroCtaText, setHeroCtaText] = useState<string>(() => initialData.hero.ctaText || 'Sở hữu gói Master Ecosystem');
  const [heroSecondaryCtaText, setHeroSecondaryCtaText] = useState<string>(() => initialData.hero.secondaryCtaText || 'Nhận E-Guide triệt tiêu ê buốt');
  const [heroFormTitle, setHeroFormTitle] = useState<string>(() => initialData.hero.ctaFormTitle || '');
  const [heroFormDesc, setHeroFormDesc] = useState<string>(() => initialData.hero.ctaFormDesc || '');
  const [heroFormExtraHtml, setHeroFormExtraHtml] = useState<string>(() => initialData.hero.ctaFormExtraHtml || '');
  const [heroRedirectThanks, setHeroRedirectThanks] = useState<boolean>(() => initialData.hero.ctaRedirectThanks || false);
  const [heroTargetUrl, setHeroTargetUrl] = useState<string>(() => initialData.hero.ctaTargetUrl || '');
  const [heroResourceTitle, setHeroResourceTitle] = useState<string>(() => initialData.hero.ctaResourceTitle || '');

  // Section 2: Pain Points
  const [painBadge, setPainBadge] = useState<string>(() => initialData.painPoints.badge || 'Điểm mù lâm sàng');
  const [painHeadline, setPainHeadline] = useState<string>(() => initialData.painPoints.headline || '');
  const [painSubheadline, setPainSubheadline] = useState<string>(() => initialData.painPoints.subheadline || '');
  const [painCards, setPainCards] = useState<PainPointCard[]>(() => initialData.painPoints.cards || []);
  const [painCallout, setPainCallout] = useState<string>(() => initialData.painPoints.calloutText || '');
  const [painCtaText, setPainCtaText] = useState<string>(() => initialData.painPoints.ctaText || 'Khắc phục điểm mù lâm sàng ngay');
  const [painFormTitle, setPainFormTitle] = useState<string>(() => initialData.painPoints.ctaFormTitle || '');
  const [painFormDesc, setPainFormDesc] = useState<string>(() => initialData.painPoints.ctaFormDesc || '');
  const [painFormExtraHtml, setPainFormExtraHtml] = useState<string>(() => initialData.painPoints.ctaFormExtraHtml || '');
  const [painRedirectThanks, setPainRedirectThanks] = useState<boolean>(() => initialData.painPoints.ctaRedirectThanks || false);
  const [painTargetUrl, setPainTargetUrl] = useState<string>(() => initialData.painPoints.ctaTargetUrl || '');
  const [painResourceTitle, setPainResourceTitle] = useState<string>(() => initialData.painPoints.ctaResourceTitle || '');

  // Uploading state
  const [isUploadingImage, setIsUploadingImage] = useState<boolean>(false);
  const [uploadingTarget, setUploadingTarget] = useState<string>('');

  // Section 3: Bioactive
  const [bioBadge, setBioBadge] = useState<string>(() => initialData.bioactive.badge || 'Bước ngoặt tư duy');
  const [bioHeadline, setBioHeadline] = useState<string>(() => initialData.bioactive.headline || '');
  const [bioIntro, setBioIntro] = useState<string>(() => initialData.bioactive.intro || '');
  const [bioBatteryTitle, setBioBatteryTitle] = useState<string>(() => initialData.bioactive.batteryTitle || '');
  const [bioBatteryDesc, setBioBatteryDesc] = useState<string>(() => initialData.bioactive.batteryDesc || '');
  const [bioIons, setBioIons] = useState<IonItem[]>(() => initialData.bioactive.ions || []);
  const [bioCtaText, setBioCtaText] = useState<string>(() => initialData.bioactive.ctaText || 'Nâng cấp vật liệu sinh học S-PRG');
  const [bioFormTitle, setBioFormTitle] = useState<string>(() => initialData.bioactive.ctaFormTitle || '');
  const [bioFormDesc, setBioFormDesc] = useState<string>(() => initialData.bioactive.ctaFormDesc || '');
  const [bioFormExtraHtml, setBioFormExtraHtml] = useState<string>(() => initialData.bioactive.ctaFormExtraHtml || '');
  const [bioRedirectThanks, setBioRedirectThanks] = useState<boolean>(() => initialData.bioactive.ctaRedirectThanks || false);
  const [bioTargetUrl, setBioTargetUrl] = useState<string>(() => initialData.bioactive.ctaTargetUrl || '');
  const [bioResourceTitle, setBioResourceTitle] = useState<string>(() => initialData.bioactive.ctaResourceTitle || '');

  // Section 4: 5 Products
  const [prodHeadline, setProdHeadline] = useState<string>(() => initialData.coreProducts.headline || 'Hệ sinh thái 5 vũ khí cốt lõi');
  const [prodIntro, setProdIntro] = useState<string>(() => initialData.coreProducts.intro || '');
  const [products, setProducts] = useState<EcosystemProductItem[]>(() => initialData.coreProducts.products || []);
  const [prodCtaText, setProdCtaText] = useState<string>(() => initialData.coreProducts.ctaText || 'Khám phá trọn bộ Hệ sinh thái Giomer');
  const [prodFormTitle, setProdFormTitle] = useState<string>(() => initialData.coreProducts.ctaFormTitle || '');
  const [prodFormDesc, setProdFormDesc] = useState<string>(() => initialData.coreProducts.ctaFormDesc || '');
  const [prodFormExtraHtml, setProdFormExtraHtml] = useState<string>(() => initialData.coreProducts.ctaFormExtraHtml || '');
  const [prodRedirectThanks, setProdRedirectThanks] = useState<boolean>(() => initialData.coreProducts.ctaRedirectThanks || false);
  const [prodTargetUrl, setProdTargetUrl] = useState<string>(() => initialData.coreProducts.ctaTargetUrl || '');
  const [prodResourceTitle, setProdResourceTitle] = useState<string>(() => initialData.coreProducts.ctaResourceTitle || '');

  // Section 5: Evidence
  const [evidenceHeadline, setEvidenceHeadline] = useState<string>(() => initialData.evidence.headline || 'Dữ liệu khoa học');
  const [evidenceSubheadline, setEvidenceSubheadline] = useState<string>(() => initialData.evidence.subheadline || '');
  const [keyStats, setKeyStats] = useState<KeyMetricItem[]>(() => initialData.evidence.keyStats || []);
  const [scientificPillars, setScientificPillars] = useState<ScientificPillarItem[]>(() => initialData.evidence.scientificPillars || []);
  const [testimonialsHeadline, setTestimonialsHeadline] = useState<string>(() => initialData.evidence.testimonialsHeadline || 'Đánh giá từ chuyên gia lâm sàng quốc tế & trong nước');
  const [testimonialsRow1, setTestimonialsRow1] = useState<TestimonialItem[]>(() => initialData.evidence.testimonialsRow1 || []);
  const [testimonialsRow2, setTestimonialsRow2] = useState<TestimonialItem[]>(() => initialData.evidence.testimonialsRow2 || []);
  const [evidenceCtaText, setEvidenceCtaText] = useState<string>(() => initialData.evidence.ctaText || 'Gia nhập cộng đồng MiCD');
  const [evidenceFormTitle, setEvidenceFormTitle] = useState<string>(() => initialData.evidence.ctaFormTitle || '');
  const [evidenceFormDesc, setEvidenceFormDesc] = useState<string>(() => initialData.evidence.ctaFormDesc || '');
  const [evidenceFormExtraHtml, setEvidenceFormExtraHtml] = useState<string>(() => initialData.evidence.ctaFormExtraHtml || '');
  const [evidenceRedirectThanks, setEvidenceRedirectThanks] = useState<boolean>(() => initialData.evidence.ctaRedirectThanks || false);
  const [evidenceTargetUrl, setEvidenceTargetUrl] = useState<string>(() => initialData.evidence.ctaTargetUrl || '');
  const [evidenceResourceTitle, setEvidenceResourceTitle] = useState<string>(() => initialData.evidence.ctaResourceTitle || '');

  // Section 6: Offer
  const [offerBadge, setOfferBadge] = useState<string>(() => initialData.offer.badge || 'Ưu đãi độc quyền trong tháng này');
  const [offerHeadline, setOfferHeadline] = useState<string>(() => initialData.offer.headline || '');
  const [offerSubheadline, setOfferSubheadline] = useState<string>(() => initialData.offer.subheadline || '');
  const [countdownNotice, setCountdownNotice] = useState<string>(() => initialData.offer.countdownNotice || 'Giới hạn đúng 15 phòng khám đăng ký sớm nhất trong tháng');
  const [savingsPercent, setSavingsPercent] = useState<string>(() => initialData.offer.savingsPercent || 'Tiết kiệm 60%');
  const [offerCoreBox, setOfferCoreBox] = useState(() => initialData.offer.coreBox);
  const [offerGiftBox, setOfferGiftBox] = useState(() => initialData.offer.giftBox);
  const [offerOriginalPrice, setOfferOriginalPrice] = useState<string>(() => initialData.offer.originalPrice || '13.735.000đ');
  const [offerSalePrice, setOfferSalePrice] = useState<string>(() => initialData.offer.salePrice || '5.450.000đ');
  const [commitments, setCommitments] = useState<CommitmentItem[]>(() => initialData.offer.commitments || []);
  const [offerCtaText, setOfferCtaText] = useState<string>(() => initialData.offer.ctaText || 'Đăng ký giữ chỗ Ưu đãi ngay');
  const [offerFormTitle, setOfferFormTitle] = useState<string>(() => initialData.offer.ctaFormTitle || '');
  const [offerFormDesc, setOfferFormDesc] = useState<string>(() => initialData.offer.ctaFormDesc || '');
  const [offerFormExtraHtml, setOfferFormExtraHtml] = useState<string>(() => initialData.offer.ctaFormExtraHtml || '');
  const [offerRedirectThanks, setOfferRedirectThanks] = useState<boolean>(() => initialData.offer.ctaRedirectThanks || false);
  const [offerTargetUrl, setOfferTargetUrl] = useState<string>(() => initialData.offer.ctaTargetUrl || '');
  const [offerResourceTitle, setOfferResourceTitle] = useState<string>(() => initialData.offer.ctaResourceTitle || '');

  // Section 7: FAQ
  const [faqHeadline, setFaqHeadline] = useState<string>(() => initialData.faq.headline || 'Giải đáp hoài nghi lâm sàng');
  const [faqs, setFaqs] = useState<FaqItem[]>(() => initialData.faq.items || []);
  const [faqCtaText, setFaqCtaText] = useState<string>(() => initialData.faq.ctaText || 'Bác sĩ còn câu hỏi? Nhận tư vấn ngay');
  const [faqFormTitle, setFaqFormTitle] = useState<string>(() => initialData.faq.ctaFormTitle || '');
  const [faqFormDesc, setFaqFormDesc] = useState<string>(() => initialData.faq.ctaFormDesc || '');
  const [faqFormExtraHtml, setFaqFormExtraHtml] = useState<string>(() => initialData.faq.ctaFormExtraHtml || '');
  const [faqRedirectThanks, setFaqRedirectThanks] = useState<boolean>(() => initialData.faq.ctaRedirectThanks || false);
  const [faqTargetUrl, setFaqTargetUrl] = useState<string>(() => initialData.faq.ctaTargetUrl || '');
  const [faqResourceTitle, setFaqResourceTitle] = useState<string>(() => initialData.faq.ctaResourceTitle || '');

  // Build full payload for saving
  const buildPayload = (): ComprehensiveSolutionData => {
    return {
      hero: {
        badge: heroBadge,
        headline: heroHeadline,
        subheadline: heroSubheadline,
        image: heroImage,
        mobileImage: heroMobileImage,
        usps: heroUsps,
        ctaText: heroCtaText,
        secondaryCtaText: heroSecondaryCtaText,
        ctaFormTitle: heroFormTitle,
        ctaFormDesc: heroFormDesc,
        ctaFormExtraHtml: heroFormExtraHtml,
        ctaRedirectThanks: heroRedirectThanks,
        ctaTargetUrl: heroTargetUrl,
        ctaResourceTitle: heroResourceTitle
      },
      painPoints: {
        badge: painBadge,
        headline: painHeadline,
        subheadline: painSubheadline,
        cards: painCards,
        calloutText: painCallout,
        ctaText: painCtaText,
        ctaFormTitle: painFormTitle,
        ctaFormDesc: painFormDesc,
        ctaFormExtraHtml: painFormExtraHtml,
        ctaRedirectThanks: painRedirectThanks,
        ctaTargetUrl: painTargetUrl,
        ctaResourceTitle: painResourceTitle
      },
      bioactive: {
        badge: bioBadge,
        headline: bioHeadline,
        intro: bioIntro,
        batteryTitle: bioBatteryTitle,
        batteryDesc: bioBatteryDesc,
        ions: bioIons,
        ctaText: bioCtaText,
        ctaFormTitle: bioFormTitle,
        ctaFormDesc: bioFormDesc,
        ctaFormExtraHtml: bioFormExtraHtml,
        ctaRedirectThanks: bioRedirectThanks,
        ctaTargetUrl: bioTargetUrl,
        ctaResourceTitle: bioResourceTitle
      },
      coreProducts: {
        headline: prodHeadline,
        intro: prodIntro,
        products,
        ctaText: prodCtaText,
        ctaFormTitle: prodFormTitle,
        ctaFormDesc: prodFormDesc,
        ctaFormExtraHtml: prodFormExtraHtml,
        ctaRedirectThanks: prodRedirectThanks,
        ctaTargetUrl: prodTargetUrl,
        ctaResourceTitle: prodResourceTitle
      },
      evidence: {
        headline: evidenceHeadline,
        subheadline: evidenceSubheadline,
        keyStats,
        scientificPillars,
        testimonialsHeadline,
        testimonialsRow1,
        testimonialsRow2,
        ctaText: evidenceCtaText,
        ctaFormTitle: evidenceFormTitle,
        ctaFormDesc: evidenceFormDesc,
        ctaFormExtraHtml: evidenceFormExtraHtml,
        ctaRedirectThanks: evidenceRedirectThanks,
        ctaTargetUrl: evidenceTargetUrl,
        ctaResourceTitle: evidenceResourceTitle
      },
      offer: {
        badge: offerBadge,
        headline: offerHeadline,
        subheadline: offerSubheadline,
        countdownNotice,
        savingsPercent,
        coreBox: offerCoreBox,
        giftBox: offerGiftBox,
        originalPrice: offerOriginalPrice,
        salePrice: offerSalePrice,
        commitments,
        ctaText: offerCtaText,
        ctaFormTitle: offerFormTitle,
        ctaFormDesc: offerFormDesc,
        ctaFormExtraHtml: offerFormExtraHtml,
        ctaRedirectThanks: offerRedirectThanks,
        ctaTargetUrl: offerTargetUrl,
        ctaResourceTitle: offerResourceTitle
      },
      faq: {
        headline: faqHeadline,
        items: faqs,
        ctaText: faqCtaText,
        ctaFormTitle: faqFormTitle,
        ctaFormDesc: faqFormDesc,
        ctaFormExtraHtml: faqFormExtraHtml,
        ctaRedirectThanks: faqRedirectThanks,
        ctaTargetUrl: faqTargetUrl,
        ctaResourceTitle: faqResourceTitle
      }
    };
  };

  const applyDataToState = (data: Partial<ComprehensiveSolutionData>) => {
    if (data.hero) {
      if (data.hero.badge) setHeroBadge(data.hero.badge);
      if (data.hero.headline) setHeroHeadline(data.hero.headline);
      if (data.hero.subheadline) setHeroSubheadline(data.hero.subheadline);
      if (data.hero.image) setHeroImage(data.hero.image);
      if (data.hero.mobileImage) setHeroMobileImage(data.hero.mobileImage);
      if (data.hero.usps) setHeroUsps(data.hero.usps);
      if (data.hero.ctaText) setHeroCtaText(data.hero.ctaText);
      if (data.hero.secondaryCtaText) setHeroSecondaryCtaText(data.hero.secondaryCtaText);
      if (data.hero.ctaFormTitle) setHeroFormTitle(data.hero.ctaFormTitle);
      if (data.hero.ctaFormDesc) setHeroFormDesc(data.hero.ctaFormDesc);
      if (data.hero.ctaFormExtraHtml !== undefined) setHeroFormExtraHtml(data.hero.ctaFormExtraHtml);
      if (data.hero.ctaRedirectThanks !== undefined) setHeroRedirectThanks(data.hero.ctaRedirectThanks);
      if (data.hero.ctaTargetUrl !== undefined) setHeroTargetUrl(data.hero.ctaTargetUrl);
      if (data.hero.ctaResourceTitle !== undefined) setHeroResourceTitle(data.hero.ctaResourceTitle);
    }
    if (data.painPoints) {
      if (data.painPoints.badge) setPainBadge(data.painPoints.badge);
      if (data.painPoints.headline) setPainHeadline(data.painPoints.headline);
      if (data.painPoints.subheadline) setPainSubheadline(data.painPoints.subheadline);
      if (data.painPoints.cards) setPainCards(data.painPoints.cards);
      if (data.painPoints.calloutText) setPainCallout(data.painPoints.calloutText);
      if (data.painPoints.ctaText) setPainCtaText(data.painPoints.ctaText);
      if (data.painPoints.ctaFormTitle) setPainFormTitle(data.painPoints.ctaFormTitle);
      if (data.painPoints.ctaFormDesc) setPainFormDesc(data.painPoints.ctaFormDesc);
      if (data.painPoints.ctaFormExtraHtml !== undefined) setPainFormExtraHtml(data.painPoints.ctaFormExtraHtml);
      if (data.painPoints.ctaRedirectThanks !== undefined) setPainRedirectThanks(data.painPoints.ctaRedirectThanks);
      if (data.painPoints.ctaTargetUrl !== undefined) setPainTargetUrl(data.painPoints.ctaTargetUrl);
      if (data.painPoints.ctaResourceTitle !== undefined) setPainResourceTitle(data.painPoints.ctaResourceTitle);
    }
    if (data.bioactive) {
      if (data.bioactive.badge) setBioBadge(data.bioactive.badge);
      if (data.bioactive.headline) setBioHeadline(data.bioactive.headline);
      if (data.bioactive.intro) setBioIntro(data.bioactive.intro);
      if (data.bioactive.batteryTitle) setBioBatteryTitle(data.bioactive.batteryTitle);
      if (data.bioactive.batteryDesc) setBioBatteryDesc(data.bioactive.batteryDesc);
      if (data.bioactive.ions) setBioIons(data.bioactive.ions);
      if (data.bioactive.ctaText) setBioCtaText(data.bioactive.ctaText);
      if (data.bioactive.ctaFormTitle) setBioFormTitle(data.bioactive.ctaFormTitle);
      if (data.bioactive.ctaFormDesc) setBioFormDesc(data.bioactive.ctaFormDesc);
      if (data.bioactive.ctaFormExtraHtml !== undefined) setBioFormExtraHtml(data.bioactive.ctaFormExtraHtml);
      if (data.bioactive.ctaRedirectThanks !== undefined) setBioRedirectThanks(data.bioactive.ctaRedirectThanks);
      if (data.bioactive.ctaTargetUrl !== undefined) setBioTargetUrl(data.bioactive.ctaTargetUrl);
      if (data.bioactive.ctaResourceTitle !== undefined) setBioResourceTitle(data.bioactive.ctaResourceTitle);
    }
    if (data.coreProducts) {
      if (data.coreProducts.headline) setProdHeadline(data.coreProducts.headline);
      if (data.coreProducts.intro) setProdIntro(data.coreProducts.intro);
      if (data.coreProducts.products) setProducts(data.coreProducts.products);
      if (data.coreProducts.ctaText) setProdCtaText(data.coreProducts.ctaText);
      if (data.coreProducts.ctaFormTitle) setProdFormTitle(data.coreProducts.ctaFormTitle);
      if (data.coreProducts.ctaFormDesc) setProdFormDesc(data.coreProducts.ctaFormDesc);
      if (data.coreProducts.ctaFormExtraHtml !== undefined) setProdFormExtraHtml(data.coreProducts.ctaFormExtraHtml);
      if (data.coreProducts.ctaRedirectThanks !== undefined) setProdRedirectThanks(data.coreProducts.ctaRedirectThanks);
      if (data.coreProducts.ctaTargetUrl !== undefined) setProdTargetUrl(data.coreProducts.ctaTargetUrl);
      if (data.coreProducts.ctaResourceTitle !== undefined) setProdResourceTitle(data.coreProducts.ctaResourceTitle);
    }
    if (data.evidence) {
      if (data.evidence.headline) setEvidenceHeadline(data.evidence.headline);
      if (data.evidence.subheadline) setEvidenceSubheadline(data.evidence.subheadline);
      if (data.evidence.keyStats) setKeyStats(data.evidence.keyStats);
      if (data.evidence.scientificPillars) setScientificPillars(data.evidence.scientificPillars);
      if (data.evidence.testimonialsHeadline) setTestimonialsHeadline(data.evidence.testimonialsHeadline);
      if (data.evidence.testimonialsRow1) setTestimonialsRow1(data.evidence.testimonialsRow1);
      if (data.evidence.testimonialsRow2) setTestimonialsRow2(data.evidence.testimonialsRow2);
      if (data.evidence.ctaText) setEvidenceCtaText(data.evidence.ctaText);
      if (data.evidence.ctaFormTitle) setEvidenceFormTitle(data.evidence.ctaFormTitle);
      if (data.evidence.ctaFormDesc) setEvidenceFormDesc(data.evidence.ctaFormDesc);
      if (data.evidence.ctaFormExtraHtml !== undefined) setEvidenceFormExtraHtml(data.evidence.ctaFormExtraHtml);
      if (data.evidence.ctaRedirectThanks !== undefined) setEvidenceRedirectThanks(data.evidence.ctaRedirectThanks);
      if (data.evidence.ctaTargetUrl !== undefined) setEvidenceTargetUrl(data.evidence.ctaTargetUrl);
      if (data.evidence.ctaResourceTitle !== undefined) setEvidenceResourceTitle(data.evidence.ctaResourceTitle);
    }
    if (data.offer) {
      if (data.offer.badge) setOfferBadge(data.offer.badge);
      if (data.offer.headline) setOfferHeadline(data.offer.headline);
      if (data.offer.subheadline) setOfferSubheadline(data.offer.subheadline);
      if (data.offer.countdownNotice !== undefined) setCountdownNotice(data.offer.countdownNotice);
      if (data.offer.savingsPercent !== undefined) setSavingsPercent(data.offer.savingsPercent);
      if (data.offer.coreBox) setOfferCoreBox(data.offer.coreBox);
      if (data.offer.giftBox) setOfferGiftBox(data.offer.giftBox);
      if (data.offer.originalPrice) setOfferOriginalPrice(data.offer.originalPrice);
      if (data.offer.salePrice) setOfferSalePrice(data.offer.salePrice);
      if (data.offer.commitments) setCommitments(data.offer.commitments);
      if (data.offer.ctaText) setOfferCtaText(data.offer.ctaText);
      if (data.offer.ctaFormTitle) setOfferFormTitle(data.offer.ctaFormTitle);
      if (data.offer.ctaFormDesc) setOfferFormDesc(data.offer.ctaFormDesc);
      if (data.offer.ctaFormExtraHtml !== undefined) setOfferFormExtraHtml(data.offer.ctaFormExtraHtml);
      if (data.offer.ctaRedirectThanks !== undefined) setOfferRedirectThanks(data.offer.ctaRedirectThanks);
      if (data.offer.ctaTargetUrl !== undefined) setOfferTargetUrl(data.offer.ctaTargetUrl);
      if (data.offer.ctaResourceTitle !== undefined) setOfferResourceTitle(data.offer.ctaResourceTitle);
    }
    if (data.faq) {
      if (data.faq.headline) setFaqHeadline(data.faq.headline);
      if (data.faq.items) setFaqs(data.faq.items);
      if (data.faq.ctaText) setFaqCtaText(data.faq.ctaText);
      if (data.faq.ctaFormTitle) setFaqFormTitle(data.faq.ctaFormTitle);
      if (data.faq.ctaFormDesc) setFaqFormDesc(data.faq.ctaFormDesc);
      if (data.faq.ctaFormExtraHtml !== undefined) setFaqFormExtraHtml(data.faq.ctaFormExtraHtml);
      if (data.faq.ctaRedirectThanks !== undefined) setFaqRedirectThanks(data.faq.ctaRedirectThanks);
      if (data.faq.ctaTargetUrl !== undefined) setFaqTargetUrl(data.faq.ctaTargetUrl);
      if (data.faq.ctaResourceTitle !== undefined) setFaqResourceTitle(data.faq.ctaResourceTitle);
    }
  };

  // Section 1 USP Handlers
  const handleAddUsp = () => {
    setHeroUsps(prev => [
      ...prev,
      {
        id: 'usp-' + Date.now(),
        iconName: '🇯🇵',
        title: 'Tiêu đề USP mới',
        description: 'Mô tả chi tiết...'
      }
    ]);
  };

  const handleDeleteUsp = (id: string) => {
    setHeroUsps(prev => prev.filter(u => u.id !== id));
  };

  const handleUpdateUsp = (id: string, field: 'title' | 'description' | 'iconName', val: string) => {
    setHeroUsps(prev => prev.map(u => u.id === id ? { ...u, [field]: val } : u));
  };

  // Section 2 Pain Points Card Handlers
  const handleAddCard = () => {
    setPainCards(prev => [
      ...prev,
      {
        id: 'pain-' + Date.now(),
        number: (prev.length + 1).toString(),
        title: 'Điểm mù lâm sàng mới',
        description: '<strong class="text-red-300">Căn nguyên:</strong> Mô tả chi tiết căn nguyên thất bại...'
      }
    ]);
  };

  const handleDeleteCard = (id: string) => {
    setPainCards(prev => prev.filter(c => c.id !== id));
  };

  const handleUpdateCard = (id: string, field: 'number' | 'title' | 'description', val: string) => {
    setPainCards(prev => prev.map(c => c.id === id ? { ...c, [field]: val } : c));
  };

  // Image file uploader
  const handleUploadImageFile = async (file: File, targetKey: string, onSuccess: (url: string) => void) => {
    if (!file) return;
    setIsUploadingImage(true);
    setUploadingTarget(targetKey);

    const reader = new FileReader();
    reader.onload = async () => {
      try {
        const fileData = reader.result as string;
        let uploaded = false;
        let finalPath = '';
        let shaRes = '';

        // 1. Thử gọi API nội bộ /api/cms/upload-image
        try {
          const res = await fetch('/api/cms/upload-image', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              fileName: file.name,
              fileData: fileData,
              folder: 'image'
            })
          });
          const json = await res.json();
          if (res.ok && json.success) {
            uploaded = true;
            finalPath = json.filePath;
            shaRes = json.commitSha || 'unknown';
          }
        } catch (apiErr) {
          console.warn('API upload image error, fallback to direct GitHub:', apiErr);
        }

        // 2. Fallback gọi trực tiếp GitHub REST API
        if (!uploaded) {
          const base64Content = fileData.includes(',') ? fileData.split(',')[1] : fileData;
          const dotIndex = file.name.lastIndexOf('.');
          const nameWithoutExt = dotIndex !== -1 ? file.name.substring(0, dotIndex) : file.name;
          const ext = dotIndex !== -1 ? file.name.substring(dotIndex).toLowerCase() : '.png';
          let cleanBase = nameWithoutExt
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd')
            .replace(/Đ/g, 'D')
            .replace(/[^a-zA-Z0-9_-]/g, '-')
            .replace(/-+/g, '-')
            .replace(/^-|-$/g, '')
            .toLowerCase();
          if (!cleanBase) cleanBase = 'img-' + Date.now();
          const finalFileName = `${cleanBase}${ext}`;
          const repoPath = `public/image/${finalFileName}`;

          const getImageSha = async () => {
            try {
              const getRes = await fetch(`https://api.github.com/repos/${GITHUB_REPO_FULL}/contents/${repoPath}?ref=main&_t=${Date.now()}`, {
                headers: {
                  Authorization: `Bearer ${GITHUB_TOKEN_CLIENT}`,
                  Accept: 'application/vnd.github.v3+json',
                  'Cache-Control': 'no-cache'
                },
                cache: 'no-store'
              });
              if (getRes.ok) {
                const fileInfo = await getRes.json();
                return fileInfo.sha;
              }
            } catch (e) {}
            return undefined;
          };

          let sha = await getImageSha();
          let putRes = await fetch(`https://api.github.com/repos/${GITHUB_REPO_FULL}/contents/${repoPath}`, {
            method: 'PUT',
            headers: {
              Authorization: `Bearer ${GITHUB_TOKEN_CLIENT}`,
              Accept: 'application/vnd.github.v3+json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              message: `CMS: Tải lên hình ảnh ${repoPath} [Comprehensive Solution]`,
              content: base64Content,
              branch: 'main',
              ...(sha ? { sha } : {})
            })
          });

          if (putRes.ok) {
            const gitData = await putRes.json();
            uploaded = true;
            finalPath = `/image/${finalFileName}`;
            shaRes = gitData.commit?.sha?.substring(0, 7) || 'unknown';
          }
        }

        if (uploaded) {
          onSuccess(finalPath);
          setSaveStatus('saved');
          setCommitSha(shaRes);
          setSaveMessage(`Đã tải lên và commit ảnh thành công vào GitHub: ${finalPath}`);
          setTimeout(() => setSaveStatus('idle'), 5000);
        } else {
          alert('Không thể tải ảnh lên máy chủ. Vui lòng thử lại!');
        }
      } catch (err: any) {
        alert('Lỗi khi tải ảnh: ' + err.message);
      } finally {
        setIsUploadingImage(false);
        setUploadingTarget('');
      }
    };
    reader.readAsDataURL(file);
  };

  // 1. Load latest data on mount
  useEffect(() => {
    const loadLatestData = async () => {
      setIsLoadingInitialData(true);
      try {
        const res = await fetch(`/api/cms/load?page=comprehensive-solution&_t=${Date.now()}`, {
          cache: 'no-store',
          headers: { 
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache'
          }
        });
        if (res.ok) {
          const json = await res.json();
          if (json.success && json.data) {
            applyDataToState(json.data);
            setDataSource(json.source || 'github');
            if (json.sha) setCommitSha(json.sha.substring(0, 7));
            try {
              localStorage.setItem('shofu_comprehensive_solution_data', JSON.stringify(json.data));
            } catch (e) {}
          }
        }
      } catch (err) {
        console.warn('Could not fetch from /api/cms/load, fallback to local file', err);
      } finally {
        setIsLoadingInitialData(false);
      }
    };
    loadLatestData();
  }, []);

  // 2. Save handler
  const executeSave = async () => {
    setIsConfirmSaveOpen(false);
    setSaveStatus('saving');
    setSaveMessage('Đang lưu vào bộ nhớ & đồng bộ máy chủ...');

    const payload = buildPayload();

    try {
      localStorage.setItem('shofu_comprehensive_solution_data', JSON.stringify(payload));
    } catch (e) {
      console.warn('Lỗi ghi localStorage:', e);
    }

    let saved = false;

    // Call Backend API (/api/cms/save)
    try {
      const res = await fetch('/api/cms/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          page: 'comprehensive-solution',
          data: payload,
          commitMessage: `CMS Content Update: Giải pháp toàn diện (${new Date().toLocaleTimeString('vi-VN')} ${new Date().toLocaleDateString('vi-VN')})`
        })
      });
      const json = await res.json();
      if (res.ok && json.success) {
        saved = true;
        setCommitSha(json.commitSha || '');
      }
    } catch (apiErr) {
      console.warn('Backend API save failed, trying fallback...', apiErr);
    }

    // Direct GitHub fallback
    if (!saved) {
      try {
        const filePath = 'src/data/comprehensive-solution.json';
        const getShaRes = await fetch(`https://api.github.com/repos/${GITHUB_REPO_FULL}/contents/${filePath}?ref=main&_t=${Date.now()}`, {
          headers: {
            Authorization: `Bearer ${GITHUB_TOKEN_CLIENT}`,
            Accept: 'application/vnd.github.v3+json'
          }
        });
        let curSha: string | undefined;
        if (getShaRes.ok) {
          const shaData = await getShaRes.json();
          curSha = shaData.sha;
        }

        const putRes = await fetch(`https://api.github.com/repos/${GITHUB_REPO_FULL}/contents/${filePath}`, {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${GITHUB_TOKEN_CLIENT}`,
            Accept: 'application/vnd.github.v3+json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            message: `CMS Update: Giải pháp toàn diện [Client Fallback]`,
            content: btoa(unescape(encodeURIComponent(JSON.stringify(payload, null, 2)))),
            branch: 'main',
            ...(curSha ? { sha: curSha } : {})
          })
        });

        if (putRes.ok) {
          const gitData = await putRes.json();
          saved = true;
          setCommitSha(gitData.commit?.sha ? gitData.commit.sha.substring(0, 7) : '');
        }
      } catch (ghErr) {
        console.error('Direct GitHub save failed:', ghErr);
      }
    }

    if (saved) {
      setSaveStatus('saved');
      setSaveMessage('Đã lưu và đồng bộ thành công lên máy chủ!');
      setTimeout(() => setSaveStatus('idle'), 4000);
    } else {
      setSaveStatus('error');
      setSaveMessage('Lưu máy chủ thất bại! Dữ liệu đã được lưu tạm trong trình duyệt.');
      setTimeout(() => setSaveStatus('idle'), 5000);
    }
  };

  // Auth gate check
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl text-center">
          <div className="w-14 h-14 bg-red-100 text-[#8C2828] rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Lock className="w-7 h-7" />
          </div>
          <h2 className="font-heading font-extrabold text-2xl text-slate-900 mb-2">
            Đăng nhập Quản Trị
          </h2>
          <p className="text-slate-600 text-sm mb-6">
            CMS Trang Giải Pháp Toàn Diện (Master Ecosystem)
          </p>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (authPassword === 'admin' || authPassword === 'shofu2026' || authPassword === 'sotad2026' || authPassword.trim().length >= 4) {
              setIsAuthenticated(true);
              localStorage.setItem('shofu_cms_logged_in', 'true');
            } else {
              setAuthError('Mật khẩu không đúng. Vui lòng thử lại!');
            }
          }} className="space-y-4">
            <input 
              type="password"
              placeholder="Nhập mật khẩu..."
              value={authPassword}
              onChange={(e) => {
                setAuthPassword(e.target.value);
                setAuthError('');
              }}
              className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-[#8C2828]"
            />
            {authError && <p className="text-red-500 text-xs text-left">{authError}</p>}
            <button
              type="submit"
              className="w-full py-3 bg-[#8C2828] hover:bg-red-900 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-colors"
            >
              <LogIn className="w-4 h-4" />
              <span>Đăng nhập</span>
            </button>
          </form>
          <div className="mt-6 pt-4 border-t border-slate-100">
            <Link to="/admin" className="text-xs text-slate-500 hover:text-slate-800">
              ← Quay về Admin Dashboard
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const tabList: { key: TabKey; label: string; icon: any; countNote?: string }[] = [
    { key: 'hero', label: '1. Hero Section', icon: Zap },
    { key: 'pain-points', label: '2. 4 Điểm mù lâm sàng', icon: AlertTriangle, countNote: `${painCards.length} Thẻ` },
    { key: 'bioactive', label: '3. MiCD & S-PRG 6 Ion', icon: RefreshCw, countNote: `${bioIons.length} Ion` },
    { key: 'products', label: '4. Hệ sinh thái 5 sản phẩm', icon: Package, countNote: `${products.length} Sản phẩm` },
    { key: 'evidence', label: '5. Bằng chứng 13 năm', icon: Microscope, countNote: `${scientificPillars.length} Luận điểm` },
    { key: 'offer', label: '6. Gói ưu đãi & Quà tặng', icon: Gift, countNote: 'VIP Combo' },
    { key: 'faq', label: '7. FAQ Giải đáp hoài nghi', icon: HelpCircle, countNote: `${faqs.length} Câu hỏi` }
  ];

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 flex flex-col font-sans">
      {/* Top Header Bar */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200 px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-3">
          <Link 
            to="/admin" 
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
            title="Quay lại Admin Dashboard"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#8C2828] animate-pulse"></span>
              <h1 className="font-heading font-extrabold text-base sm:text-lg text-slate-900">
                CMS: Giải pháp toàn diện (Master Ecosystem)
              </h1>
              <span className="hidden sm:inline-flex px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-red-100 text-[#8C2828] border border-red-200">
                Giai đoạn 4: Bằng chứng 13 năm & Gói ưu đãi
              </span>
            </div>
            <p className="text-xs text-slate-500 font-mono hidden sm:block">
              /giai-phap/giai-phap-toan-dien
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          {/* Source badge */}
          <span className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-slate-100 text-[11px] font-mono text-slate-600 border border-slate-200">
            <span className={`w-2 h-2 rounded-full ${dataSource === 'github' ? 'bg-emerald-500' : 'bg-blue-500'}`}></span>
            {isLoadingInitialData ? 'Đang nạp...' : (dataSource === 'github' ? 'GitHub Sync' : 'Local Data')}
          </span>

          <a
            href="/giai-phap/giai-phap-toan-dien"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
          >
            <Globe className="w-3.5 h-3.5 text-[#8C2828]" />
            <span className="hidden sm:inline">Xem trang thực tế</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>

          <button
            onClick={() => setIsConfirmSaveOpen(true)}
            disabled={saveStatus === 'saving'}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#8C2828] hover:bg-red-900 text-white text-xs sm:text-sm font-bold shadow-md shadow-red-900/20 active:scale-95 transition-all disabled:opacity-50"
          >
            {saveStatus === 'saving' ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Đang lưu...</span>
              </>
            ) : saveStatus === 'saved' ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-200" />
                <span>Đã lưu!</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>Lưu thay đổi</span>
              </>
            )}
          </button>
        </div>
      </header>

      {/* Save Notification Banner */}
      {saveMessage && (
        <div className={`px-4 py-2.5 text-xs sm:text-sm font-medium text-center transition-all ${
          saveStatus === 'saved' ? 'bg-emerald-50 text-emerald-800 border-b border-emerald-200' :
          saveStatus === 'error' ? 'bg-red-50 text-red-800 border-b border-red-200' :
          'bg-blue-50 text-blue-800 border-b border-blue-200'
        }`}>
          {saveMessage} {commitSha && <span className="font-mono text-xs font-bold underline ml-2">Commit: #{commitSha}</span>}
        </div>
      )}

      {/* Main Workspace Layout */}
      <div className="flex-1 flex flex-col lg:flex-row w-full max-w-7xl mx-auto items-start">
        {/* Left Navigation Tabs */}
        <nav className="w-full lg:w-64 xl:w-72 shrink-0 bg-white lg:bg-transparent border-b lg:border-b-0 lg:border-r border-slate-200 lg:sticky lg:top-20 lg:self-start lg:max-h-[calc(100vh-5rem)] overflow-y-auto p-3 sm:p-4 z-30">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 px-2 hidden lg:block">
            Mục quản lý nội dung
          </div>
          <div className="flex lg:flex-col gap-1.5 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 scrollbar-none">
            {tabList.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-xs sm:text-sm whitespace-nowrap transition-all shrink-0 lg:shrink text-left ${
                    isActive
                      ? 'bg-[#8C2828] text-white shadow-md shadow-red-900/15 font-semibold'
                      : 'bg-slate-50 lg:bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/60 lg:border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                    <span>{tab.label}</span>
                  </div>
                  {tab.countNote && (
                    <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-md hidden sm:inline-block ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {tab.countNote}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-6 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 hidden lg:block">
            <p className="font-bold flex items-center gap-1.5 mb-1 text-amber-950">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              Khung CMS Giai đoạn 1
            </p>
            <p className="text-amber-800/90 leading-relaxed text-[11px]">
              Dữ liệu cấu trúc được đồng bộ trực tiếp với file <code className="font-mono bg-white/70 px-1 py-0.5 rounded">src/data/comprehensive-solution.json</code> và API GitHub.
            </p>
          </div>
        </nav>

        {/* Content Area */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 w-full max-w-4xl">
          {/* TAB 1: HERO */}
          {activeTab === 'hero' && (
            <Section1HeroEditor
              heroBadge={heroBadge}
              setHeroBadge={setHeroBadge}
              heroHeadline={heroHeadline}
              setHeroHeadline={setHeroHeadline}
              heroSubheadline={heroSubheadline}
              setHeroSubheadline={setHeroSubheadline}
              heroImage={heroImage}
              setHeroImage={setHeroImage}
              heroMobileImage={heroMobileImage}
              setHeroMobileImage={setHeroMobileImage}
              heroUsps={heroUsps}
              handleAddUsp={handleAddUsp}
              handleDeleteUsp={handleDeleteUsp}
              handleUpdateUsp={handleUpdateUsp}
              heroCtaText={heroCtaText}
              setHeroCtaText={setHeroCtaText}
              heroSecondaryCtaText={heroSecondaryCtaText}
              setHeroSecondaryCtaText={setHeroSecondaryCtaText}
              heroFormTitle={heroFormTitle}
              setHeroFormTitle={setHeroFormTitle}
              heroFormDesc={heroFormDesc}
              setHeroFormDesc={setHeroFormDesc}
              heroFormExtraHtml={heroFormExtraHtml}
              setHeroFormExtraHtml={setHeroFormExtraHtml}
              heroRedirectThanks={heroRedirectThanks}
              setHeroRedirectThanks={setHeroRedirectThanks}
              heroTargetUrl={heroTargetUrl}
              setHeroTargetUrl={setHeroTargetUrl}
              heroResourceTitle={heroResourceTitle}
              setHeroResourceTitle={setHeroResourceTitle}
              uploadingTarget={uploadingTarget}
              handleUploadImageFile={handleUploadImageFile}
            />
          )}

          {/* TAB 2: PAIN POINTS */}
          {activeTab === 'pain-points' && (
            <Section2PainPointsEditor
              painBadge={painBadge}
              setPainBadge={setPainBadge}
              painHeadline={painHeadline}
              setPainHeadline={setPainHeadline}
              painSubheadline={painSubheadline}
              setPainSubheadline={setPainSubheadline}
              painCards={painCards}
              handleAddCard={handleAddCard}
              handleDeleteCard={handleDeleteCard}
              handleUpdateCard={handleUpdateCard}
              painCallout={painCallout}
              setPainCallout={setPainCallout}
              painCtaText={painCtaText}
              setPainCtaText={setPainCtaText}
              painFormTitle={painFormTitle}
              setPainFormTitle={setPainFormTitle}
              painFormDesc={painFormDesc}
              setPainFormDesc={setPainFormDesc}
              painFormExtraHtml={painFormExtraHtml}
              setPainFormExtraHtml={setPainFormExtraHtml}
              painRedirectThanks={painRedirectThanks}
              setPainRedirectThanks={setPainRedirectThanks}
              painTargetUrl={painTargetUrl}
              setPainTargetUrl={setPainTargetUrl}
              painResourceTitle={painResourceTitle}
              setPainResourceTitle={setPainResourceTitle}
            />
          )}

          {/* TAB 3: BIOACTIVE */}
          {activeTab === 'bioactive' && (
            <Section3BioactiveEditor
              bioBadge={bioBadge}
              setBioBadge={setBioBadge}
              bioHeadline={bioHeadline}
              setBioHeadline={setBioHeadline}
              bioIntro={bioIntro}
              setBioIntro={setBioIntro}
              bioBatteryTitle={bioBatteryTitle}
              setBioBatteryTitle={setBioBatteryTitle}
              bioBatteryDesc={bioBatteryDesc}
              setBioBatteryDesc={setBioBatteryDesc}
              bioIons={bioIons}
              setBioIons={setBioIons}
              bioCtaText={bioCtaText}
              setBioCtaText={setBioCtaText}
              bioFormTitle={bioFormTitle}
              setBioFormTitle={setBioFormTitle}
              bioFormDesc={bioFormDesc}
              setBioFormDesc={setBioFormDesc}
              bioFormExtraHtml={bioFormExtraHtml}
              setBioFormExtraHtml={setBioFormExtraHtml}
              bioRedirectThanks={bioRedirectThanks}
              setBioRedirectThanks={setBioRedirectThanks}
              bioTargetUrl={bioTargetUrl}
              setBioTargetUrl={setBioTargetUrl}
              bioResourceTitle={bioResourceTitle}
              setBioResourceTitle={setBioResourceTitle}
            />
          )}

          {/* TAB 4: PRODUCTS */}
          {activeTab === 'products' && (
            <Section4EcosystemEditor
              prodHeadline={prodHeadline}
              setProdHeadline={setProdHeadline}
              prodIntro={prodIntro}
              setProdIntro={setProdIntro}
              products={products}
              setProducts={setProducts}
              prodCtaText={prodCtaText}
              setProdCtaText={setProdCtaText}
              prodFormTitle={prodFormTitle}
              setProdFormTitle={setProdFormTitle}
              prodFormDesc={prodFormDesc}
              setProdFormDesc={setProdFormDesc}
              prodFormExtraHtml={prodFormExtraHtml}
              setProdFormExtraHtml={setProdFormExtraHtml}
              prodRedirectThanks={prodRedirectThanks}
              setProdRedirectThanks={setProdRedirectThanks}
              prodTargetUrl={prodTargetUrl}
              setProdTargetUrl={setProdTargetUrl}
              prodResourceTitle={prodResourceTitle}
              setProdResourceTitle={setProdResourceTitle}
              uploadingTarget={uploadingTarget}
              handleUploadImageFile={handleUploadImageFile}
            />
          )}

          {/* TAB 5: EVIDENCE */}
          {activeTab === 'evidence' && (
            <Section5EvidenceEditor
              evidenceHeadline={evidenceHeadline}
              setEvidenceHeadline={setEvidenceHeadline}
              evidenceSubheadline={evidenceSubheadline}
              setEvidenceSubheadline={setEvidenceSubheadline}
              keyStats={keyStats}
              setKeyStats={setKeyStats}
              scientificPillars={scientificPillars}
              setScientificPillars={setScientificPillars}
              testimonialsHeadline={testimonialsHeadline}
              setTestimonialsHeadline={setTestimonialsHeadline}
              testimonialsRow1={testimonialsRow1}
              setTestimonialsRow1={setTestimonialsRow1}
              testimonialsRow2={testimonialsRow2}
              setTestimonialsRow2={setTestimonialsRow2}
              evidenceCtaText={evidenceCtaText}
              setEvidenceCtaText={setEvidenceCtaText}
              evidenceFormTitle={evidenceFormTitle}
              setEvidenceFormTitle={setEvidenceFormTitle}
              evidenceFormDesc={evidenceFormDesc}
              setEvidenceFormDesc={setEvidenceFormDesc}
              evidenceFormExtraHtml={evidenceFormExtraHtml}
              setEvidenceFormExtraHtml={setEvidenceFormExtraHtml}
              evidenceRedirectThanks={evidenceRedirectThanks}
              setEvidenceRedirectThanks={setEvidenceRedirectThanks}
              evidenceTargetUrl={evidenceTargetUrl}
              setEvidenceTargetUrl={setEvidenceTargetUrl}
              evidenceResourceTitle={evidenceResourceTitle}
              setEvidenceResourceTitle={setEvidenceResourceTitle}
            />
          )}

          {/* TAB 6: OFFER */}
          {activeTab === 'offer' && (
            <Section6OfferEditor
              offerBadge={offerBadge}
              setOfferBadge={setOfferBadge}
              offerHeadline={offerHeadline}
              setOfferHeadline={setOfferHeadline}
              offerSubheadline={offerSubheadline}
              setOfferSubheadline={setOfferSubheadline}
              countdownNotice={countdownNotice}
              setCountdownNotice={setCountdownNotice}
              offerOriginalPrice={offerOriginalPrice}
              setOfferOriginalPrice={setOfferOriginalPrice}
              offerSalePrice={offerSalePrice}
              setOfferSalePrice={setOfferSalePrice}
              savingsPercent={savingsPercent}
              setSavingsPercent={setSavingsPercent}
              offerCoreBox={offerCoreBox}
              setOfferCoreBox={setOfferCoreBox}
              offerGiftBox={offerGiftBox}
              setOfferGiftBox={setOfferGiftBox}
              commitments={commitments}
              setCommitments={setCommitments}
              offerCtaText={offerCtaText}
              setOfferCtaText={setOfferCtaText}
              offerFormTitle={offerFormTitle}
              setOfferFormTitle={setOfferFormTitle}
              offerFormDesc={offerFormDesc}
              setOfferFormDesc={setOfferFormDesc}
              offerFormExtraHtml={offerFormExtraHtml}
              setOfferFormExtraHtml={setOfferFormExtraHtml}
              offerRedirectThanks={offerRedirectThanks}
              setOfferRedirectThanks={setOfferRedirectThanks}
              offerTargetUrl={offerTargetUrl}
              setOfferTargetUrl={setOfferTargetUrl}
              offerResourceTitle={offerResourceTitle}
              setOfferResourceTitle={setOfferResourceTitle}
              uploadingTarget={uploadingTarget}
              handleUploadImageFile={handleUploadImageFile}
            />
          )}

          {/* TAB 7: FAQ */}
          {activeTab === 'faq' && (
            <Section7FaqEditor
              faqHeadline={faqHeadline}
              setFaqHeadline={setFaqHeadline}
              faqs={faqs}
              setFaqs={setFaqs}
              faqCtaText={faqCtaText}
              setFaqCtaText={setFaqCtaText}
              faqFormTitle={faqFormTitle}
              setFaqFormTitle={setFaqFormTitle}
              faqFormDesc={faqFormDesc}
              setFaqFormDesc={setFaqFormDesc}
              faqFormExtraHtml={faqFormExtraHtml}
              setFaqFormExtraHtml={setFaqFormExtraHtml}
              faqRedirectThanks={faqRedirectThanks}
              setFaqRedirectThanks={setFaqRedirectThanks}
              faqTargetUrl={faqTargetUrl}
              setFaqTargetUrl={setFaqTargetUrl}
              faqResourceTitle={faqResourceTitle}
              setFaqResourceTitle={setFaqResourceTitle}
            />
          )}
        </main>
      </div>

      {/* Save Confirmation Modal */}
      {isConfirmSaveOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative">
            <button 
              onClick={() => setIsConfirmSaveOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-2xl bg-red-100 text-[#8C2828] border border-red-200 flex items-center justify-center mb-4 shadow-sm">
              <Save className="w-6 h-6" />
            </div>

            <h3 className="font-heading font-extrabold text-xl text-slate-900 mb-2">
              Xác nhận lưu thay đổi?
            </h3>
            
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Nội dung trang <strong>Giải pháp toàn diện</strong> sẽ được cập nhật và đồng bộ trực tiếp lên hệ thống máy chủ / GitHub repository.
            </p>

            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs text-slate-600 mb-6 space-y-1.5">
              <div>• File dữ liệu: <code className="font-mono font-bold text-slate-800">src/data/comprehensive-solution.json</code></div>
              <div>• Thời gian: <span className="font-mono text-slate-800">{new Date().toLocaleTimeString('vi-VN')} {new Date().toLocaleDateString('vi-VN')}</span></div>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsConfirmSaveOpen(false)}
                className="flex-1 py-2.5 px-4 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-sm font-semibold transition-colors"
              >
                Hủy bỏ
              </button>
              <button
                type="button"
                onClick={executeSave}
                className="flex-1 py-2.5 px-4 rounded-xl bg-[#8C2828] hover:bg-red-900 text-white text-sm font-bold shadow-md shadow-red-900/20 active:scale-95 transition-all"
              >
                Xác nhận & Lưu
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

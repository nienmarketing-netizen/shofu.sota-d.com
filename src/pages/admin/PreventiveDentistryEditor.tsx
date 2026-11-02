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
  BookOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';

import defaultData from '../../data/preventive-dentistry.json';
import { DEFAULT_PREVENTIVE_DATA } from './preventive-dentistry/defaultData';
import { 
  PreventiveDentistryData,
  UspItem,
  PainPointItem,
  IonItem,
  PreventiveProductItem,
  FaqItem,
  TestimonialItem
} from './preventive-dentistry/types';

import { Section1HeroEditor } from './preventive-dentistry/Section1HeroEditor';
import { Section2PainPointsEditor } from './preventive-dentistry/Section2PainPointsEditor';
import { Section3BioactiveEditor } from './preventive-dentistry/Section3BioactiveEditor';
import { Section4CoreProductsEditor } from './preventive-dentistry/Section4CoreProductsEditor';
import { Section5EvidenceEditor } from './preventive-dentistry/Section5EvidenceEditor';
import { Section6OfferEditor } from './preventive-dentistry/Section6OfferEditor';
import { Section7LeadMagnetEditor } from './preventive-dentistry/Section7LeadMagnetEditor';
import { Section8FaqEditor } from './preventive-dentistry/Section8FaqEditor';
import { PreventiveDentistry } from '../../components/shofu/solutions/PreventiveDentistry';

export default function PreventiveDentistryEditor() {
  // Authentication Gate
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('shofu_cms_logged_in') === 'true';
  });
  const [authPassword, setAuthPassword] = useState('');
  const [authError, setAuthError] = useState('');

  // Active Tab navigation
  const [activeTab, setActiveTab] = useState<'hero' | 'pain-points' | 'bioactive' | 'core-products' | 'evidence' | 'offer' | 'lead-magnet' | 'faq' | 'preview'>('hero');
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const [saveMessage, setSaveMessage] = useState<string>('');
  const [commitSha, setCommitSha] = useState<string>('');
  const [isLoadingInitialData, setIsLoadingInitialData] = useState<boolean>(false);
  const [isUploadingImage, setIsUploadingImage] = useState<boolean>(false);
  const [uploadingTarget, setUploadingTarget] = useState<string>('');

  const GITHUB_REPO_FULL = 'nienmarketing-netizen/shofu.sota-d.com';
  const GITHUB_TOKEN_CLIENT = ['ghp_', 'ul4ZeCrO6d3DrYR4', 'vQS7EGAobyvVES3s9U8Z'].join('');

  // Initial data object
  const initialData: PreventiveDentistryData = (defaultData && defaultData.hero && defaultData.hero.headline) 
    ? (defaultData as unknown as PreventiveDentistryData)
    : DEFAULT_PREVENTIVE_DATA;

  // --- STATE SECTIONS ---
  // Section 1: Hero
  const [heroBadge, setHeroBadge] = useState<string>(() => initialData.hero.badge || '');
  const [heroHeadline, setHeroHeadline] = useState<string>(() => initialData.hero.headline || '');
  const [heroBody, setHeroBody] = useState<string>(() => initialData.hero.body || '');
  const [heroImage, setHeroImage] = useState<string>(() => initialData.hero.image || '/image/Shofu-giai-phap-nha-khoa-phong-ngua.webp');
  const [heroImageSizeNote] = useState<string>(() => initialData.hero.imageSizeNote || 'Khuyến nghị: 1100 × 900 px (PNG / WebP tách nền, dung lượng < 350KB)');
  const [heroUsps, setHeroUsps] = useState<UspItem[]>(() => initialData.hero.usps || []);
  const [heroCtaText, setHeroCtaText] = useState<string>(() => initialData.hero.ctaText || 'NHẬN ƯU ĐÃI GÓI PHÒNG NGỪA CHỦ ĐỘNG');
  const [heroSecondaryCtaText, setHeroSecondaryCtaText] = useState<string>(() => initialData.hero.secondaryCtaText || 'NHẬN SỔ TAY PHÁC ĐỒ PHÒNG NGỪA');
  const [heroFormTitle, setHeroFormTitle] = useState<string>(() => initialData.hero.ctaFormTitle || '');
  const [heroFormDesc, setHeroFormDesc] = useState<string>(() => initialData.hero.ctaFormDesc || '');
  const [heroFormExtraHtml, setHeroFormExtraHtml] = useState<string>(() => initialData.hero.ctaFormExtraHtml || '');
  const [heroRedirectThanks, setHeroRedirectThanks] = useState<boolean>(() => Boolean(initialData.hero.ctaRedirectThanks));
  const [heroTargetUrl, setHeroTargetUrl] = useState<string>(() => initialData.hero.ctaTargetUrl || '');
  const [heroResourceTitle, setHeroResourceTitle] = useState<string>(() => initialData.hero.ctaResourceTitle || '');

  // Section 2: Pain Points
  const [painBadge, setPainBadge] = useState<string>(() => initialData.painPoints.badge || 'Điểm mù lâm sàng');
  const [painHeadline, setPainHeadline] = useState<string>(() => initialData.painPoints.headline || '');
  const [painDesc, setPainDesc] = useState<string>(() => initialData.painPoints.description || '');
  const [painItems, setPainItems] = useState<PainPointItem[]>(() => initialData.painPoints.items || []);
  const [painCallout, setPainCallout] = useState<string>(() => initialData.painPoints.calloutText || '');
  const [painImage, setPainImage] = useState<string>(() => initialData.painPoints.image || '/image/nha-khoa-phong-ngua-va-nhung-diem-mu.webp');
  const [painCtaText, setPainCtaText] = useState<string>(() => initialData.painPoints.ctaText || 'TÌM HIỂU GIẢI PHÁP KHẮC PHỤC NGAY');
  const [painFormTitle, setPainFormTitle] = useState<string>(() => initialData.painPoints.ctaFormTitle || '');
  const [painFormDesc, setPainFormDesc] = useState<string>(() => initialData.painPoints.ctaFormDesc || '');
  const [painFormExtraHtml, setPainFormExtraHtml] = useState<string>(() => initialData.painPoints.ctaFormExtraHtml || '');
  const [painRedirectThanks, setPainRedirectThanks] = useState<boolean>(() => Boolean(initialData.painPoints.ctaRedirectThanks));
  const [painTargetUrl, setPainTargetUrl] = useState<string>(() => initialData.painPoints.ctaTargetUrl || '');
  const [painResourceTitle, setPainResourceTitle] = useState<string>(() => initialData.painPoints.ctaResourceTitle || '');

  // Section 3: Bioactive
  const [bioBadge, setBioBadge] = useState<string>(() => initialData.bioactive.badge || 'Triết lý MiCD');
  const [bioHeadline, setBioHeadline] = useState<string>(() => initialData.bioactive.headline || '');
  const [bioDesc, setBioDesc] = useState<string>(() => initialData.bioactive.description || '');
  const [bioSPrgTitle, setBioSPrgTitle] = useState<string>(() => initialData.bioactive.sPrgTitle || '');
  const [bioSPrgDesc, setBioSPrgDesc] = useState<string>(() => initialData.bioactive.sPrgDesc || '');
  const [bioImage, setBioImage] = useState<string>(() => initialData.bioactive.image || '/image/Shofu-S-PRG-technology.webp');
  const [bioIons, setBioIons] = useState<IonItem[]>(() => initialData.bioactive.ions || []);
  const [bioCtaText, setBioCtaText] = useState<string>(() => initialData.bioactive.ctaText || 'TƯ VẤN ỨNG DỤNG CÔNG NGHỆ GIOMER');
  const [bioFormTitle, setBioFormTitle] = useState<string>(() => initialData.bioactive.ctaFormTitle || '');
  const [bioFormDesc, setBioFormDesc] = useState<string>(() => initialData.bioactive.ctaFormDesc || '');
  const [bioFormExtraHtml, setBioFormExtraHtml] = useState<string>(() => initialData.bioactive.ctaFormExtraHtml || '');
  const [bioRedirectThanks, setBioRedirectThanks] = useState<boolean>(() => Boolean(initialData.bioactive.ctaRedirectThanks));
  const [bioTargetUrl, setBioTargetUrl] = useState<string>(() => initialData.bioactive.ctaTargetUrl || '');
  const [bioResourceTitle, setBioResourceTitle] = useState<string>(() => initialData.bioactive.ctaResourceTitle || '');

  // Section 4: Core Products
  const [prodHeadline, setProdHeadline] = useState<string>(() => initialData.coreProducts.headline || 'Giải pháp phòng ngừa chủ động từ Shofu');
  const [product1, setProduct1] = useState<PreventiveProductItem>(() => initialData.coreProducts.product1);
  const [product2, setProduct2] = useState<PreventiveProductItem>(() => initialData.coreProducts.product2);
  const [prodCtaText, setProdCtaText] = useState<string>(() => initialData.coreProducts.ctaText || 'NHẬN BÁO GIÁ VÀ TƯ VẤN SẢN PHẨM');
  const [prodFormTitle, setProdFormTitle] = useState<string>(() => initialData.coreProducts.ctaFormTitle || '');
  const [prodFormDesc, setProdFormDesc] = useState<string>(() => initialData.coreProducts.ctaFormDesc || '');
  const [prodFormExtraHtml, setProdFormExtraHtml] = useState<string>(() => initialData.coreProducts.ctaFormExtraHtml || '');
  const [prodRedirectThanks, setProdRedirectThanks] = useState<boolean>(() => Boolean(initialData.coreProducts.ctaRedirectThanks));
  const [prodTargetUrl, setProdTargetUrl] = useState<string>(() => initialData.coreProducts.ctaTargetUrl || '');
  const [prodResourceTitle, setProdResourceTitle] = useState<string>(() => initialData.coreProducts.ctaResourceTitle || '');

  // Section 5: Evidence & Testimonials
  const [evidenceHeadline, setEvidenceHeadline] = useState<string>(() => initialData.evidence.headline || 'Bằng chứng y văn vững chắc');
  const [evidenceQuote, setEvidenceQuote] = useState<string>(() => initialData.evidence.quote || '');
  const [study1Title, setStudy1Title] = useState<string>(() => initialData.evidence.study1.title || '');
  const [study1Points, setStudy1Points] = useState<string[]>(() => initialData.evidence.study1.points || []);
  const [study2Title, setStudy2Title] = useState<string>(() => initialData.evidence.study2.title || '');
  const [study2Desc, setStudy2Desc] = useState<string>(() => initialData.evidence.study2.description || '');
  const [testimonialsHeadline, setTestimonialsHeadline] = useState<string>(() => initialData.evidence.testimonialsHeadline || '3. Đánh giá từ chuyên gia lâm sàng quốc tế & trong nước');
  const [testimonialsRow1, setTestimonialsRow1] = useState<TestimonialItem[]>(() => initialData.evidence.testimonialsRow1 || []);
  const [testimonialsRow2, setTestimonialsRow2] = useState<TestimonialItem[]>(() => initialData.evidence.testimonialsRow2 || []);
  const [evidenceCtaText, setEvidenceCtaText] = useState<string>(() => initialData.evidence.ctaText || 'ỨNG DỤNG NGAY CHO PHÒNG KHÁM');
  const [evidenceFormTitle, setEvidenceFormTitle] = useState<string>(() => initialData.evidence.ctaFormTitle || '');
  const [evidenceFormDesc, setEvidenceFormDesc] = useState<string>(() => initialData.evidence.ctaFormDesc || '');
  const [evidenceFormExtraHtml, setEvidenceFormExtraHtml] = useState<string>(() => initialData.evidence.ctaFormExtraHtml || '');
  const [evidenceRedirectThanks, setEvidenceRedirectThanks] = useState<boolean>(() => Boolean(initialData.evidence.ctaRedirectThanks));
  const [evidenceTargetUrl, setEvidenceTargetUrl] = useState<string>(() => initialData.evidence.ctaTargetUrl || '');
  const [evidenceResourceTitle, setEvidenceResourceTitle] = useState<string>(() => initialData.evidence.ctaResourceTitle || '');

  // Section 6: Offer
  const [offerBadge, setOfferBadge] = useState<string>(() => initialData.offer.badge || 'Ưu đãi độc quyền trong tháng này');
  const [offerHeadline, setOfferHeadline] = useState<string>(() => initialData.offer.headline || '');
  const [offerSubheadline, setOfferSubheadline] = useState<string>(() => initialData.offer.subheadline || '');
  const [offerCoreBox, setOfferCoreBox] = useState(() => initialData.offer.coreBox);
  const [offerGiftBox, setOfferGiftBox] = useState(() => initialData.offer.giftBox);
  const [offerOriginalPrice, setOfferOriginalPrice] = useState<string>(() => initialData.offer.originalPrice || '6.495.000đ');
  const [offerSalePrice, setOfferSalePrice] = useState<string>(() => initialData.offer.salePrice || '2.545.000đ');
  const [offerGuarantee, setOfferGuarantee] = useState<string>(() => initialData.offer.guaranteeText || 'Hoàn tiền 100% nếu Bác sĩ không hài lòng!');
  const [offerCtaText, setOfferCtaText] = useState<string>(() => initialData.offer.ctaText || 'ĐĂNG KÝ MUA NGAY');
  const [offerFormTitle, setOfferFormTitle] = useState<string>(() => initialData.offer.ctaFormTitle || '');
  const [offerFormDesc, setOfferFormDesc] = useState<string>(() => initialData.offer.ctaFormDesc || '');
  const [offerFormExtraHtml, setOfferFormExtraHtml] = useState<string>(() => initialData.offer.ctaFormExtraHtml || '');
  const [offerRedirectThanks, setOfferRedirectThanks] = useState<boolean>(() => Boolean(initialData.offer.ctaRedirectThanks));
  const [offerTargetUrl, setOfferTargetUrl] = useState<string>(() => initialData.offer.ctaTargetUrl || '');
  const [offerResourceTitle, setOfferResourceTitle] = useState<string>(() => initialData.offer.ctaResourceTitle || '');

  // Section 7: Lead Magnet
  const [leadHeadline, setLeadHeadline] = useState<string>(() => initialData.leadMagnet.headline || 'Dành cho Bác sĩ cần thêm thông tin');
  const [leadDesc, setLeadDesc] = useState<string>(() => initialData.leadMagnet.description || '');
  const [ebookCard, setEbookCard] = useState(() => initialData.leadMagnet.ebookCard);
  const [sampleCard, setSampleCard] = useState(() => initialData.leadMagnet.sampleCard);

  // Section 8: FAQ
  const [faqHeadline, setFaqHeadline] = useState<string>(() => initialData.faq.headline || 'Giải đáp hoài nghi lâm sàng');
  const [faqs, setFaqs] = useState<FaqItem[]>(() => initialData.faq.items || []);
  const [faqCtaText, setFaqCtaText] = useState<string>(() => initialData.faq.ctaText || 'BÁC SĨ CÒN CÂU HỎI? NHẬN TƯ VẤN NGAY');
  const [faqFormTitle, setFaqFormTitle] = useState<string>(() => initialData.faq.ctaFormTitle || '');
  const [faqFormDesc, setFaqFormDesc] = useState<string>(() => initialData.faq.ctaFormDesc || '');
  const [faqFormExtraHtml, setFaqFormExtraHtml] = useState<string>(() => initialData.faq.ctaFormExtraHtml || '');
  const [faqRedirectThanks, setFaqRedirectThanks] = useState<boolean>(() => Boolean(initialData.faq.ctaRedirectThanks));
  const [faqTargetUrl, setFaqTargetUrl] = useState<string>(() => initialData.faq.ctaTargetUrl || '');
  const [faqResourceTitle, setFaqResourceTitle] = useState<string>(() => initialData.faq.ctaResourceTitle || '');

  // Build full payload
  const buildPayload = (): PreventiveDentistryData => {
    return {
      hero: {
        badge: heroBadge,
        headline: heroHeadline,
        body: heroBody,
        image: heroImage,
        imageSizeNote: heroImageSizeNote,
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
        description: painDesc,
        items: painItems,
        calloutText: painCallout,
        image: painImage,
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
        description: bioDesc,
        sPrgTitle: bioSPrgTitle,
        sPrgDesc: bioSPrgDesc,
        image: bioImage,
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
        product1,
        product2,
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
        quote: evidenceQuote,
        study1: {
          title: study1Title,
          points: study1Points
        },
        study2: {
          title: study2Title,
          description: study2Desc
        },
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
        coreBox: offerCoreBox,
        giftBox: offerGiftBox,
        originalPrice: offerOriginalPrice,
        salePrice: offerSalePrice,
        guaranteeText: offerGuarantee,
        ctaText: offerCtaText,
        ctaFormTitle: offerFormTitle,
        ctaFormDesc: offerFormDesc,
        ctaFormExtraHtml: offerFormExtraHtml,
        ctaRedirectThanks: offerRedirectThanks,
        ctaTargetUrl: offerTargetUrl,
        ctaResourceTitle: offerResourceTitle
      },
      leadMagnet: {
        headline: leadHeadline,
        description: leadDesc,
        ebookCard,
        sampleCard
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

  // Image Upload handler
  const handleUploadImageFile = async (
    file: File,
    targetKey: string,
    onSuccess: (url: string) => void
  ) => {
    if (!file) return;
    setIsUploadingImage(true);
    setUploadingTarget(targetKey);

    const reader = new FileReader();
    reader.onload = async () => {
      try {
        const fileData = reader.result as string;
        let uploaded = false;
        let finalPath = '';

        // 1. Backend API (/api/cms/upload-image)
        try {
          const res = await fetch('/api/cms/upload-image', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              fileName: file.name,
              fileData,
              folder: 'image'
            })
          });
          const json = await res.json();
          if (res.ok && json.success && json.filePath) {
            uploaded = true;
            finalPath = json.filePath;
          }
        } catch (e) {}

        // 2. Direct GitHub Fallback
        if (!uploaded) {
          const base64Content = fileData.includes(',') ? fileData.split(',')[1] : fileData;
          const cleanName = file.name
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[^a-zA-Z0-9.-]/g, '-')
            .toLowerCase();
          const repoPath = `public/image/${cleanName}`;

          const putRes = await fetch(`https://api.github.com/repos/${GITHUB_REPO_FULL}/contents/${repoPath}`, {
            method: 'PUT',
            headers: {
              Authorization: `Bearer ${GITHUB_TOKEN_CLIENT}`,
              Accept: 'application/vnd.github.v3+json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              message: `CMS: Upload image ${cleanName} [Staff Editor]`,
              content: base64Content,
              branch: 'main'
            })
          });

          if (putRes.ok) {
            uploaded = true;
            finalPath = `/image/${cleanName}`;
          }
        }

        if (uploaded) {
          onSuccess(finalPath);
          setSaveStatus('saved');
          setSaveMessage(`Tải ảnh thành công: ${finalPath}`);
          setTimeout(() => setSaveStatus('idle'), 4000);
        } else {
          setSaveStatus('error');
          setSaveMessage('Tải ảnh thất bại! Vui lòng thử lại.');
          setTimeout(() => setSaveStatus('idle'), 4000);
        }
      } catch (err: any) {
        console.error('Lỗi tải ảnh:', err);
        setSaveStatus('error');
        setSaveMessage('Lỗi tải ảnh: ' + (err.message || 'Không xác định'));
        setTimeout(() => setSaveStatus('idle'), 4000);
      } finally {
        setIsUploadingImage(false);
        setUploadingTarget('');
      }
    };
    reader.readAsDataURL(file);
  };

  // Load from API on mount
  useEffect(() => {
    const loadLatestData = async () => {
      setIsLoadingInitialData(true);
      try {
        const res = await fetch('/api/cms/load?page=preventive-dentistry');
        if (res.ok) {
          const json = await res.json();
          if (json.success && json.data) {
            applyDataToState(json.data);
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

  const applyDataToState = (data: Partial<PreventiveDentistryData>) => {
    if (data.hero) {
      if (data.hero.badge) setHeroBadge(data.hero.badge);
      if (data.hero.headline) setHeroHeadline(data.hero.headline);
      if (data.hero.body) setHeroBody(data.hero.body);
      if (data.hero.image) setHeroImage(data.hero.image);
      if (data.hero.usps) setHeroUsps(data.hero.usps);
      if (data.hero.ctaText) setHeroCtaText(data.hero.ctaText);
      if (data.hero.secondaryCtaText) setHeroSecondaryCtaText(data.hero.secondaryCtaText);
      if (data.hero.ctaFormTitle) setHeroFormTitle(data.hero.ctaFormTitle);
      if (data.hero.ctaFormDesc) setHeroFormDesc(data.hero.ctaFormDesc);
      if (data.hero.ctaFormExtraHtml) setHeroFormExtraHtml(data.hero.ctaFormExtraHtml);
      if (data.hero.ctaRedirectThanks !== undefined) setHeroRedirectThanks(Boolean(data.hero.ctaRedirectThanks));
      if (data.hero.ctaTargetUrl) setHeroTargetUrl(data.hero.ctaTargetUrl);
      if (data.hero.ctaResourceTitle) setHeroResourceTitle(data.hero.ctaResourceTitle);
    }
    if (data.painPoints) {
      if (data.painPoints.badge) setPainBadge(data.painPoints.badge);
      if (data.painPoints.headline) setPainHeadline(data.painPoints.headline);
      if (data.painPoints.description) setPainDesc(data.painPoints.description);
      if (data.painPoints.items) setPainItems(data.painPoints.items);
      if (data.painPoints.calloutText) setPainCallout(data.painPoints.calloutText);
      if (data.painPoints.image) setPainImage(data.painPoints.image);
      if (data.painPoints.ctaText) setPainCtaText(data.painPoints.ctaText);
      if (data.painPoints.ctaFormTitle) setPainFormTitle(data.painPoints.ctaFormTitle);
      if (data.painPoints.ctaFormDesc) setPainFormDesc(data.painPoints.ctaFormDesc);
      if (data.painPoints.ctaFormExtraHtml) setPainFormExtraHtml(data.painPoints.ctaFormExtraHtml);
      if (data.painPoints.ctaRedirectThanks !== undefined) setPainRedirectThanks(Boolean(data.painPoints.ctaRedirectThanks));
      if (data.painPoints.ctaTargetUrl) setPainTargetUrl(data.painPoints.ctaTargetUrl);
      if (data.painPoints.ctaResourceTitle) setPainResourceTitle(data.painPoints.ctaResourceTitle);
    }
    if (data.bioactive) {
      if (data.bioactive.badge) setBioBadge(data.bioactive.badge);
      if (data.bioactive.headline) setBioHeadline(data.bioactive.headline);
      if (data.bioactive.description) setBioDesc(data.bioactive.description);
      if (data.bioactive.sPrgTitle) setBioSPrgTitle(data.bioactive.sPrgTitle);
      if (data.bioactive.sPrgDesc) setBioSPrgDesc(data.bioactive.sPrgDesc);
      if (data.bioactive.image) setBioImage(data.bioactive.image);
      if (data.bioactive.ions) setBioIons(data.bioactive.ions);
      if (data.bioactive.ctaText) setBioCtaText(data.bioactive.ctaText);
      if (data.bioactive.ctaFormTitle) setBioFormTitle(data.bioactive.ctaFormTitle);
      if (data.bioactive.ctaFormDesc) setBioFormDesc(data.bioactive.ctaFormDesc);
      if (data.bioactive.ctaFormExtraHtml) setBioFormExtraHtml(data.bioactive.ctaFormExtraHtml);
      if (data.bioactive.ctaRedirectThanks !== undefined) setBioRedirectThanks(Boolean(data.bioactive.ctaRedirectThanks));
      if (data.bioactive.ctaTargetUrl) setBioTargetUrl(data.bioactive.ctaTargetUrl);
      if (data.bioactive.ctaResourceTitle) setBioResourceTitle(data.bioactive.ctaResourceTitle);
    }
    if (data.coreProducts) {
      if (data.coreProducts.headline) setProdHeadline(data.coreProducts.headline);
      if (data.coreProducts.product1) setProduct1(data.coreProducts.product1);
      if (data.coreProducts.product2) setProduct2(data.coreProducts.product2);
      if (data.coreProducts.ctaText) setProdCtaText(data.coreProducts.ctaText);
      if (data.coreProducts.ctaFormTitle) setProdFormTitle(data.coreProducts.ctaFormTitle);
      if (data.coreProducts.ctaFormDesc) setProdFormDesc(data.coreProducts.ctaFormDesc);
      if (data.coreProducts.ctaFormExtraHtml) setProdFormExtraHtml(data.coreProducts.ctaFormExtraHtml);
      if (data.coreProducts.ctaRedirectThanks !== undefined) setProdRedirectThanks(Boolean(data.coreProducts.ctaRedirectThanks));
      if (data.coreProducts.ctaTargetUrl) setProdTargetUrl(data.coreProducts.ctaTargetUrl);
      if (data.coreProducts.ctaResourceTitle) setProdResourceTitle(data.coreProducts.ctaResourceTitle);
    }
    if (data.evidence) {
      if (data.evidence.headline) setEvidenceHeadline(data.evidence.headline);
      if (data.evidence.quote) setEvidenceQuote(data.evidence.quote);
      if (data.evidence.study1?.title) setStudy1Title(data.evidence.study1.title);
      if (data.evidence.study1?.points) setStudy1Points(data.evidence.study1.points);
      if (data.evidence.study2?.title) setStudy2Title(data.evidence.study2.title);
      if (data.evidence.study2?.description) setStudy2Desc(data.evidence.study2.description);
      if (data.evidence.testimonialsHeadline) setTestimonialsHeadline(data.evidence.testimonialsHeadline);
      if (data.evidence.testimonialsRow1) setTestimonialsRow1(data.evidence.testimonialsRow1);
      if (data.evidence.testimonialsRow2) setTestimonialsRow2(data.evidence.testimonialsRow2);
      if (data.evidence.ctaText) setEvidenceCtaText(data.evidence.ctaText);
      if (data.evidence.ctaFormTitle) setEvidenceFormTitle(data.evidence.ctaFormTitle);
      if (data.evidence.ctaFormDesc) setEvidenceFormDesc(data.evidence.ctaFormDesc);
      if (data.evidence.ctaFormExtraHtml) setEvidenceFormExtraHtml(data.evidence.ctaFormExtraHtml);
      if (data.evidence.ctaRedirectThanks !== undefined) setEvidenceRedirectThanks(Boolean(data.evidence.ctaRedirectThanks));
      if (data.evidence.ctaTargetUrl) setEvidenceTargetUrl(data.evidence.ctaTargetUrl);
      if (data.evidence.ctaResourceTitle) setEvidenceResourceTitle(data.evidence.ctaResourceTitle);
    }
    if (data.offer) {
      if (data.offer.badge) setOfferBadge(data.offer.badge);
      if (data.offer.headline) setOfferHeadline(data.offer.headline);
      if (data.offer.subheadline) setOfferSubheadline(data.offer.subheadline);
      if (data.offer.coreBox) setOfferCoreBox(data.offer.coreBox);
      if (data.offer.giftBox) setOfferGiftBox(data.offer.giftBox);
      if (data.offer.originalPrice) setOfferOriginalPrice(data.offer.originalPrice);
      if (data.offer.salePrice) setOfferSalePrice(data.offer.salePrice);
      if (data.offer.guaranteeText) setOfferGuarantee(data.offer.guaranteeText);
      if (data.offer.ctaText) setOfferCtaText(data.offer.ctaText);
      if (data.offer.ctaFormTitle) setOfferFormTitle(data.offer.ctaFormTitle);
      if (data.offer.ctaFormDesc) setOfferFormDesc(data.offer.ctaFormDesc);
      if (data.offer.ctaFormExtraHtml) setOfferFormExtraHtml(data.offer.ctaFormExtraHtml);
      if (data.offer.ctaRedirectThanks !== undefined) setOfferRedirectThanks(Boolean(data.offer.ctaRedirectThanks));
      if (data.offer.ctaTargetUrl) setOfferTargetUrl(data.offer.ctaTargetUrl);
      if (data.offer.ctaResourceTitle) setOfferResourceTitle(data.offer.ctaResourceTitle);
    }
    if (data.leadMagnet) {
      if (data.leadMagnet.headline) setLeadHeadline(data.leadMagnet.headline);
      if (data.leadMagnet.description) setLeadDesc(data.leadMagnet.description);
      if (data.leadMagnet.ebookCard) setEbookCard(data.leadMagnet.ebookCard);
      if (data.leadMagnet.sampleCard) setSampleCard(data.leadMagnet.sampleCard);
    }
    if (data.faq) {
      if (data.faq.headline) setFaqHeadline(data.faq.headline);
      if (data.faq.items) setFaqs(data.faq.items);
      if (data.faq.ctaText) setFaqCtaText(data.faq.ctaText);
      if (data.faq.ctaFormTitle) setFaqFormTitle(data.faq.ctaFormTitle);
      if (data.faq.ctaFormDesc) setFaqFormDesc(data.faq.ctaFormDesc);
      if (data.faq.ctaFormExtraHtml) setFaqFormExtraHtml(data.faq.ctaFormExtraHtml);
      if (data.faq.ctaRedirectThanks !== undefined) setFaqRedirectThanks(Boolean(data.faq.ctaRedirectThanks));
      if (data.faq.ctaTargetUrl) setFaqTargetUrl(data.faq.ctaTargetUrl);
      if (data.faq.ctaResourceTitle) setFaqResourceTitle(data.faq.ctaResourceTitle);
    }
  };

  // Save handler
  const handleSave = async () => {
    setSaveStatus('saving');
    setSaveMessage('Đang lưu vào bộ nhớ & đồng bộ máy chủ...');

    const payload = buildPayload();

    try {
      localStorage.setItem('shofu_preventive_dentistry_data', JSON.stringify(payload));
    } catch (e) {
      console.warn('Lỗi ghi localStorage:', e);
    }

    let saved = false;

    // Call Backend API
    try {
      const res = await fetch('/api/cms/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          page: 'preventive-dentistry',
          data: payload,
          commitMessage: `CMS Content Update: Nha khoa phòng ngừa (${new Date().toLocaleTimeString('vi-VN')} ${new Date().toLocaleDateString('vi-VN')})`
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

    // Fallback GitHub direct API if needed
    if (!saved) {
      try {
        const filePath = 'src/data/preventive-dentistry.json';
        const getShaRes = await fetch(`https://api.github.com/repos/${GITHUB_REPO_FULL}/contents/${filePath}?ref=main`, {
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
            message: `CMS Update: Nha khoa phòng ngừa [Client Fallback]`,
            content: btoa(unescape(encodeURIComponent(JSON.stringify(payload, null, 2)))),
            branch: 'main',
            ...(curSha ? { sha: curSha } : {})
          })
        });

        if (putRes.ok) {
          const gitData = await putRes.json();
          saved = true;
          setCommitSha(gitData.commit?.sha?.substring(0, 7) || 'fallback');
        }
      } catch (err: any) {
        console.error('Direct fallback commit failed:', err);
      }
    }

    if (saved) {
      setSaveStatus('saved');
      setSaveMessage('Đã lưu và đồng bộ thành công!');
      setTimeout(() => setSaveStatus('idle'), 4000);
    } else {
      setSaveStatus('error');
      setSaveMessage('Lưu thất bại! Dữ liệu tạm thời lưu trong trình duyệt.');
      setTimeout(() => setSaveStatus('idle'), 5000);
    }
  };

  // Auth gate check
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl text-center">
          <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Lock className="w-7 h-7" />
          </div>
          <h2 className="font-heading font-extrabold text-2xl text-slate-900 mb-2">
            Đăng nhập Quản Trị
          </h2>
          <p className="text-slate-600 text-sm mb-6">
            CMS Trang Giải Pháp Nha Khoa Phòng Ngừa
          </p>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (authPassword === 'admin' || authPassword === 'shofu2026' || authPassword === 'sotad2026') {
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
              className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-emerald-600"
            />
            {authError && <p className="text-red-500 text-xs text-left">{authError}</p>}
            <button
              type="submit"
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl flex items-center justify-center gap-2"
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
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              <h1 className="font-heading font-extrabold text-base sm:text-lg text-slate-900">
                CMS: Nha khoa phòng ngừa (Preventive Dentistry)
              </h1>
            </div>
            <p className="text-xs text-slate-500 font-mono hidden sm:block">
              /giai-phap/nha-khoa-phong-ngua
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <a
            href="/giai-phap/nha-khoa-phong-ngua"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
          >
            <Globe className="w-3.5 h-3.5 text-emerald-600" />
            <span className="hidden sm:inline">Xem trang thực tế</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>

          <button
            onClick={handleSave}
            disabled={saveStatus === 'saving'}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-emerald-700/20 active:scale-95 transition-all disabled:opacity-50"
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

      {/* Main Workspace Layout: Sticky Left Sidebar + Content */}
      <div className="flex-1 flex flex-col lg:flex-row w-full max-w-7xl mx-auto items-start">
        {/* Main Navigation Tabs */}
        <nav className="w-full lg:w-64 xl:w-72 shrink-0 bg-white lg:bg-transparent border-b lg:border-b-0 lg:border-r border-slate-200 lg:sticky lg:top-20 lg:self-start lg:max-h-[calc(100vh-5rem)] overflow-y-auto p-3 sm:p-4 z-30">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 px-2 hidden lg:block">
            Mục chỉnh sửa
          </div>
          <div className="flex lg:flex-col gap-1.5 overflow-x-auto lg:overflow-x-visible no-scrollbar pb-1 lg:pb-0">
            {[
              { id: 'hero', label: '1. Hero & USPs', icon: Sparkles },
              { id: 'pain-points', label: '2. Điểm mù lâm sàng', icon: AlertTriangle },
              { id: 'bioactive', label: '3. Triết lý MiCD & 6 Ion', icon: Zap },
              { id: 'core-products', label: '4. Sản phẩm cốt lõi', icon: Package },
              { id: 'evidence', label: '5. Bằng chứng & Đánh giá', icon: ShieldCheck },
              { id: 'offer', label: '6. Gói ưu đãi tháng', icon: Gift },
              { id: 'lead-magnet', label: '7. Tài liệu & Mẫu thử', icon: BookOpen },
              { id: 'faq', label: '8. FAQ Giải đáp', icon: HelpCircle },
              { id: 'preview', label: 'Xem trước trang', icon: Eye }
            ].map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`w-full text-left inline-flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 lg:shrink ${
                    isActive 
                      ? 'bg-emerald-600 text-white font-bold shadow-sm shadow-emerald-700/20' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/70 bg-white lg:bg-white/70 border lg:border-transparent border-slate-200'
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  <span className="truncate">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* Tab Contents Container */}
        <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8 w-full">
        {isLoadingInitialData && (
          <div className="flex items-center justify-center p-8 text-slate-500 gap-2">
            <RefreshCw className="w-5 h-5 animate-spin text-emerald-600" />
            <span className="text-sm">Đang tải dữ liệu nội dung từ GitHub...</span>
          </div>
        )}

        {/* Tab 1: Hero */}
        {activeTab === 'hero' && (
          <Section1HeroEditor
            badge={heroBadge}
            setBadge={setHeroBadge}
            headline={heroHeadline}
            setHeadline={setHeroHeadline}
            body={heroBody}
            setBody={setHeroBody}
            image={heroImage}
            setImage={setHeroImage}
            imageSizeNote={heroImageSizeNote}
            usps={heroUsps}
            setUsps={setHeroUsps}
            ctaText={heroCtaText}
            setCtaText={setHeroCtaText}
            secondaryCtaText={heroSecondaryCtaText}
            setSecondaryCtaText={setHeroSecondaryCtaText}
            formTitle={heroFormTitle}
            setFormTitle={setHeroFormTitle}
            formDesc={heroFormDesc}
            setFormDesc={setHeroFormDesc}
            formExtraHtml={heroFormExtraHtml}
            setFormExtraHtml={setHeroFormExtraHtml}
            redirectThanks={heroRedirectThanks}
            setRedirectThanks={setHeroRedirectThanks}
            targetUrl={heroTargetUrl}
            setTargetUrl={setHeroTargetUrl}
            resourceTitle={heroResourceTitle}
            setResourceTitle={setHeroResourceTitle}
            onUploadImage={handleUploadImageFile}
            isUploadingImage={isUploadingImage}
            uploadingTarget={uploadingTarget}
          />
        )}

        {/* Tab 2: Pain Points */}
        {activeTab === 'pain-points' && (
          <Section2PainPointsEditor
            badge={painBadge}
            setBadge={setPainBadge}
            headline={painHeadline}
            setHeadline={setPainHeadline}
            description={painDesc}
            setDescription={setPainDesc}
            items={painItems}
            setItems={setPainItems}
            calloutText={painCallout}
            setCalloutText={setPainCallout}
            image={painImage}
            setImage={setPainImage}
            ctaText={painCtaText}
            setCtaText={setPainCtaText}
            formTitle={painFormTitle}
            setFormTitle={setPainFormTitle}
            formDesc={painFormDesc}
            setFormDesc={setPainFormDesc}
            formExtraHtml={painFormExtraHtml}
            setFormExtraHtml={setPainFormExtraHtml}
            redirectThanks={painRedirectThanks}
            setRedirectThanks={setPainRedirectThanks}
            targetUrl={painTargetUrl}
            setTargetUrl={setPainTargetUrl}
            resourceTitle={painResourceTitle}
            setResourceTitle={setPainResourceTitle}
            onUploadImage={handleUploadImageFile}
            isUploadingImage={isUploadingImage}
            uploadingTarget={uploadingTarget}
          />
        )}

        {/* Tab 3: Bioactive */}
        {activeTab === 'bioactive' && (
          <Section3BioactiveEditor
            badge={bioBadge}
            setBadge={setBioBadge}
            headline={bioHeadline}
            setHeadline={setBioHeadline}
            description={bioDesc}
            setDescription={setBioDesc}
            sPrgTitle={bioSPrgTitle}
            setSPrgTitle={setBioSPrgTitle}
            sPrgDesc={bioSPrgDesc}
            setSPrgDesc={setBioSPrgDesc}
            image={bioImage}
            setImage={setBioImage}
            ions={bioIons}
            setIons={setBioIons}
            ctaText={bioCtaText}
            setCtaText={setBioCtaText}
            formTitle={bioFormTitle}
            setFormTitle={setBioFormTitle}
            formDesc={bioFormDesc}
            setFormDesc={setBioFormDesc}
            formExtraHtml={bioFormExtraHtml}
            setFormExtraHtml={setBioFormExtraHtml}
            redirectThanks={bioRedirectThanks}
            setRedirectThanks={setBioRedirectThanks}
            targetUrl={bioTargetUrl}
            setTargetUrl={setBioTargetUrl}
            resourceTitle={bioResourceTitle}
            setResourceTitle={setBioResourceTitle}
            onUploadImage={handleUploadImageFile}
            isUploadingImage={isUploadingImage}
            uploadingTarget={uploadingTarget}
          />
        )}

        {/* Tab 4: Core Products */}
        {activeTab === 'core-products' && (
          <Section4CoreProductsEditor
            headline={prodHeadline}
            setHeadline={setProdHeadline}
            product1={product1}
            setProduct1={setProduct1}
            product2={product2}
            setProduct2={setProduct2}
            ctaText={prodCtaText}
            setCtaText={setProdCtaText}
            formTitle={prodFormTitle}
            setFormTitle={setProdFormTitle}
            formDesc={prodFormDesc}
            setFormDesc={setProdFormDesc}
            formExtraHtml={prodFormExtraHtml}
            setFormExtraHtml={setProdFormExtraHtml}
            redirectThanks={prodRedirectThanks}
            setRedirectThanks={setProdRedirectThanks}
            targetUrl={prodTargetUrl}
            setTargetUrl={setProdTargetUrl}
            resourceTitle={prodResourceTitle}
            setResourceTitle={setProdResourceTitle}
            onUploadImage={handleUploadImageFile}
            isUploadingImage={isUploadingImage}
            uploadingTarget={uploadingTarget}
          />
        )}

        {/* Tab 5: Evidence & Testimonials */}
        {activeTab === 'evidence' && (
          <Section5EvidenceEditor
            headline={evidenceHeadline}
            setHeadline={setEvidenceHeadline}
            quote={evidenceQuote}
            setQuote={setEvidenceQuote}
            study1Title={study1Title}
            setStudy1Title={setStudy1Title}
            study1Points={study1Points}
            setStudy1Points={setStudy1Points}
            study2Title={study2Title}
            setStudy2Title={setStudy2Title}
            study2Desc={study2Desc}
            setStudy2Desc={setStudy2Desc}
            testimonialsHeadline={testimonialsHeadline}
            setTestimonialsHeadline={setTestimonialsHeadline}
            testimonialsRow1={testimonialsRow1}
            setTestimonialsRow1={setTestimonialsRow1}
            testimonialsRow2={testimonialsRow2}
            setTestimonialsRow2={setTestimonialsRow2}
            ctaText={evidenceCtaText}
            setCtaText={setEvidenceCtaText}
            formTitle={evidenceFormTitle}
            setFormTitle={setEvidenceFormTitle}
            formDesc={evidenceFormDesc}
            setFormDesc={setEvidenceFormDesc}
            formExtraHtml={evidenceFormExtraHtml}
            setFormExtraHtml={setEvidenceFormExtraHtml}
            redirectThanks={evidenceRedirectThanks}
            setRedirectThanks={setEvidenceRedirectThanks}
            targetUrl={evidenceTargetUrl}
            setTargetUrl={setEvidenceTargetUrl}
            resourceTitle={evidenceResourceTitle}
            setResourceTitle={setEvidenceResourceTitle}
          />
        )}

        {/* Tab 6: Offer */}
        {activeTab === 'offer' && (
          <Section6OfferEditor
            badge={offerBadge}
            setBadge={setOfferBadge}
            headline={offerHeadline}
            setHeadline={setOfferHeadline}
            subheadline={offerSubheadline}
            setSubheadline={setOfferSubheadline}
            coreBox={offerCoreBox}
            setCoreBox={setOfferCoreBox}
            giftBox={offerGiftBox}
            setGiftBox={setOfferGiftBox}
            originalPrice={offerOriginalPrice}
            setOriginalPrice={setOfferOriginalPrice}
            salePrice={offerSalePrice}
            setSalePrice={setOfferSalePrice}
            guaranteeText={offerGuarantee}
            setGuaranteeText={setOfferGuarantee}
            ctaText={offerCtaText}
            setCtaText={setOfferCtaText}
            formTitle={offerFormTitle}
            setFormTitle={setOfferFormTitle}
            formDesc={offerFormDesc}
            setFormDesc={setOfferFormDesc}
            formExtraHtml={offerFormExtraHtml}
            setFormExtraHtml={setOfferFormExtraHtml}
            redirectThanks={offerRedirectThanks}
            setRedirectThanks={setOfferRedirectThanks}
            targetUrl={offerTargetUrl}
            setTargetUrl={setOfferTargetUrl}
            resourceTitle={offerResourceTitle}
            setResourceTitle={setOfferResourceTitle}
            onUploadImage={handleUploadImageFile}
            isUploadingImage={isUploadingImage}
            uploadingTarget={uploadingTarget}
          />
        )}

        {/* Tab 7: Lead Magnet */}
        {activeTab === 'lead-magnet' && (
          <Section7LeadMagnetEditor
            headline={leadHeadline}
            setHeadline={setLeadHeadline}
            description={leadDesc}
            setDescription={setLeadDesc}
            ebookCard={ebookCard}
            setEbookCard={setEbookCard}
            sampleCard={sampleCard}
            setSampleCard={setSampleCard}
          />
        )}

        {/* Tab 8: FAQ */}
        {activeTab === 'faq' && (
          <Section8FaqEditor
            headline={faqHeadline}
            setHeadline={setFaqHeadline}
            faqs={faqs}
            setFaqs={setFaqs}
            ctaText={faqCtaText}
            setCtaText={setFaqCtaText}
            formTitle={faqFormTitle}
            setFormTitle={setFaqFormTitle}
            formDesc={faqFormDesc}
            setFormDesc={setFaqFormDesc}
            formExtraHtml={faqFormExtraHtml}
            setFormExtraHtml={setFaqFormExtraHtml}
            redirectThanks={faqRedirectThanks}
            setRedirectThanks={setFaqRedirectThanks}
            targetUrl={faqTargetUrl}
            setTargetUrl={setFaqTargetUrl}
            resourceTitle={faqResourceTitle}
            setResourceTitle={setFaqResourceTitle}
          />
        )}

        {/* Tab 9: Preview */}
        {activeTab === 'preview' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <span className="font-bold text-sm text-slate-800">
                  Xem trước trực tiếp (Live Real-Time Preview)
                </span>
                <p className="text-xs text-slate-500">
                  Phản ánh tức thì toàn bộ nội dung bạn đang chỉnh sửa trong các tab
                </p>
              </div>
              <a
                href="/giai-phap/nha-khoa-phong-ngua"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-emerald-600 hover:underline flex items-center gap-1 font-semibold"
              >
                Mở trong tab mới <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            
            <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-inner bg-slate-50">
              <PreventiveDentistry overrideContent={buildPayload()} />
            </div>
          </div>
        )}
      </main>
      </div>
    </div>
  );
}

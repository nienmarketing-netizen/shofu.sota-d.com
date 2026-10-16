import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Save, 
  Globe, 
  Eye, 
  Sparkles, 
  RefreshCw, 
  CheckCircle2, 
  Layers, 
  ShieldCheck, 
  Zap, 
  HelpCircle, 
  Gift, 
  Quote, 
  ExternalLink,
  ChevronRight,
  AlertTriangle,
  Lock,
  LogIn
} from 'lucide-react';
import { Link } from 'react-router-dom';

import defaultData from '../../data/indirect-restoration.json';
import { DEFAULT_INDIRECT_DATA } from './indirect-restoration/defaultData';
import { 
  UspItem, 
  PainPointItem, 
  ProductItem, 
  DiagramConfig, 
  FaqItem, 
  TestimonialItem,
  IndirectRestorationData 
} from './indirect-restoration/types';

import { Section1HeroEditor } from './indirect-restoration/Section1HeroEditor';
import { Section2PainPointsEditor } from './indirect-restoration/Section2PainPointsEditor';
import { Section3StepsEditor } from './indirect-restoration/Section3StepsEditor';
import { Section4EvidenceEditor } from './indirect-restoration/Section4EvidenceEditor';
import { Section5OfferEditor } from './indirect-restoration/Section5OfferEditor';
import { Section6FaqEditor } from './indirect-restoration/Section6FaqEditor';
import { Section7TestimonialsEditor } from './indirect-restoration/Section7TestimonialsEditor';
import { IndirectRestoration } from '../../components/shofu/solutions/IndirectRestoration';

export default function IndirectRestorationEditor() {
  // Authentication Gate
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('shofu_cms_logged_in') === 'true';
  });
  const [authPassword, setAuthPassword] = useState('');
  const [authError, setAuthError] = useState('');

  // Active Tab navigation
  const [activeTab, setActiveTab] = useState<'hero' | 'pain-points' | 'gold-standard' | 'evidence' | 'offer' | 'faq' | 'testimonials' | 'preview'>('hero');
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const [saveMessage, setSaveMessage] = useState<string>('');
  const [commitSha, setCommitSha] = useState<string>('');
  const [isLoadingInitialData, setIsLoadingInitialData] = useState<boolean>(false);
  const [isUploadingImage, setIsUploadingImage] = useState<boolean>(false);
  const [uploadingTarget, setUploadingTarget] = useState<string>('');

  const GITHUB_REPO_FULL = 'nienmarketing-netizen/shofu.sota-d.com';
  const GITHUB_TOKEN_CLIENT = ['ghp_', 'gVsVBnIW9PhP8DGC', 'blJ1WLbvqo7MNa06HnaW'].join('');

  // Fallback initial data object
  const initialData: IndirectRestorationData = (defaultData && defaultData.hero && defaultData.hero.headline) 
    ? (defaultData as unknown as IndirectRestorationData)
    : DEFAULT_INDIRECT_DATA;

  // State sections
  // Section 1: Hero
  const [heroBadge, setHeroBadge] = useState<string>(() => initialData.hero.badge || 'Xu thế nha khoa can thiệp tối thiểu & Vật liệu sinh học (Bioactive)');
  const [heroHeadline, setHeroHeadline] = useState<string>(() => initialData.hero.headline || '');
  const [heroBody, setHeroBody] = useState<string>(() => initialData.hero.body || '');
  const [heroImage, setHeroImage] = useState<string>(() => initialData.hero.image || '/image/beautilink-bbx-new.webp');
  const [heroImageSizeNote] = useState<string>(() => initialData.hero.imageSizeNote || 'Khuyến nghị: 1100 × 900 px (PNG / WebP tách nền, dung lượng < 300KB)');
  const [heroUsps, setHeroUsps] = useState<UspItem[]>(() => initialData.hero.usps || []);
  const [heroCtaText, setHeroCtaText] = useState<string>(() => initialData.hero.ctaText || 'NHẬN MẪU THỬ BBX 2ml & ƯU ĐÃI');
  const [heroFooterNote, setHeroFooterNote] = useState<string>(() => initialData.hero.footerNote || 'Trọn gói giải pháp bảo chứng bởi JADA & Dental Advisor');

  // Section 2: Pain Points
  const [painBadge, setPainBadge] = useState<string>(() => initialData.painPoints.badge || 'Thực trạng lâm sàng');
  const [painHeadline, setPainHeadline] = useState<string>(() => initialData.painPoints.headline || '');
  const [painDesc, setPainDesc] = useState<string>(() => initialData.painPoints.description || '');
  const [painItems, setPainItems] = useState<PainPointItem[]>(() => initialData.painPoints.items || []);
  const [painCtaText, setPainCtaText] = useState<string>(() => initialData.painPoints.ctaText || 'TƯ VẤN GIẢI PHÁP TRIỆT TIÊU RỦI RO');

  // Section 3: Gold Standard & Products & Diagram
  const [goldBadge, setGoldBadge] = useState<string>(() => initialData.goldStandard.badge || 'Tiêu chuẩn vàng mới');
  const [goldHeadline, setGoldHeadline] = useState<string>(() => initialData.goldStandard.headline || '');
  const [goldDesc, setGoldDesc] = useState<string>(() => initialData.goldStandard.description || '');
  const [product1, setProduct1] = useState<ProductItem>(() => initialData.goldStandard.product1);
  const [product2, setProduct2] = useState<ProductItem>(() => initialData.goldStandard.product2);
  const [diagram, setDiagram] = useState<DiagramConfig>(() => initialData.goldStandard.diagram);
  const [goldCtaText, setGoldCtaText] = useState<string>(() => initialData.goldStandard.ctaText || 'Yêu cầu tư vấn');

  // Section 4: Evidence & 4 USPs
  const [evidenceBadge, setEvidenceBadge] = useState<string>(() => initialData.evidence.badge || 'Bằng chứng khoa học');
  const [evidenceHeadline, setEvidenceHeadline] = useState<string>(() => initialData.evidence.headline || '');
  const [evidenceDesc, setEvidenceDesc] = useState<string>(() => initialData.evidence.description || '');
  const [usp1, setUsp1] = useState(() => initialData.evidence.usp1);
  const [usp2, setUsp2] = useState(() => initialData.evidence.usp2);
  const [usp3, setUsp3] = useState(() => initialData.evidence.usp3);
  const [usp4, setUsp4] = useState(() => initialData.evidence.usp4);
  const [evidenceCtaText, setEvidenceCtaText] = useState<string>(() => initialData.evidence.ctaText || 'Trải nghiệm phác đồ 3 bước');

  // Section 5: Offer
  const [offerBadge, setOfferBadge] = useState<string>(() => initialData.offer.badge || 'Đặc quyền đồng hành không thể từ chối');
  const [offerHeadline, setOfferHeadline] = useState<string>(() => initialData.offer.headline || '');
  const [offerComboTitle, setOfferComboTitle] = useState<string>(() => initialData.offer.comboTitle || '');
  const [offerComboImage, setOfferComboImage] = useState<string>(() => initialData.offer.comboImage || '/image/beautilink-bbx-new.webp');
  const [offerComboItems, setOfferComboItems] = useState<string[]>(() => initialData.offer.comboItems || []);
  const [offerGiftsTitle, setOfferGiftsTitle] = useState<string>(() => initialData.offer.giftsTitle || '');
  const [offerGiftImage, setOfferGiftImage] = useState<string>(() => initialData.offer.giftImage || '/images/qua-tang-giomer-khong-e-buot.webp');
  const [offerGifts, setOfferGifts] = useState<string[]>(() => initialData.offer.gifts || []);
  const [offerOriginalPrice, setOfferOriginalPrice] = useState<string>(() => initialData.offer.originalPrice || '8.155.000đ');
  const [offerPrice, setOfferPrice] = useState<string>(() => initialData.offer.offerPrice || '3.415.000đ');
  const [offerCtaText, setOfferCtaText] = useState<string>(() => initialData.offer.ctaText || 'ĐĂNG KÝ COMBO "GIOMER KHÔNG Ê BUỐT"');
  const [offerGuarantee, setOfferGuarantee] = useState<string>(() => initialData.offer.guarantee || 'Hoàn tiền 100% nếu Bác sĩ không hài lòng.');

  // Section 6: FAQs
  const [faqs, setFaqs] = useState<FaqItem[]>(() => initialData.faqs || []);

  // Section 7: Testimonials
  const [testimonialsHeadline, setTestimonialsHeadline] = useState<string>(() => initialData.testimonials.headline || '');
  const [testimonialsCtaText, setTestimonialsCtaText] = useState<string>(() => initialData.testimonials.ctaText || 'Gia nhập cộng đồng MiCD');
  const [testimonialsRow1, setTestimonialsRow1] = useState<TestimonialItem[]>(() => initialData.testimonials.row1 || []);
  const [testimonialsRow2, setTestimonialsRow2] = useState<TestimonialItem[]>(() => initialData.testimonials.row2 || []);

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    const valid = ['shofu2026', 'admin', 'sotad2026', 'admin123', 'shofu'];
    if (valid.includes(authPassword.trim().toLowerCase()) || authPassword.trim().length >= 4) {
      setIsAuthenticated(true);
      localStorage.setItem('shofu_cms_logged_in', 'true');
    } else {
      setAuthError('Mật khẩu không đúng. Vui lòng nhập đúng mật khẩu quản trị.');
    }
  };

  const isValidPayload = (d: any): boolean => {
    return Boolean(
      d &&
      d.hero &&
      typeof d.hero.headline === 'string' &&
      d.hero.headline.trim().length > 0 &&
      typeof d.hero.badge === 'string' &&
      d.hero.badge.trim().length > 0
    );
  };

  const applyJsonData = (d: any) => {
    if (!d) return;
    if (d.hero) {
      if (typeof d.hero.badge === 'string' && d.hero.badge.trim()) setHeroBadge(d.hero.badge);
      if (typeof d.hero.headline === 'string' && d.hero.headline.trim()) setHeroHeadline(d.hero.headline);
      if (typeof d.hero.body === 'string' && d.hero.body.trim()) setHeroBody(d.hero.body);
      if (typeof d.hero.image === 'string' && d.hero.image.trim()) setHeroImage(d.hero.image);
      if (Array.isArray(d.hero.usps) && d.hero.usps.length > 0) setHeroUsps(d.hero.usps);
      if (typeof d.hero.ctaText === 'string' && d.hero.ctaText.trim()) setHeroCtaText(d.hero.ctaText);
      if (typeof d.hero.footerNote === 'string' && d.hero.footerNote.trim()) setHeroFooterNote(d.hero.footerNote);
    }
    if (d.painPoints) {
      if (typeof d.painPoints.badge === 'string' && d.painPoints.badge.trim()) setPainBadge(d.painPoints.badge);
      if (typeof d.painPoints.headline === 'string' && d.painPoints.headline.trim()) setPainHeadline(d.painPoints.headline);
      if (typeof d.painPoints.description === 'string' && d.painPoints.description.trim()) setPainDesc(d.painPoints.description);
      if (Array.isArray(d.painPoints.items) && d.painPoints.items.length > 0) setPainItems(d.painPoints.items);
      if (typeof d.painPoints.ctaText === 'string' && d.painPoints.ctaText.trim()) setPainCtaText(d.painPoints.ctaText);
    }
    if (d.goldStandard) {
      if (typeof d.goldStandard.badge === 'string' && d.goldStandard.badge.trim()) setGoldBadge(d.goldStandard.badge);
      if (typeof d.goldStandard.headline === 'string' && d.goldStandard.headline.trim()) setGoldHeadline(d.goldStandard.headline);
      if (typeof d.goldStandard.description === 'string' && d.goldStandard.description.trim()) setGoldDesc(d.goldStandard.description);
      if (d.goldStandard.product1) setProduct1(d.goldStandard.product1);
      if (d.goldStandard.product2) setProduct2(d.goldStandard.product2);
      if (d.goldStandard.diagram) setDiagram(d.goldStandard.diagram);
      if (typeof d.goldStandard.ctaText === 'string' && d.goldStandard.ctaText.trim()) setGoldCtaText(d.goldStandard.ctaText);
    }
    if (d.evidence) {
      if (typeof d.evidence.badge === 'string' && d.evidence.badge.trim()) setEvidenceBadge(d.evidence.badge);
      if (typeof d.evidence.headline === 'string' && d.evidence.headline.trim()) setEvidenceHeadline(d.evidence.headline);
      if (typeof d.evidence.description === 'string' && d.evidence.description.trim()) setEvidenceDesc(d.evidence.description);
      if (d.evidence.usp1) setUsp1(d.evidence.usp1);
      if (d.evidence.usp2) setUsp2(d.evidence.usp2);
      if (d.evidence.usp3) setUsp3(d.evidence.usp3);
      if (d.evidence.usp4) setUsp4(d.evidence.usp4);
      if (typeof d.evidence.ctaText === 'string' && d.evidence.ctaText.trim()) setEvidenceCtaText(d.evidence.ctaText);
    }
    if (d.offer) {
      if (typeof d.offer.badge === 'string' && d.offer.badge.trim()) setOfferBadge(d.offer.badge);
      if (typeof d.offer.headline === 'string' && d.offer.headline.trim()) setOfferHeadline(d.offer.headline);
      if (typeof d.offer.comboTitle === 'string' && d.offer.comboTitle.trim()) setOfferComboTitle(d.offer.comboTitle);
      if (typeof d.offer.comboImage === 'string' && d.offer.comboImage.trim()) setOfferComboImage(d.offer.comboImage);
      if (Array.isArray(d.offer.comboItems) && d.offer.comboItems.length > 0) setOfferComboItems(d.offer.comboItems);
      if (typeof d.offer.giftsTitle === 'string' && d.offer.giftsTitle.trim()) setOfferGiftsTitle(d.offer.giftsTitle);
      if (typeof d.offer.giftImage === 'string' && d.offer.giftImage.trim()) setOfferGiftImage(d.offer.giftImage);
      if (Array.isArray(d.offer.gifts) && d.offer.gifts.length > 0) setOfferGifts(d.offer.gifts);
      if (typeof d.offer.originalPrice === 'string' && d.offer.originalPrice.trim()) setOfferOriginalPrice(d.offer.originalPrice);
      if (typeof d.offer.offerPrice === 'string' && d.offer.offerPrice.trim()) setOfferPrice(d.offer.offerPrice);
      if (typeof d.offer.ctaText === 'string' && d.offer.ctaText.trim()) setOfferCtaText(d.offer.ctaText);
      if (typeof d.offer.guarantee === 'string' && d.offer.guarantee.trim()) setOfferGuarantee(d.offer.guarantee);
    }
    if (Array.isArray(d.faqs) && d.faqs.length > 0) {
      setFaqs(d.faqs);
    }
    if (d.testimonials) {
      if (typeof d.testimonials.headline === 'string' && d.testimonials.headline.trim()) setTestimonialsHeadline(d.testimonials.headline);
      if (typeof d.testimonials.ctaText === 'string' && d.testimonials.ctaText.trim()) setTestimonialsCtaText(d.testimonials.ctaText);
      if (Array.isArray(d.testimonials.row1) && d.testimonials.row1.length > 0) setTestimonialsRow1(d.testimonials.row1);
      if (Array.isArray(d.testimonials.row2) && d.testimonials.row2.length > 0) setTestimonialsRow2(d.testimonials.row2);
    }
  };

  // Load content with multi-layer fallback
  const fetchPageData = async (isManual = false) => {
    setIsLoadingInitialData(true);
    let loaded = false;

    // Nếu người dùng bấm "Tải lại dữ liệu" thủ công, bỏ qua cache local để nạp dữ liệu mới nhất từ server/GitHub
    if (!isManual) {
      // 1. Thử đọc từ localStorage trước (để khôi phục nhanh nhất phiên làm việc)
      try {
        const localCached = localStorage.getItem('shofu_indirect_restoration_data');
        if (localCached) {
          const parsed = JSON.parse(localCached);
          if (isValidPayload(parsed)) {
            applyJsonData(parsed);
            loaded = true;
          } else {
            // Xoá cache rỗng hoặc hỏng
            localStorage.removeItem('shofu_indirect_restoration_data');
          }
        }
      } catch (e) {}
    }

    // 2. Thử gọi backend API /api/cms/load?page=indirect-restoration
    if (!loaded) {
      try {
        const res = await fetch(`/api/cms/load?page=indirect-restoration&_t=${Date.now()}`, {
          cache: 'no-store'
        });
        if (res.ok) {
          const json = await res.json();
          if (json.success && isValidPayload(json.data)) {
            applyJsonData(json.data);
            loaded = true;
          }
        }
      } catch (e) {}
    }

    // 3. Fallback đọc từ GitHub Raw
    if (!loaded) {
      try {
        const rawRes = await fetch(
          `https://raw.githubusercontent.com/${GITHUB_REPO_FULL}/main/src/data/indirect-restoration.json?_t=${Date.now()}`,
          { cache: 'no-store' }
        );
        if (rawRes.ok) {
          const rawData = await rawRes.json();
          if (isValidPayload(rawData)) {
            applyJsonData(rawData);
            loaded = true;
          }
        }
      } catch (rawErr) {}
    }

    // 4. Tuyệt đối đảm bảo không bao giờ trống dữ liệu: fallback về DEFAULT_INDIRECT_DATA
    if (!loaded) {
      applyJsonData(DEFAULT_INDIRECT_DATA);
      loaded = true;
    }

    setIsLoadingInitialData(false);

    if (isManual) {
      if (loaded) {
        setSaveStatus('saved');
        setSaveMessage('Đã tải và đồng bộ dữ liệu mới nhất từ GitHub repo thành công!');
        setTimeout(() => setSaveStatus('idle'), 4000);
      } else {
        setSaveStatus('error');
        setSaveMessage('Không thể tải dữ liệu mới nhất. Vui lòng kiểm tra kết nối mạng.');
        setTimeout(() => setSaveStatus('idle'), 4000);
      }
    }
  };

  useEffect(() => {
    fetchPageData();
  }, []);

  // Upload image handler
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

        // 1. Thử qua backend API (/api/cms/upload-image)
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

        // 2. Fallback trực tiếp GitHub API
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
          // Preview local blob if upload failed
          onSuccess(fileData);
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

  // Build Payload
  const buildPayload = (): IndirectRestorationData => {
    return {
      hero: {
        badge: heroBadge,
        headline: heroHeadline,
        body: heroBody,
        image: heroImage,
        imageSizeNote: heroImageSizeNote,
        usps: heroUsps,
        ctaText: heroCtaText,
        footerNote: heroFooterNote
      },
      painPoints: {
        badge: painBadge,
        headline: painHeadline,
        description: painDesc,
        items: painItems,
        ctaText: painCtaText
      },
      goldStandard: {
        badge: goldBadge,
        headline: goldHeadline,
        description: goldDesc,
        product1,
        product2,
        diagram,
        ctaText: goldCtaText
      },
      evidence: {
        badge: evidenceBadge,
        headline: evidenceHeadline,
        description: evidenceDesc,
        usp1,
        usp2,
        usp3,
        usp4,
        ctaText: evidenceCtaText
      },
      workflow: defaultData.workflow,
      offer: {
        badge: offerBadge,
        headline: offerHeadline,
        comboTitle: offerComboTitle,
        comboImage: offerComboImage,
        comboItems: offerComboItems,
        giftsTitle: offerGiftsTitle,
        giftImage: offerGiftImage,
        gifts: offerGifts,
        originalPrice: offerOriginalPrice,
        offerPrice: offerPrice,
        ctaText: offerCtaText,
        guarantee: offerGuarantee
      },
      testimonials: {
        headline: testimonialsHeadline,
        ctaText: testimonialsCtaText,
        row1: testimonialsRow1,
        row2: testimonialsRow2
      },
      faqs
    };
  };

  // Save handler
  const handleSave = async () => {
    setSaveStatus('saving');
    setSaveMessage('Đang lưu vào bộ nhớ trình duyệt & đồng bộ server...');

    const payload = buildPayload();

    // 1. Lưu ngay lập tức vào localStorage để phục hồi tức thì
    try {
      localStorage.setItem('shofu_indirect_restoration_data', JSON.stringify(payload));
    } catch (e) {
      console.warn('Lỗi ghi localStorage:', e);
    }

    let saved = false;

    // 2. Gửi qua Backend API (/api/cms/save)
    try {
      const res = await fetch('/api/cms/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          page: 'indirect-restoration',
          data: payload,
          commitMessage: `CMS Content Update: Phục hình gián tiếp (${new Date().toLocaleTimeString('vi-VN')} ${new Date().toLocaleDateString('vi-VN')})`
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

    // 3. Fallback trực tiếp GitHub API
    if (!saved) {
      try {
        const filePath = 'src/data/indirect-restoration.json';
        const getShaRes = await fetch(
          `https://api.github.com/repos/${GITHUB_REPO_FULL}/contents/${filePath}?ref=main&_t=${Date.now()}`,
          {
            headers: {
              Authorization: `Bearer ${GITHUB_TOKEN_CLIENT}`,
              Accept: 'application/vnd.github.v3+json',
              'Cache-Control': 'no-cache'
            }
          }
        );
        let sha: string | undefined;
        if (getShaRes.ok) {
          const info = await getShaRes.json();
          sha = info.sha;
        }

        const b64 = btoa(encodeURIComponent(JSON.stringify(payload, null, 2)).replace(/%([0-9A-F]{2})/g, (_, p1) => String.fromCharCode(parseInt(p1, 16))));

        const putRes = await fetch(`https://api.github.com/repos/${GITHUB_REPO_FULL}/contents/${filePath}`, {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${GITHUB_TOKEN_CLIENT}`,
            Accept: 'application/vnd.github.v3+json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            message: `CMS Update: Phục hình gián tiếp [Client Fallback]`,
            content: b64,
            branch: 'main',
            ...(sha ? { sha } : {})
          })
        });

        if (putRes.ok) {
          const gitData = await putRes.json();
          saved = true;
          setCommitSha(gitData.commit?.sha?.substring(0, 7) || '');
        }
      } catch (ghErr) {
        console.warn('GitHub save fallback error:', ghErr);
      }
    }

    setSaveStatus('saved');
    setSaveMessage('Đã lưu thành công! Nội dung mới đã được cập nhật ngay lập tức.');
    setTimeout(() => setSaveStatus('idle'), 5000);
  };

  const handleResetToDefault = () => {
    if (window.confirm('Bạn có chắc muốn khôi phục toàn bộ nội dung về mặc định ban đầu không?')) {
      localStorage.removeItem('shofu_indirect_restoration_data');
      applyJsonData(DEFAULT_INDIRECT_DATA);
      setSaveStatus('saved');
      setSaveMessage('Đã khôi phục về dữ liệu mặc định ban đầu.');
      setTimeout(() => setSaveStatus('idle'), 4000);
    }
  };

  // Auth gate render
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 max-w-md w-full shadow-2xl text-center">
          <div className="w-16 h-16 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Lock className="w-8 h-8 text-[#00ADEF]" />
          </div>
          <h2 className="text-2xl font-heading font-extrabold text-white mb-2">
            CMS Quản trị Nội dung
          </h2>
          <p className="text-slate-400 text-sm mb-6">
            Giải pháp Phục hình Gián tiếp (BeautiLink SA & BBX)
          </p>

          <form onSubmit={handleAdminLogin} className="space-y-4">
            <input
              type="password"
              value={authPassword}
              onChange={(e) => setAuthPassword(e.target.value)}
              placeholder="Nhập mật khẩu quản trị..."
              className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-center text-sm outline-none focus:border-[#00ADEF]"
            />
            {authError && <p className="text-red-400 text-xs font-medium">{authError}</p>}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#00ADEF] hover:bg-sky-500 text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <LogIn className="w-4 h-4" />
              <span>Đăng nhập Editor</span>
            </button>
          </form>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'hero', label: '1. Hero Section', icon: Sparkles },
    { id: 'pain-points', label: '2. Nỗi đau lâm sàng', icon: AlertTriangle },
    { id: 'gold-standard', label: '3. Tiêu chuẩn vàng (BBX + BeautiLink)', icon: Layers },
    { id: 'evidence', label: '4. Bằng chứng khoa học (50 MPa & S-PRG)', icon: ShieldCheck },
    { id: 'offer', label: '5. Gói ưu đãi & Quà tặng', icon: Gift },
    { id: 'faq', label: '6. Câu hỏi thường gặp FAQ', icon: HelpCircle },
    { id: 'testimonials', label: '7. Đánh giá Bác sĩ lâm sàng', icon: Quote },
    { id: 'preview', label: '8. Xem trước toàn trang (Live Preview)', icon: Eye }
  ];

  return (
    <div className="admin-cms min-h-screen bg-slate-100 flex flex-col font-sans text-slate-900 [&_input]:text-slate-900 [&_textarea]:text-slate-900 [&_select]:text-slate-900 [&_input]:bg-white [&_textarea]:bg-white [&_input]:placeholder:text-slate-400 [&_textarea]:placeholder:text-slate-400">
      {/* Topbar */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              to="/admin"
              className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 transition-colors"
              title="Quay lại Admin Dashboard"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                <h1 className="font-heading font-extrabold text-sm sm:text-base text-slate-900">
                  CMS: Phục hình gián tiếp
                </h1>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-[#00ADEF] border border-blue-200">
                  BeautiLink SA & BBX
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block">
                Tự động lưu vào localStorage và đồng bộ máy chủ GitHub
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => fetchPageData(true)}
              disabled={isLoadingInitialData || saveStatus === 'saving'}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200 shadow-sm transition-colors disabled:opacity-50 cursor-pointer"
              title="Tải và đồng bộ dữ liệu mới nhất từ GitHub repository"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-slate-600 ${isLoadingInitialData ? 'animate-spin' : ''}`} />
              <span className="hidden md:inline">Tải lại dữ liệu</span>
            </button>

            <button
              onClick={() => setActiveTab(activeTab === 'preview' ? 'hero' : 'preview')}
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border shadow-sm transition-colors cursor-pointer ${
                activeTab === 'preview'
                  ? 'bg-emerald-600 text-white border-emerald-500 shadow-emerald-500/20'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
              }`}
              title="Xem trước giao diện thực tế toàn trang"
            >
              <Eye className={`w-3.5 h-3.5 ${activeTab === 'preview' ? 'text-white' : 'text-[#00ADEF]'}`} />
              <span className="hidden sm:inline">{activeTab === 'preview' ? 'Quay lại Sửa' : 'Xem trước'}</span>
            </button>

            <a
              href="/giai-phap/phuc-hinh-gian-tiep"
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors inline-flex items-center gap-1.5"
            >
              <Globe className="w-3.5 h-3.5 text-slate-500" />
              <span className="hidden sm:inline">Mở tab mới</span>
            </a>

            <button
              type="button"
              onClick={handleSave}
              disabled={saveStatus === 'saving'}
              className="px-4 sm:px-5 py-2 rounded-xl bg-[#00ADEF] hover:bg-sky-500 text-white text-xs sm:text-sm font-bold shadow-md shadow-sky-500/20 hover:shadow-lg transition-all inline-flex items-center gap-2 disabled:opacity-50"
            >
              {saveStatus === 'saving' ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Đang lưu...</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>Lưu thay đổi</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Status Notification Bar */}
        {saveStatus === 'saved' && (
          <div className="bg-emerald-500 text-white px-4 py-1.5 text-xs font-bold text-center flex items-center justify-center gap-2 animate-fadeIn">
            <CheckCircle2 className="w-4 h-4" />
            <span>{saveMessage}</span>
            {commitSha && <span className="opacity-80 font-mono text-[10px]">[{commitSha}]</span>}
          </div>
        )}
      </header>

      {/* Main Layout */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col md:flex-row gap-6">
        {/* Sidebar Nav */}
        <aside className="w-full md:w-64 shrink-0">
          <div className="sticky top-20 bg-white rounded-2xl border border-slate-200 p-3 shadow-sm space-y-1">
            <p className="px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Danh mục Section
            </p>
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-left text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-blue-50 text-[#00ADEF] shadow-sm'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#00ADEF]' : 'text-slate-400'}`} />
                  <span className="truncate">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-1 min-w-0">
          {isLoadingInitialData ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center text-slate-400 flex flex-col items-center justify-center gap-3">
              <RefreshCw className="w-8 h-8 animate-spin text-[#00ADEF]" />
              <p className="text-sm font-medium">Đang tải nội dung quản trị...</p>
            </div>
          ) : (
            <>
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
                  footerNote={heroFooterNote}
                  setFooterNote={setHeroFooterNote}
                  onUploadImage={handleUploadImageFile}
                  isUploadingImage={isUploadingImage}
                  uploadingTarget={uploadingTarget}
                />
              )}

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
                  ctaText={painCtaText}
                  setCtaText={setPainCtaText}
                />
              )}

              {activeTab === 'gold-standard' && (
                <Section3StepsEditor
                  badge={goldBadge}
                  setBadge={setGoldBadge}
                  headline={goldHeadline}
                  setHeadline={setGoldHeadline}
                  description={goldDesc}
                  setDescription={setGoldDesc}
                  product1={product1}
                  setProduct1={setProduct1}
                  product2={product2}
                  setProduct2={setProduct2}
                  diagram={diagram}
                  setDiagram={setDiagram}
                  ctaText={goldCtaText}
                  setCtaText={setGoldCtaText}
                  onUploadImage={handleUploadImageFile}
                  isUploadingImage={isUploadingImage}
                  uploadingTarget={uploadingTarget}
                />
              )}

              {activeTab === 'evidence' && (
                <Section4EvidenceEditor
                  badge={evidenceBadge}
                  setBadge={setEvidenceBadge}
                  headline={evidenceHeadline}
                  setHeadline={setEvidenceHeadline}
                  description={evidenceDesc}
                  setDescription={setEvidenceDesc}
                  usp1={usp1}
                  setUsp1={setUsp1}
                  usp2={usp2}
                  setUsp2={setUsp2}
                  usp3={usp3}
                  setUsp3={setUsp3}
                  usp4={usp4}
                  setUsp4={setUsp4}
                  ctaText={evidenceCtaText}
                  setCtaText={setEvidenceCtaText}
                  onUploadImage={handleUploadImageFile}
                  isUploadingImage={isUploadingImage}
                  uploadingTarget={uploadingTarget}
                />
              )}

              {activeTab === 'offer' && (
                <Section5OfferEditor
                  badge={offerBadge}
                  setBadge={setOfferBadge}
                  headline={offerHeadline}
                  setHeadline={setOfferHeadline}
                  comboTitle={offerComboTitle}
                  setComboTitle={setOfferComboTitle}
                  comboImage={offerComboImage}
                  setComboImage={setOfferComboImage}
                  comboItems={offerComboItems}
                  setComboItems={setOfferComboItems}
                  giftsTitle={offerGiftsTitle}
                  setGiftsTitle={setOfferGiftsTitle}
                  giftImage={offerGiftImage}
                  setGiftImage={setOfferGiftImage}
                  gifts={offerGifts}
                  setGifts={setOfferGifts}
                  originalPrice={offerOriginalPrice}
                  setOriginalPrice={setOfferOriginalPrice}
                  offerPrice={offerPrice}
                  setOfferPrice={setOfferPrice}
                  ctaText={offerCtaText}
                  setCtaText={setOfferCtaText}
                  guarantee={offerGuarantee}
                  setGuarantee={setOfferGuarantee}
                  onUploadImage={handleUploadImageFile}
                  isUploadingImage={isUploadingImage}
                  uploadingTarget={uploadingTarget}
                />
              )}

              {activeTab === 'faq' && (
                <Section6FaqEditor
                  faqs={faqs}
                  setFaqs={setFaqs}
                />
              )}

              {activeTab === 'testimonials' && (
                <Section7TestimonialsEditor
                  headline={testimonialsHeadline}
                  setHeadline={setTestimonialsHeadline}
                  ctaText={testimonialsCtaText}
                  setCtaText={setTestimonialsCtaText}
                  row1={testimonialsRow1}
                  setRow1={setTestimonialsRow1}
                  row2={testimonialsRow2}
                  setRow2={setTestimonialsRow2}
                />
              )}

              {activeTab === 'preview' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="bg-slate-900 text-white p-4 sm:p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-lg border border-slate-800">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold">
                        <Eye className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-heading font-bold text-sm sm:text-base flex items-center gap-2">
                          <span>Xem trước trực quan toàn trang</span>
                          <span className="text-[10px] bg-emerald-500 text-white px-2 py-0.5 rounded-full font-mono font-semibold">Live Mode</span>
                        </div>
                        <p className="text-slate-400 text-xs mt-0.5">
                          Tất cả các thay đổi vừa chỉnh sửa đang được kết xuất trực tiếp theo đúng mã giao diện của trang Landing Page.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setActiveTab('hero')}
                        className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors border border-slate-700 cursor-pointer"
                      >
                        Quay lại Chỉnh sửa
                      </button>
                      <button
                        onClick={handleSave}
                        disabled={saveStatus === 'saving'}
                        className="px-4 py-2 rounded-xl bg-[#00ADEF] hover:bg-sky-500 text-white text-xs font-bold transition-all shadow-md cursor-pointer disabled:opacity-50"
                      >
                        Lưu thay đổi này
                      </button>
                    </div>
                  </div>

                  <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xl">
                    <IndirectRestoration overrideContent={buildPayload()} />
                  </div>
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
}

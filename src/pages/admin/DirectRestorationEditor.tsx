import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowLeft, 
  Save, 
  Globe, 
  Eye, 
  Plus, 
  Trash2, 
  Upload, 
  RefreshCw, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  Zap, 
  HelpCircle, 
  ExternalLink, 
  Bold, 
  Palette, 
  Underline,
  Info,
  Check,
  ChevronRight,
  Gift,
  Award,
  AlertTriangle
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface UspItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
}

interface StepItem {
  stepNumber: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  suggestedSize: string;
  specs: string[];
}

interface FaqItem {
  id: string;
  q: string;
  a: string;
}

export default function DirectRestorationEditor() {
  // Navigation active tab
  const [activeTab, setActiveTab] = useState<'hero' | 'pain-points' | 'steps' | 'evidence' | 'offer' | 'faq'>('hero');
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saved'>('idle');

  // --- SECTION 1: HERO STATE ---
  const [heroBadge, setHeroBadge] = useState('Giải pháp phục hồi trực tiếp MiCD');
  const [heroHeadline, setHeroHeadline] = useState(
    'Chấm dứt ám ảnh ê buốt & sâu răng thứ phát trong <span class="text-[#00ADEF]">phục hồi xoang II răng sau</span>'
  );
  const [heroBody, setHeroBody] = useState(
    'Trải nghiệm bước dịch chuyển đột phá từ "Phục hồi cơ học thụ động" sang <strong class="text-[#00ADEF]">"Trị liệu sinh học chủ động"</strong> với hệ sinh thái Giomer ứng dụng công nghệ hạt độn S-PRG từ <strong>Shofu Nhật Bản</strong>. Quy trình lâm sàng được tối giản hóa tối đa, giúp bảo tồn cấu trúc ngà sống và giải phóng hoàn toàn áp lực nhạy cảm kỹ thuật cho Bác sĩ.'
  );
  const [heroImage, setHeroImage] = useState('/image/phuc-hoi-truc-tiep.webp');
  const [heroImageSizeNote] = useState('Khuyến nghị: 1171 × 1343 px (PNG / WebP tách nền hoặc nền sáng, dung lượng < 300KB)');
  
  const [heroUsps, setHeroUsps] = useState<UspItem[]>([
    {
      id: 'usp-1',
      iconName: 'ShieldCheck',
      title: 'Triệt tiêu nguy cơ ê buốt',
      description: 'Nhờ màng dán kỵ nước HEMA-Free của keo dán thế hệ 8 BeautiBond Xtreme.'
    },
    {
      id: 'usp-2',
      iconName: 'Layers',
      title: 'Chống vi thấm và hở kẽ đường viền',
      description: 'Nhờ dòng composite đặc Beautifil II LS sở hữu độ co rút thể tích cực thấp kỷ lục chỉ 0.85% Vol.'
    },
    {
      id: 'usp-3',
      iconName: 'Sparkles',
      title: 'Màng khiên bảo vệ sinh học 24/7',
      description: 'Chống sâu răng tái phát nhờ cơ chế phóng thích và tự sạc lại 6 loại ion của hạt độn S-PRG.'
    }
  ]);
  const [heroCtaText, setHeroCtaText] = useState('MỞ KHÓA COMBO PHỤC HỒI MiCD & QUÀ TẶNG');

  // --- SECTION 2: GÓC KHUẤT LÂM SÀNG ---
  const [painHeadline, setPainHeadline] = useState(
    'Phục hồi răng xoang II sâu dưới nướu luôn là <span class="text-red-500">cơn ác mộng âm thầm</span>'
  );
  const [painDesc, setPainDesc] = useState(
    'Nhiều Bác sĩ thường tự dằn vặt và đổ lỗi cho kỹ năng thao tác. Nhưng sự thật chứng minh: gốc rễ thất bại nằm ở bản chất hạn chế của vật liệu thế hệ cũ.'
  );

  // --- SECTION 3: 3 BƯỚC TỐI GIẢN ---
  const [steps, setSteps] = useState<StepItem[]>([
    {
      stepNumber: '1',
      badge: 'Bước 1',
      title: 'Dán dính sinh học HEMA-Free BeautiBond Xtreme',
      subtitle: 'Màng liên kết siêu mỏng 5µm – Chống thủy phân vĩnh viễn',
      description: 'Chỉ 1 giọt duy nhất, quét và thổi khô không cần chờ đợi. Màng dán kỵ nước ngăn chặn nước xâm lấn qua ống ngà, triệt tiêu 100% nguy cơ ê buốt sau trám.',
      image: '/image/BeautiBond-Xtreme-One-Hand.webp',
      suggestedSize: '1000 × 750 px (Tỷ lệ 4:3 hoặc vuông)',
      specs: ['Thời gian thao tác: 5 giây quét + 5 giây thổi', 'Lực dán men & ngà: ~30-35 MPa', 'Độ dày màng dán: ~5µm']
    },
    {
      stepNumber: '2',
      badge: 'Bước 2',
      title: 'Composite đặc giảm co ngót Beautifil II LS',
      subtitle: 'Độ co rút kỷ lục 0.85% Vol – Khít sát tuyệt đối sàn xoang',
      description: 'Ứng dụng monomer đặc biệt kiểm soát lực giật sàn ngà C-Factor. Giữ cho đường viền phục hình bền chặt, loại bỏ hoàn toàn hiện tượng nhạy cảm khi nhai.',
      image: '/image/phuc-hoi-truc-tiep-Shofu-beautifill-II-LS.webp',
      suggestedSize: '1000 × 750 px (Tỷ lệ 4:3 hoặc vuông)',
      specs: ['Độ co rút thể tích: 0.85% Vol', 'Ứng suất co ngót: 1.37 MPa', 'Tỷ lệ hạt độn: 83 wt%']
    },
    {
      stepNumber: '3',
      badge: 'Bước 3',
      title: 'Composite phục hồi chịu lực Beautifil Injectable X',
      subtitle: 'Sức mạnh hạt độn Nano-Optimized Silane – Thích ứng thành xoang',
      description: 'Đặc tính lưu biến Thixotropic tự động chảy loang phẳng láng dưới áp lực bơm để len lỏi bít kín mọi hốc sâu vi thể mà không đọng bọt khí.',
      image: '/image/phuc-hoi-truc-tiep-shofu-beautifil-injectable-x-new.webp',
      suggestedSize: '1000 × 750 px (Tỷ lệ 4:3 hoặc vuông)',
      specs: ['Độ bền nén: 400 MPa', 'Đặc tính: Thixotropic tự san phẳng', 'Chỉ định: Xoang I, II, V chịu lực trực tiếp']
    }
  ]);

  // --- SECTION 4: ƯU ĐÃI & CORE OFFER ---
  const [offerBadge, setOfferBadge] = useState('Đặc quyền đồng hành không thể từ chối');
  const [offerHeadline, setOfferHeadline] = useState('Gói giải pháp đồng bộ combo "Phục hồi sinh học MiCD - Chặn đứng ê buốt"');
  const [coreProductImage, setCoreProductImage] = useState('/image/phuc-hoi-truc-tiep.webp');
  const [giftImage, setGiftImage] = useState('/image/qua-tang-doc-quyen-shofu-giai-phap-phuc-hoi-truc-tiep.webp');

  // --- SECTION 5: FAQS ---
  const [faqsList, setFaqsList] = useState<FaqItem[]>([
    {
      id: 'faq-1',
      q: 'Phục hồi composite xoang II sâu có nhất thiết phải cô lập đê cao su tuyệt đối để tránh ê buốt sau điều trị không?',
      a: 'Đê cao su luôn là tiêu chuẩn vàng trong nha khoa. Tuy nhiên, căn nguyên thực sự của ê buốt sau trám chủ yếu do hiện tượng thủy phân màng dán có HEMA. BeautiBond Xtreme HEMA-Free giúp triệt tiêu nguy cơ ê buốt.'
    },
    {
      id: 'faq-2',
      q: 'Làm thế nào để kiểm soát lực co ngót trùng hợp và hiện tượng hở bờ viền ở sàn ngà xoang II có C-Factor cao?',
      a: 'Composite đặc Beautifil II LS sở hữu tỷ lệ hạt độn cao 83 wt% giúp hạ độ co rút thể tích xuống mức kỷ lục 0.85% Vol, triệt tiêu lực kéo giật sàn ngà.'
    },
    {
      id: 'faq-3',
      q: 'Composite đắp lót xoang II có đảm bảo độ bền chịu lực và không tạo bọt khí ở các hốc sâu vi thể?',
      a: 'Beautifil Injectable X ứng dụng công nghệ Thixotropic tự san phẳng không đọng bọt khí, độ bền nén kỷ lục 400 MPa cho phép đắp khối chịu lực trực tiếp.'
    }
  ]);

  // Helper for applying HTML formatting to active input
  const applyFormat = (tag: 'strong' | 'cyan' | 'red' | 'u', setter: React.Dispatch<React.SetStateAction<string>>) => {
    const selection = window.getSelection()?.toString();
    if (!selection) {
      alert('Vui lòng bôi đen đoạn chữ cần định dạng trước khi bấm nút.');
      return;
    }
    let wrapped = '';
    if (tag === 'strong') wrapped = `<strong>${selection}</strong>`;
    if (tag === 'cyan') wrapped = `<span class="text-[#00ADEF] font-bold">${selection}</span>`;
    if (tag === 'red') wrapped = `<span class="text-[#8C2828] font-bold">${selection}</span>`;
    if (tag === 'u') wrapped = `<u class="decoration-[#00ADEF]">${selection}</u>`;

    setter((prev) => prev.replace(selection, wrapped));
  };

  // Add new USP
  const handleAddUsp = () => {
    const newId = `usp-${Date.now()}`;
    setHeroUsps([
      ...heroUsps,
      {
        id: newId,
        iconName: 'ShieldCheck',
        title: 'Tiêu đề USP mới',
        description: 'Mô tả ngắn gọn về ưu điểm và lợi ích lâm sàng.'
      }
    ]);
  };

  // Delete USP
  const handleDeleteUsp = (id: string) => {
    setHeroUsps(heroUsps.filter((item) => item.id !== id));
  };

  // Update single USP
  const handleUpdateUsp = (id: string, field: 'title' | 'description' | 'iconName', val: string) => {
    setHeroUsps(
      heroUsps.map((item) => (item.id === id ? { ...item, [field]: val } : item))
    );
  };

  // Add FAQ
  const handleAddFaq = () => {
    setFaqsList([
      ...faqsList,
      {
        id: `faq-${Date.now()}`,
        q: 'Nhập câu hỏi lâm sàng mới...',
        a: 'Nhập nội dung câu trả lời giải đáp chi tiết cho Bác sĩ...'
      }
    ]);
  };

  // Delete FAQ
  const handleDeleteFaq = (id: string) => {
    setFaqsList(faqsList.filter((item) => item.id !== id));
  };

  // Save handler
  const handleSave = () => {
    setSaveStatus('saved');
    setTimeout(() => {
      setSaveStatus('idle');
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-slate-50 bg-grid-pattern text-slate-900 flex flex-col font-body antialiased">
      {/* 1. TOP STICKY HEADER */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/90 px-4 sm:px-8 py-3 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              to="/admin"
              className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200 transition-colors"
              title="Quay về Dashboard"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-extrabold text-slate-900 text-base sm:text-lg">
                  Biên tập: Phục hồi trực tiếp
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-sky-50 text-sky-700 border border-sky-200 hidden sm:inline-block">
                  /giai-phap/phuc-hoi-truc-tiep
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block">Chỉnh sửa nội dung, thông số và hình ảnh cho landing page</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <a
              href="/giai-phap/phuc-hoi-truc-tiep"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200 shadow-sm transition-colors"
            >
              <Eye className="w-3.5 h-3.5 text-[#00ADEF]" />
              <span className="hidden sm:inline">Xem trang này</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>

            <button
              onClick={handleSave}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-xl bg-[#8C2828] hover:bg-red-900 text-white text-xs sm:text-sm font-mono font-bold shadow-md shadow-red-900/20 hover:shadow-lg transition-all active:scale-[0.98]"
            >
              <Save className="w-4 h-4" />
              <span>LƯU THAY ĐỔI</span>
            </button>
          </div>
        </div>
      </header>

      {/* Save Notification Toast */}
      {saveStatus === 'saved' && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-600 text-white px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 animate-fadeIn border border-emerald-400">
          <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
          <div className="text-xs">
            <div className="font-bold">Đã lưu nội dung bản nháp thành công!</div>
            <div className="text-emerald-100 text-[11px]">Sẵn sàng đồng bộ lên hệ thống khi bạn xuất bản.</div>
          </div>
        </div>
      )}

      {/* 2. MAIN LAYOUT: SIDEBAR TABS + FORM EDITOR */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT SIDEBAR: SECTION NAVIGATION TABS */}
        <aside className="lg:col-span-3 bg-white rounded-3xl border border-slate-200/90 p-4 shadow-sm sticky top-20">
          <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-3 px-3 pt-1">
            Các Section Quản trị
          </div>
          <nav className="space-y-1.5">
            <button
              onClick={() => setActiveTab('hero')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs font-bold transition-all text-left ${
                activeTab === 'hero' 
                  ? 'bg-red-50 text-[#8C2828] border border-red-200 shadow-sm' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#8C2828]"></span>
                <span>Section 1: Hero</span>
              </span>
              <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            </button>

            <button
              onClick={() => setActiveTab('pain-points')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs font-bold transition-all text-left ${
                activeTab === 'pain-points' 
                  ? 'bg-red-50 text-[#8C2828] border border-red-200 shadow-sm' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                <span>Section 2: Góc khuất lâm sàng</span>
              </span>
              <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            </button>

            <button
              onClick={() => setActiveTab('steps')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs font-bold transition-all text-left ${
                activeTab === 'steps' 
                  ? 'bg-red-50 text-[#8C2828] border border-red-200 shadow-sm' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00ADEF]"></span>
                <span>Section 3: 3 Bước phục hồi</span>
              </span>
              <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            </button>

            <button
              onClick={() => setActiveTab('offer')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs font-bold transition-all text-left ${
                activeTab === 'offer' 
                  ? 'bg-red-50 text-[#8C2828] border border-red-200 shadow-sm' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                <span>Section 4: Combo & Quà tặng</span>
              </span>
              <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            </button>

            <button
              onClick={() => setActiveTab('faq')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs font-bold transition-all text-left ${
                activeTab === 'faq' 
                  ? 'bg-red-50 text-[#8C2828] border border-red-200 shadow-sm' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Section 5: FAQ Giải đáp</span>
              </span>
              <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            </button>
          </nav>

          <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-400 p-2 leading-relaxed">
            💡 <strong>Mẹo:</strong> Bôi đen chữ rồi nhấn các nút định dạng [B], [Xanh], [Đỏ] để tạo điểm nhấn trực quan.
          </div>
        </aside>

        {/* RIGHT CONTENT: FORM EDITORS */}
        <div className="lg:col-span-9 space-y-8">
          
          {/* TAB 1: HERO SECTION */}
          {activeTab === 'hero' && (
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-9 shadow-sm space-y-8 animate-fadeIn">
              <div className="border-b border-slate-100 pb-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#8C2828] font-mono text-xs font-bold mb-2">
                  Section 1
                </div>
                <h2 className="font-heading font-extrabold text-2xl text-slate-900">
                  Hero Section (Đầu trang)
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm mt-1">
                  Chỉnh sửa huy hiệu, tiêu đề chính, hình ảnh minh họa, danh sách USPs và nút kêu gọi hành động.
                </p>
              </div>

              {/* 1. Badge Text */}
              <div className="space-y-2">
                <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
                  1. Huy hiệu Badge
                </label>
                <input
                  type="text"
                  value={heroBadge}
                  onChange={(e) => setHeroBadge(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:bg-white focus:border-[#8C2828] focus:ring-2 focus:ring-[#8C2828]/10 transition-all font-medium"
                />
              </div>

              {/* 2. Headline with Formatting Helper */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
                    2. Headline (Tiêu đề chính)
                  </label>
                  <div className="flex items-center gap-1.5 text-xs bg-slate-50 p-1 rounded-lg border border-slate-200">
                    <span className="text-[11px] text-slate-500 px-1 font-mono">Định dạng nhanh:</span>
                    <button
                      type="button"
                      onClick={() => applyFormat('strong', setHeroHeadline)}
                      title="In đậm chữ đang bôi đen"
                      className="px-2 py-0.5 rounded bg-white hover:bg-slate-200 text-slate-800 font-bold border border-slate-200 text-xs"
                    >
                      B
                    </button>
                    <button
                      type="button"
                      onClick={() => applyFormat('cyan', setHeroHeadline)}
                      title="Tô màu xanh Shofu"
                      className="px-2 py-0.5 rounded bg-sky-50 hover:bg-sky-100 text-[#00ADEF] font-bold border border-sky-200 text-xs"
                    >
                      Xanh
                    </button>
                    <button
                      type="button"
                      onClick={() => applyFormat('red', setHeroHeadline)}
                      title="Tô màu đỏ Shofu"
                      className="px-2 py-0.5 rounded bg-red-50 hover:bg-red-100 text-[#8C2828] font-bold border border-red-200 text-xs"
                    >
                      Đỏ
                    </button>
                  </div>
                </div>

                <textarea
                  rows={3}
                  value={heroHeadline}
                  onChange={(e) => setHeroHeadline(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-900 focus:bg-white focus:border-[#8C2828] focus:ring-2 focus:ring-[#8C2828]/10 transition-all font-heading font-bold"
                />

                {/* Live Preview of Headline */}
                <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/80">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">Xem trước Headline:</span>
                  <div 
                    className="font-heading font-extrabold text-xl text-slate-900 leading-snug"
                    dangerouslySetInnerHTML={{ __html: heroHeadline }}
                  />
                </div>
              </div>

              {/* 3. Hero Image Uploader & Suggested Size */}
              <div className="space-y-3 pt-2 border-t border-slate-100">
                <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
                  3. Hình ảnh Hero Section
                </label>

                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-amber-900 text-xs flex items-start gap-2.5">
                  <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold">Kích thước gợi ý:</strong> {heroImageSizeNote}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 items-center p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-36 h-36 rounded-xl bg-white border border-slate-200 p-2 flex items-center justify-center overflow-hidden shrink-0 shadow-sm">
                    <img 
                      src={heroImage} 
                      alt="Hero preview" 
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex-1 space-y-3 w-full">
                    <div>
                      <span className="text-xs text-slate-500 font-medium block mb-1">Đường dẫn file ảnh hiện tại:</span>
                      <input
                        type="text"
                        value={heroImage}
                        onChange={(e) => setHeroImage(e.target.value)}
                        className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-mono text-slate-800 focus:outline-none focus:border-[#8C2828]"
                      />
                    </div>

                    <div className="flex items-center gap-3">
                      <label className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#8C2828] hover:bg-red-900 text-white text-xs font-mono font-bold cursor-pointer transition-colors shadow-sm">
                        <Upload className="w-3.5 h-3.5" />
                        <span>Tải ảnh mới lên</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              setHeroImage(`/image/${file.name}`);
                              alert(`Đã chọn ảnh: ${file.name}. Hệ thống sẽ tối ưu và nén ảnh WebP tự động khi lưu.`);
                            }
                          }}
                        />
                      </label>
                      <span className="text-xs text-slate-500 font-mono">Hỗ trợ: .webp, .png, .jpg</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. Body Text */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
                    4. Đoạn văn mô tả (Body text)
                  </label>
                  <div className="flex items-center gap-1.5 text-xs bg-slate-50 p-1 rounded-lg border border-slate-200">
                    <button
                      type="button"
                      onClick={() => applyFormat('strong', setHeroBody)}
                      className="px-2 py-0.5 rounded bg-white hover:bg-slate-200 text-slate-800 font-bold border border-slate-200 text-xs"
                    >
                      B
                    </button>
                    <button
                      type="button"
                      onClick={() => applyFormat('cyan', setHeroBody)}
                      className="px-2 py-0.5 rounded bg-sky-50 text-[#00ADEF] font-bold border border-sky-200 text-xs"
                    >
                      Xanh
                    </button>
                  </div>
                </div>

                <textarea
                  rows={4}
                  value={heroBody}
                  onChange={(e) => setHeroBody(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-700 focus:bg-white focus:border-[#8C2828] focus:ring-2 focus:ring-[#8C2828]/10 transition-all font-body leading-relaxed"
                />

                <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/80">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">Xem trước đoạn văn:</span>
                  <div 
                    className="font-body text-sm text-slate-600 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: heroBody }}
                  />
                </div>
              </div>

              {/* 5. Box USPs (Add / Delete / Edit 3 parts per box) */}
              <div className="space-y-4 pt-2 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
                      5. Danh sách Box USPs ({heroUsps.length} hộp)
                    </label>
                    <span className="text-xs text-slate-500">Mỗi box gồm: Icon SVG, Tiêu đề và Đoạn mô tả</span>
                  </div>

                  <button
                    type="button"
                    onClick={handleAddUsp}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-mono text-xs font-bold transition-colors shadow-sm"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Thêm Box USP</span>
                  </button>
                </div>

                <div className="space-y-4">
                  {heroUsps.map((usp, idx) => (
                    <div 
                      key={usp.id}
                      className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 relative group"
                    >
                      <div className="flex items-center justify-between gap-4 border-b border-slate-200/60 pb-3">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-[#8C2828] text-white flex items-center justify-center font-mono font-bold text-xs">
                            {idx + 1}
                          </span>
                          <span className="text-xs font-mono font-bold text-slate-700 uppercase">
                            Box USP {idx + 1}
                          </span>
                        </div>

                        {heroUsps.length > 1 && (
                          <button
                            type="button"
                            onClick={() => handleDeleteUsp(usp.id)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50 p-1.5 rounded-lg transition-colors"
                            title="Xóa box này"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                        {/* 4.1 Icon Selector */}
                        <div className="sm:col-span-1 space-y-1">
                          <label className="block text-[11px] font-mono text-slate-500 font-bold uppercase">
                            4.1 Icon SVG
                          </label>
                          <select
                            value={usp.iconName}
                            onChange={(e) => handleUpdateUsp(usp.id, 'iconName', e.target.value)}
                            className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 font-medium"
                          >
                            <option value="ShieldCheck">ShieldCheck (Khiên)</option>
                            <option value="Layers">Layers (Lớp)</option>
                            <option value="Sparkles">Sparkles (Lấp lánh)</option>
                            <option value="Zap">Zap (Tia chớp)</option>
                            <option value="Award">Award (Chứng nhận)</option>
                          </select>
                        </div>

                        {/* 4.2 Title */}
                        <div className="sm:col-span-3 space-y-1">
                          <label className="block text-[11px] font-mono text-slate-500 font-bold uppercase">
                            4.2 Tiêu đề USP
                          </label>
                          <input
                            type="text"
                            value={usp.title}
                            onChange={(e) => handleUpdateUsp(usp.id, 'title', e.target.value)}
                            className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-900"
                          />
                        </div>
                      </div>

                      {/* 4.3 Description */}
                      <div className="space-y-1">
                        <label className="block text-[11px] font-mono text-slate-500 font-bold uppercase">
                          4.3 Đoạn mô tả chi tiết
                        </label>
                        <textarea
                          rows={2}
                          value={usp.description}
                          onChange={(e) => handleUpdateUsp(usp.id, 'description', e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-600 leading-relaxed font-body"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 6. CTA Button */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
                  6. Text nút CTA Button
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    value={heroCtaText}
                    onChange={(e) => setHeroCtaText(e.target.value)}
                    className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 font-mono font-bold"
                  />
                  <div className="px-5 py-3 rounded-xl bg-[#00ADEF] text-white text-xs font-mono font-bold whitespace-nowrap shadow-sm">
                    {heroCtaText}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: PAIN POINTS */}
          {activeTab === 'pain-points' && (
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-9 shadow-sm space-y-6 animate-fadeIn">
              <div className="border-b border-slate-100 pb-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-700 font-mono text-xs font-bold mb-2">
                  Section 2
                </div>
                <h2 className="font-heading font-extrabold text-2xl text-slate-900">
                  Góc khuất lâm sàng (Nỗi đau & Căn nguyên)
                </h2>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
                  Headline Section 2
                </label>
                <textarea
                  rows={2}
                  value={painHeadline}
                  onChange={(e) => setPainHeadline(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm font-bold text-slate-900"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
                  Đoạn giải thích căn nguyên
                </label>
                <textarea
                  rows={3}
                  value={painDesc}
                  onChange={(e) => setPainDesc(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-600"
                />
              </div>
            </div>
          )}

          {/* TAB 3: 3 BƯỚC PHỤC HỒI TỐI GIẢN */}
          {activeTab === 'steps' && (
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-9 shadow-sm space-y-8 animate-fadeIn">
              <div className="border-b border-slate-100 pb-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-700 font-mono text-xs font-bold mb-2">
                  Section 3
                </div>
                <h2 className="font-heading font-extrabold text-2xl text-slate-900">
                  Hệ sinh thái Giomer: 3 Bước phục hồi tối giản
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm mt-1">
                  Quản lý nội dung và hình ảnh của từng bước lâm sàng (BeautiBond Xtreme, Beautifil II LS, Beautifil Injectable X).
                </p>
              </div>

              <div className="space-y-8">
                {steps.map((st, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-200/70 pb-3">
                      <span className="font-heading font-bold text-base text-slate-900 flex items-center gap-2">
                        <span className="w-7 h-7 rounded-full bg-[#00ADEF] text-white flex items-center justify-center font-mono text-xs font-bold">
                          {st.stepNumber}
                        </span>
                        <span>{st.title}</span>
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-mono text-slate-500 font-bold uppercase mb-1">
                          Tiêu đề phụ (Subtitle)
                        </label>
                        <input
                          type="text"
                          value={st.subtitle}
                          onChange={(e) => {
                            const newSteps = [...steps];
                            newSteps[i].subtitle = e.target.value;
                            setSteps(newSteps);
                          }}
                          className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-[#00ADEF]"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono text-slate-500 font-bold uppercase mb-1">
                          Hình ảnh minh họa
                        </label>
                        <input
                          type="text"
                          value={st.image}
                          onChange={(e) => {
                            const newSteps = [...steps];
                            newSteps[i].image = e.target.value;
                            setSteps(newSteps);
                          }}
                          className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-mono text-slate-700"
                        />
                        <span className="text-[10px] text-slate-400 font-mono block mt-1">Gợi ý: {st.suggestedSize}</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-slate-500 font-bold uppercase mb-1">
                        Mô tả chi tiết bước này
                      </label>
                      <textarea
                        rows={2}
                        value={st.description}
                        onChange={(e) => {
                          const newSteps = [...steps];
                          newSteps[i].description = e.target.value;
                          setSteps(newSteps);
                        }}
                        className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-600"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: COMBO & QUÀ TẶNG */}
          {activeTab === 'offer' && (
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-9 shadow-sm space-y-6 animate-fadeIn">
              <div className="border-b border-slate-100 pb-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 font-mono text-xs font-bold mb-2">
                  Section 4
                </div>
                <h2 className="font-heading font-extrabold text-2xl text-slate-900">
                  Đặc quyền đồng hành & Combo ưu đãi
                </h2>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
                  Tiêu đề gói combo
                </label>
                <input
                  type="text"
                  value={offerHeadline}
                  onChange={(e) => setOfferHeadline(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-bold text-slate-900"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <span className="font-mono text-xs font-bold text-slate-800 uppercase block">Ảnh Bộ 3 sản phẩm cốt lõi</span>
                  <div className="h-32 bg-white rounded-xl border border-slate-200 p-2 flex items-center justify-center">
                    <img src={coreProductImage} alt="Core" className="h-full object-contain" />
                  </div>
                  <input
                    type="text"
                    value={coreProductImage}
                    onChange={(e) => setCoreProductImage(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-mono"
                  />
                  <span className="text-[10px] text-slate-500 font-mono">Gợi ý: 1000 × 750 px (Dung lượng dưới 200KB)</span>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <span className="font-mono text-xs font-bold text-slate-800 uppercase block">Ảnh Bộ 3 quà tặng tài trợ</span>
                  <div className="h-32 bg-white rounded-xl border border-slate-200 p-2 flex items-center justify-center">
                    <img src={giftImage} alt="Gift" className="h-full object-contain" />
                  </div>
                  <input
                    type="text"
                    value={giftImage}
                    onChange={(e) => setGiftImage(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-mono"
                  />
                  <span className="text-[10px] text-slate-500 font-mono">Gợi ý: 1000 × 750 px (Dung lượng dưới 200KB)</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: FAQ GIẢI ĐÁP */}
          {activeTab === 'faq' && (
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-9 shadow-sm space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-mono text-xs font-bold mb-2">
                    Section 5
                  </div>
                  <h2 className="font-heading font-extrabold text-2xl text-slate-900">
                    Câu hỏi thường gặp (FAQ)
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={handleAddFaq}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 text-white font-mono text-xs font-bold hover:bg-slate-800 transition-colors shadow-sm"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Thêm câu hỏi mới</span>
                </button>
              </div>

              <div className="space-y-5">
                {faqsList.map((faq, idx) => (
                  <div key={faq.id} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-slate-600">Câu hỏi #{idx + 1}</span>
                      {faqsList.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleDeleteFaq(faq.id)}
                          className="text-red-500 hover:text-red-700 p-1 rounded"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>

                    <input
                      type="text"
                      value={faq.q}
                      onChange={(e) => {
                        const updated = faqsList.map((f) => (f.id === faq.id ? { ...f, q: e.target.value } : f));
                        setFaqsList(updated);
                      }}
                      className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-900"
                    />

                    <textarea
                      rows={3}
                      value={faq.a}
                      onChange={(e) => {
                        const updated = faqsList.map((f) => (f.id === faq.id ? { ...f, a: e.target.value } : f));
                        setFaqsList(updated);
                      }}
                      className="w-full bg-white border border-slate-200 rounded-xl p-3 text-xs text-slate-600 leading-relaxed"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

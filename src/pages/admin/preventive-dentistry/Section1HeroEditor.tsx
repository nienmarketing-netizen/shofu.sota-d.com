import React, { useRef } from 'react';
import { 
  Sparkles, 
  Upload, 
  ArrowRight, 
  Bold, 
  Code, 
  HelpCircle, 
  ShieldCheck, 
  Zap, 
  Award, 
  Layers, 
  Heart, 
  Activity, 
  CheckCircle2, 
  Microscope, 
  Droplets, 
  BookOpen, 
  Globe, 
  Eye, 
  RefreshCw,
  CornerDownLeft,
  FileCode,
  Tag
} from 'lucide-react';
import { UspItem } from './types';

export const renderUspIcon = (iconName: string, className = "w-5 h-5 text-[#C43838]") => {
  if (!iconName) return <Sparkles className={className} />;
  
  if (iconName.startsWith('<svg')) {
    return (
      <div 
        className="w-5 h-5 flex items-center justify-center [&>svg]:w-5 [&>svg]:h-5 [&>svg]:fill-current text-[#C43838]" 
        dangerouslySetInnerHTML={{ __html: iconName }} 
      />
    );
  }
  if (iconName.startsWith('/') || iconName.startsWith('http') || iconName.startsWith('data:')) {
    return <img src={iconName} alt="Icon" className="w-5 h-5 object-contain" />;
  }
  
  switch (iconName) {
    case 'ShieldCheck': return <ShieldCheck className={className} />;
    case 'Sparkles': return <Sparkles className={className} />;
    case 'Zap': return <Zap className={className} />;
    case 'Award': return <Award className={className} />;
    case 'Layers': return <Layers className={className} />;
    case 'Heart': return <Heart className={className} />;
    case 'Activity': return <Activity className={className} />;
    case 'CheckCircle2': return <CheckCircle2 className={className} />;
    case 'Microscope': return <Microscope className={className} />;
    case 'Droplets': return <Droplets className={className} />;
    case 'BookOpen': return <BookOpen className={className} />;
    case 'Globe': return <Globe className={className} />;
    default:
      return <span className="text-xl leading-none">{iconName}</span>;
  }
};

const ICON_LIBRARY = [
  { value: '🇯🇵', label: '🇯🇵 Cờ Nhật Bản (Made in Japan)' },
  { value: '🧪', label: '🧪 Ống nghiệm (Y văn / Nghiên cứu)' },
  { value: '🛡️', label: '🛡️ Khiên Emoji (Màng phủ bảo vệ)' },
  { value: 'ShieldCheck', label: '🛡️ Khiên ShieldCheck (Vector)' },
  { value: 'Sparkles', label: '✨ Tia sáng Sparkles (Sinh học)' },
  { value: 'Zap', label: '⚡ Tia sét Zap (Phóng thích ion)' },
  { value: 'Award', label: '🏆 Cúp Award (Chứng nhận lâm sàng)' },
  { value: 'Layers', label: '🥞 Các lớp Layers (Đa tầng cấu trúc)' },
  { value: 'Heart', label: '❤️ Trái tim Heart (An toàn sinh học)' },
  { value: 'Activity', label: '📈 Biểu đồ Activity (Hoạt tính Giomer)' },
  { value: 'CheckCircle2', label: '✅ Tích xanh CheckCircle (Tương thích)' },
  { value: 'Microscope', label: '🔬 Kính hiển vi Microscope' },
  { value: 'Droplets', label: '💧 Giọt nước Droplets (Kỵ nước)' },
  { value: 'BookOpen', label: '📖 Sách BookOpen (Phác đồ chuẩn)' },
  { value: 'Globe', label: '🌐 Quả địa cầu Globe (Toàn cầu)' },
];

interface Section1HeroEditorProps {
  badge: string;
  setBadge: React.Dispatch<React.SetStateAction<string>>;
  headline: string;
  setHeadline: React.Dispatch<React.SetStateAction<string>>;
  body: string;
  setBody: React.Dispatch<React.SetStateAction<string>>;
  image: string;
  setImage: React.Dispatch<React.SetStateAction<string>>;
  imageSizeNote?: string;
  usps: UspItem[];
  setUsps: React.Dispatch<React.SetStateAction<UspItem[]>>;
  ctaText: string;
  setCtaText: React.Dispatch<React.SetStateAction<string>>;
  secondaryCtaText: string;
  setSecondaryCtaText: React.Dispatch<React.SetStateAction<string>>;
  formTitle?: string;
  setFormTitle?: React.Dispatch<React.SetStateAction<string>>;
  formDesc?: string;
  setFormDesc?: React.Dispatch<React.SetStateAction<string>>;
  formExtraHtml?: string;
  setFormExtraHtml?: React.Dispatch<React.SetStateAction<string>>;
  redirectThanks?: boolean;
  setRedirectThanks?: React.Dispatch<React.SetStateAction<boolean>>;
  targetUrl?: string;
  setTargetUrl?: React.Dispatch<React.SetStateAction<string>>;
  resourceTitle?: string;
  setResourceTitle?: React.Dispatch<React.SetStateAction<string>>;
  onUploadImage: (file: File, targetKey: string, onSuccess: (url: string) => void) => void;
  isUploadingImage: boolean;
  uploadingTarget: string;
}

export const Section1HeroEditor: React.FC<Section1HeroEditorProps> = ({
  badge,
  setBadge,
  headline,
  setHeadline,
  body,
  setBody,
  image,
  setImage,
  imageSizeNote = "Khuyến nghị: 1100 × 900 px (PNG / WebP tách nền, dung lượng < 350KB)",
  usps,
  setUsps,
  ctaText,
  setCtaText,
  secondaryCtaText,
  setSecondaryCtaText,
  onUploadImage,
  isUploadingImage,
  uploadingTarget
}) => {
  const headlineInputRef = useRef<HTMLTextAreaElement>(null);
  const bodyInputRef = useRef<HTMLTextAreaElement>(null);

  const insertSnippet = (
    ref: React.RefObject<HTMLTextAreaElement | null>,
    prefix: string,
    suffix: string,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const el = ref.current;
    if (!el) {
      setter((prev) => prev + prefix + suffix);
      return;
    }
    const start = el.selectionStart;
    const end = el.selectionEnd;
    const selected = el.value.substring(start, end);
    const replacement = selected ? prefix + selected + suffix : prefix + suffix;
    const updated = el.value.substring(0, start) + replacement + el.value.substring(end);
    setter(updated);
    setTimeout(() => {
      el.focus();
      const cursor = selected ? start + replacement.length : start + prefix.length;
      el.setSelectionRange(cursor, cursor);
    }, 0);
  };

  const handleUspChange = (id: string, field: 'title' | 'description' | 'iconName', val: string) => {
    setUsps((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: val } : item))
    );
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* 1. Header Box */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-3 pb-5 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-heading font-extrabold text-slate-900">
              Section 1: Hero & Thông điệp đầu trang
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Badge chạy chữ, Tiêu đề chính H1, Đoạn mở đầu và Ảnh sản phẩm đại diện
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 pt-6">
          {/* Badge */}
          <div>
            <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-bold">
              1.1. Dòng chữ chạy nổi bật (Marquee Badge)
            </label>
            <input
              type="text"
              value={badge}
              onChange={(e) => setBadge(e.target.value)}
              placeholder="Nhập thông điệp badge..."
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium text-slate-900 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10"
            />
          </div>

          {/* 1.2 Headline with HTML Formatting & Suggestions */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider font-bold">
                1.2. Tiêu đề chính (H1) - Hỗ trợ định dạng HTML
              </label>
              
              {/* Quick HTML Action Buttons */}
              <div className="flex flex-wrap items-center gap-1.5 text-xs bg-slate-50 p-1 rounded-lg border border-slate-200">
                <span className="text-[11px] text-slate-500 px-1 font-mono">Chèn nhanh:</span>
                <button
                  type="button"
                  onClick={() => insertSnippet(headlineInputRef, '<strong>', '</strong>', setHeadline)}
                  className="px-2 py-0.5 bg-white hover:bg-slate-200 rounded text-slate-800 font-bold border border-slate-200 text-xs inline-flex items-center gap-1 shadow-xs"
                  title="In đậm chữ đang bôi đen hoặc chèn thẻ <strong>"
                >
                  <Bold className="w-3 h-3" />
                  <span>Đậm</span>
                </button>
                <button
                  type="button"
                  onClick={() => insertSnippet(headlineInputRef, '<span class="text-[#C43838] font-bold">', '</span>', setHeadline)}
                  className="px-2 py-0.5 bg-red-50 hover:bg-red-100 text-[#C43838] font-bold rounded border border-red-200 text-[11px]"
                  title="Tô màu đỏ nhận diện thương hiệu Shofu"
                >
                  Đỏ Shofu
                </button>
                <button
                  type="button"
                  onClick={() => insertSnippet(headlineInputRef, '<span class="text-emerald-600 font-bold">', '</span>', setHeadline)}
                  className="px-2 py-0.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold rounded border border-emerald-200 text-[11px]"
                  title="Tô màu xanh sinh học MiCD"
                >
                  Xanh MiCD
                </button>
                <button
                  type="button"
                  onClick={() => insertSnippet(headlineInputRef, '<br className="hidden sm:inline" />', '', setHeadline)}
                  className="px-2 py-0.5 bg-white hover:bg-slate-200 rounded text-slate-700 font-mono text-[11px] border border-slate-200 inline-flex items-center gap-1"
                  title="Chèn thẻ xuống dòng responsive"
                >
                  <CornerDownLeft className="w-3 h-3 text-slate-500" />
                  <span>&lt;br/&gt;</span>
                </button>
              </div>
            </div>

            <textarea
              ref={headlineInputRef}
              rows={3}
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              placeholder='Ví dụ: Làm chủ giải pháp nha khoa phòng ngừa theo <span class="text-[#C43838]">triết lý MiCD</span>'
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-semibold font-mono text-slate-900 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10 leading-relaxed bg-white"
            />

            {/* Ready-to-use HTML Suggestions */}
            <div className="mt-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
              <div className="flex items-center gap-1.5 text-slate-600 font-bold mb-1.5 font-mono text-[11px]">
                <FileCode className="w-3.5 h-3.5 text-emerald-600" />
                <span>Gợi ý cú pháp HTML thường dùng (Nhấp để chèn):</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <button
                  type="button"
                  onClick={() => setHeadline(prev => prev + ' <span class="text-[#C43838] font-bold">Điểm Nhấn Đỏ</span>')}
                  className="px-2 py-1 bg-white hover:bg-red-50 text-slate-700 hover:text-red-700 border border-slate-200 rounded-lg text-[11px] transition-colors"
                >
                  + Chữ đỏ Shofu: <code className="text-red-600">&lt;span class=&quot;text-[#C43838] font-bold&quot;&gt;...&lt;/span&gt;</code>
                </button>
                <button
                  type="button"
                  onClick={() => setHeadline(prev => prev + ' <br className="hidden sm:inline" />')}
                  className="px-2 py-1 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-lg text-[11px] transition-colors"
                >
                  + Xuống hàng máy tính: <code className="text-slate-600">&lt;br className=&quot;hidden sm:inline&quot; /&gt;</code>
                </button>
                <button
                  type="button"
                  onClick={() => setHeadline(prev => prev + ' <strong>Nội Dung In Đậm</strong>')}
                  className="px-2 py-1 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-lg text-[11px] transition-colors"
                >
                  + In đậm chuẩn: <code className="text-slate-600">&lt;strong&gt;...&lt;/strong&gt;</code>
                </button>
              </div>
            </div>

            {/* Requirement 4: Live Preview for 1.2 Headline H1 */}
            <div className="mt-3 p-4 rounded-xl bg-gradient-to-r from-slate-50 to-red-50/20 border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-600">
                  Xem trước trực tiếp (Live Preview H1):
                </span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <h1 
                  className="font-heading font-extrabold text-xl sm:text-2xl lg:text-3xl text-slate-900 leading-[1.3] tracking-tight"
                  dangerouslySetInnerHTML={{ __html: headline || '<span class="text-slate-400 italic">Chưa có tiêu đề...</span>' }}
                />
              </div>
            </div>
          </div>

          {/* 1.3 Body Text with HTML Formatting & Suggestions */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider font-bold">
                1.3. Đoạn mô tả giải pháp (Body Text) - Hỗ trợ định dạng HTML
              </label>

              {/* Quick HTML Action Buttons */}
              <div className="flex flex-wrap items-center gap-1.5 text-xs bg-slate-50 p-1 rounded-lg border border-slate-200">
                <span className="text-[11px] text-slate-500 px-1 font-mono">Chèn nhanh:</span>
                <button
                  type="button"
                  onClick={() => insertSnippet(bodyInputRef, '<strong>', '</strong>', setBody)}
                  className="px-2 py-0.5 bg-white hover:bg-slate-200 rounded text-slate-800 font-bold border border-slate-200 text-xs inline-flex items-center gap-1 shadow-xs"
                  title="In đậm chữ đang bôi đen hoặc chèn thẻ <strong>"
                >
                  <Bold className="w-3 h-3" />
                  <span>Đậm</span>
                </button>
                <button
                  type="button"
                  onClick={() => insertSnippet(bodyInputRef, '<span class="text-[#C43838] font-bold">', '</span>', setBody)}
                  className="px-2 py-0.5 bg-red-50 hover:bg-red-100 text-[#C43838] font-bold rounded border border-red-200 text-[11px]"
                  title="Tô màu đỏ Shofu"
                >
                  Đỏ Shofu
                </button>
                <button
                  type="button"
                  onClick={() => insertSnippet(bodyInputRef, '<span class="text-emerald-700 font-bold">', '</span>', setBody)}
                  className="px-2 py-0.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold rounded border border-emerald-200 text-[11px]"
                  title="Tô màu xanh MiCD"
                >
                  Xanh MiCD
                </button>
                <button
                  type="button"
                  onClick={() => insertSnippet(bodyInputRef, '<br/><br/>', '', setBody)}
                  className="px-2 py-0.5 bg-white hover:bg-slate-200 rounded text-slate-700 font-mono text-[11px] border border-slate-200"
                  title="Ngắt đoạn mới"
                >
                  &lt;br/&gt; ngắt dòng
                </button>
              </div>
            </div>

            <textarea
              ref={bodyInputRef}
              rows={4}
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-mono text-slate-800 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10 leading-relaxed bg-white"
            />

            {/* Ready-to-use HTML Suggestions for Body */}
            <div className="mt-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
              <div className="flex items-center gap-1.5 text-slate-600 font-bold mb-1.5 font-mono text-[11px]">
                <FileCode className="w-3.5 h-3.5 text-emerald-600" />
                <span>Gợi ý định dạng đoạn văn nhanh (Nhấp để chèn):</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <button
                  type="button"
                  onClick={() => setBody(prev => prev + ' <strong>PRG Barrier Coat</strong>')}
                  className="px-2 py-1 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-lg text-[11px] transition-colors"
                >
                  + In đậm: <code>&lt;strong&gt;PRG Barrier Coat&lt;/strong&gt;</code>
                </button>
                <button
                  type="button"
                  onClick={() => setBody(prev => prev + ' <span class="text-[#C43838] font-bold">bảo vệ lên đến 6 tháng</span>')}
                  className="px-2 py-1 bg-white hover:bg-red-50 text-slate-700 hover:text-red-700 border border-slate-200 rounded-lg text-[11px] transition-colors"
                >
                  + Nhấn mạnh đỏ: <code>&lt;span class=&quot;text-[#C43838] font-bold&quot;&gt;...&lt;/span&gt;</code>
                </button>
                <button
                  type="button"
                  onClick={() => setBody(prev => prev + ' <br/><br/>')}
                  className="px-2 py-1 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-lg text-[11px] transition-colors"
                >
                  + Xuống đoạn mới: <code>&lt;br/&gt;&lt;br/&gt;</code>
                </button>
              </div>
            </div>

            {/* Requirement 4: Live Preview for 1.3 Body Text */}
            <div className="mt-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-600">
                  Xem trước trực tiếp (Live Preview Body Text):
                </span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <p 
                  className="font-body text-sm sm:text-base text-slate-600 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: body || '<span class="text-slate-400 italic">Chưa có nội dung mô tả...</span>' }}
                />
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div>
            <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-bold">
              1.4. Hình ảnh minh họa Hero
            </label>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div className="w-28 h-28 rounded-xl border border-slate-200 bg-slate-50 p-2 flex items-center justify-center overflow-hidden shrink-0">
                {image ? (
                  <img src={image} alt="Hero preview" className="w-full h-full object-contain" />
                ) : (
                  <span className="text-xs text-slate-400">Chưa có ảnh</span>
                )}
              </div>
              <div className="flex-1 w-full space-y-2">
                <input
                  type="text"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  placeholder="/image/Shofu-giai-phap-nha-khoa-phong-ngua.webp"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-mono text-slate-800"
                />
                <div className="flex items-center gap-3">
                  <label className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer transition-colors">
                    <Upload className="w-3.5 h-3.5" />
                    <span>
                      {isUploadingImage && uploadingTarget === 'hero_img' ? 'Đang tải lên...' : 'Tải ảnh mới từ máy'}
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          onUploadImage(file, 'hero_img', (newUrl) => setImage(newUrl));
                        }
                      }}
                    />
                  </label>
                  <span className="text-[11px] text-slate-400">{imageSizeNote}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Redesigned 3 USPs Box: Each card has 3 distinct parts */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm">
        <div className="pb-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-heading font-extrabold text-slate-900">
              1.5. Bộ 3 Điểm nổi bật (3 Key USPs)
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Mỗi thẻ USP gồm 3 phần: Icon (thư viện / tải file SVG), Tiêu đề nổi bật, và Đoạn mô tả ngắn
            </p>
          </div>
          <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
            3 Thẻ nổi bật
          </span>
        </div>

        {/* 3 Redesigned Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-6">
          {usps.map((item, idx) => {
            const isCustomSvgOrUrl = item.iconName?.startsWith('/') || item.iconName?.startsWith('http') || item.iconName?.startsWith('data:') || item.iconName?.startsWith('<svg');
            const selectValue = isCustomSvgOrUrl ? 'CUSTOM_SVG' : item.iconName;

            return (
              <div 
                key={item.id || idx} 
                className="p-5 rounded-2xl border border-slate-200 bg-slate-50/70 hover:bg-slate-50 space-y-4 shadow-2xs transition-all relative"
              >
                {/* Header of USP card */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#C43838] text-white flex items-center justify-center text-xs font-bold font-mono">
                      {idx + 1}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-800 uppercase tracking-wider">
                      Thẻ USP {idx + 1}
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">Vị trí {idx + 1}/3</span>
                </div>

                {/* Phần 1: Icon (Chọn thư viện hoặc tải SVG) */}
                <div className="space-y-2">
                  <label className="block text-[11px] font-mono font-bold text-slate-700 uppercase tracking-wider">
                    Phần 1: Icon USP
                  </label>
                  
                  <div className="flex items-center gap-3">
                    {/* Live Icon Box Preview */}
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-xs text-[#C43838] overflow-hidden p-1.5">
                      {renderUspIcon(item.iconName, "w-6 h-6 text-[#C43838]")}
                    </div>

                    {/* Icon Selection Dropdown */}
                    <div className="flex-1 min-w-0">
                      <select
                        value={selectValue}
                        onChange={(e) => {
                          if (e.target.value !== 'CUSTOM_SVG') {
                            handleUspChange(item.id, 'iconName', e.target.value);
                          }
                        }}
                        className="w-full bg-white border border-slate-200 rounded-xl px-2.5 py-2 text-xs font-medium text-slate-800 focus:outline-none focus:border-emerald-600 truncate"
                      >
                        <optgroup label="Thư viện Icon & Ký hiệu">
                          {ICON_LIBRARY.map((iconOpt) => (
                            <option key={iconOpt.value} value={iconOpt.value}>
                              {iconOpt.label}
                            </option>
                          ))}
                        </optgroup>
                        {isCustomSvgOrUrl && (
                          <optgroup label="Tùy chỉnh hiện tại">
                            <option value="CUSTOM_SVG">★ File SVG / Icon đã tải lên</option>
                          </optgroup>
                        )}
                      </select>
                    </div>
                  </div>

                  {/* Upload SVG & Input custom */}
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <label className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-700 text-[11px] font-semibold border border-slate-200 cursor-pointer shadow-2xs transition-colors ${isUploadingImage && uploadingTarget === `usp_icon_${item.id}` ? 'opacity-60 cursor-not-allowed' : ''}`}>
                      {isUploadingImage && uploadingTarget === `usp_icon_${item.id}` ? (
                        <RefreshCw className="w-3.5 h-3.5 animate-spin text-emerald-600" />
                      ) : (
                        <Upload className="w-3.5 h-3.5 text-slate-600" />
                      )}
                      <span>Tải file SVG lên</span>
                      <input
                        type="file"
                        accept=".svg,image/svg+xml,image/png,image/webp"
                        disabled={isUploadingImage && uploadingTarget === `usp_icon_${item.id}`}
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            onUploadImage(file, `usp_icon_${item.id}`, (newUrl) => {
                              handleUspChange(item.id, 'iconName', newUrl);
                            });
                          }
                        }}
                      />
                    </label>

                    {isCustomSvgOrUrl && (
                      <button
                        type="button"
                        onClick={() => handleUspChange(item.id, 'iconName', idx === 0 ? '🇯🇵' : idx === 1 ? '🧪' : '🛡️')}
                        className="text-[11px] text-slate-500 hover:text-red-600 underline font-medium ml-auto"
                      >
                        Về mặc định
                      </button>
                    )}
                  </div>
                </div>

                {/* Phần 2: Tiêu đề */}
                <div className="space-y-1.5">
                  <label className="block text-[11px] font-mono font-bold text-slate-700 uppercase tracking-wider">
                    Phần 2: Tiêu đề
                  </label>
                  <input
                    type="text"
                    value={item.title}
                    onChange={(e) => handleUspChange(item.id, 'title', e.target.value)}
                    placeholder="Ví dụ: Made in Japan"
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                  />
                </div>

                {/* Phần 3: Mô tả ngắn */}
                <div className="space-y-1.5">
                  <label className="block text-[11px] font-mono font-bold text-slate-700 uppercase tracking-wider">
                    Phần 3: Mô tả ngắn
                  </label>
                  <textarea
                    rows={3}
                    value={item.description}
                    onChange={(e) => handleUspChange(item.id, 'description', e.target.value)}
                    placeholder="Mô tả tóm tắt lợi ích lâm sàng hoặc chứng nhận..."
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-700 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 leading-relaxed"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Requirement 4: Live Preview for 1.5 3 Key USPs */}
        <div className="mt-8 pt-6 border-t border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-emerald-600" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800">
                Xem trước thực tế bộ 3 USPs (Live Preview):
              </span>
            </div>
            <span className="text-[11px] text-slate-400 font-mono">Hiển thị dạng 3 thẻ cân đối</span>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-50 to-white border border-slate-200/90 shadow-2xs">
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {usps.map((usp, idx) => (
                <li 
                  key={usp.id || idx} 
                  className="flex flex-row sm:flex-col items-start sm:items-center text-left sm:text-center gap-4 sm:gap-3 p-4 sm:p-5 rounded-xl border border-slate-200/80 bg-white shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-50 flex items-center justify-center shrink-0 text-[#C43838]">
                    {renderUspIcon(usp.iconName, "w-5 h-5 sm:w-6 sm:h-6 text-[#C43838]")}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-1 leading-snug">
                      {usp.title || `Tiêu đề USP ${idx + 1}`}
                    </h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-1 sm:mt-0">
                      {usp.description || 'Mô tả ngắn điểm nổi bật...'}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 3. Requirement 3: CTA Buttons Only (Removed Form Popup / Thanks Page Config) */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-5">
        <div className="pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4 text-emerald-600" />
            <h3 className="text-lg font-heading font-extrabold text-slate-900">
              1.6. Cấu hình Nút bấm điều hướng (Scroll CTA)
            </h3>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Hai nút bấm trên banner Hero sẽ điều hướng cuộn mượt màn hình trực tiếp xuống các phần tương ứng, không mở popup.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider font-bold">
                Chữ trên Nút CTA chính
              </label>
              <span className="text-[10px] font-mono text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded">
                Cuộn xuống #offer (Gói ưu đãi)
              </span>
            </div>
            <input
              type="text"
              value={ctaText}
              onChange={(e) => setCtaText(e.target.value)}
              placeholder="NHẬN ƯU ĐÃI GÓI PHÒNG NGỪA CHỦ ĐỘNG"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm font-bold text-slate-900 focus:outline-none focus:border-emerald-600 bg-white"
            />
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider font-bold">
                Chữ trên Nút CTA phụ
              </label>
              <span className="text-[10px] font-mono text-blue-700 bg-blue-100/70 px-2 py-0.5 rounded">
                Cuộn xuống #lead-magnet (Sổ tay/Tài liệu)
              </span>
            </div>
            <input
              type="text"
              value={secondaryCtaText}
              onChange={(e) => setSecondaryCtaText(e.target.value)}
              placeholder="NHẬN SỔ TAY PHÁC ĐỒ PHÒNG NGỪA"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm font-bold text-slate-900 focus:outline-none focus:border-emerald-600 bg-white"
            />
          </div>
        </div>

        {/* Visual Preview of the two CTA buttons */}
        <div className="p-4 rounded-xl bg-slate-50/60 border border-slate-200/60">
          <span className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider block mb-3">
            Mô phỏng hiển thị 2 nút bấm tại Hero:
          </span>
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
            <div className="inline-flex items-center justify-center gap-2 bg-[#C43838] text-white px-6 py-3.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider shadow-md w-full sm:w-auto">
              <span>{ctaText || 'NHẬN ƯU ĐÃI GÓI PHÒNG NGỪA CHỦ ĐỘNG'}</span>
              <ArrowRight className="w-4 h-4" />
            </div>
            <div className="inline-flex items-center justify-center gap-2 bg-white text-slate-800 border-2 border-slate-300 px-6 py-3.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider shadow-xs w-full sm:w-auto">
              <span>{secondaryCtaText || 'NHẬN SỔ TAY PHÁC ĐỒ PHÒNG NGỪA'}</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

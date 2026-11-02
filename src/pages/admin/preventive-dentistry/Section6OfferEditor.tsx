import React, { useRef } from 'react';
import { 
  Gift, 
  Upload, 
  CheckCircle, 
  Plus, 
  Trash2, 
  Bold, 
  CornerDownLeft, 
  FileCode, 
  Eye, 
  Sparkles, 
  Tag, 
  ShieldCheck, 
  Package,
  ArrowRight
} from 'lucide-react';
import { CtaFormConfigEditor } from '../components/CtaFormConfigEditor';

interface Section6OfferEditorProps {
  badge: string;
  setBadge: React.Dispatch<React.SetStateAction<string>>;
  headline: string;
  setHeadline: React.Dispatch<React.SetStateAction<string>>;
  subheadline: string;
  setSubheadline: React.Dispatch<React.SetStateAction<string>>;
  coreBox: {
    title: string;
    image: string;
    items: string[];
  };
  setCoreBox: React.Dispatch<React.SetStateAction<{
    title: string;
    image: string;
    items: string[];
  }>>;
  giftBox: {
    title: string;
    image: string;
    items: string[];
  };
  setGiftBox: React.Dispatch<React.SetStateAction<{
    title: string;
    image: string;
    items: string[];
  }>>;
  originalPrice: string;
  setOriginalPrice: React.Dispatch<React.SetStateAction<string>>;
  salePrice: string;
  setSalePrice: React.Dispatch<React.SetStateAction<string>>;
  guaranteeText: string;
  setGuaranteeText: React.Dispatch<React.SetStateAction<string>>;
  ctaText: string;
  setCtaText: React.Dispatch<React.SetStateAction<string>>;
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

export const Section6OfferEditor: React.FC<Section6OfferEditorProps> = ({
  badge,
  setBadge,
  headline,
  setHeadline,
  subheadline,
  setSubheadline,
  coreBox,
  setCoreBox,
  giftBox,
  setGiftBox,
  originalPrice,
  setOriginalPrice,
  salePrice,
  setSalePrice,
  guaranteeText,
  setGuaranteeText,
  ctaText,
  setCtaText,
  formTitle = '',
  setFormTitle = () => {},
  formDesc = '',
  setFormDesc = () => {},
  formExtraHtml = '',
  setFormExtraHtml = () => {},
  redirectThanks = false,
  setRedirectThanks = () => {},
  targetUrl = '',
  setTargetUrl = () => {},
  resourceTitle = '',
  setResourceTitle = () => {},
  onUploadImage,
  isUploadingImage,
  uploadingTarget
}) => {
  const headlineInputRef = useRef<HTMLTextAreaElement>(null);
  const subheadlineInputRef = useRef<HTMLTextAreaElement>(null);
  const coreTitleInputRef = useRef<HTMLTextAreaElement>(null);
  const giftTitleInputRef = useRef<HTMLTextAreaElement>(null);
  const guaranteeInputRef = useRef<HTMLTextAreaElement>(null);

  // Helper insertion for single refs
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

  // Helper insertion for dynamic list items
  const insertSnippetIntoBoxItem = (
    boxType: 'core' | 'gift',
    index: number,
    prefix: string,
    suffix: string
  ) => {
    const elId = `${boxType}-item-${index}`;
    const el = document.getElementById(elId) as HTMLTextAreaElement | null;
    const isCore = boxType === 'core';
    const currentBox = isCore ? coreBox : giftBox;
    const setBox = isCore ? setCoreBox : setGiftBox;

    if (!el) {
      const nextItems = [...currentBox.items];
      nextItems[index] = (nextItems[index] || '') + prefix + suffix;
      setBox({ ...currentBox, items: nextItems });
      return;
    }

    const start = el.selectionStart || 0;
    const end = el.selectionEnd || 0;
    const val = el.value;
    const selected = val.substring(start, end);
    const replacement = selected ? prefix + selected + suffix : prefix + suffix;
    const updated = val.substring(0, start) + replacement + val.substring(end);
    
    const nextItems = [...currentBox.items];
    nextItems[index] = updated;
    setBox({ ...currentBox, items: nextItems });

    setTimeout(() => {
      el.focus();
      const cursor = selected ? start + replacement.length : start + prefix.length;
      el.setSelectionRange(cursor, cursor);
    }, 0);
  };

  // Quick Format Toolbar Component
  const FormatToolbar: React.FC<{
    onInsert: (prefix: string, suffix: string) => void;
    badgeLabel?: string;
    badgeSnippet?: string;
  }> = ({ 
    onInsert, 
    badgeLabel = "Badge", 
    badgeSnippet = '<span class="inline-block px-2 py-0.5 rounded bg-amber-400 text-slate-950 text-xs font-bold">'
  }) => (
    <div className="flex flex-wrap items-center gap-1.5 text-xs bg-slate-50 p-1 rounded-lg border border-slate-200">
      <span className="text-[11px] text-slate-500 px-1 font-mono">Chèn nhanh:</span>
      <button
        type="button"
        onClick={() => onInsert('<strong>', '</strong>')}
        className="px-2 py-0.5 bg-white hover:bg-slate-200 rounded text-slate-800 font-bold border border-slate-200 text-xs inline-flex items-center gap-1 shadow-2xs transition-colors"
        title="In đậm chữ đang bôi đen hoặc chèn thẻ <strong>"
      >
        <Bold className="w-3 h-3" />
        <span>Đậm</span>
      </button>
      <button
        type="button"
        onClick={() => onInsert('<span class="text-[#C43838] font-bold">', '</span>')}
        className="px-2 py-0.5 bg-red-50 hover:bg-red-100 text-[#C43838] font-bold rounded border border-red-200 text-[11px] transition-colors"
        title="Tô màu đỏ nhận diện #C43838"
      >
        Đỏ #C43838
      </button>
      <button
        type="button"
        onClick={() => onInsert('<span class="text-[#00ADEF] font-bold">', '</span>')}
        className="px-2 py-0.5 bg-sky-50 hover:bg-sky-100 text-[#00ADEF] font-bold rounded border border-sky-200 text-[11px] transition-colors"
        title="Tô màu xanh #00ADEF"
      >
        Xanh #00ADEF
      </button>
      <button
        type="button"
        onClick={() => onInsert(badgeSnippet, '</span>')}
        className="px-2 py-0.5 bg-amber-50 hover:bg-amber-100 text-amber-800 font-bold rounded border border-amber-200 text-[11px] inline-flex items-center gap-1 transition-colors"
        title="Chèn thẻ span badge nổi bật"
      >
        <Tag className="w-3 h-3 text-amber-600" />
        <span>{badgeLabel}</span>
      </button>
      <button
        type="button"
        onClick={() => onInsert('<br className="hidden sm:inline" />', '')}
        className="px-2 py-0.5 bg-white hover:bg-slate-200 rounded text-slate-700 font-mono text-[11px] border border-slate-200 inline-flex items-center gap-1 transition-colors"
        title="Chèn thẻ xuống dòng <br/>"
      >
        <CornerDownLeft className="w-3 h-3 text-slate-500" />
        <span>&lt;br/&gt;</span>
      </button>
    </div>
  );

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* 1. Header Box: Tiêu đề H2 & Phụ đề */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-3 pb-5 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
            <Gift className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-heading font-extrabold text-slate-900">
              Section 6: Gói Khởi Động & Ưu Đãi Tháng
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Cấu hình combo sản phẩm, quà tặng độc quyền, bảng giá và chính sách cam kết uy tín
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {/* 6.1 Badge */}
          <div>
            <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-bold">
              6.1. Badge ưu đãi
            </label>
            <input
              type="text"
              value={badge}
              onChange={(e) => setBadge(e.target.value)}
              placeholder="Ví dụ: ƯU ĐÃI KHỞI ĐỘNG THÁNG NÀY"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-900 focus:outline-none focus:border-red-600 bg-white"
            />
          </div>

          {/* 6.2 Headline H2 with HTML Toolbar & Suggestions */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider font-bold">
                6.2. Tiêu đề gói ưu đãi H2 - Hỗ trợ HTML
              </label>
              <FormatToolbar 
                onInsert={(p, s) => insertSnippet(headlineInputRef, p, s, setHeadline)}
                badgeLabel="Badge Vàng"
                badgeSnippet='<span class="inline-block px-2 py-0.5 rounded bg-amber-400 text-slate-950 text-xs font-bold">'
              />
            </div>

            <textarea
              ref={headlineInputRef}
              rows={2}
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              placeholder="Nhập tiêu đề gói ưu đãi H2..."
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-bold font-mono text-slate-900 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/10 leading-relaxed bg-white"
            />

            {/* Suggestions for Headline */}
            <div className="mt-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
              <div className="flex items-center gap-1.5 text-slate-600 font-bold mb-1.5 font-mono text-[11px]">
                <FileCode className="w-3.5 h-3.5 text-red-600" />
                <span>Gợi ý cú pháp HTML tiêu đề H2 (Nhấp để chèn):</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <button
                  type="button"
                  onClick={() => setHeadline(prev => prev + ' <span class="text-[#C43838] font-bold">Gói Khởi Động Toàn Diện</span>')}
                  className="px-2 py-1 bg-white hover:bg-red-50 text-slate-700 hover:text-red-700 border border-slate-200 rounded-lg text-[11px] transition-colors"
                >
                  + Chữ đỏ Shofu: <code className="text-[#C43838]">&lt;span class=&quot;text-[#C43838] font-bold&quot;&gt;...&lt;/span&gt;</code>
                </button>
                <button
                  type="button"
                  onClick={() => setHeadline(prev => prev + ' <span class="text-[#00ADEF] font-bold">Nha Khoa Phòng Ngừa</span>')}
                  className="px-2 py-1 bg-white hover:bg-sky-50 text-slate-700 hover:text-sky-700 border border-slate-200 rounded-lg text-[11px] transition-colors"
                >
                  + Chữ xanh #00ADEF: <code className="text-[#00ADEF]">&lt;span class=&quot;text-[#00ADEF] font-bold&quot;&gt;...&lt;/span&gt;</code>
                </button>
                <button
                  type="button"
                  onClick={() => setHeadline(prev => prev + ' <span class="inline-block px-2 py-0.5 rounded bg-amber-400 text-slate-950 text-xs font-bold">TIẾT KIỆM 40%</span>')}
                  className="px-2 py-1 bg-white hover:bg-amber-50 text-slate-700 hover:text-amber-800 border border-slate-200 rounded-lg text-[11px] transition-colors"
                >
                  + Thẻ Badge Vàng: <code className="text-amber-600">&lt;span class=&quot;bg-amber-400...&quot;&gt;...&lt;/span&gt;</code>
                </button>
                <button
                  type="button"
                  onClick={() => setHeadline(prev => prev + ' <br className="hidden sm:inline" />')}
                  className="px-2 py-1 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-lg text-[11px] transition-colors"
                >
                  + Xuống hàng máy tính: <code className="text-slate-600">&lt;br /&gt;</code>
                </button>
              </div>
            </div>
          </div>

          {/* 6.3 Subheadline with HTML Toolbar & Suggestions */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider font-bold">
                6.3. Tiêu đề phụ dẫn dắt - Hỗ trợ HTML
              </label>
              <FormatToolbar 
                onInsert={(p, s) => insertSnippet(subheadlineInputRef, p, s, setSubheadline)}
                badgeLabel="Badge Đỏ"
                badgeSnippet='<span class="inline-block px-2 py-0.5 rounded-full bg-red-600 text-white text-xs font-bold">'
              />
            </div>

            <textarea
              ref={subheadlineInputRef}
              rows={2}
              value={subheadline}
              onChange={(e) => setSubheadline(e.target.value)}
              placeholder="Ví dụ: Chỉ dành cho 30 phòng khám đăng ký sớm nhất trong tháng này..."
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 font-mono focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/10 leading-relaxed bg-white"
            />

            {/* Suggestions for Subheadline */}
            <div className="mt-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
              <div className="flex items-center gap-1.5 text-slate-600 font-bold mb-1.5 font-mono text-[11px]">
                <FileCode className="w-3.5 h-3.5 text-red-600" />
                <span>Gợi ý chèn nhanh cho tiêu đề phụ:</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <button
                  type="button"
                  onClick={() => setSubheadline(prev => prev + ' <span class="text-amber-300 font-bold">chỉ còn 5 suất cuối cùng</span>')}
                  className="px-2 py-1 bg-white hover:bg-amber-50 text-slate-700 hover:text-amber-800 border border-slate-200 rounded-lg text-[11px] transition-colors"
                >
                  + Chữ vàng nổi bật: <code className="text-amber-600">&lt;span class=&quot;text-amber-300 font-bold&quot;&gt;...&lt;/span&gt;</code>
                </button>
                <button
                  type="button"
                  onClick={() => setSubheadline(prev => prev + ' <span class="inline-block px-2 py-0.5 rounded-full bg-red-600 text-white text-xs font-bold uppercase">Giới hạn 30 suất</span>')}
                  className="px-2 py-1 bg-white hover:bg-red-50 text-slate-700 hover:text-red-700 border border-slate-200 rounded-lg text-[11px] transition-colors"
                >
                  + Badge đỏ cảnh báo: <code className="text-red-600">&lt;span class=&quot;bg-red-600...&quot;&gt;...&lt;/span&gt;</code>
                </button>
                <button
                  type="button"
                  onClick={() => setSubheadline(prev => prev + ' <strong>trong tuần này</strong>')}
                  className="px-2 py-1 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-lg text-[11px] transition-colors"
                >
                  + In đậm: <code className="text-slate-600">&lt;strong&gt;...&lt;/strong&gt;</code>
                </button>
              </div>
            </div>
          </div>

          {/* LIVE PREVIEW 1: Tiêu đề H2 & Phụ đề */}
          <div className="mt-2 p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-2 mb-2">
              <Eye className="w-3.5 h-3.5 text-red-600" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-600">
                Xem trước trực quan (Live Preview Header Section 6 - Giao diện tối):
              </span>
            </div>
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-red-950/80 shadow-xl text-center text-white relative overflow-hidden">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/60 border border-red-900/60 font-mono text-xs font-bold tracking-wider mb-4 shadow-sm mx-auto">
                <Gift className="w-3.5 h-3.5 text-amber-300" />
                <span className="text-red-100">{badge || 'ƯU ĐÃI ĐẶC QUYỀN'}</span>
              </div>
              <h2 
                className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white leading-[1.3] mb-3 tracking-tight"
                dangerouslySetInnerHTML={{ __html: headline || '<span class="text-slate-500 italic">Chưa nhập tiêu đề H2...</span>' }}
              />
              <p 
                className="text-red-100/90 font-body text-sm sm:text-base leading-relaxed max-w-2xl mx-auto"
                dangerouslySetInnerHTML={{ __html: subheadline || '<span class="text-slate-500 italic">Chưa nhập tiêu đề phụ...</span>' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 2. Combo & Gifts 2 Columns: Core Box & Gift Box */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Core Products Box */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm space-y-5">
          <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Package className="w-5 h-5 text-red-600" />
              <h3 className="font-heading font-bold text-slate-900 text-base">
                Khối 1: Gói Sản Phẩm Cốt Lõi (Core Box)
              </h3>
            </div>
            <span className="text-xs font-mono font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-md border border-red-200">
              Cốt Lõi
            </span>
          </div>

          {/* Core Title with HTML */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-1.5 mb-1.5">
              <label className="block text-xs text-slate-700 font-bold">Tiêu đề khối cốt lõi (Hỗ trợ HTML)</label>
              <FormatToolbar 
                onInsert={(p, s) => insertSnippet(coreTitleInputRef, p, s, (val) => {
                  setCoreBox(prev => ({ ...prev, title: typeof val === 'function' ? val(prev.title) : val }));
                })}
                badgeLabel="Badge"
              />
            </div>
            <textarea
              ref={coreTitleInputRef}
              rows={2}
              value={coreBox.title}
              onChange={(e) => setCoreBox({ ...coreBox, title: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs font-mono font-bold text-slate-900 focus:outline-none focus:border-red-600 bg-white"
            />
          </div>

          {/* Core Image */}
          <div>
            <label className="block text-xs text-slate-700 font-bold mb-1">Ảnh combo cốt lõi</label>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex flex-col gap-2">
              <div className="h-28 flex items-center justify-center bg-slate-900/10 rounded-lg p-2">
                <img src={coreBox.image} alt="Core" className="max-h-full max-w-full object-contain drop-shadow" />
              </div>
              <input
                type="text"
                value={coreBox.image}
                onChange={(e) => setCoreBox({ ...coreBox, image: e.target.value })}
                className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-mono"
              />
              <label className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold cursor-pointer transition-colors">
                <Upload className="w-3.5 h-3.5" />
                <span>{isUploadingImage && uploadingTarget === 'offer_core_img' ? 'Đang tải...' : 'Tải ảnh mới'}</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      onUploadImage(file, 'offer_core_img', (newUrl) => setCoreBox({ ...coreBox, image: newUrl }));
                    }
                  }}
                />
              </label>
            </div>
          </div>

          {/* Core Items List */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="block text-xs text-slate-700 font-bold">
                Danh sách sản phẩm / tính năng ({coreBox.items.length}):
              </label>
              <button
                type="button"
                onClick={() => setCoreBox({ ...coreBox, items: [...coreBox.items, ''] })}
                className="inline-flex items-center gap-1 text-xs text-red-600 hover:text-red-700 font-bold px-2 py-1 bg-red-50 hover:bg-red-100 rounded-lg transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Thêm dòng</span>
              </button>
            </div>

            {coreBox.items.map((it, idx) => (
              <div key={idx} className="p-3 bg-slate-50/80 rounded-xl border border-slate-200 space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono font-bold text-slate-500">Dòng #{idx + 1}</span>
                  <div className="flex items-center gap-1.5">
                    <FormatToolbar 
                      onInsert={(p, s) => insertSnippetIntoBoxItem('core', idx, p, s)}
                      badgeLabel="Badge"
                    />
                    {coreBox.items.length > 1 && (
                      <button
                        type="button"
                        onClick={() => {
                          const next = coreBox.items.filter((_, i) => i !== idx);
                          setCoreBox({ ...coreBox, items: next });
                        }}
                        className="p-1 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                        title="Xóa dòng này"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
                <textarea
                  id={`core-item-${idx}`}
                  rows={2}
                  value={it}
                  onChange={(e) => {
                    const next = [...coreBox.items];
                    next[idx] = e.target.value;
                    setCoreBox({ ...coreBox, items: next });
                  }}
                  placeholder="Nhập thông tin sản phẩm (có thể kèm thẻ HTML, in đậm, đổi màu)..."
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs font-mono text-slate-800 bg-white focus:outline-none focus:border-red-600"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Gift Box */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm space-y-5">
          <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Gift className="w-5 h-5 text-amber-500" />
              <h3 className="font-heading font-bold text-slate-900 text-base">
                Khối 2: Bộ Quà Tặng Độc Quyền (Gift Box)
              </h3>
            </div>
            <span className="text-xs font-mono font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
              Quà Tặng
            </span>
          </div>

          {/* Gift Title with HTML */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-1.5 mb-1.5">
              <label className="block text-xs text-slate-700 font-bold">Tiêu đề khối quà tặng (Hỗ trợ HTML)</label>
              <FormatToolbar 
                onInsert={(p, s) => insertSnippet(giftTitleInputRef, p, s, (val) => {
                  setGiftBox(prev => ({ ...prev, title: typeof val === 'function' ? val(prev.title) : val }));
                })}
                badgeLabel="Badge Vàng"
                badgeSnippet='<span class="inline-block px-2 py-0.5 rounded bg-amber-400 text-slate-950 text-xs font-bold">'
              />
            </div>
            <textarea
              ref={giftTitleInputRef}
              rows={2}
              value={giftBox.title}
              onChange={(e) => setGiftBox({ ...giftBox, title: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs font-mono font-bold text-slate-900 focus:outline-none focus:border-amber-500 bg-white"
            />
          </div>

          {/* Gift Image */}
          <div>
            <label className="block text-xs text-slate-700 font-bold mb-1">Ảnh bộ quà tặng</label>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex flex-col gap-2">
              <div className="h-28 flex items-center justify-center bg-slate-900/10 rounded-lg p-2">
                <img src={giftBox.image} alt="Gifts" className="max-h-full max-w-full object-contain drop-shadow" />
              </div>
              <input
                type="text"
                value={giftBox.image}
                onChange={(e) => setGiftBox({ ...giftBox, image: e.target.value })}
                className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-mono"
              />
              <label className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold cursor-pointer transition-colors">
                <Upload className="w-3.5 h-3.5" />
                <span>{isUploadingImage && uploadingTarget === 'offer_gift_img' ? 'Đang tải...' : 'Tải ảnh mới'}</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      onUploadImage(file, 'offer_gift_img', (newUrl) => setGiftBox({ ...giftBox, image: newUrl }));
                    }
                  }}
                />
              </label>
            </div>
          </div>

          {/* Gift Items List */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="block text-xs text-slate-700 font-bold">
                Danh sách quà tặng kèm theo ({giftBox.items.length}):
              </label>
              <button
                type="button"
                onClick={() => setGiftBox({ ...giftBox, items: [...giftBox.items, ''] })}
                className="inline-flex items-center gap-1 text-xs text-amber-600 hover:text-amber-700 font-bold px-2 py-1 bg-amber-50 hover:bg-amber-100 rounded-lg transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Thêm quà</span>
              </button>
            </div>

            {giftBox.items.map((it, idx) => (
              <div key={idx} className="p-3 bg-slate-50/80 rounded-xl border border-slate-200 space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono font-bold text-slate-500">Quà #{idx + 1}</span>
                  <div className="flex items-center gap-1.5">
                    <FormatToolbar 
                      onInsert={(p, s) => insertSnippetIntoBoxItem('gift', idx, p, s)}
                      badgeLabel="Badge"
                      badgeSnippet='<span class="inline-block px-1.5 py-0.5 rounded bg-amber-400 text-slate-900 text-xs font-bold">TẶNG KÈM</span>'
                    />
                    {giftBox.items.length > 1 && (
                      <button
                        type="button"
                        onClick={() => {
                          const next = giftBox.items.filter((_, i) => i !== idx);
                          setGiftBox({ ...giftBox, items: next });
                        }}
                        className="p-1 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                        title="Xóa quà này"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
                <textarea
                  id={`gift-item-${idx}`}
                  rows={2}
                  value={it}
                  onChange={(e) => {
                    const next = [...giftBox.items];
                    next[idx] = e.target.value;
                    setGiftBox({ ...giftBox, items: next });
                  }}
                  placeholder="Nhập thông tin quà tặng (kèm giá trị, in đậm, đổi màu)..."
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs font-mono text-slate-800 bg-white focus:outline-none focus:border-amber-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* LIVE PREVIEW 2: Hai Khối Combo Sản phẩm & Quà tặng */}
      <div className="p-4 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200">
        <div className="flex items-center gap-2 mb-3">
          <Eye className="w-3.5 h-3.5 text-red-600" />
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-600">
            Xem trước trực quan (Live Preview 2 Khối Combo & Quà tặng - Section 6):
          </span>
        </div>
        
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-red-950/80 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Box 1 Preview */}
            <div className="bg-red-950/30 border border-red-900/50 rounded-2xl p-5 sm:p-6 shadow-xl flex flex-col">
              <div className="w-full relative mb-4 flex justify-center items-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-red-500/20 blur-[50px] rounded-full pointer-events-none"></div>
                <img 
                  src={coreBox.image} 
                  alt="Core preview" 
                  className="w-full h-auto object-contain max-h-[180px] drop-shadow-[0_15px_30px_rgba(220,38,38,0.25)] mx-auto relative z-10" 
                />
              </div>
              <div className="space-y-3 flex-1">
                <h4 
                  className="font-heading font-bold text-base sm:text-lg text-amber-300 border-b border-red-900/50 pb-2"
                  dangerouslySetInnerHTML={{ __html: coreBox.title || 'Bộ sản phẩm cốt lõi' }}
                />
                <ul className="space-y-2.5 font-body text-xs sm:text-sm">
                  {coreBox.items.map((it, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div className="text-slate-200 leading-relaxed" dangerouslySetInnerHTML={{ __html: it || '<span class="text-slate-500 italic">Dòng trống...</span>' }} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Box 2 Preview */}
            <div className="bg-red-950/30 border border-red-900/50 rounded-2xl p-5 sm:p-6 shadow-xl flex flex-col">
              <div className="w-full relative mb-4 flex justify-center items-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-amber-500/20 blur-[50px] rounded-full pointer-events-none"></div>
                <img 
                  src={giftBox.image} 
                  alt="Gift preview" 
                  className="w-full h-auto object-contain max-h-[180px] drop-shadow-[0_15px_30px_rgba(245,158,11,0.25)] mx-auto relative z-10" 
                />
              </div>
              <div className="space-y-3 flex-1">
                <h4 
                  className="font-heading font-bold text-base sm:text-lg text-amber-300 border-b border-red-900/50 pb-2"
                  dangerouslySetInnerHTML={{ __html: giftBox.title || 'Bộ quà tặng tài trợ' }}
                />
                <ul className="space-y-2.5 font-body text-xs sm:text-sm">
                  {giftBox.items.map((it, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Gift className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div className="text-slate-200 leading-relaxed" dangerouslySetInnerHTML={{ __html: it || '<span class="text-slate-500 italic">Dòng trống...</span>' }} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Pricing & Guarantee Box */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="pb-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <h3 className="text-lg font-heading font-extrabold text-slate-900">
              6.4. Bảng giá & Thông điệp Cam kết An tâm
            </h3>
          </div>
          <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
            Cam Kết 100%
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-bold">
              Tổng giá trị niêm yết (Gạch ngang)
            </label>
            <input
              type="text"
              value={originalPrice}
              onChange={(e) => setOriginalPrice(e.target.value)}
              placeholder="Ví dụ: 12.500.000 VNĐ"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-base font-bold text-slate-500 line-through bg-white"
            />
          </div>
          <div>
            <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-bold">
              Mức đầu tư ưu đãi đặc quyền
            </label>
            <input
              type="text"
              value={salePrice}
              onChange={(e) => setSalePrice(e.target.value)}
              placeholder="Ví dụ: 6.800.000 VNĐ"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-base font-extrabold text-red-600 bg-white"
            />
          </div>
        </div>

        {/* Guarantee Text with HTML Toolbar & Suggestions */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-1.5 mb-2">
            <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider font-bold">
              Thông điệp Cam Kết An Tâm (Guarantee Text) - Hỗ trợ HTML
            </label>
            <FormatToolbar 
              onInsert={(p, s) => insertSnippet(guaranteeInputRef, p, s, setGuaranteeText)}
              badgeLabel="Badge Xanh"
              badgeSnippet='<span class="inline-block px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-xs font-bold">'
            />
          </div>

          <textarea
            ref={guaranteeInputRef}
            rows={2}
            value={guaranteeText}
            onChange={(e) => setGuaranteeText(e.target.value)}
            placeholder="Ví dụ: Cam kết hoàn tiền 100% nếu sản phẩm không đúng quy chuẩn công nghệ Shofu Japan..."
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-semibold font-mono text-slate-800 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10 leading-relaxed bg-white"
          />

          {/* Quick suggestions for guarantee */}
          <div className="mt-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
            <div className="flex items-center gap-1.5 text-slate-600 font-bold mb-1.5 font-mono text-[11px]">
              <FileCode className="w-3.5 h-3.5 text-emerald-600" />
              <span>Gợi ý chèn nhanh cho cam kết:</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              <button
                type="button"
                onClick={() => setGuaranteeText(prev => prev + ' <span class="text-emerald-400 font-bold">Hoàn tiền 100% trong 30 ngày</span>')}
                className="px-2 py-1 bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 border border-slate-200 rounded-lg text-[11px] transition-colors"
              >
                + Chữ xanh ngọc: <code className="text-emerald-600">&lt;span class=&quot;text-emerald-400...&quot;&gt;...&lt;/span&gt;</code>
              </button>
              <button
                type="button"
                onClick={() => setGuaranteeText(prev => prev + ' <span class="text-[#00ADEF] font-bold">chính hãng Shofu Nhật Bản</span>')}
                className="px-2 py-1 bg-white hover:bg-sky-50 text-slate-700 hover:text-sky-700 border border-slate-200 rounded-lg text-[11px] transition-colors"
              >
                + Chữ xanh Shofu: <code className="text-[#00ADEF]">&lt;span class=&quot;text-[#00ADEF]...&quot;&gt;...&lt;/span&gt;</code>
              </button>
              <button
                type="button"
                onClick={() => setGuaranteeText(prev => prev + ' <strong>không rủi ro</strong>')}
                className="px-2 py-1 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-lg text-[11px] transition-colors"
              >
                + In đậm: <code className="text-slate-600">&lt;strong&gt;...&lt;/strong&gt;</code>
              </button>
            </div>
          </div>
        </div>

        {/* LIVE PREVIEW 3: Bảng giá & Cam kết An tâm */}
        <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
          <div className="flex items-center gap-2 mb-2">
            <Eye className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-600">
              Xem trước trực quan (Live Preview Bảng giá & Cam kết):
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-red-950/80 shadow-xl space-y-4">
            {/* Price Box Preview */}
            <div className="bg-red-950/40 rounded-xl p-5 border border-red-900/50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <p className="text-red-200 text-xs font-medium mb-1 uppercase tracking-wider">Tổng giá trị</p>
                <p className="text-red-200 text-xl sm:text-2xl font-bold line-through decoration-red-500/50 decoration-2">
                  {originalPrice || '0 VNĐ'}
                </p>
              </div>
              <div className="hidden sm:block w-px h-12 bg-red-900/50"></div>
              <div className="text-center sm:text-right">
                <p className="text-amber-400 text-xs font-medium mb-1 uppercase tracking-wider">Mức đầu tư ưu đãi</p>
                <p className="font-heading font-extrabold text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200">
                  {salePrice || '0 VNĐ'}
                </p>
              </div>
            </div>

            {/* Guarantee Pill Preview */}
            <div className="flex justify-center">
              <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full w-full sm:w-auto text-center">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span 
                  className="text-emerald-300 font-medium text-xs sm:text-sm text-center"
                  dangerouslySetInnerHTML={{ __html: guaranteeText || '<span class="text-slate-500 italic">Chưa nhập câu cam kết...</span>' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. CTA & Form Configuration */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="pb-4 border-b border-slate-100">
          <h3 className="text-lg font-heading font-extrabold text-slate-900">
            6.5. Cấu hình Nút Mua ngay & Form đặt hàng
          </h3>
        </div>

        <div>
          <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-bold">
            Chữ trên nút CTA
          </label>
          <input
            type="text"
            value={ctaText}
            onChange={(e) => setCtaText(e.target.value)}
            placeholder="Ví dụ: ĐĂNG KÝ NHẬN ƯU ĐÃI NGAY"
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-bold text-slate-900 focus:outline-none focus:border-red-600 bg-white"
          />
        </div>

        <CtaFormConfigEditor
          label="CTA & Form Section 6"
          ctaText={ctaText}
          onChangeCtaText={setCtaText}
          formTitle={formTitle}
          onChangeFormTitle={setFormTitle}
          setTitle={setFormTitle}
          formDesc={formDesc}
          onChangeFormDesc={setFormDesc}
          setDescription={setFormDesc}
          formExtraHtml={formExtraHtml}
          onChangeFormExtraHtml={setFormExtraHtml}
          setExtraHtml={setFormExtraHtml}
          redirectThanks={redirectThanks}
          onChangeRedirectThanks={setRedirectThanks}
          setRedirectThanks={setRedirectThanks}
          targetUrl={targetUrl}
          onChangeTargetUrl={setTargetUrl}
          setTargetUrl={setTargetUrl}
          resourceTitle={resourceTitle}
          onChangeResourceTitle={setResourceTitle}
          setResourceTitle={setResourceTitle}
        />
      </div>
    </div>
  );
};

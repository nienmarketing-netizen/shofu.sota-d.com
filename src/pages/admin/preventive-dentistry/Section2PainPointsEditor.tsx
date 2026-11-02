import React, { useRef } from 'react';
import { 
  AlertTriangle, 
  Upload, 
  Bold, 
  CornerDownLeft, 
  FileCode, 
  Eye, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { PainPointItem } from './types';
import { CtaFormConfigEditor } from '../components/CtaFormConfigEditor';

interface Section2PainPointsEditorProps {
  badge: string;
  setBadge: React.Dispatch<React.SetStateAction<string>>;
  headline: string;
  setHeadline: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  items: PainPointItem[];
  setItems: React.Dispatch<React.SetStateAction<PainPointItem[]>>;
  calloutText: string;
  setCalloutText: React.Dispatch<React.SetStateAction<string>>;
  image: string;
  setImage: React.Dispatch<React.SetStateAction<string>>;
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

export const Section2PainPointsEditor: React.FC<Section2PainPointsEditorProps> = ({
  badge,
  setBadge,
  headline,
  setHeadline,
  description,
  setDescription,
  items,
  setItems,
  calloutText,
  setCalloutText,
  image,
  setImage,
  ctaText,
  setCtaText,
  formTitle = '',
  setFormTitle = () => {},
  formDesc = '',
  setFormDesc = () => {},
  formExtraHtml = '',
  setFormExtraHtml = () => {},
  redirectThanks = true,
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
  const descriptionInputRef = useRef<HTMLTextAreaElement>(null);
  const calloutInputRef = useRef<HTMLTextAreaElement>(null);

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

  const handleItemChange = (id: string, field: 'title' | 'description', val: string) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: val } : item))
    );
  };

  // Helper insertion for card textareas by DOM ID
  const insertSnippetIntoCard = (
    id: string,
    field: 'title' | 'description',
    prefix: string,
    suffix: string
  ) => {
    const el = document.getElementById(`pain-card-${field}-${id}`) as HTMLTextAreaElement | null;
    if (!el) {
      const currentItem = items.find((i) => i.id === id);
      const currentVal = currentItem ? currentItem[field] : '';
      handleItemChange(id, field, currentVal + prefix + suffix);
      return;
    }
    const start = el.selectionStart;
    const end = el.selectionEnd;
    const currentVal = el.value;
    const selected = currentVal.substring(start, end);
    const replacement = selected ? prefix + selected + suffix : prefix + suffix;
    const updated = currentVal.substring(0, start) + replacement + currentVal.substring(end);
    handleItemChange(id, field, updated);
    setTimeout(() => {
      el.focus();
      const cursor = selected ? start + replacement.length : start + prefix.length;
      el.setSelectionRange(cursor, cursor);
    }, 0);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* 1. Header Box */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-3 pb-5 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-heading font-extrabold text-slate-900">
              Section 2: Điểm mù lâm sàng
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              3 rào cản kỹ thuật và nguy cơ tiềm ẩn khi dùng vật liệu thụ động
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {/* 2.1 Badge */}
          <div>
            <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-bold">
              2.1. Badge nhãn
            </label>
            <input
              type="text"
              value={badge}
              onChange={(e) => setBadge(e.target.value)}
              placeholder="Ví dụ: Rào cản kỹ thuật & Điểm mù lâm sàng"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-900 focus:outline-none focus:border-emerald-600"
            />
          </div>

          {/* 2.2 Headline H2 with HTML & Suggestions & Preview */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider font-bold">
                2.2. Tiêu đề H2 - Hỗ trợ định dạng HTML
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
                  onClick={() => insertSnippet(headlineInputRef, '<span class="text-red-400 font-bold">', '</span>', setHeadline)}
                  className="px-2 py-0.5 bg-red-50 hover:bg-red-100 text-red-600 font-bold rounded border border-red-200 text-[11px]"
                  title="Tô màu đỏ cảnh báo sáng"
                >
                  Đỏ Cảnh Báo
                </button>
                <button
                  type="button"
                  onClick={() => insertSnippet(headlineInputRef, '<span class="text-[#C43838] font-bold">', '</span>', setHeadline)}
                  className="px-2 py-0.5 bg-red-50 hover:bg-red-100 text-[#C43838] font-bold rounded border border-red-200 text-[11px]"
                  title="Tô màu đỏ thương hiệu Shofu"
                >
                  Đỏ Shofu
                </button>
                <button
                  type="button"
                  onClick={() => insertSnippet(headlineInputRef, '<span class="text-amber-400 font-bold">', '</span>', setHeadline)}
                  className="px-2 py-0.5 bg-amber-50 hover:bg-amber-100 text-amber-700 font-bold rounded border border-amber-200 text-[11px]"
                  title="Tô màu vàng chú ý"
                >
                  Vàng Chú Ý
                </button>
                <button
                  type="button"
                  onClick={() => insertSnippet(headlineInputRef, '<br className="hidden sm:inline" />', '', setHeadline)}
                  className="px-2 py-0.5 bg-white hover:bg-slate-200 rounded text-slate-700 font-mono text-[11px] border border-slate-200 inline-flex items-center gap-1"
                  title="Chèn thẻ xuống dòng trên màn hình máy tính"
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
              placeholder='Ví dụ: 3 Rào cản khiến vật liệu thụ động <span class="text-red-400 font-bold">thất bại sớm</span>'
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-semibold font-mono text-slate-900 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10 leading-relaxed bg-white"
            />

            {/* Ready-to-use HTML Suggestions */}
            <div className="mt-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
              <div className="flex items-center gap-1.5 text-slate-600 font-bold mb-1.5 font-mono text-[11px]">
                <FileCode className="w-3.5 h-3.5 text-emerald-600" />
                <span>Gợi ý cú pháp HTML tiêu đề H2 (Nhấp để chèn):</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <button
                  type="button"
                  onClick={() => setHeadline(prev => prev + ' <span class="text-red-400 font-bold">Điểm Mù Lâm Sàng</span>')}
                  className="px-2 py-1 bg-white hover:bg-red-50 text-slate-700 hover:text-red-700 border border-slate-200 rounded-lg text-[11px] transition-colors"
                >
                  + Chữ đỏ cảnh báo: <code className="text-red-500">&lt;span class=&quot;text-red-400 font-bold&quot;&gt;...&lt;/span&gt;</code>
                </button>
                <button
                  type="button"
                  onClick={() => setHeadline(prev => prev + ' <span class="text-[#C43838] font-bold">Thất Bại Sớm</span>')}
                  className="px-2 py-1 bg-white hover:bg-red-50 text-slate-700 hover:text-red-700 border border-slate-200 rounded-lg text-[11px] transition-colors"
                >
                  + Chữ đỏ Shofu: <code className="text-[#C43838]">&lt;span class=&quot;text-[#C43838] font-bold&quot;&gt;...&lt;/span&gt;</code>
                </button>
                <button
                  type="button"
                  onClick={() => setHeadline(prev => prev + ' <span class="text-amber-400 font-bold">Nguy Cơ Ẩn</span>')}
                  className="px-2 py-1 bg-white hover:bg-amber-50 text-slate-700 hover:text-amber-700 border border-slate-200 rounded-lg text-[11px] transition-colors"
                >
                  + Chữ vàng: <code className="text-amber-600">&lt;span class=&quot;text-amber-400 font-bold&quot;&gt;...&lt;/span&gt;</code>
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
                  + In đậm: <code className="text-slate-600">&lt;strong&gt;...&lt;/strong&gt;</code>
                </button>
              </div>
            </div>

            {/* Requirement 5: Live Preview for 2.2 Tiêu đề H2 (Dark Theme Preview) */}
            <div className="mt-3 p-4 rounded-xl bg-slate-900 border border-slate-800 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Eye className="w-3.5 h-3.5 text-red-400" />
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-300">
                  Xem trước trực tiếp (Live Preview H2 - Giao diện tối):
                </span>
              </div>
              <div className="p-4 sm:p-6 rounded-xl bg-slate-950/70 border border-slate-800 text-center">
                <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 font-mono text-xs font-bold mb-3 shadow-xs">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
                  <span>{badge || 'Rào cản kỹ thuật & Điểm mù lâm sàng'}</span>
                </div>
                <h2 
                  className="font-heading font-extrabold text-xl sm:text-2xl lg:text-3xl text-white leading-[1.3] tracking-tight"
                  dangerouslySetInnerHTML={{ __html: headline || '<span class="text-slate-500 italic">Chưa có tiêu đề H2...</span>' }}
                />
                <div className="w-16 h-1 bg-red-500 mx-auto mt-4 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* 2.3 Description with HTML & Suggestions & Preview */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider font-bold">
                2.3. Đoạn mô tả dẫn dắt - Hỗ trợ định dạng HTML
              </label>

              {/* Quick HTML Action Buttons */}
              <div className="flex flex-wrap items-center gap-1.5 text-xs bg-slate-50 p-1 rounded-lg border border-slate-200">
                <span className="text-[11px] text-slate-500 px-1 font-mono">Chèn nhanh:</span>
                <button
                  type="button"
                  onClick={() => insertSnippet(descriptionInputRef, '<strong>', '</strong>', setDescription)}
                  className="px-2 py-0.5 bg-white hover:bg-slate-200 rounded text-slate-800 font-bold border border-slate-200 text-xs inline-flex items-center gap-1 shadow-xs"
                  title="In đậm chữ đang bôi đen hoặc chèn thẻ <strong>"
                >
                  <Bold className="w-3 h-3" />
                  <span>Đậm</span>
                </button>
                <button
                  type="button"
                  onClick={() => insertSnippet(descriptionInputRef, '<span class="text-red-400 font-bold">', '</span>', setDescription)}
                  className="px-2 py-0.5 bg-red-50 hover:bg-red-100 text-red-600 font-bold rounded border border-red-200 text-[11px]"
                  title="Tô màu đỏ cảnh báo"
                >
                  Đỏ Cảnh Báo
                </button>
                <button
                  type="button"
                  onClick={() => insertSnippet(descriptionInputRef, '<span class="text-emerald-400 font-bold">', '</span>', setDescription)}
                  className="px-2 py-0.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold rounded border border-emerald-200 text-[11px]"
                  title="Tô màu xanh sinh học MiCD"
                >
                  Xanh MiCD
                </button>
                <button
                  type="button"
                  onClick={() => insertSnippet(descriptionInputRef, '<span class="text-amber-300 font-bold">', '</span>', setDescription)}
                  className="px-2 py-0.5 bg-amber-50 hover:bg-amber-100 text-amber-700 font-bold rounded border border-amber-200 text-[11px]"
                  title="Tô màu vàng chú ý"
                >
                  Vàng Chú Ý
                </button>
                <button
                  type="button"
                  onClick={() => insertSnippet(descriptionInputRef, '<br/><br/>', '', setDescription)}
                  className="px-2 py-0.5 bg-white hover:bg-slate-200 rounded text-slate-700 font-mono text-[11px] border border-slate-200"
                  title="Ngắt đoạn mới"
                >
                  &lt;br/&gt; ngắt đoạn
                </button>
              </div>
            </div>

            <textarea
              ref={descriptionInputRef}
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-mono text-slate-800 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10 leading-relaxed bg-white"
            />

            {/* Ready-to-use HTML Suggestions for Description */}
            <div className="mt-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
              <div className="flex items-center gap-1.5 text-slate-600 font-bold mb-1.5 font-mono text-[11px]">
                <FileCode className="w-3.5 h-3.5 text-emerald-600" />
                <span>Gợi ý định dạng đoạn văn nhanh (Nhấp để chèn):</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <button
                  type="button"
                  onClick={() => setDescription(prev => prev + ' <strong>vật liệu thụ động</strong>')}
                  className="px-2 py-1 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-lg text-[11px] transition-colors"
                >
                  + In đậm: <code>&lt;strong&gt;vật liệu thụ động&lt;/strong&gt;</code>
                </button>
                <button
                  type="button"
                  onClick={() => setDescription(prev => prev + ' <span class="text-red-400 font-bold">nguy cơ sâu răng tái phát</span>')}
                  className="px-2 py-1 bg-white hover:bg-red-50 text-slate-700 hover:text-red-700 border border-slate-200 rounded-lg text-[11px] transition-colors"
                >
                  + Nhấn mạnh đỏ: <code>&lt;span class=&quot;text-red-400 font-bold&quot;&gt;...&lt;/span&gt;</code>
                </button>
                <button
                  type="button"
                  onClick={() => setDescription(prev => prev + ' <span class="text-emerald-400 font-bold">trị liệu sinh học MiCD</span>')}
                  className="px-2 py-1 bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 border border-slate-200 rounded-lg text-[11px] transition-colors"
                >
                  + Nhấn mạnh xanh: <code>&lt;span class=&quot;text-emerald-400 font-bold&quot;&gt;...&lt;/span&gt;</code>
                </button>
                <button
                  type="button"
                  onClick={() => setDescription(prev => prev + ' <br/><br/>')}
                  className="px-2 py-1 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-lg text-[11px] transition-colors"
                >
                  + Xuống đoạn mới: <code>&lt;br/&gt;&lt;br/&gt;</code>
                </button>
              </div>
            </div>

            {/* Requirement 5: Live Preview for 2.3 Description (Dark Theme Preview) */}
            <div className="mt-3 p-4 rounded-xl bg-slate-900 border border-slate-800 text-white">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-300">
                  Xem trước trực tiếp (Live Preview Đoạn mô tả - Giao diện tối):
                </span>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-center">
                <p 
                  className="font-body text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto"
                  dangerouslySetInnerHTML={{ __html: description || '<span class="text-slate-500 italic">Chưa có nội dung mô tả...</span>' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. 3 Pain Point Cards with HTML & Suggestions & Full Preview */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="pb-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-2">
          <div>
            <h3 className="text-lg font-heading font-extrabold text-slate-900">
              2.4. 3 Thẻ điểm mù lâm sàng
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Cho phép chỉnh sửa linh hoạt tiêu đề & mô tả chi tiết bằng mã HTML, kèm gợi ý và xem trước trực quan
            </p>
          </div>
          <span className="text-xs font-mono font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
            3 Thẻ rào cản
          </span>
        </div>

        {/* The 3 Cards Editor */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div 
              key={item.id || idx} 
              className="p-5 rounded-2xl border border-slate-200 bg-slate-50 space-y-4 shadow-2xs hover:shadow-xs transition-shadow"
            >
              <div className="flex items-center justify-between pb-2 border-b border-slate-200/80">
                <span className="inline-block px-2.5 py-1 rounded-md bg-amber-100 text-amber-800 text-xs font-mono font-bold">
                  Điểm mù #{idx + 1}
                </span>
                <span className="text-[11px] text-slate-400 font-mono">Thẻ {idx + 1}/3</span>
              </div>

              {/* Tiêu đề Thẻ with HTML */}
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center justify-between gap-1.5">
                  <label className="block text-xs font-semibold text-slate-800">
                    Tiêu đề (Hỗ trợ HTML):
                  </label>
                  <div className="flex items-center gap-1 text-[11px]">
                    <button
                      type="button"
                      onClick={() => insertSnippetIntoCard(item.id, 'title', '<strong>', '</strong>')}
                      className="px-1.5 py-0.5 bg-white hover:bg-slate-200 rounded text-slate-700 font-bold border border-slate-200"
                      title="In đậm"
                    >
                      Đậm
                    </button>
                    <button
                      type="button"
                      onClick={() => insertSnippetIntoCard(item.id, 'title', '<span class="text-red-400 font-bold">', '</span>')}
                      className="px-1.5 py-0.5 bg-red-50 hover:bg-red-100 text-red-600 font-bold rounded border border-red-200"
                      title="Đỏ cảnh báo"
                    >
                      Đỏ
                    </button>
                    <button
                      type="button"
                      onClick={() => insertSnippetIntoCard(item.id, 'title', '<span class="text-amber-400 font-bold">', '</span>')}
                      className="px-1.5 py-0.5 bg-amber-50 hover:bg-amber-100 text-amber-700 font-bold rounded border border-amber-200"
                      title="Vàng chú ý"
                    >
                      Vàng
                    </button>
                    <button
                      type="button"
                      onClick={() => insertSnippetIntoCard(item.id, 'title', '<br/>', '')}
                      className="px-1.5 py-0.5 bg-white hover:bg-slate-200 rounded text-slate-600 font-mono border border-slate-200"
                      title="Xuống dòng"
                    >
                      &lt;br/&gt;
                    </button>
                  </div>
                </div>

                <textarea
                  id={`pain-card-title-${item.id}`}
                  rows={2}
                  value={item.title}
                  onChange={(e) => handleItemChange(item.id, 'title', e.target.value)}
                  placeholder="Tiêu đề điểm mù..."
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-emerald-600 font-mono"
                />

                {/* Suggestions for Title */}
                <div className="flex flex-wrap gap-1 text-[10.5px]">
                  <button
                    type="button"
                    onClick={() => handleItemChange(item.id, 'title', item.title + ' <span class="text-red-400 font-bold">tái phát</span>')}
                    className="px-1.5 py-0.5 bg-white hover:bg-slate-100 text-slate-600 border border-slate-200 rounded transition-colors"
                  >
                    + Đỏ: <code>&lt;span class=&quot;text-red-400 font-bold&quot;&gt;...&lt;/span&gt;</code>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleItemChange(item.id, 'title', item.title + ' <strong>quan trọng</strong>')}
                    className="px-1.5 py-0.5 bg-white hover:bg-slate-100 text-slate-600 border border-slate-200 rounded transition-colors"
                  >
                    + In đậm: <code>&lt;strong&gt;...&lt;/strong&gt;</code>
                  </button>
                </div>
              </div>

              {/* Mô tả Chi tiết Thẻ with HTML */}
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center justify-between gap-1.5">
                  <label className="block text-xs font-semibold text-slate-800">
                    Mô tả chi tiết (Hỗ trợ HTML):
                  </label>
                  <div className="flex items-center gap-1 text-[11px]">
                    <button
                      type="button"
                      onClick={() => insertSnippetIntoCard(item.id, 'description', '<strong>', '</strong>')}
                      className="px-1.5 py-0.5 bg-white hover:bg-slate-200 rounded text-slate-700 font-bold border border-slate-200"
                      title="In đậm"
                    >
                      Đậm
                    </button>
                    <button
                      type="button"
                      onClick={() => insertSnippetIntoCard(item.id, 'description', '<span class="text-red-400 font-bold">', '</span>')}
                      className="px-1.5 py-0.5 bg-red-50 hover:bg-red-100 text-red-600 font-bold rounded border border-red-200"
                      title="Đỏ cảnh báo"
                    >
                      Đỏ
                    </button>
                    <button
                      type="button"
                      onClick={() => insertSnippetIntoCard(item.id, 'description', '<span class="text-amber-300 font-bold">', '</span>')}
                      className="px-1.5 py-0.5 bg-amber-50 hover:bg-amber-100 text-amber-700 font-bold rounded border border-amber-200"
                      title="Vàng chú ý"
                    >
                      Vàng
                    </button>
                    <button
                      type="button"
                      onClick={() => insertSnippetIntoCard(item.id, 'description', '<br/>', '')}
                      className="px-1.5 py-0.5 bg-white hover:bg-slate-200 rounded text-slate-600 font-mono border border-slate-200"
                      title="Xuống dòng"
                    >
                      &lt;br/&gt;
                    </button>
                  </div>
                </div>

                <textarea
                  id={`pain-card-description-${item.id}`}
                  rows={5}
                  value={item.description}
                  onChange={(e) => handleItemChange(item.id, 'description', e.target.value)}
                  placeholder="Mô tả nội dung chi tiết nguy cơ lâm sàng..."
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-700 leading-relaxed focus:outline-none focus:border-emerald-600 font-mono"
                />

                {/* Suggestions for Description */}
                <div className="flex flex-wrap gap-1 text-[10.5px]">
                  <button
                    type="button"
                    onClick={() => handleItemChange(item.id, 'description', item.description + ' <strong>vi kẽ bờ phục hình</strong>')}
                    className="px-1.5 py-0.5 bg-white hover:bg-slate-100 text-slate-600 border border-slate-200 rounded transition-colors"
                  >
                    + In đậm: <code>&lt;strong&gt;...&lt;/strong&gt;</code>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleItemChange(item.id, 'description', item.description + ' <span class="text-red-400 font-bold">tổn thương tủy</span>')}
                    className="px-1.5 py-0.5 bg-white hover:bg-red-50 text-slate-600 border border-slate-200 rounded transition-colors"
                  >
                    + Nhấn mạnh đỏ: <code>&lt;span class=&quot;text-red-400 font-bold&quot;&gt;...&lt;/span&gt;</code>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleItemChange(item.id, 'description', item.description + ' <br/>')}
                    className="px-1.5 py-0.5 bg-white hover:bg-slate-100 text-slate-600 border border-slate-200 rounded transition-colors"
                  >
                    + Xuống dòng: <code>&lt;br/&gt;</code>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Requirement 5: Live Preview for 2.4 3 Pain Points Cards (Dark Theme) */}
        <div className="pt-4 border-t border-slate-100">
          <div className="flex items-center gap-2 mb-3">
            <Eye className="w-4 h-4 text-amber-500" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800">
              Xem trước thực tế 3 Thẻ điểm mù lâm sàng (Live Preview - Giao diện tối):
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {items.map((item, idx) => (
                <div 
                  key={item.id || idx} 
                  className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5 md:p-6 flex flex-col gap-3.5 shadow-md"
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                    idx === 0 ? 'bg-red-500/15 border border-red-500/30 text-red-400' :
                    idx === 1 ? 'bg-amber-500/15 border border-amber-500/30 text-amber-400' :
                    'bg-orange-500/15 border border-orange-500/30 text-orange-400'
                  }`}>
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <h3 
                    className="font-heading font-bold text-base sm:text-lg text-white"
                    dangerouslySetInnerHTML={{ __html: item.title || `<span class="text-slate-500 italic">Tiêu đề điểm mù ${idx + 1}...</span>` }}
                  />
                  <p 
                    className="font-body text-slate-300 text-xs sm:text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: item.description || `<span class="text-slate-500 italic">Mô tả chi tiết điểm mù ${idx + 1}...</span>` }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Callout & Image with HTML & Suggestions & Full Preview */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="pb-4 border-b border-slate-100">
          <h3 className="text-lg font-heading font-extrabold text-slate-900">
            2.5. Hình ảnh minh họa & Thông điệp cảnh báo
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Banner "quả bom nổ chậm" dưới nướu khi dùng vật liệu thụ động và thông điệp nhấn mạnh nguy cơ
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {/* Callout with HTML & Suggestions */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider font-bold">
                Đoạn Callout cảnh báo - Hỗ trợ định dạng HTML
              </label>

              {/* Quick HTML Action Buttons */}
              <div className="flex flex-wrap items-center gap-1.5 text-xs bg-slate-50 p-1 rounded-lg border border-slate-200">
                <span className="text-[11px] text-slate-500 px-1 font-mono">Chèn nhanh:</span>
                <button
                  type="button"
                  onClick={() => insertSnippet(calloutInputRef, '<strong>', '</strong>', setCalloutText)}
                  className="px-2 py-0.5 bg-white hover:bg-slate-200 rounded text-slate-800 font-bold border border-slate-200 text-xs inline-flex items-center gap-1 shadow-xs"
                  title="In đậm chữ đang bôi đen hoặc chèn thẻ <strong>"
                >
                  <Bold className="w-3 h-3" />
                  <span>Đậm</span>
                </button>
                <button
                  type="button"
                  onClick={() => insertSnippet(calloutInputRef, '<span class="text-red-400 font-bold">', '</span>', setCalloutText)}
                  className="px-2 py-0.5 bg-red-50 hover:bg-red-100 text-red-600 font-bold rounded border border-red-200 text-[11px]"
                  title="Tô màu đỏ cảnh báo"
                >
                  Đỏ Cảnh Báo
                </button>
                <button
                  type="button"
                  onClick={() => insertSnippet(calloutInputRef, '<span class="text-[#C43838] font-bold">', '</span>', setCalloutText)}
                  className="px-2 py-0.5 bg-red-50 hover:bg-red-100 text-[#C43838] font-bold rounded border border-red-200 text-[11px]"
                  title="Tô màu đỏ thương hiệu Shofu"
                >
                  Đỏ Shofu
                </button>
                <button
                  type="button"
                  onClick={() => insertSnippet(calloutInputRef, '<span class="text-amber-300 font-bold">', '</span>', setCalloutText)}
                  className="px-2 py-0.5 bg-amber-50 hover:bg-amber-100 text-amber-700 font-bold rounded border border-amber-200 text-[11px]"
                  title="Tô màu vàng chú ý"
                >
                  Vàng Chú Ý
                </button>
                <button
                  type="button"
                  onClick={() => insertSnippet(calloutInputRef, '<br/><br/>', '', setCalloutText)}
                  className="px-2 py-0.5 bg-white hover:bg-slate-200 rounded text-slate-700 font-mono text-[11px] border border-slate-200"
                  title="Ngắt đoạn"
                >
                  &lt;br/&gt; ngắt đoạn
                </button>
              </div>
            </div>

            <textarea
              ref={calloutInputRef}
              rows={4}
              value={calloutText}
              onChange={(e) => setCalloutText(e.target.value)}
              placeholder="Nhập thông điệp callout cảnh báo..."
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-mono text-slate-800 focus:outline-none focus:border-emerald-600 leading-relaxed bg-white"
            />

            {/* Ready-to-use HTML Suggestions for Callout */}
            <div className="mt-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
              <div className="flex items-center gap-1.5 text-slate-600 font-bold mb-1.5 font-mono text-[11px]">
                <FileCode className="w-3.5 h-3.5 text-emerald-600" />
                <span>Gợi ý định dạng Callout cảnh báo (Nhấp để chèn):</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <button
                  type="button"
                  onClick={() => setCalloutText(prev => prev + ' <span class="text-red-400 font-bold">quả bom nổ chậm</span>')}
                  className="px-2 py-1 bg-white hover:bg-red-50 text-slate-700 hover:text-red-700 border border-slate-200 rounded-lg text-[11px] transition-colors"
                >
                  + Nhấn mạnh đỏ: <code>&lt;span class=&quot;text-red-400 font-bold&quot;&gt;...&lt;/span&gt;</code>
                </button>
                <button
                  type="button"
                  onClick={() => setCalloutText(prev => prev + ' <span class="text-amber-300 font-bold">vi kẽ dưới nướu</span>')}
                  className="px-2 py-1 bg-white hover:bg-amber-50 text-slate-700 hover:text-amber-700 border border-slate-200 rounded-lg text-[11px] transition-colors"
                >
                  + Nhấn mạnh vàng: <code>&lt;span class=&quot;text-amber-300 font-bold&quot;&gt;...&lt;/span&gt;</code>
                </button>
                <button
                  type="button"
                  onClick={() => setCalloutText(prev => prev + ' <strong>phục hình thụ động</strong>')}
                  className="px-2 py-1 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-lg text-[11px] transition-colors"
                >
                  + In đậm: <code>&lt;strong&gt;...&lt;/strong&gt;</code>
                </button>
                <button
                  type="button"
                  onClick={() => setCalloutText(prev => prev + ' <br/><br/>')}
                  className="px-2 py-1 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-lg text-[11px] transition-colors"
                >
                  + Xuống đoạn: <code>&lt;br/&gt;&lt;br/&gt;</code>
                </button>
              </div>
            </div>
          </div>

          {/* Image */}
          <div>
            <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-bold">
              Hình ảnh minh họa điểm mù
            </label>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div className="w-28 h-28 rounded-xl border border-slate-200 bg-slate-50 p-2 flex items-center justify-center overflow-hidden shrink-0">
                {image ? (
                  <img src={image} alt="Pain preview" className="w-full h-full object-contain" />
                ) : (
                  <span className="text-xs text-slate-400">Chưa có ảnh</span>
                )}
              </div>
              <div className="flex-1 w-full space-y-2">
                <input
                  type="text"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  placeholder="/image/nha-khoa-phong-ngua-va-nhung-diem-mu.webp"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-mono text-slate-800"
                />
                <label className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer transition-colors">
                  <Upload className="w-3.5 h-3.5" />
                  <span>
                    {isUploadingImage && uploadingTarget === 'pain_img' ? 'Đang tải lên...' : 'Tải ảnh mới'}
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        onUploadImage(file, 'pain_img', (newUrl) => setImage(newUrl));
                      }
                    }}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Requirement 5: Live Preview for 2.5 Image & Callout Message (Dark Theme) */}
        <div className="pt-4 border-t border-slate-100">
          <div className="flex items-center gap-2 mb-3">
            <Eye className="w-4 h-4 text-red-500" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800">
              Xem trước thực tế Hình ảnh & Callout Cảnh Báo (Live Preview - Giao diện tối):
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-white">
            <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 max-w-4xl mx-auto">
              <div className="w-full lg:w-1/2 flex items-center justify-center">
                {image ? (
                  <img 
                    src={image} 
                    alt="Minh họa điểm mù" 
                    className="max-h-[220px] w-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform" 
                  />
                ) : (
                  <div className="w-48 h-36 rounded-xl border border-dashed border-slate-700 flex items-center justify-center text-xs text-slate-500">
                    Chưa chọn hình ảnh
                  </div>
                )}
              </div>
              <div className="w-full lg:w-1/2">
                <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-5 sm:p-6 text-left shadow-lg">
                  <p 
                    className="font-body text-slate-200 text-sm sm:text-base leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: calloutText || '<span class="text-slate-500 italic">Chưa có thông điệp callout cảnh báo...</span>' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Requirement 4: CTA & Form with working redirectThanks checkbox */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="pb-4 border-b border-slate-100">
          <h3 className="text-lg font-heading font-extrabold text-slate-900">
            2.6. Cấu hình Nút bấm CTA & Form
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Tùy biến chữ nút bấm, Form Popup tư vấn và thiết lập chuyển hướng Trang Cảm Ơn (/thanks)
          </p>
        </div>

        <div>
          <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-bold">
            Chữ trên nút CTA Section 2
          </label>
          <input
            type="text"
            value={ctaText}
            onChange={(e) => setCtaText(e.target.value)}
            placeholder="NHẬN GIẢI PHÁP TRIỆT TIÊU ĐIỂM MÙ NGAY"
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-bold text-slate-900 focus:outline-none focus:border-emerald-600 bg-white"
          />
        </div>

        <CtaFormConfigEditor
          label="CTA & Form Section 2"
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

import React, { useRef } from 'react';
import { 
  Zap, 
  Upload, 
  Bold, 
  CornerDownLeft, 
  FileCode, 
  Eye, 
  ShieldCheck, 
  Microscope, 
  Droplets,
  Sparkles
} from 'lucide-react';
import { IonItem } from './types';
import { CtaFormConfigEditor } from '../components/CtaFormConfigEditor';

interface Section3BioactiveEditorProps {
  badge: string;
  setBadge: React.Dispatch<React.SetStateAction<string>>;
  headline: string;
  setHeadline: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  sPrgTitle: string;
  setSPrgTitle: React.Dispatch<React.SetStateAction<string>>;
  sPrgDesc: string;
  setSPrgDesc: React.Dispatch<React.SetStateAction<string>>;
  image: string;
  setImage: React.Dispatch<React.SetStateAction<string>>;
  ions: IonItem[];
  setIons: React.Dispatch<React.SetStateAction<IonItem[]>>;
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

export const Section3BioactiveEditor: React.FC<Section3BioactiveEditorProps> = ({
  badge,
  setBadge,
  headline,
  setHeadline,
  description,
  setDescription,
  sPrgTitle,
  setSPrgTitle,
  sPrgDesc,
  setSPrgDesc,
  image,
  setImage,
  ions,
  setIons,
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
  const descriptionInputRef = useRef<HTMLTextAreaElement>(null);
  const sPrgTitleInputRef = useRef<HTMLTextAreaElement>(null);
  const sPrgDescInputRef = useRef<HTMLTextAreaElement>(null);

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

  const handleIonChange = (id: string, field: 'ionName' | 'description', val: string) => {
    setIons((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: val } : item))
    );
  };

  // Helper insertion for ion textareas by DOM ID
  const insertSnippetIntoIon = (
    id: string,
    field: 'ionName' | 'description',
    prefix: string,
    suffix: string
  ) => {
    const el = document.getElementById(`ion-field-${field}-${id}`) as HTMLTextAreaElement | null;
    if (!el) {
      const currentItem = ions.find((i) => i.id === id);
      const currentVal = currentItem ? currentItem[field] : '';
      handleIonChange(id, field, currentVal + prefix + suffix);
      return;
    }
    const start = el.selectionStart;
    const end = el.selectionEnd;
    const currentVal = el.value;
    const selected = currentVal.substring(start, end);
    const replacement = selected ? prefix + selected + suffix : prefix + suffix;
    const updated = currentVal.substring(0, start) + replacement + currentVal.substring(end);
    handleIonChange(id, field, updated);
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
          <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-heading font-extrabold text-slate-900">
              Section 3: Triết lý MiCD & Hạt độn S-PRG 6 Ion
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Từ phục hình thụ động sang trị liệu sinh học chủ động với công nghệ Giomer độc quyền
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {/* 3.1 Badge */}
          <div>
            <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-bold">
              3.1. Badge nhãn
            </label>
            <input
              type="text"
              value={badge}
              onChange={(e) => setBadge(e.target.value)}
              placeholder="Ví dụ: Đột phá công nghệ sinh học"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-900 focus:outline-none focus:border-emerald-600 bg-white"
            />
          </div>

          {/* 3.2 Headline H2 with HTML & Suggestions & Preview */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider font-bold">
                3.2. Tiêu đề H2 - Hỗ trợ định dạng HTML
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
                  title="Tô màu đỏ nhận diện Shofu"
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
                  onClick={() => insertSnippet(headlineInputRef, '<span class="text-amber-500 font-bold">', '</span>', setHeadline)}
                  className="px-2 py-0.5 bg-amber-50 hover:bg-amber-100 text-amber-700 font-bold rounded border border-amber-200 text-[11px]"
                  title="Tô màu vàng chú ý"
                >
                  Vàng
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
              placeholder='Ví dụ: Chuyển dịch từ phục hình thụ động sang <span class="text-[#C43838]">trị liệu sinh học MiCD</span>'
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-semibold font-mono text-slate-900 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10 leading-relaxed bg-white"
            />

            {/* Ready-to-use HTML Suggestions for 3.2 */}
            <div className="mt-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
              <div className="flex items-center gap-1.5 text-slate-600 font-bold mb-1.5 font-mono text-[11px]">
                <FileCode className="w-3.5 h-3.5 text-emerald-600" />
                <span>Gợi ý cú pháp HTML tiêu đề H2 (Nhấp để chèn):</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <button
                  type="button"
                  onClick={() => setHeadline(prev => prev + ' <span class="text-[#C43838] font-bold">Trị Liệu Sinh Học</span>')}
                  className="px-2 py-1 bg-white hover:bg-red-50 text-slate-700 hover:text-red-700 border border-slate-200 rounded-lg text-[11px] transition-colors"
                >
                  + Chữ đỏ Shofu: <code className="text-[#C43838]">&lt;span class=&quot;text-[#C43838] font-bold&quot;&gt;...&lt;/span&gt;</code>
                </button>
                <button
                  type="button"
                  onClick={() => setHeadline(prev => prev + ' <span class="text-emerald-600 font-bold">Triết Lý MiCD</span>')}
                  className="px-2 py-1 bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 border border-slate-200 rounded-lg text-[11px] transition-colors"
                >
                  + Chữ xanh MiCD: <code className="text-emerald-600">&lt;span class=&quot;text-emerald-600 font-bold&quot;&gt;...&lt;/span&gt;</code>
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

            {/* Live Preview for 3.2 Tiêu đề H2 */}
            <div className="mt-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="w-3.5 h-3.5 text-rose-600" />
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-600">
                  Xem trước trực tiếp (Live Preview H2 Section 3):
                </span>
              </div>
              <div className="p-5 sm:p-6 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-[#C43838]/10 text-[#C43838] font-mono font-bold text-xs mb-3 border border-[#C43838]/20 tracking-wider">
                  {badge || 'Đột phá công nghệ sinh học'}
                </div>
                <h2 
                  className="font-heading font-extrabold text-xl sm:text-2xl lg:text-3xl text-slate-900 leading-[1.3] tracking-tight"
                  dangerouslySetInnerHTML={{ __html: headline || '<span class="text-slate-400 italic">Chưa có tiêu đề H2...</span>' }}
                />
                <div className="w-20 h-1 bg-[#C43838] mt-3"></div>
              </div>
            </div>
          </div>

          {/* 3.3 Description with HTML & Suggestions & Preview */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider font-bold">
                3.3. Mô tả dẫn nhập - Hỗ trợ định dạng HTML
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
                  onClick={() => insertSnippet(descriptionInputRef, '<span class="text-[#C43838] font-bold">', '</span>', setDescription)}
                  className="px-2 py-0.5 bg-red-50 hover:bg-red-100 text-[#C43838] font-bold rounded border border-red-200 text-[11px]"
                  title="Tô màu đỏ Shofu"
                >
                  Đỏ Shofu
                </button>
                <button
                  type="button"
                  onClick={() => insertSnippet(descriptionInputRef, '<span class="text-emerald-700 font-bold">', '</span>', setDescription)}
                  className="px-2 py-0.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold rounded border border-emerald-200 text-[11px]"
                  title="Tô màu xanh sinh học"
                >
                  Xanh MiCD
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
              placeholder="Nhập mô tả dẫn nhập cho triết lý MiCD..."
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-mono text-slate-800 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10 leading-relaxed bg-white"
            />

            {/* Ready-to-use HTML Suggestions for 3.3 */}
            <div className="mt-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
              <div className="flex items-center gap-1.5 text-slate-600 font-bold mb-1.5 font-mono text-[11px]">
                <FileCode className="w-3.5 h-3.5 text-emerald-600" />
                <span>Gợi ý định dạng mô tả dẫn nhập (Nhấp để chèn):</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <button
                  type="button"
                  onClick={() => setDescription(prev => prev + ' <strong>công nghệ Giomer</strong>')}
                  className="px-2 py-1 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-lg text-[11px] transition-colors"
                >
                  + In đậm: <code>&lt;strong&gt;công nghệ Giomer&lt;/strong&gt;</code>
                </button>
                <button
                  type="button"
                  onClick={() => setDescription(prev => prev + ' <span class="text-[#C43838] font-bold">bảo tồn mô răng sống</span>')}
                  className="px-2 py-1 bg-white hover:bg-red-50 text-slate-700 hover:text-red-700 border border-slate-200 rounded-lg text-[11px] transition-colors"
                >
                  + Nhấn mạnh đỏ: <code>&lt;span class=&quot;text-[#C43838] font-bold&quot;&gt;...&lt;/span&gt;</code>
                </button>
                <button
                  type="button"
                  onClick={() => setDescription(prev => prev + ' <span class="text-emerald-700 font-bold">hoạt tính sinh học chủ động</span>')}
                  className="px-2 py-1 bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 border border-slate-200 rounded-lg text-[11px] transition-colors"
                >
                  + Nhấn mạnh xanh: <code>&lt;span class=&quot;text-emerald-700 font-bold&quot;&gt;...&lt;/span&gt;</code>
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

            {/* Live Preview for 3.3 Mô tả dẫn nhập */}
            <div className="mt-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="w-3.5 h-3.5 text-rose-600" />
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-600">
                  Xem trước trực tiếp (Live Preview Mô tả dẫn nhập):
                </span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                <p 
                  className="font-body text-slate-600 text-sm sm:text-base leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: description || '<span class="text-slate-400 italic">Chưa có nội dung mô tả...</span>' }}
                />
              </div>
            </div>
          </div>

          {/* 3.4 S-PRG Title & Description with HTML, Suggestions & Preview */}
          <div className="space-y-6 pt-4 border-t border-slate-100">
            {/* Tiêu đề khối S-PRG */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider font-bold">
                  3.4. Tiêu đề khối S-PRG (Giomer) - Hỗ trợ định dạng HTML
                </label>

                {/* Quick HTML Buttons */}
                <div className="flex flex-wrap items-center gap-1.5 text-xs bg-slate-50 p-1 rounded-lg border border-slate-200">
                  <span className="text-[11px] text-slate-500 px-1 font-mono">Chèn nhanh:</span>
                  <button
                    type="button"
                    onClick={() => insertSnippet(sPrgTitleInputRef, '<strong>', '</strong>', setSPrgTitle)}
                    className="px-2 py-0.5 bg-white hover:bg-slate-200 rounded text-slate-800 font-bold border border-slate-200 text-xs inline-flex items-center gap-1 shadow-xs"
                    title="In đậm"
                  >
                    <Bold className="w-3 h-3" />
                    <span>Đậm</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => insertSnippet(sPrgTitleInputRef, '<span class="text-[#C43838] font-bold">', '</span>', setSPrgTitle)}
                    className="px-2 py-0.5 bg-red-50 hover:bg-red-100 text-[#C43838] font-bold rounded border border-red-200 text-[11px]"
                    title="Tô màu đỏ Shofu"
                  >
                    Đỏ Shofu
                  </button>
                  <button
                    type="button"
                    onClick={() => insertSnippet(sPrgTitleInputRef, '<span class="text-emerald-600 font-bold">', '</span>', setSPrgTitle)}
                    className="px-2 py-0.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold rounded border border-emerald-200 text-[11px]"
                    title="Tô màu xanh"
                  >
                    Xanh MiCD
                  </button>
                </div>
              </div>

              <textarea
                ref={sPrgTitleInputRef}
                rows={2}
                value={sPrgTitle}
                onChange={(e) => setSPrgTitle(e.target.value)}
                placeholder="Nhập tiêu đề khối S-PRG..."
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-bold font-mono text-slate-900 focus:outline-none focus:border-emerald-600 bg-white"
              />

              {/* Suggestions for S-PRG Title */}
              <div className="mt-1.5 flex flex-wrap gap-1.5 text-xs">
                <button
                  type="button"
                  onClick={() => setSPrgTitle(prev => prev + ' <span class="text-[#C43838] font-bold">Hạt Độn S-PRG</span>')}
                  className="px-2 py-0.5 bg-white hover:bg-red-50 text-slate-700 hover:text-red-700 border border-slate-200 rounded text-[11px] transition-colors"
                >
                  + Chữ đỏ Shofu: <code className="text-[#C43838]">&lt;span class=&quot;text-[#C43838] font-bold&quot;&gt;...&lt;/span&gt;</code>
                </button>
                <button
                  type="button"
                  onClick={() => setSPrgTitle(prev => prev + ' <strong>Bình ắc quy sinh học</strong>')}
                  className="px-2 py-0.5 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded text-[11px] transition-colors"
                >
                  + In đậm: <code className="text-slate-600">&lt;strong&gt;...&lt;/strong&gt;</code>
                </button>
              </div>
            </div>

            {/* Mô tả cơ chế bình ắc quy sinh học S-PRG */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider font-bold">
                  Mô tả cơ chế bình ắc quy sinh học S-PRG - Hỗ trợ định dạng HTML
                </label>

                {/* Quick HTML Buttons */}
                <div className="flex flex-wrap items-center gap-1.5 text-xs bg-slate-50 p-1 rounded-lg border border-slate-200">
                  <span className="text-[11px] text-slate-500 px-1 font-mono">Chèn nhanh:</span>
                  <button
                    type="button"
                    onClick={() => insertSnippet(sPrgDescInputRef, '<strong>', '</strong>', setSPrgDesc)}
                    className="px-2 py-0.5 bg-white hover:bg-slate-200 rounded text-slate-800 font-bold border border-slate-200 text-xs inline-flex items-center gap-1 shadow-xs"
                    title="In đậm"
                  >
                    <Bold className="w-3 h-3" />
                    <span>Đậm</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => insertSnippet(sPrgDescInputRef, '<span class="text-[#C43838] font-bold">', '</span>', setSPrgDesc)}
                    className="px-2 py-0.5 bg-red-50 hover:bg-red-100 text-[#C43838] font-bold rounded border border-red-200 text-[11px]"
                    title="Tô màu đỏ Shofu"
                  >
                    Đỏ Shofu
                  </button>
                  <button
                    type="button"
                    onClick={() => insertSnippet(sPrgDescInputRef, '<span class="text-emerald-700 font-bold">', '</span>', setSPrgDesc)}
                    className="px-2 py-0.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold rounded border border-emerald-200 text-[11px]"
                    title="Tô màu xanh sinh học"
                  >
                    Xanh MiCD
                  </button>
                  <button
                    type="button"
                    onClick={() => insertSnippet(sPrgDescInputRef, '<br/><br/>', '', setSPrgDesc)}
                    className="px-2 py-0.5 bg-white hover:bg-slate-200 rounded text-slate-700 font-mono text-[11px] border border-slate-200"
                    title="Ngắt đoạn"
                  >
                    &lt;br/&gt; ngắt đoạn
                  </button>
                </div>
              </div>

              <textarea
                ref={sPrgDescInputRef}
                rows={4}
                value={sPrgDesc}
                onChange={(e) => setSPrgDesc(e.target.value)}
                placeholder="Nhập mô tả chi tiết cơ chế bình ắc quy phóng thích & sạc lại ion..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-mono text-slate-800 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/10 leading-relaxed bg-white"
              />

              {/* Suggestions for S-PRG Desc */}
              <div className="mt-1.5 flex flex-wrap gap-1.5 text-xs">
                <button
                  type="button"
                  onClick={() => setSPrgDesc(prev => prev + ' <strong>tự sạc lại ion sinh học</strong>')}
                  className="px-2 py-0.5 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded text-[11px] transition-colors"
                >
                  + In đậm: <code>&lt;strong&gt;tự sạc lại ion sinh học&lt;/strong&gt;</code>
                </button>
                <button
                  type="button"
                  onClick={() => setSPrgDesc(prev => prev + ' <span class="text-[#C43838] font-bold">bảo vệ mô răng dài lâu</span>')}
                  className="px-2 py-0.5 bg-white hover:bg-red-50 text-slate-700 hover:text-red-700 border border-slate-200 rounded text-[11px] transition-colors"
                >
                  + Nhấn mạnh đỏ: <code>&lt;span class=&quot;text-[#C43838] font-bold&quot;&gt;...&lt;/span&gt;</code>
                </button>
                <button
                  type="button"
                  onClick={() => setSPrgDesc(prev => prev + ' <br/><br/>')}
                  className="px-2 py-0.5 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded text-[11px] transition-colors"
                >
                  + Xuống đoạn: <code>&lt;br/&gt;&lt;br/&gt;</code>
                </button>
              </div>
            </div>

            {/* Live Preview for 3.4 S-PRG Title & Desc */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="w-3.5 h-3.5 text-rose-600" />
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-600">
                  Xem trước trực tiếp (Live Preview Khối S-PRG & Cơ chế ắc quy):
                </span>
              </div>
              <div className="p-5 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
                <h3 
                  className="font-heading font-bold text-lg sm:text-xl text-slate-900"
                  dangerouslySetInnerHTML={{ __html: sPrgTitle || '<span class="text-slate-400 italic">Chưa có tiêu đề khối S-PRG...</span>' }}
                />
                <p 
                  className="font-body text-slate-600 text-sm sm:text-base leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: sPrgDesc || '<span class="text-slate-400 italic">Chưa có mô tả cơ chế S-PRG...</span>' }}
                />
              </div>
            </div>
          </div>

          {/* 3.5 S-PRG Image */}
          <div className="pt-4 border-t border-slate-100">
            <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-bold">
              3.5. Hình ảnh công nghệ hạt độn S-PRG
            </label>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div className="w-28 h-28 rounded-xl border border-slate-200 bg-slate-50 p-2 flex items-center justify-center overflow-hidden shrink-0">
                {image ? (
                  <img src={image} alt="S-PRG preview" className="w-full h-full object-contain" />
                ) : (
                  <span className="text-xs text-slate-400">Chưa có ảnh</span>
                )}
              </div>
              <div className="flex-1 w-full space-y-2">
                <input
                  type="text"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  placeholder="/image/Shofu-S-PRG-technology.webp"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-mono text-slate-800"
                />
                <label className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer transition-colors">
                  <Upload className="w-3.5 h-3.5" />
                  <span>
                    {isUploadingImage && uploadingTarget === 'sprg_img' ? 'Đang tải lên...' : 'Tải ảnh mới'}
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        onUploadImage(file, 'sprg_img', (newUrl) => setImage(newUrl));
                      }
                    }}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. 3.6 4 Ion Cards with HTML, Suggestions & Full Live Preview */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="pb-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-2">
          <div>
            <h3 className="text-lg font-heading font-extrabold text-slate-900">
              3.6. 4 Nhóm Ion phát tán từ hạt độn S-PRG
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Hỗ trợ định dạng HTML (chỉ số trên/dưới, in đậm, đổi màu) cho từng nhóm ion, kèm gợi ý và xem trước thực tế
            </p>
          </div>
          <span className="text-xs font-mono font-bold text-rose-700 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">
            4 Nhóm Ion sinh học
          </span>
        </div>

        {/* 4 Cards Editor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {ions.map((ion, idx) => {
            const IonIcon = idx === 0 ? Zap : idx === 1 ? ShieldCheck : idx === 2 ? Microscope : Droplets;
            const badgeColor = idx === 0 ? 'bg-rose-100 text-[#C43838]' : idx === 1 ? 'bg-blue-100 text-blue-700' : idx === 2 ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800';

            return (
              <div 
                key={ion.id || idx} 
                className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-slate-50 space-y-3.5 shadow-2xs hover:shadow-xs transition-shadow"
              >
                <div className="flex items-center justify-between pb-2 border-b border-slate-200/80">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-bold ${badgeColor}`}>
                    <IonIcon className="w-3.5 h-3.5" />
                    <span>Khối Ion {idx + 1}</span>
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">Vị trí {idx + 1}/4</span>
                </div>

                {/* Ký hiệu hóa học (Hỗ trợ HTML) */}
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <label className="block text-xs font-semibold text-slate-800">
                      Ký hiệu (Hỗ trợ HTML):
                    </label>
                    <div className="flex items-center gap-1 text-[11px]">
                      <button
                        type="button"
                        onClick={() => insertSnippetIntoIon(ion.id, 'ionName', '<strong>', '</strong>')}
                        className="px-1.5 py-0.5 bg-white hover:bg-slate-200 rounded text-slate-700 font-bold border border-slate-200"
                        title="In đậm"
                      >
                        Đậm
                      </button>
                      <button
                        type="button"
                        onClick={() => insertSnippetIntoIon(ion.id, 'ionName', '<sup>', '</sup>')}
                        className="px-1.5 py-0.5 bg-white hover:bg-slate-200 rounded text-slate-700 font-bold border border-slate-200"
                        title="Chỉ số trên (Mũ ion)"
                      >
                        x<sup>y</sup>
                      </button>
                      <button
                        type="button"
                        onClick={() => insertSnippetIntoIon(ion.id, 'ionName', '<span class="text-[#C43838] font-bold">', '</span>')}
                        className="px-1.5 py-0.5 bg-red-50 hover:bg-red-100 text-[#C43838] font-bold rounded border border-red-200"
                        title="Đỏ Shofu"
                      >
                        Đỏ
                      </button>
                    </div>
                  </div>

                  <input
                    type="text"
                    id={`ion-field-ionName-${ion.id}`}
                    value={ion.ionName}
                    onChange={(e) => handleIonChange(ion.id, 'ionName', e.target.value)}
                    placeholder="Ví dụ: F⁻ & Sr²⁺ (Tái khoáng)"
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-emerald-600 font-mono"
                  />

                  {/* Suggestions for Ion Name */}
                  <div className="flex flex-wrap gap-1 text-[10.5px]">
                    <button
                      type="button"
                      onClick={() => handleIonChange(ion.id, 'ionName', ion.ionName + ' <sup>2+</sup>')}
                      className="px-1.5 py-0.5 bg-white hover:bg-slate-100 text-slate-600 border border-slate-200 rounded transition-colors"
                    >
                      + Mũ ion: <code>&lt;sup&gt;2+&lt;/sup&gt;</code>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleIonChange(ion.id, 'ionName', ion.ionName + ' <strong>(Chủ động)</strong>')}
                      className="px-1.5 py-0.5 bg-white hover:bg-slate-100 text-slate-600 border border-slate-200 rounded transition-colors"
                    >
                      + In đậm
                    </button>
                  </div>
                </div>

                {/* Cơ chế tác động (Hỗ trợ HTML) */}
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <label className="block text-xs font-semibold text-slate-800">
                      Cơ chế tác động (Hỗ trợ HTML):
                    </label>
                    <div className="flex items-center gap-1 text-[11px]">
                      <button
                        type="button"
                        onClick={() => insertSnippetIntoIon(ion.id, 'description', '<strong>', '</strong>')}
                        className="px-1.5 py-0.5 bg-white hover:bg-slate-200 rounded text-slate-700 font-bold border border-slate-200"
                        title="In đậm"
                      >
                        Đậm
                      </button>
                      <button
                        type="button"
                        onClick={() => insertSnippetIntoIon(ion.id, 'description', '<span class="text-[#C43838] font-bold">', '</span>')}
                        className="px-1.5 py-0.5 bg-red-50 hover:bg-red-100 text-[#C43838] font-bold rounded border border-red-200"
                        title="Đỏ Shofu"
                      >
                        Đỏ
                      </button>
                      <button
                        type="button"
                        onClick={() => insertSnippetIntoIon(ion.id, 'description', '<br/>', '')}
                        className="px-1.5 py-0.5 bg-white hover:bg-slate-200 rounded text-slate-600 font-mono border border-slate-200"
                        title="Xuống dòng"
                      >
                        &lt;br/&gt;
                      </button>
                    </div>
                  </div>

                  <textarea
                    id={`ion-field-description-${ion.id}`}
                    rows={4}
                    value={ion.description}
                    onChange={(e) => handleIonChange(ion.id, 'description', e.target.value)}
                    placeholder="Mô tả tác động sinh học của ion..."
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-700 leading-relaxed focus:outline-none focus:border-emerald-600 font-mono"
                  />

                  {/* Suggestions for Ion Description */}
                  <div className="flex flex-wrap gap-1 text-[10.5px]">
                    <button
                      type="button"
                      onClick={() => handleIonChange(ion.id, 'description', ion.description + ' <strong>kháng axit</strong>')}
                      className="px-1.5 py-0.5 bg-white hover:bg-slate-100 text-slate-600 border border-slate-200 rounded transition-colors"
                    >
                      + In đậm: <code>&lt;strong&gt;kháng axit&lt;/strong&gt;</code>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleIonChange(ion.id, 'description', ion.description + ' <span class="text-[#C43838] font-bold">tái khoáng hóa</span>')}
                      className="px-1.5 py-0.5 bg-white hover:bg-red-50 text-slate-600 border border-slate-200 rounded transition-colors"
                    >
                      + Nhấn mạnh đỏ
                    </button>
                    <button
                      type="button"
                      onClick={() => handleIonChange(ion.id, 'description', ion.description + ' <br/>')}
                      className="px-1.5 py-0.5 bg-white hover:bg-slate-100 text-slate-600 border border-slate-200 rounded transition-colors"
                    >
                      + Xuống dòng
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Preview for 3.6 4 Ion Cards */}
        <div className="pt-4 border-t border-slate-100">
          <div className="flex items-center gap-2 mb-3">
            <Eye className="w-4 h-4 text-rose-600" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800">
              Xem trước thực tế 4 Nhóm Ion phát tán từ hạt độn S-PRG (Live Preview):
            </span>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {ions.map((ion, idx) => {
                const Icon = idx === 0 ? Zap : idx === 1 ? ShieldCheck : idx === 2 ? Microscope : Droplets;
                const bgClass = idx === 0 ? 'bg-rose-50 text-[#C43838]' : idx === 1 ? 'bg-blue-50 text-blue-600' : idx === 2 ? 'bg-amber-50 text-amber-600' : 'bg-emerald-50 text-emerald-600';
                
                return (
                  <div 
                    key={ion.id || idx} 
                    className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-md transition-all duration-300 flex flex-row sm:flex-col items-center sm:text-center gap-3.5"
                  >
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${bgClass} flex items-center justify-center shrink-0`}>
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="flex-1 text-left sm:text-center">
                      <h4 
                        className="font-heading font-bold text-slate-900 text-sm sm:text-base mb-1 leading-tight"
                        dangerouslySetInnerHTML={{ __html: ion.ionName || `Ion ${idx + 1}` }}
                      />
                      <p 
                        className="font-body text-slate-600 text-xs sm:text-sm leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: ion.description || 'Mô tả tác động của ion...' }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 3. CTA & Form Configuration */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="pb-4 border-b border-slate-100">
          <h3 className="text-lg font-heading font-extrabold text-slate-900">
            3.7. Cấu hình Nút bấm & Form CTA
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Tùy biến chữ nút bấm Section 3 và liên kết Form Popup / Trang Cảm Ơn (/thanks)
          </p>
        </div>

        <div>
          <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-bold">
            Chữ trên nút CTA Section 3
          </label>
          <input
            type="text"
            value={ctaText}
            onChange={(e) => setCtaText(e.target.value)}
            placeholder="TƯ VẤN QUY TRÌNH DÁN DÍNH PHÒNG NGỪA"
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-bold text-slate-900 focus:outline-none focus:border-emerald-600 bg-white"
          />
        </div>

        <CtaFormConfigEditor
          label="CTA & Form Section 3"
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

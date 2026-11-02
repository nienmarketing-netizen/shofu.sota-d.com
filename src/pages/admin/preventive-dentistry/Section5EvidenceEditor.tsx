import React, { useRef } from 'react';
import { 
  ShieldCheck, 
  BookOpen, 
  Microscope, 
  Quote, 
  Plus, 
  Trash2, 
  Bold, 
  CornerDownLeft, 
  FileCode, 
  Eye, 
  CheckCircle,
  Sparkles
} from 'lucide-react';
import { TestimonialItem } from './types';
import { CtaFormConfigEditor } from '../components/CtaFormConfigEditor';

interface Section5EvidenceEditorProps {
  headline: string;
  setHeadline: React.Dispatch<React.SetStateAction<string>>;
  quote: string;
  setQuote: React.Dispatch<React.SetStateAction<string>>;
  study1Title: string;
  setStudy1Title: React.Dispatch<React.SetStateAction<string>>;
  study1Points: string[];
  setStudy1Points: React.Dispatch<React.SetStateAction<string[]>>;
  study2Title: string;
  setStudy2Title: React.Dispatch<React.SetStateAction<string>>;
  study2Desc: string;
  setStudy2Desc: React.Dispatch<React.SetStateAction<string>>;
  testimonialsHeadline: string;
  setTestimonialsHeadline: React.Dispatch<React.SetStateAction<string>>;
  testimonialsRow1: TestimonialItem[];
  setTestimonialsRow1: React.Dispatch<React.SetStateAction<TestimonialItem[]>>;
  testimonialsRow2: TestimonialItem[];
  setTestimonialsRow2: React.Dispatch<React.SetStateAction<TestimonialItem[]>>;
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
}

export const Section5EvidenceEditor: React.FC<Section5EvidenceEditorProps> = ({
  headline,
  setHeadline,
  quote,
  setQuote,
  study1Title,
  setStudy1Title,
  study1Points,
  setStudy1Points,
  study2Title,
  setStudy2Title,
  study2Desc,
  setStudy2Desc,
  testimonialsHeadline,
  setTestimonialsHeadline,
  testimonialsRow1,
  setTestimonialsRow1,
  testimonialsRow2,
  setTestimonialsRow2,
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
}) => {
  const headlineInputRef = useRef<HTMLTextAreaElement>(null);
  const quoteInputRef = useRef<HTMLTextAreaElement>(null);
  const study1TitleInputRef = useRef<HTMLTextAreaElement>(null);
  const study2TitleInputRef = useRef<HTMLTextAreaElement>(null);
  const study2DescInputRef = useRef<HTMLTextAreaElement>(null);
  const testimonialsHeadlineInputRef = useRef<HTMLTextAreaElement>(null);

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
    const start = el.selectionStart || 0;
    const end = el.selectionEnd || 0;
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

  // Helper insertion into Study 1 Point textarea
  const insertSnippetIntoStudy1Point = (idx: number, prefix: string, suffix: string) => {
    const el = document.getElementById(`study1-point-${idx}`) as HTMLTextAreaElement | null;
    if (!el) {
      setStudy1Points((prev) => {
        const next = [...prev];
        next[idx] = (next[idx] || '') + prefix + suffix;
        return next;
      });
      return;
    }
    const start = el.selectionStart || 0;
    const end = el.selectionEnd || 0;
    const currentVal = el.value;
    const selected = currentVal.substring(start, end);
    const replacement = selected ? prefix + selected + suffix : prefix + suffix;
    const updated = currentVal.substring(0, start) + replacement + currentVal.substring(end);
    setStudy1Points((prev) => {
      const next = [...prev];
      next[idx] = updated;
      return next;
    });
    setTimeout(() => {
      el.focus();
      const cursor = selected ? start + replacement.length : start + prefix.length;
      el.setSelectionRange(cursor, cursor);
    }, 0);
  };

  // Helper insertion for Testimonial item by row and index
  const insertSnippetIntoTestimonial = (
    rowNum: 1 | 2,
    idx: number,
    field: 'quote' | 'title' | 'name',
    prefix: string,
    suffix: string
  ) => {
    const el = document.getElementById(`testimonial-r${rowNum}-${field}-${idx}`) as HTMLTextAreaElement | null;
    const setter = rowNum === 1 ? setTestimonialsRow1 : setTestimonialsRow2;

    if (!el) {
      setter((prev) => {
        const next = [...prev];
        next[idx] = {
          ...next[idx],
          [field]: (next[idx][field] || '') + prefix + suffix
        };
        return next;
      });
      return;
    }

    const start = el.selectionStart || 0;
    const end = el.selectionEnd || 0;
    const currentVal = el.value;
    const selected = currentVal.substring(start, end);
    const replacement = selected ? prefix + selected + suffix : prefix + suffix;
    const updated = currentVal.substring(0, start) + replacement + currentVal.substring(end);

    setter((prev) => {
      const next = [...prev];
      next[idx] = {
        ...next[idx],
        [field]: updated
      };
      return next;
    });

    setTimeout(() => {
      el.focus();
      const cursor = selected ? start + replacement.length : start + prefix.length;
      el.setSelectionRange(cursor, cursor);
    }, 0);
  };

  // Quick Action Bar Component
  const QuickToolbar = ({ 
    onInsert, 
    showList = false 
  }: { 
    onInsert: (prefix: string, suffix: string) => void;
    showList?: boolean;
  }) => (
    <div className="flex flex-wrap items-center gap-1.5 text-xs bg-slate-50 p-1 rounded-lg border border-slate-200">
      <span className="text-[11px] text-slate-500 px-1 font-mono">Chèn nhanh:</span>
      <button
        type="button"
        onClick={() => onInsert('<strong>', '</strong>')}
        className="px-2 py-0.5 bg-white hover:bg-slate-200 rounded text-slate-800 font-bold border border-slate-200 text-xs inline-flex items-center gap-1 shadow-xs"
        title="In đậm chữ"
      >
        <Bold className="w-3 h-3" />
        <span>Đậm</span>
      </button>
      <button
        type="button"
        onClick={() => onInsert('<span class="text-[#C43838] font-bold">', '</span>')}
        className="px-2 py-0.5 bg-red-50 hover:bg-red-100 text-[#C43838] font-bold rounded border border-red-200 text-[11px]"
        title="Tô màu đỏ Shofu"
      >
        Đỏ Shofu
      </button>
      <button
        type="button"
        onClick={() => onInsert('<span class="text-blue-600 font-bold">', '</span>')}
        className="px-2 py-0.5 bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold rounded border border-blue-200 text-[11px]"
        title="Tô màu xanh lâm sàng JADA"
      >
        Xanh JADA
      </button>
      <button
        type="button"
        onClick={() => onInsert('<span class="text-emerald-600 font-bold">', '</span>')}
        className="px-2 py-0.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold rounded border border-emerald-200 text-[11px]"
        title="Tô màu xanh Nature"
      >
        Xanh Nature
      </button>
      <button
        type="button"
        onClick={() => onInsert('<sup>', '</sup>')}
        className="px-2 py-0.5 bg-white hover:bg-slate-200 rounded text-slate-700 font-bold border border-slate-200 text-[11px]"
        title="Số mũ chỉ số trên"
      >
        x<sup>y</sup>
      </button>
      <button
        type="button"
        onClick={() => onInsert('<sub>', '</sub>')}
        className="px-2 py-0.5 bg-white hover:bg-slate-200 rounded text-slate-700 font-bold border border-slate-200 text-[11px]"
        title="Chỉ số dưới"
      >
        x<sub>y</sub>
      </button>
      {showList && (
        <button
          type="button"
          onClick={() => onInsert('<li>', '</li>')}
          className="px-2 py-0.5 bg-white hover:bg-slate-200 rounded text-slate-700 font-mono text-[11px] border border-slate-200"
          title="Thẻ danh sách <li>"
        >
          &lt;li&gt;
        </button>
      )}
      <button
        type="button"
        onClick={() => onInsert('<br className="hidden sm:inline" />', '')}
        className="px-2 py-0.5 bg-white hover:bg-slate-200 rounded text-slate-700 font-mono text-[11px] border border-slate-200 inline-flex items-center gap-1"
        title="Xuống dòng máy tính"
      >
        <CornerDownLeft className="w-3 h-3 text-slate-500" />
        <span>&lt;br/&gt;</span>
      </button>
    </div>
  );

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* ========================================== */}
      {/* 5.1 HEADER BOX: TIÊU ĐỀ H2 & QUOTE         */}
      {/* ========================================== */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-3 pb-5 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-heading font-extrabold text-slate-900">
              Section 5: Bằng chứng y văn & Đánh giá chuyên gia
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Nghiên cứu lâm sàng JADA (8 năm & 13 năm), Nature 2018 và feedback từ Bác sĩ (Hỗ trợ định dạng HTML & Xem trước trực quan)
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {/* 5.1 Tiêu đề chính H2 */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider font-bold">
                5.1. Tiêu đề chính H2 - Hỗ trợ HTML
              </label>
              <QuickToolbar 
                onInsert={(prefix, suffix) => insertSnippet(headlineInputRef, prefix, suffix, setHeadline)} 
              />
            </div>

            <textarea
              ref={headlineInputRef}
              rows={3}
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              placeholder='Ví dụ: Bằng chứng y văn bảo chứng cho <span class="text-[#C43838]">hiệu quả lâm sàng</span>'
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-semibold font-mono text-slate-900 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10 leading-relaxed bg-white"
            />

            {/* Suggestions for H2 */}
            <div className="mt-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
              <div className="flex items-center gap-1.5 text-slate-600 font-bold mb-1.5 font-mono text-[11px]">
                <FileCode className="w-3.5 h-3.5 text-indigo-600" />
                <span>Gợi ý cú pháp HTML tiêu đề H2 (Nhấp để chèn nhanh):</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <button
                  type="button"
                  onClick={() => setHeadline(prev => prev + ' <span class="text-[#C43838] font-bold">Bằng Chứng Y Văn</span>')}
                  className="px-2 py-1 bg-white hover:bg-red-50 text-slate-700 hover:text-red-700 border border-slate-200 rounded-lg text-[11px] transition-colors"
                >
                  + Chữ đỏ Shofu: <code className="text-[#C43838]">&lt;span class=&quot;text-[#C43838] font-bold&quot;&gt;...&lt;/span&gt;</code>
                </button>
                <button
                  type="button"
                  onClick={() => setHeadline(prev => prev + ' <span class="text-blue-500 font-bold">8 & 13 Năm JADA</span>')}
                  className="px-2 py-1 bg-white hover:bg-blue-50 text-slate-700 hover:text-blue-700 border border-slate-200 rounded-lg text-[11px] transition-colors"
                >
                  + Chữ xanh JADA: <code className="text-blue-600">&lt;span class=&quot;text-blue-500 font-bold&quot;&gt;...&lt;/span&gt;</code>
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
                  onClick={() => setHeadline(prev => prev + ' <strong>Nội Dung Nhấn Mạnh</strong>')}
                  className="px-2 py-1 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-lg text-[11px] transition-colors"
                >
                  + In đậm: <code>&lt;strong&gt;...&lt;/strong&gt;</code>
                </button>
              </div>
            </div>
          </div>

          {/* 5.1 Quote Trích dẫn */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider font-bold">
                5.1. Câu trích dẫn định hướng (Quote) - Hỗ trợ HTML
              </label>
              <QuickToolbar 
                onInsert={(prefix, suffix) => insertSnippet(quoteInputRef, prefix, suffix, setQuote)} 
              />
            </div>

            <textarea
              ref={quoteInputRef}
              rows={3}
              value={quote}
              onChange={(e) => setQuote(e.target.value)}
              placeholder="Nhập câu trích dẫn tổng quan cho Section 5..."
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-mono text-slate-800 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10 leading-relaxed bg-white italic"
            />

            {/* Suggestions for Quote */}
            <div className="mt-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
              <div className="flex items-center gap-1.5 text-slate-600 font-bold mb-1.5 font-mono text-[11px]">
                <FileCode className="w-3.5 h-3.5 text-indigo-600" />
                <span>Gợi ý định dạng trích dẫn (Nhấp để chèn nhanh):</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <button
                  type="button"
                  onClick={() => setQuote(prev => prev + ' <strong>Nghiên cứu lâm sàng thực chứng</strong>')}
                  className="px-2 py-1 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-lg text-[11px] transition-colors"
                >
                  + In đậm: <code>&lt;strong&gt;...&lt;/strong&gt;</code>
                </button>
                <button
                  type="button"
                  onClick={() => setQuote(prev => prev + ' <span class="text-[#C43838] font-bold">không có sâu răng thứ phát</span>')}
                  className="px-2 py-1 bg-white hover:bg-red-50 text-slate-700 hover:text-red-700 border border-slate-200 rounded-lg text-[11px] transition-colors"
                >
                  + Đỏ Shofu: <code>&lt;span class=&quot;text-[#C43838] font-bold&quot;&gt;...&lt;/span&gt;</code>
                </button>
                <button
                  type="button"
                  onClick={() => setQuote(prev => prev + ' <br className="hidden sm:inline" />')}
                  className="px-2 py-1 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-lg text-[11px] transition-colors"
                >
                  + Xuống dòng: <code>&lt;br/&gt;</code>
                </button>
              </div>
            </div>
          </div>

          {/* Live Preview for 5.1 */}
          <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-2 mb-3">
              <Eye className="w-4 h-4 text-indigo-600" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
                Xem trước trực quan tiêu đề & trích dẫn (Live Preview Section 5 Header):
              </span>
            </div>
            {/* Dark themed preview matching the actual landing page background */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 text-center shadow-inner">
              <h2 
                className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight mb-4 tracking-tight"
                dangerouslySetInnerHTML={{ __html: headline || '<span class="text-slate-500 italic">Chưa nhập tiêu đề H2...</span>' }}
              />
              <p 
                className="font-body text-sm sm:text-base text-slate-300 max-w-2xl mx-auto italic leading-relaxed"
                dangerouslySetInnerHTML={{ __html: quote || '<span class="text-slate-500 italic">Chưa nhập câu trích dẫn...</span>' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 5.2 & 5.3 HAI NGHIÊN CỨU KHOA HỌC: JADA FLORIDA & NATURE 2018  */}
      {/* ============================================================== */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="pb-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-2">
          <div>
            <h3 className="text-lg font-heading font-extrabold text-slate-900">
              5.2 & 5.3. Hai nghiên cứu khoa học bảo chứng (JADA & Nature 2018)
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Hỗ trợ đầy đủ định dạng HTML, số mũ, chỉ số dưới, in đậm, đổi màu và xem trước trực quan
            </p>
          </div>
          <span className="text-xs font-mono font-bold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
            Bảo chứng y văn chuẩn quốc tế
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 5.2 STUDY 1: JADA */}
          <div className="p-5 sm:p-6 rounded-2xl border border-blue-200 bg-blue-50/20 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-blue-100">
              <div className="flex items-center gap-2 text-blue-700">
                <BookOpen className="w-5 h-5" />
                <span className="font-bold text-sm sm:text-base">5.2. Nghiên cứu 1: JADA Florida (8 & 13 năm)</span>
              </div>
              <span className="text-[11px] font-mono px-2 py-0.5 bg-blue-100 text-blue-800 rounded font-semibold">
                Clinical Study
              </span>
            </div>

            {/* Tiêu đề Study 1 */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <label className="block text-xs text-slate-700 font-bold font-mono uppercase tracking-wider">
                  Tiêu đề nghiên cứu 1 (Hỗ trợ HTML):
                </label>
                <QuickToolbar 
                  onInsert={(prefix, suffix) => insertSnippet(study1TitleInputRef, prefix, suffix, setStudy1Title)} 
                />
              </div>
              <textarea
                ref={study1TitleInputRef}
                rows={2}
                value={study1Title}
                onChange={(e) => setStudy1Title(e.target.value)}
                placeholder="Nhập tiêu đề nghiên cứu JADA Florida..."
                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm font-bold text-slate-900 focus:outline-none focus:border-blue-500 font-mono"
              />
              <div className="mt-1 flex flex-wrap gap-1 text-[11px]">
                <button
                  type="button"
                  onClick={() => setStudy1Title(prev => prev + ' <strong>Nghiên cứu lâm sàng 8 năm & 13 năm</strong>')}
                  className="px-1.5 py-0.5 bg-white hover:bg-blue-50 text-slate-700 border border-slate-200 rounded"
                >
                  + In đậm
                </button>
                <button
                  type="button"
                  onClick={() => setStudy1Title(prev => prev + ' <span class="text-blue-600 font-bold">JADA (Hoa Kỳ)</span>')}
                  className="px-1.5 py-0.5 bg-white hover:bg-blue-50 text-blue-700 border border-blue-200 rounded"
                >
                  + Xanh JADA
                </button>
              </div>
            </div>

            {/* 3 Điểm mấu chốt Points */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="block text-xs text-slate-700 font-bold font-mono uppercase tracking-wider">
                  Các mốc kết quả mấu chốt (Points) ({study1Points.length} điểm):
                </label>
                <button
                  type="button"
                  onClick={() => setStudy1Points(prev => [...prev, 'Điểm kết quả nghiên cứu mới...'])}
                  className="inline-flex items-center gap-1 px-2 py-1 bg-white hover:bg-blue-50 text-blue-700 text-xs font-semibold rounded-lg border border-blue-200 transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Thêm mốc</span>
                </button>
              </div>

              {study1Points.map((pt, idx) => (
                <div key={idx} className="p-3 bg-white rounded-xl border border-slate-200 space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-1 pb-1 border-b border-slate-100">
                    <span className="text-xs font-mono font-bold text-blue-700">
                      Điểm {idx + 1}
                    </span>
                    <div className="flex items-center gap-2">
                      <QuickToolbar 
                        onInsert={(prefix, suffix) => insertSnippetIntoStudy1Point(idx, prefix, suffix)} 
                      />
                      {study1Points.length > 1 && (
                        <button
                          type="button"
                          onClick={() => setStudy1Points(prev => prev.filter((_, i) => i !== idx))}
                          className="p-1 text-slate-400 hover:text-red-500 rounded hover:bg-red-50 transition-colors"
                          title="Xóa điểm này"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>

                  <textarea
                    id={`study1-point-${idx}`}
                    rows={2}
                    value={pt}
                    onChange={(e) => {
                      const next = [...study1Points];
                      next[idx] = e.target.value;
                      setStudy1Points(next);
                    }}
                    placeholder={`Nhập điểm kết quả số ${idx + 1}...`}
                    className="w-full px-3 py-2 bg-slate-50/50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed font-mono focus:bg-white focus:outline-none focus:border-blue-500"
                  />

                  {/* Suggestions for Points */}
                  <div className="flex flex-wrap gap-1 text-[10.5px]">
                    <button
                      type="button"
                      onClick={() => {
                        const next = [...study1Points];
                        next[idx] = next[idx] + ' <strong>100% không sâu răng tái phát</strong>';
                        setStudy1Points(next);
                      }}
                      className="px-1.5 py-0.5 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 rounded"
                    >
                      + <strong>100%</strong>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        const next = [...study1Points];
                        next[idx] = next[idx] + ' <span class="text-[#C43838] font-bold">sau 13 năm</span>';
                        setStudy1Points(next);
                      }}
                      className="px-1.5 py-0.5 bg-red-50 hover:bg-red-100 text-[#C43838] border border-red-200 rounded"
                    >
                      + Đỏ Shofu
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        const next = [...study1Points];
                        next[idx] = next[idx] + ' <sup>(JADA)</sup>';
                        setStudy1Points(next);
                      }}
                      className="px-1.5 py-0.5 bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200 rounded"
                    >
                      + Mũ trích dẫn
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Live Preview for Study 1 */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-white space-y-4">
              <div className="flex items-center gap-2">
                <Eye className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                  Xem trước trực quan Nghiên cứu 1 (Live Preview Card):
                </span>
              </div>
              <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5 flex flex-col gap-4">
                <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center border border-blue-500/30 shrink-0">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h4 
                  className="font-heading font-bold text-base sm:text-lg text-white"
                  dangerouslySetInnerHTML={{ __html: study1Title || 'Tiêu đề nghiên cứu 1' }}
                />
                <ul className="space-y-2.5">
                  {study1Points.map((pt, idx) => (
                    <li key={idx} className="flex gap-2.5 items-start">
                      <div className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                      <span 
                        className="text-slate-300 font-body text-xs sm:text-sm leading-relaxed" 
                        dangerouslySetInnerHTML={{ __html: pt || `Điểm kết quả ${idx + 1}` }} 
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 5.3 STUDY 2: NATURE */}
          <div className="p-5 sm:p-6 rounded-2xl border border-emerald-200 bg-emerald-50/20 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-emerald-100">
              <div className="flex items-center gap-2 text-emerald-700">
                <Microscope className="w-5 h-5" />
                <span className="font-bold text-sm sm:text-base">5.3. Nghiên cứu 2: Tạp chí Nature (2018)</span>
              </div>
              <span className="text-[11px] font-mono px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded font-semibold">
                Microbiology & SEM
              </span>
            </div>

            {/* Tiêu đề Study 2 */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <label className="block text-xs text-slate-700 font-bold font-mono uppercase tracking-wider">
                  Tiêu đề nghiên cứu 2 (Hỗ trợ HTML):
                </label>
                <QuickToolbar 
                  onInsert={(prefix, suffix) => insertSnippet(study2TitleInputRef, prefix, suffix, setStudy2Title)} 
                />
              </div>
              <textarea
                ref={study2TitleInputRef}
                rows={2}
                value={study2Title}
                onChange={(e) => setStudy2Title(e.target.value)}
                placeholder="Nhập tiêu đề nghiên cứu Nature 2018..."
                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm font-bold text-slate-900 focus:outline-none focus:border-emerald-500 font-mono"
              />
              <div className="mt-1 flex flex-wrap gap-1 text-[11px]">
                <button
                  type="button"
                  onClick={() => setStudy2Title(prev => prev + ' <strong>Nature Scientific Reports</strong>')}
                  className="px-1.5 py-0.5 bg-white hover:bg-emerald-50 text-slate-700 border border-slate-200 rounded"
                >
                  + In đậm
                </button>
                <button
                  type="button"
                  onClick={() => setStudy2Title(prev => prev + ' <span class="text-emerald-600 font-bold">Nature 2018</span>')}
                  className="px-1.5 py-0.5 bg-white hover:bg-emerald-50 text-emerald-700 border border-emerald-200 rounded"
                >
                  + Xanh Nature
                </button>
              </div>
            </div>

            {/* Mô tả kết quả SEM Study 2 */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <label className="block text-xs text-slate-700 font-bold font-mono uppercase tracking-wider">
                  Nội dung kết quả chụp kính hiển vi SEM (Hỗ trợ HTML):
                </label>
                <QuickToolbar 
                  onInsert={(prefix, suffix) => insertSnippet(study2DescInputRef, prefix, suffix, setStudy2Desc)} 
                />
              </div>
              <textarea
                ref={study2DescInputRef}
                rows={6}
                value={study2Desc}
                onChange={(e) => setStudy2Desc(e.target.value)}
                placeholder="Nhập mô tả kết quả SEM và khả năng ức chế màng sinh học vi khuẩn..."
                className="w-full px-3.5 py-3 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 leading-relaxed focus:outline-none focus:border-emerald-500 font-mono"
              />
              <div className="mt-1.5 flex flex-wrap gap-1.5 text-xs">
                <button
                  type="button"
                  onClick={() => setStudy2Desc(prev => prev + ' <strong>kháng khuẩn và ức chế màng sinh học</strong>')}
                  className="px-2 py-0.5 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded text-[11px]"
                >
                  + In đậm: <code>&lt;strong&gt;...&lt;/strong&gt;</code>
                </button>
                <button
                  type="button"
                  onClick={() => setStudy2Desc(prev => prev + ' <span class="text-emerald-700 font-bold">tác động kiềm hóa pH</span>')}
                  className="px-2 py-0.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 rounded text-[11px]"
                >
                  + Xanh Nature: <code>&lt;span class=&quot;text-emerald-700&quot;&gt;...&lt;/span&gt;</code>
                </button>
                <button
                  type="button"
                  onClick={() => setStudy2Desc(prev => prev + ' <br/><br/>')}
                  className="px-2 py-0.5 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded text-[11px]"
                >
                  + Xuống đoạn: <code>&lt;br/&gt;&lt;br/&gt;</code>
                </button>
              </div>
            </div>

            {/* Live Preview for Study 2 */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-white space-y-4">
              <div className="flex items-center gap-2">
                <Eye className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                  Xem trước trực quan Nghiên cứu 2 (Live Preview Card):
                </span>
              </div>
              <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5 flex flex-col gap-4">
                <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-xl flex items-center justify-center border border-emerald-500/30 shrink-0">
                  <Microscope className="w-6 h-6" />
                </div>
                <h4 
                  className="font-heading font-bold text-base sm:text-lg text-white"
                  dangerouslySetInnerHTML={{ __html: study2Title || 'Tiêu đề nghiên cứu 2' }}
                />
                <p 
                  className="text-slate-300 font-body text-xs sm:text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: study2Desc || 'Nội dung chứng minh SEM...' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 5.4 ĐÁNH GIÁ CHUYÊN GIA LÂM SÀNG (TESTIMONIALS 2 ROWS)         */}
      {/* ============================================================== */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="pb-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-2">
          <div>
            <h3 className="text-lg font-heading font-extrabold text-slate-900">
              5.4. Đánh giá chuyên gia lâm sàng (Feedback Cards)
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Tùy biến lời nhận xét (Quote), Tên Bác sĩ và Chức danh chuyên môn (Hỗ trợ định dạng HTML & Xem trước trực quan)
            </p>
          </div>
          <span className="text-xs font-mono font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Băng chuyền 2 hàng Marquee
          </span>
        </div>

        {/* Tiêu đề khối đánh giá */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider font-bold">
              Tiêu đề khối Đánh giá (Testimonials Headline)
            </label>
            <QuickToolbar 
              onInsert={(prefix, suffix) => insertSnippet(testimonialsHeadlineInputRef, prefix, suffix, setTestimonialsHeadline)} 
            />
          </div>
          <textarea
            ref={testimonialsHeadlineInputRef}
            rows={2}
            value={testimonialsHeadline}
            onChange={(e) => setTestimonialsHeadline(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-bold text-slate-900 focus:outline-none focus:border-indigo-600 font-mono"
            placeholder="Ví dụ: Đánh giá từ các chuyên gia nha khoa hàng đầu thế giới"
          />
        </div>

        {/* HÀNG 1: Testimonials Row 1 */}
        <div className="space-y-4 pt-4 border-t border-slate-100">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-indigo-500" />
              <span>Hàng 1 (Chạy từ phải sang trái - {testimonialsRow1.length} chuyên gia)</span>
            </span>
            <button
              type="button"
              onClick={() => setTestimonialsRow1(prev => [
                ...prev, 
                { quote: 'Nhận xét chuyên môn mới...', name: 'Bác sĩ mới', title: 'Chức danh / Phòng khám' }
              ])}
              className="inline-flex items-center gap-1 px-2.5 py-1 bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-colors"
            >
              <Plus className="w-3.5 h-3.5 text-indigo-600" />
              <span>Thêm chuyên gia Hàng 1</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {testimonialsRow1.map((item, idx) => (
              <div key={idx} className="p-4 sm:p-5 rounded-xl border border-slate-200 bg-slate-50 space-y-3.5 shadow-2xs">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200/80">
                  <span className="text-xs font-mono font-bold text-indigo-700">
                    Chuyên gia H1 - #{idx + 1}
                  </span>
                  <div className="flex items-center gap-2">
                    <QuickToolbar 
                      onInsert={(prefix, suffix) => insertSnippetIntoTestimonial(1, idx, 'quote', prefix, suffix)} 
                    />
                    {testimonialsRow1.length > 1 && (
                      <button
                        type="button"
                        onClick={() => setTestimonialsRow1(prev => prev.filter((_, i) => i !== idx))}
                        className="p-1 text-slate-400 hover:text-red-500 rounded hover:bg-red-50"
                        title="Xóa chuyên gia này"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Quote Textarea */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Nội dung nhận xét / Quote (Hỗ trợ HTML):
                  </label>
                  <textarea
                    id={`testimonial-r1-quote-${idx}`}
                    rows={3}
                    value={item.quote}
                    onChange={(e) => {
                      const next = [...testimonialsRow1];
                      next[idx] = { ...next[idx], quote: e.target.value };
                      setTestimonialsRow1(next);
                    }}
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs italic text-slate-800 leading-relaxed font-mono focus:outline-none focus:border-indigo-500"
                    placeholder="Lời nhận xét của chuyên gia..."
                  />
                </div>

                {/* Name & Title */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Họ tên Bác sĩ / Chuyên gia:
                    </label>
                    <input
                      type="text"
                      id={`testimonial-r1-name-${idx}`}
                      value={item.name}
                      onChange={(e) => {
                        const next = [...testimonialsRow1];
                        next[idx] = { ...next[idx], name: e.target.value };
                        setTestimonialsRow1(next);
                      }}
                      className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-900 focus:outline-none focus:border-indigo-500"
                      placeholder="Dr. John Doe, DDS"
                    />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="block text-[11px] font-semibold text-slate-700">
                        Chức danh / Đơn vị (HTML):
                      </label>
                      <button
                        type="button"
                        onClick={() => insertSnippetIntoTestimonial(1, idx, 'title', '<strong>', '</strong>')}
                        className="text-[10px] text-indigo-600 hover:underline font-bold"
                      >
                        +Đậm
                      </button>
                    </div>
                    <input
                      type="text"
                      id={`testimonial-r1-title-${idx}`}
                      value={item.title}
                      onChange={(e) => {
                        const next = [...testimonialsRow1];
                        next[idx] = { ...next[idx], title: e.target.value };
                        setTestimonialsRow1(next);
                      }}
                      className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-600 font-mono focus:outline-none focus:border-indigo-500"
                      placeholder="Giáo sư Nha khoa lâm sàng"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* HÀNG 2: Testimonials Row 2 */}
        <div className="space-y-4 pt-4 border-t border-slate-100">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Hàng 2 (Chạy ngược chiều - {testimonialsRow2.length} chuyên gia)</span>
            </span>
            <button
              type="button"
              onClick={() => setTestimonialsRow2(prev => [
                ...prev, 
                { quote: 'Nhận xét chuyên môn mới...', name: 'Bác sĩ mới', title: 'Chức danh / Phòng khám' }
              ])}
              className="inline-flex items-center gap-1 px-2.5 py-1 bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-colors"
            >
              <Plus className="w-3.5 h-3.5 text-emerald-600" />
              <span>Thêm chuyên gia Hàng 2</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {testimonialsRow2.map((item, idx) => (
              <div key={idx} className="p-4 sm:p-5 rounded-xl border border-slate-200 bg-slate-50 space-y-3.5 shadow-2xs">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200/80">
                  <span className="text-xs font-mono font-bold text-emerald-700">
                    Chuyên gia H2 - #{idx + 1}
                  </span>
                  <div className="flex items-center gap-2">
                    <QuickToolbar 
                      onInsert={(prefix, suffix) => insertSnippetIntoTestimonial(2, idx, 'quote', prefix, suffix)} 
                    />
                    {testimonialsRow2.length > 1 && (
                      <button
                        type="button"
                        onClick={() => setTestimonialsRow2(prev => prev.filter((_, i) => i !== idx))}
                        className="p-1 text-slate-400 hover:text-red-500 rounded hover:bg-red-50"
                        title="Xóa chuyên gia này"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Quote Textarea */}
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Nội dung nhận xét / Quote (Hỗ trợ HTML):
                  </label>
                  <textarea
                    id={`testimonial-r2-quote-${idx}`}
                    rows={3}
                    value={item.quote}
                    onChange={(e) => {
                      const next = [...testimonialsRow2];
                      next[idx] = { ...next[idx], quote: e.target.value };
                      setTestimonialsRow2(next);
                    }}
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs italic text-slate-800 leading-relaxed font-mono focus:outline-none focus:border-emerald-500"
                    placeholder="Lời nhận xét của chuyên gia..."
                  />
                </div>

                {/* Name & Title */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Họ tên Bác sĩ / Chuyên gia:
                    </label>
                    <input
                      type="text"
                      id={`testimonial-r2-name-${idx}`}
                      value={item.name}
                      onChange={(e) => {
                        const next = [...testimonialsRow2];
                        next[idx] = { ...next[idx], name: e.target.value };
                        setTestimonialsRow2(next);
                      }}
                      className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-900 focus:outline-none focus:border-emerald-500"
                      placeholder="Dr. Jane Smith, DDS"
                    />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="block text-[11px] font-semibold text-slate-700">
                        Chức danh / Đơn vị (HTML):
                      </label>
                      <button
                        type="button"
                        onClick={() => insertSnippetIntoTestimonial(2, idx, 'title', '<strong>', '</strong>')}
                        className="text-[10px] text-emerald-600 hover:underline font-bold"
                      >
                        +Đậm
                      </button>
                    </div>
                    <input
                      type="text"
                      id={`testimonial-r2-title-${idx}`}
                      value={item.title}
                      onChange={(e) => {
                        const next = [...testimonialsRow2];
                        next[idx] = { ...next[idx], title: e.target.value };
                        setTestimonialsRow2(next);
                      }}
                      className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-600 font-mono focus:outline-none focus:border-emerald-500"
                      placeholder="Chuyên gia Bảo tồn Răng"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Preview for Testimonials */}
        <div className="pt-4 border-t border-slate-100">
          <div className="flex items-center gap-2 mb-3">
            <Eye className="w-4 h-4 text-indigo-600" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
              Xem trước trực quan Đánh giá chuyên gia (Live Preview Testimonial Cards):
            </span>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <div className="text-center mb-4">
              <h4 
                className="font-heading font-bold text-lg sm:text-xl text-white"
                dangerouslySetInnerHTML={{ __html: testimonialsHeadline || 'Đánh giá từ các chuyên gia' }}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[...testimonialsRow1.slice(0, 2), ...testimonialsRow2.slice(0, 1)].map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-5 flex flex-col justify-between hover:bg-slate-800 transition-colors"
                >
                  <div>
                    <Quote className="w-6 h-6 text-slate-500 mb-3 opacity-60" />
                    <p 
                      className="font-body text-slate-300 text-xs sm:text-sm leading-relaxed italic mb-4"
                      dangerouslySetInnerHTML={{ 
                        __html: item.quote ? (item.quote.startsWith('"') ? item.quote : `"${item.quote}"`) : 'Chưa có lời nhận xét...' 
                      }}
                    />
                  </div>
                  <div className="pt-3 border-t border-slate-700/50">
                    <p 
                      className="font-bold text-white text-xs sm:text-sm"
                      dangerouslySetInnerHTML={{ __html: item.name || 'Bác sĩ' }}
                    />
                    <p 
                      className="text-slate-400 text-[11px] mt-0.5"
                      dangerouslySetInnerHTML={{ __html: item.title || 'Chức danh' }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-[11px] text-slate-400 italic">
              * Hiển thị mô phỏng 3 thẻ mẫu đại diện trong giao diện thực tế của Section 5
            </p>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 5.5 CẤU HÌNH NÚT CTA & FORM SECTION 5                          */}
      {/* ============================================================== */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="pb-4 border-b border-slate-100">
          <h3 className="text-lg font-heading font-extrabold text-slate-900">
            5.5. Cấu hình Nút CTA & Form Section 5
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
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-bold text-slate-900 focus:outline-none focus:border-emerald-600 bg-white"
          />
        </div>

        <CtaFormConfigEditor
          label="CTA & Form Section 5"
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

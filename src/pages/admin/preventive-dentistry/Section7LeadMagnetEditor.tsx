import React, { useRef } from 'react';
import { 
  BookOpen, 
  Bold, 
  CornerDownLeft, 
  FileCode, 
  Eye, 
  List, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { CtaFormConfigEditor } from '../components/CtaFormConfigEditor';

interface LeadMagnetCardData {
  badge: string;
  title: string;
  description: string;
  ctaText: string;
  ctaFormTitle?: string;
  ctaFormDesc?: string;
  ctaFormExtraHtml?: string;
  ctaRedirectThanks?: boolean;
  ctaTargetUrl?: string;
  ctaResourceTitle?: string;
}

interface Section7LeadMagnetEditorProps {
  headline: string;
  setHeadline: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  ebookCard: LeadMagnetCardData;
  setEbookCard: React.Dispatch<React.SetStateAction<LeadMagnetCardData>>;
  sampleCard: LeadMagnetCardData;
  setSampleCard: React.Dispatch<React.SetStateAction<LeadMagnetCardData>>;
}

export const Section7LeadMagnetEditor: React.FC<Section7LeadMagnetEditorProps> = ({
  headline,
  setHeadline,
  description,
  setDescription,
  ebookCard,
  setEbookCard,
  sampleCard,
  setSampleCard,
}) => {
  const headlineInputRef = useRef<HTMLTextAreaElement>(null);
  const descriptionInputRef = useRef<HTMLTextAreaElement>(null);
  const ebookTitleInputRef = useRef<HTMLTextAreaElement>(null);
  const ebookDescInputRef = useRef<HTMLTextAreaElement>(null);
  const sampleTitleInputRef = useRef<HTMLTextAreaElement>(null);
  const sampleDescInputRef = useRef<HTMLTextAreaElement>(null);

  // Helper insertion for textarea elements
  const insertSnippet = (
    ref: React.RefObject<HTMLTextAreaElement | null>,
    prefix: string,
    suffix: string,
    setter: (val: string) => void
  ) => {
    const el = ref.current;
    if (!el) {
      setter(prefix + suffix);
      return;
    }
    const start = el.selectionStart ?? el.value.length;
    const end = el.selectionEnd ?? el.value.length;
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

  // Quick Format Toolbar Component
  const HtmlToolbar: React.FC<{
    onInsert: (prefix: string, suffix: string) => void;
  }> = ({ onInsert }) => (
    <div className="flex flex-wrap items-center gap-1.5 text-xs bg-slate-50 p-1.5 rounded-lg border border-slate-200 mb-2">
      <span className="text-[11px] text-slate-500 px-1 font-mono flex items-center gap-1">
        <FileCode className="w-3.5 h-3.5 text-slate-400" />
        Chèn nhanh:
      </span>
      <button
        type="button"
        onClick={() => onInsert('<strong>', '</strong>')}
        className="px-2 py-0.5 bg-white hover:bg-slate-100 rounded text-slate-800 font-bold border border-slate-200 text-xs inline-flex items-center gap-1 shadow-2xs transition-colors"
        title="In đậm chữ đang bôi đen hoặc chèn thẻ <strong>"
      >
        <Bold className="w-3 h-3" />
        <span>Đậm</span>
      </button>
      <button
        type="button"
        onClick={() => onInsert('<span class="text-[#00ADEF]">', '</span>')}
        className="px-2 py-0.5 bg-sky-50 hover:bg-sky-100 text-[#00ADEF] font-semibold rounded border border-sky-200 text-[11px] inline-flex items-center gap-1 transition-colors"
        title="Tô màu xanh Shofu <span class='text-[#00ADEF]'>"
      >
        <span className="w-2 h-2 rounded-full bg-[#00ADEF]"></span>
        Xanh Shofu
      </button>
      <button
        type="button"
        onClick={() => onInsert('<span class="text-[#C43838]">', '</span>')}
        className="px-2 py-0.5 bg-red-50 hover:bg-red-100 text-[#C43838] font-semibold rounded border border-red-200 text-[11px] inline-flex items-center gap-1 transition-colors"
        title="Tô màu đỏ nhấn <span class='text-[#C43838]'>"
      >
        <span className="w-2 h-2 rounded-full bg-[#C43838]"></span>
        Đỏ nhấn
      </button>
      <button
        type="button"
        onClick={() => onInsert('<br/>', '')}
        className="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-mono text-[11px] rounded border border-slate-300 inline-flex items-center gap-1 transition-colors"
        title="Xuống dòng <br/>"
      >
        <CornerDownLeft className="w-3 h-3" />
        <span>&lt;br/&gt;</span>
      </button>
      <button
        type="button"
        onClick={() => onInsert('<ul class="list-disc pl-5 space-y-1"><li>', '</li></ul>')}
        className="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-[11px] rounded border border-slate-300 inline-flex items-center gap-1 transition-colors"
        title="Gạch đầu dòng danh sách <ul><li>"
      >
        <List className="w-3 h-3" />
        <span>Gạch đầu dòng</span>
      </button>
    </div>
  );

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* 1. Header Box */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-3 pb-5 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#00ADEF] flex items-center justify-center font-bold">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-heading font-extrabold text-slate-900">
              Section 7: Tài Liệu Lâm Sàng & Đăng Ký Mẫu Thử
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Cung cấp Ebook Phác đồ MiCD và Sample Kit PRG Barrier Coat miễn phí (Hỗ trợ định dạng HTML & Live Preview)
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {/* 7.1. Tiêu đề chính Section H2 */}
          <div className="space-y-1.5">
            <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider font-bold">
              7.1. Tiêu đề chính Section H2 (Hỗ trợ HTML)
            </label>
            <HtmlToolbar
              onInsert={(prefix, suffix) =>
                insertSnippet(headlineInputRef, prefix, suffix, (val) => setHeadline(val))
              }
            />
            <textarea
              ref={headlineInputRef}
              rows={2}
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-bold text-slate-900 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              placeholder="Nhập tiêu đề chính..."
            />
            
            {/* Live Preview H2 */}
            <div className="p-3.5 bg-slate-50 rounded-xl border border-dashed border-slate-200 mt-2">
              <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-mono uppercase mb-1.5 font-semibold">
                <Eye className="w-3.5 h-3.5 text-[#00ADEF]" />
                <span>Live Preview Tiêu đề H2:</span>
              </div>
              <h2
                className="text-lg sm:text-2xl font-heading font-extrabold text-slate-900 leading-[1.3] tracking-tight"
                dangerouslySetInnerHTML={{
                  __html: headline || '<span class="text-slate-400 italic font-normal">Chưa có tiêu đề...</span>',
                }}
              />
            </div>
          </div>

          {/* 7.2. Đoạn văn mô tả */}
          <div className="space-y-1.5">
            <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider font-bold">
              7.2. Đoạn văn mô tả dẫn nhập (Hỗ trợ HTML)
            </label>
            <HtmlToolbar
              onInsert={(prefix, suffix) =>
                insertSnippet(descriptionInputRef, prefix, suffix, (val) => setDescription(val))
              }
            />
            <textarea
              ref={descriptionInputRef}
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-700 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              placeholder="Nhập đoạn văn mô tả..."
            />

            {/* Live Preview Description */}
            <div className="p-3.5 bg-slate-50 rounded-xl border border-dashed border-slate-200 mt-2">
              <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-mono uppercase mb-1.5 font-semibold">
                <Eye className="w-3.5 h-3.5 text-[#00ADEF]" />
                <span>Live Preview Đoạn văn mô tả:</span>
              </div>
              <div
                className="text-sm sm:text-base font-body text-slate-600 leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: description || '<span class="text-slate-400 italic">Chưa có mô tả dẫn nhập...</span>',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 2. Ebook Card & Form */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="pb-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#00ADEF]"></span>
            <h3 className="text-lg font-heading font-extrabold text-slate-900">
              Card 1: Sổ tay lâm sàng (Ebook qua Zalo)
            </h3>
          </div>
          <span className="px-2.5 py-1 bg-sky-50 text-[#00ADEF] text-xs font-bold rounded-lg border border-sky-100">
            Khách hàng tải Ebook
          </span>
        </div>

        <div className="grid grid-cols-1 gap-5">
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Badge</label>
            <input
              type="text"
              value={ebookCard.badge}
              onChange={(e) => setEbookCard({ ...ebookCard, badge: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs font-bold text-sky-700 focus:outline-none focus:border-sky-500"
              placeholder="Ví dụ: TÀI LIỆU LÂM SÀNG MIỄN PHÍ"
            />
          </div>

          {/* Tên tài liệu Ebook (HTML) */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-600">Tên tài liệu Ebook (Hỗ trợ HTML)</label>
            <HtmlToolbar
              onInsert={(prefix, suffix) =>
                insertSnippet(ebookTitleInputRef, prefix, suffix, (val) =>
                  setEbookCard((prev) => ({ ...prev, title: val }))
                )
              }
            />
            <textarea
              ref={ebookTitleInputRef}
              rows={2}
              value={ebookCard.title}
              onChange={(e) => setEbookCard({ ...ebookCard, title: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm font-bold text-slate-900 focus:outline-none focus:border-sky-500"
              placeholder="Nhập tên tài liệu Ebook..."
            />
          </div>

          {/* Mô tả nội dung Ebook (HTML) */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-600">Mô tả nội dung Ebook (Hỗ trợ HTML)</label>
            <HtmlToolbar
              onInsert={(prefix, suffix) =>
                insertSnippet(ebookDescInputRef, prefix, suffix, (val) =>
                  setEbookCard((prev) => ({ ...prev, description: val }))
                )
              }
            />
            <textarea
              ref={ebookDescInputRef}
              rows={3}
              value={ebookCard.description}
              onChange={(e) => setEbookCard({ ...ebookCard, description: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-700 focus:outline-none focus:border-sky-500"
              placeholder="Nhập mô tả nội dung Ebook..."
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Chữ trên nút CTA</label>
            <input
              type="text"
              value={ebookCard.ctaText}
              onChange={(e) => setEbookCard({ ...ebookCard, ctaText: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-sky-500"
              placeholder="Ví dụ: TẢI TRỌN BỘ PHÁC ĐỒ MIỄN PHÍ"
            />
          </div>

          {/* Khung Live Preview trực quan thẻ Ebook */}
          <div className="pt-3">
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-2.5">
              <Eye className="w-3.5 h-3.5 text-[#00ADEF]" />
              <span>Live Preview Trực Quan Thẻ Ebook (Phong cách thẻ Card trắng, Badge Xanh #00ADEF):</span>
            </div>
            <div className="p-5 sm:p-7 bg-slate-100/80 rounded-2xl border border-slate-200">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md flex flex-col justify-between max-w-xl mx-auto">
                <div>
                  <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-sky-100 text-[#00ADEF] font-bold text-xs tracking-wide mb-4">
                    {ebookCard.badge || 'TÀI LIỆU LÂM SÀNG'}
                  </div>
                  <h3
                    className="font-heading font-bold text-lg sm:text-2xl text-slate-900 mb-3 leading-snug"
                    dangerouslySetInnerHTML={{
                      __html: ebookCard.title || '<span class="text-slate-400 italic font-normal">Chưa có tên tài liệu...</span>',
                    }}
                  />
                  <div
                    className="text-slate-600 text-sm sm:text-base mb-6 leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: ebookCard.description || '<span class="text-slate-400 italic">Chưa có mô tả nội dung...</span>',
                    }}
                  />
                </div>
                <div className="inline-flex items-center justify-center gap-2 bg-[#C43838] text-white px-6 py-3.5 rounded-full font-mono text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md">
                  <span>{ebookCard.ctaText || 'TẢI EBOOK NGAY'}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-2 border-t border-slate-100">
          <CtaFormConfigEditor
            title={ebookCard.ctaFormTitle || ''}
            setTitle={(val) => setEbookCard((prev) => ({ ...prev, ctaFormTitle: typeof val === 'function' ? val(prev.ctaFormTitle || '') : val }))}
            description={ebookCard.ctaFormDesc || ''}
            setDescription={(val) => setEbookCard((prev) => ({ ...prev, ctaFormDesc: typeof val === 'function' ? val(prev.ctaFormDesc || '') : val }))}
            extraHtml={ebookCard.ctaFormExtraHtml || ''}
            setExtraHtml={(val) => setEbookCard((prev) => ({ ...prev, ctaFormExtraHtml: typeof val === 'function' ? val(prev.ctaFormExtraHtml || '') : val }))}
            redirectThanks={Boolean(ebookCard.ctaRedirectThanks)}
            onChangeRedirectThanks={(val) => setEbookCard((prev) => ({ ...prev, ctaRedirectThanks: val }))}
            setRedirectThanks={(val) => setEbookCard((prev) => ({ ...prev, ctaRedirectThanks: typeof val === 'function' ? val(Boolean(prev.ctaRedirectThanks)) : val }))}
            targetUrl={ebookCard.ctaTargetUrl || ''}
            setTargetUrl={(val) => setEbookCard((prev) => ({ ...prev, ctaTargetUrl: typeof val === 'function' ? val(prev.ctaTargetUrl || '') : val }))}
            resourceTitle={ebookCard.ctaResourceTitle || ''}
            setResourceTitle={(val) => setEbookCard((prev) => ({ ...prev, ctaResourceTitle: typeof val === 'function' ? val(prev.ctaResourceTitle || '') : val }))}
          />
        </div>
      </div>

      {/* 3. Sample Kit Card & Form */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="pb-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
            <h3 className="text-lg font-heading font-extrabold text-slate-900">
              Card 2: Đăng ký nhận Kit Mẫu thử PRG Barrier Coat
            </h3>
          </div>
          <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-lg border border-emerald-100">
            Khách hàng đăng ký mẫu thử
          </span>
        </div>

        <div className="grid grid-cols-1 gap-5">
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Badge</label>
            <input
              type="text"
              value={sampleCard.badge}
              onChange={(e) => setSampleCard({ ...sampleCard, badge: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs font-bold text-emerald-700 focus:outline-none focus:border-emerald-500"
              placeholder="Ví dụ: TRẢI NGHIỆM THỰC TẾ MIỄN PHÍ"
            />
          </div>

          {/* Tiêu đề Card (HTML) */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-600">Tiêu đề Card (Hỗ trợ HTML)</label>
            <HtmlToolbar
              onInsert={(prefix, suffix) =>
                insertSnippet(sampleTitleInputRef, prefix, suffix, (val) =>
                  setSampleCard((prev) => ({ ...prev, title: val }))
                )
              }
            />
            <textarea
              ref={sampleTitleInputRef}
              rows={2}
              value={sampleCard.title}
              onChange={(e) => setSampleCard({ ...sampleCard, title: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm font-bold text-slate-900 focus:outline-none focus:border-emerald-500"
              placeholder="Nhập tiêu đề Card..."
            />
          </div>

          {/* Mô tả chương trình mẫu thử (HTML) */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-600">Mô tả chương trình mẫu thử (Hỗ trợ HTML)</label>
            <HtmlToolbar
              onInsert={(prefix, suffix) =>
                insertSnippet(sampleDescInputRef, prefix, suffix, (val) =>
                  setSampleCard((prev) => ({ ...prev, description: val }))
                )
              }
            />
            <textarea
              ref={sampleDescInputRef}
              rows={3}
              value={sampleCard.description}
              onChange={(e) => setSampleCard({ ...sampleCard, description: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-700 focus:outline-none focus:border-emerald-500"
              placeholder="Nhập mô tả chương trình..."
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Chữ trên nút CTA</label>
            <input
              type="text"
              value={sampleCard.ctaText}
              onChange={(e) => setSampleCard({ ...sampleCard, ctaText: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-emerald-500"
              placeholder="Ví dụ: ĐĂNG KÝ TRẢI NGHIỆM MIỄN PHÍ"
            />
          </div>

          {/* Khung Live Preview trực quan thẻ Sample Kit */}
          <div className="pt-3">
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-2.5">
              <Eye className="w-3.5 h-3.5 text-emerald-600" />
              <span>Live Preview Trực Quan Thẻ Sample Kit (Phong cách thẻ Card trắng, Badge Xanh Ngọc Lục Bảo Emerald):</span>
            </div>
            <div className="p-5 sm:p-7 bg-slate-100/80 rounded-2xl border border-slate-200">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md flex flex-col justify-between max-w-xl mx-auto">
                <div>
                  <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs tracking-wide mb-4">
                    {sampleCard.badge || 'TRẢI NGHIỆM MIỄN PHÍ'}
                  </div>
                  <h3
                    className="font-heading font-bold text-lg sm:text-2xl text-slate-900 mb-3 leading-snug"
                    dangerouslySetInnerHTML={{
                      __html: sampleCard.title || '<span class="text-slate-400 italic font-normal">Chưa có tiêu đề...</span>',
                    }}
                  />
                  <div
                    className="text-slate-600 text-sm sm:text-base mb-6 leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: sampleCard.description || '<span class="text-slate-400 italic">Chưa có mô tả chương trình...</span>',
                    }}
                  />
                </div>
                <div className="inline-flex items-center justify-center gap-2 bg-[#C43838] text-white px-6 py-3.5 rounded-full font-mono text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md">
                  <span>{sampleCard.ctaText || 'ĐĂNG KÝ MẪU THỬ'}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-2 border-t border-slate-100">
          <CtaFormConfigEditor
            title={sampleCard.ctaFormTitle || ''}
            setTitle={(val) => setSampleCard((prev) => ({ ...prev, ctaFormTitle: typeof val === 'function' ? val(prev.ctaFormTitle || '') : val }))}
            description={sampleCard.ctaFormDesc || ''}
            setDescription={(val) => setSampleCard((prev) => ({ ...prev, ctaFormDesc: typeof val === 'function' ? val(prev.ctaFormDesc || '') : val }))}
            extraHtml={sampleCard.ctaFormExtraHtml || ''}
            setExtraHtml={(val) => setSampleCard((prev) => ({ ...prev, ctaFormExtraHtml: typeof val === 'function' ? val(prev.ctaFormExtraHtml || '') : val }))}
            redirectThanks={Boolean(sampleCard.ctaRedirectThanks)}
            onChangeRedirectThanks={(val) => setSampleCard((prev) => ({ ...prev, ctaRedirectThanks: val }))}
            setRedirectThanks={(val) => setSampleCard((prev) => ({ ...prev, ctaRedirectThanks: typeof val === 'function' ? val(Boolean(prev.ctaRedirectThanks)) : val }))}
            targetUrl={sampleCard.ctaTargetUrl || ''}
            setTargetUrl={(val) => setSampleCard((prev) => ({ ...prev, ctaTargetUrl: typeof val === 'function' ? val(prev.ctaTargetUrl || '') : val }))}
            resourceTitle={sampleCard.ctaResourceTitle || ''}
            setResourceTitle={(val) => setSampleCard((prev) => ({ ...prev, ctaResourceTitle: typeof val === 'function' ? val(prev.ctaResourceTitle || '') : val }))}
          />
        </div>
      </div>
    </div>
  );
};

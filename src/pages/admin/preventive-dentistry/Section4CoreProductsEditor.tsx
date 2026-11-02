import React, { useRef } from 'react';
import { 
  Package, 
  Upload, 
  Bold, 
  CheckCircle, 
  CornerDownLeft, 
  FileCode, 
  Eye, 
  Sparkles 
} from 'lucide-react';
import { PreventiveProductItem } from './types';
import { CtaFormConfigEditor } from '../components/CtaFormConfigEditor';

interface Section4CoreProductsEditorProps {
  headline: string;
  setHeadline: React.Dispatch<React.SetStateAction<string>>;
  product1: PreventiveProductItem;
  setProduct1: React.Dispatch<React.SetStateAction<PreventiveProductItem>>;
  product2: PreventiveProductItem;
  setProduct2: React.Dispatch<React.SetStateAction<PreventiveProductItem>>;
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

export const Section4CoreProductsEditor: React.FC<Section4CoreProductsEditorProps> = ({
  headline,
  setHeadline,
  product1,
  setProduct1,
  product2,
  setProduct2,
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
  const prod1TitleRef = useRef<HTMLTextAreaElement>(null);
  const prod1DescRef = useRef<HTMLTextAreaElement>(null);
  const prod2TitleRef = useRef<HTMLTextAreaElement>(null);
  const prod2DescRef = useRef<HTMLTextAreaElement>(null);

  // Helper insertion for single refs
  const insertSnippet = (
    ref: React.RefObject<HTMLTextAreaElement | null>,
    prefix: string,
    suffix: string,
    setter: (fn: (prev: string) => string) => void
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
    setter(() => updated);
    setTimeout(() => {
      el.focus();
      const cursor = selected ? start + replacement.length : start + prefix.length;
      el.setSelectionRange(cursor, cursor);
    }, 0);
  };

  // Helper insertion for dynamic feature item textareas
  const insertSnippetIntoFeature = (
    prodKey: 1 | 2,
    featIdx: number,
    field: 'title' | 'description',
    prefix: string,
    suffix: string
  ) => {
    const el = document.getElementById(`prod${prodKey}-feat-${field}-${featIdx}`) as (HTMLInputElement | HTMLTextAreaElement | null);
    const currentProduct = prodKey === 1 ? product1 : product2;
    const setter = prodKey === 1 ? setProduct1 : setProduct2;

    if (!el) {
      const nextFeats = [...currentProduct.features];
      nextFeats[featIdx] = {
        ...nextFeats[featIdx],
        [field]: nextFeats[featIdx][field] + prefix + suffix
      };
      setter({ ...currentProduct, features: nextFeats });
      return;
    }

    const start = el.selectionStart || 0;
    const end = el.selectionEnd || 0;
    const currentVal = el.value;
    const selected = currentVal.substring(start, end);
    const replacement = selected ? prefix + selected + suffix : prefix + suffix;
    const updated = currentVal.substring(0, start) + replacement + currentVal.substring(end);

    const nextFeats = [...currentProduct.features];
    nextFeats[featIdx] = {
      ...nextFeats[featIdx],
      [field]: updated
    };
    setter({ ...currentProduct, features: nextFeats });

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
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
            <Package className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-heading font-extrabold text-slate-900">
              Section 4: Bộ đôi Sản phẩm Cốt lõi
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              1. PRG Barrier Coat (Màng phủ chống ê buốt) & 2. BeautiSealant (Trám bít hố rãnh không Etching)
            </p>
          </div>
        </div>

        {/* 4.1 Headline with HTML & Suggestions & Preview */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider font-bold">
              4.1. Tiêu đề chính Section H2 - Hỗ trợ định dạng HTML
            </label>

            {/* Quick HTML Action Buttons */}
            <div className="flex flex-wrap items-center gap-1.5 text-xs bg-slate-50 p-1 rounded-lg border border-slate-200">
              <span className="text-[11px] text-slate-500 px-1 font-mono">Chèn nhanh:</span>
              <button
                type="button"
                onClick={() => insertSnippet(headlineInputRef, '<strong>', '</strong>', (fn) => setHeadline(fn(headline)))}
                className="px-2 py-0.5 bg-white hover:bg-slate-200 rounded text-slate-800 font-bold border border-slate-200 text-xs inline-flex items-center gap-1 shadow-xs"
                title="In đậm"
              >
                <Bold className="w-3 h-3" />
                <span>Đậm</span>
              </button>
              <button
                type="button"
                onClick={() => insertSnippet(headlineInputRef, '<span class="text-[#C43838] font-bold">', '</span>', (fn) => setHeadline(fn(headline)))}
                className="px-2 py-0.5 bg-red-50 hover:bg-red-100 text-[#C43838] font-bold rounded border border-red-200 text-[11px]"
                title="Tô màu đỏ Shofu"
              >
                Đỏ Shofu
              </button>
              <button
                type="button"
                onClick={() => insertSnippet(headlineInputRef, '<span class="text-blue-600 font-bold">', '</span>', (fn) => setHeadline(fn(headline)))}
                className="px-2 py-0.5 bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold rounded border border-blue-200 text-[11px]"
                title="Tô màu xanh dương"
              >
                Xanh Dương
              </button>
              <button
                type="button"
                onClick={() => insertSnippet(headlineInputRef, '<br className="hidden sm:inline" />', '', (fn) => setHeadline(fn(headline)))}
                className="px-2 py-0.5 bg-white hover:bg-slate-200 rounded text-slate-700 font-mono text-[11px] border border-slate-200 inline-flex items-center gap-1"
                title="Xuống dòng responsive"
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
            placeholder='Ví dụ: Giải pháp phòng ngừa chủ động từ <span class="text-[#C43838]">Shofu</span>'
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
                onClick={() => setHeadline(prev => prev + ' <span class="text-[#C43838] font-bold">Shofu Nhật Bản</span>')}
                className="px-2 py-1 bg-white hover:bg-red-50 text-slate-700 hover:text-red-700 border border-slate-200 rounded-lg text-[11px] transition-colors"
              >
                + Chữ đỏ Shofu: <code className="text-[#C43838]">&lt;span class=&quot;text-[#C43838] font-bold&quot;&gt;...&lt;/span&gt;</code>
              </button>
              <button
                type="button"
                onClick={() => setHeadline(prev => prev + ' <span class="text-blue-600 font-bold">Phòng Ngừa Chủ Động</span>')}
                className="px-2 py-1 bg-white hover:bg-blue-50 text-slate-700 hover:text-blue-700 border border-slate-200 rounded-lg text-[11px] transition-colors"
              >
                + Chữ xanh: <code className="text-blue-600">&lt;span class=&quot;text-blue-600 font-bold&quot;&gt;...&lt;/span&gt;</code>
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

          {/* Live Preview for 4.1 H2 */}
          <div className="mt-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-2 mb-2">
              <Eye className="w-3.5 h-3.5 text-blue-600" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-600">
                Xem trước trực tiếp (Live Preview Tiêu đề H2 Section 4):
              </span>
            </div>
            <div className="p-5 sm:p-6 rounded-xl bg-white border border-slate-200/90 shadow-2xs text-center">
              <h2 
                className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 leading-[1.3] tracking-tight"
                dangerouslySetInnerHTML={{ __html: headline || '<span class="text-slate-400 italic">Chưa có tiêu đề H2...</span>' }}
              />
              <div className="w-20 h-1 bg-[#C43838] mx-auto my-3 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Product 1: PRG Barrier Coat with HTML, Suggestions & Full Preview */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <h3 className="text-lg font-heading font-extrabold text-slate-900">
              4.2. Sản phẩm 1: PRG Barrier Coat
            </h3>
          </div>
          <span className="text-xs font-mono px-2.5 py-1 bg-red-50 text-red-600 rounded-lg font-bold">
            Màng phủ sinh học chống ê buốt
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            {/* Badge Tag */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Badge Tag</label>
              <input
                type="text"
                value={product1.tag}
                onChange={(e) => setProduct1({ ...product1, tag: e.target.value })}
                className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 bg-white"
              />
            </div>

            {/* Title with HTML */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                <label className="block text-xs font-semibold text-slate-700">Tên & Định danh sản phẩm (Hỗ trợ HTML):</label>
                <div className="flex items-center gap-1 text-[11px]">
                  <button
                    type="button"
                    onClick={() => insertSnippet(prod1TitleRef, '<strong>', '</strong>', (fn) => setProduct1({ ...product1, title: fn(product1.title) }))}
                    className="px-1.5 py-0.5 bg-white hover:bg-slate-200 rounded text-slate-700 font-bold border border-slate-200"
                    title="In đậm"
                  >
                    Đậm
                  </button>
                  <button
                    type="button"
                    onClick={() => insertSnippet(prod1TitleRef, '<span class="text-[#C43838] font-bold">', '</span>', (fn) => setProduct1({ ...product1, title: fn(product1.title) }))}
                    className="px-1.5 py-0.5 bg-red-50 hover:bg-red-100 text-[#C43838] font-bold rounded border border-red-200"
                    title="Đỏ Shofu"
                  >
                    Đỏ
                  </button>
                </div>
              </div>
              <textarea
                ref={prod1TitleRef}
                rows={2}
                value={product1.title}
                onChange={(e) => setProduct1({ ...product1, title: e.target.value })}
                className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm font-bold text-slate-900 font-mono bg-white"
              />
              <div className="flex flex-wrap gap-1 mt-1 text-[10.5px]">
                <button
                  type="button"
                  onClick={() => setProduct1({ ...product1, title: product1.title + ' <span class="text-[#C43838] font-bold">mỏng 15µm</span>' })}
                  className="px-1.5 py-0.5 bg-white hover:bg-red-50 text-slate-600 border border-slate-200 rounded"
                >
                  + Chữ đỏ: <code>&lt;span class=&quot;text-[#C43838] font-bold&quot;&gt;...&lt;/span&gt;</code>
                </button>
              </div>
            </div>

            {/* Description with HTML */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                <label className="block text-xs font-semibold text-slate-700">Mô tả tổng quan (Hỗ trợ HTML):</label>
                <div className="flex items-center gap-1 text-[11px]">
                  <button
                    type="button"
                    onClick={() => insertSnippet(prod1DescRef, '<strong>', '</strong>', (fn) => setProduct1({ ...product1, description: fn(product1.description) }))}
                    className="px-1.5 py-0.5 bg-white hover:bg-slate-200 rounded text-slate-700 font-bold border border-slate-200"
                    title="In đậm"
                  >
                    Đậm
                  </button>
                  <button
                    type="button"
                    onClick={() => insertSnippet(prod1DescRef, '<span class="text-[#C43838] font-bold">', '</span>', (fn) => setProduct1({ ...product1, description: fn(product1.description) }))}
                    className="px-1.5 py-0.5 bg-red-50 hover:bg-red-100 text-[#C43838] font-bold rounded border border-red-200"
                    title="Đỏ Shofu"
                  >
                    Đỏ
                  </button>
                  <button
                    type="button"
                    onClick={() => insertSnippet(prod1DescRef, '<br/><br/>', '', (fn) => setProduct1({ ...product1, description: fn(product1.description) }))}
                    className="px-1.5 py-0.5 bg-white hover:bg-slate-200 rounded text-slate-600 font-mono border border-slate-200"
                    title="Ngắt đoạn"
                  >
                    &lt;br/&gt;
                  </button>
                </div>
              </div>
              <textarea
                ref={prod1DescRef}
                rows={4}
                value={product1.description}
                onChange={(e) => setProduct1({ ...product1, description: e.target.value })}
                className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs text-slate-700 font-mono leading-relaxed bg-white"
              />
              <div className="flex flex-wrap gap-1 mt-1 text-[10.5px]">
                <button
                  type="button"
                  onClick={() => setProduct1({ ...product1, description: product1.description + ' <strong>không chứa HEMA</strong>' })}
                  className="px-1.5 py-0.5 bg-white hover:bg-slate-100 text-slate-600 border border-slate-200 rounded"
                >
                  + In đậm
                </button>
                <button
                  type="button"
                  onClick={() => setProduct1({ ...product1, description: product1.description + ' <span class="text-[#C43838] font-bold">bảo vệ lên đến 6 tháng</span>' })}
                  className="px-1.5 py-0.5 bg-white hover:bg-red-50 text-slate-600 border border-slate-200 rounded"
                >
                  + Nhấn mạnh đỏ
                </button>
              </div>
            </div>
          </div>

          {/* Product 1 Image */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Ảnh sản phẩm PRG Barrier Coat</label>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col gap-3">
              <div className="h-40 flex items-center justify-center p-2 bg-white rounded-xl border border-slate-200/70">
                <img src={product1.image} alt="PRG" className="max-h-full max-w-full object-contain" />
              </div>
              <input
                type="text"
                value={product1.image}
                onChange={(e) => setProduct1({ ...product1, image: e.target.value })}
                className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-mono text-slate-800"
              />
              <label className="inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold cursor-pointer transition-colors shadow-2xs">
                <Upload className="w-3.5 h-3.5" />
                <span>{isUploadingImage && uploadingTarget === 'prod1_img' ? 'Đang tải...' : 'Tải ảnh mới từ máy'}</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      onUploadImage(file, 'prod1_img', (newUrl) => setProduct1({ ...product1, image: newUrl }));
                    }
                  }}
                />
              </label>
            </div>
          </div>
        </div>

        {/* 4 Feature items of PRG Barrier Coat with HTML */}
        <div className="pt-4 border-t border-slate-100 space-y-3">
          <div className="flex items-center justify-between">
            <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider font-bold">
              4 Tính năng ưu việt của PRG Barrier Coat (Hỗ trợ HTML)
            </label>
            <span className="text-[11px] text-slate-400 font-mono">4 Thẻ tính năng</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {product1.features.map((feat, idx) => (
              <div key={idx} className="p-3.5 rounded-xl border border-red-200 bg-red-50/30 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold text-red-600">Tính năng {idx + 1}</span>
                  <div className="flex items-center gap-1 text-[10px]">
                    <button
                      type="button"
                      onClick={() => insertSnippetIntoFeature(1, idx, 'title', '<strong>', '</strong>')}
                      className="px-1 py-0.2 bg-white border border-slate-200 rounded font-bold"
                    >
                      B
                    </button>
                    <button
                      type="button"
                      onClick={() => insertSnippetIntoFeature(1, idx, 'title', '<span class="text-[#C43838] font-bold">', '</span>')}
                      className="px-1 py-0.2 bg-white text-red-600 border border-slate-200 rounded font-bold"
                    >
                      Đỏ
                    </button>
                  </div>
                </div>

                <input
                  type="text"
                  id={`prod1-feat-title-${idx}`}
                  value={feat.title}
                  onChange={(e) => {
                    const next = [...product1.features];
                    next[idx].title = e.target.value;
                    setProduct1({ ...product1, features: next });
                  }}
                  className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-900 font-mono"
                  placeholder="Tên tính năng..."
                />

                <textarea
                  id={`prod1-feat-description-${idx}`}
                  rows={3}
                  value={feat.description}
                  onChange={(e) => {
                    const next = [...product1.features];
                    next[idx].description = e.target.value;
                    setProduct1({ ...product1, features: next });
                  }}
                  className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-700 font-mono leading-relaxed"
                  placeholder="Mô tả tính năng..."
                />
              </div>
            ))}
          </div>
        </div>

        {/* Live Preview for Product 1 */}
        <div className="pt-4 border-t border-slate-100">
          <div className="flex items-center gap-2 mb-3">
            <Eye className="w-4 h-4 text-red-600" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800">
              Xem trước thực tế Sản phẩm 1: PRG Barrier Coat (Live Preview):
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-col lg:flex-row-reverse gap-8 items-center">
              <div className="w-full lg:w-1/2 flex flex-col gap-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-50 text-red-600 font-bold text-xs tracking-wide w-fit border border-red-200">
                  {product1.tag || 'Màng phủ sinh học'}
                </div>
                <h3 
                  className="font-heading font-bold text-2xl text-slate-900 leading-tight"
                  dangerouslySetInnerHTML={{ __html: product1.title || '<span class="text-slate-400 italic">Tên sản phẩm...</span>' }}
                />
                <p 
                  className="font-body text-slate-600 text-sm sm:text-base leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: product1.description || '<span class="text-slate-400 italic">Mô tả sản phẩm...</span>' }}
                />
              </div>
              <div className="w-full lg:w-1/2 flex items-center justify-center p-4 bg-slate-50 rounded-2xl">
                {product1.image ? (
                  <img src={product1.image} alt={product1.title} className="max-h-[220px] w-auto object-contain drop-shadow-lg" />
                ) : (
                  <span className="text-xs text-slate-400">Chưa có ảnh</span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {product1.features.map((feat, idx) => (
                <div key={idx} className="flex gap-2.5 items-start p-3.5 rounded-xl border bg-red-50/50 border-red-100">
                  <CheckCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                  <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <strong 
                      className="text-slate-900 font-bold mr-1"
                      dangerouslySetInnerHTML={{ __html: feat.title.endsWith(':') ? feat.title : `${feat.title}:` }}
                    />
                    <span dangerouslySetInnerHTML={{ __html: feat.description }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Product 2: BeautiSealant with HTML, Suggestions & Full Preview */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-500"></span>
            <h3 className="text-lg font-heading font-extrabold text-slate-900">
              4.3. Sản phẩm 2: BeautiSealant
            </h3>
          </div>
          <span className="text-xs font-mono px-2.5 py-1 bg-blue-50 text-blue-600 rounded-lg font-bold">
            Trám bít hố rãnh không cần Etching
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            {/* Badge Tag */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Badge Tag</label>
              <input
                type="text"
                value={product2.tag}
                onChange={(e) => setProduct2({ ...product2, tag: e.target.value })}
                className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 bg-white"
              />
            </div>

            {/* Title with HTML */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                <label className="block text-xs font-semibold text-slate-700">Tên & Định danh sản phẩm (Hỗ trợ HTML):</label>
                <div className="flex items-center gap-1 text-[11px]">
                  <button
                    type="button"
                    onClick={() => insertSnippet(prod2TitleRef, '<strong>', '</strong>', (fn) => setProduct2({ ...product2, title: fn(product2.title) }))}
                    className="px-1.5 py-0.5 bg-white hover:bg-slate-200 rounded text-slate-700 font-bold border border-slate-200"
                    title="In đậm"
                  >
                    Đậm
                  </button>
                  <button
                    type="button"
                    onClick={() => insertSnippet(prod2TitleRef, '<span class="text-blue-600 font-bold">', '</span>', (fn) => setProduct2({ ...product2, title: fn(product2.title) }))}
                    className="px-1.5 py-0.5 bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold rounded border border-blue-200"
                    title="Xanh dương"
                  >
                    Xanh
                  </button>
                  <button
                    type="button"
                    onClick={() => insertSnippet(prod2TitleRef, '<span class="text-[#C43838] font-bold">', '</span>', (fn) => setProduct2({ ...product2, title: fn(product2.title) }))}
                    className="px-1.5 py-0.5 bg-red-50 hover:bg-red-100 text-[#C43838] font-bold rounded border border-red-200"
                    title="Đỏ Shofu"
                  >
                    Đỏ
                  </button>
                </div>
              </div>
              <textarea
                ref={prod2TitleRef}
                rows={2}
                value={product2.title}
                onChange={(e) => setProduct2({ ...product2, title: e.target.value })}
                className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm font-bold text-slate-900 font-mono bg-white"
              />
              <div className="flex flex-wrap gap-1 mt-1 text-[10.5px]">
                <button
                  type="button"
                  onClick={() => setProduct2({ ...product2, title: product2.title + ' <span class="text-blue-600 font-bold">Zero Etching</span>' })}
                  className="px-1.5 py-0.5 bg-white hover:bg-blue-50 text-slate-600 border border-slate-200 rounded"
                >
                  + Chữ xanh: <code>&lt;span class=&quot;text-blue-600 font-bold&quot;&gt;...&lt;/span&gt;</code>
                </button>
              </div>
            </div>

            {/* Description with HTML */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                <label className="block text-xs font-semibold text-slate-700">Mô tả tổng quan (Hỗ trợ HTML):</label>
                <div className="flex items-center gap-1 text-[11px]">
                  <button
                    type="button"
                    onClick={() => insertSnippet(prod2DescRef, '<strong>', '</strong>', (fn) => setProduct2({ ...product2, description: fn(product2.description) }))}
                    className="px-1.5 py-0.5 bg-white hover:bg-slate-200 rounded text-slate-700 font-bold border border-slate-200"
                    title="In đậm"
                  >
                    Đậm
                  </button>
                  <button
                    type="button"
                    onClick={() => insertSnippet(prod2DescRef, '<span class="text-blue-600 font-bold">', '</span>', (fn) => setProduct2({ ...product2, description: fn(product2.description) }))}
                    className="px-1.5 py-0.5 bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold rounded border border-blue-200"
                    title="Xanh dương"
                  >
                    Xanh
                  </button>
                  <button
                    type="button"
                    onClick={() => insertSnippet(prod2DescRef, '<br/><br/>', '', (fn) => setProduct2({ ...product2, description: fn(product2.description) }))}
                    className="px-1.5 py-0.5 bg-white hover:bg-slate-200 rounded text-slate-600 font-mono border border-slate-200"
                    title="Ngắt đoạn"
                  >
                    &lt;br/&gt;
                  </button>
                </div>
              </div>
              <textarea
                ref={prod2DescRef}
                rows={4}
                value={product2.description}
                onChange={(e) => setProduct2({ ...product2, description: e.target.value })}
                className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs text-slate-700 font-mono leading-relaxed bg-white"
              />
              <div className="flex flex-wrap gap-1 mt-1 text-[10.5px]">
                <button
                  type="button"
                  onClick={() => setProduct2({ ...product2, description: product2.description + ' <strong>tối ưu hóa Chair-time</strong>' })}
                  className="px-1.5 py-0.5 bg-white hover:bg-slate-100 text-slate-600 border border-slate-200 rounded"
                >
                  + In đậm
                </button>
                <button
                  type="button"
                  onClick={() => setProduct2({ ...product2, description: product2.description + ' <span class="text-blue-600 font-bold">không cần Acid Etching</span>' })}
                  className="px-1.5 py-0.5 bg-white hover:bg-blue-50 text-slate-600 border border-slate-200 rounded"
                >
                  + Nhấn mạnh xanh
                </button>
              </div>
            </div>
          </div>

          {/* Product 2 Image */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Ảnh sản phẩm BeautiSealant</label>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col gap-3">
              <div className="h-40 flex items-center justify-center p-2 bg-white rounded-xl border border-slate-200/70">
                <img src={product2.image} alt="BeautiSealant" className="max-h-full max-w-full object-contain" />
              </div>
              <input
                type="text"
                value={product2.image}
                onChange={(e) => setProduct2({ ...product2, image: e.target.value })}
                className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-mono text-slate-800"
              />
              <label className="inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold cursor-pointer transition-colors shadow-2xs">
                <Upload className="w-3.5 h-3.5" />
                <span>{isUploadingImage && uploadingTarget === 'prod2_img' ? 'Đang tải...' : 'Tải ảnh mới từ máy'}</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      onUploadImage(file, 'prod2_img', (newUrl) => setProduct2({ ...product2, image: newUrl }));
                    }
                  }}
                />
              </label>
            </div>
          </div>
        </div>

        {/* 3 Feature items of BeautiSealant with HTML */}
        <div className="pt-4 border-t border-slate-100 space-y-3">
          <div className="flex items-center justify-between">
            <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider font-bold">
              3 Tính năng cốt lõi của BeautiSealant (Hỗ trợ HTML)
            </label>
            <span className="text-[11px] text-slate-400 font-mono">3 Thẻ tính năng</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {product2.features.map((feat, idx) => (
              <div key={idx} className="p-3.5 rounded-xl border border-blue-200 bg-blue-50/30 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold text-blue-700">Tính năng {idx + 1}</span>
                  <div className="flex items-center gap-1 text-[10px]">
                    <button
                      type="button"
                      onClick={() => insertSnippetIntoFeature(2, idx, 'title', '<strong>', '</strong>')}
                      className="px-1 py-0.2 bg-white border border-slate-200 rounded font-bold"
                    >
                      B
                    </button>
                    <button
                      type="button"
                      onClick={() => insertSnippetIntoFeature(2, idx, 'title', '<span class="text-blue-600 font-bold">', '</span>')}
                      className="px-1 py-0.2 bg-white text-blue-600 border border-slate-200 rounded font-bold"
                    >
                      Xanh
                    </button>
                  </div>
                </div>

                <input
                  type="text"
                  id={`prod2-feat-title-${idx}`}
                  value={feat.title}
                  onChange={(e) => {
                    const next = [...product2.features];
                    next[idx].title = e.target.value;
                    setProduct2({ ...product2, features: next });
                  }}
                  className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-900 font-mono"
                  placeholder="Tên tính năng..."
                />

                <textarea
                  id={`prod2-feat-description-${idx}`}
                  rows={3}
                  value={feat.description}
                  onChange={(e) => {
                    const next = [...product2.features];
                    next[idx].description = e.target.value;
                    setProduct2({ ...product2, features: next });
                  }}
                  className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-700 font-mono leading-relaxed"
                  placeholder="Mô tả..."
                />
              </div>
            ))}
          </div>
        </div>

        {/* Live Preview for Product 2 */}
        <div className="pt-4 border-t border-slate-100">
          <div className="flex items-center gap-2 mb-3">
            <Eye className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800">
              Xem trước thực tế Sản phẩm 2: BeautiSealant (Live Preview):
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="w-full lg:w-1/2 flex flex-col gap-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-bold text-xs tracking-wide w-fit border border-blue-200">
                  {product2.tag || 'Trám bít hố rãnh'}
                </div>
                <h3 
                  className="font-heading font-bold text-2xl text-slate-900 leading-tight"
                  dangerouslySetInnerHTML={{ __html: product2.title || '<span class="text-slate-400 italic">Tên sản phẩm...</span>' }}
                />
                <p 
                  className="font-body text-slate-600 text-sm sm:text-base leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: product2.description || '<span class="text-slate-400 italic">Mô tả sản phẩm...</span>' }}
                />
              </div>
              <div className="w-full lg:w-1/2 flex items-center justify-center p-4 bg-slate-50 rounded-2xl">
                {product2.image ? (
                  <img src={product2.image} alt={product2.title} className="max-h-[220px] w-auto object-contain drop-shadow-lg" />
                ) : (
                  <span className="text-xs text-slate-400">Chưa có ảnh</span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {product2.features.map((feat, idx) => (
                <div key={idx} className="flex gap-2.5 items-start p-3.5 rounded-xl bg-blue-50/50 border border-blue-100">
                  <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                  <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <strong 
                      className="text-slate-900 font-bold mr-1"
                      dangerouslySetInnerHTML={{ __html: feat.title.endsWith(':') ? feat.title : `${feat.title}:` }}
                    />
                    <span dangerouslySetInnerHTML={{ __html: feat.description }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4. CTA & Form with default redirectThanks=false */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="pb-4 border-b border-slate-100">
          <h3 className="text-lg font-heading font-extrabold text-slate-900">
            4.4. Cấu hình Nút CTA & Form Nhận báo giá
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Tùy biến chữ nút bấm Section 4 và liên kết Form Popup / Trang Cảm Ơn (/thanks)
          </p>
        </div>

        <div>
          <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-bold">
            Chữ trên nút CTA Section 4
          </label>
          <input
            type="text"
            value={ctaText}
            onChange={(e) => setCtaText(e.target.value)}
            placeholder="NHẬN BÁO GIÁ VÀ TƯ VẤN SẢN PHẨM"
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-bold text-slate-900 focus:outline-none focus:border-emerald-600 bg-white"
          />
        </div>

        <CtaFormConfigEditor
          label="CTA & Form Section 4"
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

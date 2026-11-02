import React from 'react';
import { Package, Upload, Bold, CheckCircle, Plus, Trash2 } from 'lucide-react';
import { PreventiveProductItem, applyFormat } from './types';
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
              1. PRG Barrier Coat (Màng phủ chống ê buốt) & 2. BeautiSealant (Trám bít hố rãnh)
            </p>
          </div>
        </div>

        <div>
          <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-bold">
            Tiêu đề Section H2
          </label>
          <input
            type="text"
            value={headline}
            onChange={(e) => setHeadline(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-bold text-slate-900 focus:outline-none focus:border-emerald-600"
          />
        </div>
      </div>

      {/* 2. Product 1: PRG Barrier Coat */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <h3 className="text-lg font-heading font-extrabold text-slate-900">
              Sản phẩm 1: PRG Barrier Coat
            </h3>
          </div>
          <span className="text-xs font-mono px-2.5 py-1 bg-red-50 text-red-600 rounded-lg font-bold">
            Màng phủ sinh học
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Badge Tag</label>
              <input
                type="text"
                value={product1.tag}
                onChange={(e) => setProduct1({ ...product1, tag: e.target.value })}
                className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs font-medium text-slate-900"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Tên & Định danh sản phẩm</label>
              <input
                type="text"
                value={product1.title}
                onChange={(e) => setProduct1({ ...product1, title: e.target.value })}
                className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm font-bold text-slate-900"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Mô tả tổng quan</label>
              <textarea
                rows={3}
                value={product1.description}
                onChange={(e) => setProduct1({ ...product1, description: e.target.value })}
                className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs text-slate-700"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Ảnh sản phẩm</label>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex flex-col gap-3">
              <div className="h-36 flex items-center justify-center">
                <img src={product1.image} alt="PRG" className="max-h-full max-w-full object-contain" />
              </div>
              <input
                type="text"
                value={product1.image}
                onChange={(e) => setProduct1({ ...product1, image: e.target.value })}
                className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-mono"
              />
              <label className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold cursor-pointer transition-colors">
                <Upload className="w-3.5 h-3.5" />
                <span>{isUploadingImage && uploadingTarget === 'prod1_img' ? 'Đang tải...' : 'Tải ảnh mới'}</span>
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

        {/* 4 Feature items */}
        <div className="pt-4 border-t border-slate-100">
          <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-3 font-bold">
            4 Tính năng ưu việt của PRG Barrier Coat
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {product1.features.map((feat, idx) => (
              <div key={idx} className="p-3.5 rounded-xl border border-red-100 bg-red-50/40 space-y-2">
                <input
                  type="text"
                  value={feat.title}
                  onChange={(e) => {
                    const next = [...product1.features];
                    next[idx].title = e.target.value;
                    setProduct1({ ...product1, features: next });
                  }}
                  className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-900"
                  placeholder="Tên tính năng..."
                />
                <textarea
                  rows={3}
                  value={feat.description}
                  onChange={(e) => {
                    const next = [...product1.features];
                    next[idx].description = e.target.value;
                    setProduct1({ ...product1, features: next });
                  }}
                  className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-700"
                  placeholder="Mô tả tính năng..."
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Product 2: BeautiSealant */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-500"></span>
            <h3 className="text-lg font-heading font-extrabold text-slate-900">
              Sản phẩm 2: BeautiSealant
            </h3>
          </div>
          <span className="text-xs font-mono px-2.5 py-1 bg-blue-50 text-blue-600 rounded-lg font-bold">
            Trám bít hố rãnh
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Badge Tag</label>
              <input
                type="text"
                value={product2.tag}
                onChange={(e) => setProduct2({ ...product2, tag: e.target.value })}
                className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs font-medium text-slate-900"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Tên sản phẩm</label>
              <input
                type="text"
                value={product2.title}
                onChange={(e) => setProduct2({ ...product2, title: e.target.value })}
                className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm font-bold text-slate-900"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Mô tả tổng quan</label>
              <textarea
                rows={3}
                value={product2.description}
                onChange={(e) => setProduct2({ ...product2, description: e.target.value })}
                className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs text-slate-700"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Ảnh sản phẩm</label>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex flex-col gap-3">
              <div className="h-36 flex items-center justify-center">
                <img src={product2.image} alt="BeautiSealant" className="max-h-full max-w-full object-contain" />
              </div>
              <input
                type="text"
                value={product2.image}
                onChange={(e) => setProduct2({ ...product2, image: e.target.value })}
                className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-mono"
              />
              <label className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold cursor-pointer transition-colors">
                <Upload className="w-3.5 h-3.5" />
                <span>{isUploadingImage && uploadingTarget === 'prod2_img' ? 'Đang tải...' : 'Tải ảnh mới'}</span>
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

        {/* 3 Features */}
        <div className="pt-4 border-t border-slate-100">
          <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-3 font-bold">
            3 Tính năng cốt lõi của BeautiSealant
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {product2.features.map((feat, idx) => (
              <div key={idx} className="p-3.5 rounded-xl border border-blue-100 bg-blue-50/40 space-y-2">
                <input
                  type="text"
                  value={feat.title}
                  onChange={(e) => {
                    const next = [...product2.features];
                    next[idx].title = e.target.value;
                    setProduct2({ ...product2, features: next });
                  }}
                  className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-900"
                  placeholder="Tên tính năng..."
                />
                <textarea
                  rows={3}
                  value={feat.description}
                  onChange={(e) => {
                    const next = [...product2.features];
                    next[idx].description = e.target.value;
                    setProduct2({ ...product2, features: next });
                  }}
                  className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-700"
                  placeholder="Mô tả..."
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. CTA & Form */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="pb-4 border-b border-slate-100">
          <h3 className="text-lg font-heading font-extrabold text-slate-900">
            4.4. Cấu hình Nút CTA & Form Nhận báo giá
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
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-bold text-slate-900 focus:outline-none focus:border-emerald-600"
          />
        </div>

        <CtaFormConfigEditor
          title={formTitle}
          setTitle={setFormTitle}
          description={formDesc}
          setDescription={setFormDesc}
          extraHtml={formExtraHtml}
          setExtraHtml={setFormExtraHtml}
          redirectThanks={redirectThanks}
          setRedirectThanks={setRedirectThanks}
          targetUrl={targetUrl}
          setTargetUrl={setTargetUrl}
          resourceTitle={resourceTitle}
          setResourceTitle={setResourceTitle}
        />
      </div>
    </div>
  );
};

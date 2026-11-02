import React from 'react';
import { AlertTriangle, Upload, Bold } from 'lucide-react';
import { PainPointItem, applyFormat } from './types';
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
  const handleItemChange = (id: string, field: 'title' | 'description', val: string) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: val } : item))
    );
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
          {/* Badge */}
          <div>
            <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-bold">
              2.1. Badge nhãn
            </label>
            <input
              type="text"
              value={badge}
              onChange={(e) => setBadge(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-900 focus:outline-none focus:border-emerald-600"
            />
          </div>

          {/* Headline */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider font-bold">
                2.2. Tiêu đề H2
              </label>
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <button
                  type="button"
                  onClick={() => applyFormat('strong', setHeadline)}
                  className="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 rounded text-slate-700 font-bold"
                >
                  <Bold className="w-3 h-3" />
                </button>
                <button
                  type="button"
                  onClick={() => applyFormat('red', setHeadline)}
                  className="px-2 py-0.5 bg-red-100 hover:bg-red-200 rounded text-red-600 font-bold text-[11px]"
                >
                  Đỏ Shofu
                </button>
              </div>
            </div>
            <textarea
              rows={2}
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-semibold text-slate-900 focus:outline-none focus:border-emerald-600"
            />
          </div>

          {/* Description */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider font-bold">
                2.3. Đoạn mô tả dẫn dắt
              </label>
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <button
                  type="button"
                  onClick={() => applyFormat('strong', setDescription)}
                  className="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 rounded text-slate-700 font-bold"
                >
                  <Bold className="w-3 h-3" />
                </button>
              </div>
            </div>
            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-emerald-600"
            />
          </div>
        </div>
      </div>

      {/* 2. 3 Pain Point Cards */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="pb-4 border-b border-slate-100">
          <h3 className="text-lg font-heading font-extrabold text-slate-900">
            2.4. 3 Thẻ điểm mù lâm sàng
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            1. Ám ảnh ê buốt tái phát | 2. Rào cản kỹ thuật trám bít hố rãnh | 3. Nguy cơ sâu răng cao
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div key={item.id || idx} className="p-5 rounded-2xl border border-slate-200 bg-slate-50 space-y-4">
              <span className="inline-block px-2.5 py-1 rounded-md bg-amber-100 text-amber-800 text-xs font-mono font-bold">
                Điểm mù #{idx + 1}
              </span>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Tiêu đề</label>
                <textarea
                  rows={2}
                  value={item.title}
                  onChange={(e) => handleItemChange(item.id, 'title', e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-emerald-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Mô tả chi tiết</label>
                <textarea
                  rows={5}
                  value={item.description}
                  onChange={(e) => handleItemChange(item.id, 'description', e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-700 leading-relaxed focus:outline-none focus:border-emerald-600"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Callout & Image */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="pb-4 border-b border-slate-100">
          <h3 className="text-lg font-heading font-extrabold text-slate-900">
            2.5. Hình ảnh minh họa & Thông điệp cảnh báo
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Banner "quả bom nổ chậm" dưới nướu khi dùng vật liệu thụ động
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {/* Callout */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider font-bold">
                Đoạn Callout cảnh báo
              </label>
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <button
                  type="button"
                  onClick={() => applyFormat('strong', setCalloutText)}
                  className="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 rounded text-slate-700 font-bold"
                >
                  <Bold className="w-3 h-3" />
                </button>
                <button
                  type="button"
                  onClick={() => applyFormat('red', setCalloutText)}
                  className="px-2 py-0.5 bg-red-100 hover:bg-red-200 rounded text-red-600 font-bold text-[11px]"
                >
                  Đỏ Shofu
                </button>
              </div>
            </div>
            <textarea
              rows={3}
              value={calloutText}
              onChange={(e) => setCalloutText(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-emerald-600 leading-relaxed"
            />
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
      </div>

      {/* 4. CTA & Form */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="pb-4 border-b border-slate-100">
          <h3 className="text-lg font-heading font-extrabold text-slate-900">
            2.6. Cấu hình Nút bấm CTA & Form
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

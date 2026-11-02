import React from 'react';
import { Zap, Upload, Bold } from 'lucide-react';
import { IonItem, applyFormat } from './types';
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
  const handleIonChange = (id: string, field: 'ionName' | 'description', val: string) => {
    setIons((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: val } : item))
    );
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
              Từ phục hình thụ động sang trị liệu sinh học chủ động
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {/* Badge */}
          <div>
            <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-bold">
              3.1. Badge nhãn
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
                3.2. Tiêu đề H2
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
            <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-bold">
              3.3. Mô tả dẫn nhập
            </label>
            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-emerald-600"
            />
          </div>

          {/* S-PRG Title & Description */}
          <div className="grid grid-cols-1 gap-4 pt-2 border-t border-slate-100">
            <div>
              <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-bold">
                3.4. Tiêu đề khối S-PRG (Giomer)
              </label>
              <input
                type="text"
                value={sPrgTitle}
                onChange={(e) => setSPrgTitle(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-bold text-slate-900 focus:outline-none focus:border-emerald-600"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-bold">
                Mô tả cơ chế bình ắc quy sinh học S-PRG
              </label>
              <textarea
                rows={3}
                value={sPrgDesc}
                onChange={(e) => setSPrgDesc(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-emerald-600"
              />
            </div>
          </div>

          {/* S-PRG Image */}
          <div>
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

      {/* 2. 4 Ion Cards */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="pb-4 border-b border-slate-100">
          <h3 className="text-lg font-heading font-extrabold text-slate-900">
            3.6. 4 Nhóm Ion phát tán từ hạt độn S-PRG
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            F⁻ & Sr²⁺ (Tái khoáng), Na⁺ & SiO₃²⁻ (Phục hồi ngà), BO₃³⁻ (Kháng khuẩn), Al³⁺ (Trung hòa axit)
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ions.map((ion, idx) => (
            <div key={ion.id || idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
              <span className="text-xs font-mono font-bold text-slate-500">Khối Ion {idx + 1}</span>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Ký hiệu hóa học</label>
                <input
                  type="text"
                  value={ion.ionName}
                  onChange={(e) => handleIonChange(ion.id, 'ionName', e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-900"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Cơ chế tác động</label>
                <textarea
                  rows={3}
                  value={ion.description}
                  onChange={(e) => handleIonChange(ion.id, 'description', e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs text-slate-700"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. CTA & Form */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="pb-4 border-b border-slate-100">
          <h3 className="text-lg font-heading font-extrabold text-slate-900">
            3.7. Cấu hình Nút bấm & Form CTA
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

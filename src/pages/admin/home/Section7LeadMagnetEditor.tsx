import React, { useState } from 'react';
import { 
  Download, 
  Bold, 
  Eye, 
  Plus, 
  Trash2, 
  CheckCircle2, 
  FileText 
} from 'lucide-react';
import { applyFormat } from './types';
import { CtaFormConfigEditor } from '../components/CtaFormConfigEditor';
import { ImageUploaderField } from '../components/ImageUploaderField';

interface Section7LeadMagnetEditorProps {
  badge: string;
  setBadge: (val: string) => void;
  headline: string;
  setHeadline: (val: string) => void;
  subheadline: string;
  setSubheadline: (val: string) => void;
  coverImage: string;
  setCoverImage: (val: string) => void;
  benefits: string[];
  setBenefits: React.Dispatch<React.SetStateAction<string[]>>;
  ctaButtonText: string;
  setCtaButtonText: (val: string) => void;
  ctaFormTitle: string;
  setCtaFormTitle: (val: string) => void;
  ctaFormDesc: string;
  setCtaFormDesc: (val: string) => void;
  ctaFormExtraHtml: string;
  setCtaFormExtraHtml: (val: string) => void;
  ctaRedirectThanks: boolean;
  setCtaRedirectThanks: (val: boolean) => void;
  ctaTargetUrl: string;
  setCtaTargetUrl: (val: string) => void;
  ctaResourceTitle: string;
  setCtaResourceTitle: (val: string) => void;
}

export const Section7LeadMagnetEditor: React.FC<Section7LeadMagnetEditorProps> = ({
  badge,
  setBadge,
  headline,
  setHeadline,
  subheadline,
  setSubheadline,
  coverImage,
  setCoverImage,
  benefits,
  setBenefits,
  ctaButtonText,
  setCtaButtonText,
  ctaFormTitle,
  setCtaFormTitle,
  ctaFormDesc,
  setCtaFormDesc,
  ctaFormExtraHtml,
  setCtaFormExtraHtml,
  ctaRedirectThanks,
  setCtaRedirectThanks,
  ctaTargetUrl,
  setCtaTargetUrl,
  ctaResourceTitle,
  setCtaResourceTitle,
}) => {
  const [showLivePreview, setShowLivePreview] = useState(true);

  const handleUpdateBenefit = (idx: number, val: string) => {
    setBenefits(prev => prev.map((b, i) => i === idx ? val : b));
  };

  const handleAddBenefit = () => {
    setBenefits(prev => [...prev, 'Lợi ích tài liệu mới bổ sung...']);
  };

  const handleDeleteBenefit = (idx: number) => {
    setBenefits(prev => prev.filter((_, i) => i !== idx));
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header section info */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm">
        <div className="flex items-center justify-between gap-4 mb-2">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-red-100 text-[#8C2828] font-bold flex items-center justify-center text-xs font-mono">
              07
            </span>
            <h3 className="font-heading font-extrabold text-xl text-slate-900">
              Khu Vực Nhận Tài Liệu & Form Đăng Ký (Lead Magnet)
            </h3>
          </div>
          <button
            type="button"
            onClick={() => setShowLivePreview(!showLivePreview)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00ADEF] bg-sky-50 hover:bg-sky-100 border border-sky-200 px-3 py-1.5 rounded-xl transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{showLivePreview ? 'Ẩn Preview' : 'Xem Live Preview'}</span>
          </button>
        </div>
        <p className="text-xs text-slate-500">
          Tùy biến tài liệu lâm sàng độc quyền, 4 điểm lợi ích của cẩm nang và cấu hình form nhận / link tải tài liệu.
        </p>
      </div>

      {/* 1. Badge, Headline & Subheadline */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Huy hiệu trên cùng (Badge)
          </label>
          <input
            type="text"
            value={badge}
            onChange={(e) => setBadge(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:border-[#00ADEF] outline-none"
            placeholder="TÀI LIỆU ĐỘC QUYỀN MIỄN PHÍ"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Tiêu đề Cẩm nang lâm sàng
          </label>
          <input
            type="text"
            value={headline}
            onChange={(e) => setHeadline(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-bold text-slate-900 focus:border-[#00ADEF] outline-none"
            placeholder="CẨM NANG LÂM SÀNG: PHỤC HỒI & PHÒNG NGỪA SHOFU"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Mô tả tóm tắt nội dung
          </label>
          <textarea
            rows={2}
            value={subheadline}
            onChange={(e) => setSubheadline(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:border-[#00ADEF] outline-none leading-relaxed"
          />
        </div>

        <div>
          <ImageUploaderField
            label="Ảnh Bìa / Mockup Tài Liệu E-book"
            badge="Lead Magnet Cover"
            value={coverImage}
            onChange={setCoverImage}
            targetKey="leadmagnet-cover"
            folder="images"
            aspectRatio="h-36"
            recommendation="Ảnh mockup sách E-book, cẩm nang lâm sàng hoặc video protocol"
          />
        </div>
      </div>

      {/* 2. 4 Benefits List */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="font-heading font-bold text-slate-900 text-sm uppercase tracking-wider flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Các điểm giá trị nổi bật của Cẩm nang ({benefits.length})</span>
          </h4>
          <button
            type="button"
            onClick={handleAddBenefit}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-3 py-1.5 rounded-xl transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Thêm ý</span>
          </button>
        </div>

        <div className="space-y-3">
          {benefits.map((b, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="w-6 text-xs font-mono font-bold text-slate-400 text-center">
                0{idx + 1}
              </span>
              <input
                type="text"
                value={b}
                onChange={(e) => handleUpdateBenefit(idx, e.target.value)}
                className="flex-1 px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 focus:border-[#00ADEF] outline-none"
              />
              <button
                type="button"
                onClick={() => handleDeleteBenefit(idx)}
                className="p-2 text-slate-400 hover:text-red-600 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 3. CTA Form & Thanks Page Config */}
      <CtaFormConfigEditor
        label="Nút Đăng Ký Nhận Tài Liệu & Điều Hướng Trang Cảm Ơn"
        ctaText={ctaButtonText}
        onChangeCtaText={setCtaButtonText}
        formTitle={ctaFormTitle}
        onChangeFormTitle={setCtaFormTitle}
        formDesc={ctaFormDesc}
        onChangeFormDesc={setCtaFormDesc}
        formExtraHtml={ctaFormExtraHtml}
        onChangeFormExtraHtml={setCtaFormExtraHtml}
        redirectThanks={ctaRedirectThanks}
        onChangeRedirectThanks={setCtaRedirectThanks}
        targetUrl={ctaTargetUrl}
        onChangeTargetUrl={setCtaTargetUrl}
        resourceTitle={ctaResourceTitle}
        onChangeResourceTitle={setCtaResourceTitle}
      />

      {/* Live Preview for Lead Magnet */}
      {showLivePreview && (
        <div className="bg-slate-100 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
            Xem trước Khối Nhận Tài Liệu Độc Quyền (Lead Magnet):
          </span>
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-[#C43838] border border-red-100 text-xs font-bold">
                <FileText className="w-3.5 h-3.5" />
                <span>{badge || 'Tài Liệu Độc Quyền'}</span>
              </div>
              <h4 
                className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 leading-snug"
                dangerouslySetInnerHTML={{ __html: headline || 'Tiêu đề tài liệu' }}
              />
              <p 
                className="text-xs sm:text-sm text-slate-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: subheadline || 'Mô tả tài liệu' }}
              />
              <ul className="space-y-2 text-xs text-slate-700">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00ADEF] shrink-0" />
                    <span dangerouslySetInnerHTML={{ __html: b }} />
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full md:w-80 shrink-0 bg-slate-50 p-5 rounded-2xl border border-slate-200 text-center space-y-3">
              {coverImage && (
                <div className="h-32 rounded-xl bg-white flex items-center justify-center p-2 border border-slate-200 mb-2 overflow-hidden">
                  <img src={coverImage} alt="Ebook preview" className="max-h-full object-contain" />
                </div>
              )}
              <div className="space-y-2 text-left">
                <div className="h-8 bg-white rounded-lg border border-slate-200 px-3 flex items-center text-xs text-slate-400">
                  BS. Nguyễn Văn A
                </div>
                <div className="h-8 bg-white rounded-lg border border-slate-200 px-3 flex items-center text-xs text-slate-400">
                  0967 287 139
                </div>
                <div className="h-8 bg-white rounded-lg border border-slate-200 px-3 flex items-center text-xs text-slate-400">
                  bacsi@nhakhoa.com
                </div>
              </div>
              <button
                type="button"
                className="w-full py-2.5 bg-[#00ADEF] text-white rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{ctaButtonText || 'Nhận Tài Liệu Ngay'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

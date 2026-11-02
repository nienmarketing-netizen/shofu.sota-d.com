import React from 'react';
import { Gift, Upload, CheckCircle, Plus, Trash2 } from 'lucide-react';
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
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* 1. Header Box */}
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
              Cấu hình combo sản phẩm, quà tặng, bảng giá và chính sách hoàn tiền 100%
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-bold">
              6.1. Badge ưu đãi
            </label>
            <input
              type="text"
              value={badge}
              onChange={(e) => setBadge(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-900 focus:outline-none focus:border-emerald-600"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-bold">
              6.2. Tiêu đề gói ưu đãi H2
            </label>
            <textarea
              rows={2}
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-bold text-slate-900 focus:outline-none focus:border-emerald-600"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-bold">
              6.3. Tiêu đề phụ (Số suất giới hạn)
            </label>
            <input
              type="text"
              value={subheadline}
              onChange={(e) => setSubheadline(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-700"
            />
          </div>
        </div>
      </div>

      {/* 2. Combo & Gifts 2 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Core Products Box */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm space-y-4">
          <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
            <h3 className="font-heading font-bold text-slate-900 text-base">
              Hộp 1: Bộ sản phẩm cốt lõi
            </h3>
            <span className="text-xs font-mono font-bold text-red-600">Core</span>
          </div>

          <div>
            <label className="block text-xs text-slate-600 font-semibold mb-1">Tiêu đề hộp</label>
            <input
              type="text"
              value={coreBox.title}
              onChange={(e) => setCoreBox({ ...coreBox, title: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs font-bold"
            />
          </div>

          <div>
            <label className="block text-xs text-slate-600 font-semibold mb-1">Ảnh combo cốt lõi</label>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex flex-col gap-2">
              <div className="h-28 flex items-center justify-center">
                <img src={coreBox.image} alt="Core" className="max-h-full max-w-full object-contain" />
              </div>
              <input
                type="text"
                value={coreBox.image}
                onChange={(e) => setCoreBox({ ...coreBox, image: e.target.value })}
                className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-mono"
              />
              <label className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold cursor-pointer">
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

          <div className="space-y-2">
            <label className="block text-xs text-slate-600 font-semibold">Danh sách vật phẩm:</label>
            {coreBox.items.map((it, idx) => (
              <textarea
                key={idx}
                rows={2}
                value={it}
                onChange={(e) => {
                  const next = [...coreBox.items];
                  next[idx] = e.target.value;
                  setCoreBox({ ...coreBox, items: next });
                }}
                className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs text-slate-800"
              />
            ))}
          </div>
        </div>

        {/* Gift Box */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm space-y-4">
          <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
            <h3 className="font-heading font-bold text-slate-900 text-base">
              Hộp 2: Bộ quà tặng tài trợ 100%
            </h3>
            <span className="text-xs font-mono font-bold text-amber-600">Gift</span>
          </div>

          <div>
            <label className="block text-xs text-slate-600 font-semibold mb-1">Tiêu đề hộp quà</label>
            <input
              type="text"
              value={giftBox.title}
              onChange={(e) => setGiftBox({ ...giftBox, title: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs font-bold"
            />
          </div>

          <div>
            <label className="block text-xs text-slate-600 font-semibold mb-1">Ảnh bộ quà tặng</label>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex flex-col gap-2">
              <div className="h-28 flex items-center justify-center">
                <img src={giftBox.image} alt="Gifts" className="max-h-full max-w-full object-contain" />
              </div>
              <input
                type="text"
                value={giftBox.image}
                onChange={(e) => setGiftBox({ ...giftBox, image: e.target.value })}
                className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-mono"
              />
              <label className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold cursor-pointer">
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

          <div className="space-y-2">
            <label className="block text-xs text-slate-600 font-semibold">Danh sách quà tặng:</label>
            {giftBox.items.map((it, idx) => (
              <textarea
                key={idx}
                rows={2}
                value={it}
                onChange={(e) => {
                  const next = [...giftBox.items];
                  next[idx] = e.target.value;
                  setGiftBox({ ...giftBox, items: next });
                }}
                className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs text-slate-800"
              />
            ))}
          </div>
        </div>
      </div>

      {/* 3. Pricing & Guarantee */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="pb-4 border-b border-slate-100">
          <h3 className="text-lg font-heading font-extrabold text-slate-900">
            6.4. Bảng giá & Cam kết hoàn tiền
          </h3>
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
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-base font-bold text-slate-500 line-through"
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
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-base font-extrabold text-red-600"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-bold">
            Câu cam kết hoàn tiền (Guarantee)
          </label>
          <input
            type="text"
            value={guaranteeText}
            onChange={(e) => setGuaranteeText(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-emerald-700"
          />
        </div>
      </div>

      {/* 4. CTA & Form */}
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
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-bold text-slate-900 focus:outline-none focus:border-emerald-600"
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

import React from 'react';
import { Upload, RefreshCw } from 'lucide-react';

interface Section5OfferEditorProps {
  offerBadge: string;
  setOfferBadge: React.Dispatch<React.SetStateAction<string>>;
  offerHeadline: string;
  setOfferHeadline: React.Dispatch<React.SetStateAction<string>>;
  coreProductImage: string;
  setCoreProductImage: React.Dispatch<React.SetStateAction<string>>;
  giftImage: string;
  setGiftImage: React.Dispatch<React.SetStateAction<string>>;
  uploadingTarget: string;
  handleUploadImageFile: (file: File, targetKey: string, onSuccess: (url: string) => void) => void;
}

export const Section5OfferEditor: React.FC<Section5OfferEditorProps> = ({
  offerBadge,
  setOfferBadge,
  offerHeadline,
  setOfferHeadline,
  coreProductImage,
  setCoreProductImage,
  giftImage,
  setGiftImage,
  uploadingTarget,
  handleUploadImageFile
}) => {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-9 shadow-sm space-y-6 animate-fadeIn">
      <div className="border-b border-slate-100 pb-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 font-mono text-xs font-bold mb-2">
          Section 5
        </div>
        <h2 className="font-heading font-extrabold text-2xl text-slate-900">
          Đặc quyền đồng hành & Combo ưu đãi
        </h2>
      </div>

      <div className="space-y-2">
        <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
          Huy hiệu gói ưu đãi
        </label>
        <input
          type="text"
          value={offerBadge}
          onChange={(e) => setOfferBadge(e.target.value)}
          className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm text-slate-900 font-medium"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
          Tiêu đề gói combo
        </label>
        <input
          type="text"
          value={offerHeadline}
          onChange={(e) => setOfferHeadline(e.target.value)}
          className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-bold text-slate-900"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs font-bold text-slate-800 uppercase block">Ảnh Bộ 3 sản phẩm cốt lõi</span>
            <label className="text-[10px] font-mono text-[#00ADEF] hover:underline cursor-pointer flex items-center gap-1 font-bold">
              {uploadingTarget === 'offer-core' ? (
                <>
                  <RefreshCw className="w-2.5 h-2.5 animate-spin" />
                  <span>Đang tải lên...</span>
                </>
              ) : (
                <>
                  <Upload className="w-2.5 h-2.5" />
                  <span>Tải ảnh từ máy</span>
                </>
              )}
              <input
                type="file"
                accept="image/*"
                disabled={uploadingTarget === 'offer-core'}
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    handleUploadImageFile(file, 'offer-core', (url) => setCoreProductImage(url));
                  }
                }}
              />
            </label>
          </div>
          <div className="h-32 bg-white rounded-xl border border-slate-200 p-2 flex items-center justify-center">
            <img src={coreProductImage} alt="Core" className="h-full object-contain" />
          </div>
          <input
            type="text"
            value={coreProductImage}
            onChange={(e) => setCoreProductImage(e.target.value)}
            className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-mono"
          />
          <span className="text-[10px] text-slate-500 font-mono">Gợi ý: 1000 × 750 px (Dung lượng dưới 200KB)</span>
        </div>

        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs font-bold text-slate-800 uppercase block">Ảnh Bộ 3 quà tặng tài trợ</span>
            <label className="text-[10px] font-mono text-[#00ADEF] hover:underline cursor-pointer flex items-center gap-1 font-bold">
              {uploadingTarget === 'offer-gift' ? (
                <>
                  <RefreshCw className="w-2.5 h-2.5 animate-spin" />
                  <span>Đang tải lên...</span>
                </>
              ) : (
                <>
                  <Upload className="w-2.5 h-2.5" />
                  <span>Tải ảnh từ máy</span>
                </>
              )}
              <input
                type="file"
                accept="image/*"
                disabled={uploadingTarget === 'offer-gift'}
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    handleUploadImageFile(file, 'offer-gift', (url) => setGiftImage(url));
                  }
                }}
              />
            </label>
          </div>
          <div className="h-32 bg-white rounded-xl border border-slate-200 p-2 flex items-center justify-center">
            <img src={giftImage} alt="Gift" className="h-full object-contain" />
          </div>
          <input
            type="text"
            value={giftImage}
            onChange={(e) => setGiftImage(e.target.value)}
            className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-mono"
          />
          <span className="text-[10px] text-slate-500 font-mono">Gợi ý: 1000 × 750 px (Dung lượng dưới 200KB)</span>
        </div>
      </div>
    </div>
  );
};

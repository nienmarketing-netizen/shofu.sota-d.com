import React from 'react';
import { Upload, RefreshCw, Plus, Trash2, ShieldCheck, Gift, Package, DollarSign, Sparkles } from 'lucide-react';

interface Section5OfferEditorProps {
  // General offer
  offerBadge: string;
  setOfferBadge: React.Dispatch<React.SetStateAction<string>>;
  offerHeadline: string;
  setOfferHeadline: React.Dispatch<React.SetStateAction<string>>;
  offerCtaText: string;
  setOfferCtaText: React.Dispatch<React.SetStateAction<string>>;

  // Box 1: Core products
  coreTitle: string;
  setCoreTitle: React.Dispatch<React.SetStateAction<string>>;
  coreProductImage: string;
  setCoreProductImage: React.Dispatch<React.SetStateAction<string>>;
  coreProductsList: string[];
  handleAddCoreProduct: () => void;
  handleDeleteCoreProduct: (index: number) => void;
  handleUpdateCoreProduct: (index: number, val: string) => void;

  // Box 2: Gifts
  giftsTitle: string;
  setGiftsTitle: React.Dispatch<React.SetStateAction<string>>;
  giftImage: string;
  setGiftImage: React.Dispatch<React.SetStateAction<string>>;
  giftsList: string[];
  handleAddGift: () => void;
  handleDeleteGift: (index: number) => void;
  handleUpdateGift: (index: number, val: string) => void;

  // Pricing Box
  originalPriceLabel: string;
  setOriginalPriceLabel: React.Dispatch<React.SetStateAction<string>>;
  originalPrice: string;
  setOriginalPrice: React.Dispatch<React.SetStateAction<string>>;
  offerPriceLabel: string;
  setOfferPriceLabel: React.Dispatch<React.SetStateAction<string>>;
  offerPrice: string;
  setOfferPrice: React.Dispatch<React.SetStateAction<string>>;

  // Guarantees Box
  guaranteeTitle: string;
  setGuaranteeTitle: React.Dispatch<React.SetStateAction<string>>;
  guaranteesList: string[];
  handleAddGuarantee: () => void;
  handleDeleteGuarantee: (index: number) => void;
  handleUpdateGuarantee: (index: number, val: string) => void;

  // Upload helpers
  uploadingTarget: string;
  handleUploadImageFile: (file: File, targetKey: string, onSuccess: (url: string) => void) => void;
}

export const Section5OfferEditor: React.FC<Section5OfferEditorProps> = ({
  offerBadge,
  setOfferBadge,
  offerHeadline,
  setOfferHeadline,
  offerCtaText,
  setOfferCtaText,

  coreTitle,
  setCoreTitle,
  coreProductImage,
  setCoreProductImage,
  coreProductsList,
  handleAddCoreProduct,
  handleDeleteCoreProduct,
  handleUpdateCoreProduct,

  giftsTitle,
  setGiftsTitle,
  giftImage,
  setGiftImage,
  giftsList,
  handleAddGift,
  handleDeleteGift,
  handleUpdateGift,

  originalPriceLabel,
  setOriginalPriceLabel,
  originalPrice,
  setOriginalPrice,
  offerPriceLabel,
  setOfferPriceLabel,
  offerPrice,
  setOfferPrice,

  guaranteeTitle,
  setGuaranteeTitle,
  guaranteesList,
  handleAddGuarantee,
  handleDeleteGuarantee,
  handleUpdateGuarantee,

  uploadingTarget,
  handleUploadImageFile
}) => {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-9 shadow-sm space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="border-b border-slate-100 pb-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 font-mono text-xs font-bold mb-2">
          Section 5
        </div>
        <h2 className="font-heading font-extrabold text-2xl text-slate-900">
          Đặc quyền đồng hành & Combo ưu đãi
        </h2>
        <p className="text-slate-500 text-sm mt-1">
          Tùy chỉnh toàn diện gói combo: tiêu đề, bộ sản phẩm cốt lõi, quà tặng, bảng giá ưu đãi, chính sách bảo chứng 3 lớp và nút kêu gọi hành động (CTA).
        </p>
      </div>

      {/* 1. THÔNG TIN CHUNG */}
      <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-5">
        <h3 className="font-heading font-bold text-base text-slate-800 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-600" />
          1. Thông tin chung gói ưu đãi
        </h3>

        <div className="space-y-2">
          <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
            Huy hiệu gói ưu đãi (Badge)
          </label>
          <input
            type="text"
            value={offerBadge}
            onChange={(e) => setOfferBadge(e.target.value)}
            placeholder="Ví dụ: Đặc quyền đồng hành không thể từ chối"
            className="w-full bg-white border border-slate-200 rounded-xl p-3 text-sm text-slate-900 font-medium focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
            Tiêu đề gói combo (Hỗ trợ định dạng HTML)
          </label>
          <textarea
            rows={2}
            value={offerHeadline}
            onChange={(e) => setOfferHeadline(e.target.value)}
            placeholder='Gói giải pháp đồng bộ combo "Phục hồi sinh học MiCD - Chặn đứng ê buốt"'
            className="w-full bg-white border border-slate-200 rounded-xl p-3 text-sm font-bold text-slate-900 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
          />
          <div className="text-[11px] text-slate-500 flex items-center gap-2">
            <span>Gợi ý chèn màu vàng kim:</span>
            <code className="bg-slate-200 px-1.5 py-0.5 rounded text-[10px] text-slate-800 select-all">
              {'<span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200">...</span>'}
            </code>
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
            Chữ hiển thị trên Nút Kêu Gọi Hành Động (CTA Button)
          </label>
          <input
            type="text"
            value={offerCtaText}
            onChange={(e) => setOfferCtaText(e.target.value)}
            placeholder="ĐĂNG KÝ NHẬN ƯU ĐÃI NGAY"
            className="w-full bg-white border border-slate-200 rounded-xl p-3 text-sm font-bold text-slate-900 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
          />
        </div>
      </div>

      {/* 2. BỘ SẢN PHẨM CỐT LÕI */}
      <div className="p-6 rounded-2xl bg-amber-50/40 border border-amber-200/80 space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h3 className="font-heading font-bold text-base text-slate-900 flex items-center gap-2">
            <Package className="w-4 h-4 text-amber-600" />
            2. Khối Sản phẩm Cốt lõi (Core Products)
          </h3>
          <span className="text-xs font-mono text-amber-800 bg-amber-100 px-2.5 py-1 rounded-full font-semibold">
            {coreProductsList.length} sản phẩm
          </span>
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
            Tiêu đề khối sản phẩm cốt lõi
          </label>
          <input
            type="text"
            value={coreTitle}
            onChange={(e) => setCoreTitle(e.target.value)}
            placeholder="Bộ 3 sản phẩm cốt lõi"
            className="w-full bg-white border border-slate-200 rounded-xl p-3 text-sm font-bold text-slate-900 focus:border-amber-500 outline-none"
          />
        </div>

        {/* Upload & Image URL */}
        <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs font-bold text-slate-800 uppercase block">
              Hình ảnh Bộ sản phẩm cốt lõi
            </span>
            <label className="text-xs font-mono text-[#00ADEF] hover:underline cursor-pointer flex items-center gap-1 font-bold">
              {uploadingTarget === 'offer-core' ? (
                <>
                  <RefreshCw className="w-3 h-3 animate-spin" />
                  <span>Đang tải lên...</span>
                </>
              ) : (
                <>
                  <Upload className="w-3 h-3" />
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
          <div className="h-32 bg-slate-900/5 rounded-xl border border-dashed border-slate-200 p-2 flex items-center justify-center">
            {coreProductImage ? (
              <img src={coreProductImage} alt="Core" className="h-full object-contain" />
            ) : (
              <span className="text-xs text-slate-400">Chưa có ảnh</span>
            )}
          </div>
          <input
            type="text"
            value={coreProductImage}
            onChange={(e) => setCoreProductImage(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-mono"
            placeholder="/image/phuc-hoi-truc-tiep.webp"
          />
          <span className="text-[10px] text-slate-500 font-mono block">Gợi ý: 1000 × 750 px (Dung lượng dưới 250KB, tách nền hoặc nền sáng)</span>
        </div>

        {/* Core Products Items list */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
              Danh sách chi tiết các sản phẩm trong bộ
            </label>
            <button
              type="button"
              onClick={handleAddCoreProduct}
              className="inline-flex items-center gap-1 text-xs font-mono font-bold text-amber-700 bg-amber-100 hover:bg-amber-200 px-3 py-1 rounded-lg transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              Thêm sản phẩm
            </button>
          </div>

          <div className="space-y-2">
            {coreProductsList.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200 shadow-xs">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <input
                  type="text"
                  value={item}
                  onChange={(e) => handleUpdateCoreProduct(idx, e.target.value)}
                  placeholder="Nhập tên sản phẩm & dung tích (Ví dụ: 01 Bộ keo dán Universal thế hệ 8...)"
                  className="flex-1 bg-transparent border-none text-sm text-slate-900 font-medium focus:ring-0 outline-none px-2"
                />
                <button
                  type="button"
                  onClick={() => handleDeleteCoreProduct(idx)}
                  className="text-slate-400 hover:text-red-500 p-1.5 transition-colors shrink-0"
                  title="Xóa sản phẩm"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. BỘ QUÀ TẶNG TÀI TRỢ */}
      <div className="p-6 rounded-2xl bg-sky-50/40 border border-sky-200/80 space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h3 className="font-heading font-bold text-base text-slate-900 flex items-center gap-2">
            <Gift className="w-4 h-4 text-sky-600" />
            3. Khối Quà tặng Tài trợ (Gifts)
          </h3>
          <span className="text-xs font-mono text-sky-800 bg-sky-100 px-2.5 py-1 rounded-full font-semibold">
            {giftsList.length} quà tặng
          </span>
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
            Tiêu đề khối quà tặng
          </label>
          <input
            type="text"
            value={giftsTitle}
            onChange={(e) => setGiftsTitle(e.target.value)}
            placeholder="Bộ 3 quà tặng tài trợ 100%"
            className="w-full bg-white border border-slate-200 rounded-xl p-3 text-sm font-bold text-slate-900 focus:border-sky-500 outline-none"
          />
        </div>

        {/* Upload & Gift Image */}
        <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs font-bold text-slate-800 uppercase block">
              Hình ảnh Bộ quà tặng
            </span>
            <label className="text-xs font-mono text-[#00ADEF] hover:underline cursor-pointer flex items-center gap-1 font-bold">
              {uploadingTarget === 'offer-gift' ? (
                <>
                  <RefreshCw className="w-3 h-3 animate-spin" />
                  <span>Đang tải lên...</span>
                </>
              ) : (
                <>
                  <Upload className="w-3 h-3" />
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
          <div className="h-32 bg-slate-900/5 rounded-xl border border-dashed border-slate-200 p-2 flex items-center justify-center">
            {giftImage ? (
              <img src={giftImage} alt="Gift" className="h-full object-contain" />
            ) : (
              <span className="text-xs text-slate-400">Chưa có ảnh</span>
            )}
          </div>
          <input
            type="text"
            value={giftImage}
            onChange={(e) => setGiftImage(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-mono"
            placeholder="/image/qua-tang-doc-quyen-shofu-giai-phap-phuc-hoi-truc-tiep.webp"
          />
          <span className="text-[10px] text-slate-500 font-mono block">Gợi ý: 1000 × 750 px (Dung lượng dưới 250KB)</span>
        </div>

        {/* Gift Items list */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
              Danh sách chi tiết quà tặng & đặc quyền
            </label>
            <button
              type="button"
              onClick={handleAddGift}
              className="inline-flex items-center gap-1 text-xs font-mono font-bold text-sky-700 bg-sky-100 hover:bg-sky-200 px-3 py-1 rounded-lg transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              Thêm quà tặng
            </button>
          </div>

          <div className="space-y-2">
            {giftsList.map((gift, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200 shadow-xs">
                <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-800 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <input
                  type="text"
                  value={gift}
                  onChange={(e) => handleUpdateGift(idx, e.target.value)}
                  placeholder="Ví dụ: Quà vật lý: 01 Bộ mũi mài bóng Composite Polishing Kit CA"
                  className="flex-1 bg-transparent border-none text-sm text-slate-900 font-medium focus:ring-0 outline-none px-2"
                />
                <button
                  type="button"
                  onClick={() => handleDeleteGift(idx)}
                  className="text-slate-400 hover:text-red-500 p-1.5 transition-colors shrink-0"
                  title="Xóa quà tặng"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-slate-500 italic">
            Mẹo: Định dạng dạng <code className="bg-slate-200 px-1 rounded text-slate-700">Tên mục: Nội dung</code> (ví dụ: "Tài liệu: Phác đồ E-Guide...") để phần đầu được in đậm tự động trên giao diện web.
          </p>
        </div>
      </div>

      {/* 4. BẢNG GIÁ & ĐẦU TƯ TRẢI NGHIỆM */}
      <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-300/60 space-y-5">
        <h3 className="font-heading font-bold text-base text-slate-900 flex items-center gap-2">
          <DollarSign className="w-4 h-4 text-amber-600" />
          4. Bảng giá & Mức đầu tư trải nghiệm
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Giá gốc */}
          <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
            <label className="block text-xs font-mono font-bold text-slate-600 uppercase tracking-wider">
              Nhãn giá gốc
            </label>
            <input
              type="text"
              value={originalPriceLabel}
              onChange={(e) => setOriginalPriceLabel(e.target.value)}
              placeholder="Tổng giá trị"
              className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs font-medium text-slate-800 outline-none"
            />
            <label className="block text-xs font-mono font-bold text-slate-600 uppercase tracking-wider pt-1">
              Số tiền giá gốc (gạch ngang)
            </label>
            <input
              type="text"
              value={originalPrice}
              onChange={(e) => setOriginalPrice(e.target.value)}
              placeholder="7.250.000đ"
              className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-base font-bold text-slate-700 line-through decoration-red-500/60 outline-none"
            />
          </div>

          {/* Giá ưu đãi */}
          <div className="p-4 rounded-xl bg-white border border-amber-300 space-y-2 shadow-xs">
            <label className="block text-xs font-mono font-bold text-amber-800 uppercase tracking-wider">
              Nhãn giá ưu đãi
            </label>
            <input
              type="text"
              value={offerPriceLabel}
              onChange={(e) => setOfferPriceLabel(e.target.value)}
              placeholder="Mức đầu tư trải nghiệm"
              className="w-full bg-amber-50/50 border border-amber-200 rounded-lg p-2 text-xs font-medium text-amber-900 outline-none"
            />
            <label className="block text-xs font-mono font-bold text-amber-800 uppercase tracking-wider pt-1">
              Số tiền ưu đãi thực tế
            </label>
            <input
              type="text"
              value={offerPrice}
              onChange={(e) => setOfferPrice(e.target.value)}
              placeholder="3.250.000đ"
              className="w-full bg-amber-50/50 border border-amber-200 rounded-lg p-2.5 text-lg font-extrabold text-amber-600 outline-none"
            />
          </div>
        </div>
      </div>

      {/* 5. BẢO CHỨNG ĐỒNG HÀNH 3 LỚP */}
      <div className="p-6 rounded-2xl bg-emerald-50/30 border border-emerald-200/80 space-y-5">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h3 className="font-heading font-bold text-base text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            5. Cam kết & Bảo chứng đồng hành 3 lớp
          </h3>
          <button
            type="button"
            onClick={handleAddGuarantee}
            className="inline-flex items-center gap-1 text-xs font-mono font-bold text-emerald-700 bg-emerald-100 hover:bg-emerald-200 px-3 py-1 rounded-lg transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            Thêm bảo chứng
          </button>
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
            Tiêu đề khối bảo chứng
          </label>
          <input
            type="text"
            value={guaranteeTitle}
            onChange={(e) => setGuaranteeTitle(e.target.value)}
            placeholder="Bảo chứng đồng hành 3 lớp (Rủi ro bằng 0)"
            className="w-full bg-white border border-slate-200 rounded-xl p-3 text-sm font-bold text-slate-900 focus:border-emerald-500 outline-none"
          />
        </div>

        <div className="space-y-3">
          <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
            Các lớp bảo chứng lâm sàng
          </label>
          {guaranteesList.map((guarantee, idx) => (
            <div key={idx} className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
              <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-1">
                {idx + 1}
              </span>
              <textarea
                rows={2}
                value={guarantee}
                onChange={(e) => handleUpdateGuarantee(idx, e.target.value)}
                placeholder="Ví dụ: Bảo chứng 1 (Dứt ê buốt): Hỗ trợ 1:1 trong 5 ca phục hồi sống đầu tiên..."
                className="flex-1 bg-transparent border-none text-sm text-slate-800 font-medium focus:ring-0 outline-none resize-y p-0"
              />
              <button
                type="button"
                onClick={() => handleDeleteGuarantee(idx)}
                className="text-slate-400 hover:text-red-500 p-1.5 transition-colors shrink-0 mt-0.5"
                title="Xóa bảo chứng này"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

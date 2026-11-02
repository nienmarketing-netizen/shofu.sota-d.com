import React, { useState } from 'react';
import { 
  Package, 
  Eye, 
  Upload, 
  Plus, 
  Trash2, 
  Sparkles, 
  RotateCcw,
  CheckCircle, 
  Layers,
  ArrowRight,
  Stethoscope,
  Info
} from 'lucide-react';
import { EcosystemProductItem, applyFormat } from './types';
import { CtaFormConfigEditor } from '../components/CtaFormConfigEditor';

interface Section4EcosystemEditorProps {
  prodHeadline: string;
  setProdHeadline: React.Dispatch<React.SetStateAction<string>>;
  prodIntro: string;
  setProdIntro: React.Dispatch<React.SetStateAction<string>>;
  products: EcosystemProductItem[];
  setProducts: React.Dispatch<React.SetStateAction<EcosystemProductItem[]>>;
  prodCtaText: string;
  setProdCtaText: React.Dispatch<React.SetStateAction<string>>;
  prodFormTitle?: string;
  setProdFormTitle?: React.Dispatch<React.SetStateAction<string>>;
  prodFormDesc?: string;
  setProdFormDesc?: React.Dispatch<React.SetStateAction<string>>;
  prodFormExtraHtml?: string;
  setProdFormExtraHtml?: React.Dispatch<React.SetStateAction<string>>;
  prodRedirectThanks?: boolean;
  setProdRedirectThanks?: React.Dispatch<React.SetStateAction<boolean>>;
  prodTargetUrl?: string;
  setProdTargetUrl?: React.Dispatch<React.SetStateAction<string>>;
  prodResourceTitle?: string;
  setProdResourceTitle?: React.Dispatch<React.SetStateAction<string>>;
  uploadingTarget: string;
  handleUploadImageFile: (file: File, targetKey: string, onSuccess: (url: string) => void) => void;
}

// Preset standard 5 core products
const PRESET_5_CORE_PRODUCTS: EcosystemProductItem[] = [
  {
    id: 'prod-beautifil-ii',
    stepNumber: '01',
    tag: 'Composite Giomer',
    name: 'Beautifil II (Composite Giomer phục hồi thẩm mỹ)',
    image: '/image/phuc-hoi-truc-tiep-Shofu-beautifill-II-LS.webp',
    specs: 'Tuýp 4.5g / Nhiều dải màu (A1, A2, A3, A3.5, B2, Incisial, Bleach)',
    indications: 'Phục hồi trực tiếp xoang I, II, III, IV, V; trám răng thẩm mỹ vùng răng trước & răng cối chịu lực.',
    features: [
      'Công nghệ hạt độn Giomer S-PRG giải phóng & nạp lại Fluoride liên tục 24/7, kháng sâu răng thứ phát.',
      'Hiệu ứng quang học "Tắc kè hoa" (Chameleon Effect) tự tiệp màu men ngà thật hoàn hảo.',
      'Độ bóng vượt trội, chống bám dính mảng sinh học (Biofilm) ngay cả trong môi trường axit cao.'
    ]
  },
  {
    id: 'prod-beautilink-sa',
    stepNumber: '02',
    tag: 'Xi măng dán tự dính',
    name: 'BeautiLink SA (Xi măng Resin tự dán 2 thành phần)',
    image: '/image/Shofu-Cement-Beautilink-SA.webp',
    specs: 'Tuýp Handmix khổng lồ 15.6g (9ml) + Giấy trộn + Bay trộn chuyên dụng',
    indications: 'Gắn mão, cầu răng sứ, kim loại, Inlay/Onlay sứ thủy tinh, Zirconia, Alumina, cắm chốt sợi tủy.',
    features: [
      'Lực dán vượt trội 45-50 MPa trên Zirconia & Sứ mà không cần bôi primer hay etching tách rời.',
      'Tính năng Tack-cure 1-2 giây: Xi măng dư chuyển gel dẻo, bóc sạch nguyên mảng (One-Sweep) không rách nướu.',
      'Tuýp 15.6g thực hiện được ~120 ca gắn mão, triệt tiêu 95% lãng phí "thể tích chết" của vòi Automix thông thường.'
    ]
  },
  {
    id: 'prod-beautifil-bulk',
    stepNumber: '03',
    tag: 'Composite khối',
    name: 'Beautifil-Bulk (Composite đắp khối sâu 4mm)',
    image: '/image/phuc-hoi-truc-tiep-new.webp',
    specs: 'Tuýp 4.5g / Có sẵn dạng Restorative (đặc) và Flowable (lỏng)',
    indications: 'Trám khối xoang I, xoang II sâu đến 4mm một lần chiếu đèn; lót nền xoang và tái tạo cùi răng.',
    features: [
      'Độ sâu trùng hợp thực tế 4mm với độ co ngót thể tích siêu thấp dưới 0.85%, giảm thiểu tối đa vi kẽ.',
      'Ứng suất co ngót cực thấp giúp bảo tồn toàn vẹn liên kết dán ngà răng, dập tắt biến chứng ê buốt.',
      'Cơ chế hạt độn đa kích cỡ chịu lực uốn và mài mòn ăn nhai cực đại trên nhóm răng hàm cối.'
    ]
  },
  {
    id: 'prod-beautifil-flow-plus',
    stepNumber: '04',
    tag: 'Composite lỏng chịu lực',
    name: 'Beautifil Flow Plus (Composite lỏng chịu lực ăn nhai)',
    image: '/image/phuc-hoi-truc-tiep-shofu-beautifil-injectable-x-new.webp',
    specs: 'Tuýp 2.2g kèm kim bơm đầu kim loại siêu mịn, kiểm soát chính xác',
    indications: 'Phục hồi trực tiếp toàn bộ các nhóm xoang I đến V; đắp gờ múi chịu lực; trám lót và sửa chữa phục hình.',
    features: [
      'Độ bền nén 400 MPa tương đương composite đặc truyền thống, cho phép đắp mặt nhai chịu lực trực tiếp.',
      'Tính lưu biến Thixotropic tự thích ứng bề mặt vi thể: tự san phẳng hoàn hảo nhưng không chảy tràn viền xoang.',
      'Khả năng chống mòn vượt trội kết hợp hạt S-PRG bảo vệ đường viền miếng trám khỏi sâu răng tái phát.'
    ]
  },
  {
    id: 'prod-prg-barrier-coat',
    stepNumber: '05',
    tag: 'Véc-ni sinh học',
    name: 'PRG Barrier Coat (Véc-ni sinh học Giomer trị liệu ê buốt)',
    image: '/image/PRG-Barrier-Coat-Shofu.webp',
    specs: 'Bộ Mini-Kit: Base 1.5ml + Active 0.09g + Cọ quét & khay pha',
    indications: 'Trị liệu nhạy cảm ngà tức thì, chống ê buốt sau mài cùi phục hình, bảo vệ cổ răng mòn ngót, ngừa sâu răng cho trẻ & người già.',
    features: [
      'Tạo lớp màng sinh học bảo vệ siêu mỏng 15µm bít chặt các ống ngà hở, cắt cơn ê buốt tức thì sau 30 giây.',
      'Hiệu quả phóng thích và nạp lại ion kéo dài từ 3 đến 6 tháng, tự động tái khoáng men ngà bị tổn thương.',
      'Không chứa dung môi độc hại, hoàn toàn không màu, không gây đổi màu cùi răng thật hoặc răng sứ thẩm mỹ.'
    ]
  }
];

export const Section4EcosystemEditor: React.FC<Section4EcosystemEditorProps> = ({
  prodHeadline,
  setProdHeadline,
  prodIntro,
  setProdIntro,
  products,
  setProducts,
  prodCtaText,
  setProdCtaText,
  prodFormTitle,
  setProdFormTitle,
  prodFormDesc,
  setProdFormDesc,
  prodFormExtraHtml,
  setProdFormExtraHtml,
  prodRedirectThanks = false,
  setProdRedirectThanks,
  prodTargetUrl,
  setProdTargetUrl,
  prodResourceTitle,
  setProdResourceTitle,
  uploadingTarget,
  handleUploadImageFile
}) => {
  const [showLivePreview, setShowLivePreview] = useState(true);

  // Update single field of product
  const handleUpdateProduct = (id: string, field: keyof EcosystemProductItem, val: any) => {
    setProducts(prev => prev.map(p => p.id === id ? { ...p, [field]: val } : p));
  };

  // Feature list helpers
  const handleAddFeature = (productId: string) => {
    setProducts(prev => prev.map(p => {
      if (p.id === productId) {
        return {
          ...p,
          features: [...p.features, 'Điểm nổi bật lâm sàng mới...']
        };
      }
      return p;
    }));
  };

  const handleUpdateFeature = (productId: string, featureIndex: number, val: string) => {
    setProducts(prev => prev.map(p => {
      if (p.id === productId) {
        const nextFeatures = [...p.features];
        nextFeatures[featureIndex] = val;
        return { ...p, features: nextFeatures };
      }
      return p;
    }));
  };

  const handleDeleteFeature = (productId: string, featureIndex: number) => {
    setProducts(prev => prev.map(p => {
      if (p.id === productId) {
        return {
          ...p,
          features: p.features.filter((_, idx) => idx !== featureIndex)
        };
      }
      return p;
    }));
  };

  // Add new product card
  const handleAddProduct = () => {
    const newProd: EcosystemProductItem = {
      id: 'prod-' + Date.now(),
      stepNumber: `0${products.length + 1}`,
      tag: 'Vũ khí lâm sàng',
      name: 'Tên sản phẩm mới',
      image: '/image/phuc-hoi-truc-tiep.webp',
      specs: 'Quy cách đóng gói',
      indications: 'Chỉ định lâm sàng',
      features: [
        'Điểm nổi bật 1: Hoạt tính sinh học Giomer...',
        'Điểm nổi bật 2: Thao tác nhanh chóng, bền vững...'
      ]
    };
    setProducts(prev => [...prev, newProd]);
  };

  // Delete product card
  const handleDeleteProduct = (id: string) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  // Format helper for product text areas
  const formatProductText = (productId: string, field: 'name' | 'tag' | 'specs' | 'indications', tag: 'strong' | 'red' | 'cyan' | 'amber') => {
    const elId = `prod-${field}-${productId}`;
    const el = document.getElementById(elId) as HTMLInputElement | HTMLTextAreaElement | null;
    if (el) {
      const start = el.selectionStart || 0;
      const end = el.selectionEnd || 0;
      const targetProd = products.find(p => p.id === productId);
      if (!targetProd) return;
      const val = (targetProd[field] as string) || '';
      const selected = val.substring(start, end);

      let rep = '';
      if (tag === 'strong') rep = `<strong>${selected || 'in đậm'}</strong>`;
      else if (tag === 'red') rep = `<span class="text-[#8C2828] font-bold">${selected || 'chữ đỏ'}</span>`;
      else if (tag === 'cyan') rep = `<span class="text-[#00ADEF] font-bold">${selected || 'chữ xanh'}</span>`;
      else if (tag === 'amber') rep = `<span class="text-amber-600 font-bold">${selected || 'chữ vàng'}</span>`;

      const newVal = val.substring(0, start) + rep + val.substring(end);
      handleUpdateProduct(productId, field, newVal);
      setTimeout(() => {
        el.focus();
        el.setSelectionRange(start + rep.length, start + rep.length);
      }, 20);
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* 1. Header Box */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-heading font-extrabold text-slate-900">
                Section 4: Hệ sinh thái 5 sản phẩm cốt lõi
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                5 vũ khí lâm sàng bao bọc trọn vẹn mọi nhu cầu phục hồi trực tiếp, gián tiếp & dự phòng
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setShowLivePreview(!showLivePreview)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              showLivePreview 
                ? 'bg-purple-50 text-purple-700 border border-purple-200' 
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{showLivePreview ? 'Đang bật xem trước' : 'Xem trước'}</span>
          </button>
        </div>

        {/* 4.1 Tiêu đề H2 */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider font-bold">
              4.1. Tiêu đề H2 (Hỗ trợ HTML)
            </label>
            <div className="flex items-center gap-1.5 text-xs bg-slate-50 p-1 rounded-lg border border-slate-200">
              <span className="text-[11px] text-slate-500 px-1 font-mono">Chèn nhanh:</span>
              <button
                type="button"
                onClick={() => applyFormat('strong', setProdHeadline, 'section4-headline')}
                className="px-2 py-0.5 bg-white hover:bg-slate-200 rounded text-slate-800 font-bold border border-slate-200 text-xs shadow-xs"
              >
                In Đậm
              </button>
              <button
                type="button"
                onClick={() => applyFormat('red', setProdHeadline, 'section4-headline')}
                className="px-2 py-0.5 bg-red-50 hover:bg-red-100 text-[#8C2828] font-bold rounded border border-red-200 text-[11px]"
              >
                Đỏ Shofu
              </button>
              <button
                type="button"
                onClick={() => applyFormat('cyan', setProdHeadline, 'section4-headline')}
                className="px-2 py-0.5 bg-blue-50 hover:bg-blue-100 text-[#00ADEF] font-bold rounded border border-blue-200 text-[11px]"
              >
                Xanh
              </button>
              <button
                type="button"
                onClick={() => applyFormat('br', setProdHeadline, 'section4-headline')}
                className="px-2 py-0.5 bg-white hover:bg-slate-200 rounded text-slate-700 font-mono text-[11px] border border-slate-200"
              >
                &lt;br/&gt;
              </button>
            </div>
          </div>
          <textarea
            id="section4-headline"
            rows={2}
            value={prodHeadline}
            onChange={(e) => setProdHeadline(e.target.value)}
            placeholder='Ví dụ: Hệ sinh thái <span class="text-[#8C2828]">5 vũ khí cốt lõi</span>'
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-semibold font-mono text-slate-900 focus:outline-none focus:border-[#8C2828] focus:ring-2 focus:ring-red-900/10 leading-relaxed bg-white"
          />
        </div>

        {/* 4.2 Mô tả tổng quan hệ sinh thái 5 vũ khí */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider font-bold">
              4.2. Mô tả tổng quan hệ sinh thái 5 vũ khí (Hỗ trợ HTML)
            </label>
            <div className="flex items-center gap-1.5 text-xs bg-slate-50 p-1 rounded-lg border border-slate-200">
              <span className="text-[11px] text-slate-500 px-1 font-mono">Chèn nhanh:</span>
              <button
                type="button"
                onClick={() => applyFormat('strong', setProdIntro, 'section4-intro')}
                className="px-2 py-0.5 bg-white hover:bg-slate-200 rounded text-slate-800 font-bold border border-slate-200 text-xs shadow-xs"
              >
                In Đậm
              </button>
              <button
                type="button"
                onClick={() => applyFormat('red', setProdIntro, 'section4-intro')}
                className="px-2 py-0.5 bg-red-50 hover:bg-red-100 text-[#8C2828] font-bold rounded border border-red-200 text-[11px]"
              >
                Đỏ Shofu
              </button>
              <button
                type="button"
                onClick={() => applyFormat('cyan', setProdIntro, 'section4-intro')}
                className="px-2 py-0.5 bg-blue-50 hover:bg-blue-100 text-[#00ADEF] font-bold rounded border border-blue-200 text-[11px]"
              >
                Xanh
              </button>
              <button
                type="button"
                onClick={() => applyFormat('br', setProdIntro, 'section4-intro')}
                className="px-2 py-0.5 bg-white hover:bg-slate-200 rounded text-slate-700 font-mono text-[11px] border border-slate-200"
              >
                &lt;br/&gt;
              </button>
            </div>
          </div>
          <textarea
            id="section4-intro"
            rows={3}
            value={prodIntro}
            onChange={(e) => setProdIntro(e.target.value)}
            placeholder="Mô tả bao quát sự kết hợp giữa 5 sản phẩm..."
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-mono text-slate-800 focus:outline-none focus:border-[#8C2828] focus:ring-2 focus:ring-red-900/10 leading-relaxed bg-white"
          />
        </div>
      </div>

      {/* 2. Danh sách 5 Sản phẩm cốt lõi */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="pb-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-heading font-extrabold text-slate-900 flex items-center gap-2">
              <span>4.3. Quản lý 5 Sản phẩm cốt lõi ({products.length} Sản phẩm)</span>
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              1. Beautifil II • 2. BeautiLink SA • 3. Beautifil-Bulk • 4. Beautifil Flow Plus • 5. PRG Barrier Coat
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setProducts(PRESET_5_CORE_PRODUCTS)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-700 text-xs font-bold border border-purple-200 transition-colors shadow-2xs"
              title="Đặt lại chuẩn 5 sản phẩm cốt lõi Shofu theo đúng đề bài"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>Nạp chuẩn 5 Vũ Khí Shofu</span>
            </button>

            <button
              type="button"
              onClick={handleAddProduct}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#8C2828] hover:bg-red-900 text-white text-xs font-bold transition-all shadow-sm"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Thêm sản phẩm</span>
            </button>
          </div>
        </div>

        {/* Product Cards Accordion/List */}
        <div className="space-y-6">
          {products.map((prod, idx) => (
            <div 
              key={prod.id || idx}
              className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-slate-300 transition-all shadow-2xs space-y-5"
            >
              {/* Product Card Top Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-xl bg-[#8C2828] text-white font-mono font-black text-sm flex items-center justify-center shadow-xs">
                    {prod.stepNumber || `0${idx + 1}`}
                  </span>
                  <div>
                    <h4 
                      className="font-heading font-bold text-base text-slate-900"
                      dangerouslySetInnerHTML={{ __html: prod.name || `Sản phẩm #${idx + 1}` }}
                    />
                    <span className="inline-block text-[11px] font-semibold text-slate-500">
                      Vũ khí #{idx + 1} • {prod.tag || 'Chưa có phân loại'}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleDeleteProduct(prod.id)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                    title="Xóa sản phẩm này"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Grid 2 cột: Ảnh & Thông tin chính */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
                {/* Cột trái: Hình ảnh */}
                <div className="lg:col-span-4 space-y-3">
                  <label className="block text-xs font-bold text-slate-700">
                    Hình ảnh minh họa
                  </label>

                  <div className="w-full aspect-[4/3] bg-white rounded-2xl border border-slate-200 p-3 flex items-center justify-center overflow-hidden relative shadow-2xs group">
                    {prod.image ? (
                      <img 
                        src={prod.image} 
                        alt={prod.name} 
                        className="w-full h-full object-contain drop-shadow-md group-hover:scale-105 transition-transform"
                      />
                    ) : (
                      <span className="text-xs text-slate-400 font-mono">Chưa có ảnh</span>
                    )}
                  </div>

                  <input
                    type="text"
                    value={prod.image}
                    onChange={(e) => handleUpdateProduct(prod.id, 'image', e.target.value)}
                    placeholder="/image/Shofu-Cement-Beautilink-SA.webp"
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-mono text-slate-800"
                  />

                  {/* Upload button */}
                  <label className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold cursor-pointer transition-colors border border-slate-200">
                    <Upload className="w-3.5 h-3.5" />
                    <span>
                      {uploadingTarget === `prod_${prod.id}` ? 'Đang tải lên...' : 'Tải ảnh mới'}
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          handleUploadImageFile(file, `prod_${prod.id}`, (url) => {
                            handleUpdateProduct(prod.id, 'image', url);
                          });
                        }
                      }}
                    />
                  </label>
                </div>

                {/* Cột phải: Thông tin chi tiết */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {/* Số thứ tự */}
                    <div className="sm:col-span-1">
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Số thứ tự
                      </label>
                      <input
                        type="text"
                        value={prod.stepNumber}
                        onChange={(e) => handleUpdateProduct(prod.id, 'stepNumber', e.target.value)}
                        placeholder="01, 02..."
                        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-mono font-bold text-slate-900"
                      />
                    </div>

                    {/* Phân loại / Tag */}
                    <div className="sm:col-span-2">
                      <div className="flex items-center justify-between mb-1">
                        <label className="block text-xs font-bold text-slate-700">
                          Phân loại / Tag nhãn (HTML)
                        </label>
                        <div className="flex gap-1 text-[10px]">
                          <button
                            type="button"
                            onClick={() => formatProductText(prod.id, 'tag', 'strong')}
                            className="px-1.5 py-0.2 bg-white hover:bg-slate-200 rounded border border-slate-200 font-bold"
                          >
                            Đậm
                          </button>
                          <button
                            type="button"
                            onClick={() => formatProductText(prod.id, 'tag', 'red')}
                            className="px-1.5 py-0.2 bg-red-50 text-[#8C2828] rounded border border-red-200 font-bold"
                          >
                            Đỏ
                          </button>
                        </div>
                      </div>
                      <input
                        id={`prod-tag-${prod.id}`}
                        type="text"
                        value={prod.tag}
                        onChange={(e) => handleUpdateProduct(prod.id, 'tag', e.target.value)}
                        placeholder="Ví dụ: Xi măng dán tự dính"
                        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-900"
                      />
                    </div>
                  </div>

                  {/* Tên sản phẩm */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="block text-xs font-bold text-slate-700">
                        Tên sản phẩm đầy đủ (Hỗ trợ HTML)
                      </label>
                      <div className="flex gap-1 text-[10px]">
                        <button
                          type="button"
                          onClick={() => formatProductText(prod.id, 'name', 'strong')}
                          className="px-1.5 py-0.2 bg-white hover:bg-slate-200 rounded border border-slate-200 font-bold"
                        >
                          Đậm
                        </button>
                        <button
                          type="button"
                          onClick={() => formatProductText(prod.id, 'name', 'red')}
                          className="px-1.5 py-0.2 bg-red-50 text-[#8C2828] rounded border border-red-200 font-bold"
                        >
                          Đỏ Shofu
                        </button>
                        <button
                          type="button"
                          onClick={() => formatProductText(prod.id, 'name', 'cyan')}
                          className="px-1.5 py-0.2 bg-blue-50 text-[#00ADEF] rounded border border-blue-200 font-bold"
                        >
                          Xanh
                        </button>
                      </div>
                    </div>
                    <input
                      id={`prod-name-${prod.id}`}
                      type="text"
                      value={prod.name}
                      onChange={(e) => handleUpdateProduct(prod.id, 'name', e.target.value)}
                      placeholder="Ví dụ: BeautiLink SA – Tuýp khổng lồ 15.6g"
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-mono font-bold text-slate-900"
                    />
                  </div>

                  {/* Quy cách & Chỉ định lâm sàng */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="block text-xs font-bold text-slate-700">
                          Quy cách đóng gói
                        </label>
                        <button
                          type="button"
                          onClick={() => formatProductText(prod.id, 'specs', 'strong')}
                          className="px-1.5 py-0.2 bg-white hover:bg-slate-200 rounded text-[10px] font-bold"
                        >
                          Đậm
                        </button>
                      </div>
                      <input
                        id={`prod-specs-${prod.id}`}
                        type="text"
                        value={prod.specs || ''}
                        onChange={(e) => handleUpdateProduct(prod.id, 'specs', e.target.value)}
                        placeholder="Ví dụ: Tuýp 15.6g (9ml) + Pad trộn"
                        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-800"
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="block text-xs font-bold text-slate-700">
                          Chỉ định lâm sàng
                        </label>
                        <button
                          type="button"
                          onClick={() => formatProductText(prod.id, 'indications', 'strong')}
                          className="px-1.5 py-0.2 bg-white hover:bg-slate-200 rounded text-[10px] font-bold"
                        >
                          Đậm
                        </button>
                      </div>
                      <input
                        id={`prod-indications-${prod.id}`}
                        type="text"
                        value={prod.indications || ''}
                        onChange={(e) => handleUpdateProduct(prod.id, 'indications', e.target.value)}
                        placeholder="Ví dụ: Gắn mão, cầu răng Zirconia/Sứ..."
                        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-800"
                      />
                    </div>
                  </div>

                  {/* Điểm nổi bật lâm sàng (Features) */}
                  <div className="pt-2 border-t border-slate-200/80 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <label className="block text-xs font-bold text-slate-800">
                        Điểm nổi bật lâm sàng (Mỗi dòng 1 gạch đầu dòng - Hỗ trợ HTML)
                      </label>
                      <button
                        type="button"
                        onClick={() => handleAddFeature(prod.id)}
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 hover:text-emerald-900"
                      >
                        <Plus className="w-3 h-3" />
                        <span>Thêm gạch đầu dòng</span>
                      </button>
                    </div>

                    <div className="space-y-2">
                      {prod.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2">
                          <span className="text-emerald-500 font-bold mt-2">✓</span>
                          <textarea
                            rows={2}
                            value={feat}
                            onChange={(e) => handleUpdateFeature(prod.id, fIdx, e.target.value)}
                            placeholder="Nhập nội dung điểm nổi bật..."
                            className="flex-1 px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-mono text-slate-800 leading-relaxed focus:border-[#8C2828]"
                          />
                          <button
                            type="button"
                            onClick={() => handleDeleteFeature(prod.id, fIdx)}
                            className="p-1.5 text-slate-400 hover:text-red-600 rounded-lg mt-1"
                            title="Xóa dòng này"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Live Preview Section 4 */}
      {showLivePreview && (
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-xl space-y-10">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse"></span>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                Xem trước thực tế: Section 4 (Hệ sinh thái 5 sản phẩm cốt lõi)
              </span>
            </div>
            <span className="text-xs text-slate-500 font-mono">Theme Xám Bạc Landing Page</span>
          </div>

          {/* Section 4 Preview Content in slate-50 container */}
          <div className="bg-slate-50 text-slate-900 rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-10">
            {/* Header in preview */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 
                className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 leading-[1.3] tracking-tight"
                dangerouslySetInnerHTML={{ __html: prodHeadline || 'Hệ sinh thái 5 vũ khí cốt lõi' }}
              />
              <p 
                className="font-body text-sm sm:text-base text-slate-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: prodIntro || 'Combo Giải Pháp Toàn Diện bao bọc trọn vẹn nhu cầu lâm sàng hàng ngày tại phòng khám:' }}
              />
            </div>

            {/* Products Grid in preview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
              {products.map((prod, idx) => {
                // Layout logic matching the landing page: 3 columns for first row (2 cols each), 2 columns for second row (3 cols each)
                const colSpanClass = idx < 3 ? 'lg:col-span-2' : 'lg:col-span-3';

                return (
                  <div
                    key={prod.id || idx}
                    className={`${colSpanClass} bg-white rounded-3xl border border-slate-200/90 p-6 flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-xs`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="inline-flex px-3 py-1 bg-red-50 text-[#8C2828] rounded-full text-xs font-bold border border-red-100">
                        {prod.tag || `Vũ khí 0${idx + 1}`}
                      </div>
                      <span className="text-3xl sm:text-4xl font-heading font-black text-slate-200">
                        {prod.stepNumber || `0${idx + 1}`}
                      </span>
                    </div>

                    <h3 
                      className="font-heading font-bold text-lg text-slate-900 mb-4"
                      dangerouslySetInnerHTML={{ __html: prod.name }}
                    />

                    {/* Image Box */}
                    <div className="w-full aspect-[4/3] relative mb-6 flex items-center justify-center bg-slate-50 rounded-2xl overflow-hidden group border border-slate-100">
                      <img 
                        src={prod.image} 
                        alt={prod.name} 
                        className="w-full h-full object-contain p-4 drop-shadow-md group-hover:scale-110 transition-transform duration-500" 
                      />
                    </div>

                    {/* Specs / Indications preview if any */}
                    {(prod.specs || prod.indications) && (
                      <div className="mb-4 space-y-2 p-3 rounded-xl bg-slate-50 border border-slate-200/60 text-xs text-slate-700">
                        {prod.specs && (
                          <div className="flex items-start gap-1.5">
                            <Info className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                            <span><strong className="text-slate-900">Quy cách:</strong> {prod.specs}</span>
                          </div>
                        )}
                        {prod.indications && (
                          <div className="flex items-start gap-1.5">
                            <Stethoscope className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span><strong className="text-slate-900">Chỉ định:</strong> {prod.indications}</span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Features list */}
                    <ul className="space-y-2.5 font-body text-slate-600 text-xs sm:text-sm flex-1">
                      {prod.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5">
                          <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span dangerouslySetInnerHTML={{ __html: feat }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* CTA Button in preview */}
            <div className="pt-4 text-center">
              <div className="inline-flex items-center justify-center gap-2 bg-[#8C2828] text-white px-6 sm:px-8 py-3.5 rounded-full font-mono text-xs sm:text-base font-bold shadow-md shadow-red-900/20">
                <span>{prodCtaText || 'Khám phá trọn bộ Hệ sinh thái Giomer'}</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. Cấu hình Nút CTA & Form Popup cho Section 4 */}
      <CtaFormConfigEditor
        label="Nút CTA Section 4 (Hệ sinh thái 5 sản phẩm)"
        ctaText={prodCtaText}
        onChangeCtaText={setProdCtaText}
        formTitle={prodFormTitle}
        onChangeFormTitle={setProdFormTitle}
        formDesc={prodFormDesc}
        onChangeFormDesc={setProdFormDesc}
        formExtraHtml={prodFormExtraHtml}
        onChangeFormExtraHtml={setProdFormExtraHtml}
        redirectThanks={prodRedirectThanks}
        onChangeRedirectThanks={setProdRedirectThanks}
        targetUrl={prodTargetUrl}
        onChangeTargetUrl={setProdTargetUrl}
        resourceTitle={prodResourceTitle}
        onChangeResourceTitle={setProdResourceTitle}
      />
    </div>
  );
};

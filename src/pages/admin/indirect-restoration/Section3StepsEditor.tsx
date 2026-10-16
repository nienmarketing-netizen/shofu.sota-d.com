import React from 'react';
import { Bold, Plus, Trash2, Upload, Microscope, Umbrella, ShieldCheck, Clock, Shield } from 'lucide-react';
import { ProductItem, DiagramConfig, applyFormat } from './types';

interface Section3StepsEditorProps {
  badge: string;
  setBadge: React.Dispatch<React.SetStateAction<string>>;
  headline: string;
  setHeadline: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  product1: ProductItem;
  setProduct1: React.Dispatch<React.SetStateAction<ProductItem>>;
  product2: ProductItem;
  setProduct2: React.Dispatch<React.SetStateAction<ProductItem>>;
  diagram: DiagramConfig;
  setDiagram: React.Dispatch<React.SetStateAction<DiagramConfig>>;
  ctaText: string;
  setCtaText: React.Dispatch<React.SetStateAction<string>>;
  onUploadImage: (file: File, targetKey: string, onSuccess: (url: string) => void) => void;
  isUploadingImage: boolean;
  uploadingTarget: string;
}

export const Section3StepsEditor: React.FC<Section3StepsEditorProps> = ({
  badge,
  setBadge,
  headline,
  setHeadline,
  description,
  setDescription,
  product1,
  setProduct1,
  product2,
  setProduct2,
  diagram,
  setDiagram,
  ctaText,
  setCtaText,
  onUploadImage,
  isUploadingImage,
  uploadingTarget
}) => {
  // Product 1 Feature handlers
  const handleAddFeature1 = () => {
    setProduct1({
      ...product1,
      features: [
        ...product1.features,
        {
          iconName: 'Microscope',
          title: 'Tính năng kỹ thuật mới',
          description: 'Mô tả chi tiết ưu điểm lâm sàng.'
        }
      ]
    });
  };

  const handleDeleteFeature1 = (index: number) => {
    setProduct1({
      ...product1,
      features: product1.features.filter((_, i) => i !== index)
    });
  };

  const handleUpdateFeature1 = (index: number, field: 'title' | 'description' | 'iconName', val: string) => {
    const updated = [...product1.features];
    updated[index] = { ...updated[index], [field]: val };
    setProduct1({ ...product1, features: updated });
  };

  // Product 2 Feature handlers
  const handleAddFeature2 = () => {
    setProduct2({
      ...product2,
      features: [
        ...product2.features,
        {
          iconName: 'Shield',
          title: 'Tính năng kỹ thuật mới',
          description: 'Mô tả chi tiết ưu điểm lâm sàng.'
        }
      ]
    });
  };

  const handleDeleteFeature2 = (index: number) => {
    setProduct2({
      ...product2,
      features: product2.features.filter((_, i) => i !== index)
    });
  };

  const handleUpdateFeature2 = (index: number, field: 'title' | 'description' | 'iconName', val: string) => {
    const updated = [...product2.features];
    updated[index] = { ...updated[index], [field]: val };
    setProduct2({ ...product2, features: updated });
  };

  // Diagram Points handlers
  const handleAddDiagramPoint = () => {
    setDiagram({
      ...diagram,
      points: [...diagram.points, '<strong>Điểm ưu thế mới:</strong> Mô tả chi tiết...']
    });
  };

  const handleDeleteDiagramPoint = (index: number) => {
    setDiagram({
      ...diagram,
      points: diagram.points.filter((_, i) => i !== index)
    });
  };

  const handleUpdateDiagramPoint = (index: number, val: string) => {
    const updated = [...diagram.points];
    updated[index] = val;
    setDiagram({ ...diagram, points: updated });
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Overview Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-3 pb-6 mb-6 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-lg">
            03
          </div>
          <div>
            <h2 className="font-heading font-extrabold text-xl text-slate-900">
              Section 3: The Gold Standard (Tiêu chuẩn vàng mới)
            </h2>
            <p className="text-slate-500 text-sm">
              Bộ đôi vũ khí BBX & BeautiLink SA, danh sách tính năng và sơ đồ khoảng ghép 24µm.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Badge tiêu chuẩn
            </label>
            <input
              type="text"
              value={badge}
              onChange={(e) => setBadge(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-amber-500 text-sm outline-none font-medium"
              placeholder="Tiêu chuẩn vàng mới..."
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Tiêu đề chính Section
              </label>
              <div className="flex items-center gap-1.5 bg-slate-50 p-1 rounded-lg border border-slate-200">
                <button
                  type="button"
                  onClick={() => applyFormat('strong', setHeadline)}
                  className="px-2 py-0.5 rounded text-xs font-bold text-slate-700 hover:bg-white transition-colors"
                >
                  <Bold className="w-3.5 h-3.5 inline mr-0.5" /> Bold
                </button>
                <button
                  type="button"
                  onClick={() => applyFormat('cyan', setHeadline)}
                  className="px-2 py-0.5 rounded text-xs font-bold text-[#00ADEF] hover:bg-white transition-colors"
                >
                  Cyan
                </button>
              </div>
            </div>
            <textarea
              rows={2}
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 text-sm font-medium outline-none font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Mô tả ngắn
            </label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-amber-500 text-sm outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Chữ nút CTA
            </label>
            <input
              type="text"
              value={ctaText}
              onChange={(e) => setCtaText(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#00ADEF] text-sm font-bold outline-none"
            />
          </div>
        </div>
      </div>

      {/* Product 1: BeautiBond Xtreme */}
      <div className="bg-white rounded-2xl border border-blue-200 p-6 sm:p-8 shadow-sm">
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
          <div>
            <span className="text-[11px] font-bold text-[#00ADEF] uppercase tracking-wider">
              Sản phẩm 1
            </span>
            <h3 className="font-heading font-bold text-lg text-slate-900">
              {product1.title}
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Tên sản phẩm
            </label>
            <input
              type="text"
              value={product1.title}
              onChange={(e) => setProduct1({ ...product1, title: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm font-bold outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Phân loại / Subtitle
            </label>
            <input
              type="text"
              value={product1.subtitle}
              onChange={(e) => setProduct1({ ...product1, subtitle: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm outline-none"
            />
          </div>
        </div>

        {/* Product 1 Image */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mb-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="w-20 h-20 bg-white rounded-lg border border-slate-200 p-1 overflow-hidden shrink-0">
            {product1.image ? (
              <img src={product1.image} alt={product1.title} className="w-full h-full object-contain" />
            ) : null}
          </div>
          <div className="flex-1 w-full space-y-2">
            <input
              type="text"
              value={product1.image}
              onChange={(e) => setProduct1({ ...product1, image: e.target.value })}
              className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-mono outline-none"
              placeholder="URL hình ảnh..."
            />
            <label className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold cursor-pointer shadow-sm">
              <Upload className="w-3.5 h-3.5 text-[#00ADEF]" />
              <span>{isUploadingImage && uploadingTarget === 'p1' ? 'Đang tải...' : 'Upload ảnh'}</span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) onUploadImage(f, 'p1', (url) => setProduct1({ ...product1, image: url }));
                }}
              />
            </label>
          </div>
        </div>

        {/* Features of Product 1 */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Các tính năng cốt lõi
            </label>
            <button
              type="button"
              onClick={handleAddFeature1}
              className="text-xs font-bold text-[#00ADEF] hover:underline inline-flex items-center gap-1"
            >
              <Plus className="w-3.5 h-3.5" /> Thêm tính năng
            </button>
          </div>
          {product1.features.map((feat, fIdx) => (
            <div key={fIdx} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
              <div className="flex items-center justify-between">
                <input
                  type="text"
                  value={feat.title}
                  onChange={(e) => handleUpdateFeature1(fIdx, 'title', e.target.value)}
                  className="font-bold text-xs text-slate-800 bg-transparent outline-none flex-1"
                  placeholder="Tiêu đề tính năng..."
                />
                <button
                  type="button"
                  onClick={() => handleDeleteFeature1(fIdx)}
                  className="text-slate-400 hover:text-red-500 p-1"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
              <textarea
                rows={2}
                value={feat.description}
                onChange={(e) => handleUpdateFeature1(fIdx, 'description', e.target.value)}
                className="w-full text-xs text-slate-600 bg-white border border-slate-200 rounded-lg p-2 outline-none font-mono"
                placeholder="Mô tả tính năng..."
              />
            </div>
          ))}
        </div>
      </div>

      {/* Product 2: BeautiLink SA */}
      <div className="bg-white rounded-2xl border border-red-200 p-6 sm:p-8 shadow-sm">
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
          <div>
            <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider">
              Sản phẩm 2
            </span>
            <h3 className="font-heading font-bold text-lg text-slate-900">
              {product2.title}
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Tên sản phẩm
            </label>
            <input
              type="text"
              value={product2.title}
              onChange={(e) => setProduct2({ ...product2, title: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm font-bold outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Phân loại / Subtitle
            </label>
            <input
              type="text"
              value={product2.subtitle}
              onChange={(e) => setProduct2({ ...product2, subtitle: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm outline-none"
            />
          </div>
        </div>

        {/* Product 2 Image */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mb-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="w-20 h-20 bg-white rounded-lg border border-slate-200 p-1 overflow-hidden shrink-0">
            {product2.image ? (
              <img src={product2.image} alt={product2.title} className="w-full h-full object-contain" />
            ) : null}
          </div>
          <div className="flex-1 w-full space-y-2">
            <input
              type="text"
              value={product2.image}
              onChange={(e) => setProduct2({ ...product2, image: e.target.value })}
              className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-mono outline-none"
              placeholder="URL hình ảnh..."
            />
            <label className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold cursor-pointer shadow-sm">
              <Upload className="w-3.5 h-3.5 text-red-600" />
              <span>{isUploadingImage && uploadingTarget === 'p2' ? 'Đang tải...' : 'Upload ảnh'}</span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) onUploadImage(f, 'p2', (url) => setProduct2({ ...product2, image: url }));
                }}
              />
            </label>
          </div>
        </div>

        {/* Features of Product 2 */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Các tính năng cốt lõi
            </label>
            <button
              type="button"
              onClick={handleAddFeature2}
              className="text-xs font-bold text-red-600 hover:underline inline-flex items-center gap-1"
            >
              <Plus className="w-3.5 h-3.5" /> Thêm tính năng
            </button>
          </div>
          {product2.features.map((feat, fIdx) => (
            <div key={fIdx} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
              <div className="flex items-center justify-between">
                <input
                  type="text"
                  value={feat.title}
                  onChange={(e) => handleUpdateFeature2(fIdx, 'title', e.target.value)}
                  className="font-bold text-xs text-slate-800 bg-transparent outline-none flex-1"
                  placeholder="Tiêu đề tính năng..."
                />
                <button
                  type="button"
                  onClick={() => handleDeleteFeature2(fIdx)}
                  className="text-slate-400 hover:text-red-500 p-1"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
              <textarea
                rows={2}
                value={feat.description}
                onChange={(e) => handleUpdateFeature2(fIdx, 'description', e.target.value)}
                className="w-full text-xs text-slate-600 bg-white border border-slate-200 rounded-lg p-2 outline-none font-mono"
                placeholder="Mô tả tính năng..."
              />
            </div>
          ))}
        </div>
      </div>

      {/* The 24um Diagram Editor */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <h3 className="font-heading font-bold text-lg text-slate-900 mb-4 pb-3 border-b border-slate-100">
          Sơ đồ cấu trúc liên kết 24µm khít sát
        </h3>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Tiêu đề sơ đồ
            </label>
            <input
              type="text"
              value={diagram.title}
              onChange={(e) => setDiagram({ ...diagram, title: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm font-bold font-mono outline-none"
            />
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="w-24 h-24 bg-white rounded-lg border border-slate-200 p-1 shrink-0 overflow-hidden">
              {diagram.image ? (
                <img src={diagram.image} alt="Diagram" className="w-full h-full object-contain" />
              ) : null}
            </div>
            <div className="flex-1 w-full space-y-2">
              <input
                type="text"
                value={diagram.image}
                onChange={(e) => setDiagram({ ...diagram, image: e.target.value })}
                className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-mono outline-none"
              />
              <label className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold cursor-pointer shadow-sm">
                <Upload className="w-3.5 h-3.5 text-[#00ADEF]" />
                <span>Upload sơ đồ mới</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) onUploadImage(f, 'diagram', (url) => setDiagram({ ...diagram, image: url }));
                  }}
                />
              </label>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Đoạn văn phân tích kỹ thuật
            </label>
            <textarea
              rows={3}
              value={diagram.description}
              onChange={(e) => setDiagram({ ...diagram, description: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs text-slate-700 outline-none font-mono"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                3 Điểm cam kết lâm sàng
              </label>
              <button
                type="button"
                onClick={handleAddDiagramPoint}
                className="text-xs font-bold text-[#00ADEF] hover:underline"
              >
                + Thêm điểm
              </button>
            </div>
            <div className="space-y-2">
              {diagram.points.map((pt, pIdx) => (
                <div key={pIdx} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={pt}
                    onChange={(e) => handleUpdateDiagramPoint(pIdx, e.target.value)}
                    className="flex-1 px-3 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-800 outline-none font-mono"
                  />
                  <button
                    type="button"
                    onClick={() => handleDeleteDiagramPoint(pIdx)}
                    className="text-slate-400 hover:text-red-500 p-1"
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
  );
};

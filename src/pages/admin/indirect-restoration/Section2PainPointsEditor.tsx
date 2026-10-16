import React from 'react';
import { Bold, Plus, Trash2, AlertTriangle, Layers, Unlink, Banknote } from 'lucide-react';
import { PainPointItem, applyFormat } from './types';

interface Section2PainPointsEditorProps {
  badge: string;
  setBadge: React.Dispatch<React.SetStateAction<string>>;
  headline: string;
  setHeadline: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  items: PainPointItem[];
  setItems: React.Dispatch<React.SetStateAction<PainPointItem[]>>;
  ctaText: string;
  setCtaText: React.Dispatch<React.SetStateAction<string>>;
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
  ctaText,
  setCtaText
}) => {
  const handleAddItem = () => {
    const newId = `pain-${Date.now()}`;
    setItems([
      ...items,
      {
        id: newId,
        iconName: 'AlertTriangle',
        title: 'Rủi ro lâm sàng mới',
        description: 'Mô tả chi tiết tác động tiêu cực hoặc hậu quả lâm sàng đến phục hình.'
      }
    ]);
  };

  const handleDeleteItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleUpdateItem = (id: string, field: 'title' | 'description' | 'iconName', val: string) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, [field]: val } : item))
    );
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-3 pb-6 mb-6 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-lg">
            02
          </div>
          <div>
            <h2 className="font-heading font-extrabold text-xl text-slate-900">
              Section 2: The Pain Points (Nỗi đau lâm sàng)
            </h2>
            <p className="text-slate-500 text-sm">
              Tiêu đề cảnh báo rủi ro, nền tối và danh sách các thẻ nỗi đau sút phục hình, kênh cộm, hao phí Automix.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {/* Badge */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Badge phụ
            </label>
            <input
              type="text"
              value={badge}
              onChange={(e) => setBadge(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 text-sm outline-none font-medium"
              placeholder="Thực trạng lâm sàng..."
            />
          </div>

          {/* Headline */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Tiêu đề nỗi đau (Headline)
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
                  onClick={() => applyFormat('red', setHeadline)}
                  className="px-2 py-0.5 rounded text-xs font-bold text-red-600 hover:bg-white transition-colors"
                >
                  Red
                </button>
              </div>
            </div>
            <textarea
              rows={3}
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 focus:border-red-500 text-sm font-medium outline-none font-mono"
              placeholder="Nhập tiêu đề HTML..."
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Đoạn giải thích phụ
            </label>
            <textarea
              rows={2}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 focus:border-red-500 text-sm outline-none"
              placeholder="Mô tả bối cảnh..."
            />
          </div>

          {/* CTA Text */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Nút kêu gọi hành động (CTA)
            </label>
            <input
              type="text"
              value={ctaText}
              onChange={(e) => setCtaText(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 focus:border-[#00ADEF] text-sm font-bold outline-none"
              placeholder="TƯ VẤN GIẢI PHÁP TRIỆT TIÊU RỦI RO"
            />
          </div>
        </div>
      </div>

      {/* Cards list */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
          <div>
            <h3 className="font-heading font-bold text-lg text-slate-900">
              Danh sách các thẻ rủi ro lâm sàng
            </h3>
            <p className="text-slate-500 text-xs mt-0.5">
              Cho phép chỉnh sửa nội dung, icon và thêm/xóa thẻ linh hoạt.
            </p>
          </div>
          <button
            type="button"
            onClick={handleAddItem}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 font-mono text-xs font-bold transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Thêm thẻ rủi ro</span>
          </button>
        </div>

        <div className="space-y-6">
          {items.map((item, idx) => (
            <div
              key={item.id || idx}
              className="p-5 rounded-2xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-red-300 transition-all space-y-4"
            >
              <div className="flex items-center justify-between border-b border-slate-200/60 pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 font-bold text-xs flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <span className="font-bold text-sm text-slate-800">
                    {item.title || `Thẻ rủi ro #${idx + 1}`}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => handleDeleteItem(item.id)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                  title="Xóa thẻ này"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <div className="sm:col-span-1">
                  <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1">
                    Icon đại diện
                  </label>
                  <select
                    value={item.iconName || 'Unlink'}
                    onChange={(e) => handleUpdateItem(item.id, 'iconName', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-slate-900 text-xs font-medium outline-none"
                  >
                    <option value="Unlink">Unlink (Đứt gãy / Sút)</option>
                    <option value="Layers">Layers (Lớp màng / Cộm)</option>
                    <option value="Banknote">Banknote (Chi phí / Hao phí)</option>
                    <option value="AlertTriangle">AlertTriangle (Cảnh báo)</option>
                  </select>
                </div>
                <div className="sm:col-span-3">
                  <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1">
                    Tiêu đề thẻ
                  </label>
                  <input
                    type="text"
                    value={item.title}
                    onChange={(e) => handleUpdateItem(item.id, 'title', e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 bg-white text-sm font-bold text-slate-900 outline-none focus:border-red-400"
                    placeholder="Tiêu đề rủi ro..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1">
                  Mô tả chi tiết & Hậu quả lâm sàng (Hỗ trợ HTML tag)
                </label>
                <textarea
                  rows={3}
                  value={item.description}
                  onChange={(e) => handleUpdateItem(item.id, 'description', e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 bg-white text-xs text-slate-900 outline-none focus:border-red-400 font-mono"
                  placeholder="Mô tả cơ chế gây rủi ro..."
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

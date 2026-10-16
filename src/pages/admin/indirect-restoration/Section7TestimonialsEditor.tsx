import React, { useState } from 'react';
import { Bold, Plus, Trash2, Quote, UserCheck, MessageSquare } from 'lucide-react';
import { TestimonialItem, applyFormat } from './types';

interface Section7TestimonialsEditorProps {
  headline: string;
  setHeadline: React.Dispatch<React.SetStateAction<string>>;
  ctaText: string;
  setCtaText: React.Dispatch<React.SetStateAction<string>>;
  row1: TestimonialItem[];
  setRow1: React.Dispatch<React.SetStateAction<TestimonialItem[]>>;
  row2: TestimonialItem[];
  setRow2: React.Dispatch<React.SetStateAction<TestimonialItem[]>>;
}

export const Section7TestimonialsEditor: React.FC<Section7TestimonialsEditorProps> = ({
  headline,
  setHeadline,
  ctaText,
  setCtaText,
  row1,
  setRow1,
  row2,
  setRow2
}) => {
  const [activeRow, setActiveRow] = useState<'row1' | 'row2'>('row1');

  const handleAddTestimonial = (rowKey: 'row1' | 'row2') => {
    const newItem: TestimonialItem = {
      id: `t-${Date.now()}`,
      name: 'Dr. Tên Bác sĩ mới',
      role: 'Chuyên gia Phục hình, Hà Nội / TP.HCM',
      text: '"Nhập nội dung chia sẻ trải nghiệm thực tế với BeautiLink SA và BBX..."'
    };
    if (rowKey === 'row1') {
      setRow1([...row1, newItem]);
    } else {
      setRow2([...row2, newItem]);
    }
  };

  const handleDeleteTestimonial = (rowKey: 'row1' | 'row2', id: string) => {
    if (rowKey === 'row1') {
      setRow1(row1.filter((item) => item.id !== id));
    } else {
      setRow2(row2.filter((item) => item.id !== id));
    }
  };

  const handleUpdateTestimonial = (
    rowKey: 'row1' | 'row2',
    id: string,
    field: 'name' | 'role' | 'text',
    val: string
  ) => {
    if (rowKey === 'row1') {
      setRow1(
        row1.map((item) => (item.id === id ? { ...item, [field]: val } : item))
      );
    } else {
      setRow2(
        row2.map((item) => (item.id === id ? { ...item, [field]: val } : item))
      );
    }
  };

  const currentList = activeRow === 'row1' ? row1 : row2;

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Overview Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-3 pb-6 mb-6 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-lg">
            07
          </div>
          <div>
            <h2 className="font-heading font-extrabold text-xl text-slate-900">
              Section 7: Social Proof (Đánh giá Bác sĩ & Chuyên gia)
            </h2>
            <p className="text-slate-500 text-sm">
              Hệ thống 2 hàng thẻ chạy cuộn Marquee liên tục không giật lag.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Tiêu đề mục Social Proof
              </label>
              <button
                type="button"
                onClick={() => applyFormat('cyan', setHeadline)}
                className="text-xs font-bold text-[#00ADEF]"
              >
                Cyan
              </button>
            </div>
            <input
              type="text"
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-500 text-sm font-medium outline-none font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Chữ trên nút CTA cuối
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

      {/* Row Tabs & Items */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-100">
          <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl">
            <button
              type="button"
              onClick={() => setActiveRow('row1')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeRow === 'row1'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Hàng Marquee 1 ({row1.length} Bác sĩ)
            </button>
            <button
              type="button"
              onClick={() => setActiveRow('row2')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeRow === 'row2'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Hàng Marquee 2 ({row2.length} Bác sĩ)
            </button>
          </div>

          <button
            type="button"
            onClick={() => handleAddTestimonial(activeRow)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-mono text-xs font-bold transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Thêm nhận xét ({activeRow === 'row1' ? 'Hàng 1' : 'Hàng 2'})</span>
          </button>
        </div>

        <div className="space-y-4">
          {currentList.map((item, index) => (
            <div
              key={item.id || index}
              className="p-5 rounded-2xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-emerald-300 transition-all space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center">
                    {index + 1}
                  </span>
                  <span className="font-heading font-bold text-sm text-slate-800">
                    {item.name}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => handleDeleteTestimonial(activeRow, item.id)}
                  className="p-1.5 text-slate-400 hover:text-red-500 rounded-lg hover:bg-red-50 transition-colors"
                  title="Xóa nhận xét này"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1">
                    Tên Bác sĩ / Chuyên gia
                  </label>
                  <input
                    type="text"
                    value={item.name}
                    onChange={(e) => handleUpdateTestimonial(activeRow, item.id, 'name', e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-bold outline-none"
                    placeholder="Dr. Nguyễn Văn A..."
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1">
                    Chức danh & Nơi công tác
                  </label>
                  <input
                    type="text"
                    value={item.role}
                    onChange={(e) => handleUpdateTestimonial(activeRow, item.id, 'role', e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-600 outline-none"
                    placeholder="Chuyên gia Phục hình, Hà Nội..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1">
                  Nội dung nhận xét / Feedback
                </label>
                <textarea
                  rows={3}
                  value={item.text}
                  onChange={(e) => handleUpdateTestimonial(activeRow, item.id, 'text', e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs text-slate-700 outline-none italic leading-relaxed"
                  placeholder='"Nội dung feedback..."'
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

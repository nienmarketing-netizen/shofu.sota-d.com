import React, { useState } from 'react';
import { Bold, Plus, Trash2, Quote, UserCheck, MessageSquare, Eye, User, Star } from 'lucide-react';
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
            {/* Live Preview of Headline */}
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 mt-2">
              <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider block mb-1">
                Xem trước Tiêu đề:
              </span>
              <div 
                className="font-heading font-extrabold text-base text-slate-900 leading-snug"
                dangerouslySetInnerHTML={{ __html: headline || '<span class="text-slate-400 italic text-xs">Chưa có tiêu đề...</span>' }}
              />
            </div>
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

      {/* 3. XEM TRƯỚC THÀNH PHẦN ĐÁNH GIÁ BÁC SĨ (LIVE COMPONENT PREVIEW) */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <Eye className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-base text-slate-900">
                Xem trước giao diện Đánh giá Bác sĩ (Live Component Preview)
              </h3>
              <p className="text-slate-500 text-xs">
                Mô phỏng các thẻ phản hồi lâm sàng, avatar, tên bác sĩ, cơ sở công tác và đánh giá 5 sao.
              </p>
            </div>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Trực quan tức thì
          </span>
        </div>

        {/* Mock Testimonial Section */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 font-mono text-xs font-bold uppercase tracking-wider">
              Bác sĩ tin dùng
            </span>
            <div
              className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 leading-snug"
              dangerouslySetInnerHTML={{ __html: headline || '' }}
            />
          </div>

          {/* Current Row Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentList.slice(0, 6).map((t, idx) => (
              <div key={t.id || idx} className="rounded-2xl border border-slate-200 bg-white p-5 space-y-3 shadow-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-blue-50 text-[#00ADEF] flex items-center justify-center font-bold text-xs border border-blue-100">
                      <User className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-xs text-slate-900">{t.name}</div>
                      <div className="text-[11px] text-slate-400">{t.role}</div>
                    </div>
                  </div>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-xs text-slate-600 italic leading-relaxed font-body">
                  {t.text}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Preview */}
          <div className="text-center pt-2">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00ADEF] text-white font-mono text-xs font-bold uppercase tracking-wider shadow-md">
              <span>{ctaText || 'Gia nhập cộng đồng MiCD'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

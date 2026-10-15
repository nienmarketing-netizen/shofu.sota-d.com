import React from 'react';
import { Plus, Trash2, MessageSquareQuote, Sparkles } from 'lucide-react';
import { TestimonialItem, applyFormat } from './types';

interface Section7TestimonialsEditorProps {
  testimonialsHeadline: string;
  setTestimonialsHeadline: React.Dispatch<React.SetStateAction<string>>;
  testimonialsList: TestimonialItem[];
  setTestimonialsList: React.Dispatch<React.SetStateAction<TestimonialItem[]>>;
  handleAddTestimonial: () => void;
  handleDeleteTestimonial: (id: string) => void;
  handleUpdateTestimonial: (id: string, field: 'name' | 'role' | 'text', val: string) => void;
}

export const Section7TestimonialsEditor: React.FC<Section7TestimonialsEditorProps> = ({
  testimonialsHeadline,
  setTestimonialsHeadline,
  testimonialsList,
  handleAddTestimonial,
  handleDeleteTestimonial,
  handleUpdateTestimonial
}) => {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-9 shadow-sm space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-[#00ADEF] font-mono text-xs font-bold mb-2">
            Section 7
          </div>
          <h2 className="font-heading font-extrabold text-2xl text-slate-900">
            Hàng ngàn nha sĩ và chuyên gia đã chọn
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Quản lý tiêu đề và các thẻ nhận xét (feedback cards) từ các bác sĩ và chuyên gia nha khoa.
          </p>
        </div>

        <button
          type="button"
          onClick={handleAddTestimonial}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#00ADEF] text-white font-mono text-xs font-bold hover:bg-sky-500 transition-colors shadow-sm shrink-0 self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Thêm Feedback Card</span>
        </button>
      </div>

      {/* 1. Tiêu đề chung */}
      <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-4">
        <div className="flex items-center justify-between">
          <label className="font-mono text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#00ADEF]" />
            1. Tiêu đề chung của Section
          </label>
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] text-slate-400 font-mono hidden sm:inline">Định dạng nhanh:</span>
            <button
              type="button"
              onClick={() => applyFormat('strong', setTestimonialsHeadline)}
              className="px-2 py-0.5 rounded bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-100 shadow-2xs"
              title="In đậm chữ đang bôi đen"
            >
              B
            </button>
            <button
              type="button"
              onClick={() => applyFormat('cyan', setTestimonialsHeadline)}
              className="px-2 py-0.5 rounded bg-white border border-slate-200 text-xs font-bold text-[#00ADEF] hover:bg-slate-100 shadow-2xs"
              title="Đổi màu Xanh Shofu"
            >
              Xanh
            </button>
            <button
              type="button"
              onClick={() => applyFormat('red', setTestimonialsHeadline)}
              className="px-2 py-0.5 rounded bg-white border border-slate-200 text-xs font-bold text-[#8C2828] hover:bg-slate-100 shadow-2xs"
              title="Đổi màu Đỏ nhấn"
            >
              Đỏ
            </button>
            <button
              type="button"
              onClick={() => applyFormat('u', setTestimonialsHeadline)}
              className="px-2 py-0.5 rounded bg-white border border-slate-200 text-xs underline text-slate-700 hover:bg-slate-100 shadow-2xs"
              title="Gạch chân"
            >
              U
            </button>
          </div>
        </div>

        <input
          type="text"
          value={testimonialsHeadline}
          onChange={(e) => setTestimonialsHeadline(e.target.value)}
          placeholder='Ví dụ: <span class="text-[#00ADEF]">Hàng ngàn nha sĩ và chuyên gia</span> đã chọn'
          className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
        />

        {/* Live Preview */}
        <div className="p-3 bg-white rounded-xl border border-slate-200/60 text-center">
          <span className="text-[10px] uppercase font-mono text-slate-400 block mb-1">Xem trước tiêu đề hiển thị:</span>
          <h3 
            className="font-heading font-extrabold text-lg sm:text-xl text-slate-900"
            dangerouslySetInnerHTML={{ __html: testimonialsHeadline || 'Hàng ngàn nha sĩ và chuyên gia đã chọn' }}
          />
        </div>
      </div>

      {/* 2. Danh sách Feedback Cards */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquareQuote className="w-4 h-4 text-[#00ADEF]" />
            <h3 className="font-mono text-xs font-bold text-slate-800 uppercase tracking-wider">
              2. Danh sách Feedback Cards ({testimonialsList.length} nhận xét)
            </h3>
          </div>
          <span className="text-xs text-slate-400 font-mono">
            Hiển thị dạng cuộn mượt (Marquee) trên giao diện khách hàng
          </span>
        </div>

        <div className="space-y-5">
          {testimonialsList.map((item, index) => (
            <div 
              key={item.id} 
              className="p-5 sm:p-6 rounded-2xl bg-slate-50/70 border border-slate-200 hover:border-slate-300 transition-all space-y-4 shadow-2xs"
            >
              <div className="flex items-center justify-between border-b border-slate-200/60 pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-lg bg-sky-100 text-[#00ADEF] flex items-center justify-center font-mono text-xs font-bold">
                    {index + 1}
                  </span>
                  <span className="font-heading font-bold text-sm text-slate-800">
                    {item.name || `Feedback Card #${index + 1}`}
                  </span>
                </div>

                {testimonialsList.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleDeleteTestimonial(item.id)}
                    className="inline-flex items-center gap-1 text-xs text-red-500 hover:text-red-700 hover:bg-red-50 px-2.5 py-1.5 rounded-lg transition-colors"
                    title="Xóa feedback card này"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span className="font-mono font-medium">Xóa</span>
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* 2.1 Tên người feedback */}
                <div>
                  <label className="block text-[11px] font-mono font-bold text-slate-600 mb-1.5">
                    2.1. Tên người feedback: <span className="text-slate-400 font-normal">(Ví dụ: Dr. Trần Văn An)</span>
                  </label>
                  <input
                    type="text"
                    value={item.name}
                    onChange={(e) => handleUpdateTestimonial(item.id, 'name', e.target.value)}
                    placeholder="Ví dụ: Dr. Trần Văn An"
                    className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2 text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                  />
                </div>

                {/* 2.2 Chức danh */}
                <div>
                  <label className="block text-[11px] font-mono font-bold text-slate-600 mb-1.5">
                    2.2. Chức danh: <span className="text-slate-400 font-normal">(Ví dụ: Chuyên gia Phục hình Thẩm mỹ, TP.HCM)</span>
                  </label>
                  <input
                    type="text"
                    value={item.role}
                    onChange={(e) => handleUpdateTestimonial(item.id, 'role', e.target.value)}
                    placeholder="Ví dụ: Chuyên gia Phục hình Thẩm mỹ, TP.HCM"
                    className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                  />
                </div>
              </div>

              {/* 2.3 Nội dung feedback */}
              <div>
                <label className="block text-[11px] font-mono font-bold text-slate-600 mb-1.5">
                  2.3. Nội dung feedback: <span className="text-slate-400 font-normal">(Lời chứng thực, nhận xét thực tế)</span>
                </label>
                <textarea
                  rows={3}
                  value={item.text}
                  onChange={(e) => handleUpdateTestimonial(item.id, 'text', e.target.value)}
                  placeholder='Ví dụ: "Khả năng tái tạo quang học của Beautifil II rất ấn tượng. Hiệu ứng tắc kè hoa giúp miếng trám chìm hoàn toàn vào mô răng thật..."'
                  className="w-full bg-white border border-slate-200 rounded-xl p-3.5 text-xs text-slate-700 leading-relaxed italic focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                />
              </div>

              {/* Thẻ preview mẫu */}
              <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-2xs">
                <div className="text-[10px] font-mono text-slate-400 uppercase mb-2">Xem trước thẻ hiển thị trên website:</div>
                <div className="border border-slate-100 rounded-xl p-4 bg-slate-50/40">
                  <p className="text-xs text-slate-600 italic mb-3 leading-relaxed">
                    {item.text || '(Chưa nhập nội dung feedback)'}
                  </p>
                  <div className="border-t border-slate-200/60 pt-2.5">
                    <h5 className="font-heading font-bold text-xs text-slate-900">
                      {item.name || '(Tên Bác sĩ/Chuyên gia)'}
                    </h5>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      {item.role || '(Chức danh / Nơi công tác)'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nút thêm feedback card phía dưới */}
        <div className="pt-2 text-center">
          <button
            type="button"
            onClick={handleAddTestimonial}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-dashed border-sky-300 bg-sky-50/50 text-[#00ADEF] font-mono text-xs font-bold hover:bg-sky-50 hover:border-sky-400 transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>Thêm Feedback Card mới (#{testimonialsList.length + 1})</span>
          </button>
        </div>
      </div>
    </div>
  );
};

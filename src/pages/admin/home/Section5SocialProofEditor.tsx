import React, { useState } from 'react';
import { 
  Users, 
  Bold, 
  Palette, 
  Eye, 
  Plus, 
  Trash2, 
  Quote, 
  UserCheck 
} from 'lucide-react';
import { TestimonialItem, applyFormat } from './types';
import { ImageUploaderField } from '../components/ImageUploaderField';

interface Section5SocialProofEditorProps {
  headline: string;
  setHeadline: (val: string) => void;
  subheadline: string;
  setSubheadline: (val: string) => void;
  testimonials: TestimonialItem[];
  setTestimonials: React.Dispatch<React.SetStateAction<TestimonialItem[]>>;
}

export const Section5SocialProofEditor: React.FC<Section5SocialProofEditorProps> = ({
  headline,
  setHeadline,
  subheadline,
  setSubheadline,
  testimonials,
  setTestimonials,
}) => {
  const [showLivePreview, setShowLivePreview] = useState(true);

  const handleUpdateTestimonial = (id: string, field: keyof TestimonialItem, val: string) => {
    setTestimonials(prev => prev.map(t => t.id === id ? { ...t, [field]: val } : t));
  };

  const handleAddTestimonial = () => {
    const newId = String(Date.now());
    setTestimonials(prev => [
      ...prev,
      {
        id: newId,
        name: 'BS. Chuyên khoa',
        role: 'Bác sĩ Phục hình',
        topic: 'Đánh giá lâm sàng',
        content: 'Chất lượng vật liệu của Shofu mang lại sự yên tâm tuyệt đối...',
        avatar: 'https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@f081ef33bfcfda01a376c61118e98a95a99fb6bc/public/images/Dr.%20Frank%20J.%20Milnar,%20DDS,%20AAACD.jpg'
      }
    ]);
  };

  const handleDeleteTestimonial = (id: string) => {
    setTestimonials(prev => prev.filter(t => t.id !== id));
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header section info */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm">
        <div className="flex items-center justify-between gap-4 mb-2">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-xs font-mono">
              05
            </span>
            <h3 className="font-heading font-extrabold text-xl text-slate-900">
              Bảo Chứng Chuyên Gia & Bác Sĩ (Social Proof)
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
          Quản lý các nhận xét, hình ảnh avatar và trích dẫn của các chuyên gia nha khoa quốc tế & trong nước.
        </p>
      </div>

      {/* 1. Headline & Subheadline */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Tiêu đề Section
          </label>
          <input
            type="text"
            value={headline}
            onChange={(e) => setHeadline(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-bold text-slate-900 focus:border-[#00ADEF] outline-none"
            placeholder="Bảo Chứng Bởi Các Chuyên Gia Lâm Sàng"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Đoạn giới thiệu phụ
          </label>
          <input
            type="text"
            value={subheadline}
            onChange={(e) => setSubheadline(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-600 focus:border-[#00ADEF] outline-none"
            placeholder="Hàng ngàn Bác sĩ trên toàn thế giới tin chọn Shofu..."
          />
        </div>
      </div>

      {/* 2. Testimonials List */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
        <div className="flex items-center justify-between">
          <h4 className="font-heading font-bold text-slate-900 text-sm uppercase tracking-wider flex items-center gap-2">
            <UserCheck className="w-4 h-4 text-[#00ADEF]" />
            <span>Danh sách Chuyên gia & Bác sĩ ({testimonials.length})</span>
          </h4>
          <button
            type="button"
            onClick={handleAddTestimonial}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-3 py-1.5 rounded-xl transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Thêm Bác sĩ</span>
          </button>
        </div>

        <div className="space-y-4">
          {testimonials.map((t, idx) => (
            <div key={t.id || idx} className="p-5 rounded-2xl border border-slate-200 bg-slate-50 space-y-4 relative group">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white border border-slate-200 overflow-hidden shrink-0 flex items-center justify-center">
                    {t.avatar ? (
                      <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                    ) : (
                      <Users className="w-6 h-6 text-slate-400" />
                    )}
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-slate-400">#0{idx + 1}</span>
                    <h5 className="font-heading font-bold text-slate-900 text-base">{t.name || 'Họ tên Bác sĩ'}</h5>
                    <span className="text-xs text-slate-500">{t.role}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleDeleteTestimonial(t.id)}
                  title="Xóa nhận xét"
                  className="p-1.5 text-slate-400 hover:text-red-600 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Họ tên Bác sĩ / Chuyên gia
                  </label>
                  <input
                    type="text"
                    value={t.name}
                    onChange={(e) => handleUpdateTestimonial(t.id, 'name', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-bold text-slate-900 bg-white focus:border-[#00ADEF] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Chức danh / Đơn vị
                  </label>
                  <input
                    type="text"
                    value={t.role}
                    onChange={(e) => handleUpdateTestimonial(t.id, 'role', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-700 bg-white focus:border-[#00ADEF] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Chủ đề trích dẫn (Topic)
                  </label>
                  <input
                    type="text"
                    value={t.topic}
                    onChange={(e) => handleUpdateTestimonial(t.id, 'topic', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-bold text-[#00ADEF] bg-white focus:border-[#00ADEF] outline-none"
                  />
                </div>
              </div>

              <div>
                <ImageUploaderField
                  label={`Ảnh chân dung ${t.name || 'Bác sĩ'}`}
                  badge="Avatar Bác sĩ"
                  value={t.avatar}
                  onChange={(url) => handleUpdateTestimonial(t.id, 'avatar', url)}
                  targetKey={`doctor-avatar-${t.id}`}
                  folder="images"
                  aspectRatio="h-28"
                  recommendation="Khuyên dùng ảnh chân dung chụp chính diện tỉ lệ 1:1"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Nội dung nhận xét đánh giá
                </label>
                <textarea
                  rows={3}
                  value={t.content}
                  onChange={(e) => handleUpdateTestimonial(t.id, 'content', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 bg-white focus:border-[#00ADEF] outline-none leading-relaxed"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Live Preview for Testimonials */}
        {showLivePreview && (
          <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 mt-6 space-y-3">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
              Xem trước Thẻ Đánh giá Chuyên gia:
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {testimonials.map((t, idx) => (
                <div key={t.id || idx} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <Quote className="w-6 h-6 text-slate-300" />
                    <span className="font-heading font-bold text-sm text-slate-900 block">
                      {t.topic}
                    </span>
                    <p className="text-xs text-slate-600 italic leading-relaxed">
                      "{t.content}"
                    </p>
                  </div>
                  <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover border border-slate-200"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="%2394a3b8" stroke-width="2"><circle cx="12" cy="7" r="4"/><path d="M5.5 21a8.38 8.38 0 0 1 13 0"/></svg>';
                      }}
                    />
                    <div>
                      <strong className="text-xs text-slate-900 block font-heading">{t.name}</strong>
                      <span className="text-[11px] text-slate-500 block">{t.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

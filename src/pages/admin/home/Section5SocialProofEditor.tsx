import React, { useState } from 'react';
import { 
  Users, 
  Bold, 
  Palette, 
  Eye, 
  Plus, 
  Trash2, 
  Quote, 
  UserCheck,
  ShieldCheck,
  Microscope,
  Link as LinkIcon,
  ShoppingCart,
  ArrowUpRight,
  Sparkles,
  HelpCircle,
  X,
  FileText,
  Layers,
  Award
} from 'lucide-react';
import { 
  TestimonialItem, 
  SciencePillar1, 
  SciencePillar2, 
  SciencePillar3, 
  SciencePillar4, 
  applyFormat 
} from './types';
import { ImageUploaderField } from '../components/ImageUploaderField';

interface Section5SocialProofEditorProps {
  badge: string;
  setBadge: (val: string) => void;
  headline: string;
  setHeadline: (val: string) => void;
  subheadline: string;
  setSubheadline: (val: string) => void;
  pillar1: SciencePillar1;
  setPillar1: React.Dispatch<React.SetStateAction<SciencePillar1>>;
  pillar2: SciencePillar2;
  setPillar2: React.Dispatch<React.SetStateAction<SciencePillar2>>;
  pillar3: SciencePillar3;
  setPillar3: React.Dispatch<React.SetStateAction<SciencePillar3>>;
  pillar4: SciencePillar4;
  setPillar4: React.Dispatch<React.SetStateAction<SciencePillar4>>;
  ctaText1: string;
  setCtaText1: (val: string) => void;
  ctaText2: string;
  setCtaText2: (val: string) => void;
  testimonials: TestimonialItem[];
  setTestimonials: React.Dispatch<React.SetStateAction<TestimonialItem[]>>;
}

export const Section5SocialProofEditor: React.FC<Section5SocialProofEditorProps> = ({
  badge,
  setBadge,
  headline,
  setHeadline,
  subheadline,
  setSubheadline,
  pillar1,
  setPillar1,
  pillar2,
  setPillar2,
  pillar3,
  setPillar3,
  pillar4,
  setPillar4,
  ctaText1,
  setCtaText1,
  ctaText2,
  setCtaText2,
  testimonials,
  setTestimonials,
}) => {
  const [showLivePreview, setShowLivePreview] = useState(true);
  const [activePillarTab, setActivePillarTab] = useState<'p1' | 'p2' | 'p3' | 'p4'>('p1');

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
          Quản lý Badge bảo chứng, 4 Trụ Cột Khoa Học, 2 nút CTA Xem ưu đãi và Danh sách nhận xét của các Bác sĩ chuyên khoa.
        </p>
      </div>

      {/* 1. Badge, Tiêu đề chính & Đoạn giới thiệu */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-5">
        <h4 className="font-heading font-bold text-slate-900 text-sm uppercase tracking-wider flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#00ADEF]" />
          <span>1. Huy hiệu Badge & Tiêu đề khối</span>
        </h4>

        {/* Badge input */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Huy hiệu đầu khối (Badge Pill)
          </label>
          <div className="relative">
            <ShieldCheck className="w-4 h-4 text-[#00ADEF] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={badge}
              onChange={(e) => setBadge(e.target.value)}
              className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-900 uppercase tracking-wider focus:border-[#00ADEF] outline-none"
              placeholder="Bảo Chứng Toàn Cầu"
            />
          </div>
        </div>

        {/* Headline with HTML formatting */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Tiêu đề chính (Hỗ trợ định dạng màu sắc & xuống dòng)
            </label>
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
              <button
                type="button"
                onClick={() => applyFormat('strong', setHeadline, 'social-headline-input')}
                title="In đậm chữ đang chọn"
                className="px-2 py-0.5 rounded text-[11px] font-bold bg-white text-slate-700 hover:text-black border border-slate-200 shadow-2xs flex items-center gap-1"
              >
                <Bold className="w-3 h-3" />
                <span>Đậm</span>
              </button>
              <button
                type="button"
                onClick={() => applyFormat('cyan', setHeadline, 'social-headline-input')}
                title="Đổi màu Xanh Shofu"
                className="px-2 py-0.5 rounded text-[11px] font-bold bg-sky-50 text-[#00ADEF] hover:bg-sky-100 border border-sky-200 shadow-2xs flex items-center gap-1"
              >
                <Palette className="w-3 h-3" />
                <span>Xanh Shofu</span>
              </button>
              <button
                type="button"
                onClick={() => applyFormat('red', setHeadline, 'social-headline-input')}
                title="Đổi màu Đỏ"
                className="px-2 py-0.5 rounded text-[11px] font-bold bg-red-50 text-[#C43838] hover:bg-red-100 border border-red-200 shadow-2xs flex items-center gap-1"
              >
                <Palette className="w-3 h-3" />
                <span>Đỏ</span>
              </button>
              <button
                type="button"
                onClick={() => applyFormat('br', setHeadline, 'social-headline-input')}
                title="Chèn ngắt dòng"
                className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-white text-slate-700 hover:text-black border border-slate-200 shadow-2xs"
              >
                &lt;br /&gt;
              </button>
            </div>
          </div>
          <input
            id="social-headline-input"
            type="text"
            value={headline}
            onChange={(e) => setHeadline(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-bold text-slate-900 focus:border-[#00ADEF] outline-none"
            placeholder='<span class="text-[#00ADEF]">4 Trụ Cột Khoa Học</span> <br className="hidden md:block" />Khẳng Định Vị Thế'
          />
        </div>

        {/* Subheadline with HTML formatting */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Đoạn giới thiệu phụ
            </label>
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
              <button
                type="button"
                onClick={() => applyFormat('strong', setSubheadline, 'social-sub-input')}
                title="In đậm chữ đang chọn"
                className="px-2 py-0.5 rounded text-[11px] font-bold bg-white text-slate-700 hover:text-black border border-slate-200 shadow-2xs flex items-center gap-1"
              >
                <Bold className="w-3 h-3" />
                <span>Đậm</span>
              </button>
              <button
                type="button"
                onClick={() => applyFormat('cyan', setSubheadline, 'social-sub-input')}
                title="Đổi màu Xanh Shofu"
                className="px-2 py-0.5 rounded text-[11px] font-bold bg-sky-50 text-[#00ADEF] hover:bg-sky-100 border border-sky-200 shadow-2xs flex items-center gap-1"
              >
                <Palette className="w-3 h-3" />
                <span>Xanh Shofu</span>
              </button>
            </div>
          </div>
          <textarea
            id="social-sub-input"
            rows={2}
            value={subheadline}
            onChange={(e) => setSubheadline(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-600 focus:border-[#00ADEF] outline-none leading-relaxed resize-none"
            placeholder="Hệ thống dữ liệu lâm sàng độc lập, nghiêm ngặt và minh bạch nhất..."
          />
        </div>
      </div>

      {/* 2. 4 Trụ Cột Khoa Học (Science Pillars) */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <h4 className="font-heading font-bold text-slate-900 text-sm uppercase tracking-wider flex items-center gap-2">
              <Microscope className="w-4 h-4 text-[#C43838]" />
              <span>2. 4 Thẻ Trụ Cột Khoa Học (Science Pillars)</span>
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              4 thẻ bằng chứng nghiên cứu nằm ở hàng trên, trước phần nhận xét Bác sĩ.
            </p>
          </div>

          {/* Tab buttons for 4 pillars */}
          <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl">
            <button
              type="button"
              onClick={() => setActivePillarTab('p1')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                activePillarTab === 'p1' ? 'bg-white text-[#C43838] shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Thẻ 1 (13 Năm)
            </button>
            <button
              type="button"
              onClick={() => setActivePillarTab('p2')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                activePillarTab === 'p2' ? 'bg-white text-[#00ADEF] shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Thẻ 2 (Nature)
            </button>
            <button
              type="button"
              onClick={() => setActivePillarTab('p3')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                activePillarTab === 'p3' ? 'bg-white text-[#C43838] shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Thẻ 3 (Lực Dán)
            </button>
            <button
              type="button"
              onClick={() => setActivePillarTab('p4')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                activePillarTab === 'p4' ? 'bg-white text-[#00ADEF] shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Thẻ 4 (350 BS)
            </button>
          </div>
        </div>

        {/* Tab 1: Pillar 1 */}
        {activePillarTab === 'p1' && (
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 animate-fadeIn">
            <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
              <span className="w-6 h-6 rounded-lg bg-red-100 text-[#C43838] font-bold text-xs flex items-center justify-center font-mono">
                01
              </span>
              <strong className="text-sm font-heading text-slate-900">
                Thẻ 1: Bảo chứng lâm sàng 13 năm (Đại học Florida / JADA)
              </strong>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                  Tag nguồn nghiên cứu (Góc phải)
                </label>
                <input
                  type="text"
                  value={pillar1.tag || ''}
                  onChange={(e) => setPillar1(prev => ({ ...prev, tag: e.target.value }))}
                  placeholder="Đại học Florida (JADA)"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-bold text-[#C43838] bg-white focus:border-[#C43838] outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                  Tiêu đề thẻ
                </label>
                <input
                  type="text"
                  value={pillar1.title || ''}
                  onChange={(e) => setPillar1(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="Bảo chứng lâm sàng 13 năm"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-extrabold text-slate-900 bg-white focus:border-[#00ADEF] outline-none"
                />
              </div>
            </div>

            {/* Box 1: Kết quả sau 8 năm */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-3">
              <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
                Khối trên: Kết quả sau 8 năm (3 chỉ số %)
              </span>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Tiêu đề thanh ngang khối 1
                </label>
                <input
                  type="text"
                  value={pillar1.box1Title || ''}
                  onChange={(e) => setPillar1(prev => ({ ...prev, box1Title: e.target.value }))}
                  placeholder="Kết quả sau 8 năm (JADA 2007)"
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-medium text-slate-800 bg-slate-50 focus:border-[#00ADEF] outline-none"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-center">
                  <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Chỉ số 1 (% Lưu giữ)
                  </label>
                  <input
                    type="text"
                    value={pillar1.stat1Value || ''}
                    onChange={(e) => setPillar1(prev => ({ ...prev, stat1Value: e.target.value }))}
                    placeholder="100"
                    className="w-full text-center text-base font-extrabold text-[#C43838] bg-transparent outline-none"
                  />
                  <input
                    type="text"
                    value={pillar1.stat1Label || ''}
                    onChange={(e) => setPillar1(prev => ({ ...prev, stat1Label: e.target.value }))}
                    placeholder="Lưu giữ"
                    className="w-full text-center text-[10px] font-medium text-slate-500 bg-transparent outline-none mt-1"
                  />
                </div>

                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-center">
                  <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Chỉ số 2 (% Sâu răng)
                  </label>
                  <input
                    type="text"
                    value={pillar1.stat2Value || ''}
                    onChange={(e) => setPillar1(prev => ({ ...prev, stat2Value: e.target.value }))}
                    placeholder="0"
                    className="w-full text-center text-base font-extrabold text-[#C43838] bg-transparent outline-none"
                  />
                  <input
                    type="text"
                    value={pillar1.stat2Label || ''}
                    onChange={(e) => setPillar1(prev => ({ ...prev, stat2Label: e.target.value }))}
                    placeholder="Sâu răng"
                    className="w-full text-center text-[10px] font-medium text-slate-500 bg-transparent outline-none mt-1"
                  />
                </div>

                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-center">
                  <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Chỉ số 3 (% Nhạy cảm)
                  </label>
                  <input
                    type="text"
                    value={pillar1.stat3Value || ''}
                    onChange={(e) => setPillar1(prev => ({ ...prev, stat3Value: e.target.value }))}
                    placeholder="0"
                    className="w-full text-center text-base font-extrabold text-[#C43838] bg-transparent outline-none"
                  />
                  <input
                    type="text"
                    value={pillar1.stat3Label || ''}
                    onChange={(e) => setPillar1(prev => ({ ...prev, stat3Label: e.target.value }))}
                    placeholder="Nhạy cảm"
                    className="w-full text-center text-[10px] font-medium text-slate-500 bg-transparent outline-none mt-1"
                  />
                </div>
              </div>
            </div>

            {/* Box 2: Tái khám 13 năm */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-3">
              <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
                Khối dưới: Tái khám 13 năm
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Tiêu đề (VD: Tái khám 13 năm)
                  </label>
                  <input
                    type="text"
                    value={pillar1.box2Title || ''}
                    onChange={(e) => setPillar1(prev => ({ ...prev, box2Title: e.target.value }))}
                    placeholder="Tái khám 13 năm"
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-bold text-slate-800 bg-slate-50 focus:border-[#00ADEF] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Mô tả nhỏ dưới tiêu đề
                  </label>
                  <input
                    type="text"
                    value={pillar1.box2Desc || ''}
                    onChange={(e) => setPillar1(prev => ({ ...prev, box2Desc: e.target.value }))}
                    placeholder="Sạch sâu răng viền dán"
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs text-slate-600 bg-slate-50 focus:border-[#00ADEF] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Tỷ lệ % (VD: 97)
                  </label>
                  <input
                    type="text"
                    value={pillar1.box2Value || ''}
                    onChange={(e) => setPillar1(prev => ({ ...prev, box2Value: e.target.value }))}
                    placeholder="97"
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-extrabold text-[#C43838] bg-slate-50 focus:border-[#00ADEF] outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Pillar 2 */}
        {activePillarTab === 'p2' && (
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 animate-fadeIn">
            <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
              <span className="w-6 h-6 rounded-lg bg-sky-100 text-[#00ADEF] font-bold text-xs flex items-center justify-center font-mono">
                02
              </span>
              <strong className="text-sm font-heading text-slate-900">
                Thẻ 2: Bằng chứng sinh học phân tử (ĐH Osaka / Nature 2018)
              </strong>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                  Tag nguồn nghiên cứu
                </label>
                <input
                  type="text"
                  value={pillar2.tag || ''}
                  onChange={(e) => setPillar2(prev => ({ ...prev, tag: e.target.value }))}
                  placeholder="ĐH Osaka (Nature 2018)"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-bold text-[#00ADEF] bg-white focus:border-[#00ADEF] outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                  Tiêu đề thẻ
                </label>
                <input
                  type="text"
                  value={pillar2.title || ''}
                  onChange={(e) => setPillar2(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="Bằng chứng sinh học phân tử"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-extrabold text-slate-900 bg-white focus:border-[#00ADEF] outline-none"
                />
              </div>
            </div>

            {/* Point 1 */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-3">
              <span className="text-[11px] font-bold text-[#00ADEF] uppercase tracking-wider block">
                Điểm số 1: Ức chế Gen
              </span>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Tiêu đề điểm 1
                </label>
                <input
                  type="text"
                  value={pillar2.point1Title || ''}
                  onChange={(e) => setPillar2(prev => ({ ...prev, point1Title: e.target.value }))}
                  placeholder="Ức chế Gen (pdh operon)"
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-bold text-slate-800 bg-slate-50 focus:border-[#00ADEF] outline-none"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Mô tả chi tiết điểm 1
                </label>
                <input
                  type="text"
                  value={pillar2.point1Desc || ''}
                  onChange={(e) => setPillar2(prev => ({ ...prev, point1Desc: e.target.value }))}
                  placeholder="Cắt đứt nguồn năng lượng của vi khuẩn S. mutans."
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs text-slate-600 bg-slate-50 focus:border-[#00ADEF] outline-none"
                />
              </div>
            </div>

            {/* Point 2 */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-3">
              <span className="text-[11px] font-bold text-[#00ADEF] uppercase tracking-wider block">
                Điểm số 2: Phá hủy Biofilm
              </span>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Tiêu đề điểm 2
                </label>
                <input
                  type="text"
                  value={pillar2.point2Title || ''}
                  onChange={(e) => setPillar2(prev => ({ ...prev, point2Title: e.target.value }))}
                  placeholder="Phá hủy Biofilm"
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-bold text-slate-800 bg-slate-50 focus:border-[#00ADEF] outline-none"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Mô tả chi tiết điểm 2
                </label>
                <input
                  type="text"
                  value={pillar2.point2Desc || ''}
                  onChange={(e) => setPillar2(prev => ({ ...prev, point2Desc: e.target.value }))}
                  placeholder="Suy yếu bám dính kỵ nước, dễ dàng bị rửa trôi."
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs text-slate-600 bg-slate-50 focus:border-[#00ADEF] outline-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Pillar 3 */}
        {activePillarTab === 'p3' && (
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 animate-fadeIn">
            <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
              <span className="w-6 h-6 rounded-lg bg-red-100 text-[#C43838] font-bold text-xs flex items-center justify-center font-mono">
                03
              </span>
              <strong className="text-sm font-heading text-slate-900">
                Thẻ 3: Chứng cứ thép về lực dán (Dental Advisor & SUNY)
              </strong>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                  Tag nguồn nghiên cứu
                </label>
                <input
                  type="text"
                  value={pillar3.tag || ''}
                  onChange={(e) => setPillar3(prev => ({ ...prev, tag: e.target.value }))}
                  placeholder="Dental Advisor & SUNY"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-bold text-[#C43838] bg-white focus:border-[#C43838] outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                  Tiêu đề thẻ
                </label>
                <input
                  type="text"
                  value={pillar3.title || ''}
                  onChange={(e) => setPillar3(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="Chứng cứ thép về lực dán"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-extrabold text-slate-900 bg-white focus:border-[#00ADEF] outline-none"
                />
              </div>
            </div>

            {/* Mục 1: BeautiLink SA */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-3">
              <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
                Mục 1: Xi măng dán BeautiLink SA
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Tên sản phẩm
                  </label>
                  <input
                    type="text"
                    value={pillar3.item1Name || ''}
                    onChange={(e) => setPillar3(prev => ({ ...prev, item1Name: e.target.value }))}
                    placeholder="BeautiLink SA"
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-bold text-slate-800 bg-slate-50 focus:border-[#00ADEF] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Ghi chú bề mặt
                  </label>
                  <input
                    type="text"
                    value={pillar3.item1Sub || ''}
                    onChange={(e) => setPillar3(prev => ({ ...prev, item1Sub: e.target.value }))}
                    placeholder="(Trên Zirconia)"
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs text-slate-600 bg-slate-50 focus:border-[#00ADEF] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Huy hiệu kiểm định
                  </label>
                  <input
                    type="text"
                    value={pillar3.item1Badge || ''}
                    onChange={(e) => setPillar3(prev => ({ ...prev, item1Badge: e.target.value }))}
                    placeholder="5.000 Chu kỳ lão hóa"
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-bold text-[#C43838] bg-slate-50 focus:border-[#00ADEF] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Lực dán (MPa)
                  </label>
                  <input
                    type="text"
                    value={pillar3.item1Value || ''}
                    onChange={(e) => setPillar3(prev => ({ ...prev, item1Value: e.target.value }))}
                    placeholder="45-50"
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-extrabold text-[#C43838] bg-slate-50 focus:border-[#00ADEF] outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Mục 2: BeautiBond */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-3">
              <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
                Mục 2: Keo dán BeautiBond (Không cần Etch)
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Tên khối keo dán
                  </label>
                  <input
                    type="text"
                    value={pillar3.item2Name || ''}
                    onChange={(e) => setPillar3(prev => ({ ...prev, item2Name: e.target.value }))}
                    placeholder="BeautiBond (Không cần Etch)"
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-bold text-slate-800 bg-slate-50 focus:border-[#00ADEF] outline-none"
                  />
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Men răng (MPa)
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={pillar3.enamelLabel || 'Men răng'}
                      onChange={(e) => setPillar3(prev => ({ ...prev, enamelLabel: e.target.value }))}
                      placeholder="Men răng"
                      className="w-1/2 text-xs text-slate-600 bg-transparent outline-none"
                    />
                    <input
                      type="text"
                      value={pillar3.enamelValue || '26.4'}
                      onChange={(e) => setPillar3(prev => ({ ...prev, enamelValue: e.target.value }))}
                      placeholder="26.4"
                      className="w-1/2 text-right font-bold text-slate-900 bg-transparent outline-none"
                    />
                  </div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Ngà răng (MPa)
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={pillar3.dentinLabel || 'Ngà răng'}
                      onChange={(e) => setPillar3(prev => ({ ...prev, dentinLabel: e.target.value }))}
                      placeholder="Ngà răng"
                      className="w-1/2 text-xs text-slate-600 bg-transparent outline-none"
                    />
                    <input
                      type="text"
                      value={pillar3.dentinValue || '27.8'}
                      onChange={(e) => setPillar3(prev => ({ ...prev, dentinValue: e.target.value }))}
                      placeholder="27.8"
                      className="w-1/2 text-right font-bold text-slate-900 bg-transparent outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Pillar 4 */}
        {activePillarTab === 'p4' && (
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 animate-fadeIn">
            <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
              <span className="w-6 h-6 rounded-lg bg-sky-100 text-[#00ADEF] font-bold text-xs flex items-center justify-center font-mono">
                04
              </span>
              <strong className="text-sm font-heading text-slate-900">
                Thẻ 4: Thực tế lâm sàng (Khảo sát 350 Bác sĩ)
              </strong>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                  Tag nguồn nghiên cứu
                </label>
                <input
                  type="text"
                  value={pillar4.tag || ''}
                  onChange={(e) => setPillar4(prev => ({ ...prev, tag: e.target.value }))}
                  placeholder="Khảo sát 350 Bác sĩ"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-bold text-[#00ADEF] bg-white focus:border-[#00ADEF] outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-1">
                  Tiêu đề thẻ
                </label>
                <input
                  type="text"
                  value={pillar4.title || ''}
                  onChange={(e) => setPillar4(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="Thực tế lâm sàng"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-extrabold text-slate-900 bg-white focus:border-[#00ADEF] outline-none"
                />
              </div>
            </div>

            {/* Chỉ số 1 */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-3">
              <span className="text-[11px] font-bold text-[#00ADEF] uppercase tracking-wider block">
                Thống kê 1: Thao tác tốt hơn
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Tỷ lệ % (VD: 75)
                  </label>
                  <input
                    type="text"
                    value={pillar4.stat1Value || ''}
                    onChange={(e) => setPillar4(prev => ({ ...prev, stat1Value: e.target.value }))}
                    placeholder="75"
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-extrabold text-[#00ADEF] bg-slate-50 focus:border-[#00ADEF] outline-none"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Tiêu đề chỉ số 1
                  </label>
                  <input
                    type="text"
                    value={pillar4.stat1Title || ''}
                    onChange={(e) => setPillar4(prev => ({ ...prev, stat1Title: e.target.value }))}
                    placeholder="Thao tác tốt hơn"
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-bold text-slate-800 bg-slate-50 focus:border-[#00ADEF] outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Mô tả phụ chỉ số 1
                </label>
                <input
                  type="text"
                  value={pillar4.stat1Desc || ''}
                  onChange={(e) => setPillar4(prev => ({ ...prev, stat1Desc: e.target.value }))}
                  placeholder="Đặc tính thao tác, trộn và độ chảy lỏng vượt trội."
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs text-slate-600 bg-slate-50 focus:border-[#00ADEF] outline-none"
                />
              </div>
            </div>

            {/* Chỉ số 2 */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-3">
              <span className="text-[11px] font-bold text-[#00ADEF] uppercase tracking-wider block">
                Thống kê 2: Thong thả thao tác
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Tỷ lệ % (VD: 86)
                  </label>
                  <input
                    type="text"
                    value={pillar4.stat2Value || ''}
                    onChange={(e) => setPillar4(prev => ({ ...prev, stat2Value: e.target.value }))}
                    placeholder="86"
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-extrabold text-[#00ADEF] bg-slate-50 focus:border-[#00ADEF] outline-none"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Tiêu đề chỉ số 2
                  </label>
                  <input
                    type="text"
                    value={pillar4.stat2Title || ''}
                    onChange={(e) => setPillar4(prev => ({ ...prev, stat2Title: e.target.value }))}
                    placeholder="Thong thả thao tác"
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-bold text-slate-800 bg-slate-50 focus:border-[#00ADEF] outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Mô tả phụ chỉ số 2
                </label>
                <input
                  type="text"
                  value={pillar4.stat2Desc || ''}
                  onChange={(e) => setPillar4(prev => ({ ...prev, stat2Desc: e.target.value }))}
                  placeholder="Thời gian làm việc (Working time) lý tưởng."
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs text-slate-600 bg-slate-50 focus:border-[#00ADEF] outline-none"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 3. Nút CTA 1: Dưới 4 Trụ Cột Khoa Học */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-red-100 text-[#D93025] flex items-center justify-center">
            <ShoppingCart className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-heading font-extrabold text-slate-900 text-base">
              3. Nút CTA 1: Dưới 4 Trụ Cột Khoa Học
            </h4>
            <p className="text-xs text-slate-500">
              Nút này kích hoạt mở Pop-up Ưu Đãi Đặc Biệt 2 Cột để Bác sĩ xem và đăng ký.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
            Nội dung chữ trên nút CTA 1 (Mặt trước Landing Page)
          </label>
          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <ShoppingCart className="w-4 h-4 text-[#00ADEF] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={ctaText1}
                onChange={(e) => setCtaText1(e.target.value)}
                placeholder="Xem ưu đãi và đặt hàng"
                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-bold text-slate-900 bg-white focus:border-[#00ADEF] outline-none"
              />
            </div>
            <div className="shrink-0 px-3 py-2 rounded-xl bg-sky-50 border border-sky-200 text-[#00ADEF] text-xs font-bold flex items-center gap-1.5">
              <span>Hành động:</span>
              <span className="font-mono bg-white px-2 py-0.5 rounded border border-sky-300 text-slate-900">
                Mở Pop-up Ưu đãi
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Testimonials List */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-heading font-bold text-slate-900 text-sm uppercase tracking-wider flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-[#00ADEF]" />
              <span>4. Danh sách Chuyên gia & Bác sĩ ({testimonials.length})</span>
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Các đánh giá lâm sàng từ các Bác sĩ, chuyên gia thẩm mỹ và giáo sư nha khoa.
            </p>
          </div>
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
      </div>

      {/* 5. Nút CTA 2: Dưới Danh Sách Chuyên Gia */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-red-100 text-[#D93025] flex items-center justify-center">
            <ShoppingCart className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-heading font-extrabold text-slate-900 text-base">
              5. Nút CTA 2: Dưới Danh Sách Chuyên Gia & Bác Sĩ
            </h4>
            <p className="text-xs text-slate-500">
              Nút này kích hoạt mở Pop-up Ưu Đãi Đặc Biệt 2 Cột ở cuối khối Social Proof.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
            Nội dung chữ trên nút CTA 2 (Mặt trước Landing Page)
          </label>
          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <ShoppingCart className="w-4 h-4 text-[#00ADEF] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={ctaText2}
                onChange={(e) => setCtaText2(e.target.value)}
                placeholder="Xem ưu đãi và đặt hàng"
                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-bold text-slate-900 bg-white focus:border-[#00ADEF] outline-none"
              />
            </div>
            <div className="shrink-0 px-3 py-2 rounded-xl bg-sky-50 border border-sky-200 text-[#00ADEF] text-xs font-bold flex items-center gap-1.5">
              <span>Hành động:</span>
              <span className="font-mono bg-white px-2 py-0.5 rounded border border-sky-300 text-slate-900">
                Mở Pop-up Ưu đãi
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 6. Live Preview Toàn Bộ Section */}
      {showLivePreview && (
        <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-[#00ADEF]" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Xem trước giao diện thực tế (Live Preview Section 05):
              </span>
            </div>
            <span className="text-[10px] font-mono bg-slate-800 text-slate-300 px-2 py-0.5 rounded">
              Giao diện thực tế trên website
            </span>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 text-slate-900 space-y-8">
            {/* Header Preview */}
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-1.5 bg-[#00ADEF]/10 border border-[#00ADEF]/20 px-3 py-1 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00ADEF]" />
                <span className="font-mono text-[10px] font-bold text-[#00ADEF] uppercase tracking-wider">
                  {badge || 'Bảo Chứng Toàn Cầu'}
                </span>
              </div>
              <h3 
                className="font-heading font-extrabold text-2xl uppercase tracking-tight text-slate-900"
                dangerouslySetInnerHTML={{ __html: headline || '4 Trụ Cột Khoa Học Khẳng Định Vị Thế' }}
              />
              <p 
                className="text-xs text-slate-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: subheadline || 'Hệ thống dữ liệu lâm sàng độc lập...' }}
              />
            </div>

            {/* 4 Pillars Grid Preview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Pillar 1 */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-xl bg-red-50 text-[#C43838] flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-[9px] font-mono font-bold text-[#C43838] bg-red-50 px-2 py-0.5 rounded-full border border-red-100">
                    {pillar1.tag || 'Đại học Florida (JADA)'}
                  </span>
                </div>
                <h4 className="font-heading font-bold text-base text-slate-900">
                  {pillar1.title || 'Bảo chứng lâm sàng 13 năm'}
                </h4>
                <div className="space-y-2">
                  <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-100">
                    <span className="text-[10px] font-bold text-slate-700 block mb-1">
                      {pillar1.box1Title || 'Kết quả sau 8 năm (JADA 2007)'}
                    </span>
                    <div className="grid grid-cols-3 text-center divide-x divide-slate-200">
                      <div>
                        <strong className="text-base text-[#C43838] block">{pillar1.stat1Value || '100'}%</strong>
                        <span className="text-[9px] text-slate-500 uppercase">{pillar1.stat1Label || 'Lưu giữ'}</span>
                      </div>
                      <div>
                        <strong className="text-base text-[#C43838] block">{pillar1.stat2Value || '0'}%</strong>
                        <span className="text-[9px] text-slate-500 uppercase">{pillar1.stat2Label || 'Sâu răng'}</span>
                      </div>
                      <div>
                        <strong className="text-base text-[#C43838] block">{pillar1.stat3Value || '0'}%</strong>
                        <span className="text-[9px] text-slate-500 uppercase">{pillar1.stat3Label || 'Nhạy cảm'}</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-100 flex items-center justify-between">
                    <div>
                      <strong className="text-xs text-slate-800 block">{pillar1.box2Title || 'Tái khám 13 năm'}</strong>
                      <span className="text-[9px] text-slate-500">{pillar1.box2Desc || 'Sạch sâu răng viền dán'}</span>
                    </div>
                    <strong className="text-xl text-[#C43838]">{pillar1.box2Value || '97'}%</strong>
                  </div>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-xl bg-sky-50 text-[#00ADEF] flex items-center justify-center">
                    <Microscope className="w-4 h-4" />
                  </div>
                  <span className="text-[9px] font-mono font-bold text-[#00ADEF] bg-sky-50 px-2 py-0.5 rounded-full border border-sky-100">
                    {pillar2.tag || 'ĐH Osaka (Nature 2018)'}
                  </span>
                </div>
                <h4 className="font-heading font-bold text-base text-slate-900">
                  {pillar2.title || 'Bằng chứng sinh học phân tử'}
                </h4>
                <div className="space-y-2">
                  <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-100 flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-sky-100 text-[#00ADEF] text-xs font-bold flex items-center justify-center shrink-0">
                      1
                    </span>
                    <div>
                      <strong className="text-xs text-slate-800 block">{pillar2.point1Title || 'Ức chế Gen (pdh operon)'}</strong>
                      <span className="text-[10px] text-slate-500">{pillar2.point1Desc || 'Cắt đứt nguồn năng lượng của vi khuẩn.'}</span>
                    </div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-100 flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-sky-100 text-[#00ADEF] text-xs font-bold flex items-center justify-center shrink-0">
                      2
                    </span>
                    <div>
                      <strong className="text-xs text-slate-800 block">{pillar2.point2Title || 'Phá hủy Biofilm'}</strong>
                      <span className="text-[10px] text-slate-500">{pillar2.point2Desc || 'Suy yếu bám dính kỵ nước.'}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-xl bg-red-50 text-[#C43838] flex items-center justify-center">
                    <LinkIcon className="w-4 h-4" />
                  </div>
                  <span className="text-[9px] font-mono font-bold text-[#C43838] bg-red-50 px-2 py-0.5 rounded-full border border-red-100">
                    {pillar3.tag || 'Dental Advisor & SUNY'}
                  </span>
                </div>
                <h4 className="font-heading font-bold text-base text-slate-900">
                  {pillar3.title || 'Chứng cứ thép về lực dán'}
                </h4>
                <div className="space-y-2">
                  <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-100 flex items-center justify-between">
                    <div>
                      <strong className="text-xs text-slate-800 block">{pillar3.item1Name || 'BeautiLink SA'} {pillar3.item1Sub || '(Trên Zirconia)'}</strong>
                      <span className="text-[9px] font-bold text-[#C43838] bg-red-50 px-1.5 py-0.5 rounded">{pillar3.item1Badge || '5.000 Chu kỳ'}</span>
                    </div>
                    <strong className="text-xl text-[#C43838]">{pillar3.item1Value || '45-50'} <span className="text-xs text-slate-400">MPa</span></strong>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-100">
                    <span className="text-[10px] font-bold text-slate-700 block mb-1">{pillar3.item2Name || 'BeautiBond'}</span>
                    <div className="grid grid-cols-2 divide-x divide-slate-200 text-center">
                      <div>
                        <span className="text-[9px] text-slate-400 uppercase block">{pillar3.enamelLabel || 'Men răng'}</span>
                        <strong className="text-sm text-slate-800">{pillar3.enamelValue || '26.4'} MPa</strong>
                      </div>
                      <div>
                        <span className="text-[9px] text-slate-400 uppercase block">{pillar3.dentinLabel || 'Ngà răng'}</span>
                        <strong className="text-sm text-slate-800">{pillar3.dentinValue || '27.8'} MPa</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pillar 4 */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-xl bg-sky-50 text-[#00ADEF] flex items-center justify-center">
                    <Users className="w-4 h-4" />
                  </div>
                  <span className="text-[9px] font-mono font-bold text-[#00ADEF] bg-sky-50 px-2 py-0.5 rounded-full border border-sky-100">
                    {pillar4.tag || 'Khảo sát 350 Bác sĩ'}
                  </span>
                </div>
                <h4 className="font-heading font-bold text-base text-slate-900">
                  {pillar4.title || 'Thực tế lâm sàng'}
                </h4>
                <div className="space-y-2">
                  <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-100 flex items-center gap-3">
                    <strong className="text-2xl text-[#00ADEF] shrink-0">{pillar4.stat1Value || '75'}%</strong>
                    <div>
                      <strong className="text-xs text-slate-800 block">{pillar4.stat1Title || 'Thao tác tốt hơn'}</strong>
                      <span className="text-[10px] text-slate-500 leading-tight block">{pillar4.stat1Desc}</span>
                    </div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-100 flex items-center gap-3">
                    <strong className="text-2xl text-[#00ADEF] shrink-0">{pillar4.stat2Value || '86'}%</strong>
                    <div>
                      <strong className="text-xs text-slate-800 block">{pillar4.stat2Title || 'Thong thả thao tác'}</strong>
                      <span className="text-[10px] text-slate-500 leading-tight block">{pillar4.stat2Desc}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA 1 Button Preview */}
            <div className="text-center py-2">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00ADEF] text-white font-bold text-xs shadow-md">
                <ShoppingCart className="w-4 h-4" />
                <span>{ctaText1 || 'Xem ưu đãi và đặt hàng'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            {/* Testimonials Carousel Preview */}
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Nhận xét chuyên gia & bác sĩ:
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {testimonials.slice(0, 2).map((t, idx) => (
                  <div key={t.id || idx} className="bg-white rounded-xl p-4 border border-slate-200 shadow-2xs space-y-2">
                    <span className="font-heading font-bold text-xs text-slate-900 block truncate">
                      {t.topic}
                    </span>
                    <p className="text-[11px] text-slate-600 italic line-clamp-2">
                      "{t.content}"
                    </p>
                    <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-7 h-7 rounded-full object-cover border border-slate-200"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="%2394a3b8" stroke-width="2"><circle cx="12" cy="7" r="4"/><path d="M5.5 21a8.38 8.38 0 0 1 13 0"/></svg>';
                        }}
                      />
                      <div className="min-w-0">
                        <strong className="text-[11px] text-slate-900 block truncate font-heading">{t.name}</strong>
                        <span className="text-[10px] text-slate-400 block truncate">{t.role}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA 2 Button Preview */}
            <div className="text-center pt-2">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00ADEF] text-white font-bold text-xs shadow-md">
                <ShoppingCart className="w-4 h-4" />
                <span>{ctaText2 || 'Xem ưu đãi và đặt hàng'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

import React, { useState } from 'react';
import { 
  Download, 
  Bold, 
  Eye, 
  Plus, 
  Trash2, 
  CheckCircle2, 
  FileText,
  Palette,
  Image as ImageIcon
} from 'lucide-react';
import { applyFormat } from './types';
import { CtaFormConfigEditor } from '../components/CtaFormConfigEditor';
import { ImageUploaderField } from '../components/ImageUploaderField';

interface Section7LeadMagnetEditorProps {
  badge: string;
  setBadge: (val: string) => void;
  headline: string;
  setHeadline: (val: string) => void;
  subheadline: string;
  setSubheadline: (val: string) => void;
  coverImage: string;
  setCoverImage: (val: string) => void;
  benefits: string[];
  setBenefits: React.Dispatch<React.SetStateAction<string[]>>;
  ctaButtonText: string;
  setCtaButtonText: (val: string) => void;
  ctaFormTitle: string;
  setCtaFormTitle: (val: string) => void;
  ctaFormDesc: string;
  setCtaFormDesc: (val: string) => void;
  ctaFormExtraHtml: string;
  setCtaFormExtraHtml: (val: string) => void;
  ctaRedirectThanks: boolean;
  setCtaRedirectThanks: (val: boolean) => void;
  ctaTargetUrl: string;
  setCtaTargetUrl: (val: string) => void;
  ctaResourceTitle: string;
  setCtaResourceTitle: (val: string) => void;
}

export const Section7LeadMagnetEditor: React.FC<Section7LeadMagnetEditorProps> = ({
  badge,
  setBadge,
  headline,
  setHeadline,
  subheadline,
  setSubheadline,
  coverImage,
  setCoverImage,
  benefits,
  setBenefits,
  ctaButtonText,
  setCtaButtonText,
  ctaFormTitle,
  setCtaFormTitle,
  ctaFormDesc,
  setCtaFormDesc,
  ctaFormExtraHtml,
  setCtaFormExtraHtml,
  ctaRedirectThanks,
  setCtaRedirectThanks,
  ctaTargetUrl,
  setCtaTargetUrl,
  ctaResourceTitle,
  setCtaResourceTitle,
}) => {
  const [showLivePreview, setShowLivePreview] = useState(true);

  const handleUpdateBenefit = (idx: number, val: string) => {
    setBenefits(prev => prev.map((b, i) => i === idx ? val : b));
  };

  const handleAddBenefit = () => {
    setBenefits(prev => [...prev, 'Lợi ích tài liệu mới bổ sung...']);
  };

  const handleDeleteBenefit = (idx: number) => {
    setBenefits(prev => prev.filter((_, i) => i !== idx));
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header section info */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm">
        <div className="flex items-center justify-between gap-4 mb-2">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-red-100 text-[#8C2828] font-bold flex items-center justify-center text-xs font-mono">
              07
            </span>
            <h3 className="font-heading font-extrabold text-xl text-slate-900">
              Khu Vực Nhận Tài Liệu & Form Đăng Ký (Lead Magnet)
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
          Tùy biến tài liệu lâm sàng độc quyền, tiêu đề/mô tả định dạng HTML, các điểm lợi ích, ảnh mockup bên cột trái và form thu lead đồng bộ.
        </p>
      </div>

      {/* 1. Badge, Headline & Subheadline (Hỗ trợ HTML) */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-5">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Huy hiệu trên cùng (Badge)
          </label>
          <input
            type="text"
            value={badge}
            onChange={(e) => setBadge(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-bold text-slate-900 focus:border-[#00ADEF] outline-none"
            placeholder="TÀI LIỆU ĐỘC QUYỀN MIỄN PHÍ"
          />
        </div>

        {/* Headline with HTML tools */}
        <div>
          <div className="flex items-center justify-between mb-1.5 flex-wrap gap-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Tiêu đề Cẩm nang lâm sàng (Hỗ trợ HTML)
            </label>
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
              <button
                type="button"
                onClick={() => applyFormat('strong', setHeadline, 'leadmagnet-headline-input')}
                title="In đậm chữ đang chọn"
                className="px-2 py-0.5 rounded text-[11px] font-bold bg-white text-slate-700 hover:text-black border border-slate-200 shadow-2xs flex items-center gap-1"
              >
                <Bold className="w-3 h-3" />
                <span>Đậm</span>
              </button>
              <button
                type="button"
                onClick={() => applyFormat('cyan', setHeadline, 'leadmagnet-headline-input')}
                title="Đổi màu Xanh Shofu"
                className="px-2 py-0.5 rounded text-[11px] font-bold bg-sky-50 text-[#00ADEF] hover:bg-sky-100 border border-sky-200 shadow-2xs flex items-center gap-1"
              >
                <Palette className="w-3 h-3" />
                <span>Xanh</span>
              </button>
              <button
                type="button"
                onClick={() => applyFormat('red', setHeadline, 'leadmagnet-headline-input')}
                title="Đổi màu Đỏ"
                className="px-2 py-0.5 rounded text-[11px] font-bold bg-red-50 text-[#C43838] hover:bg-red-100 border border-red-200 shadow-2xs flex items-center gap-1"
              >
                <Palette className="w-3 h-3" />
                <span>Đỏ</span>
              </button>
              <button
                type="button"
                onClick={() => applyFormat('amber', setHeadline, 'leadmagnet-headline-input')}
                title="Nổi bật vàng"
                className="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-200 shadow-2xs flex items-center gap-1"
              >
                <Palette className="w-3 h-3" />
                <span>Vàng</span>
              </button>
              <button
                type="button"
                onClick={() => applyFormat('br', setHeadline, 'leadmagnet-headline-input')}
                title="Chèn ngắt dòng"
                className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-white text-slate-700 hover:text-black border border-slate-200 shadow-2xs"
              >
                &lt;br /&gt;
              </button>
            </div>
          </div>
          <textarea
            id="leadmagnet-headline-input"
            rows={2}
            value={headline}
            onChange={(e) => setHeadline(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-bold text-slate-900 focus:border-[#00ADEF] outline-none"
            placeholder="CẨM NANG LÂM SÀNG: PHỤC HỒI & PHÒNG NGỪA SHOFU"
          />
          <div className="mt-2 p-3 bg-slate-50 border border-slate-200 rounded-xl">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
              Xem trước HTML tiêu đề:
            </span>
            <div
              className="text-base font-extrabold text-slate-900 leading-snug"
              dangerouslySetInnerHTML={{ __html: headline || '(Chưa nhập tiêu đề)' }}
            />
          </div>
        </div>

        {/* Subheadline with HTML tools */}
        <div>
          <div className="flex items-center justify-between mb-1.5 flex-wrap gap-2">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Mô tả tóm tắt nội dung (Hỗ trợ HTML)
            </label>
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
              <button
                type="button"
                onClick={() => applyFormat('strong', setSubheadline, 'leadmagnet-subheadline-input')}
                title="In đậm chữ đang chọn"
                className="px-2 py-0.5 rounded text-[11px] font-bold bg-white text-slate-700 hover:text-black border border-slate-200 shadow-2xs flex items-center gap-1"
              >
                <Bold className="w-3 h-3" />
                <span>Đậm</span>
              </button>
              <button
                type="button"
                onClick={() => applyFormat('cyan', setSubheadline, 'leadmagnet-subheadline-input')}
                title="Đổi màu Xanh Shofu"
                className="px-2 py-0.5 rounded text-[11px] font-bold bg-sky-50 text-[#00ADEF] hover:bg-sky-100 border border-sky-200 shadow-2xs flex items-center gap-1"
              >
                <Palette className="w-3 h-3" />
                <span>Xanh</span>
              </button>
              <button
                type="button"
                onClick={() => applyFormat('red', setSubheadline, 'leadmagnet-subheadline-input')}
                title="Đổi màu Đỏ"
                className="px-2 py-0.5 rounded text-[11px] font-bold bg-red-50 text-[#C43838] hover:bg-red-100 border border-red-200 shadow-2xs flex items-center gap-1"
              >
                <Palette className="w-3 h-3" />
                <span>Đỏ</span>
              </button>
              <button
                type="button"
                onClick={() => applyFormat('amber', setSubheadline, 'leadmagnet-subheadline-input')}
                title="Nổi bật vàng"
                className="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-200 shadow-2xs flex items-center gap-1"
              >
                <Palette className="w-3 h-3" />
                <span>Vàng</span>
              </button>
              <button
                type="button"
                onClick={() => applyFormat('br', setSubheadline, 'leadmagnet-subheadline-input')}
                title="Chèn ngắt dòng"
                className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-white text-slate-700 hover:text-black border border-slate-200 shadow-2xs"
              >
                &lt;br /&gt;
              </button>
            </div>
          </div>
          <textarea
            id="leadmagnet-subheadline-input"
            rows={3}
            value={subheadline}
            onChange={(e) => setSubheadline(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:border-[#00ADEF] outline-none leading-relaxed"
          />
          <div className="mt-2 p-3 bg-slate-50 border border-slate-200 rounded-xl">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
              Xem trước HTML mô tả:
            </span>
            <div
              className="text-xs text-slate-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: subheadline || '(Chưa nhập mô tả)' }}
            />
          </div>
        </div>
      </div>

      {/* 2. Các điểm giá trị nổi bật của Cẩm nang (4) */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="font-heading font-bold text-slate-900 text-sm uppercase tracking-wider flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Các điểm giá trị nổi bật của Cẩm nang ({benefits.length})</span>
          </h4>
          <button
            type="button"
            onClick={handleAddBenefit}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-3 py-1.5 rounded-xl transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Thêm ý</span>
          </button>
        </div>

        <div className="space-y-3">
          {benefits.map((b, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="w-6 text-xs font-mono font-bold text-slate-400 text-center">
                0{idx + 1}
              </span>
              <input
                type="text"
                value={b}
                onChange={(e) => handleUpdateBenefit(idx, e.target.value)}
                className="flex-1 px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 focus:border-[#00ADEF] outline-none"
              />
              <button
                type="button"
                onClick={() => handleDeleteBenefit(idx)}
                className="p-2 text-slate-400 hover:text-red-600 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Ảnh Bìa / Mockup Tài Liệu E-book - NẰM PHÍA DƯỚI CÁC ĐIỂM GIÁ TRỊ NỔI BẬT CỦA CẨM NANG (CỘT BÊN TRÁI) */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
        <h4 className="font-heading font-bold text-slate-900 text-sm uppercase tracking-wider flex items-center gap-2">
          <ImageIcon className="w-4 h-4 text-[#00ADEF]" />
          <span>Ảnh Bìa / Mockup Tài Liệu E-book (Vị trí: Nằm phía dưới các điểm giá trị)</span>
        </h4>
        <ImageUploaderField
          label="Ảnh Bìa / Mockup Tài Liệu E-book"
          badge="Lead Magnet Cover"
          value={coverImage}
          onChange={setCoverImage}
          targetKey="leadmagnet-cover"
          folder="images"
          aspectRatio="h-40"
          recommendation="Ảnh mockup sách E-book, cẩm nang lâm sàng hoặc video protocol (nằm ở cột trái bên dưới các điểm giá trị)"
        />
      </div>

      {/* 4. Cấu hình Form Thu Lead & Nút Đăng Ký */}
      <CtaFormConfigEditor
        label="Nút Đăng Ký Nhận Tài Liệu & Cấu Hình Form Thu Lead Đồng Bộ"
        ctaText={ctaButtonText}
        onChangeCtaText={setCtaButtonText}
        formTitle={ctaFormTitle}
        onChangeFormTitle={setCtaFormTitle}
        formDesc={ctaFormDesc}
        onChangeFormDesc={setCtaFormDesc}
        formExtraHtml={ctaFormExtraHtml}
        onChangeFormExtraHtml={setCtaFormExtraHtml}
        redirectThanks={ctaRedirectThanks}
        onChangeRedirectThanks={setCtaRedirectThanks}
        targetUrl={ctaTargetUrl}
        onChangeTargetUrl={setCtaTargetUrl}
        resourceTitle={ctaResourceTitle}
        onChangeResourceTitle={setCtaResourceTitle}
      />

      {/* Live Preview for Lead Magnet */}
      {showLivePreview && (
        <div className="bg-slate-100 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
            Xem trước Khối Nhận Tài Liệu Độc Quyền (Lead Magnet):
          </span>
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-start">
            {/* Cột bên trái: Badge + Headline + Subheadline + 4 Điểm nổi bật + ẢNH BÌA/MOCKUP DƯỚI CÙNG */}
            <div className="flex-1 space-y-4 w-full">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-[#C43838] border border-red-100 text-xs font-bold">
                <FileText className="w-3.5 h-3.5" />
                <span>{badge || 'Tài Liệu Độc Quyền'}</span>
              </div>
              <h4 
                className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 leading-snug"
                dangerouslySetInnerHTML={{ __html: headline || 'Tiêu đề tài liệu' }}
              />
              <p 
                className="text-xs sm:text-sm text-slate-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: subheadline || 'Mô tả tài liệu' }}
              />
              <ul className="space-y-2 text-xs text-slate-700">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00ADEF] shrink-0" />
                    <span dangerouslySetInnerHTML={{ __html: b }} />
                  </li>
                ))}
              </ul>

              {/* Ảnh bìa / mockup cẩm nang nằm phía dưới các điểm giá trị nổi bật */}
              {coverImage && (
                <div className="pt-3">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 max-w-sm">
                    <img 
                      src={coverImage} 
                      alt="Mockup E-book" 
                      className="max-h-48 w-auto mx-auto object-contain drop-shadow-sm rounded-lg" 
                    />
                    <div className="text-[10px] text-center font-mono text-slate-400 mt-2">
                      Ảnh mockup cẩm nang (cột trái)
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Cột bên phải: Form thu lead đồng bộ */}
            <div className="w-full md:w-96 shrink-0 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3.5">
              <div className="text-center pb-1 border-b border-slate-200/80">
                <h5 className="font-heading font-bold text-sm text-slate-900">
                  {ctaFormTitle || 'Đăng Ký Nhận Cẩm Nang & Báo Giá'}
                </h5>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  {ctaFormDesc || 'Điền thông tin để nhận bản mềm PDF qua Zalo & Email ngay lập tức'}
                </p>
              </div>

              <div className="space-y-2.5 text-left text-xs">
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Tên Bác sĩ / Nha khoa *</span>
                  <div className="h-9 bg-white rounded-xl border border-slate-200 px-3 flex items-center text-slate-400">
                    BS. Nguyễn Văn A
                  </div>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Số điện thoại (Zalo) *</span>
                  <div className="h-9 bg-white rounded-xl border border-slate-200 px-3 flex items-center text-slate-400">
                    0967 287 139
                  </div>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Phòng khám / Nơi công tác *</span>
                  <div className="h-9 bg-white rounded-xl border border-slate-200 px-3 flex items-center text-slate-400">
                    Nha khoa Sài Gòn
                  </div>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Địa chỉ Email</span>
                  <div className="h-9 bg-white rounded-xl border border-slate-200 px-3 flex items-center text-slate-400">
                    bacsi@nhakhoa.com
                  </div>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Ghi chú / Nhu cầu</span>
                  <div className="h-9 bg-white rounded-xl border border-slate-200 px-3 flex items-center text-slate-400">
                    Gửi tài liệu bản in + báo giá
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="w-full py-3 bg-[#00ADEF] text-white rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md shadow-sky-500/20"
              >
                <Download className="w-4 h-4" />
                <span>{ctaButtonText || 'Nhận Tài Liệu Ngay'}</span>
              </button>
              <p className="text-[10px] text-center text-slate-400">
                Cam kết bảo mật thông tin tuyệt đối theo tiêu chuẩn Sota-D.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

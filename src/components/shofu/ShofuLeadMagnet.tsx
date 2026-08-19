import React, { useState } from 'react';
import { Download, FileText, CheckCircle2 } from 'lucide-react';

export function ShofuLeadMagnet() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo submission
    setIsSubmitted(true);
  };

  return (
    <section id="lead-magnet" className="py-20 relative border-b border-slate-200 bg-slate-100 bg-grid-pattern">
      <div className="absolute inset-0 bitcoin-gradient opacity-10"></div>
      
      <div className="w-[90%] lg:w-[80%] mx-auto relative z-10">
        <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 md:p-16 shadow-2xl border border-slate-100 flex flex-col md:flex-row gap-12 items-center">
          
          {/* Content */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-100 mb-6">
              <FileText className="w-4 h-4 text-[#C43838]" />
              <span className="font-mono text-xs font-bold text-[#C43838] uppercase tracking-widest">Tài Liệu Độc Quyền</span>
            </div>
            
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 mb-4 leading-tight">
              Nhận Trọn Bộ <br />
              <span className="text-[#00ADEF]">Bảng Giá Sỉ & Protocol</span>
            </h2>
            
            <p className="font-body text-slate-600 mb-8">
              Đăng ký ngay để nhận báo giá chiết khấu đặc biệt dành cho Phòng khám/Nha khoa, kèm theo cẩm nang lâm sàng chi tiết quy trình ứng dụng vật liệu Shofu.
            </p>
            
            <ul className="space-y-3 font-body text-sm text-slate-700">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#00ADEF]" /> Bảng giá sỉ vật liệu tiêu hao 2026</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#00ADEF]" /> Protocol trám răng sau Beautifil Injectable</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#00ADEF]" /> Cẩm nang chống ê buốt với Giomer</li>
            </ul>
          </div>

          {/* Form */}
          <div className="w-full md:w-[400px] shrink-0">
            {isSubmitted ? (
              <div className="bg-sky-50 rounded-2xl p-8 text-center border border-sky-100 h-full flex flex-col justify-center">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-[#00ADEF]" />
                </div>
                <h3 className="font-heading font-bold text-xl text-sky-900 mb-2">Đăng Ký Thành Công!</h3>
                <p className="font-body text-sky-700 text-sm">
                  Chuyên viên Sota-D sẽ liên hệ và gửi tài liệu qua Zalo của Bác sĩ trong ít phút tới.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-[#00ADEF] text-sm font-bold hover:underline"
                >
                  Đăng ký tài khoản khác
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <div className="mb-4">
                  <label className="block font-mono text-xs font-bold text-slate-700 uppercase mb-2">
                    Tên Bác sĩ / Nha khoa
                  </label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-[#00ADEF] focus:ring-1 focus:ring-[#00ADEF]"
                    placeholder="VD: BS. Nguyễn Văn A"
                  />
                </div>
                <div className="mb-6">
                  <label className="block font-mono text-xs font-bold text-slate-700 uppercase mb-2">
                    Số điện thoại (Zalo)
                  </label>
                  <input 
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-[#00ADEF] focus:ring-1 focus:ring-[#00ADEF]"
                    placeholder="VD: 0967 287 139"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#00ADEF] text-white font-mono text-sm font-bold uppercase tracking-wider hover:bg-sky-500 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-sky-500/25"
                >
                  <Download className="w-4 h-4" />
                  Nhận Tài Liệu Ngay
                </button>
                <p className="text-center font-body text-[10px] text-slate-500 mt-4">
                  Cam kết bảo mật thông tin tuyệt đối theo tiêu chuẩn Sota-D.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

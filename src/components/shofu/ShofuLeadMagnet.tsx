import React, { useState } from 'react';
import { Download, FileText, CheckCircle2, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';

export function ShofuLeadMagnet() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const payload = {
      name: formData.name,
      phone: formData.phone,
      clinic: formData.email ? `Email: ${formData.email}` : '',
      wantsCustomOffer: 'No',
      selectedPromos: 'Lead Magnet: Đăng ký nhận tài liệu độc quyền'
    };

    const webhookUrl = "https://script.google.com/macros/s/AKfycbxc-EtHL1Un2AgalFAz8RvxlHX0TtE4q6OK2h0CiSNWBo7tvP1sDhBiJv7vvrRkJ3-zgQ/exec";
    const bodyString = new URLSearchParams(payload as any).toString();

    fetch(webhookUrl, {
      method: 'POST',
      body: bodyString,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      mode: 'no-cors'
    })
    .then(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    })
    .catch(err => {
      console.error(err);
      setIsSubmitting(false);
      // fallback
      setIsSubmitted(true);
    });
  };

  return (
    <section id="lead-magnet" className="py-20 relative border-b border-slate-200 bg-slate-100 bg-grid-pattern overflow-hidden">
      <div className="absolute inset-0 bitcoin-gradient opacity-10"></div>
      
      <div className="w-[90%] lg:w-[80%] mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white rounded-[2.5rem] p-8 sm:p-12 md:p-16 shadow-2xl border border-slate-100 flex flex-col md:flex-row gap-12 items-center"
        >
          
          {/* Content */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-100 mb-6">
              <FileText className="w-4 h-4 text-[#C43838]" />
              <span className="font-mono text-xs font-bold text-[#C43838] uppercase tracking-widest">Tài Liệu Độc Quyền</span>
            </div>
            
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-900 mb-4 leading-[1.3] sm:leading-tight">
              Nhận trọn bộ <br />
              tài liệu độc quyền, <br />
              <span className="text-[#00ADEF]">video protocol chi tiết</span>
            </h2>
            
            <p className="font-body text-slate-600 mb-8">
              Đăng ký ngay để nhận <strong className="text-amber-600">báo giá chiết khấu đặc biệt</strong> dành cho Phòng khám/Nha khoa, kèm theo <strong className="text-[#00ADEF]">cẩm nang lâm sàng chi tiết</strong> quy trình ứng dụng vật liệu Shofu.
            </p>
            
            <ul className="space-y-3 font-body text-sm text-slate-700">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#00ADEF]" /> Cẩm nang chống ê buốt với Giomer</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#00ADEF]" /> Protocol Posterior Restoration</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#00ADEF]" /> Protocol 3D Printed Technical</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#00ADEF]" /> Ưu đãi đặc biệt gói trám MiCD</li>
            </ul>
          </div>

          {/* Form */}
          <div className="w-full md:w-[400px] shrink-0">
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-sky-50 rounded-2xl p-8 text-center border border-sky-100 h-full flex flex-col justify-center"
              >
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-[#00ADEF]" />
                </div>
                <h3 className="font-heading font-bold text-xl text-sky-900 mb-2">Đăng Ký Thành Công!</h3>
                <p className="font-body text-sky-700 text-sm mb-6">
                  Cảm ơn Bác sĩ đã tạo cơ hội cho Sota-D được phục vụ. Chúng tôi sẽ sớm liên hệ và gửi thông tin.
                </p>

                <div className="bg-white border border-sky-100 rounded-xl p-5 text-left mb-6 shadow-sm">
                  <h4 className="text-xs font-bold text-sky-800 uppercase tracking-wider mb-3">Thông tin đã ghi nhận</h4>
                  <div className="space-y-2">
                    <div className="flex">
                      <span className="w-24 text-slate-500 text-sm">Bác sĩ:</span>
                      <span className="font-bold text-slate-900 text-sm flex-1">{formData.name}</span>
                    </div>
                    <div className="flex">
                      <span className="w-24 text-slate-500 text-sm">SĐT:</span>
                      <span className="font-bold text-slate-900 text-sm flex-1">{formData.phone}</span>
                    </div>
                    <div className="flex">
                      <span className="w-24 text-slate-500 text-sm">Email:</span>
                      <span className="font-bold text-slate-900 text-sm flex-1">{formData.email}</span>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', phone: '', email: '' });
                  }}
                  className="w-full bg-[#00ADEF] text-white font-bold px-6 py-3 rounded-xl hover:bg-sky-500 transition-colors text-sm"
                >
                  Đóng thông báo
                </button>
              </motion.div>
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
                <div className="mb-4">
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
                <div className="mb-6">
                  <label className="block font-mono text-xs font-bold text-slate-700 uppercase mb-2">
                    Địa chỉ Email
                  </label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-[#00ADEF] focus:ring-1 focus:ring-[#00ADEF]"
                    placeholder="VD: bacsi@nhakhoa.com"
                  />
                </div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl bg-[#00ADEF] text-white font-mono text-sm font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-lg shadow-sky-500/25 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-sky-500'}`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Đang ghi nhận...
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      Nhận Tài Liệu Ngay
                    </>
                  )}
                </button>
                <p className="text-center font-body text-[10px] text-slate-500 mt-4">
                  Cam kết bảo mật thông tin tuyệt đối theo tiêu chuẩn Sota-D.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

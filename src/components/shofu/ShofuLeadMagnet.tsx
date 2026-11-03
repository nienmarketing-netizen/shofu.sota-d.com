import React, { useState } from 'react';
import { Download, FileText, CheckCircle2, Loader2, ArrowRight, Building2, User, Phone, Mail, MapPin, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import { HomeLeadMagnetSection } from '../../pages/admin/home/types';

interface ShofuLeadMagnetProps {
  data?: HomeLeadMagnetSection;
}

export function ShofuLeadMagnet({ data }: ShofuLeadMagnetProps = {}) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const [formData, setFormData] = useState({ 
    name: '', 
    phone: '', 
    clinic: '', 
    email: '', 
    address: '', 
    notes: '' 
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.clinic.trim() || !formData.address.trim()) {
      setFormError('Bác sĩ vui lòng điền đầy đủ Họ tên, Số điện thoại, Phòng khám/Nơi công tác và Địa chỉ phòng khám.');
      return;
    }
    setFormError('');
    setIsSubmitting(true);
    
    const eventId = 'lead_' + Date.now() + '_' + Math.random().toString(36).substring(2, 11);
    const resourceName = data?.ctaResourceTitle || data?.ctaFormTitle || 'Cẩm nang lâm sàng & Báo giá Shofu';

    const payload = {
      'Nguồn Lead': 'Landing Page Shofu (Lead Magnet E-book)',
      'URL/Creative': typeof window !== 'undefined' ? window.location.href : '',
      'Loại Yêu Cầu': data?.ctaFormTitle || 'Đăng ký nhận Cẩm nang & Báo giá',
      'Tên Bác sĩ': formData.name,
      'Số điện thoại (Zalo)': formData.phone,
      'Phòng khám / Nơi công tác': formData.clinic,
      'Địa chỉ phòng khám': formData.address,
      'Địa chỉ': formData.address,
      'Add': formData.address,
      'add': formData.address,
      'Sản phẩm quan tâm': resourceName,
      'Trạng thái Lead': 'Mới',
      'Ghi chú thêm': [formData.email ? `Email: ${formData.email}` : '', formData.notes].filter(Boolean).join(' - '),
      name: formData.name,
      phone: formData.phone,
      clinic: formData.clinic,
      email: formData.email,
      address: formData.address,
      notes: formData.notes,
      wantsCustomOffer: 'No',
      selectedPromos: `Lead Magnet: ${data?.ctaFormTitle || 'Cẩm nang lâm sàng Shofu'}`
    };

    const webhookUrl = "https://script.google.com/macros/s/AKfycbznlzlBDxDLpbQJKvMN95LdTTsOG3QAkTqkxPbvSQGBL1iDM8nXKA2_NUgboHqdcMcn8A/exec";
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

      // Tracking GTM & dataLayer
      if (typeof window !== 'undefined') {
        const win = window as any;
        win.dataLayer = win.dataLayer || [];
        win.dataLayer.push({
          event: 'generate_lead',
          form_name: data?.ctaFormTitle || 'Lead Magnet E-book',
          event_id: eventId,
        });
      }

      // Tracking Meta CAPI
      try {
        fetch('/api/meta-capi', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: formData.email || '',
            phone: formData.phone,
            formName: data?.ctaFormTitle || 'Lead Magnet E-book',
            eventSourceUrl: typeof window !== 'undefined' ? `${window.location.origin}${window.location.pathname}` : '',
            event_id: eventId
          })
        }).catch(err => console.error('Lỗi khi đẩy CAPI ngầm:', err));
      } catch (capiErr) {
        console.error('Lỗi khi đẩy CAPI:', capiErr);
      }

      if (data?.ctaRedirectThanks) {
        const params = new URLSearchParams();
        if (data.ctaTargetUrl) params.set('targetUrl', data.ctaTargetUrl);
        if (data.ctaResourceTitle) params.set('resourceTitle', data.ctaResourceTitle);
        window.location.href = `/thanks?${params.toString()}`;
      }
    })
    .catch(err => {
      console.error(err);
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (data?.ctaRedirectThanks) {
        const params = new URLSearchParams();
        if (data.ctaTargetUrl) params.set('targetUrl', data.ctaTargetUrl);
        if (data.ctaResourceTitle) params.set('resourceTitle', data.ctaResourceTitle);
        window.location.href = `/thanks?${params.toString()}`;
      }
    });
  };

  return (
    <section id="lead-magnet" className="py-20 relative border-b border-slate-200 bg-slate-100 bg-grid-pattern overflow-hidden">
      <div className="absolute inset-0 bitcoin-gradient opacity-10"></div>
      
      <div className="w-[92%] lg:w-[85%] max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white rounded-[2.5rem] p-8 sm:p-12 md:p-14 shadow-2xl border border-slate-100 flex flex-col md:flex-row gap-10 md:gap-14 items-start"
        >
          
          {/* CỘT BÊN TRÁI: Content + 4 Điểm nổi bật + ẢNH BÌA/MOCKUP TÀI LIỆU NẰM PHÍA DƯỚI */}
          <div className="flex-1 w-full">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-100 mb-6">
              <FileText className="w-4 h-4 text-[#C43838]" />
              <span className="font-mono text-xs font-bold text-[#C43838] uppercase tracking-widest">
                {data?.badge || 'Tài Liệu Độc Quyền'}
              </span>
            </div>
            
            {data?.headline ? (
              <h2 
                className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-900 mb-4 leading-[1.3] sm:leading-tight"
                dangerouslySetInnerHTML={{ __html: data.headline }}
              />
            ) : (
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-900 mb-4 leading-[1.3] sm:leading-tight">
                Nhận trọn bộ <br />
                tài liệu độc quyền, <br />
                <span className="text-[#00ADEF]">video protocol chi tiết</span>
              </h2>
            )}
            
            {data?.subheadline ? (
              <p 
                className="font-body text-slate-600 mb-8 text-sm sm:text-base leading-relaxed"
                dangerouslySetInnerHTML={{ __html: data.subheadline }}
              />
            ) : (
              <p className="font-body text-slate-600 mb-8 text-sm sm:text-base leading-relaxed">
                Đăng ký ngay để nhận <strong className="text-amber-600">báo giá chiết khấu đặc biệt</strong> dành cho Phòng khám/Nha khoa, kèm theo <strong className="text-[#00ADEF]">cẩm nang lâm sàng chi tiết</strong> quy trình ứng dụng vật liệu Shofu.
              </p>
            )}
            
            {/* 4 Điểm giá trị nổi bật */}
            <ul className="space-y-3 font-body text-sm text-slate-700">
              {data?.benefits && data.benefits.length > 0 ? (
                data.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#00ADEF] shrink-0 mt-0.5" />
                    <span dangerouslySetInnerHTML={{ __html: benefit }} />
                  </li>
                ))
              ) : (
                <>
                  <li className="flex items-start gap-2.5"><CheckCircle2 className="w-5 h-5 text-[#00ADEF] shrink-0 mt-0.5" /> Cẩm nang chống ê buốt với Giomer</li>
                  <li className="flex items-start gap-2.5"><CheckCircle2 className="w-5 h-5 text-[#00ADEF] shrink-0 mt-0.5" /> Protocol Posterior Restoration</li>
                  <li className="flex items-start gap-2.5"><CheckCircle2 className="w-5 h-5 text-[#00ADEF] shrink-0 mt-0.5" /> Protocol 3D Printed Technical</li>
                  <li className="flex items-start gap-2.5"><CheckCircle2 className="w-5 h-5 text-[#00ADEF] shrink-0 mt-0.5" /> Ưu đãi đặc biệt gói phục hồi MiCD</li>
                </>
              )}
            </ul>

            {/* ẢNH BÌA / MOCKUP TÀI LIỆU E-BOOK NẰM PHÍA DƯỚI CÁC ĐIỂM GIÁ TRỊ NỔI BẬT (CỘT TRÁI - NẾU CÓ ẢNH THÌ HIỂN THỊ, KHÔNG CÓ THÌ ẨN) */}
            {Boolean(data?.coverImage && data.coverImage.trim()) && (
              <div className="mt-8 pt-4">
                <div className="relative group rounded-2xl overflow-hidden border border-slate-200/90 shadow-lg bg-gradient-to-br from-slate-50 via-white to-sky-50/20 p-4 max-w-md">
                  <img
                    src={data.coverImage}
                    alt={data?.ctaResourceTitle || 'Mockup Cẩm nang lâm sàng Shofu'}
                    className="w-full h-auto max-h-72 object-contain rounded-xl drop-shadow-md group-hover:scale-[1.02] transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                    <span className="flex items-center gap-1.5 text-[#00ADEF] font-bold">
                      <FileText className="w-3.5 h-3.5" /> Bản mềm PDF E-book
                    </span>
                    <span className="text-slate-400">Đính kèm phác đồ & ca lâm sàng</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* CỘT BÊN PHẢI: FORM THU LEAD ĐỒNG BỘ VỚI WEBSITE */}
          <div className="w-full md:w-[440px] shrink-0">
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
                  Cảm ơn Bác sĩ đã quan tâm. Đội ngũ chuyên môn Sota-D sẽ gửi tài liệu qua Zalo/Email cho Bác sĩ trong thời gian sớm nhất.
                </p>

                <div className="bg-white border border-sky-100 rounded-xl p-5 text-left mb-6 shadow-sm">
                  <h4 className="text-xs font-bold text-sky-800 uppercase tracking-wider mb-3">Thông tin đã ghi nhận</h4>
                  <div className="space-y-2 text-xs">
                    <div className="flex">
                      <span className="w-24 text-slate-500">Bác sĩ:</span>
                      <span className="font-bold text-slate-900 flex-1">{formData.name}</span>
                    </div>
                    <div className="flex">
                      <span className="w-24 text-slate-500">SĐT (Zalo):</span>
                      <span className="font-bold text-slate-900 flex-1">{formData.phone}</span>
                    </div>
                    <div className="flex">
                      <span className="w-24 text-slate-500">Phòng khám:</span>
                      <span className="font-bold text-slate-900 flex-1">{formData.clinic}</span>
                    </div>
                    <div className="flex">
                      <span className="w-24 text-slate-500">Địa chỉ:</span>
                      <span className="font-bold text-slate-900 flex-1">{formData.address}</span>
                    </div>
                    {formData.email && (
                      <div className="flex">
                        <span className="w-24 text-slate-500">Email:</span>
                        <span className="font-bold text-slate-900 flex-1">{formData.email}</span>
                      </div>
                    )}
                  </div>
                </div>

                {data?.ctaTargetUrl && (
                  <a
                    href={data.ctaTargetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mb-3 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>Tải Tài Liệu Ngay</span>
                  </a>
                )}

                <button 
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', phone: '', clinic: '', email: '', address: '', notes: '' });
                  }}
                  className="w-full bg-[#00ADEF] text-white font-bold px-6 py-3 rounded-xl hover:bg-sky-500 transition-colors text-xs uppercase tracking-wider"
                >
                  Đăng ký thông tin khác
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-slate-50/90 p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm">
                <div className="mb-5 pb-3 border-b border-slate-200 text-center">
                  <h3 className="font-heading font-extrabold text-lg text-slate-900">
                    {data?.ctaFormTitle || 'Đăng Ký Nhận Cẩm Nang & Báo Giá'}
                  </h3>
                  {Boolean(data?.ctaFormDesc && data.ctaFormDesc.trim()) && (
                    <p className="font-body text-xs text-slate-500 mt-1">
                      {data.ctaFormDesc}
                    </p>
                  )}
                </div>

                {data?.ctaFormExtraHtml && (
                  <div 
                    className="mb-4 text-xs text-slate-600 bg-sky-50/70 p-3 rounded-xl border border-sky-100"
                    dangerouslySetInnerHTML={{ __html: data.ctaFormExtraHtml }}
                  />
                )}

                {formError && (
                  <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold">
                    {formError}
                  </div>
                )}

                {/* 1. Tên Bác sĩ */}
                <div className="mb-3.5">
                  <label className="block font-mono text-[11px] font-bold text-slate-700 uppercase mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#00ADEF]" />
                    <span>Tên Bác sĩ / Nha khoa <strong className="text-red-500">*</strong></span>
                  </label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#00ADEF] focus:ring-1 focus:ring-[#00ADEF]"
                    placeholder="VD: BS. Nguyễn Văn A"
                  />
                </div>

                {/* 2. Số điện thoại (Zalo) */}
                <div className="mb-3.5">
                  <label className="block font-mono text-[11px] font-bold text-slate-700 uppercase mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#00ADEF]" />
                    <span>Số điện thoại (Zalo) <strong className="text-red-500">*</strong></span>
                  </label>
                  <input 
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#00ADEF] focus:ring-1 focus:ring-[#00ADEF]"
                    placeholder="VD: 0967 287 139"
                  />
                </div>

                {/* 3. Phòng khám / Nơi công tác */}
                <div className="mb-3.5">
                  <label className="block font-mono text-[11px] font-bold text-slate-700 uppercase mb-1.5 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-[#00ADEF]" />
                    <span>Phòng khám / Nơi công tác <strong className="text-red-500">*</strong></span>
                  </label>
                  <input 
                    type="text" 
                    required
                    value={formData.clinic}
                    onChange={(e) => setFormData({...formData, clinic: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#00ADEF] focus:ring-1 focus:ring-[#00ADEF]"
                    placeholder="VD: Nha khoa Sài Gòn"
                  />
                </div>

                {/* 4. Địa chỉ Email */}
                <div className="mb-3.5">
                  <label className="block font-mono text-[11px] font-bold text-slate-700 uppercase mb-1.5 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    <span>Địa chỉ Email nhận tài liệu</span>
                  </label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#00ADEF] focus:ring-1 focus:ring-[#00ADEF]"
                    placeholder="VD: bacsi@nhakhoa.com"
                  />
                </div>

                {/* 5. Địa chỉ phòng khám (Bắt buộc) */}
                <div className="mb-3.5">
                  <label className="block font-mono text-[11px] font-bold text-slate-700 uppercase mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#00ADEF]" />
                    <span>Địa chỉ phòng khám <strong className="text-red-500">*</strong></span>
                  </label>
                  <input 
                    type="text" 
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#00ADEF] focus:ring-1 focus:ring-[#00ADEF]"
                    placeholder="VD: 123 Nguyễn Thị Minh Khai, Q.3, TP.HCM"
                  />
                </div>

                {/* 6. Ghi chú thêm */}
                <div className="mb-5">
                  <label className="block font-mono text-[11px] font-bold text-slate-700 uppercase mb-1.5 flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
                    <span>Ghi chú / Nhu cầu thêm</span>
                  </label>
                  <textarea 
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#00ADEF] focus:ring-1 focus:ring-[#00ADEF]"
                    placeholder="VD: Cần tư vấn thêm về dòng Beautifil Injectable X..."
                  />
                </div>

                {/* Submit button */}
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3.5 rounded-xl bg-[#00ADEF] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-sky-500/25 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-sky-500 active:scale-[0.99]'}`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Đang ghi nhận...
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      {data?.ctaButtonText || 'Nhận Tài Liệu Ngay'}
                    </>
                  )}
                </button>
                <p className="text-center font-body text-[10px] text-slate-500 mt-3">
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

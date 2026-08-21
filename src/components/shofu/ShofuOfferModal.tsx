import React, { useState, useEffect } from 'react';
import { X, Gift, ShoppingCart, CheckCircle, ArrowRight, Tag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function ShofuOfferModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPromos, setSelectedPromos] = useState<number[]>([]);
  const [formData, setFormData] = useState({ name: '', phone: '', clinic: '', wantsCustomOffer: false });
  const [formError, setFormError] = useState('');

  useEffect(() => {
    if (selectedPromos.length > 0 || formData.wantsCustomOffer) {
      setFormError('');
    }
  }, [selectedPromos, formData.wantsCustomOffer]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleOpen = (e: Event) => {
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
      const customEvent = e as CustomEvent;
      if (customEvent.detail && customEvent.detail.offerId) {
        setSelectedPromos([customEvent.detail.offerId]);
      }
    };
    window.addEventListener('open-offer-modal', handleOpen);
    return () => {
      window.removeEventListener('open-offer-modal', handleOpen);
    };
  }, []);

  const close = () => {
    setIsOpen(false);
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: '', phone: '', clinic: '', wantsCustomOffer: false });
      setSelectedPromos([]);
      setFormError('');
      document.body.style.overflow = 'auto';
    }, 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedPromos.length === 0 && !formData.wantsCustomOffer) {
      setFormError('Vui lòng chọn ít nhất 01 chương trình ưu đãi hoặc tick chọn ô bên trên.');
      return;
    }
    setFormError('');
    setIsSubmitting(true);
    const payload = {
      name: formData.name,
      phone: formData.phone,
      clinic: formData.clinic,
      wantsCustomOffer: formData.wantsCustomOffer ? 'Yes' : 'No',
      selectedPromos: selectedPromos.map(p => promos.find(x => x.id === p)?.title).filter(Boolean).join(', ')
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
      setIsSuccess(true);
    })
    .catch(err => {
      console.error(err);
      setFormError('Có lỗi kết nối, vui lòng thử lại sau.');
      setIsSubmitting(false);
    });
  };

  const promos = [
    {
      id: 1,
      title: 'Combo Phục Hình Gián Tiếp',
      subtitle: 'Giomer Không Ê Buốt - An Tâm Phục Hình',
      description: 'Gồm: 1 Keo BBX + 1 Xi măng BeautiLink SA. Tặng: Bộ Polishing Kit (740K) + Đặc quyền Cố vấn 1:1 + Masterclass.',
      priceLabel: 'Mức đầu tư:',
      oldPrice: '8.155.000đ',
      price: '3.415.000đ',
      giftValue: 'Hoàn tiền 100%',
      image: 'https://placehold.co/400x300/00ADEF/ffffff?text=Combo+Phuc+Hinh'
    },
    {
      id: 2,
      title: 'Gói Khởi Động Trám MiCD',
      subtitle: 'Giải pháp trám thẩm mỹ sinh học',
      description: 'Gồm: 1 Keo BBX + 1 Đặc Beautifil II + 1 Lỏng Injectable X + 1 Bộ Polishing Kit. Tặng: Video đắp lớp thực chiến.',
      priceLabel: 'Mức đầu tư:',
      oldPrice: '4.750.000đ',
      price: '3.250.000đ',
      giftValue: 'Hoàn tiền 100%',
      image: 'https://placehold.co/400x300/C43838/ffffff?text=Goi+Tram+MiCD'
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Close Button */}
            <button 
              onClick={close}
              className="absolute top-4 right-4 z-20 p-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col lg:flex-row w-full h-full overflow-y-auto lg:overflow-hidden">
            {/* Left Panel - Promo List */}
            <div className="w-full lg:w-3/5 bg-slate-50 flex flex-col lg:max-h-full lg:overflow-y-auto custom-scrollbar border-b lg:border-b-0 lg:border-r border-slate-200 shrink-0">
              <div className="p-6 lg:p-8">
                <div className="flex items-center gap-2 mb-6">
                  <Tag className="w-5 h-5 text-[#00ADEF]" />
                  <span className="font-heading font-bold text-[#00ADEF] uppercase tracking-wider text-sm">Lựa chọn Gói Ưu đãi</span>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {promos.map((promo) => (
                    <div 
                      key={promo.id}
                      onClick={() => setSelectedPromos(prev => prev.includes(promo.id) ? prev.filter(id => id !== promo.id) : [...prev, promo.id])}
                      className={`relative bg-white rounded-2xl border-2 transition-all cursor-pointer overflow-hidden ${
                        selectedPromos.includes(promo.id) 
                          ? 'border-[#00ADEF] shadow-lg shadow-sky-100 ring-2 ring-[#00ADEF]/20' 
                          : 'border-slate-100 hover:border-slate-200 hover:shadow-md'
                      }`}
                    >
                      {/* Checkbox indicator */}
                      <div className={`absolute top-3 right-3 w-6 h-6 rounded-full border-2 flex items-center justify-center z-10 transition-colors ${
                        selectedPromos.includes(promo.id) ? 'bg-[#00ADEF] border-[#00ADEF] text-white' : 'border-slate-300 bg-white/50 backdrop-blur'
                      }`}>
                        {selectedPromos.includes(promo.id) && <CheckCircle className="w-4 h-4" />}
                      </div>

                      {/* Image Placeholder */}
                      <div className="h-40 bg-slate-100 relative overflow-hidden group">
                        <img referrerPolicy="no-referrer" src={promo.image} alt={promo.title} className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute bottom-2 left-3">
                           <span className="inline-block bg-[#00ADEF] text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded">
                            {promo.giftValue}
                           </span>
                        </div>
                      </div>

                      <div className="p-4 flex flex-col h-[200px]">
                        <h3 className="font-heading font-bold text-slate-900 leading-tight mb-1">{promo.title}</h3>
                        <p className="font-body text-xs text-slate-600 mb-2 font-medium">{promo.subtitle}</p>
                        <p className="font-body text-[11px] text-slate-500 line-clamp-3 mb-3">{promo.description}</p>
                        
                        <div className="flex items-end justify-between mt-auto">
                          <div>
                            {promo.oldPrice && (
                              <div className="text-[12px] text-slate-500 font-semibold line-through mb-0.5">Giá gốc: {promo.oldPrice}</div>
                            )}
                            <div className="flex items-baseline gap-1.5">{promo.priceLabel && <span className="text-[11px] text-slate-500 font-medium">{promo.priceLabel}</span>}<span className="font-mono font-bold text-[#00ADEF] text-sm">{promo.price}</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Panel - Form */}
            <div className="w-full lg:w-2/5 p-6 lg:p-8 bg-white flex flex-col justify-center shrink-0">
              {isSuccess ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-slate-900 mb-2">Yêu cầu đã được ghi nhận!</h3>
                  <p className="text-slate-600 mb-6 text-sm sm:text-base px-4">
                    Cảm ơn Quý Bác sĩ đã cho Sota-D cơ hội được phục vụ.<br className="hidden sm:block" />
                    Sota-D sẽ sớm liên hệ với Quý Bác sĩ!
                  </p>
                  
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-left mb-6">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Thông tin đã ghi nhận</h4>
                    <div className="space-y-3">
                      <div className="flex">
                        <span className="w-28 text-slate-500 text-sm">Bác sĩ:</span>
                        <span className="font-bold text-slate-900 text-sm flex-1">{formData.name}</span>
                      </div>
                      <div className="flex">
                        <span className="w-28 text-slate-500 text-sm">SĐT:</span>
                        <span className="font-bold text-slate-900 text-sm flex-1">{formData.phone}</span>
                      </div>
                      {formData.clinic && (
                        <div className="flex">
                          <span className="w-28 text-slate-500 text-sm">Phòng khám:</span>
                          <span className="font-bold text-slate-900 text-sm flex-1">{formData.clinic}</span>
                        </div>
                      )}
                      <div className="flex">
                        <span className="w-28 text-slate-500 text-sm">Chương trình:</span>
                        <span className="font-bold text-slate-900 text-sm flex-1">
                          {[
                            ...selectedPromos.map(p => promos.find(x => x.id === p)?.title),
                            formData.wantsCustomOffer ? 'Tư vấn chương trình riêng' : ''
                          ].filter(Boolean).join(', ')}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-slate-500 mb-6">
                    Nếu Quý Bác sĩ cần hỗ trợ ngay, vui lòng liên hệ hotline:<br />
                    <a href="tel:0967287139" className="text-[#00ADEF] font-bold hover:underline">0967 287 139</a>
                    <span className="mx-2 text-slate-300">|</span>
                    <a href="tel:0901769510" className="text-[#00ADEF] font-bold hover:underline">0901 769 510</a>
                  </p>

                  <button 
                    onClick={close}
                    className="w-full bg-[#111827] text-white font-bold px-8 py-4 rounded-xl hover:bg-slate-800 transition-colors tracking-widest text-sm"
                  >
                    HOÀN TẤT
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 mb-2">Thông tin nhận ưu đãi</h3>
                    <p className="text-sm text-slate-600">Quý Bác sĩ vui lòng điền thông tin bên dưới:</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1">Tên Bác sĩ *</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#00ADEF]/20 focus:border-[#00ADEF] outline-none transition-all"
                        placeholder="VD: BS. Nguyễn Văn A"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1">Số điện thoại *</label>
                      <input 
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#00ADEF]/20 focus:border-[#00ADEF] outline-none transition-all"
                        placeholder="Để Sota-D liên hệ hỗ trợ"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1">Tên phòng khám (Tùy chọn)</label>
                      <input 
                        type="text" 
                        value={formData.clinic}
                        onChange={(e) => setFormData({...formData, clinic: e.target.value})}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#00ADEF]/20 focus:border-[#00ADEF] outline-none transition-all"
                        placeholder="VD: Nha khoa Nụ Cười"
                      />
                    </div>


                    <div className="pt-2">
                      <label className="flex items-start gap-3 p-3.5 bg-[#00ADEF]/5 hover:bg-[#00ADEF]/10 border border-[#00ADEF]/20 rounded-xl cursor-pointer transition-colors group">
                        <input
                          type="checkbox"
                          checked={formData.wantsCustomOffer}
                          onChange={(e) => setFormData({...formData, wantsCustomOffer: e.target.checked})}
                          className="mt-0.5 w-4 h-4 sm:w-5 sm:h-5 rounded border-[#00ADEF]/30 text-[#00ADEF] focus:ring-[#00ADEF] bg-white transition-colors cursor-pointer shrink-0"
                        />
                        <span className="text-sm font-medium text-slate-700 leading-snug group-hover:text-slate-900 transition-colors">
                          Tôi chưa tìm thấy chương trình phù hợp, <span className="font-bold">hãy cung cấp cho tôi chương trình ưu đãi phù hợp hơn.</span>
                        </span>
                      </label>
                    </div>

                    {formError && (
                      <div className="pt-1">
                        <p className="text-red-500 text-[13px] font-medium animate-pulse">
                          * {formError}
                        </p>
                      </div>
                    )}

                    <div className="pt-4">
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#00ADEF] text-white px-4 py-3.5 sm:px-8 sm:py-4 rounded-xl font-heading font-bold text-[14px] sm:text-lg whitespace-nowrap hover:bg-sky-600 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        ) : (
                          <>
                            <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span>Đăng ký nhận ưu đãi</span>
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                      <p className="text-center text-xs text-slate-500 mt-4">
                        * Thông tin của Bác sĩ được bảo mật tuyệt đối.
                      </p>
                    </div>
                  </form>
                </>
              )}
            </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

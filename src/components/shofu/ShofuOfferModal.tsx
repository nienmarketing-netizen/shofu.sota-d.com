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
    const handleOpen = () => {
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
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
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  const promos = [
    {
      id: 1,
      title: 'Mua 1 Tặng 1',
      subtitle: 'Xi Măng Gắn BeautiCem SA',
      description: 'Mua 01 hộp BeautiCem SA, tặng ngay 01 bộ keo dán Universal BeautiBond Xtreme (trị giá 1.420.000đ).',
      priceLabel: 'Giá ưu đãi:',
      oldPrice: '2.995.000đ',
      price: '1.575.000đ',
      giftValue: 'Tiết kiệm gần 50%',
      image: 'https://placehold.co/400x300/00ADEF/ffffff?text=BeautiCem+SA'
    },
    {
      id: 2,
      title: 'Mua 7 Tặng 2',
      subtitle: 'Dòng Composite BeautiFil',
      description: 'Áp dụng cho BeautiFil Injectable X/X SL hoặc BeautiFil II. Giảm sâu chi phí vốn trên mỗi ca phục hình.',
      priceLabel: 'Giá ưu đãi /tuýp:',
      oldPrice: '495.000đ - 595.000đ',
      price: '385.000đ - 463.000đ',
      giftValue: 'Tặng 2 tuýp',
      image: 'https://placehold.co/400x300/00ADEF/ffffff?text=BeautiFil+Composite'
    },
    {
      id: 3,
      title: 'Mua 4 Tặng 1',
      subtitle: 'Composite Thẩm Mỹ BeautiFil II LS',
      description: 'Sở hữu dòng composite có độ co rút cực thấp (0.85% Vol) và kháng mòn cao.',
      priceLabel: 'Giá ưu đãi /tuýp:',
      oldPrice: '695.000đ',
      price: '556.000đ',
      giftValue: 'Tiết kiệm 20%',
      image: 'https://placehold.co/400x300/00ADEF/ffffff?text=BeautiFil+II+LS'
    },
    {
      id: 4,
      title: 'Trợ Giá Trực Tiếp',
      subtitle: 'Keo Dán BeautiBond Xtreme (BBX)',
      description: 'Keo dán HEMA-free thế hệ mới, loại bỏ hoàn toàn ê buốt. Lực dán vượt trội với công nghệ Quadra-Functional (10-MDP).',
      priceLabel: 'Giá ưu đãi:',
      price: '990.000đ',
      oldPrice: '1.420.000đ',
      giftValue: 'Giảm 430K',
      image: 'https://cdn.jsdelivr.net/gh/nienmarketing-netizen/sota-d@03c66c4af6e28e2a69254e4d674c5a45ab53e988/beautibond-xtreme.png'
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
                  <span className="font-heading font-bold text-[#00ADEF] uppercase tracking-wider text-sm">Chương trình đặc quyền</span>
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
                      <div className="h-32 bg-slate-100 relative overflow-hidden group">
                        <img src={promo.image} alt={promo.title} className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute bottom-2 left-3">
                           <span className="inline-block bg-[#C43838] text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded">
                            {promo.giftValue}
                           </span>
                        </div>
                      </div>

                      <div className="p-4 flex flex-col h-[180px]">
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
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-slate-900 mb-2">Đăng ký thành công!</h3>
                  <p className="text-slate-600 mb-8">
                    Cảm ơn Bác sĩ. Chuyên viên Sota-D sẽ liên hệ ngay để xác nhận đơn hàng và ưu đãi.
                  </p>
                  <button 
                    onClick={close}
                    className="bg-slate-100 text-slate-900 font-bold px-8 py-3 rounded-full hover:bg-slate-200 transition-colors"
                  >
                    Đóng cửa sổ
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

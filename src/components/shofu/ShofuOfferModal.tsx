import React, { useState, useEffect } from 'react';
import { X, Gift, ShoppingCart, CheckCircle, ArrowRight, Tag, ShieldCheck, CheckCircle2, Package } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function ShofuOfferModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeOfferId, setActiveOfferId] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({ name: '', phone: '', clinic: '', wantsCustomOffer: false });
  const [formError, setFormError] = useState('');

  useEffect(() => {
    if (formData.name && formData.phone) {
      setFormError('');
    }
  }, [formData]);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleOpen = (e: Event) => {
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
      const customEvent = e as CustomEvent;
      if (customEvent.detail && customEvent.detail.offerId) {
        setActiveOfferId(customEvent.detail.offerId as 1 | 2);
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
      setFormError('');
      document.body.style.overflow = 'auto';
    }, 300);
  };

  const offerDetails = {
    1: {
      title: 'Giomer Không Ê Buốt',
      name: 'Combo Phục Hình Gián Tiếp',
      description: 'Combo quyền lực BBX & BeautiLink SA: Khóa chặt vi kẽ - Trị liệu sinh học 6 ion - Chấm dứt 100% ám ảnh bảo hành.',
      theme: 'shofu',
      coreValues: [
        '"Trạm phát 6 Ion" triệt tiêu ê buốt tức thì.',
        'Chặn đứng ê buốt muộn nhờ triết lý HEMA-Free.',
        '"Khoảng xi măng ghép" vô hình & Lực dán thép 50MPa.',
        'Bảo chứng lâm sàng 8 năm & 13 năm từ ĐH Florida.'
      ],
      products: [
        { name: '01 Lọ Keo dán Universal BeautiBond Xtreme (5ml)', value: '1.420.000đ', image: 'https://cdn.jsdelivr.net/gh/nienmarketing-netizen/sota-d@03c66c4af6e28e2a69254e4d674c5a45ab53e988/beautibond-xtreme.png' },
        { name: '01 Tuýp Xi măng BeautiLink SA Handmix 15.6g (120 ca)', value: '1.995.000đ', image: 'https://placehold.co/150x150/00ADEF/ffffff?text=BeautiLink+SA' }
      ],
      bonuses: [
        { name: 'Bộ Đánh Bóng Composite Polishing Kit CA', value: '740.000đ', image: 'https://placehold.co/150x150/F59E0B/ffffff?text=Polishing+Kit' },
        { name: 'Cố vấn Lâm sàng 1:1 cùng ThS.BS Trần Quang Khánh', value: '2.500.000đ', image: 'https://placehold.co/150x150/F59E0B/ffffff?text=Co+Van+1:1' },
        { name: 'Sổ tay E-Guide & Bộ Video Masterclass Thực chiến', value: '1.500.000đ', image: 'https://placehold.co/150x150/F59E0B/ffffff?text=Masterclass' }
      ],
      totalValue: '8.155.000đ',
      price: '3.415.000đ',
      guarantee: 'Hoàn tiền 100% nếu Bác sĩ không hài lòng'
    },
    2: {
      title: 'Giải Pháp Trám Thẩm Mỹ Sinh Học',
      name: 'Gói Khởi Động Trám MiCD',
      description: 'Loại bỏ xi măng gắn. Tập trung 100% đạn dược vào kỹ thuật đắp lớp và màng keo chống thủy phân.',
      theme: 'sota',
      coreValues: [
        'Trọn bộ vũ khí Giomer chuyên phục vụ phục hình trực tiếp.',
        'Không áp lực vốn nhờ bóc tách xi măng gắn.',
        'Đồng bộ hóa quy trình trám từ dán dính đến đánh bóng.'
      ],
      products: [
        { name: '01 Lọ Keo dán BeautiBond Xtreme', value: '1.420.000đ', image: 'https://cdn.jsdelivr.net/gh/nienmarketing-netizen/sota-d@03c66c4af6e28e2a69254e4d674c5a45ab53e988/beautibond-xtreme.png' },
        { name: '01 Composite đặc Beautifil II', value: '495.000đ', image: 'https://placehold.co/150x150/C43838/ffffff?text=Beautifil+II' },
        { name: '01 Composite lỏng Beautifil Injectable X', value: '595.000đ', image: 'https://placehold.co/150x150/C43838/ffffff?text=Injectable+X' },
        { name: '01 Bộ Đánh Bóng Composite Polishing Kit', value: '740.000đ', image: 'https://placehold.co/150x150/C43838/ffffff?text=Polishing+Kit' }
      ],
      bonuses: [
        { name: 'Cố vấn Lâm sàng 1:1 cùng ThS.BS Trần Quang Khánh', value: '2.500.000đ', image: 'https://placehold.co/150x150/F59E0B/ffffff?text=Co+Van+1:1' },
        { name: 'Tặng kèm bộ video kỹ thuật đắp lớp thực chiến', value: '1.500.000đ', image: 'https://placehold.co/150x150/F59E0B/ffffff?text=Video' }
      ],
      totalValue: '7.250.000đ',
      price: '3.250.000đ',
      guarantee: 'Hoàn tiền 100% nếu Bác sĩ không hài lòng'
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setFormError('Vui lòng điền đầy đủ Tên và Số điện thoại.');
      return;
    }
    setFormError('');
    setIsSubmitting(true);
    const payload = {
      name: formData.name,
      phone: formData.phone,
      clinic: formData.clinic,
      wantsCustomOffer: formData.wantsCustomOffer ? 'Yes' : 'No',
      selectedPromos: offerDetails[activeOfferId].name
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

  const activeOffer = offerDetails[activeOfferId];
  const isBlue = activeOffer.theme === 'shofu';
  const themeColor = isBlue ? '#00ADEF' : '#C43838';
  const themeBg = isBlue ? 'bg-[#00ADEF]' : 'bg-[#C43838]';
  const themeText = isBlue ? 'text-[#00ADEF]' : 'text-[#C43838]';
  const themeBorder = isBlue ? 'border-[#00ADEF]/20' : 'border-[#C43838]/20';
  const themeLightBg = isBlue ? 'bg-[#00ADEF]/5' : 'bg-[#C43838]/5';

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
            className="relative w-full max-w-6xl max-h-[95vh] bg-white rounded-3xl shadow-2xl flex flex-col lg:flex-row overflow-y-auto lg:overflow-hidden custom-scrollbar"
          >
            {/* Close Button */}
            <button 
              onClick={close}
              className="absolute top-4 right-4 z-50 p-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Panel - Offer Details */}
            <div className="w-full lg:w-[60%] flex flex-col bg-slate-50 border-b lg:border-b-0 lg:border-r border-slate-200 shrink-0 h-auto lg:h-[95vh]">
              <div className="flex-1 lg:overflow-y-auto custom-scrollbar p-5 sm:p-6 lg:p-8">
                <div className="mb-6 lg:mb-8">
                  <span className={`inline-block px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full ${themeLightBg} ${themeText} text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-3 lg:mb-4 border ${themeBorder}`}>
                    {activeOffer.title}
                  </span>
                  <h2 className="text-[20px] max-[400px]:text-[18px] max-[360px]:text-[16px] sm:text-2xl lg:text-3xl font-heading font-extrabold text-slate-900 mb-2 sm:mb-3 leading-tight whitespace-nowrap sm:whitespace-normal overflow-hidden text-ellipsis">
                    {activeOffer.name}
                  </h2>
                  <p className="text-slate-600 text-[13px] sm:text-[15px] leading-relaxed">
                    {activeOffer.description}
                  </p>
                </div>

                {/* Package Content */}
                <div className="flex flex-col gap-3 lg:gap-4 mb-6 lg:mb-8">
                  <div className="flex items-center gap-2 mb-1">
                    <Package className={`w-4 h-4 sm:w-5 sm:h-5 ${themeText}`} />
                    <h3 className="text-[13px] sm:text-sm font-bold text-slate-900 uppercase tracking-wider">Sản phẩm chính</h3>
                  </div>
                  <div className="space-y-2.5 sm:space-y-3">
                    {activeOffer.products.map((prod, idx) => (
                      <div key={idx} className={`flex items-center gap-3 p-3 sm:p-3.5 rounded-2xl border ${themeBorder} ${themeLightBg} transition-colors hover:bg-white`}>
                        <img referrerPolicy="no-referrer" src={prod.image} alt={prod.name} className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-cover bg-white p-1 border border-slate-200/50 shadow-sm shrink-0" />
                        <div className="flex flex-col justify-center flex-1 min-w-0 gap-0.5 sm:gap-1">
                          <h4 className="text-[13px] sm:text-[15px] font-bold text-slate-800 leading-snug">{prod.name}</h4>
                          <div className="text-xs sm:text-sm font-mono font-bold text-slate-600">{prod.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 mt-3 sm:mt-4 mb-1">
                    <Gift className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />
                    <h3 className="text-[13px] sm:text-sm font-bold text-amber-900 uppercase tracking-wider">Quà tặng & Đặc quyền</h3>
                  </div>
                  <div className="space-y-2.5 sm:space-y-3">
                    {activeOffer.bonuses.map((bonus, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 sm:p-3.5 rounded-2xl border border-amber-200 bg-amber-50 transition-colors hover:bg-white">
                        <img referrerPolicy="no-referrer" src={bonus.image} alt={bonus.name} className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-cover bg-white p-1 border border-amber-200/50 shadow-sm shrink-0" />
                        <div className="flex flex-col justify-center flex-1 min-w-0 gap-0.5 sm:gap-1">
                          <h4 className="text-[13px] sm:text-[15px] font-bold text-amber-900 leading-snug">{bonus.name}</h4>
                          <div className="text-xs sm:text-sm font-mono font-bold text-amber-700">{bonus.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing */}
                <div className="bg-slate-900 rounded-2xl p-4 sm:p-6 relative overflow-hidden shadow-xl">
                  <div className={`absolute top-0 right-0 w-32 h-32 opacity-10 blur-3xl ${themeBg} rounded-full -mr-10 -mt-10`}></div>
                  
                  <div className="relative z-10 flex flex-col gap-2 sm:gap-3 mb-4 bg-slate-800/50 p-3.5 sm:p-4 rounded-xl">
                    <div className="flex justify-between items-center text-[11px] sm:text-xs">
                      <span className="text-slate-400 whitespace-nowrap">Tổng giá trị:</span>
                      <span className="text-slate-300 font-semibold whitespace-nowrap">{activeOffer.totalValue}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs sm:text-[13px]">
                      <span className="text-slate-200 font-medium whitespace-nowrap">Mức đầu tư ưu đãi:</span>
                      <span className={`${themeText} font-heading font-extrabold text-lg sm:text-xl whitespace-nowrap`}>
                        {activeOffer.price}
                      </span>
                    </div>
                  </div>
                  
                  <div className="relative z-10 text-center">
                    <span className="inline-block bg-[#0f3433] text-[#00c98f] text-[9.5px] sm:text-xs font-bold uppercase tracking-wider px-3 sm:px-4 py-2 rounded-lg border border-[#164d4b] whitespace-nowrap">
                      {activeOffer.guarantee}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel - Form */}
            <div className="w-full lg:w-[40%] p-6 lg:p-10 bg-white flex flex-col justify-center shrink-0 h-auto lg:h-[95vh] lg:overflow-y-auto custom-scrollbar relative z-10">
              {isSuccess ? (
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-slate-900 mb-3">Yêu cầu đã được ghi nhận!</h3>
                  <p className="text-slate-600 mb-8 text-sm sm:text-base px-2">
                    Cảm ơn Quý Bác sĩ đã cho Sota-D cơ hội được phục vụ.<br className="hidden sm:block" />
                    Sota-D sẽ sớm liên hệ với Quý Bác sĩ!
                  </p>
                  
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-left mb-8">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-5">Thông tin đã ghi nhận</h4>
                    <div className="space-y-4">
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
                            activeOffer.name,
                            formData.wantsCustomOffer ? 'Tư vấn chương trình riêng' : ''
                          ].filter(Boolean).join(', ')}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-slate-500 mb-8">
                    Nếu Quý Bác sĩ cần hỗ trợ ngay, vui lòng liên hệ hotline:<br />
                    <a href="tel:0967287139" className="text-[#00ADEF] font-bold hover:underline mt-1 inline-block">0967 287 139</a>
                    <span className="mx-3 text-slate-300">|</span>
                    <a href="tel:0901769510" className="text-[#00ADEF] font-bold hover:underline mt-1 inline-block">0901 769 510</a>
                  </p>

                  <button 
                    onClick={close}
                    className="w-full bg-[#111827] text-white font-bold px-8 py-4 rounded-xl hover:bg-slate-800 transition-colors tracking-widest text-sm"
                  >
                    HOÀN TẤT
                  </button>
                </div>
              ) : (
                <div className="max-w-md mx-auto w-full">
                  <div className="mb-8 text-center sm:text-left">
                    <h3 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 mb-3">Đăng ký ngay</h3>
                    <p className="text-sm sm:text-base text-slate-600">Quý Bác sĩ vui lòng điền thông tin bên dưới để Sota-D liên hệ hỗ trợ và giữ ưu đãi:</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Tên Bác sĩ *</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 outline-none transition-all text-sm"
                        placeholder="VD: BS. Nguyễn Văn A"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Số điện thoại *</label>
                      <input 
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 outline-none transition-all text-sm"
                        placeholder="Để Sota-D liên hệ hỗ trợ"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Tên phòng khám (Tùy chọn)</label>
                      <input 
                        type="text" 
                        value={formData.clinic}
                        onChange={(e) => setFormData({...formData, clinic: e.target.value})}
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 outline-none transition-all text-sm"
                        placeholder="VD: Nha khoa Nụ Cười"
                      />
                    </div>


                    <div className="pt-3">
                      <label className="flex items-start gap-4 p-4 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl cursor-pointer transition-colors group">
                        <input
                          type="checkbox"
                          checked={formData.wantsCustomOffer}
                          onChange={(e) => setFormData({...formData, wantsCustomOffer: e.target.checked})}
                          className="mt-0.5 w-5 h-5 rounded border-slate-300 text-slate-900 focus:ring-slate-900 bg-white transition-colors cursor-pointer shrink-0"
                        />
                        <span className="text-sm font-medium text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors">
                          Tôi cần thêm tư vấn để thiết kế gói <span className="font-bold text-slate-900">Combo tùy chỉnh</span> phù hợp với phòng khám.
                        </span>
                      </label>
                    </div>

                    {formError && (
                      <div className="pt-2">
                        <p className="text-red-500 text-sm font-medium animate-pulse bg-red-50 p-3 rounded-lg border border-red-100">
                          * {formError}
                        </p>
                      </div>
                    )}

                    <div className="pt-6">
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full group relative inline-flex items-center justify-center gap-3 text-white px-8 py-4 sm:py-5 rounded-xl font-heading font-bold text-[15px] sm:text-lg whitespace-nowrap transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none ${themeBg}`}
                      >
                        {isSubmitting ? (
                          <span className="inline-block w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        ) : (
                          <>
                            <ShoppingCart className="w-5 h-5" />
                            <span>Đăng ký nhận ưu đãi</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                          </>
                        )}
                      </button>
                      <p className="text-center text-xs text-slate-500 mt-5 font-medium flex items-center justify-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-emerald-500" />
                        Thông tin của Bác sĩ được bảo mật tuyệt đối.
                      </p>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

import React, { useState, useEffect } from 'react';
import { X, CheckCircle2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'consult' | 'quote';
}

export function ContactModal({ isOpen, onClose, type }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    clinic: '',
    products: [] as string[]
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setIsSuccess(false);
        setIsSubmitting(false);
        setFormData({ name: '', phone: '', clinic: '', products: [] });
        setError('');
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleProductChange = (product: string) => {
    setFormData(prev => ({
      ...prev,
      products: prev.products.includes(product)
        ? prev.products.filter(p => p !== product)
        : [...prev.products, product]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setError('Bác sĩ vui lòng điền thông tin liên hệ');
      return;
    }
    setError('');
    setIsSubmitting(true);
    
    try {
      const payload = {
        'Nguồn Lead': 'Landing Page Shofu',
        'URL/Creative': window.location.href,
        'Loại Yêu Cầu': type === 'consult' ? 'Tư vấn' : 'Báo giá',
        'Tên Bác sĩ': formData.name,
        'Số điện thoại (Zalo)': formData.phone,
        'Phòng khám / Nơi công tác': formData.clinic,
        'Sản phẩm quan tâm': formData.products.join(', '),
        'Trạng thái Lead': 'Mới',
        'Ghi chú thêm': ''
      };

      const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxc-EtHL1Un2AgalFAz8RvxlHX0TtE4q6OK2h0CiSNWBo7tvP1sDhBiJv7vvrRkJ3-zgQ/exec';

      const formDataEncoded = new URLSearchParams();
      Object.entries(payload).forEach(([key, value]) => {
        formDataEncoded.append(key, value);
      });

      await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body: formDataEncoded.toString()
      });

      setIsSubmitting(false);
      setIsSuccess(true);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Đã có lỗi xảy ra. Vui lòng thử lại sau.');
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  const title = type === 'consult' ? 'Yêu cầu tư vấn' : 'Yêu cầu báo giá';

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-slate-900 mb-3">
                Yêu cầu đã được ghi nhận!
              </h3>
              <p className="font-body text-sm text-slate-600 mb-1">
                Cảm ơn Quý Bác sĩ đã cho Sota-D cơ hội được phục vụ.
              </p>
              <p className="font-body text-sm text-slate-600">
                Sota-D sẽ sớm liên hệ với Quý Bác sĩ!
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-4 sm:p-5 mb-6 text-left border border-slate-100">
              <h4 className="font-body text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Thông tin đã ghi nhận</h4>
              <div className="space-y-2.5 font-body text-sm">
                <p><span className="text-slate-500 inline-block w-24">Bác sĩ:</span> <strong className="text-slate-900">{formData.name}</strong></p>
                <p><span className="text-slate-500 inline-block w-24">SĐT:</span> <strong className="text-slate-900">{formData.phone}</strong></p>
                {formData.clinic && (
                  <p><span className="text-slate-500 inline-block w-24">Phòng khám:</span> <strong className="text-slate-900">{formData.clinic}</strong></p>
                )}
                {formData.products.length > 0 && (
                  <p><span className="text-slate-500 inline-block w-24">Sản phẩm:</span> <strong className="text-slate-900">{formData.products.join(', ')}</strong></p>
                )}
              </div>
            </div>

            <div className="mt-6 text-center font-body text-xs text-slate-500 space-y-1">
              <p>Nếu Quý Bác sĩ cần hỗ trợ ngay, vui lòng liên hệ hotline:</p>
              <p className="text-[13px]">
                <a href="tel:0967287139" className="font-bold text-[#00ADEF] hover:underline">0967 287 139</a> 
                <span className="mx-2 text-slate-400">|</span> 
                <a href="tel:0901769510" className="font-bold text-[#00ADEF] hover:underline">0901 769 510</a>
              </p>
            </div>
            
            <button 
              onClick={onClose}
              className="w-full mt-6 px-6 py-3 rounded-xl bg-slate-900 text-white font-mono text-sm font-bold uppercase tracking-wider hover:bg-slate-800 transition-all shadow-lg active:scale-[0.98]"
            >
              Hoàn tất
            </button>
          </div>
        ) : (
          <div className="animate-in fade-in duration-300">
            <h3 className="font-heading font-bold text-2xl text-slate-900 mb-2 text-center">
              {title}
            </h3>
            
            <p className="text-center font-body text-sm text-slate-600 mb-6">
              Quý Bác sĩ vui lòng dành thời gian điền thông tin bên dưới:
            </p>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label htmlFor="name" className="block font-body text-sm font-semibold text-slate-700 mb-1.5">Tên Bác sĩ *</label>
                <input 
                  type="text" 
                  id="name"
                  required
                  value={formData.name}
                  onChange={e => {
                    setFormData(prev => ({ ...prev, name: e.target.value }));
                    if (error) setError('');
                  }}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-[#00ADEF] focus:ring-1 focus:ring-[#00ADEF] outline-none transition-all font-body text-sm"
                  placeholder="Nhập tên của Bác sĩ"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block font-body text-sm font-semibold text-slate-700 mb-1.5">Số điện thoại (Zalo) *</label>
                <input 
                  type="tel" 
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={e => {
                    setFormData(prev => ({ ...prev, phone: e.target.value }));
                    if (error) setError('');
                  }}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-[#00ADEF] focus:ring-1 focus:ring-[#00ADEF] outline-none transition-all font-body text-sm"
                  placeholder="Nhập số điện thoại"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="clinic" className="block font-body text-sm font-semibold text-slate-700 mb-1.5">Phòng khám / Nơi công tác</label>
                <input 
                  type="text" 
                  id="clinic"
                  value={formData.clinic}
                  onChange={e => setFormData(prev => ({ ...prev, clinic: e.target.value }))}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-[#00ADEF] focus:ring-1 focus:ring-[#00ADEF] outline-none transition-all font-body text-sm"
                  placeholder="Tên phòng khám hoặc bệnh viện"
                  disabled={isSubmitting}
                />
              </div>

              <div className="pt-2">
                <label className="block font-body text-sm font-semibold text-slate-700 mb-3">Sản phẩm quan tâm</label>
                <div className="grid grid-cols-2 gap-3">
                  {['Composite', 'Xi măng', 'Keo dán', 'Sản phẩm khác'].map(product => (
                    <label key={product} className={`flex items-center gap-2 cursor-pointer group ${isSubmitting ? 'opacity-50 pointer-events-none' : ''}`}>
                      <div className="relative flex items-center justify-center">
                        <input 
                          type="checkbox"
                          checked={formData.products.includes(product)}
                          onChange={() => handleProductChange(product)}
                          disabled={isSubmitting}
                          className="w-4 h-4 rounded border-slate-300 text-[#00ADEF] focus:ring-[#00ADEF] cursor-pointer"
                        />
                      </div>
                      <span className="font-body text-sm text-slate-600 group-hover:text-slate-900 transition-colors">
                        {product}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mt-6 mb-2 text-center font-body text-xs text-slate-500 space-y-1">
                <p>Nếu Quý Bác sĩ cần hỗ trợ ngay, vui lòng liên hệ hotline:</p>
                <p className="text-[13px]">
                  <a href="tel:0967287139" className="font-bold text-[#00ADEF] hover:underline">0967 287 139</a> 
                  <span className="mx-2 text-slate-400">|</span> 
                  <a href="tel:0901769510" className="font-bold text-[#00ADEF] hover:underline">0901 769 510</a>
                </p>
              </div>

              {error && (
                <div className="text-center font-body text-sm font-semibold text-[#C43838] animate-in fade-in">
                  {error}
                </div>
              )}

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 px-6 py-3 rounded-xl bg-[#00ADEF] text-white font-mono text-sm font-bold uppercase tracking-wider hover:bg-sky-500 transition-all shadow-lg shadow-sky-500/30 active:scale-[0.98] disabled:opacity-70 disabled:pointer-events-none flex items-center justify-center gap-2"
              >
                {isSubmitting && (
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                )}
                {isSubmitting ? 'Đang ghi nhận yêu cầu...' : 'Gửi Yêu Cầu'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

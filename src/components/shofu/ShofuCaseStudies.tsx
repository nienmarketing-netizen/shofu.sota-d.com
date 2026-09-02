import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ShoppingCart, ArrowUpRight } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: "Phục hình Răng thẩm mỹ",
    doctor: "Sử dụng: Beautifil Injectable X",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1000",
    description: "Hiệu ứng quang học xuất sắc, độ bóng tự nhiên duy trì lâu dài."
  },
  {
    id: 2,
    title: "Trám xoang II sâu",
    doctor: "Sử dụng: Beautilink SA & BeautiBond",
    image: "https://images.unsplash.com/photo-1598256989800-fea5ce5146f2?auto=format&fit=crop&q=80&w=1000",
    description: "Độ khít sát biên hoàn hảo, ngăn ngừa nhạy cảm sau phục hình."
  },
  {
    id: 3,
    title: "Phục hồi cùi răng",
    doctor: "Sử dụng: Core Paste & Bond",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000",
    description: "Độ bền cơ học cao, chịu lực nén tốt, thao tác nhanh."
  },
  {
    id: 4,
    title: "Trám bít hố rãnh",
    doctor: "Công nghệ S-PRG",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1000",
    description: "Khả năng giải phóng Fluoride liên tục, bảo vệ răng tối ưu."
  },
  {
    id: 5,
    title: "Phục hình răng trước mẻ",
    doctor: "Sử dụng: Beautifil II",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=1000",
    description: "Màu sắc tiệp hoàn toàn, đường hoàn tất vô hình."
  },
  {
    id: 6,
    title: "Đóng khe thưa",
    doctor: "Sử dụng: Beautifil Injectable XSL",
    image: "https://images.unsplash.com/photo-1576092762791-dd9e2220c476?auto=format&fit=crop&q=80&w=1000",
    description: "Dễ dàng tạo hình, giữ form tốt, không bị chảy lún."
  },
  {
    id: 7,
    title: "Gắn Inlay/Onlay",
    doctor: "Sử dụng: Beautilink SA",
    image: "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&q=80&w=1000",
    description: "Gắn kết bền vững, kháng mòn tuyệt vời, tái khoáng hóa."
  },
  {
    id: 8,
    title: "Mòn răng mặt nhai",
    doctor: "Giải pháp toàn diện Shofu",
    image: "https://images.unsplash.com/photo-1524255684952-d7185b509571?auto=format&fit=crop&q=80&w=1000",
    description: "Phục hồi khớp cắn, chống mòn mỏi, bề mặt siêu láng mịn."
  }
];

export function ShofuCaseStudies() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight' && selectedIndex !== null) {
        setSelectedIndex((prev) => (prev! < caseStudies.length - 1 ? prev! + 1 : 0));
      }
      if (e.key === 'ArrowLeft' && selectedIndex !== null) {
        setSelectedIndex((prev) => (prev! > 0 ? prev! - 1 : caseStudies.length - 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedIndex]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev! < caseStudies.length - 1 ? prev! + 1 : 0));
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev! > 0 ? prev! - 1 : caseStudies.length - 1));
  };

  return (
    <section id="case-studies" className="py-20 relative border-t border-slate-200 bg-slate-50 bg-grid-pattern overflow-hidden">
      <div className="absolute inset-0 bitcoin-gradient opacity-[0.03]"></div>
      
      <div className="w-[90%] lg:w-[80%] mx-auto mb-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 mb-6 shadow-sm">
            <span className="font-mono text-xs font-bold text-slate-600 uppercase tracking-widest">Thư viện Case Study</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-6 leading-tight">
            Hiệu quả vượt trội từ <br />
            <span className="text-[#00ADEF]">thực tế lâm sàng</span>
          </h2>
          <p className="font-body text-slate-600 max-w-2xl mx-auto">
            Khám phá những ca điều trị thành công sử dụng vật liệu nha khoa Shofu.
            <strong className="text-slate-900">Công nghệ S-PRG</strong> và hệ thống vật liệu tiên tiến mang lại <strong className="text-emerald-600">kết quả thẩm mỹ</strong> và <strong className="text-amber-600">độ bền tối ưu</strong>.
          </p>
        </motion.div>
      </div>

      {/* Instagram-style Grid */}
      <div className="w-[90%] lg:w-[80%] mx-auto mb-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-2">
          {caseStudies.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative aspect-square cursor-pointer group bg-slate-200 overflow-hidden sm:rounded-xl"
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <ZoomIn className="w-6 h-6 text-white mb-2" />
                <h3 className="font-heading font-bold text-white text-sm sm:text-base leading-tight mb-1">{item.title}</h3>
                <p className="font-body text-slate-300 text-xs truncate">{item.doctor}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center px-4 relative z-10">
        <button onClick={() => window.dispatchEvent(new CustomEvent("open-offer-modal"))} className="group relative inline-flex items-center justify-center gap-2 bg-[#00ADEF] text-white px-8 py-4 rounded-full font-heading font-bold text-base sm:text-lg hover:bg-slate-900 hover:shadow-xl hover:shadow-slate-900/20 transition-all duration-300 hover:-translate-y-1">
          <ShoppingCart className="w-5 h-5" />
          <span>Xem ưu đãi và đặt hàng</span>
          <ArrowUpRight className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </button>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center backdrop-blur-sm"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/70 hover:text-white transition-colors z-[110] p-2 bg-black/20 rounded-full hover:bg-black/40"
              onClick={() => setSelectedIndex(null)}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-[110] p-3 bg-black/20 rounded-full hover:bg-black/40 hidden sm:block"
              onClick={handlePrev}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-[110] p-3 bg-black/20 rounded-full hover:bg-black/40 hidden sm:block"
              onClick={handleNext}
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Content */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: -20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl max-h-[90vh] flex flex-col md:flex-row bg-slate-900 rounded-2xl overflow-hidden shadow-2xl m-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Area */}
              <div className="flex-1 bg-black relative flex items-center justify-center min-h-[40vh] md:min-h-[60vh]">
                <img
                  src={caseStudies[selectedIndex].image}
                  alt={caseStudies[selectedIndex].title}
                  className="max-w-full max-h-full object-contain"
                />
                
                {/* Mobile Nav Overlay */}
                <div className="absolute inset-0 flex items-center justify-between px-2 sm:hidden pointer-events-none">
                  <button 
                    onClick={handlePrev} 
                    className="pointer-events-auto p-2 bg-black/40 rounded-full text-white/70 hover:text-white"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={handleNext} 
                    className="pointer-events-auto p-2 bg-black/40 rounded-full text-white/70 hover:text-white"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Info Area */}
              <div className="w-full md:w-[350px] shrink-0 bg-white p-6 md:p-8 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-mono font-bold mb-4 w-fit">
                  Case Study #{caseStudies[selectedIndex].id}
                </div>
                <h3 className="font-heading font-bold text-2xl text-slate-900 mb-2">
                  {caseStudies[selectedIndex].title}
                </h3>
                <div className="text-[#00ADEF] font-bold text-sm mb-4">
                  {caseStudies[selectedIndex].doctor}
                </div>
                <div className="w-12 h-1 bg-slate-200 mb-4"></div>
                <p className="font-body text-slate-600 leading-relaxed">
                  {caseStudies[selectedIndex].description}
                </p>
                <div className="mt-8 text-xs text-slate-400 font-mono">
                  Sota-D & Shofu Dental
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

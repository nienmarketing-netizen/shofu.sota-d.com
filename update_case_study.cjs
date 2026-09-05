const fs = require('fs');

const fileContent = `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ShoppingCart, ArrowUpRight } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: "Phục hình Răng thẩm mỹ",
    doctor: "Sử dụng: Beautifil Injectable X",
    coverImage: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-1.1.webp",
    images: [
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-1.1.webp", note: "Tình trạng ban đầu: Khe thưa và mòn men bề mặt trước." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-1.2.webp", note: "Sửa soạn bề mặt, soi mòn và cô lập vùng điều trị." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-1.3.webp", note: "Sử dụng keo dán BeautiBond Xtreme tạo liên kết bền vững." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-1.4.webp", note: "Đắp lớp Composite Beautifil Injectable X để tái tạo hình thể." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-1.5.webp", note: "Hoàn thiện hình thể và tiến hành đánh bóng bề mặt." },
      { url: "https://cdn.jsdelivr.net/gh/nienmarketing-netizen/shofu.sota-d.com@main/public/images/Case%20Study/case-study-1.6.webp", note: "Kết quả cuối cùng: Hiệu ứng quang học xuất sắc, độ bóng tự nhiên." }
    ],
    description: "Hiệu ứng quang học xuất sắc, độ bóng tự nhiên duy trì lâu dài."
  },
  {
    id: 2,
    title: "Trám xoang II sâu",
    doctor: "Sử dụng: Beautilink SA & BeautiBond",
    coverImage: "https://images.unsplash.com/photo-1598256989800-fea5ce5146f2?auto=format&fit=crop&q=80&w=1000",
    images: [{ url: "https://images.unsplash.com/photo-1598256989800-fea5ce5146f2?auto=format&fit=crop&q=80&w=1000", note: "Độ khít sát biên hoàn hảo, ngăn ngừa nhạy cảm sau phục hình." }],
    description: "Độ khít sát biên hoàn hảo, ngăn ngừa nhạy cảm sau phục hình."
  },
  {
    id: 3,
    title: "Phục hồi cùi răng",
    doctor: "Sử dụng: Core Paste & Bond",
    coverImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000",
    images: [{ url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000", note: "Độ bền cơ học cao, chịu lực nén tốt, thao tác nhanh." }],
    description: "Độ bền cơ học cao, chịu lực nén tốt, thao tác nhanh."
  },
  {
    id: 4,
    title: "Trám bít hố rãnh",
    doctor: "Công nghệ S-PRG",
    coverImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1000",
    images: [{ url: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1000", note: "Khả năng giải phóng Fluoride liên tục, bảo vệ răng tối ưu." }],
    description: "Khả năng giải phóng Fluoride liên tục, bảo vệ răng tối ưu."
  },
  {
    id: 5,
    title: "Phục hình răng trước mẻ",
    doctor: "Sử dụng: Beautifil II",
    coverImage: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=1000",
    images: [{ url: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=1000", note: "Màu sắc tiệp hoàn toàn, đường hoàn tất vô hình." }],
    description: "Màu sắc tiệp hoàn toàn, đường hoàn tất vô hình."
  },
  {
    id: 6,
    title: "Đóng khe thưa",
    doctor: "Sử dụng: Beautifil Injectable XSL",
    coverImage: "https://images.unsplash.com/photo-1576092762791-dd9e2220c476?auto=format&fit=crop&q=80&w=1000",
    images: [{ url: "https://images.unsplash.com/photo-1576092762791-dd9e2220c476?auto=format&fit=crop&q=80&w=1000", note: "Dễ dàng tạo hình, giữ form tốt, không bị chảy lún." }],
    description: "Dễ dàng tạo hình, giữ form tốt, không bị chảy lún."
  },
  {
    id: 7,
    title: "Gắn Inlay/Onlay",
    doctor: "Sử dụng: Beautilink SA",
    coverImage: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=1000",
    images: [{ url: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=1000", note: "Độ cứng uốn cao, dễ dàng làm sạch xi măng thừa." }],
    description: "Độ cứng uốn cao, dễ dàng làm sạch xi măng thừa."
  },
  {
    id: 8,
    title: "Sửa chữa phục hình sứ",
    doctor: "Sử dụng: BeautiBond Xtreme",
    coverImage: "https://images.unsplash.com/photo-1598256989800-fea5ce5146f2?auto=format&fit=crop&q=80&w=1000",
    images: [{ url: "https://images.unsplash.com/photo-1598256989800-fea5ce5146f2?auto=format&fit=crop&q=80&w=1000", note: "Lực dán cao trên cả Zirconia và Lithium Disilicate." }],
    description: "Lực dán cao trên cả Zirconia và Lithium Disilicate."
  }
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 500 : -500,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 500 : -500,
    opacity: 0
  })
};

export function ShofuCaseStudies() {
  const [selectedCaseIndex, setSelectedCaseIndex] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = (e) => {
    e.stopPropagation();
    if (selectedCaseIndex === null) return;
    const totalImages = caseStudies[selectedCaseIndex].images.length;
    setDirection(1);
    setCurrentImageIndex((prev) => (prev < totalImages - 1 ? prev + 1 : 0));
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    if (selectedCaseIndex === null) return;
    const totalImages = caseStudies[selectedCaseIndex].images.length;
    setDirection(-1);
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : totalImages - 1));
  };

  const openModal = (index) => {
    setSelectedCaseIndex(index);
    setCurrentImageIndex(0);
    setDirection(0);
  };

  const hasMultipleImages = selectedCaseIndex !== null && caseStudies[selectedCaseIndex].images.length > 1;

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
            <strong className="text-slate-900"> Công nghệ S-PRG</strong> và hệ thống vật liệu tiên tiến mang lại <strong className="text-emerald-600">kết quả thẩm mỹ</strong> và <strong className="text-amber-600">độ bền tối ưu</strong>.
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
              onClick={() => openModal(index)}
            >
              <img src={item.coverImage} referrerPolicy="no-referrer"
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
        {selectedCaseIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center backdrop-blur-sm"
            onClick={() => setSelectedCaseIndex(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/70 hover:text-white transition-colors z-[110] p-2 bg-black/20 rounded-full hover:bg-black/40"
              onClick={() => setSelectedCaseIndex(null)}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Content (No key with image index, so it doesn't unmount) */}
            <motion.div
              key={selectedCaseIndex} 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl max-h-[90vh] flex flex-col md:flex-row bg-slate-900 rounded-2xl overflow-hidden shadow-2xl m-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Area with Slide Animation */}
              <div className="flex-1 bg-black relative flex items-center justify-center min-h-[40vh] md:min-h-[60vh] overflow-hidden">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.img
                    key={currentImageIndex}
                    src={caseStudies[selectedCaseIndex].images[currentImageIndex].url}
                    referrerPolicy="no-referrer"
                    alt={\`\${caseStudies[selectedCaseIndex].title} - Image \${currentImageIndex + 1}\`}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 }
                    }}
                    className="absolute max-w-full max-h-full object-contain"
                  />
                </AnimatePresence>
                
                {/* Image Counter */}
                {hasMultipleImages && (
                  <div className="absolute top-4 left-4 bg-black/60 text-white text-xs font-mono px-3 py-1.5 rounded-full z-[120]">
                    {currentImageIndex + 1} / {caseStudies[selectedCaseIndex].images.length}
                  </div>
                )}

                {/* Navigation Buttons (Unified) */}
                {hasMultipleImages && (
                  <>
                    <button 
                      onClick={handlePrev} 
                      className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-black/40 rounded-full text-white/70 hover:text-white hover:bg-black/60 transition-colors z-[120]"
                    >
                      <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
                    </button>
                    <button 
                      onClick={handleNext} 
                      className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-black/40 rounded-full text-white/70 hover:text-white hover:bg-black/60 transition-colors z-[120]"
                    >
                      <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
                    </button>
                  </>
                )}
              </div>

              {/* Info Area with text transition */}
              <div className="w-full md:w-[350px] shrink-0 bg-white p-6 md:p-8 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-mono font-bold mb-4 w-fit">
                  Case Study #{caseStudies[selectedCaseIndex].id}
                </div>
                <h3 className="font-heading font-bold text-2xl text-slate-900 mb-2">
                  {caseStudies[selectedCaseIndex].title}
                </h3>
                <div className="text-[#00ADEF] font-bold text-sm mb-4">
                  {caseStudies[selectedCaseIndex].doctor}
                </div>
                <div className="w-12 h-1 bg-slate-200 mb-4"></div>
                
                <div className="relative min-h-[80px]">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={currentImageIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="font-body text-slate-600 leading-relaxed"
                    >
                      {caseStudies[selectedCaseIndex].images[currentImageIndex].note || caseStudies[selectedCaseIndex].description}
                    </motion.p>
                  </AnimatePresence>
                </div>
                
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
`;
fs.writeFileSync('src/components/shofu/ShofuCaseStudies.tsx', fileContent);
console.log("Updated ShofuCaseStudies.tsx with slide transitions!");

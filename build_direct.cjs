const fs = require('fs');

const content = `import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Layers, 
  Beaker, 
  ChevronDown, 
  Sparkles, 
  AlertTriangle,
  Syringe,
  Shield,
  Star,
  Award,
  Microscope,
  Droplets,
  Target
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { CampaignModal } from '../../CampaignModal';

const ImagePlaceholder = ({ text, className = "" }: { text: string, className?: string }) => (
  <div className={\`flex items-center justify-center p-8 text-center bg-slate-50 border-2 border-dashed border-slate-300 rounded-2xl \${className}\`}>
    <p className="font-mono text-sm text-slate-500 font-medium">
      <span className="block text-[#00ADEF] mb-2">📸 [GHI CHÚ HÌNH ẢNH]</span>
      {text}
    </p>
  </div>
);

const AccordionItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white mb-4 transition-all duration-300">
      <button 
        onClick={onClick}
        className="w-full px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between text-left font-heading font-bold text-slate-900 focus:outline-none"
      >
        <span className="text-sm sm:text-base pr-8">{question}</span>
        <ChevronDown className={\`w-5 h-5 text-[#00ADEF] shrink-0 transition-transform duration-300 \${isOpen ? 'rotate-180' : ''}\`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-5 pb-4 sm:px-6 sm:pb-5 font-body text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export function DirectRestoration() {
  const [isCampaignModalOpen, setIsCampaignModalOpen] = useState(false);
  const [campaignModalTitle, setCampaignModalTitle] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number>(0);

  const openCampaignModal = (title: string) => {
    setCampaignModalTitle(title);
    setIsCampaignModalOpen(true);
  };

  const faqs = [
    {
      q: "Trám composite xoang II sâu có nhất thiết phải cô lập đê cao su tuyệt đối để tránh ê buốt không?",
      a: "Đê cao su là tiêu chuẩn vàng. Tuy nhiên, keo dán BeautiBond Xtreme HEMA-Free kỵ nước với dung môi bay hơi siêu nhanh Acetone tự thâm nhập và bít kín ống ngà ẩm, triệt tiêu 100% ê buốt sau trám bất chấp độ ẩm lâm sàng."
    },
    {
      q: "Làm thế nào để giải quyết triệt để tình trạng composite dính dụng cụ điêu khắc múi rãnh?",
      a: "Bác sĩ nên lau sạch dụng cụ định kỳ, vo tròn composite hoặc nhúng nhẹ đầu khắc vào dung dịch hỗ trợ tạo hình Modeling Liquid của Shofu để điêu khắc mượt mà, lướt êm không dính cây."
    },
    {
      q: "Hạt độn S-PRG liên tục giải phóng ion thì miếng trám có bị mòn nhanh hay rỗng xốp theo thời gian không?",
      a: "Hoàn toàn không. S-PRG được bọc trong màng biến tính bền vững và phân bổ đồng đều trong mạng nhựa polymer. Beautifil II LS đạt lực nén 364 MPa, lực uốn 120 MPa đảm bảo kháng mòn cao và bóng láng vĩnh cửu."
    },
    {
      q: "Lực dán tự soi mòn (Self-Etch) của BeautiBond Xtreme có bị suy giảm theo thời gian không?",
      a: "Tuyệt đối không. BBX ứng dụng công nghệ ARS bọc giáp bảo vệ Silane kháng axit kết hợp monomer MDP tạo liên kết hóa học siêu cường, duy trì lực dán bền bỉ ~30-35 MPa bất chấp lão hóa nhiệt."
    }
  ];

  return (
    <div className="w-full flex flex-col">
      {/* SECTION 1: HERO */}
      <section className="relative bg-gradient-to-br from-[#00ADEF]/10 to-[#007AA8]/10 pt-[100px] pb-16 md:pt-[120px] md:pb-24 overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="w-[90%] lg:w-[80%] mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 border border-sky-200 backdrop-blur-sm mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 text-[#00ADEF]" />
              <span className="font-mono text-xs font-bold text-sky-800 uppercase tracking-wider">Giải Pháp Phục Hình Trực Tiếp MiCD</span>
            </div>
            
            <h1 className="font-heading font-extrabold text-3xl md:text-5xl lg:text-5xl text-slate-900 leading-[1.2] mb-6 tracking-tight">
              CHẤM DỨT ÁM ẢNH Ê BUỐT SAU TRÁM & SÂU RĂNG THỨ PHÁT TRONG <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ADEF] to-[#007AA8]">PHỤC HỒI XOANG II RĂNG SAU</span>
            </h1>
            
            <p className="font-body text-base md:text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Trải nghiệm bước dịch chuyển đột phá từ "Phục hồi cơ học thụ động" sang <strong>"Trị liệu sinh học chủ động"</strong> với hệ sinh thái Giomer ứng dụng công nghệ hạt độn S-PRG từ Shofu Nhật Bản. Quy trình lâm sàng được tối giản hóa tối đa, giúp bảo tồn cấu trúc ngà sống và giải phóng hoàn toàn áp lực nhạy cảm kỹ thuật cho Bác sĩ.
            </p>
            
            <ul className="space-y-4 mb-10 text-left max-w-2xl mx-auto lg:mx-0">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#00ADEF] shrink-0 mt-0.5" />
                <span className="font-body text-slate-700 leading-relaxed">
                  <strong>Triệt tiêu 100% nguy cơ ê buốt tức thì</strong> nhờ màng dán kỵ nước HEMA-Free của keo dán thế hệ 8 BeautiBond Xtreme.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#00ADEF] shrink-0 mt-0.5" />
                <span className="font-body text-slate-700 leading-relaxed">
                  <strong>Chống vi thấm và hở kẽ đường viền</strong> nhờ dòng composite đặc Beautifil II LS sở hữu độ co rút thể tích cực thấp kỷ lục chỉ 0.85% Vol.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#00ADEF] shrink-0 mt-0.5" />
                <span className="font-body text-slate-700 leading-relaxed">
                  <strong>Thiết lập màng khiên bảo vệ sinh học 24/7</strong> chống sâu răng tái phát nhờ cơ chế phóng thích và tự sạc lại 6 loại ion của hạt độn S-PRG.
                </span>
              </li>
            </ul>

            <button 
              onClick={() => openCampaignModal("MỞ KHÓA COMBO TRÁM MiCD CHỈ VỚI 3.250.000đ & NHẬN BỘ KÍT MÀI BÓNG")}
              className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#00ADEF] text-white px-3 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-[10.5px] min-[375px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-sky-500 hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap flex-nowrap"
            >
              <span className="truncate">MỞ KHÓA COMBO TRÁM MiCD & QUÀ TẶNG</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </button>
          </div>
          
          <div className="w-full lg:w-[45%] relative">
             <ImagePlaceholder 
                className="aspect-[16/9] w-full shadow-xl bg-white/50 backdrop-blur-sm border-sky-200" 
                text="Tỷ lệ khung hình: 16:9 nằm ngang, bố cục phẳng (Flat UI style) hiện đại. Visual: Một bên là hình ảnh lâm sàng chụp cận cảnh một ca phục hồi xoang II răng sau hoàn mỹ bằng composite Beautifil II LS. Bên cạnh là hình ảnh chụp Mockup sản phẩm sang trọng (BBX, Beautifil II LS, Injectable X). Mã màu ưu tiên: Cyan (#00adef) làm hiệu ứng hào quang ion." 
             />
          </div>
        </div>
      </section>

      {/* SECTION 2: PAIN POINTS */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="w-[90%] lg:w-[80%] mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-[#fb2c36] font-mono text-sm font-bold uppercase tracking-wider mb-3 block">Góc Khuất Lâm Sàng</span>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-slate-900 mb-6">Trám răng xoang II sâu dưới nướu luôn là "cơn ác mộng" âm thầm</h2>
            <p className="font-body text-slate-600 max-w-3xl mx-auto leading-relaxed text-base md:text-lg">
              Khó cô lập hoàn toàn, dễ bị nhiễm ẩm, khó tạo tiếp xúc bên, và đặc biệt là áp lực co ngót vật liệu kéo giật cùi răng gây hở vi kẽ. Nhiều Bác sĩ trẻ thường tự đổ lỗi cho kỹ năng thao tác thổi khô sai kỹ thuật của mình.
            </p>
            <p className="font-body text-slate-700 font-medium max-w-3xl mx-auto leading-relaxed text-base md:text-lg mt-4">
              Nhưng sự thật y khoa chứng minh: lỗi lớn nằm ở bản chất vật liệu thế hệ cũ. Lớp keo dán chứa HEMA rất dễ hút nước, làm phân hủy và thủy phân lớp lai theo thời gian. Đồng thời, các dòng composite thông thường có ứng suất co ngót quá lớn, kéo giật đường viền miếng trám ngay sau khi chiếu đèn, tạo điều kiện cho vi khuẩn bám đọng gây sâu răng thứ phát.
            </p>
          </div>

          <div className="w-full max-w-5xl mx-auto relative rounded-3xl overflow-hidden shadow-2xl">
            <ImagePlaceholder 
              className="aspect-[16/9] w-full bg-slate-100 border-0" 
              text="Biểu đồ so sánh dạng Split-Screen 16:9 sắc nét. Bên trái (Đỏ): Lát cắt vi mô nứt dọc ống ngà do co rút, HEMA hút nước vi khuẩn bám. Bên phải (Cyan): Màng keo kỵ nước mỏng bít chặt, composite co rút thấp khít sát, giải phóng ion tiêu diệt vi khuẩn." 
            />
          </div>

          <div className="mt-12 md:mt-16 text-center">
            <button 
              onClick={() => openCampaignModal("SỞ HỮU TRỌN BỘ GIẢI PHÁP TRÁM SINH HỌC & ĐẶC QUYỀN ĐÀO TẠO 1:1")}
              className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#00ADEF] text-white px-3 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-[10.5px] min-[375px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-sky-500 hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap flex-nowrap"
            >
              <span className="truncate">SỞ HỮU TRỌN BỘ GIẢI PHÁP TRÁM SINH HỌC</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 3: 3-STEP PROCESS */}
      <section className="py-16 md:py-24 bg-slate-50 relative border-t border-slate-200">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        <div className="w-[90%] lg:w-[80%] mx-auto relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-slate-900 mb-6">
              Hệ Sinh Thái Giomer: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ADEF] to-[#007AA8]">Quy Trình Trám Dính 3 Bước Tối Giản</span>
            </h2>
            <p className="font-body text-slate-600 max-w-2xl mx-auto text-lg">
              Thiết lập quy trình trám dính vị tha trên lâm sàng, giải phóng hoàn toàn áp lực kỹ thuật cho Bác sĩ.
            </p>
          </div>

          <div className="space-y-24">
            {/* Step 1 */}
            <div className="flex flex-col lg:flex-row gap-10 items-center">
              <div className="w-full lg:w-1/2">
                <ImagePlaceholder 
                  className="aspect-[4/3] w-full bg-white shadow-lg" 
                  text="Ảnh chụp thực tế sản phẩm BeautiBond Xtreme 5ml thiết kế nắp bật một tay, bên cạnh là lát cắt kính hiển vi SEM mô tả lớp tua nhựa dán (resin tags) cắm sâu, đồng đều bịt kín các ống ngà." 
                />
              </div>
              <div className="w-full lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 font-mono text-xs font-bold mb-4">
                  BƯỚC 1
                </div>
                <h3 className="font-heading font-bold text-2xl md:text-3xl text-slate-900 mb-2">Keo dán Universal kỵ nước BeautiBond Xtreme (BBX)</h3>
                <h4 className="font-heading font-semibold text-lg text-[#00ADEF] mb-4">Khóa chặt ống ngà kỵ nước – Chấm dứt hiện tượng thủy phân liên kết dán</h4>
                <p className="font-body text-slate-600 leading-relaxed mb-6">
                  BBX loại bỏ hoàn toàn thành phần HEMA ưa nước. Ứng dụng hệ dung môi Acetone bay hơi nhanh giúp đưa 4 monomer chức năng (đặc biệt là biến thể 10-MDP và Carboxylic) thâm nhập sâu vào các ống ngà ẩm, tạo màng dán dính kỵ nước cực kỳ bền vững.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center shrink-0">
                      <Zap className="w-5 h-5 text-[#00ADEF]" />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900 font-heading">Màng dán siêu mỏng vô song ~5µm (Filler-Free)</h5>
                      <p className="text-sm text-slate-600 font-body">Lan chảy loang mỏng hoàn hảo dưới lực thổi khí nhẹ, ngăn chặn tuyệt đối tình trạng đọng keo ở góc chuyển tiếp, giúp phục hình khít sát tuyệt đối.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center shrink-0">
                      <Zap className="w-5 h-5 text-[#00ADEF]" />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900 font-heading">Quy trình "True Universal" tự soi mòn (Self-Etch)</h5>
                      <p className="text-sm text-slate-600 font-body">Chỉ 1 lớp duy nhất dán trực tiếp lên mọi bề mặt và mọi vật liệu phục hình mà không cần mua thêm primer rời. Quy trình chớp nhoáng: Thoa keo ➔ Thổi khô ➔ Chiếu đèn 5 giây.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col lg:flex-row-reverse gap-10 items-center">
              <div className="w-full lg:w-1/2">
                <ImagePlaceholder 
                  className="aspect-[4/3] w-full bg-white shadow-lg" 
                  text="Ảnh chụp cận cảnh tuýp composite Beautifil II LS màu sắc sang trọng bên cạnh hình ảnh cùi răng sau khi hoàn thiện trám mặt nhai, các múi răng được điêu khắc sắc nét, chân thực không tì vết." 
                />
              </div>
              <div className="w-full lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 font-mono text-xs font-bold mb-4">
                  BƯỚC 2
                </div>
                <h3 className="font-heading font-bold text-2xl md:text-3xl text-slate-900 mb-2">Composite đặc giảm co rút Beautifil II LS</h3>
                <h4 className="font-heading font-semibold text-lg text-[#00ADEF] mb-4">Điêu khắc múi rãnh vững chãi – Triệt tiêu ứng suất co ngót trùng hợp</h4>
                <p className="font-body text-slate-600 leading-relaxed mb-6">
                  Beautifil II LS sở hữu tỷ lệ hạt độn cao (83 wt%) giúp giảm thiểu tối đa độ co ngót thể tích xuống mức kỷ lục <strong>0.85% Vol</strong> và ứng suất co ngót tối thiểu chỉ <strong>1.37 MPa</strong>. Bảo vệ đường hoàn tất khỏi hiện tượng nứt kẽ vi thể và đổi màu đường viền sau nhiều năm ăn nhai.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center shrink-0">
                      <Shield className="w-5 h-5 text-[#00ADEF]" />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900 font-heading">Độ bền nén 364 MPa & độ bền uốn 120 MPa</h5>
                      <p className="text-sm text-slate-600 font-body">Chịu lực uốn và lực nhai cực đại ở vùng răng sau, chống mẻ vỡ vượt trội.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center shrink-0">
                      <Shield className="w-5 h-5 text-[#00ADEF]" />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900 font-heading">Hiệu ứng quang học "Tắc kè hoa" sinh động</h5>
                      <p className="text-sm text-slate-600 font-body">Tự động hòa quyện sắc độ với men ngà xung quanh, dễ dàng đánh bóng đạt độ bóng sáng tự nhiên chỉ trong vài giây.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col lg:flex-row gap-10 items-center">
              <div className="w-full lg:w-1/2">
                <ImagePlaceholder 
                  className="aspect-[4/3] w-full bg-white shadow-lg" 
                  text="Hình ảnh mô phỏng 3D đầu bơm siêu nhỏ của xi-lanh Beautifil Injectable X đang bơm trực tiếp composite lỏng vào kẽ bên xoang II của răng cối một cách mượt mà, không bọt khí." 
                />
              </div>
              <div className="w-full lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 font-mono text-xs font-bold mb-4">
                  BƯỚC 3
                </div>
                <h3 className="font-heading font-bold text-2xl md:text-3xl text-slate-900 mb-2">Composite lỏng đắp lớp Beautifil Injectable X</h3>
                <h4 className="font-heading font-semibold text-lg text-[#00ADEF] mb-4">Sức mạnh hạt độn Nano-Optimized Silane – Lấp đầy mọi hốc sâu vi thể</h4>
                <p className="font-body text-slate-600 leading-relaxed mb-6">
                  Với đặc tính lưu biến thông minh (thixotropic), Beautifil Injectable X định hình cực tốt khi đắp lớp nhưng tự động chảy loang phẳng láng dưới áp lực. Vật liệu len lỏi hoàn hảo vào các ngóc ngách xoang II hẹp dưới nướu mà không tạo bọt khí.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center shrink-0">
                      <Target className="w-5 h-5 text-[#00ADEF]" />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900 font-heading">Độ bền nén cơ học siêu cường 400 MPa</h5>
                      <p className="text-sm text-slate-600 font-body">Thừa hưởng độ bền nén vượt trội tương đương composite đặc, ứng dụng đắp khối mặt nhai chịu lực trực tiếp.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center shrink-0">
                      <Target className="w-5 h-5 text-[#00ADEF]" />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900 font-heading">Kiểm soát bám dính dụng cụ xuất sắc</h5>
                      <p className="text-sm text-slate-600 font-body">Khắc phục triệt để rào cản dính cây trám. Thao tác nhàn tênh khi kết hợp các mẹo lâm sàng (như vo tròn composite, sử dụng đầu thám trâm nhọn, lau sạch dụng cụ định kỳ hoặc dùng dung dịch hỗ trợ tạo hình Modeling Liquid).</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
             <button 
              onClick={() => openCampaignModal("TẢI MIỄN PHÍ PHÁC ĐỒ 'KIỂM SOÁT CO NGÓT XOANG II' CHO PHÒNG KHÁM")}
              className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-slate-900 text-white px-3 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-[10.5px] min-[375px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-slate-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap flex-nowrap"
            >
              <span className="truncate">TẢI MIỄN PHÍ PHÁC ĐỒ KIỂM SOÁT CO NGÓT XOANG II</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 4: CORE TECHNOLOGY */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="w-[90%] lg:w-[80%] mx-auto relative z-10 flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-slate-900 mb-6">
              CÔNG NGHỆ HẠT ĐỘN SINH HỌC S-PRG – <span className="text-[#00ADEF]">"BÌNH ẮC QUY" ION BẢO VỆ CHỦ ĐỘNG</span>
            </h2>
            <p className="font-body text-slate-600 leading-relaxed mb-8 text-lg">
              Điểm cốt lõi làm nên sức mạnh trị liệu vượt trội của hệ sinh thái Giomer là hạt độn sinh học S-PRG độc quyền của Shofu. Cấu trúc hạt độn 3 lớp gồm lõi thủy tinh đa chức năng đã phản ứng trước, hoạt động như một "bình ắc quy sinh học" liên tục giải phóng và tự sạc lại 6 loại ion sinh học giúp tái khoáng hóa ngà răng và chống mảng bám vĩnh cửu.
            </p>
            <div className="space-y-4">
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00ADEF] shrink-0 mt-1" />
                <p className="text-slate-700 font-body"><strong>Cơ chế sạc và nhả Fluoride ($F^-$) vĩnh cửu:</strong> Phóng thích ion bảo vệ và tự sạc lại Fluoride ngoại sinh mỗi khi bệnh nhân đánh răng để tái khoáng hóa mô ngà răng thật.</p>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#fb2c36] shrink-0 mt-1" />
                <p className="text-slate-700 font-body"><strong>Kháng khuẩn ở cấp độ phân tử (Nghiên cứu Nature 2018):</strong> Ion Borate ($BO_3^{3-}$) ức chế trực tiếp gen pdh operon của vi khuẩn Streptococcus mutans, bẻ gãy nguồn năng lượng sống và triệt tiêu khả năng bám dính tạo mảng sinh học (biofilm) ngay cả khi có đường sucrose.</p>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00ADEF] shrink-0 mt-1" />
                <p className="text-slate-700 font-body"><strong>Trung hòa Axit chủ động (pH-buffering):</strong> Phóng thích Aluminium, Sodium và Silicate để kiềm hóa môi trường vi mô quanh miếng trám khi pH rơi xuống dưới 5.5, đưa pH về mức an toàn để chặn đứng sự khử khoáng men ngà.</p>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00ADEF] shrink-0 mt-1" />
                <p className="text-slate-700 font-body"><strong>Bảo vệ mô nướu bờ viền săn chắc:</strong> Kháng mảng bám sinh học giúp giữ vùng nướu quanh đường hoàn tất phục hình luôn hồng hào, săn chắc, giảm thiểu tối đa viêm nướu quanh răng.</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
             <ImagePlaceholder 
                className="aspect-square w-full" 
                text="Sơ đồ 3D cấu tạo hạt độn S-PRG (Cyan & Đỏ). Hạt độn trung tâm tỏa 6 quầng sáng đại diện 6 ion bảo vệ hướng về phía chiếc răng thật đang được bao bọc bởi lớp màng sinh học lấp lánh." 
             />
          </div>
        </div>
      </section>

      {/* SECTION 5: SOCIAL PROOF */}
      <section className="py-16 md:py-24 bg-slate-900 relative border-y border-slate-800 text-white">
        <div className="w-[90%] lg:w-[80%] mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white mb-6">CHỨNG CỨ LÂM SÀNG & ĐÁNH GIÁ</h2>
            <p className="font-body text-slate-400 max-w-2xl mx-auto text-lg">
              Sota-D mang đến những bằng chứng thép từ các nghiên cứu lâm sàng độc lập uy tín nhất thế giới đăng trên tạp chí JADA (Journal of the American Dental Association):
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 text-center">
              <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#00ADEF]/20 text-[#00ADEF] font-mono font-bold text-sm mb-4">THEO DÕI 8 NĂM</div>
              <div className="text-6xl font-extrabold text-[#00ADEF] mb-4">100%</div>
              <h3 className="text-xl font-bold mb-4">TỶ LỆ LƯU GIỮ</h3>
              <p className="text-slate-400 font-body text-sm mb-4">0% Ê buốt | 0% Thất bại | 0% Sâu răng</p>
              <p className="text-slate-300 font-body leading-relaxed">Kết quả theo dõi lâm sàng sau 8 năm (Đại học Florida): Ghi nhận đạt 100% tỷ lệ lưu giữ phục hình, hoàn toàn không phát hiện bất kỳ ca thất bại phục hình, ê buốt sau điều trị hay sâu răng thứ phát bờ viền dán nào.</p>
            </div>
            
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 text-center">
              <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#00ADEF]/20 text-[#00ADEF] font-mono font-bold text-sm mb-4">THEO DÕI 13 NĂM</div>
              <div className="text-6xl font-extrabold text-[#00ADEF] mb-4">96%</div>
              <h3 className="text-xl font-bold mb-4">PHỤC HÌNH SẠCH BÓNG SÂU RĂNG</h3>
              <p className="text-slate-400 font-body text-sm mb-4">Kháng vi thấm vững bền tuyệt đối</p>
              <p className="text-slate-300 font-body leading-relaxed">Kết quả theo dõi lâm sàng sau 13 năm (Đại học Florida): Đạt 96% tỷ lệ phục hồi không xuất hiện sâu răng thứ phát, chứng minh khả năng phòng thủ sinh học và kháng vi thấm vững bền tuyệt đối theo thời gian.</p>
            </div>
          </div>
          
          <div className="w-full max-w-4xl mx-auto">
            <ImagePlaceholder 
              className="aspect-[21/9] w-full bg-slate-800 border-slate-700" 
              text="Mockup tài liệu góc chụp bài báo cáo lâm sàng chính thức từ Đại học Florida đăng trên JADA, kết hợp biểu đồ hình tròn hiển thị nổi bật hai con số 100% và 96% bằng màu Cyan thương hiệu cực kỳ bắt mắt." 
            />
          </div>
        </div>
      </section>

      {/* SECTION 6: FAQ */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="w-[90%] lg:w-[80%] mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-slate-900 mb-6">Câu Hỏi Thường Gặp</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem 
                key={idx}
                question={faq.q}
                answer={faq.a}
                isOpen={openFaqIndex === idx}
                onClick={() => setOpenFaqIndex(openFaqIndex === idx ? -1 : idx)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: THE CORE OFFER */}
      <section className="py-20 lg:py-28 bg-slate-900 relative border-b border-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-light opacity-100 pointer-events-none"></div>
        <div className="w-[90%] lg:w-[80%] mx-auto relative z-10">
          <div className="text-center relative">
            <span className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-amber-500/20 border border-amber-500/30 mb-6 font-mono text-[10px] sm:text-xs font-bold text-amber-400 tracking-wide">
              Đặc quyền đồng hành không thể từ chối
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-[1.3] mb-10 tracking-tight">
              Gói giải pháp đồng bộ <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200">Combo "Trám Sinh Học MiCD - Chặn Đứng Ê Buốt"</span>
            </h2>
          </div>

          <div className="bg-slate-800/80 rounded-3xl p-8 md:p-10 border border-slate-700 mb-8 w-full max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="flex-1 space-y-8">
                <div>
                  <h3 className="font-heading font-bold text-2xl text-amber-400 mb-4 border-b border-slate-700 pb-4">Bộ 3 Sản Phẩm Cốt Lõi</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-slate-300">01 Bộ keo dán Universal thế hệ 8 BeautiBond Xtreme (5ml) <span className="text-slate-500 line-through text-sm">(1.420.000 VNĐ)</span></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-slate-300">01 Tuýp Composite đặc giảm co rút Beautifil II (4.5g) hoặc Beautifil II LS (4g) <span className="text-slate-500 line-through text-sm">(495.000 VNĐ)</span></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-slate-300">01 Tuýp Composite lỏng siêu lực nén Beautifil Injectable X (2.2g) <span className="text-slate-500 line-through text-sm">(595.000 VNĐ)</span></span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-heading font-bold text-2xl text-white mb-4 border-b border-amber-500/30 pb-4">🎁 Bộ 3 Quà Tặng Tài Trợ 100%</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="bg-amber-500/20 p-1.5 rounded-lg shrink-0"><Award className="w-4 h-4 text-amber-400" /></div>
                      <span className="text-amber-100 font-medium">Quà vật lý: 01 Bộ mũi mài bóng Composite Polishing Kit CA <span className="text-amber-500/70 text-sm">(740.000 VNĐ)</span></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-amber-500/20 p-1.5 rounded-lg shrink-0"><Award className="w-4 h-4 text-amber-400" /></div>
                      <span className="text-amber-100 font-medium">Tài liệu: Phác đồ E-Guide "Làm Chủ Lớp Lai & Kỹ Thuật Trám Xoang II" <span className="text-amber-500/70 text-sm">(1.500.000 VNĐ)</span></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-amber-500/20 p-1.5 rounded-lg shrink-0"><Award className="w-4 h-4 text-amber-400" /></div>
                      <span className="text-amber-100 font-medium">Đặc quyền: Vé gia nhập Group gỡ rối lâm sàng Zalo 1:1 trong 30 ngày <span className="text-amber-500/70 text-sm">(2.500.000 VNĐ)</span></span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="w-full lg:w-[40%]">
                 <ImagePlaceholder 
                    className="h-full min-h-[300px] w-full bg-slate-900 border-slate-700" 
                    text="Mockup trọn bộ Combo đối xứng: BBX, Beautifil II LS, Injectable X ở giữa. Bên trái: Tablet hiển thị Ebook E-Guide màu Navy. Bên phải: Hộp nhựa Polishing Kit CA. Dưới: Thẻ VIP Zalo Access kim loại đen chữ vàng." 
                 />
              </div>
            </div>
          </div>

          <div className="w-full max-w-5xl mx-auto bg-slate-800/50 rounded-2xl p-6 md:p-8 border border-slate-700/50 mb-10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-[50px] rounded-full pointer-events-none"></div>
            
            <div className="text-center md:text-left relative z-10">
              <p className="text-slate-400 text-sm font-medium mb-1 uppercase tracking-wider">Tổng giá trị</p>
              <div className="flex items-baseline justify-center md:justify-start gap-2">
                <p className="text-slate-400 text-2xl md:text-3xl font-bold line-through decoration-red-500/50 decoration-2">~ 7.250.000đ</p>
              </div>
              <p className="text-xs text-slate-500 mt-1">(Bác sĩ chỉ thanh toán phần vật lý 3 sản phẩm chính)</p>
            </div>
            
            <div className="hidden md:block w-px h-16 bg-slate-700 relative z-10"></div>
            <div className="block md:hidden w-full h-px bg-slate-700 relative z-10"></div>
            
            <div className="text-center md:text-right relative z-10">
              <p className="text-amber-400 text-sm font-medium mb-1 uppercase tracking-wider">Mức đầu tư trải nghiệm</p>
              <p className="font-heading font-extrabold text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200">3.250.000đ</p>
            </div>
          </div>

          <div className="w-full max-w-5xl mx-auto space-y-4 mb-10 text-slate-300 font-body text-sm md:text-base bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
            <h4 className="font-bold text-white mb-2 flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-emerald-400" /> BẢO CHỨNG ĐỒNG HÀNH 3 LỚP (RỦI RO BẰNG 0)</h4>
            <p><strong>Bảo chứng 1 (Dứt ê buốt):</strong> Hỗ trợ 1:1 trong 5 ca trám sống đầu tiên. Nếu bệnh nhân ê buốt, chuyên gia call gỡ lỗi. Nếu không hợp tay, thu hồi và hoàn tiền 100%.</p>
            <p><strong>Bảo chứng 2 (Bảo hiểm thói quen):</strong> Trong 30 ngày, nếu thao tác không hợp, hỗ trợ thu hồi sản phẩm chưa dùng và quy đổi vật tư khác giá trị tương đương.</p>
            <p><strong>Bảo chứng 3 (Bảo hành tồn kho 90 ngày):</strong> Đổi mới 1-1 ngay lập tức nếu lỗi đông cứng khi mở nắp trong vòng 90 ngày.</p>
          </div>

          <div className="flex justify-center w-full">
            <button 
              onClick={() => openCampaignModal("MỞ KHÓA COMBO TRÁM MiCD CHỈ VỚI 3.250.000đ & NHẬN BỘ KÍT MÀI BÓNG")}
              className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#00ADEF] text-white px-3 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-[10.5px] min-[375px]:text-xs sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider hover:bg-sky-500 hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto whitespace-nowrap flex-nowrap"
            >
              <span className="truncate">ĐĂNG KÝ NHẬN ƯU ĐÃI NGAY</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </button>
          </div>
        </div>
      </section>

      <CampaignModal
        isOpen={isCampaignModalOpen}
        onClose={() => setIsCampaignModalOpen(false)}
        title={campaignModalTitle}
      />
    </div>
  );
}
`
fs.writeFileSync('src/components/shofu/solutions/DirectRestoration.tsx', content);
console.log("Successfully created DirectRestoration.tsx");

import React, { useState } from 'react';
import { Gift, BookOpen, CheckCircle, ArrowRight, ShieldCheck, Zap, Layers, Beaker, ChevronDown, AlertTriangle, Syringe, Shield, Star, Award, Microscope, Droplets, Target, XCircle, CheckSquare, Download, RefreshCw, HandHeart, Activity, Quote } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { CampaignModal } from '../../CampaignModal';
import { CtaButton } from '../../ui/CtaButton';

const ImagePlaceholder = ({ className, text }: { className?: string; text: string }) => (
  <div className={`flex items-center justify-center p-4 text-center ${className} bg-slate-100/80 border-dashed border-2 border-slate-300 shadow-sm`}>
    <span className="text-slate-500 font-medium font-body text-sm sm:text-base">{text}</span>
  </div>
);

const AccordionItem: React.FC<{ question: string, answer: React.ReactNode, isOpen: boolean, onClick: () => void }> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border border-slate-200 rounded-2xl mb-4 bg-white overflow-hidden shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:border-[#8C2828]/30">
      <button
        className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none group"
        onClick={onClick}
      >
        <span className="font-heading font-bold text-slate-900 text-base sm:text-lg group-hover:text-[#8C2828] transition-colors pr-6">
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-[#8C2828] text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-red-50 group-hover:text-[#8C2828]'}`}>
          <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-slate-600 font-body text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


const DarkAccordionItem: React.FC<{ question: string, answer: React.ReactNode, isOpen: boolean, onClick: () => void, icon?: string }> = ({ question, answer, isOpen, onClick, icon }) => {
  return (
    <div className="border border-slate-700/80 rounded-2xl mb-4 bg-slate-800/80 overflow-hidden shadow-sm transition-all duration-300 hover:border-blue-500/30">
      <button
        className="w-full flex items-start justify-between p-5 sm:p-6 text-left focus:outline-none group"
        onClick={onClick}
      >
        <div className="flex items-start gap-4 pr-6">
          {icon && <span className="text-2xl leading-none mt-0.5 shrink-0">{icon}</span>}
          <span className="font-heading font-bold text-white text-sm sm:text-base leading-snug group-hover:text-blue-400 transition-colors">
            {question}
          </span>
        </div>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-blue-500/20 text-blue-400' : 'bg-slate-700/50 text-slate-400 group-hover:bg-blue-500/10 group-hover:text-blue-400'}`}>
          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-4 border-t border-slate-700/50">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


const row1Feedbacks = [
  {
    quote: "Công nghệ véc-ni PRG Barrier Coat và BeautiSealant ứng dụng S-PRG hoạt động như một phép màu giúp tăng tốc quy trình lâm sàng cho các bé nhỏ hiếu động nhờ loại bỏ hoàn toàn bước Etching nhạy cảm.",
    name: "Dr. Shukan Kanuga",
    title: "Hiệp hội Nha khoa Trẻ em Hoa Kỳ, California"
  },
  {
    quote: "Từ ngày ứng dụng PRG Barrier Coat vào phòng khám, các ca mòn cổ răng và ê buốt ngà được xử lý cực kỳ nhẹ nhàng, bệnh nhân phản hồi rất tích cực vì không cần mài răng.",
    name: "BS. Nguyễn Văn Tuấn",
    title: "Phòng khám Nha khoa Nụ Cười Mới"
  },
  {
    quote: "Khả năng chống ê buốt ngà của PRG Barrier Coat kéo dài tới vài tháng là chìa khóa giúp phòng khám của tôi xử lý êm đẹp các ca tụt nướu và mòn cổ răng mà không cần xâm lấn mài mô răng.",
    name: "Prof. Tanaka",
    title: "Đại học Y khoa Tokyo, Nhật Bản"
  },
  {
    quote: "Trám hố rãnh với BeautiSealant thực sự thay đổi cách chúng tôi làm việc. Không cần Etching, không lo đọng nước bọt, bảo vệ răng sâu cho trẻ em nhanh chóng và an toàn tuyệt đối.",
    name: "BS. Lê Thị Bích Ngọc",
    title: "Nha khoa Trẻ em KidSmile"
  },
  {
    quote: "Hạt độn S-PRG là bước tiến vượt bậc của nha khoa phòng ngừa. Nó không chỉ trám bít mà còn chủ động giải phóng Fluoride và các ion có lợi để tái khoáng hóa men răng liên tục.",
    name: "Dr. Howard Farran",
    title: "Tạp chí Nha khoa Dentaltown"
  }
];

const row2Feedbacks = [
  {
    quote: "Giải pháp phòng ngừa của Shofu giúp tôi xây dựng niềm tin tuyệt đối với phụ huynh khi điều trị cho trẻ. Đặc biệt là trẻ sợ đau, thao tác nhanh và êm ái là ưu điểm tuyệt đối.",
    name: "Dr. Takeshi Saito",
    title: "Chuyên gia Nha khoa Trẻ em, Tokyo"
  },
  {
    quote: "BeautiSealant bám dính tuyệt vời trên cả những bề mặt răng khó cô lập nước bọt nhất. Tôi chưa thấy sản phẩm trám bít hố rãnh nào có độ ổn định và tỷ lệ bong tróc thấp như vậy.",
    name: "BS. Trần Minh Quân",
    title: "Giám đốc chuyên môn Hệ thống Nha khoa Nụ Cười Xinh"
  },
  {
    quote: "Tôi dùng PRG Barrier Coat cho mọi bệnh nhân tẩy trắng răng nhạy cảm và bệnh nhân sau khi cạo vôi răng. Hiệu quả cắt cơn ê buốt gần như ngay lập tức và duy trì rất lâu.",
    name: "BS. Lâm Quế Chi",
    title: "Phòng khám Nha khoa Tâm An"
  },
  {
    quote: "Cơ chế phóng thích 6 loại ion của S-PRG mang lại sự an tâm tuyệt đối khi điều trị cho bệnh nhân có nguy cơ sâu răng cao. Nó như một lớp bảo vệ sinh học chủ động 24/7.",
    name: "Prof. Li Wei",
    title: "Khoa Răng Hàm Mặt, Đại học Bắc Kinh"
  },
  {
    quote: "Nếu bạn muốn thiết kế một quy trình nha khoa phòng ngừa chuẩn mực, thân thiện và hiệu quả dài lâu, thì hệ sinh thái S-PRG của Shofu là khoản đầu tư bắt buộc phải có.",
    name: "BS. Phạm Hoàng Yến",
    title: "Giám đốc chuyên môn Nha khoa Thẩm mỹ"
  }
];

const FeedbackCard: React.FC<{ item: any }> = ({ item }) => (
  <div className="w-[320px] sm:w-[400px] shrink-0 bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:bg-slate-800 transition-colors">
     <div>
       <Quote className="w-8 h-8 text-slate-500 mb-4 opacity-50" />
       <p className="font-body text-slate-300 text-sm sm:text-base leading-relaxed italic mb-6">
         "{item.quote}"
       </p>
     </div>
     <div className="flex items-center gap-4">
        <div className="text-left">
           <p className="font-bold text-white text-sm">{item.name}</p>
           <p className="text-slate-400 text-xs mt-0.5">{item.title}</p>
        </div>
     </div>
  </div>
);

export const ComprehensiveSolution = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [campaignModalTitle, setCampaignModalTitle] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number>(-1);

  const scientificPillars = [
    {
      id: 1,
      title: 'Đột phá cấp độ phân tử – Kháng bệnh sâu răng (Tạp chí Nature 2018)',
      icon: '🧬',
      content: (
        <ul className="space-y-3">
          <li className="flex gap-3 items-start"><div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" /><span className="text-slate-300 font-body text-sm sm:text-base leading-relaxed"><strong className="text-white">Cơ quan kiểm định:</strong> Khoa Nha Trẻ em – Đại học Osaka, Nhật Bản (Công bố trên Scientific Reports - Nature Research).</span></li>
          <li className="flex gap-3 items-start"><div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" /><span className="text-slate-300 font-body text-sm sm:text-base leading-relaxed"><strong className="text-white">Cơ chế di truyền:</strong> Dịch chiết từ hạt độn S-PRG trực tiếp kìm hãm sự biểu hiện của gen pdh operon (Pyruvate Dehydrogenase) thuộc con đường chuyển hóa đường trung tâm của vi khuẩn Streptococcus mutans.</span></li>
          <li className="flex gap-3 items-start"><div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" /><span className="text-slate-300 font-body text-sm sm:text-base leading-relaxed"><strong className="text-white">Outcome lâm sàng:</strong> Triệt tiêu khả năng bám dính tạo mảng sinh học (Biofilm) trên bề mặt phục hình, ngăn chặn tận gốc sự hình thành mảng bám khuẩn ngay cả trong môi trường giàu đường Sucrose.</span></li>
        </ul>
      )
    },
    {
      id: 2,
      title: 'Bảo chứng lâm sàng dài hạn 13 năm (Tạp chí JADA - Đại học Florida, Mỹ)',
      icon: '🏛️',
      content: (
        <ul className="space-y-3">
          <li className="flex gap-3 items-start"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" /><span className="text-slate-300 font-body text-sm sm:text-base leading-relaxed"><strong className="text-white">Tác giả:</strong> GS.TS Valeria V. Gordan và cộng sự (Đăng trên Journal of the American Dental Association - JADA).</span></li>
          <li className="flex gap-3 items-start"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" /><span className="text-slate-300 font-body text-sm sm:text-base leading-relaxed"><strong className="text-white">Kết quả mốc 8 năm:</strong> Tỷ lệ lưu giữ phục hình 100%, 0% ê buốt sau điều trị, 0% sâu răng thứ phát ở viền dán.</span></li>
          <li className="flex gap-3 items-start"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" /><span className="text-slate-300 font-body text-sm sm:text-base leading-relaxed"><strong className="text-white">Kết quả mốc 13 năm (13-Year Recall):</strong> 96% phục hình hoàn toàn sạch bóng sâu răng tái phát (chỉ 3% có dấu hiệu sâu thứ phát), khẳng định khả năng tái khoáng hóa và bảo vệ viền dán bền vững.</span></li>
        </ul>
      )
    },
    {
      id: 3,
      title: 'Lực dán áp đảo 45-50 MPa trên Zirconia (The Dental Advisor 2024 - Báo cáo số 168)',
      icon: '🔗',
      content: (
        <ul className="space-y-3">
          <li className="flex gap-3 items-start"><div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" /><span className="text-slate-300 font-body text-sm sm:text-base leading-relaxed"><strong className="text-white">Lực dán áp đảo trên Zirconia:</strong> Đạt 45 – 50 MPa ngay ở thời điểm 24h.</span></li>
          <li className="flex gap-3 items-start"><div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" /><span className="text-slate-300 font-body text-sm sm:text-base leading-relaxed"><strong className="text-white">Thử thách lão hóa 5.000 chu kỳ nhồi nhiệt (Thermocycling 4°C/60°C):</strong> BeautiLink SA duy trì đường cong lực dán phẳng, 0% sút mão tự phát (zero spontaneous debonds).</span></li>
          <li className="flex gap-3 items-start"><div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" /><span className="text-slate-300 font-body text-sm sm:text-base leading-relaxed"><strong className="text-white">Giải mã kiểu gãy "Cohesive Failure" (Đứt gãy nội tại khối):</strong> Báo cáo ghi nhận khối xi măng bị xé rách trước khi giao diện dán bị tróc khỏi Zirconia. Điều này chứng minh lực liên kết hóa học lớn hơn cả độ bền cơ học khối resin.</span></li>
          <li className="flex gap-3 items-start"><div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" /><span className="text-slate-300 font-body text-sm sm:text-base leading-relaxed"><strong className="text-white">Độ dày màng xi măng 14µm:</strong> Bít kín vi kẽ bờ hoàn tất, tự chảy loang (Thixotropic) không đọng bọt khí.</span></li>
        </ul>
      )
    },
    {
      id: 4,
      title: 'Kỷ lục màng keo siêu mỏng 5µm & Lực dán 34 MPa (Đại học SUNY Buffalo)',
      icon: '💧',
      content: (
        <ul className="space-y-3">
          <li className="flex gap-3 items-start"><div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" /><span className="text-slate-300 font-body text-sm sm:text-base leading-relaxed"><strong className="text-white">Độ dày màng keo kỷ lục 5µm:</strong> Hơn 70% Bác sĩ khảo sát đánh giá màng keo siêu mỏng giúp phục hình khít sát tuyệt đối, không cộm khớp cắn.</span></li>
          <li className="flex gap-3 items-start"><div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" /><span className="text-slate-300 font-body text-sm sm:text-base leading-relaxed"><strong className="text-white">Tỷ lệ trùng hợp 97% (Degree of Conversion):</strong> Giúp màng keo bền bỉ, không nứt vỡ hay bay hơi dịch ngà.</span></li>
          <li className="flex gap-3 items-start"><div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" /><span className="text-slate-300 font-body text-sm sm:text-base leading-relaxed"><strong className="text-white">100% HEMA-Free (Dung môi Acetone):</strong> Triệt tiêu hoàn toàn rủi ro ngấm nước bọt/dịch ngà và hiện tượng thủy phân đứt gãy lớp lai dán theo thời gian.</span></li>
          <li className="flex gap-3 items-start"><div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" /><span className="text-slate-300 font-body text-sm sm:text-base leading-relaxed"><strong className="text-white">Lực dán trượt song song (Shear Bond Strength):</strong> Đạt ~33.8 – 34.2 MPa đồng đều trên cả Men răng và Ngà răng mà không cần bước Etching hay Agitation lách cách.</span></li>
        </ul>
      )
    },
    {
      id: 5,
      title: 'Kỷ lục độ bền nén 400 MPa & Co ngót thể tích siêu thấp 0.85%',
      icon: '🦾',
      content: (
        <div className="space-y-4">
          <div>
            <strong className="text-white mb-2 block font-body">Beautifil Injectable X (Composite Lỏng Đắp Khối):</strong>
            <ul className="space-y-2">
                <li className="flex gap-3 items-start"><div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" /><span className="text-slate-300 font-body text-sm sm:text-base leading-relaxed">Độ bền nén kỷ lục 400 MPa & Độ bền uốn 130 MPa.</span></li>
                <li className="flex gap-3 items-start"><div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" /><span className="text-slate-300 font-body text-sm sm:text-base leading-relaxed">Tỷ lệ hạt độn nano S-PRG cao (67 wt%) chịu lực ăn nhai trực tiếp xoang I, II, V và gờ múi.</span></li>
                <li className="flex gap-3 items-start"><div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" /><span className="text-slate-300 font-body text-sm sm:text-base leading-relaxed">Tính lưu biến Thixotropic tự lấp đầy hốc xoang, tuyệt đối không đọng bọt khí.</span></li>
            </ul>
          </div>
          <div>
            <strong className="text-white mb-2 block font-body">Beautifil II LS (Composite Đặc Universal):</strong>
            <ul className="space-y-2">
                <li className="flex gap-3 items-start"><div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" /><span className="text-slate-300 font-body text-sm sm:text-base leading-relaxed">Co ngót thể tích siêu thấp 0.85% & Ứng suất co ngót kỷ lục 2.72 MPa (thấp nhất trong các dòng nano-hybrid trên thị trường).</span></li>
                <li className="flex gap-3 items-start"><div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" /><span className="text-slate-300 font-body text-sm sm:text-base leading-relaxed">Tỷ lệ hạt độn 83 wt%, độ bền nén 370 MPa, chống mài mòn và giữ độ bóng lâu dài.</span></li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 6,
      title: 'Thử thách axit 28 ngày - Đại học Y Nha khoa Tokyo, Nhật Bản - Clinical Oral Investigations (2021/2022)',
      icon: '🧪',
      content: (
        <ul className="space-y-3">
          <li className="flex gap-3 items-start"><div className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0" /><span className="text-slate-300 font-body text-sm sm:text-base leading-relaxed"><strong className="text-white">Mô phỏng thử thách:</strong> Mẫu ngà răng gắn xi măng ngâm trong môi trường axit pH 4.5 (4 giờ/ngày) liên tục 28 ngày (mô phỏng môi trường miệng nguy cơ sâu răng cao).</span></li>
          <li className="flex gap-3 items-start"><div className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0" /><span className="text-slate-300 font-body text-sm sm:text-base leading-relaxed"><strong className="text-white">Kết quả tái khoáng bờ hoàn tất:</strong></span></li>
          <ul className="space-y-2 pl-4">
            <li className="flex gap-3 items-start"><div className="w-1.5 h-1.5 rounded-full bg-rose-400/50 mt-2 shrink-0" /><span className="text-slate-300 font-body text-sm sm:text-base leading-relaxed">Nhóm xi măng S-PRG (BeautiLink SA) giữ nguyên độ cứng bề mặt ngà răng, độ sâu mất khoáng tiệm cận bằng 0.</span></li>
            <li className="flex gap-3 items-start"><div className="w-1.5 h-1.5 rounded-full bg-rose-400/50 mt-2 shrink-0" /><span className="text-slate-300 font-body text-sm sm:text-base leading-relaxed">Các loại xi măng thông thường bị axit ăn mòn sâu và mất gần 50% độ cứng bề mặt ngà.</span></li>
            <li className="flex gap-3 items-start"><div className="w-1.5 h-1.5 rounded-full bg-rose-400/50 mt-2 shrink-0" /><span className="text-slate-300 font-body text-sm sm:text-base leading-relaxed">Xuất hiện vùng tái khoáng hóa sáng đậm đặc ngay tại đường hoàn tất ngà răng nhờ phức hợp 6 ion (Fluoride, Strontium, Sodium, Borate, Aluminum, Silicate).</span></li>
          </ul>
        </ul>
      )
    }
  ];

  const [openPillars, setOpenPillars] = useState<number[]>([]);
  const togglePillar = (id: number) => {
    setOpenPillars(prev => prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]);
  };


  const openCampaignModal = (title: string) => {
    setCampaignModalTitle(title);
    setIsModalOpen(true);
  };

  const faqs = [
    {
      q: "Dùng trọn bộ 5 sản phẩm Shofu này có bắt buộc phải thay đổi toàn bộ quy trình ở phòng khám không?",
      a: (
        <>
          Không cần. Hệ sinh thái Shofu được thiết kế theo triết lý "True Universal" (Phổ quát thật sự) [cite: 26]. Bác sĩ có thể áp dụng ngay vào quy trình sẵn có mà không cần mua thêm thiết bị hay dụng cụ đắt tiền nào khác.
        </>
      )
    },
    {
      q: "Tuýp Xi măng BeautiLink SA Handmix 15.6g quá to, liệu dùng không kịp có bị hư hỏng không?",
      a: (
        <>
          Hoàn toàn không. BeautiLink SA sở hữu công nghệ xúc tác "Ngủ đông" (Hibernation) độc quyền, giúp duy trì độ tinh khiết hóa học và độ ổn định trong 24 tháng ở nhiệt độ phòng (&lt;25°C). Chất lượng ca dán thứ 120 sắc nét y hệt ca đầu tiên.
        </>
      )
    },
    {
      q: "Keo dán BeautiBond Xtreme (BBX) màng 5µm và Xi măng 14µm có đảm bảo lực dán cơ học cho mão Zirconia không?",
      a: (
        <>
          Lực dán đạt mức tuyệt đối &gt;40–50 MPa. Màng keo 5µm và màng xi măng 14µm giúp tối ưu hóa khoảng trống vật liệu, giúp viền phục hình khít sát hoàn hảo, loại bỏ nguy cơ cộm khớp hay vi thấm đổi màu viền nướu.
        </>
      )
    }
  ];

  return (
    <div className="w-full flex flex-col">
      {/* SECTION 1: HERO */}
      <section className="relative bg-slate-50 bg-grid-pattern pt-[100px] pb-16 md:pt-[120px] md:pb-24 overflow-hidden border-b border-slate-200">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-tr from-[#8C2828]/15 via-[#8C2828]/5 to-transparent rounded-full transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        <div className="w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-3/5 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100/80 border border-red-200 text-[#8C2828] font-mono text-xs sm:text-sm font-bold tracking-wider mb-6 sm:mb-8 shadow-sm overflow-hidden w-[90vw] sm:w-fit max-w-[320px] sm:max-w-md relative">
                <div className="shrink-0 flex items-center justify-center z-10 pl-1 pr-1 bg-red-100/80">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8C2828]"></span>
                  </span>
                </div>
                
                <div className="flex-1 overflow-hidden relative whitespace-nowrap [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                  <div className="flex w-max animate-marquee-slow hover:[animation-play-state:paused]">
                    <span className="text-[10px] sm:text-xs pr-8">Chuẩn hóa lâm sàng cùng hệ sinh thái Giomer 360° – Triết lý MiCD từ Shofu (Nhật Bản)</span>
                    <span className="text-[10px] sm:text-xs pr-8">Chuẩn hóa lâm sàng cùng hệ sinh thái Giomer 360° – Triết lý MiCD từ Shofu (Nhật Bản)</span>
                  </div>
                </div>
              </div>
              
              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] text-slate-900 leading-[1.2] mb-6 tracking-tight">
                Dập tắt ám ảnh bảo hành cùng <span className="text-[#8C2828]">hệ sinh thái trị liệu sinh học Giomer 360°</span>
              </h1>
              
              <p className="font-body text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
                Bác sĩ chỉnh khớp chuẩn xác, sửa soạn bờ hoàn tất khít sát, cô lập đàng hoàng... nhưng bệnh nhân vẫn than phiền vì <strong className="text-slate-900 bg-red-50 px-1 rounded">ê buốt sau trám xoang II</strong>, <strong className="text-slate-900 bg-red-50 px-1 rounded">rớt mặt dán sứ Veneer</strong>, hoặc <strong className="text-slate-900 bg-red-50 px-1 rounded">viêm nướu tứa máu do dọn xi măng kẽ</strong>. Đã đến lúc nâng cấp toàn bộ "đạn dược" lâm sàng: Thay thế các vật liệu "trơ" thụ động cũ kỹ bằng <strong className="text-[#8C2828] font-bold">Hệ sinh thái Trị liệu Sinh học Giomer 360°</strong> – <span className="text-emerald-600 font-medium bg-emerald-50 px-1 rounded">Bảo vệ mô răng thật bền vững</span> và <span className="text-slate-900 font-bold underline decoration-[#8C2828] decoration-2 underline-offset-4">dập tắt ám ảnh bảo hành!</span>
              </p>

              <div className="flex flex-col gap-4 mb-10 w-full max-w-2xl">
                <div className="flex items-start gap-3 bg-white/60 p-3 rounded-xl border border-slate-200/60 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">🇯🇵</div>
                  <p className="font-body text-sm sm:text-base text-slate-700 leading-tight mt-1.5">
                    <strong className="text-slate-900">100% Made in Japan</strong> – Thương hiệu vật liệu nha khoa đỉnh cao hơn 100 năm lịch sử.
                  </p>
                </div>
                <div className="flex items-start gap-3 bg-white/60 p-3 rounded-xl border border-slate-200/60 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0"><Microscope className="w-4 h-4" /></div>
                  <p className="font-body text-sm sm:text-base text-slate-700 leading-tight mt-1.5">
                    <strong className="text-slate-900">Bằng chứng Y văn JADA (Mỹ)</strong> – Nghiên cứu 13 năm chứng minh tỷ lệ 96% phục hình hoàn toàn không sâu răng tái phát.
                  </p>
                </div>
                <div className="flex items-start gap-3 bg-white/60 p-3 rounded-xl border border-slate-200/60 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center shrink-0"><ShieldCheck className="w-4 h-4" /></div>
                  <p className="font-body text-sm sm:text-base text-slate-700 leading-tight mt-1.5">
                    <strong className="text-slate-900">Công nghệ HEMA-Free & S-PRG Bioactive</strong> – Triệt tiêu thủy phân, khóa chặt vi kẽ, giải phóng 6 ion tái khoáng hóa 24/7.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start">
                <CtaButton onClick={() => openCampaignModal("Sở hữu gói Master Ecosystem - Tài trợ 100% quà tặng")} className="group relative inline-flex items-center justify-center gap-2 bg-[#8C2828] text-white px-6 py-4 rounded-full font-mono text-sm font-bold tracking-wide hover:bg-red-900 hover:shadow-xl hover:shadow-red-900/30 transition-all duration-300">
                  <span>Sở hữu gói Master Ecosystem</span>
                  <ArrowRight className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </CtaButton>
                <CtaButton onClick={() => openCampaignModal("Nhận E-Guide triệt tiêu ê buốt")} className="group relative inline-flex items-center justify-center gap-2 bg-white text-[#8C2828] border-2 border-[#8C2828] px-6 py-4 rounded-full font-mono text-sm font-bold tracking-wide hover:bg-red-50 hover:shadow-lg transition-all duration-300">
                  <Download className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:-translate-y-1 transition-all" />
                  <span>Nhận E-Guide triệt tiêu ê buốt</span>
                </CtaButton>
              </div>
            </div>
            
            <div className="w-full lg:w-2/5 relative">
               <div className="absolute inset-0 bg-gradient-to-tr from-[#8C2828]/20 to-transparent rounded-full blur-3xl"></div>
               <ImagePlaceholder className="w-full aspect-[4/5] rounded-2xl relative z-10 bg-white" text="Ảnh Master Ecosystem (Bộ 5 Sản phẩm cốt lõi)" />
               
               {/* Floating elements */}
               <div className="absolute -left-6 top-1/4 bg-white p-3 rounded-xl shadow-xl border border-slate-100 z-20 flex items-center gap-3 animate-float-slow hidden sm:flex">
                 <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                 </div>
                 <div>
                    <div className="font-bold text-slate-900 text-sm">Bioactive</div>
                    <div className="text-xs text-slate-500">Trị liệu sinh học</div>
                 </div>
               </div>
               
               <div className="absolute -right-6 bottom-1/4 bg-white p-3 rounded-xl shadow-xl border border-slate-100 z-20 flex items-center gap-3 animate-float-delayed hidden sm:flex">
                 <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5" />
                 </div>
                 <div>
                    <div className="font-bold text-slate-900 text-sm">HEMA-Free</div>
                    <div className="text-xs text-slate-500">Kháng nước 100%</div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: 4 PAIN POINTS - DARK THEME */}
      <section className="py-20 lg:py-28 bg-slate-900 relative border-y border-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-light opacity-100 pointer-events-none"></div>
        <div className="w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-white leading-[1.3] mb-6 tracking-tight">
              4 <span className="text-slate-900 bg-amber-400 px-2 py-1 rounded-md rotate-1 inline-block transform shadow-lg mx-1">"điểm mù lâm sàng"</span> & <span className="text-red-400 font-black relative inline-block"><span className="relative z-10">nỗi đau dai dẳng</span><div className="absolute bottom-2 left-0 w-full h-1.5 bg-red-600/50 -z-10 rounded-sm"></div></span>
            </h2>
            <div className="w-24 h-1 bg-[#8C2828] mx-auto my-6"></div>
            <p className="font-body text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Bác sĩ <strong className="text-white font-medium underline decoration-slate-500 underline-offset-4">không thao tác sai</strong>, nhưng chính việc dùng các <strong className="text-slate-900 bg-slate-300 px-2 py-0.5 rounded-sm font-bold mx-1">vật liệu thụ động truyền thống</strong> đã vô tình biến các ca phục hình thành <strong className="text-red-300 bg-red-950/50 px-2 py-0.5 rounded-md border border-red-500/30 shadow-[0_0_15px_rgba(220,38,38,0.3)] mx-1">"quả bom nổ chậm"</strong>:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 sm:p-8 hover:border-red-500/50 transition-colors duration-300">
               <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
                     <span className="font-heading font-bold text-2xl text-red-400">1</span>
                  </div>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-white leading-tight">Ám ảnh ê buốt & sâu răng tái phát xoang II</h3>
               </div>
               <p className="font-body text-slate-400 text-sm sm:text-base leading-relaxed">
                 <strong className="text-red-300">Căn nguyên:</strong> Keo dán chứa monomer HEMA ưa nước bị thủy phân (ngậm nước bọt/dịch ngà) làm đứt gãy lớp lai dán sau vài tháng, tạo kẽ rò vi thể khiến vi khuẩn xâm nhập.
               </p>
            </div>
            
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 sm:p-8 hover:border-amber-500/50 transition-colors duration-300">
               <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                     <span className="font-heading font-bold text-2xl text-amber-400">2</span>
                  </div>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-white leading-tight">Rủi ro đội phục hình & bong tróc veneer</h3>
               </div>
               <p className="font-body text-slate-400 text-sm sm:text-base leading-relaxed">
                 <strong className="text-amber-300">Căn nguyên:</strong> Màng keo dán quá dày gây cộm vướng khớp cắn, kết hợp keo dán thiếu Silane kháng axit khiến liên kết dán Zirconia/Sứ bị thoái hóa nhanh chóng.
               </p>
            </div>
            
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 sm:p-8 hover:border-blue-500/50 transition-colors duration-300">
               <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                     <span className="font-heading font-bold text-2xl text-blue-400">3</span>
                  </div>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-white leading-tight">"Nỗi sợ 7h tối": Dọn xi măng kẽ tứa máu</h3>
               </div>
               <p className="font-body text-slate-400 text-sm sm:text-base leading-relaxed">
                 <strong className="text-blue-300">Căn nguyên:</strong> Xi măng Resin đông cứng cơ học quá nhanh hoặc bết dính, cạo mỏi tay làm rách nướu, tổn thương màng nha chu và gây ám ảnh viền dán hôi miệng.
               </p>
            </div>
            
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 sm:p-8 hover:border-emerald-500/50 transition-colors duration-300">
               <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                     <span className="font-heading font-bold text-2xl text-emerald-400">4</span>
                  </div>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-white leading-tight">"Thể tích chết" & chảy máu dòng tiền vật tư</h3>
               </div>
               <p className="font-body text-slate-400 text-sm sm:text-base leading-relaxed">
                 <strong className="text-emerald-300">Căn nguyên:</strong> Các vòi trộn Automix tiêu chuẩn kẹt lại từ 0.25g - 0.44g xi măng đắt tiền sau mỗi lần bơm, làm bốc hơi 30-40% lợi nhuận phòng khám mà Chủ nha khoa không hề biết.
               </p>
            </div>
          </div>
        
          <div className="mt-12 text-center">
            <CtaButton onClick={() => openCampaignModal("Nhận giải pháp khắc phục điểm mù lâm sàng")} className="group relative inline-flex items-center justify-center gap-2 bg-amber-400 text-slate-900 px-8 py-4 rounded-full font-mono text-sm sm:text-base font-bold tracking-wide hover:bg-amber-300 hover:shadow-xl hover:shadow-amber-400/20 transition-all duration-300">
              <span>Khắc phục điểm mù lâm sàng ngay</span>
              <ArrowRight className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </CtaButton>
          </div>
        </div>
      </section>

      {/* SECTION 3: PARADIGM SHIFT (MiCD & S-PRG) */}
      <section className="py-20 lg:py-28 bg-white bg-grid-pattern relative overflow-hidden border-b border-slate-200">
        <div className="w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 font-mono text-xs sm:text-sm font-bold tracking-wider mb-6">
              <RefreshCw className="w-4 h-4" />
              <span>Bước ngoặt tư duy</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.3] mb-6 tracking-tight text-slate-900">
              <span className="block md:mb-2 text-slate-700">Đừng chỉ <span className="text-slate-400 font-bold decoration-slate-300 decoration-2 underline-offset-4 line-through">"trám bít lỗ hổng"</span></span>
              <span className="block">Hãy dùng vật liệu có khả năng <span className="text-[#8C2828] relative inline-block"><span className="relative z-10">"chữa lành"!</span><div className="absolute bottom-1 left-0 w-full h-3 sm:h-4 bg-amber-200/80 -z-10 -rotate-2 rounded-sm transform scale-105 origin-left"></div></span></span>
            </h2>
            <p className="font-body text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Nha khoa hiện đại đã bước qua thời kỳ <span className="line-through decoration-slate-400 text-slate-400">mài trám cơ học thụ động</span>. Triết lý <strong className="text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded-md">MiCD (Minimally Invasive Cosmetic Dentistry)</strong> hướng tới việc <strong className="text-emerald-600">bảo tồn tối đa mô răng thật</strong> kết hợp cùng <strong className="text-[#8C2828] bg-red-50 px-1.5 py-0.5 rounded-md border border-red-100">công nghệ hạt độn S-PRG (Surface Pre-Reacted Glass-ionomer)</strong> độc quyền của Shofu.
            </p>
          </div>

          <div className="mb-12">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                <div className="bg-gradient-to-b from-white to-blue-50/80 p-6 rounded-2xl border border-blue-100 shadow-sm shadow-blue-100/50 flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-md hover:shadow-blue-200/50 hover:border-blue-200 transition-all duration-300">
                   <div className="w-16 h-16 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center mb-4">
                      <span className="font-heading font-bold text-blue-600 text-lg">F⁻ & Sr²⁺</span>
                   </div>
                   <h4 className="font-bold text-slate-900 mb-2">Tái khoáng hóa</h4>
                   <p className="text-sm text-slate-600 font-body">Tạo phức hợp Fluoro-apatite bít kín vĩnh viễn các ống ngà hở.</p>
                </div>
                      
                <div className="bg-gradient-to-b from-white to-emerald-50/80 p-6 rounded-2xl border border-emerald-100 shadow-sm shadow-emerald-100/50 flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-md hover:shadow-emerald-200/50 hover:border-emerald-200 transition-all duration-300">
                   <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center mb-4">
                      <span className="font-heading font-bold text-emerald-600 text-lg">Na⁺ & SiO₃²⁻</span>
                   </div>
                   <h4 className="font-bold text-slate-900 mb-2">Phục hồi vi mô</h4>
                   <p className="text-sm text-slate-600 font-body">Thúc đẩy phục hồi vi mô ngà răng suy thoái một cách chủ động.</p>
                </div>
                      
                <div className="bg-gradient-to-b from-white to-amber-50/80 p-6 rounded-2xl border border-amber-100 shadow-sm shadow-amber-100/50 flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-md hover:shadow-amber-200/50 hover:border-amber-200 transition-all duration-300">
                   <div className="w-16 h-16 rounded-full bg-amber-100 border border-amber-200 flex items-center justify-center mb-4">
                      <span className="font-heading font-bold text-amber-600 text-lg">BO₃³⁻</span>
                   </div>
                   <h4 className="font-bold text-slate-900 mb-2">Kháng Biofilm</h4>
                   <p className="text-sm text-slate-600 font-body">Kìm hãm gen của S. mutans, triệt tiêu khả năng bám dính tạo mảng sinh học.</p>
                </div>
                      
                <div className="bg-gradient-to-b from-white to-purple-50/80 p-6 rounded-2xl border border-purple-100 shadow-sm shadow-purple-100/50 flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-md hover:shadow-purple-200/50 hover:border-purple-200 transition-all duration-300">
                   <div className="w-16 h-16 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center mb-4">
                      <span className="font-heading font-bold text-purple-600 text-lg">Al³⁺</span>
                   </div>
                   <h4 className="font-bold text-slate-900 mb-2">Trung hòa Axit</h4>
                   <p className="text-sm text-slate-600 font-body">Trung hòa axit chủ động, kiềm hóa môi trường khi pH tụt dưới 5.5.</p>
                </div>
             </div>

             <div className="text-center">
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 mb-4">Lá Chắn 6 Ion Sinh Học (Giomer Molecular Shield)</h3>
                <p className="text-slate-600 font-body max-w-2xl mx-auto">
                   Hạt độn S-PRG hoạt động như một "Bình ắc quy sinh học" liên tục phóng thích & tự sạc lại 6 loại ion y tế.
                </p>
             </div>
          </div>
        
          <div className="mt-12 text-center">
            <CtaButton onClick={() => openCampaignModal("Nâng cấp vật liệu sinh học S-PRG")} className="group relative inline-flex items-center justify-center gap-2 bg-[#8C2828] text-white px-8 py-4 rounded-full font-mono text-sm sm:text-base font-bold tracking-wide hover:bg-red-900 hover:shadow-xl hover:shadow-red-900/30 transition-all duration-300">
              <span>Nâng cấp vật liệu sinh học S-PRG</span>
              <ArrowRight className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </CtaButton>
          </div>
        </div>
      </section>

      {/* SECTION 4: MASTER ECOSYSTEM PRODUCTS */}
      <section className="py-20 lg:py-28 bg-slate-50 bg-grid-pattern relative overflow-hidden border-b border-slate-200">
        <div className="w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-slate-900 leading-[1.3] mb-6 tracking-tight">
              Hệ sinh thái <span className="text-[#8C2828]">5 vũ khí cốt lõi</span>
            </h2>
            <p className="font-body text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Combo Giải Pháp Toàn Diện bao bọc trọn vẹn nhu cầu lâm sàng hàng ngày tại phòng khám:
            </p>
          </div>

          <div className="space-y-8">
            {/* Prod 1 */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col lg:flex-row gap-8 items-center shadow-sm hover:shadow-md transition-shadow">
               <div className="w-full lg:w-1/3">
                  <ImagePlaceholder className="w-full aspect-square rounded-2xl" text="BeautiBond Xtreme" />
               </div>
               <div className="w-full lg:w-2/3 flex flex-col gap-4">
                  <div className="inline-flex px-3 py-1 bg-red-50 text-red-600 rounded-full text-xs font-bold w-fit">KEO DÁN THẾ HỆ 8</div>
                  <h3 className="font-heading font-bold text-2xl text-slate-900">1. BeautiBond Xtreme (BBX) – 5ml</h3>
                  <ul className="space-y-3 font-body text-slate-600 mt-2">
                     <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /><span>Màng keo kỷ lục 5µm, 100% HEMA-Free kỵ nước (dung môi Acetone bay hơi chớp nhoáng).</span></li>
                     <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /><span>Tích hợp ARS bọc giáp Silane & Monomer MDP, dán thẳng Zirconia/Sứ/Ngà chỉ với 1 chai.</span></li>
                  </ul>
               </div>
            </div>
            
            {/* Prod 2 */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col lg:flex-row-reverse gap-8 items-center shadow-sm hover:shadow-md transition-shadow">
               <div className="w-full lg:w-1/3">
                  <ImagePlaceholder className="w-full aspect-square rounded-2xl" text="BeautiLink SA" />
               </div>
               <div className="w-full lg:w-2/3 flex flex-col gap-4">
                  <div className="inline-flex px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold w-fit">Xi măng resin tự dán</div>
                  <h3 className="font-heading font-bold text-2xl text-slate-900">2. BeautiLink SA – Tuýp khổng lồ 15.6g</h3>
                  <ul className="space-y-3 font-body text-slate-600 mt-2">
                     <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /><span>Thể tích khổng lồ 9ml (15.6g) thực hiện được ~120 ca gắn (chỉ ~16.600đ/ca).</span></li>
                     <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /><span>Màng xi măng 14µm, Tack-cure 1-2 giây lột sạch xi măng dư nguyên khối (One-Sweep).</span></li>
                  </ul>
               </div>
            </div>

            {/* Prod 3 */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col lg:flex-row gap-8 items-center shadow-sm hover:shadow-md transition-shadow">
               <div className="w-full lg:w-1/3">
                  <ImagePlaceholder className="w-full aspect-square rounded-2xl" text="Beautifil Injectable X" />
               </div>
               <div className="w-full lg:w-2/3 flex flex-col gap-4">
                  <div className="inline-flex px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-xs font-bold w-fit">Composite lỏng đắp khối</div>
                  <h3 className="font-heading font-bold text-2xl text-slate-900">3. Beautifil Injectable X – 2.2g</h3>
                  <ul className="space-y-3 font-body text-slate-600 mt-2">
                     <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /><span>Độ bền nén kỷ lục 400 MPa, đắp khối chịu lực ăn nhai trực tiếp xoang I, II, V.</span></li>
                     <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /><span>Tính lưu biến Thixotropic tự lấp đầy hốc xoang vi thể, không đọng bọt khí.</span></li>
                  </ul>
               </div>
            </div>
            
            {/* Prod 4 & 5 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col gap-6 shadow-sm hover:shadow-md transition-shadow">
                  <ImagePlaceholder className="w-full aspect-[16/9] rounded-2xl" text="Beautifil II / LS" />
                  <div>
                     <div className="inline-flex px-3 py-1 bg-amber-50 text-amber-600 rounded-full text-xs font-bold w-fit mb-3">Composite đặc</div>
                     <h3 className="font-heading font-bold text-xl text-slate-900 mb-4">4. Beautifil II / Beautifil II LS</h3>
                     <ul className="space-y-3 font-body text-slate-600 text-sm">
                        <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /><span>Độ co ngót thể tích siêu thấp, chống bám mảng sinh học nhờ hạt độn S-PRG.</span></li>
                        <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /><span>Hiệu ứng "Tắc kè hoa" tự động tiệp màu răng thật hoàn hảo.</span></li>
                     </ul>
                  </div>
               </div>
               <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col gap-6 shadow-sm hover:shadow-md transition-shadow">
                  <ImagePlaceholder className="w-full aspect-[16/9] rounded-2xl" text="PRG Barrier Coat / BeautiSealant" />
                  <div>
                     <div className="inline-flex px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-xs font-bold w-fit mb-3">Phòng ngừa & phong tỏa</div>
                     <h3 className="font-heading font-bold text-xl text-slate-900 mb-4">5. Tự chọn 1 trong 2 giải pháp:</h3>
                     <ul className="space-y-3 font-body text-slate-600 text-sm">
                        <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /><span><strong className="text-slate-800">Bộ PRG Barrier Coat Mini-Kit:</strong> Véc-ni phủ 15µm trị liệu ê buốt 3-6 tháng.</span></li>
                        <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /><span><strong className="text-slate-800">Bộ BeautiSealant Set:</strong> Trám bít hố rãnh Self-Etch không rửa nước.</span></li>
                     </ul>
                  </div>
               </div>
            </div>
          </div>
        
          <div className="mt-12 text-center">
            <CtaButton onClick={() => openCampaignModal("Nhận báo giá hệ sinh thái Giomer 360")} className="group relative inline-flex items-center justify-center gap-2 bg-[#8C2828] text-white px-8 py-4 rounded-full font-mono text-sm sm:text-base font-bold tracking-wide hover:bg-red-900 hover:shadow-xl hover:shadow-red-900/30 transition-all duration-300">
              <span>Khám phá trọn bộ Hệ sinh thái Giomer</span>
              <ArrowRight className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </CtaButton>
          </div>
        </div>
      </section>

      {/* SECTION 5: SCIENTIFIC PROOF */}
      <section className="py-20 lg:py-28 bg-slate-900 relative border-y border-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-light opacity-100 pointer-events-none"></div>
        <div className="w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-white leading-[1.3] mb-6 tracking-tight">
              6 Trụ Cột <span className="text-[#8C2828]">Dữ Liệu Khoa Học</span>
            </h2>
            <p className="text-slate-300 font-body max-w-2xl mx-auto text-base sm:text-lg">
              Bằng chứng y văn & bảo chứng lâm sàng độc lập chứng minh hiệu quả tuyệt đối của hệ sinh thái Giomer 360°.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="flex flex-col">
               {scientificPillars.slice(0, 3).map((pillar) => (
                  <DarkAccordionItem
                    key={pillar.id}
                    icon={pillar.icon}
                    question={pillar.title}
                    answer={pillar.content}
                    isOpen={openPillars.includes(pillar.id)}
                    onClick={() => togglePillar(pillar.id)}
                  />
               ))}
            </div>
            
            <div className="flex flex-col">
               {scientificPillars.slice(3, 6).map((pillar) => (
                  <DarkAccordionItem
                    key={pillar.id}
                    icon={pillar.icon}
                    question={pillar.title}
                    answer={pillar.content}
                    isOpen={openPillars.includes(pillar.id)}
                    onClick={() => togglePillar(pillar.id)}
                  />
               ))}
            </div>
          </div>
        
          
          {/* Testimonials */}
          <div className="mt-20">
            <div className="text-center mb-8">
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">Đánh giá từ chuyên gia lâm sàng quốc tế & trong nước</h3>
            </div>
            <div className="w-full relative py-4 mask-image-horizontal">
              <div className="flex w-max animate-marquee-slow hover:[animation-play-state:paused] gap-6">
                 {[...row1Feedbacks, ...row1Feedbacks].map((item, idx) => (
                   <FeedbackCard key={`row1-${idx}`} item={item} />
                 ))}
              </div>
              <div className="flex w-max animate-marquee-slow hover:[animation-play-state:paused] gap-6 mt-6" style={{ animationDirection: 'reverse' }}>
                 {[...row2Feedbacks, ...row2Feedbacks].map((item, idx) => (
                   <FeedbackCard key={`row2-${idx}`} item={item} />
                 ))}
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <CtaButton onClick={() => openCampaignModal("Nhận trọn bộ tài liệu y văn (PDF)")} className="group relative inline-flex items-center justify-center gap-2 bg-blue-500 text-white px-8 py-4 rounded-full font-mono text-sm sm:text-base font-bold tracking-wide hover:bg-blue-400 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300">
              <Download className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:-translate-y-1 transition-all" />
              <span>Tải trọn bộ tài liệu Y văn (PDF)</span>
            </CtaButton>
          </div>
        </div>
      </section>

      {/* SECTION 6: CORE OFFER */}
      <section className="py-20 lg:py-28 bg-[#8C2828] bg-grid-pattern-light relative overflow-hidden" id="offer">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-white/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>
        <div className="w-[90%] lg:w-[85%] xl:w-[80%] mx-auto relative z-10">
          <div className="text-center text-white mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/20 border border-white/20 font-mono text-xs sm:text-sm font-bold tracking-wider mb-6">
              <Gift className="w-4 h-4 text-amber-300" />
              <span className="text-white">Ưu đãi độc quyền trong tháng này</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.3] mb-6">
              Gói chuyển đổi: Master Ecosystem <br className="hidden md:block"/> <span className="text-amber-300">"Hệ sinh thái Giomer 360°"</span>
            </h2>
            <p className="text-white/80 font-body text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              (Chương trình hỗ trợ chuẩn hóa phòng khám từ Sota-D – Giới hạn đúng 15 phòng khám đăng ký sớm nhất)
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col">
              <div className="w-full relative mb-6">
                 <ImagePlaceholder className="w-full aspect-[4/3] rounded-xl bg-slate-100 border border-slate-200" text="Ảnh 5 SP Vật Lý" />
              </div>
              <h4 className="font-heading font-bold text-xl text-[#8C2828] border-b border-slate-200 pb-3 mb-4">Bộ 5 sản phẩm cốt lõi</h4>
              <ul className="space-y-4 font-body text-sm sm:text-base flex-1 text-slate-700">
                 <li className="flex justify-between items-start gap-4">
                    <div className="flex gap-3 items-start"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /><span>01 Keo dán BeautiBond Xtreme (5ml)</span></div>
                    <span className="font-mono text-slate-400 line-through shrink-0 whitespace-nowrap">1.420.000đ</span>
                 </li>
                 <li className="flex justify-between items-start gap-4">
                    <div className="flex gap-3 items-start"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /><span>01 Xi măng BeautiLink SA (15.6g)</span></div>
                    <span className="font-mono text-slate-400 line-through shrink-0 whitespace-nowrap">1.995.000đ</span>
                 </li>
                 <li className="flex justify-between items-start gap-4">
                    <div className="flex gap-3 items-start"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /><span>01 Composite BeautiFil Injectable X</span></div>
                    <span className="font-mono text-slate-400 line-through shrink-0 whitespace-nowrap">595.000đ</span>
                 </li>
                 <li className="flex justify-between items-start gap-4">
                    <div className="flex gap-3 items-start"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /><span>01 Composite BeautiFil II / LS</span></div>
                    <span className="font-mono text-slate-400 line-through shrink-0 whitespace-nowrap">495.000đ</span>
                 </li>
                 <li className="flex justify-between items-start gap-4">
                    <div className="flex gap-3 items-start"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /><span>01 Bộ PRG Barrier Coat / BeautiSealant</span></div>
                    <span className="font-mono text-slate-400 line-through shrink-0 whitespace-nowrap">945.000đ</span>
                 </li>
              </ul>
            </div>
            
            <div className="bg-slate-900 border-2 border-amber-400/50 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-amber-400 text-slate-900 font-bold text-xs px-4 py-1.5 rounded-bl-xl z-10">Tài trợ 100%</div>
              <div className="w-full relative mb-6">
                 <ImagePlaceholder className="w-full aspect-[4/3] rounded-xl bg-slate-800 border border-slate-700" text="Ảnh Quà tặng VIP" />
              </div>
              <h4 className="font-heading font-bold text-xl text-amber-400 border-b border-slate-700 pb-3 mb-4">Quà tặng & đặc quyền VIP</h4>
              <ul className="space-y-4 font-body text-sm sm:text-base flex-1 text-slate-300">
                 <li className="flex justify-between items-start gap-4">
                    <div className="flex gap-3 items-start"><Gift className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" /><span>01 Bộ đánh bóng Super-Snap Mini</span></div>
                    <span className="font-mono text-slate-500 shrink-0 whitespace-nowrap">Trị giá 450K</span>
                 </li>
                 <li className="flex justify-between items-start gap-4">
                    <div className="flex gap-3 items-start"><Gift className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" /><span>01 Bộ mũi mài Composite Polishing CA</span></div>
                    <span className="font-mono text-slate-500 shrink-0 whitespace-nowrap">Trị giá 740K</span>
                 </li>
                 <li className="flex justify-between items-start gap-4">
                    <div className="flex gap-3 items-start"><Gift className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" /><span>01 Lọ BBX Trial (2ml)</span></div>
                    <span className="font-mono text-slate-500 shrink-0 whitespace-nowrap">Trị giá 600K</span>
                 </li>
                 <li className="flex justify-between items-start gap-4">
                    <div className="flex gap-3 items-start"><Gift className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" /><span>Bộ 3 Sổ tay E-Guidebook MiCD</span></div>
                    <span className="font-mono text-slate-500 shrink-0 whitespace-nowrap">Trị giá 1.5M</span>
                 </li>
                 <li className="flex justify-between items-start gap-4">
                    <div className="flex gap-3 items-start"><Gift className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" /><span>Video Masterclass Dọn xi măng 2s</span></div>
                    <span className="font-mono text-slate-500 shrink-0 whitespace-nowrap">Trị giá 2.0M</span>
                 </li>
                 <li className="flex justify-between items-start gap-4">
                    <div className="flex gap-3 items-start"><Gift className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" /><span>Vé VIP Group Cố vấn 1:1 (90 ngày)</span></div>
                    <span className="font-mono text-slate-500 shrink-0 whitespace-nowrap">Trị giá 2.5M</span>
                 </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 sm:p-10 text-center shadow-xl">
             <div className="font-mono text-white/60 mb-2">Tổng giá trị thực tế: <span className="line-through decoration-red-500/50">13.735.000 VNĐ</span></div>
             <div className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white mb-4 drop-shadow-md">
                5.450.000 VNĐ
             </div>
             <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 text-emerald-300 font-bold rounded-full text-sm sm:text-base mb-6">
                Tiết kiệm &gt;60%
             </div>
             <p className="font-body text-white/80 text-sm sm:text-base max-w-3xl mx-auto">
                <strong className="text-white">Cơ chế thanh toán:</strong> Bác sĩ chỉ thanh toán đúng giá trị vật lý của bộ 5 sản phẩm cốt lõi, toàn bộ Hệ thống Tài liệu số, Dụng cụ đánh bóng và Đặc quyền Cố vấn 1:1 được <strong className="text-amber-300">TÀI TRỢ 100%</strong>.
             </p>
          </div>
        
          <div className="mt-16 border-t border-white/20 pt-16">
            <div className="w-full text-center">
              
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-10">Cam kết bảo vệ 3 lớp từ Sota-D</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
               <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-4"><ShieldCheck className="w-6 h-6"/></div>
               <h4 className="font-bold text-slate-900 mb-3">Dùng thử an tâm (30 ngày)</h4>
               <p className="text-sm text-slate-600 font-body">Nếu gặp khó khăn kỹ thuật, Chuyên gia sẽ Call 1:1 gỡ rối. Nếu không hợp tay, thu hồi và hoàn tiền 100% phần chưa dùng.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
               <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4"><RefreshCw className="w-6 h-6"/></div>
               <h4 className="font-bold text-slate-900 mb-3">Bảo hiểm thói quen</h4>
               <p className="text-sm text-slate-600 font-body">Trong vòng 30 ngày, nếu không quen Handmix hoặc muốn đổi tông màu, hỗ trợ quy đổi 100% giá trị tương đương.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
               <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-4"><CheckSquare className="w-6 h-6"/></div>
               <h4 className="font-bold text-slate-900 mb-3">Minh bạch chất lượng (90 ngày)</h4>
               <p className="text-sm text-slate-600 font-body">Cam kết 1 đổi 1 ngay lập tức nếu sản phẩm có hiện tượng tách pha hay lỗi đông cứng kể từ khi mở nắp (&lt;25°C).</p>
            </div>
          </div>
        
            </div>
          </div>
        
          <div className="mt-12 text-center">
            <CtaButton onClick={() => openCampaignModal("Đăng ký nhận Ưu đãi Master Ecosystem")} className="group relative inline-flex items-center justify-center gap-2 bg-amber-400 text-slate-900 px-8 py-4 rounded-full font-mono text-sm sm:text-base font-bold tracking-wide hover:bg-amber-300 hover:shadow-xl hover:shadow-amber-400/30 transition-all duration-300 mt-8">
              <Gift className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:-rotate-12 transition-all" />
              <span>Đăng ký giữ chỗ Ưu đãi ngay</span>
            </CtaButton>
          </div>
        </div>
      </section>


      {/* SECTION 8: FAQ */}
      <section className="py-20 bg-white bg-grid-pattern relative overflow-hidden border-b border-slate-200">
        <div className="w-[90%] lg:w-[60%] mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 leading-[1.3] tracking-tight">
              Giải đáp hoài nghi lâm sàng
            </h2>
          </div>
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                question={faq.q}
                answer={faq.a}
                isOpen={openFaqIndex === index}
                onClick={() => setOpenFaqIndex(openFaqIndex === index ? -1 : index)}
              />
            ))}
          </div>
        
          <div className="mt-12 text-center">
            <CtaButton onClick={() => openCampaignModal("Nhận tư vấn chuyên sâu 1:1")} className="group relative inline-flex items-center justify-center gap-2 bg-[#8C2828] text-white px-8 py-4 rounded-full font-mono text-sm sm:text-base font-bold tracking-wide hover:bg-red-900 hover:shadow-xl hover:shadow-red-900/30 transition-all duration-300">
              <span>Bạn còn câu hỏi? Nhận tư vấn 1:1</span>
              <ArrowRight className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </CtaButton>
          </div>
        </div>
      </section>

      {/* SECTION 9: FORM / CTA */}
      <section className="py-20 lg:py-28 bg-slate-900 bg-grid-pattern-light relative">
        <div className="w-[90%] lg:w-[50%] mx-auto relative z-10">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl">
            <div className="text-center mb-10">
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 mb-4">Đăng ký chuyển đổi</h2>
              <p className="text-slate-600 font-body text-sm sm:text-base">Sở hữu trọn bộ Master Ecosystem Shofu Nhật Bản cùng chính sách bảo đảm rủi ro 3 lớp tuyệt đối từ Sota-D.</p>
            </div>
            
            <form className="space-y-6">
               <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Họ và tên Bác sĩ *</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#8C2828]/50 focus:border-[#8C2828] transition-all bg-slate-50" placeholder="Nhập họ và tên..." />
               </div>
               <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Số điện thoại Zalo *</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#8C2828]/50 focus:border-[#8C2828] transition-all bg-slate-50" placeholder="Nhập số điện thoại..." />
               </div>
               <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Tên Phòng khám & Địa chỉ *</label>
                  <textarea rows={3} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#8C2828]/50 focus:border-[#8C2828] transition-all bg-slate-50" placeholder="Nhập địa chỉ nhận hàng..."></textarea>
               </div>
               
               <button type="button" onClick={() => openCampaignModal("Đăng ký thành công")} className="w-full bg-[#8C2828] text-white font-bold font-mono py-4 rounded-xl shadow-lg hover:bg-red-900 hover:shadow-xl transition-all hover:-translate-y-1 mt-4">
                  💥 Xác nhận đặt mua - Nhận quà 8.285.000Đ
               </button>
            </form>
            
            <div className="mt-8 pt-6 border-t border-slate-100 flex items-start gap-3">
               <Shield className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
               <p className="text-xs sm:text-sm text-slate-500 font-body leading-relaxed">
                  <strong className="text-slate-700">Thông tin được bảo mật 100%.</strong> Kiểm tra hàng đầy đủ tem nhãn Shofu chính hãng trước khi thanh toán. Hỗ trợ tư vấn kỹ thuật 1:1 từ Chuyên gia.
               </p>
            </div>
          </div>
        </div>
      </section>

      <CampaignModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={campaignModalTitle}
      />
    </div>
  );
};

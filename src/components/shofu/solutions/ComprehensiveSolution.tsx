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
          Không cần. Hệ sinh thái Shofu được thiết kế theo triết lý "True Universal" (Phổ quát thật sự). Bác sĩ có thể áp dụng ngay vào quy trình sẵn có mà không cần mua thêm thiết bị hay dụng cụ đắt tiền nào khác.
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
    },
    {
      q: "Composite lỏng đắp khối Beautifil Injectable X và Composite đặc Beautifil II LS của Shofu có gì khác biệt so với các dòng Composite thông thường?",
      a: (
        <div className="space-y-3">
          <p><strong>Beautifil Injectable X (Composite lỏng đắp khối chịu lực):</strong> Sở hữu tính lưu biến Thixotropic thông minh — tự lấp đầy mọi ngóc ngách hốc xoang vi thể mà tuyệt đối không đọng bọt khí. Nhờ công nghệ nano S-PRG nồng độ cao (67 wt%), sản phẩm đạt độ bền nén kỷ lục 400 MPa và độ bền uốn 130 MPa, cho phép đắp khối chịu lực ăn nhai trực tiếp ở cả xoang I, II, V và tái tạo gờ múi mà không lo nứt vỡ.</p>
          <p><strong>Beautifil II LS (Composite đặc Universal co ngót siêu thấp):</strong> Giải quyết triệt để nỗi đau vi kẽ xoang II nhờ độ co ngót thể tích chạm đáy chỉ 0.85% và ứng suất co ngót kỷ lục 2.72 MPa (thấp nhất trong các dòng nano-hybrid). Kết hợp hiệu ứng "Tắc kè hoa" (Chameleon Effect) tự động tiệp màu răng thật, miếng trám giữ được độ bóng lâu dài và kháng bám mảng sinh học vi khuẩn.</p>
        </div>
      )
    },
    {
      q: "Đối với bệnh nhân nhi hiếu động hoặc các ca mòn cổ răng ê buốt tàn nhẫn, tuyến phòng ngừa (PRG Barrier Coat & BeautiSealant) xử lý như thế nào?",
      a: (
        <div className="space-y-3">
          <p><strong>BeautiSealant (Trám bít hố rãnh Self-Etch):</strong> Loại bỏ hoàn toàn quy trình Etching bằng Axit Phosphoric lách cách và bước rửa nước thổi khô. Dùng Self-Etch Primer dịu nhẹ (chứa MDP Monomer) chuẩn bị bề mặt chỉ trong 5 giây, triệt tiêu 100% rủi ro ngấm nước bọt làm bong tróc màng Sealant ở trẻ nhỏ.</p>
          <p><strong>PRG Barrier Coat (Véc-ni Bioactive chống ê buốt):</strong> Bôi một lớp màng siêu mỏng chỉ 15 micron (công thức 100% HEMA-Free, Acetone-Free) lên các vùng ngà hở, cổ răng mòn hay đốm trắng. Chiếu đèn 10 giây giúp giảm mẫn cảm ngà lập tức và duy trì hiệu quả bảo vệ kéo dài từ 3 đến 6 tháng chỉ sau một lần bôi duy nhất.</p>
        </div>
      )
    },
    {
      q: "Tại sao nhiều ca phục hình được thực hiện rất kỹ nhưng sau vài tháng hay vài năm bệnh nhân vẫn than phiền vì ê buốt muộn hoặc vi thấm đổi màu viền nướu?",
      a: (
        <div className="space-y-3">
          <p>Căn nguyên hàng đầu nằm ở thành phần HEMA trong các loại keo dán truyền thống. HEMA là chất ưa nước, hoạt động như một "miếng bọt biển" ngậm dịch ngà và nước bọt. Theo thời gian dưới tác động nhiệt độ khoang miệng, HEMA bị thủy phân phân hủy lớp lai dán, tạo ra các kẽ rò vi thể khiến vi khuẩn xâm nhập gây ê buốt muộn và bong sút phục hình.</p>
          <p>BeautiBond Xtreme (BBX) loại bỏ hoàn toàn HEMA (dùng dung môi Acetone bay hơi chớp nhoáng), tạo nên một lớp lai kỵ nước vĩnh cửu. Màng keo kỷ lục chỉ 5µm cùng 4 Monomer chức năng khóa chặt 100% ống ngà, triệt tiêu vi thấm và triệt tiêu vĩnh viễn nguy cơ ê buốt hậu phẫu.</p>
        </div>
      )
    },
    {
      q: "Hạt độn sinh học S-PRG giải phóng 6 loại ion có bị \"cạn kiệt\" theo thời gian không? Khả năng chống sâu răng tái phát được chứng minh ra sao?",
      a: (
        <div className="space-y-3">
          <p>Hoàn toàn không bị cạn kiệt. Cấu trúc mạng lưới 3 lớp của hạt độn S-PRG hoạt động như một "bình ắc quy sinh học 24/7". Khi bệnh nhân chải răng hàng ngày với kem đánh răng chứa Fluoride, hạt S-PRG sẽ tự động nạp lại ion (Release & Recharge) để duy trì vòng tuần hoàn bảo vệ liên tục.</p>
          <p><strong>Tác động 6 Ion (Fluoride, Strontium, Sodium, Borate, Aluminum, Silicate):</strong> Tái khoáng hóa ngà răng, chủ động trung hòa axit khi pH khoang miệng giảm xuống dưới 5.5 và đứt gãy con đường chuyển hóa năng lượng của vi khuẩn S. mutans, ngăn chặn sự hình thành mảng sinh học (Biofilm).</p>
          <p><strong>Bằng chứng y văn JADA (Đại học Florida - Mỹ):</strong> Nghiên cứu theo dõi lâm sàng dài hạn suốt 13 năm ghi nhận 96% phục hình hoàn toàn sạch bóng sâu răng thứ phát, chứng minh năng lực bảo vệ cùi răng vĩnh cửu.</p>
        </div>
      )
    },
    {
      q: "Việc dọn xi măng kẽ răng dư và bài toán chi phí vật tư được hệ sinh thái Shofu tối ưu như thế nào?",
      a: (
        <div className="space-y-3">
          <p><strong>Giải quyết "Nỗi sợ dọn xi măng 7h tối":</strong> Xi măng BeautiLink SA sở hữu tính năng quang trùng hợp sơ bộ (Tack-cure) 1–2 giây. Xi măng dư lập tức chuyển sang dạng gel dẻo như cao su, Bác sĩ chỉ cần dùng thám châm bóc sạch nguyên mảng (Kỹ thuật One-Sweep) trong đúng 2 giây mà không cần cạo vất vả hay làm tứa máu nướu bệnh nhân.</p>
          <p><strong>Tối ưu ROI phòng khám (Chi phí chỉ ~16.600đ/ca):</strong> Các vòi Automix thông thường làm kẹt lại từ 0.25g đến 0.44g xi măng ("thể tích chết") sau mỗi lần gắn. BeautiLink SA Handmix với tuýp khổng lồ 15.6g (9ml) triệt tiêu 95% lãng phí vòi vặn, thực hiện trọn vẹn lên tới 120 ca gắn mão. Sản phẩm ứng dụng Hệ xúc tác "Ngủ đông" (Hibernation System), cam kết giữ nguyên độ tinh khiết hóa học và lực dán 50 MPa trong 24 tháng ở nhiệt độ phòng (&lt;25°C).</p>
        </div>
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

              {/* Mobile Image (hidden on lg) */}
              <div className="w-full relative lg:hidden mb-6">
                 <div className="absolute inset-0 bg-gradient-to-tr from-[#8C2828]/20 to-transparent rounded-full blur-3xl"></div>
                 <ImagePlaceholder className="w-full aspect-[4/5] sm:aspect-video rounded-2xl relative z-10 bg-white shadow-sm" text="Ảnh Master Ecosystem (Bộ 5 Sản phẩm cốt lõi)" />
              </div>
              
              <p className="font-body text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
                <span className="block mb-4">Bác sĩ chỉnh khớp chuẩn xác, sửa soạn bờ hoàn tất khít sát, cô lập đàng hoàng... nhưng bệnh nhân vẫn than phiền vì <strong className="text-slate-900 bg-red-50 px-1 rounded">ê buốt sau trám xoang II</strong>, <strong className="text-slate-900 bg-red-50 px-1 rounded">rớt mặt dán sứ Veneer</strong>, hoặc <strong className="text-slate-900 bg-red-50 px-1 rounded">viêm nướu tứa máu do dọn xi măng kẽ</strong>. </span>
                <span className="block">Đã đến lúc nâng cấp toàn bộ "đạn dược" lâm sàng: Thay thế các vật liệu "trơ" thụ động cũ kỹ bằng <strong className="text-[#8C2828] font-bold">Hệ sinh thái Trị liệu Sinh học Giomer 360°</strong> – <span className="text-emerald-600 font-medium bg-emerald-50 px-1 rounded">Bảo vệ mô răng thật bền vững</span> và <span className="text-slate-900 font-bold underline decoration-[#8C2828] decoration-2 underline-offset-4">dập tắt ám ảnh bảo hành!</span></span>
              </p>

              <div className="flex flex-col gap-4 mb-10 w-full max-w-2xl">
                <div className="flex items-start gap-3 bg-white/60 p-3 rounded-xl border border-slate-200/60 shadow-sm text-left">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">🇯🇵</div>
                  <p className="font-body text-sm sm:text-base text-slate-700 leading-tight mt-1.5">
                    <strong className="text-slate-900">100% Made in Japan</strong> – Thương hiệu vật liệu nha khoa đỉnh cao hơn 100 năm lịch sử.
                  </p>
                </div>
                <div className="flex items-start gap-3 bg-white/60 p-3 rounded-xl border border-slate-200/60 shadow-sm text-left">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0"><Microscope className="w-4 h-4" /></div>
                  <p className="font-body text-sm sm:text-base text-slate-700 leading-tight mt-1.5">
                    <strong className="text-slate-900">Bằng chứng Y văn JADA (Mỹ)</strong> – Nghiên cứu 13 năm chứng minh tỷ lệ 96% phục hình hoàn toàn không sâu răng tái phát.
                  </p>
                </div>
                <div className="flex items-start gap-3 bg-white/60 p-3 rounded-xl border border-slate-200/60 shadow-sm text-left">
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
            
            <div className="w-full lg:w-2/5 relative hidden lg:block">
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
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-white leading-tight">Ám ảnh ê buốt & sâu răng tái phát xoang II</h3>
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
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-white leading-tight">Rủi ro đội phục hình & bong tróc veneer</h3>
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
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-white leading-tight">"Nỗi sợ 7h tối": Dọn xi măng kẽ tứa máu</h3>
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
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-white leading-tight">"Thể tích chết" & chảy máu dòng tiền vật tư</h3>
               </div>
               <p className="font-body text-slate-400 text-sm sm:text-base leading-relaxed">
                 <strong className="text-emerald-300">Căn nguyên:</strong> Các vòi trộn Automix tiêu chuẩn kẹt lại từ 0.25g - 0.44g xi măng đắt tiền sau mỗi lần bơm, làm bốc hơi 30-40% lợi nhuận phòng khám mà Chủ nha khoa không hề biết.
               </p>
            </div>
          </div>
        
          <div className="mt-12 text-center">
            <CtaButton onClick={() => openCampaignModal("Nhận giải pháp khắc phục điểm mù lâm sàng")} className="group relative inline-flex items-center justify-center gap-2 bg-amber-400 text-slate-900 px-4 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-xs sm:text-base whitespace-nowrap font-bold tracking-wide hover:bg-amber-300 hover:shadow-xl hover:shadow-amber-400/20 transition-all duration-300">
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
            <h2 className="font-heading font-extrabold text-[1.35rem] min-[375px]:text-[1.6rem] sm:text-4xl lg:text-[2.75rem] leading-[1.3] mb-6 tracking-tight text-slate-900">
              <span className="block md:mb-2 text-slate-700">Đừng chỉ <span className="text-slate-400 font-bold decoration-slate-300 decoration-2 underline-offset-4 line-through">"trám bít lỗ hổng"</span></span>
              <span className="block mt-1 sm:mt-0">Hãy dùng vật liệu có khả năng <span className="text-[#8C2828] relative inline-block"><span className="relative z-10">"chữa lành"!</span><div className="absolute bottom-1 left-0 w-full h-3 sm:h-4 bg-amber-200/80 -z-10 -rotate-2 rounded-sm transform scale-105 origin-left"></div></span></span>
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
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 mb-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
                   <span>Lá chắn 6 ion sinh học</span>
                   <span className="inline-block font-mono text-sm sm:text-base text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full shadow-sm tracking-wide">Giomer Molecular Shield</span>
                </h3>
                <p className="text-slate-600 font-body max-w-2xl mx-auto leading-relaxed text-base sm:text-lg">
                   Hạt độn S-PRG hoạt động như một <strong className="text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100 shadow-sm mx-0.5">"Bình ắc quy sinh học"</strong> liên tục <strong className="text-emerald-600 font-bold underline decoration-emerald-300 decoration-2 underline-offset-4 mx-0.5">phóng thích & tự sạc lại</strong> <strong className="text-[#8C2828] bg-red-50 px-2 py-0.5 rounded-md border border-red-100 shadow-sm mx-0.5 whitespace-nowrap">6 loại ion y tế</strong>.
                </p>
             </div>
          </div>
        
          <div className="mt-12 text-center">
            <CtaButton onClick={() => openCampaignModal("Nâng cấp vật liệu sinh học S-PRG")} className="group relative inline-flex items-center justify-center gap-2 bg-[#8C2828] text-white px-4 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-xs sm:text-base whitespace-nowrap font-bold tracking-wide hover:bg-red-900 hover:shadow-xl hover:shadow-red-900/30 transition-all duration-300">
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
              <span className="block sm:inline">Hệ sinh thái</span> <span className="block sm:inline text-[#8C2828]">5 vũ khí cốt lõi</span>
            </h2>
            <p className="font-body text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
              <strong className="text-[#8C2828] bg-red-50 px-2 py-1 rounded-md border border-red-100 shadow-sm mx-1">Combo Giải Pháp Toàn Diện</strong> bao bọc <strong className="text-slate-900 font-bold underline decoration-amber-400 decoration-2 underline-offset-4">trọn vẹn nhu cầu lâm sàng</strong> hàng ngày tại phòng khám:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8">
            {/* Prod 1 */}
            <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
               <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex px-3 py-1 bg-red-50 text-red-600 rounded-full text-xs font-bold">Keo dán thế hệ 8</div>
                  <span className="text-4xl font-heading font-black text-slate-100">01</span>
               </div>
               <h3 className="font-heading font-bold text-xl text-slate-900 mb-4">BeautiBond Xtreme (BBX) – 5ml</h3>
               <div className="w-full h-[240px] sm:h-auto sm:aspect-[4/3] relative mb-6 flex items-center justify-center bg-slate-50 rounded-2xl overflow-hidden group">
                  <img src="/image/BeautiBond-Xtreme-One-Hand.webp" alt="BeautiBond Xtreme" className="absolute -left-6 sm:-left-8 -bottom-6 sm:-bottom-8 w-[calc(100%+1.5rem)] sm:w-[calc(100%+2rem)] h-[calc(100%+1.5rem)] sm:h-[calc(100%+2rem)] object-contain object-left-bottom drop-shadow-2xl scale-[0.95] sm:scale-[0.92] origin-bottom-left [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] group-hover:scale-[1.04] sm:group-hover:scale-[0.96] transition-transform duration-500" referrerPolicy="no-referrer" />
               </div>
               <ul className="space-y-3 font-body text-slate-600 text-sm flex-1">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /><span>Màng keo kỷ lục 5µm, 100% HEMA-Free kỵ nước (dung môi Acetone bay hơi chớp nhoáng).</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /><span>Tích hợp ARS bọc giáp Silane & Monomer MDP, dán thẳng Zirconia/Sứ/Ngà chỉ với 1 chai.</span></li>
               </ul>
            </div>

            {/* Prod 2 */}
            <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
               <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold">Xi măng resin tự dán</div>
                  <span className="text-4xl font-heading font-black text-slate-100">02</span>
               </div>
               <h3 className="font-heading font-bold text-xl text-slate-900 mb-4">BeautiLink SA – Tuýp khổng lồ 15.6g</h3>
               <div className="w-full aspect-[4/3] relative mb-6 flex items-center justify-center bg-slate-50 rounded-2xl overflow-hidden group">
                  <img src="/image/Shofu-Cement-Beautilink-SA.webp" alt="BeautiLink SA" className="w-full h-full object-contain p-4 sm:p-6 drop-shadow-xl group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
               </div>
               <ul className="space-y-3 font-body text-slate-600 text-sm flex-1">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /><span>Thể tích khổng lồ 9ml (15.6g) thực hiện được ~120 ca gắn (chỉ ~16.600đ/ca).</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /><span>Màng xi măng 14µm, Tack-cure 1-2 giây lột sạch xi măng dư nguyên khối (One-Sweep).</span></li>
               </ul>
            </div>

            {/* Prod 3 */}
            <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
               <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-xs font-bold">Composite đắp khối</div>
                  <span className="text-4xl font-heading font-black text-slate-100">03</span>
               </div>
               <h3 className="font-heading font-bold text-xl text-slate-900 mb-4">Beautifil Injectable X – 2.2g</h3>
               <div className="w-full h-[210px] sm:h-auto sm:aspect-[4/3] relative mb-6 flex items-center justify-center bg-slate-50 rounded-2xl overflow-hidden group">
                  <img src="/image/phuc-hoi-truc-tiep-shofu-beautifil-injectable-x.webp" alt="Beautifil Injectable X" className="absolute -right-6 sm:-right-8 -bottom-6 sm:-bottom-8 w-[calc(100%+1.5rem)] sm:w-[calc(100%+2rem)] h-[calc(100%+1.5rem)] sm:h-[calc(100%+2rem)] object-contain object-right-bottom drop-shadow-2xl scale-[0.95] sm:scale-[0.92] origin-bottom-right [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] group-hover:scale-[1.04] sm:group-hover:scale-[0.96] transition-transform duration-500" referrerPolicy="no-referrer" />
               </div>
               <ul className="space-y-3 font-body text-slate-600 text-sm flex-1">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /><span>Độ bền nén kỷ lục 400 MPa, đắp khối chịu lực ăn nhai trực tiếp xoang I, II, V.</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /><span>Tính lưu biến Thixotropic tự lấp đầy hốc xoang vi thể, không đọng bọt khí.</span></li>
               </ul>
            </div>

            {/* Prod 4 */}
            <div className="lg:col-span-3 bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
               <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex px-3 py-1 bg-amber-50 text-amber-600 rounded-full text-xs font-bold">Composite đắp lớp</div>
                  <span className="text-4xl font-heading font-black text-slate-100">04</span>
               </div>
               <h3 className="font-heading font-bold text-xl text-slate-900 mb-4">Beautifil II / Beautifil II LS</h3>
               <div className="w-full h-[200px] sm:h-[240px] relative mb-6 flex items-center justify-center bg-slate-50 rounded-2xl overflow-hidden group">
                  <img src="/image/phuc-hoi-truc-tiep-Shofu-beautifill-II-LS.webp" alt="Beautifil II / LS" className="w-full h-full object-contain p-4 sm:p-6 drop-shadow-xl group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
               </div>
               <ul className="space-y-3 font-body text-slate-600 text-sm flex-1">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /><span>Độ co ngót thể tích siêu thấp, chống bám mảng sinh học nhờ hạt độn S-PRG.</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /><span>Hiệu ứng "Tắc kè hoa" tự động tiệp màu răng thật hoàn hảo.</span></li>
               </ul>
            </div>

            {/* Prod 5 */}
            <div className="lg:col-span-3 bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
               <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-xs font-bold">Phòng ngừa & phong tỏa</div>
                  <span className="text-4xl font-heading font-black text-slate-100">05</span>
               </div>
               <h3 className="font-heading font-bold text-xl text-slate-900 mb-4">Tự chọn 1 trong 2 giải pháp:</h3>
               <div className="w-full h-[200px] sm:h-[240px] relative mb-6 flex items-center justify-center bg-slate-50 rounded-2xl overflow-hidden group">
                  <img src="/image/PRG-Barrier-Coat-Shofu.webp" alt="PRG Barrier Coat / BeautiSealant" className="w-full h-full object-contain p-4 sm:p-6 drop-shadow-xl group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
               </div>
               <ul className="space-y-3 font-body text-slate-600 text-sm flex-1">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /><span><strong className="text-slate-800">Bộ PRG Barrier Coat Mini-Kit:</strong> Véc-ni phủ 15µm trị liệu ê buốt 3-6 tháng.</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /><span><strong className="text-slate-800">Bộ BeautiSealant Set:</strong> Trám bít hố rãnh Self-Etch không rửa nước.</span></li>
               </ul>
            </div>
          </div>
        
          <div className="mt-12 text-center">
            <CtaButton onClick={() => openCampaignModal("Nhận báo giá hệ sinh thái Giomer 360")} className="group relative inline-flex items-center justify-center gap-2 bg-[#8C2828] text-white px-4 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-xs sm:text-base whitespace-nowrap font-bold tracking-wide hover:bg-red-900 hover:shadow-xl hover:shadow-red-900/30 transition-all duration-300">
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
              <span className="text-white">Dữ liệu khoa học</span>
            </h2>
            <p className="text-slate-300 font-body max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              <span className="text-white font-medium border-b border-slate-500 pb-0.5">Bằng chứng y văn</span> & <span className="text-white font-medium border-b border-slate-500 pb-0.5">bảo chứng lâm sàng độc lập</span> chứng minh <strong className="text-emerald-400 font-bold">hiệu quả tuyệt đối</strong> của hệ sinh thái <strong className="text-slate-900 bg-slate-200 px-2 py-0.5 rounded-md font-bold mx-1 shadow-sm">Giomer 360°</strong>.
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
            <CtaButton onClick={() => openCampaignModal("Gia nhập cộng đồng MiCD")} className="group relative inline-flex items-center justify-center gap-2 bg-blue-500 text-white px-4 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-xs sm:text-base whitespace-nowrap font-bold tracking-wide hover:bg-blue-400 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300">
              <HandHeart className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:-translate-y-1 transition-all" />
              <span>Gia nhập cộng đồng MiCD</span>
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
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 mb-12">
            {/* Box 1: Core Products */}
            <div className="bg-white/95 backdrop-blur-xl rounded-[2rem] p-8 lg:p-10 shadow-[0_20px_40px_rgb(0,0,0,0.08)] border border-white/60 flex flex-col relative overflow-hidden transition-all hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] hover:-translate-y-1 duration-500">
              {/* Subtle top inner glow */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80"></div>
              
              <div className="w-full relative mb-8">
                 <ImagePlaceholder className="w-full aspect-[4/3] rounded-2xl bg-white border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)]" text="Ảnh 5 SP Vật Lý" />
              </div>
              <h4 className="font-heading font-extrabold text-2xl text-slate-800 mb-8 flex items-center justify-center gap-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8C2828] to-red-600">Bộ 5 sản phẩm cốt lõi</span>
              </h4>
              <ul className="space-y-5 font-body text-sm md:text-base flex-1 text-slate-700">
                 <li className="flex justify-start items-start gap-4">
                    <div className="flex gap-3 items-start"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /><span>01 Keo dán BeautiBond Xtreme (5ml)</span></div>
                 </li>
                 <li className="flex justify-start items-start gap-4">
                    <div className="flex gap-3 items-start"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /><span>01 Xi măng BeautiLink SA (15.6g)</span></div>
                 </li>
                 <li className="flex justify-start items-start gap-4">
                    <div className="flex gap-3 items-start"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /><span>01 Composite BeautiFil Injectable X</span></div>
                 </li>
                 <li className="flex justify-start items-start gap-4">
                    <div className="flex gap-3 items-start"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /><span>01 Composite BeautiFil II / LS</span></div>
                 </li>
                 <li className="flex justify-start items-start gap-4">
                    <div className="flex gap-3 items-start"><CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /><span>01 Bộ PRG Barrier Coat / BeautiSealant</span></div>
                 </li>
              </ul>
            </div>
            
            {/* Box 2: VIP Gifts */}
            <div className="bg-[#6A1A1A]/90 backdrop-blur-xl border border-amber-400/30 rounded-[2rem] p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.2)] flex flex-col relative overflow-hidden transition-transform hover:-translate-y-1 duration-500">
              <div className="absolute top-8 right-8 bg-gradient-to-r from-amber-400 to-amber-300 text-amber-950 font-bold text-xs px-4 py-2 rounded-full shadow-sm z-10 tracking-wide uppercase">Tài trợ 100%</div>
              <div className="w-full relative mb-8">
                 <ImagePlaceholder className="w-full aspect-[4/3] rounded-2xl bg-black/20 border border-white/5 shadow-inner" text="Ảnh Quà tặng VIP" />
              </div>
              <h4 className="font-heading font-bold text-2xl text-amber-400 mb-6 flex items-center gap-3">
                Quà tặng & đặc quyền VIP
              </h4>
              <ul className="space-y-5 font-body text-sm md:text-base flex-1 text-amber-50/90">
                 <li className="flex justify-start items-start gap-4">
                    <div className="flex gap-3 items-start"><Gift className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" /><span>01 Bộ đánh bóng Super-Snap Mini</span></div>
                 </li>
                 <li className="flex justify-start items-start gap-4">
                    <div className="flex gap-3 items-start"><Gift className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" /><span>01 Bộ mũi mài Composite Polishing CA</span></div>
                 </li>
                 <li className="flex justify-start items-start gap-4">
                    <div className="flex gap-3 items-start"><Gift className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" /><span>01 Lọ BBX Trial (2ml)</span></div>
                 </li>
                 <li className="flex justify-start items-start gap-4">
                    <div className="flex gap-3 items-start"><Gift className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" /><span>Bộ 3 Sổ tay E-Guidebook MiCD</span></div>
                 </li>
                 <li className="flex justify-start items-start gap-4">
                    <div className="flex gap-3 items-start"><Gift className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" /><span>Bộ video Masterclass phục hồi trực tiếp</span></div>
                 </li>
                 <li className="flex justify-start items-start gap-4">
                    <div className="flex gap-3 items-start"><Gift className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" /><span>Vé VIP Group Cố vấn 1:1 (90 ngày)</span></div>
                 </li>
              </ul>
            </div>
          </div>
          
          <div className="w-full mx-auto bg-black/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 mb-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 blur-[50px] rounded-full pointer-events-none"></div>
            
            <div className="text-center md:text-left relative z-10">
              <p className="text-white/60 text-sm font-medium mb-1 uppercase tracking-wider">Tổng giá trị</p>
              <div className="flex items-baseline justify-center md:justify-start gap-2">
                <p className="text-white/60 text-2xl md:text-3xl font-bold line-through decoration-red-500/50 decoration-2">13.735.000đ</p>
              </div>
            </div>
            
            <div className="hidden md:block w-px h-16 bg-white/20 relative z-10 flex-shrink-0"></div>
            <div className="block md:hidden w-full h-px bg-white/20 relative z-10"></div>
            
            <div className="text-center md:text-right relative z-10 flex-1">
              <div className="flex flex-col md:items-end">
                  <p className="text-amber-400 text-sm font-medium mb-2 uppercase tracking-wider flex flex-col sm:flex-row items-center justify-center md:justify-end gap-2">
                      <span>Mức đầu tư trải nghiệm</span>
                  </p>
                  <p className="font-heading font-extrabold text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200 drop-shadow-sm">5.450.000đ</p>
              </div>
            </div>
          </div>


        
          <div className="mt-16 border-t border-white/20 pt-16">
            <div className="w-full text-center">
              
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-10 leading-snug sm:leading-tight">
            <span className="block sm:inline">Cam kết <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200 drop-shadow-sm">bảo vệ 3 lớp</span></span>{' '}
            <span className="block sm:inline">từ <span className="text-amber-400 drop-shadow-sm">Sota-D</span></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 text-left">
            <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 lg:p-10 rounded-[2rem] flex flex-col items-center text-center hover:bg-white/10 transition-all duration-500">
               <div className="w-14 h-14 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-2xl flex items-center justify-center mb-6"><ShieldCheck className="w-7 h-7"/></div>
               <h4 className="font-heading font-bold text-lg sm:text-xl text-white mb-3">Dùng thử an tâm (30 ngày)</h4>
               <p className="text-sm sm:text-base text-white/70 font-body leading-relaxed">Nếu gặp khó khăn kỹ thuật, Chuyên gia sẽ Call 1:1 gỡ rối. Nếu không hợp tay, thu hồi và hoàn tiền 100% phần chưa dùng.</p>
            </div>
            <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 lg:p-10 rounded-[2rem] flex flex-col items-center text-center hover:bg-white/10 transition-all duration-500">
               <div className="w-14 h-14 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-2xl flex items-center justify-center mb-6"><RefreshCw className="w-7 h-7"/></div>
               <h4 className="font-heading font-bold text-lg sm:text-xl text-white mb-3">Bảo hiểm thói quen</h4>
               <p className="text-sm sm:text-base text-white/70 font-body leading-relaxed">Trong vòng 30 ngày, nếu không quen Handmix hoặc muốn đổi tông màu, hỗ trợ quy đổi 100% giá trị tương đương.</p>
            </div>
            <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 lg:p-10 rounded-[2rem] flex flex-col items-center text-center hover:bg-white/10 transition-all duration-500">
               <div className="w-14 h-14 bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded-2xl flex items-center justify-center mb-6"><CheckSquare className="w-7 h-7"/></div>
               <h4 className="font-heading font-bold text-lg sm:text-xl text-white mb-3">Minh bạch chất lượng (90 ngày)</h4>
               <p className="text-sm sm:text-base text-white/70 font-body leading-relaxed">Cam kết 1 đổi 1 ngay lập tức nếu sản phẩm có hiện tượng tách pha hay lỗi đông cứng kể từ khi mở nắp (&lt;25°C).</p>
            </div>
          </div>
        
            </div>
          </div>
        
          <div className="mt-12 text-center">
            <CtaButton onClick={() => openCampaignModal("Đăng ký nhận Ưu đãi Master Ecosystem")} className="group relative inline-flex items-center justify-center gap-2 bg-amber-400 text-slate-900 px-4 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-xs sm:text-base whitespace-nowrap font-bold tracking-wide hover:bg-amber-300 hover:shadow-xl hover:shadow-amber-400/30 transition-all duration-300 mt-8">
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
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 leading-snug sm:leading-[1.3] tracking-tight">
              <span className="block sm:inline">Giải đáp</span>{' '}
              <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 drop-shadow-sm">hoài nghi lâm sàng</span>
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
            <CtaButton onClick={() => openCampaignModal("Nhận tư vấn chuyên sâu 1:1")} className="group relative inline-flex items-center justify-center gap-2 bg-[#8C2828] text-white px-4 sm:px-8 py-3 sm:py-4 rounded-full font-mono text-xs sm:text-base whitespace-nowrap font-bold tracking-wide hover:bg-red-900 hover:shadow-xl hover:shadow-red-900/30 transition-all duration-300">
              <span>Bác sĩ còn câu hỏi? Nhận tư vấn ngay</span>
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
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 mb-4">Đăng ký Gói chuyển đổi: Master Ecosystem - Hệ sinh thái Giomer 360°</h2>
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
                  Xác nhận đặt mua - Nhận quà 8.285.000Đ
               </button>
            </form>
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

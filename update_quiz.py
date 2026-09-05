import re

with open('src/components/ValueStackSection.tsx', 'r') as f:
    content = f.read()

# Replace State and Options
target_state = """export const ValueStackSection: React.FC = () => {
 const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
 const [showQuizResult, setShowQuizResult] = useState(false);

 const quizOptions = [
  "A. Chỉ có tác dụng kết dính cơ học thông thường",
  "B. Giải phóng 6 loại ion khoáng tái tạo men răng và tự sạc Fluoride",
  "C. Chỉ dùng cho phục hình tạm thời",
  "D. Thay thế hoàn toàn chụp sứ"
 ];

 const handleQuizSubmit = (index: number) => {
  setQuizAnswer(index);
  setShowQuizResult(true);
 };"""

replacement_state = """const quizData = [
  {
    title: "CÂU 1: CẶP ION CỘNG HƯỞNG LÂM SÀNG",
    question: "Cặp ion sinh học nào từ S-PRG kết hợp giúp tái khoáng răng và bít kín ống ngà hở hiệu quả nhất?",
    options: [
      "A. Fluoride (F−) & Calcium (Ca2+)",
      "B. Fluoride (F−) & Strontium (Sr2+)",
      "C. Fluoride (F−) & Aluminium (Al3+)",
      "D. Strontium (Sr2+) & Silicate (SiO32−)"
    ],
    correctIndex: 1,
    insight: "💡 Clinical Insight: Fluoride và Strontium phóng thích từ Xi măng tự dán BeautiLink SA (hoặc dòng composite Beautifil) cộng hưởng tạo mạng tinh thể Fluoro-Strontium-apatite cực bền, bít kín ống ngà hở và triệt tiêu hoàn toàn ê buốt sau phục hình."
  },
  {
    title: "CÂU 2: BƯỚC NGOẶT SINH HỌC PHÂN TỬ (NATURE 2018)",
    question: "Theo tạp chí Scientific Reports (Nature 2018), hạt S-PRG ức chế vi khuẩn sâu răng S. mutans bằng cơ chế phân tử nào?",
    options: [
      "A. Phá hủy cơ học màng tế bào vi khuẩn.",
      "B. Ngăn chặn chuỗi tổng hợp DNA.",
      "C. Kìm hãm gen pdh operon, cắt đứt nguồn năng lượng của vi khuẩn.",
      "D. Trung hòa thụ động axit vi khuẩn tiết ra."
    ],
    correctIndex: 2,
    insight: "💡 Clinical Insight: Hạt S-PRG trong Composite lỏng Beautifil Injectable X can thiệp cấp độ gen, khóa con đường chuyển hóa đường của S. mutans, giúp kháng khuẩn chủ động và ngừa sâu răng thứ phát tận gốc tại các xoang trám phức tạp."
  },
  {
    title: "CÂU 3: TRUNG HÒA AXIT CHỦ ĐỘNG",
    question: "Hạt S-PRG trung hòa axit tại đường viền phục hình (khi pH < 5.5) bằng cách giải phóng những ion nào?",
    options: [
      "A. Liên tục nhả ion kiềm mạnh 24/7.",
      "B. Nhả ion Sodium (Na+), Silicate (SiO32−) và Aluminium (Al3+) để kéo pH về mức trung tính (~7).",
      "C. Hấp thụ trực tiếp ion H+ vào trong lõi hạt độn.",
      "D. Kích thích nước bọt tiết ra nhiều bicarbonate hơn."
    ],
    correctIndex: 1,
    insight: "💡 Clinical Insight: Nhờ hạt S-PRG tự động nhả ion đệm trung hòa axit lactic kết hợp với độ co ngót thể tích cực thấp 0.85% của Beautifil II LS, răng sau được bảo vệ kép hoàn hảo khỏi cả vi rò rỉ cơ học lẫn axit mảng bám."
  },
  {
    title: "CÂU 4: BÌNH ẮC QUY SINH HỌC (RECHARGE)",
    question: "Vì sao hoạt tính giải phóng Fluoride của S-PRG có thể kéo dài suốt hàng chục năm lâm sàng mà không bị cạn kiệt?",
    options: [
      "A. Lõi hạt S-PRG tự phân hạch để tạo ion mới.",
      "B. Cơ chế \\"Tái nạp\\" (Recharge): Tự hấp thụ Fluoride ngoại sinh từ kem đánh răng để giải phóng ngược lại khi cần.",
      "C. Nhờ màng nhựa resin bọc ngoài giữ ion lại.",
      "D. Thực tế hoạt tính sẽ biến mất hoàn toàn sau 2 năm."
    ],
    correctIndex: 1,
    insight: "💡 Clinical Insight: Hoạt động như bình ắc quy, hạt S-PRG trong lớp dán lót FL-Bond II tự sạc Fluoride từ kem đánh răng và nhả ngược ra khi môi trường thiếu hụt, duy trì khả năng tái khoáng hóa và bảo vệ tủy răng bền bỉ suốt đời."
  },
  {
    title: "CÂU 5: LÁ CHẮN KHÁNG MẢNG BÁM (ANTI-BIOFILM)",
    question: "Cặp ion nào từ S-PRG giúp ngăn vi khuẩn S. mutans bám dính, chống hình thành màng sinh học (biofilm) trên mặt phục hình?",
    options: [
      "A. Sodium (Na+) & Silicate (SiO32−)",
      "B. Aluminium (Al3+) & Sodium (Na+)",
      "C. Borate (BO33−) & Fluoride (F−)",
      "D. Strontium (Sr2+) & Silicate (SiO32−)"
    ],
    correctIndex: 2,
    insight: "💡 Clinical Insight: Borate và Fluoride phóng thích từ Composite Beautifil II triệt tiêu lực bám dính của vi khuẩn, giữ bề mặt phục hình thẩm mỹ luôn láng mịn, bóng gương tự nhiên và kháng bám màu thực phẩm tối đa."
  }
];

export const ValueStackSection: React.FC = () => {
 const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
 const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
 const [showQuizResult, setShowQuizResult] = useState(false);

 const currentQuestion = quizData[currentQuestionIndex];

 const handleQuizSubmit = (index: number) => {
  setQuizAnswer(index);
  setShowQuizResult(true);
 };

 const handleNextQuestion = () => {
  if (currentQuestionIndex < quizData.length - 1) {
   setCurrentQuestionIndex(currentQuestionIndex + 1);
   setQuizAnswer(null);
   setShowQuizResult(false);
  } else {
   setCurrentQuestionIndex(0);
   setQuizAnswer(null);
   setShowQuizResult(false);
  }
 };"""

# Replace Component Body
target_body = """     {/* Interactive SHOFU Quiz Challenge Widget */}
     <div className="lg:col-span-7 rounded-2xl p-6 border-2 border-red-400 flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-[#C43838] to-red-800 shadow-xl shadow-red-500/30 transform transition-transform hover:-translate-y-1">
      {/* Decorative background flare */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
      
      <div className="relative z-10">
       <div className="flex items-center gap-2.5 mb-3">
        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
         <HelpCircle className="w-4 h-4 text-[#C43838]" />
        </div>
        <h3 className="font-heading font-bold text-base sm:text-lg text-white">
         Thử Thách Nhanh: Bác sĩ đã có thông tin về Công nghệ S-PRG chưa?
        </h3>
       </div>
       <p className="font-body text-xs text-red-50 mb-4 opacity-90">
        Câu hỏi: Điểm đặc biệt nhất của công nghệ hạt độn S-PRG trong nha khoa phục hồi là gì?
       </p>

       <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4 font-body text-xs">
        {quizOptions.map((opt, idx) => (
         <button
          key={idx}
          onClick={() => handleQuizSubmit(idx)}
          className={`p-3 rounded-xl text-left border transition-all ${
           quizAnswer === idx
            ? idx === 1
             ? 'bg-white border-white text-[#C43838] font-bold shadow-lg'
             : 'bg-slate-900/40 border-slate-700 text-white'
            : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
          }`}
         >
          {opt}
         </button>
        ))}
       </div>
      </div>

      {showQuizResult && (
       <div className="relative z-10 mt-auto p-3.5 rounded-xl font-mono text-xs border bg-white/20 border-white/40 text-white backdrop-blur-sm">
        {quizAnswer === 1 ? (
         <span>🎉 Chính xác! Công nghệ S-PRG giải phóng 6 loại ion khoáng chủ động tái khoáng hóa và tự nạp lại Fluoride. Ghé Booth Sota-D để nhận quà Quiz!</span>
        ) : (
         <span>💡 Đáp án chuẩn xác là B: S-PRG giải phóng 6 ion khoáng tái khoáng hóa men răng. Đăng ký tham dự ngay để trải nghiệm thực tế!</span>
        )}
       </div>
      )}
     </div>"""

replacement_body = """     {/* Interactive SHOFU Quiz Challenge Widget */}
     <div className="lg:col-span-7 rounded-2xl p-6 border-2 border-red-400 flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-[#C43838] to-red-800 shadow-xl shadow-red-500/30 transform transition-transform hover:-translate-y-1">
      {/* Decorative background flare */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
      
      <div className="relative z-10">
       <div className="flex items-start sm:items-center justify-between gap-2.5 mb-3 flex-col sm:flex-row">
        <div className="flex items-center gap-2.5">
         <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
          <HelpCircle className="w-4 h-4 text-[#C43838]" />
         </div>
         <h3 className="font-heading font-bold text-base sm:text-lg text-white">
          Thử Thách Nhanh: Bác sĩ đã có thông tin về Công nghệ S-PRG chưa?
         </h3>
        </div>
        <div className="bg-white/20 text-white text-[10px] sm:text-xs font-mono px-2 py-1 rounded-md shrink-0">
         {currentQuestionIndex + 1}/{quizData.length}
        </div>
       </div>

       <div className="mb-4">
        <div className="font-mono text-[10px] text-red-200 uppercase mb-1">{currentQuestion.title}</div>
        <p className="font-body text-sm text-white font-medium">
         {currentQuestion.question}
        </p>
       </div>

       <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4 font-body text-xs">
        {currentQuestion.options.map((opt, idx) => (
         <button
          key={idx}
          onClick={() => handleQuizSubmit(idx)}
          disabled={showQuizResult}
          className={`p-3 rounded-xl text-left border transition-all ${
           quizAnswer === idx
            ? idx === currentQuestion.correctIndex
             ? 'bg-white border-white text-[#C43838] font-bold shadow-lg'
             : 'bg-slate-900/40 border-slate-700 text-white'
            : showQuizResult && idx === currentQuestion.correctIndex
             ? 'bg-white/90 border-white text-[#C43838] font-bold shadow-lg'
             : 'bg-white/10 border-white/20 text-white hover:bg-white/20 disabled:hover:bg-white/10 disabled:opacity-50'
          }`}
         >
          {opt}
         </button>
        ))}
       </div>
      </div>

      {showQuizResult && (
       <div className="relative z-10 mt-auto flex flex-col gap-3">
        <div className="p-3.5 rounded-xl font-body text-xs border bg-white/20 border-white/40 text-white backdrop-blur-sm leading-relaxed">
         {quizAnswer === currentQuestion.correctIndex ? (
          <div className="font-bold text-white mb-1">🎉 Chính xác!</div>
         ) : (
          <div className="font-bold text-red-200 mb-1">💡 Chưa chính xác. Đáp án đúng là {String.fromCharCode(65 + currentQuestion.correctIndex)}.</div>
         )}
         {currentQuestion.insight}
        </div>
        <button
         onClick={handleNextQuestion}
         className="self-end px-5 py-2 bg-white text-[#C43838] font-bold text-xs rounded-full shadow-lg hover:bg-red-50 transition-colors"
        >
         {currentQuestionIndex < quizData.length - 1 ? 'Câu tiếp theo →' : 'Làm lại từ đầu ↺'}
        </button>
       </div>
      )}
     </div>"""

if target_state in content:
    content = content.replace(target_state, replacement_state)
else:
    print("Failed to replace state")

if target_body in content:
    content = content.replace(target_body, replacement_body)
else:
    print("Failed to replace body")

with open('src/components/ValueStackSection.tsx', 'w') as f:
    f.write(content)

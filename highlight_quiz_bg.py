import re

with open('src/components/ValueStackSection.tsx', 'r') as f:
    content = f.read()

target = """     {/* Interactive SHOFU Quiz Challenge Widget */}
     <div className="lg:col-span-7 rounded-2xl p-6 border-2 border-[#00ADEF]/40 flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-sky-100 shadow-[0_8px_30px_rgb(0,173,239,0.15)] transform transition-transform hover:-translate-y-1">
      {/* Decorative background flare */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-[#00ADEF]/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
      
      <div className="relative z-10">
       <div className="flex items-center gap-2.5 mb-3">
        <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center shrink-0">
         <HelpCircle className="w-4 h-4 text-[#00ADEF]" />
        </div>
        <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900">
         Thử Thách Nhanh: Bạn biết gì về Công nghệ S-PRG?
        </h3>
       </div>
       <p className="font-body text-xs text-slate-600 mb-4">
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
             ? 'bg-sky-500/20 border-sky-500 text-sky-500 font-semibold'
             : 'bg-red-500/20 border-red-500 text-red-300'
            : 'bg-slate-50 border-slate-200 text-slate-900 hover:bg-slate-100'
          }`}
         >
          {opt}
         </button>
        ))}
       </div>
      </div>

      {showQuizResult && (
       <div className={`p-3.5 rounded-xl font-mono text-xs border ${
        quizAnswer === 1
         ? 'bg-sky-500/20 border-sky-500/40 text-sky-500'
         : 'bg-sky-100 border-sky-300 text-[#00ADEF]'
       }`}>
        {quizAnswer === 1 ? (
         <span>🎉 Chính xác! Công nghệ S-PRG giải phóng 6 loại ion khoáng chủ động tái khoáng hóa và tự nạp lại Fluoride. Ghé Booth Sota-D để nhận quà Quiz!</span>
        ) : (
         <span>💡 Đáp án chuẩn xác là B: S-PRG giải phóng 6 ion khoáng tái khoáng hóa men răng. Đăng ký tham dự ngay để trải nghiệm thực tế!</span>
        )}
       </div>
      )}
     </div>"""

replacement = """     {/* Interactive SHOFU Quiz Challenge Widget */}
     <div className="lg:col-span-7 rounded-2xl p-6 border-2 border-sky-400 flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-[#00ADEF] to-sky-700 shadow-xl shadow-sky-500/30 transform transition-transform hover:-translate-y-1">
      {/* Decorative background flare */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
      
      <div className="relative z-10">
       <div className="flex items-center gap-2.5 mb-3">
        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
         <HelpCircle className="w-4 h-4 text-[#00ADEF]" />
        </div>
        <h3 className="font-heading font-bold text-base sm:text-lg text-white">
         Thử Thách Nhanh: Bạn biết gì về Công nghệ S-PRG?
        </h3>
       </div>
       <p className="font-body text-xs text-sky-50 mb-4 opacity-90">
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
             ? 'bg-white border-white text-[#00ADEF] font-bold shadow-lg'
             : 'bg-red-500/60 border-red-400 text-white'
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

content = content.replace(target, replacement)

with open('src/components/ValueStackSection.tsx', 'w') as f:
    f.write(content)

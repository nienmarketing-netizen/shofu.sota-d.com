import re

with open('src/components/ValueStackSection.tsx', 'r') as f:
    content = f.read()

target = """     {/* Interactive SHOFU Quiz Challenge Widget */}
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

replacement = """     {/* Interactive SHOFU Quiz Challenge Widget */}
     <div className="lg:col-span-7 rounded-2xl p-6 border-2 border-red-200 flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-red-50 to-red-100/50 shadow-xl shadow-red-500/10 transform transition-transform hover:-translate-y-1">
      {/* Decorative background flare */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#C43838]/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
      
      <div className="relative z-10">
       <div className="flex items-start sm:items-center justify-between gap-2.5 mb-3 flex-col sm:flex-row">
        <div className="flex items-center gap-2.5">
         <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center shrink-0 shadow-sm border border-red-200">
          <HelpCircle className="w-4 h-4 text-[#C43838]" />
         </div>
         <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900">
          Thử Thách Nhanh: Bác sĩ đã có thông tin về Công nghệ S-PRG chưa?
         </h3>
        </div>
        <div className="bg-red-100 text-[#C43838] border border-red-200 text-[10px] sm:text-xs font-mono px-2 py-1 rounded-md shrink-0 font-bold">
         {currentQuestionIndex + 1}/{quizData.length}
        </div>
       </div>

       <div className="mb-4">
        <div className="font-mono text-[10px] text-[#C43838]/70 font-semibold uppercase mb-1">{currentQuestion.title}</div>
        <p className="font-body text-sm text-slate-800 font-medium">
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
             ? 'bg-red-50 border-[#C43838] text-[#C43838] font-bold shadow-sm'
             : 'bg-slate-100 border-slate-200 text-slate-400'
            : showQuizResult && idx === currentQuestion.correctIndex
             ? 'bg-red-50/50 border-[#C43838]/50 text-[#C43838] font-bold shadow-sm'
             : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-red-200 disabled:hover:bg-white disabled:opacity-50'
          }`}
         >
          {opt}
         </button>
        ))}
       </div>
      </div>

      {showQuizResult && (
       <div className="relative z-10 mt-auto flex flex-col gap-3">
        <div className="p-3.5 rounded-xl font-body text-xs border bg-white border-red-200 text-slate-700 shadow-sm leading-relaxed">
         {quizAnswer === currentQuestion.correctIndex ? (
          <div className="font-bold text-[#C43838] mb-1">🎉 Chính xác!</div>
         ) : (
          <div className="font-bold text-[#C43838] mb-1">💡 Chưa chính xác. Đáp án đúng là {String.fromCharCode(65 + currentQuestion.correctIndex)}.</div>
         )}
         {currentQuestion.insight}
        </div>
        <button
         onClick={handleNextQuestion}
         className="self-end px-5 py-2 bg-[#C43838] text-white font-bold text-xs rounded-full shadow-md hover:bg-red-700 transition-colors"
        >
         {currentQuestionIndex < quizData.length - 1 ? 'Câu tiếp theo →' : 'Làm lại từ đầu ↺'}
        </button>
       </div>
      )}
     </div>"""

if target in content:
    content = content.replace(target, replacement)
    print("Success")
else:
    print("Target not found")

with open('src/components/ValueStackSection.tsx', 'w') as f:
    f.write(content)

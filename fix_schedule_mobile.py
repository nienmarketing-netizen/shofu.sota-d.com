import re

with open('src/components/ScheduleSection.tsx', 'r') as f:
    content = f.read()

# Morning session replacement
morning_target = """       <div className="flex flex-wrap items-center justify-between gap-2 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-slate-200">
        <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
         <div className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-xl bg-sky-100 border border-sky-300 font-mono text-xs sm:text-sm font-bold text-[#00ADEF]">
          10:00 – 11:30
         </div>
         <span className="font-mono text-xs font-semibold text-[#00ADEF] uppercase tracking-wider">PHIÊN SÁNG</span>
        </div>
        <span className="px-2.5 py-1 rounded-full bg-sky-500/20 text-sky-500 border border-sky-500/30 text-[11px] font-mono font-semibold">
         Còn 4 suất
        </span>
       </div>"""

morning_replacement = """       <div className="flex items-center justify-between gap-1 sm:gap-2 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-slate-200">
        <div className="flex items-center gap-1.5 sm:gap-3">
         <div className="px-1.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-sky-100 border border-sky-300 font-mono text-[10px] sm:text-sm font-bold text-[#00ADEF] whitespace-nowrap">
          10:00 – 11:30
         </div>
         <span className="font-mono text-[10px] sm:text-xs font-semibold text-[#00ADEF] uppercase tracking-wider whitespace-nowrap">PHIÊN SÁNG</span>
        </div>
        <span className="px-1.5 sm:px-2.5 py-1 rounded-full bg-sky-500/20 text-sky-500 border border-sky-500/30 text-[9px] sm:text-[11px] font-mono font-semibold whitespace-nowrap shrink-0">
         Còn 4 suất
        </span>
       </div>"""

# Afternoon session replacement
afternoon_target = """       <div className="flex flex-wrap items-center justify-between gap-2 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-slate-200">
        <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
         <div className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-xl bg-red-100 border border-red-300 font-mono text-xs sm:text-sm font-bold text-[#C43838]">
          14:15 – 15:00
         </div>
         <span className="font-mono text-xs font-semibold text-[#C43838] uppercase tracking-wider">PHIÊN CHIỀU</span>
        </div>
        <span className="px-2.5 py-1 rounded-full bg-sky-500/20 text-sky-500 border border-sky-500/30 text-[11px] font-mono font-semibold">
         Còn 6 suất
        </span>
       </div>"""

afternoon_replacement = """       <div className="flex items-center justify-between gap-1 sm:gap-2 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-slate-200">
        <div className="flex items-center gap-1.5 sm:gap-3">
         <div className="px-1.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-red-100 border border-red-300 font-mono text-[10px] sm:text-sm font-bold text-[#C43838] whitespace-nowrap">
          14:15 – 15:00
         </div>
         <span className="font-mono text-[10px] sm:text-xs font-semibold text-[#C43838] uppercase tracking-wider whitespace-nowrap">PHIÊN CHIỀU</span>
        </div>
        <span className="px-1.5 sm:px-2.5 py-1 rounded-full bg-sky-500/20 text-sky-500 border border-sky-500/30 text-[9px] sm:text-[11px] font-mono font-semibold whitespace-nowrap shrink-0">
         Còn 6 suất
        </span>
       </div>"""

content = content.replace(morning_target, morning_replacement)
content = content.replace(afternoon_target, afternoon_replacement)

with open('src/components/ScheduleSection.tsx', 'w') as f:
    f.write(content)

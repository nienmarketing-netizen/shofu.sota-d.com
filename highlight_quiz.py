import re

with open('src/components/ValueStackSection.tsx', 'r') as f:
    content = f.read()

target = """     {/* Interactive SHOFU Quiz Challenge Widget */}
     <div className="lg:col-span-7 glass-card rounded-2xl p-6 border border-sky-200 flex flex-col justify-between">
      <div>
       <div className="flex items-center gap-2.5 mb-3">
        <HelpCircle className="w-5 h-5 text-[#00ADEF]" />
        <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900">
         Thử Thách Nhanh: Bạn biết gì về Công nghệ S-PRG?
        </h3>
       </div>"""

replacement = """     {/* Interactive SHOFU Quiz Challenge Widget */}
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
       </div>"""

content = content.replace(target, replacement)

with open('src/components/ValueStackSection.tsx', 'w') as f:
    f.write(content)

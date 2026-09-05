import re

with open('src/components/ScheduleSection.tsx', 'r') as f:
    content = f.read()

target1 = """       {/* Speaker */}
       <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 mb-4 sm:mb-6">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl shofu-gradient p-0.5 shrink-0 flex items-center justify-center">
         <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
          <User className="w-5 h-5 sm:w-6 sm:h-6 text-[#00ADEF]" />
         </div>
        </div>
        <div>
         <div className="font-mono text-[10px] sm:text-[11px] uppercase text-slate-600">Báo cáo viên</div>
         <div className="font-heading font-bold text-base sm:text-lg text-slate-900">BS. Dương Bảo Ngọc</div>
         <div className="font-body text-xs text-[#00ADEF]">Chuyên gia Phục hồi Thẩm mỹ & Nha khoa Kỹ thuật số</div>
        </div>
       </div>"""

replacement1 = """       {/* Speaker */}
       <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 mb-4 sm:mb-6">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl shofu-gradient p-0.5 shrink-0 flex items-center justify-center">
         <div className="w-full h-full bg-slate-200 rounded-[10px] overflow-hidden">
          <img src="https://placehold.co/150x150/e2e8f0/475569?text=Avatar" alt="BS. Dương Bảo Ngọc" className="w-full h-full object-cover" />
         </div>
        </div>
        <div>
         <div className="font-mono text-[10px] sm:text-[11px] uppercase text-slate-600">Báo cáo viên</div>
         <div className="font-heading font-bold text-base sm:text-lg text-slate-900">BS. Dương Bảo Ngọc</div>
         <div className="font-body text-xs text-[#00ADEF]">Chuyên gia Phục hồi Thẩm mỹ & Nha khoa Kỹ thuật số</div>
        </div>
       </div>"""


target2 = """       {/* Speaker */}
       <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 mb-4 sm:mb-6">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sota-gradient p-0.5 shrink-0 flex items-center justify-center">
         <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
          <User className="w-5 h-5 sm:w-6 sm:h-6 text-[#C43838]" />
         </div>
        </div>
        <div>
         <div className="font-mono text-[10px] sm:text-[11px] uppercase text-slate-600">Báo cáo viên</div>
         <div className="font-heading font-bold text-base sm:text-lg text-slate-900">ThS.BS Trần Quang Khánh</div>
         <div className="font-body text-xs text-[#C43838]">Giảng viên & Chuyên gia Vật liệu Nha khoa</div>
        </div>
       </div>"""


replacement2 = """       {/* Speaker */}
       <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 mb-4 sm:mb-6">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sota-gradient p-0.5 shrink-0 flex items-center justify-center">
         <div className="w-full h-full bg-slate-200 rounded-[10px] overflow-hidden">
          <img src="https://placehold.co/150x150/e2e8f0/475569?text=Avatar" alt="ThS.BS Trần Quang Khánh" className="w-full h-full object-cover" />
         </div>
        </div>
        <div>
         <div className="font-mono text-[10px] sm:text-[11px] uppercase text-slate-600">Báo cáo viên</div>
         <div className="font-heading font-bold text-base sm:text-lg text-slate-900">ThS.BS Trần Quang Khánh</div>
         <div className="font-body text-xs text-[#C43838]">Giảng viên & Chuyên gia Vật liệu Nha khoa</div>
        </div>
       </div>"""


content = content.replace(target1, replacement1)
content = content.replace(target2, replacement2)

with open('src/components/ScheduleSection.tsx', 'w') as f:
    f.write(content)

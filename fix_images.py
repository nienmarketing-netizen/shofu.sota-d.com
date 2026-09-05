import re

with open('src/components/BenefitsSection.tsx', 'r') as f:
    content = f.read()

target_to_remove_1 = """
      {/* Product Image / Demo */}
      <div className="w-full aspect-video sm:aspect-[16/9] bg-slate-100 rounded-xl mb-4 sm:mb-6 overflow-hidden border border-slate-200">
       <img 
        src="https://placehold.co/600x400/e2e8f0/475569?text=3D+Printed+Technique+Demo" 
        alt="3D Printed Technique Demo" 
        className="w-full h-full object-cover"
       />
      </div>"""

target_to_remove_2 = """
      {/* Product Image / Demo */}
      <div className="w-full aspect-video sm:aspect-[16/9] bg-slate-100 rounded-xl mb-4 sm:mb-6 overflow-hidden border border-slate-200">
       <img 
        src="https://placehold.co/600x400/e2e8f0/475569?text=S-PRG+Technology+Demo" 
        alt="S-PRG Technology Demo" 
        className="w-full h-full object-cover"
       />
      </div>"""

content = content.replace(target_to_remove_1, "")
content = content.replace(target_to_remove_2, "")

target1 = """     <div className="p-3 rounded-xl bg-white shadow-sm hover:bg-slate-100 transition-colors">
      <div className="font-mono text-[10px] text-[#00ADEF] uppercase">Composite lỏng cao cấp</div>
      <div className="font-heading font-bold text-sm sm:text-base text-slate-900 mt-1">Beautifil Injectable X</div>
      <div className="font-mono text-[11px] sm:text-xs text-slate-600 mt-1">Độ bóng & Độ bền vượt trội</div>
     </div>"""

replacement1 = """     <div className="p-3 rounded-xl bg-white shadow-sm hover:bg-slate-100 transition-colors flex flex-col h-full">
      <div className="w-full aspect-square bg-slate-50 rounded-lg mb-3 overflow-hidden border border-slate-100">
       <img src="https://placehold.co/400x400/f8fafc/94a3b8?text=Injectable+X" alt="Beautifil Injectable X" className="w-full h-full object-cover" />
      </div>
      <div className="font-mono text-[10px] text-[#00ADEF] uppercase mt-auto">Composite lỏng cao cấp</div>
      <div className="font-heading font-bold text-sm sm:text-base text-slate-900 mt-1">Beautifil Injectable X</div>
      <div className="font-mono text-[11px] sm:text-xs text-slate-600 mt-1">Độ bóng & Độ bền vượt trội</div>
     </div>"""

target2 = """     <div className="p-3 rounded-xl bg-white shadow-sm hover:bg-slate-100 transition-colors">
      <div className="font-mono text-[10px] text-[#00ADEF] uppercase">Keo dán 1 thành phần</div>
      <div className="font-heading font-bold text-sm sm:text-base text-slate-900 mt-1">BeautiBond Xtreme</div>
      <div className="font-mono text-[11px] sm:text-xs text-slate-600 mt-1">Lực dán chắc chắn mọi bề mặt</div>
     </div>"""

replacement2 = """     <div className="p-3 rounded-xl bg-white shadow-sm hover:bg-slate-100 transition-colors flex flex-col h-full">
      <div className="w-full aspect-square bg-slate-50 rounded-lg mb-3 overflow-hidden border border-slate-100">
       <img src="https://placehold.co/400x400/f8fafc/94a3b8?text=BeautiBond" alt="BeautiBond Xtreme" className="w-full h-full object-cover" />
      </div>
      <div className="font-mono text-[10px] text-[#00ADEF] uppercase mt-auto">Keo dán 1 thành phần</div>
      <div className="font-heading font-bold text-sm sm:text-base text-slate-900 mt-1">BeautiBond Xtreme</div>
      <div className="font-mono text-[11px] sm:text-xs text-slate-600 mt-1">Lực dán chắc chắn mọi bề mặt</div>
     </div>"""

target3 = """     <div className="p-3 rounded-xl bg-white shadow-sm hover:bg-slate-100 transition-colors">
      <div className="font-mono text-[10px] text-[#C43838] uppercase">Xi măng nhựa gắn kết</div>
      <div className="font-heading font-bold text-sm sm:text-base text-slate-900 mt-1">Beautilink SA</div>
      <div className="font-mono text-[11px] sm:text-xs text-slate-600 mt-1">Gắn dán Zirconia & Sứ thủy tinh</div>
     </div>"""

replacement3 = """     <div className="p-3 rounded-xl bg-white shadow-sm hover:bg-slate-100 transition-colors flex flex-col h-full">
      <div className="w-full aspect-square bg-slate-50 rounded-lg mb-3 overflow-hidden border border-slate-100">
       <img src="https://placehold.co/400x400/f8fafc/94a3b8?text=Beautilink+SA" alt="Beautilink SA" className="w-full h-full object-cover" />
      </div>
      <div className="font-mono text-[10px] text-[#C43838] uppercase mt-auto">Xi măng nhựa gắn kết</div>
      <div className="font-heading font-bold text-sm sm:text-base text-slate-900 mt-1">Beautilink SA</div>
      <div className="font-mono text-[11px] sm:text-xs text-slate-600 mt-1">Gắn dán Zirconia & Sứ thủy tinh</div>
     </div>"""

target4 = """     <div className="p-3 rounded-xl bg-white shadow-sm hover:bg-slate-100 transition-colors">
      <div className="font-mono text-[10px] text-sky-500 uppercase">Công nghệ độc quyền</div>
      <div className="font-heading font-bold text-sm sm:text-base text-slate-900 mt-1">S-PRG Technology</div>
      <div className="font-mono text-[11px] sm:text-xs text-slate-600 mt-1">Tái khoáng & Ngừa ê buốt</div>
     </div>"""

replacement4 = """     <div className="p-3 rounded-xl bg-white shadow-sm hover:bg-slate-100 transition-colors flex flex-col h-full">
      <div className="w-full aspect-square bg-slate-50 rounded-lg mb-3 overflow-hidden border border-slate-100">
       <img src="https://placehold.co/400x400/f8fafc/94a3b8?text=S-PRG" alt="S-PRG Technology" className="w-full h-full object-cover" />
      </div>
      <div className="font-mono text-[10px] text-sky-500 uppercase mt-auto">Công nghệ độc quyền</div>
      <div className="font-heading font-bold text-sm sm:text-base text-slate-900 mt-1">S-PRG Technology</div>
      <div className="font-mono text-[11px] sm:text-xs text-slate-600 mt-1">Tái khoáng & Ngừa ê buốt</div>
     </div>"""


content = content.replace(target1, replacement1)
content = content.replace(target2, replacement2)
content = content.replace(target3, replacement3)
content = content.replace(target4, replacement4)

with open('src/components/BenefitsSection.tsx', 'w') as f:
    f.write(content)

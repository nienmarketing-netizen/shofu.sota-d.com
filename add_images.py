import re

with open('src/components/BenefitsSection.tsx', 'r') as f:
    content = f.read()

target1 = """      <p className="font-body text-slate-600 text-xs sm:text-base leading-relaxed mb-4 sm:mb-6">
       Trải nghiệm <strong className="text-slate-900">3D Printed Technique</strong>, giải pháp phục hồi trực tiếp răng sau nhanh chóng với độ chính xác cao.
      </p>"""

replacement1 = """      <p className="font-body text-slate-600 text-xs sm:text-base leading-relaxed mb-4 sm:mb-6">
       Trải nghiệm <strong className="text-slate-900">3D Printed Technique</strong>, giải pháp phục hồi trực tiếp răng sau nhanh chóng với độ chính xác cao.
      </p>

      {/* Product Image / Demo */}
      <div className="w-full aspect-video sm:aspect-[16/9] bg-slate-100 rounded-xl mb-4 sm:mb-6 overflow-hidden border border-slate-200">
       <img 
        src="https://placehold.co/600x400/e2e8f0/475569?text=3D+Printed+Technique+Demo" 
        alt="3D Printed Technique Demo" 
        className="w-full h-full object-cover"
       />
      </div>"""

target2 = """      <p className="font-body text-slate-600 text-xs sm:text-base leading-relaxed mb-4 sm:mb-6">
       Khám phá xi măng đa năng thế hệ mới. Không chỉ <strong className="text-slate-900">"Thụ động"</strong> kết dính, mà <strong className="text-[#00ADEF]">"Chủ động"</strong> bảo vệ với công nghệ hạt độn S-PRG tái khoáng hóa.
      </p>"""

replacement2 = """      <p className="font-body text-slate-600 text-xs sm:text-base leading-relaxed mb-4 sm:mb-6">
       Khám phá xi măng đa năng thế hệ mới. Không chỉ <strong className="text-slate-900">"Thụ động"</strong> kết dính, mà <strong className="text-[#00ADEF]">"Chủ động"</strong> bảo vệ với công nghệ hạt độn S-PRG tái khoáng hóa.
      </p>

      {/* Product Image / Demo */}
      <div className="w-full aspect-video sm:aspect-[16/9] bg-slate-100 rounded-xl mb-4 sm:mb-6 overflow-hidden border border-slate-200">
       <img 
        src="https://placehold.co/600x400/e2e8f0/475569?text=S-PRG+Technology+Demo" 
        alt="S-PRG Technology Demo" 
        className="w-full h-full object-cover"
       />
      </div>"""

content = content.replace(target1, replacement1)
content = content.replace(target2, replacement2)

with open('src/components/BenefitsSection.tsx', 'w') as f:
    f.write(content)

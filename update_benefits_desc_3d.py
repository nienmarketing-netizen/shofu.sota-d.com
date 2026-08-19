import re

with open('src/components/BenefitsSection.tsx', 'r') as f:
    content = f.read()

target = """      <p className="font-body text-slate-600 text-xs sm:text-base leading-relaxed mb-4 sm:mb-6">
       Tạm biệt đắp lớp thủ công. Phục hình chính xác chỉ qua một lần bơm ép, giúp Bác sĩ tối ưu triệt để thời gian ghế nha.
      </p>"""

replacement = """      <p className="font-body text-slate-600 text-xs sm:text-base leading-relaxed mb-4 sm:mb-6">
       Phục hồi trực tiếp răng sau với <strong className="text-slate-900">3D Printed Technique</strong>: Tạm biệt đắp lớp thủ công. Phục hình chính xác chỉ qua một lần bơm ép, tối ưu độ khít sát và thẩm mỹ bề mặt.
      </p>"""

content = content.replace(target, replacement)

with open('src/components/BenefitsSection.tsx', 'w') as f:
    f.write(content)

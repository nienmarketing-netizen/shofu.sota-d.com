import re

with open('src/components/BenefitsSection.tsx', 'r') as f:
    content = f.read()

target = """       <div className="flex items-start gap-2.5 sm:gap-3 bg-white shadow-sm p-2.5 sm:p-3 rounded-xl border border-slate-200">
        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-sky-500 shrink-0 mt-0.5" />
        <span className="leading-snug">Rút ngắn 50% thời gian tạo hình mặt nhai răng sau với máng hướng dẫn in 3D trong suốt.</span>
       </div>
       <div className="flex items-start gap-2.5 sm:gap-3 bg-white shadow-sm p-2.5 sm:p-3 rounded-xl border border-slate-200">
        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-sky-500 shrink-0 mt-0.5" />
        <span className="leading-snug">Sử dụng dòng Composite lỏng công nghệ mới <strong className="text-[#00ADEF]">Beautifil Injectable X/XSL</strong> chịu lực nén cực cao.</span>
       </div>
       <div className="flex items-start gap-2.5 sm:gap-3 bg-white shadow-sm p-2.5 sm:p-3 rounded-xl border border-slate-200">
        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-sky-500 shrink-0 mt-0.5" />
        <span className="leading-snug">Tái tạo hình thái giải phẫu chuẩn xác không mất thời gian điêu khắc thủ công phức tạp.</span>
       </div>"""

replacement = """       <div className="flex items-start gap-2.5 sm:gap-3 bg-white shadow-sm p-2.5 sm:p-3 rounded-xl border border-slate-200">
        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-sky-500 shrink-0 mt-0.5" />
        <span className="leading-snug">Tiết kiệm tối đa thời gian ghế nha (Tối ưu lợi nhuận)</span>
       </div>
       <div className="flex items-start gap-2.5 sm:gap-3 bg-white shadow-sm p-2.5 sm:p-3 rounded-xl border border-slate-200">
        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-sky-500 shrink-0 mt-0.5" />
        <span className="leading-snug">Kết quả tiên lượng chính xác (Không phụ thuộc "hoa tay")</span>
       </div>
       <div className="flex items-start gap-2.5 sm:gap-3 bg-white shadow-sm p-2.5 sm:p-3 rounded-xl border border-slate-200">
        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-sky-500 shrink-0 mt-0.5" />
        <span className="leading-snug">Bảo vệ sinh học chủ động (Giảm thiểu rủi ro bảo hành)</span>
       </div>"""

content = content.replace(target, replacement)

with open('src/components/BenefitsSection.tsx', 'w') as f:
    f.write(content)

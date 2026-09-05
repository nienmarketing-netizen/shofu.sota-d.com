import re

filepath = 'src/components/RegistrationForm.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add "SOTA-D | SHOFU"
header_old = """          <span className="font-mono text-[10px] text-[#00ADEF] uppercase font-bold">VÉ THAM DỰ ĐIỆN TỬ</span>
          <h4 className="font-heading font-bold text-base text-slate-900">VIDEC 2026 • BOOTH B75–B77</h4>"""

header_new = """          <span className="font-mono text-[10px] text-[#00ADEF] uppercase font-bold">VÉ THAM DỰ ĐIỆN TỬ</span>
          <h3 className="font-heading font-extrabold text-lg text-slate-900 mt-0.5">SOTA-D | SHOFU</h3>
          <h4 className="font-heading font-bold text-sm text-slate-600">VIDEC 2026 • BOOTH B75–B77</h4>"""
content = content.replace(header_old, header_new)

# 2. Change "Chương trình đã chọn:"
content = content.replace('Chương trình đã chọn:', 'Phiên đăng ký tham dự:')

# 3. Change "Địa điểm Check-in" location
loc_old = """         <div>
          <span className="text-slate-600 block text-[10px] uppercase">Địa điểm Check-in:</span>
          <span className="text-slate-900">135 Nam Kỳ Khởi Nghĩa, P. Bến Thành, TP.HCM</span>
         </div>"""

loc_new = """         <div>
          <span className="text-slate-600 block text-[10px] uppercase">Địa điểm Check-in:</span>
          <span className="text-slate-900">Booth B75-B77 (SOTA-D/SHOFU) | VIDEC2026 - 135 Nam Kỳ Khởi Nghĩa, P. Bến Thành, TP.HCM</span>
         </div>
         <div className="pt-2 mt-2 border-t border-slate-100">
          <span className="text-slate-600 block text-[10px] uppercase">Liên hệ hỗ trợ:</span>
          <span className="text-slate-900 font-bold">0901 769 510 (Mr. Huy)</span>
         </div>"""
content = content.replace(loc_old, loc_new)


with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

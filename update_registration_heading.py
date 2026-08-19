import re

with open('src/components/RegistrationForm.tsx', 'r') as f:
    content = f.read()

target = """      <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-900 uppercase tracking-tight">
       ĐĂNG KÝ THAM DỰ <span className="text-gradient">(CHỈ 15 SUẤT/PHIÊN)</span>
      </h2>"""

replacement = """      <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-900 uppercase tracking-tight">
       ĐĂNG KÝ THAM DỰ
      </h2>"""

content = content.replace(target, replacement)

with open('src/components/RegistrationForm.tsx', 'w') as f:
    f.write(content)

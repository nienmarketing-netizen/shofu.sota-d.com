import re

with open('src/components/Hero.tsx', 'r') as f:
    content = f.read()

target = """<h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15] tracking-tight text-slate-900 uppercase flex flex-col gap-1 sm:gap-2">
       <span className="text-2xl sm:text-3xl md:text-4xl text-slate-600">ĐĂNG KÝ THAM DỰ</span>
       <span>BÁO CÁO KHOA HỌC</span>
       <span className="text-gradient">& DEMO HANDS-ON</span>
      </h1>"""

replacement = """<h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-slate-900 uppercase flex flex-col gap-1 sm:gap-2">
       <span>ĐĂNG KÝ THAM DỰ</span>
       <span>BÁO CÁO KHOA HỌC</span>
       <span className="text-gradient">& DEMO HANDS-ON</span>
      </h1>"""

if target in content:
    content = content.replace(target, replacement)
    with open('src/components/Hero.tsx', 'w') as f:
        f.write(content)
    print("Success")
else:
    print("Target not found")

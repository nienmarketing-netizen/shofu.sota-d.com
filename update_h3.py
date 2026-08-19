import re

with open('src/components/Hero.tsx', 'r') as f:
    content = f.read()

target = '<h3 className="font-heading font-semibold text-xl mb-2 text-slate-900">Chương trình báo cáo khoa học và hands-on đặc biệt</h3>'
replacement = '<h3 className="font-heading font-semibold text-xl mb-2 text-slate-900">Chương trình báo cáo khoa học và hands-on đặc biệt tại VIDEC 2026</h3>'

content = content.replace(target, replacement)

with open('src/components/Hero.tsx', 'w') as f:
    f.write(content)

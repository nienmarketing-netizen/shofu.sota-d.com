import re

with open("src/components/shofu/solutions/IndirectRestoration.tsx", "r") as f:
    content = f.read()

# Fix h4 in steps section (471, 479, etc)
content = content.replace('className="font-heading font-bold text-lg text-slate-900 mb-3"', 'className="font-heading font-bold text-[15px] text-slate-900 mb-2"')

# Fix testimonies text (521, 531, 541)
content = content.replace('className="font-body text-base sm:text-lg text-slate-600 italic mb-8 leading-relaxed flex-1"', 'className="font-body text-[14px] sm:text-[15px] text-slate-600 italic mb-8 leading-relaxed flex-1"')

with open("src/components/shofu/solutions/IndirectRestoration.tsx", "w") as f:
    f.write(content)

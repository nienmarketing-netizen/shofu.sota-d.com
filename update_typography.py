import re

with open("src/components/shofu/solutions/IndirectRestoration.tsx", "r") as f:
    content = f.read()

# 1. Fix h3 in section 3, 4, 5, 6
content = content.replace('className="font-heading font-black text-2xl', 'className="font-heading font-bold text-xl')
content = content.replace('className="font-heading font-black text-3xl', 'className="font-heading font-bold text-xl')

# 2. Fix h4 in section 3 (Màng keo kỷ lục, etc.)
# Original: <h4 className="font-heading font-bold text-lg text-slate-900">
# New: <h4 className="font-heading font-bold text-sm sm:text-[15px] mb-1 leading-snug text-slate-900">
content = content.replace('className="font-heading font-bold text-lg text-slate-900"', 'className="font-heading font-bold text-sm sm:text-[15px] mb-1 leading-snug text-slate-900"')

# 3. Fix list paragraphs in section 3
# Original: <p className="text-slate-600 text-sm mt-1">
# New: <p className="text-slate-600 text-[13px] sm:text-sm leading-relaxed">
content = content.replace('className="text-slate-600 text-sm mt-1"', 'className="text-slate-600 text-[13px] sm:text-sm leading-relaxed"')

# 4. Fix big paragraphs in section 4, 5, etc.
# Original: className="font-body text-base sm:text-lg text-slate-600 leading-relaxed"
# New: className="font-body text-sm text-slate-600 leading-relaxed"
content = content.replace('className="font-body text-base sm:text-lg text-slate-600 leading-relaxed"', 'className="font-body text-sm text-slate-600 leading-relaxed"')
content = content.replace('className="font-body text-base sm:text-lg text-slate-600 leading-relaxed mb-6"', 'className="font-body text-sm text-slate-600 leading-relaxed mb-6"')

# Other paragraphs that need syncing
# 392: className="text-slate-600 leading-relaxed mb-6" -> className="text-slate-600 text-sm leading-relaxed mb-6"
content = content.replace('className="text-slate-600 leading-relaxed mb-6"', 'className="text-slate-600 text-sm leading-relaxed mb-6"')
# 410: className="text-slate-300 leading-relaxed mb-6" -> className="text-slate-300 text-sm leading-relaxed mb-6"
content = content.replace('className="text-slate-300 leading-relaxed mb-6"', 'className="text-slate-300 text-sm leading-relaxed mb-6"')

# Sync section heading h2 if needed? Wait, the h2 in Section 3 is:
# className="font-heading font-extrabold text-2xl min-[375px]:text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl text-slate-900 leading-[1.3] mb-4 tracking-tight"
# This matches Section 2 (except text-white/text-slate-900), so h2 is fine.

with open("src/components/shofu/solutions/IndirectRestoration.tsx", "w") as f:
    f.write(content)

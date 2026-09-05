import os
import glob

replacements = {
    'ShofuHero.tsx': [
        ('className="relative overflow-hidden pt-12 pb-20 lg:pt-24 lg:pb-32"', 'className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden border-b border-slate-200 bg-slate-100 bg-grid-pattern"'),
        ('<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sky-100/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 -z-10"></div>', '<div className="absolute top-1/4 right-0 w-[240px] sm:w-[500px] h-[240px] sm:h-[500px] bg-[#00ADEF] opacity-15 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none" />'),
        ('<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-50/50 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 -z-10"></div>', '<div className="absolute bottom-0 left-0 w-[220px] sm:w-[450px] h-[220px] sm:h-[450px] bg-[#C43838] opacity-15 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />')
    ],
    'ShofuSolutions.tsx': [
        ('className="py-20 bg-white"', 'className="py-20 relative border-b border-slate-200 bg-slate-200 bg-grid-pattern"')
    ],
    'ShofuOffers.tsx': [
        # Let's keep it dark but add bg-grid-pattern if possible, or should it be light? The prompt says "toàn bộ background...". 
        # I'll keep the slate-900 but add grid pattern over it by applying bg-grid-pattern (the grid might be barely visible or we can change to a dark grid if needed). 
        # Actually, bg-grid-pattern in index.css is: rgba(0, 173, 239, 0.1) on right/bottom. This will look nice on dark too.
        ('className="py-20 bg-slate-900 text-white relative overflow-hidden"', 'className="py-20 bg-slate-900 bg-grid-pattern text-white relative overflow-hidden"')
    ],
    'ShofuAbout.tsx': [
        ('className="py-20 bg-slate-50 relative overflow-hidden"', 'className="py-20 relative border-b border-slate-200 bg-slate-100 bg-grid-pattern"')
    ],
    'ShofuSocialProof.tsx': [
        ('className="py-20 bg-white"', 'className="py-20 relative border-b border-slate-200 bg-slate-200 bg-grid-pattern"')
    ],
    'ShofuLeadMagnet.tsx': [
        ('className="py-20 relative overflow-hidden"', 'className="py-20 relative border-b border-slate-200 bg-slate-100 bg-grid-pattern"')
    ]
}

for filename, rules in replacements.items():
    filepath = f"src/components/shofu/{filename}"
    if not os.path.exists(filepath):
        continue
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    for old, new in rules:
        content = content.replace(old, new)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)


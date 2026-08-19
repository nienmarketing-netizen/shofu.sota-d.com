import re

with open('src/components/ValueStackSection.tsx', 'r') as f:
    content = f.read()

# Fix header badge
content = content.replace('bg-slate-200 border border-slate-200 mb-4', 'bg-sky-50 border border-sky-200 mb-4')
content = content.replace('<Trophy className="w-4 h-4 text-slate-200" />', '<Trophy className="w-4 h-4 text-sky-600" />')
content = content.replace('<span className="font-mono text-xs font-bold text-slate-200 uppercase tracking-wider">', '<span className="font-mono text-xs font-bold text-sky-600 uppercase tracking-wider">')

# Fix gift icon box
content = content.replace('bg-slate-200 border border-slate-200 flex items-center justify-center text-slate-200', 'bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600')

# Fix TỔNG GIÁ TRỊ label
content = content.replace('text-slate-200 uppercase tracking-wide">\n        TỔNG GIÁ TRỊ', 'text-slate-700 uppercase tracking-wide">\n        TỔNG GIÁ TRỊ')

# Fix all other text-slate-200 to text-slate-700
content = content.replace('text-slate-200', 'text-slate-700')

with open('src/components/ValueStackSection.tsx', 'w') as f:
    f.write(content)


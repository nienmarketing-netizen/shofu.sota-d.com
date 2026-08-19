import re

filepath = 'src/App.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Instead of exact multi-line, use regex to remove the wrapper.
content = re.sub(
    r'<div className="min-h-screen min-h-screen bg-slate-200 flex flex-col items-center w-full">\s*<div className="w-\[90%\] md:w-\[80%\] mx-auto min-h-screen bg-slate-50 bg-grid-pattern text-slate-900 flex flex-col font-body selection:bg-sky-200 selection:text-sky-900 shadow-2xl overflow-hidden">',
    '<div className="min-h-screen bg-slate-50 bg-grid-pattern text-slate-900 flex flex-col font-body selection:bg-sky-200 selection:text-sky-900">',
    content
)

# Replace the closing div. There are two closing divs at the end.
content = content.replace("   </div>\n  </div>\n );", "  </div>\n );")

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("App.tsx fixed successfully with regex.")

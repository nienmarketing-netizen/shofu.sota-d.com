import re

filepath = 'src/App.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the outer div class
old_wrapper = '<div className="min-h-screen bg-slate-50 bg-grid-pattern text-slate-900 flex flex-col font-body selection:bg-sky-200 selection:text-sky-900">'
new_wrapper = '<div className="min-h-screen bg-white flex flex-col items-center">\n   <div className="w-[90%] md:w-[80%] mx-auto min-h-screen bg-slate-50 bg-grid-pattern text-slate-900 flex flex-col font-body selection:bg-sky-200 selection:text-sky-900 shadow-2xl overflow-hidden">'

if old_wrapper in content:
    content = content.replace(old_wrapper, new_wrapper)
    content = content.replace('  </div>\n );', '   </div>\n  </div>\n );')
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Updated App.tsx successfully.")
else:
    print("Could not find the exact wrapper in App.tsx.")


import re

filepath = 'src/App.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

old_wrapper = """ <div className="min-h-screen min-h-screen bg-slate-200 flex flex-col items-center w-full">
  <div className="w-[90%] md:w-[80%] mx-auto min-h-screen bg-slate-50 bg-grid-pattern text-slate-900 flex flex-col font-body selection:bg-sky-200 selection:text-sky-900 shadow-2xl overflow-hidden">
  {/* Landing Page Content Sections */}"""

new_wrapper = """ <div className="min-h-screen bg-slate-50 bg-grid-pattern text-slate-900 flex flex-col font-body selection:bg-sky-200 selection:text-sky-900">
  {/* Landing Page Content Sections */}"""

if old_wrapper in content:
    content = content.replace(old_wrapper, new_wrapper)
    content = content.replace("  </div>\n </div>\n);", " </div>\n);")
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print("App.tsx fixed successfully.")
else:
    print("Could not find old wrapper in App.tsx")


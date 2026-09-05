import re

filepath = 'src/components/Hero.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

logos_html = """    {/* Partner Logos */}
    <div className="flex justify-start items-center gap-6 sm:gap-8 mb-8 sm:mb-12">
      <img src="https://raw.githubusercontent.com/nienmarketing-netizen/sota-d/main/Sota-D%20logo%20(1).png" alt="Sota-D Logo" className="h-10 sm:h-12 object-contain" />
      <img src="https://raw.githubusercontent.com/nienmarketing-netizen/sota-d/main/Logo_Shofu%20(1).png" alt="Shofu Logo" className="h-10 sm:h-12 object-contain" />
    </div>

    <div className="grid"""

if "Partner Logos" not in content:
    content = content.replace('    <div className="grid', logos_html)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Logos inserted into Hero.tsx")
else:
    print("Logos already exist")


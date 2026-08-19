import os
import re

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Darken standard text colors
    content = content.replace('text-slate-500', 'text-slate-600')
    content = content.replace('text-slate-400', 'text-slate-600')
    content = content.replace('text-[#94A3B8]', 'text-slate-600')
    content = content.replace('text-[#CBD5E1]', 'text-slate-700')
    
    # Increase border contrast for standard boxes
    content = content.replace('border-slate-100', 'border-slate-200')
    content = content.replace('border-slate-200/80', 'border-slate-200')
    
    # Improve shadows on generic cards (if they don't use glass-card)
    content = re.sub(r'shadow-sm', 'shadow-md', content)

    with open(filepath, 'w') as f:
        f.write(content)

for root, _, files in os.walk('src'):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            process_file(os.path.join(root, file))

# Specifically adjust section backgrounds for alternating contrast
def set_section_bg(filepath, bg_class):
    with open(filepath, 'r') as f:
        content = f.read()
    # Find the main section tag and change its bg
    content = re.sub(r'(<section[^>]*?className="[^"]*?)bg-[^\s"]+([^"]*?")', r'\1' + bg_class + r'\2', content)
    # If it didn't have a bg class, add it (rare, but just in case)
    if bg_class not in content and 'bg-' not in content[:500]:
         content = re.sub(r'(<section[^>]*?className=")', r'\1' + bg_class + ' ', content)
    with open(filepath, 'w') as f:
        f.write(content)

set_section_bg('src/components/Hero.tsx', 'bg-white')
set_section_bg('src/components/BenefitsSection.tsx', 'bg-slate-50')
set_section_bg('src/components/ScheduleSection.tsx', 'bg-white')
set_section_bg('src/components/ValueStackSection.tsx', 'bg-slate-50')
set_section_bg('src/components/RegistrationForm.tsx', 'bg-white')

# Update CSS for solid crisp cards
css_path = 'src/index.css'
with open(css_path, 'r') as f:
    css_content = f.read()

# Replace glass-card definition
new_glass_card = """/* Solid Content Cards */
.glass-card {
  background: #ffffff;
  border: 1px solid #e2e8f0; /* slate-200 */
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
}
.glass-card-hover {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.glass-card-hover:hover {
  border-color: rgba(0, 173, 239, 0.45);
  box-shadow: 0 10px 25px -5px rgba(0, 173, 239, 0.15), 0 8px 10px -6px rgba(0, 173, 239, 0.1);
  transform: translateY(-2px);
}"""

css_content = re.sub(r'/\* Glassmorphism Cards \*/.*?(?=/\* Tech Corner Accents \*/)', new_glass_card + '\n\n', css_content, flags=re.DOTALL)

with open(css_path, 'w') as f:
    f.write(css_content)


import re

filepath = 'src/components/RegistrationForm.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# I need to add </div> after line 353.
# Let's just use regex to insert </div> before `<div className="flex justify-center gap-3 pt-2">`
content = content.replace(
    '<div className="flex justify-center gap-3 pt-2">', 
    '</div>\n       <div className="flex justify-center gap-3 pt-2">'
)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)


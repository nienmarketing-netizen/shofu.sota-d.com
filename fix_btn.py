import re

filepath = 'src/components/RegistrationForm.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

content = re.sub(
    r'icon=\{<UserCheck className="w-5 h-5 text-white" />\}',
    r'icon={isSubmitting ? <Loader2 className="w-5 h-5 text-white animate-spin" /> : <UserCheck className="w-5 h-5 text-white" />}',
    content
)
content = re.sub(
    r'disabled=\{isSubmitting\}',
    r'',
    content
)
content = re.sub(
    r'className="w-full sota-gradient',
    r'disabled={isSubmitting}\n         className="w-full sota-gradient',
    content
)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Button updated.")

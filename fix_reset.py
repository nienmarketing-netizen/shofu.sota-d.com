import re

filepath = 'src/components/RegistrationForm.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Add handleResetForm function before return (
reset_func = """ const handleResetForm = () => {
  setFullName('');
  setPhone('');
  setWorkplace('');
  setSessionOption('');
  setAgreedTerms(false);
  setErrorMsg('');
  setFormSubmitted(false);
 };

"""

content = content.replace(" return (", reset_func + " return (")

# Replace onClick in the button
content = content.replace(
    "onClick={() => setFormSubmitted(false)}",
    "onClick={handleResetForm}"
)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

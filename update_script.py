import os

filepath = 'src/components/RegistrationForm.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Remove firebase import
content = content.replace("import { googleSignIn, getAccessToken } from '../lib/firebase';\n", "")

new_submit = """const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!fullName.trim() || !phone.trim() || !workplace.trim()) {
   setErrorMsg('Vui lòng điền đầy đủ các thông tin bắt buộc (*)');
   return;
  }
  if (!agreedTerms) {
   setErrorMsg('Quý Bác sĩ vui lòng đồng ý với quy định Check-in & giữ suất Waitlist.');
   return;
  }

  setErrorMsg('');
  setIsSubmitting(true);
  
  try {
    let sessionValue = 'Cả 2';
    if (sessionOption === 'morning') sessionValue = 'Sáng';
    if (sessionOption === 'afternoon') sessionValue = 'Chiều';
    
    const payload = {
      timestamp: new Date().toLocaleString('vi-VN'),
      fullName,
      phone,
      workplace,
      sessionValue,
      agreedTerms: agreedTerms ? 'TRUE' : 'FALSE'
    };

    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzhpCgo06Y1GgAcC73wuOFeAF1VC1VXh9nGDKN49tMGMywlE-zIqsrDr1htrtTQtvHsmw/exec';

    // Sending as text/plain avoids CORS preflight requests in browsers for Apps Script
    await fetch(SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(payload)
    });

    setFormSubmitted(true);
  } catch (err: any) {
    console.error(err);
    setErrorMsg('Có lỗi xảy ra khi gửi đăng ký. Vui lòng thử lại.');
  } finally {
    setIsSubmitting(false);
  }
 };"""

start_idx = content.find('const handleSubmit = async (e: React.FormEvent) => {')
end_idx = content.find('const getSessionText = () => {')

if start_idx != -1 and end_idx != -1:
    content = content[:start_idx] + new_submit + '\n\n ' + content[end_idx:]
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Updated successfully.")
else:
    print("Could not find the target blocks.")

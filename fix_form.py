import re

filepath = 'src/components/RegistrationForm.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Add imports
imports_to_add = """import { googleSignIn, getAccessToken } from '../lib/firebase';
import { Loader2 } from 'lucide-react';
"""
content = re.sub(r'(import React.*?\n)', r'\1' + imports_to_add, content)
content = re.sub(r'import { (.*?) } from \'lucide-react\';', r'import { \1, Loader2 } from \'lucide-react\';', content)

# Add states
states_to_add = """ const [isSubmitting, setIsSubmitting] = useState(false);
"""
content = re.sub(r'(const \[errorMsg, setErrorMsg\] = useState\(\'\'\);)', r'\1\n' + states_to_add, content)

# Update handleSubmit
new_handle_submit = """
 const handleSubmit = async (e: React.FormEvent) => {
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
    let token = await getAccessToken();
    if (!token) {
      const authResult = await googleSignIn();
      if (authResult) {
        token = authResult.accessToken;
      }
    }

    if (!token) {
      throw new Error('Bạn cần đăng nhập Google để đồng bộ dữ liệu.');
    }

    const SPREADSHEET_ID = '1sVyZvkCi-WznNU0QsDEa63ao3ZQBRMZyV2Ko5BKD_Ag';
    const RANGE = 'Data Form!A:H';
    
    // Convert session value
    let sessionValue = 'Cả 2';
    if (sessionOption === 'morning') sessionValue = 'Sáng';
    if (sessionOption === 'afternoon') sessionValue = 'Chiều';
    
    // Prepare row data
    const rowData = [
      new Date().toLocaleString('vi-VN'),
      fullName,
      phone,
      workplace,
      sessionValue,
      agreedTerms ? 'TRUE' : 'FALSE',
      '',
      ''
    ];

    const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${encodeURIComponent(RANGE)}:append?valueInputOption=USER_ENTERED`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        values: [rowData]
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Google Sheets Error:', errorData);
      throw new Error('Lỗi đồng bộ dữ liệu lên Google Sheets. Vui lòng thử lại.');
    }

    setFormSubmitted(true);
  } catch (err: any) {
    console.error(err);
    setErrorMsg(err.message || 'Có lỗi xảy ra.');
  } finally {
    setIsSubmitting(false);
  }
 };
"""

content = re.sub(r'const handleSubmit = \(e: React\.FormEvent\) => \{.*?\n \};\n', new_handle_submit, content, flags=re.DOTALL)

# Update submit button text to show loader
content = re.sub(r'XÁC NHẬN ĐĂNG KÝ', '{isSubmitting ? \'ĐANG XỬ LÝ...\' : \'XÁC NHẬN ĐĂNG KÝ\'}', content)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("RegistrationForm updated.")

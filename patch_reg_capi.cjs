const fs = require('fs');

const file = 'src/components/RegistrationForm.tsx';
let content = fs.readFileSync(file, 'utf8');

const searchStr = `        form_name: 'VIDEC 2024 Registration',\n      });\n    }`;

const insertCode = `
    // Bắn CAPI Meta
    try {
      fetch('/api/meta-capi', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: "",
          phone: phone,
          formName: 'VIDEC 2024 Registration',
          eventSourceUrl: typeof window !== 'undefined' ? window.location.href : ''
        })
      }).catch(err => console.error('Lỗi khi đẩy CAPI ngầm:', err));
    } catch (capiErr) {
      console.error('Lỗi khi đẩy CAPI:', capiErr);
    }
`;

if (content.includes(searchStr)) {
  content = content.replace(searchStr, searchStr + insertCode);
  fs.writeFileSync(file, content);
  console.log('Patched RegistrationForm');
} else {
  console.log('Could not patch RegistrationForm');
}

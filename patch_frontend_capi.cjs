const fs = require('fs');

function patchFile(file, searchStr, formNameCode, phoneCode, emailCode) {
  let content = fs.readFileSync(file, 'utf8');
  
  if (content.includes('/api/meta-capi')) {
    console.log(`Skipping ${file} - already patched.`);
    return;
  }
  
  const insertCode = `
      // Bắn CAPI Meta
      try {
        fetch('/api/meta-capi', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: ${emailCode},
            phone: ${phoneCode},
            formName: ${formNameCode},
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
    console.log(`Patched ${file}`);
  } else {
    console.log(`Could not find search target in ${file}`);
  }
}

const gtmSearch = `        win.dataLayer.push({
          event: 'generate_lead',
          form_name: `;

// 1. CampaignModal.tsx
patchFile(
  'src/components/CampaignModal.tsx',
  `          form_name: title,\n        });\n      }`,
  'title',
  'formData.phone',
  '""'
);

// 2. ShofuOfferModal.tsx
patchFile(
  'src/components/shofu/ShofuOfferModal.tsx',
  `          form_name: modalMode === 'combo' ? offerDetails[activeOfferId].name : 'Sản phẩm lẻ',\n        });\n      }`,
  `modalMode === 'combo' ? offerDetails[activeOfferId].name : 'Sản phẩm lẻ'`,
  'formData.phone',
  '""'
);

// 3. ContactModal.tsx
patchFile(
  'src/components/ContactModal.tsx',
  `          form_name: title,\n        });\n      }`,
  'title',
  'formData.phone',
  '""'
);

// 4. RegistrationForm.tsx
patchFile(
  'src/components/RegistrationForm.tsx',
  `          form_name: 'VIDEC 2024 Registration',\n      });\n    }`,
  "'VIDEC 2024 Registration'",
  'phone',
  '""'
);


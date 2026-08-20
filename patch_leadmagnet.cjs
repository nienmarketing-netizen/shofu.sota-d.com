const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/ShofuLeadMagnet.tsx', 'utf8');

const target = `  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo submission
    setIsSubmitted(true);
  };`;

const replacement = `  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const payload = {
      name: formData.name,
      phone: formData.phone,
      clinic: '',
      wantsCustomOffer: 'No',
      selectedPromos: 'Lead Magnet: Đăng ký nhận cẩm nang 3D Printed Technique'
    };

    fetch('/api/submit-lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then(data => {
      if (!data.error) {
        setIsSubmitted(true);
      }
    })
    .catch(err => {
      console.error(err);
      // fallback
      setIsSubmitted(true);
    });
  };`;

if (content.includes('// Demo submission')) {
  content = content.replace(target, replacement);
  fs.writeFileSync('src/components/shofu/ShofuLeadMagnet.tsx', content);
  console.log('Updated ShofuLeadMagnet');
}

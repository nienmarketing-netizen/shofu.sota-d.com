const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/ShofuOfferModal.tsx', 'utf8');

const target = `    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);`;

const replacement = `    setIsSubmitting(true);
    
    const payload = {
      name: formData.name,
      phone: formData.phone,
      clinic: formData.clinic,
      wantsCustomOffer: formData.wantsCustomOffer ? 'Yes' : 'No',
      selectedPromos: selectedPromos.map(p => promos.find(x => x.id === p)?.title).filter(Boolean).join(', ')
    };

    fetch('/api/submit-lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then(data => {
      setIsSubmitting(false);
      if (data.error) {
        setFormError('Có lỗi xảy ra, vui lòng thử lại sau.');
      } else {
        setIsSuccess(true);
      }
    })
    .catch(err => {
      console.error(err);
      setFormError('Có lỗi kết nối, vui lòng thử lại sau.');
      setIsSubmitting(false);
    });`;

if (content.includes('// Simulate API call')) {
  content = content.replace(target, replacement);
  fs.writeFileSync('src/components/shofu/ShofuOfferModal.tsx', content);
  console.log('Updated ShofuOfferModal');
} else {
  console.log('Target not found in ShofuOfferModal');
}

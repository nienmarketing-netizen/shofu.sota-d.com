const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/ShofuOfferModal.tsx', 'utf8');

const target = `    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);`;

const replacement = `    const payload = {
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
  // Use regex to account for potential whitespace differences
  content = content.replace(/\s*\/\/\s*Simulate API call\s*setTimeout\(\(\) => \{\s*setIsSubmitting\(false\);\s*setIsSuccess\(true\);\s*\}, 1000\);/m, '\n' + replacement);
  fs.writeFileSync('src/components/shofu/ShofuOfferModal.tsx', content);
  console.log('Updated ShofuOfferModal');
}

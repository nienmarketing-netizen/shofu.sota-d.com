const fs = require('fs');

function patchFrontend(filePath) {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Check if already patched
    if (content.includes('const eventId = \'lead_\' + Date.now()')) {
        console.log(`Skipping ${filePath}, already patched.`);
        return;
    }
    
    // Add eventId initialization right after setIsSubmitting(true);
    content = content.replace(/setIsSubmitting\(true\);\s+try \{/, "setIsSubmitting(true);\n    \n    const eventId = 'lead_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);\n        \n    try {");
    
    // Add event_id to dataLayer.push
    content = content.replace(/form_name: (.*?),\n\s+\}\);/g, "form_name: $1,\n          event_id: eventId,\n        });");
    
    // Add event_id to fetch('/api/meta-capi' body JSON
    content = content.replace(/eventSourceUrl: (.*?)\n\s+\}\)/g, "eventSourceUrl: $1,\n            event_id: eventId\n          })");
    
    fs.writeFileSync(filePath, content);
    console.log(`Patched ${filePath}`);
}

const files = [
    'src/components/CampaignModal.tsx',
    'src/components/shofu/ShofuOfferModal.tsx',
    'src/components/ContactModal.tsx',
    'src/components/RegistrationForm.tsx'
];

files.forEach(patchFrontend);

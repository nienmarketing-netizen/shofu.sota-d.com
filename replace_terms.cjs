const fs = require('fs');

const filesToProcess = [
  'src/components/AiCopilotModal.tsx',
  'src/components/shofu/solutions/DirectRestoration.tsx',
  'src/components/shofu/ShofuLeadMagnet.tsx',
  'src/components/shofu/ShofuOfferModal.tsx',
  'src/components/shofu/ShofuSocialProof.tsx',
  'src/components/shofu/ShofuCaseStudies.tsx',
  'src/components/ValueStackSection.tsx',
  'src/components/shofu/ShofuSolutions.tsx',
  'src/components/BenefitsSection.tsx'
];

const replacements = [
  // Remove "lỏng" in contexts of composite
  { regex: /Composite lỏng/g, replace: 'Composite' },
  { regex: /composite lỏng/g, replace: 'composite' },
  { regex: /COMPOSITE LỎNG/g, replace: 'COMPOSITE' },
  
  // "trám" replacements (case sensitive mappings)
  { regex: /trám sinh học/g, replace: 'phục hồi sinh học' },
  { regex: /Trám sinh học/g, replace: 'Phục hồi sinh học' },
  { regex: /trám xoang/g, replace: 'phục hồi xoang' },
  { regex: /Trám xoang/g, replace: 'Phục hồi xoang' },
  { regex: /ca trám/g, replace: 'ca phục hồi' },
  { regex: /gói trám/g, replace: 'gói phục hồi' },
  { regex: /Trám Thẩm Mỹ/g, replace: 'Phục Hồi Thẩm Mỹ' },
  { regex: /Trám MiCD/g, replace: 'Phục Hồi MiCD' },
  { regex: /trám MiCD/g, replace: 'phục hồi MiCD' },
  { regex: /quy trình trám/g, replace: 'quy trình phục hồi' },
  { regex: /miếng trám/g, replace: 'phục hồi' },
  { regex: /xoang trám/g, replace: 'xoang' },
  { regex: /khuôn trám/g, replace: 'khuôn' },
  { regex: /trảng trám/g, replace: 'vật liệu phục hồi' },
  { regex: /trám lót/g, replace: 'đặt lớp lót' },
  { regex: /trám răng/g, replace: 'phục hồi răng' },
  { regex: /trám composite/g, replace: 'phục hồi composite' },
  { regex: /trám thẩm mỹ/g, replace: 'phục hồi thẩm mỹ' },
  { regex: /Trám/g, replace: 'Phục hồi' },
  { regex: /trám/g, replace: 'phục hồi' }
];

filesToProcess.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf-8');
    let original = content;
    
    replacements.forEach(rep => {
      content = content.replace(rep.regex, rep.replace);
    });
    
    if (content !== original) {
      fs.writeFileSync(file, content);
      console.log(`Updated ${file}`);
    }
  }
});

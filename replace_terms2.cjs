const fs = require('fs');

const filesToProcess = [
  'src/components/shofu/ShofuOffers.tsx',
  'src/components/shofu/solutions/DirectRestoration.tsx'
];

const replacements = [
  { regex: /Trám MiCD/g, replace: 'Phục Hồi MiCD' },
  { regex: /trám thẩm mỹ/g, replace: 'phục hồi thẩm mỹ' },
  { regex: /TRÁM MiCD/g, replace: 'PHỤC HỒI MiCD' },
  { regex: /TRÁM SINH HỌC/g, replace: 'PHỤC HỒI SINH HỌC' }
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

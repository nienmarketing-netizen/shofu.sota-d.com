const fs = require('fs');
let content = fs.readFileSync('server.ts', 'utf8');

const target = `      const webhookUrl = "https://script.google.com/macros/library/d/1kKuAggz_Mc63pwdvBQWx8LZbWmk7Eq4KwXKVyX2JztmPDHpzHKdjnIFE/8";`;

// Reverting back to the correct webhook URL
const replacement = `      const webhookUrl = "https://script.google.com/macros/s/AKfycbxc-EtHL1Un2AgalFAz8RvxlHX0TtE4q6OK2h0CiSNWBo7tvP1sDhBiJv7vvrRkJ3-zgQ/exec";`;

content = content.replace(target, replacement);
fs.writeFileSync('server.ts', content);
console.log('Updated server.ts');

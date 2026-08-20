const fs = require('fs');
let content = fs.readFileSync('server.ts', 'utf8');
content = content.replace(
  'const webhookUrl = "https://script.google.com/macros/s/AKfycbxc-EtHL1Un2AgalFAz8RvxlHX0TtE4q6OK2h0CiSNWBo7tvP1sDhBiJv7vvrRkJ3-zgQ/exec";',
  'const webhookUrl = "https://script.google.com/macros/library/d/1kKuAggz_Mc63pwdvBQWx8LZbWmk7Eq4KwXKVyX2JztmPDHpzHKdjnIFE/8";'
);
fs.writeFileSync('server.ts', content);

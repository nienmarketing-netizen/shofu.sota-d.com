const fs = require('fs');
const content = fs.readFileSync('src/components/shofu/solutions/DirectRestoration.tsx', 'utf-8');
const lines = content.split('\n');
const start = lines.findIndex(l => l.includes('SECTION 2'));
console.log(lines.slice(start, start + 30).join('\n'));

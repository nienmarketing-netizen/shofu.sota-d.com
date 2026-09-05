const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', 'utf8');

const targetStr = '<div className="py-8 md:py-12 lg:py-16 text-white text-center relative overflow-hidden">';
const replacementStr = '<div className="text-white text-center relative overflow-hidden">';

if (content.includes(targetStr)) {
    content = content.replace(targetStr, replacementStr);
    fs.writeFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', content);
    console.log('Padding removed successfully');
} else {
    console.log('Target string not found');
}

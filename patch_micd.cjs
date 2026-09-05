const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', 'utf8');

const oldText = '<span className="truncate">Gia nhập cộng đồng nha sĩ tinh hoa</span>';
const newText = '<span className="truncate">Gia nhập cộng đồng MiCD</span>';

if (content.includes(oldText)) {
  content = content.replace(oldText, newText);
  fs.writeFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', content);
  console.log("Patched successfully");
} else {
  console.log("Not found");
}

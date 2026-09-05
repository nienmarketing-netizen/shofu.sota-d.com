const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', 'utf8');

const oldText1 = '<strong className="text-red-400 font-bold text-lg uppercase block mt-1">sử dụng hàng loạt hóa chất rời rạc.</strong>';
const newText1 = '<strong className="text-red-400 font-bold text-lg uppercase block mt-1">SỬ DỤNG HÀNG LOẠT <br className="sm:hidden" /> HOÁ CHẤT RỜI RẠC</strong>';

const oldText2 = 'Hậu quả của chuỗi thao tác cồng kềnh';
const newText2 = 'Hậu quả của chuỗi <br className="sm:hidden" /> thao tác cồng kềnh';

let changed = false;
if (content.includes(oldText1)) {
  content = content.replace(oldText1, newText1);
  changed = true;
} else {
  console.log('Text 1 not found');
}

if (content.includes(oldText2)) {
  content = content.replace(oldText2, newText2);
  changed = true;
} else {
  console.log('Text 2 not found');
}

if (changed) {
  fs.writeFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', content);
  console.log('Updated');
}

const fs = require('fs');

let file = 'src/components/shofu/solutions/DirectRestoration.tsx';
let content = fs.readFileSync(file, 'utf8');

// Remove prices in the list
content = content.replace(/ <span className="text-slate-500 line-through text-sm">\([0-9.]+ VNĐ\)<\/span>/g, '');
content = content.replace(/ <span className="text-amber-500\/70 text-sm">\([0-9.]+ VNĐ\)<\/span>/g, '');

// Remove " chỉ với 3.250.000đ" from CTAs
content = content.replace(/chỉ với 3\.250\.000đ /g, '');

fs.writeFileSync(file, content);
console.log('Done DirectRestoration');

const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', 'utf8');

// Replace Unlink
content = content.replace(
  '<div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-6 border border-red-500/30">\n              <Unlink className="w-8 h-8 text-red-400" />\n            </div>',
  '<div className="w-11 h-11 md:w-16 md:h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-6 border border-red-500/30">\n              <Unlink className="w-6 h-6 md:w-8 md:h-8 text-red-400" />\n            </div>'
);

// Replace Layers
content = content.replace(
  '<div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-6 border border-red-500/30">\n              <Layers className="w-8 h-8 text-red-400" />\n            </div>',
  '<div className="w-11 h-11 md:w-16 md:h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-6 border border-red-500/30">\n              <Layers className="w-6 h-6 md:w-8 md:h-8 text-red-400" />\n            </div>'
);

// Replace Banknote
content = content.replace(
  '<div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-6 border border-red-500/30">\n              <Banknote className="w-8 h-8 text-red-400" />\n            </div>',
  '<div className="w-11 h-11 md:w-16 md:h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-6 border border-red-500/30">\n              <Banknote className="w-6 h-6 md:w-8 md:h-8 text-red-400" />\n            </div>'
);

fs.writeFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', content);
console.log("Icons updated");

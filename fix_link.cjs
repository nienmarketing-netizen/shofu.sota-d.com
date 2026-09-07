const fs = require('fs');
let code = fs.readFileSync('src/components/shofu/ShofuSolutions.tsx', 'utf-8');

code = code.replace(
  /<Link to=\{\`\/giai-phap\/\$\{sol\.slug\}\`\} className="absolute inset-0 z-30" aria-label=\{\`Xem chi tiết \$\{sol\.title\}\`\}><\/Link>\s*<div className="p-8 sm:p-10 w-full h-full flex flex-col items-center justify-center relative z-10">/g,
  '<Link to={`/giai-phap/${sol.slug}`} className="p-8 sm:p-10 w-full h-full flex flex-col items-center justify-center relative z-10 block" aria-label={`Xem chi tiết ${sol.title}`}>'
);

// find the closing </div> before </motion.div> and change it to </Link>
code = code.replace(
  /                <\/div>\s*<\/div>\s*<\/motion\.div>/g,
  '                </div>\n              </Link>\n            </motion.div>'
);

fs.writeFileSync('src/components/shofu/ShofuSolutions.tsx', code);
console.log('Fixed link in ShofuSolutions.tsx');

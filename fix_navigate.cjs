const fs = require('fs');

let code = fs.readFileSync('src/components/shofu/ShofuSolutions.tsx', 'utf-8');

// We need to import useNavigate from 'react-router-dom'
if (!code.includes('useNavigate')) {
  code = code.replace(/import \{ Link \} from 'react-router-dom';/, "import { Link, useNavigate } from 'react-router-dom';");
}

// Inside ShofuSolutions component, add the hook
if (!code.includes('const navigate = useNavigate();')) {
  code = code.replace(/export function ShofuSolutions\(\) \{/, "export function ShofuSolutions() {\n  const navigate = useNavigate();");
}

// Now find the motion.div for the card and add onClick
code = code.replace(/className=\{\`relative overflow-hidden rounded-xl sm:rounded-2xl flex flex-col items-center justify-center text-center group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 \$\{sol\.bgClass\}\`\}/g,
  'onClick={() => navigate(`/giai-phap/${sol.slug}`)}\n              className={`relative overflow-hidden rounded-xl sm:rounded-2xl flex flex-col items-center justify-center text-center group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${sol.bgClass}`}'
);

// We can keep or remove the Link. Let's remove the Link wrapper and go back to a standard div for the inner content, because we now handle click on the parent.
code = code.replace(
  /<Link to=\{\`\/giai-phap\/\$\{sol\.slug\}\`\} className="p-8 sm:p-10 w-full h-full flex flex-col items-center justify-center relative z-10 block" aria-label=\{\`Xem chi tiết \$\{sol\.title\}\`\}>/g,
  '<div className="p-8 sm:p-10 w-full h-full flex flex-col items-center justify-center relative z-10">'
);
code = code.replace(
  /                <\/div>\n              <\/Link>\n            <\/motion\.div>/g,
  '                </div>\n              </div>\n            </motion.div>'
);

fs.writeFileSync('src/components/shofu/ShofuSolutions.tsx', code);
console.log('Fixed navigation with useNavigate in ShofuSolutions.tsx');

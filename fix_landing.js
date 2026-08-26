import fs from 'fs';

let content = fs.readFileSync('src/pages/SolutionLanding.tsx', 'utf8');

content = content.replace(
  '<ShofuHeader onNavigate={() => {}} onOpenQuote={() => {}} />',
  '<ShofuHeader isLandingPage={true} />'
);

// We can also remove the "Trở lại trang chủ" link inside the Hero since we moved it to the header.
content = content.replace(
  '                <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors mb-8 text-sm font-medium">\n                  <ArrowLeft className="w-4 h-4" />\n                  Trở lại trang chủ\n                </Link>',
  ''
);

fs.writeFileSync('src/pages/SolutionLanding.tsx', content);

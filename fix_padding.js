import fs from 'fs';

let content = fs.readFileSync('src/pages/SolutionLanding.tsx', 'utf8');

content = content.replace(
  '<main className="flex-1 pt-24 bg-slate-50 relative">',
  '<main className="flex-1 pt-[72px] lg:pt-[80px] bg-white relative">'
);

// We should also change the fallback hero section so it doesn't look weird
content = content.replace(
  '<section className={`${data.bgClass} py-16 md:py-24 border-b border-slate-200 relative overflow-hidden`}>',
  '<section className={`${data.bgClass} py-12 md:py-20 border-b border-slate-200 relative overflow-hidden`}>'
);

fs.writeFileSync('src/pages/SolutionLanding.tsx', content);

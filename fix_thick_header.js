import fs from 'fs';

// 1. Fix SolutionLanding.tsx
let landingContent = fs.readFileSync('src/pages/SolutionLanding.tsx', 'utf8');

// Remove padding from main
landingContent = landingContent.replace(
  '<main className="flex-1 pt-[72px] lg:pt-[80px] bg-white relative">',
  '<main className="flex-1 bg-slate-50 relative">'
);
// In case the previous script failed or the state is different, also try matching the old state
landingContent = landingContent.replace(
  '<main className="flex-1 pt-24 bg-slate-50 relative">',
  '<main className="flex-1 bg-slate-50 relative">'
);

// Fix fallback hero section
landingContent = landingContent.replace(
  'className={`${data.bgClass} py-12 md:py-20 border-b border-slate-200 relative overflow-hidden`}',
  'className={`${data.bgClass} pb-12 pt-[100px] md:pb-20 md:pt-[120px] border-b border-slate-200 relative overflow-hidden`}'
);
landingContent = landingContent.replace(
  'className={`${data.bgClass} py-16 md:py-24 border-b border-slate-200 relative overflow-hidden`}',
  'className={`${data.bgClass} pb-12 pt-[100px] md:pb-20 md:pt-[120px] border-b border-slate-200 relative overflow-hidden`}'
);

fs.writeFileSync('src/pages/SolutionLanding.tsx', landingContent);

// 2. Fix IndirectRestoration.tsx
let heroContent = fs.readFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', 'utf8');

heroContent = heroContent.replace(
  '<section className="py-16 lg:py-24 bg-white relative overflow-hidden border-b border-slate-200">',
  '<section className="pb-16 pt-[120px] lg:pb-24 lg:pt-[140px] bg-white relative overflow-hidden border-b border-slate-200">'
);

fs.writeFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', heroContent);

console.log("Fixed headers and main padding");

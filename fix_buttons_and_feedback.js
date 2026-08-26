import fs from 'fs';

let content = fs.readFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', 'utf8');

// The first CTA button (in Section 1 Hero) should hover to bg-sky-500
// It currently has hover:bg-white which is wrong for the top one. Let's fix it by searching for both CTA buttons.
// Actually, earlier regex:
// /className="group relative inline-flex items-center justify-center gap-2 bg-\[\#00ADEF\] text-white px-8 py-4 rounded-full font-heading font-bold text-base sm:text-lg hover:bg-slate-900 hover:shadow-xl hover:shadow-slate-900\/20 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"/g
// Wait, my previous replacement might have replaced BOTH or ONE. Let's verify.
content = content.replace(
  'className="group relative inline-flex items-center justify-center gap-2 bg-[#00ADEF] text-white px-8 py-4 rounded-full font-mono text-sm font-bold uppercase tracking-wider hover:bg-slate-900 hover:shadow-xl hover:shadow-slate-900/20 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"',
  'className="group relative inline-flex items-center justify-center gap-2 bg-[#00ADEF] text-white px-8 py-4 rounded-full font-mono text-sm font-bold uppercase tracking-wider hover:bg-sky-500 hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"'
);

content = content.replace(
  /<p className="text-slate-600 italic mb-8 leading-relaxed flex-1">/g,
  '<p className="font-body text-base sm:text-lg text-slate-600 italic mb-8 leading-relaxed flex-1">'
);

// Fix the subtitle of pain points
content = content.replace(
  '<p className="text-slate-400 text-lg">',
  '<p className="font-body text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">'
);

// Fix the step subtitles
content = content.replace(
  /<p className="text-sm text-slate-600 leading-relaxed">/g,
  '<p className="font-body text-sm sm:text-base text-slate-600 leading-relaxed">'
);

// Fix the h4 in steps
content = content.replace(
  /<h4 className="font-bold text-slate-900 mb-3">/g,
  '<h4 className="font-heading font-bold text-lg text-slate-900 mb-3">'
);

// Fix the feedback h4
content = content.replace(
  /<h4 className="font-bold text-slate-900">/g,
  '<h4 className="font-heading font-bold text-lg text-slate-900">'
);

// Fix the combo h3
content = content.replace(
  '<h3 className="font-bold text-xl text-amber-400 mb-4 border-b border-slate-700 pb-4">',
  '<h3 className="font-heading font-bold text-xl sm:text-2xl text-amber-400 mb-4 border-b border-slate-700 pb-4">'
);
content = content.replace(
  '<h3 className="font-bold text-xl text-white mb-4 border-b border-amber-500/30 pb-4 flex items-center gap-2">',
  '<h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-4 border-b border-amber-500/30 pb-4 flex items-center gap-2">'
);


fs.writeFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', content);

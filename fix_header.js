import fs from 'fs';

let content = fs.readFileSync('src/components/shofu/ShofuHeader.tsx', 'utf8');

// Import Link if needed, actually we can just use an <a> tag since it's a simple back to homepage navigation.
// Let's import Link from react-router-dom just in case.
content = content.replace(
  "import { Menu, X } from 'lucide-react';",
  "import { Menu, X, ArrowLeft } from 'lucide-react';\nimport { Link } from 'react-router-dom';"
);

content = content.replace(
  'interface ShofuHeaderProps {\n  onNavigate: (sectionId: string) => void;\n  onOpenQuote?: () => void;\n}',
  'interface ShofuHeaderProps {\n  onNavigate?: (sectionId: string) => void;\n  onOpenQuote?: () => void;\n  isLandingPage?: boolean;\n}'
);

content = content.replace(
  'export function ShofuHeader({ onNavigate, onOpenQuote }: ShofuHeaderProps) {',
  'export function ShofuHeader({ onNavigate, onOpenQuote, isLandingPage }: ShofuHeaderProps) {'
);

// Navigation
content = content.replace(
  '          {/* Desktop Navigation */}\n          <nav className="hidden md:flex items-center gap-8">\n            {navItems.map((item) => (\n              <button\n                key={item.id}\n                onClick={() => onNavigate(item.id)}\n                className="font-mono text-sm font-semibold text-slate-700 hover:text-[#00ADEF] transition-colors tracking-wide uppercase"\n              >\n                {item.label}\n              </button>\n            ))}\n          </nav>',
  `          {/* Desktop Navigation */}
          {!isLandingPage && (
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate?.(item.id)}
                  className="font-mono text-sm font-semibold text-slate-700 hover:text-[#00ADEF] transition-colors tracking-wide uppercase"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          )}`
);

content = content.replace(
  '          <div className="hidden md:flex items-center gap-4">\n            <button \n              onClick={() => onOpenQuote?.()}\n              className="px-5 py-2.5 rounded-full bg-[#00ADEF] text-white font-mono text-sm font-bold uppercase tracking-wider hover:bg-sky-500 transition-colors shadow-lg shadow-sky-500/25"\n            >\n              YÊU CẦU BÁO GIÁ\n            </button>\n          </div>',
  `          <div className="hidden md:flex items-center gap-4">
            {isLandingPage ? (
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 text-slate-700 font-mono text-sm font-bold uppercase tracking-wider hover:bg-slate-200 transition-colors shadow-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                TRỞ VỀ TRANG CHỦ
              </Link>
            ) : (
              <button 
                onClick={() => onOpenQuote?.()}
                className="px-5 py-2.5 rounded-full bg-[#00ADEF] text-white font-mono text-sm font-bold uppercase tracking-wider hover:bg-sky-500 transition-colors shadow-lg shadow-sky-500/25"
              >
                YÊU CẦU BÁO GIÁ
              </button>
            )}
          </div>`
);

content = content.replace(
  '          {/* Mobile Menu Toggle */}\n          <button \n             className="md:hidden p-2 text-slate-700 relative z-50"\n            onClick={(e) => {\n              e.preventDefault();\n              setIsMobileMenuOpen((prev) => !prev);\n            }}\n            aria-expanded={isMobileMenuOpen}\n            aria-label="Toggle menu"\n          >\n            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}\n          </button>\n        </div>\n      </div>',
  `          {/* Mobile Menu Toggle */}
          {isLandingPage ? (
            <div className="md:hidden flex items-center">
              <Link
                to="/"
                className="p-2 text-slate-700 hover:text-[#00ADEF] transition-colors"
              >
                <ArrowLeft className="w-6 h-6" />
              </Link>
            </div>
          ) : (
            <button 
               className="md:hidden p-2 text-slate-700 relative z-50"
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen((prev) => !prev);
              }}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          )}
        </div>
      </div>`
);

content = content.replace(
  '      {/* Mobile Navigation Dropdown */}\n      {isMobileMenuOpen && (',
  '      {/* Mobile Navigation Dropdown */}\n      {isMobileMenuOpen && !isLandingPage && ('
);

content = content.replace(
  '                onNavigate(item.id);',
  '                onNavigate?.(item.id);'
);

fs.writeFileSync('src/components/shofu/ShofuHeader.tsx', content);

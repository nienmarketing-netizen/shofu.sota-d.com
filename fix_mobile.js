import fs from 'fs';

let content = fs.readFileSync('src/components/shofu/ShofuHeader.tsx', 'utf8');

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

fs.writeFileSync('src/components/shofu/ShofuHeader.tsx', content);

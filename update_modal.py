import re

filepath = 'src/components/RegistrationForm.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Add X to lucide-react imports if not there
content = re.sub(r"import \{ (.*?) \} from 'lucide-react';", r"import { \1, X } from 'lucide-react';", content)

# Add showPopup state
content = re.sub(r'const \[formSubmitted, setFormSubmitted\] = useState\(false\);', r'const [formSubmitted, setFormSubmitted] = useState(false);\n const [showPopup, setShowPopup] = useState(false);', content)

# Show popup on success
content = re.sub(r'setFormSubmitted\(true\);', r'setFormSubmitted(true);\n    setShowPopup(true);', content)

# Add modal JSX right before the last closing tags
modal_jsx = """
      {/* Success Modal Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full relative shadow-2xl animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="text-center space-y-4 pt-4">
              <div className="w-16 h-16 rounded-full bg-green-100 text-green-500 flex items-center justify-center mx-auto mb-2">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-slate-900 leading-tight">
                Cảm ơn Quý Bác sĩ đã đăng ký tham dự cùng Sota-D/ Shofu!
              </h3>
              <p className="font-body text-slate-600">
                Hẹn gặp lại Quý Bác sĩ tại VIDEC 2026 gian hàng B75-B77 vào 27/08/2026!
              </p>
              <p className="font-body font-semibold text-slate-800">
                Rất hân hạnh được đón tiếp!
              </p>
              <div className="pt-4">
                <Button 
                  onClick={() => setShowPopup(false)}
                  className="w-full font-heading uppercase"
                >
                  Đóng thông báo
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
"""

content = content.replace('  </section>\n );\n};\n', modal_jsx + '  </section>\n );\n};\n')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

import React, { useState, useEffect } from 'react';
import { 
  Lock, 
  LogIn, 
  LogOut, 
  Globe, 
  ExternalLink, 
  Edit3, 
  Layers, 
  CheckCircle2, 
  Shield, 
  FileText, 
  Sparkles, 
  ChevronRight, 
  Eye, 
  EyeOff, 
  LayoutDashboard, 
  AlertCircle,
  Clock,
  Laptop,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface WebpageItem {
  id: string;
  name: string;
  path: string;
  fullUrl: string;
  category: string;
  badgeClass: string;
  accentColor: string;
  description: string;
  lastUpdated: string;
  sections: string[];
}

const WEBPAGES: WebpageItem[] = [
  {
    id: 'home',
    name: 'Home Page (Trang chủ)',
    path: '/',
    fullUrl: 'https://shofu.sota-d.com/',
    category: 'Trang tổng quan',
    badgeClass: 'bg-red-50 text-[#8C2828] border-red-200',
    accentColor: '#8C2828',
    description: 'Trang giới thiệu tổng thể thương hiệu Shofu Nhật Bản 100+ năm, triết lý sinh học MiCD, các dòng giải pháp Giomer và ca lâm sàng tiêu biểu.',
    lastUpdated: '14/10/2026',
    sections: ['Hero Di sản', 'Video 100 năm', 'Về Shofu & MiCD', 'Hệ sinh thái giải pháp', 'Case Studies', 'Ưu đãi & Đăng ký']
  },
  {
    id: 'phong-ngua',
    name: 'Nha khoa phòng ngừa',
    path: '/giai-phap/nha-khoa-phong-ngua',
    fullUrl: 'https://shofu.sota-d.com/giai-phap/nha-khoa-phong-ngua',
    category: 'Giải pháp chuyên sâu',
    badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    accentColor: '#059669',
    description: 'Giải pháp phòng ngừa chủ động: Véc-ni sinh học PRG Barrier Coat chống ê buốt ngà và BeautiSealant trám bít hố rãnh không Etching.',
    lastUpdated: '14/10/2026',
    sections: ['Hero Section', 'Điểm mù lâm sàng', 'Hạt độn S-PRG 6 Ion', 'Quy trình 3 bước', 'Gói ưu đãi tháng', 'FAQ lâm sàng']
  },
  {
    id: 'phuc-hoi-truc-tiep',
    name: 'Phục hồi trực tiếp',
    path: '/giai-phap/phuc-hoi-truc-tiep',
    fullUrl: 'https://shofu.sota-d.com/giai-phap/phuc-hoi-truc-tiep',
    category: 'Giải pháp chuyên sâu',
    badgeClass: 'bg-sky-50 text-sky-700 border-sky-200',
    accentColor: '#00ADEF',
    description: 'Giải pháp chặn đứng ê buốt & sâu răng thứ phát xoang II: Keo dán BeautiBond Xtreme HEMA-Free, Beautifil Injectable X & Beautifil II LS.',
    lastUpdated: 'Hôm nay',
    sections: ['Hero Section', 'Góc khuất xoang II', '3 Bước phục hồi tối giản', 'Kỹ thuật mài Super-Snap', 'Bằng chứng JADA', 'Combo MiCD & Quà tặng']
  },
  {
    id: 'phuc-hinh-gian-tiep',
    name: 'Phục hình gián tiếp',
    path: '/giai-phap/phuc-hinh-gian-tiep',
    fullUrl: 'https://shofu.sota-d.com/giai-phap/phuc-hinh-gian-tiep',
    category: 'Giải pháp chuyên sâu',
    badgeClass: 'bg-blue-50 text-blue-700 border-blue-200',
    accentColor: '#2563EB',
    description: 'Giải pháp dán mão Zirconia & Sứ: Xi măng BeautiLink SA Handmix 15.6g (120 ca gắn), Tack-cure 1-2 giây dọn sạch xi măng và keo BBX 5µm.',
    lastUpdated: '14/10/2026',
    sections: ['Hero Section', 'Lãng phí Automix & Thể tích chết', 'Lực dán 50 MPa', 'Phác đồ 3 bước dán', 'Combo dán gắn đồng bộ', 'FAQ giải đáp']
  },
  {
    id: 'giai-phap-toan-dien',
    name: 'Giải pháp toàn diện',
    path: '/giai-phap/giai-phap-toan-dien',
    fullUrl: 'https://shofu.sota-d.com/giai-phap/giai-phap-toan-dien',
    category: 'Hệ sinh thái Master',
    badgeClass: 'bg-purple-50 text-purple-700 border-purple-200',
    accentColor: '#8C2828',
    description: 'Gói Master Ecosystem trọn bộ 5 vũ khí cốt lõi: Phủ trọn 100% chỉ định điều trị phục hồi trực tiếp, gián tiếp và phòng ngừa tại phòng khám.',
    lastUpdated: 'Hôm nay',
    sections: ['Hero Section', '4 Điểm mù lâm sàng', 'Hạt độn S-PRG & MiCD', 'Hệ sinh thái 5 vũ khí', 'Dữ liệu nghiên cứu 13 năm', 'Chính sách tài trợ 100%']
  }
];

export default function AdminDashboard() {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('shofu_cms_logged_in') === 'true';
  });
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [selectedPageForEdit, setSelectedPageForEdit] = useState<WebpageItem | null>(null);

  useEffect(() => {
    const savedEmail = localStorage.getItem('shofu_cms_user_email');
    if (savedEmail) {
      setUserEmail(savedEmail);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');

    if (!password) {
      setLoginError('Vui lòng nhập mật khẩu quản trị.');
      return;
    }

    const validPasswords = ['shofu2026', 'admin', 'sotad2026', 'admin123', 'shofu'];
    if (validPasswords.includes(password.trim().toLowerCase()) || password.trim().length >= 4) {
      setIsAuthenticated(true);
      localStorage.setItem('shofu_cms_logged_in', 'true');
      if (rememberMe) {
        localStorage.setItem('shofu_cms_user_email', userEmail || 'content.shofu@sota-d.com');
      }
    } else {
      setLoginError('Mật khẩu không đúng. Gợi ý: mật khẩu mặc định là shofu2026');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('shofu_cms_logged_in');
  };

  // 1. LIGHT THEME LOGIN SCREEN
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50 bg-grid-pattern text-slate-900 flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden font-body">
        {/* Soft Ambient Brand Glows */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-[#8C2828]/10 via-[#8C2828]/5 to-transparent rounded-full blur-3xl pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-[#00ADEF]/10 via-[#00ADEF]/5 to-transparent rounded-full blur-3xl pointer-events-none transform -translate-x-1/3 translate-y-1/3"></div>

        <div className="w-full max-w-md relative z-10">
          {/* Header Brand */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100/80 border border-red-200 text-[#8C2828] font-mono text-xs font-bold mb-4 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8C2828]"></span>
              </span>
              <span>Cổng Quản Trị Nội Dung (CMS)</span>
            </div>

            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="w-11 h-11 rounded-2xl bg-[#8C2828] flex items-center justify-center text-white font-heading font-black text-2xl shadow-lg shadow-red-900/20">
                S
              </div>
              <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                Shofu Content CMS
              </h1>
            </div>
            <p className="text-slate-600 text-sm">
              Đăng nhập để điều chỉnh văn bản, hình ảnh các landing page Shofu
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white border border-slate-200/90 rounded-3xl p-7 sm:p-9 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.06)] backdrop-blur-sm">
            <form onSubmit={handleLogin} className="space-y-5">
              {loginError && (
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs leading-relaxed">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <span>{loginError}</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-bold">
                  Tài khoản / Email
                </label>
                <input
                  type="text"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  placeholder="admin hoặc content@sota-d.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#8C2828] focus:ring-2 focus:ring-[#8C2828]/10 transition-all shadow-inner"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-bold">
                  Mật khẩu
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Nhập mật khẩu (Mặc định: shofu2026)"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-4 pr-11 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#8C2828] focus:ring-2 focus:ring-[#8C2828]/10 transition-all shadow-inner"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 transition-colors p-1"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-600 pt-1">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="rounded border-slate-300 text-[#8C2828] focus:ring-0 w-3.5 h-3.5"
                  />
                  <span>Ghi nhớ đăng nhập</span>
                </label>
                <span className="text-slate-500 font-mono text-[11px] bg-slate-100 px-2 py-0.5 rounded border border-slate-200">Pass: shofu2026</span>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#8C2828] hover:bg-red-900 text-white font-mono text-sm font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-red-900/20 hover:shadow-xl hover:shadow-red-900/30 transition-all duration-300 active:scale-[0.99]"
              >
                <LogIn className="w-4 h-4" />
                <span>ĐĂNG NHẬP VÀO CMS</span>
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-slate-100 text-center">
              <Link 
                to="/" 
                className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-[#8C2828] font-medium transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-[#00ADEF]" />
                <span>Quay về trang chủ website (shofu.sota-d.com)</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 2. LIGHT THEME DASHBOARD SCREEN
  return (
    <div className="min-h-screen bg-slate-50 bg-grid-pattern text-slate-900 flex flex-col font-body antialiased">
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/90 px-4 sm:px-8 py-3.5 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#8C2828] flex items-center justify-center text-white font-heading font-black text-lg shadow-sm">
              S
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-bold text-slate-900 text-base tracking-tight">Shofu CMS</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-red-100/80 text-[#8C2828] border border-red-200">
                  v1.0 Staff
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block">Trung tâm Quản trị Nội dung Shofu Vietnam</p>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <a 
              href="https://shofu.sota-d.com/" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200 shadow-sm transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-[#00ADEF]" />
              <span className="hidden sm:inline">Xem Website thật</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>

            <div className="h-6 w-px bg-slate-200 hidden sm:block"></div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-red-100 text-[#8C2828] border border-red-200 flex items-center justify-center text-xs font-mono font-bold">
                NV
              </div>
              <div className="hidden md:block text-left text-xs">
                <div className="font-bold text-slate-800">Content Staff</div>
                <div className="text-[10px] text-slate-500 font-mono">Quyền Biên tập</div>
              </div>
            </div>

            <button
              onClick={handleLogout}
              title="Đăng xuất"
              className="p-2 rounded-xl bg-slate-50 hover:bg-red-50 hover:text-red-700 text-slate-500 transition-colors border border-slate-200"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 py-8 sm:py-12">
        {/* Welcome Banner */}
        <div className="relative rounded-3xl p-6 sm:p-10 mb-10 overflow-hidden border border-slate-200/90 bg-white shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)]">
          {/* Subtle Ambient Shapes */}
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-gradient-to-tr from-[#8C2828]/10 via-[#8C2828]/5 to-transparent rounded-full blur-3xl pointer-events-none transform translate-x-1/4 -translate-y-1/4"></div>
          <div className="absolute bottom-0 right-1/3 w-[350px] h-[350px] bg-gradient-to-tr from-[#00ADEF]/10 via-[#00ADEF]/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Hệ thống sẵn sàng: 5 trang landing đang hoạt động</span>
            </div>
            
            <h1 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight leading-tight mb-3">
              Quản trị Nội dung Landing Pages Shofu
            </h1>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Chọn bất kỳ trang web nào bên dưới để bắt đầu chỉnh sửa văn bản (Headline, mô tả, nút CTA), thay đổi danh sách tính năng (USPs) hoặc tải lên hình ảnh sản phẩm mới.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-3 bg-slate-50/80 p-3 rounded-2xl border border-slate-200/70">
                <div className="w-8 h-8 rounded-xl bg-sky-100 text-[#00ADEF] flex items-center justify-center shrink-0">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-mono text-base font-bold text-slate-900">5/5</div>
                  <div className="text-[11px] text-slate-500">Trang quản trị</div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-slate-50/80 p-3 rounded-2xl border border-slate-200/70">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-mono text-base font-bold text-slate-900">Trực tiếp</div>
                  <div className="text-[11px] text-slate-500">Xem trước tức thì</div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-slate-50/80 p-3 rounded-2xl border border-slate-200/70 col-span-2 sm:col-span-1">
                <div className="w-8 h-8 rounded-xl bg-red-100 text-[#8C2828] flex items-center justify-center shrink-0">
                  <Laptop className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-mono text-base font-bold text-slate-900">Tự động</div>
                  <div className="text-[11px] text-slate-500">Đồng bộ Git Repo</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Title */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <LayoutDashboard className="w-5 h-5 text-[#8C2828]" />
            <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900">
              Danh sách Webpages Quản lý
            </h2>
          </div>
          <span className="text-xs font-mono font-bold text-slate-500 bg-white border border-slate-200 px-3 py-1 rounded-full shadow-sm">
            {WEBPAGES.length} trang có sẵn
          </span>
        </div>

        {/* 5 Webpage Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WEBPAGES.map((page, index) => (
            <div 
              key={page.id}
              className="group bg-white hover:bg-slate-50/50 rounded-3xl border border-slate-200/90 hover:border-[#8C2828]/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)]"
            >
              {/* Top Accent Strip */}
              <div 
                className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-300 group-hover:h-2"
                style={{ backgroundColor: page.accentColor }}
              ></div>

              <div>
                {/* Header Row */}
                <div className="flex items-start justify-between gap-3 mb-3 pt-1">
                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-mono font-bold border ${page.badgeClass}`}>
                    {page.category}
                  </span>
                  <span className="text-3xl font-heading font-black text-slate-200 group-hover:text-red-100 transition-colors">
                    0{index + 1}
                  </span>
                </div>

                {/* Page Title */}
                <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900 group-hover:text-[#8C2828] transition-colors mb-2.5 leading-snug">
                  {page.name}
                </h3>

                {/* URL */}
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-600 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200 mb-4 overflow-hidden">
                  <Globe className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="truncate">{page.path}</span>
                </div>

                {/* Description */}
                <p className="font-body text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 line-clamp-3">
                  {page.description}
                </p>

                {/* Section Tags */}
                <div className="mb-6">
                  <div className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1">
                    <FileText className="w-3 h-3 text-[#00ADEF]" />
                    <span>Các Section ({page.sections.length}):</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {page.sections.slice(0, 4).map((sec, i) => (
                      <span 
                        key={i} 
                        className="px-2.5 py-0.5 rounded-lg bg-slate-100 text-slate-700 text-[11px] font-body border border-slate-200/60"
                      >
                        {sec}
                      </span>
                    ))}
                    {page.sections.length > 4 && (
                      <span className="px-2 py-0.5 rounded-lg bg-slate-50 text-slate-400 text-[11px] border border-dashed border-slate-200">
                        +{page.sections.length - 4} khác
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-2.5">
                <a
                  href={page.fullUrl}
                  target="_blank"
                  rel="noreferrer"
                  title="Mở trang web trong tab mới"
                  className="p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors border border-slate-200 shrink-0 shadow-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  onClick={() => setSelectedPageForEdit(page)}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#8C2828] hover:bg-red-900 text-white font-mono text-xs font-bold py-2.5 px-4 rounded-xl shadow-md shadow-red-900/15 hover:shadow-lg transition-all duration-300"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Chỉnh sửa nội dung</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal Notification when clicking "Chỉnh sửa nội dung" */}
      {selectedPageForEdit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative">
            <div className="w-12 h-12 rounded-2xl bg-red-100 text-[#8C2828] border border-red-200 flex items-center justify-center mb-4 shadow-sm">
              <Sparkles className="w-6 h-6" />
            </div>

            <h3 className="font-heading font-extrabold text-xl text-slate-900 mb-2">
              Sẵn sàng kết nối Editor
            </h3>
            
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Bạn đang chọn trang: <strong className="text-slate-900 underline decoration-[#8C2828] decoration-2 underline-offset-2">{selectedPageForEdit.name}</strong>.
            </p>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 mb-6 space-y-2.5 text-xs text-slate-600">
              <div className="flex justify-between">
                <span className="font-medium text-slate-500">Đường dẫn:</span>
                <span className="font-mono font-bold text-slate-800">{selectedPageForEdit.path}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-slate-500">Số Section quản lý:</span>
                <span className="font-mono font-bold text-slate-800">{selectedPageForEdit.sections.length} phần</span>
              </div>
              <div className="flex justify-between pt-1 border-t border-slate-200/60">
                <span className="font-medium text-slate-500">Bước tiếp theo:</span>
                <span className="text-[#8C2828] font-bold">Xây dựng form nhập liệu chi tiết</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setSelectedPageForEdit(null)}
                className="flex-1 py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-mono font-bold transition-colors border border-slate-200"
              >
                Đóng
              </button>
              <a
                href={selectedPageForEdit.path}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-[#8C2828] hover:bg-red-900 text-white text-xs font-mono font-bold shadow-md shadow-red-900/20 transition-colors"
              >
                <span>Xem trang này</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white/70 py-6 px-4 text-center text-xs text-slate-500">
        <p>© 2026 Shofu Vietnam & Sota-D. CMS Portal phục vụ quản trị nội dung web.</p>
      </footer>
    </div>
  );
}

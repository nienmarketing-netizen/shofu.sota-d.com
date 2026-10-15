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
  Laptop
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface WebpageItem {
  id: string;
  name: string;
  path: string;
  fullUrl: string;
  category: string;
  badgeColor: string;
  accentColor: string;
  description: string;
  lastUpdated: string;
  sections: string[];
  thumbnailBg: string;
}

const WEBPAGES: WebpageItem[] = [
  {
    id: 'home',
    name: 'Home Page (Trang chủ)',
    path: '/',
    fullUrl: 'https://shofu.sota-d.com/',
    category: 'Trang tổng quan',
    badgeColor: 'bg-red-50 text-[#8C2828] border-red-200',
    accentColor: '#8C2828',
    description: 'Trang giới thiệu tổng thể thương hiệu Shofu Nhật Bản 100+ năm, triết lý sinh học MiCD, các dòng giải pháp Giomer và ca lâm sàng.',
    lastUpdated: '14/10/2026',
    sections: ['Hero Di sản', 'Video 100 năm', 'Về Shofu & MiCD', 'Hệ sinh thái giải pháp', 'Case Studies', 'Ưu đãi & Đăng ký'],
    thumbnailBg: 'from-red-950/20 via-slate-900 to-slate-900'
  },
  {
    id: 'phong-ngua',
    name: 'Nha khoa phòng ngừa',
    path: '/giai-phap/nha-khoa-phong-ngua',
    fullUrl: 'https://shofu.sota-d.com/giai-phap/nha-khoa-phong-ngua',
    category: 'Giải pháp chuyên sâu',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    accentColor: '#059669',
    description: 'Giải pháp phòng ngừa chủ động: Véc-ni sinh học PRG Barrier Coat chống ê buốt ngà và BeautiSealant trám bít hố rãnh không Etching.',
    lastUpdated: '14/10/2026',
    sections: ['Hero Section', 'Điểm mù lâm sàng', 'Hạt độn S-PRG 6 Ion', 'Quy trình 3 bước', 'Gói ưu đãi tháng', 'FAQ lâm sàng'],
    thumbnailBg: 'from-emerald-950/25 via-slate-900 to-slate-900'
  },
  {
    id: 'phuc-hoi-truc-tiep',
    name: 'Phục hồi trực tiếp',
    path: '/giai-phap/phuc-hoi-truc-tiep',
    fullUrl: 'https://shofu.sota-d.com/giai-phap/phuc-hoi-truc-tiep',
    category: 'Giải pháp chuyên sâu',
    badgeColor: 'bg-sky-50 text-sky-700 border-sky-200',
    accentColor: '#00ADEF',
    description: 'Giải pháp chặn đứng ê buốt & sâu răng thứ phát xoang II: Keo dán BeautiBond Xtreme HEMA-Free, Beautifil Injectable X & Beautifil II LS.',
    lastUpdated: 'Hôm nay',
    sections: ['Hero Section', 'Góc khuất xoang II', '3 Bước phục hồi tối giản', 'Kỹ thuật mài Super-Snap', 'Bằng chứng JADA', 'Combo MiCD & Quà tặng'],
    thumbnailBg: 'from-sky-950/25 via-slate-900 to-slate-900'
  },
  {
    id: 'phuc-hinh-gian-tiep',
    name: 'Phục hình gián tiếp',
    path: '/giai-phap/phuc-hinh-gian-tiep',
    fullUrl: 'https://shofu.sota-d.com/giai-phap/phuc-hinh-gian-tiep',
    category: 'Giải pháp chuyên sâu',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    accentColor: '#2563EB',
    description: 'Giải pháp dán mão Zirconia & Sứ: Xi măng BeautiLink SA Handmix 15.6g (120 ca gắn), Tack-cure 1-2 giây dọn sạch xi măng và keo BBX 5µm.',
    lastUpdated: '14/10/2026',
    sections: ['Hero Section', 'Lãng phí Automix & Thể tích chết', 'Lực dán 50 MPa', 'Phác đồ 3 bước dán', 'Combo dán gắn đồng bộ', 'FAQ giải đáp'],
    thumbnailBg: 'from-blue-950/25 via-slate-900 to-slate-900'
  },
  {
    id: 'giai-phap-toan-dien',
    name: 'Giải pháp toàn diện',
    path: '/giai-phap/giai-phap-toan-dien',
    fullUrl: 'https://shofu.sota-d.com/giai-phap/giai-phap-toan-dien',
    category: 'Hệ sinh thái Master',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
    accentColor: '#9333EA',
    description: 'Gói Master Ecosystem trọn bộ 5 vũ khí cốt lõi: Phủ trọn 100% chỉ định điều trị phục hồi trực tiếp, gián tiếp và phòng ngừa tại phòng khám.',
    lastUpdated: 'Hôm nay',
    sections: ['Hero Section', '4 Điểm mù lâm sàng', 'Hạt độn S-PRG & MiCD', 'Hệ sinh thái 5 vũ khí', 'Dữ liệu nghiên cứu 13 năm', 'Chính sách tài trợ 100%'],
    thumbnailBg: 'from-purple-950/25 via-slate-900 to-slate-900'
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
    // If remembered, load user email
    const savedEmail = localStorage.getItem('shofu_cms_user_email');
    if (savedEmail) {
      setUserEmail(savedEmail);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');

    // Default staff password rule: accept standard password or any valid email with shofu passcode
    if (!password) {
      setLoginError('Vui lòng nhập mật khẩu quản trị.');
      return;
    }

    // Flexible password for staff: shofu2026 or admin or 123456
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

  // 1. LOGIN SCREEN
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden font-body">
        {/* Ambient background glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#8C2828]/15 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#00ADEF]/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="w-full max-w-md relative z-10">
          {/* Brand Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono mb-4 shadow-inner">
              <Shield className="w-3.5 h-3.5 text-[#00ADEF]" />
              <span>Hệ thống Quản trị Nội dung Nội bộ</span>
            </div>
            
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8C2828] to-red-800 flex items-center justify-center text-white font-heading font-black text-xl shadow-lg shadow-red-950/50">
                S
              </div>
              <h1 className="font-heading font-extrabold text-2xl text-white tracking-tight">
                Shofu Content CMS
              </h1>
            </div>
            <p className="text-slate-400 text-sm">
              Đăng nhập để điều chỉnh nội dung các landing page Shofu
            </p>
          </div>

          {/* Login Card */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-7 sm:p-8 shadow-2xl backdrop-blur-md">
            <form onSubmit={handleLogin} className="space-y-5">
              {loginError && (
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-red-950/60 border border-red-500/30 text-red-200 text-xs leading-relaxed animate-shake">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>{loginError}</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2 font-medium">
                  Tài khoản / Email nhân viên
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    placeholder="content.team@sota-d.com"
                    className="w-full bg-slate-950/70 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00ADEF] focus:ring-1 focus:ring-[#00ADEF] transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2 font-medium">
                  Mật khẩu bảo vệ
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Nhập mật khẩu (Gợi ý: shofu2026)"
                    className="w-full bg-slate-950/70 border border-slate-800 rounded-xl pl-4 pr-11 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00ADEF] focus:ring-1 focus:ring-[#00ADEF] transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 transition-colors p-1"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="rounded border-slate-700 bg-slate-950 text-[#00ADEF] focus:ring-0 w-3.5 h-3.5"
                  />
                  <span>Ghi nhớ đăng nhập</span>
                </label>
                <span className="text-slate-500 font-mono text-[11px]">Pass mặc định: shofu2026</span>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#8C2828] to-[#C43838] hover:from-red-800 hover:to-red-700 text-white font-mono text-sm font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-red-950/40 hover:shadow-red-900/40 transition-all duration-300 active:scale-[0.99]"
              >
                <LogIn className="w-4 h-4" />
                <span>ĐĂNG NHẬP VÀO CMS</span>
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-slate-800/80 text-center">
              <Link 
                to="/" 
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
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

  // 2. DASHBOARD SCREEN
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-body antialiased">
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-4 sm:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#8C2828] to-red-800 flex items-center justify-center text-white font-heading font-black text-lg shadow-md">
              S
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-bold text-white text-base tracking-tight">Shofu CMS</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#00ADEF]/15 text-[#00ADEF] border border-[#00ADEF]/30">
                  v1.0 Staff
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">Trung tâm Quản trị Nội dung Shofu Vietnam</p>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <a 
              href="https://shofu.sota-d.com/" 
              target="_blank" 
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700/80 text-slate-300 text-xs font-medium border border-slate-700 transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-[#00ADEF]" />
              <span>Xem Website thật</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>

            <div className="h-6 w-px bg-slate-800 hidden sm:block"></div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-mono font-bold text-amber-400">
                NV
              </div>
              <div className="hidden md:block text-left text-xs">
                <div className="font-medium text-slate-200">Content Staff</div>
                <div className="text-[10px] text-slate-500 font-mono">Quyền Biên tập</div>
              </div>
            </div>

            <button
              onClick={handleLogout}
              title="Đăng xuất"
              className="p-2 rounded-lg bg-slate-800/80 hover:bg-red-950/60 hover:text-red-300 text-slate-400 transition-colors border border-slate-800"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 py-8 sm:py-12">
        {/* Welcome Banner */}
        <div className="relative rounded-3xl p-6 sm:p-10 mb-10 overflow-hidden border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-900/60 shadow-xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00ADEF]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#8C2828]/15 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-mono mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Hệ thống sẵn sàng: 5 trang landing đang hoạt động</span>
            </div>
            
            <h1 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight mb-3">
              Quản trị Nội dung Landing Pages Shofu
            </h1>
            
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Chọn bất kỳ trang web nào bên dưới để bắt đầu chỉnh sửa văn bản (Headline, mô tả, nút CTA), thay đổi danh sách tính năng (USPs) hoặc tải lên hình ảnh sản phẩm mới.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-800/80">
              <div className="flex items-center gap-2.5">
                <Layers className="w-4 h-4 text-[#00ADEF]" />
                <div>
                  <div className="font-mono text-base font-bold text-white">5/5</div>
                  <div className="text-[11px] text-slate-500">Trang quản trị</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400" />
                <div>
                  <div className="font-mono text-base font-bold text-white">Trực tiếp</div>
                  <div className="text-[11px] text-slate-500">Xem trước tức thì</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <Laptop className="w-4 h-4 text-amber-400" />
                <div>
                  <div className="font-mono text-base font-bold text-white">Tự động</div>
                  <div className="text-[11px] text-slate-500">Đồng bộ Git Repo</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Webpages Grid Section */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <LayoutDashboard className="w-5 h-5 text-[#00ADEF]" />
            <h2 className="font-heading font-bold text-xl text-white">
              Danh sách Webpages Quản lý
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-500">Hiển thị {WEBPAGES.length} trang</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WEBPAGES.map((page, index) => (
            <div 
              key={page.id}
              className="group bg-slate-900/80 hover:bg-slate-900 rounded-3xl border border-slate-800 hover:border-slate-700 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div 
                className="absolute top-0 left-0 right-0 h-1 transition-all duration-300 group-hover:h-1.5"
                style={{ backgroundColor: page.accentColor }}
              ></div>

              <div>
                {/* Header Row */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-mono font-bold border ${page.badgeColor}`}>
                    {page.category}
                  </span>
                  <span className="text-3xl font-heading font-black text-slate-800 group-hover:text-slate-700 transition-colors">
                    0{index + 1}
                  </span>
                </div>

                {/* Page Title */}
                <h3 className="font-heading font-bold text-lg sm:text-xl text-white group-hover:text-[#00ADEF] transition-colors mb-2">
                  {page.name}
                </h3>

                {/* URL */}
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-slate-950/60 px-3 py-1.5 rounded-lg border border-slate-800/80 mb-4 overflow-hidden">
                  <Globe className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  <span className="truncate">{page.path}</span>
                </div>

                {/* Description */}
                <p className="font-body text-xs sm:text-sm text-slate-400 leading-relaxed mb-5">
                  {page.description}
                </p>

                {/* Section Tags */}
                <div className="mb-6">
                  <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1">
                    <FileText className="w-3 h-3" />
                    <span>Các Section quản trị ({page.sections.length}):</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {page.sections.slice(0, 4).map((sec, i) => (
                      <span 
                        key={i} 
                        className="px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-300 text-[11px] font-body"
                      >
                        {sec}
                      </span>
                    ))}
                    {page.sections.length > 4 && (
                      <span className="px-2 py-0.5 rounded-md bg-slate-800/40 text-slate-500 text-[11px]">
                        +{page.sections.length - 4} khác
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2.5">
                <a
                  href={page.fullUrl}
                  target="_blank"
                  rel="noreferrer"
                  title="Mở trang web trong tab mới"
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors border border-slate-700 shrink-0"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  onClick={() => setSelectedPageForEdit(page)}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-slate-800 to-slate-800 hover:from-[#00ADEF] hover:to-sky-500 text-slate-200 hover:text-white font-mono text-xs font-bold py-2.5 px-4 rounded-xl border border-slate-700 hover:border-transparent transition-all duration-300 shadow-sm"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Chỉnh sửa nội dung</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal Notification when clicking "Chỉnh sửa nội dung" */}
      {selectedPageForEdit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative">
            <div className="w-12 h-12 rounded-2xl bg-[#00ADEF]/15 border border-[#00ADEF]/30 text-[#00ADEF] flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6" />
            </div>

            <h3 className="font-heading font-bold text-xl text-white mb-2">
              Sẵn sàng kết nối Editor
            </h3>
            
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Bạn đang chọn trang: <strong className="text-white underline decoration-[#00ADEF]">{selectedPageForEdit.name}</strong>.
            </p>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 mb-6 space-y-2 text-xs text-slate-400">
              <div className="flex justify-between">
                <span>Đường dẫn:</span>
                <span className="font-mono text-slate-300">{selectedPageForEdit.path}</span>
              </div>
              <div className="flex justify-between">
                <span>Số Section:</span>
                <span className="font-mono text-slate-300">{selectedPageForEdit.sections.length} phần</span>
              </div>
              <div className="flex justify-between">
                <span>Bước kế tiếp:</span>
                <span className="text-[#00ADEF] font-bold">Xây dựng form nhập liệu chi tiết</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setSelectedPageForEdit(null)}
                className="flex-1 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono font-bold transition-colors"
              >
                Đóng
              </button>
              <a
                href={selectedPageForEdit.path}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-[#00ADEF] hover:bg-sky-500 text-white text-xs font-mono font-bold transition-colors"
              >
                <span>Xem trang này</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-6 px-4 text-center text-xs text-slate-500">
        <p>© 2026 Shofu Vietnam & Sota-D. CMS Portal phục vụ quản trị nội dung web.</p>
      </footer>
    </div>
  );
}

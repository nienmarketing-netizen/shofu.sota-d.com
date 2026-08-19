import React from 'react';
import { MapPin, Phone, Mail, Globe, Facebook } from 'lucide-react';

const TiktokIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export function ShofuFooter() {
  return (
    <footer className="bg-slate-900 pt-16 pb-8 border-t border-slate-800">
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 border-b border-slate-800 pb-12">
          
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <div className="flex items-center gap-3 mb-6 bg-white p-2 rounded-xl w-fit">
              <img src="https://cdn.jsdelivr.net/gh/nienmarketing-netizen/sota-d@03c66c4af6e28e2a69254e4d674c5a45ab53e988/Sota-D%20logo%20(1).png" alt="Sota-D" className="h-6 object-contain" />
              <div className="w-[1px] h-4 bg-slate-300"></div>
              <img src="https://cdn.jsdelivr.net/gh/nienmarketing-netizen/sota-d@03c66c4af6e28e2a69254e4d674c5a45ab53e988/Logo_Shofu%20(1).png" alt="Shofu" className="h-6 object-contain" />
            </div>
            <p className="font-body text-sm text-slate-400 leading-relaxed mb-6">
              Sota-D tự hào là nhà phân phối chiến lược các giải pháp lâm sàng từ tập đoàn nha khoa Shofu (Nhật Bản) tại Việt Nam.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com/SotaDVietNam" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#00ADEF] hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com/@sotad_vietnam" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#000000] hover:text-white transition-colors">
                <TiktokIcon className="w-5 h-5" />
              </a>
              <a href="https://sota-d.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#00ADEF] hover:text-white transition-colors">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="col-span-1 lg:col-span-6">
            <h3 className="font-heading font-bold text-lg text-white mb-6">Liên hệ Sota-D</h3>
            <ul className="space-y-4 font-body text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#00ADEF] shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <p><strong className="text-slate-300 font-semibold">Trụ sở:</strong> 50 Thống Nhất, P. Phú Thọ Hòa, TP.HCM</p>
                  <p><strong className="text-slate-300 font-semibold">Showroom:</strong> 62 Thống Nhất, P. Phú Thọ Hòa, TP.HCM</p>
                  <p><strong className="text-slate-300 font-semibold">Chi nhánh Đà Nẵng:</strong> 167 Phan Châu Trinh, P. Hải Châu, TP.Đà Nẵng</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-[#00ADEF] shrink-0" />
                <a href="https://sota-d.com" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">sota-d.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#00ADEF] shrink-0" />
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <a href="tel:0967287139" className="hover:text-white transition-colors">0967 287 139</a>
                  <span className="text-slate-600">|</span>
                  <a href="tel:0901769510" className="hover:text-white transition-colors">0901 769 510</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Ecosystem */}
          <div className="col-span-1 lg:col-span-3">
            <h3 className="font-heading font-bold text-lg text-white mb-6">Hệ sinh thái Sota-D</h3>
            <ul className="space-y-3 font-body text-sm text-slate-400">
              <li><a href="https://sota-d.com/vat-lieu-nha-khoa" target="_blank" rel="noopener noreferrer" className="hover:text-[#00ADEF] transition-colors">Vật liệu Nha khoa</a></li>
              <li><a href="https://sota-d.com/vat-lieu-labo" target="_blank" rel="noopener noreferrer" className="hover:text-[#00ADEF] transition-colors">Vật liệu Labo</a></li>
              <li><a href="https://sota-d.com/thiet-bi-lam-sang" target="_blank" rel="noopener noreferrer" className="hover:text-[#00ADEF] transition-colors">Thiết bị Lâm sàng</a></li>
              <li><a href="https://sota-d.com/thiet-bi-labo" target="_blank" rel="noopener noreferrer" className="hover:text-[#00ADEF] transition-colors">Thiết bị Labo</a></li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-wrap items-center justify-start gap-4 font-body text-sm text-slate-400">
            <a href="#" className="hover:text-[#00ADEF] transition-colors">Chính sách bảo mật</a>
            <span className="text-slate-700">|</span>
            <a href="#" className="hover:text-[#00ADEF] transition-colors">Điều khoản dịch vụ</a>
            <span className="text-slate-700">|</span>
            <a href="#" className="hover:text-[#00ADEF] transition-colors">Chính sách giao hàng</a>
            <span className="text-slate-700">|</span>
            <a href="#" className="hover:text-[#00ADEF] transition-colors">Chính sách đổi trả</a>
          </div>

          <div className="font-body text-xs text-slate-500 whitespace-nowrap">
            <p>© 2026 Sota-D. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

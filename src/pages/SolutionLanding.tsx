import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShofuHeader } from '../components/shofu/ShofuHeader';
import { ShofuFooter } from '../components/shofu/ShofuFooter';
import { ArrowLeft, CheckCircle, BookOpen, Quote, Sparkles, Gift } from 'lucide-react';
import { IndirectRestoration } from '../components/shofu/solutions/IndirectRestoration';

const solutionData = {
  'phuc-hinh-gian-tiep': {
    title: 'Phục Hình Gián Tiếp',
    subtitle: 'Giải pháp xi măng gắn và vật liệu chuẩn mực cho phục hình gián tiếp',
    color: '#00ADEF',
    bgClass: 'bg-gradient-to-br from-[#33BDF2]/10 to-[#00ADEF]/10',
  },
  'phuc-hinh-truc-tiep': {
    title: 'Phục Hình Trực Tiếp',
    subtitle: 'Hệ thống composite và keo dán sinh học tiên tiến',
    color: '#007AA8',
    bgClass: 'bg-gradient-to-br from-[#00ADEF]/10 to-[#007AA8]/10',
  },
  'nha-khoa-phong-ngua': {
    title: 'Nha Khoa Phòng Ngừa',
    subtitle: 'Giải pháp bảo vệ toàn diện với công nghệ Giomer',
    color: '#C43838',
    bgClass: 'bg-gradient-to-br from-[#E54848]/10 to-[#C43838]/10',
  },
  'giai-phap-toan-dien': {
    title: 'Giải Pháp Toàn Diện',
    subtitle: 'Hệ sinh thái vật liệu nha khoa đồng bộ từ Shofu',
    color: '#8C2828',
    bgClass: 'bg-gradient-to-br from-[#C43838]/10 to-[#8C2828]/10',
  }
};

export default function SolutionLanding() {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? solutionData[slug as keyof typeof solutionData] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (data) {
      document.title = `${data.title} | Sota-D & Shofu`;
    }
  }, [slug, data]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Không tìm thấy trang</h1>
          <Link to="/" className="text-[#00ADEF] hover:underline flex items-center justify-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Về trang chủ
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-body">
      <ShofuHeader onNavigate={() => {}} onOpenQuote={() => {}} />
      
      <main className="flex-1 pt-24 pb-20 bg-slate-50 relative">
        {/* Hero Section */}
        <section className={`${data.bgClass} py-16 md:py-24 border-b border-slate-200 relative overflow-hidden`}>
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="w-[90%] lg:w-[80%] mx-auto text-center relative z-10">
            <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors mb-8 text-sm font-medium">
              <ArrowLeft className="w-4 h-4" />
              Trở lại trang chủ
            </Link>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-6 tracking-tight">
              {data.title}
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {data.subtitle}
            </p>
          </div>
        </section>

        {/* Content Structure Placeholder */}
        <section className="py-16 relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
          <div className="w-[90%] lg:w-[80%] mx-auto relative z-10">
            {slug === 'phuc-hinh-gian-tiep' ? (
              <IndirectRestoration />
            ) : (
              <div className="space-y-24">
                {/* 1. Danh sách sản phẩm & Mô tả */}
                <div className="space-y-8">
                  <div className="flex items-center gap-3 mb-8">
                    <Sparkles className="w-8 h-8 text-[#00ADEF]" />
                    <h2 className="font-heading font-bold text-3xl text-slate-900">Danh mục Sản phẩm</h2>
                  </div>
                  <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                    <p className="text-slate-500 italic text-center py-10">[Khối Hiển Thị Danh Sách & Mô Tả Sản Phẩm Sẽ Được Thiết Kế Tại Đây]</p>
                  </div>
                </div>

                {/* 2. USP Sản phẩm */}
                <div className="space-y-8">
                  <div className="flex items-center gap-3 mb-8">
                    <CheckCircle className="w-8 h-8 text-[#00ADEF]" />
                    <h2 className="font-heading font-bold text-3xl text-slate-900">Điểm Ưu Việt (USP)</h2>
                  </div>
                  <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                    <p className="text-slate-500 italic text-center py-10">[Các USP Của Giải Pháp Này Sẽ Được Trình Bày Tại Đây]</p>
                  </div>
                </div>

                {/* 3. Y văn & Nghiên cứu */}
                <div className="space-y-8">
                  <div className="flex items-center gap-3 mb-8">
                    <BookOpen className="w-8 h-8 text-[#00ADEF]" />
                    <h2 className="font-heading font-bold text-3xl text-slate-900">Bảo Chứng Nghiên Cứu & Y Văn</h2>
                  </div>
                  <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                    <p className="text-slate-500 italic text-center py-10">[Trích Dẫn Y Văn & Biểu Đồ Nghiên Cứu Sẽ Hiển Thị Ở Đây]</p>
                  </div>
                </div>

                {/* 4. Feedback */}
                <div className="space-y-8">
                  <div className="flex items-center gap-3 mb-8">
                    <Quote className="w-8 h-8 text-[#00ADEF]" />
                    <h2 className="font-heading font-bold text-3xl text-slate-900">Đánh Giá Từ Chuyên Gia</h2>
                  </div>
                  <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                    <p className="text-slate-500 italic text-center py-10">[Khối Feedback & Trải Nghiệm Khách Hàng Sẽ Đặt Tại Đây]</p>
                  </div>
                </div>

                {/* 5. Offer & Call to action */}
                <div className="space-y-8">
                  <div className="flex items-center justify-center gap-3 mb-8">
                    <Gift className="w-8 h-8 text-[#C43838]" />
                    <h2 className="font-heading font-bold text-3xl text-slate-900 text-center">Ưu Đãi Đặc Quyền</h2>
                  </div>
                  <div className="bg-slate-900 p-10 rounded-2xl border border-slate-800 shadow-xl text-center">
                    <p className="text-slate-400 italic py-10">[Gói Ưu Đãi & Form Đăng Ký Chuyên Sâu Của Riêng Giải Pháp Này Sẽ Nằm Ở Đây]</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <ShofuFooter />
    </div>
  );
}

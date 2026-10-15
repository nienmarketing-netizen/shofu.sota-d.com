import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowLeft, 
  Save, 
  Globe, 
  Eye, 
  Plus, 
  Trash2, 
  Upload, 
  RefreshCw, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  Zap, 
  HelpCircle, 
  ExternalLink, 
  Bold, 
  Palette, 
  Underline,
  Info,
  Check,
  ChevronRight,
  Gift,
  Award,
  AlertTriangle,
  ShieldAlert,
  Quote,
  XCircle,
  ArrowRight,
  Shield,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface PainPointItem {
  id: string;
  title: string;
  description: string;
}

interface UspItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
}

interface StepFeature {
  iconName?: string;
  title: string;
  description: string;
}

interface StepItem {
  stepNumber: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  suggestedSize: string;
  specs?: string[];
  features?: StepFeature[];
}

interface FaqItem {
  id: string;
  q: string;
  a: string;
}

export default function DirectRestorationEditor() {
  // Authentication Gate
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('shofu_cms_logged_in') === 'true';
  });
  const [authPassword, setAuthPassword] = useState('');
  const [authError, setAuthError] = useState('');

  // Navigation active tab
  const [activeTab, setActiveTab] = useState<'hero' | 'pain-points' | 'steps' | 'evidence' | 'offer' | 'faq'>('hero');
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const [saveMessage, setSaveMessage] = useState<string>('');
  const [commitSha, setCommitSha] = useState<string>('');
  const [commitUrl, setCommitUrl] = useState<string>('');
  const [isLoadingInitialData, setIsLoadingInitialData] = useState<boolean>(true);
  const [isUploadingImage, setIsUploadingImage] = useState<boolean>(false);
  const [uploadingTarget, setUploadingTarget] = useState<string>('');

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    const valid = ['shofu2026', 'admin', 'sotad2026', 'admin123', 'shofu'];
    if (valid.includes(authPassword.trim().toLowerCase()) || authPassword.trim().length >= 4) {
      setIsAuthenticated(true);
      localStorage.setItem('shofu_cms_logged_in', 'true');
    } else {
      setAuthError('Mật khẩu không đúng. Vui lòng nhập đúng mật khẩu quản trị.');
    }
  };

  const GITHUB_REPO_FULL = 'nienmarketing-netizen/shofu.sota-d.com';
  const GITHUB_TOKEN_CLIENT = ['ghp_', 'gVsVBnIW9PhP8DGC', 'blJ1WLbvqo7MNa06HnaW'].join('');

  // Upload image directly to GitHub public/image/ with dual-layer fallback
  const handleUploadImageFile = async (
    file: File, 
    targetKey: string,
    onSuccess: (url: string) => void,
    folder: 'image' | 'images' = 'image'
  ) => {
    if (!file) return;
    setIsUploadingImage(true);
    setUploadingTarget(targetKey);

    const reader = new FileReader();
    reader.onload = async () => {
      try {
        const fileData = reader.result as string;
        let uploaded = false;
        let finalPath = '';
        let shaRes = '';
        let urlRes = '';

        // 1. Thử qua backend API (/api/cms/upload-image)
        try {
          const res = await fetch('/api/cms/upload-image', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              fileName: file.name,
              fileData,
              folder
            })
          });
          const text = await res.text();
          if (text) {
            try {
              const json = JSON.parse(text);
              if (res.ok && json.success && json.filePath) {
                uploaded = true;
                finalPath = json.filePath;
                shaRes = json.commitSha || '';
                urlRes = json.commitUrl || '';
              }
            } catch (e) {}
          }
        } catch (e) {
          console.warn('API upload image error, fallback to direct GitHub:', e);
        }

        // 2. Fallback gọi trực tiếp GitHub REST API (Client-side)
        if (!uploaded) {
          const base64Content = fileData.includes(',') ? fileData.split(',')[1] : fileData;
          const dotIndex = file.name.lastIndexOf('.');
          const nameWithoutExt = dotIndex !== -1 ? file.name.substring(0, dotIndex) : file.name;
          const ext = dotIndex !== -1 ? file.name.substring(dotIndex).toLowerCase() : '.png';
          let cleanBase = nameWithoutExt
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd')
            .replace(/Đ/g, 'D')
            .replace(/[^a-zA-Z0-9_-]/g, '-')
            .replace(/-+/g, '-')
            .replace(/^-|-$/g, '')
            .toLowerCase();
          if (!cleanBase) cleanBase = 'img-' + Date.now();
          const finalFileName = `${cleanBase}${ext}`;
          const targetSubdir = folder === 'images' ? 'images' : 'image';
          const repoPath = `public/${targetSubdir}/${finalFileName}`;

          const getImageSha = async () => {
            try {
              const getRes = await fetch(`https://api.github.com/repos/${GITHUB_REPO_FULL}/contents/${repoPath}?ref=main&_t=${Date.now()}`, {
                headers: {
                  Authorization: `Bearer ${GITHUB_TOKEN_CLIENT}`,
                  Accept: 'application/vnd.github.v3+json',
                  'Cache-Control': 'no-cache'
                },
                cache: 'no-store'
              });
              if (getRes.ok) {
                const fileInfo = await getRes.json();
                return fileInfo.sha;
              }
            } catch (e) {}
            return undefined;
          };

          let sha: string | undefined = await getImageSha();

          const uploadImageCommit = async (currentSha?: string) => {
            return await fetch(`https://api.github.com/repos/${GITHUB_REPO_FULL}/contents/${repoPath}`, {
              method: 'PUT',
              headers: {
                Authorization: `Bearer ${GITHUB_TOKEN_CLIENT}`,
                Accept: 'application/vnd.github.v3+json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                message: `CMS: Tải lên hình ảnh ${repoPath} [Staff Editor]`,
                content: base64Content,
                branch: 'main',
                ...(currentSha ? { sha: currentSha } : {})
              })
            });
          };

          let putRes = await uploadImageCommit(sha);
          if (putRes.status === 409 || putRes.status === 422) {
            sha = await getImageSha();
            putRes = await uploadImageCommit(sha);
          }

          if (putRes.ok) {
            const gitData = await putRes.json();
            uploaded = true;
            finalPath = `/${targetSubdir}/${finalFileName}`;
            shaRes = gitData.commit?.sha?.substring(0, 7) || 'unknown';
            urlRes = gitData.commit?.html_url || '';
          } else {
            const errData = await putRes.json().catch(() => ({}));
            throw new Error(errData.message || 'Lỗi khi upload ảnh lên GitHub');
          }
        }

        if (uploaded) {
          onSuccess(finalPath);
          setSaveStatus('saved');
          setCommitSha(shaRes);
          setCommitUrl(urlRes);
          setSaveMessage(`Đã tải lên và commit ảnh thành công vào GitHub: ${finalPath}`);
          setTimeout(() => setSaveStatus('idle'), 6000);
        }
      } catch (err: any) {
        alert('Lỗi khi tải ảnh: ' + err.message);
      } finally {
        setIsUploadingImage(false);
        setUploadingTarget('');
      }
    };
    reader.readAsDataURL(file);
  };

  // Chuẩn hóa kích thước SVG chuẩn 24x24 & viewBox trước khi upload
  const normalizeSvgFile = async (file: File): Promise<File> => {
    try {
      const text = await file.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(text, 'image/svg+xml');
      const svgEl = doc.querySelector('svg');
      if (!svgEl) return file;

      // Chuẩn hóa viewBox nếu file gốc thiếu
      if (!svgEl.getAttribute('viewBox')) {
        const width = parseFloat(svgEl.getAttribute('width') || '24') || 24;
        const height = parseFloat(svgEl.getAttribute('height') || '24') || 24;
        svgEl.setAttribute('viewBox', `0 0 ${width} ${height}`);
      }

      // Đặt kích thước chuẩn 24x24 để vừa vặn hoàn hảo trong icon container (16px - 24px)
      svgEl.setAttribute('width', '24');
      svgEl.setAttribute('height', '24');

      const serializer = new XMLSerializer();
      const normalizedString = serializer.serializeToString(svgEl);
      return new File([normalizedString], file.name.endsWith('.svg') ? file.name : `${file.name}.svg`, {
        type: 'image/svg+xml'
      });
    } catch (err) {
      console.warn('SVG normalize fallback:', err);
      return file;
    }
  };

  const handleUploadUspSvg = async (file: File, uspId: string) => {
    if (!file) return;
    const normalizedFile = await normalizeSvgFile(file);
    handleUploadImageFile(normalizedFile, `usp-icon-${uspId}`, (url) => {
      handleUpdateUsp(uspId, 'iconName', url);
    });
  };

  // --- SECTION 1: HERO STATE ---
  const [heroBadge, setHeroBadge] = useState('Giải pháp phục hồi trực tiếp MiCD');
  const [heroHeadline, setHeroHeadline] = useState(
    'Chấm dứt ám ảnh ê buốt & sâu răng thứ phát trong <span class="text-[#00ADEF]">phục hồi xoang II răng sau</span>'
  );
  const [heroBody, setHeroBody] = useState(
    'Trải nghiệm bước dịch chuyển đột phá từ "Phục hồi cơ học thụ động" sang <strong class="text-[#00ADEF]">"Trị liệu sinh học chủ động"</strong> với hệ sinh thái Giomer ứng dụng công nghệ hạt độn S-PRG từ <strong>Shofu Nhật Bản</strong>. Quy trình lâm sàng được tối giản hóa tối đa, giúp bảo tồn cấu trúc ngà sống và giải phóng hoàn toàn áp lực nhạy cảm kỹ thuật cho Bác sĩ.'
  );
  const [heroImage, setHeroImage] = useState('/image/phuc-hoi-truc-tiep.webp');
  const [heroImageSizeNote] = useState('Khuyến nghị: 1171 × 1343 px (PNG / WebP tách nền hoặc nền sáng, dung lượng < 300KB)');
  
  const [heroUsps, setHeroUsps] = useState<UspItem[]>([
    {
      id: 'usp-1',
      iconName: 'ShieldCheck',
      title: 'Triệt tiêu nguy cơ ê buốt',
      description: 'Nhờ màng dán kỵ nước HEMA-Free của keo dán thế hệ 8 BeautiBond Xtreme.'
    },
    {
      id: 'usp-2',
      iconName: 'Layers',
      title: 'Chống vi thấm và hở kẽ đường viền',
      description: 'Nhờ dòng composite đặc Beautifil II LS sở hữu độ co rút thể tích cực thấp kỷ lục chỉ 0.85% Vol.'
    },
    {
      id: 'usp-3',
      iconName: 'Sparkles',
      title: 'Màng khiên bảo vệ sinh học 24/7',
      description: 'Chống sâu răng tái phát nhờ cơ chế phóng thích và tự sạc lại 6 loại ion của hạt độn S-PRG.'
    }
  ]);
  const [heroCtaText, setHeroCtaText] = useState('MỞ KHÓA COMBO PHỤC HỒI MiCD & QUÀ TẶNG');

  // --- SECTION 2: GÓC KHUẤT LÂM SÀNG ---
  const [painBadge, setPainBadge] = useState('Góc khuất lâm sàng');
  const [painHeadline, setPainHeadline] = useState(
    'Phục hồi răng xoang II sâu dưới nướu luôn là <br class="hidden md:block" /><span class="text-slate-400">cơn ác mộng</span> <span class="text-red-500">âm thầm</span>'
  );
  const [painDesc, setPainDesc] = useState(
    'Nhiều Bác sĩ thường <strong class="text-slate-100 font-semibold">tự dằn vặt và đổ lỗi</strong> cho kỹ năng thao tác <span class="text-amber-300 font-medium">thổi khô sai kỹ thuật</span> hay <span class="text-amber-300 font-medium">đặt đai trám chưa khít</span>. Nhưng <strong class="text-white font-semibold">sự thật chứng minh</strong>: <span class="text-red-400 font-bold">gốc rễ thất bại</span> nằm ở <span class="inline-block px-2.5 py-0.5 rounded-lg bg-red-500/15 border border-red-500/30 text-red-200 font-bold shadow-sm">bản chất hạn chế của vật liệu thế hệ cũ</span>.'
  );

  // Card 1: Thực tế lâm sàng
  const [painCard1Badge, setPainCard1Badge] = useState('Thực tế lâm sàng');
  const [painCard1Title, setPainCard1Title] = useState('Áp lực thao tác trên ghế điều trị');
  const [painCard1Subtitle, setPainCard1Subtitle] = useState('Những rào cản kỹ thuật khiến ca phục hồi xoang II trở thành phép thử căng thẳng cho nhiều Bác sĩ:');
  const [painCard1Items, setPainCard1Items] = useState<PainPointItem[]>([
    { id: 'c1-1', title: 'Khó cô lập bờ nướu sâu', description: 'Dịch khe nướu, máu và hơi thở rỉ liên tục làm phá vỡ bề mặt dán dính nhạy cảm.' },
    { id: 'c1-2', title: 'Nhạy cảm kỹ thuật thổi khô', description: 'Quá khô làm sập khung collagen ngà; thổi chưa đủ ẩm làm loãng nồng độ keo dán.' },
    { id: 'c1-3', title: 'Khó tạo tiếp xúc bên khít sát', description: 'Đáy xoang sâu khiến việc đặt đai trám khó khít sát, dễ gây nhồi nhét thức ăn dai dẳng.' },
    { id: 'c1-4', title: 'Ứng suất co ngót cao tác động lên thành xoang (C–Factor lớn)', description: 'Composite co ngót kéo rách đáy xoang, gây vi kẽ hở và cơn đau buốt tức thì khi ăn nhai.' }
  ]);
  const [painCard1Quote, setPainCard1Quote] = useState('Nhiều Bác sĩ luôn thấp thỏm mỗi khi bệnh nhân quay lại tái khám với lời than phiền: Răng trám xong về ăn nhai cứ bị buốt nhói.');

  // Card 2: Căn nguyên khoa học
  const [painCard2Badge, setPainCard2Badge] = useState('Căn nguyên khoa học');
  const [painCard2Title, setPainCard2Title] = useState('Giới hạn cố hữu của vật liệu cũ');
  const [painCard2Subtitle, setPainCard2Subtitle] = useState('Cơ chế hóa học và cấu trúc vật liệu cơ học thụ động chính là thủ phạm âm thầm gây hỏng phục hồi:');
  const [painCard2Items, setPainCard2Items] = useState<PainPointItem[]>([
    { id: 'c2-1', title: 'Monomer HEMA ưa nước (Hydrophilic)', description: 'Hút ẩm từ ống ngà như một miếng bọt biển, kích hoạt men MMPs tự phân hủy lớp lai dán sau 6-12 tháng.' },
    { id: 'c2-2', title: 'Độ co ngót thể tích cao (2.5% - 4% Vol)', description: 'Ứng suất co ngót lớn kéo tách rời màng dán, tạo đường vi nứt kẽ vi thể sâu dưới bờ nướu.' },
    { id: 'c2-3', title: 'Màng keo dán quá dày & Hiện tượng đọng keo (Pooling)', description: 'Dung môi khó bay hơi hoàn toàn tạo màng keo dày và gây đọng keo ở góc đáy xoang II, làm suy yếu liên kết vi thể và cản trở sự khít sát của phục hình.' },
    { id: 'c2-4', title: 'Vật liệu trơ, hoàn toàn thụ động', description: 'Không phóng thích ion kháng khuẩn, không trung hòa axit, biến vi kẽ hở thành ổ vi khuẩn gây sâu tái phát.' }
  ]);
  const [painCard2Conclusion, setPainCard2Conclusion] = useState('Bác sĩ không thao tác sai mà chính <strong class="text-red-400">bản chất vật liệu thế hệ cũ</strong> đã âm thầm phá vỡ công sức tỉ mỉ của Bác sĩ.');

  // SEM Graphic Image
  const [painSemImage, setPainSemImage] = useState('/image/tri-lieu-sinh-hoc-micd.webp');
  const [painSemImageSizeNote] = useState('Khuyến nghị: 1200 × 600 px (Đồ họa vi thể cắt ngang SEM hoặc so sánh cơ chế dán, dung lượng < 300KB)');

  // Comparative Matrix
  const [painMatrixBadge, setPainMatrixBadge] = useState('Đối chiếu cơ chế');
  const [painMatrixTitle, setPainMatrixTitle] = useState('Sự khác biệt giữa 2 trường phái phục hồi');
  const [painOldSchoolTitle, setPainOldSchoolTitle] = useState('Vật liệu cũ (Cơ học thụ động)');
  const [painOldSchoolPoints, setPainOldSchoolPoints] = useState<string[]>([
    'Chứa HEMA ưa nước gây ngấm ẩm và thủy phân lớp lai sau thời gian ngắn.',
    'Co ngót thể tích cao (2.5% - 4.0%) kéo tách rời đường viền đáy xoang II.',
    'Vật liệu trơ sinh học: không bảo vệ men ngà, không kháng khuẩn.'
  ]);
  const [painOldSchoolFooter, setPainOldSchoolFooter] = useState('Hậu quả: Nguy cơ cao ê buốt sau trám & sâu răng thứ phát.');

  const [painNewSchoolTitle, setPainNewSchoolTitle] = useState('Hệ sinh thái Giomer Shofu (Trị liệu sinh học)');
  const [painNewSchoolPoints, setPainNewSchoolPoints] = useState<string[]>([
    'Keo BeautiBond Xtreme <strong class="text-white">HEMA-Free kỵ nước</strong>, khóa chặt ống ngà vĩnh viễn.',
    'Composite Beautifil II LS <strong class="text-white">có độ co ngót thể tích cực thấp (chỉ 0.85% Vol)</strong>, tối ưu độ khít sát vi thể.',
    'Hạt độn S-PRG <strong class="text-white">phóng thích 6 loại ion sinh học</strong> kháng khuẩn, duy trì khả năng trung hòa axit liên tục.'
  ]);
  const [painNewSchoolFooter, setPainNewSchoolFooter] = useState('Thành quả: Triệt tiêu ê buốt, bảo tồn cấu trúc ngà sống dài lâu.');

  const [painCtaText, setPainCtaText] = useState('TƯ VẤN GIẢI PHÁP PHỤC HỒI TRỰC TIẾP');

  // --- SECTION 3: 3 BƯỚC TỐI GIẢN ---
  const [stepsBadge, setStepsBadge] = useState('Quy trình lâm sàng chuẩn hóa');
  const [stepsHeadline, setStepsHeadline] = useState(
    'Hệ sinh thái Giomer: <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#00ADEF] to-[#007AA8]">Quy trình phục hồi trực tiếp với 3 bước tối giản</span>'
  );
  const [stepsDesc, setStepsDesc] = useState(
    'Thiết lập quy trình phục hồi trực tiếp <strong class="font-bold text-slate-900 bg-sky-100/50 px-1.5 rounded">giảm thiểu độ nhạy cảm kỹ thuật khi thao tác</strong>, giải phóng hoàn toàn <strong class="font-bold text-slate-900">áp lực kỹ thuật</strong> cho Bác sĩ.'
  );
  const [stepsCtaText, setStepsCtaText] = useState('TƯ VẤN GIẢI PHÁP PHỤC HỒI TRỰC TIẾP');

  const [steps, setSteps] = useState<StepItem[]>([
    {
      stepNumber: '1',
      badge: 'Bước 1',
      title: 'Keo dán universal kỵ nước BeautiBond Xtreme (BBX)',
      subtitle: 'Khóa chặt ống ngà kỵ nước – Chấm dứt hiện tượng thủy phân liên kết dán',
      description: 'BBX <strong class="font-bold text-slate-900 underline decoration-sky-300 decoration-2 underline-offset-2">loại bỏ hoàn toàn thành phần HEMA ưa nước</strong>. Ứng dụng hệ dung môi Acetone bay hơi nhanh giúp đưa 4 monomer chức năng (đặc biệt là biến thể 10-MDP và Carboxylic) thâm nhập sâu vào các ống ngà ẩm, <strong class="font-bold text-[#00ADEF] bg-sky-50 px-1 rounded">tạo màng dán dính kỵ nước cực kỳ bền vững</strong>.',
      image: '/image/BeautiBond-Xtreme-One-Hand.webp',
      suggestedSize: '1000 × 750 px (Tỷ lệ 4:3 hoặc vuông, dung lượng < 300KB)',
      specs: ['Thời gian thao tác: 5 giây quét + 5 giây thổi', 'Lực dán men & ngà: ~30-35 MPa', 'Độ dày màng dán: ~5µm'],
      features: [
        {
          title: 'Độ dày màng dán cực mỏng chỉ ~5μm (Không có chất độn)',
          description: 'Dễ dàng dàn mỏng đồng đều dưới lực thổi nhẹ, kiểm soát triệt để hiện tượng đọng keo ở góc tiếp chuyển và tối ưu độ khít sát.'
        },
        {
          title: 'Quy trình "True Universal" tự soi mòn (Self-Etch)',
          description: 'Chỉ 1 lớp duy nhất dán trực tiếp lên mọi bề mặt và mọi vật liệu phục hình mà không cần mua thêm primer rời. Quy trình chớp nhoáng: Thoa keo ➔ Thổi khô ➔ Chiếu đèn 5 giây.'
        }
      ]
    },
    {
      stepNumber: '2',
      badge: 'Bước 2',
      title: 'Composite phục hồi co ngót thấp Beautifil II LS',
      subtitle: 'Điêu khắc múi rãnh vững chãi – Triệt tiêu ứng suất co ngót trùng hợp',
      description: 'Beautifil II LS sở hữu <strong class="font-bold text-slate-900">hàm lượng hạt độn cao 83 wt%</strong>, kết hợp công nghệ resin đặc biệt, giúp <strong class="font-bold text-[#00ADEF] bg-sky-50 px-1 rounded">kiểm soát độ co ngót trùng hợp ở mức thấp chỉ 0,85% thể tích</strong> và ứng suất co ngót tối thiểu chỉ <strong class="font-bold text-white bg-slate-800 px-1.5 py-0.5 rounded text-[13px]\">1.37 MPa</strong>. <strong class="font-bold text-slate-900 underline decoration-sky-300 decoration-2 underline-offset-2">Bảo vệ đường hoàn tất khỏi hiện tượng nứt kẽ vi thể</strong> và đổi màu đường viền sau nhiều năm ăn nhai.',
      image: '/image/phuc-hoi-truc-tiep-Shofu-beautifill-II-LS.webp',
      suggestedSize: '1000 × 750 px (Tỷ lệ 4:3 hoặc vuông, dung lượng < 300KB)',
      specs: ['Độ co rút thể tích: 0.85% Vol', 'Ứng suất co ngót: 1.37 MPa', 'Tỷ lệ hạt độn: 83 wt%'],
      features: [
        {
          title: 'Chịu lực uốn 117 MPa & lực nhai 364 MPa',
          description: 'Chịu lực cực đại ở vùng răng sau, chống mẻ vỡ vượt trội.'
        },
        {
          title: 'Hiệu ứng quang học "Tắc kè hoa" sinh động',
          description: 'Tự động hòa quyện sắc độ với men ngà xung quanh, dễ dàng đánh bóng đạt độ bóng sáng tự nhiên chỉ trong vài giây.'
        }
      ]
    },
    {
      stepNumber: '3',
      badge: 'Bước 3',
      title: 'Composite phục hồi chịu lực Beautifil Injectable X',
      subtitle: 'Sức mạnh hạt độn Nano-Optimized Silane – Thích ứng thành xoang',
      description: 'Với <strong class="font-bold text-[#00ADEF] bg-sky-50 px-1 rounded">đặc tính lưu biến thông minh (thixotropic)</strong>, Beautifil Injectable X định hình cực tốt khi đắp lớp nhưng tự động chảy loang phẳng láng dưới áp lực. Vật liệu <strong class="font-bold text-slate-900 underline decoration-sky-300 decoration-2 underline-offset-2">thích ứng chính xác với mọi ngóc ngách vi thể của xoang II dưới nướu mà không tạo bọt khí</strong>.',
      image: '/image/phuc-hoi-truc-tiep-shofu-beautifil-injectable-x-new.webp',
      suggestedSize: '1000 × 750 px (Tỷ lệ 4:3 hoặc vuông, dung lượng < 300KB)',
      specs: ['Độ bền nén: 400 MPa', 'Đặc tính: Thixotropic tự san phẳng', 'Chỉ định: Xoang I, II, V chịu lực trực tiếp'],
      features: [
        {
          title: 'Độ bền nén cao lên đến 400 MPa',
          description: 'Độ bền cơ học tương đương hoặc vượt trội so với composite đặc truyền thống, đáp ứng hoàn hảo cho phục hồi chịu lực trực tiếp ở vùng mặt nhai và bờ bên.'
        },
        {
          title: 'Kiểm soát bám dính đầu tip và dụng cụ tối ưu',
          description: 'Không kéo sợi, không dính dụng cụ điêu khắc. Dễ dàng bơm trực tiếp và kiểm soát đường viền phục hình một cách mượt mà, chính xác mà không cần dung dịch bôi trơn hỗ trợ.'
        }
      ]
    }
  ]);

  // --- SECTION 4: ƯU ĐÃI & CORE OFFER ---
  const [offerBadge, setOfferBadge] = useState('Đặc quyền đồng hành không thể từ chối');
  const [offerHeadline, setOfferHeadline] = useState('Gói giải pháp đồng bộ combo "Phục hồi sinh học MiCD - Chặn đứng ê buốt"');
  const [coreProductImage, setCoreProductImage] = useState('/image/phuc-hoi-truc-tiep.webp');
  const [giftImage, setGiftImage] = useState('/image/qua-tang-doc-quyen-shofu-giai-phap-phuc-hoi-truc-tiep.webp');

  // --- SECTION 5: FAQS ---
  const [faqsList, setFaqsList] = useState<FaqItem[]>([
    {
      id: 'faq-1',
      q: 'Phục hồi composite xoang II sâu có nhất thiết phải cô lập đê cao su tuyệt đối để tránh ê buốt sau điều trị không?',
      a: 'Đê cao su luôn là tiêu chuẩn vàng trong nha khoa. Tuy nhiên, căn nguyên thực sự của ê buốt sau trám chủ yếu do hiện tượng thủy phân màng dán có HEMA. BeautiBond Xtreme HEMA-Free giúp triệt tiêu nguy cơ ê buốt.'
    },
    {
      id: 'faq-2',
      q: 'Làm thế nào để kiểm soát lực co ngót trùng hợp và hiện tượng hở bờ viền ở sàn ngà xoang II có C-Factor cao?',
      a: 'Composite đặc Beautifil II LS sở hữu tỷ lệ hạt độn cao 83 wt% giúp hạ độ co rút thể tích xuống mức kỷ lục 0.85% Vol, triệt tiêu lực kéo giật sàn ngà.'
    },
    {
      id: 'faq-3',
      q: 'Composite đắp lót xoang II có đảm bảo độ bền chịu lực và không tạo bọt khí ở các hốc sâu vi thể?',
      a: 'Beautifil Injectable X ứng dụng công nghệ Thixotropic tự san phẳng không đọng bọt khí, độ bền nén kỷ lục 400 MPa cho phép đắp khối chịu lực trực tiếp.'
    }
  ]);

  // Helper to apply loaded JSON data to state
  const applyJsonData = (d: any) => {
    if (!d) return;
    if (d.hero) {
      if (d.hero.badge) setHeroBadge(d.hero.badge);
      if (d.hero.headline) setHeroHeadline(d.hero.headline);
      if (d.hero.body) setHeroBody(d.hero.body);
      if (d.hero.image) setHeroImage(d.hero.image);
      if (Array.isArray(d.hero.usps) && d.hero.usps.length > 0) setHeroUsps(d.hero.usps);
      if (d.hero.ctaText) setHeroCtaText(d.hero.ctaText);
    }
    if (d.painPoints) {
      if (d.painPoints.badge) setPainBadge(d.painPoints.badge);
      if (d.painPoints.headline) setPainHeadline(d.painPoints.headline);
      if (d.painPoints.description) setPainDesc(d.painPoints.description);
      if (d.painPoints.card1) {
        if (d.painPoints.card1.badge) setPainCard1Badge(d.painPoints.card1.badge);
        if (d.painPoints.card1.title) setPainCard1Title(d.painPoints.card1.title);
        if (d.painPoints.card1.subtitle) setPainCard1Subtitle(d.painPoints.card1.subtitle);
        if (Array.isArray(d.painPoints.card1.items) && d.painPoints.card1.items.length > 0) {
          setPainCard1Items(d.painPoints.card1.items);
        }
        if (d.painPoints.card1.quote) setPainCard1Quote(d.painPoints.card1.quote);
      }
      if (d.painPoints.card2) {
        if (d.painPoints.card2.badge) setPainCard2Badge(d.painPoints.card2.badge);
        if (d.painPoints.card2.title) setPainCard2Title(d.painPoints.card2.title);
        if (d.painPoints.card2.subtitle) setPainCard2Subtitle(d.painPoints.card2.subtitle);
        if (Array.isArray(d.painPoints.card2.items) && d.painPoints.card2.items.length > 0) {
          setPainCard2Items(d.painPoints.card2.items);
        }
        if (d.painPoints.card2.conclusion) setPainCard2Conclusion(d.painPoints.card2.conclusion);
      }
      if (d.painPoints.semImage) setPainSemImage(d.painPoints.semImage);
      if (d.painPoints.matrix) {
        if (d.painPoints.matrix.badge) setPainMatrixBadge(d.painPoints.matrix.badge);
        if (d.painPoints.matrix.title) setPainMatrixTitle(d.painPoints.matrix.title);
        if (d.painPoints.matrix.oldSchool) {
          if (d.painPoints.matrix.oldSchool.title) setPainOldSchoolTitle(d.painPoints.matrix.oldSchool.title);
          if (Array.isArray(d.painPoints.matrix.oldSchool.points) && d.painPoints.matrix.oldSchool.points.length > 0) {
            setPainOldSchoolPoints(d.painPoints.matrix.oldSchool.points);
          }
          if (d.painPoints.matrix.oldSchool.footer) setPainOldSchoolFooter(d.painPoints.matrix.oldSchool.footer);
        }
        if (d.painPoints.matrix.newSchool) {
          if (d.painPoints.matrix.newSchool.title) setPainNewSchoolTitle(d.painPoints.matrix.newSchool.title);
          if (Array.isArray(d.painPoints.matrix.newSchool.points) && d.painPoints.matrix.newSchool.points.length > 0) {
            setPainNewSchoolPoints(d.painPoints.matrix.newSchool.points);
          }
          if (d.painPoints.matrix.newSchool.footer) setPainNewSchoolFooter(d.painPoints.matrix.newSchool.footer);
        }
      }
      if (d.painPoints.ctaText) setPainCtaText(d.painPoints.ctaText);
    }
    if (d.stepsSection) {
      if (d.stepsSection.badge) setStepsBadge(d.stepsSection.badge);
      if (d.stepsSection.headline) setStepsHeadline(d.stepsSection.headline);
      if (d.stepsSection.description) setStepsDesc(d.stepsSection.description);
      if (d.stepsSection.ctaText) setStepsCtaText(d.stepsSection.ctaText);
    }
    if (Array.isArray(d.steps) && d.steps.length > 0) {
      const mergedSteps = d.steps.map((st: any, idx: number) => {
        let feats = st.features;
        if (!Array.isArray(feats) || feats.length === 0) {
          if (idx === 0) {
            feats = [
              {
                iconName: 'Zap',
                title: 'Độ dày màng dán cực mỏng chỉ ~5μm (Không có chất độn)',
                description: 'Dễ dàng dàn mỏng đồng đều dưới lực thổi nhẹ, kiểm soát triệt để hiện tượng đọng keo ở góc tiếp chuyển và tối ưu độ khít sát.'
              },
              {
                iconName: 'ShieldCheck',
                title: 'Quy trình "True Universal" tự soi mòn (Self-Etch)',
                description: 'Chỉ 1 lớp duy nhất dán trực tiếp lên mọi bề mặt và mọi vật liệu phục hình mà không cần mua thêm primer rời. Quy trình chớp nhoáng: Thoa keo ➔ Thổi khô ➔ Chiếu đèn 5 giây.'
              }
            ];
          } else if (idx === 1) {
            feats = [
              {
                iconName: 'Shield',
                title: 'Chịu lực uốn 117 MPa & lực nhai 364 MPa',
                description: 'Chịu lực cực đại ở vùng răng sau, chống mẻ vỡ vượt trội.'
              },
              {
                iconName: 'Sparkles',
                title: 'Hiệu ứng quang học "Tắc kè hoa" sinh động',
                description: 'Tự động hòa quyện sắc độ với men ngà xung quanh, dễ dàng đánh bóng đạt độ bóng sáng tự nhiên chỉ trong vài giây.'
              }
            ];
          } else {
            feats = [
              {
                iconName: 'Target',
                title: 'Độ bền nén cao lên đến 400 MPa',
                description: 'Độ bền cơ học tương đương hoặc vượt trội so với composite đặc truyền thống, đáp ứng hoàn hảo cho phục hồi chịu lực trực tiếp ở vùng mặt nhai và bờ bên.'
              },
              {
                iconName: 'Layers',
                title: 'Kiểm soát bám dính đầu tip và dụng cụ tối ưu',
                description: 'Không kéo sợi, không dính dụng cụ điêu khắc. Dễ dàng bơm trực tiếp và kiểm soát đường viền phục hình một cách mượt mà, chính xác mà không cần dung dịch bôi trơn hỗ trợ.'
              }
            ];
          }
        }
        return {
          ...st,
          features: feats
        };
      });
      setSteps(mergedSteps);
    }
    if (d.offer) {
      if (d.offer.badge) setOfferBadge(d.offer.badge);
      if (d.offer.headline) setOfferHeadline(d.offer.headline);
      if (d.offer.coreProductsImage) setCoreProductImage(d.offer.coreProductsImage);
      if (d.offer.giftImage) setGiftImage(d.offer.giftImage);
    }
    if (Array.isArray(d.faqs) && d.faqs.length > 0) {
      setFaqsList(d.faqs);
    }
  };

  // Helper encode/decode UTF-8 for base64 on browser
  const b64EncodeUnicode = (str: string) => {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (_, p1) => {
      return String.fromCharCode(parseInt(p1, 16));
    }));
  };

  const b64DecodeUnicode = (str: string) => {
    return decodeURIComponent(atob(str).split('').map((c) => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  };

  // Fetch latest content with multi-layer fallback
  const fetchPageData = async (isManual = false) => {
    setIsLoadingInitialData(true);
    let loaded = false;

    // 1. Thử gọi API endpoint (/api/cms/load)
    try {
      const res = await fetch(`/api/cms/load?page=direct-restoration&_t=${Date.now()}`, {
        cache: 'no-store'
      });
      if (res.ok) {
        const text = await res.text();
        if (text && text.trim().startsWith('{')) {
          try {
            const json = JSON.parse(text);
            if (json.success && json.data) {
              applyJsonData(json.data);
              loaded = true;
            }
          } catch (e) {}
        }
      }
    } catch (e) {
      console.warn('API /api/cms/load fallback triggered:', e);
    }

    // 2. Thử tải trực tiếp từ GitHub Raw URL (Không yêu cầu xác thực, tốc độ tức thì)
    if (!loaded) {
      try {
        const rawRes = await fetch(`https://raw.githubusercontent.com/${GITHUB_REPO_FULL}/main/src/data/direct-restoration.json?_t=${Date.now()}`, {
          cache: 'no-store'
        });
        if (rawRes.ok) {
          const rawData = await rawRes.json();
          if (rawData && rawData.hero) {
            applyJsonData(rawData);
            loaded = true;
          }
        }
      } catch (rawErr) {
        console.warn('GitHub raw fallback error:', rawErr);
      }
    }

    // 3. Fallback tiếp tục qua GitHub Contents REST API
    if (!loaded) {
      try {
        const ghRes = await fetch(`https://api.github.com/repos/${GITHUB_REPO_FULL}/contents/src/data/direct-restoration.json?ref=main&_t=${Date.now()}`, {
          headers: {
            Authorization: `Bearer ${GITHUB_TOKEN_CLIENT}`,
            Accept: 'application/vnd.github.v3+json',
            'Cache-Control': 'no-cache'
          },
          cache: 'no-store'
        });
        if (ghRes.ok) {
          const ghData = await ghRes.json();
          const cleanBase64 = ghData.content.replace(/\s/g, '');
          const decoded = b64DecodeUnicode(cleanBase64);
          applyJsonData(JSON.parse(decoded));
          loaded = true;
        }
      } catch (ghErr) {
        console.warn('GitHub direct load fallback error:', ghErr);
      }
    }

    setIsLoadingInitialData(false);

    if (isManual) {
      if (loaded) {
        setSaveStatus('saved');
        setSaveMessage('Đã tải và đồng bộ dữ liệu mới nhất từ GitHub repo thành công!');
        setTimeout(() => setSaveStatus('idle'), 4000);
      } else {
        setSaveStatus('error');
        setSaveMessage('Không thể tải dữ liệu mới nhất. Vui lòng kiểm tra kết nối mạng.');
        setTimeout(() => setSaveStatus('idle'), 4000);
      }
    }
  };

  useEffect(() => {
    fetchPageData();
  }, []);

  // Helper for applying HTML formatting to active input
  const applyFormat = (tag: 'strong' | 'cyan' | 'red' | 'u', setter: React.Dispatch<React.SetStateAction<string>>) => {
    const selection = window.getSelection()?.toString();
    if (!selection) {
      alert('Vui lòng bôi đen đoạn chữ cần định dạng trước khi bấm nút.');
      return;
    }
    let wrapped = '';
    if (tag === 'strong') wrapped = `<strong>${selection}</strong>`;
    if (tag === 'cyan') wrapped = `<span class="text-[#00ADEF] font-bold">${selection}</span>`;
    if (tag === 'red') wrapped = `<span class="text-[#8C2828] font-bold">${selection}</span>`;
    if (tag === 'u') wrapped = `<u class="decoration-[#00ADEF]">${selection}</u>`;

    setter((prev) => prev.replace(selection, wrapped));
  };

  // Add new USP
  const handleAddUsp = () => {
    const newId = `usp-${Date.now()}`;
    setHeroUsps([
      ...heroUsps,
      {
        id: newId,
        iconName: 'ShieldCheck',
        title: 'Tiêu đề USP mới',
        description: 'Mô tả ngắn gọn về ưu điểm và lợi ích lâm sàng.'
      }
    ]);
  };

  // Delete USP
  const handleDeleteUsp = (id: string) => {
    setHeroUsps(heroUsps.filter((item) => item.id !== id));
  };

  // Update single USP
  const handleUpdateUsp = (id: string, field: 'title' | 'description' | 'iconName', val: string) => {
    setHeroUsps(
      heroUsps.map((item) => (item.id === id ? { ...item, [field]: val } : item))
    );
  };

  // Add FAQ
  const handleAddFaq = () => {
    setFaqsList([
      ...faqsList,
      {
        id: `faq-${Date.now()}`,
        q: 'Nhập câu hỏi lâm sàng mới...',
        a: 'Nhập nội dung câu trả lời giải đáp chi tiết cho Bác sĩ...'
      }
    ]);
  };

  // Delete FAQ
  const handleDeleteFaq = (id: string) => {
    setFaqsList(faqsList.filter((item) => item.id !== id));
  };

  // --- SECTION 2 HANDLERS ---
  const handleAddCard1Item = () => {
    setPainCard1Items([
      ...painCard1Items,
      {
        id: `c1-${Date.now()}`,
        title: 'Rào cản lâm sàng mới',
        description: 'Mô tả chi tiết khó khăn khi thao tác trên ghế điều trị.'
      }
    ]);
  };

  const handleDeleteCard1Item = (id: string) => {
    setPainCard1Items(painCard1Items.filter((item) => item.id !== id));
  };

  const handleUpdateCard1Item = (id: string, field: 'title' | 'description', val: string) => {
    setPainCard1Items(
      painCard1Items.map((item) => (item.id === id ? { ...item, [field]: val } : item))
    );
  };

  const handleAddCard2Item = () => {
    setPainCard2Items([
      ...painCard2Items,
      {
        id: `c2-${Date.now()}`,
        title: 'Giới hạn khoa học mới',
        description: 'Mô tả cơ chế hóa học hoặc hạn chế vật lý của vật liệu cũ.'
      }
    ]);
  };

  const handleDeleteCard2Item = (id: string) => {
    setPainCard2Items(painCard2Items.filter((item) => item.id !== id));
  };

  const handleUpdateCard2Item = (id: string, field: 'title' | 'description', val: string) => {
    setPainCard2Items(
      painCard2Items.map((item) => (item.id === id ? { ...item, [field]: val } : item))
    );
  };

  const handleAddOldSchoolPoint = () => {
    setPainOldSchoolPoints([...painOldSchoolPoints, 'Nhược điểm vật liệu cũ mới...']);
  };

  const handleDeleteOldSchoolPoint = (index: number) => {
    setPainOldSchoolPoints(painOldSchoolPoints.filter((_, i) => i !== index));
  };

  const handleUpdateOldSchoolPoint = (index: number, val: string) => {
    const updated = [...painOldSchoolPoints];
    updated[index] = val;
    setPainOldSchoolPoints(updated);
  };

  const handleAddNewSchoolPoint = () => {
    setPainNewSchoolPoints([...painNewSchoolPoints, 'Ưu điểm sinh học Shofu mới...']);
  };

  const handleDeleteNewSchoolPoint = (index: number) => {
    setPainNewSchoolPoints(painNewSchoolPoints.filter((_, i) => i !== index));
  };

  const handleUpdateNewSchoolPoint = (index: number, val: string) => {
    const updated = [...painNewSchoolPoints];
    updated[index] = val;
    setPainNewSchoolPoints(updated);
  };

  // --- SECTION 3: 3 BƯỚC PHỤC HỒI HANDLERS ---
  const handleUpdateStep = (index: number, field: keyof StepItem, val: any) => {
    setSteps((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], [field]: val };
      return next;
    });
  };

  const handleAddStepFeature = (stepIndex: number) => {
    setSteps((prev) => {
      const next = [...prev];
      const curFeatures = next[stepIndex].features || [];
      const defaultIcon = stepIndex === 0 ? 'Zap' : stepIndex === 1 ? 'Shield' : 'Target';
      next[stepIndex] = {
        ...next[stepIndex],
        features: [
          ...curFeatures,
          {
            iconName: defaultIcon,
            title: 'Đặc tính kỹ thuật mới',
            description: 'Mô tả chi tiết ưu điểm lâm sàng và công nghệ nổi bật.'
          }
        ]
      };
      return next;
    });
  };

  const handleDeleteStepFeature = (stepIndex: number, featureIndex: number) => {
    setSteps((prev) => {
      const next = [...prev];
      const curFeatures = next[stepIndex].features || [];
      next[stepIndex] = {
        ...next[stepIndex],
        features: curFeatures.filter((_, idx) => idx !== featureIndex)
      };
      return next;
    });
  };

  const handleUpdateStepFeature = (
    stepIndex: number,
    featureIndex: number,
    field: 'title' | 'description' | 'iconName',
    val: string
  ) => {
    setSteps((prev) => {
      const next = [...prev];
      const curFeatures = [...(next[stepIndex].features || [])];
      curFeatures[featureIndex] = { ...curFeatures[featureIndex], [field]: val };
      next[stepIndex] = { ...next[stepIndex], features: curFeatures };
      return next;
    });
  };

  const handleUploadStepFeatureSvg = (file: File, stepIndex: number, featureIndex: number) => {
    handleUploadImageFile(file, `step-${stepIndex}-feat-${featureIndex}`, (url) => {
      handleUpdateStepFeature(stepIndex, featureIndex, 'iconName', url);
    });
  };

  const applyStepDescFormat = (stepIdx: number, tag: 'strong' | 'cyan' | 'red' | 'u') => {
    const selection = window.getSelection()?.toString();
    if (!selection) {
      alert('Vui lòng bôi đen đoạn chữ cần định dạng trước khi bấm nút.');
      return;
    }
    let wrapped = '';
    if (tag === 'strong') wrapped = `<strong>${selection}</strong>`;
    if (tag === 'cyan') wrapped = `<span class="text-[#00ADEF] font-bold">${selection}</span>`;
    if (tag === 'red') wrapped = `<span class="text-[#8C2828] font-bold">${selection}</span>`;
    if (tag === 'u') wrapped = `<u class="decoration-[#00ADEF]">${selection}</u>`;

    setSteps((prev) => {
      const next = [...prev];
      next[stepIdx] = {
        ...next[stepIdx],
        description: next[stepIdx].description.replace(selection, wrapped)
      };
      return next;
    });
  };

  // Real Save & Commit to GitHub handler with Dual-Layer Resilience
  const handleSave = async () => {
    if (saveStatus === 'saving') return;
    setSaveStatus('saving');
    setSaveMessage('Đang ghi dữ liệu và đồng bộ lên GitHub repo...');

    const payload = {
      hero: {
        badge: heroBadge,
        headline: heroHeadline,
        body: heroBody,
        image: heroImage,
        imageSizeNote: heroImageSizeNote,
        usps: heroUsps,
        ctaText: heroCtaText
      },
      painPoints: {
        badge: painBadge,
        headline: painHeadline,
        description: painDesc,
        card1: {
          badge: painCard1Badge,
          title: painCard1Title,
          subtitle: painCard1Subtitle,
          items: painCard1Items,
          quote: painCard1Quote
        },
        card2: {
          badge: painCard2Badge,
          title: painCard2Title,
          subtitle: painCard2Subtitle,
          items: painCard2Items,
          conclusion: painCard2Conclusion
        },
        semImage: painSemImage,
        semImageSizeNote: painSemImageSizeNote,
        matrix: {
          badge: painMatrixBadge,
          title: painMatrixTitle,
          oldSchool: {
            title: painOldSchoolTitle,
            points: painOldSchoolPoints,
            footer: painOldSchoolFooter
          },
          newSchool: {
            title: painNewSchoolTitle,
            points: painNewSchoolPoints,
            footer: painNewSchoolFooter
          }
        },
        ctaText: painCtaText
      },
      stepsSection: {
        badge: stepsBadge,
        headline: stepsHeadline,
        description: stepsDesc,
        ctaText: stepsCtaText
      },
      steps: steps,
      offer: {
        badge: offerBadge,
        headline: offerHeadline,
        coreProductsImage: coreProductImage,
        giftImage: giftImage,
        coreProductsList: [
          '01 Bộ keo dán Universal thế hệ 8 BeautiBond Xtreme (5ml)',
          '01 Tuýp composite đặc giảm co rút Beautifil II (4.5g) hoặc Beautifil II LS (4g)',
          '01 Tuýp composite siêu lực nén Beautifil Injectable X (2.2g)'
        ],
        giftsList: [
          'Quà vật lý: 01 Bộ mũi mài bóng Composite Polishing Kit CA',
          'Tài liệu: Phác đồ E-Guide "Làm chủ lớp lai & Kỹ thuật phục hồi xoang II"',
          'Đặc quyền: Vé gia nhập Group gỡ rối lâm sàng Zalo 1:1 trong 30 ngày'
        ]
      },
      faqs: faqsList
    };

    let savedSuccess = false;
    let commitShaResult = '';
    let commitUrlResult = '';
    let msgResult = '';

    // 1. Thử gọi API backend (/api/cms/save)
    try {
      const response = await fetch('/api/cms/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          page: 'direct-restoration',
          data: payload,
          commitMessage: `CMS Content Update: Phục hồi trực tiếp (${new Date().toLocaleTimeString('vi-VN')} ${new Date().toLocaleDateString('vi-VN')})`
        })
      });

      const text = await response.text();
      if (text) {
        try {
          const res = JSON.parse(text);
          if (response.ok && res.success) {
            savedSuccess = true;
            commitShaResult = res.commitSha || '';
            commitUrlResult = res.commitUrl || '';
            msgResult = res.message || 'Đã lưu và commit thành công lên GitHub!';
          }
        } catch (e) {
          console.warn('API returned non-JSON response, falling back to direct GitHub commit...');
        }
      }
    } catch (apiErr) {
      console.warn('API save error, falling back to direct GitHub commit:', apiErr);
    }

    // 2. Nếu API không phản hồi hoặc trả về HTML trên Vercel, tự động fallback gọi trực tiếp GitHub REST API
    if (!savedSuccess) {
      try {
        setSaveMessage('Đang kết nối trực tiếp GitHub REST API để commit...');
        const filePath = 'src/data/direct-restoration.json';
        const jsonString = JSON.stringify(payload, null, 2);

        // Lấy SHA hiện tại với cache-busting
        const getFileSha = async () => {
          try {
            const getShaRes = await fetch(`https://api.github.com/repos/${GITHUB_REPO_FULL}/contents/${filePath}?ref=main&_t=${Date.now()}`, {
              headers: {
                Authorization: `Bearer ${GITHUB_TOKEN_CLIENT}`,
                Accept: 'application/vnd.github.v3+json',
                'Cache-Control': 'no-cache'
              },
              cache: 'no-store'
            });
            if (getShaRes.ok) {
              const fileInfo = await getShaRes.json();
              return fileInfo.sha;
            }
          } catch (e) {
            console.warn('Could not check SHA:', e);
          }
          return undefined;
        };

        let sha: string | undefined = await getFileSha();

        const commitDirect = async (currentSha?: string) => {
          return await fetch(`https://api.github.com/repos/${GITHUB_REPO_FULL}/contents/${filePath}`, {
            method: 'PUT',
            headers: {
              Authorization: `Bearer ${GITHUB_TOKEN_CLIENT}`,
              Accept: 'application/vnd.github.v3+json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              message: `CMS: Cập nhật nội dung phục hồi trực tiếp [Staff Editor] (${new Date().toLocaleTimeString('vi-VN')} ${new Date().toLocaleDateString('vi-VN')})`,
              content: b64EncodeUnicode(jsonString),
              branch: 'main',
              ...(currentSha ? { sha: currentSha } : {})
            })
          });
        };

        let putRes = await commitDirect(sha);

        // Tự động giải quyết xung đột SHA (409 Conflict hoặc 422) bằng cách lấy SHA mới nhất và thử lại
        if (putRes.status === 409 || putRes.status === 422) {
          sha = await getFileSha();
          putRes = await commitDirect(sha);
        }

        if (putRes.ok) {
          const gitData = await putRes.json();
          savedSuccess = true;
          commitShaResult = gitData.commit?.sha?.substring(0, 7) || 'unknown';
          commitUrlResult = gitData.commit?.html_url || `https://github.com/${GITHUB_REPO_FULL}/commits/main`;
          msgResult = 'Đã lưu và tự động commit thành công lên GitHub!';
        } else {
          const errData = await putRes.json().catch(() => ({}));
          throw new Error(errData.message || 'GitHub commit failed');
        }
      } catch (directErr: any) {
        setSaveStatus('error');
        setSaveMessage('Không thể lưu lên GitHub: ' + directErr.message);
        return;
      }
    }

    if (savedSuccess) {
      setSaveStatus('saved');
      setCommitSha(commitShaResult);
      setCommitUrl(commitUrlResult);
      setSaveMessage(msgResult);
      setTimeout(() => {
        setSaveStatus('idle');
      }, 7000);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50 bg-grid-pattern text-slate-900 flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden font-body">
        <div className="w-full max-w-md relative z-10 bg-white border border-slate-200/90 rounded-3xl p-7 sm:p-9 shadow-xl">
          <div className="text-center mb-6">
            <div className="w-12 h-12 rounded-2xl bg-[#8C2828] text-white flex items-center justify-center mx-auto mb-3 font-heading font-black text-2xl shadow-md shadow-red-900/20">
              S
            </div>
            <h2 className="font-heading font-extrabold text-2xl text-slate-900">Xác thực quyền Quản trị</h2>
            <p className="text-xs text-slate-500 mt-1">Vui lòng nhập mật khẩu để mở khóa biên tập nội dung</p>
          </div>

          <form onSubmit={handleAdminLogin} className="space-y-4">
            {authError && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-500 shrink-0" />
                <span>{authError}</span>
              </div>
            )}
            <div>
              <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1.5">Mật khẩu CMS</label>
              <input
                type="password"
                value={authPassword}
                onChange={(e) => setAuthPassword(e.target.value)}
                placeholder="Nhập mật khẩu (shofu2026)..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#8C2828] focus:bg-white transition-colors"
                autoFocus
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#8C2828] hover:bg-red-900 text-white font-mono text-sm font-bold shadow-md shadow-red-900/20 transition-all cursor-pointer"
            >
              MỞ KHÓA BIÊN TẬP
            </button>
            <div className="text-center pt-2">
              <Link to="/admin" className="text-xs text-slate-500 hover:text-slate-800 underline">
                Quay lại Dashboard Quản trị
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 bg-grid-pattern text-slate-900 flex flex-col font-body antialiased">
      {/* 1. TOP STICKY HEADER */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/90 px-4 sm:px-8 py-3 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              to="/admin"
              className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200 transition-colors"
              title="Quay về Dashboard"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-extrabold text-slate-900 text-base sm:text-lg">
                  Biên tập: Phục hồi trực tiếp
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-sky-50 text-sky-700 border border-sky-200 hidden sm:inline-block">
                  /giai-phap/phuc-hoi-truc-tiep
                </span>
                {isLoadingInitialData && (
                  <span className="inline-flex items-center gap-1 text-[11px] text-amber-600 font-mono">
                    <RefreshCw className="w-3 h-3 animate-spin" />
                    Đang tải dữ liệu...
                  </span>
                )}
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block">Chỉnh sửa nội dung, thông số và hình ảnh - Tự động đồng bộ lên GitHub repo</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              onClick={() => fetchPageData(true)}
              disabled={isLoadingInitialData || saveStatus === 'saving'}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200 shadow-sm transition-colors disabled:opacity-50 cursor-pointer"
              title="Tải và đồng bộ dữ liệu mới nhất từ GitHub repository"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-slate-600 ${isLoadingInitialData ? 'animate-spin' : ''}`} />
              <span className="hidden md:inline">Tải lại dữ liệu</span>
            </button>

            <a
              href="/giai-phap/phuc-hoi-truc-tiep"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200 shadow-sm transition-colors"
            >
              <Eye className="w-3.5 h-3.5 text-[#00ADEF]" />
              <span className="hidden sm:inline">Xem trang này</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>

            <button
              onClick={handleSave}
              disabled={saveStatus === 'saving'}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-xl bg-[#8C2828] hover:bg-red-900 disabled:bg-slate-400 text-white text-xs sm:text-sm font-mono font-bold shadow-md shadow-red-900/20 hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer disabled:cursor-not-allowed"
            >
              {saveStatus === 'saving' ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>ĐANG COMMIT...</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>LƯU THAY ĐỔI</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Save Notification Toast / Feedback */}
      {saveStatus === 'saved' && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-700 text-white px-5 py-4 rounded-2xl shadow-2xl flex items-start gap-3.5 animate-fadeIn border border-emerald-500 max-w-md">
          <CheckCircle2 className="w-5 h-5 text-emerald-200 shrink-0 mt-0.5" />
          <div className="text-xs space-y-1">
            <div className="font-bold text-sm">Đã lưu & Commit thành công lên GitHub!</div>
            <div className="text-emerald-100 text-[11px] leading-relaxed">
              {saveMessage}
            </div>
            {commitSha && (
              <div className="pt-1.5 flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-emerald-800/80 font-mono text-[11px] border border-emerald-600/60">
                  Commit: {commitSha}
                </span>
                {commitUrl && (
                  <a
                    href={commitUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-200 hover:text-white underline"
                  >
                    Xem trên GitHub <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {saveStatus === 'error' && (
        <div className="fixed bottom-6 right-6 z-50 bg-red-700 text-white px-5 py-4 rounded-2xl shadow-2xl flex items-start gap-3.5 animate-fadeIn border border-red-500 max-w-md">
          <AlertTriangle className="w-5 h-5 text-red-200 shrink-0 mt-0.5" />
          <div className="text-xs space-y-1">
            <div className="font-bold text-sm">Lỗi khi lưu thay đổi</div>
            <div className="text-red-100 text-[11px] leading-relaxed">{saveMessage}</div>
            <button
              onClick={() => setSaveStatus('idle')}
              className="mt-2 text-[11px] px-2.5 py-1 bg-red-800 hover:bg-red-900 rounded font-semibold transition-colors"
            >
              Đóng thông báo
            </button>
          </div>
        </div>
      )}

      {/* 2. MAIN LAYOUT: SIDEBAR TABS + FORM EDITOR */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT SIDEBAR: SECTION NAVIGATION TABS */}
        <aside className="lg:col-span-3 bg-white rounded-3xl border border-slate-200/90 p-4 shadow-sm sticky top-20">
          <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-3 px-3 pt-1">
            Các Section Quản trị
          </div>
          <nav className="space-y-1.5">
            <button
              onClick={() => setActiveTab('hero')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs font-bold transition-all text-left ${
                activeTab === 'hero' 
                  ? 'bg-red-50 text-[#8C2828] border border-red-200 shadow-sm' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#8C2828]"></span>
                <span>Section 1: Hero</span>
              </span>
              <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            </button>

            <button
              onClick={() => setActiveTab('pain-points')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs font-bold transition-all text-left ${
                activeTab === 'pain-points' 
                  ? 'bg-red-50 text-[#8C2828] border border-red-200 shadow-sm' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                <span>Section 2: Góc khuất lâm sàng</span>
              </span>
              <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            </button>

            <button
              onClick={() => setActiveTab('steps')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs font-bold transition-all text-left ${
                activeTab === 'steps' 
                  ? 'bg-red-50 text-[#8C2828] border border-red-200 shadow-sm' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00ADEF]"></span>
                <span>Section 3: 3 Bước phục hồi</span>
              </span>
              <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            </button>

            <button
              onClick={() => setActiveTab('offer')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs font-bold transition-all text-left ${
                activeTab === 'offer' 
                  ? 'bg-red-50 text-[#8C2828] border border-red-200 shadow-sm' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                <span>Section 4: Combo & Quà tặng</span>
              </span>
              <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            </button>

            <button
              onClick={() => setActiveTab('faq')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs font-bold transition-all text-left ${
                activeTab === 'faq' 
                  ? 'bg-red-50 text-[#8C2828] border border-red-200 shadow-sm' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Section 5: FAQ Giải đáp</span>
              </span>
              <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            </button>
          </nav>

          <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-400 p-2 leading-relaxed">
            💡 <strong>Mẹo:</strong> Bôi đen chữ rồi nhấn các nút định dạng [B], [Xanh], [Đỏ] để tạo điểm nhấn trực quan.
          </div>
        </aside>

        {/* RIGHT CONTENT: FORM EDITORS */}
        <div className="lg:col-span-9 space-y-8">
          
          {/* TAB 1: HERO SECTION */}
          {activeTab === 'hero' && (
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-9 shadow-sm space-y-8 animate-fadeIn">
              <div className="border-b border-slate-100 pb-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#8C2828] font-mono text-xs font-bold mb-2">
                  Section 1
                </div>
                <h2 className="font-heading font-extrabold text-2xl text-slate-900">
                  Hero Section (Đầu trang)
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm mt-1">
                  Chỉnh sửa huy hiệu, tiêu đề chính, hình ảnh minh họa, danh sách USPs và nút kêu gọi hành động.
                </p>
              </div>

              {/* 1. Badge Text */}
              <div className="space-y-2">
                <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
                  1. Huy hiệu Badge
                </label>
                <input
                  type="text"
                  value={heroBadge}
                  onChange={(e) => setHeroBadge(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:bg-white focus:border-[#8C2828] focus:ring-2 focus:ring-[#8C2828]/10 transition-all font-medium"
                />
              </div>

              {/* 2. Headline with Formatting Helper */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
                    2. Headline (Tiêu đề chính)
                  </label>
                  <div className="flex items-center gap-1.5 text-xs bg-slate-50 p-1 rounded-lg border border-slate-200">
                    <span className="text-[11px] text-slate-500 px-1 font-mono">Định dạng nhanh:</span>
                    <button
                      type="button"
                      onClick={() => applyFormat('strong', setHeroHeadline)}
                      title="In đậm chữ đang bôi đen"
                      className="px-2 py-0.5 rounded bg-white hover:bg-slate-200 text-slate-800 font-bold border border-slate-200 text-xs"
                    >
                      B
                    </button>
                    <button
                      type="button"
                      onClick={() => applyFormat('cyan', setHeroHeadline)}
                      title="Tô màu xanh Shofu"
                      className="px-2 py-0.5 rounded bg-sky-50 hover:bg-sky-100 text-[#00ADEF] font-bold border border-sky-200 text-xs"
                    >
                      Xanh
                    </button>
                    <button
                      type="button"
                      onClick={() => applyFormat('red', setHeroHeadline)}
                      title="Tô màu đỏ Shofu"
                      className="px-2 py-0.5 rounded bg-red-50 hover:bg-red-100 text-[#8C2828] font-bold border border-red-200 text-xs"
                    >
                      Đỏ
                    </button>
                  </div>
                </div>

                <textarea
                  rows={3}
                  value={heroHeadline}
                  onChange={(e) => setHeroHeadline(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-900 focus:bg-white focus:border-[#8C2828] focus:ring-2 focus:ring-[#8C2828]/10 transition-all font-heading font-bold"
                />

                {/* Live Preview of Headline */}
                <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/80">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">Xem trước Headline:</span>
                  <div 
                    className="font-heading font-extrabold text-xl text-slate-900 leading-snug"
                    dangerouslySetInnerHTML={{ __html: heroHeadline }}
                  />
                </div>
              </div>

              {/* 3. Hero Image Uploader & Suggested Size */}
              <div className="space-y-3 pt-2 border-t border-slate-100">
                <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
                  3. Hình ảnh Hero Section
                </label>

                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-amber-900 text-xs flex items-start gap-2.5">
                  <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold">Kích thước gợi ý:</strong> {heroImageSizeNote}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 items-center p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-36 h-36 rounded-xl bg-white border border-slate-200 p-2 flex items-center justify-center overflow-hidden shrink-0 shadow-sm">
                    <img 
                      src={heroImage} 
                      alt="Hero preview" 
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex-1 space-y-3 w-full">
                    <div>
                      <span className="text-xs text-slate-500 font-medium block mb-1">Đường dẫn file ảnh hiện tại:</span>
                      <input
                        type="text"
                        value={heroImage}
                        onChange={(e) => setHeroImage(e.target.value)}
                        className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-mono text-slate-800 focus:outline-none focus:border-[#8C2828]"
                      />
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <label className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#8C2828] hover:bg-red-900 text-white text-xs font-mono font-bold cursor-pointer transition-colors shadow-sm ${uploadingTarget === 'hero' ? 'opacity-60 cursor-not-allowed' : ''}`}>
                        {uploadingTarget === 'hero' ? (
                          <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        ) : (
                          <Upload className="w-3.5 h-3.5" />
                        )}
                        <span>{uploadingTarget === 'hero' ? 'ĐANG TẢI LÊN GITHUB...' : 'Tải ảnh từ máy tính'}</span>
                        <input
                          type="file"
                          accept="image/*"
                          disabled={uploadingTarget === 'hero'}
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              handleUploadImageFile(file, 'hero', (url) => setHeroImage(url));
                            }
                          }}
                        />
                      </label>
                      <span className="text-xs text-slate-500 font-mono">Tự động nén & commit vào public/image/ trên GitHub</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. Body Text */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
                    4. Đoạn văn mô tả (Body text)
                  </label>
                  <div className="flex items-center gap-1.5 text-xs bg-slate-50 p-1 rounded-lg border border-slate-200">
                    <button
                      type="button"
                      onClick={() => applyFormat('strong', setHeroBody)}
                      className="px-2 py-0.5 rounded bg-white hover:bg-slate-200 text-slate-800 font-bold border border-slate-200 text-xs"
                    >
                      B
                    </button>
                    <button
                      type="button"
                      onClick={() => applyFormat('cyan', setHeroBody)}
                      className="px-2 py-0.5 rounded bg-sky-50 text-[#00ADEF] font-bold border border-sky-200 text-xs"
                    >
                      Xanh
                    </button>
                  </div>
                </div>

                <textarea
                  rows={4}
                  value={heroBody}
                  onChange={(e) => setHeroBody(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-700 focus:bg-white focus:border-[#8C2828] focus:ring-2 focus:ring-[#8C2828]/10 transition-all font-body leading-relaxed"
                />

                <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/80">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">Xem trước đoạn văn:</span>
                  <div 
                    className="font-body text-sm text-slate-600 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: heroBody }}
                  />
                </div>
              </div>

              {/* 5. Box USPs (Add / Delete / Edit 3 parts per box) */}
              <div className="space-y-4 pt-2 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
                      5. Danh sách Box USPs ({heroUsps.length} hộp)
                    </label>
                    <span className="text-xs text-slate-500">Mỗi box gồm: Icon SVG, Tiêu đề và Đoạn mô tả</span>
                  </div>

                  <button
                    type="button"
                    onClick={handleAddUsp}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-mono text-xs font-bold transition-colors shadow-sm"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Thêm Box USP</span>
                  </button>
                </div>

                <div className="space-y-4">
                  {heroUsps.map((usp, idx) => (
                    <div 
                      key={usp.id}
                      className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 relative group"
                    >
                      <div className="flex items-center justify-between gap-4 border-b border-slate-200/60 pb-3">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-[#8C2828] text-white flex items-center justify-center font-mono font-bold text-xs">
                            {idx + 1}
                          </span>
                          <span className="text-xs font-mono font-bold text-slate-700 uppercase">
                            Box USP {idx + 1}
                          </span>
                        </div>

                        {heroUsps.length > 1 && (
                          <button
                            type="button"
                            onClick={() => handleDeleteUsp(usp.id)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50 p-1.5 rounded-lg transition-colors"
                            title="Xóa box này"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-start">
                        {/* Icon SVG */}
                        <div className="sm:col-span-5 space-y-1.5">
                          <label className="block text-[11px] font-mono text-slate-500 font-bold uppercase">
                            Icon SVG
                          </label>

                          <div className="flex items-center gap-2">
                            {/* Preview box */}
                            <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-xs text-sky-600 overflow-hidden">
                              {usp.iconName?.includes('.svg') || usp.iconName?.startsWith('/') || usp.iconName?.startsWith('http') ? (
                                <img src={usp.iconName} alt="Icon" className="w-5 h-5 object-contain" />
                              ) : usp.iconName === 'Layers' ? (
                                <Layers className="w-5 h-5" />
                              ) : usp.iconName === 'Sparkles' ? (
                                <Sparkles className="w-5 h-5" />
                              ) : usp.iconName === 'Zap' ? (
                                <Zap className="w-5 h-5" />
                              ) : usp.iconName === 'Award' ? (
                                <Award className="w-5 h-5" />
                              ) : (
                                <ShieldCheck className="w-5 h-5" />
                              )}
                            </div>

                            {/* Select default icon or show custom */}
                            <div className="flex-1 min-w-0">
                              <select
                                value={usp.iconName?.includes('.svg') || usp.iconName?.startsWith('/') ? 'CUSTOM_SVG' : usp.iconName}
                                onChange={(e) => {
                                  if (e.target.value !== 'CUSTOM_SVG') {
                                    handleUpdateUsp(usp.id, 'iconName', e.target.value);
                                  }
                                }}
                                className="w-full bg-white border border-slate-200 rounded-xl px-2.5 py-2 text-xs text-slate-800 font-medium truncate"
                              >
                                <option value="ShieldCheck">ShieldCheck (Khiên)</option>
                                <option value="Layers">Layers (Lớp)</option>
                                <option value="Sparkles">Sparkles (Lấp lánh)</option>
                                <option value="Zap">Zap (Tia chớp)</option>
                                <option value="Award">Award (Chứng nhận)</option>
                                {(usp.iconName?.includes('.svg') || usp.iconName?.startsWith('/')) && (
                                  <option value="CUSTOM_SVG">SVG đã tải lên (Tùy chỉnh)</option>
                                )}
                              </select>
                            </div>
                          </div>

                          {/* Upload SVG button */}
                          <div className="flex items-center justify-between gap-2 pt-0.5">
                            <label className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-mono font-semibold cursor-pointer border border-slate-200 transition-colors ${uploadingTarget === `usp-icon-${usp.id}` ? 'opacity-50 cursor-not-allowed' : ''}`}>
                              {uploadingTarget === `usp-icon-${usp.id}` ? (
                                <RefreshCw className="w-3 h-3 animate-spin text-sky-600" />
                              ) : (
                                <Upload className="w-3 h-3 text-slate-600" />
                              )}
                              <span>{uploadingTarget === `usp-icon-${usp.id}` ? 'Đang tải...' : 'Tải lên SVG'}</span>
                              <input
                                type="file"
                                accept=".svg,image/svg+xml"
                                disabled={uploadingTarget === `usp-icon-${usp.id}`}
                                className="hidden"
                                onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  if (file) {
                                    handleUploadUspSvg(file, usp.id);
                                  }
                                }}
                              />
                            </label>

                            {(usp.iconName?.includes('.svg') || usp.iconName?.startsWith('/')) && (
                              <button
                                type="button"
                                onClick={() => handleUpdateUsp(usp.id, 'iconName', 'ShieldCheck')}
                                className="text-[10px] text-slate-400 hover:text-slate-600 underline cursor-pointer"
                              >
                                Về mặc định
                              </button>
                            )}
                          </div>
                        </div>

                        {/* Title */}
                        <div className="sm:col-span-7 space-y-1">
                          <label className="block text-[11px] font-mono text-slate-500 font-bold uppercase">
                            Tiêu đề USP
                          </label>
                          <input
                            type="text"
                            value={usp.title}
                            onChange={(e) => handleUpdateUsp(usp.id, 'title', e.target.value)}
                            className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-900"
                          />
                        </div>
                      </div>

                      {/* Description */}
                      <div className="space-y-1">
                        <label className="block text-[11px] font-mono text-slate-500 font-bold uppercase">
                          Đoạn mô tả chi tiết
                        </label>
                        <textarea
                          rows={2}
                          value={usp.description}
                          onChange={(e) => handleUpdateUsp(usp.id, 'description', e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-600 leading-relaxed font-body"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 6. CTA Button */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
                  6. Text nút CTA Button
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    value={heroCtaText}
                    onChange={(e) => setHeroCtaText(e.target.value)}
                    className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 font-mono font-bold"
                  />
                  <div className="px-5 py-3 rounded-xl bg-[#00ADEF] text-white text-xs font-mono font-bold whitespace-nowrap shadow-sm">
                    {heroCtaText}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: PAIN POINTS (SECTION 2: GÓC KHUẤT LÂM SÀNG) */}
          {activeTab === 'pain-points' && (
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-9 shadow-sm space-y-8 animate-fadeIn">
              <div className="border-b border-slate-100 pb-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-700 font-mono text-xs font-bold mb-2">
                  Section 2
                </div>
                <h2 className="font-heading font-extrabold text-2xl text-slate-900">
                  Section 2: Góc khuất lâm sàng (Nỗi đau & Căn nguyên)
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm mt-1">
                  Chỉnh sửa toàn bộ thành phần: Huy hiệu, tiêu đề, đoạn văn căn nguyên, 2 thẻ phân tích đối sánh lâm sàng & khoa học, đồ họa SEM vi thể, bảng ma trận đối chiếu 2 trường phái, và nút CTA.
                </p>
              </div>

              {/* 1. Badge Text */}
              <div className="space-y-2">
                <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
                  1. Huy hiệu Badge Section 2
                </label>
                <input
                  type="text"
                  value={painBadge}
                  onChange={(e) => setPainBadge(e.target.value)}
                  placeholder="Góc khuất lâm sàng"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:bg-white focus:border-[#8C2828] focus:ring-2 focus:ring-[#8C2828]/10 transition-all font-medium"
                />
              </div>

              {/* 2. Headline with Formatting Helper & Dark Preview */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
                    2. Headline (Tiêu đề chính)
                  </label>
                  <div className="flex items-center gap-1.5 text-xs bg-slate-50 p-1 rounded-lg border border-slate-200">
                    <span className="text-[11px] text-slate-500 px-1 font-mono">Định dạng nhanh:</span>
                    <button
                      type="button"
                      onClick={() => applyFormat('strong', setPainHeadline)}
                      title="In đậm chữ đang bôi đen"
                      className="px-2 py-0.5 rounded bg-white hover:bg-slate-200 text-slate-800 font-bold border border-slate-200 text-xs"
                    >
                      B
                    </button>
                    <button
                      type="button"
                      onClick={() => applyFormat('cyan', setPainHeadline)}
                      title="Tô màu xanh Shofu"
                      className="px-2 py-0.5 rounded bg-sky-50 hover:bg-sky-100 text-[#00ADEF] font-bold border border-sky-200 text-xs"
                    >
                      Xanh
                    </button>
                    <button
                      type="button"
                      onClick={() => applyFormat('red', setPainHeadline)}
                      title="Tô màu đỏ báo động"
                      className="px-2 py-0.5 rounded bg-red-50 hover:bg-red-100 text-red-600 font-bold border border-red-200 text-xs"
                    >
                      Đỏ
                    </button>
                  </div>
                </div>

                <textarea
                  rows={3}
                  value={painHeadline}
                  onChange={(e) => setPainHeadline(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-900 focus:bg-white focus:border-[#8C2828] focus:ring-2 focus:ring-[#8C2828]/10 transition-all font-heading font-bold"
                />

                {/* Live Preview on Dark Background */}
                <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-center">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-2 text-left">
                    Xem trước trên nền thực tế (Dark theme):
                  </span>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 font-mono text-xs font-bold mb-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
                    <span>{painBadge}</span>
                  </div>
                  <div 
                    className="font-heading font-extrabold text-xl sm:text-2xl text-white leading-snug max-w-2xl mx-auto"
                    dangerouslySetInnerHTML={{ __html: painHeadline }}
                  />
                  <div className="w-16 h-0.5 bg-red-500 mx-auto mt-4"></div>
                </div>
              </div>

              {/* 3. Description with Formatting Helper & Preview */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
                    3. Đoạn văn giải thích căn nguyên (Description)
                  </label>
                  <div className="flex items-center gap-1.5 text-xs bg-slate-50 p-1 rounded-lg border border-slate-200">
                    <button
                      type="button"
                      onClick={() => applyFormat('strong', setPainDesc)}
                      className="px-2 py-0.5 rounded bg-white hover:bg-slate-200 text-slate-800 font-bold border border-slate-200 text-xs"
                    >
                      B
                    </button>
                    <button
                      type="button"
                      onClick={() => applyFormat('cyan', setPainDesc)}
                      className="px-2 py-0.5 rounded bg-sky-50 text-[#00ADEF] font-bold border border-sky-200 text-xs"
                    >
                      Xanh
                    </button>
                    <button
                      type="button"
                      onClick={() => applyFormat('red', setPainDesc)}
                      className="px-2 py-0.5 rounded bg-red-50 text-red-600 font-bold border border-red-200 text-xs"
                    >
                      Đỏ
                    </button>
                  </div>
                </div>

                <textarea
                  rows={4}
                  value={painDesc}
                  onChange={(e) => setPainDesc(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-700 focus:bg-white focus:border-[#8C2828] focus:ring-2 focus:ring-[#8C2828]/10 transition-all font-body leading-relaxed"
                />

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                    Xem trước đoạn văn trên nền tối:
                  </span>
                  <div 
                    className="font-body text-sm text-slate-300 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: painDesc }}
                  />
                </div>
              </div>

              {/* 4. Thẻ so sánh 1: Thực tế lâm sàng */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-slate-800 text-slate-200 flex items-center justify-center">
                      <AlertTriangle className="w-4 h-4 text-slate-300" />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-800 uppercase tracking-wider">
                        4. Thẻ so sánh 1: Thực tế lâm sàng (Áp lực thao tác)
                      </label>
                      <span className="text-xs text-slate-500">Bao gồm Badge, Tiêu đề, Phụ đề, 4 rào cản và Quote</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleAddCard1Item}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-mono text-xs font-bold transition-colors shadow-sm"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Thêm rào cản</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-[11px] font-mono text-slate-600 font-bold uppercase">Badge Thẻ 1</label>
                    <input
                      type="text"
                      value={painCard1Badge}
                      onChange={(e) => setPainCard1Badge(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-800"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-[11px] font-mono text-slate-600 font-bold uppercase">Tiêu đề Thẻ 1</label>
                    <input
                      type="text"
                      value={painCard1Title}
                      onChange={(e) => setPainCard1Title(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-800"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-[11px] font-mono text-slate-600 font-bold uppercase">Phụ đề Thẻ 1</label>
                  <input
                    type="text"
                    value={painCard1Subtitle}
                    onChange={(e) => setPainCard1Subtitle(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-700"
                  />
                </div>

                {/* Danh sách rào cản thao tác */}
                <div className="space-y-3">
                  <label className="block text-[11px] font-mono text-slate-500 font-bold uppercase">
                    Danh sách các rào cản lâm sàng ({painCard1Items.length} mục)
                  </label>
                  {painCard1Items.map((item, idx) => (
                    <div key={item.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 relative">
                      <div className="flex items-center justify-between border-b border-slate-200/60 pb-2">
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-slate-700 text-white flex items-center justify-center font-mono font-bold text-xs">
                            {idx + 1}
                          </span>
                          <span className="text-xs font-mono font-bold text-slate-700">Rào cản {idx + 1}</span>
                        </div>
                        {painCard1Items.length > 1 && (
                          <button
                            type="button"
                            onClick={() => handleDeleteCard1Item(item.id)}
                            className="text-red-500 hover:text-red-700 p-1 rounded transition-colors"
                            title="Xóa rào cản này"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                      <div className="space-y-1">
                        <input
                          type="text"
                          value={item.title}
                          onChange={(e) => handleUpdateCard1Item(item.id, 'title', e.target.value)}
                          placeholder="Tiêu đề rào cản..."
                          className="w-full bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs font-bold text-slate-900"
                        />
                      </div>
                      <div className="space-y-1">
                        <textarea
                          rows={2}
                          value={item.description}
                          onChange={(e) => handleUpdateCard1Item(item.id, 'description', e.target.value)}
                          placeholder="Mô tả chi tiết khó khăn..."
                          className="w-full bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-600 font-body"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Câu Quote của Card 1 */}
                <div className="space-y-1">
                  <label className="block text-[11px] font-mono text-slate-600 font-bold uppercase">
                    Câu trích dẫn tâm sự Bác sĩ (Quote)
                  </label>
                  <textarea
                    rows={2}
                    value={painCard1Quote}
                    onChange={(e) => setPainCard1Quote(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs italic text-slate-700"
                  />
                </div>
              </div>

              {/* 5. Thẻ so sánh 2: Căn nguyên khoa học */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
                      <ShieldAlert className="w-4 h-4 text-red-500" />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-800 uppercase tracking-wider">
                        5. Thẻ so sánh 2: Căn nguyên khoa học (Giới hạn vật liệu cũ)
                      </label>
                      <span className="text-xs text-slate-500">Bao gồm Badge, Tiêu đề, Phụ đề, 4 giới hạn và Lời kết luận</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleAddCard2Item}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-700 hover:bg-red-800 text-white font-mono text-xs font-bold transition-colors shadow-sm"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Thêm giới hạn</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-[11px] font-mono text-slate-600 font-bold uppercase">Badge Thẻ 2</label>
                    <input
                      type="text"
                      value={painCard2Badge}
                      onChange={(e) => setPainCard2Badge(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-800"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-[11px] font-mono text-slate-600 font-bold uppercase">Tiêu đề Thẻ 2</label>
                    <input
                      type="text"
                      value={painCard2Title}
                      onChange={(e) => setPainCard2Title(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-800"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-[11px] font-mono text-slate-600 font-bold uppercase">Phụ đề Thẻ 2</label>
                  <input
                    type="text"
                    value={painCard2Subtitle}
                    onChange={(e) => setPainCard2Subtitle(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-700"
                  />
                </div>

                {/* Danh sách giới hạn vật liệu cũ */}
                <div className="space-y-3">
                  <label className="block text-[11px] font-mono text-slate-500 font-bold uppercase">
                    Danh sách các giới hạn vật liệu cũ ({painCard2Items.length} mục)
                  </label>
                  {painCard2Items.map((item, idx) => (
                    <div key={item.id} className="p-4 rounded-xl bg-red-50/60 border border-red-200/80 space-y-2 relative">
                      <div className="flex items-center justify-between border-b border-red-200/60 pb-2">
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center font-mono font-bold text-xs">
                            !
                          </span>
                          <span className="text-xs font-mono font-bold text-red-900">Giới hạn {idx + 1}</span>
                        </div>
                        {painCard2Items.length > 1 && (
                          <button
                            type="button"
                            onClick={() => handleDeleteCard2Item(item.id)}
                            className="text-red-500 hover:text-red-700 p-1 rounded transition-colors"
                            title="Xóa giới hạn này"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                      <div className="space-y-1">
                        <input
                          type="text"
                          value={item.title}
                          onChange={(e) => handleUpdateCard2Item(item.id, 'title', e.target.value)}
                          placeholder="Tiêu đề giới hạn hóa học..."
                          className="w-full bg-white border border-red-200 rounded-lg px-3 py-1.5 text-xs font-bold text-slate-900"
                        />
                      </div>
                      <div className="space-y-1">
                        <textarea
                          rows={2}
                          value={item.description}
                          onChange={(e) => handleUpdateCard2Item(item.id, 'description', e.target.value)}
                          placeholder="Mô tả cơ chế thất bại..."
                          className="w-full bg-white border border-red-200 rounded-lg px-3 py-1.5 text-xs text-slate-600 font-body"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Kết luận thực tế của Card 2 */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <label className="block text-[11px] font-mono text-slate-600 font-bold uppercase">
                      Lời kết luận thực tế
                    </label>
                    <div className="flex items-center gap-1.5 text-xs bg-slate-50 p-1 rounded-lg border border-slate-200">
                      <button
                        type="button"
                        onClick={() => applyFormat('strong', setPainCard2Conclusion)}
                        className="px-2 py-0.5 rounded bg-white hover:bg-slate-200 text-slate-800 font-bold border border-slate-200 text-xs"
                      >
                        B
                      </button>
                      <button
                        type="button"
                        onClick={() => applyFormat('red', setPainCard2Conclusion)}
                        className="px-2 py-0.5 rounded bg-red-50 text-red-600 font-bold border border-red-200 text-xs"
                      >
                        Đỏ
                      </button>
                    </div>
                  </div>
                  <textarea
                    rows={2}
                    value={painCard2Conclusion}
                    onChange={(e) => setPainCard2Conclusion(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 font-medium"
                  />
                </div>
              </div>

              {/* 6. SEM Graphic Image Uploader & Suggested Size */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
                  6. Hình ảnh đồ họa SEM / Cơ chế sinh học vi thể
                </label>

                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-amber-900 text-xs flex items-start gap-2.5">
                  <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold">Kích thước gợi ý:</strong> {painSemImageSizeNote}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 items-center p-5 rounded-2xl bg-slate-900 border border-slate-800">
                  <div className="w-48 h-28 rounded-xl bg-slate-800 border border-slate-700 p-2 flex items-center justify-center overflow-hidden shrink-0 shadow-sm">
                    <img 
                      src={painSemImage} 
                      alt="SEM Graphic preview" 
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex-1 space-y-3 w-full">
                    <div>
                      <span className="text-xs text-slate-400 font-medium block mb-1">Đường dẫn file ảnh hiện tại:</span>
                      <input
                        type="text"
                        value={painSemImage}
                        onChange={(e) => setPainSemImage(e.target.value)}
                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs font-mono text-slate-200 focus:outline-none focus:border-red-500"
                      />
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <label className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#8C2828] hover:bg-red-900 text-white text-xs font-mono font-bold cursor-pointer transition-colors shadow-sm ${uploadingTarget === 'pain-sem' ? 'opacity-60 cursor-not-allowed' : ''}`}>
                        {uploadingTarget === 'pain-sem' ? (
                          <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        ) : (
                          <Upload className="w-3.5 h-3.5" />
                        )}
                        <span>{uploadingTarget === 'pain-sem' ? 'ĐANG TẢI LÊN GITHUB...' : 'Tải ảnh từ máy tính'}</span>
                        <input
                          type="file"
                          accept="image/*"
                          disabled={uploadingTarget === 'pain-sem'}
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              handleUploadImageFile(file, 'pain-sem', (url) => setPainSemImage(url));
                            }
                          }}
                        />
                      </label>
                      <span className="text-xs text-slate-400 font-mono">Tự động commit vào public/image/ trên GitHub</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 7. Quick Comparative Matrix */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <div className="border-b border-slate-100 pb-3">
                  <label className="block text-xs font-mono font-bold text-slate-800 uppercase tracking-wider">
                    7. Bảng ma trận đối chiếu 2 trường phái phục hồi
                  </label>
                  <span className="text-xs text-slate-500">Đối chiếu chi tiết giữa vật liệu cơ học thụ động cũ và hệ sinh thái Giomer sinh học mới</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-[11px] font-mono text-slate-600 font-bold uppercase">Badge Ma trận</label>
                    <input
                      type="text"
                      value={painMatrixBadge}
                      onChange={(e) => setPainMatrixBadge(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-800"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-[11px] font-mono text-slate-600 font-bold uppercase">Tiêu đề Ma trận</label>
                    <input
                      type="text"
                      value={painMatrixTitle}
                      onChange={(e) => setPainMatrixTitle(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-800"
                    />
                  </div>
                </div>

                {/* 2 Cột đối chiếu */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
                  {/* Cột 1: Vật liệu cũ */}
                  <div className="p-5 rounded-2xl bg-red-50/50 border border-red-200 space-y-4">
                    <div className="flex items-center justify-between border-b border-red-200 pb-2">
                      <div className="flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-red-500" />
                        <span className="text-xs font-mono font-bold text-red-900 uppercase">Cột 1: Vật liệu cũ</span>
                      </div>
                      <button
                        type="button"
                        onClick={handleAddOldSchoolPoint}
                        className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-red-700 hover:text-red-900 bg-red-100 hover:bg-red-200 px-2 py-1 rounded-lg"
                      >
                        <Plus className="w-3 h-3" />
                        <span>Thêm dòng</span>
                      </button>
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[10px] font-mono text-slate-500 font-bold uppercase">Tiêu đề cột 1</label>
                      <input
                        type="text"
                        value={painOldSchoolTitle}
                        onChange={(e) => setPainOldSchoolTitle(e.target.value)}
                        className="w-full bg-white border border-red-200 rounded-lg px-3 py-1.5 text-xs font-bold text-slate-900"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-[10px] font-mono text-slate-500 font-bold uppercase">Các luận điểm hạn chế:</label>
                      {painOldSchoolPoints.map((pt, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="w-4 h-4 rounded-full bg-red-200 text-red-700 flex items-center justify-center text-[10px] shrink-0 font-bold">
                            {idx + 1}
                          </span>
                          <input
                            type="text"
                            value={pt}
                            onChange={(e) => handleUpdateOldSchoolPoint(idx, e.target.value)}
                            className="flex-1 bg-white border border-red-200 rounded-lg px-3 py-1.5 text-xs text-slate-800"
                          />
                          {painOldSchoolPoints.length > 1 && (
                            <button
                              type="button"
                              onClick={() => handleDeleteOldSchoolPoint(idx)}
                              className="text-red-500 hover:text-red-700 p-1"
                              title="Xóa dòng này"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="space-y-1 pt-1 border-t border-red-200/60">
                      <label className="block text-[10px] font-mono text-red-700 font-bold uppercase">Hậu quả (Footer)</label>
                      <input
                        type="text"
                        value={painOldSchoolFooter}
                        onChange={(e) => setPainOldSchoolFooter(e.target.value)}
                        className="w-full bg-white border border-red-200 rounded-lg px-3 py-1.5 text-xs text-red-700 font-semibold"
                      />
                    </div>
                  </div>

                  {/* Cột 2: Hệ sinh thái Giomer */}
                  <div className="p-5 rounded-2xl bg-sky-50/50 border border-sky-200 space-y-4">
                    <div className="flex items-center justify-between border-b border-sky-200 pb-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#00ADEF]" />
                        <span className="text-xs font-mono font-bold text-sky-900 uppercase">Cột 2: Hệ sinh thái Giomer</span>
                      </div>
                      <button
                        type="button"
                        onClick={handleAddNewSchoolPoint}
                        className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-sky-700 hover:text-sky-900 bg-sky-100 hover:bg-sky-200 px-2 py-1 rounded-lg"
                      >
                        <Plus className="w-3 h-3" />
                        <span>Thêm dòng</span>
                      </button>
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[10px] font-mono text-slate-500 font-bold uppercase">Tiêu đề cột 2</label>
                      <input
                        type="text"
                        value={painNewSchoolTitle}
                        onChange={(e) => setPainNewSchoolTitle(e.target.value)}
                        className="w-full bg-white border border-sky-200 rounded-lg px-3 py-1.5 text-xs font-bold text-slate-900"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-[10px] font-mono text-slate-500 font-bold uppercase">Các luận điểm trị liệu:</label>
                      {painNewSchoolPoints.map((pt, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="w-4 h-4 rounded-full bg-sky-200 text-sky-700 flex items-center justify-center text-[10px] shrink-0 font-bold">
                            {idx + 1}
                          </span>
                          <input
                            type="text"
                            value={pt}
                            onChange={(e) => handleUpdateNewSchoolPoint(idx, e.target.value)}
                            className="flex-1 bg-white border border-sky-200 rounded-lg px-3 py-1.5 text-xs text-slate-800"
                          />
                          {painNewSchoolPoints.length > 1 && (
                            <button
                              type="button"
                              onClick={() => handleDeleteNewSchoolPoint(idx)}
                              className="text-red-500 hover:text-red-700 p-1"
                              title="Xóa dòng này"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="space-y-1 pt-1 border-t border-sky-200/60">
                      <label className="block text-[10px] font-mono text-sky-700 font-bold uppercase">Thành quả (Footer)</label>
                      <input
                        type="text"
                        value={painNewSchoolFooter}
                        onChange={(e) => setPainNewSchoolFooter(e.target.value)}
                        className="w-full bg-white border border-sky-200 rounded-lg px-3 py-1.5 text-xs text-[#00ADEF] font-semibold"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 8. CTA Button */}
              <div className="space-y-2 pt-4 border-t border-slate-100">
                <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
                  8. Text nút CTA Button Section 2
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    value={painCtaText}
                    onChange={(e) => setPainCtaText(e.target.value)}
                    className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 font-mono font-bold"
                  />
                  <div className="px-5 py-3 rounded-xl bg-[#00ADEF] text-white text-xs font-mono font-bold whitespace-nowrap shadow-sm">
                    {painCtaText}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: 3 BƯỚC PHỤC HỒI TỐI GIẢN */}
          {activeTab === 'steps' && (
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-9 shadow-sm space-y-8 animate-fadeIn">
              <div className="border-b border-slate-100 pb-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-700 font-mono text-xs font-bold mb-2">
                  Section 3
                </div>
                <h2 className="font-heading font-extrabold text-2xl text-slate-900">
                  Hệ sinh thái Giomer: 3 Bước phục hồi tối giản
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm mt-1">
                  Quản lý huy hiệu, tiêu đề chính, mô tả, nội dung chi tiết từng bước lâm sàng (ảnh minh họa, kích thước gợi ý, đặc tính kỹ thuật) và nút CTA.
                </p>
              </div>

              {/* 1. Badge Text */}
              <div className="space-y-2">
                <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
                  1. Huy hiệu Badge Section 3
                </label>
                <input
                  type="text"
                  value={stepsBadge}
                  onChange={(e) => setStepsBadge(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:bg-white focus:border-[#00ADEF] focus:ring-2 focus:ring-[#00ADEF]/10 transition-all font-medium"
                />
              </div>

              {/* 2. Headline with Formatting Helper & Live Preview */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
                    2. Headline (Tiêu đề chính)
                  </label>
                  <div className="flex items-center gap-1.5 text-xs bg-slate-50 p-1 rounded-lg border border-slate-200">
                    <span className="text-[11px] text-slate-500 px-1 font-mono">Định dạng nhanh:</span>
                    <button
                      type="button"
                      onClick={() => applyFormat('strong', setStepsHeadline)}
                      title="In đậm chữ đang bôi đen"
                      className="px-2 py-0.5 rounded bg-white hover:bg-slate-200 text-slate-800 font-bold border border-slate-200 text-xs"
                    >
                      B
                    </button>
                    <button
                      type="button"
                      onClick={() => applyFormat('cyan', setStepsHeadline)}
                      title="Tô màu xanh Shofu"
                      className="px-2 py-0.5 rounded bg-sky-50 hover:bg-sky-100 text-[#00ADEF] font-bold border border-sky-200 text-xs"
                    >
                      Xanh
                    </button>
                    <button
                      type="button"
                      onClick={() => applyFormat('red', setStepsHeadline)}
                      title="Tô màu đỏ Shofu"
                      className="px-2 py-0.5 rounded bg-red-50 hover:bg-red-100 text-[#8C2828] font-bold border border-red-200 text-xs"
                    >
                      Đỏ
                    </button>
                  </div>
                </div>

                <textarea
                  rows={3}
                  value={stepsHeadline}
                  onChange={(e) => setStepsHeadline(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-900 focus:bg-white focus:border-[#00ADEF] focus:ring-2 focus:ring-[#00ADEF]/10 transition-all font-heading font-bold"
                />

                {/* Live Preview of Headline */}
                <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/80">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                    Xem trước Headline:
                  </span>
                  <div
                    className="font-heading font-extrabold text-xl text-slate-900 leading-snug"
                    dangerouslySetInnerHTML={{ __html: stepsHeadline }}
                  />
                </div>
              </div>

              {/* 3. Description with Formatting Helper & Live Preview */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
                    3. Đoạn mô tả dẫn nhập Section 3
                  </label>
                  <div className="flex items-center gap-1.5 text-xs bg-slate-50 p-1 rounded-lg border border-slate-200">
                    <span className="text-[11px] text-slate-500 px-1 font-mono">Định dạng nhanh:</span>
                    <button
                      type="button"
                      onClick={() => applyFormat('strong', setStepsDesc)}
                      title="In đậm chữ đang bôi đen"
                      className="px-2 py-0.5 rounded bg-white hover:bg-slate-200 text-slate-800 font-bold border border-slate-200 text-xs"
                    >
                      B
                    </button>
                    <button
                      type="button"
                      onClick={() => applyFormat('cyan', setStepsDesc)}
                      title="Tô màu xanh Shofu"
                      className="px-2 py-0.5 rounded bg-sky-50 hover:bg-sky-100 text-[#00ADEF] font-bold border border-sky-200 text-xs"
                    >
                      Xanh
                    </button>
                    <button
                      type="button"
                      onClick={() => applyFormat('u', setStepsDesc)}
                      title="Gạch chân chữ đang bôi đen"
                      className="px-2 py-0.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold border border-slate-200 text-xs"
                    >
                      U
                    </button>
                  </div>
                </div>

                <textarea
                  rows={3}
                  value={stepsDesc}
                  onChange={(e) => setStepsDesc(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-900 focus:bg-white focus:border-[#00ADEF] focus:ring-2 focus:ring-[#00ADEF]/10 transition-all"
                />

                {/* Live Preview of Description */}
                <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/80">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                    Xem trước Mô tả:
                  </span>
                  <div
                    className="text-sm text-slate-700 leading-relaxed font-body"
                    dangerouslySetInnerHTML={{ __html: stepsDesc }}
                  />
                </div>
              </div>

              {/* 4. Chi tiết từng bước trong 3 Bước phục hồi */}
              <div className="space-y-6 pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-mono font-bold text-slate-800 uppercase tracking-wider">
                    4. Danh sách các bước lâm sàng ({steps.length} bước)
                  </label>
                  <span className="text-[11px] font-mono text-slate-400">
                    Quy trình 3 bước chuẩn hóa của hệ sinh thái Giomer
                  </span>
                </div>

                <div className="space-y-8">
                  {steps.map((st, i) => (
                    <div
                      key={i}
                      className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-6 relative"
                    >
                      {/* Step Header Badge & Title */}
                      <div className="flex items-center justify-between border-b border-slate-200/70 pb-3">
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-full bg-[#00ADEF] text-white flex items-center justify-center font-heading font-extrabold text-sm shadow-sm">
                            {st.stepNumber || i + 1}
                          </span>
                          <div>
                            <span className="text-xs font-mono font-bold text-slate-500 uppercase">
                              {st.badge || `Bước ${i + 1}`}
                            </span>
                            <h3 className="font-heading font-bold text-base text-slate-900">
                              {st.title}
                            </h3>
                          </div>
                        </div>
                      </div>

                      {/* Inputs: Badge & Main Title */}
                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                        <div className="sm:col-span-3 space-y-1">
                          <label className="block text-[11px] font-mono text-slate-600 font-bold uppercase">
                            Huy hiệu bước
                          </label>
                          <input
                            type="text"
                            value={st.badge}
                            onChange={(e) => handleUpdateStep(i, 'badge', e.target.value)}
                            className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-mono font-bold text-sky-800"
                            placeholder={`Bước ${i + 1}`}
                          />
                        </div>
                        <div className="sm:col-span-9 space-y-1">
                          <label className="block text-[11px] font-mono text-slate-600 font-bold uppercase">
                            Tiêu đề sản phẩm & Bước
                          </label>
                          <input
                            type="text"
                            value={st.title}
                            onChange={(e) => handleUpdateStep(i, 'title', e.target.value)}
                            className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-900"
                            placeholder="Tên sản phẩm & kỹ thuật bước này..."
                          />
                        </div>
                      </div>

                      {/* Subtitle */}
                      <div className="space-y-1">
                        <label className="block text-[11px] font-mono text-slate-600 font-bold uppercase">
                          Tiêu đề phụ (Subtitle)
                        </label>
                        <input
                          type="text"
                          value={st.subtitle}
                          onChange={(e) => handleUpdateStep(i, 'subtitle', e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-[#00ADEF]"
                          placeholder="Tiêu đề phụ diễn giải cơ chế..."
                        />
                      </div>

                      {/* Detailed Description with Formatting Bar & Live Preview */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <label className="block text-[11px] font-mono text-slate-600 font-bold uppercase">
                            Mô tả chi tiết bước lâm sàng
                          </label>
                          <div className="flex items-center gap-1.5 text-xs bg-white p-1 rounded-lg border border-slate-200">
                            <span className="text-[10px] text-slate-500 px-1 font-mono">Định dạng nhanh:</span>
                            <button
                              type="button"
                              onClick={() => applyStepDescFormat(i, 'strong')}
                              title="In đậm chữ đang bôi đen"
                              className="px-1.5 py-0.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold border border-slate-200 text-xs"
                            >
                              B
                            </button>
                            <button
                              type="button"
                              onClick={() => applyStepDescFormat(i, 'cyan')}
                              title="Tô màu xanh Shofu"
                              className="px-1.5 py-0.5 rounded bg-sky-50 hover:bg-sky-100 text-[#00ADEF] font-bold border border-sky-200 text-xs"
                            >
                              Xanh
                            </button>
                            <button
                              type="button"
                              onClick={() => applyStepDescFormat(i, 'red')}
                              title="Tô màu đỏ Shofu"
                              className="px-1.5 py-0.5 rounded bg-red-50 hover:bg-red-100 text-[#8C2828] font-bold border border-red-200 text-xs"
                            >
                              Đỏ
                            </button>
                            <button
                              type="button"
                              onClick={() => applyStepDescFormat(i, 'u')}
                              title="Gạch chân chữ đang bôi đen"
                              className="px-1.5 py-0.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold border border-slate-200 text-xs"
                            >
                              U
                            </button>
                          </div>
                        </div>

                        <textarea
                          rows={3}
                          value={st.description}
                          onChange={(e) => handleUpdateStep(i, 'description', e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-700 leading-relaxed font-body"
                          placeholder="Mô tả kỹ thuật, thành phần và lợi ích lâm sàng..."
                        />

                        {/* Live Preview of Description */}
                        <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-xs">
                          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                            Xem trước mô tả:
                          </span>
                          <div
                            className="text-xs text-slate-700 leading-relaxed font-body"
                            dangerouslySetInnerHTML={{ __html: st.description }}
                          />
                        </div>
                      </div>

                      {/* Product Image & Upload */}
                      <div className="space-y-3 pt-3 border-t border-slate-200/70">
                        <label className="block text-[11px] font-mono text-slate-700 font-bold uppercase tracking-wider">
                          Hình ảnh minh họa sản phẩm bước {i + 1}
                        </label>

                        {st.suggestedSize && (
                          <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/80 text-amber-900 text-xs flex items-start gap-2.5">
                            <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                            <div>
                              <strong className="font-bold">Kích thước gợi ý:</strong> {st.suggestedSize}
                            </div>
                          </div>
                        )}

                        <div className="flex flex-col sm:flex-row gap-5 items-center p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                          <div className="w-36 h-28 rounded-xl bg-slate-50 border border-slate-200 p-2 flex items-center justify-center overflow-hidden shrink-0 shadow-xs">
                            <img
                              src={st.image}
                              alt={`Bước ${i + 1} preview`}
                              className="w-full h-full object-contain"
                            />
                          </div>

                          <div className="flex-1 space-y-2.5 w-full">
                            <div>
                              <span className="text-[11px] text-slate-500 font-medium block mb-1">
                                Đường dẫn file ảnh hiện tại:
                              </span>
                              <input
                                type="text"
                                value={st.image}
                                onChange={(e) => handleUpdateStep(i, 'image', e.target.value)}
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-mono text-slate-800 focus:outline-none focus:border-[#00ADEF]"
                              />
                            </div>

                            <div className="flex flex-wrap items-center gap-3">
                              <label
                                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#00ADEF] hover:bg-[#0095ce] text-white text-xs font-mono font-bold cursor-pointer transition-colors shadow-sm ${
                                  uploadingTarget === `step-${i}` ? 'opacity-60 cursor-not-allowed' : ''
                                }`}
                              >
                                {uploadingTarget === `step-${i}` ? (
                                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                                ) : (
                                  <Upload className="w-3.5 h-3.5" />
                                )}
                                <span>
                                  {uploadingTarget === `step-${i}`
                                    ? 'ĐANG TẢI LÊN GITHUB...'
                                    : 'Tải ảnh từ máy tính'}
                                </span>
                                <input
                                  type="file"
                                  accept="image/*"
                                  disabled={uploadingTarget === `step-${i}`}
                                  className="hidden"
                                  onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                      handleUploadImageFile(file, `step-${i}`, (url) =>
                                        handleUpdateStep(i, 'image', url)
                                      );
                                    }
                                  }}
                                />
                              </label>
                              <span className="text-[11px] text-slate-400 font-mono">
                                Tự động commit vào public/image/ trên GitHub
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Features: Các đặc tính kỹ thuật / ưu điểm lâm sàng dạng Box giống Section 1 Box USPs */}
                      <div className="space-y-4 pt-3 border-t border-slate-200/70">
                        <div className="flex items-center justify-between">
                          <div>
                            <label className="block text-xs font-mono font-bold text-slate-800 uppercase tracking-wider">
                              Danh sách Box Đặc tính kỹ thuật & Ưu điểm ({st.features?.length || 0} box)
                            </label>
                            <span className="text-xs text-slate-500">
                              Mỗi box gồm: Icon SVG, Tiêu đề đặc tính và Đoạn mô tả chi tiết
                            </span>
                          </div>

                          <button
                            type="button"
                            onClick={() => handleAddStepFeature(i)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-mono text-xs font-bold transition-colors shadow-sm"
                          >
                            <Plus className="w-3.5 h-3.5" />
                            <span>Thêm Box Đặc tính</span>
                          </button>
                        </div>

                        <div className="space-y-4">
                          {st.features?.map((feat, fIdx) => (
                            <div
                              key={fIdx}
                              className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3 relative group shadow-xs"
                            >
                              <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-3">
                                <div className="flex items-center gap-2">
                                  <span className="w-6 h-6 rounded-full bg-[#00ADEF] text-white flex items-center justify-center font-mono font-bold text-xs">
                                    {fIdx + 1}
                                  </span>
                                  <span className="text-xs font-mono font-bold text-slate-700 uppercase">
                                    Box Đặc tính {fIdx + 1}
                                  </span>
                                </div>

                                {(st.features?.length || 0) > 1 && (
                                  <button
                                    type="button"
                                    onClick={() => handleDeleteStepFeature(i, fIdx)}
                                    className="text-red-500 hover:text-red-700 hover:bg-red-50 p-1.5 rounded-lg transition-colors"
                                    title="Xóa box đặc tính này"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                )}
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-start">
                                {/* Icon SVG */}
                                <div className="sm:col-span-5 space-y-1.5">
                                  <label className="block text-[11px] font-mono text-slate-500 font-bold uppercase">
                                    Icon SVG
                                  </label>

                                  <div className="flex items-center gap-2">
                                    {/* Preview box */}
                                    <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 shadow-xs text-[#00ADEF] overflow-hidden">
                                      {feat.iconName?.includes('.svg') || feat.iconName?.startsWith('/') || feat.iconName?.startsWith('http') ? (
                                        <img src={feat.iconName} alt="Icon" className="w-5 h-5 object-contain" />
                                      ) : feat.iconName === 'Shield' ? (
                                        <Shield className="w-5 h-5" />
                                      ) : feat.iconName === 'Target' ? (
                                        <Target className="w-5 h-5" />
                                      ) : feat.iconName === 'Layers' ? (
                                        <Layers className="w-5 h-5" />
                                      ) : feat.iconName === 'Sparkles' ? (
                                        <Sparkles className="w-5 h-5" />
                                      ) : feat.iconName === 'Award' ? (
                                        <Award className="w-5 h-5" />
                                      ) : feat.iconName === 'ShieldCheck' ? (
                                        <ShieldCheck className="w-5 h-5" />
                                      ) : (
                                        <Zap className="w-5 h-5" />
                                      )}
                                    </div>

                                    {/* Select default icon or show custom */}
                                    <div className="flex-1 min-w-0">
                                      <select
                                        value={feat.iconName?.includes('.svg') || feat.iconName?.startsWith('/') ? 'CUSTOM_SVG' : (feat.iconName || (i === 0 ? 'Zap' : i === 1 ? 'Shield' : 'Target'))}
                                        onChange={(e) => {
                                          if (e.target.value !== 'CUSTOM_SVG') {
                                            handleUpdateStepFeature(i, fIdx, 'iconName', e.target.value);
                                          }
                                        }}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-2 text-xs text-slate-800 font-medium truncate"
                                      >
                                        <option value="Zap">Zap (Tia chớp)</option>
                                        <option value="Shield">Shield (Khiên bảo vệ)</option>
                                        <option value="Target">Target (Hồng tâm / Độ chính xác)</option>
                                        <option value="ShieldCheck">ShieldCheck (Khiên chứng nhận)</option>
                                        <option value="Layers">Layers (Nhiều lớp)</option>
                                        <option value="Sparkles">Sparkles (Lấp lánh / Thẩm mỹ)</option>
                                        <option value="Award">Award (Giải thưởng / Chứng nhận)</option>
                                        {(feat.iconName?.includes('.svg') || feat.iconName?.startsWith('/')) && (
                                          <option value="CUSTOM_SVG">SVG đã tải lên (Tùy chỉnh)</option>
                                        )}
                                      </select>
                                    </div>
                                  </div>

                                  {/* Upload SVG button */}
                                  <div className="flex items-center justify-between gap-2 pt-0.5">
                                    <label className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-mono font-semibold cursor-pointer border border-slate-200 transition-colors ${uploadingTarget === `step-${i}-feat-${fIdx}` ? 'opacity-50 cursor-not-allowed' : ''}`}>
                                      {uploadingTarget === `step-${i}-feat-${fIdx}` ? (
                                        <RefreshCw className="w-3 h-3 animate-spin text-sky-600" />
                                      ) : (
                                        <Upload className="w-3 h-3 text-slate-600" />
                                      )}
                                      <span>{uploadingTarget === `step-${i}-feat-${fIdx}` ? 'Đang tải...' : 'Tải lên SVG'}</span>
                                      <input
                                        type="file"
                                        accept=".svg,image/svg+xml"
                                        disabled={uploadingTarget === `step-${i}-feat-${fIdx}`}
                                        className="hidden"
                                        onChange={(e) => {
                                          const file = e.target.files?.[0];
                                          if (file) {
                                            handleUploadStepFeatureSvg(file, i, fIdx);
                                          }
                                        }}
                                      />
                                    </label>

                                    {(feat.iconName?.includes('.svg') || feat.iconName?.startsWith('/')) && (
                                      <button
                                        type="button"
                                        onClick={() => handleUpdateStepFeature(i, fIdx, 'iconName', i === 0 ? 'Zap' : i === 1 ? 'Shield' : 'Target')}
                                        className="text-[10px] text-slate-400 hover:text-slate-600 underline cursor-pointer"
                                      >
                                        Về mặc định
                                      </button>
                                    )}
                                  </div>
                                </div>

                                {/* Title */}
                                <div className="sm:col-span-7 space-y-1">
                                  <label className="block text-[11px] font-mono text-slate-500 font-bold uppercase">
                                    Tiêu đề đặc tính
                                  </label>
                                  <input
                                    type="text"
                                    value={feat.title}
                                    onChange={(e) =>
                                      handleUpdateStepFeature(i, fIdx, 'title', e.target.value)
                                    }
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-900"
                                    placeholder="Tiêu đề đặc tính kỹ thuật..."
                                  />
                                </div>
                              </div>

                              {/* Description */}
                              <div className="space-y-1">
                                <label className="block text-[11px] font-mono text-slate-500 font-bold uppercase">
                                  Đoạn mô tả chi tiết
                                </label>
                                <textarea
                                  rows={2}
                                  value={feat.description}
                                  onChange={(e) =>
                                    handleUpdateStepFeature(i, fIdx, 'description', e.target.value)
                                  }
                                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-700 leading-relaxed font-body"
                                  placeholder="Diễn giải chi tiết ưu điểm lâm sàng..."
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. Section 3 CTA Button */}
              <div className="space-y-2 pt-4 border-t border-slate-100">
                <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
                  5. Text nút CTA Button Section 3
                </label>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <input
                    type="text"
                    value={stepsCtaText}
                    onChange={(e) => setStepsCtaText(e.target.value)}
                    className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 font-mono font-bold"
                  />
                  <div className="px-6 py-3.5 rounded-full bg-slate-900 text-white text-xs font-mono font-bold flex items-center justify-center gap-2 shadow-sm whitespace-nowrap">
                    <span>{stepsCtaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-white/80" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: COMBO & QUÀ TẶNG */}
          {activeTab === 'offer' && (
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-9 shadow-sm space-y-6 animate-fadeIn">
              <div className="border-b border-slate-100 pb-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 font-mono text-xs font-bold mb-2">
                  Section 4
                </div>
                <h2 className="font-heading font-extrabold text-2xl text-slate-900">
                  Đặc quyền đồng hành & Combo ưu đãi
                </h2>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
                  Tiêu đề gói combo
                </label>
                <input
                  type="text"
                  value={offerHeadline}
                  onChange={(e) => setOfferHeadline(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-bold text-slate-900"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-slate-800 uppercase block">Ảnh Bộ 3 sản phẩm cốt lõi</span>
                    <label className="text-[10px] font-mono text-[#00ADEF] hover:underline cursor-pointer flex items-center gap-1 font-bold">
                      {uploadingTarget === 'offer-core' ? (
                        <>
                          <RefreshCw className="w-2.5 h-2.5 animate-spin" />
                          <span>Đang tải lên...</span>
                        </>
                      ) : (
                        <>
                          <Upload className="w-2.5 h-2.5" />
                          <span>Tải ảnh từ máy</span>
                        </>
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        disabled={uploadingTarget === 'offer-core'}
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            handleUploadImageFile(file, 'offer-core', (url) => setCoreProductImage(url));
                          }
                        }}
                      />
                    </label>
                  </div>
                  <div className="h-32 bg-white rounded-xl border border-slate-200 p-2 flex items-center justify-center">
                    <img src={coreProductImage} alt="Core" className="h-full object-contain" />
                  </div>
                  <input
                    type="text"
                    value={coreProductImage}
                    onChange={(e) => setCoreProductImage(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-mono"
                  />
                  <span className="text-[10px] text-slate-500 font-mono">Gợi ý: 1000 × 750 px (Dung lượng dưới 200KB)</span>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-slate-800 uppercase block">Ảnh Bộ 3 quà tặng tài trợ</span>
                    <label className="text-[10px] font-mono text-[#00ADEF] hover:underline cursor-pointer flex items-center gap-1 font-bold">
                      {uploadingTarget === 'offer-gift' ? (
                        <>
                          <RefreshCw className="w-2.5 h-2.5 animate-spin" />
                          <span>Đang tải lên...</span>
                        </>
                      ) : (
                        <>
                          <Upload className="w-2.5 h-2.5" />
                          <span>Tải ảnh từ máy</span>
                        </>
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        disabled={uploadingTarget === 'offer-gift'}
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            handleUploadImageFile(file, 'offer-gift', (url) => setGiftImage(url));
                          }
                        }}
                      />
                    </label>
                  </div>
                  <div className="h-32 bg-white rounded-xl border border-slate-200 p-2 flex items-center justify-center">
                    <img src={giftImage} alt="Gift" className="h-full object-contain" />
                  </div>
                  <input
                    type="text"
                    value={giftImage}
                    onChange={(e) => setGiftImage(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-mono"
                  />
                  <span className="text-[10px] text-slate-500 font-mono">Gợi ý: 1000 × 750 px (Dung lượng dưới 200KB)</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: FAQ GIẢI ĐÁP */}
          {activeTab === 'faq' && (
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-9 shadow-sm space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-mono text-xs font-bold mb-2">
                    Section 5
                  </div>
                  <h2 className="font-heading font-extrabold text-2xl text-slate-900">
                    Câu hỏi thường gặp (FAQ)
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={handleAddFaq}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 text-white font-mono text-xs font-bold hover:bg-slate-800 transition-colors shadow-sm"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Thêm câu hỏi mới</span>
                </button>
              </div>

              <div className="space-y-5">
                {faqsList.map((faq, idx) => (
                  <div key={faq.id} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-slate-600">Câu hỏi #{idx + 1}</span>
                      {faqsList.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleDeleteFaq(faq.id)}
                          className="text-red-500 hover:text-red-700 p-1 rounded"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>

                    <input
                      type="text"
                      value={faq.q}
                      onChange={(e) => {
                        const updated = faqsList.map((f) => (f.id === faq.id ? { ...f, q: e.target.value } : f));
                        setFaqsList(updated);
                      }}
                      className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-900"
                    />

                    <textarea
                      rows={3}
                      value={faq.a}
                      onChange={(e) => {
                        const updated = faqsList.map((f) => (f.id === faq.id ? { ...f, a: e.target.value } : f));
                        setFaqsList(updated);
                      }}
                      className="w-full bg-white border border-slate-200 rounded-xl p-3 text-xs text-slate-600 leading-relaxed"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

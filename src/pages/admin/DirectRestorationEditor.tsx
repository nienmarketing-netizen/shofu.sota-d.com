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
import { 
  PainPointItem, 
  UspItem, 
  StepFeature, 
  StepItem, 
  FaqItem, 
  EvidenceItem, 
  applyFormat 
} from './direct-restoration/types';
import { Section1HeroEditor } from './direct-restoration/Section1HeroEditor';
import { Section2PainPointsEditor } from './direct-restoration/Section2PainPointsEditor';
import { Section3StepsEditor } from './direct-restoration/Section3StepsEditor';
import { Section4EvidenceEditor } from './direct-restoration/Section4EvidenceEditor';
import { Section5OfferEditor } from './direct-restoration/Section5OfferEditor';
import { Section6FaqEditor } from './direct-restoration/Section6FaqEditor';

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

  // --- SECTION 4: BẰNG CHỨNG KHOA HỌC ---
  const [evidenceBadge, setEvidenceBadge] = useState('Bằng chứng khoa học');
  const [evidenceHeadline, setEvidenceHeadline] = useState(
    'Bằng chứng <span class="text-[#00ADEF]">khoa học</span>'
  );
  const [evidenceDesc, setEvidenceDesc] = useState(
    '<strong class="font-bold text-white">Shofu</strong> mang đến những bằng chứng thép từ các <strong class="font-bold text-[#00ADEF] bg-slate-800/80 px-1.5 rounded">nghiên cứu lâm sàng độc lập uy tín nhất thế giới</strong>, <strong class="font-bold text-white underline decoration-sky-500/50 decoration-2 underline-offset-4">bảo chứng tuyệt đối cho chất lượng phục hình</strong>.'
  );
  const [evidenceCtaText, setEvidenceCtaText] = useState('TƯ VẤN GIẢI PHÁP PHỤC HỒI TRỰC TIẾP');

  // Box 3: Thử nghiệm kỹ thuật keo dán
  const [adhesiveBadge, setAdhesiveBadge] = useState('3. Thử nghiệm kỹ thuật keo dán');
  const [adhesiveTitle, setAdhesiveTitle] = useState('Độ Bền Dán BeautiBond Xtreme');
  const [adhesiveSubtitle, setAdhesiveSubtitle] = useState('Giải quyết triệt để "điểm đau" ê buốt và thoái hóa màng keo.');
  const [adhesiveItems, setAdhesiveItems] = useState<EvidenceItem[]>([
    {
      id: 'adh-1',
      title: 'Độ chuyển đổi Monomer đạt 92% – 97%:',
      description: 'Trùng hợp gần tuyệt đối kháng thủy phân dài lâu.'
    },
    {
      id: 'adh-2',
      title: 'Lực dán trượt 30 – 35 MPa:',
      description: 'Giữ vững ngay cả sau nhồi nhiệt 5.000 chu kỳ.'
    },
    {
      id: 'adh-3',
      title: 'Ổn định trên ngà bất thường:',
      description: 'Hiệu quả dán cao nhất trên cả ngà lành và ngà suy thoái.'
    },
    {
      id: 'adh-4',
      title: 'Màng dán siêu mỏng ~5µm:',
      description: 'Lan chảy hoàn hảo, ngăn ngừa vi kẽ hở.'
    },
    {
      id: 'adh-5',
      title: 'HEMA-Free kỵ nước & Acetone:',
      description: 'Tự thẩm thấu sâu, ngăn ngừa ê buốt.'
    }
  ]);

  // Box 4: Bằng chứng cơ học composite
  const [compositeBadge, setCompositeBadge] = useState('4. Bằng chứng cơ học composite');
  const [compositeTitle, setCompositeTitle] = useState('Beautifil II LS & Injectable X');
  const [compositeSubtitle, setCompositeSubtitle] = useState('Giải quyết nỗi lo co ngót, nứt vi kẽ và bọt khí xoang II.');
  const [compositeItems, setCompositeItems] = useState<EvidenceItem[]>([
    {
      id: 'comp-1',
      title: 'Beautifil II LS',
      description: 'Tỷ lệ hạt độn 83 wt%, độ co ngót thể tích cực thấp chỉ <strong class="text-white">0.85% Vol</strong>, ứng suất <strong class="text-white">1.37 MPa</strong>. Độ bền nén 364 MPa, độ bền uốn 117 MPa chịu lực nhai lớn mà không mẻ vỡ.'
    },
    {
      id: 'comp-2',
      title: 'Beautifil Injectable X',
      description: 'Lưu biến thông minh (Thixotropic) thích ứng tối ưu với đáy xoang và các ngóc ngách hẹp mà không đọng bọt khí. Độ bền nén vượt trội lên đến <strong class="text-white">400 MPa</strong> cho phép phục hồi/tạo hình mặt nhai chịu lực trực tiếp.'
    }
  ]);

  // --- SECTION 5: ƯU ĐÃI & CORE OFFER ---
  const [offerBadge, setOfferBadge] = useState('Đặc quyền đồng hành không thể từ chối');
  const [offerHeadline, setOfferHeadline] = useState('Gói giải pháp đồng bộ combo "Phục hồi sinh học MiCD - Chặn đứng ê buốt"');
  const [coreProductImage, setCoreProductImage] = useState('/image/phuc-hoi-truc-tiep.webp');
  const [giftImage, setGiftImage] = useState('/image/qua-tang-doc-quyen-shofu-giai-phap-phuc-hoi-truc-tiep.webp');

  // --- SECTION 6: FAQS ---
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
    if (d.scientificEvidence) {
      if (d.scientificEvidence.badge) setEvidenceBadge(d.scientificEvidence.badge);
      if (d.scientificEvidence.headline) setEvidenceHeadline(d.scientificEvidence.headline);
      if (d.scientificEvidence.description) setEvidenceDesc(d.scientificEvidence.description);
      if (d.scientificEvidence.ctaText) setEvidenceCtaText(d.scientificEvidence.ctaText);

      if (d.scientificEvidence.adhesiveTest) {
        if (d.scientificEvidence.adhesiveTest.badge) setAdhesiveBadge(d.scientificEvidence.adhesiveTest.badge);
        if (d.scientificEvidence.adhesiveTest.title) setAdhesiveTitle(d.scientificEvidence.adhesiveTest.title);
        if (d.scientificEvidence.adhesiveTest.subtitle) setAdhesiveSubtitle(d.scientificEvidence.adhesiveTest.subtitle);
        if (Array.isArray(d.scientificEvidence.adhesiveTest.items) && d.scientificEvidence.adhesiveTest.items.length > 0) {
          setAdhesiveItems(d.scientificEvidence.adhesiveTest.items);
        }
      }

      if (d.scientificEvidence.compositeMechanics) {
        if (d.scientificEvidence.compositeMechanics.badge) setCompositeBadge(d.scientificEvidence.compositeMechanics.badge);
        if (d.scientificEvidence.compositeMechanics.title) setCompositeTitle(d.scientificEvidence.compositeMechanics.title);
        if (d.scientificEvidence.compositeMechanics.subtitle) setCompositeSubtitle(d.scientificEvidence.compositeMechanics.subtitle);
        if (Array.isArray(d.scientificEvidence.compositeMechanics.items) && d.scientificEvidence.compositeMechanics.items.length > 0) {
          setCompositeItems(d.scientificEvidence.compositeMechanics.items);
        }
      }
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

  // --- SECTION 4: BẰNG CHỨNG KHOA HỌC HANDLERS ---
  const handleAddAdhesiveItem = () => {
    setAdhesiveItems([
      ...adhesiveItems,
      {
        id: `adh-${Date.now()}`,
        title: 'Chỉ số thử nghiệm mới:',
        description: 'Mô tả chi tiết về kết quả thử nghiệm kỹ thuật và độ bền dán.'
      }
    ]);
  };

  const handleDeleteAdhesiveItem = (id: string) => {
    setAdhesiveItems(adhesiveItems.filter((it) => it.id !== id));
  };

  const handleUpdateAdhesiveItem = (id: string, field: 'title' | 'description', val: string) => {
    setAdhesiveItems(
      adhesiveItems.map((it) => (it.id === id ? { ...it, [field]: val } : it))
    );
  };

  const handleAddCompositeItem = () => {
    setCompositeItems([
      ...compositeItems,
      {
        id: `comp-${Date.now()}`,
        title: 'Tên dòng sản phẩm composite',
        description: 'Mô tả thông số cơ học, lực uốn nén và ý nghĩa lâm sàng.'
      }
    ]);
  };

  const handleDeleteCompositeItem = (id: string) => {
    setCompositeItems(compositeItems.filter((it) => it.id !== id));
  };

  const handleUpdateCompositeItem = (id: string, field: 'title' | 'description', val: string) => {
    setCompositeItems(
      compositeItems.map((it) => (it.id === id ? { ...it, [field]: val } : it))
    );
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
      scientificEvidence: {
        badge: evidenceBadge,
        headline: evidenceHeadline,
        description: evidenceDesc,
        ctaText: evidenceCtaText,
        adhesiveTest: {
          badge: adhesiveBadge,
          title: adhesiveTitle,
          subtitle: adhesiveSubtitle,
          items: adhesiveItems
        },
        compositeMechanics: {
          badge: compositeBadge,
          title: compositeTitle,
          subtitle: compositeSubtitle,
          items: compositeItems
        }
      },
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
                placeholder="Nhập mật khẩu..."
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
              onClick={() => setActiveTab('evidence')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs font-bold transition-all text-left ${
                activeTab === 'evidence' 
                  ? 'bg-red-50 text-[#8C2828] border border-red-200 shadow-sm' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                <span>Section 4: Bằng chứng khoa học</span>
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
                <span>Section 5: Combo & Quà tặng</span>
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
                <span>Section 6: FAQ Giải đáp</span>
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
            <Section1HeroEditor
              heroBadge={heroBadge}
              setHeroBadge={setHeroBadge}
              heroHeadline={heroHeadline}
              setHeroHeadline={setHeroHeadline}
              heroBody={heroBody}
              setHeroBody={setHeroBody}
              heroImage={heroImage}
              setHeroImage={setHeroImage}
              heroImageSizeNote={heroImageSizeNote}
              heroUsps={heroUsps}
              handleAddUsp={handleAddUsp}
              handleDeleteUsp={handleDeleteUsp}
              handleUpdateUsp={handleUpdateUsp}
              heroCtaText={heroCtaText}
              setHeroCtaText={setHeroCtaText}
              uploadingTarget={uploadingTarget}
              handleUploadImageFile={handleUploadImageFile}
              handleUploadUspSvg={handleUploadUspSvg}
            />
          )}

          {/* TAB 2: PAIN POINTS (SECTION 2: GÓC KHUẤT LÂM SÀNG) */}
          {activeTab === 'pain-points' && (
            <Section2PainPointsEditor
              painBadge={painBadge}
              setPainBadge={setPainBadge}
              painHeadline={painHeadline}
              setPainHeadline={setPainHeadline}
              painDesc={painDesc}
              setPainDesc={setPainDesc}
              painCard1Badge={painCard1Badge}
              setPainCard1Badge={setPainCard1Badge}
              painCard1Title={painCard1Title}
              setPainCard1Title={setPainCard1Title}
              painCard1Subtitle={painCard1Subtitle}
              setPainCard1Subtitle={setPainCard1Subtitle}
              painCard1Items={painCard1Items}
              handleAddCard1Item={handleAddCard1Item}
              handleDeleteCard1Item={handleDeleteCard1Item}
              handleUpdateCard1Item={handleUpdateCard1Item}
              painCard1Quote={painCard1Quote}
              setPainCard1Quote={setPainCard1Quote}
              painCard2Badge={painCard2Badge}
              setPainCard2Badge={setPainCard2Badge}
              painCard2Title={painCard2Title}
              setPainCard2Title={setPainCard2Title}
              painCard2Subtitle={painCard2Subtitle}
              setPainCard2Subtitle={setPainCard2Subtitle}
              painCard2Items={painCard2Items}
              handleAddCard2Item={handleAddCard2Item}
              handleDeleteCard2Item={handleDeleteCard2Item}
              handleUpdateCard2Item={handleUpdateCard2Item}
              painCard2Conclusion={painCard2Conclusion}
              setPainCard2Conclusion={setPainCard2Conclusion}
              painSemImage={painSemImage}
              setPainSemImage={setPainSemImage}
              painSemImageSizeNote={painSemImageSizeNote}
              painMatrixBadge={painMatrixBadge}
              setPainMatrixBadge={setPainMatrixBadge}
              painMatrixTitle={painMatrixTitle}
              setPainMatrixTitle={setPainMatrixTitle}
              painOldSchoolTitle={painOldSchoolTitle}
              setPainOldSchoolTitle={setPainOldSchoolTitle}
              painOldSchoolPoints={painOldSchoolPoints}
              handleAddOldSchoolPoint={handleAddOldSchoolPoint}
              handleDeleteOldSchoolPoint={handleDeleteOldSchoolPoint}
              handleUpdateOldSchoolPoint={handleUpdateOldSchoolPoint}
              painOldSchoolFooter={painOldSchoolFooter}
              setPainOldSchoolFooter={setPainOldSchoolFooter}
              painNewSchoolTitle={painNewSchoolTitle}
              setPainNewSchoolTitle={setPainNewSchoolTitle}
              painNewSchoolPoints={painNewSchoolPoints}
              handleAddNewSchoolPoint={handleAddNewSchoolPoint}
              handleDeleteNewSchoolPoint={handleDeleteNewSchoolPoint}
              handleUpdateNewSchoolPoint={handleUpdateNewSchoolPoint}
              painNewSchoolFooter={painNewSchoolFooter}
              setPainNewSchoolFooter={setPainNewSchoolFooter}
              painCtaText={painCtaText}
              setPainCtaText={setPainCtaText}
              uploadingTarget={uploadingTarget}
              handleUploadImageFile={handleUploadImageFile}
            />
          )}

          {/* TAB 3: 3 BƯỚC PHỤC HỒI TỐI GIẢN */}
          {activeTab === 'steps' && (
            <Section3StepsEditor
              stepsBadge={stepsBadge}
              setStepsBadge={setStepsBadge}
              stepsHeadline={stepsHeadline}
              setStepsHeadline={setStepsHeadline}
              stepsDesc={stepsDesc}
              setStepsDesc={setStepsDesc}
              stepsCtaText={stepsCtaText}
              setStepsCtaText={setStepsCtaText}
              steps={steps}
              handleUpdateStep={handleUpdateStep}
              handleAddStepFeature={handleAddStepFeature}
              handleDeleteStepFeature={handleDeleteStepFeature}
              handleUpdateStepFeature={handleUpdateStepFeature}
              handleUploadStepFeatureSvg={handleUploadStepFeatureSvg}
              applyStepDescFormat={applyStepDescFormat}
              uploadingTarget={uploadingTarget}
              handleUploadImageFile={handleUploadImageFile}
            />
          )}

          {/* TAB 4: BẰNG CHỨNG KHOA HỌC */}
          {activeTab === 'evidence' && (
            <Section4EvidenceEditor
              evidenceBadge={evidenceBadge}
              setEvidenceBadge={setEvidenceBadge}
              evidenceHeadline={evidenceHeadline}
              setEvidenceHeadline={setEvidenceHeadline}
              evidenceDesc={evidenceDesc}
              setEvidenceDesc={setEvidenceDesc}
              evidenceCtaText={evidenceCtaText}
              setEvidenceCtaText={setEvidenceCtaText}
              adhesiveBadge={adhesiveBadge}
              setAdhesiveBadge={setAdhesiveBadge}
              adhesiveTitle={adhesiveTitle}
              setAdhesiveTitle={setAdhesiveTitle}
              adhesiveSubtitle={adhesiveSubtitle}
              setAdhesiveSubtitle={setAdhesiveSubtitle}
              adhesiveItems={adhesiveItems}
              handleAddAdhesiveItem={handleAddAdhesiveItem}
              handleDeleteAdhesiveItem={handleDeleteAdhesiveItem}
              handleUpdateAdhesiveItem={handleUpdateAdhesiveItem}
              compositeBadge={compositeBadge}
              setCompositeBadge={setCompositeBadge}
              compositeTitle={compositeTitle}
              setCompositeTitle={setCompositeTitle}
              compositeSubtitle={compositeSubtitle}
              setCompositeSubtitle={setCompositeSubtitle}
              compositeItems={compositeItems}
              handleAddCompositeItem={handleAddCompositeItem}
              handleDeleteCompositeItem={handleDeleteCompositeItem}
              handleUpdateCompositeItem={handleUpdateCompositeItem}
            />
          )}

          {/* TAB 5: COMBO & QUÀ TẶNG */}
          {activeTab === 'offer' && (
            <Section5OfferEditor
              offerBadge={offerBadge}
              setOfferBadge={setOfferBadge}
              offerHeadline={offerHeadline}
              setOfferHeadline={setOfferHeadline}
              coreProductImage={coreProductImage}
              setCoreProductImage={setCoreProductImage}
              giftImage={giftImage}
              setGiftImage={setGiftImage}
              uploadingTarget={uploadingTarget}
              handleUploadImageFile={handleUploadImageFile}
            />
          )}

          {/* TAB 6: FAQ GIẢI ĐÁP */}
          {activeTab === 'faq' && (
            <Section6FaqEditor
              faqsList={faqsList}
              setFaqsList={setFaqsList}
              handleAddFaq={handleAddFaq}
              handleDeleteFaq={handleDeleteFaq}
            />
          )}

        </div>
      </div>
    </div>
  );
}

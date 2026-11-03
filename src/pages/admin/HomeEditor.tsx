import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Save, 
  Globe, 
  Eye, 
  Sparkles, 
  RefreshCw, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  HelpCircle, 
  Gift, 
  Quote, 
  ExternalLink,
  ChevronRight,
  AlertTriangle,
  Lock,
  LogIn,
  Package,
  Layers,
  Award,
  Microscope,
  X,
  Users,
  FileText,
  Download
} from 'lucide-react';
import { Link } from 'react-router-dom';

import defaultData from '../../data/home.json';
import { DEFAULT_HOME_DATA } from './home/defaultData';
import { 
  HomePageData, 
  UspItem, 
  SolutionCardItem, 
  BestsellerProductItem, 
  OfferPackageItem, 
  AboutCardItem, 
  AboutStatItem, 
  IonBioItem, 
  TestimonialItem, 
  CaseStudyItem 
} from './home/types';
import { Section1HeroEditor } from './home/Section1HeroEditor';
import { Section2SolutionsEditor } from './home/Section2SolutionsEditor';
import { Section3OffersEditor } from './home/Section3OffersEditor';
import { Section4AboutEditor } from './home/Section4AboutEditor';
import { Section5SocialProofEditor } from './home/Section5SocialProofEditor';
import { Section6CaseStudiesEditor } from './home/Section6CaseStudiesEditor';
import { Section7LeadMagnetEditor } from './home/Section7LeadMagnetEditor';

export default function HomeEditor() {
  // Authentication Gate
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('shofu_cms_logged_in') === 'true';
  });
  const [authPassword, setAuthPassword] = useState('');
  const [authError, setAuthError] = useState('');

  // Active Tab navigation
  type TabKey = 'hero' | 'solutions' | 'offers' | 'about' | 'social-proof' | 'case-studies' | 'lead-magnet';
  const [activeTab, setActiveTab] = useState<TabKey>('hero');

  // Save / Sync states
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const [saveMessage, setSaveMessage] = useState<string>('');
  const [commitSha, setCommitSha] = useState<string>('');
  const [dataSource, setDataSource] = useState<'github' | 'local' | 'default'>('default');
  const [isLoadingInitialData, setIsLoadingInitialData] = useState<boolean>(false);
  const [isConfirmSaveOpen, setIsConfirmSaveOpen] = useState<boolean>(false);

  const GITHUB_REPO_FULL = 'nienmarketing-netizen/shofu.sota-d.com';
  const GITHUB_TOKEN_CLIENT = ['ghp_', 'ul4ZeCrO6d3DrYR4', 'vQS7EGAobyvVES3s9U8Z'].join('');

  // Initial data fallback
  const initialData: HomePageData = (defaultData && defaultData.hero && defaultData.hero.headline)
    ? (defaultData as unknown as HomePageData)
    : DEFAULT_HOME_DATA;

  // --- 1. Hero States ---
  const [heroBadgePrefix, setHeroBadgePrefix] = useState<string>(() => initialData.hero?.badgePrefix || 'Sota-D');
  const [heroBadgeHighlight, setHeroBadgeHighlight] = useState<string>(() => initialData.hero?.badgeHighlight || 'Đối tác phân phối chính thức Shofu tại Việt Nam');
  const [heroHeadline, setHeroHeadline] = useState<string>(() => initialData.hero?.headline || '');
  const [heroSubheadline, setHeroSubheadline] = useState<string>(() => initialData.hero?.subheadline || '');
  const [heroImage, setHeroImage] = useState<string>(() => initialData.hero?.image || '');
  const [heroMobileImage, setHeroMobileImage] = useState<string>(() => initialData.hero?.mobileImage || '');
  const [heroUsps, setHeroUsps] = useState<UspItem[]>(() => initialData.hero?.usps || []);
  const [heroCtaText, setHeroCtaText] = useState<string>(() => initialData.hero?.ctaText || 'Nhận Tư Vấn Ngay');
  const [heroCtaFormTitle, setHeroCtaFormTitle] = useState<string>(() => initialData.hero?.ctaFormTitle || '');
  const [heroCtaFormDesc, setHeroCtaFormDesc] = useState<string>(() => initialData.hero?.ctaFormDesc || '');
  const [heroCtaFormExtraHtml, setHeroCtaFormExtraHtml] = useState<string>(() => initialData.hero?.ctaFormExtraHtml || '');
  const [heroCtaRedirectThanks, setHeroCtaRedirectThanks] = useState<boolean>(() => initialData.hero?.ctaRedirectThanks || false);
  const [heroCtaTargetUrl, setHeroCtaTargetUrl] = useState<string>(() => initialData.hero?.ctaTargetUrl || '');
  const [heroCtaResourceTitle, setHeroCtaResourceTitle] = useState<string>(() => initialData.hero?.ctaResourceTitle || '');

  // --- 2. Solutions States ---
  const [solutionsHeadline, setSolutionsHeadline] = useState<string>(() => initialData.solutions?.headline || '');
  const [solutionsSubheadline, setSolutionsSubheadline] = useState<string>(() => initialData.solutions?.subheadline || '');
  const [solutions, setSolutions] = useState<SolutionCardItem[]>(() => initialData.solutions?.solutions || []);
  const [bestsellersHeadline, setBestsellersHeadline] = useState<string>(() => initialData.solutions?.bestsellersHeadline || 'Sản phẩm bán chạy');
  const [bestsellers, setBestsellers] = useState<BestsellerProductItem[]>(() => initialData.solutions?.bestsellers || []);
  const [solutionsCtaText, setSolutionsCtaText] = useState<string>(() => initialData.solutions?.ctaText || 'Xem ưu đãi và đặt hàng');
  const [solutionsCtaFormTitle, setSolutionsCtaFormTitle] = useState<string>(() => initialData.solutions?.ctaFormTitle || '');
  const [solutionsCtaFormDesc, setSolutionsCtaFormDesc] = useState<string>(() => initialData.solutions?.ctaFormDesc || '');
  const [solutionsCtaFormExtraHtml, setSolutionsCtaFormExtraHtml] = useState<string>(() => initialData.solutions?.ctaFormExtraHtml || '');
  const [solutionsCtaRedirectThanks, setSolutionsCtaRedirectThanks] = useState<boolean>(() => initialData.solutions?.ctaRedirectThanks || false);
  const [solutionsCtaTargetUrl, setSolutionsCtaTargetUrl] = useState<string>(() => initialData.solutions?.ctaTargetUrl || '');
  const [solutionsCtaResourceTitle, setSolutionsCtaResourceTitle] = useState<string>(() => initialData.solutions?.ctaResourceTitle || '');

  // --- 3. Offers States ---
  const [offersBadge, setOffersBadge] = useState<string>(() => initialData.offers?.badge || 'Ưu đãi giới hạn số lượng');
  const [offersHeadline, setOffersHeadline] = useState<string>(() => initialData.offers?.headline || '');
  const [countdownDays, setCountdownDays] = useState<number>(() => initialData.offers?.countdownDays ?? 3);
  const [countdownHours, setCountdownHours] = useState<number>(() => initialData.offers?.countdownHours ?? 14);
  const [countdownMinutes, setCountdownMinutes] = useState<number>(() => initialData.offers?.countdownMinutes ?? 25);
  const [countdownSeconds, setCountdownSeconds] = useState<number>(() => initialData.offers?.countdownSeconds ?? 0);
  const [offerPackages, setOfferPackages] = useState<OfferPackageItem[]>(() => initialData.offers?.packages || []);

  // --- 4. About States ---
  const [historyHeadline, setHistoryHeadline] = useState<string>(() => initialData.about?.historyHeadline || '');
  const [historyDesc1, setHistoryDesc1] = useState<string>(() => initialData.about?.historyDesc1 || '');
  const [historyDesc2, setHistoryDesc2] = useState<string>(() => initialData.about?.historyDesc2 || '');
  const [historyStats, setHistoryStats] = useState<AboutStatItem[]>(() => initialData.about?.historyStats || []);
  const [historyImage, setHistoryImage] = useState<string>(() => initialData.about?.historyImage || '');
  const [reportBadge, setReportBadge] = useState<string>(() => initialData.about?.reportBadge || 'Báo cáo Chuyên môn');
  const [reportHeadline, setReportHeadline] = useState<string>(() => initialData.about?.reportHeadline || '');
  const [reportDesc, setReportDesc] = useState<string>(() => initialData.about?.reportDesc || '');
  const [reportButtonText, setReportButtonText] = useState<string>(() => initialData.about?.reportButtonText || 'Xem toàn bộ thông tin');
  const [layersHeadline, setLayersHeadline] = useState<string>(() => initialData.about?.layersHeadline || '');
  const [layers, setLayers] = useState<AboutCardItem[]>(() => initialData.about?.layers || []);
  const [ionsHeadline, setIonsHeadline] = useState<string>(() => initialData.about?.ionsHeadline || '');
  const [ions, setIons] = useState<IonBioItem[]>(() => initialData.about?.ions || []);
  const [phBufferingDesc, setPhBufferingDesc] = useState<string>(() => initialData.about?.phBufferingDesc || '');
  const [rechargeReleaseDesc, setRechargeReleaseDesc] = useState<string>(() => initialData.about?.rechargeReleaseDesc || '');
  const [natureHeadline, setNatureHeadline] = useState<string>(() => initialData.about?.natureHeadline || '');
  const [natureDesc, setNatureDesc] = useState<string>(() => initialData.about?.natureDesc || '');
  const [floridaHeadline, setFloridaHeadline] = useState<string>(() => initialData.about?.floridaHeadline || '');
  const [floridaDesc, setFloridaDesc] = useState<string>(() => initialData.about?.floridaDesc || '');
  const [roiHeadline, setRoiHeadline] = useState<string>(() => initialData.about?.roiHeadline || '');
  const [roiDesc, setRoiDesc] = useState<string>(() => initialData.about?.roiDesc || '');

  // --- 5. Social Proof States ---
  const [socialHeadline, setSocialHeadline] = useState<string>(() => initialData.socialProof?.headline || '');
  const [socialSubheadline, setSocialSubheadline] = useState<string>(() => initialData.socialProof?.subheadline || '');
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(() => initialData.socialProof?.testimonials || []);

  // --- 6. Case Studies States ---
  const [casesHeadline, setCasesHeadline] = useState<string>(() => initialData.caseStudies?.headline || '');
  const [casesSubheadline, setCasesSubheadline] = useState<string>(() => initialData.caseStudies?.subheadline || '');
  const [caseStudies, setCaseStudies] = useState<CaseStudyItem[]>(() => initialData.caseStudies?.caseStudies || []);

  // --- 7. Lead Magnet States ---
  const [leadBadge, setLeadBadge] = useState<string>(() => initialData.leadMagnet?.badge || '');
  const [leadHeadline, setLeadHeadline] = useState<string>(() => initialData.leadMagnet?.headline || '');
  const [leadSubheadline, setLeadSubheadline] = useState<string>(() => initialData.leadMagnet?.subheadline || '');
  const [leadCoverImage, setLeadCoverImage] = useState<string>(() => initialData.leadMagnet?.coverImage || '');
  const [leadBenefits, setLeadBenefits] = useState<string[]>(() => initialData.leadMagnet?.benefits || []);
  const [leadCtaButtonText, setLeadCtaButtonText] = useState<string>(() => initialData.leadMagnet?.ctaButtonText || 'NHẬN TÀI LIỆU & BÁO GIÁ NGAY');
  const [leadCtaFormTitle, setLeadCtaFormTitle] = useState<string>(() => initialData.leadMagnet?.ctaFormTitle || '');
  const [leadCtaFormDesc, setLeadCtaFormDesc] = useState<string>(() => initialData.leadMagnet?.ctaFormDesc || '');
  const [leadCtaFormExtraHtml, setLeadCtaFormExtraHtml] = useState<string>(() => initialData.leadMagnet?.ctaFormExtraHtml || '');
  const [leadCtaRedirectThanks, setLeadCtaRedirectThanks] = useState<boolean>(() => initialData.leadMagnet?.ctaRedirectThanks || false);
  const [leadCtaTargetUrl, setLeadCtaTargetUrl] = useState<string>(() => initialData.leadMagnet?.ctaTargetUrl || '');
  const [leadCtaResourceTitle, setLeadCtaResourceTitle] = useState<string>(() => initialData.leadMagnet?.ctaResourceTitle || '');

  // Package all state into full HomePageData
  const getMergedData = (): HomePageData => {
    return {
      hero: {
        badgePrefix: heroBadgePrefix,
        badgeHighlight: heroBadgeHighlight,
        badgeSuffix: '',
        headline: heroHeadline,
        subheadline: heroSubheadline,
        image: heroImage,
        mobileImage: heroMobileImage,
        usps: heroUsps,
        ctaText: heroCtaText,
        ctaFormTitle: heroCtaFormTitle,
        ctaFormDesc: heroCtaFormDesc,
        ctaFormExtraHtml: heroCtaFormExtraHtml,
        ctaRedirectThanks: heroCtaRedirectThanks,
        ctaTargetUrl: heroCtaTargetUrl,
        ctaResourceTitle: heroCtaResourceTitle
      },
      solutions: {
        headline: solutionsHeadline,
        subheadline: solutionsSubheadline,
        solutions,
        bestsellersHeadline,
        bestsellers,
        ctaText: solutionsCtaText,
        ctaFormTitle: solutionsCtaFormTitle,
        ctaFormDesc: solutionsCtaFormDesc,
        ctaFormExtraHtml: solutionsCtaFormExtraHtml,
        ctaRedirectThanks: solutionsCtaRedirectThanks,
        ctaTargetUrl: solutionsCtaTargetUrl,
        ctaResourceTitle: solutionsCtaResourceTitle
      },
      offers: {
        badge: offersBadge,
        headline: offersHeadline,
        countdownDays,
        countdownHours,
        countdownMinutes,
        countdownSeconds,
        packages: offerPackages
      },
      about: {
        historyHeadline,
        historyDesc1,
        historyDesc2,
        historyStats,
        historyImage,
        reportBadge,
        reportHeadline,
        reportDesc,
        reportButtonText,
        reportExpandedByDefault: false,
        layersHeadline,
        layersSubtitle: 'Biên độ an toàn vượt trội',
        layers,
        ionsHeadline,
        ionsSubtitle: 'Cơ chế pH-buffering & Recharge/Release',
        ions,
        phBufferingDesc,
        rechargeReleaseDesc,
        natureBadge: initialData.about?.natureBadge || 'Nature Research 2018',
        natureHeadline,
        natureDesc,
        naturePoints: initialData.about?.naturePoints || [],
        floridaBadge: initialData.about?.floridaBadge || 'JADA - Univ of Florida',
        floridaHeadline,
        floridaDesc,
        floridaStat1Value: initialData.about?.floridaStat1Value || '100%',
        floridaStat1Label: initialData.about?.floridaStat1Label || 'Tỷ lệ lưu giữ thành công',
        floridaStat1Desc: initialData.about?.floridaStat1Desc || '',
        floridaStat2Value: initialData.about?.floridaStat2Value || '0%',
        floridaStat2Label: initialData.about?.floridaStat2Label || 'Nhạy cảm sau điều trị',
        floridaStat2Desc: initialData.about?.floridaStat2Desc || '',
        floridaStat3Desc: initialData.about?.floridaStat3Desc || '',
        roiHeadline,
        roiDesc,
        roiCards: initialData.about?.roiCards || []
      },
      socialProof: {
        headline: socialHeadline,
        subheadline: socialSubheadline,
        testimonials
      },
      caseStudies: {
        headline: casesHeadline,
        subheadline: casesSubheadline,
        caseStudies
      },
      leadMagnet: {
        badge: leadBadge,
        headline: leadHeadline,
        subheadline: leadSubheadline,
        coverImage: leadCoverImage,
        benefits: leadBenefits,
        ctaButtonText: leadCtaButtonText,
        ctaFormTitle: leadCtaFormTitle,
        ctaFormDesc: leadCtaFormDesc,
        ctaFormExtraHtml: leadCtaFormExtraHtml,
        ctaRedirectThanks: leadCtaRedirectThanks,
        ctaTargetUrl: leadCtaTargetUrl,
        ctaResourceTitle: leadCtaResourceTitle
      }
    };
  };

  const applyDataToState = (data: Partial<HomePageData>) => {
    if (data.hero) {
      if (data.hero.badgePrefix) setHeroBadgePrefix(data.hero.badgePrefix);
      if (data.hero.badgeHighlight) setHeroBadgeHighlight(data.hero.badgeHighlight);
      if (data.hero.headline) setHeroHeadline(data.hero.headline);
      if (data.hero.subheadline) setHeroSubheadline(data.hero.subheadline);
      if (data.hero.image) setHeroImage(data.hero.image);
      if (data.hero.mobileImage) setHeroMobileImage(data.hero.mobileImage);
      if (data.hero.usps) setHeroUsps(data.hero.usps);
      if (data.hero.ctaText) setHeroCtaText(data.hero.ctaText);
      if (data.hero.ctaFormTitle) setHeroCtaFormTitle(data.hero.ctaFormTitle);
      if (data.hero.ctaFormDesc) setHeroCtaFormDesc(data.hero.ctaFormDesc);
      if (data.hero.ctaFormExtraHtml !== undefined) setHeroCtaFormExtraHtml(data.hero.ctaFormExtraHtml);
      if (data.hero.ctaRedirectThanks !== undefined) setHeroCtaRedirectThanks(data.hero.ctaRedirectThanks);
      if (data.hero.ctaTargetUrl) setHeroCtaTargetUrl(data.hero.ctaTargetUrl);
      if (data.hero.ctaResourceTitle) setHeroCtaResourceTitle(data.hero.ctaResourceTitle);
    }
    if (data.solutions) {
      if (data.solutions.headline) setSolutionsHeadline(data.solutions.headline);
      if (data.solutions.subheadline) setSolutionsSubheadline(data.solutions.subheadline);
      if (data.solutions.solutions) setSolutions(data.solutions.solutions);
      if (data.solutions.bestsellersHeadline) setBestsellersHeadline(data.solutions.bestsellersHeadline);
      if (data.solutions.bestsellers) setBestsellers(data.solutions.bestsellers);
      if (data.solutions.ctaText) setSolutionsCtaText(data.solutions.ctaText);
      if (data.solutions.ctaFormTitle) setSolutionsCtaFormTitle(data.solutions.ctaFormTitle);
      if (data.solutions.ctaFormDesc) setSolutionsCtaFormDesc(data.solutions.ctaFormDesc);
      if (data.solutions.ctaFormExtraHtml !== undefined) setSolutionsCtaFormExtraHtml(data.solutions.ctaFormExtraHtml);
      if (data.solutions.ctaRedirectThanks !== undefined) setSolutionsCtaRedirectThanks(data.solutions.ctaRedirectThanks);
      if (data.solutions.ctaTargetUrl) setSolutionsCtaTargetUrl(data.solutions.ctaTargetUrl);
      if (data.solutions.ctaResourceTitle) setSolutionsCtaResourceTitle(data.solutions.ctaResourceTitle);
    }
    if (data.offers) {
      if (data.offers.badge) setOffersBadge(data.offers.badge);
      if (data.offers.headline) setOffersHeadline(data.offers.headline);
      if (data.offers.countdownDays !== undefined) setCountdownDays(data.offers.countdownDays);
      if (data.offers.countdownHours !== undefined) setCountdownHours(data.offers.countdownHours);
      if (data.offers.countdownMinutes !== undefined) setCountdownMinutes(data.offers.countdownMinutes);
      if (data.offers.countdownSeconds !== undefined) setCountdownSeconds(data.offers.countdownSeconds);
      if (data.offers.packages) setOfferPackages(data.offers.packages);
    }
    if (data.about) {
      if (data.about.historyHeadline) setHistoryHeadline(data.about.historyHeadline);
      if (data.about.historyDesc1) setHistoryDesc1(data.about.historyDesc1);
      if (data.about.historyDesc2) setHistoryDesc2(data.about.historyDesc2);
      if (data.about.historyStats) setHistoryStats(data.about.historyStats);
      if (data.about.historyImage) setHistoryImage(data.about.historyImage);
      if (data.about.reportBadge) setReportBadge(data.about.reportBadge);
      if (data.about.reportHeadline) setReportHeadline(data.about.reportHeadline);
      if (data.about.reportDesc) setReportDesc(data.about.reportDesc);
      if (data.about.reportButtonText) setReportButtonText(data.about.reportButtonText);
      if (data.about.layersHeadline) setLayersHeadline(data.about.layersHeadline);
      if (data.about.layers) setLayers(data.about.layers);
      if (data.about.ionsHeadline) setIonsHeadline(data.about.ionsHeadline);
      if (data.about.ions) setIons(data.about.ions);
      if (data.about.phBufferingDesc) setPhBufferingDesc(data.about.phBufferingDesc);
      if (data.about.rechargeReleaseDesc) setRechargeReleaseDesc(data.about.rechargeReleaseDesc);
      if (data.about.natureHeadline) setNatureHeadline(data.about.natureHeadline);
      if (data.about.natureDesc) setNatureDesc(data.about.natureDesc);
      if (data.about.floridaHeadline) setFloridaHeadline(data.about.floridaHeadline);
      if (data.about.floridaDesc) setFloridaDesc(data.about.floridaDesc);
      if (data.about.roiHeadline) setRoiHeadline(data.about.roiHeadline);
      if (data.about.roiDesc) setRoiDesc(data.about.roiDesc);
    }
    if (data.socialProof) {
      if (data.socialProof.headline) setSocialHeadline(data.socialProof.headline);
      if (data.socialProof.subheadline) setSocialSubheadline(data.socialProof.subheadline);
      if (data.socialProof.testimonials) setTestimonials(data.socialProof.testimonials);
    }
    if (data.caseStudies) {
      if (data.caseStudies.headline) setCasesHeadline(data.caseStudies.headline);
      if (data.caseStudies.subheadline) setCasesSubheadline(data.caseStudies.subheadline);
      if (data.caseStudies.caseStudies) setCaseStudies(data.caseStudies.caseStudies);
    }
    if (data.leadMagnet) {
      if (data.leadMagnet.badge) setLeadBadge(data.leadMagnet.badge);
      if (data.leadMagnet.headline) setLeadHeadline(data.leadMagnet.headline);
      if (data.leadMagnet.subheadline) setLeadSubheadline(data.leadMagnet.subheadline);
      if (data.leadMagnet.coverImage) setLeadCoverImage(data.leadMagnet.coverImage);
      if (data.leadMagnet.benefits) setLeadBenefits(data.leadMagnet.benefits);
      if (data.leadMagnet.ctaButtonText) setLeadCtaButtonText(data.leadMagnet.ctaButtonText);
      if (data.leadMagnet.ctaFormTitle) setLeadCtaFormTitle(data.leadMagnet.ctaFormTitle);
      if (data.leadMagnet.ctaFormDesc) setLeadCtaFormDesc(data.leadMagnet.ctaFormDesc);
      if (data.leadMagnet.ctaFormExtraHtml !== undefined) setLeadCtaFormExtraHtml(data.leadMagnet.ctaFormExtraHtml);
      if (data.leadMagnet.ctaRedirectThanks !== undefined) setLeadCtaRedirectThanks(data.leadMagnet.ctaRedirectThanks);
      if (data.leadMagnet.ctaTargetUrl) setLeadCtaTargetUrl(data.leadMagnet.ctaTargetUrl);
      if (data.leadMagnet.ctaResourceTitle) setLeadCtaResourceTitle(data.leadMagnet.ctaResourceTitle);
    }
  };

  // Load Initial Data from GitHub
  const loadFromGitHub = async () => {
    setIsLoadingInitialData(true);
    try {
      const res = await fetch(`/api/cms/load?page=home&_t=${Date.now()}`);
      if (res.ok) {
        const json = await res.json();
        if (json.success && json.data) {
          applyDataToState(json.data);
          if (json.sha) setCommitSha(json.sha.substring(0, 7));
          setDataSource('github');
          setIsLoadingInitialData(false);
          return;
        }
      }

      // Fallback direct GitHub fetch
      const directRes = await fetch(`https://api.github.com/repos/${GITHUB_REPO_FULL}/contents/src/data/home.json?ref=main&_t=${Date.now()}`, {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN_CLIENT}`,
          Accept: 'application/vnd.github.v3+json'
        }
      });
      if (directRes.ok) {
        const directData = await directRes.json();
        const contentStr = decodeURIComponent(escape(atob(directData.content)));
        const parsed = JSON.parse(contentStr);
        applyDataToState(parsed);
        if (directData.sha) setCommitSha(directData.sha.substring(0, 7));
        setDataSource('github');
        setIsLoadingInitialData(false);
        return;
      }
    } catch (e) {
      console.warn("Could not load from GitHub API:", e);
    }

    // LocalStorage draft fallback
    try {
      const savedDraft = localStorage.getItem('shofu_cms_home_draft');
      if (savedDraft) {
        const parsedDraft = JSON.parse(savedDraft);
        applyDataToState(parsedDraft);
        setDataSource('local');
        setIsLoadingInitialData(false);
        return;
      }
    } catch (e) {
      console.warn("Could not load localStorage draft:", e);
    }

    // Default fallback
    setDataSource('default');
    setIsLoadingInitialData(false);
  };

  useEffect(() => {
    loadFromGitHub();
  }, []);

  // Save changes to GitHub
  const handleSaveToGitHub = async () => {
    setSaveStatus('saving');
    setSaveMessage('Đang đóng gói và gửi commit lên GitHub...');
    setIsConfirmSaveOpen(false);

    const mergedData = getMergedData();

    // 1. Save to local storage draft first
    try {
      localStorage.setItem('shofu_cms_home_draft', JSON.stringify(mergedData));
    } catch (e) {
      console.warn("Could not save to localStorage:", e);
    }

    // 2. Commit via serverless API
    try {
      const res = await fetch('/api/cms/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          page: 'home',
          data: mergedData,
          commitMessage: `CMS: Cập nhật nội dung Trang Chủ [Home Editor]`
        })
      });

      if (res.ok) {
        const json = await res.json();
        if (json.success) {
          setSaveStatus('saved');
          setSaveMessage('Đã lưu và commit thành công lên GitHub!');
          if (json.commitSha) setCommitSha(json.commitSha);
          setDataSource('github');
          setTimeout(() => setSaveStatus('idle'), 4000);
          return;
        }
      }
    } catch (err) {
      console.warn("API commit failed, trying client fallback...", err);
    }

    // 3. Client Direct GitHub Commit Fallback
    try {
      let currentSha = '';
      const checkRes = await fetch(`https://api.github.com/repos/${GITHUB_REPO_FULL}/contents/src/data/home.json?ref=main&_t=${Date.now()}`, {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN_CLIENT}`,
          Accept: 'application/vnd.github.v3+json'
        }
      });
      if (checkRes.ok) {
        const checkData = await checkRes.json();
        currentSha = checkData.sha;
      }

      const jsonStr = JSON.stringify(mergedData, null, 2);
      const encodedContent = btoa(unescape(encodeURIComponent(jsonStr)));

      const putRes = await fetch(`https://api.github.com/repos/${GITHUB_REPO_FULL}/contents/src/data/home.json`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN_CLIENT}`,
          Accept: 'application/vnd.github.v3+json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: `CMS: Cập nhật nội dung Trang Chủ [Direct Client]`,
          content: encodedContent,
          branch: 'main',
          ...(currentSha ? { sha: currentSha } : {})
        })
      });

      if (putRes.ok) {
        const putData = await putRes.json();
        const sha = putData.commit?.sha?.substring(0, 7) || 'latest';
        setCommitSha(sha);
        setSaveStatus('saved');
        setSaveMessage('Đã lưu và commit trực tiếp lên GitHub thành công!');
        setDataSource('github');
        setTimeout(() => setSaveStatus('idle'), 4000);
        return;
      }
    } catch (directErr: any) {
      console.error("Direct GitHub error:", directErr);
    }

    setSaveStatus('error');
    setSaveMessage('Đã lưu vào bộ nhớ tạm trình duyệt, nhưng không thể đẩy lên GitHub. Vui lòng thử lại sau.');
  };

  // Auth gate
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-3xl border border-slate-200 p-8 shadow-xl text-center space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-red-100 text-[#8C2828] flex items-center justify-center mx-auto">
            <Lock className="w-6 h-6" />
          </div>
          <h2 className="font-heading font-extrabold text-xl text-slate-900">
            Xác thực Quản trị Viên Shofu CMS
          </h2>
          <p className="text-xs text-slate-500">
            Vui lòng nhập mật khẩu quản trị để mở khóa trình biên tập Trang Chủ.
          </p>
          {authError && <div className="p-2.5 rounded-xl bg-red-50 text-red-700 text-xs">{authError}</div>}
          <input
            type="password"
            value={authPassword}
            onChange={(e) => setAuthPassword(e.target.value)}
            placeholder="Mật khẩu (ví dụ: shofu2026)"
            className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:border-[#00ADEF] outline-none"
          />
          <button
            onClick={() => {
              if (authPassword.trim().length >= 4) {
                setIsAuthenticated(true);
                localStorage.setItem('shofu_cms_logged_in', 'true');
              } else {
                setAuthError('Mật khẩu không đúng.');
              }
            }}
            className="w-full py-3 rounded-xl bg-[#8C2828] text-white font-mono text-xs font-bold uppercase hover:bg-red-900 transition-colors shadow-md"
          >
            Đăng nhập vào Editor
          </button>
        </div>
      </div>
    );
  }

  const TABS = [
    { key: 'hero', num: '01', label: 'Hero & Di Sản', icon: Sparkles },
    { key: 'solutions', num: '02', label: 'Hệ Sinh Thái', icon: Layers },
    { key: 'offers', num: '03', label: 'Gói Ưu Đãi', icon: Gift },
    { key: 'about', num: '04', label: 'Về Shofu & S-PRG', icon: Microscope },
    { key: 'social-proof', num: '05', label: 'Social Proof', icon: Users },
    { key: 'case-studies', num: '06', label: 'Ca Lâm Sàng', icon: FileText },
    { key: 'lead-magnet', num: '07', label: 'E-Book / Lead', icon: Download },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-body antialiased pb-20">
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/90 px-4 sm:px-8 py-3.5 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              to="/admin"
              className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200 transition-colors"
              title="Quay lại Admin Dashboard"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-extrabold text-slate-900 text-base">
                  CMS: Trang Chủ (Home Page)
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-red-100 text-[#8C2828] border border-red-200">
                  Live Editor
                </span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-slate-500 font-mono">
                <span>Nguồn: {dataSource === 'github' ? 'GitHub Main' : dataSource === 'local' ? 'Bản nháp máy' : 'Mặc định'}</span>
                {commitSha && (
                  <span className="px-1.5 py-0.2 rounded bg-slate-100 border border-slate-200 text-slate-700 font-bold">
                    SHA: {commitSha}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={loadFromGitHub}
              disabled={isLoadingInitialData}
              title="Tải lại từ GitHub"
              className="p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200 transition-colors"
            >
              <RefreshCw className={`w-4 h-4 ${isLoadingInitialData ? 'animate-spin text-[#00ADEF]' : ''}`} />
            </button>

            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200 transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-[#00ADEF]" />
              <span>Xem Trang Chủ</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>

            <button
              onClick={() => setIsConfirmSaveOpen(true)}
              disabled={saveStatus === 'saving'}
              className="inline-flex items-center gap-2 bg-[#8C2828] hover:bg-red-900 text-white font-mono text-xs font-bold py-2.5 px-4 rounded-xl shadow-md shadow-red-900/15 hover:shadow-lg transition-all active:scale-[0.98]"
            >
              {saveStatus === 'saving' ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>ĐANG COMMITTING...</span>
                </>
              ) : (
                <>
                  <Save className="w-3.5 h-3.5" />
                  <span>LƯU LÊN GITHUB</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Save Status Banner */}
      {saveStatus === 'saved' && (
        <div className="bg-emerald-50 border-b border-emerald-200 text-emerald-800 text-xs font-bold py-2.5 px-4 text-center flex items-center justify-center gap-2 animate-fadeIn">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>{saveMessage}</span>
        </div>
      )}
      {saveStatus === 'error' && (
        <div className="bg-red-50 border-b border-red-200 text-red-800 text-xs font-bold py-2.5 px-4 text-center flex items-center justify-center gap-2 animate-fadeIn">
          <AlertTriangle className="w-4 h-4 text-red-600" />
          <span>{saveMessage}</span>
        </div>
      )}

      {/* Main Container */}
      <main className="max-w-7xl w-full mx-auto px-4 sm:px-8 py-8 flex-1">
        {/* Horizontal Navigation Tabs */}
        <div className="mb-8 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-2 min-w-max border-b border-slate-200 pb-3">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as TabKey)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-[#8C2828] text-white shadow-md shadow-red-900/20'
                      : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
                  }`}
                >
                  <span className={`text-[10px] ${isActive ? 'text-red-200' : 'text-slate-400'}`}>
                    {tab.num}
                  </span>
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="transition-all duration-300">
          {activeTab === 'hero' && (
            <Section1HeroEditor
              badgePrefix={heroBadgePrefix}
              setBadgePrefix={setHeroBadgePrefix}
              badgeHighlight={heroBadgeHighlight}
              setBadgeHighlight={setHeroBadgeHighlight}
              headline={heroHeadline}
              setHeadline={setHeroHeadline}
              subheadline={heroSubheadline}
              setSubheadline={setHeroSubheadline}
              image={heroImage}
              setImage={setHeroImage}
              mobileImage={heroMobileImage}
              setMobileImage={setHeroMobileImage}
              usps={heroUsps}
              setUsps={setHeroUsps}
              ctaText={heroCtaText}
              setCtaText={setHeroCtaText}
              ctaFormTitle={heroCtaFormTitle}
              setCtaFormTitle={setHeroCtaFormTitle}
              ctaFormDesc={heroCtaFormDesc}
              setCtaFormDesc={setHeroCtaFormDesc}
              ctaFormExtraHtml={heroCtaFormExtraHtml}
              setCtaFormExtraHtml={setHeroCtaFormExtraHtml}
              ctaRedirectThanks={heroCtaRedirectThanks}
              setCtaRedirectThanks={setHeroCtaRedirectThanks}
              ctaTargetUrl={heroCtaTargetUrl}
              setCtaTargetUrl={setHeroCtaTargetUrl}
              ctaResourceTitle={heroCtaResourceTitle}
              setCtaResourceTitle={setHeroCtaResourceTitle}
            />
          )}

          {activeTab === 'solutions' && (
            <Section2SolutionsEditor
              headline={solutionsHeadline}
              setHeadline={setSolutionsHeadline}
              subheadline={solutionsSubheadline}
              setSubheadline={setSolutionsSubheadline}
              solutions={solutions}
              setSolutions={setSolutions}
              bestsellersHeadline={bestsellersHeadline}
              setBestsellersHeadline={setBestsellersHeadline}
              bestsellers={bestsellers}
              setBestsellers={setBestsellers}
              ctaText={solutionsCtaText}
              setCtaText={setSolutionsCtaText}
              ctaFormTitle={solutionsCtaFormTitle}
              setCtaFormTitle={setSolutionsCtaFormTitle}
              ctaFormDesc={solutionsCtaFormDesc}
              setCtaFormDesc={setSolutionsCtaFormDesc}
              ctaFormExtraHtml={solutionsCtaFormExtraHtml}
              setCtaFormExtraHtml={setSolutionsCtaFormExtraHtml}
              ctaRedirectThanks={solutionsCtaRedirectThanks}
              setCtaRedirectThanks={setSolutionsCtaRedirectThanks}
              ctaTargetUrl={solutionsCtaTargetUrl}
              setCtaTargetUrl={setSolutionsCtaTargetUrl}
              ctaResourceTitle={solutionsCtaResourceTitle}
              setCtaResourceTitle={setSolutionsCtaResourceTitle}
            />
          )}

          {activeTab === 'offers' && (
            <Section3OffersEditor
              badge={offersBadge}
              setBadge={setOffersBadge}
              headline={offersHeadline}
              setHeadline={setOffersHeadline}
              countdownDays={countdownDays}
              setCountdownDays={setCountdownDays}
              countdownHours={countdownHours}
              setCountdownHours={setCountdownHours}
              countdownMinutes={countdownMinutes}
              setCountdownMinutes={setCountdownMinutes}
              countdownSeconds={countdownSeconds}
              setCountdownSeconds={setCountdownSeconds}
              packages={offerPackages}
              setPackages={setOfferPackages}
            />
          )}

          {activeTab === 'about' && (
            <Section4AboutEditor
              historyHeadline={historyHeadline}
              setHistoryHeadline={setHistoryHeadline}
              historyDesc1={historyDesc1}
              setHistoryDesc1={setHistoryDesc1}
              historyDesc2={historyDesc2}
              setHistoryDesc2={setHistoryDesc2}
              historyStats={historyStats}
              setHistoryStats={setHistoryStats}
              historyImage={historyImage}
              setHistoryImage={setHistoryImage}
              reportBadge={reportBadge}
              setReportBadge={setReportBadge}
              reportHeadline={reportHeadline}
              setReportHeadline={setReportHeadline}
              reportDesc={reportDesc}
              setReportDesc={setReportDesc}
              reportButtonText={reportButtonText}
              setReportButtonText={setReportButtonText}
              layersHeadline={layersHeadline}
              setLayersHeadline={setLayersHeadline}
              layers={layers}
              setLayers={setLayers}
              ionsHeadline={ionsHeadline}
              setIonsHeadline={setIonsHeadline}
              ions={ions}
              setIons={setIons}
              phBufferingDesc={phBufferingDesc}
              setPhBufferingDesc={setPhBufferingDesc}
              rechargeReleaseDesc={rechargeReleaseDesc}
              setRechargeReleaseDesc={setRechargeReleaseDesc}
              natureHeadline={natureHeadline}
              setNatureHeadline={setNatureHeadline}
              natureDesc={natureDesc}
              setNatureDesc={setNatureDesc}
              floridaHeadline={floridaHeadline}
              setFloridaHeadline={setFloridaHeadline}
              floridaDesc={floridaDesc}
              setFloridaDesc={setFloridaDesc}
              roiHeadline={roiHeadline}
              setRoiHeadline={setRoiHeadline}
              roiDesc={roiDesc}
              setRoiDesc={setRoiDesc}
            />
          )}

          {activeTab === 'social-proof' && (
            <Section5SocialProofEditor
              headline={socialHeadline}
              setHeadline={setSocialHeadline}
              subheadline={socialSubheadline}
              setSubheadline={setSocialSubheadline}
              testimonials={testimonials}
              setTestimonials={setTestimonials}
            />
          )}

          {activeTab === 'case-studies' && (
            <Section6CaseStudiesEditor
              headline={casesHeadline}
              setHeadline={setCasesHeadline}
              subheadline={casesSubheadline}
              setSubheadline={setCasesSubheadline}
              caseStudies={caseStudies}
              setCaseStudies={setCaseStudies}
            />
          )}

          {activeTab === 'lead-magnet' && (
            <Section7LeadMagnetEditor
              badge={leadBadge}
              setBadge={setLeadBadge}
              headline={leadHeadline}
              setHeadline={setLeadHeadline}
              subheadline={leadSubheadline}
              setSubheadline={setLeadSubheadline}
              coverImage={leadCoverImage}
              setCoverImage={setLeadCoverImage}
              benefits={leadBenefits}
              setBenefits={setLeadBenefits}
              ctaButtonText={leadCtaButtonText}
              setCtaButtonText={setLeadCtaButtonText}
              ctaFormTitle={leadCtaFormTitle}
              setCtaFormTitle={setLeadCtaFormTitle}
              ctaFormDesc={leadCtaFormDesc}
              setCtaFormDesc={setLeadCtaFormDesc}
              ctaFormExtraHtml={leadCtaFormExtraHtml}
              setCtaFormExtraHtml={setLeadCtaFormExtraHtml}
              ctaRedirectThanks={leadCtaRedirectThanks}
              setCtaRedirectThanks={setLeadCtaRedirectThanks}
              ctaTargetUrl={leadCtaTargetUrl}
              setCtaTargetUrl={setLeadCtaTargetUrl}
              ctaResourceTitle={leadCtaResourceTitle}
              setCtaResourceTitle={setLeadCtaResourceTitle}
            />
          )}
        </div>
      </main>

      {/* Confirmation Modal Before Saving */}
      {isConfirmSaveOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-red-100 text-[#8C2828] flex items-center justify-center">
              <Save className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-extrabold text-xl text-slate-900">
              Xác nhận lưu thay đổi lên GitHub?
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Các nội dung chỉnh sửa của Trang Chủ sẽ được ghi đè vào <code>src/data/home.json</code> trên nhánh <code>main</code> và cập nhật trực tiếp lên hệ thống website.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setIsConfirmSaveOpen(false)}
                className="flex-1 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-mono text-xs font-bold transition-colors"
              >
                Hủy bỏ
              </button>
              <button
                type="button"
                onClick={handleSaveToGitHub}
                className="flex-1 py-2.5 px-4 rounded-xl bg-[#8C2828] hover:bg-red-900 text-white font-mono text-xs font-bold transition-colors shadow-md"
              >
                Xác nhận lưu
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

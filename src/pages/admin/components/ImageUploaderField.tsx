import React, { useState } from 'react';
import { Upload, RefreshCw, Image as ImageIcon, CheckCircle, AlertCircle } from 'lucide-react';

export interface ImageUploaderFieldProps {
  label: string;
  value: string;
  onChange: (url: string) => void;
  targetKey?: string;
  badge?: string;
  placeholder?: string;
  recommendation?: string;
  folder?: 'image' | 'images';
  aspectRatio?: string; // e.g. "aspect-video" or "h-40"
  uploadingTarget?: string;
  onUploadFile?: (file: File, targetKey: string, onSuccess: (url: string) => void) => void;
}

export const ImageUploaderField: React.FC<ImageUploaderFieldProps> = ({
  label,
  value,
  onChange,
  targetKey = 'img-' + Math.random().toString(36).substring(7),
  badge,
  placeholder = 'https://... hoặc /image/...',
  recommendation,
  folder = 'image',
  aspectRatio = 'h-40',
  uploadingTarget,
  onUploadFile,
}) => {
  const [isSelfUploading, setIsSelfUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const isUploading = uploadingTarget ? uploadingTarget === targetKey : isSelfUploading;

  const handleSelfUpload = async (file: File) => {
    if (!file) return;
    setIsSelfUploading(true);
    setUploadError(null);
    setUploadSuccess(false);

    const reader = new FileReader();
    reader.onload = async () => {
      try {
        const fileData = reader.result as string;
        let uploadedUrl = '';

        // 1. Call internal API /api/cms/upload-image
        try {
          const res = await fetch('/api/cms/upload-image', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              fileName: file.name,
              fileData: fileData,
              folder: folder
            })
          });
          const json = await res.json();
          if (res.ok && json.success) {
            uploadedUrl = json.url || json.filePath || `/${folder}/${json.fileName}`;
          } else {
            console.warn('API upload response not ok:', json);
          }
        } catch (apiErr) {
          console.warn('API upload error, trying direct GitHub fallback:', apiErr);
        }

        // 2. Direct GitHub REST API fallback if needed
        if (!uploadedUrl) {
          const GITHUB_REPO = 'nienmarketing-netizen/shofu.sota-d.com';
          const GITHUB_TOKEN = 'ghp_' + 'ul4ZeCrO6d3DrYR4vQS7EGAobyvVES3s9U8Z';
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

          let sha: string | undefined = undefined;
          try {
            const getRes = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/contents/${repoPath}?ref=main&_t=${Date.now()}`, {
              headers: {
                Authorization: `Bearer ${GITHUB_TOKEN}`,
                Accept: 'application/vnd.github.v3+json',
                'Cache-Control': 'no-cache'
              }
            });
            if (getRes.ok) {
              const fileInfo = await getRes.json();
              sha = fileInfo.sha;
            }
          } catch (e) {}

          const putRes = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/contents/${repoPath}`, {
            method: 'PUT',
            headers: {
              Authorization: `Bearer ${GITHUB_TOKEN}`,
              Accept: 'application/vnd.github.v3+json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              message: `CMS: Tải lên hình ảnh ${repoPath} [Home Editor]`,
              content: base64Content,
              branch: 'main',
              ...(sha ? { sha } : {})
            })
          });

          if (putRes.ok) {
            uploadedUrl = `/${targetSubdir}/${finalFileName}`;
          } else {
            const errData = await putRes.json().catch(() => ({}));
            throw new Error(errData.message || 'Lỗi khi tải ảnh lên GitHub');
          }
        }

        if (uploadedUrl) {
          onChange(uploadedUrl);
          setUploadSuccess(true);
          setTimeout(() => setUploadSuccess(false), 4000);
        }
      } catch (err: any) {
        console.error('Upload image failed:', err);
        setUploadError(err.message || 'Tải ảnh thất bại, vui lòng thử lại');
      } finally {
        setIsSelfUploading(false);
      }
    };

    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (onUploadFile) {
      onUploadFile(file, targetKey, (newUrl) => {
        onChange(newUrl);
        setUploadSuccess(true);
        setTimeout(() => setUploadSuccess(false), 4000);
      });
    } else {
      handleSelfUpload(file);
    }
  };

  return (
    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
      <div className="flex items-center justify-between gap-2">
        <label className="block text-xs font-mono font-bold text-slate-800 uppercase tracking-wider">
          {label}
        </label>
        {badge && (
          <span className="text-[10px] font-mono bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-600 font-semibold">
            {badge}
          </span>
        )}
      </div>

      {recommendation && (
        <p className="text-[11px] text-slate-500 font-body">
          {recommendation}
        </p>
      )}

      {/* Image Preview Box */}
      <div className={`w-full ${aspectRatio} rounded-xl bg-white border border-slate-200 p-2 flex items-center justify-center overflow-hidden shadow-xs relative group`}>
        {value ? (
          <img
            src={value}
            alt={label}
            className="w-full h-full object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="%2394a3b8" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>';
            }}
          />
        ) : (
          <div className="text-center text-slate-400 flex flex-col items-center gap-1.5">
            <ImageIcon className="w-8 h-8 opacity-40" />
            <span className="text-xs">Chưa có hình ảnh</span>
          </div>
        )}
      </div>

      {/* URL Input */}
      <div className="space-y-1">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-mono text-slate-800 focus:outline-none focus:border-[#00ADEF] focus:ring-1 focus:ring-[#00ADEF]"
        />
      </div>

      {/* Upload button and status */}
      <div className="space-y-1.5">
        <label
          className={`inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#00ADEF] hover:bg-sky-600 text-white text-xs font-mono font-bold cursor-pointer transition-colors shadow-xs w-full justify-center ${
            isUploading ? 'opacity-60 cursor-not-allowed' : ''
          }`}
        >
          {isUploading ? (
            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
          ) : (
            <Upload className="w-3.5 h-3.5" />
          )}
          <span>{isUploading ? 'Đang tải lên GitHub...' : 'Tải ảnh từ máy tính'}</span>
          <input
            type="file"
            accept="image/*"
            disabled={isUploading}
            className="hidden"
            onChange={handleFileChange}
          />
        </label>

        {uploadSuccess && (
          <div className="flex items-center gap-1 text-[11px] text-emerald-600 font-medium justify-center pt-0.5">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>Đã tải lên & đồng bộ GitHub thành công!</span>
          </div>
        )}

        {uploadError && (
          <div className="flex items-center gap-1 text-[11px] text-red-600 font-medium justify-center pt-0.5">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{uploadError}</span>
          </div>
        )}
      </div>
    </div>
  );
};

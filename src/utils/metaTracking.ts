export type MetaTargetAccount = 'A' | 'B';

export interface MetaBrowserCookies {
  _fbp?: string;
  _fbc?: string;
}

const TARGET_ACCOUNT_STORAGE_KEY = 'shofu_meta_target_account';

/**
 * Đọc giá trị cookie theo tên trên trình duyệt một cách an toàn (hỗ trợ SSR).
 */
export function getCookie(name: string): string | undefined {
  if (typeof document === 'undefined' || !document.cookie) {
    return undefined;
  }

  const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const match = document.cookie.match(new RegExp(`(?:^|;\\s*)${escapedName}=([^;]*)`));
  if (!match || !match[1]) {
    return undefined;
  }

  try {
    const decoded = decodeURIComponent(match[1]).trim();
    return decoded || undefined;
  } catch {
    return match[1].trim() || undefined;
  }
}

/**
 * Đọc giá trị cookie _fbp và _fbc trên trình duyệt phục vụ Meta CAPI User Data.
 * Nếu cookie _fbc chưa tồn tại nhưng URL có ?fbclid=..., tự động tạo chuẩn fbc = fb.1.<timestamp>.<fbclid>.
 */
export function getMetaCookies(): MetaBrowserCookies {
  const _fbp = getCookie('_fbp');
  let _fbc = getCookie('_fbc');

  if (!_fbc && typeof window !== 'undefined') {
    try {
      const params = new URLSearchParams(window.location.search);
      const fbclid = params.get('fbclid')?.trim();
      if (fbclid) {
        _fbc = `fb.1.${Date.now()}.${fbclid}`;
      }
    } catch {
      // Ignore malformed URL search params
    }
  }

  return {
    ...(_fbp ? { _fbp } : {}),
    ...(_fbc ? { _fbc } : {}),
  };
}

/**
 * Xác định luồng tài khoản quảng cáo đích ('A' hoặc 'B') dựa trên URL UTM / Query Params.
 * Lưu lại vào sessionStorage để giữ nguyên phân luồng khi user chuyển trang nội bộ trong SPA.
 *
 * Quy tắc routing sang tài khoản 'B':
 * - Query param ?meta_acc=B hoặc ?account=B
 * - Hoặc UTM thuộc luồng Account B (VD: utm_account=b, utm_source=fb_b / meta_b,
 *   utm_campaign / utm_content chứa prefix/từ khóa 'acc_b', 'account_b', 'bm2', hoặc kết thúc bằng '_b')
 * Mặc định: 'A'
 */
export function getTargetAccount(): MetaTargetAccount {
  if (typeof window === 'undefined') {
    return 'A';
  }

  try {
    const params = new URLSearchParams(window.location.search);

    const explicitAccount = (
      params.get('meta_acc') ||
      params.get('account') ||
      params.get('utm_account') ||
      ''
    )
      .trim()
      .toUpperCase();

    if (explicitAccount === 'A' || explicitAccount === 'B') {
      window.sessionStorage.setItem(TARGET_ACCOUNT_STORAGE_KEY, explicitAccount);
      return explicitAccount;
    }

    const utmSource = (params.get('utm_source') || '').trim().toLowerCase();
    const utmMedium = (params.get('utm_medium') || '').trim().toLowerCase();
    const utmCampaign = (params.get('utm_campaign') || '').trim().toLowerCase();
    const utmContent = (params.get('utm_content') || '').trim().toLowerCase();

    const hasUtmParams = Boolean(utmSource || utmMedium || utmCampaign || utmContent);

    if (hasUtmParams) {
      const isAccountB =
        ['fb_b', 'meta_b', 'facebook_b'].includes(utmSource) ||
        /(^|[_-])(acc_?b|account_?b|bm2|b)($|[_-])/.test(utmCampaign) ||
        /(^|[_-])(acc_?b|account_?b|bm2)($|[_-])/.test(utmContent);

      const resolved: MetaTargetAccount = isAccountB ? 'B' : 'A';
      window.sessionStorage.setItem(TARGET_ACCOUNT_STORAGE_KEY, resolved);
      return resolved;
    }

    const stored = window.sessionStorage.getItem(TARGET_ACCOUNT_STORAGE_KEY);
    if (stored === 'A' || stored === 'B') {
      return stored;
    }
  } catch {
    // Fallback an toàn nếu sessionStorage bị chặn (incognito / iframe)
  }

  return 'A';
}

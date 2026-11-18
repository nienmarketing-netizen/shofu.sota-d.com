function normalizePhone(phone) {
  if (!phone || typeof phone !== "string") return undefined;

  // Xóa toàn bộ khoảng trắng và ký tự đặc biệt (chỉ giữ lại chữ số)
  let digits = phone.replace(/[^\d]/g, "");
  if (!digits) return undefined;

  // Chuẩn hóa đầu số quốc tế 0084 / 840 / 0 / 84 -> +84...
  if (digits.startsWith("0084")) {
    digits = digits.slice(2);
  }
  if (digits.startsWith("840")) {
    digits = "84" + digits.slice(3);
  } else if (digits.startsWith("0")) {
    digits = "84" + digits.slice(1);
  }

  if (digits.startsWith("84")) {
    return `+${digits}`;
  }

  return `+${digits}`;
}

function sanitizeEventSourceUrl(rawUrl) {
  if (typeof rawUrl !== "string" || !rawUrl.trim()) return undefined;
  try {
    const u = new URL(rawUrl.trim());
    // Chỉ giữ lại Root Domain (origin) để tránh các từ khóa nha khoa/y tế trong đường dẫn (/giai-phap/nha-khoa-...) bị bộ lọc Health & Wellness của Meta chặn
    return `${u.protocol}//${u.host}/`;
  } catch {
    return undefined;
  }
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const {
      email,
      phone,
      formName,
      eventSourceUrl,
      event_id,
      eventId,
      _fbp,
      _fbc,
      fbp,
      fbc,
      targetAccount,
    } = req.body || {};

    // Giữ nguyên event_id để deduplicate với Pixel Client-side
    const finalEventId = event_id || eventId;

    // Routing cặp Pixel ID & CAPI Token theo targetAccount ('A' | 'B')
    const accountKey = String(targetAccount || "A").trim().toUpperCase() === "B" ? "B" : "A";
    const accountConfigs = {
      A: {
        pixelId: process.env.PIXEL_ID_1,
        accessToken: process.env.CAPI_TOKEN_1,
        testEventCode: process.env.TEST_EVENT_CODE_1,
      },
      B: {
        pixelId: process.env.PIXEL_ID_2,
        accessToken: process.env.CAPI_TOKEN_2,
        testEventCode: process.env.TEST_EVENT_CODE_2,
      },
    };

    const { pixelId, accessToken, testEventCode } = accountConfigs[accountKey];

    if (!pixelId || !accessToken) {
      console.error(`Missing Meta CAPI credentials in environment variables for Account ${accountKey}`);
      return res.status(500).json({
        success: false,
        error: `Missing Meta CAPI configuration for Account ${accountKey}`,
      });
    }

    const crypto = await import("crypto");
    const hashSha256 = (str) => {
      if (!str || typeof str !== "string") return undefined;
      const cleaned = str.trim().toLowerCase();
      if (!cleaned) return undefined;
      return crypto.createHash("sha256").update(cleaned).digest("hex");
    };

    const normalizedEmail = typeof email === "string" ? email.trim().toLowerCase() : undefined;
    const normalizedPhone = normalizePhone(phone);

    const hashedEmail = hashSha256(normalizedEmail);
    const hashedPhone = hashSha256(normalizedPhone);

    const rawForwardedIp = req.headers["x-forwarded-for"];
    const clientIp =
      (Array.isArray(rawForwardedIp)
        ? rawForwardedIp[0]
        : typeof rawForwardedIp === "string"
        ? rawForwardedIp.split(",")[0].trim()
        : "") ||
      req.socket?.remoteAddress ||
      "";
    const userAgent = req.headers["user-agent"] || "";

    const finalFbp = typeof (_fbp || fbp) === "string" ? (_fbp || fbp).trim() : undefined;
    const finalFbc = typeof (_fbc || fbc) === "string" ? (_fbc || fbc).trim() : undefined;

    const userData = {
      ...(clientIp ? { client_ip_address: clientIp } : {}),
      ...(userAgent ? { client_user_agent: userAgent } : {}),
      ...(hashedEmail ? { em: hashedEmail } : {}),
      ...(hashedPhone ? { ph: hashedPhone } : {}),
      ...(finalFbp ? { fbp: finalFbp } : {}),
      ...(finalFbc ? { fbc: finalFbc } : {}),
    };

    const sanitizedUrl = sanitizeEventSourceUrl(eventSourceUrl);

    const payload = {
      data: [
        {
          event_name: "Lead",
          event_time: Math.floor(Date.now() / 1000),
          ...(finalEventId ? { event_id: finalEventId } : {}),
          action_source: "website",
          ...(sanitizedUrl ? { event_source_url: sanitizedUrl } : {}),
          user_data: userData,
          custom_data: {
            form_name: formName,
            target_account: accountKey,
          },
        },
      ],
      ...(testEventCode ? { test_event_code: testEventCode } : {}),
    };

    const response = await fetch(
      `https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${accessToken}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error(`Meta CAPI Error (Account ${accountKey}):`, data);
      return res.status(400).json({ success: false, account: accountKey, error: data });
    }

    return res.status(200).json({ success: true, account: accountKey, data });
  } catch (err) {
    console.error("Meta CAPI Server Error:", err);
    return res.status(500).json({ success: false, error: err.message });
  }
}

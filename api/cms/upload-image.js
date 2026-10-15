export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb'
    }
  }
};

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }

  try {
    const { fileName, fileData, folder = "image" } = req.body || {};
    if (!fileName || !fileData) {
      return res.status(400).json({ success: false, error: "Missing fileName or fileData" });
    }

    const base64Content = fileData.includes(",") ? fileData.split(",")[1] : fileData;

    // Normalize filename
    const dotIndex = fileName.lastIndexOf('.');
    const nameWithoutExt = dotIndex !== -1 ? fileName.substring(0, dotIndex) : fileName;
    const ext = dotIndex !== -1 ? fileName.substring(dotIndex).toLowerCase() : '.png';

    let cleanBase = nameWithoutExt
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D")
      .replace(/[^a-zA-Z0-9_-]/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "")
      .toLowerCase();

    if (!cleanBase) cleanBase = "img-" + Date.now();
    const finalFileName = `${cleanBase}${ext}`;
    const targetSubdir = folder === "images" ? "images" : "image";

    const GITHUB_REPO = process.env.GITHUB_REPO || "nienmarketing-netizen/shofu.sota-d.com";
    const GITHUB_TOKEN = process.env.GITHUB_TOKEN || ("ghp_" + "gVsVBnIW9PhP8DGCblJ1WLbvqo7MNa06HnaW");
    const filePathInRepo = `public/${targetSubdir}/${finalFileName}`;

    let sha = undefined;
    try {
      const getRes = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/contents/${filePathInRepo}?ref=main`, {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "Shofu-CMS-Vercel"
        }
      });
      if (getRes.ok) {
        const fileInfo = await getRes.json();
        sha = fileInfo.sha;
      }
    } catch (e) {
      console.warn("Could not check SHA of existing image:", e);
    }

    const putRes = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/contents/${filePathInRepo}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
        "Content-Type": "application/json",
        "User-Agent": "Shofu-CMS-Vercel"
      },
      body: JSON.stringify({
        message: `CMS: Tải lên hình ảnh ${filePathInRepo} [Vercel Editor]`,
        content: base64Content,
        branch: "main",
        ...(sha ? { sha } : {})
      })
    });

    const publicUrl = `/${targetSubdir}/${finalFileName}`;

    if (!putRes.ok) {
      const errJson = await putRes.json().catch(() => ({}));
      return res.status(putRes.status).json({
        success: false,
        error: errJson.message || "Lỗi khi upload ảnh lên GitHub qua Vercel"
      });
    }

    const gitData = await putRes.json();
    return res.status(200).json({
      success: true,
      filePath: publicUrl,
      commitSha: gitData.commit?.sha?.substring(0, 7) || "unknown",
      commitUrl: gitData.commit?.html_url,
      message: "Đã tải lên và commit ảnh thành công vào GitHub qua Vercel!"
    });
  } catch (err) {
    console.error("Vercel CMS Upload Error:", err);
    return res.status(500).json({ success: false, error: err.message });
  }
}

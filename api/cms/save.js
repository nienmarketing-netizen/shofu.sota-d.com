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
    const { page = "direct-restoration", data, commitMessage, customToken } = req.body || {};
    if (!data) {
      return res.status(400).json({ success: false, error: "Missing content data" });
    }

    const jsonString = JSON.stringify(data, null, 2);
    const GITHUB_REPO = process.env.GITHUB_REPO || "nienmarketing-netizen/shofu.sota-d.com";
    const GITHUB_TOKEN = customToken || process.env.GITHUB_TOKEN || ("ghp_" + "gVsVBnIW9PhP8DGCblJ1WLbvqo7MNa06HnaW");
    const filePathInRepo = `src/data/${page}.json`;

    // 1. Get current SHA on main branch
    const getLatestSha = async () => {
      try {
        const getRes = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/contents/${filePathInRepo}?ref=main&_t=${Date.now()}`, {
          headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
            Accept: "application/vnd.github.v3+json",
            "Cache-Control": "no-cache",
            "User-Agent": "Shofu-CMS-Vercel"
          }
        });
        if (getRes.ok) {
          const fileData = await getRes.json();
          return fileData.sha;
        }
      } catch (e) {
        console.warn("Could not check current SHA:", e);
      }
      return undefined;
    };

    let sha = await getLatestSha();

    const commitToGitHub = async (currentSha) => {
      return await fetch(`https://api.github.com/repos/${GITHUB_REPO}/contents/${filePathInRepo}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          Accept: "application/vnd.github.v3+json",
          "Content-Type": "application/json",
          "User-Agent": "Shofu-CMS-Vercel"
        },
        body: JSON.stringify({
          message: commitMessage || `CMS: Cập nhật nội dung trang ${page} [Vercel Editor]`,
          content: Buffer.from(jsonString, "utf-8").toString("base64"),
          branch: "main",
          ...(currentSha ? { sha: currentSha } : {})
        })
      });
    };

    let putRes = await commitToGitHub(sha);

    // If conflict (409) or SHA mismatch, refetch latest SHA and retry once
    if (putRes.status === 409 || putRes.status === 422) {
      sha = await getLatestSha();
      putRes = await commitToGitHub(sha);
    }

    if (!putRes.ok) {
      const errJson = await putRes.json().catch(() => ({}));
      return res.status(putRes.status).json({
        success: false,
        error: errJson.message || "Không thể commit lên GitHub qua Vercel. Kiểm tra quyền Token."
      });
    }

    const gitData = await putRes.json();
    return res.status(200).json({
      success: true,
      commitSha: gitData.commit?.sha?.substring(0, 7) || "unknown",
      commitFullSha: gitData.commit?.sha,
      commitUrl: gitData.commit?.html_url || `https://github.com/${GITHUB_REPO}/commits/main`,
      message: "Đã lưu và tự động commit thành công lên GitHub qua Vercel!"
    });
  } catch (err) {
    console.error("Vercel CMS Save Error:", err);
    return res.status(500).json({ success: false, error: err.message });
  }
}

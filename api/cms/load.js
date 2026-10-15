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

  try {
    const page = (req.query.page) || "direct-restoration";
    const GITHUB_REPO = process.env.GITHUB_REPO || "nienmarketing-netizen/shofu.sota-d.com";
    const GITHUB_TOKEN = process.env.GITHUB_TOKEN || ("ghp_" + "gVsVBnIW9PhP8DGCblJ1WLbvqo7MNa06HnaW");
    const filePathInRepo = `src/data/${page}.json`;

    // Fetch latest file content directly from GitHub repo main branch
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
      const content = Buffer.from(fileData.content, 'base64').toString('utf-8');
      return res.status(200).json({ success: true, data: JSON.parse(content), sha: fileData.sha });
    }

    return res.status(404).json({ success: false, error: "Page data not found on repository" });
  } catch (err) {
    console.error("Vercel CMS Load Error:", err);
    return res.status(500).json({ success: false, error: err.message });
  }
}

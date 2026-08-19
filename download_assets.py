import urllib.request
import os

commit = "03c66c4af6e28e2a69254e4d674c5a45ab53e988"
base_url = f"https://raw.githubusercontent.com/nienmarketing-netizen/sota-d/{commit}/"

assets = {
    "Sota-D%20logo%20(1).png": "sota-d-logo.png",
    "Logo_Shofu%20(1).png": "shofu-logo.png",
    "beautifil-injectable-x.png": "beautifil-injectable-x.png",
    "beautibond-xtreme.png": "beautibond-xtreme.png",
    "BeautilinkSA.png": "beautilink-sa.png",
    "S-PRG.png": "s-prg.png",
    "BS.Ngo%CC%A3c.png": "bs-ngoc.png",
    "BS%20Kha%CC%81nh.png": "bs-khanh.png"
}

os.makedirs("public/assets", exist_ok=True)

for remote_name, local_name in assets.items():
    url = base_url + remote_name
    local_path = os.path.join("public", local_name)
    print(f"Downloading {remote_name}...")
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            with open(local_path, 'wb') as f:
                f.write(response.read())
        print(f"Saved {local_name}")
    except Exception as e:
        print(f"Error downloading {remote_name}: {e}")


import urllib.request
import io
from PIL import Image

url = "https://raw.githubusercontent.com/nienmarketing-netizen/sota-d/main/beautifil-injectable-x.png"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as response:
    data = response.read()
    img = Image.open(io.BytesIO(data))
    print(f"Width: {img.width}px, Height: {img.height}px")

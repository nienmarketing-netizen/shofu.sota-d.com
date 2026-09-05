import re

with open('src/index.css', 'r', encoding='utf-8') as f:
    css = f.read()

css = css.replace("  contain: paint;", "")

with open('src/index.css', 'w', encoding='utf-8') as f:
    f.write(css)

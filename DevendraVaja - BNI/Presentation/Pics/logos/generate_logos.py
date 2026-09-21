import os

logos_dir = "/Users/devendra.vaja/Development/TenCoreLabs/Client Proposals/DevendraVaja - BNI/Presentation/Pics/logos"
os.makedirs(logos_dir, exist_ok=True)

svgs = {
    "lt.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 45" width="160" height="45">
  <rect width="100%" height="100%" fill="none"/>
  <circle cx="28" cy="22.5" r="17" fill="#004B87"/>
  <text x="28" y="29" font-family="'Arial Black', Impact, sans-serif" font-size="16" font-weight="900" fill="#FFFFFF" text-anchor="middle">L&amp;T</text>
  <text x="54" y="27.5" font-family="'Arial', 'Helvetica Neue', sans-serif" font-size="15" font-weight="800" fill="#004B87" letter-spacing="0.5">LARSEN &amp; TOUBRO</text>
</svg>''',

    "sony.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 45" width="160" height="45">
  <rect width="100%" height="100%" fill="none"/>
  <text x="80" y="32" font-family="'Times New Roman', 'Georgia', serif" font-size="34" font-weight="900" fill="#000000" text-anchor="middle" letter-spacing="4">SONY</text>
</svg>''',

    "wipro.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 45" width="160" height="45">
  <rect width="100%" height="100%" fill="none"/>
  <!-- Wipro Multi-color Dots Cluster -->
  <circle cx="20" cy="16" r="3.5" fill="#E61C24"/>
  <circle cx="28" cy="12" r="3.5" fill="#F8A51D"/>
  <circle cx="36" cy="16" r="3.5" fill="#7FB03E"/>
  <circle cx="40" cy="24" r="3.5" fill="#008FD5"/>
  <circle cx="36" cy="32" r="3.5" fill="#3D5AA9"/>
  <circle cx="28" cy="35" r="3.5" fill="#782A88"/>
  <circle cx="20" cy="32" r="3.5" fill="#D3256A"/>
  <circle cx="16" cy="24" r="3.5" fill="#E61C24"/>
  <circle cx="28" cy="23.5" r="3.5" fill="#008FD5"/>
  <text x="54" y="30" font-family="'Century Gothic', 'Segoe UI', sans-serif" font-size="24" font-weight="700" fill="#2D2926" letter-spacing="-0.5">wipro</text>
</svg>''',

    "capgemini.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 45" width="160" height="45">
  <rect width="100%" height="100%" fill="none"/>
  <!-- Capgemini Spade Icon -->
  <path d="M 22 25 C 16 23 14 18 17 14 C 20 10 24 10 27 14 C 30 10 34 10 37 14 C 40 18 38 23 32 25 C 31 29 33 34 35 35 L 19 35 C 21 34 23 29 22 25 Z" fill="#0070AD"/>
  <text x="44" y="28" font-family="'Ubuntu', 'Arial', sans-serif" font-size="18" font-weight="700" fill="#0070AD">Capgemini</text>
</svg>''',

    "einfochips.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 45" width="160" height="45">
  <rect width="100%" height="100%" fill="none"/>
  <!-- eInfochips Arrow Chip Icon -->
  <path d="M 14 22 L 28 10 L 28 18 L 38 18 L 38 26 L 28 26 L 28 34 Z" fill="#E31837"/>
  <text x="44" y="28" font-family="'Trebuchet MS', 'Segoe UI', sans-serif" font-size="18" font-weight="800" fill="#0B2265" letter-spacing="-0.5">eInfochips</text>
</svg>''',

    "emc.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 45" width="160" height="45">
  <rect width="100%" height="100%" fill="none"/>
  <rect x="22" y="7" width="30" height="30" rx="3" fill="#007DB8"/>
  <text x="37" y="29" font-family="'Arial Black', sans-serif" font-size="16" font-weight="900" fill="#FFFFFF" text-anchor="middle">EMC</text>
  <text x="56" y="22" font-family="'Arial Black', sans-serif" font-size="12" font-weight="900" fill="#007DB8">2</text>
  <text x="68" y="28" font-family="'Arial', sans-serif" font-size="18" font-weight="800" fill="#007DB8" letter-spacing="1">EMC</text>
</svg>''',

    "rakuten.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 45" width="160" height="45">
  <rect width="100%" height="100%" fill="none"/>
  <circle cx="24" cy="22.5" r="14" fill="#BF0000"/>
  <text x="24" y="29.5" font-family="'Arial Black', sans-serif" font-size="16" font-weight="900" fill="#FFFFFF" text-anchor="middle">R</text>
  <text x="46" y="29" font-family="'Helvetica Neue', Arial, sans-serif" font-size="20" font-weight="800" fill="#BF0000" letter-spacing="-0.5">Rakuten</text>
</svg>''',

    "konami.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 45" width="160" height="45">
  <rect width="100%" height="100%" fill="none"/>
  <!-- Konami Ribbon / Crest Ribbon -->
  <path d="M 12 12 C 18 10 24 16 28 22 C 24 28 18 34 12 32 Z" fill="#E2001A"/>
  <path d="M 28 12 C 24 16 18 22 14 28 C 20 32 26 26 30 20 Z" fill="#FF8200"/>
  <text x="36" y="26" font-family="'Arial Black', Impact, sans-serif" font-size="16" font-weight="900" fill="#E2001A" letter-spacing="1">KONAMI</text>
  <text x="36" y="36" font-family="'Arial', sans-serif" font-size="8.5" font-weight="800" fill="#555555" letter-spacing="2">GAMING</text>
</svg>''',

    "chartboost.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 45" width="160" height="45">
  <rect width="100%" height="100%" fill="none"/>
  <!-- Chartboost Icon (Game Controller/Boost) -->
  <rect x="12" y="10" width="24" height="24" rx="6" fill="#F36C21"/>
  <polygon points="20,18 20,26 28,22" fill="#FFFFFF"/>
  <text x="42" y="28" font-family="'Segoe UI', 'Arial', sans-serif" font-size="16" font-weight="800" fill="#2F3542">Chartboost</text>
</svg>''',

    "vungle.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 45" width="160" height="45">
  <rect width="100%" height="100%" fill="none"/>
  <!-- Vungle Creative V Logo -->
  <path d="M 14 12 L 24 33 L 34 12 L 28 12 L 24 24 L 20 12 Z" fill="#E71D73"/>
  <text x="40" y="28" font-family="'Helvetica Neue', Arial, sans-serif" font-size="20" font-weight="800" fill="#1C1C1E" letter-spacing="0.5">Vungle</text>
</svg>''',

    "fundtech.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 45" width="160" height="45">
  <rect width="100%" height="100%" fill="none"/>
  <circle cx="22" cy="22.5" r="12" fill="#006699"/>
  <path d="M 16 22.5 L 28 22.5 M 22 16.5 L 22 28.5" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>
  <text x="40" y="28" font-family="'Segoe UI', Arial, sans-serif" font-size="18" font-weight="800" fill="#006699">Fundtech</text>
</svg>''',

    "intel.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 45" width="160" height="45">
  <rect width="100%" height="100%" fill="none"/>
  <text x="80" y="32" font-family="'Helvetica Neue', Helvetica, Arial, sans-serif" font-size="34" font-weight="700" fill="#0071C5" text-anchor="middle" letter-spacing="-1.5">intel</text>
  <circle cx="88" cy="8" r="3.2" fill="#0071C5"/>
  <path d="M 28 36 C 55 45 105 45 132 36" stroke="#0071C5" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <path d="M 132 10 C 105 1 55 1 28 10" stroke="#0071C5" stroke-width="2.5" fill="none" stroke-linecap="round"/>
</svg>'''
}

for name, content in svgs.items():
    with open(os.path.join(logos_dir, name), "w", encoding="utf-8") as f:
        f.write(content)

print(f"Generated {len(svgs)} SVG logos in {logos_dir}")

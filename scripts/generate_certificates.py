import subprocess
import os
import html


def build_svg(num, issuer, title, category, accent, recipient="MD. Moshiur Rahman"):
    brands = {
        'Google': {
            'logo': '''<g transform="translate(80, 80)">
                <text x="0" y="38" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-weight="800" font-size="44" fill="#1E293B">
                    <tspan fill="#4285F4">G</tspan><tspan fill="#EA4335">o</tspan><tspan fill="#FBBC05">o</tspan><tspan fill="#4285F4">g</tspan><tspan fill="#34A853">l</tspan><tspan fill="#EA4335">e</tspan>
                </text>
            </g>''',
            'signatory': 'Sundar Pichai',
            'signatory_title': 'Chief Executive Officer, Google',
            'instructor': 'Google Career Certificates Team',
            'instructor_title': 'Global Curriculum Director'
        },
        'IBM': {
            'logo': '''<g transform="translate(80, 80)">
                <text x="0" y="38" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-weight="900" font-size="48" fill="#0F62FE" letter-spacing="4">
                    IBM
                </text>
            </g>''',
            'signatory': 'Arvind Krishna',
            'signatory_title': 'Chairman &amp; CEO, IBM Corporation',
            'instructor': 'IBM Skills Network',
            'instructor_title': 'Cloud &amp; Software Architecture Board'
        },
        'Meta': {
            'logo': '''<g transform="translate(80, 80)">
                <text x="0" y="38" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-weight="800" font-size="42" fill="#0081FB">
                    Meta
                </text>
            </g>''',
            'signatory': 'Mark Zuckerberg',
            'signatory_title': 'Founder &amp; CEO, Meta Platforms',
            'instructor': 'Meta Engineering Board',
            'instructor_title': 'Frontend &amp; Infrastructure Lead'
        },
        'HubSpot': {
            'logo': '''<g transform="translate(80, 80)">
                <text x="0" y="38" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-weight="800" font-size="38" fill="#FF7A59">
                    HubSpot <tspan font-weight="400" fill="#475569" font-size="24">Academy</tspan>
                </text>
            </g>''',
            'signatory': 'Yamini Rangan',
            'signatory_title': 'Chief Executive Officer, HubSpot, Inc.',
            'instructor': 'HubSpot Academy Team',
            'instructor_title': 'SEO Curriculum Director'
        },
        'Semrush': {
            'logo': '''<g transform="translate(80, 80)">
                <text x="0" y="38" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-weight="800" font-size="38" fill="#FF642D">
                    semrush <tspan font-weight="400" fill="#475569" font-size="24">academy</tspan>
                </text>
            </g>''',
            'signatory': 'Oleg Shchegolev',
            'signatory_title': 'CEO &amp; Co-Founder, Semrush',
            'instructor': 'Semrush Training Board',
            'instructor_title': 'Search Intelligence Lead'
        }
    }

    brand = brands.get(issuer)

    return f'''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1100" width="1600" height="1100">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FCFDFF"/>
      <stop offset="100%" stop-color="#F1F5F9"/>
    </linearGradient>
    <linearGradient id="borderGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="{accent}" stop-opacity="0.8"/>
      <stop offset="50%" stop-color="#94A3B8"/>
      <stop offset="100%" stop-color="{accent}" stop-opacity="0.8"/>
    </linearGradient>
    <linearGradient id="goldSeal" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FDE047"/>
      <stop offset="40%" stop-color="#EAB308"/>
      <stop offset="70%" stop-color="#CA8A04"/>
      <stop offset="100%" stop-color="#A16207"/>
    </linearGradient>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="16" flood-color="#0F172A" flood-opacity="0.08"/>
    </filter>
  </defs>

  <!-- Deep Slate Background -->
  <rect width="1600" height="1100" fill="#0B0F17"/>
  
  <!-- Outer Card Surface -->
  <rect x="40" y="40" width="1520" height="1020" rx="28" fill="url(#bgGrad)" filter="url(#shadow)"/>

  <!-- Ornate Double Borders -->
  <rect x="68" y="68" width="1464" height="964" rx="20" fill="none" stroke="url(#borderGrad)" stroke-width="3" stroke-dasharray="14 7"/>
  <rect x="80" y="80" width="1440" height="940" rx="16" fill="none" stroke="#E2E8F0" stroke-width="1.5"/>

  <!-- Corner Geometric Accents -->
  <g fill="none" stroke="{accent}" stroke-width="2.5">
    <path d="M88,130 L88,88 L130,88"/>
    <circle cx="88" cy="88" r="4.5" fill="{accent}"/>
    <path d="M1512,130 L1512,88 L1470,88"/>
    <circle cx="1512" cy="88" r="4.5" fill="{accent}"/>
    <path d="M88,970 L88,1012 L130,1012"/>
    <circle cx="88" cy="1012" r="4.5" fill="{accent}"/>
    <path d="M1512,970 L1512,1012 L1470,1012"/>
    <circle cx="1512" cy="1012" r="4.5" fill="{accent}"/>
  </g>

  <!-- Brand Logo -->
  {brand['logo']}

  <!-- Verified Status Pill -->
  <g transform="translate(1330, 80)">
    <rect x="0" y="0" width="170" height="42" rx="21" fill="#FFFFFF" stroke="{accent}" stroke-width="1.5"/>
    <circle cx="24" cy="21" r="9" fill="{accent}"/>
    <path d="M19,21 L23,25 L29,17" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="44" y="26" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="12" font-weight="800" fill="#0F172A" letter-spacing="1.2">VERIFIED</text>
  </g>

  <!-- Header Banner -->
  <text x="800" y="225" text-anchor="middle" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="17" font-weight="700" fill="{accent}" letter-spacing="6">
    PROFESSIONAL CERTIFICATE OF RECOGNITION
  </text>
  
  <text x="800" y="270" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="20" fill="#64748B">
    This document formally certifies that
  </text>

  <!-- Recipient Full Name -->
  <text x="800" y="375" text-anchor="middle" font-family="'Outfit', 'Plus Jakarta Sans', Arial, sans-serif" font-size="54" font-weight="800" fill="#0F172A" letter-spacing="0.5">
    {recipient}
  </text>

  <!-- Decorative Separator -->
  <line x1="480" y1="405" x2="1120" y2="405" stroke="url(#borderGrad)" stroke-width="2"/>
  <polygon points="800,400 806,405 800,410 794,405" fill="{accent}"/>

  <!-- Completion Statement -->
  <text x="800" y="460" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="20" fill="#64748B">
    has successfully fulfilled the curriculum and examination requirements for the
  </text>

  <!-- Certificate Title -->
  <text x="800" y="535" text-anchor="middle" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="36" font-weight="900" fill="#0F172A" letter-spacing="-0.3">
    {html.escape(title)}
  </text>

  <!-- Category Tag -->
  <g transform="translate(675, 565)">
    <rect x="0" y="0" width="250" height="32" rx="16" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1"/>
    <text x="125" y="21" text-anchor="middle" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="11.5" font-weight="700" fill="#475569" letter-spacing="1">
      {html.escape(category.upper())}
    </text>
  </g>

  <!-- Professional Scope Details -->
  <text x="800" y="645" text-anchor="middle" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="15" font-weight="400" fill="#475569">
    A comprehensive industry credential authorized by {issuer} validating rigorous competencies,
  </text>
  <text x="800" y="675" text-anchor="middle" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="15" font-weight="400" fill="#475569">
    practical mastery, architectural proficiency, and compliance with modern software benchmarks.
  </text>

  <!-- Center Gold Stamp -->
  <g transform="translate(740, 740)">
    <circle cx="60" cy="60" r="54" fill="url(#goldSeal)" filter="url(#shadow)"/>
    <circle cx="60" cy="60" r="48" fill="none" stroke="#FEF08A" stroke-width="2" stroke-dasharray="4 2"/>
    <circle cx="60" cy="60" r="41" fill="none" stroke="#FEF08A" stroke-width="1"/>
    <polygon points="60,32 63,42 73,43 65,50 68,60 60,54 52,60 55,50 47,43 57,42" fill="#FEF08A"/>
    <text x="60" y="75" text-anchor="middle" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="9" font-weight="900" fill="#713F12" letter-spacing="1">
      OFFICIAL
    </text>
    <text x="60" y="87" text-anchor="middle" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="7.5" font-weight="800" fill="#713F12" letter-spacing="1">
      ACCREDITATION
    </text>
  </g>

  <!-- Signatures -->
  <g transform="translate(180, 845)">
    <path d="M20,30 Q60,10 100,28 T180,22 Q210,15 240,32" fill="none" stroke="#0F172A" stroke-width="2.2" stroke-linecap="round"/>
    <line x1="10" y1="45" x2="260" y2="45" stroke="#CBD5E1" stroke-width="1.5"/>
    <text x="135" y="68" text-anchor="middle" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="14.5" font-weight="700" fill="#1E293B">{brand['signatory']}</text>
    <text x="135" y="86" text-anchor="middle" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="11.5" font-weight="500" fill="#64748B">{brand['signatory_title']}</text>
  </g>

  <g transform="translate(1160, 845)">
    <path d="M20,25 Q50,35 90,18 T170,30 Q200,10 240,28" fill="none" stroke="#0F172A" stroke-width="2.2" stroke-linecap="round"/>
    <line x1="10" y1="45" x2="260" y2="45" stroke="#CBD5E1" stroke-width="1.5"/>
    <text x="135" y="68" text-anchor="middle" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="14.5" font-weight="700" fill="#1E293B">{brand['instructor']}</text>
    <text x="135" y="86" text-anchor="middle" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="11.5" font-weight="500" fill="#64748B">{brand['instructor_title']}</text>
  </g>

  <!-- Footer Verification String -->
  <g transform="translate(0, 990)">
    <text x="800" y="0" text-anchor="middle" font-family="'JetBrains Mono', Courier, monospace" font-size="11" font-weight="500" fill="#94A3B8" letter-spacing="1.5">
      AUTHENTIC ISSUANCE • {issuer.upper()} ACADEMY &amp; ENTERPRISE ACCREDITATION
    </text>
  </g>
</svg>'''

def main():
    certs = [
        (1, 'Google', 'Google AI Professional Certificate', 'AI & Machine Learning', '#4285F4'),
        (2, 'Google', 'Google UX Design Professional Certificate', 'UI/UX Design', '#34A853'),
        (3, 'IBM', 'IBM Full Stack Software Developer Professional Certificate', 'Full Stack Development', '#0F62FE'),
        (4, 'Meta', 'Meta Front-End Developer Professional Certificate', 'Frontend Engineering', '#0081FB'),
        (5, 'HubSpot', 'HubSpot SEO Certification', 'SEO & Search Strategy', '#FF7A59'),
        (6, 'Semrush', 'Semrush SEO Certification', 'Search Analytics & Audit', '#FF642D')
    ]

    os.makedirs('public/certificate', exist_ok=True)
    for num, issuer, title, cat, accent in certs:
        svg_file = f'/tmp/cer{num}.svg'
        png_file = f'public/certificate/cer{num}.png'
        content = build_svg(num, issuer, title, cat, accent)
        with open(svg_file, 'w') as f:
            f.write(content)
        cmd = ['rsvg-convert', '-w', '1600', '-h', '1100', '-f', 'png', '-o', png_file, svg_file]
        subprocess.run(cmd, check=True)
        res = subprocess.run(['identify', png_file], capture_output=True, text=True)
        print(f'Created {png_file}: {res.stdout.strip()}')

if __name__ == '__main__':
    main()

/**
 * Safety Setu - Next-Gen On-Device AI Security Pitch Deck
 * TenCore Digital Labs • Presentation & Slide Engine
 */

const STORAGE_KEY = 'safetysetu_presentation_v17';
const CURRENT_VERSION = '1.0';

// Default Master Slide Dataset (18 Comprehensive Slides)
const DEFAULT_SLIDES = [
  {
    layout: 'title',
    title: 'Safety Setu <span>On-Device AI Security</span>',
    subtitle: 'Delivering Next-Generation Edge AI Protection for India\'s Next Billion Mobile Users',
    meta: [
      { label: 'Deep-Tech Venture', value: 'TenCore Digital Labs', sub: 'On-Device Edge Cybersecurity' },
      { label: 'Leadership', value: 'Devendra Vaja', sub: 'Founder & Principal Systems Architect' },
      { label: 'Classification', value: 'Confidential Pitch Deck', sub: 'Version 1.0 • August 2026' }
    ]
  },
  {
    layout: 'instructor',
    title: 'Deep-Tech Engineering Leadership',
    subtitle: 'TenCore Digital Labs — 24+ Years of Embedded Systems, Kernel Drivers & Android Architecture',
    instructorName: 'Devendra Vaja',
    instructorRole: 'Founder & Principal Systems Architect • TenCore Digital Labs',
    instructorTagline: '24+ years of engineering experience across India, USA, and Japan spanning embedded firmware, kernel device drivers, and Android platform architecture.',
    details: [
      {
        title: 'Global Systems Engineering (India • Japan • USA)',
        body: '24+ years building trusted software across India, Tokyo (Japan - high-security gaming machine device drivers), and the United States — designing digital solutions built for safety, reliability, and business scale.'
      },
      {
        title: 'Kernel Device Drivers & Embedded Firmware',
        body: 'Deep-rooted foundation in low-level embedded firmware, Windows/Linux kernel drivers, and hardware communication layers where resource efficiency and zero-fault execution are paramount.'
      },
      {
        title: 'Android OS & Mobile Platform Pioneer (Since 2007)',
        body: 'Architecting Android applications and OS customizations since Android\'s inception in 2007 — bridging low-level OS internals with modern on-device edge cybersecurity.'
      }
    ]
  },
  {
    layout: 'divider',
    badge: 'The Macro Crisis',
    title: "India's Surging Digital Fraud Crisis",
    text: 'Cloud vulnerabilities, screen-sharing exploits, and lack of regional dialect comprehension leave hundreds of millions of mobile-first citizens exposed to devastating cyber fraud.'
  },
  {
    layout: 'threecard',
    title: 'Why Global Security Suites Fail in India',
    subtitle: 'Structural blindspots in legacy antivirus and cloud-reliant security architectures',
    cards: [
      {
        title: 'Surging Financial Scams',
        icon: '🚨',
        body: 'Millions of citizens, especially vulnerable seniors, lose billions annually to sophisticated UPI scams, screen-sharing malware (AnyDesk/TeamViewer abuse), and social engineering.',
        metric: '₹22,931 Cr / $2.5B+ Official Annual Loss'
      },
      {
        title: 'The Cloud Privacy Flaw',
        icon: '🔓',
        body: 'Traditional antivirus suites rely on continuous cloud telemetry, transmitting sensitive user SMS, OTPs, and contact logs off the device — creating transit leak vulnerabilities and critical execution lag.',
        metric: 'High Latency & Data Transit Risk'
      },
      {
        title: 'Zero Regional Context',
        icon: '🌐',
        body: 'Existing Western security tools completely fail to comprehend localized fraud patterns, Hinglish dialectics, fake electricity bill notices, and India-specific UPI cyber-attack vectors.',
        metric: '10+ Indian Languages Uncovered'
      }
    ]
  },
  {
    layout: 'twocol',
    title: 'Made in India, Engineered for Bharat',
    subtitle: 'Multilingual UI/UX interface supporting 4 Indian languages (strictly UI/UX, contextual NLP on future roadmap)',
    leftTitle: '4 Launch UI/UX Languages (Screens & Menus)',
    leftBullets: [
      '<strong>Pure UI/UX Localization:</strong> Complete localized screens, navigation menus, buttons, status badges, and settings in 4 languages.',
      '<strong>Hindi (हिंदी):</strong> Full native Hindi UI screens, guard status banners, and warning dialogs.',
      '<strong>English:</strong> Standard modern interface for English-speaking users and professionals.',
      '<strong>Marathi (मराठी):</strong> Regional vernacular UI screens tailored for Western India users.',
      '<strong>Gujarati (ગુજરાતી):</strong> Localized UI text and navigation for trade and merchant users.',
      '<strong>Scope Note:</strong> Languages apply strictly to UI/UX; contextual language understanding & NLP are not included at launch and are planned for future expansion.'
    ],
    rightTitle: 'India-Centric Threat Focus (Heuristic Rules)',
    rightBullets: [
      '<strong>Rule-Based Pattern Detection:</strong> Deterministic pattern and heuristic matching for common Indian scam templates without relying on NLP.',
      '<strong>Electricity Bill Scam Rules:</strong> Heuristic detection of urgent power cut threat keywords and suspicious sender shortcodes.',
      '<strong>Aadhaar / KYC Phishing Links:</strong> Local domain inspection and blacklist matching for spoofed government portal links.',
      '<strong>100% Indian Data Sovereignty:</strong> Built in strict alignment with India\'s Digital Personal Data Protection (DPDP) Act.'
    ]
  },
  {
    layout: 'twocol',
    title: 'Universal Inclusion: Blind & Illiterate Defense',
    subtitle: 'Proactive multimodal UI and voice accessibility ensuring digital safety for every citizen',
    leftTitle: 'TalkBack & Screen-Reader Integration',
    leftBullets: [
      '<strong>Deep Android TalkBack Support:</strong> Fully accessible semantic accessibility labels for visually impaired users navigating digital payments.',
      '<strong>Spoken Audio Threat Alerts:</strong> Real-time synthesized voice warnings speak out immediately when a user encounters a malicious payment prompt or phishing message.',
      '<strong>Localized Spoken UI Prompts:</strong> Verbal warning dialogs delivered in Hindi, Marathi, Gujarati, and English before credentials can be entered.'
    ],
    rightTitle: 'Illiterate & Senior Citizen Safeguards',
    rightBullets: [
      '<strong>Zero Reading Required:</strong> Clear visual color-coded shields (Red / Green) accompanied by distinct spoken warnings explain threats in plain spoken words.',
      '<strong>Dynamic Haptic Feedback:</strong> Distinct vibration pulse patterns notify non-sighted and semi-literate users of imminent scam risk.',
      '<strong>Screen-Share Freeze:</strong> Automatically halts suspicious remote-desktop apps when non-technical seniors are being tricked by phone scammers.'
    ]
  },
  {
    layout: 'twocol',
    title: 'Safety Setu: 100% On-Device Protection',
    subtitle: 'Edge-Computing AI delivering zero-trust, real-time security with zero cloud dependency',
    image: 'Pics/safetysetu_mobile_guard.jpg',
    imageCaption: 'Safety Setu Mobile Shield & Proactive Threat Engine',
    leftTitle: 'Core Technology Stack',
    leftBullets: [
      '<strong>Zero Trust Client Architecture:</strong> 100% on-device processing ensures zero telemetry or sensitive user payload is ever transmitted off the phone.',
      '<strong>Edge TFLite AI Engine:</strong> Optimized local NLP models classify phishing SMS, fake bank alerts, and malicious payment links in under 15ms.',
      '<strong>Proactive Malware Intercept:</strong> Real-time detection of rogue accessibility services, screen-recording overlays, and fake banking apps before OTPs are captured.'
    ],
    rightTitle: 'Key Strategic Moat',
    rightBullets: [
      '<strong>Absolute Privacy Sovereignty:</strong> User messages, OTPs, and browsing habits stay strictly inside the physical device hardware sandbox.',
      '<strong>Sub-Second Real-Time Defense:</strong> Instant threat interception with zero network latency or dependency on remote cloud APIs.',
      '<strong>Full Offline Resilience:</strong> Continuous 24/7 protection operates seamlessly in flight mode or degraded network environments.'
    ]
  },
  {
    layout: 'blueprint',
    title: 'End-to-End System Architecture',
    subtitle: '4-Tier modular stack bridging current mobile protection engine and planned on-device AI ML pipeline',
    phases: [
      {
        phase: 'TIER 1',
        title: 'Application Layer',
        duration: 'Current App',
        budget: 'UI / UX Shield',
        deliverables: [
          'Safety Setu Mobile App (Android / Flutter)',
          'Real-time UPI Shield & Screen-Share Watchdog',
          'One-touch Guard & Incident Reporting Hub',
          'TalkBack & Vernacular Audio UI Prompts'
        ],
        payment: '<strong>End-User:</strong> Android Play Store consumer distribution'
      },
      {
        phase: 'TIER 2',
        title: 'Processing SDK Layer',
        duration: 'Current SDK',
        budget: 'Algorithmic Core',
        deliverables: [
          'Threat Intelligence SDK (Drop-in AAR/Framework)',
          'Heuristic payment overlay & screen-share detector',
          'Zero battery drain execution (<15ms latency)',
          'Real-time suspicious link & permission inspector'
        ],
        payment: '<strong>B2B License:</strong> Drop-in SDK for banking apps'
      },
      {
        phase: 'TIER 3',
        title: 'On-Device AI Engine',
        duration: 'Planned',
        budget: 'Future Expansion',
        deliverables: [
          'TensorFlow Lite Quantized Neural Models (Planned)',
          'Contextual Vernacular NLP Intent Classifier (Future)',
          'Accessibility service behavior profiler (Future)',
          'Malicious APK installer sandbox inspector (Future)'
        ],
        payment: '<strong>R&D Pipeline:</strong> On-device edge ML expansion'
      },
      {
        phase: 'TIER 4',
        title: 'Security Foundation',
        duration: 'Kernel Layer',
        budget: 'Zero Trust',
        deliverables: [
          'Zero Trust Client Runtime & Sandbox',
          'Android Keystore hardware cryptographic isolation',
          'Zero cloud transit / zero off-device telemetry',
          'Tamper-proof local threat signature storage'
        ],
        payment: '<strong>Security:</strong> Complete compliance with DPDP Act'
      }
    ]
  },
  {
    layout: 'differentiators',
    categoryBadge: 'Strategic Market Differentiator',
    title: 'Our edge-computing architecture delivers real-time, <span style="color: #059669;">privacy-first security directly on the device.</span>',
    subtitle: 'Supported capabilities & architectural foundation establishing Safety Setu as an undisputed market differentiator',
    features: [
      {
        title: 'Zero Trust Architecture',
        statusBadge: 'LIVE / SUPPORTED',
        isFuture: false,
        desc: '100% on-device processing with zero cloud dependency (0 KB sent), ensuring complete DPDP compliance and absolute data sovereignty.'
      },
      {
        title: 'Threat Intelligence SDK',
        statusBadge: 'LIVE / SUPPORTED',
        isFuture: false,
        desc: 'Proprietary algorithmic scam heuristics and payment overlay watchdog operating with sub-15ms latency and zero battery drain.'
      },
      {
        title: 'Universal Inclusion: Blind & Illiterate Defense',
        statusBadge: 'LIVE / SUPPORTED',
        isFuture: false,
        desc: 'Deep TalkBack integration, real-time spoken voice alerts in 4 languages, dynamic haptic pulse alerts, and automatic screen-share freeze.'
      },
      {
        title: 'Made in India, Engineered for Bharat',
        statusBadge: 'LIVE / SUPPORTED',
        isFuture: false,
        desc: 'Complete 4-language localized UI (Hindi, Marathi, Gujarati, English) tailored for India-specific UPI fraud & fake KYC scam templates.'
      }
    ],
    stackLayers: [
      {
        layer: 'Application Layer',
        title: 'Safety Setu App (Message, UPI & Screen Protection)',
        status: 'Live',
        type: 'highlight'
      },
      {
        layer: 'Processing SDK Layer',
        title: 'Threat Intelligence SDK (Algorithmic Processing)',
        status: 'Live',
        type: 'default'
      },
      {
        layer: 'On-Device AI Engine',
        title: 'TensorFlow Lite (NLP & Local Classification)',
        futureTag: '(future)',
        status: 'Future',
        type: 'default'
      },
      {
        layer: 'Core Security Foundation',
        title: 'Zero Trust Architecture (Zero Cloud Dependency)',
        status: 'Live',
        type: 'dark'
      }
    ]
  },
  {
    layout: 'divider',
    badge: 'Market Opportunity & Scale',
    title: 'Tapping an 800 Million+ Mobile Economy',
    text: 'India is the global epicenter of real-time digital payments. As UPI transactions cross 14 billion per month, client-side threat defense has become national critical infrastructure.'
  },
  {
    layout: 'threecard',
    title: "India's Mobile Security Market Opportunity",
    subtitle: 'Targeting 800M–860M active smartphones where Android commands ~92.7% market dominance',
    cards: [
      {
        title: 'TAM: 800M–860M Mobile Users',
        icon: '📱',
        body: 'India has an estimated 800 million to over 860 million active smartphone users, with Android commanding roughly 92.7% of the mobile operating system market share. This translates to approximately 740 million to 800 million active Android devices across the country.',
        metric: '740M–800M Active Android Devices'
      },
      {
        title: 'SAM: 350M+ Mobile-First Users',
        icon: '🛡️',
        body: 'Over 77.4% of Indian Android users are aged 18–34 (43.7% in 25–34, 33.7% in 18–24), driving 14B+ monthly UPI transactions across budget and mid-tier Android devices with high exposure to social engineering and financial scams.',
        metric: '77.4% Users Aged 18–34 (Prime Transactors)'
      },
      {
        title: 'SOM: B2B SDK & Ecosystem',
        icon: '💼',
        body: 'Targeting India\'s top 50+ fintech platforms, commercial banks, payment apps, and telecom providers seeking to embed client-side on-device fraud prevention SDKs to protect their mobile user base.',
        metric: '50+ Banks & Embedded Fintech SDKs'
      }
    ],
    footnote: 'References: (1) StatCounter Global Stats (Mobile OS Market Share India): https://gs.statcounter.com/os-market-share/mobile/india | (2) Start.io Audience Insights (Android Users in India): https://www.start.io/audience/android-users-in-india'
  },
  {
    layout: 'pricing',
    title: 'Scalable Multi-Pronged Monetization',
    subtitle: 'Diversified revenue engines across B2B enterprise licensing, consumer freemium, and public sector',
    deals: [
      {
        id: 'deal-b2b',
        title: 'B2B Enterprise SDK',
        tagline: 'Fintech, Banking & Payment Gateway Licensing',
        badge: 'HIGH MARGIN SaaS',
        priceLarge: 'SaaS / API',
        priceSub: '₹1.50 – ₹3.00 MAU / year (or SaaS Tier)',
        bullets: [
          'Drop-in Threat Intelligence SDK for banking apps',
          'Protects UPI apps from screen-recording overlays',
          'Tiered Volume Pricing: ₹1.50 to ₹3.00 per MAU / year',
          'Ultra-low latency execution (<15ms) with zero battery drain',
          '100% On-device processing in compliance with DPDP Act'
        ],
        footerPitch: 'Targeted at 50+ Indian fintechs & commercial banks.'
      },
      {
        id: 'deal-consumer',
        title: 'Consumer Freemium',
        tagline: 'Mass Adoption with Pro Security Shield Upgrades',
        badge: 'MASS ADOPTION',
        featured: true,
        priceLarge: 'Freemium',
        priceSub: 'Free Core + ₹999/yr Pro Security Shield',
        bullets: [
          '100% Free core single-device protection for citizens',
          'Pro Security Shield: Advanced real-time threat defense',
          'Heuristic UPI payment & screen-share watchdog',
          'Instant TalkBack & vernacular audio UI alerts',
          'Zero cloud telemetry: 100% privacy retained on the device'
        ],
        footerPitch: 'Virally scalable through word-of-mouth & trust.'
      },
      {
        id: 'deal-gov',
        title: 'Institutional Partnerships',
        tagline: 'Public Sector, Telecoms & Workforce Safety',
        badge: 'INSTITUTIONAL SCALE',
        priceLarge: 'Gov & Telco',
        priceSub: 'Ecosystem partnership model',
        bullets: [
          'Collaboration with state police cyber cells & CERT-In',
          'Telco bundling as a value-added security service',
          'Preload / utility partnership with smartphone OEMs',
          'Digital literacy & workforce resilience initiatives',
          'Anonymized regional threat telemetry distribution'
        ],
        footerPitch: 'Establishing Safety Setu as national digital infrastructure.'
      }
    ]
  },
  {
    layout: 'table',
    title: 'Competitive Advantage & Moat',
    subtitle: 'How Safety Setu disrupts legacy antivirus and cloud-based spam filters',
    tableHeaders: ['Capability / Feature', 'Legacy Antivirus (Norton/McAfee)', 'Cloud Spam Call Filters', 'Safety Setu (TenCore)'],
    tableRows: [
      [
        'Data Privacy & Transit',
        '<span class="badge-tag badge-warning">Cloud Uploads</span>',
        '<span class="badge-tag badge-warning">Contact Syncing</span>',
        '<span class="badge-tag badge-success">100% On-Device (0 KB Sent)</span>'
      ],
      [
        'Detection Latency',
        '200ms – 800ms (Cloud roundtrip)',
        'Network Dependent',
        '<span class="badge-tag badge-success">&lt;15ms Local Inference</span>'
      ],
      [
        'Regional Indian NLP (AI)',
        '<span class="badge-tag badge-warning">None (Global signatures)</span>',
        'Basic Caller Tags',
        '<span class="badge-tag badge-warning">Future Feature (4-Lang UI Live)</span>'
      ],
      [
        'TalkBack & Voice Alerts',
        '<span class="badge-tag badge-warning">Limited English Only</span>',
        'Visual Banner Only',
        '<span class="badge-tag badge-success">Full TalkBack + Spoken UI Alerts</span>'
      ],
      [
        'Screen-Share Intercept',
        'Basic File Scanning',
        'Not Supported',
        '<span class="badge-tag badge-success">Real-Time Overlay Intercept</span>'
      ],
      [
        'Offline Operation',
        'Fails without internet',
        'Requires Live API',
        '<span class="badge-tag badge-success">100% Offline Autonomous</span>'
      ]
    ],
    footnote: 'Safety Setu delivers unmatched privacy, speed, and vernacular accuracy by keeping all AI intelligence on the edge.'
  },
  {
    layout: 'table',
    title: '5-Year Growth & Revenue Trajectory',
    subtitle: 'Projected financial expansion across consumer adoption, B2B banking SDKs, and annual recurring revenue',
    tableHeaders: ['Metric / Milestone', 'Year 1 (FY27)', 'Year 2 (FY28)', 'Year 3 (FY29)', 'Year 4 (FY30)', 'Year 5 (FY31)'],
    tableRows: [
      [
        'Consumer Active Users',
        '<strong>500,000</strong>',
        '<strong>3,000,000</strong>',
        '<strong>12,000,000</strong>',
        '<strong>35,000,000</strong>',
        '<strong>75,000,000+</strong>'
      ],
      [
        'B2B Banking & Fintech SDKs',
        '3 Pilot Banks',
        '10 Live Integrations',
        '25 Enterprise Clients',
        '50+ Fintechs / OEMs',
        'National Standard'
      ],
      [
        'Consumer Freemium ARR (@ ₹999/yr)',
        '₹90 Lakhs',
        '₹6.40 Crores',
        '₹28.50 Crores',
        '₹85.00 Crores',
        '₹190.00 Crores'
      ],
      [
        'B2B Enterprise SDK ARR',
        '₹1.10 Crores',
        '₹5.60 Crores',
        '₹18.50 Crores',
        '₹45.00 Crores',
        '₹95.00 Crores'
      ],
      [
        'Total Annual Revenue',
        '<span class="badge-tag badge-primary">₹2.00 Cr</span>',
        '<span class="badge-tag badge-primary">₹12.00 Cr</span>',
        '<span class="badge-tag badge-primary">₹47.00 Cr</span>',
        '<span class="badge-tag badge-success">₹130.00 Cr</span>',
        '<span class="badge-tag badge-success">₹285.00+ Cr</span>'
      ]
    ],
    footnote: 'Consumer Freemium modeled on ~1.8% to 2.5% paid Pro Security Shield conversion @ ₹999/yr. B2B based on ₹1.50 – ₹3.00 per MAU / year (or ₹35L–₹75L annual platform tier per bank).'
  },
  {
    layout: 'threecard',
    title: 'Future Expenditure & Capital Allocation',
    subtitle: 'Strategic budget distribution to scale engineering, native iOS development, and sovereign infra',
    cards: [
      {
        title: 'Sovereign Indian Server Infra',
        icon: '🖥️',
        body: 'Hosting high-availability, zero-trust threat signature distribution servers located strictly in Indian data centers (Mumbai/Hyderabad) to ensure 100% data residency and DPDP compliance.',
        metric: 'Data Sovereignty & Edge Sync'
      },
      {
        title: 'Core Engineering & iOS Suite',
        icon: '👨‍💻',
        body: 'Recruiting elite ML engineers for neural quantization, Android low-level systems specialists, and a dedicated iOS engineering team to develop the native iOS Swift On-Device threat engine.',
        metric: 'Multi-Platform Edge Excellence'
      },
      {
        title: 'Licensing, IP & Partnerships',
        icon: '📜',
        body: 'Capital allocated for patent filings, ISO 27001 / SOC2 Type II certifications, developer partner portal creation, and formal enterprise licensing discussions with top financial institutions.',
        metric: 'Institutional Governance & IP'
      }
    ]
  },
  {
    layout: 'blueprint',
    title: 'Product & Commercial Execution Roadmap',
    subtitle: 'Strategic 4-phase rollout from core edge security validation to nationwide institutional scale',
    phases: [
      {
        phase: 'PHASE 1',
        title: 'Alpha Engine & Core Security SDK',
        duration: 'Month 1 – 3',
        budget: 'Core Heuristics',
        deliverables: [
          'Heuristic SMS & payment link fraud detector',
          'Zero-trust client runtime & screen interceptor',
          'Benchmark validation on budget Android devices (<15ms)',
          'Core threat signature taxonomy & patent filings'
        ],
        payment: '<strong>Milestone:</strong> Sub-15ms on-device benchmark achieved'
      },
      {
        phase: 'PHASE 2',
        title: 'Consumer App Beta Launch',
        duration: 'Month 4 – 6',
        budget: 'Play Store Beta',
        deliverables: [
          'Safety Setu flagship consumer app release',
          '4-Language UI localization (Hindi, Marathi, Gujarati, English)',
          'TalkBack screen-reader & spoken voice alert engine',
          'Real-time UPI protection & screen-freeze watchdog'
        ],
        payment: '<strong>Milestone:</strong> 100k+ beta consumer registrations'
      },
      {
        phase: 'PHASE 3',
        title: 'B2B Enterprise SDK Packaging',
        duration: 'Month 7 – 9',
        budget: 'Fintech Integration',
        deliverables: [
          'Drop-in Threat Intelligence SDK for Android & Flutter',
          'Banking sandbox pilot & penetration testing',
          'Developer documentation & partner API portal',
          'DPDP Act & RBI cyber-security audit'
        ],
        payment: '<strong>Milestone:</strong> First 3 commercial fintech pilot contracts'
      },
      {
        phase: 'PHASE 4',
        title: 'Scale & Telco Distribution',
        duration: 'Month 10 – 12+',
        budget: 'Nationwide Expansion',
        deliverables: [
          'Native iOS Swift on-device security release',
          'Telecom VAS bundling & state cyber cell pilots',
          'OEM preload & system service integrations',
          'Enterprise recurring SaaS scaling'
        ],
        payment: '<strong>Milestone:</strong> Multi-million active device coverage'
      }
    ]
  },
  {
    layout: 'fourcard',
    title: 'Strategic Asks & Collaboration',
    subtitle: 'Key partnership requirements to accelerate nationwide cyber resilience and pilot validation',
    cards: [
      {
        title: '1. Training Data & Scam Telemetry',
        icon: '📊',
        body: 'Access to anonymized cyber fraud repositories and scam SMS/URL datasets from law enforcement cyber cells and telcos to continuously train and benchmark our edge TensorFlow models.'
      },
      {
        title: '2. Banking Pilot Sandboxes',
        icon: '🏦',
        body: 'Partnerships to run active sandbox pilots with 2–3 leading commercial banks / UPI payment apps to validate real-time fraud interception and verify zero false-positive payment friction.'
      },
      {
        title: '3. DPDP Law & Regulatory Support',
        icon: '📜',
        body: 'Institutional collaboration and legal guidance to certify Safety Setu as a benchmark gold standard for India\'s Digital Personal Data Protection (DPDP) Act and RBI cyber directives.'
      },
      {
        title: '4. Govt Grants & Talent Funding',
        icon: '🏛️',
        body: 'Facilitating access to Government innovation grants (MeitY, iDEX, Startup India) and institutional capital to source elite edge-AI talent and scale domestic compute infrastructure.'
      }
    ]
  },
  {
    layout: 'qa',
    title: "Join Us in Securing India's Digital Future",
    subtitle: 'TenCore Digital Labs is engineering foundational on-device cyber resilience for the next billion users.',
    contactInfo: [
      {
        icon: '👨‍💼',
        label: 'Founder & Principal Systems Architect',
        val: 'Devendra Vaja'
      },
      {
        icon: '🏢',
        label: 'Deep-Tech Venture',
        val: 'TenCore Digital Labs (Mumbai, India)'
      },
      {
        icon: '✉️',
        label: 'Direct Email',
        val: '<a href="mailto:tencorelabs@gmail.com">tencorelabs@gmail.com</a>'
      },
      {
        icon: '🌐',
        label: 'Official Website',
        val: '<a href="https://www.tencorelabs.com" target="_blank">www.tencorelabs.com</a>'
      },
      {
        icon: '💼',
        label: 'LinkedIn Profile',
        val: '<a href="https://www.linkedin.com/in/devendra-vaja/" target="_blank">linkedin.com/in/devendra-vaja</a>'
      }
    ],
    qrLabel: 'Know the Founder & TenCore Labs',
    qrSub: 'Scan or click to view deep-tech portfolio',
    qrLink: 'https://tencorelabs.com/pages/know-the-founder-devendra-vaja.html'
  }
];

// App State
let slides = [];
let currentSlideIndex = 0;
let isEditMode = false;

// DOM Elements
const viewport = document.getElementById('slide-viewport');
const presentationView = document.getElementById('presentation-view');
const editorView = document.getElementById('editor-view');
const btnPresentMode = document.getElementById('btn-present-mode');
const btnEditMode = document.getElementById('btn-edit-mode');
const btnReset = document.getElementById('btn-reset');
const btnSave = document.getElementById('btn-save');
const btnExportPDF = document.getElementById('btn-export-pdf');
const navFirst = document.getElementById('nav-first');
const navPrev = document.getElementById('nav-prev');
const navNext = document.getElementById('nav-next');
const navLast = document.getElementById('nav-last');
const btnFullscreen = document.getElementById('btn-fullscreen');
const slideCounterText = document.getElementById('slide-counter-text');
const slideProgressFill = document.getElementById('slide-progress-fill');
const btnAddSlide = document.getElementById('btn-add-slide');
const layoutPicker = document.getElementById('layout-picker');
const editorControls = document.querySelector('.editor-footer-controls');

// Export Modal DOM Elements
const exportModal = document.getElementById('export-modal');
const btnCloseModal = document.getElementById('btn-close-modal');
const btnCancelExport = document.getElementById('btn-cancel-export');
const btnConfirmExport = document.getElementById('btn-confirm-export');
const chkPrintSlideNumbers = document.getElementById('chk-print-slide-numbers');
const ratioCards = document.querySelectorAll('.ratio-card');

// Initialize Application
function init() {
  loadSlides();
  setupEventListeners();
  setupViewportScaling();
  renderSlide();
}

// Load Slides from LocalStorage or Defaults
function loadSlides() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length === DEFAULT_SLIDES.length) {
        slides = parsed;
        return;
      }
    }
  } catch (e) {
    console.warn('Failed to load slides from localStorage:', e);
  }
  slides = JSON.parse(JSON.stringify(DEFAULT_SLIDES));
}

// Save Slides to LocalStorage
function saveSlides() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(slides));
    alert('Presentation saved successfully!');
  } catch (e) {
    alert('Error saving slides: ' + e.message);
  }
}

// Setup Viewport Scaling for 16:9 Canvas
function setupViewportScaling() {
  function adjustScale() {
    if (isEditMode) return;
    const container = document.querySelector('.slide-deck-viewport');
    if (!container || !viewport) return;

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const targetWidth = 1120;
    const targetHeight = 630;

    const scaleX = containerWidth / targetWidth;
    const scaleY = containerHeight / targetHeight;
    const scale = Math.min(scaleX, scaleY, 1.0);

    viewport.style.transform = `scale(${scale})`;
  }

  window.addEventListener('resize', adjustScale);
  adjustScale();
}

// Render Current Slide
function renderSlide() {
  if (!slides || slides.length === 0) return;
  
  if (currentSlideIndex < 0) currentSlideIndex = 0;
  if (currentSlideIndex >= slides.length) currentSlideIndex = slides.length - 1;

  const currentSlide = slides[currentSlideIndex];
  viewport.innerHTML = generateSlideHTML(currentSlide, currentSlideIndex);

  // Update navigation chrome
  slideCounterText.textContent = `${currentSlideIndex + 1} / ${slides.length}`;
  const progressPercent = ((currentSlideIndex + 1) / slides.length) * 100;
  slideProgressFill.style.width = `${progressPercent}%`;

  navFirst.disabled = currentSlideIndex === 0;
  navPrev.disabled = currentSlideIndex === 0;
  navNext.disabled = currentSlideIndex === slides.length - 1;
  navLast.disabled = currentSlideIndex === slides.length - 1;
}

// Generate Slide HTML based on Layout
function generateSlideHTML(slide, index, extraClass = '') {
  let innerContent = '';
  const cls = extraClass ? ` ${extraClass}` : '';

  switch (slide.layout) {
    case 'title':
      innerContent = `
        <div class="slide${cls} slide-title-layout">
          <div class="slide-bg-glow"></div>
          <div class="title-pill-tag">🛡️ Next-Gen On-Device Edge AI Security</div>
          <h1>${slide.title}</h1>
          <div class="title-deck-subtitle">${slide.subtitle || ''}</div>
          <div class="title-meta-grid">
            ${(slide.meta || []).map(m => `
              <div class="title-meta-card">
                <div class="meta-label">${m.label}</div>
                <div class="meta-value">${m.value}</div>
                <div class="meta-sub">${m.sub}</div>
              </div>
            `).join('')}
          </div>
          <div class="slide-footer-tag">
            <span>TenCore Digital Labs • Pitch Deck</span>
            <span class="confidential-tag">CONFIDENTIAL</span>
            <span>Safety Setu © 2026</span>
          </div>
        </div>
      `;
      break;

    case 'instructor':
      innerContent = `
        <div class="slide${cls}">
          <div class="slide-bg-glow"></div>
          <div class="slide-header">
            <div class="slide-category-badge">Leadership & Engineering Track Record</div>
            <h2>${slide.title}</h2>
            <div class="slide-subtitle">${slide.subtitle || ''}</div>
          </div>
          <div class="slide-body">
            <div class="instructor-slide-grid">
              <div class="instructor-avatar-card">
                <div class="instructor-avatar-fallback">DV</div>
                <h3>${slide.instructorName}</h3>
                <p>${slide.instructorRole}</p>
                <div style="font-size: 0.76rem; color: var(--text-secondary); margin-top: 10px; line-height: 1.4;">
                  ${slide.instructorTagline}
                </div>
              </div>
              <div class="instructor-details-card">
                ${(slide.details || []).map(d => `
                  <div class="detail-box">
                    <h4>${d.title}</h4>
                    <p>${d.body}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
          <div class="slide-footer-tag">
            <span>Safety Setu • TenCore Digital Labs</span>
            <span class="confidential-tag">CONFIDENTIAL</span>
            <span class="slide-number-tag">Slide ${index + 1} of ${slides.length}</span>
          </div>
        </div>
      `;
      break;

    case 'divider':
      innerContent = `
        <div class="slide${cls} slide-divider-layout">
          <div class="divider-badge">${slide.badge || 'SECTION OVERVIEW'}</div>
          <h2>${slide.title}</h2>
          <p>${slide.text || ''}</p>
          <div class="divider-accent-bar"></div>
          <div class="slide-footer-tag">
            <span>Safety Setu • TenCore Digital Labs</span>
            <span class="confidential-tag">CONFIDENTIAL</span>
            <span class="slide-number-tag">Slide ${index + 1} of ${slides.length}</span>
          </div>
        </div>
      `;
      break;

    case 'twocol':
      innerContent = `
        <div class="slide${cls}">
          <div class="slide-bg-glow"></div>
          <div class="slide-header">
            <div class="slide-category-badge">Strategic Analysis & Architecture</div>
            <h2>${slide.title}</h2>
            <div class="slide-subtitle">${slide.subtitle || ''}</div>
          </div>
          <div class="slide-body">
            <div class="two-col-grid">
              <div class="col-card highlight">
                <div class="col-card-header">
                  <span class="header-icon">🛡️</span>
                  <h3>${slide.leftTitle}</h3>
                </div>
                <ul class="bullet-list">
                  ${(slide.leftBullets || []).map(b => `<li>${b}</li>`).join('')}
                </ul>
              </div>
              <div class="col-card">
                ${slide.image ? `
                  <div class="slide-image-box">
                    <img src="${slide.image}" alt="${slide.imageCaption || 'Product Visual'}" class="slide-embedded-img">
                    ${slide.imageCaption ? `<div class="slide-image-caption">${slide.imageCaption}</div>` : ''}
                  </div>
                ` : ''}
                <div class="col-card-header">
                  <span class="header-icon">⚡</span>
                  <h3>${slide.rightTitle}</h3>
                </div>
                <ul class="bullet-list">
                  ${(slide.rightBullets || []).map(b => `<li>${b}</li>`).join('')}
                </ul>
              </div>
            </div>
          </div>
          <div class="slide-footer-tag">
            <span>Safety Setu • TenCore Digital Labs</span>
            <span class="confidential-tag">CONFIDENTIAL</span>
            <span class="slide-number-tag">Slide ${index + 1} of ${slides.length}</span>
          </div>
        </div>
      `;
      break;

    case 'threecard':
      innerContent = `
        <div class="slide${cls}">
          <div class="slide-bg-glow"></div>
          <div class="slide-header">
            <div class="slide-category-badge">Market Analysis</div>
            <h2>${slide.title}</h2>
            <div class="slide-subtitle">${slide.subtitle || ''}</div>
          </div>
          <div class="slide-body">
            <div class="three-card-grid">
              ${(slide.cards || []).map(card => `
                <div class="feature-card">
                  <div class="feature-card-icon-wrap">${card.icon || '📌'}</div>
                  <h3>${card.title}</h3>
                  <p>${card.body}</p>
                  ${card.metric ? `<div class="feature-card-metric">${card.metric}</div>` : ''}
                </div>
              `).join('')}
            </div>
            ${slide.footnote ? `<div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 10px; font-style: italic; word-break: break-all;">* ${slide.footnote}</div>` : ''}
          </div>
          <div class="slide-footer-tag">
            <span>Safety Setu • TenCore Digital Labs</span>
            <span class="confidential-tag">CONFIDENTIAL</span>
            <span class="slide-number-tag">Slide ${index + 1} of ${slides.length}</span>
          </div>
        </div>
      `;
      break;

    case 'fourcard':
      innerContent = `
        <div class="slide${cls}">
          <div class="slide-bg-glow"></div>
          <div class="slide-header">
            <div class="slide-category-badge">Strategic Pillars & Asks</div>
            <h2>${slide.title}</h2>
            <div class="slide-subtitle">${slide.subtitle || ''}</div>
          </div>
          <div class="slide-body">
            <div class="four-card-grid">
              ${(slide.cards || []).map(card => `
                <div class="four-card-item">
                  <div class="four-card-icon">${card.icon || '⭐'}</div>
                  <div class="four-card-content">
                    <h3>${card.title}</h3>
                    <p>${card.body}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
          <div class="slide-footer-tag">
            <span>Safety Setu • TenCore Digital Labs</span>
            <span class="confidential-tag">CONFIDENTIAL</span>
            <span class="slide-number-tag">Slide ${index + 1} of ${slides.length}</span>
          </div>
        </div>
      `;
      break;

    case 'blueprint':
      innerContent = `
        <div class="slide${cls}">
          <div class="slide-bg-glow"></div>
          <div class="slide-header">
            <div class="slide-category-badge">System Stack & Roadmap</div>
            <h2>${slide.title}</h2>
            <div class="slide-subtitle">${slide.subtitle || ''}</div>
          </div>
          <div class="slide-body">
            <div class="roadmap-phases-grid">
              ${(slide.phases || []).map((phase, pIdx) => `
                <div class="roadmap-phase-card ${pIdx === 0 ? 'active-phase' : ''}">
                  <span class="phase-number-tag">${phase.phase}</span>
                  <div class="phase-title">${phase.title}</div>
                  <div class="phase-duration-budget">
                    <span>${phase.duration}</span>
                    <span>${phase.budget}</span>
                  </div>
                  <ul class="phase-deliverables">
                    ${(phase.deliverables || []).map(d => `<li>${d}</li>`).join('')}
                  </ul>
                  ${phase.payment ? `
                    <div class="phase-payment-box">
                      ${phase.payment}
                    </div>
                  ` : ''}
                </div>
              `).join('')}
            </div>
          </div>
          <div class="slide-footer-tag">
            <span>Safety Setu • TenCore Digital Labs</span>
            <span class="confidential-tag">CONFIDENTIAL</span>
            <span class="slide-number-tag">Slide ${index + 1} of ${slides.length}</span>
          </div>
        </div>
      `;
      break;

    case 'differentiators':
      innerContent = `
        <div class="slide${cls} slide-diff-layout">
          <div class="slide-bg-glow"></div>
          <div class="slide-header">
            <div class="slide-category-badge">${slide.categoryBadge || 'Strategic Market Differentiator'}</div>
            <h2>${slide.title}</h2>
            <div class="slide-subtitle">${slide.subtitle || ''}</div>
          </div>
          <div class="slide-body">
            <div class="differentiator-grid">
              <div class="diff-features-list">
                ${(slide.features || []).map(f => `
                  <div class="diff-feature-item ${f.isFuture ? 'future-item' : ''}">
                    <div class="diff-check-icon ${f.isFuture ? 'future-icon' : ''}">
                      ${f.isFuture ? '⚡' : '✓'}
                    </div>
                    <div class="diff-feature-content">
                      <h3>
                        ${f.title}
                        ${f.futureTag ? `<span class="future-tag">${f.futureTag}</span>` : ''}
                      </h3>
                      <p>${f.desc}</p>
                    </div>
                  </div>
                `).join('')}
              </div>
              <div class="diff-stack-container">
                ${(slide.stackLayers || []).map((layer, lIdx, arr) => `
                  <div class="diff-stack-layer ${layer.type === 'highlight' ? 'layer-highlight' : (layer.type === 'dark' ? 'layer-dark' : '')}">
                    <div class="diff-layer-label">${layer.layer}</div>
                    <div class="diff-layer-title">
                      ${layer.title}
                      ${layer.futureTag ? `<span class="future-tag">${layer.futureTag}</span>` : ''}
                    </div>
                  </div>
                  ${lIdx < arr.length - 1 ? `<div class="diff-stack-arrow">↑</div>` : ''}
                `).join('')}
              </div>
            </div>
          </div>
          <div class="slide-footer-tag">
            <span>Safety Setu • TenCore Digital Labs</span>
            <span class="confidential-tag">CONFIDENTIAL</span>
            <span class="slide-number-tag">Slide ${index + 1} of ${slides.length}</span>
          </div>
        </div>
      `;
      break;

    case 'table':
      innerContent = `
        <div class="slide${cls}">
          <div class="slide-bg-glow"></div>
          <div class="slide-header">
            <div class="slide-category-badge">Strategic Analysis</div>
            <h2>${slide.title}</h2>
            <div class="slide-subtitle">${slide.subtitle || ''}</div>
          </div>
          <div class="slide-body">
            <div class="table-slide-wrapper">
              <table class="custom-table">
                <thead>
                  <tr>
                    ${(slide.tableHeaders || []).map(th => `<th>${th}</th>`).join('')}
                  </tr>
                </thead>
                <tbody>
                  ${(slide.tableRows || []).map(row => `
                    <tr>
                      ${row.map(td => `<td>${td}</td>`).join('')}
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
            ${slide.footnote ? `<div style="font-size: 0.74rem; color: var(--text-muted); margin-top: 8px; font-style: italic;">* ${slide.footnote}</div>` : ''}
          </div>
          <div class="slide-footer-tag">
            <span>Safety Setu • TenCore Digital Labs</span>
            <span class="confidential-tag">CONFIDENTIAL</span>
            <span class="slide-number-tag">Slide ${index + 1} of ${slides.length}</span>
          </div>
        </div>
      `;
      break;

    case 'pricing':
      innerContent = `
        <div class="slide${cls}">
          <div class="slide-bg-glow"></div>
          <div class="slide-header">
            <div class="slide-category-badge">Business Model & Monetization</div>
            <h2>${slide.title}</h2>
            <div class="slide-subtitle">${slide.subtitle || ''}</div>
          </div>
          <div class="slide-body">
            <div class="deal-options-grid">
              ${(slide.deals || []).map(deal => `
                <div class="deal-card ${deal.featured ? 'featured-deal' : ''}">
                  <div class="deal-card-header">
                    <div class="deal-header-top">
                      <h3>${deal.title}</h3>
                      ${deal.badge ? `<span class="deal-badge-tag">${deal.badge}</span>` : ''}
                    </div>
                    <div class="deal-tagline">${deal.tagline}</div>
                  </div>
                  <div class="deal-price-box">
                    <div class="deal-price-large">${deal.priceLarge}</div>
                    <div class="deal-price-sub">${deal.priceSub}</div>
                  </div>
                  <ul class="deal-bullets">
                    ${(deal.bullets || []).map(b => `<li>${b}</li>`).join('')}
                  </ul>
                  ${deal.footerPitch ? `<div class="deal-footer-pitch">${deal.footerPitch}</div>` : ''}
                </div>
              `).join('')}
            </div>
          </div>
          <div class="slide-footer-tag">
            <span>Safety Setu • TenCore Digital Labs</span>
            <span class="confidential-tag">CONFIDENTIAL</span>
            <span class="slide-number-tag">Slide ${index + 1} of ${slides.length}</span>
          </div>
        </div>
      `;
      break;

    case 'qa':
      innerContent = `
        <div class="slide${cls} slide-qa-layout">
          <div class="slide-bg-glow"></div>
          <div class="slide-header">
            <div class="slide-category-badge">Strategic Partnership & Discussion</div>
            <h2>${slide.title}</h2>
            <div class="slide-subtitle">${slide.subtitle || ''}</div>
          </div>
          <div class="slide-body">
            <div class="qa-slide-container">
              <div class="qa-left-pane">
                <div class="contact-info-list">
                  ${(slide.contactInfo || []).map(ci => `
                    <div class="contact-item">
                      <span class="contact-icon">${ci.icon}</span>
                      <div class="contact-text-wrap">
                        <div class="label">${ci.label}</div>
                        <div class="val">${ci.val}</div>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>
              <div class="qa-right-pane">
                <div class="qr-code-box">
                  <svg viewBox="0 0 100 100" width="100" height="100" style="shape-rendering: crispEdges;">
                    <rect width="100" height="100" fill="#ffffff" />
                    <!-- QR Positioning Markers -->
                    <rect x="10" y="10" width="28" height="28" fill="#0f172a" />
                    <rect x="14" y="14" width="20" height="20" fill="#ffffff" />
                    <rect x="18" y="18" width="12" height="12" fill="#0d9488" />
                    
                    <rect x="62" y="10" width="28" height="28" fill="#0f172a" />
                    <rect x="66" y="14" width="20" height="20" fill="#ffffff" />
                    <rect x="70" y="18" width="12" height="12" fill="#0d9488" />
                    
                    <rect x="10" y="62" width="28" height="28" fill="#0f172a" />
                    <rect x="14" y="66" width="20" height="20" fill="#ffffff" />
                    <rect x="18" y="70" width="12" height="12" fill="#0d9488" />
                    
                    <!-- Decorative QR Matrix Pixels -->
                    <rect x="44" y="12" width="6" height="6" fill="#0f172a" />
                    <rect x="52" y="20" width="6" height="6" fill="#0f172a" />
                    <rect x="44" y="28" width="6" height="6" fill="#0d9488" />
                    <rect x="12" y="44" width="6" height="6" fill="#0f172a" />
                    <rect x="24" y="48" width="6" height="6" fill="#0d9488" />
                    <rect x="44" y="44" width="12" height="12" fill="#0f172a" />
                    <rect x="62" y="44" width="8" height="6" fill="#0d9488" />
                    <rect x="76" y="48" width="12" height="6" fill="#0f172a" />
                    <rect x="44" y="64" width="6" height="12" fill="#0d9488" />
                    <rect x="56" y="72" width="10" height="6" fill="#0f172a" />
                    <rect x="70" y="64" width="6" height="8" fill="#0d9488" />
                    <rect x="82" y="76" width="8" height="8" fill="#0f172a" />
                  </svg>
                </div>
                <div class="qr-label">${slide.qrLabel || 'Scan for Profile'}</div>
                <div class="qr-sub">${slide.qrSub || 'TenCore Labs Credentials'}</div>
                <a href="${slide.qrLink || 'https://tencorelabs.com/pages/know-the-founder-devendra-vaja.html'}" target="_blank" style="font-size: 0.72rem; color: var(--primary); margin-top: 8px; font-weight: 600; text-decoration: none;">
                  Open Founder Portfolio →
                </a>
              </div>
            </div>
          </div>
          <div class="slide-footer-tag">
            <span>Safety Setu • TenCore Digital Labs</span>
            <span class="confidential-tag">CONFIDENTIAL</span>
            <span class="slide-number-tag">Slide ${index + 1} of ${slides.length}</span>
          </div>
        </div>
      `;
      break;

    default:
      innerContent = `
        <div class="slide${cls}">
          <div class="slide-header">
            <h2>${slide.title}</h2>
          </div>
          <div class="slide-body">
            <p>${slide.subtitle || 'Slide Content'}</p>
          </div>
          <div class="slide-footer-tag">
            <span>Safety Setu • TenCore Digital Labs</span>
            <span class="confidential-tag">CONFIDENTIAL</span>
            <span class="slide-number-tag">Slide ${index + 1} of ${slides.length}</span>
          </div>
        </div>
      `;
  }

  return innerContent;
}

// Setup Event Listeners
function setupEventListeners() {
  // Navigation Buttons
  navFirst.addEventListener('click', () => { currentSlideIndex = 0; renderSlide(); });
  navPrev.addEventListener('click', () => { if (currentSlideIndex > 0) { currentSlideIndex--; renderSlide(); } });
  navNext.addEventListener('click', () => { if (currentSlideIndex < slides.length - 1) { currentSlideIndex++; renderSlide(); } });
  navLast.addEventListener('click', () => { currentSlideIndex = slides.length - 1; renderSlide(); });

  // Fullscreen Mode
  btnFullscreen.addEventListener('click', toggleFullscreen);

  // Keyboard Navigation
  document.addEventListener('keydown', (e) => {
    if (exportModal && exportModal.style.display !== 'none') {
      if (e.key === 'Escape') {
        closeExportModal();
      }
      return;
    }
    if (isEditMode) return;
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
      e.preventDefault();
      if (currentSlideIndex < slides.length - 1) { currentSlideIndex++; renderSlide(); }
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      e.preventDefault();
      if (currentSlideIndex > 0) { currentSlideIndex--; renderSlide(); }
    } else if (e.key === 'Home') {
      e.preventDefault();
      currentSlideIndex = 0;
      renderSlide();
    } else if (e.key === 'End') {
      e.preventDefault();
      currentSlideIndex = slides.length - 1;
      renderSlide();
    } else if (e.key === 'f' || e.key === 'F') {
      e.preventDefault();
      toggleFullscreen();
    }
  });

  // View Mode Toggles
  btnPresentMode.addEventListener('click', () => switchViewMode(false));
  btnEditMode.addEventListener('click', () => switchViewMode(true));

  // Toolbar Actions
  btnReset.addEventListener('click', resetPresentation);
  btnSave.addEventListener('click', saveSlides);
  btnExportPDF.addEventListener('click', openExportModal);

  // Export Modal Handlers
  if (btnCloseModal) btnCloseModal.addEventListener('click', closeExportModal);
  if (btnCancelExport) btnCancelExport.addEventListener('click', closeExportModal);
  if (exportModal) {
    exportModal.addEventListener('click', (e) => {
      if (e.target === exportModal) closeExportModal();
    });
  }

  // Ratio Card Selectors
  if (ratioCards) {
    ratioCards.forEach(card => {
      card.addEventListener('click', () => {
        ratioCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        const radio = card.querySelector('input[type="radio"]');
        if (radio) radio.checked = true;
      });
    });
  }

  if (btnConfirmExport) {
    btnConfirmExport.addEventListener('click', () => {
      let selectedRatio = '16:9';
      const checkedRadio = document.querySelector('input[name="print-aspect"]:checked');
      if (checkedRadio) selectedRatio = checkedRadio.value;
      const includeNumbers = chkPrintSlideNumbers ? chkPrintSlideNumbers.checked : true;
      executePrint(selectedRatio, includeNumbers);
    });
  }

  // Add Slide Flow
  btnAddSlide.addEventListener('click', (e) => {
    e.stopPropagation();
    layoutPicker.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (!layoutPicker.contains(e.target) && e.target !== btnAddSlide) {
      layoutPicker.classList.remove('open');
    }
  });

  layoutPicker.querySelectorAll('.layout-option').forEach(option => {
    option.addEventListener('click', () => {
      const layoutType = option.getAttribute('data-layout');
      addNewSlide(layoutType);
      layoutPicker.classList.remove('open');
    });
  });
}

// Open Export Options Modal
function openExportModal() {
  if (!exportModal) return;
  exportModal.style.display = 'flex';
}

// Close Export Options Modal
function closeExportModal() {
  if (!exportModal) return;
  exportModal.style.display = 'none';
}

// Execute Print with Aspect Ratio and Slide Number Preference
function executePrint(aspect, showNumbers) {
  closeExportModal();

  // Create or update dynamic print stylesheet for exact aspect ratio
  let printStyle = document.getElementById('dynamic-print-style');
  if (!printStyle) {
    printStyle = document.createElement('style');
    printStyle.id = 'dynamic-print-style';
    document.head.appendChild(printStyle);
  }

  const isAspect43 = (aspect === '4:3');
  const extraClass = isAspect43 ? 'aspect-4-3' : '';

  if (isAspect43) {
    printStyle.innerHTML = `
      @media print {
        @page {
          size: 297mm 210mm landscape !important;
          margin: 0 !important;
        }
      }
    `;
  } else {
    // 16:9 Widescreen Landscape
    printStyle.innerHTML = `
      @media print {
        @page {
          size: 297mm 167.0625mm landscape !important;
          margin: 0 !important;
        }
      }
    `;
  }

  if (!showNumbers) {
    document.body.classList.add('hide-slide-numbers');
  } else {
    document.body.classList.remove('hide-slide-numbers');
  }

  const originalHTML = viewport.innerHTML;
  viewport.innerHTML = slides.map((slide, idx) => generateSlideHTML(slide, idx, extraClass)).join('');

  // Small delay for rendering and layout to settle
  setTimeout(() => {
    window.print();
    setTimeout(() => {
      viewport.innerHTML = originalHTML;
      document.body.classList.remove('hide-slide-numbers');
      if (printStyle && printStyle.parentNode) {
        printStyle.parentNode.removeChild(printStyle);
      }
    }, 500);
  }, 150);
}

// Switch between Presenter and Editor Modes
function switchViewMode(editMode) {
  isEditMode = editMode;
  if (isEditMode) {
    btnPresentMode.classList.remove('active');
    btnEditMode.classList.add('active');
    presentationView.style.display = 'none';
    editorView.style.display = 'flex';
    editorControls.style.display = 'flex';
    renderEditor();
  } else {
    btnEditMode.classList.remove('active');
    btnPresentMode.classList.add('active');
    editorView.style.display = 'none';
    editorControls.style.display = 'none';
    presentationView.style.display = 'flex';
    renderSlide();
  }
}

// Fullscreen API
function toggleFullscreen() {
  const elem = document.querySelector('.slide-deck-viewport');
  if (!document.fullscreenElement) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

// Render Editor Mode
function renderEditor() {
  editorView.innerHTML = '';

  slides.forEach((slide, idx) => {
    const card = document.createElement('div');
    card.className = 'editor-slide-card';
    card.dataset.index = idx;

    card.innerHTML = `
      <div class="editor-slide-header">
        <span class="editor-slide-index">Slide ${idx + 1} (${slide.layout})</span>
        <div class="editor-slide-actions">
          <button class="btn btn-move-up" ${idx === 0 ? 'disabled' : ''} title="Move Up">↑</button>
          <button class="btn btn-move-down" ${idx === slides.length - 1 ? 'disabled' : ''} title="Move Down">↓</button>
          <button class="btn btn-delete" style="color: var(--danger);" title="Delete Slide">🗑️</button>
        </div>
      </div>
      <div class="form-group">
        <label>Slide Title</label>
        <input type="text" class="form-input input-title" value="${escapeHtml(slide.title || '')}">
      </div>
      <div class="form-group">
        <label>Subtitle / Description</label>
        <input type="text" class="form-input input-subtitle" value="${escapeHtml(slide.subtitle || slide.text || '')}">
      </div>
    `;

    // Hook up slide editor events
    card.querySelector('.input-title').addEventListener('input', (e) => {
      slides[idx].title = e.target.value;
    });

    card.querySelector('.input-subtitle').addEventListener('input', (e) => {
      if (slide.layout === 'divider') {
        slides[idx].text = e.target.value;
      } else {
        slides[idx].subtitle = e.target.value;
      }
    });

    card.querySelector('.btn-move-up').addEventListener('click', () => {
      if (idx > 0) {
        const temp = slides[idx];
        slides[idx] = slides[idx - 1];
        slides[idx - 1] = temp;
        renderEditor();
      }
    });

    card.querySelector('.btn-move-down').addEventListener('click', () => {
      if (idx < slides.length - 1) {
        const temp = slides[idx];
        slides[idx] = slides[idx + 1];
        slides[idx + 1] = temp;
        renderEditor();
      }
    });

    card.querySelector('.btn-delete').addEventListener('click', () => {
      if (confirm(`Are you sure you want to delete Slide ${idx + 1}?`)) {
        slides.splice(idx, 1);
        if (slides.length === 0) {
          slides = JSON.parse(JSON.stringify(DEFAULT_SLIDES));
        }
        renderEditor();
      }
    });

    editorView.appendChild(card);
  });
}

// Add New Slide by Layout Type
function addNewSlide(layout) {
  const newSlide = {
    layout: layout,
    title: 'New Slide Title',
    subtitle: 'Provide relevant description or key takeaways'
  };

  if (layout === 'twocol') {
    newSlide.leftTitle = 'Left Section';
    newSlide.leftBullets = ['Core takeaway 1', 'Core takeaway 2'];
    newSlide.rightTitle = 'Right Section';
    newSlide.rightBullets = ['Impact metric 1', 'Impact metric 2'];
  } else if (layout === 'threecard') {
    newSlide.cards = [
      { title: 'Feature 1', icon: '⚡', body: 'Description 1', metric: 'Metric 1' },
      { title: 'Feature 2', icon: '🛡️', body: 'Description 2', metric: 'Metric 2' },
      { title: 'Feature 3', icon: '📈', body: 'Description 3', metric: 'Metric 3' }
    ];
  } else if (layout === 'divider') {
    newSlide.badge = 'SECTION OVERVIEW';
    newSlide.text = 'Executive section summary and strategic narrative.';
  } else if (layout === 'differentiators') {
    newSlide.categoryBadge = 'Strategic Market Differentiator';
    newSlide.title = 'Our edge-computing architecture delivers real-time, <span style="color: #059669;">privacy-first security directly on the device.</span>';
    newSlide.subtitle = 'Supported capabilities & architectural foundation establishing Safety Setu as an undisputed market differentiator';
    newSlide.features = [
      { title: 'Zero Trust Architecture', isFuture: false, desc: '100% on-device processing with zero cloud dependency (0 KB sent), ensuring complete DPDP compliance.' },
      { title: 'Threat Intelligence SDK', isFuture: false, desc: 'Proprietary algorithmic scam heuristics and payment overlay watchdog operating with sub-15ms latency.' },
      { title: 'Universal Inclusion: Blind & Illiterate Defense', isFuture: false, desc: 'Deep TalkBack integration, real-time spoken voice alerts in 4 languages, and screen-share freeze.' },
      { title: 'Made in India, Engineered for Bharat', isFuture: false, desc: 'Complete 4-language localized UI (Hindi, Marathi, Gujarati, English) tailored for India-specific scam templates.' }
    ];
    newSlide.stackLayers = [
      { layer: 'Application Layer', title: 'Safety Setu App (Message, UPI & Screen Protection)', type: 'highlight' },
      { layer: 'Processing SDK Layer', title: 'Threat Intelligence SDK (Algorithmic Processing)', type: 'default' },
      { layer: 'On-Device AI Engine', title: 'TensorFlow Lite (NLP & Local Classification)', futureTag: '(future)', type: 'default' },
      { layer: 'Core Security Foundation', title: 'Zero Trust Architecture (Zero Cloud Dependency)', type: 'dark' }
    ];
  }

  slides.push(newSlide);
  renderEditor();
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

// Reset Presentation
function resetPresentation() {
  if (confirm('Reset entire presentation to initial Master templates? Any local edits will be cleared.')) {
    slides = JSON.parse(JSON.stringify(DEFAULT_SLIDES));
    localStorage.removeItem(STORAGE_KEY);
    if (isEditMode) {
      renderEditor();
    } else {
      currentSlideIndex = 0;
      renderSlide();
    }
    alert('Presentation reset to original templates.');
  }
}

// Export Presentation to PDF (Backward compatible fallback)
function exportToPDF() {
  openExportModal();
}

function escapeHtml(text) {
  if (!text) return '';
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', init);

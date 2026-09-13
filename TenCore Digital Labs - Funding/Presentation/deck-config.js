/**
 * ============================================================================
 * TENCORE DIGITAL LABS • GOVERNMENT GRANT & STARTUP INDIA FUNDING PITCH DECK
 * ============================================================================
 * Deep-Tech Innovation Proposal for Startup India Seed Fund Scheme (SISFS) / MeitY / Sovereign Tech Grant.
 * Focus: Indigenous On-Device Edge AI, Data Sovereignty, Cybersecurity & Vernacular Inclusion.
 */

// 1. GLOBAL BRANDING & FOUNDER PROFILE
const BRAND_CONFIG = {
  companyName: "TenCore Digital Labs Private Limited",
  division: "Deep-Tech On-Device AI & Sovereign Cyber Infrastructure Studio",
  confidentialLabel: "CONFIDENTIAL • STARTUP INDIA GRANT PROPOSAL",
  copyright: "TenCore Digital Labs Private Limited © 2026",
  logoText: "TC",
  
  // Leadership & Engineering Track Record
  founder: {
    name: "Devendra Vaja",
    role: "Founder & Principal Systems Architect",
    company: "TenCore Digital Labs Private Limited",
    avatarInitials: "DV",
    tagline: "24+ years of deep-tech engineering experience across India, USA, and Japan spanning embedded firmware, kernel device drivers, and native Android platform architecture.",
    pillars: [
      {
        title: "Global Systems Engineering (India • Japan • USA)",
        desc: "24+ years architecting mission-critical, zero-fault software across India, Tokyo (high-security gaming machine device drivers), and the United States — designing high-security digital architectures built for sovereign reliability and scale."
      },
      {
        title: "Low-Level Kernel Drivers & Embedded Firmware",
        desc: "Deep-rooted expertise in micro-kernel architecture, hardware abstraction layers (HAL), device drivers, and low-latency on-device processing where resource efficiency and zero crash rates are non-negotiable."
      },
      {
        title: "Android OS & Mobile Platform Pioneer (Since 2007)",
        desc: "Engineering Android applications and OS-level customizations since Android's inception in 2007 — bridging low-level OS internals with modern quantized On-Device Machine Learning and Edge Cybersecurity."
      }
    ]
  },

  // Contact / Q&A Information for Closing Slide
  contact: {
    title: "Partner in India's Deep-Tech Sovereignty",
    subtitle: "TenCore Digital Labs Private Limited is ready to deploy sovereign on-device security for 1 Billion+ citizens.",
    items: [
      { icon: "👨‍💼", label: "Founder & Principal Systems Architect", val: "Devendra Vaja" },
      { icon: "🏢", label: "Enterprise Technology Studio", val: "TenCore Digital Labs Private Limited" },
      { icon: "✉️", label: "Executive Direct Email", val: "tencorelabs@gmail.com" },
      { icon: "📱", label: "Direct Phone / WhatsApp", val: "+91 9082351295" },
      { icon: "📍", label: "Headquarters & Engineering Lab", val: "Mumbai, India" }
    ],
    qrLabel: "Executive Contact",
    qrSub: "Scan to connect directly"
  }
};

// 2. CLIENT PRESENTATION METADATA
const DECK_META = {
  title: "TenCore Digital Labs",
  subtitle: "Sovereign On-Device Edge AI & Deep-Tech Infrastructure • Startup India Grant Deck",
  pillTag: "🇮🇳 Make in India • Deep-Tech Sovereign AI Grant Proposal",
  version: "Version 1.0 • Grant Application",
  date: "September 2026",
  category: "Government Grant Pitch Deck",
  storageKey: "tencore_funding_presentation_v2"
};

// 3. COLOR THEME (Sovereign Deep Navy, Emerald Green & Bharat Saffron/Amber)
const THEME_CONFIG = {
  primary: "#0f766e",       // Deep Sovereign Teal / Emerald
  primaryDark: "#115e59",   // Dark Spruce
  primaryLight: "#ccfbf1",  // Crisp Mint Light
  secondary: "#d97706",     // Amber / Saffron Accent
  accent: "#2563eb",        // Deep Tech Blue
  bgBody: "#f8fafc",        // Slate White
  bgCard: "#ffffff",        // Crisp White Cards
  textPrimary: "#0f172a",   // Slate Black
  textSecondary: "#475569"  // Slate Gray
};

// 4. PRESENTATION SLIDES (20 Comprehensive Strategic Slides)
const DEFAULT_SLIDES = [
  // Slide 1: Title Cover Slide
  {
    layout: "title",
    title: "TenCore Digital Labs <span>Sovereign Deep-Tech</span>",
    subtitle: "Engineering Next-Generation On-Device Edge AI, Indigenous Cybersecurity, and Zero-Trust Platform Infrastructure for India's Next Billion Mobile Users.",
    meta: [
      { label: "VENTURE ENTITY", value: "TenCore Digital Labs Private Limited", sub: "Deep-Tech Startup India Recognized" },
      { label: "FOUNDER & ARCHITECT", value: "Devendra Vaja", sub: "24+ Years Systems & Embedded Architecture" },
      { label: "PROPOSAL FOCUS", value: "Startup India Seed Fund / Grant", sub: "On-Device Edge AI & DPDP Infrastructure" }
    ]
  },

  // Slide 2: Founder & Engineering Track Record
  {
    layout: "instructor",
    title: "Deep-Tech Engineering Leadership",
    subtitle: "TenCore Digital Labs Private Limited — 24+ Years of Embedded Systems, Kernel Drivers & Android Architecture",
    instructorName: BRAND_CONFIG.founder.name,
    instructorRole: BRAND_CONFIG.founder.role + " • " + BRAND_CONFIG.founder.company,
    instructorTagline: BRAND_CONFIG.founder.tagline,
    instructorPillars: BRAND_CONFIG.founder.pillars
  },

  // Slide 3: Section Divider 1 (Vision, Mission & National Problem)
  {
    layout: "divider",
    title: "Mission, Vision & The National Problem",
    subtitle: "Securing India's digital economy from escalating financial cyber-fraud, foreign cloud dependence, and the vernacular digital divide.",
    badge: "SECTION 01 • NATIONAL CHALLENGE & VISION"
  },

  // Slide 4: Vision & Mission Slide (Two-Column)
  {
    layout: "twocol",
    title: "Sovereign Vision & Deep-Tech Mission",
    subtitle: "Building indigenous, privacy-first on-device intelligence that protects citizens without sending a single byte of private data outside India.",
    leftCol: {
      title: "Our Sovereign Vision",
      badge: "VISION STATEMENT",
      bullets: [
        "<strong>India's Leading Sovereign AI Studio:</strong> Establishing India as a global benchmark in privacy-first, on-device Edge Artificial Intelligence.",
        "<strong>100% Data Sovereignty:</strong> Eliminating reliance on foreign cloud servers for citizen security and fraud interception.",
        "<strong>Universal Digital Shield:</strong> Ensuring every Indian citizen — regardless of literacy, language, or device cost — is protected against digital fraud.",
        "<strong>Atmanirbhar Deep-Tech IP:</strong> Building defensible, domestically owned patents and algorithms that power India's banking and digital public infrastructure."
      ]
    },
    rightCol: {
      title: "Our Deep-Tech Mission",
      badge: "MISSION STATEMENT",
      bullets: [
        "<strong>Zero-Cloud Telemetry:</strong> Keep 100% of sensitive fraud detection, payment screening, and biometric telemetry strictly on the physical device.",
        "<strong>Sub-15ms Edge Inference:</strong> Deliver ultra-lightweight, quantized neural models that run seamlessly on low-cost budget smartphones without battery drain.",
        "<strong>Vernacular Inclusion for Bharat:</strong> Integrate local language audio prompts and TalkBack screen-reading to protect blind, elderly, and rural users.",
        "<strong>Enterprise Drop-In SDKs:</strong> Provide plug-and-play security SDKs for Indian fintechs, commercial banks, and government digital services."
      ]
    }
  },

  // Slide 5: The National Challenge & Urgency (Four Card Grid)
  {
    layout: "fourcard",
    title: "The Escalating Cyber Threat Landscape in India",
    subtitle: "India's rapid digitization has created urgent national security and financial vulnerabilities.",
    cards: [
      {
        title: "1. ₹14,000+ Cr Annual UPI & Scam Losses",
        icon: "🚨",
        body: "Sophisticated social engineering, malicious remote-access APKs, and fake APK overlays bypass traditional SMS and banking OTP safeguards."
      },
      {
        title: "2. The Vernacular Digital Divide",
        icon: "🗣️",
        body: "Over 600 Million rural, elderly, and non-English-speaking users lack accessible audio security warnings and become easy targets for cyber syndicates."
      },
      {
        title: "3. Foreign Cloud & Privacy Vulnerability",
        icon: "☁️",
        body: "Legacy antivirus apps upload contacts, SMS, and screen content to foreign servers, violating India's Digital Personal Data Protection (DPDP) Act."
      },
      {
        title: "4. Network Latency & Battery Constraints",
        icon: "🔋",
        body: "Cloud-based fraud filters fail in spotty 4G/2G rural coverage and suffer 500ms+ roundtrip latencies — too slow to stop real-time UPI screen hijacking."
      }
    ]
  },

  // Slide 6: Section Divider 2 (Innovation & Deep-Tech IP)
  {
    layout: "divider",
    title: "The TenCore Deep-Tech Innovation",
    subtitle: "Proprietary on-device heuristic engine, quantized edge neural models, and modular platform architecture.",
    badge: "SECTION 02 • INNOVATION & PRODUCTS"
  },

  // Slide 7: Flagship IP: Safety Setu (Differentiators Layout)
  {
    layout: "differentiators",
    title: "Flagship Innovation: Safety Setu Platform",
    subtitle: "India's first 100% on-device edge cybersecurity engine with zero cloud telemetry and instant UPI screen-share protection.",
    features: [
      {
        title: "Real-Time Screen-Share & UPI Interceptor",
        desc: "Autonomously detects and freezes active screen-recording or remote desktop overlays (AnyDesk, TeamViewer) during payment flows."
      },
      {
        title: "Universal Inclusion: Blind & Illiterate Defense",
        desc: "Built-in TalkBack audio alerts in Hindi, Marathi, Gujarati, and English give voice warnings before fraudulent transactions occur."
      },
      {
        title: "On-Device Malicious APK & Heuristic Scanner",
        desc: "Inspects sideloaded APK permissions, suspicious intent receivers, and phishing links locally in <15ms with 0 KB sent to the cloud."
      }
    ],
    stack: [
      { label: "LAYER 1 • CITIZEN UI", title: "Vernacular Consumer App (TalkBack Audio)", highlight: false },
      { label: "LAYER 2 • B2B SDK", title: "Banking Drop-In Threat Intelligence SDK", highlight: true },
      { label: "LAYER 3 • AI ENGINE (PLANNED)", title: "Quantized On-Device NLP Intent Models (Future)", highlight: false },
      { label: "LAYER 4 • SOVEREIGN OS", title: "Hardware-Level Kernel Heuristics & Zero-Trust", dark: true }
    ]
  },

  // Slide 8: Enterprise Platform: Parking Setu & Porch Logistics (Three Card Grid)
  {
    layout: "threecard",
    title: "Enterprise Operational Stack: Parking Setu",
    subtitle: "High-throughput mobile workflows, offline-first transaction queues, and digital asset tracking for luxury hospitality.",
    cards: [
      {
        title: "High-Throughput Mobile App",
        icon: "📱",
        body: "Native Android application engineered for high-frequency operations with <5s check-in turnaround, CameraX intake, and QR ticketing.",
        metric: "Sub-5s Check-In"
      },
      {
        title: "Offline-First Transaction Buffer",
        icon: "⚡",
        body: "Resilient local Room database buffer and background WorkManager sync that guarantees zero lost transactions during internet outages.",
        metric: "100% Offline Resilient"
      },
      {
        title: "Zero Revenue Leakage Governance",
        icon: "📊",
        body: "Tamper-proof digital audit trails, timestamped condition logs, and real-time managerial telemetry for complete operational visibility.",
        metric: "Complete Audit Shield"
      }
    ]
  },

  // Slide 9: BusinessSetu & InsuranceSetu: Document Intelligence (Three Card Grid) - [NEW SLIDE]
  {
    layout: "threecard",
    title: "BusinessSetu & InsuranceSetu: Document Intelligence",
    subtitle: "AI-powered vertical SaaS suite empowering 2.5M+ insurance agents, CAs, and MSMEs with automated document OCR and vernacular CRMs.",
    cards: [
      {
        title: "InsuranceSetu (Document OCR & Renewal CRM)",
        icon: "📄",
        body: "Automated ingestion of complex insurance policy PDFs (LIC Premium Due Lists), tabular OCR extraction, multi-lingual WhatsApp renewal nudges, and commission ledgers.",
        metric: "2.5M+ Agent Market"
      },
      {
        title: "LeadSetu (Offline Visiting Card Vision)",
        icon: "📇",
        body: "Offline-first camera vision that extracts visiting card contacts in <3 seconds at exhibitions, syncing directly into a Kanban CRM with automated WhatsApp follow-ups.",
        metric: "Sub-3s Lead Capture"
      },
      {
        title: "Unified Multi-Tenant Core (Setu Engine)",
        icon: "🏢",
        body: "Shared enterprise infrastructure with GSTIN-based multi-tenancy, per-product RBAC, omnichannel dispatchers (WhatsApp/SMS), and DPDP-compliant local data vaults.",
        metric: "Zero-Trust Architecture"
      }
    ]
  },

  // Slide 10: Deep-Tech Architectural Superiority (Differentiators Layout)
  {
    layout: "differentiators",
    title: "Deep-Tech Architectural Superiority",
    subtitle: "Built on 24+ years of low-level systems engineering — optimized for sub-15ms latency and ultra-low battery consumption.",
    features: [
      {
        title: "100% Sovereign Data Privacy",
        desc: "Zero user PII, SMS text, or screen captures leave the device. Fully compliant with DPDP Act 2023 and RBI cybersecurity directives."
      },
      {
        title: "Ultra-Low Latency (<15ms)",
        desc: "Local on-device pattern matching executes 20x faster than cloud-based roundtrips, stopping attacks before payment submission."
      },
      {
        title: "Minimal Battery Footprint (<0.5%/day)",
        desc: "Event-driven Android Accessibility and heuristic hooks execute only on critical state triggers, preserving battery life."
      }
    ],
    stack: [
      { label: "CLIENT RUNTIME", title: "Native Kotlin / Jetpack Compose & CameraX", highlight: false },
      { label: "EDGE INFERENCE", title: "On-Device Quantized TensorFlow Lite Models", highlight: true },
      { label: "SOVEREIGN STORAGE", title: "Encrypted Local SQLite / Room Vault", highlight: false },
      { label: "INDIA DATA RESIDENCY", title: "Zero-Trust Update Hub (Mumbai / Hyderabad)", dark: true }
    ]
  },

  // Slide 11: Comparative Advantage & Moat (Data Table)
  {
    layout: "table",
    title: "Competitive Moat: TenCore vs. Foreign / Legacy Solutions",
    subtitle: "Direct feature comparison highlighting why TenCore's indigenous on-device architecture is unmatched.",
    columns: ["Core Capability", "Legacy Global Antivirus", "Cloud-Based Caller Filters", "TenCore Sovereign Edge"],
    rows: [
      ["Data Privacy & Transit", "Cloud Uploads (Foreign Servers)", "Cloud Contact Syncing", "<span class=\"badge-tag badge-success\">100% On-Device (0 KB Sent)</span>"],
      ["Detection Latency", "200ms – 800ms (Network Lag)", "Network Dependent (Laggy)", "<span class=\"badge-tag badge-success\">&lt; 15ms Local Execution</span>"],
      ["UPI Screen-Share Protection", "Basic File Scanning Only", "Not Supported", "<span class=\"badge-tag badge-success\">Real-Time Payment Intercept</span>"],
      ["Vernacular Voice Alerts", "English Only / Silent Banners", "English Caller Tags Only", "<span class=\"badge-tag badge-success\">TalkBack Voice (4 Languages)</span>"],
      ["Offline Autonomous Defense", "Fails Without Internet", "Fails Without Active API", "<span class=\"badge-tag badge-success\">100% Offline Autonomous</span>"],
      ["DPDP Act 2023 Compliance", "High Regulatory Risk", "Grey Area Contact Scraping", "<span class=\"badge-tag badge-success\">Certified Sovereign Gold Standard</span>"]
    ]
  },

  // Slide 12: Section Divider 3 (Market Opportunity & Business Model)
  {
    layout: "divider",
    title: "Market Opportunity & Scalable Business Model",
    subtitle: "Addressing a ₹60,000+ Crore national market across 750M+ smartphones and 50+ commercial banks.",
    badge: "SECTION 03 • MARKET & COMMERCIAL VIABILITY"
  },

  // Slide 13: Market Size (TAM / SAM / SOM) (Three Card Grid)
  {
    layout: "threecard",
    title: "Multi-Thousand Crore Market Opportunity",
    subtitle: "India is the world's largest mobile transaction economy with massive untapped cybersecurity demand.",
    cards: [
      {
        title: "Total Addressable Market (TAM)",
        icon: "🇮🇳",
        body: "750M+ active smartphone users in India, 12B+ monthly UPI transactions, and ₹60,000+ Crore domestic cybersecurity and mobile fraud market.",
        metric: "₹60,000+ Cr TAM"
      },
      {
        title: "Serviceable Addressable Market (SAM)",
        icon: "🎯",
        body: "250M+ tier-2/3 vernacular digital payment users, 50+ commercial banks, and top 20 payment aggregators requiring drop-in fraud SDKs.",
        metric: "₹15,000+ Cr SAM"
      },
      {
        title: "Serviceable Obtainable Market (SOM)",
        icon: "🚀",
        body: "15M+ consumer active users, 10+ leading fintech/banking integration licenses, and ₹150+ Crore 3-year capturable revenue opportunity.",
        metric: "₹150+ Cr SOM"
      }
    ]
  },

  // Slide 14: Multi-Pronged Monetization Model (Pricing Cards)
  {
    layout: "pricing",
    title: "Diversified, High-Margin Revenue Engines",
    subtitle: "A sustainable commercial model spanning high-margin B2B SDK licensing, mass consumer freemium, and public sector partnerships.",
    cards: [
      {
        tier: "B2B ENTERPRISE",
        title: "Banking & Fintech SDK",
        price: "₹1.50 – ₹3.00",
        priceSub: "per MAU / year (or SaaS Tier)",
        featured: true,
        badge: "HIGH MARGIN SAAS",
        tagline: "Drop-in Threat Intelligence SDK for banking apps",
        bullets: [
          "Protects UPI banking apps from screen-recording overlays",
          "Tiered volume pricing: ₹1.50 to ₹3.00 per active user",
          "Ultra-low latency (<15ms) with zero battery friction",
          "100% on-device processing compliant with DPDP Act",
          "Standard enterprise SLA with dedicated engineering support"
        ],
        footerPitch: "Targeting 50+ Indian commercial banks & fintechs"
      },
      {
        tier: "MASS CONSUMER",
        title: "Freemium Pro Shield",
        price: "Free / ₹999",
        priceSub: "Free Core + ₹999/yr Pro Shield",
        featured: false,
        tagline: "Mass consumer protection for all Indian citizens",
        bullets: [
          "100% Free core single-device protection for citizens",
          "Pro Shield: Advanced real-time threat heuristics",
          "Heuristic UPI payment & screen-share watchdog",
          "Instant TalkBack & vernacular spoken audio alerts",
          "Zero cloud telemetry: 100% privacy retained on device"
        ],
        footerPitch: "Virally scalable through word-of-mouth & trust"
      },
      {
        tier: "INSTITUTIONAL",
        title: "Public Sector & Telco",
        price: "Custom",
        priceSub: "Ecosystem Partnership",
        featured: false,
        tagline: "National critical infrastructure deployment",
        bullets: [
          "State police cyber cells & CERT-In collaboration",
          "Telecom VAS bundling as value-added security",
          "Preload utility partnership with Indian smartphone OEMs",
          "Digital literacy & workforce cyber resilience initiatives",
          "Anonymized regional threat signature sharing"
        ],
        footerPitch: "Establishing TenCore as national digital shield"
      }
    ]
  },

  // Slide 15: 5-Year Financial & Adoption Trajectory (Data Table)
  {
    layout: "table",
    title: "5-Year Growth & Projected Revenue Trajectory",
    subtitle: "Realistic financial scaling backed by B2B banking integrations and growing consumer adoption.",
    columns: ["Growth Metric / Year", "Year 1 (FY27)", "Year 2 (FY28)", "Year 3 (FY29)", "Year 4 (FY30)", "Year 5 (FY31)"],
    rows: [
      ["Active Consumer Base", "500,000", "3,000,000", "12,000,000", "35,000,000", "75,000,000+"],
      ["B2B Banking & Fintech SDKs", "3 Pilot Banks", "10 Integrations", "25 Enterprise", "50+ Fintechs/Banks", "National Standard"],
      ["Consumer Freemium ARR", "₹ 90 Lakhs", "₹ 6.40 Crores", "₹ 28.50 Crores", "₹ 85.00 Crores", "₹ 190.00 Crores"],
      ["B2B Enterprise SDK ARR", "₹ 1.10 Crores", "₹ 5.60 Crores", "₹ 18.50 Crores", "₹ 45.00 Crores", "₹ 95.00 Crores"],
      ["Total Projected ARR", "<strong>₹ 2.00 Cr</strong>", "<strong>₹ 12.00 Cr</strong>", "<strong>₹ 47.00 Cr</strong>", "<strong>₹ 130.00 Cr</strong>", "<strong>₹ 285.00+ Cr</strong>"]
    ]
  },

  // Slide 16: Section Divider 4 (Grant Ask & Utilisation)
  {
    layout: "divider",
    title: "Grant Ask, Fund Utilisation & Milestones",
    subtitle: "Transparent capital allocation for deep-tech R&D, edge testing sandbox, patent filings, and vernacular pilots.",
    badge: "SECTION 04 • GRANT UTILISATION & IMPACT"
  },

  // Slide 17: Fund Utilisation & Budget Allocation (Four Card Grid)
  {
    layout: "fourcard",
    title: "Strategic Fund Utilisation Plan (Grant Scope)",
    subtitle: "100% aligned with Startup India Seed Fund & MeitY Deep-Tech Grant Guidelines (Strictly for Forward Deployment).",
    cards: [
      {
        title: "1. Quantized Edge ML & R&D (35%)",
        icon: "👨‍💻",
        body: "Recruiting specialized low-level Android/C++ systems engineers and edge-ML scientists to quantize and optimize TensorFlow Lite NLP models for sub-15ms inference on budget smartphone chipsets."
      },
      {
        title: "2. Sovereign Testbed & Hardware Lab (25%)",
        icon: "🧪",
        body: "Setting up an indigenous hardware testbed with 50+ diverse Android device profiles (Lava, Micromax, Xiaomi, Samsung) across Android 8 to 15 to stress-test zero-crash execution."
      },
      {
        title: "3. IP Protection, Patents & Audits (20%)",
        icon: "📜",
        body: "Filing domestic and PCT international patents for on-device screen overlay intercept algorithms, acquiring ISO 27001 / SOC-2 certifications, and formal DPDP Act 2023 legal compliance auditing."
      },
      {
        title: "4. Vernacular Field Trials & Validation (20%)",
        icon: "🌾",
        body: "Conducting structured rural and tier-2/3 user trials with 10,000+ citizens across Maharashtra and Gujarat to validate TalkBack voice accuracy and calibrate low-literacy accessibility prompts."
      }
    ]
  },

  // Slide 18: 18-Month Execution Roadmap (De-risked Startup Positioning)
  {
    layout: "blueprint",
    title: "Execution Roadmap: Proven Traction to Grant Scale",
    subtitle: "Foundational core de-risked via self-funding (M1–M6) — Grant accelerates forward R&D, banking pilots, and national rollout (M7–M18).",
    phases: [
      {
        phase: "MONTHS 1–6 (COMPLETED)",
        title: "Self-Funded Core Validation",
        duration: "Completed (M1–M6)",
        budget: "₹0 Grant (Self-Funded)",
        deliverables: [
          "Alpha heuristic fraud & remote APK detector",
          "Android Accessibility screen intercept engine",
          "4-Language TalkBack voice prompt framework",
          "Sub-15ms on-device benchmark achieved"
        ],
        payment: "<strong>Status:</strong> ✅ 100% Bootstrapped & De-risked"
      },
      {
        phase: "MONTHS 7–9 (GRANT M1)",
        title: "Quantized Edge ML & SDK",
        duration: "Months 7 – 9",
        budget: "Grant Phase 1",
        deliverables: [
          "Quantized TensorFlow Lite edge model training",
          "Drop-in Threat Intelligence SDK for banking",
          "Sandbox testing with 2 partner fintechs",
          "Developer portal & integration guides"
        ],
        payment: "<strong>Milestone:</strong> First 2 Fintech Sandbox Pilots"
      },
      {
        phase: "MONTHS 10–12 (GRANT M2)",
        title: "Hardware Lab & DPDP Audit",
        duration: "Months 10 – 12",
        budget: "Grant Phase 2",
        deliverables: [
          "50-Device multi-OS hardware testbed setup",
          "Third-party DPDP Act & CERT-In cyber audit",
          "Indian patent office full specification filing",
          "10,000-citizen rural vernacular trial kickoff"
        ],
        payment: "<strong>Milestone:</strong> Hardware Testbed & Certifications"
      },
      {
        phase: "MONTHS 13–18 (GRANT M3–M4)",
        title: "National Scale & OEM Rollout",
        duration: "Months 13 – 18+",
        budget: "Grant Phase 3 & 4",
        deliverables: [
          "Native iOS Swift on-device security release",
          "Smartphone OEM preload & system integration",
          "Telecom VAS bundling & state cyber cell tie-up",
          "Pan-India commercial rollout (1M+ active users)"
        ],
        payment: "<strong>Milestone:</strong> Nationwide Deployment & Scale"
      }
    ]
  },

  // Slide 19: Societal Impact & Alignment with National Missions (Two Column)
  {
    layout: "twocol",
    title: "Alignment with National Strategic Missions",
    subtitle: "Driving tangible national security, data sovereignty, and inclusive digital empowerment.",
    leftCol: {
      title: "Direct Societal Impact",
      badge: "INCLUSIVE BHARAT",
      bullets: [
        "<strong>Protecting the Next Billion Users:</strong> Shielding non-English-speaking, rural, and elderly citizens from losing life savings to social engineering frauds.",
        "<strong>Empowering Visually Impaired Citizens:</strong> TalkBack audio alerts ensure blind users receive spoken warnings before executing compromised transactions.",
        "<strong>Restoring Trust in Digital Payments:</strong> Eliminating fear of UPI and digital banking in tier-3/rural India, accelerating formal financial inclusion."
      ]
    },
    rightCol: {
      title: "Government Mission Alignment",
      badge: "ATMANIRBHAR BHARAT",
      bullets: [
        "<strong>Make in India & Atmanirbhar Bharat:</strong> 100% domestically engineered deep-tech software replacing foreign proprietary antivirus tools.",
        "<strong>DPDP Act 2023 Sovereign Gold Standard:</strong> Demonstrating that world-class cybersecurity can be achieved with zero citizen surveillance and zero data export.",
        "<strong>Cyber Surakshit Bharat (MHA / MeitY):</strong> Partnering with law enforcement and CERT-In to build proactive, automated cyber resilience across the nation."
      ]
    }
  },

  // Slide 20: Closing Slide & Call to Action (QA Layout)
  {
    layout: "qa",
    title: "Join Us in Securing India's Digital Future",
    subtitle: "TenCore Digital Labs Private Limited is ready to partner with Startup India and Government Innovation Programs to build sovereign deep-tech infrastructure.",
    contactInfo: BRAND_CONFIG.contact.items,
    qrLabel: BRAND_CONFIG.contact.qrLabel,
    qrSub: BRAND_CONFIG.contact.qrSub
  }
];

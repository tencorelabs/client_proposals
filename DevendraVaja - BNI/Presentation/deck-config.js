/**
 * ============================================================================
 * TENCORE DIGITAL LABS • BNI CHAPTER FEATURE PRESENTATION
 * ============================================================================
 * Speaker: Devendra Vaja (Founder & Principal Systems Architect)
 * Target: Non-Technical Business Owners & Entrepreneurs
 * Theme: Everyday Plain Language • Outcome-Focused • Custom AI & Automation
 */

// 1. GLOBAL BRANDING & FOUNDER PROFILE
const BRAND_CONFIG = {
  companyName: "TenCore Digital Labs Private Limited",
  division: "Custom Mobile Apps, SaaS & AI Automation Studio",
  confidentialLabel: "BNI CHAPTER PRESENTATION",
  copyright: "TenCore Digital Labs Private Limited © 2026",
  logoText: "TC",
  
  // Leadership & Engineering Track Record
  founder: {
    name: "Devendra Vaja",
    role: "Founder & Principal Systems Architect",
    company: "TenCore Digital Labs Private Limited",
    avatarInitials: "DV",
    tagline: "24+ years of global systems engineering across India, USA, and Japan building high-reliability mobile apps, device drivers, and custom AI business automation.",
    pillars: [
      {
        title: "24+ Years Global Systems Experience (India • Japan • USA)",
        desc: "Deep-rooted engineering track record building high-security gaming machine device drivers in Tokyo, enterprise architectures in the US, and scalable software in India."
      },
      {
        title: "Android OS & Mobile Platform Pioneer (Since 2007)",
        desc: "Building native mobile apps and Android platform software since the OS began in 2007 — turning complex technology into simple, 1-tap mobile experiences."
      },
      {
        title: "Custom Problem Solver for Every Business",
        desc: "We don't force rigid, generic software. We study your exact daily workflow and build tailor-made mobile apps and AI automation fitted to your business."
      }
    ]
  },

  // Contact / Q&A Information for Closing Slide
  contact: {
    title: "Let's Connect for a 1-to-1 Meeting",
    subtitle: "Share 1 manual headache in your business, and let's explore how to automate it in a 20-minute discussion.",
    items: [
      { icon: "👨‍💼", label: "Principal Architect", val: "Devendra Vaja" },
      { icon: "🏢", label: "Technology Studio", val: "TenCore Digital Labs Private Limited" },
      { icon: "✉️", label: "Email", val: "tencorelabs@gmail.com" },
      { icon: "📱", label: "Phone / WhatsApp", val: "+91 9082351295" },
      { icon: "📍", label: "Location", val: "Mumbai, India" }
    ],
    qrLabel: "Book 1-to-1 Meeting",
    qrSub: "Scan to connect directly on WhatsApp"
  }
};

// 2. PRESENTATION METADATA
const DECK_META = {
  title: "TenCore Digital Labs",
  subtitle: "Custom Mobile Apps, SaaS & AI Automation for Business Growth",
  pillTag: "🤝 BNI Member Feature Presentation",
  version: "Version 1.0",
  date: "September 2026",
  category: "BNI Feature Presentation",
  storageKey: "devendravaja_bni_presentation_v1"
};

// 3. COLOR THEME CONFIGURATION
const THEME_CONFIG = {
  primary: "#0F2942",       // Deep Slate Navy
  primaryDark: "#0A1929",
  primaryLight: "#E0F2FE",
  secondary: "#0284C7",     // TenCore Blue Accent
  accent: "#2563EB",
  emerald: "#059669",
  amber: "#D97706",
  bgBody: "#f8fafc",
  bgCard: "#ffffff",
  textPrimary: "#0f172a",
  textSecondary: "#475569"
};

// 4. SLIDES CATALOG (9 Engaging, Plain-Language BNI Slides)
const DEFAULT_SLIDES = [
  // Slide 1: Title Cover
  {
    layout: "title",
    title: "TenCore Digital Labs <span>Custom AI & Mobile Solutions</span>",
    subtitle: "Turning Your Daily Manual Headaches into Automated Business Growth & Peace of Mind",
    meta: [
      { label: "SPEAKER", value: "Devendra Vaja", sub: "Founder & Systems Architect" },
      { label: "CORE FOCUS", value: "Mobile Apps • SaaS • Automation", sub: "Tailor-Made for Your Business" },
      { label: "PURPOSE", value: "BNI Feature Presentation", sub: "Grow Together Through Tech" }
    ]
  },

  // Slide 2: Founder / Leadership Profile & Global Pedigree
  {
    layout: "instructor",
    title: "Meet Devendra Vaja — Systems Architect & Founder",
    subtitle: "24+ Years of Deep-Tech Systems Engineering & Enterprise Digital Architecture",
    instructorName: BRAND_CONFIG.founder.name,
    instructorRole: BRAND_CONFIG.founder.role + " • " + BRAND_CONFIG.founder.company,
    instructorTagline: BRAND_CONFIG.founder.tagline,
    highlights: [
      {
        title: "24+ Years Global Systems Experience (India • Japan • USA)",
        desc: ""
      },
      {
        title: "Android OS & Mobile Platform Pioneer (Since 2007)",
        desc: ""
      },
      {
        title: "Custom Problem Solver for Every Business",
        desc: "We don't force rigid, generic software. We study your exact daily workflow and build tailor-made mobile apps and AI automation fitted to your business."
      }
    ],
    companiesTitle: "Trusted Engineering Pedigree Across Global Enterprises:",
    companies: [
      { name: "Larsen & Toubro", logo: "Pics/logos/lt.png" },
      { name: "Wipro", logo: "Pics/logos/wipro.png" },
      { name: "Capgemini", logo: "Pics/logos/capgemini.png" },
      { name: "eInfochips", logo: "Pics/logos/einfochips.png" },
      { name: "Intel", logo: "Pics/logos/intel.png" },
      { name: "Sony", logo: "Pics/logos/sony.png" },
      { name: "EMC", logo: "Pics/logos/emc.png" },
      { name: "Rakuten (Japan)", logo: "Pics/logos/rakuten.png" },
      { name: "Konami Gaming (Tokyo)", logo: "Pics/logos/konami.png" },
      { name: "Chartboost", logo: "Pics/logos/chartboost.png" },
      { name: "Vungle", logo: "Pics/logos/vungle.png" },
      { name: "Fundtech", logo: "Pics/logos/fundtech.png" }
    ]
  },

  // Slide 3: SafetySetu Product Highlight (Screen Share & UPI Protection)
  {
    layout: "threecard",
    title: "SafetySetu: Stop UPI Scams Before Money Leaves Your Account",
    subtitle: "Fraudsters can clean out your bank balance in seconds — SafetySetu catches them instantly right on your phone.",
    cards: [
      {
        title: "Screen-Share Hijack Blocker",
        icon: "🚨",
        body: "Instant alert & screen freeze the moment someone tricks you or your elderly parents into sharing their screen during a UPI payment (Stops AnyDesk/TeamViewer scams).",
        metric: "Sub-15ms Protection"
      },
      {
        title: "Real-Time Payment Interceptor",
        icon: "🛡️",
        body: "Monitors active payment interfaces and suspicious overlay windows locally on the smartphone before unauthorized transfers occur.",
        metric: "Instant Threat Freeze"
      },
      {
        title: "100% Privacy — Zero Cloud Leakage",
        icon: "🔒",
        body: "Runs completely on your smartphone device. Zero passwords, OTPs, or bank details are ever uploaded to any cloud server.",
        metric: "100% On-Device Privacy"
      }
    ]
  },

  // Slide 4: Case Study: Preksha Insurance Requirements & InsuranceSetu Concept
  {
    layout: "twocol",
    title: "Case Study: Preksha Insurance Requirements & Concept",
    subtitle: "How we studied a solo agency's manual workflow and conceptualized the InsuranceSetu automation product.",
    leftCol: {
      title: "Preksha Insurance (Current Manual Reality)",
      badge: "THE WORKFLOW CHALLENGE",
      bullets: [
        "<strong>Manual PDF & Excel Review:</strong> Spends 1–2 hours monthly reviewing messy insurer PDF due lists and spreadsheets for follow-ups.",
        "<strong>Painful Contact Maintenance:</strong> Insurer due lists provide policy numbers but zero phone numbers — manually searching and maintaining contact lists is a big headache.",
        "<strong>Divided Founder Focus:</strong> Instead of solely focusing on business growth and meeting clients, the owner must divide focus on manual follow-ups and spreadsheet data management.",
        "<strong>Single-Blast Limitations:</strong> Manual follow-up lacks automated 2nd/3rd grace period alerts, leaving renewals at risk."
      ]
    },
    rightCol: {
      title: "The InsuranceSetu Product Concept",
      badge: "HOW WE SOLVED IT",
      bullets: [
        "<strong>1-Click PDF Ingestion:</strong> Ingests complex tabular due lists with sub-second extraction and verified mathematical audit.",
        "<strong>Smart Phonetic Contact Matcher:</strong> Instantly connects policyholder names to phone contacts using fuzzy matching.",
        "<strong>Multi-Touch Multilingual WhatsApp:</strong> Auto-schedules personalized Gujarati, Hindi, Marathi, & English notices with branded PDF receipts.",
        "<strong>Saves 3 Days for 500+ Policy Books:</strong> Saves 3 full working days every month for agencies with 500+ policies, and eliminates manual contact hunting for solo advisors."
      ]
    }
  },

  // Slide 5: Cross-Industry Applications (Combined Comprehensive Slide)
  {
    layout: "twocol",
    title: "How Can This Automation Help YOUR Specific Business?",
    subtitle: "If you have manual customer follow-ups, documents, or status tracking — we can automate it for you!",
    leftCol: {
      title: "Trading, Travel, Manufacturing & Visas",
      badge: "BUSINESS WORKFLOWS",
      bullets: [
        "<strong>🍬 Sugar Substitute / FMCG / Trading:</strong> Automated weekly dealer re-order reminders on WhatsApp, dispatch alerts & payment follow-ups.",
        "<strong>✈️ Immigration & Visa Consultancy:</strong> Automated applicant document checklists, stage-by-stage visa tracking & WhatsApp status alerts.",
        "<strong>🗺️ Travel & Tourism:</strong> 1-Click WhatsApp itinerary delivery, hotel voucher dispatch & real-time cab driver coordination.",
        "<strong>🏭 Plastic & Product Manufacturing:</strong> B2B sample dispatch tracking, quote approvals, client feedback & shift logs on a simple mobile app."
      ]
    },
    rightCol: {
      title: "Finance, Legal, Tax & Operations",
      badge: "PROFESSIONAL SERVICES",
      bullets: [
        "<strong>💰 Finance & Loan Approval Cycle:</strong> Mobile intake for customer KYC documents, multi-stage approval checkmarks & sanction alerts.",
        "<strong>⚖️ Lawyers & Legal Consultations:</strong> Automated court hearing date reminders to clients & case file digital indexing.",
        "<strong>📊 Taxation, CAs & Corporate Gifting:</strong> Automated GST/ITR filing deadline alerts, client document upload vaults & festival gifting catalogues.",
        "<strong>📍 Attendance & Field Staff Tracking:</strong> 1-Tap mobile/GPS attendance, field visit logs & real-time team task updates."
      ]
    }
  },

  // Slide 6: The PAN-India Language Barrier Solved
  {
    layout: "threecard",
    title: "Doing Business Across India? Break the Language Barrier!",
    subtitle: "What if a Gujarati or Mumbai business needs to sell to customers in Tamil Nadu, Andhra (Telugu), or the North?",
    cards: [
      {
        title: "The Language Wall",
        icon: "🗣️",
        body: "When your app, portal, or message is English-only, over 65% of Bharat customers feel hesitant, misunderstood, or bounce to competitors.",
        metric: "65% Customer Friction"
      },
      {
        title: "TenCore Multi-Lingual Engine",
        icon: "🌐",
        body: "We build custom systems that communicate in the client's mother tongue — WhatsApp text and audio voice alerts in Gujarati, Hindi, Marathi, Telugu, Tamil, & more.",
        metric: "10+ Indian Languages"
      },
      {
        title: "Zero Customer Left Behind",
        icon: "🎯",
        body: "Give every customer across India the comfort of their regional language. Scale your business smoothly from Gujarat to Tamil Nadu.",
        metric: "100% Pan-India Reach"
      }
    ]
  },

  // Slide 7: Interactive Reflection: What If You Are Stuck?
  {
    layout: "fourcard",
    title: "Let's Ask: Are You Stuck in Any of These Situations?",
    subtitle: "Take a moment to reflect on your daily business operations — where is manual friction slowing you down?",
    cards: [
      {
        title: "1. Staff Forgets Follow-ups?",
        icon: "⏳",
        body: "You sent a ₹5 Lakh quote, but your sales staff forgot to follow up after 3 days and the client went to a competitor."
      },
      {
        title: "2. Tired of Evening Excel Tally?",
        icon: "📊",
        body: "Spending 2 hours every evening manually checking employee attendance, WhatsApp orders, or pending payments."
      },
      {
        title: "3. Paperwork Stuck on Your Desk?",
        icon: "📝",
        body: "Important bills, customer files, or approval vouchers are stuck waiting for sign-off while you are traveling out of office."
      },
      {
        title: "4. Want Your Own Mobile App?",
        icon: "📱",
        body: "Your competitors are offering client apps and portals, while you are still managing high-value clients through messy WhatsApp chats."
      }
    ]
  },

  // Slide 8: TenCore Digital Labs as the Tailor-Made Problem Solver
  {
    layout: "threecard",
    title: "TenCore Digital Labs: Tailor-Made Solutions for You",
    subtitle: "We don't force you into rigid software. We build software and custom automation fitted exactly around YOUR business workflow.",
    cards: [
      {
        title: "Custom Mobile Apps (Android & iOS)",
        icon: "📱",
        body: "Fast, simple mobile apps for your field staff, dealers, or customers that require zero technical training.",
        metric: "Simple & Intuitive"
      },
      {
        title: "Smart Web Portals & SaaS",
        icon: "💻",
        body: "Live dashboards, automated PDF invoicing, and real-time operational tracking accessible securely from any device.",
        metric: "Real-Time Control"
      },
      {
        title: "Document & Communication Automation",
        icon: "⚡",
        body: "Scan cards, documents, PDFs, and Excel in less than 3 seconds. Trigger WhatsApp and Email follow-ups automatically.",
        metric: "10x Operational Speed"
      }
    ]
  },

  // Slide 9: Closing & 1-to-1 Call to Action
  {
    layout: "qa",
    title: "Let's Book a 1-to-1 Meeting & Free Automation Audit",
    subtitle: "Tell me 1 manual headache in your business during our 1-to-1, and I will show you how to automate it!",
    contactInfo: BRAND_CONFIG.contact.items,
    qrLabel: BRAND_CONFIG.contact.qrLabel,
    qrSub: BRAND_CONFIG.contact.qrSub
  }
];

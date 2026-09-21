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

// 4. SLIDES CATALOG (10 Engaging, Plain-Language BNI Slides)
const DEFAULT_SLIDES = [
  // Slide 1: Title Cover
  {
    layout: "title",
    title: "TenCore Digital Labs <span>Custom AI & Mobile Solutions</span>",
    subtitle: "Turning Your Daily Manual Headaches into Automated Business Growth & Peace of Mind",
    meta: [
      { label: "SPEAKER", value: "Devendra Vaja", sub: "Founder & Systems Architect" },
      { label: "CORE FOCUS", value: "Mobile Apps • AI SaaS • WhatsApp Automation", sub: "Tailor-Made for Your Business" },
      { label: "PURPOSE", value: "BNI Feature Presentation", sub: "Grow Together Through Tech" }
    ]
  },

  // Slide 2: Founder / Leadership Profile
  {
    layout: "instructor",
    title: "Meet Devendra Vaja — Systems Architect & Founder",
    subtitle: "24+ Years of Deep-Tech Engineering Across India, USA, and Japan",
    instructorName: BRAND_CONFIG.founder.name,
    instructorRole: BRAND_CONFIG.founder.role + " • " + BRAND_CONFIG.founder.company,
    instructorTagline: BRAND_CONFIG.founder.tagline,
    instructorPillars: BRAND_CONFIG.founder.pillars
  },

  // Slide 3: SafetySetu Product Highlight
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
        title: "Fake APK & Phishing Interceptor",
        icon: "🛡️",
        body: "Scans malicious sideloaded APKs, fake electricity bill notices, and dangerous phishing links locally before you accidentally tap them.",
        metric: "Instant Threat Scan"
      },
      {
        title: "100% Privacy — Zero Cloud Leakage",
        icon: "🔒",
        body: "Runs completely on your smartphone device. Zero passwords, OTPs, or contact logs are ever uploaded to any cloud server.",
        metric: "100% On-Device Privacy"
      }
    ]
  },

  // Slide 4: Case Study: Preksha Insurance (InsuranceSetu)
  {
    layout: "twocol",
    title: "Real Case Study: How Preksha Insurance Automated in 1 Click",
    subtitle: "How we turned a solo agency's manual Excel nightmare into a 60-second automated revenue machine.",
    leftCol: {
      title: "Preksha Insurance (Manual Friction)",
      badge: "BEFORE AUTOMATION",
      bullets: [
        "<strong>10+ Hours Lost in Excel:</strong> Manually typing hundreds of policy rows from messy LIC PDF due lists into spreadsheets every month.",
        "<strong>Zero Contact Numbers:</strong> Insurer due lists gave policy numbers but no phone numbers — finding each contact was exhausting.",
        "<strong>Missed Grace Periods:</strong> English-only SMS blasts had poor response; forgotten grace periods led to permanently lapsed commissions.",
        "<strong>Solo Agent Bottleneck:</strong> The owner was trapped doing clerical data entry instead of meeting new clients and closing business."
      ]
    },
    rightCol: {
      title: "With InsuranceSetu (Delivered Result)",
      badge: "WHAT WE DELIVERED",
      bullets: [
        "<strong>1-Click PDF Ingestion:</strong> Drag & drop the PDF due list — all policy data and math verified in under 3 seconds.",
        "<strong>Smart Indian Name Matcher:</strong> Instantly links policy numbers to phone contacts using fuzzy phonetic matching.",
        "<strong>Multilingual WhatsApp Outreach:</strong> Sends personalized Gujarati, Hindi, Marathi, & English notices with branded PDF receipts.",
        "<strong>Saved 3 Days Every Month:</strong> Zero extra staff hired, 30% higher renewal collection, and more time to close high-value sales!"
      ]
    }
  },

  // Slide 5: Cross-Industry Applications (Part 1)
  {
    layout: "fourcard",
    title: "How Can Automation Help YOUR Business? (Part 1)",
    subtitle: "If you have manual customer follow-ups, documents, or status tracking — we can automate it for you!",
    cards: [
      {
        title: "Sugar Substitute / FMCG / Trading",
        icon: "🍬",
        body: "Automate weekly dealer re-order reminders on WhatsApp, track dispatch statuses, and send payment outstanding alerts automatically."
      },
      {
        title: "Immigration & Visa Consultancy",
        icon: "✈️",
        body: "Automate client document checklist reminders, track multi-stage visa application progress, and notify students & families on WhatsApp."
      },
      {
        title: "Jewellery & Luxury Retail",
        icon: "💎",
        body: "Broadcast daily gold rate updates on WhatsApp, track custom jewellery manufacturing milestones, and send automated anniversary wishes."
      },
      {
        title: "Travel & Tourism",
        icon: "🗺️",
        body: "1-Click WhatsApp delivery of day-wise itineraries, instant hotel voucher sharing, and real-time cab driver pickup coordination."
      }
    ]
  },

  // Slide 6: Cross-Industry Applications (Part 2)
  {
    layout: "fourcard",
    title: "How Can Automation Help YOUR Business? (Part 2)",
    subtitle: "Eliminate repetitive paperwork, speed up team approvals, and never let a customer inquiry go cold.",
    cards: [
      {
        title: "Plastic & Industrial Manufacturing",
        icon: "🏭",
        body: "Track B2B product sample dispatch, quote approvals, client feedback, and factory machine shift logs on a simple mobile app."
      },
      {
        title: "Finance & Loan Approval Cycle",
        icon: "💰",
        body: "Mobile intake for customer KYC documents, multi-stage approval checkmarks, and automated loan sanction notifications."
      },
      {
        title: "Lawyers & Legal Consultations",
        icon: "⚖️",
        body: "Automated court hearing date reminders to clients, case file digital indexing, and WhatsApp fee collection notices."
      },
      {
        title: "Taxation, CAs & Corporate Gifting",
        icon: "📊",
        body: "Automated GST/ITR filing deadline alerts, client document upload vaults, and interactive festival corporate gifting catalogues."
      }
    ]
  },

  // Slide 7: The PAN-India Language Barrier Solved
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
        title: "TenCore Multi-Lingual AI",
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

  // Slide 8: Interactive Reflection: What If You Are Stuck?
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

  // Slide 9: TenCore Digital Labs as the Tailor-Made Problem Solver
  {
    layout: "threecard",
    title: "TenCore Digital Labs: Tailor-Made Solutions for You",
    subtitle: "We don't force you into rigid software. We build software and AI tools fitted exactly around YOUR business workflow.",
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
        title: "AI & WhatsApp Automation",
        icon: "⚡",
        body: "Scan visiting cards in 3s, extract PDF tables, and trigger multi-lingual WhatsApp workflows automatically.",
        metric: "10x Operational Speed"
      }
    ]
  },

  // Slide 10: Closing & 1-to-1 Call to Action
  {
    layout: "qa",
    title: "Let's Book a 1-to-1 Meeting & Free Automation Audit",
    subtitle: "Tell me 1 manual headache in your business during our 1-to-1, and I will show you how to automate it!",
    contactInfo: BRAND_CONFIG.contact.items,
    qrLabel: BRAND_CONFIG.contact.qrLabel,
    qrSub: BRAND_CONFIG.contact.qrSub
  }
];

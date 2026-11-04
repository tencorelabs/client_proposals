/**
 * ============================================================================
 * TENCORE DIGITAL LABS • MASTER FEATURE PRESENTATION
 * ============================================================================
 * Solution: InsuranceSetu (BusinessSetu Suite by TenCore Digital Labs)
 * Speaker: Devendra Vaja (Founder & Principal Systems Architect)
 * Format: Feature Presentation
 * Audiences: BNI Chapter Feature Presentation & VBN (Vaishnav Business Network)
 * Core Theme: Cutting Policy Management from 5–6 Days to Under 30 Minutes
 */

// 1. GLOBAL BRANDING & FOUNDER PROFILE
const BRAND_CONFIG = {
  companyName: "TenCore Digital Labs Private Limited",
  division: "Vertical SaaS & Enterprise Document AI Studio",
  confidentialLabel: "FEATURE PRESENTATION",
  copyright: "TenCore Digital Labs Private Limited © 2026",
  logoText: "TC",
  
  // Leadership & Engineering Track Record
  founder: {
    name: "Devendra Vaja",
    role: "Founder & Principal Systems Architect",
    company: "TenCore Digital Labs Private Limited",
    avatarInitials: "DV",
    tagline: "24+ years of deep-tech systems engineering across Tokyo, Silicon Valley, and India building high-reliability native mobile, cloud, and enterprise AI automation platforms.",
    pillars: [
      {
        title: "24+ Years Global Systems Architecture (India • Japan • USA)",
        desc: "Deep-rooted engineering track record building high-security device drivers in Tokyo (Konami Gaming), enterprise software in the US, and scalable digital architectures in India."
      },
      {
        title: "Android OS & Mobile Platform Pioneer (Since 2007)",
        desc: "Engineering native mobile platforms since Android began in 2007 — turning complex enterprise technology into simple, 1-tap mobile experiences with zero learning curve."
      },
      {
        title: "Bank-Grade Precision & Cyber Defense Foundation",
        desc: "Creator of SafetySetu (on-device UPI scam blocker & screen-hijack shield), bringing the exact same bank-grade security, zero-cloud data leakage, and mathematical precision to enterprise business automation."
      }
    ]
  },

  // Contact / Q&A Information for Closing Slide
  contact: {
    title: "Book a 1-to-1 & Free 30-Min Agency Automation Audit",
    subtitle: "Bring 1 raw insurer PDF or due list to our 1-to-1, and I will demonstrate extracting and organizing it live in 60 seconds with zero obligation.",
    items: [
      { icon: "👨‍💼", label: "Principal Architect", val: "Devendra Vaja" },
      { icon: "🏢", label: "Technology Studio", val: "TenCore Digital Labs Private Limited" },
      { icon: "✉️", label: "Email", val: "tencorelabs@gmail.com" },
      { icon: "📱", label: "Phone / WhatsApp", val: "+91 9082351295" },
      { icon: "🌐", label: "Platform Suite", val: "BusinessSetu • InsuranceSetu (businesssetu.tencorelabs.com)" }
    ],
    qrLabel: "Book 1-to-1 on WhatsApp",
    qrSub: "Scan to connect directly on WhatsApp"
  }
};

// 2. PRESENTATION METADATA
const DECK_META = {
  title: "InsuranceSetu",
  subtitle: "Cutting Policy Management from 5–6 Days to Under 30 Minutes for Modern Agents & Agencies",
  pillTag: "🤝 Feature Presentation",
  version: "Master Edition • Version 2.0",
  date: "November 2026",
  category: "Feature Presentation",
  storageKey: "tencore_insurancesetu_presentation_v8"
};

// 3. COLOR THEME CONFIGURATION (TenCore Slate Navy & Tech Blue)
const THEME_CONFIG = {
  primary: "#0F2942",       // Deep Slate Navy
  primaryDark: "#0A1929",
  primaryLight: "#E0F2FE",
  secondary: "#0284C7",     // TenCore Blue Accent
  accent: "#2563EB",
  emerald: "#059669",
  amber: "#D97706",
  rose: "#E11D48",
  bgBody: "#f8fafc",
  bgCard: "#ffffff",
  textPrimary: "#0f172a",
  textSecondary: "#475569"
};

// 4. NETWORK MODE CONFIGURATION (BNI vs VBN)
const NETWORK_CONFIG = {
  BNI: {
    code: "BNI",
    name: "BNI Chapter",
    headerTitle: "TenCore Digital Labs • BNI Feature Presentation",
    pillTag: "🤝 BNI Member Feature Presentation",
    askBadge: "BNI Specific Ask • Ideal Referrals",
    giveBadge: "Givers Gain • Chapter Contribution",
    metaSub: "BNI Chapter Presentation",
    giveTitle: "My Give to Chapter Members (Givers Gain):"
  },
  VBN: {
    code: "VBN",
    name: "Vaishnav Business Network",
    headerTitle: "TenCore Digital Labs • VBN Feature Presentation",
    pillTag: "🤝 VBN (Vaishnav Business Network) Feature Presentation",
    askBadge: "VBN Specific Ask • Ideal Referrals",
    giveBadge: "VBN Member Support & Value",
    metaSub: "VBN Network Presentation",
    giveTitle: "My Give to VBN Network Members:"
  }
};

// 5. SLIDES CATALOG (15 Master Slides Paced for 7 Minutes • Visual & Uncluttered)
const DEFAULT_SLIDES = [
  // ==========================================================================
  // SLIDE 1: COVER & CORE PROMISE [0:00 – 0:25] (Target: 25s)
  // ==========================================================================
  {
    layout: "title",
    title: "InsuranceSetu <span>Document AI & Policy CRM</span>",
    subtitle: "Cutting Insurance Policy Management from 5–6 Days to Under 30 Minutes for Modern Agents & Agencies",
    timeTarget: "0:00 - 0:25 (25s)",
    script: "Good morning fellow members and esteemed guests. Today, I am excited to present InsuranceSetu — our specialized Document AI platform that transforms a painful 5-day clerical routine into a 30-minute automated flow, while stopping policy lapses permanently.",
    meta: [
      { label: "SPEAKER", value: "Devendra Vaja", sub: "Founder & Systems Architect" },
      { label: "CORE SOLUTION", value: "InsuranceSetu AI", sub: "Zero-Data-Entry Automation" },
      { label: "FORMAT", value: "Feature Presentation", sub: "Business Network Edition" }
    ]
  },

  // ==========================================================================
  // SLIDE 2: ABOUT US — FOUNDER & DEEP-TECH PEDIGREE [0:25 – 0:55] (Target: 30s)
  // ==========================================================================
  {
    layout: "instructor",
    categoryBadge: "About Us • Leadership & Track Record",
    timeTarget: "0:25 - 0:55 (30s)",
    title: "Meet Devendra Vaja — Systems Architect & Founder",
    subtitle: "24+ Years of Deep-Tech Systems Engineering across Tokyo, Silicon Valley, and India",
    instructorName: BRAND_CONFIG.founder.name,
    instructorRole: BRAND_CONFIG.founder.role + " • " + BRAND_CONFIG.founder.company,
    instructorTagline: BRAND_CONFIG.founder.tagline,
    script: "For 24 years, I have architected mission-critical systems across Tokyo, Silicon Valley, and India. From building high-security gaming machine device drivers at Konami Tokyo to enterprise mobile platforms, we engineer bank-grade precision and zero data leakage into InsuranceSetu.",
    highlights: [
      {
        title: "24+ Years Global Systems Experience (India • Japan • USA)",
        desc: "Built high-security gaming machine device drivers in Tokyo (Konami Gaming), enterprise software in the US, and scalable digital platforms in India."
      },
      {
        title: "Android OS & Mobile Platform Pioneer (Since 2007)",
        desc: "Engineering native mobile applications and Android OS systems since 2007 — turning complex enterprise software into simple, 1-tap mobile workflows."
      },
      {
        title: "Bank-Grade Cyber Defense Foundation (SafetySetu)",
        desc: "Creator of SafetySetu (on-device UPI scam blocker & screen-hijack shield), bringing the exact same bank-grade security and zero-cloud data leakage to InsuranceSetu."
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
      { name: "Rakuten (Japan)", logo: "Pics/logos/rakuten.svg" },
      { name: "Konami Gaming (Tokyo)", logo: "Pics/logos/konami.png" },
      { name: "Chartboost", logo: "Pics/logos/chartboost.png" },
      { name: "Vungle", logo: "Pics/logos/vungle.png" },
      { name: "Fundtech", logo: "Pics/logos/fundtech.png" }
    ]
  },

  // ==========================================================================
  // SLIDE 3: OUR VISION & MISSION [0:55 – 1:20] (Target: 25s)
  // ==========================================================================
  {
    layout: "vision-mission",
    categoryBadge: "Corporate Purpose • Guiding North Star",
    timeTarget: "0:55 - 1:20 (25s)",
    title: "Our Vision & Mission for Indian Insurance Agencies",
    subtitle: "Empowering every insurance advisor with spatial Document AI and zero-clerical peace of mind.",
    script: "Our vision is clear: eliminate 100% of clerical paperwork for over 2 million insurance advisors across India. Our mission is to deliver deterministic Document AI tools that automate policy extraction, contact linking, and vernacular outreach in under 30 minutes.",
    vision: {
      statement: "To eliminate 100% of clerical administrative paperwork for over 2 million insurance advisors and agency firms across India.",
      bullets: [
        "<strong>Reclaim 20+ Selling Hours:</strong> Free advisors from manual data entry so they focus on HNI client meetings.",
        "<strong>Zero Lapsed Policies:</strong> Ensure no Indian policyholder ever loses coverage due to missed renewal deadlines."
      ]
    },
    mission: {
      statement: "To deliver bank-grade, deterministic Document AI that automates policy ingestion, contact linking, and vernacular WhatsApp alerts in under 30 minutes.",
      bullets: [
        "<strong>100% Mathematical Accuracy:</strong> Deterministic formula verification on every rupee before database commit.",
        "<strong>Native Vernacular Communication:</strong> Enable effortless client connection in Gujarati, Hindi, Marathi, and English."
      ]
    }
  },

  // ==========================================================================
  // SLIDE 4: WHY CHOOSE US? — 6 CORE PILLARS [1:20 – 1:50] (Target: 30s)
  // ==========================================================================
  {
    layout: "sixgrid",
    categoryBadge: "Platform Pillars • Why InsuranceSetu",
    timeTarget: "1:20 - 1:50 (30s)",
    title: "Why Modern Insurance Agencies Choose InsuranceSetu",
    subtitle: "Engineered specifically for Indian insurance operations, multi-portal reality, and regional languages.",
    script: "Why choose InsuranceSetu? First, 10x speed—reducing 5 days of monthly typing to 30 minutes. Second, 100% mathematical audit. Third, bank-grade on-device security with zero cloud leakage. Fourth, multi-insurer compatibility across LIC, Star, and HDFC. Fifth, native vernacular WhatsApp messaging. And sixth, consolidated family 360 dossiers for HNIs.",
    cards: [
      {
        icon: "⚡",
        tag: "10x SPEED",
        title: "5 Days ➡️ 30 Mins",
        desc: "Ingest 500+ policies in 30 seconds with automated contact linking and zero typing."
      },
      {
        icon: "🧮",
        tag: "ZERO ERRORS",
        title: "100% Math Audit",
        desc: "Formula verified: (Installment × Dues) + GST == Total Due before database commit."
      },
      {
        icon: "🔒",
        tag: "BANK-GRADE",
        title: "Zero Cloud Leakage",
        desc: "Sensitive policyholder data remains on your secure local device with zero cloud sharing."
      },
      {
        icon: "🏢",
        tag: "MULTI-INSURER",
        title: "Universal Portal Hub",
        desc: "Ingests statement tables seamlessly from LIC, Star Health, HDFC ERGO, Care, and Tata AIG."
      },
      {
        icon: "🌐",
        tag: "VERNACULAR",
        title: "Mother-Tongue Alerts",
        desc: "1-Tap WhatsApp renewal notices in Gujarati, Hindi, Marathi, and English with direct UPI pay."
      },
      {
        icon: "👨‍👩‍👧‍👦",
        tag: "FAMILY 360",
        title: "Unified Dossiers",
        desc: "Generates IRDAI-branded 1-page family portfolio dossiers for high-ticket HNI trust."
      }
    ]
  },

  // ==========================================================================
  // SLIDE 5: THE INDUSTRY BOTTLENECK — THE 5-DAY CLERICAL CRISIS [1:50 – 2:20] (Target: 30s)
  // ==========================================================================
  {
    layout: "showcase",
    categoryBadge: "Industry Bottlenecks • The Ongoing Pain",
    timeTarget: "1:50 - 2:20 (30s)",
    title: "The Silent 5-Day Crisis in Every Insurance Agency",
    subtitle: "Whether managing 300 or 3,000 policies, clerical typing drains 25+ hours monthly while losing 20–35% in renewals.",
    script: "Here is the biggest bottleneck in the insurance industry: Every month, insurers send statements with policy numbers and premium amounts, but ZERO customer phone numbers. Advisors spend 5 to 6 agonizing days searching old paper diaries, retyping into Excel, and manually following up. 20% to 35% of renewal reminders are missed, policies lapse, and lifetime trail commissions vanish.",
    image: "Pics/illustrations/policy_speed_comparison.svg",
    imagePosition: "left",
    imageBadge: "OPERATIONAL BOTTLENECK",
    cardBadge: "THE MONTHLY CLERICAL NIGHTMARE",
    cardTitle: "How Advisors Lose 25+ Hours Every Month:",
    bullets: [
      "<strong>Messy Unstructured Insurer PDFs:</strong> Insurers send multi-page PDF tables with non-standard column layouts.",
      "<strong>The 'Zero-Contact' Trap:</strong> Statements list policy numbers and dues, but <strong>zero customer phone numbers</strong>!",
      "<strong>25+ Hours Wasted on Excel:</strong> Staff burn 5–6 days typing numbers and searching paper diaries.",
      "<strong>20%–35% Silent Revenue Bleed:</strong> Lapsed policies during grace periods destroy lifetime trail commissions."
    ],
    callout: {
      icon: "💸",
      text: "Burning ₹1,20,000+ annually on clerical typing assistant salaries"
    }
  },

  // ==========================================================================
  // SLIDE 6: WHAT IS INSURANCESETU? — THE 30-MINUTE PLATFORM [2:20 – 2:45] (Target: 25s)
  // ==========================================================================
  {
    layout: "showcase",
    categoryBadge: "Core Platform • Zero-Data-Entry AI",
    timeTarget: "2:20 - 2:45 (25s)",
    title: "What is InsuranceSetu?",
    subtitle: "India's first zero-data-entry Document AI and policy CRM built specifically for independent agents and agencies.",
    script: "What is InsuranceSetu? It is a purpose-built desktop and mobile platform that takes raw insurer PDF statements, extracts every record in seconds using spatial Document AI, links them to phonebook contacts with Indian phonetic matching, and automates personalized vernacular WhatsApp reminders with direct UPI links.",
    image: "Pics/insurancesetu_flyer.png",
    imagePosition: "right",
    imageBadge: "PROPRIETARY SOLUTION",
    cardBadge: "AUTOMATION ENGINE",
    cardTitle: "End-to-End Agency Policy Workflow:",
    bullets: [
      "<strong>Zero-Data-Entry Document AI:</strong> Ingests raw PDF due lists and parses complex tables in seconds.",
      "<strong>Indian Phonetic Contact Bridge:</strong> Auto-connects policy records to Google Contacts and phone numbers.",
      "<strong>1-Tap Multilingual WhatsApp Alerts:</strong> Dispatches personalized renewal notices with direct UPI payment links.",
      "<strong>Family 360 Portfolio Dossier:</strong> Unifies life, health, and motor policies into branded executive reports."
    ],
    callout: {
      icon: "⚡",
      text: "Collapses 5–6 days of clerical grind into under 30 minutes"
    }
  },

  // ==========================================================================
  // SLIDE 7: STEP 1 — 1-CLICK PDF EXTRACTION & MATH AUDIT [2:45 – 3:10] (Target: 25s)
  // ==========================================================================
  {
    layout: "showcase",
    categoryBadge: "4-Step Workflow • Step 1 (Min 00–05)",
    timeTarget: "2:45 - 3:10 (25s)",
    title: "Step 1: 1-Click Multi-Insurer PDF Extraction",
    subtitle: "Turn multi-page messy PDF statements into mathematically audited database records in 30 seconds.",
    script: "In Step 1, the advisor drops any raw insurer PDF statement into InsuranceSetu. Our spatial Document AI extracts 500 policy records in 30 seconds, verifying every rupee with mathematical precision: Installment times dues plus GST equals Total Due. Zero typing, zero errors.",
    image: "Pics/illustrations/pdf_math_extraction.svg",
    imagePosition: "left",
    imageBadge: "30-SECOND EXTRACTION",
    cardBadge: "STEP 1 • MIN 00–05",
    cardTitle: "Instant PDF Intake & Deterministic Verification:",
    bullets: [
      "<strong>Drag & Drop Any Insurer PDF:</strong> Direct support for LIC, Star Health, HDFC ERGO, Care, and portal aggregators.",
      "<strong>500 Policies in 30 Seconds:</strong> Spatial AI extracts table rows, policy numbers, and dates with 100% precision.",
      "<strong>Deterministic Mathematical Audit:</strong> Verifies (Installment × Dues) + GST == Total before database commit.",
      "<strong>Immediate Operational Gain:</strong> 5 full days of typing replaced by a 30-second automated drop."
    ],
    callout: {
      icon: "⚡",
      text: "5-Day Clerical Typing ➡️ Under 30 Seconds"
    }
  },

  // ==========================================================================
  // SLIDE 8: STEP 2 — 2-TIER PHONETIC CONTACT BRIDGE [3:10 – 3:35] (Target: 25s)
  // ==========================================================================
  {
    layout: "showcase",
    categoryBadge: "4-Step Workflow • Step 2 (Min 05–15)",
    timeTarget: "3:10 - 3:35 (25s)",
    title: "Step 2: 2-Tier Indian Phonetic Contact Bridge",
    subtitle: "Solving the 'Zero-Contact Trap' by linking insurer policy rows to phonebook contacts with 98%+ accuracy.",
    script: "In Step 2, InsuranceSetu solves the dirty secret of insurer statements—zero phone numbers. With 1 click, upload your phonebook or Google Contacts. Our phonetic matcher automatically links policyholders to mobile numbers, even with Indian spelling variations like Smitaben versus Smita Patel.",
    image: "Pics/illustrations/phonetic_contact_bridge.svg",
    imagePosition: "right",
    imageBadge: "PHONETIC AI MATCHING",
    cardBadge: "STEP 2 • MIN 05–15",
    cardTitle: "Connecting Policy Numbers to Real Phone Numbers:",
    bullets: [
      "<strong>1-Click Phonebook Import:</strong> Seamless sync from Google Contacts, smartphone contacts, or VCF export.",
      "<strong>Proprietary 2-Tier Phonetic Matcher:</strong> Connects policyholder names to mobile numbers automatically.",
      "<strong>Handles Indian Spelling Variances:</strong> Intelligently matches 'Smitaben' ⇋ 'Smita Patel' and 'Virendra' ⇋ 'Viren'.",
      "<strong>Zero Paper Diaries:</strong> Every policy is instantly linked to a verified WhatsApp mobile number."
    ],
    callout: {
      icon: "📇",
      text: "98%+ Auto-Match Rate • Eliminates hours of searching old diaries"
    }
  },

  // ==========================================================================
  // SLIDE 9: STEP 3 — VERNACULAR WHATSAPP RENEWAL OUTREACH [3:35 – 4:00] (Target: 25s)
  // ==========================================================================
  {
    layout: "showcase",
    categoryBadge: "4-Step Workflow • Step 3 (Min 15–25)",
    timeTarget: "3:35 - 4:00 (25s)",
    title: "Step 3: Vernacular WhatsApp Renewal Outreach",
    subtitle: "Send personalized renewal notices in native mother tongues with direct 1-tap UPI payment links.",
    script: "In Step 3, with just 1 tap, InsuranceSetu dispatches personalized renewal reminders directly via WhatsApp Web. Notices are formatted in the client's native mother tongue—Gujarati, Hindi, Marathi, or English—complete with exact policy details and a 1-tap direct UPI payment link.",
    image: "Pics/illustrations/whatsapp_vernacular_mockup.svg",
    imagePosition: "left",
    imageBadge: "1-TAP AUTO DISPATCH",
    cardBadge: "STEP 3 • MIN 15–25",
    cardTitle: "High-Response Native Language Communication:",
    bullets: [
      "<strong>1-Tap WhatsApp Web Auto-Dispatch:</strong> Dispatches pre-formatted alerts with zero manual typing.",
      "<strong>Native Mother-Tongue Templates:</strong> Auto-customized in Gujarati, Hindi, Marathi, and English.",
      "<strong>Direct 1-Tap UPI Pay Link:</strong> Includes exact policy number, premium due amount, and instant payment button.",
      "<strong>3x Higher Response Rate:</strong> Clients respond and pay immediately when addressed in their mother tongue."
    ],
    callout: {
      icon: "💬",
      text: "Instant WhatsApp Outreach • Zero policies forgotten during grace periods"
    }
  },

  // ==========================================================================
  // SLIDE 10: STEP 4 — FAMILY 360 & CONSOLIDATED IRDAI DOSSIERS [4:00 – 4:25] (Target: 25s)
  // ==========================================================================
  {
    layout: "showcase",
    categoryBadge: "4-Step Workflow • Step 4 (Min 25–30)",
    timeTarget: "4:00 - 4:25 (25s)",
    title: "Step 4: Real-Time Tracking & Family 360 Dossiers",
    subtitle: "Track renewals in real time and deliver consolidated IRDAI-branded portfolio dossiers to HNI families.",
    script: "In Step 4, the advisor gets a live dashboard tracking paid versus overdue premiums with automated grace period alerts. Plus, 1-click generation of consolidated Family 360 dossiers—grouping life, health, and motor under one household head with agency branding.",
    image: "Pics/illustrations/family_dossier_360.svg",
    imagePosition: "right",
    imageBadge: "FAMILY 360 RADAR",
    cardBadge: "STEP 4 • MIN 25–30",
    cardTitle: "Live Monitoring & Cross-Sell Superpowers:",
    bullets: [
      "<strong>Live Collection Dashboard:</strong> Real-time visibility tracking collected premiums versus pending dues.",
      "<strong>Automated 3-Touch Grace Alerts:</strong> Proactive alerts at 30 days, 7 days, and 24 hours before policy lapse.",
      "<strong>Consolidated Family Dossiers:</strong> 1-Page IRDAI-compliant executive PDF reports with agency branding.",
      "<strong>Cross-Sell Coverage Radar:</strong> Instantly detects families with car insurance but zero health or term cover."
    ],
    callout: {
      icon: "🚀",
      text: "Entire 5-Day Monthly Routine Done in Under 30 Minutes"
    }
  },

  // ==========================================================================
  // SLIDE 11: REAL AGENCY IMPACT & ROI [4:25 – 4:55] (Target: 30s)
  // ==========================================================================
  {
    layout: "threecard",
    categoryBadge: "Commercial Value • Agency Superpowers",
    timeTarget: "4:25 - 4:55 (30s)",
    title: "Proven Business Impact for Every Insurance Agency",
    subtitle: "Eliminate clerical assistant salaries, protect lifetime renewal commissions, and scale your agency.",
    script: "What does this mean for an agency? First, 85% administrative time saved—reclaiming 25 hours every month. Second, a 35% boost in renewal persistence, permanently stopping policy lapses. Third, 2.5x higher client lifetime value through branded family dossiers that win HNI referrals.",
    cards: [
      {
        title: "85% Admin Time Saved & Zero Typists",
        icon: "⚡",
        metric: "Save 25+ Hrs/Month",
        body: "Eliminate clerical data entry and save ₹10,000/month on assistant salaries. Ingest 500-policy statements in under 30 seconds.",
        illustration: "Pics/illustrations/policy_speed_comparison.svg"
      },
      {
        title: "+35% Renewal Persistence & Zero Lapses",
        icon: "📈",
        metric: "Zero Lapsed Policies",
        body: "Automated 3-touch reminders stop policy lapses during grace periods, protecting up to ₹50,000+ in annual renewal trail commissions.",
        illustration: "Pics/illustrations/persistence_roi.svg"
      },
      {
        title: "Consolidated Family 360 & Cross-Sell",
        icon: "👥",
        metric: "2.5x Client Lifetime Value",
        body: "Group all family policies (life, health, motor) under one household head. Deliver professional IRDAI dossiers and spot coverage gaps.",
        illustration: "Pics/illustrations/family_dossier_360.svg"
      }
    ]
  },

  // ==========================================================================
  // SLIDE 12: CYBER DEFENSE FOUNDATION & GLOBAL PEDIGREE [4:55 – 5:25] (Target: 30s)
  // ==========================================================================
  {
    layout: "instructor",
    categoryBadge: "Trust & Security • Engineering Pedigree",
    timeTarget: "4:55 - 5:25 (30s)",
    title: "Bank-Grade Cyber Defense Foundation & Pedigree",
    subtitle: "Engineered on the exact same zero-trust cybersecurity foundation that powers SafetySetu.",
    instructorName: BRAND_CONFIG.founder.name,
    instructorRole: "Systems Architect • Creator of SafetySetu & InsuranceSetu",
    instructorTagline: "High-security systems engineering across Tokyo Gaming, Silicon Valley, and Indian Enterprise SaaS.",
    script: "When we built SafetySetu, our on-device cybersecurity shield, we engineered bank-grade UPI scam interception with zero data leakage. Today, we bring that exact same high-precision, mathematical engineering and privacy to InsuranceSetu.",
    highlights: [
      {
        title: "Zero Cloud Data Leakage (On-Device Privacy)",
        desc: "Sensitive policyholder databases and financial records remain on the advisor's secure local system — zero unauthorized cloud exposure."
      },
      {
        title: "SafetySetu Smartphone Threat Shield",
        desc: "Proven on-device defense blocking UPI payment hijackers, fake screen overlay scams, and malicious phishing apps."
      },
      {
        title: "Enterprise Systems Pedigree",
        desc: "24+ years building high-security device drivers, fintech platforms, and scalable vertical SaaS across global technology leaders."
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
      { name: "Rakuten (Japan)", logo: "Pics/logos/rakuten.svg" },
      { name: "Konami Gaming (Tokyo)", logo: "Pics/logos/konami.png" },
      { name: "Chartboost", logo: "Pics/logos/chartboost.png" },
      { name: "Vungle", logo: "Pics/logos/vungle.png" },
      { name: "Fundtech", logo: "Pics/logos/fundtech.png" }
    ]
  },

  // ==========================================================================
  // SLIDE 13: MULTI-INSURER COMPATIBILITY & ECOSYSTEM [5:25 – 5:50] (Target: 25s)
  // ==========================================================================
  {
    layout: "sixgrid",
    categoryBadge: "Universal Coverage • Insurer Ecosystem",
    timeTarget: "5:25 - 5:50 (25s)",
    title: "Universal Multi-Insurer Statement Compatibility",
    subtitle: "One unified platform for all your life, health, and general insurance statements across India.",
    script: "InsuranceSetu works seamlessly with every major insurer in India. Whether your agency handles LIC of India, Star Health, HDFC ERGO, ICICI Lombard, Care Health, or Tata AIG, our Document AI parses each unique statement layout flawlessly.",
    cards: [
      {
        logo: "Pics/logos/lic.svg",
        tag: "LIFE INSURANCE",
        title: "LIC of India",
        desc: "Ingests multi-page life, endowment, and pension due lists with complete premium breakdowns."
      },
      {
        logo: "Pics/logos/star_health.svg",
        tag: "HEALTH COVER",
        title: "Star Health Insurance",
        desc: "Extracts retail and corporate health policy renewal schedules with automated client phone linking."
      },
      {
        logo: "Pics/logos/hdfc_ergo.svg",
        tag: "GENERAL & MOTOR",
        title: "HDFC ERGO",
        desc: "Parses health, commercial, and comprehensive motor insurance statements with GST calculations."
      },
      {
        logo: "Pics/logos/icici_lombard.svg",
        tag: "GENERAL INSURANCE",
        title: "ICICI Lombard",
        desc: "Processes motor and general portfolios, identifying expiring policies before grace periods end."
      },
      {
        logo: "Pics/logos/care_health.svg",
        tag: "HEALTH FLOATERS",
        title: "Care Health Insurance",
        desc: "Organizes family floater renewal dues and matches family member records under one household."
      },
      {
        logo: "Pics/logos/tata_aig.svg",
        tag: "COMMERCIAL & RETAIL",
        title: "Tata AIG & Bajaj Allianz",
        desc: "Universal statement parsing across all remaining private and public sector general insurers."
      }
    ]
  },

  // ==========================================================================
  // SLIDE 14: MY SPECIFIC ASK — WHO TO INTRODUCE [5:50 – 6:20] (Target: 30s)
  // ==========================================================================
  {
    layout: "fourcard",
    categoryBadge: "Specific Ask • Ideal Referrals",
    timeTarget: "5:50 - 6:20 (30s)",
    title: "My Specific Ask: Who Can You Introduce Me To?",
    subtitle: "Help me connect with insurance professionals who want to eliminate clerical paperwork and stop policy lapses.",
    script: "Who is my specific ask? First: High-Volume LIC advisors and MDRT/COT members managing over 500 policies. Second: Health and general insurance brokers managing Star Health or HDFC books. Third: Agency principals running multi-agent firms. Fourth: CAs and wealth planners managing client portfolios.",
    cards: [
      {
        icon: "🏆",
        badge: "TIER 1 ASK",
        title: "High-Volume LIC Agents & MDRT / COT Members",
        desc: "Advisors managing 500 to 2,500+ active policies who need automated renewal workflows with zero extra staff."
      },
      {
        icon: "🏥",
        badge: "TIER 2 ASK",
        title: "Health & General Insurance Brokers",
        desc: "Brokers managing Star Health, Care, and HDFC portfolios wanting 1-tap WhatsApp renewal alerts."
      },
      {
        icon: "🏢",
        badge: "TIER 3 ASK",
        title: "Multi-Agent Agency Principals & Corporate Firms",
        desc: "Agency owners managing teams of 5 to 50 sub-agents needing central tracking and mathematical audits."
      },
      {
        icon: "📊",
        badge: "TIER 4 ASK",
        title: "Chartered Accountants (CAs) & Financial Planners",
        desc: "Financial planners who manage family portfolios and need consolidated IRDAI dossiers for HNI clients."
      }
    ],
    triggerBox: {
      icon: "🗣️",
      label: "CONVERSATIONS TO LISTEN FOR:",
      quote: "My staff spends the first week of every month typing policy due lists into Excel..."
    }
  },

  // ==========================================================================
  // SLIDE 15: MY GIVE TO MEMBERS & 1-TO-1 BOOKING [6:20 – 7:00] (Target: 40s)
  // ==========================================================================
  {
    layout: "qa",
    categoryBadge: "Givers Gain • 1-to-1 Booking",
    timeTarget: "6:20 - 7:00 (40s)",
    title: "Book a 1-to-1 & Free 30-Min Agency Automation Audit",
    subtitle: "Bring 1 raw insurer PDF statement to our 1-to-1 meeting, and I will extract it live on screen in 60 seconds!",
    script: "In the spirit of Givers Gain, my special give today goes to Neha Kawa, our chapter's Nutritionist. I am committed to actively passing high-trust client and family referrals to Neha for clinical nutrition, metabolic diet plans, and lifestyle wellness. In addition, my give to every member is a Free 30-Minute Automation Audit: bring just ONE raw insurer PDF statement to our 1-to-1, and I will extract and organize it live on screen in 60 seconds with zero obligation. Plus, a complimentary SafetySetu cyber security check for your family's smartphones. Scan the QR code, let's connect, and thank you!",
    contactInfo: BRAND_CONFIG.contact.items,
    qrLabel: BRAND_CONFIG.contact.qrLabel,
    qrSub: BRAND_CONFIG.contact.qrSub,
    giveHighlight: {
      title: "My Give to Chapter Members (Givers Gain):",
      featuredMember: {
        name: "Neha Kawa",
        category: "Nutritionist",
        icon: "🥗",
        tag: "Givers Gain • Featured Member Give",
        desc: "Committed referral partner: Actively passing high-trust client referrals for customized clinical nutrition, metabolic diet therapy, and lifestyle wellness."
      },
      items: [
        "🎁 <strong>Free 30-Min Agency Automation Audit:</strong> Live demo parsing your actual insurer PDF in 60 seconds with zero obligation.",
        "🛡️ <strong>SafetySetu Digital Peace of Mind:</strong> Complimentary smartphone cybersecurity & UPI fraud protection audit for your family and business."
      ]
    }
  }
];

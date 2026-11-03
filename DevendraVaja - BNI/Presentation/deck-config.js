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
  storageKey: "tencore_insurancesetu_presentation_v4"
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

// 5. SLIDES CATALOG (8 Master Slides Strictly Paced for 7 Minutes)
const DEFAULT_SLIDES = [
  // ==========================================================================
  // SLIDE 1: TITLE & CORE PROMISE [0:00 – 0:35] (Target: 35s)
  // ==========================================================================
  {
    layout: "title",
    title: "InsuranceSetu <span>Document AI & Policy CRM</span>",
    subtitle: "Cutting Policy Management from 5–6 Days to Under 30 Minutes for Modern Agents & Agencies",
    timeTarget: "0:00 - 0:35 (35s)",
    script: "Good morning fellow members and esteemed guests. Today, I am going to show you how a painful clerical routine drains 5 to 6 full days every single month from insurance agents—and how our platform, InsuranceSetu, uses spatial Document AI to reduce that entire cycle to under 30 minutes, while permanently stopping policy lapses.",
    meta: [
      { label: "SPEAKER", value: "Devendra Vaja", sub: "Founder & Systems Architect" },
      { label: "CORE SOLUTION", value: "InsuranceSetu AI", sub: "Zero-Data-Entry Automation" },
      { label: "FORMAT", value: "Feature Presentation", sub: "Business Network Edition" }
    ]
  },

  // ==========================================================================
  // SLIDE 2: FOUNDER PROFILE & HIGH-SECURITY PEDIGREE [0:35 – 1:20] (Target: 45s)
  // ==========================================================================
  {
    layout: "instructor",
    categoryBadge: "Leadership & Engineering Track Record",
    timeTarget: "0:35 - 1:20 (45s)",
    title: "Meet Devendra Vaja — Systems Architect & Founder",
    subtitle: "24+ Years of Deep-Tech Systems Engineering • Tokyo Gaming, US Enterprise & Indian Vertical SaaS",
    instructorName: BRAND_CONFIG.founder.name,
    instructorRole: BRAND_CONFIG.founder.role + " • " + BRAND_CONFIG.founder.company,
    instructorTagline: BRAND_CONFIG.founder.tagline,
    script: "For 24 years, I have architected mission-critical systems across Tokyo, Silicon Valley, and India. When we built SafetySetu, our on-device smartphone cybersecurity app, we engineered bank-grade UPI threat interception with zero data leakage. Today, we bring that exact same high-precision, mathematical engineering to TenCore's vertical SaaS suite—starting with InsuranceSetu.",
    highlights: [
      {
        title: "24+ Years Global Systems Experience (India • Japan • USA)",
        desc: "Built high-security gaming machine device drivers in Tokyo (Konami Gaming), enterprise software in the US, and scalable software in India."
      },
      {
        title: "Android OS & Mobile Platform Pioneer (Since 2007)",
        desc: "Engineering native mobile applications and Android OS platform systems since 2007 — turning complex technology into intuitive, 1-tap mobile workflows."
      },
      {
        title: "Bank-Grade Precision & Cyber Defense Foundation",
        desc: "Creator of SafetySetu (on-device UPI scam blocker & screen-hijack shield), bringing the exact same bank-grade security, zero-cloud data leakage, and mathematical precision to InsuranceSetu."
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
  // SLIDE 3: THE ONGOING PAIN & 5-DAY CLERICAL NIGHTMARE [1:20 – 2:15] (Target: 55s)
  // ==========================================================================
  {
    layout: "twocol",
    categoryBadge: "Industry Bottlenecks • The Ongoing Pain",
    timeTarget: "1:20 - 2:15 (55s)",
    title: "The Silent 5-Day Crisis in Every Insurance Agency",
    subtitle: "Whether managing 300 or 3,000 policies, agents waste 20+ hours monthly on clerical typing while losing 20–35% in renewal commissions.",
    script: "Here is the dirty secret of the insurance industry: Every month, insurers send statements with policy numbers and premium amounts, but ZERO customer phone numbers. An advisor managing 1,000 clients must spend 5 to 6 agonizing days cross-referencing old diaries, typing into Excel, and manually messaging clients. 20 to 35% of renewal reminders slip through the cracks, policies lapse, and agents lose their hard-earned renewal commissions.",
    leftCol: {
      title: "The 5-Day Clerical Nightmare",
      badge: "OPERATIONAL BOTTLENECK",
      bullets: [
        "<strong>Messy Unstructured PDF Statements:</strong> Insurers (LIC, Star Health, HDFC Ergo, ICICI Lombard) send multi-page PDF tables with hundreds of policy rows in varying column formats.",
        "<strong>The 'Zero-Contact' Trap:</strong> Statements list policy numbers, installment dues, and dates, but <strong>ZERO customer phone numbers or emails</strong>!",
        "<strong>The 25+ Hour Typing Trap:</strong> Staff waste 5–6 days retyping PDFs into Excel spreadsheets, frantically searching old paper diaries to find who to follow up with.",
        "<strong>Silent Revenue Bleed:</strong> 20% to 35% of renewal reminders are missed or sent too late; policies lapse during grace periods, and lifetime trail commissions vanish permanently."
      ]
    },
    rightCol: {
      title: "The Financial & Operational Toll",
      badge: "ANNUAL REVENUE DRAIN",
      bullets: [
        "<strong>₹1,20,000+ Annual Clerical Drain:</strong> Paying ₹8,000–₹12,000/month for a dedicated typist or assistant just to copy-paste numbers from PDFs into Excel.",
        "<strong>70% Time Spent on Paperwork, Not Sales:</strong> High-performing advisors spend their prime selling hours doing clerical data entry instead of meeting HNI prospects.",
        "<strong>Fragmented Client Records:</strong> If a family has 2 LIC policies, 1 Star Health cover, and 2 car policies, the agent has zero unified view of the household.",
        "<strong>Frustrated Policyholders:</strong> Clients miss grace period deadlines because they never received timely WhatsApp notifications in their native mother tongue."
      ]
    }
  },

  // ==========================================================================
  // SLIDE 4: THE BREAKTHROUGH: 5–6 DAYS TO UNDER 30 MINUTES [2:15 – 3:15] (Target: 60s)
  // ==========================================================================
  {
    layout: "blueprint",
    categoryBadge: "Deterministic Transformation • 10x Speed",
    timeTarget: "2:15 - 3:15 (60s)",
    title: "How InsuranceSetu Cuts 5–6 Days Down to Under 30 Minutes",
    subtitle: "A zero-data-entry, 4-step AI pipeline engineered specifically for Indian agency operations and regional languages.",
    script: "How do we collapse 5–6 days of clerical agony into under 30 minutes? In step 1, the agent drops any insurer PDF into InsuranceSetu. Our spatial AI extracts 500 policies in 30 seconds, mathematically verifying every rupee. In step 2, our phonetic matcher links names to phone contacts even with spelling differences. In step 3, with 1 click, personalized renewal notices are sent on WhatsApp in Gujarati, Hindi, or English with direct UPI payment links. And in step 4, the agency gets a live dashboard tracking every rupee. 5 days of work done before your morning tea is finished!",
    phases: [
      {
        phase: "STEP 1 • MIN 00–05",
        title: "1-Click PDF Extraction & Math Audit",
        duration: "5 Mins",
        budget: "Zero Typing",
        deliverables: [
          "Drag & drop raw insurer due lists (PDF, Excel, CSV) from LIC, Star Health, HDFC, or portal aggregators.",
          "Spatial PDF engine extracts 500+ policy records in 30 seconds with 100% precision.",
          "Deterministic Mathematical Validation: (Installment × Dues) + GST == Total Due verified before database commit."
        ],
        payment: "⚡ 5-Day Typing ➡️ 30 Secs"
      },
      {
        phase: "STEP 2 • MIN 05–15",
        title: "2-Tier Indian Phonetic Contact Bridge",
        duration: "10 Mins",
        budget: "98%+ Auto-Match",
        deliverables: [
          "Upload phonebook (VCF file or Google Contacts CSV export).",
          "Proprietary 2-tier phonetic matcher connects policyholder names to mobile numbers.",
          "Handles Indian spelling variances seamlessly ('Smitaben' vs 'Smita Patel', 'Virendra' vs 'Viren')."
        ],
        payment: "📇 Zero Diary Searching"
      },
      {
        phase: "STEP 3 • MIN 15–25",
        title: "1-Tap Multilingual WhatsApp Outreach",
        duration: "10 Mins",
        budget: "3x Higher Response",
        deliverables: [
          "Dispatches personalized, pre-formatted renewal notices directly to WhatsApp Web.",
          "Native mother-tongue templates in Gujarati, Hindi, Marathi, and English.",
          "Includes exact policy numbers, premium dues, due dates, and 1-tap direct UPI payment link."
        ],
        payment: "💬 1-Tap Auto-Dispatch"
      },
      {
        phase: "STEP 4 • MIN 25–30",
        title: "Real-Time Audit & Family Customer 360",
        duration: "5 Mins",
        budget: "Zero Policy Lapses",
        deliverables: [
          "Live dashboard tracks paid vs due, auto-scheduling 30-day, 7-day, and 24-hr grace alerts.",
          "Compiles 1-page executive consolidated portfolio PDFs with agency logo & IRDAI license.",
          "Cross-sell radar highlights families with motor insurance but zero health or term cover."
        ],
        payment: "🚀 Done in Under 30 Mins!"
      }
    ]
  },

  // ==========================================================================
  // SLIDE 5: CORE BENEFITS & AGENCY SUPERPOWERS [3:15 – 4:05] (Target: 50s)
  // ==========================================================================
  {
    layout: "threecard",
    categoryBadge: "Core Benefits • Agency Superpowers",
    timeTarget: "3:15 - 4:05 (50s)",
    title: "3 Transformative Superpowers for Every Insurance Agency",
    subtitle: "Eliminate administrative overhead, protect lifetime renewal commissions, and unlock high-ticket cross-selling.",
    script: "What does this mean for an agency's bottom line? First: 85% administrative time saved—saving ₹10,000/month on assistant salaries and giving agents 25 hours back. Second: a 35% boost in renewal persistence—no client forgets their grace period, protecting thousands in commissions. Third: instant Family Customer 360 dossiers—grouping life, health, and motor into a single branded report that builds immense trust with high-net-worth clients.",
    cards: [
      {
        title: "85% Admin Time Saved & Zero Typists",
        icon: "⚡",
        metric: "Save 25+ Hrs/Month",
        body: "Eliminate repetitive manual data entry and assistant salaries. Ingest an entire 500-policy monthly statement in under 3 minutes with automated contact linking.",
        illustration: "Pics/illustrations/policy_speed_comparison.svg"
      },
      {
        title: "+35% Renewal Persistence & Zero Lapses",
        icon: "📈",
        metric: "Zero Lapsed Policies",
        body: "Automated 3-touch alerts (30-day, 7-day, and 24-hr grace period) sent in Gujarati, Hindi, or English. Protect up to ₹50,000+ in annual trail commissions.",
        illustration: "Pics/illustrations/persistence_roi.svg"
      },
      {
        title: "Consolidated Family 360 & Cross-Sell Radar",
        icon: "👥",
        metric: "2.5x Client Lifetime Value",
        body: "Group all family policies (life, health, motor) under one household head. Deliver professional IRDAI-branded portfolio dossiers and spot coverage gaps for instant sales.",
        illustration: "Pics/illustrations/family_dossier_360.svg"
      }
    ]
  },

  // ==========================================================================
  // SLIDE 6: PROVEN ROI & VALUE STACK [4:05 – 4:55] (Target: 50s)
  // ==========================================================================
  {
    layout: "table",
    categoryBadge: "Commercial Value Stack • Unbeatable ROI",
    timeTarget: "4:05 - 4:55 (50s)",
    title: "₹20,500+ Monthly Value for Less Than ₹9/Day",
    subtitle: "Replace expensive manual assistants, separate WhatsApp tools, and lost commissions with a single automated app.",
    script: "Let's talk numbers. An agency spends ₹8,000 on an assistant to type due lists, ₹3,000 on WhatsApp tools, and loses ₹6,000 in lapsed commissions—over ₹20,500 in monthly cost. InsuranceSetu delivers all of this starting at just ₹249 per month—less than ₹9 a day, less than the price of a cutting chai! Here is our breakeven guarantee: if InsuranceSetu saves even ONE policy from lapsing in 6 months, it pays for your entire year's subscription!",
    columns: ["Operational & Business Component", "Traditional Monthly Cost / Loss", "With InsuranceSetu Platform"],
    rows: [
      ["1. Monthly Due List Typing & Data Entry", "₹8,000 / mo (Assistant salary or 25+ hrs typing)", "<strong>₹0 (1-Click Spatial AI Ingestion)</strong>"],
      ["2. WhatsApp Outreach & Vernacular Alerts", "₹3,000 / mo (Separate third-party SaaS tool)", "<strong>Included (1-Click Gujarati/Hindi/English Nudges)</strong>"],
      ["3. Family Customer 360 & Dossiers", "₹3,500 / mo (Legacy desktop software)", "<strong>Included (Branded Household Portfolio PDFs)</strong>"],
      ["4. Recovered Lapsed Commissions", "₹6,000+ / mo (Lost from missed 2nd/3rd grace alerts)", "<strong>₹0 Lost (Automated 3-Touch Reminders)</strong>"],
      ["TOTAL MONTHLY VALUE DELIVERED", "₹20,500+ / month", "<strong>ONLY ₹249 – ₹999 / mo (Save 95%–98%)</strong>"],
      ["THE BREAKEVEN GUARANTEE", "<em>\"If InsuranceSetu prevents even one single policy from lapsing every 6 months, it has paid for your entire year's subscription.\"</em>", "<strong>⚡ 100% Breakeven Guarantee</strong>"],
      ["FIRST 14 DAYS PILOT BENCHMARK", "<em>\"Our pilot target is for your agency to recover at least ₹50,000 in overdue premiums within your first 14 days using automated WhatsApp reminders.\"</em>", "<strong>🎯 ₹50,000+ Dues Target</strong>"]
    ]
  },

  // ==========================================================================
  // SLIDE 7: MY SPECIFIC ASK & TRIGGER CONVERSATIONS [4:55 – 5:50] (Target: 55s)
  // ==========================================================================
  {
    layout: "twocol",
    categoryBadge: "Specific Ask • Ideal Referrals",
    timeTarget: "4:55 - 5:50 (55s)",
    title: "My Specific Ask: Who Can You Introduce Me To?",
    subtitle: "Help me connect with insurance professionals and agency principals who are tired of manual Excel routine.",
    script: "Members, who is my ideal referral? First: LIC MDRT, COT, or TOT advisors managing 500+ policies. Second: General insurance broking firms handling health and motor across multiple companies. Third: Wealth advisors and CAs. Whenever you hear an advisor say, 'My staff spends a week typing policy lists into Excel,' or 'Clients keep forgetting their grace period,' that is your trigger to connect them with me!",
    leftCol: {
      title: "Target Client Profiles",
      badge: "WHO TO INTRODUCE",
      items: [
        {
          icon: "🏆",
          title: "High-Volume LIC Advisors & MDRT / COT Members",
          desc: "Managing 500 to 2,500+ active policies, needing automated monthly renewal cycles with zero extra staff.",
          bg: "#eff6ff",
          border: "#bfdbfe"
        },
        {
          icon: "🏥",
          title: "General Insurance Broking Houses & Agencies",
          desc: "Multi-line brokers handling Health (Star Health, Care), Motor, Marine, and Fire across multiple insurers.",
          bg: "#f0fdf4",
          border: "#bbf7d0"
        },
        {
          icon: "💼",
          title: "Wealth Managers & Mutual Fund Distributors",
          desc: "Financial planners who manage client portfolios and want consolidated family dossiers for HNIs.",
          bg: "#fef3c7",
          border: "#fde68a"
        },
        {
          icon: "📊",
          title: "Chartered Accountants (CAs) & Tax Advisors",
          desc: "CAs advising clients with large insurance books or agency firms needing organized financial dossiers.",
          bg: "#f5f3ff",
          border: "#ddd6fe"
        }
      ]
    },
    rightCol: {
      title: "Conversations to Listen For",
      badge: "TRIGGER PHRASES",
      items: [
        {
          icon: "🗣️",
          title: "\"My staff spends the first week of every month typing policy due lists into Excel...\"",
          bg: "#eff6ff",
          border: "#bfdbfe"
        },
        {
          icon: "🗣️",
          title: "\"Clients forgot their renewal date and their policy lapsed during grace period...\"",
          bg: "#fef2f2",
          border: "#fecaca"
        },
        {
          icon: "🗣️",
          title: "\"I have clients across LIC, Star, and HDFC Ergo, but no single software to see full family coverage...\"",
          bg: "#fffbeb",
          border: "#fef3c7"
        },
        {
          icon: "🗣️",
          title: "\"I want to send WhatsApp reminders to my clients in Gujarati or Hindi without typing each message manually...\"",
          bg: "#f0fdfa",
          border: "#ccfbf1"
        }
      ]
    }
  },

  // ==========================================================================
  // SLIDE 8: MY GIVE & 1-TO-1 CALL TO ACTION [5:50 – 6:35] (Target: 45s + Buffer)
  // ==========================================================================
  {
    layout: "qa",
    categoryBadge: "Givers Gain • 1-to-1 Booking",
    timeTarget: "5:50 - 6:35 (45s)",
    title: "Book a 1-to-1 & Free 30-Min Agency Automation Audit",
    subtitle: "Bring 1 raw insurer PDF or due list to our 1-to-1 meeting, and I will demonstrate extracting it live in 60 seconds!",
    script: "In the spirit of Givers Gain, my give to every member is a Free 30-Minute Automation Audit. If you or someone you know runs an insurance business, have them bring just ONE raw PDF statement to our 1-to-1. I will extract and organize it live on screen in 60 seconds with zero obligation. Plus, I offer a complimentary SafetySetu digital security check to protect your smartphones and UPI accounts from cyber scams. Scan the QR code, let's book a 1-to-1, and let's turn 5 days of manual pain into 30 minutes of automated peace of mind. Thank you!",
    contactInfo: BRAND_CONFIG.contact.items,
    qrLabel: BRAND_CONFIG.contact.qrLabel,
    qrSub: BRAND_CONFIG.contact.qrSub,
    giveHighlight: {
      title: "My Give to Chapter Members (Givers Gain):",
      items: [
        "🎁 <strong>Free 30-Min Agency Automation Audit:</strong> Live demonstration parsing your actual insurer PDF in 60 seconds with zero obligation.",
        "🛡️ <strong>SafetySetu Digital Peace of Mind:</strong> Complimentary smartphone security audit & UPI fraud defense check for your family and business bank accounts.",
        "🤝 <strong>Warm High-Trust Connections:</strong> Leveraging 24+ years of systems engineering network across India, USA, and Japan."
      ]
    }
  }
];

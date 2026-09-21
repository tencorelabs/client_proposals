/**
 * ============================================================================
 * TENCORE DIGITAL LABS • CLIENT PRESENTATION DECK CONFIGURATION
 * ============================================================================
 * Deck: InsuranceSetu (BusinessSetu Suite)
 * Purpose: Client & Agency Pitch Deck for Insurance Advisors & Broking Houses
 */

// 1. GLOBAL BRANDING & FOUNDER PROFILE
const BRAND_CONFIG = {
  companyName: "TenCore Digital Labs Private Limited",
  division: "Enterprise Document Intelligence & Vertical SaaS Studio",
  confidentialLabel: "CONFIDENTIAL • CLIENT PROPOSAL",
  copyright: "TenCore Digital Labs Private Limited © 2026",
  logoText: "TC",
  
  // Leadership & Engineering Track Record
  founder: {
    name: "Devendra Vaja",
    role: "Founder & Principal Systems Architect",
    company: "TenCore Digital Labs Private Limited",
    avatarInitials: "DV",
    tagline: "24+ years of deep-tech systems engineering across India, USA, and Japan architecting high-reliability mobile, cloud, and enterprise automation platforms.",
    pillars: [
      {
        title: "24+ Years Global Systems Architecture",
        desc: "Deep-rooted engineering leadership delivering mission-critical, zero-fault software across India, Tokyo (Japan), and the United States."
      },
      {
        title: "Vertical SaaS & Enterprise Automation",
        desc: "Architecting domain-specific SaaS platforms, deterministic data processing pipelines, and AI document ingestion engines for high-volume industries."
      },
      {
        title: "Privacy-First Data Sovereignty",
        desc: "Designing secure, multi-tenant cloud architectures with 100% client data isolation, DPDP compliance, and enterprise-grade auditability."
      }
    ]
  },

  // Contact / Q&A Information for Closing Slide
  contact: {
    title: "Ready to Transform Your Agency's Renewals?",
    subtitle: "Schedule a live 15-minute walkthrough or start your 14-day zero-risk trial.",
    items: [
      { icon: "👨‍💼", label: "Principal Architect", val: "Devendra Vaja" },
      { icon: "🏢", label: "Enterprise Studio", val: "TenCore Digital Labs Private Limited" },
      { icon: "✉️", label: "Direct Email", val: "tencorelabs@gmail.com" },
      { icon: "📱", label: "Phone / WhatsApp", val: "+91 9082351295" },
      { icon: "🌐", label: "Platform Suite", val: "BusinessSetu • InsuranceSetu" }
    ],
    qrLabel: "Schedule Live Demo",
    qrSub: "Scan to book your agency walkthrough"
  }
};

// 2. CLIENT PRESENTATION METADATA
const DECK_META = {
  title: "Insurance Setu",
  subtitle: "Document Intelligence & Automated Renewal CRM Platform",
  pillTag: "📄 BusinessSetu Suite • Insurance Document AI",
  version: "Version 1.0",
  date: "September 2026",
  category: "Client Solution Presentation",
  storageKey: "insurancesetu_presentation_v1"
};

// 3. COLOR THEME CONFIGURATION
const THEME_CONFIG = {
  primary: "#0F2942",       // Deep Slate Navy
  primaryDark: "#0A1929",
  primaryLight: "#E0F2FE",
  secondary: "#0284C7",     // TenCore Blue / Sky Accent
  accent: "#2563EB",
  emerald: "#059669",
  amber: "#D97706",
  bgBody: "#f8fafc",
  bgCard: "#ffffff",
  textPrimary: "#0f172a",
  textSecondary: "#475569"
};

// 4. SLIDES CATALOG (8 Strategic Customer Presentation Slides)
const DEFAULT_SLIDES = [
  // Slide 1: Cover Slide
  {
    layout: "title",
    title: "Insurance Setu <span>Document AI & Renewal CRM</span>",
    subtitle: "Turn Unstructured Insurer Due Lists into Automated WhatsApp Renewals & Verified Revenue Streams",
    meta: [
      { label: "PLATFORM SUITE", value: "BusinessSetu • TenCore", sub: "Vertical SaaS & Document AI" },
      { label: "LEADERSHIP", value: "Devendra Vaja", sub: "Founder & Principal Systems Architect" },
      { label: "PRESENTATION TYPE", value: "Client Solution Deck", sub: "Version 1.0 • September 2026" }
    ]
  },

  // Slide 2: The Agency Problem vs Solution (Two Column)
  {
    layout: "twocol",
    title: "The Silent Revenue Leak in Insurance Agencies",
    subtitle: "Whether you manage 100 or 2,000 policies, manual workflows cause heavy admin burdens and lost trail commissions.",
    leftCol: {
      title: "Current Operational Friction",
      badge: "AGENCY BOTTLENECKS",
      bullets: [
        "<strong>Top Agencies (500+ Policies):</strong> Lose 20–30 hours/month or spend ₹8,000–₹12,000/mo on assistants to type PDF due lists into Excel.",
        "<strong>Solo Advisors (100–300 Policies):</strong> Rely on rushed 1-hour broadcasts, missing 2nd/3rd grace period alerts and suffering a 20%+ policy lapse rate.",
        "<strong>The 'Zero-Contact' Trap:</strong> Insurer due lists provide policy numbers and dues, but zero phone numbers or emails — breaking instant outreach.",
        "<strong>Monolingual English Friction:</strong> English-only SMS reminders suffer a 65% drop in response from policyholders across Bharat."
      ]
    },
    rightCol: {
      title: "The InsuranceSetu Solution",
      badge: "AUTOMATED REVENUE CRM",
      bullets: [
        "<strong>1-Click Multi-Page PDF Ingestion:</strong> Ingest complex tabular due lists with sub-second extraction and mathematical audit validation.",
        "<strong>2-Tier Indian Phonetic Matcher:</strong> Instantly links policy numbers to phone contacts using fuzzy soundex algorithms tailored for Indian names.",
        "<strong>Multi-Touch Multilingual Outreach:</strong> Automated 30-day, 7-day, and 24-hr grace period WhatsApp alerts in Hindi, Marathi, Gujarati, & English.",
        "<strong>Customer 360 & Maturity Radar:</strong> Consolidates multi-policy families and automatically flags upcoming policy maturities for claim advisory."
      ]
    }
  },

  // Slide 3: The 4-Step Automation Pipeline (Four Card Grid)
  {
    layout: "fourcard",
    title: "The 4-Step Intelligent Renewal Pipeline",
    subtitle: "From raw insurer PDF statements to verified WhatsApp renewal payments in under 60 seconds.",
    cards: [
      {
        title: "1. Upload & Ingest Dues",
        icon: "📄",
        body: "Drag and drop raw insurer due lists (PDF, Excel, CSV). Mathematical verification ensures 100% precision: (Installment × Dues) + GST == Total."
      },
      {
        title: "2. Auto-Match Contacts",
        icon: "📇",
        body: "Upload phonebook (VCF/CSV). Our 2-tier phonetic matcher connects policyholder names with mobile numbers even with spelling variations."
      },
      {
        title: "3. Unified Customer 360",
        icon: "👥",
        body: "Group policies by family head. View term, health, ULIP, and endowment holdings on one dashboard with upcoming maturity alerts."
      },
      {
        title: "4. Omnichannel Outreach",
        icon: "💬",
        body: "Trigger personalized WhatsApp & email reminders with agency letterhead, payment links, and instant one-click statement downloads."
      }
    ]
  },

  // Slide 4: Deep-Tech Architecture & OCR Precision (Differentiators Layout)
  {
    layout: "differentiators",
    title: "Hybrid AI Architecture & Deterministic Precision",
    subtitle: "Built with zero-cloud compute cost for 80% of clean files, plus multimodal AI vision fallback for mobile photos.",
    features: [
      {
        title: "Deterministic Math Validation",
        desc: "Every extracted policy due row is validated against: (Installment × Dues) + GST == Total Due before database commit, eliminating OCR errors."
      },
      {
        title: "4-Tier Hybrid Intelligence",
        desc: "Instant 50ms Python/pandas parser for digital PDFs, with multimodal AI vision fallback (Gemini/GPT-4o) for wrinkled smartphone bond photos."
      },
      {
        title: "100% Data Privacy & IRDAI Compliance",
        desc: "Multi-tenant tenant isolation with strict agency data ownership. Client data and contact books are never shared, sold, or co-mingled."
      }
    ],
    stack: [
      { label: "LAYER 1 • CITIZEN & AGENCY UI", title: "Agency Web CRM & Mobile Telecaller Portal", highlight: false },
      { label: "LAYER 2 • MATCHING ENGINE", title: "2-Tier Indian Phonetic Contact Matcher & Deduplicator", highlight: true },
      { label: "LAYER 3 • OUTREACH ENGINE", title: "Multilingual WhatsApp Business API & DND Filter", highlight: false },
      { label: "LAYER 4 • EXTRACTION CORE", title: "Spatial PDF Table Parser & Mathematical Audit Vault", dark: true }
    ]
  },

  // Slide 5: Measurable Business ROI & Benefits (Three Card Grid)
  {
    layout: "threecard",
    title: "Measurable Business ROI for Your Agency",
    subtitle: "Scales with your book — saving 25+ hrs/mo for top agencies and upgrading solo advisors into retention powerhouses.",
    cards: [
      {
        title: "85% Administrative Time Saved",
        icon: "⚡",
        body: "Top agencies eliminate 25+ hours of manual data entry; solo advisors transform 1-hour broadcasts into an automated 3-touch retention system.",
        metric: "Save 25+ Hrs/Month"
      },
      {
        title: "+35% Higher Renewal Persistence",
        icon: "📈",
        body: "Automated 30-day, 7-day, and 24-hr grace period alerts in the client's mother tongue recover ₹15,000+ in at-risk trail commissions.",
        metric: "+35% Renewal Rate"
      },
      {
        title: "2.5x Family Cross-Sell Revenue",
        icon: "💼",
        body: "Customer 360 portfolio view identifies underinsured families, opening immediate opportunities to pitch health, term, and top-up policies.",
        metric: "2.5x Cross-Sell LTV"
      }
    ]
  },

  // Slide 6: The Solo Agent / Google Sheets Persona (Two Column Layout)
  {
    layout: "twocol",
    title: "Using Google Sheets & Free Tools? Here is the Reality",
    subtitle: "Google Sheets is free, but your time is worth ₹1,000/hr — how solo advisors 10x their sales with zero operators.",
    leftCol: {
      title: "Manual DIY Workflow (Google Sheets / Excel)",
      badge: "THE 'FREE TOOLS' TRAP",
      bullets: [
        "<strong>The 1-Hour Broadcast Illusion:</strong> Sending a single WhatsApp blast takes 1 hour, but lacks 2nd/3rd grace period alerts — causing 15–25% of policies to lapse silently.",
        "<strong>Scaling Bottleneck (500+ Policies):</strong> As your client book grows, manual typing balloons into 25+ hours/month or forces you to hire an assistant at ₹8,000/mo.",
        "<strong>Lost Sales Opportunity Cost:</strong> Time spent manually cross-referencing phone numbers is time lost from meeting high-ticket new clients.",
        "<strong>Zero Multi-Policy Family Radar:</strong> Spreadsheets cannot group household policies or alert you when an endowment policy is maturing."
      ]
    },
    rightCol: {
      title: "With InsuranceSetu (1-Person Powerhouse)",
      badge: "ZERO OPERATORS NEEDED",
      bullets: [
        "<strong>Zero Operator / Staff Needed:</strong> 1-click drop your PDF due list — all policy rows and math are auto-extracted in under 60 seconds.",
        "<strong>Automated 3-Touch Retention:</strong> Auto-schedules 30-day, 7-day, and 24-hr grace period alerts so zero policies lapse.",
        "<strong>Reclaim Time for MDRT Growth:</strong> Free up your schedule to meet high-net-worth clients, cross-sell, and close new term/health policies.",
        "<strong>Instant Customer 360 & Claim Radar:</strong> Automatically groups family policies, highlights health coverage gaps, and flags maturity payouts."
      ]
    }
  },

  // Slide 7: ₹20,000+ Value Stack vs Investment (Table Layout with Pitch Lines)
  {
    layout: "table",
    title: "₹20,000+ Monthly Value for Less Than ₹9/Day",
    subtitle: "Replace expensive manual staff, separate WhatsApp tools, and lost commissions with a single automated app.",
    columns: ["Operational & Business Component", "Traditional Monthly Cost / Loss", "With InsuranceSetu Platform"],
    rows: [
      ["1. Monthly Due List Data Entry", "₹8,000 / mo (Assistant salary or 25+ hrs typing)", "<strong>₹0 (1-Click PDF AI Ingestion)</strong>"],
      ["2. WhatsApp Outreach & Reminders", "₹3,000 / mo (Separate SaaS Tool)", "<strong>Included (Automated Vernacular Nudges)</strong>"],
      ["3. Customer 360 & Policy CRM", "₹3,500 / mo (Legacy Desktop Software)", "<strong>Included (Family Portfolio Views & Radar)</strong>"],
      ["4. Recovered Lapsed Commissions", "₹6,000+ / mo (Lost from missed dues)", "<strong>₹0 Lost (3-Touch Automated Reminders)</strong>"],
      ["TOTAL MONTHLY VALUE DELIVERED", "₹20,500+ / month", "<strong>ONLY ₹249 / month (Save 98%)</strong>"],
      ["PITCH HIGHLIGHT 1", "<em>\"For just ₹8 a day—less than the price of a cutting chai—you eliminate 25 hours of manual data typing and protect thousands in renewal commissions.\"</em>", "<strong>⚡ ₹8 / Day ROI</strong>"],
      ["PITCH HIGHLIGHT 2", "<em>\"If InsuranceSetu saves even one single policy from lapsing every 3 months, it has already paid for your entire year's subscription.\"</em>", "<strong>🎯 100% Breakeven Guarantee</strong>"]
    ]
  },

  // Slide 8: Flexible Commercial Pricing (Pricing Layout)
  {
    layout: "pricing",
    title: "Simple, Transparent Agency Pricing",
    subtitle: "Flexible subscription tiers tailored for solo advisors, growing agencies, and multi-branch broking firms.",
    cards: [
      {
        title: "Founder Special (Solo)",
        badge: "LIMITED LAUNCH DEAL",
        price: "₹249",
        priceSub: "per month (billed annually at ₹2,999)",
        tagline: "For independent MDRT agents managing their active clients",
        featured: true,
        bullets: [
          "Less than ₹8/day (Save 98% vs alternatives)",
          "Up to 1,500 active policies",
          "1-Click PDF & Excel Due List Ingestion",
          "2-Tier Phonetic Contact Matching",
          "Automated WhatsApp Renewal Nudges",
          "Family Customer 360 Portfolio Statements"
        ],
        footerPitch: "Special launch price for early-adopter advisors"
      },
      {
        title: "Agency Pro",
        badge: "GROWING TEAMS",
        price: "₹999",
        priceSub: "per month (billed annually at ₹11,999)",
        tagline: "For growing agencies needing staff access & custom branding",
        featured: false,
        bullets: [
          "Up to 5,000 active policies",
          "Up to 5 Staff / Telecaller Logins",
          "Custom Agency Brand & IRDAI Letterhead",
          "Multilingual Outreach (Hindi, Gujarati, Marathi)",
          "Maturity & Claim Advisory Radar",
          "Priority 1-on-1 Onboarding & Support"
        ],
        footerPitch: "Everything a high-volume agency needs to scale"
      },
      {
        title: "Enterprise Broking",
        badge: "MULTI-BRANCH",
        price: "Custom",
        priceSub: "tailored enterprise deployment",
        tagline: "For corporate broking houses & distributor networks",
        featured: false,
        bullets: [
          "Unlimited policies & staff seats",
          "Multi-branch hierarchical dashboard",
          "Custom CRM & Core Banking / PMS API Integration",
          "Dedicated Account Manager & SLA",
          "On-Premise / Sovereign Hosting Option"
        ],
        footerPitch: "Custom SLA & dedicated engineering support"
      }
    ]
  },

  // Slide 8: Closing / Next Steps & Q&A (QA Layout)
  {
    layout: "qa",
    title: "Automate Your Agency's Renewals Today",
    subtitle: "Experience InsuranceSetu with a zero-risk 14-day trial — import your first due list in under 5 minutes.",
    contactInfo: BRAND_CONFIG.contact.items,
    qrLabel: BRAND_CONFIG.contact.qrLabel,
    qrSub: BRAND_CONFIG.contact.qrSub
  }
];

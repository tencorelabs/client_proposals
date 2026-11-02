/**
 * ============================================================================
 * TENCORE DIGITAL LABS • FOUNDING PARTNER PILOT PROPOSAL DECK CONFIGURATION
 * ============================================================================
 * Deck: InsuranceSetu (BusinessSetu Suite)
 * Purpose: Founding Partner Pilot Program & Early-Bird Proposal for Insurance Agencies
 * Audience: Agency Principals, Senior LIC Advisors & Broking House Partners
 */

// 1. GLOBAL BRANDING & FOUNDER PROFILE
const BRAND_CONFIG = {
  companyName: "TenCore Digital Labs Private Limited",
  division: "Enterprise Vertical SaaS & Document AI Studio",
  confidentialLabel: "CONFIDENTIAL • FOUNDING PARTNER PILOT PROPOSAL",
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
    title: "Claim Your Agency's Founding Partner Slot",
    subtitle: "Strictly limited to 5 agencies for Cohort 1. Schedule your 15-minute screen share to see your own portal PDF parsed live.",
    items: [
      { icon: "👨‍💼", label: "Executive Sponsor", val: "Devendra Vaja — Founder & Principal Systems Architect" },
      { icon: "🏢", label: "Enterprise Studio", val: "TenCore Digital Labs Private Limited" },
      { icon: "✉️", label: "Direct Email", val: "tencorelabs@gmail.com" },
      { icon: "📱", label: "Direct Phone / WhatsApp", val: "+91 9082351295" },
      { icon: "🌐", label: "Platform Suite", val: "BusinessSetu • InsuranceSetu (businesssetu.tencorelabs.com)" }
    ],
    qrLabel: "Schedule 15m Walkthrough",
    qrSub: "Scan to book your agency setup session"
  }
};

// 2. CLIENT PRESENTATION METADATA
const DECK_META = {
  title: "InsuranceSetu • Founding Partner Program",
  subtitle: "30-Day VIP Pilot & Early-Bird Commercial Offer for Insurance Agencies",
  pillTag: "🛡️ BusinessSetu Suite • Founding Partner Pilot Program",
  version: "Cohort 1 • Master Proposal",
  date: "October 2026",
  category: "Client Pilot Proposal & Early-Bird Commercials",
  storageKey: "insurancesetu_pilot_presentation_v1"
};

// 3. COLOR THEME CONFIGURATION (TenCore Digital Labs Slate Navy & Blue Theme)
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

// 4. SLIDES CATALOG (11 Comprehensive Customer-Facing Proposal Slides)
const DEFAULT_SLIDES = [
  // Slide 1: Cover Slide
  {
    layout: "title",
    title: "Insurance Setu <span>Founding Partner Program</span>",
    subtitle: "Exclusive 30-Day VIP Pilot & Early-Bird Commercial Offer for Premier Insurance Agencies & Broking Houses",
    meta: [
      { label: "PROGRAM COHORT", value: "Founding Partner Pilot", sub: "Strictly Limited to 5 Agencies" },
      { label: "EXECUTIVE SPONSOR", value: "Devendra Vaja", sub: "Founder & Principal Systems Architect" },
      { label: "EXCLUSIVE OFFER", value: "30 Days Free PRO + 50% Off", sub: "Lifetime Price Lock for Cohort 1" }
    ]
  },

  // Slide 2: The Core Problem & Silent Revenue Leak (Two Column)
  {
    layout: "twocol",
    title: "The Hidden ₹20,000/Month Cost of Traditional Renewals",
    subtitle: "Whether managing 500 or 2,500 active clients, manual Excel typing and delayed outreach silently drain agency profits.",
    leftCol: {
      title: "Traditional Agency Bottlenecks",
      badge: "OPERATIONAL FRICTION",
      bullets: [
        "<strong>The 25+ Hour Typing Trap:</strong> Staff waste 20–30 hours/month or spend ₹8,000–₹12,000/mo on operators to manually re-type insurer portal PDFs into spreadsheets.",
        "<strong>The 'Zero-Contact' Deadlock:</strong> Insurer portal due lists contain policy numbers and overdue amounts, but zero phone numbers or emails — paralyzing immediate outreach.",
        "<strong>The 1-Hour Broadcast Illusion:</strong> Single-blast SMS or English WhatsApp broadcasts miss 2nd/3rd grace period alerts, suffering an avoidable 20%+ policy lapse rate.",
        "<strong>Monolingual English Drop-off:</strong> English-only notifications see a 65% lower engagement rate among retail and SME policyholders across Indian regions."
      ]
    },
    rightCol: {
      title: "The InsuranceSetu Advantage",
      badge: "AUTOMATED REVENUE CRM",
      bullets: [
        "<strong>1-Click Instant PDF Ingestion:</strong> Drag and drop multi-page portal due lists (LIC, Star Health, Tata AIG, PolicyBazaar); 200+ rows extract in under 5 seconds.",
        "<strong>2-Tier Indian Phonetic Matcher:</strong> Instantly links policy numbers to your phone contacts using soundex algorithms built specifically for Indian regional names.",
        "<strong>Multilingual Mother-Tongue Outreach:</strong> 1-click WhatsApp alerts in Gujarati (ગુજરાતી), Hindi (हिंदी), Marathi, and English with instant payment links.",
        "<strong>Customer 360 Family Dossiers:</strong> Auto-groups household policies, highlights underinsured families, and flags upcoming endowment maturities."
      ]
    }
  },

  // Slide 3: The 4-Step Intelligent Renewal Engine (Four Card Grid)
  {
    layout: "fourcard",
    title: "From Raw Insurer PDF to Paid UPI Premium in 60 Seconds",
    subtitle: "A zero-data-entry renewal engine engineered specifically for Indian agency operations.",
    cards: [
      {
        title: "1. Drag & Drop Portal PDFs",
        icon: "📄",
        body: "Drop raw insurer due lists (PDF, Excel, CSV). Automated mathematical verification guarantees 100% precision: (Installment × Dues) + GST == Total."
      },
      {
        title: "2. Phonetic Contact Bridge",
        icon: "📇",
        body: "Upload your phonebook (VCF or Google Contacts CSV). Our 2-tier phonetic matcher connects policyholder names with mobile numbers, even with spelling variances."
      },
      {
        title: "3. 1-Click WhatsApp Outreach",
        icon: "💬",
        body: "Dispatch personalized 30-day, 7-day, and Grace Period WhatsApp alerts in Gujarati, Hindi, or English directly through WhatsApp Web with pre-filled text."
      },
      {
        title: "4. Branded Household Dossiers",
        icon: "👥",
        body: "Generate executive consolidated portfolio PDFs featuring your agency's logo and IRDAI license number, perfect for building long-term HNI trust."
      }
    ]
  },

  // Slide 4: Tailored for Both Agency Archetypes (Two Column Layout)
  {
    layout: "twocol",
    title: "Tailored for High-Volume LIC & Multi-Line Broking",
    subtitle: "Engineered to eliminate the operational pain points of single-line scale and multi-insurer complexity.",
    leftCol: {
      title: "High-Volume LIC & Life Advisors",
      badge: "SOLO ADVISORS & MDRT",
      bullets: [
        "<strong>500 to 2,500+ Active Policyholders:</strong> Eliminates paper registers and bulky Excel sheets; handles full monthly renewal cycles with zero extra staff.",
        "<strong>Sub-Second Tabular LIC Parser:</strong> Extracts policy numbers, installment premium, GST, and agency codes with 100% line-item mathematical reconciliation.",
        "<strong>Mother-Tongue WhatsApp Alerts:</strong> Reaches policyholders in Gujarati or Hindi, achieving immediate 3x higher payment responses on due dates.",
        "<strong>Maturity & Claim Advisory Radar:</strong> Automatically alerts advisors ahead of policy maturity dates to reinvest maturity proceeds into new high-ticket policies."
      ]
    },
    rightCol: {
      title: "Multi-Line General Insurance Brokers",
      badge: "MULTI-LINE AGENCIES",
      bullets: [
        "<strong>Life, Health, Motor, Marine & Fire:</strong> Centralizes fragmented renewals across LIC, Star Health, HDFC Ergo, ICICI Lombard, Tata AIG, and portal brokers.",
        "<strong>Multi-Insurer Due List Parsing:</strong> Ingests varied statement formats with automatic insurer detection and column header normalization.",
        "<strong>Cross-Sell Coverage Radar:</strong> Highlights families with motor insurance but no health cover, unlocking instant 2.5x higher client lifetime value (LTV).",
        "<strong>Consolidated Household Dossiers:</strong> Delivers single-page family portfolio statements showing all policies across all insurers under one family head."
      ]
    }
  },

  // Slide 5: The 30-Minute Live "White-Glove" Setup Session (Blueprint Layout)
  {
    layout: "blueprint",
    title: "The 30-Minute Live 'White-Glove' Setup Session",
    subtitle: "Zero technical friction. We personally configure your agency workspace and parse your live data with you in real time.",
    phases: [
      {
        phase: "STEP 1 • MIN 00–05",
        title: "VIP Account Handover",
        duration: "5 Mins",
        budget: "Zero Setup Fee",
        deliverables: [
          "Super Admin initializes dedicated agency tenant",
          "Full PRO Tier features unlocked immediately",
          "Secure master administrative credentials delivered"
        ],
        payment: "Instant VIP Access"
      },
      {
        phase: "STEP 2 • MIN 05–10",
        title: "Brand Profile & IRDAI Setup",
        duration: "5 Mins",
        budget: "Custom Branding",
        deliverables: [
          "Upload agency official logo & trade name",
          "Configure IRDAI License / ARN & contact numbers",
          "All generated alerts & PDFs look 100% yours"
        ],
        payment: "100% White-Labeled"
      },
      {
        phase: "STEP 3 • MIN 10–20",
        title: "Live Due List Ingestion",
        duration: "10 Mins",
        budget: "Live Testing",
        deliverables: [
          "Drag & drop your actual portal PDF (LIC / Star / Portal)",
          "200+ policies extracted in 5 seconds with zero typing",
          "Auto-match with phonebook CSV via phonetic soundex"
        ],
        payment: "98%+ Auto-Match"
      },
      {
        phase: "STEP 4 • MIN 20–30",
        title: "First Live Recovery & Dossier",
        duration: "10 Mins",
        budget: "First Win",
        deliverables: [
          "Filter policies due in '7D Urgent' or 'Today'",
          "Send 1-click Gujarati/Hindi WhatsApp reminder",
          "Generate branded HNI family portfolio statement PDF"
        ],
        payment: "Immediate Result"
      }
    ]
  },

  // Slide 6: 7-Day Rapid Value Realization Journey (Blueprint Layout)
  {
    layout: "blueprint",
    title: "Your 7-Day Rapid Value Realization Journey",
    subtitle: "A clear, milestone-driven onboarding cadence engineered to produce direct cash recovery within 48 hours.",
    phases: [
      {
        phase: "DAY 1 • DISCOVERY",
        title: "Ingestion & Zero-Contact Bridge",
        duration: "Day 1",
        budget: "100% Parsed",
        deliverables: [
          "Upload all active monthly due lists into portal",
          "Link policy numbers with customer mobile contacts",
          "Download the Agency User Guide & Quick Reference"
        ],
        payment: "Zero Admin Backlog"
      },
      {
        phase: "DAY 2 • DIRECT REVENUE",
        title: "First Direct Cash Recovery",
        duration: "Day 2",
        budget: "₹50k+ Target",
        deliverables: [
          "Target policyholders in 'Due Today' and 'Grace Period'",
          "Advisor sends 10–15 1-click WhatsApp reminders",
          "Experience the emotional win: clients pay overdue dues instantly via UPI"
        ],
        payment: "Software Pays for Itself"
      },
      {
        phase: "DAY 3–4 • CLIENT DELIGHT",
        title: "HNI Household Dossiers",
        duration: "Days 3–4",
        budget: "VIP Retention",
        deliverables: [
          "Merge duplicate contact spelling variations into clean profiles",
          "Link household members under top 3 HNI family heads",
          "WhatsApp executive consolidated portfolio PDFs to family heads"
        ],
        payment: "Unmatched Client Trust"
      },
      {
        phase: "DAY 5–7 • PARTNERSHIP",
        title: "Team Delegation & Founding Deal",
        duration: "Days 5–7",
        budget: "Long-Term Value",
        deliverables: [
          "Invite telecaller / staff with restricted non-billing roles",
          "15-minute weekly review call with TenCore engineering team",
          "Lock in your permanent 50% lifetime Founding Partner discount"
        ],
        payment: "50% Lifetime Lock"
      }
    ]
  },

  // Slide 7: The Commercial Early Bird Offer ("Founding Partner Deal") (Two Column Layout)
  {
    layout: "twocol",
    title: "The Founding Partner Deal: A True Growth Partnership",
    subtitle: "We eliminate all financial risk while providing white-glove engineering support in exchange for your real-world feedback.",
    leftCol: {
      title: "What Your Agency Receives",
      badge: "VIP PILOT PRIVILEGES",
      bullets: [
        "<strong>30 Days Complimentary PRO Tier Access:</strong> Full, unrestricted platform access for your entire agency (₹2,999 value at ₹0 cost).",
        "<strong>White-Glove Live Onboarding & Data Migration:</strong> Our engineering team configures your branding, uploads your lists, and verifies data integrity.",
        "<strong>Direct WhatsApp Hotline to Founders:</strong> Direct access to Devendra Vaja and systems architects for rapid support and feature requests.",
        "<strong>50% Lifetime Subscription Discount:</strong> Permanent half-price lock for the entire life of your agency account upon commercial conversion."
      ]
    },
    rightCol: {
      title: "What Your Agency Commits",
      badge: "FOUNDING COMMITMENT",
      bullets: [
        "<strong>Primary Operational Renewal System:</strong> Commit to using InsuranceSetu as your main renewal management tool for 30 consecutive days.",
        "<strong>15-Minute Weekly Feedback Touchpoint:</strong> A brief weekly check-in with our team to share usability feedback and operational insights.",
        "<strong>Share 2–3 Past Insurer Statement Formats:</strong> Provide anonymized historical portal PDFs so our engineering team can custom-tune parsers for your insurers.",
        "<strong>Written Testimonial & 1 Peer Referral:</strong> Provide a brief written quote and 1 agency introduction once you recover your first ₹50,000+ in overdue dues."
      ]
    }
  },

  // Slide 8: Exclusive Founding Partner Lifetime Pricing (Pricing Layout)
  {
    layout: "pricing",
    title: "Exclusive Founding Partner Lifetime Pricing",
    subtitle: "Lock in permanent 50% savings for the lifetime of your agency subscription — available only to Cohort 1.",
    cards: [
      {
        title: "Founder Special (Solo)",
        badge: "50% LIFETIME DISCOUNT",
        price: "₹499",
        priceSub: "per month (billed annually at ₹5,988 • Regular: ₹999/mo)",
        tagline: "For independent MDRT advisors managing their direct client book",
        featured: false,
        bullets: [
          "Less than ₹17/day — pays for itself with 1 single recovered policy",
          "Up to 1,500 active policies",
          "1-Click PDF & Excel Due List Ingestion",
          "2-Tier Indian Phonetic Contact Matching",
          "Automated Multilingual WhatsApp Renewal Reminders",
          "Branded Family Portfolio Dossier PDFs"
        ],
        footerPitch: "Special early-bird rate locked permanently for life"
      },
      {
        title: "Agency Pro (Founding Deal)",
        badge: "MOST POPULAR • 50% OFF",
        price: "₹1,499",
        priceSub: "per month (billed annually at ₹17,988 • Regular: ₹2,999/mo)",
        tagline: "For growing agencies & broking houses with staff and multi-line business",
        featured: true,
        bullets: [
          "Up to 5,000 active policies",
          "Up to 5 Staff & Telecaller Logins with role-based access",
          "Custom Agency Branding & IRDAI Verified Letterhead",
          "Multilingual Outreach (Hindi, Gujarati, Marathi & English)",
          "Multi-Insurer Statement Parsing (LIC, Star, HDFC, Tata, etc.)",
          "Priority P0/P1 Engineering SLA & Direct WhatsApp Hotline"
        ],
        footerPitch: "Complete operational powerhouse for growing agencies"
      },
      {
        title: "Enterprise Broking",
        badge: "CUSTOM DEPLOYMENT",
        price: "Custom",
        priceSub: "tailored enterprise deployment",
        tagline: "For corporate broking houses & multi-branch distributor networks",
        featured: false,
        bullets: [
          "Unlimited policies & staff seats",
          "Multi-branch hierarchical dashboard & regional audits",
          "Custom CRM, Core Banking & PMS API integrations",
          "Dedicated Solutions Engineer & Custom Enterprise SLAs",
          "On-premise or sovereign cloud hosting options"
        ],
        footerPitch: "Enterprise scale with zero data isolation compromises"
      }
    ]
  },

  // Slide 9: Value Stack & The ₹50,000 Recovery Benchmark (Table Layout)
  {
    layout: "table",
    title: "₹20,500+ Monthly Value for Less Than ₹17/Day",
    subtitle: "Replace administrative overhead, separate WhatsApp tools, and lost commissions with a unified platform.",
    columns: ["Operational & Business Component", "Traditional Monthly Cost / Loss", "With InsuranceSetu Platform"],
    rows: [
      ["1. Monthly Due List Data Entry", "₹8,000 / mo (Assistant salary or 25+ hrs typing)", "<strong>₹0 (1-Click PDF AI Ingestion)</strong>"],
      ["2. WhatsApp Outreach & Vernacular Alerts", "₹3,000 / mo (Separate third-party broadcast tool)", "<strong>Included (1-Click Gujarati/Hindi/English Nudges)</strong>"],
      ["3. Family Customer 360 & Dossiers", "₹3,500 / mo (Legacy desktop software)", "<strong>Included (Branded Household Portfolio PDFs)</strong>"],
      ["4. Recovered Lapsed Commissions", "₹6,000+ / mo (Lost from missed 2nd/3rd grace alerts)", "<strong>₹0 Lost (Automated 3-Touch Reminders)</strong>"],
      ["TOTAL MONTHLY VALUE DELIVERED", "₹20,500+ / month", "<strong>ONLY ₹499 – ₹1,499 / mo (Save 93%–97%)</strong>"],
      ["THE BREAKEVEN GUARANTEE", "<em>\"If InsuranceSetu prevents even one single policy from lapsing every 6 months, it has paid for your entire year's subscription.\"</em>", "<strong>⚡ 100% Breakeven Guarantee</strong>"],
      ["FIRST 14 DAYS PILOT BENCHMARK", "<em>\"Our pilot target is for your agency to recover at least ₹50,000 in overdue premiums within your first 14 days using automated WhatsApp reminders.\"</em>", "<strong>🎯 ₹50,000+ Dues Target</strong>"]
    ]
  },

  // Slide 10: Deep-Tech Architecture, Privacy & Priority Support SLA (Differentiators Layout)
  {
    layout: "differentiators",
    title: "Enterprise Architecture & Priority Founder SLA",
    subtitle: "Engineered with bank-grade security, mathematical validation, and rapid developer support SLAs.",
    features: [
      {
        title: "Deterministic Mathematical Validation",
        desc: "Every extracted policy due row is validated against: (Installment × Dues) + GST == Total Due before database commit, eliminating costly billing or calculation errors."
      },
      {
        title: "100% Data Sovereignty & DPDP Compliance",
        desc: "Multi-tenant database isolation ensures agency data ownership. Client policy records and contact books are never shared, sold, pooled, or co-mingled."
      },
      {
        title: "Priority Support SLA (<4 Hr Patch Turnaround)",
        desc: "Direct hotline to engineering team during your pilot: P0 upload patches in <4 hours; custom insurer document adjustments delivered in <24 hours."
      }
    ],
    stack: [
      { label: "LAYER 1 • AGENCY WORKSPACE", title: "Custom Branded Web CRM & Telecaller Portal", highlight: false },
      { label: "LAYER 2 • MATCHING ENGINE", title: "2-Tier Indian Phonetic Contact Matcher & Deduplicator", highlight: true },
      { label: "LAYER 3 • OUTREACH ENGINE", title: "1-Click Multilingual WhatsApp Dispatcher (Gujarati/Hindi/English)", highlight: false },
      { label: "LAYER 4 • EXTRACTION CORE", title: "Spatial PDF Table Parser & Mathematical Audit Vault", dark: true }
    ]
  },

  // Slide 11: Closing & VIP Onboarding Invitation (QA Layout)
  {
    layout: "qa",
    title: "Claim Your Agency's Founding Partner Slot",
    subtitle: "Strictly limited to 5 agencies for Cohort 1. Schedule your 15-minute live screen share to see your own portal PDF parsed live.",
    contactInfo: BRAND_CONFIG.contact.items,
    qrLabel: BRAND_CONFIG.contact.qrLabel,
    qrSub: BRAND_CONFIG.contact.qrSub
  }
];

/**
 * ============================================================================
 * MASTER PRESENTATION CONFIGURATION (TenCore Digital Labs)
 * ============================================================================
 * 
 * To create a new presentation for any client:
 * 1. Update DECK_META (Title, client name, version, date).
 * 2. Update THEME_CONFIG (Colors for client branding).
 * 3. Add or edit slides in DEFAULT_SLIDES using the 11 pre-built layout types.
 * 
 * Company and Founder details stay permanent and automatically populate
 * Title, Leadership, and Closing slides.
 */

// 1. GLOBAL BRANDING & FOUNDER PROFILE
const BRAND_CONFIG = {
  companyName: "TenCore Digital Labs Private Limited",
  division: "Executive Presentation Studio",
  confidentialLabel: "CONFIDENTIAL",
  copyright: "TenCore Digital Labs Private Limited © 2026",
  logoText: "TC",
  
  // Leadership & Engineering Track Record (Devendra Vaja)
  founder: {
    name: "Devendra Vaja",
    role: "Founder & Principal Systems Architect",
    company: "TenCore Digital Labs Private Limited",
    avatarInitials: "DV",
    tagline: "24+ years of engineering experience across India, USA, and Japan spanning embedded firmware, kernel device drivers, and Android platform architecture.",
    pillars: [
      {
        title: "Global Systems Engineering (India • Japan • USA)",
        desc: "24+ years building trusted software across India, Tokyo (Japan - high-security gaming machine device drivers), and the United States — designing digital solutions built for safety, reliability, and business scale."
      },
      {
        title: "Kernel Device Drivers & Embedded Firmware",
        desc: "Deep-rooted foundation in low-level embedded firmware, Windows/Linux kernel drivers, and hardware communication layers where resource efficiency and zero-fault execution are paramount."
      },
      {
        title: "Android OS & Mobile Platform Pioneer (Since 2007)",
        desc: "Architecting Android applications and OS customizations since Android's inception in 2007 — bridging low-level OS internals with modern on-device edge cybersecurity."
      }
    ]
  },

  // Contact / Q&A Information for Closing Slide
  contact: {
    title: "Partner With TenCore Digital Labs",
    subtitle: "Engineering foundational digital architectures, embedded systems, and enterprise platforms.",
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
  title: "Master Project Pitch Deck",
  subtitle: "Enterprise Platform & Architecture Strategy",
  pillTag: "🛡️ TenCore Digital Labs • Executive Briefing",
  version: "Version 1.0",
  date: "September 2026",
  category: "Client Proposal",
  storageKey: "tencore_master_presentation_v1"
};

// 3. COLOR THEME (Customizable per client)
const THEME_CONFIG = {
  primary: "#0d9488",       // Main Brand Teal
  primaryDark: "#0f766e",   // Darker shade for accents
  primaryLight: "#ccfbf1",  // Light tint for badges/cards
  secondary: "#0284c7",     // Secondary Accent Sky Blue
  accent: "#10b981",        // Highlight Green
  bgBody: "#f8fafc",        // Light background
  bgCard: "#ffffff",        // Card background
  textPrimary: "#0f172a",   // Dark slate text
  textSecondary: "#475569"  // Slate body text
};

// 4. SLIDES CATALOG (Standard 11 Layout Types)
const DEFAULT_SLIDES = [
  // 1. Title Slide
  {
    layout: "title",
    title: "Master Project <span>Presentation</span>",
    subtitle: "Enterprise digital platform engineering, scalable workflows, and production architecture.",
    meta: [
      { label: "DEEP-TECH VENTURE", value: "TenCore Digital Labs", sub: "Platform & Embedded Systems" },
      { label: "LEADERSHIP", value: "Devendra Vaja", sub: "Founder & Principal Systems Architect" },
      { label: "CLASSIFICATION", value: "Confidential Pitch Deck", sub: "Version 1.0 • September 2026" }
    ]
  },

  // 2. Speaker / Leadership Slide
  {
    layout: "instructor",
    title: "Deep-Tech Engineering Leadership",
    subtitle: "TenCore Digital Labs — 24+ Years of Embedded Systems, Kernel Drivers & Platform Architecture",
    instructorName: BRAND_CONFIG.founder.name,
    instructorRole: BRAND_CONFIG.founder.role + " • " + BRAND_CONFIG.founder.company,
    instructorTagline: BRAND_CONFIG.founder.tagline,
    instructorPillars: BRAND_CONFIG.founder.pillars
  },

  // 3. Section Divider
  {
    layout: "divider",
    title: "Problem Space & Operational Challenges",
    subtitle: "Analyzing operational friction, fragmentation, and the urgent need for digital transformation.",
    badge: "SECTION 01"
  },

  // 4. Two-Column Problem vs Solution Slide
  {
    layout: "twocol",
    title: "The Industry Challenge vs. Our Digital Solution",
    subtitle: "Moving from slow, error-prone manual operations to automated, real-time platform workflows.",
    leftCol: {
      title: "Current Operational Friction",
      badge: "CHALLENGES",
      bullets: [
        "<strong>Manual Paper Logging:</strong> High error rates, lost records, and zero real-time operational visibility.",
        "<strong>Customer Wait Times:</strong> Unpredictable bottleneck queues leading to guest frustration.",
        "<strong>Revenue Leakage:</strong> Cash handling vulnerabilities and untracked reconciliation gaps.",
        "<strong>No Digital Audit Trail:</strong> Disputes over damage, tickets, or timestamps cannot be verified."
      ]
    },
    rightCol: {
      title: "The TenCore Platform Shield",
      badge: "DIGITAL SOLUTION",
      bullets: [
        "<strong>Instant Digital Workflow:</strong> One-tap digital logging with instant mobile tracking.",
        "<strong>Real-time Telemetry:</strong> Live dashboard tracking every vehicle, ticket, or transaction status.",
        "<strong>UPI & Cashless Payments:</strong> Direct digital reconciliation with zero revenue leakage.",
        "<strong>Complete Audit Trail:</strong> Cloud-backed, tamper-proof logs with automated dispute protection."
      ]
    }
  },

  // 5. Three-Card Feature / Capability Grid
  {
    layout: "threecard",
    title: "Core Platform Pillars",
    subtitle: "Built from the ground up for extreme reliability, zero downtime, and consumer simplicity.",
    cards: [
      {
        title: "Zero-Latency Mobile App",
        icon: "📱",
        body: "Lightweight, responsive mobile interface engineered for high-throughput field operations under harsh network conditions.",
        metric: "Sub-15ms Response"
      },
      {
        title: "Automated Dispatch Engine",
        icon: "⚡",
        body: "Algorithmic job allocation and intelligent request routing that cuts operational handling time by over 60%.",
        metric: "60% Faster Turnaround"
      },
      {
        title: "Enterprise Cloud Portal",
        icon: "📊",
        body: "Centralized managerial command center with live analytics, dispute resolution, staff tracking, and revenue audits.",
        metric: "100% Real-Time Visibility"
      }
    ]
  },

  // 6. Differentiators & Architecture Stack
  {
    layout: "differentiators",
    title: "What Sets TenCore Solutions Apart",
    subtitle: "Combining low-level hardware/OS expertise with modern, consumer-grade digital interfaces.",
    features: [
      {
        title: "Hardware-Grade Reliability",
        desc: "Engineered by embedded systems veterans — zero crashes, minimal battery footprint, and offline-first data sync."
      },
      {
        title: "Made in India, Built for Bharat",
        desc: "Designed for vernacular ease-of-use, intuitive visual cues, and zero training requirement for field operators."
      },
      {
        title: "Deep-Tech Modular Architecture",
        desc: "Seamless drop-in API and SDK integration for third-party billing, ERPs, and hardware gates."
      }
    ],
    stack: [
      { label: "LAYER 1 • APPLICATION", title: "Consumer & Staff Mobile Apps", highlight: false },
      { label: "LAYER 2 • CORE ENGINE", title: "Real-time Dispatch & Workflow SDK", highlight: true },
      { label: "LAYER 3 • DATA LAYER", title: "Encrypted Cloud Telemetry & Audit Vault", highlight: false },
      { label: "LAYER 4 • INFRASTRUCTURE", title: "Zero-Trust Security & Hardware Interface", dark: true }
    ]
  },

  // 7. Four-Phase Roadmap Blueprint
  {
    layout: "blueprint",
    title: "Implementation & Rollout Roadmap",
    subtitle: "Structured milestone roadmap delivering production validation within 4 to 6 weeks.",
    phases: [
      {
        phase: "PHASE 1",
        title: "Architecture & Wireframes",
        duration: "Week 1 – 2",
        budget: "System Blueprint",
        deliverables: [
          "Requirements lock & workflow schema",
          "Staff & customer UI/UX mockups",
          "API & database architecture setup"
        ],
        payment: "<strong>Milestone:</strong> Design & Architecture Sign-off"
      },
      {
        phase: "PHASE 2",
        title: "Core MVP Development",
        duration: "Week 3 – 4",
        budget: "Core Build",
        deliverables: [
          "Staff mobile logging application",
          "Customer tracking & SMS integration",
          "Live managerial web dashboard"
        ],
        payment: "<strong>Milestone:</strong> Working Alpha Sandbox"
      },
      {
        phase: "PHASE 3",
        title: "Testing & Pilot Staging",
        duration: "Week 5",
        budget: "Pilot Prep",
        deliverables: [
          "End-to-end stress & load testing",
          "Staff on-site training & dry runs",
          "Thermal printer & hardware sync"
        ],
        payment: "<strong>Milestone:</strong> Pilot Readiness Certified"
      },
      {
        phase: "PHASE 4",
        title: "Go-Live & Production SLA",
        duration: "Week 6+",
        budget: "Production Launch",
        deliverables: [
          "Live on-property rollout",
          "Real-time monitoring & bug fixes",
          "Dedicated 30-day hyper-care support"
        ],
        payment: "<strong>Milestone:</strong> Production Handover"
      }
    ]
  },

  // 8. Four-Card Grid (Strategic Asks / Market Focus)
  {
    layout: "fourcard",
    title: "Commercial & Operational Benefits",
    subtitle: "Measurable ROI, operational excellence, and brand prestige from day one.",
    cards: [
      {
        title: "1. Zero Revenue Leakage",
        icon: "💰",
        body: "100% digital tracking of every transaction and fee with automated daily reconciliation reports."
      },
      {
        title: "2. Premium Guest Experience",
        icon: "⭐",
        body: "Frictionless digital ticket retrieval via WhatsApp/SMS elevates property brand perception."
      },
      {
        title: "3. Complete Audit & Liability Shield",
        icon: "🛡️",
        body: "Time-stamped entry logs and damage photos protect the property against false liability claims."
      },
      {
        title: "4. Rapid 30-Day Deployment",
        icon: "🚀",
        body: "Turnkey delivery with zero heavy infrastructure requirement — runs on standard Android devices."
      }
    ]
  },

  // 9. Data Table Matrix
  {
    layout: "table",
    title: "Feature Comparison: Manual vs. TenCore Digital",
    subtitle: "Direct feature-by-feature operational comparison against traditional legacy systems.",
    columns: ["Operational Feature", "Traditional Manual Method", "TenCore Digital Platform"],
    rows: [
      ["Ticket Issuance Speed", "45 – 90 seconds (paper writeup)", "<strong>< 5 seconds (Digital QR)</strong>", "badge-success"],
      ["Vehicle Retrieval Request", "Guest physically visits desk", "<strong>1-Tap Pre-Request via Phone</strong>", "badge-success"],
      ["Revenue Reconciliation", "Manual cash count at shift end", "<strong>Real-time Automated Dashboard</strong>", "badge-success"],
      ["Vehicle Damage Proof", "Unverifiable disputes", "<strong>Timestamped Photo Vault</strong>", "badge-success"],
      ["Management Visibility", "Next-day reports (if any)", "<strong>Live Executive Portal & Alerts</strong>", "badge-success"]
    ]
  },

  // 10. Pricing & Commercial Packages
  {
    layout: "pricing",
    title: "Commercial Investment & Pricing Options",
    subtitle: "Transparent fixed-scope MVP pricing backed by enterprise reliability.",
    cards: [
      {
        tier: "PILOT MVP",
        title: "Single Property MVP",
        price: "₹2,40,000",
        priceSub: "Fixed-Price Turnkey Delivery",
        featured: true,
        badge: "RECOMMENDED",
        tagline: "Complete 1-property live operational system",
        bullets: [
          "Complete Staff Android Mobile App",
          "Guest Web Ticket & Retrieval Interface",
          "Managerial Web Dashboard & Analytics",
          "SMS / WhatsApp notification gateway",
          "30-day post-launch hyper-care support"
        ],
        footerPitch: "4–6 week delivery from contract kickoff"
      },
      {
        tier: "ANNUAL SLA",
        title: "Post-Launch Support",
        price: "₹15,000",
        priceSub: "per month / property",
        featured: false,
        tagline: "Ongoing maintenance & cloud SLA",
        bullets: [
          "99.9% Cloud uptime guarantee",
          "Priority 4-hour critical issue SLA",
          "Monthly software updates & patches",
          "Dedicated technical account manager",
          "Daily automated database backups"
        ],
        footerPitch: "Begins after 30-day included warranty"
      },
      {
        tier: "ENTERPRISE",
        title: "Multi-Property Fleet",
        price: "Custom",
        priceSub: "Volume Chain Licensing",
        featured: false,
        tagline: "For hotel chains & parking operators",
        bullets: [
          "Multi-property master HQ dashboard",
          "Custom ERP / PMS system integration",
          "Automated ANPR camera license plate sync",
          "Custom white-label branding & domain",
          "On-premise or private cloud deployment"
        ],
        footerPitch: "Tailored scope for multi-site rollouts"
      }
    ]
  },

  // 11. Q&A / Closing Contact Slide
  {
    layout: "qa",
    title: "Let's Build the Future of Digital Operations",
    subtitle: "TenCore Digital Labs is ready to engineer and deploy your custom digital platform.",
    contactInfo: BRAND_CONFIG.contact.items,
    qrLabel: BRAND_CONFIG.contact.qrLabel,
    qrSub: BRAND_CONFIG.contact.qrSub
  }
];

/**
 * ============================================================================
 * PARKING SETU PRESENTATION CONFIGURATION (TenCore Digital Labs)
 * ============================================================================
 * Client-facing Executive Proposal & Architecture Deck for Digital Valet Parking System.
 * Built for five-star hotel / hospitality properties.
 */

// 1. GLOBAL BRANDING & FOUNDER PROFILE
const BRAND_CONFIG = {
  companyName: "TenCore Digital Labs Private Limited",
  division: "Hospitality & Enterprise Platform Architecture",
  confidentialLabel: "CONFIDENTIAL",
  copyright: "TenCore Digital Labs Private Limited © 2026",
  logoText: "TC",
  
  // Leadership & Engineering Track Record
  founder: {
    name: "Devendra Vaja",
    role: "Founder & Principal Systems Architect",
    company: "TenCore Digital Labs Private Limited",
    avatarInitials: "DV",
    tagline: "24+ years of engineering experience across India, USA, and Japan spanning embedded firmware, kernel device drivers, and high-throughput Android mobile platform architecture.",
    pillars: [
      {
        title: "Global Systems Engineering (India • Japan • USA)",
        desc: "24+ years building mission-critical, zero-fault software across India, Tokyo (high-security gaming machine device drivers), and the United States — designing digital solutions built for safety, reliability, and business scale."
      },
      {
        title: "High-Throughput Mobile & Offline-First Architecture",
        desc: "Deep-rooted expertise in native Android platforms, low-latency device drivers, local SQLite/Room transactional storage, and resilient background synchronization under spotty network conditions."
      },
      {
        title: "Turnkey Enterprise Platforms & Secure IoT Integration",
        desc: "Architecting end-to-end hardware-software bridges, encrypted camera/QR telemetries, and secure cloud workflows with zero-leakage financial and audit integrity."
      }
    ]
  },

  // Contact / Q&A Information for Closing Slide
  contact: {
    title: "Partner With TenCore Digital Labs",
    subtitle: "Turnkey delivery of modern digital valet operations for five-star hospitality properties.",
    items: [
      { icon: "👨‍💼", label: "Founder & Principal Systems Architect", val: "Devendra Vaja" },
      { icon: "🏢", label: "Enterprise Technology Studio", val: "TenCore Digital Labs Private Limited" },
      { icon: "✉️", label: "Executive Direct Email", val: "tencorelabs@gmail.com" },
      { icon: "📱", label: "Direct Phone / WhatsApp", val: "+91 9082351295" },
      { icon: "📍", label: "Headquarters & Engineering Lab", val: "Mumbai, India" }
    ],
    qrLabel: "Executive Contact",
    qrSub: "Scan to schedule pilot kickoff"
  }
};

// 2. CLIENT PRESENTATION METADATA
const DECK_META = {
  title: "Parking Setu",
  subtitle: "Digital Valet Parking System • MVP Proposal & 5-Phase Architecture",
  pillTag: "🚗 Digital Valet Platform • Five-Star Hospitality Operations",
  version: "Version 1.0 • Fixed-Price Proposal",
  date: "September 2026",
  category: "Client Proposal",
  storageKey: "parkingsetu_presentation_v7"
};

// 3. COLOR THEME (Luxury Hospitality Navy Blue & Warm Amber Accent)
const THEME_CONFIG = {
  primary: "#1e3a8a",       // Deep Royal Navy
  primaryDark: "#172554",   // Midnight Navy
  primaryLight: "#dbeafe",  // Soft Ice Blue
  secondary: "#d97706",     // Amber / Gold Accent
  accent: "#2563eb",        // Bright Cobalt Blue
  bgBody: "#f8fafc",        // Clean Slate White
  bgCard: "#ffffff",        // Pure White Cards
  textPrimary: "#0f172a",   // Slate Black
  textSecondary: "#475569"  // Slate Gray
};

// 4. PARKING SETU SLIDES (19 Comprehensive Slides)
const DEFAULT_SLIDES = [
  // Slide 1: Title Cover Slide
  {
    layout: "title",
    title: "Parking Setu <span>Digital Valet System</span>",
    subtitle: "Modernizing five-star hospitality valet operations with instant digital tickets, seamless vehicle tracking, and automated guest pre-retrieval.",
    meta: [
      { label: "ENTERPRISE STUDIO", value: "TenCore Digital Labs Private Limited", sub: "Enterprise & Mobile Platform Architecture" },
      { label: "LEADERSHIP", value: "Devendra Vaja", sub: "Founder & Principal Systems Architect" },
      { label: "PROPOSAL SPECIFICATION", value: "Fixed-Price MVP (₹2,40,000)", sub: "Phase 1 of 5-Phase Strategic Roadmap" }
    ]
  },

  // Slide 2: Leadership Slide
  {
    layout: "instructor",
    title: "Deep-Tech Engineering Leadership",
    subtitle: "TenCore Digital Labs Private Limited — 24+ Years of Embedded Systems, Kernel Drivers & Android Architecture",
    instructorName: BRAND_CONFIG.founder.name,
    instructorRole: BRAND_CONFIG.founder.role + " • " + BRAND_CONFIG.founder.company,
    instructorTagline: BRAND_CONFIG.founder.tagline,
    instructorPillars: BRAND_CONFIG.founder.pillars
  },

  // Slide 3: Section Divider 1
  {
    layout: "divider",
    title: "The Hospitality Valet Challenge",
    subtitle: "Operational friction, bottleneck queues, liability exposure, and the imperative for digital transformation.",
    badge: "SECTION 01 • OPERATIONAL CONTEXT"
  },

  // Slide 4: Problem vs Solution (Two-Column)
  {
    layout: "twocol",
    title: "Traditional Paper Valet vs. Parking Setu Digital Platform",
    subtitle: "Transforming manual, error-prone front-of-house friction into a seamless luxury guest experience.",
    leftCol: {
      title: "Traditional Paper Valet Friction",
      badge: "LEGACY CHALLENGES",
      bullets: [
        "<strong>Slow Paper Tagging (45–90s):</strong> Hand-writing vehicle slips causes peak-hour arrival bottlenecks at the porch.",
        "<strong>Lobby Crowding & 15m Wait:</strong> Guests physically stand at the valet desk waiting for staff to locate keys and fetch vehicles.",
        "<strong>Unverifiable Damage Disputes:</strong> Zero visual proof at check-in leaves the hotel vulnerable to false vehicle damage claims.",
        "<strong>Key Misplacement Risk:</strong> Manual key-rack tags lead to misplaced fobs, delayed departures, and guest distress.",
        "<strong>Zero Managerial Telemetry:</strong> Management has zero live visibility into queue length, runner turnaround times, or staff throughput."
      ]
    },
    rightCol: {
      title: "Parking Setu Digital Shield",
      badge: "DIGITAL SOLUTION",
      bullets: [
        "<strong>< 5-Second Digital Check-In:</strong> Swift mobile scanning generates an instant digital valet pass via SMS / Web link.",
        "<strong>1-Tap Pre-Arrival Request:</strong> Guests request their car from the restaurant, lounge, or room before stepping outside.",
        "<strong>Timestamped Photo Vault:</strong> Instant 4-point vehicle intake photos create an indisputable digital condition record.",
        "<strong>Precise Bay & Key Tracking:</strong> Every vehicle and key tag is mapped to an exact rack and bay with staff accountability.",
        "<strong>Live Executive Command Center:</strong> Real-time dashboard tracks turnaround SLAs, runner metrics, and queue alerts."
      ]
    }
  },

  // Slide 5: Core 6-Step Operational Lifecycle (Differentiators Layout)
  {
    layout: "differentiators",
    title: "End-to-End Operational Lifecycle",
    subtitle: "A frictionless 6-step digital workflow engineered for maximum speed and zero operational gaps.",
    features: [
      {
        title: "1. Rapid Ingress & Intake",
        desc: "Valet attendant inputs vehicle number and guest mobile in <5s, captures intake photos, and tags the key fob."
      },
      {
        title: "2. Instant Digital Ticket Issuance",
        desc: "Guest instantly receives a secure digital ticket link via SMS (no app download required) with live status."
      },
      {
        title: "3. Precision Parking & Bay Logging",
        desc: "Attendant parks the vehicle, records the exact Bay/Zone (`Area → Zone → Bay`), and places key in assigned rack slot."
      },
      {
        title: "4. One-Tap Guest Pre-Retrieval",
        desc: "Guest taps 'Request My Vehicle' from dining table or room. Staff runner receives immediate dispatch alert."
      },
      {
        title: "5. Swift Retrieval & Staging",
        desc: "Runner locates key and bay instantly, fetches vehicle to porch, and marks it 'Ready' — triggering guest notification."
      },
      {
        title: "6. Secure Handover & Audit Close",
        desc: "Staff verifies guest via QR token or mobile, hands over keys, and marks session 'Completed' with permanent audit log."
      }
    ],
    stack: [
      { label: "STEP 1 • ARRIVAL", title: "Intake & Intake Photos", highlight: false },
      { label: "STEP 2 • PASS", title: "Digital Token Generated", highlight: true },
      { label: "STEP 3 • STORAGE", title: "Bay & Key Tag Linked", highlight: false },
      { label: "STEP 4 • REQUEST", title: "Pre-Retrieval Alert", highlight: true },
      { label: "STEP 5 • RETRIEVAL", title: "Vehicle Brought to Porch", highlight: false },
      { label: "STEP 6 • DEPARTURE", title: "Verified Handover & Close", dark: true }
    ]
  },

  // Slide 6: Three Core User Touchpoints (Three Card Grid)
  {
    layout: "threecard",
    title: "Three Role-Specific Digital Touchpoints",
    subtitle: "Engineered specifically for guests, field valet runners, and hotel management.",
    cards: [
      {
        title: "Guest Web Experience (PWA)",
        icon: "📱",
        body: "Zero app install required. Lightweight mobile web ticket with dynamic status tracker, live timer, 1-tap pre-retrieval button, and hotel support link.",
        metric: "Zero App Download Friction"
      },
      {
        title: "Valet Staff Android App",
        icon: "⚡",
        body: "High-speed native Android tool for attendants. Rapid number plate entry, CameraX damage photo capture, QR scanning, offline queue, and runner dispatch.",
        metric: "< 5s Check-In Turnaround"
      },
      {
        title: "Hotel Operations Dashboard",
        icon: "🖥️",
        body: "Centralized managerial web command center. Live queue monitoring, active inventory, key rack status, runner SLA metrics, audit logs, and exception resolution.",
        metric: "100% Real-Time Visibility"
      }
    ]
  },

  // Slide 7: Critical Front-of-House Features (Four Card Grid)
  {
    layout: "fourcard",
    title: "Critical MVP Features • Front-of-House",
    subtitle: "Built to eliminate guest wait times and protect property reputation.",
    cards: [
      {
        title: "1. Token-Based Digital Valet Ticket",
        icon: "🎫",
        body: "Secure, tamper-proof QR valet pass sent via SMS. Displays drop-off timestamp, car details, live status, and contact support without exposing raw PII."
      },
      {
        title: "2. Key Rack & Slot Tracking",
        icon: "🔑",
        body: "Unique key tag numbers linked directly to storage rack bays. Staff transfers and retrievals are recorded with staff identity and timestamp."
      },
      {
        title: "3. Timestamped Vehicle Condition Record",
        icon: "📸",
        body: "4-Point intake photo capture and notes on existing scratches, odometer, or fuel. Creates an indisputable record preventing false liability claims."
      },
      {
        title: "4. Guest Pre-Arrival Retrieval Request",
        icon: "🔔",
        body: "Guests trigger vehicle retrieval in advance with duplicate request protection. Eliminates porch bottleneck crowds during peak checkout and banquet hours."
      }
    ]
  },

  // Slide 8: Critical Back-of-House Features (Four Card Grid)
  {
    layout: "fourcard",
    title: "Critical MVP Features • Operations & Control",
    subtitle: "Full operational control, staff dispatching, and enterprise governance.",
    cards: [
      {
        title: "1. Intelligent Runner Dispatch Workflow",
        icon: "🏃‍♂️",
        body: "Supervisor dashboard highlights pending vehicle requests, displays exact parking bay and key rack slot, and assigns runners with latency tracking."
      },
      {
        title: "2. Real-Time SMS & Push Alerts",
        icon: "💬",
        body: "Automated event-triggered notifications for ticket issuance, vehicle parked confirmation, ready-at-porch alert, and handover completion."
      },
      {
        title: "3. Two-Factor Secure Handover",
        icon: "🛡️",
        body: "Staff verifies guest via QR token or mobile OTP before vehicle handover. Ensures vehicles and keys are returned exclusively to verified owners."
      },
      {
        title: "4. Tamper-Proof Audit & Role Governance",
        icon: "📋",
        body: "Role-based permissions (Attendant, Supervisor, Admin). Every status change, manual override, or exception is logged with user ID and timestamp."
      }
    ]
  },

  // Slide 9: Section Divider 2
  {
    layout: "divider",
    title: "Architecture, Team & Fixed-Price Model",
    subtitle: "A defensible ₹2,40,000 fixed price backed by an explicit 120 person-day effort model and modern tech stack.",
    badge: "SECTION 02 • ENGINEERING & COMMERCIALS"
  },

  // Slide 10: Technology Stack & Cloud Architecture (Differentiators Layout)
  {
    layout: "differentiators",
    title: "Modern, Scalable Technology Stack",
    subtitle: "Engineered with industry-standard frameworks ensuring high throughput, offline resilience, and data security.",
    features: [
      {
        title: "Native Android App (Kotlin + Jetpack Compose)",
        desc: "Built with CameraX for rapid damage photo capture, ML Kit for QR scanning, and Room database for local offline operation."
      },
      {
        title: "Guest & Admin Web (React / Next.js)",
        desc: "Zero-friction PWA for guests and real-time responsive dashboard for hotel supervisors with live queue telemetry."
      },
      {
        title: "Robust Core Backend (Kotlin / Spring Boot)",
        desc: "Enterprise-grade REST APIs, state machine workflows, and OpenAPI/Swagger documentation."
      },
      {
        title: "PostgreSQL & Redis Infrastructure",
        desc: "PostgreSQL as system of record for audit logs; Redis for OTP throttling, queue state, and duplicate request protection."
      }
    ],
    stack: [
      { label: "FRONTEND • GUEST / STAFF", title: "Android Kotlin + Next.js PWA", highlight: false },
      { label: "API • WORKFLOW LAYER", title: "Spring Boot + REST Engine", highlight: true },
      { label: "CACHE • QUEUE BUFFER", title: "Redis State & Rate Throttler", highlight: false },
      { label: "DATABASE • AUDIT VAULT", title: "PostgreSQL + S3 Signed Vault", dark: true }
    ]
  },

  // Slide 11: 120 Person-Day Effort Model (Data Table)
  {
    layout: "table",
    title: "120 Person-Day Effort Model (₹2,40,000 Justification)",
    subtitle: "Transparent engineering breakdown based on a flat ₹2,000/day blended rate across 120 person-days.",
    columns: ["Work Package", "Effort (in Days)", "Allocated Cost", "Key Output Deliverables"],
    rows: [
      ["Discovery & Technical Design", "6", "<span class=\"badge-tag badge-primary\">₹12,000</span>", "Scope freeze, property workflow schemas & API contract"],
      ["UX Wireframes & Visual Layouts", "7.5", "<span class=\"badge-tag badge-primary\">₹15,000</span>", "Staff app, guest PWA & hotel dashboard wireframes"],
      ["Backend, PostgreSQL & Redis", "30", "<span class=\"badge-tag badge-primary\">₹60,000</span>", "REST APIs, auth, state machine & tamper-proof audit vault"],
      ["Valet Staff Android App", "36", "<span class=\"badge-tag badge-primary\">₹72,000</span>", "Kotlin/Compose native app, CameraX damage photos & Room queue"],
      ["Guest Mobile PWA", "14", "<span class=\"badge-tag badge-primary\">₹28,000</span>", "QR ticket viewer, pre-request & status tracker"],
      ["Hotel Operations Dashboard", "16", "<span class=\"badge-tag badge-primary\">₹32,000</span>", "Live queue monitor, runner dispatch & reports"],
      ["Notifications & Cloud Deployment", "5.5", "<span class=\"badge-tag badge-primary\">₹11,000</span>", "SMS gateway, S3 photo store & cloud deployment"],
      ["QA, UAT & Staff Training", "5", "<span class=\"badge-tag badge-primary\">₹10,000</span>", "Manual regression, dry runs & on-property staff training"],
      ["TOTAL MVP EFFORT", "120", "<span class=\"badge-tag badge-success\">₹2,40,000</span>", "<strong>Turnkey 1-Property Deployment (100% Fixed-Price Scope)</strong>"]
    ]
  },

  // Slide 12: Disciplined MVP Boundaries (Two-Column)
  {
    layout: "twocol",
    title: "Scope Discipline: What Keeps the MVP Affordable",
    subtitle: "Clear boundaries that ensure turnkey delivery within budget without compromising operational reliability.",
    leftCol: {
      title: "Included in Fixed ₹2,40,000 MVP",
      badge: "DELIVERABLES INCLUDED",
      bullets: [
        "<strong>1 Property Deployment:</strong> Full single-hotel property configuration and floor area setup.",
        "<strong>3 Working Applications:</strong> Native Android Staff App, Guest Web PWA, and Hotel Admin Dashboard.",
        "<strong>Complete Core Valet Cycle:</strong> Ingress, damage photos, key rack tagging, pre-retrieval, and handover.",
        "<strong>SMS Gateway Integration:</strong> Automated ticket delivery and status update messages.",
        "<strong>Complete Source Code & Training:</strong> Full code handover, cloud deployment, and staff training walkthroughs."
      ]
    },
    rightCol: {
      title: "Deferred to Phase 2–5 Roadmap",
      badge: "DEFERRED EXPANSIONS",
      bullets: [
        "<strong>PMS / POS Integration:</strong> Hotel room billing and Opera/PMS sync (Phase 3).",
        "<strong>Payment Gateway / Cashless UPI:</strong> Dynamic parking tariffs and payment collection (Phase 3).",
        "<strong>Automated ANPR Cameras:</strong> Automatic camera-based license plate recognition (Phase 5).",
        "<strong>Multi-Property Group SaaS:</strong> Enterprise multi-tenant HQ hierarchy (Phase 4).",
        "<strong>Third-Party Cloud Usage:</strong> Cloud hosting, SMS/WhatsApp usage billed at actuals."
      ]
    }
  },

  // Slide 13: 8–10 Week Delivery & Payment Milestones (Roadmap / Blueprint)
  {
    layout: "blueprint",
    title: "8–10 Week MVP Delivery & Commercial Milestones",
    subtitle: "Structured milestone schedule with progress-linked commercial disbursements.",
    phases: [
      {
        phase: "MILESTONE 1 (30%)",
        title: "Kickoff & Scope Freeze",
        duration: "Weeks 1 – 2",
        budget: "₹72,000",
        deliverables: [
          "Requirement lock & property schema mapping",
          "UI/UX wireframes for Staff App & Guest PWA",
          "Backend schema and API contract freeze"
        ],
        payment: "<strong>Deliverable:</strong> Architecture & Design Sign-off"
      },
      {
        phase: "MILESTONE 2 (30%)",
        title: "Core Backend & Staff App",
        duration: "Weeks 3 – 5",
        budget: "₹72,000",
        deliverables: [
          "Spring Boot API, PostgreSQL & Redis setup",
          "Android Staff App (Ingress, Photos, Keys)",
          "CameraX photo capture & Room offline buffer"
        ],
        payment: "<strong>Deliverable:</strong> Working Staff Sandbox Build"
      },
      {
        phase: "MILESTONE 3 (25%)",
        title: "Guest PWA & Dashboard",
        duration: "Weeks 6 – 7",
        budget: "₹60,000",
        deliverables: [
          "Guest Web PWA with live status tracking",
          "Hotel Management Web Dashboard",
          "SMS gateway & real-time notifications"
        ],
        payment: "<strong>Deliverable:</strong> End-to-End System Integration"
      },
      {
        phase: "MILESTONE 4 (15%)",
        title: "UAT, Training & Go-Live",
        duration: "Weeks 8 – 10",
        budget: "₹36,000",
        deliverables: [
          "On-property dry runs & staff training",
          "Production cloud deployment & data backup drill",
          "Final documentation & source code handover"
        ],
        payment: "<strong>Deliverable:</strong> Production Handover & Go-Live"
      }
    ]
  },

  // Slide 14: Infrastructure & Third-Party Budget (Two-Column)
  {
    layout: "twocol",
    title: "Infrastructure & Operating Reserve Model",
    subtitle: "Transparent estimates for cloud hosting, SMS gateway, and storage requirements.",
    leftCol: {
      title: "Initial Infrastructure Reserve",
      badge: "ONE-TIME SETUP",
      bullets: [
        "<strong>Cloud Environment Setup:</strong> AWS / GCP Mumbai region configuration (₹0–₹5,000).",
        "<strong>Managed PostgreSQL & Redis:</strong> Initial instance provisioning (₹0–₹8,000).",
        "<strong>Domain, SSL & Security:</strong> Custom property domain & certificates (₹1,000–₹3,000).",
        "<strong>SMS / OTP Messaging Wallet:</strong> Prepaid SMS credits for pilot (₹5,000–₹10,000).",
        "<strong>Recommended Total Reserve:</strong> <strong>₹25,000 – ₹50,000</strong> (paid directly to cloud vendors)."
      ]
    },
    rightCol: {
      title: "Estimated Monthly Operating Cost",
      badge: "MONTHLY OPEX",
      bullets: [
        "<strong>API & Application Hosting:</strong> Scalable cloud instances (₹1,500 – ₹5,000/mo).",
        "<strong>Managed Database & Storage:</strong> Automated PostgreSQL + S3 photos (₹2,000 – ₹7,000/mo).",
        "<strong>SMS Messaging Volume:</strong> Scaled by valet guest transaction volume (₹1,000 – ₹8,000+/mo).",
        "<strong>WhatsApp Business (Optional):</strong> If official business account enabled (₹1,000 – ₹10,000+/mo).",
        "<strong>Estimated Monthly Total:</strong> <strong>₹6,100 – ₹35,000/mo</strong> (at direct actual cost)."
      ]
    }
  },

  // Slide 15: Section Divider 3
  {
    layout: "divider",
    title: "Strategic 5-Phase Roadmap & Support Tiers",
    subtitle: "From single-property MVP to multi-property enterprise hospitality platform.",
    badge: "SECTION 03 • ROADMAP & EXPANSION"
  },

  // Slide 16: 5-Phase Strategic Evolution (Roadmap / Blueprint)
  {
    layout: "blueprint",
    title: "Strategic 5-Phase Hospitality Operations Roadmap",
    subtitle: "A structured 18–30 month evolution scaling from initial pilot validation to group-wide enterprise deployment.",
    phases: [
      {
        phase: "PHASE 1 (MVP)",
        title: "Operational Core",
        duration: "8–10 Weeks",
        budget: "₹2.40 Lakhs",
        deliverables: [
          "Single hotel validation",
          "Android app + Guest PWA + Admin Web",
          "Digital tickets, damage photos & audit log"
        ],
        payment: "<strong>Scope:</strong> Core MVP Workflow"
      },
      {
        phase: "PHASE 2",
        title: "Production Hardening",
        duration: "6–8 Weeks",
        budget: "Phase 2 Scope",
        deliverables: [
          "Official WhatsApp Business integration",
          "Offline queue conflict resolution",
          "Incident & damage claim supervisor approval"
        ],
        payment: "<strong>Focus:</strong> Daily Operational Reliability"
      },
      {
        phase: "PHASE 3",
        title: "Commercial & Events",
        duration: "8–10 Weeks",
        budget: "Phase 3 Scope",
        deliverables: [
          "Payment gateway / UPI integration",
          "Banquet & event parking fast-track mode",
          "PMS / POS room charging & folio posting"
        ],
        payment: "<strong>Focus:</strong> Revenue & Event Scalability"
      },
      {
        phase: "PHASE 4–5",
        title: "Multi-Property & Scale",
        duration: "Multi-Site",
        budget: "Enterprise Scope",
        deliverables: [
          "Centralized chain HQ command portal",
          "Automated ANPR camera license recognition",
          "Group-wide BI analytics & data warehouse"
        ],
        payment: "<strong>Focus:</strong> Hotel Chain Enterprise SaaS"
      }
    ]
  },

  // Slide 17: Post-Launch Support Tiers (Pricing Cards)
  {
    layout: "pricing",
    title: "Post-Launch Support & Maintenance Packages",
    subtitle: "Structured SLA tiers ensuring zero downtime and dedicated technical support after the 30-day warranty.",
    cards: [
      {
        tier: "TIER 1 • ESSENTIAL",
        title: "Basic Maintenance",
        price: "₹8,000",
        priceSub: "/ month / property",
        featured: false,
        tagline: "Essential stability & bug fixes",
        bullets: [
          "Application & database bug fixes",
          "Cloud uptime & monitoring review",
          "Minor configuration assistance",
          "Standard business-hours response",
          "Daily automated cloud backup checks"
        ],
        footerPitch: "Ideal for steady daily hotel operations"
      },
      {
        tier: "TIER 2 • STANDARD",
        title: "Standard SLA Support",
        price: "₹15,000",
        priceSub: "/ month / property",
        featured: true,
        badge: "RECOMMENDED",
        tagline: "Proactive care & priority assistance",
        bullets: [
          "Includes everything in Basic tier",
          "Monthly proactive database health check",
          "Small content & parking zone updates",
          "Priority 4-hour critical issue response",
          "Dedicated technical support engineer"
        ],
        footerPitch: "Most popular for five-star properties"
      },
      {
        tier: "TIER 3 • PRIORITY",
        title: "Priority & Event Ops",
        price: "₹25,000",
        priceSub: "/ month / property",
        featured: false,
        tagline: "High-volume & event-ready support",
        bullets: [
          "Includes everything in Standard tier",
          "Banquet / high-traffic event coverage",
          "Rapid 1-hour critical response SLA",
          "Monthly operational throughput review",
          "Quarterly performance optimization"
        ],
        footerPitch: "For busy hotels with regular banquets"
      }
    ]
  },

  // Slide 18: Feature Comparison Matrix (Data Table)
  {
    layout: "table",
    title: "Operational Impact: Traditional Paper vs. Parking Setu",
    subtitle: "Direct feature comparison highlighting tangible operational efficiency gains.",
    columns: ["Operational Dimension", "Traditional Paper Valet", "Parking Setu Digital Platform"],
    rows: [
      ["Intake & Ticket Speed", "45 – 90 seconds (manual slip write-up)", "<strong>< 5 seconds (Digital QR)</strong>", "badge-success"],
      ["Vehicle Retrieval Request", "Guest physically waits at porch (10–15 min)", "<strong>1-Tap Pre-Request from Room / Dining</strong>", "badge-success"],
      ["Vehicle Damage Protection", "Zero visual record; frequent disputes", "<strong>4-Point Timestamped Photo Vault</strong>", "badge-success"],
      ["Key Location Management", "Manual pegboard tags; misplacement risk", "<strong>Digitally Mapped Rack & Bay Tracking</strong>", "badge-success"],
      ["Guest Engagement Channel", "Throwaway paper slip", "<strong>Branded Mobile Pass via SMS / WhatsApp</strong>", "badge-success"],
      ["Managerial Intelligence", "Blind operations; paper logbooks", "<strong>Live SLA Dashboard & Audit Reports</strong>", "badge-success"]
    ]
  },

  // Slide 19: Q&A / Closing Slide
  {
    layout: "qa",
    title: "Let's Modernize Your Valet Operations",
    subtitle: "TenCore Digital Labs is ready to partner with your property to engineer and deploy the Parking Setu MVP.",
    contactInfo: BRAND_CONFIG.contact.items,
    qrLabel: BRAND_CONFIG.contact.qrLabel,
    qrSub: BRAND_CONFIG.contact.qrSub
  }
];

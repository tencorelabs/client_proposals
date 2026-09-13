// Default Presentation Dataset for Suprema+ Smart Steam System
const DEFAULT_SLIDES = [
  {
    layout: 'title',
    title: 'Suprema+ Smart Steam System',
    titleHighlight: 'Smart Steam System',
    subtitle: 'A Connected Commercial Platform & Deal Strategy for Multi Technicaa',
    clientName: 'Multi Technicaa (Mr. Kirit B. Parmar)',
    clientLocation: 'Thane / Mumbai, Maharashtra',
    preparedBy: 'Devendra Vaja (TenCore Digital Labs)',
    proposalDate: 'August 2026',
    documentVersion: 'Version 1.0'
  },
  {
    layout: 'instructor',
    title: 'Deep Tech Engineering Partner',
    subtitle: 'TenCore Digital Labs • Leadership & Track Record',
    instructorName: 'Devendra Vaja',
    instructorTitle: 'Founder & Principal Architect, TenCore Digital Labs',
    instructorLocation: 'Mumbai, Maharashtra, India',
    bioPoints: [
      { label: 'Engineering Experience', text: '24+ years architecting embedded firmware, industrial BLE/wireless ecosystems, and enterprise mobile platforms globally.' },
      { label: 'Bridging Hardware & Software', text: 'Proven expertise connecting industrial equipment control, firmware safety interlocks, and polished consumer mobile UX.' },
      { label: 'End-to-End Execution', text: 'Comprehensive delivery across custom BLE GATT binary protocols, Flutter cross-platform mobile apps, and scalable IoT cloud telemetry.' }
    ]
  },
  {
    layout: 'divider',
    title: 'Executive Summary & Market Opportunity',
    description: 'Why connected smart steam control is becoming the mandatory standard in commercial wellness and hospitality.',
    highlight: 'Strategic Goal: Capturing ₹15,000–₹20,000 per-unit margin uplift in commercial projects.'
  },
  {
    layout: 'threecard',
    title: 'The Smart Steam Market Shift',
    subtitle: 'Why commercial gym and resort buyers are moving to connected ecosystems',
    cards: [
      {
        title: 'Global Market Trend',
        icon: '🏢',
        body: 'Global leaders (MrSteam SteamLinx, ThermaSol, Helo, TOLO) win premium projects by offering smartphone app control, remote preheat, session presets, and telemetry.',
        metric: 'Standard Expectation in Luxury Bids'
      },
      {
        title: 'Multi Technicaa Gap',
        icon: '⚠️',
        body: 'Multi Technicaa has outstanding hardware reliability (₹25k–₹1.05L) but lacks a smart software tier, leaving high-margin hospitality bids open to international competitors.',
        metric: 'Price Pressure from Low-Cost Assemblers'
      },
      {
        title: 'The Suprema+ Advantage',
        icon: '⚡',
        body: 'Suprema+ equips Multi Technicaa with a branded smart ecosystem, unlocking 20–30% higher ASP and commanding commercial tender wins with gym chains & resorts.',
        metric: '+₹15,000 to ₹20,000 Margin Uplift'
      }
    ]
  },
  {
    layout: 'twocol',
    title: 'The Suprema+ Solution Overview',
    subtitle: 'End-to-End Hardware + Embedded BLE + Cross-Platform Mobile App',
    image: 'Pics/suprema_steam_generator.jpg',
    imageCaption: 'Suprema+ Industrial Steam Bath Generator & Paired Smartphone App',
    leftTitle: 'Core System Architecture',
    leftBullets: [
      '<strong>Industrial Hardware Foundation:</strong> Retains Multi Technicaa\'s proven heavy-duty boiler base (3 kW to 22.5 kW), upgraded with BLE 5.0 (nRF52840 / ESP32-C3/S3).',
      '<strong>Native Cross-Platform App:</strong> Flutter iOS & Android with instant local BLE pairing and zero cloud dependency required for core operations.',
      '<strong>Centralized Multi-Unit Switcher:</strong> Single-pane management for gyms and resorts managing multiple steam rooms and spa zones.'
    ],
    rightTitle: 'Product Line Impact',
    rightBullets: [
      '<strong>Commercial Differentiator:</strong> Unlocks premium hospitality, spa, and fitness tenders that mandate smart remote control.',
      '<strong>Higher ASP & Margin:</strong> Expands per-unit selling price from ₹50,000 to ₹65,000–₹70,000 on 12 kW models.',
      '<strong>Future-Proof Evolution:</strong> Pre-architected for Bluetooth Mesh multi-panel sync and an optional plug-and-play Wi-Fi Gateway.'
    ]
  },
  {
    layout: 'fourcard',
    title: 'Suprema+ Mobile Feature Suite',
    subtitle: 'Designed for effortless one-handed operation in wellness environments',
    cards: [
      {
        title: 'Smart Session Control',
        icon: '⏱️',
        body: 'Target temperature (35°C–55°C), duration countdown (5–90 min), pre-heat boost, and cool-off cycles with intuitive steppers.'
      },
      {
        title: 'Ambience & Fragrance',
        icon: '🌿',
        body: 'Ambience temperature offset, automatic fragranced aroma pump dispensing, and customizable auto-drain scheduling.'
      },
      {
        title: 'Multi-Room Switcher',
        icon: '🏢',
        body: 'Gym & spa operators can seamlessly monitor and control \'Men\'s Steam Room\', \'VIP Spa 1\', and \'Suite 2\' from a single screen.'
      },
      {
        title: 'Safety & Live Telemetry',
        icon: '🛡️',
        body: 'Real-time telemetry (Heating, Steaming, Draining, Idle), dry-run interlocks, sensor failure warnings, and audible alarm toggle.'
      }
    ]
  },
  {
    layout: 'divider',
    title: 'Business Case & Unit Economics',
    description: 'Evaluating the return on investment and per-unit hardware cost structure.',
    highlight: 'The software investment represents a modest fraction of the broader production program.'
  },
  {
    layout: 'twocol',
    title: 'Business Case & ROI Model',
    subtitle: 'Rapid break-even amortized across commercial shipments',
    leftTitle: 'Unit Margin Expansion (12 kW Model)',
    leftBullets: [
      '<strong>Standard 12 kW Selling Price:</strong> ~₹50,000 per unit.',
      '<strong>Suprema+ 12 kW Smart Target Price:</strong> ₹65,000 – ₹70,000 per unit.',
      '<strong>Incremental ASP Uplift:</strong> <strong>+₹15,000 to ₹20,000 per unit</strong>.',
      '<strong>Commercial Win Rate:</strong> Enables winning larger commercial projects with higher volume margins.'
    ],
    rightTitle: 'Amortization & Break-Even',
    rightBullets: [
      '<strong>Program Investment:</strong> ₹30L – ₹49L (software + embedded engineering).',
      '<strong>Break-Even Volume:</strong> ~2,000 – 3,000 premium units over 2–3 years.',
      '<strong>Yearly Trajectory:</strong> At 500–800 units/year, Suprema+ achieves immediate profitability while elevating Multi Technicaa\'s overall brand equity.'
    ]
  },
  {
    layout: 'table',
    title: 'PCB & Electronics Cost per Unit',
    subtitle: 'Estimated BOM cost context vs. one-time software investment',
    headers: ['Component / Subsystem', 'Indicative Unit Cost', 'Annual at 1,000 Units', 'Annual at 3,000 Units'],
    rows: [
      ['BLE 5.0 Module (nRF52840 / ESP32)', '₹250 – ₹600', '₹2.5 L – ₹6.0 L', '₹7.5 L – ₹18.0 L'],
      ['MCU, Power Supply & Industrial Housing', '₹400 – ₹800', '₹4.0 L – ₹8.0 L', '₹12.0 L – ₹24.0 L'],
      ['Display, Touch Buttons & Wiring Harness', '₹600 – ₹1,500', '₹6.0 L – ₹15.0 L', '₹18.0 L – ₹45.0 L'],
      ['PCB Assembly, SMT & Vendor Margin', '₹400 – ₹800', '₹4.0 L – ₹8.0 L', '₹12.0 L – ₹24.0 L'],
      ['<strong>Total Electronics BOM per Unit</strong>', '<strong style="color:var(--primary);">₹1,650 – ₹3,700</strong>', '<strong>₹16.5 L – ₹37.0 L</strong>', '<strong>₹49.5 L – ₹1.11 Cr</strong>']
    ],
    footnote: 'Key Insight: A ₹45L software investment is a modest fraction of recurring hardware spend and creates permanent, proprietary IP.'
  },
  {
    layout: 'twocol',
    title: 'Optional Add-On: BLE Protocol Design',
    subtitle: 'Embedded Systems Architecture & Hardware Integration (₹4,00,000)',
    leftTitle: 'What is Included in the Add-On',
    leftBullets: [
      '<strong>GATT Profile Architecture:</strong> Service UUIDs, Characteristic mappings (Control, Telemetry, Safety), Read/Write/Notify definitions, MTU tuning.',
      '<strong>Binary Frame Specification:</strong> Structured opcode frames, CRC-16 checksums, status response matrices, timeout & retry logic.',
      '<strong>Safety Interlocks:</strong> Hardware-enforced validation criteria, dry-run safety rules, and emergency ACK cutoff triggers.',
      '<strong>Firmware Simulator Spec:</strong> Software state machine simulator enabling mobile app development ahead of physical PCB fabrication.'
    ],
    rightTitle: 'Client Decision Framework',
    rightBullets: [
      '<strong>Include (+₹4.0L):</strong> TenCore Digital Labs architects and validates the complete BLE communication protocol before Phase 1.',
      '<strong>Skip (₹0):</strong> Multi Technicaa\'s electronics team provides documented, finalized BLE GATT specs before app kickoff.',
      '<strong>Permanent Asset:</strong> Delivers permanent embedded IP 100% owned by Multi Technicaa, reusable across future touchscreens & gateways.'
    ]
  },
  {
    layout: 'divider',
    title: 'Implementation Roadmap & Milestones',
    description: 'A structured 4-phase engineering program tying cash flow directly to verified deliverables.',
    highlight: '30–38 weeks from functional prototype to full commercial deployment.'
  },
  {
    layout: 'blueprint',
    title: '4-Phase Implementation Roadmap',
    subtitle: 'Clear milestone gating across the 30–38 week timeline',
    steps: [
      {
        num: 'P1',
        title: 'Phase 1: Discovery & Prototype',
        meta: '4–6 Weeks • ₹6,00,000',
        bullets: [
          'BLE GATT spec review & validation.',
          'Flutter prototype app (iOS & Android).',
          'Core BLE discovery, pairing & start/stop.',
          'Pilot feedback with 2–3 partner gyms/resorts.'
        ],
        payment: 'Payment: 40% Kickoff | 40% Demo | 20% Sign-Off'
      },
      {
        num: 'P2',
        title: 'Phase 2: MVP Core System',
        meta: '8–10 Weeks • ₹12,00,000',
        bullets: [
          'Full cross-platform production app.',
          'Multi-unit management interface.',
          'Diagnostics & fault code state machine.',
          'Test bench & hardware bench validation.'
        ],
        payment: 'Payment: 30% Kickoff | 40% Beta | 30% Sign-Off'
      },
      {
        num: 'P3',
        title: 'Phase 3: Commercial Readiness',
        meta: '8–10 Weeks • ₹15,00,000',
        bullets: [
          'UI/UX polish & branded onboarding.',
          'Maintenance scheduler & descaling alerts.',
          'App Store & Google Play compliance.',
          'Controlled pilot across 5–10 client sites.'
        ],
        payment: 'Payment: 30% Kickoff | 40% Release | 30% Final'
      },
      {
        num: 'P4',
        title: 'Phase 4: Scale & Wi-Fi Gateway',
        meta: '10–12 Weeks • ₹12,00,000',
        bullets: [
          'IoT Wi-Fi gateway hardware bridge.',
          'Remote scheduling & out-of-building preheat.',
          'Multi-site cloud administrative dashboard.',
          'Fleet telemetry & usage analytics.'
        ],
        payment: 'Payment: 30% Kickoff | 40% Build | 30% Acceptance'
      }
    ]
  },
  {
    layout: 'twocol',
    title: 'Phase 1 & Phase 2 Deep Dive',
    subtitle: 'From working prototype to production MVP core',
    leftTitle: 'Phase 1: Discovery & Prototype (₹6.0L / ₹10.0L)',
    leftBullets: [
      '<strong>Tranche 1 (40% Kickoff):</strong> ₹2,40,000 *(or ₹4,00,000 with Protocol Add-On)* — Architecture sign-off & sprint launch.',
      '<strong>Tranche 2 (40% Demo):</strong> ₹2,40,000 *(or ₹4,00,000 with Protocol Add-On)* — Working prototype app with live hardware demo.',
      '<strong>Tranche 3 (20% Pilot Sign-Off):</strong> ₹1,20,000 *(or ₹2,00,000 with Protocol Add-On)* — Pilot feedback report & Phase 2 Go/No-Go decision.',
      '<strong>Deliverable:</strong> Validated functional prototype app controlling physical steam generator.'
    ],
    rightTitle: 'Phase 2: MVP Core System (₹12.0L)',
    rightBullets: [
      '<strong>Tranche 1 (30% Kickoff):</strong> ₹3,60,000 — Production sprint initiation.',
      '<strong>Tranche 2 (40% Beta Build):</strong> ₹4,80,000 — Feature-complete beta app with integrated production BLE stack.',
      '<strong>Tranche 3 (30% MVP Sign-Off):</strong> ₹3,60,000 — Initial field testing & MVP acceptance sign-off.',
      '<strong>Deliverable:</strong> Commercial-grade core app ready for early customer installations.'
    ]
  },
  {
    layout: 'twocol',
    title: 'Phase 3 & Phase 4 Deep Dive',
    subtitle: 'Commercial market rollout and scalable cloud gateway',
    leftTitle: 'Phase 3: Commercial Readiness (₹15.0L)',
    leftBullets: [
      '<strong>Tranche 1 (30% Kickoff):</strong> ₹4,50,000 — Commercial UX polish & asset preparation.',
      '<strong>Tranche 2 (40% Release Candidate):</strong> ₹6,00,000 — Feature-complete build + App Store packages.',
      '<strong>Tranche 3 (30% Final Acceptance):</strong> ₹4,50,000 — 5–10 site pilot validation & performance sign-off.',
      '<strong>Deliverable:</strong> Market-ready Suprema+ system deployed in commercial live environments.'
    ],
    rightTitle: 'Phase 4: Scale & Wi-Fi Gateway (₹12.0L)',
    rightBullets: [
      '<strong>Tranche 1 (30% Kickoff):</strong> ₹3,60,000 — Wi-Fi IoT gateway architecture & cloud backend.',
      '<strong>Tranche 2 (40% Gateway Integration):</strong> ₹4,80,000 — Remote scheduling, cloud portal & telemetry.',
      '<strong>Tranche 3 (30% Final Cloud Sign-Off):</strong> ₹3,60,000 — Field deployment & enterprise fleet sign-off.',
      '<strong>Deliverable:</strong> Full smart ecosystem competing with MrSteam & ThermaSol.'
    ]
  },
  {
    layout: 'divider',
    title: 'Strategic Deal Structures & Commercial Options',
    description: 'Flexible financial engagement models tailored to Multi Technicaa\'s budget and commercial strategy.',
    highlight: 'Choose between Fixed Fee, Per-Unit Royalty, or Joint Margin Share.'
  },
  {
    layout: 'pricing',
    title: 'Commercial Deal Structures',
    subtitle: 'Three tailored options aligned to your business strategy',
    cards: [
      {
        title: 'Option 1: Fixed Fee',
        tagline: 'Predictable Cost & 100% Ownership',
        price: '₹45,00,000',
        priceSub: '₹45 Lakhs (or ₹49L with Protocol)',
        badge: 'Fixed Budget',
        isFeatured: false,
        bullets: [
          'Milestone-based tranches across 4 phases',
          'Zero ongoing royalties or licensing fees',
          '100% proprietary software ownership',
          'Predictable budgeting with no revenue sharing'
        ],
        pitch: '"Clear, fixed total of ₹45L in small tranches. No royalties, no surprises."'
      },
      {
        title: 'Option 2: Unit Royalty',
        tagline: 'Lower Upfront + Per-Unit Royalty',
        price: '₹30,00,000',
        priceSub: 'Upfront + ₹750 per Unit (Cap: ₹15L)',
        badge: 'Shared Risk',
        isFeatured: true,
        bullets: [
          'Reduced upfront cash outlay across Phases 1–3',
          '₹750 royalty per Suprema+ unit sold',
          'Strict cap at 2,000 units (Max Royalty: ₹15L)',
          'Max Total capped at ₹45L — Shared Sales Risk'
        ],
        pitch: '"Pay ₹30L during development, and ₹750 per unit only as Suprema+ sells."'
      },
      {
        title: 'Option 3: Joint Product',
        tagline: 'Margin / Price Uplift Share',
        price: '₹30,00,000',
        priceSub: 'Upfront + 15% Uplift (Cap: ₹15L)',
        badge: 'Strategic Partner',
        isFeatured: false,
        bullets: [
          'Co-engineered flagship product model',
          '15% share of ₹18k price uplift (₹2,700/unit)',
          'Strict cap at ₹15L (~5,556 units / 3 years)',
          'Max Total capped at ₹45L — Aligned Value Creation'
        ],
        pitch: '"We share in the extra profit margin we create together, capped at ₹15L."'
      }
    ]
  },
  {
    layout: 'table',
    title: 'Deal Comparison & Decision Matrix',
    subtitle: 'Side-by-side evaluation across key commercial dimensions',
    headers: ['Evaluation Dimension', 'Option 1: Fixed Fee', 'Option 2: Unit Royalty', 'Option 3: Joint Product'],
    rows: [
      ['Upfront Cash Commitment', '₹45.0 L (or ₹49.0 L)', '<strong style="color:var(--primary);">₹30.0 L</strong> (or ₹34.0 L)', '<strong style="color:var(--primary);">₹30.0 L</strong> (or ₹34.0 L)'],
      ['Ongoing Variable Payment', 'None (₹0)', '₹750 per unit sold', '15% of price uplift (₹2,700/unit)'],
      ['Total Cost Ceiling', '₹45.0 Lakhs', '<strong>₹45.0 Lakhs (Capped)</strong>', '<strong>₹45.0 Lakhs (Capped)</strong>'],
      ['Cash-Flow Risk Profile', 'Client retains risk', 'Shared across unit sales', 'Shared across profit creation'],
      ['Vendor Alignment', 'Fixed Scope Delivery', 'High (Volume aligned)', 'Highest (Margin & pricing aligned)'],
      ['Optimal Fit For...', 'Fixed corporate CAPEX', 'Cash-conscious scaling', 'Strategic long-term partnership']
    ],
    footnote: 'Recommendation: All 3 models preserve the same ₹45L maximum ceiling while offering flexible upfront cash flow.'
  },
  {
    layout: 'twocol',
    title: 'Pricing Summary & Store Logistics',
    subtitle: 'Scenario breakdown with and without BLE protocol consulting',
    leftTitle: 'Summary Pricing Matrix',
    leftBullets: [
      '<strong>Scenario 1 (App Only - Client Provides Protocol):</strong><br>• Option 1 (Fixed): ₹45,00,000<br>• Option 2 (Royalty): ₹30L Upfront + ₹750/unit (Max ₹45L)<br>• Option 3 (Joint): ₹30L Upfront + 15% Uplift (Max ₹45L)',
      '<strong>Scenario 2 (Full Solution w/ Protocol Consulting):</strong><br>• Option 1 (Fixed): ₹49,00,000<br>• Option 2 (Royalty): ₹34L Upfront + ₹750/unit (Max ₹49L)<br>• Option 3 (Joint): ₹34L Upfront + 15% Uplift (Max ₹49L)'
    ],
    rightTitle: 'Store & Distribution Logistics',
    rightBullets: [
      '<strong>Google Play Developer Account:</strong> $25 one-time registration fee (~₹2,100).',
      '<strong>Apple Developer Organization Program:</strong> $99 / year (~₹8,400/year).',
      '<strong>Enterprise Sideloading (B2B):</strong> Direct Android APK distribution for gym facility engineers without mandatory Play Store listing; Apple TestFlight/Business Manager for iOS enterprise pilots.'
    ]
  },
  {
    layout: 'fourcard',
    title: 'Strategic Next Steps & Phase 1 Kickoff',
    subtitle: 'Immediate roadmap to launch the Suprema+ engineering program',
    cards: [
      {
        title: '1. Hardware Team Review',
        icon: '🔌',
        body: 'Review proposal with electronics team; decide whether to include BLE Protocol Design Add-On (₹4.0L) or provide existing GATT spec.'
      },
      {
        title: '2. Select Deal Model',
        icon: '📝',
        body: 'Confirm preferred financial model: Option 1 (Fixed Fee), Option 2 (Per-Unit Royalty), or Option 3 (Joint Product).'
      },
      {
        title: '3. Approve Phase 1 Kickoff',
        icon: '🚀',
        body: 'Execute Phase 1 Statement of Work (₹6.0L or ₹10.0L) with the initial 40% kickoff tranche.'
      },
      {
        title: '4. Sprint 1 Execution',
        icon: '⚡',
        body: 'Conduct technical alignment workshop and initiate prototype Flutter mobile app development.'
      }
    ]
  },
  {
    layout: 'qa',
    title: 'Let\'s Build Suprema+ Together',
    subtitle: 'Questions & Technical Discussion',
    body: 'Thank you for the opportunity to partner with Multi Technicaa in creating India\'s premier smart steam and sauna wellness ecosystem.',
    instructorName: 'Devendra Vaja',
    instructorTitle: 'Founder & Principal Architect',
    organization: 'TenCore Digital Labs',
    location: 'Mumbai, Maharashtra, India',
    email: 'tencorelabs@gmail.com',
    web: 'www.tencorelabs.com',
    linkedin: 'https://www.linkedin.com/in/devendra-vaja/',
    qrCodeData: 'https://tencorelabs.com/pages/know-the-founder-devendra-vaja.html'
  }
];

// App State Management
let slides = [];
let currentSlideIndex = 0;
let isEditMode = false;

// Initialize Application
function init() {
  localStorage.removeItem('suprema_plus_slides_data'); // Clear legacy cache
  const savedSlides = localStorage.getItem('suprema_plus_presentation_v1');
  if (savedSlides) {
    try {
      slides = JSON.parse(savedSlides);
      slides.forEach(slide => {
        if (slide.layout === 'title') {
          slide.documentVersion = 'Version 1.0';
        }
      });
    } catch (e) {
      console.error('Error parsing stored slides, falling back to defaults:', e);
      slides = JSON.parse(JSON.stringify(DEFAULT_SLIDES));
    }
  } else {
    slides = JSON.parse(JSON.stringify(DEFAULT_SLIDES));
  }

  // Setup Event Listeners
  setupEventListeners();
  
  // Render Presentation
  renderPresentation();
  updateSlideCounter();
  
  // Window resize handler for scaling
  window.addEventListener('resize', handleResize);
  handleResize();
}

// Setup Event Listeners
function setupEventListeners() {
  // Navigation Buttons
  document.getElementById('nav-first')?.addEventListener('click', () => goToSlide(0));
  document.getElementById('nav-prev')?.addEventListener('click', prevSlide);
  document.getElementById('nav-next')?.addEventListener('click', nextSlide);
  document.getElementById('nav-last')?.addEventListener('click', () => goToSlide(slides.length - 1));
  
  // Fullscreen Button
  document.getElementById('btn-fullscreen')?.addEventListener('click', toggleFullscreen);

  // View Mode Toggles
  document.getElementById('btn-present-mode')?.addEventListener('click', () => switchMode(false));
  document.getElementById('btn-edit-mode')?.addEventListener('click', () => switchMode(true));

  // Action Buttons
  document.getElementById('btn-reset')?.addEventListener('click', resetSlides);
  document.getElementById('btn-save')?.addEventListener('click', saveSlides);
  document.getElementById('btn-export-pdf')?.addEventListener('click', exportToPDF);

  // Layout Picker & Add Slide
  const btnAddSlide = document.getElementById('btn-add-slide');
  const layoutPicker = document.getElementById('layout-picker');
  
  btnAddSlide?.addEventListener('click', (e) => {
    e.stopPropagation();
    layoutPicker.classList.toggle('open');
  });

  document.querySelectorAll('.layout-option').forEach(option => {
    option.addEventListener('click', () => {
      const layout = option.getAttribute('data-layout');
      addNewSlide(layout);
      layoutPicker.classList.remove('open');
    });
  });

  document.addEventListener('click', (e) => {
    if (!layoutPicker?.contains(e.target) && e.target !== btnAddSlide) {
      layoutPicker?.classList.remove('open');
    }
  });

  // Keyboard Navigation
  window.addEventListener('keydown', handleKeyboardNav);
}

// Keyboard Navigation Handler
function handleKeyboardNav(e) {
  if (isEditMode) return; // Disable slide keys in edit mode to allow text input

  if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
    e.preventDefault();
    nextSlide();
  } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
    e.preventDefault();
    prevSlide();
  } else if (e.key === 'Home') {
    e.preventDefault();
    goToSlide(0);
  } else if (e.key === 'End') {
    e.preventDefault();
    goToSlide(slides.length - 1);
  } else if (e.key.toLowerCase() === 'f') {
    e.preventDefault();
    toggleFullscreen();
  } else if (e.key.toLowerCase() === 'e') {
    e.preventDefault();
    switchMode(true);
  }
}

// Scale Viewport Responsively
function handleResize() {
  const container = document.querySelector('.slide-deck-viewport');
  const viewport = document.getElementById('slide-viewport');
  if (!container || !viewport || isEditMode) return;

  const baseWidth = 1120;
  const baseHeight = 630;

  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;

  const scaleX = containerWidth / baseWidth;
  const scaleY = containerHeight / baseHeight;
  const scale = Math.min(scaleX, scaleY, 1); // Max scale 1 to keep crisp

  viewport.style.transform = `scale(${scale})`;
}

// Slide Navigation
function nextSlide() {
  if (currentSlideIndex < slides.length - 1) {
    currentSlideIndex++;
    renderPresentation();
    updateSlideCounter();
  }
}

function prevSlide() {
  if (currentSlideIndex > 0) {
    currentSlideIndex--;
    renderPresentation();
    updateSlideCounter();
  }
}

function goToSlide(index) {
  if (index >= 0 && index < slides.length) {
    currentSlideIndex = index;
    renderPresentation();
    updateSlideCounter();
  }
}

function updateSlideCounter() {
  const counterText = document.getElementById('slide-counter-text');
  const progressFill = document.getElementById('slide-progress-fill');
  const btnPrev = document.getElementById('nav-prev');
  const btnNext = document.getElementById('nav-next');
  const btnFirst = document.getElementById('nav-first');
  const btnLast = document.getElementById('nav-last');

  if (counterText) {
    counterText.textContent = `${currentSlideIndex + 1} / ${slides.length}`;
  }

  if (progressFill && slides.length > 0) {
    const pct = ((currentSlideIndex + 1) / slides.length) * 100;
    progressFill.style.width = `${pct}%`;
  }

  if (btnPrev) btnPrev.disabled = (currentSlideIndex === 0);
  if (btnFirst) btnFirst.disabled = (currentSlideIndex === 0);
  if (btnNext) btnNext.disabled = (currentSlideIndex === slides.length - 1);
  if (btnLast) btnLast.disabled = (currentSlideIndex === slides.length - 1);
}

// Switch between Present & Edit Mode
function switchMode(edit) {
  isEditMode = edit;
  
  const presentView = document.getElementById('presentation-view');
  const editorView = document.getElementById('editor-view');
  const editorControls = document.querySelector('.editor-footer-controls');
  const btnPresent = document.getElementById('btn-present-mode');
  const btnEdit = document.getElementById('btn-edit-mode');

  if (edit) {
    presentView.style.display = 'none';
    editorView.style.display = 'flex';
    editorControls.style.display = 'flex';
    btnPresent.classList.remove('active');
    btnEdit.classList.add('active');
    renderEditor();
  } else {
    presentView.style.display = 'flex';
    editorView.style.display = 'none';
    editorControls.style.display = 'none';
    btnPresent.classList.add('active');
    btnEdit.classList.remove('active');
    renderPresentation();
    handleResize();
    updateSlideCounter();
  }
}

// Toggle Fullscreen Presentation
function toggleFullscreen() {
  const deck = document.querySelector('.slide-deck-viewport');
  if (!document.fullscreenElement) {
    deck?.requestFullscreen().catch(err => {
      console.warn(`Error attempting to enable full-screen mode: ${err.message}`);
    });
  } else {
    document.exitFullscreen();
  }
}

// Render Presenter View
function renderPresentation() {
  const viewport = document.getElementById('slide-viewport');
  if (!viewport || slides.length === 0) return;

  const slide = slides[currentSlideIndex];
  viewport.innerHTML = generateSlideHTML(slide, currentSlideIndex);
}

// Slide HTML Generation Engine
function generateSlideHTML(slide, index) {
  let innerContent = '';

  switch (slide.layout) {
    case 'title':
      innerContent = `
        <div class="slide slide-title-layout">
          <div class="slide-bg-glow"></div>
          <div class="title-pill-tag">
            <span>⚡ Connected Steam Ecosystem</span> • <span>Multi Technicaa</span>
          </div>
          <h1>${slide.title.replace(slide.titleHighlight || 'Smart Steam System', `<span>${slide.titleHighlight || 'Smart Steam System'}</span>`)}</h1>
          <p class="title-deck-subtitle">${slide.subtitle || ''}</p>
          
          <div class="title-meta-grid">
            <div class="title-meta-card">
              <div class="meta-label">Client Partner</div>
              <div class="meta-value">${slide.clientName || 'Multi Technicaa'}</div>
              <div class="meta-sub">${slide.clientLocation || 'Thane, Mumbai'}</div>
            </div>
            <div class="title-meta-card">
              <div class="meta-label">Engineering Partner</div>
              <div class="meta-value">${slide.preparedBy || 'Devendra Vaja'}</div>
              <div class="meta-sub">TenCore Digital Labs</div>
            </div>
            <div class="title-meta-card">
              <div class="meta-label">Submission Date</div>
              <div class="meta-value">${slide.proposalDate || 'August 2026'}</div>
              <div class="meta-sub">${slide.documentVersion || 'Master Proposal v2.0'}</div>
            </div>
          </div>

          <div class="slide-footer-tag">
            <span class="client-badge">Multi Technicaa • Confidential Executive Proposal</span>
            <span>TenCore Digital Labs © 2026</span>
          </div>
        </div>
      `;
      break;

    case 'instructor':
      innerContent = `
        <div class="slide">
          <div class="slide-bg-glow"></div>
          <div class="slide-header">
            <div class="slide-category-badge">Engineering Leadership</div>
            <h2>${slide.title}</h2>
            <div class="slide-subtitle">${slide.subtitle}</div>
          </div>
          <div class="slide-body">
            <div class="instructor-slide-grid">
              <div class="instructor-avatar-card">
                <div class="instructor-avatar-fallback">DV</div>
                <h3>${slide.instructorName}</h3>
                <p>${slide.instructorTitle}</p>
                <div style="margin-top:10px; font-size:0.75rem; color:var(--primary); font-weight:700;">📍 ${slide.instructorLocation}</div>
              </div>
              <div class="instructor-details-card">
                ${(slide.bioPoints || []).map(pt => `
                  <div class="detail-box">
                    <h4>${pt.label}</h4>
                    <p>${pt.text}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
          <div class="slide-footer-tag">
            <span>TenCore Digital Labs • Systems Architecture</span>
            <span>Slide ${index + 1} of ${slides.length}</span>
          </div>
        </div>
      `;
      break;

    case 'divider':
      innerContent = `
        <div class="slide slide-divider-layout">
          <div class="divider-badge">Section Overview</div>
          <h2>${slide.title}</h2>
          <p>${slide.description || ''}</p>
          <div class="divider-accent-bar"></div>
          ${slide.highlight ? `<div style="margin-top:20px; font-size:0.95rem; color:#93c5fd; font-weight:600;">${slide.highlight}</div>` : ''}
        </div>
      `;
      break;

    case 'twocol':
      innerContent = `
        <div class="slide">
          <div class="slide-bg-glow"></div>
          <div class="slide-header">
            <div class="slide-category-badge">Strategic Analysis</div>
            <h2>${slide.title}</h2>
            <div class="slide-subtitle">${slide.subtitle || ''}</div>
          </div>
          <div class="slide-body">
            <div class="two-col-grid">
              <div class="col-card highlight">
                <div class="col-card-header">
                  <span class="header-icon">⚙️</span>
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
                  <span class="header-icon">📈</span>
                  <h3>${slide.rightTitle}</h3>
                </div>
                <ul class="bullet-list">
                  ${(slide.rightBullets || []).map(b => `<li>${b}</li>`).join('')}
                </ul>
              </div>
            </div>
          </div>
          <div class="slide-footer-tag">
            <span>Suprema+ Smart Steam System • Multi Technicaa</span>
            <span>Slide ${index + 1} of ${slides.length}</span>
          </div>
        </div>
      `;
      break;

    case 'threecard':
      innerContent = `
        <div class="slide">
          <div class="slide-bg-glow"></div>
          <div class="slide-header">
            <div class="slide-category-badge">Market Dynamics</div>
            <h2>${slide.title}</h2>
            <div class="slide-subtitle">${slide.subtitle || ''}</div>
          </div>
          <div class="slide-body">
            <div class="three-card-grid">
              ${(slide.cards || []).map(c => `
                <div class="feature-card">
                  <div class="feature-card-icon-wrap">${c.icon || '⚡'}</div>
                  <h3>${c.title}</h3>
                  <p>${c.body}</p>
                  ${c.metric ? `<div class="feature-card-metric">${c.metric}</div>` : ''}
                </div>
              `).join('')}
            </div>
          </div>
          <div class="slide-footer-tag">
            <span>Suprema+ Smart Steam System • Multi Technicaa</span>
            <span>Slide ${index + 1} of ${slides.length}</span>
          </div>
        </div>
      `;
      break;

    case 'fourcard':
      innerContent = `
        <div class="slide">
          <div class="slide-bg-glow"></div>
          <div class="slide-header">
            <div class="slide-category-badge">Platform Capabilities</div>
            <h2>${slide.title}</h2>
            <div class="slide-subtitle">${slide.subtitle || ''}</div>
          </div>
          <div class="slide-body">
            <div class="four-card-grid">
              ${(slide.cards || []).map(c => `
                <div class="four-card-item">
                  <div class="four-card-icon">${c.icon || '📱'}</div>
                  <div class="four-card-content">
                    <h3>${c.title}</h3>
                    <p>${c.body}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
          <div class="slide-footer-tag">
            <span>Suprema+ Smart Steam System • Multi Technicaa</span>
            <span>Slide ${index + 1} of ${slides.length}</span>
          </div>
        </div>
      `;
      break;

    case 'blueprint':
      innerContent = `
        <div class="slide">
          <div class="slide-bg-glow"></div>
          <div class="slide-header">
            <div class="slide-category-badge">Execution Roadmap</div>
            <h2>${slide.title}</h2>
            <div class="slide-subtitle">${slide.subtitle || ''}</div>
          </div>
          <div class="slide-body">
            <div class="roadmap-phases-grid">
              ${(slide.steps || []).map((st, i) => `
                <div class="roadmap-phase-card ${i === 0 ? 'active-phase' : ''}">
                  <span class="phase-number-tag">${st.num || `Phase ${i+1}`}</span>
                  <div class="phase-title">${st.title}</div>
                  <div class="phase-duration-budget">${st.meta || ''}</div>
                  <ul class="phase-deliverables">
                    ${(st.bullets || []).map(b => `<li>${b}</li>`).join('')}
                  </ul>
                  ${st.payment ? `<div class="phase-payment-box">${st.payment}</div>` : ''}
                </div>
              `).join('')}
            </div>
          </div>
          <div class="slide-footer-tag">
            <span>Suprema+ Smart Steam System • Multi Technicaa</span>
            <span>Slide ${index + 1} of ${slides.length}</span>
          </div>
        </div>
      `;
      break;

    case 'table':
      innerContent = `
        <div class="slide">
          <div class="slide-bg-glow"></div>
          <div class="slide-header">
            <div class="slide-category-badge">Financial Engineering</div>
            <h2>${slide.title}</h2>
            <div class="slide-subtitle">${slide.subtitle || ''}</div>
          </div>
          <div class="slide-body">
            <div class="table-slide-wrapper">
              <table class="custom-table">
                <thead>
                  <tr>
                    ${(slide.headers || []).map(h => `<th>${h}</th>`).join('')}
                  </tr>
                </thead>
                <tbody>
                  ${(slide.rows || []).map(r => `
                    <tr>
                      ${r.map(cell => `<td>${cell}</td>`).join('')}
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
            ${slide.footnote ? `<div style="margin-top:10px; font-size:0.78rem; color:var(--text-muted); font-style:italic;">${slide.footnote}</div>` : ''}
          </div>
          <div class="slide-footer-tag">
            <span>Suprema+ Smart Steam System • Multi Technicaa</span>
            <span>Slide ${index + 1} of ${slides.length}</span>
          </div>
        </div>
      `;
      break;

    case 'pricing':
      innerContent = `
        <div class="slide">
          <div class="slide-bg-glow"></div>
          <div class="slide-header">
            <div class="slide-category-badge">Commercial Structuring</div>
            <h2>${slide.title}</h2>
            <div class="slide-subtitle">${slide.subtitle || ''}</div>
          </div>
          <div class="slide-body">
            <div class="deal-options-grid">
              ${(slide.cards || []).map(c => `
                <div class="deal-card ${c.isFeatured ? 'featured-deal' : ''}">
                  <div class="deal-card-header">
                    <div class="deal-header-top">
                      <h3>${c.title}</h3>
                      ${c.badge ? `<span class="deal-badge-tag">${c.badge}</span>` : ''}
                    </div>
                    <div class="deal-tagline">${c.tagline}</div>
                  </div>
                  <div class="deal-price-box">
                    <div class="deal-price-large">${c.price}</div>
                    <div class="deal-price-sub">${c.priceSub}</div>
                  </div>
                  <ul class="deal-bullets">
                    ${(c.bullets || []).map(b => `<li>${b}</li>`).join('')}
                  </ul>
                  ${c.pitch ? `<div class="deal-footer-pitch">${c.pitch}</div>` : ''}
                </div>
              `).join('')}
            </div>
          </div>
          <div class="slide-footer-tag">
            <span>Suprema+ Smart Steam System • Multi Technicaa</span>
            <span>Slide ${index + 1} of ${slides.length}</span>
          </div>
        </div>
      `;
      break;

    case 'qa':
      innerContent = `
        <div class="slide">
          <div class="slide-bg-glow"></div>
          <div class="slide-body">
            <div class="qa-slide-container">
              <div class="qa-left-pane">
                <div class="slide-category-badge">Direct Contact & Next Steps</div>
                <h2>${slide.title}</h2>
                <div style="font-size:1.1rem; color:var(--primary); font-weight:700; margin-bottom:6px;">${slide.subtitle || ''}</div>
                <p>${slide.body || ''}</p>

                <div class="contact-info-list">
                  <div class="contact-item">
                    <span class="contact-icon">👤</span>
                    <div class="contact-text-wrap">
                      <div class="label">Principal Architect & Founder</div>
                      <div class="val">${slide.instructorName || 'Devendra Vaja'} • <span style="color:var(--text-muted); font-weight:500;">${slide.organization || 'TenCore Digital Labs'}</span></div>
                    </div>
                  </div>

                  <div class="contact-item">
                    <span class="contact-icon">📧</span>
                    <div class="contact-text-wrap">
                      <div class="label">Direct Email</div>
                      <div class="val"><a href="mailto:${slide.email || 'tencorelabs@gmail.com'}">${slide.email || 'tencorelabs@gmail.com'}</a></div>
                    </div>
                  </div>

                  <div class="contact-item">
                    <span class="contact-icon">🌐</span>
                    <div class="contact-text-wrap">
                      <div class="label">Official Website</div>
                      <div class="val"><a href="https://${slide.web || 'www.tencorelabs.com'}" target="_blank">${slide.web || 'www.tencorelabs.com'}</a></div>
                    </div>
                  </div>

                  <div class="contact-item">
                    <span class="contact-icon">🔗</span>
                    <div class="contact-text-wrap">
                      <div class="label">LinkedIn Profile</div>
                      <div class="val"><a href="${slide.linkedin || 'https://www.linkedin.com/in/devendra-vaja/'}" target="_blank">linkedin.com/in/devendra-vaja</a></div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="qa-right-pane">
                <img src="tencore_digital_labs_logo.png" alt="TenCore Digital Labs" style="max-height:48px; margin-bottom:14px;" onerror="this.style.display='none'">
                <div class="qr-code-box">
                  <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="1.5">
                    <rect x="3" y="3" width="7" height="7" rx="1"/>
                    <rect x="14" y="3" width="7" height="7" rx="1"/>
                    <rect x="3" y="14" width="7" height="7" rx="1"/>
                    <rect x="14" y="14" width="3" height="3"/>
                    <rect x="18" y="14" width="3" height="3"/>
                    <rect x="14" y="18" width="3" height="3"/>
                    <rect x="18" y="18" width="3" height="3"/>
                    <rect x="6" y="6" width="1" height="1" fill="var(--primary)"/>
                    <rect x="17" y="6" width="1" height="1" fill="var(--primary)"/>
                    <rect x="6" y="17" width="1" height="1" fill="var(--primary)"/>
                  </svg>
                </div>
                <div class="qr-label">Founder Portfolio & Profile</div>
                <div class="qr-sub"><a href="${slide.qrCodeData || 'https://tencorelabs.com/pages/know-the-founder-devendra-vaja.html'}" target="_blank" style="color:var(--primary); text-decoration:none; font-weight:600;">tencorelabs.com/founder</a></div>
                <div style="margin-top:12px; font-size:0.75rem; color:var(--text-muted);">📍 Mumbai, Maharashtra, India</div>
              </div>
            </div>
          </div>
          <div class="slide-footer-tag">
            <span>TenCore Digital Labs • Connected Systems Engineering</span>
            <span>Slide ${index + 1} of ${slides.length}</span>
          </div>
        </div>
      `;
      break;

    default:
      innerContent = `
        <div class="slide">
          <div class="slide-header">
            <h2>${slide.title || 'Slide'}</h2>
            <div class="slide-subtitle">${slide.subtitle || ''}</div>
          </div>
          <div class="slide-body">
            <p>${slide.content || 'Content'}</p>
          </div>
        </div>
      `;
  }

  return innerContent;
}

// Render Editor View
function renderEditor() {
  const editorView = document.getElementById('editor-view');
  if (!editorView) return;

  editorView.innerHTML = slides.map((slide, index) => `
    <div class="editor-slide-card" data-index="${index}">
      <div class="editor-slide-header">
        <div class="editor-slide-index">
          <span>Slide ${index + 1}</span>
          <span class="badge-tag badge-primary">${slide.layout.toUpperCase()}</span>
        </div>
        <div class="editor-slide-actions">
          <button class="btn btn-sm" onclick="moveSlideUp(${index})" ${index === 0 ? 'disabled' : ''} title="Move Up">⬆️</button>
          <button class="btn btn-sm" onclick="moveSlideDown(${index})" ${index === slides.length - 1 ? 'disabled' : ''} title="Move Down">⬇️</button>
          <button class="btn btn-sm btn-danger" onclick="deleteSlide(${index})" title="Delete Slide">🗑️</button>
        </div>
      </div>

      <div class="editor-form">
        <div class="form-group">
          <label>Slide Title</label>
          <input type="text" class="form-input" value="${escapeHtml(slide.title || '')}" onchange="updateSlideField(${index}, 'title', this.value)">
        </div>
        
        <div class="form-group">
          <label>Slide Subtitle / Description</label>
          <input type="text" class="form-input" value="${escapeHtml(slide.subtitle || slide.description || '')}" onchange="updateSlideField(${index}, '${slide.subtitle !== undefined ? 'subtitle' : 'description'}', this.value)">
        </div>

        ${slide.layout === 'qa' ? `
          <div class="form-group">
            <label>Contact Email</label>
            <input type="text" class="form-input" value="${escapeHtml(slide.email || '')}" onchange="updateSlideField(${index}, 'email', this.value)">
          </div>
          <div class="form-group">
            <label>LinkedIn Profile URL</label>
            <input type="text" class="form-input" value="${escapeHtml(slide.linkedin || '')}" onchange="updateSlideField(${index}, 'linkedin', this.value)">
          </div>
        ` : ''}
      </div>
    </div>
  `).join('');
}

function updateSlideField(index, field, value) {
  if (slides[index]) {
    slides[index][field] = value;
  }
}

function moveSlideUp(index) {
  if (index > 0) {
    const temp = slides[index];
    slides[index] = slides[index - 1];
    slides[index - 1] = temp;
    renderEditor();
  }
}

function moveSlideDown(index) {
  if (index < slides.length - 1) {
    const temp = slides[index];
    slides[index] = slides[index + 1];
    slides[index + 1] = temp;
    renderEditor();
  }
}

function deleteSlide(index) {
  if (confirm(`Are you sure you want to delete Slide ${index + 1}?`)) {
    slides.splice(index, 1);
    if (currentSlideIndex >= slides.length) {
      currentSlideIndex = Math.max(0, slides.length - 1);
    }
    renderEditor();
  }
}

function addNewSlide(layout) {
  const newSlide = {
    layout: layout,
    title: 'New Slide Title',
    subtitle: 'New slide subtitle description',
    content: 'Add your details here.'
  };

  if (layout === 'twocol') {
    newSlide.leftTitle = 'Column 1 Title';
    newSlide.leftBullets = ['Point 1', 'Point 2'];
    newSlide.rightTitle = 'Column 2 Title';
    newSlide.rightBullets = ['Point A', 'Point B'];
  } else if (layout === 'threecard') {
    newSlide.cards = [
      { title: 'Card 1', icon: '⚡', body: 'Description 1' },
      { title: 'Card 2', icon: '🛡️', body: 'Description 2' },
      { title: 'Card 3', icon: '📈', body: 'Description 3' }
    ];
  } else if (layout === 'fourcard') {
    newSlide.cards = [
      { title: 'Feature 1', icon: '⏱️', body: 'Description 1' },
      { title: 'Feature 2', icon: '🌿', body: 'Description 2' },
      { title: 'Feature 3', icon: '🏢', body: 'Description 3' },
      { title: 'Feature 4', icon: '🛡️', body: 'Description 4' }
    ];
  }

  slides.push(newSlide);
  renderEditor();
  alert(`Added new ${layout} slide. Scroll to the bottom to edit.`);
}

// Local Storage Save & Reset
function saveSlides() {
  localStorage.setItem('suprema_plus_presentation_v1', JSON.stringify(slides));
  alert('Presentation changes saved locally in your browser!');
}

function resetSlides() {
  if (confirm('Reset presentation back to original template slides? All custom edits will be reverted.')) {
    slides = JSON.parse(JSON.stringify(DEFAULT_SLIDES));
    localStorage.removeItem('suprema_plus_presentation_v1');
    localStorage.removeItem('suprema_plus_slides_data');
    if (isEditMode) {
      renderEditor();
    } else {
      currentSlideIndex = 0;
      renderPresentation();
      updateSlideCounter();
    }
    alert('Presentation reset to original templates.');
  }
}

// Export Presentation to PDF (Prints all slides in 16:9 landscape)
function exportToPDF() {
  // Render all slides into DOM for printing
  const viewport = document.getElementById('slide-viewport');
  const originalHTML = viewport.innerHTML;
  
  viewport.innerHTML = slides.map((slide, idx) => generateSlideHTML(slide, idx)).join('');
  
  window.print();
  
  // Restore current slide after print dialog closes
  viewport.innerHTML = originalHTML;
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

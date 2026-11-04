/**
 * ============================================================================
 * MASTER PRESENTATION ENGINE (TenCore Digital Labs)
 * ============================================================================
 * Features:
 * - 7-Minute Paced Feature Presentation Engine
 * - Dynamic Network Mode Switcher (BNI vs VBN)
 * - Built-in 7-Minute Presenter Countdown / Stopwatch with Overtime Alerts
 * - Presenter Script Drawer (Hotkey 'S') with Exact Timed Talking Points
 * - 16:9 Landscape Auto-Scaling Presentation Canvas
 * - Slide Editor & LocalStorage Persistence
 * - Multi-Aspect PDF Print & Export Engine
 */

// Application State
let slides = [];
let currentSlideIndex = 0;
let isEditMode = false;
let selectedRatio = '16:9';
let printWithSlideNumbers = true;
let activeNetwork = localStorage.getItem('tencore_network_mode') || 'BNI';

// Timer State
let timerSeconds = 0;
let isTimerRunning = false;
let timerInterval = null;

// Script Drawer State
let isScriptOpen = false;

const STORAGE_KEY = (typeof DECK_META !== 'undefined' && DECK_META.storageKey) 
  ? DECK_META.storageKey 
  : 'tencore_presentation_state_v2';

// DOM Elements
const viewport = document.getElementById('slide-viewport');
const presentationView = document.getElementById('presentation-view');
const editorView = document.getElementById('editor-view');
const btnPresentMode = document.getElementById('btn-present-mode');
const btnEditMode = document.getElementById('btn-edit-mode');
const btnReset = document.getElementById('btn-reset');
const btnSave = document.getElementById('btn-save');
const btnExportPdf = document.getElementById('btn-export-pdf');
const btnFullscreen = document.getElementById('btn-fullscreen');

// Navigation Elements
const navFirst = document.getElementById('nav-first');
const navPrev = document.getElementById('nav-prev');
const navNext = document.getElementById('nav-next');
const navLast = document.getElementById('nav-last');
const slideCounterText = document.getElementById('slide-counter-text');
const slideProgressFill = document.getElementById('slide-progress-fill');

// Editor DOM Elements
const btnAddSlide = document.getElementById('btn-add-slide');
const layoutPicker = document.getElementById('layout-picker');
const editorControls = document.querySelector('.editor-footer-controls');

// Export Modal DOM Elements
const exportModal = document.getElementById('export-modal');
const btnCloseModal = document.getElementById('btn-close-modal');
const btnCancelExport = document.getElementById('btn-cancel-export');
const btnConfirmExport = document.getElementById('btn-confirm-export');
const chkPrintSlideNumbers = document.getElementById('chk-print-slide-numbers');
const ratioCards = document.querySelectorAll('.ratio-card');

// Initialize Application
function init() {
  applyThemeTokens();
  initNetworkMode();
  applyDeckHeader();
  loadSlides();
  setupEventListeners();
  initPresenterTimer();
  initScriptDrawer();
  setupViewportScaling();
  renderSlide();
}

// ----------------------------------------------------------------------------
// Network Mode Switcher (BNI vs VBN)
// ----------------------------------------------------------------------------
function initNetworkMode() {
  const btnBni = document.getElementById('btn-net-bni');
  const btnVbn = document.getElementById('btn-net-vbn');
  
  if (btnBni) btnBni.addEventListener('click', () => setNetworkMode('BNI'));
  if (btnVbn) btnVbn.addEventListener('click', () => setNetworkMode('VBN'));
  
  applyNetworkModeUI();
}

function setNetworkMode(mode) {
  activeNetwork = mode;
  localStorage.setItem('tencore_network_mode', mode);
  applyNetworkModeUI();
  applyDeckHeader();
  renderSlide();
  updateScriptDrawer();
}

function applyNetworkModeUI() {
  const btnBni = document.getElementById('btn-net-bni');
  const btnVbn = document.getElementById('btn-net-vbn');
  if (btnBni && btnVbn) {
    if (activeNetwork === 'VBN') {
      btnVbn.classList.add('active');
      btnBni.classList.remove('active');
    } else {
      btnBni.classList.add('active');
      btnVbn.classList.remove('active');
    }
  }
}

// ----------------------------------------------------------------------------
// 7-Minute Presenter Timer Logic
// ----------------------------------------------------------------------------
function initPresenterTimer() {
  const btnToggle = document.getElementById('btn-timer-toggle');
  const btnResetTimer = document.getElementById('btn-timer-reset');
  if (btnToggle) btnToggle.addEventListener('click', toggleTimer);
  if (btnResetTimer) btnResetTimer.addEventListener('click', resetTimer);
  updateTimerUI();
}

function toggleTimer() {
  if (isTimerRunning) {
    pauseTimer();
  } else {
    startTimer();
  }
}

function startTimer() {
  if (isTimerRunning) return;
  isTimerRunning = true;
  const btnToggle = document.getElementById('btn-timer-toggle');
  if (btnToggle) btnToggle.textContent = '❚❚';
  timerInterval = setInterval(() => {
    timerSeconds++;
    updateTimerUI();
  }, 1000);
}

function pauseTimer() {
  isTimerRunning = false;
  const btnToggle = document.getElementById('btn-timer-toggle');
  if (btnToggle) btnToggle.textContent = '▶';
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function resetTimer() {
  pauseTimer();
  timerSeconds = 0;
  updateTimerUI();
}

function updateTimerUI() {
  const widget = document.getElementById('presenter-timer-widget');
  const display = document.getElementById('timer-display');
  if (!display) return;

  const targetSec = (typeof DECK_META !== 'undefined' && DECK_META.targetDurationSeconds) ? DECK_META.targetDurationSeconds : 420;
  
  if (timerSeconds <= targetSec) {
    const mins = Math.floor(timerSeconds / 60);
    const secs = timerSeconds % 60;
    const timeStr = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    display.textContent = `${timeStr} / 07:00`;

    if (widget) {
      widget.classList.remove('warning', 'critical', 'overtime');
      if (timerSeconds >= 390) { // > 6:30 mins
        widget.classList.add('critical');
      } else if (timerSeconds >= 300) { // > 5:00 mins
        widget.classList.add('warning');
      }
    }
  } else {
    const overSec = timerSeconds - targetSec;
    const overMins = Math.floor(overSec / 60);
    const overSecs = overSec % 60;
    display.textContent = `+${String(overMins).padStart(2, '0')}:${String(overSecs).padStart(2, '0')} OVERTIME`;
    if (widget) {
      widget.classList.remove('warning', 'critical');
      widget.classList.add('overtime');
    }
  }
}

// ----------------------------------------------------------------------------
// Presenter Script Drawer (Hotkey 'S')
// ----------------------------------------------------------------------------
function initScriptDrawer() {
  const btnToggle = document.getElementById('btn-toggle-script');
  const btnClose = document.getElementById('btn-close-script');
  if (btnToggle) btnToggle.addEventListener('click', toggleScriptDrawer);
  if (btnClose) btnClose.addEventListener('click', () => {
    isScriptOpen = false;
    const drawer = document.getElementById('presenter-script-drawer');
    if (drawer) drawer.style.display = 'none';
  });
}

function toggleScriptDrawer() {
  isScriptOpen = !isScriptOpen;
  const drawer = document.getElementById('presenter-script-drawer');
  if (drawer) {
    drawer.style.display = isScriptOpen ? 'block' : 'none';
  }
  if (isScriptOpen) updateScriptDrawer();
}

function updateScriptDrawer() {
  const drawer = document.getElementById('presenter-script-drawer');
  if (!drawer || !slides || slides.length === 0) return;
  const slide = slides[currentSlideIndex];
  if (!slide) return;

  const slideTag = document.getElementById('script-slide-tag');
  const timeTag = document.getElementById('script-time-tag');
  const content = document.getElementById('script-content-text');

  const cleanTitle = slide.title ? slide.title.replace(/<[^>]*>/g, '') : '';
  if (slideTag) slideTag.textContent = `Slide ${currentSlideIndex + 1} of ${slides.length}: ${cleanTitle}`;
  if (timeTag) timeTag.textContent = slide.timeTarget ? `⏱️ Target: ${slide.timeTarget}` : '⏱️ Paced Timing';
  
  if (content) {
    content.innerHTML = `
      <p style="margin-bottom: 8px;"><strong>Talking Script:</strong> ${slide.script || 'Present key slide points clearly and concisely.'}</p>
      ${slide.timeTarget ? `<p style="font-size: 0.85rem; color: #94a3b8;">💡 <em>Pacing cue: Keep to ${slide.timeTarget} for smooth delivery.</em></p>` : ''}
    `;
  }
}

// Apply Theme CSS Custom Properties
function applyThemeTokens() {
  if (typeof THEME_CONFIG === 'undefined') return;
  const root = document.documentElement;
  if (THEME_CONFIG.primary) root.style.setProperty('--primary', THEME_CONFIG.primary);
  if (THEME_CONFIG.primaryDark) root.style.setProperty('--primary-dark', THEME_CONFIG.primaryDark);
  if (THEME_CONFIG.primaryLight) root.style.setProperty('--primary-light', THEME_CONFIG.primaryLight);
  if (THEME_CONFIG.secondary) root.style.setProperty('--secondary', THEME_CONFIG.secondary);
  if (THEME_CONFIG.accent) root.style.setProperty('--accent', THEME_CONFIG.accent);
  if (THEME_CONFIG.bgBody) root.style.setProperty('--bg-body', THEME_CONFIG.bgBody);
  if (THEME_CONFIG.bgCard) root.style.setProperty('--bg-card', THEME_CONFIG.bgCard);
  if (THEME_CONFIG.textPrimary) root.style.setProperty('--text-primary', THEME_CONFIG.textPrimary);
  if (THEME_CONFIG.textSecondary) root.style.setProperty('--text-secondary', THEME_CONFIG.textSecondary);
}

// Apply Header Deck Titles
function applyDeckHeader() {
  if (typeof DECK_META === 'undefined') return;
  const titleEl = document.getElementById('header-deck-title');
  const subEl = document.getElementById('header-deck-subtitle');
  const netConf = (typeof NETWORK_CONFIG !== 'undefined' && NETWORK_CONFIG[activeNetwork]) 
    ? NETWORK_CONFIG[activeNetwork] 
    : null;

  if (titleEl) {
    titleEl.textContent = netConf ? netConf.headerTitle : `${DECK_META.title} • Feature Presentation`;
  }
  if (subEl && DECK_META.subtitle) {
    subEl.textContent = `${BRAND_CONFIG.companyName} • ${DECK_META.subtitle}`;
  }
  if (DECK_META.title) {
    document.title = `${DECK_META.title} | ${BRAND_CONFIG.companyName}`;
  }
}

// Load Slides from LocalStorage or Defaults
function loadSlides() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length === DEFAULT_SLIDES.length) {
        slides = parsed;
        return;
      }
    }
  } catch (e) {
    console.warn('Failed to load slides from localStorage:', e);
  }
  slides = JSON.parse(JSON.stringify(DEFAULT_SLIDES));
}

// Save Slides to LocalStorage
function saveSlides() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(slides));
    alert('Presentation saved successfully!');
  } catch (e) {
    alert('Error saving slides: ' + e.message);
  }
}

// Setup Viewport Scaling for 16:9 Canvas
function setupViewportScaling() {
  function adjustScale() {
    if (isEditMode) return;
    const container = document.querySelector('.slide-deck-viewport');
    if (!container || !viewport) return;

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const targetWidth = 1120;
    const targetHeight = 630;

    const scaleX = containerWidth / targetWidth;
    const scaleY = containerHeight / targetHeight;
    const scale = Math.min(scaleX, scaleY, 1.0);

    viewport.style.transform = `scale(${scale})`;
  }

  window.addEventListener('resize', adjustScale);
  adjustScale();
}

// Render Current Slide
function renderSlide() {
  if (!slides || slides.length === 0) return;
  
  if (currentSlideIndex < 0) currentSlideIndex = 0;
  if (currentSlideIndex >= slides.length) currentSlideIndex = slides.length - 1;

  const currentSlide = slides[currentSlideIndex];
  viewport.innerHTML = generateSlideHTML(currentSlide, currentSlideIndex);

  // Update navigation chrome
  slideCounterText.textContent = `${currentSlideIndex + 1} / ${slides.length}`;
  const progressPercent = ((currentSlideIndex + 1) / slides.length) * 100;
  slideProgressFill.style.width = `${progressPercent}%`;

  navFirst.disabled = currentSlideIndex === 0;
  navPrev.disabled = currentSlideIndex === 0;
  navNext.disabled = currentSlideIndex === slides.length - 1;
  navLast.disabled = currentSlideIndex === slides.length - 1;

  // Update presenter script drawer if open
  if (isScriptOpen) {
    updateScriptDrawer();
  }
}

// Helper: Common Footer HTML
function renderFooter(index) {
  const company = (typeof BRAND_CONFIG !== 'undefined' && BRAND_CONFIG.companyName) ? BRAND_CONFIG.companyName : 'TenCore Digital Labs';
  const confidential = (typeof BRAND_CONFIG !== 'undefined' && BRAND_CONFIG.confidentialLabel) ? BRAND_CONFIG.confidentialLabel : 'FEATURE PRESENTATION';
  return `
    <div class="slide-footer-tag">
      <span>${company} • Feature Presentation</span>
      <span class="confidential-tag">${confidential}</span>
      <span>Slide ${index + 1} of ${slides.length}</span>
    </div>
  `;
}

// Generate Slide HTML based on Layout
function generateSlideHTML(slide, index, extraClass = '') {
  let innerContent = '';
  const cls = extraClass ? ` ${extraClass}` : '';
  const confidential = (typeof BRAND_CONFIG !== 'undefined' && BRAND_CONFIG.confidentialLabel) ? BRAND_CONFIG.confidentialLabel : 'FEATURE PRESENTATION';
  const company = (typeof BRAND_CONFIG !== 'undefined' && BRAND_CONFIG.companyName) ? BRAND_CONFIG.companyName : 'TenCore Digital Labs';
  const copyright = (typeof BRAND_CONFIG !== 'undefined' && BRAND_CONFIG.copyright) ? BRAND_CONFIG.copyright : 'TenCore Digital Labs © 2026';

  const netConf = (typeof NETWORK_CONFIG !== 'undefined' && NETWORK_CONFIG[activeNetwork]) ? NETWORK_CONFIG[activeNetwork] : null;

  switch (slide.layout) {
    case 'title':
      const titlePill = netConf ? netConf.pillTag : (slide.pillTag || (typeof DECK_META !== 'undefined' ? DECK_META.pillTag : '🤝 Feature Presentation'));
      const metaSubText = netConf ? netConf.metaSub : 'Business Network Feature';
      
      innerContent = `
        <div class="slide${cls} slide-title-layout">
          <div class="slide-bg-glow"></div>
          <div class="title-top-brand-row">
            <img src="Pics/tencore_digital_labs_logo.png" alt="TenCore Digital Labs" class="title-slide-logo" onerror="this.style.display='none'">
            <div class="title-pill-tag">${titlePill}</div>
          </div>
          <h1>${slide.title}</h1>
          <div class="title-deck-subtitle">${slide.subtitle || ''}</div>
          <div class="title-meta-grid">
            ${(slide.meta || []).map((m, mIdx) => `
              <div class="title-meta-card">
                <div class="meta-label">${m.label}</div>
                <div class="meta-value">${m.value}</div>
                <div class="meta-sub">${mIdx === 2 ? metaSubText : m.sub}</div>
              </div>
            `).join('')}
          </div>
          <div class="slide-footer-tag">
            <span>${company} • Feature Presentation</span>
            <span class="confidential-tag">${confidential}</span>
            <span>${copyright}</span>
          </div>
        </div>
      `;
      break;

    case 'instructor':
      const f = (typeof BRAND_CONFIG !== 'undefined' && BRAND_CONFIG.founder) ? BRAND_CONFIG.founder : {};
      const name = slide.instructorName || f.name || 'Devendra Vaja';
      const role = slide.instructorRole || (f.role ? `${f.role} • ${f.company}` : 'Founder & Principal Systems Architect');
      const tagline = slide.instructorTagline || f.tagline || '';
      const pillars = slide.instructorPillars || f.pillars || [];
      const highlights = slide.highlights || [];
      const companies = slide.companies || [];
      const companiesTitle = slide.companiesTitle || 'Global Enterprise Engineering Experience:';

      let rightPaneContent = '';
      if (highlights.length > 0) {
        rightPaneContent = `
          <div class="instructor-highlights-list">
            ${highlights.map(h => `
              <div class="instructor-highlight-item ${h.desc ? 'has-desc' : ''}">
                <div class="instructor-highlight-icon">✓</div>
                <div class="instructor-highlight-text">
                  <h4>${h.title}</h4>
                  ${h.desc ? `<p>${h.desc}</p>` : ''}
                </div>
              </div>
            `).join('')}
          </div>
          ${companies.length > 0 ? `
            <div class="company-pedigree-section">
              <div class="company-pedigree-header">
                <span>🏢</span> ${companiesTitle}
              </div>
              <div class="company-logo-grid">
                ${companies.map(c => {
                  const cName = typeof c === 'object' ? c.name : c;
                  const cLogo = typeof c === 'object' ? c.logo : null;
                  return `
                    <div class="company-badge-pill" title="${cName}">
                      ${cLogo ? `<img src="${cLogo}" alt="${cName}" class="company-pill-logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='inline';"><span class="company-pill-text" style="display:none;">${cName}</span>` : `<span class="company-pill-text">${cName}</span>`}
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          ` : ''}
        `;
      } else {
        rightPaneContent = `
          ${pillars.map(p => `
            <div class="detail-box">
              <h4>${p.title}</h4>
              <p>${p.desc}</p>
            </div>
          `).join('')}
        `;
      }

      innerContent = `
        <div class="slide${cls}">
          <div class="slide-bg-glow"></div>
          <div class="slide-header">
            <div class="slide-category-badge">${slide.categoryBadge || 'Leadership & Engineering Track Record'}</div>
            <h2>${slide.title}</h2>
            <div class="slide-subtitle">${slide.subtitle || ''}</div>
          </div>
          <div class="slide-body">
            <div class="instructor-slide-grid">
              <div class="instructor-avatar-card">
                <img src="Pics/devendra_vaja.jpeg" alt="${name}" class="instructor-avatar-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="instructor-avatar-fallback" style="display:none;">${f.avatarInitials || 'DV'}</div>
                <h3>${name}</h3>
                <p>${role}</p>
                ${tagline ? `<div class="instructor-tagline-text">${tagline}</div>` : ''}
                <div class="instructor-global-flags">
                  <div class="global-flag-pill" title="India Systems & Architecture">
                    <img src="Pics/flags/india.svg" alt="India" class="flag-img">
                    <span>India</span>
                  </div>
                  <div class="global-flag-pill" title="Tokyo Gaming & Device Drivers">
                    <img src="Pics/flags/japan.svg" alt="Japan" class="flag-img">
                    <span>Japan</span>
                  </div>
                  <div class="global-flag-pill" title="US Enterprise Systems">
                    <img src="Pics/flags/usa.svg" alt="USA" class="flag-img">
                    <span>USA</span>
                  </div>
                </div>
              </div>
              <div class="instructor-details-card">
                ${rightPaneContent}
              </div>
            </div>
          </div>
          ${renderFooter(index)}
        </div>
      `;
      break;

    case 'divider':
      innerContent = `
        <div class="slide${cls} slide-divider-layout">
          <div class="slide-bg-glow"></div>
          <div class="divider-badge">${slide.badge || 'SECTION'}</div>
          <h2>${slide.title}</h2>
          <p>${slide.subtitle || ''}</p>
          <div class="divider-accent-bar"></div>
          ${renderFooter(index)}
        </div>
      `;
      break;

    case 'showcase':
      const isImgRight = slide.imagePosition === 'right';
      const showcaseImgHTML = `
        <div class="showcase-media-card">
          ${slide.imageBadge ? `<div class="showcase-media-badge">${slide.imageBadge}</div>` : ''}
          <div class="showcase-media-frame">
            <img src="${slide.image}" alt="${slide.title}" class="showcase-img" onerror="this.style.display='none'">
          </div>
          ${slide.imageCaption ? `<div class="showcase-media-caption">${slide.imageCaption}</div>` : ''}
        </div>
      `;
      const showcaseContentHTML = `
        <div class="showcase-content-card ${slide.highlight ? 'highlight' : ''}">
          ${slide.cardBadge ? `<div class="showcase-card-badge">${slide.cardBadge}</div>` : ''}
          ${slide.cardTitle ? `<h3>${slide.cardTitle}</h3>` : ''}
          <ul class="bullet-list showcase-bullet-list">
            ${(slide.bullets || []).map(b => `<li>${b}</li>`).join('')}
          </ul>
          ${slide.callout ? `
            <div class="showcase-callout-pill">
              <span class="callout-icon">${slide.callout.icon || '⚡'}</span>
              <span class="callout-text">${slide.callout.text}</span>
            </div>
          ` : ''}
        </div>
      `;

      let showcaseCat = slide.categoryBadge || 'Product Capabilities';
      if (slide.categoryBadge && slide.categoryBadge.includes('Ask')) {
        showcaseCat = netConf ? netConf.askBadge : slide.categoryBadge;
      }

      innerContent = `
        <div class="slide${cls}">
          <div class="slide-bg-glow"></div>
          <div class="slide-header">
            <div class="slide-category-badge">${showcaseCat}</div>
            <h2>${slide.title}</h2>
            <div class="slide-subtitle">${slide.subtitle || ''}</div>
          </div>
          <div class="slide-body">
            <div class="showcase-grid ${isImgRight ? 'img-right' : 'img-left'}">
              ${isImgRight ? showcaseContentHTML + showcaseImgHTML : showcaseImgHTML + showcaseContentHTML}
            </div>
          </div>
          ${renderFooter(index)}
        </div>
      `;
      break;

    case 'vision-mission':
      innerContent = `
        <div class="slide${cls}">
          <div class="slide-bg-glow"></div>
          <div class="slide-header">
            <div class="slide-category-badge">${slide.categoryBadge || 'Corporate Purpose'}</div>
            <h2>${slide.title}</h2>
            <div class="slide-subtitle">${slide.subtitle || ''}</div>
          </div>
          <div class="slide-body">
            <div class="vision-mission-grid">
              <div class="vm-card vision-card">
                <div class="vm-card-header">
                  <div class="vm-icon-wrap">🔭</div>
                  <div>
                    <span class="vm-badge">THE FUTURE WE BUILD</span>
                    <h3>Our Vision</h3>
                  </div>
                </div>
                <div class="vm-statement">
                  "${slide.vision.statement}"
                </div>
                <ul class="bullet-list vm-bullet-list">
                  ${(slide.vision.bullets || []).map(b => `<li>${b}</li>`).join('')}
                </ul>
              </div>

              <div class="vm-card mission-card highlight">
                <div class="vm-card-header">
                  <div class="vm-icon-wrap">🎯</div>
                  <div>
                    <span class="vm-badge badge-primary">WHAT WE DELIVER DAILY</span>
                    <h3>Our Mission</h3>
                  </div>
                </div>
                <div class="vm-statement">
                  "${slide.mission.statement}"
                </div>
                <ul class="bullet-list vm-bullet-list">
                  ${(slide.mission.bullets || []).map(b => `<li>${b}</li>`).join('')}
                </ul>
              </div>
            </div>
          </div>
          ${renderFooter(index)}
        </div>
      `;
      break;

    case 'sixgrid':
      innerContent = `
        <div class="slide${cls}">
          <div class="slide-bg-glow"></div>
          <div class="slide-header">
            <div class="slide-category-badge">${slide.categoryBadge || 'Platform Architecture'}</div>
            <h2>${slide.title}</h2>
            <div class="slide-subtitle">${slide.subtitle || ''}</div>
          </div>
          <div class="slide-body">
            <div class="six-grid-container">
              ${(slide.cards || []).map(c => `
                <div class="six-grid-card ${c.highlight ? 'highlight' : ''}">
                  <div class="six-card-top">
                    ${c.logo ? `<img src="${c.logo}" alt="${c.title}" class="six-card-logo">` : `<div class="six-card-icon">${c.icon || '📌'}</div>`}
                    ${c.tag ? `<span class="six-card-tag">${c.tag}</span>` : ''}
                  </div>
                  <h3>${c.title}</h3>
                  <p>${c.desc || c.body}</p>
                </div>
              `).join('')}
            </div>
          </div>
          ${renderFooter(index)}
        </div>
      `;
      break;

    case 'twocol':
      const renderColContent = (col) => {
        if (col.items && col.items.length > 0) {
          return `
            <div class="industry-tile-list">
              ${col.items.map(it => `
                <div class="industry-tile">
                  <div class="industry-tile-icon-wrap" style="${it.bg ? `background:${it.bg}; border-color:${it.border || it.bg};` : ''}">
                    <span>${it.icon || '💼'}</span>
                  </div>
                  <div class="industry-tile-content">
                    <h4>${it.title}</h4>
                    ${it.desc ? `<p>${it.desc}</p>` : ''}
                  </div>
                </div>
              `).join('')}
            </div>
          `;
        }
        return `
          <ul class="bullet-list">
            ${(col.bullets || []).map(b => `<li>${b}</li>`).join('')}
          </ul>
        `;
      };

      let categoryBadge = slide.categoryBadge || 'Industry Analysis & Solutions';
      if (slide.categoryBadge && slide.categoryBadge.includes('Ask')) {
        categoryBadge = netConf ? netConf.askBadge : slide.categoryBadge;
      }

      innerContent = `
        <div class="slide${cls}">
          <div class="slide-bg-glow"></div>
          <div class="slide-header">
            <div class="slide-category-badge">${categoryBadge}</div>
            <h2>${slide.title}</h2>
            <div class="slide-subtitle">${slide.subtitle || ''}</div>
          </div>
          <div class="slide-body">
            <div class="two-col-grid">
              <div class="col-card">
                <div class="col-header">
                  <h3>${slide.leftCol.title}</h3>
                  <span class="col-badge">${slide.leftCol.badge || 'WORKFLOWS'}</span>
                </div>
                ${renderColContent(slide.leftCol)}
              </div>
              <div class="col-card highlight">
                <div class="col-header">
                  <h3>${slide.rightCol.title}</h3>
                  <span class="col-badge badge-primary">${slide.rightCol.badge || 'SERVICES'}</span>
                </div>
                ${renderColContent(slide.rightCol)}
              </div>
            </div>
          </div>
          ${renderFooter(index)}
        </div>
      `;
      break;

    case 'threecard':
      const productBadge = slide.productBadge;
      const videoLink = slide.videoLink;
      innerContent = `
        <div class="slide${cls}">
          <div class="slide-bg-glow"></div>
          <div class="slide-header">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 6px;">
              <div class="slide-category-badge">${slide.categoryBadge || 'Core Architecture & Capabilities'}</div>
              <div class="slide-header-right-tools">
                ${productBadge ? `
                  <div class="slide-header-product-badge">
                    <img src="${productBadge.icon}" alt="${productBadge.name}" class="product-badge-thumb">
                    <span>${productBadge.name}</span>
                  </div>
                ` : ''}
                ${videoLink ? `
                  <a href="${videoLink.url}" target="_blank" rel="noopener" class="slide-header-video-btn" title="Click to watch demo video on YouTube">
                    <span class="video-play-icon">▶</span>
                    <span>${videoLink.label || 'Watch Demo Video'}</span>
                    ${videoLink.qr ? `<img src="${videoLink.qr}" alt="Scan QR" class="video-qr-thumb">` : ''}
                  </a>
                ` : ''}
              </div>
            </div>
            <h2>${slide.title}</h2>
            <div class="slide-subtitle">${slide.subtitle || ''}</div>
          </div>
          <div class="slide-body">
            <div class="three-card-grid">
              ${(slide.cards || []).map(c => `
                <div class="feature-card ${c.illustration ? 'has-illustration' : ''}">
                  <div class="feature-card-top-row">
                    <div class="feature-card-icon-wrap">${c.icon || '⚡'}</div>
                    ${c.metric ? `<div class="feature-card-metric-pill">${c.metric}</div>` : ''}
                  </div>
                  <h3>${c.title}</h3>
                  <p>${c.body}</p>
                  ${c.illustration ? `
                    <div class="feature-card-illustration">
                      <img src="${c.illustration}" alt="${c.title}" class="card-illustration-img">
                    </div>
                  ` : (c.metric ? `<div class="feature-card-metric">${c.metric}</div>` : '')}
                </div>
              `).join('')}
            </div>
          </div>
          ${renderFooter(index)}
        </div>
      `;
      break;

    case 'fourcard':
      let fourCardCat = slide.categoryBadge || 'Strategic Value & Market Focus';
      if (slide.categoryBadge && slide.categoryBadge.includes('Ask')) {
        fourCardCat = netConf ? netConf.askBadge : slide.categoryBadge;
      }
      innerContent = `
        <div class="slide${cls}">
          <div class="slide-bg-glow"></div>
          <div class="slide-header">
            <div class="slide-category-badge">${fourCardCat}</div>
            <h2>${slide.title}</h2>
            <div class="slide-subtitle">${slide.subtitle || ''}</div>
          </div>
          <div class="slide-body">
            <div class="four-card-grid">
              ${(slide.cards || []).map(c => `
                <div class="four-card-item">
                  <div class="four-card-icon">${c.icon || '📌'}</div>
                  <div class="four-card-content">
                    ${c.badge ? `<span class="four-card-badge">${c.badge}</span>` : ''}
                    <h3>${c.title}</h3>
                    <p>${c.body || c.desc}</p>
                  </div>
                </div>
              `).join('')}
            </div>
            ${slide.triggerBox ? `
              <div class="four-card-trigger-box">
                <span class="trigger-icon">${slide.triggerBox.icon || '🗣️'}</span>
                <div class="trigger-content">
                  <span class="trigger-label">${slide.triggerBox.label || 'CONVERSATIONS TO LISTEN FOR:'}</span>
                  <span class="trigger-quote">"${slide.triggerBox.quote}"</span>
                </div>
              </div>
            ` : ''}
          </div>
          ${renderFooter(index)}
        </div>
      `;
      break;

    case 'differentiators':
      innerContent = `
        <div class="slide${cls}">
          <div class="slide-bg-glow"></div>
          <div class="slide-header">
            <div class="slide-category-badge">${slide.categoryBadge || 'Competitive Advantage & System Stack'}</div>
            <h2>${slide.title}</h2>
            <div class="slide-subtitle">${slide.subtitle || ''}</div>
          </div>
          <div class="slide-body">
            <div class="differentiator-grid">
              <div class="diff-features-list">
                ${(slide.features || []).map(f => `
                  <div class="diff-feature-item">
                    <div class="diff-check-icon">✓</div>
                    <div class="diff-feature-content">
                      <h3>${f.title}</h3>
                      <p>${f.desc}</p>
                    </div>
                  </div>
                `).join('')}
              </div>
              <div class="diff-stack-container">
                ${(slide.stack || []).map((layer, idx) => `
                  <div class="diff-stack-layer ${layer.highlight ? 'layer-highlight' : ''} ${layer.dark ? 'layer-dark' : ''}">
                    <div class="diff-layer-label">${layer.label}</div>
                    <div class="diff-layer-title">${layer.title}</div>
                  </div>
                  ${idx < slide.stack.length - 1 ? '<div class="diff-stack-arrow">↓</div>' : ''}
                `).join('')}
              </div>
            </div>
          </div>
          ${renderFooter(index)}
        </div>
      `;
      break;

    case 'blueprint':
      innerContent = `
        <div class="slide${cls}">
          <div class="slide-bg-glow"></div>
          <div class="slide-header">
            <div class="slide-category-badge">${slide.categoryBadge || 'The 30-Minute Transformation'}</div>
            <h2>${slide.title}</h2>
            <div class="slide-subtitle">${slide.subtitle || ''}</div>
          </div>
          <div class="slide-body">
            <div class="roadmap-phases-grid">
              ${(slide.phases || []).map((p, pIdx) => `
                <div class="roadmap-phase-card ${pIdx === 0 ? 'active-phase' : ''}">
                  <div class="phase-number-tag phase-badge">${p.phase}</div>
                  <div class="phase-title">${p.title}</div>
                  <div class="phase-duration-budget">
                    <span>⏱️ ${p.duration}</span>
                    <span>📦 ${p.budget}</span>
                  </div>
                  <ul class="phase-deliverables">
                    ${(p.deliverables || p.bullets || []).map(d => `<li>${d}</li>`).join('')}
                  </ul>
                  ${p.payment ? `<div class="phase-payment-box">${p.payment}</div>` : ''}
                </div>
              `).join('')}
            </div>
          </div>
          ${renderFooter(index)}
        </div>
      `;
      break;

    case 'table':
      innerContent = `
        <div class="slide${cls}">
          <div class="slide-bg-glow"></div>
          <div class="slide-header">
            <div class="slide-category-badge">${slide.categoryBadge || 'Comparative Analysis & Value Stack'}</div>
            <h2>${slide.title}</h2>
            <div class="slide-subtitle">${slide.subtitle || ''}</div>
          </div>
          <div class="slide-body">
            <div class="table-slide-wrapper">
              <table class="custom-table">
                <thead>
                  <tr>
                    ${(slide.columns || []).map(col => {
                      const isCentered = col.toLowerCase().includes('effort') || col.toLowerCase().includes('days') || col.toLowerCase().includes('cost');
                      return `<th style="${isCentered ? 'text-align: center;' : ''}">${col}</th>`;
                    }).join('')}
                  </tr>
                </thead>
                <tbody>
                  ${(slide.rows || []).map((row, rIdx) => {
                    const isTotalRow = (rIdx === slide.rows.length - 1 && (row[0] || '').includes('TOTAL'));
                    return `
                      <tr class="${isTotalRow ? 'table-total-row' : ''}">
                        ${(slide.columns || []).map((_, cIdx) => {
                          const cell = row[cIdx] !== undefined ? row[cIdx] : '';
                          const colName = (slide.columns[cIdx] || '').toLowerCase();
                          const isCentered = colName.includes('effort') || colName.includes('days') || colName.includes('cost');
                          const alignStyle = isCentered ? 'text-align: center;' : '';
                          if (cIdx === 0 && !cell.includes('<strong') && !isTotalRow) return `<td><strong>${cell}</strong></td>`;
                          return `<td style="${alignStyle}">${cell}</td>`;
                        }).join('')}
                      </tr>
                    `;
                  }).join('')}
                </tbody>
              </table>
            </div>
          </div>
          ${renderFooter(index)}
        </div>
      `;
      break;

    case 'pricing':
      innerContent = `
        <div class="slide${cls}">
          <div class="slide-bg-glow"></div>
          <div class="slide-header">
            <div class="slide-category-badge">${slide.categoryBadge || 'Commercial Scope & Investment Tiers'}</div>
            <h2>${slide.title}</h2>
            <div class="slide-subtitle">${slide.subtitle || ''}</div>
          </div>
          <div class="slide-body">
            <div class="pricing-card-grid">
              ${(slide.cards || []).map(card => `
                <div class="pricing-card ${card.featured ? 'featured' : ''}">
                  ${card.badge ? `<div class="pricing-tier-badge">${card.badge}</div>` : ''}
                  <div class="pricing-header">
                    <h3>${card.title}</h3>
                    <div class="price-display">
                      <span class="currency">₹</span>
                      <span class="amount">${card.price.replace('₹', '')}</span>
                      <span class="period">${card.priceSub ? `/ ${card.priceSub}` : '/ month'}</span>
                    </div>
                    ${card.tagline ? `<div class="pricing-tagline">${card.tagline}</div>` : ''}
                  </div>
                  <div class="pricing-bullets">
                    <ul>
                      ${(card.bullets || []).map(b => `<li>${b}</li>`).join('')}
                    </ul>
                  </div>
                  ${card.footerPitch ? `<div class="pricing-footer-pitch">${card.footerPitch}</div>` : ''}
                </div>
              `).join('')}
            </div>
          </div>
          ${renderFooter(index)}
        </div>
      `;
      break;

    case 'qa':
      const cInfo = slide.contactInfo || (typeof BRAND_CONFIG !== 'undefined' && BRAND_CONFIG.contact ? BRAND_CONFIG.contact.items : []);
      const qrL = slide.qrLabel || (typeof BRAND_CONFIG !== 'undefined' && BRAND_CONFIG.contact ? BRAND_CONFIG.contact.qrLabel : 'Contact Info');
      const qrS = slide.qrSub || (typeof BRAND_CONFIG !== 'undefined' && BRAND_CONFIG.contact ? BRAND_CONFIG.contact.qrSub : 'Scan to connect');
      const qaBadge = netConf ? netConf.giveBadge : (slide.categoryBadge || 'Givers Gain • 1-to-1 Booking');
      const giveTitle = netConf ? netConf.giveTitle : (slide.giveHighlight ? slide.giveHighlight.title : 'My Give to Chapter Members (Givers Gain):');

      innerContent = `
        <div class="slide${cls}">
          <div class="slide-bg-glow"></div>
          <div class="slide-body" style="height: 100%;">
            <div class="qa-slide-container">
              <div class="qa-left-pane">
                <div class="slide-category-badge" style="width: fit-content;">${qaBadge}</div>
                <h2>${slide.title}</h2>
                <p>${slide.subtitle || ''}</p>
                <div class="contact-info-list">
                  ${cInfo.map((c, cIdx) => `
                    <div class="contact-item ${cIdx === cInfo.length - 1 && cInfo.length % 2 !== 0 ? 'span-two' : ''}">
                      <span class="contact-icon">${c.icon}</span>
                      <div class="contact-text-wrap">
                        <span class="label">${c.label}</span>
                        <span class="val">${c.val}</span>
                      </div>
                    </div>
                  `).join('')}
                </div>
                ${slide.giveHighlight ? `
                  <div class="qa-give-highlight-box">
                    <div class="give-highlight-title">${giveTitle}</div>
                    ${slide.giveHighlight.featuredMember ? `
                      <div class="give-featured-member-card">
                        <div class="gfm-icon-badge">${slide.giveHighlight.featuredMember.icon || '🥗'}</div>
                        <div class="gfm-content">
                          <div class="gfm-header-row">
                            <span class="gfm-tag">${slide.giveHighlight.featuredMember.tag || 'CHAPTER MEMBER GIVE'}</span>
                            <span class="gfm-role-pill">${slide.giveHighlight.featuredMember.category || 'Nutritionist'}</span>
                          </div>
                          <div class="gfm-name">${slide.giveHighlight.featuredMember.name}</div>
                          <div class="gfm-desc">${slide.giveHighlight.featuredMember.desc}</div>
                        </div>
                      </div>
                    ` : ''}
                    <ul class="give-highlight-list">
                      ${(slide.giveHighlight.items || []).map(it => `<li>${it}</li>`).join('')}
                    </ul>
                  </div>
                ` : ''}
              </div>
              <div class="qa-right-pane">
                <img src="Pics/tencore_digital_labs_logo.png" alt="TenCore Digital Labs" class="qa-studio-logo" onerror="this.style.display='none'">
                <div class="qr-code-box">
                  <img src="Pics/executive_contact_qr.png" alt="Scan to add contact" class="qr-img" width="124" height="124">
                </div>
                <div class="qr-label">${qrL}</div>
                <div class="qr-sub">${qrS}</div>
                <div class="qa-cta-badge">⚡ Live 60-Sec PDF Demo at our 1-to-1</div>
              </div>
            </div>
          </div>
          ${renderFooter(index)}
        </div>
      `;
      break;

    default:
      innerContent = `<div class="slide${cls}"><h2>${slide.title}</h2></div>`;
  }

  return innerContent;
}

// Setup Event Listeners
function setupEventListeners() {
  // Navigation
  navFirst.addEventListener('click', () => { currentSlideIndex = 0; renderSlide(); });
  navPrev.addEventListener('click', () => { if (currentSlideIndex > 0) { currentSlideIndex--; renderSlide(); } });
  navNext.addEventListener('click', () => { if (currentSlideIndex < slides.length - 1) { currentSlideIndex++; renderSlide(); } });
  navLast.addEventListener('click', () => { currentSlideIndex = slides.length - 1; renderSlide(); });

  // View Mode Switching
  btnPresentMode.addEventListener('click', switchToPresentMode);
  btnEditMode.addEventListener('click', switchToEditMode);

  // Persistence Actions
  btnReset.addEventListener('click', () => {
    if (confirm('Reset presentation to default template? Unsaved edits will be discarded.')) {
      localStorage.removeItem(STORAGE_KEY);
      slides = JSON.parse(JSON.stringify(DEFAULT_SLIDES));
      currentSlideIndex = 0;
      if (isEditMode) renderEditor();
      else renderSlide();
    }
  });

  btnSave.addEventListener('click', saveSlides);

  // Fullscreen
  btnFullscreen.addEventListener('click', toggleFullscreen);

  // Keyboard Navigation
  window.addEventListener('keydown', (e) => {
    if (isEditMode) return;
    if (exportModal.style.display !== 'none') {
      if (e.key === 'Escape') closeExportModal();
      return;
    }

    // Toggle Script Drawer with 'S' or 's'
    if (e.key === 's' || e.key === 'S') {
      if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        e.preventDefault();
        toggleScriptDrawer();
        return;
      }
    }

    // Toggle Timer with 'T' or 't'
    if (e.key === 't' || e.key === 'T') {
      if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        e.preventDefault();
        if (e.shiftKey) {
          resetTimer();
        } else {
          toggleTimer();
        }
        return;
      }
    }

    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
      e.preventDefault();
      if (currentSlideIndex < slides.length - 1) { currentSlideIndex++; renderSlide(); }
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      e.preventDefault();
      if (currentSlideIndex > 0) { currentSlideIndex--; renderSlide(); }
    } else if (e.key === 'Home') {
      e.preventDefault();
      currentSlideIndex = 0;
      renderSlide();
    } else if (e.key === 'End') {
      e.preventDefault();
      currentSlideIndex = slides.length - 1;
      renderSlide();
    } else if (e.key === 'f' || e.key === 'F') {
      e.preventDefault();
      toggleFullscreen();
    }
  });

  // Layout Picker for New Slide
  btnAddSlide.addEventListener('click', (e) => {
    e.stopPropagation();
    layoutPicker.style.display = layoutPicker.style.display === 'flex' ? 'none' : 'flex';
  });

  document.addEventListener('click', (e) => {
    if (!layoutPicker.contains(e.target) && e.target !== btnAddSlide) {
      layoutPicker.style.display = 'none';
    }
  });

  document.querySelectorAll('.layout-option').forEach(opt => {
    opt.addEventListener('click', () => {
      const layout = opt.dataset.layout;
      addNewSlide(layout);
      layoutPicker.style.display = 'none';
    });
  });

  // Export Modal Handlers
  btnExportPdf.addEventListener('click', openExportModal);
  btnCloseModal.addEventListener('click', closeExportModal);
  btnCancelExport.addEventListener('click', closeExportModal);
  btnConfirmExport.addEventListener('click', executePrint);

  ratioCards.forEach(card => {
    card.addEventListener('click', () => {
      ratioCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      const radio = card.querySelector('input[type="radio"]');
      if (radio) {
        radio.checked = true;
        selectedRatio = radio.value;
      }
    });
  });

  chkPrintSlideNumbers.addEventListener('change', (e) => {
    printWithSlideNumbers = e.target.checked;
  });
}

// Fullscreen Mode Handler
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(err => {
      console.warn('Error attempting to enable fullscreen:', err.message);
    });
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

// Mode Switchers
function switchToPresentMode() {
  isEditMode = false;
  btnPresentMode.classList.add('active');
  btnEditMode.classList.remove('active');
  presentationView.style.display = 'flex';
  editorView.style.display = 'none';
  editorControls.style.display = 'none';
  renderSlide();
  setupViewportScaling();
}

function switchToEditMode() {
  isEditMode = true;
  btnEditMode.classList.add('active');
  btnPresentMode.classList.remove('active');
  presentationView.style.display = 'none';
  editorView.style.display = 'flex';
  editorControls.style.display = 'flex';
  if (viewport) viewport.style.transform = 'none';
  renderEditor();
}

// Slide Creation
function addNewSlide(layout) {
  const newSlide = {
    layout: layout,
    title: 'New Slide Title',
    subtitle: 'Add descriptive subtitle here',
    timeTarget: '0:45',
    script: 'Add your timed speaker script and cues for this slide here.'
  };

  switch (layout) {
    case 'twocol':
      newSlide.leftCol = { title: 'Column 1', badge: 'POINTS', bullets: ['Key takeaway 1', 'Key takeaway 2'] };
      newSlide.rightCol = { title: 'Column 2', badge: 'DETAILS', bullets: ['Benefit 1', 'Benefit 2'] };
      break;
    case 'threecard':
      newSlide.cards = [
        { title: 'Feature 1', icon: '⚡', body: 'Detail on feature 1', metric: '10x Speed' },
        { title: 'Feature 2', icon: '📈', body: 'Detail on feature 2', metric: '+30% ROI' },
        { title: 'Feature 3', icon: '🛡️', body: 'Detail on feature 3', metric: '100% Secure' }
      ];
      break;
    case 'fourcard':
      newSlide.cards = [
        { title: 'Point 1', icon: '1️⃣', body: 'First point description' },
        { title: 'Point 2', icon: '2️⃣', body: 'Second point description' },
        { title: 'Point 3', icon: '3️⃣', body: 'Third point description' },
        { title: 'Point 4', icon: '4️⃣', body: 'Fourth point description' }
      ];
      break;
    case 'blueprint':
      newSlide.phases = [
        { phase: 'PHASE 1', title: 'Setup', duration: '5 Mins', budget: 'Zero Cost', deliverables: ['Deliverable 1'] },
        { phase: 'PHASE 2', title: 'Execution', duration: '15 Mins', budget: 'Automated', deliverables: ['Deliverable 2'] }
      ];
      break;
    case 'table':
      newSlide.columns = ['Metric / Item', 'Traditional Approach', 'With Platform'];
      newSlide.rows = [
        ['Process Time', '5 Days', '30 Minutes'],
        ['Staff Required', '1 Assistant', 'Zero Typists']
      ];
      break;
  }

  slides.splice(currentSlideIndex + 1, 0, newSlide);
  currentSlideIndex++;
  renderEditor();
}

// Render Edit Mode (WYSIWYG Form Inputs)
function renderEditor() {
  editorView.innerHTML = '';

  slides.forEach((slide, idx) => {
    const cardWrapper = document.createElement('div');
    cardWrapper.className = `editor-slide-wrapper ${idx === currentSlideIndex ? 'active-editor-slide' : ''}`;
    cardWrapper.dataset.index = idx;

    cardWrapper.innerHTML = `
      <div class="editor-slide-header">
        <div class="editor-slide-info">
          <span class="editor-slide-num">#${idx + 1}</span>
          <span class="editor-slide-layout">${slide.layout.toUpperCase()}</span>
          ${slide.timeTarget ? `<span class="editor-slide-layout" style="background:#e0f2fe; color:#0369a1;">⏱️ ${slide.timeTarget}</span>` : ''}
        </div>
        <div class="editor-slide-actions">
          <button class="btn-icon btn-move-up" title="Move slide up" ${idx === 0 ? 'disabled' : ''}>↑</button>
          <button class="btn-icon btn-move-down" title="Move slide down" ${idx === slides.length - 1 ? 'disabled' : ''}>↓</button>
          <button class="btn-icon btn-delete-slide" title="Delete slide">🗑️</button>
        </div>
      </div>
      <div class="editor-slide-preview">
        ${generateSlideHTML(slide, idx, 'editor-preview-mode')}
      </div>
      <div class="editor-slide-form">
        <div class="form-group">
          <label>Slide Title</label>
          <input type="text" class="form-input input-title" value="${escapeHtml(slide.title || '')}">
        </div>
        <div class="form-group">
          <label>Subtitle / Description</label>
          <input type="text" class="form-input input-subtitle" value="${escapeHtml(slide.subtitle || '')}">
        </div>
        <div class="form-row-2col">
          <div class="form-group">
            <label>Target Timing (e.g., "0:35 - 1:20 (45s)")</label>
            <input type="text" class="form-input input-time" value="${escapeHtml(slide.timeTarget || '')}">
          </div>
          <div class="form-group">
            <label>Category Badge</label>
            <input type="text" class="form-input input-badge" value="${escapeHtml(slide.categoryBadge || '')}">
          </div>
        </div>
        <div class="form-group">
          <label>Presenter Talking Script & Cues</label>
          <textarea class="form-textarea input-script" rows="3">${escapeHtml(slide.script || '')}</textarea>
        </div>
      </div>
    `;

    // Input Bindings
    const inputTitle = cardWrapper.querySelector('.input-title');
    const inputSub = cardWrapper.querySelector('.input-subtitle');
    const inputTime = cardWrapper.querySelector('.input-time');
    const inputBadge = cardWrapper.querySelector('.input-badge');
    const inputScript = cardWrapper.querySelector('.input-script');

    inputTitle.addEventListener('input', (e) => {
      slides[idx].title = e.target.value;
      updatePreview(cardWrapper, idx);
    });
    inputSub.addEventListener('input', (e) => {
      slides[idx].subtitle = e.target.value;
      updatePreview(cardWrapper, idx);
    });
    if (inputTime) {
      inputTime.addEventListener('input', (e) => {
        slides[idx].timeTarget = e.target.value;
        updatePreview(cardWrapper, idx);
      });
    }
    if (inputBadge) {
      inputBadge.addEventListener('input', (e) => {
        slides[idx].categoryBadge = e.target.value;
        updatePreview(cardWrapper, idx);
      });
    }
    if (inputScript) {
      inputScript.addEventListener('input', (e) => {
        slides[idx].script = e.target.value;
      });
    }

    // Action Handlers
    cardWrapper.querySelector('.btn-move-up').addEventListener('click', () => {
      if (idx > 0) {
        const temp = slides[idx];
        slides[idx] = slides[idx - 1];
        slides[idx - 1] = temp;
        renderEditor();
      }
    });

    cardWrapper.querySelector('.btn-move-down').addEventListener('click', () => {
      if (idx < slides.length - 1) {
        const temp = slides[idx];
        slides[idx] = slides[idx + 1];
        slides[idx + 1] = temp;
        renderEditor();
      }
    });

    cardWrapper.querySelector('.btn-delete-slide').addEventListener('click', () => {
      if (slides.length <= 1) {
        alert('Presentation must contain at least 1 slide.');
        return;
      }
      if (confirm(`Delete slide #${idx + 1}?`)) {
        slides.splice(idx, 1);
        if (currentSlideIndex >= slides.length) currentSlideIndex = slides.length - 1;
        renderEditor();
      }
    });

    editorView.appendChild(cardWrapper);
  });
}

function updatePreview(wrapper, idx) {
  const previewContainer = wrapper.querySelector('.editor-slide-preview');
  if (previewContainer) {
    previewContainer.innerHTML = generateSlideHTML(slides[idx], idx, 'editor-preview-mode');
  }
}

function escapeHtml(str) {
  return str.replace(/"/g, '&quot;');
}

// ----------------------------------------------------------------------------
// PDF Export Handlers
// ----------------------------------------------------------------------------
function openExportModal() {
  exportModal.style.display = 'flex';
}

function closeExportModal() {
  exportModal.style.display = 'none';
}

function executePrint() {
  closeExportModal();

  // Create Print Style Element
  const existingPrintStyle = document.getElementById('dynamic-print-style');
  if (existingPrintStyle) existingPrintStyle.remove();

  const printStyle = document.createElement('style');
  printStyle.id = 'dynamic-print-style';

  const is16_9 = selectedRatio === '16:9';
  const pageDim = is16_9 ? '297mm 167mm' : '297mm 210mm';
  const slideAspectCls = is16_9 ? 'aspect-16-9' : 'aspect-4-3';

  printStyle.innerHTML = `
    @media print {
      @page {
        size: ${pageDim};
        margin: 0;
      }
      header, .slide-navigation-controls, .editor-footer-controls, .script-drawer, #editor-view {
        display: none !important;
      }
      body, main, #presentation-view, .slide-deck-viewport {
        background: white !important;
        padding: 0 !important;
        margin: 0 !important;
        display: block !important;
        overflow: visible !important;
      }
      #slide-viewport {
        transform: none !important;
        display: block !important;
        width: 100% !important;
        height: auto !important;
      }
      .slide {
        page-break-after: always !important;
        break-after: page !important;
        width: 100vw !important;
        height: 100vh !important;
        border: none !important;
        box-shadow: none !important;
        margin: 0 !important;
        box-sizing: border-box !important;
      }
      ${!printWithSlideNumbers ? '.slide-footer-tag span:last-child { display: none !important; }' : ''}
    }
  `;
  document.head.appendChild(printStyle);

  // Render all slides into viewport for printing
  const originalHTML = viewport.innerHTML;
  viewport.innerHTML = slides.map((s, idx) => generateSlideHTML(s, idx, slideAspectCls)).join('');

  // Allow browser layout engine to paint before opening print dialog
  setTimeout(() => {
    window.print();
    // Restore single slide view after print dialog closes
    setTimeout(() => {
      viewport.innerHTML = originalHTML;
      setupViewportScaling();
    }, 500);
  }, 300);
}

// Start application when DOM is ready
document.addEventListener('DOMContentLoaded', init);

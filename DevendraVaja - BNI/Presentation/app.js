/**
 * ============================================================================
 * MASTER PRESENTATION ENGINE (TenCore Digital Labs)
 * ============================================================================
 */

// Application State
let slides = [];
let currentSlideIndex = 0;
let isEditMode = false;
let selectedRatio = '16:9';
let printWithSlideNumbers = true;

const STORAGE_KEY = (typeof DECK_META !== 'undefined' && DECK_META.storageKey) 
  ? DECK_META.storageKey 
  : 'tencore_presentation_state_v1';

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
  applyDeckHeader();
  loadSlides();
  setupEventListeners();
  setupViewportScaling();
  renderSlide();
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
  if (titleEl && DECK_META.title) titleEl.textContent = `${DECK_META.title} • Pitch Deck`;
  if (subEl && DECK_META.subtitle) subEl.textContent = `${BRAND_CONFIG.companyName} • ${DECK_META.subtitle}`;
  if (DECK_META.title) document.title = `${DECK_META.title} | ${BRAND_CONFIG.companyName}`;
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
}

// Helper: Common Footer HTML
function renderFooter(index) {
  const company = (typeof BRAND_CONFIG !== 'undefined' && BRAND_CONFIG.companyName) ? BRAND_CONFIG.companyName : 'TenCore Digital Labs';
  const confidential = (typeof BRAND_CONFIG !== 'undefined' && BRAND_CONFIG.confidentialLabel) ? BRAND_CONFIG.confidentialLabel : 'CONFIDENTIAL';
  return `
    <div class="slide-footer-tag">
      <span>${company}</span>
      <span class="confidential-tag">${confidential}</span>
      <span>Slide ${index + 1} of ${slides.length}</span>
    </div>
  `;
}

// Generate Slide HTML based on Layout
function generateSlideHTML(slide, index, extraClass = '') {
  let innerContent = '';
  const cls = extraClass ? ` ${extraClass}` : '';
  const confidential = (typeof BRAND_CONFIG !== 'undefined' && BRAND_CONFIG.confidentialLabel) ? BRAND_CONFIG.confidentialLabel : 'CONFIDENTIAL';
  const company = (typeof BRAND_CONFIG !== 'undefined' && BRAND_CONFIG.companyName) ? BRAND_CONFIG.companyName : 'TenCore Digital Labs';
  const copyright = (typeof BRAND_CONFIG !== 'undefined' && BRAND_CONFIG.copyright) ? BRAND_CONFIG.copyright : 'TenCore Digital Labs © 2026';

  switch (slide.layout) {
    case 'title':
      innerContent = `
        <div class="slide${cls} slide-title-layout">
          <div class="slide-bg-glow"></div>
          <div class="title-top-brand-row">
            <img src="Pics/tencore_digital_labs_logo.png" alt="TenCore Digital Labs" class="title-slide-logo" onerror="this.style.display='none'">
            <div class="title-pill-tag">${slide.pillTag || (typeof DECK_META !== 'undefined' ? DECK_META.pillTag : '🛡️ TenCore Digital Labs')}</div>
          </div>
          <h1>${slide.title}</h1>
          <div class="title-deck-subtitle">${slide.subtitle || ''}</div>
          <div class="title-meta-grid">
            ${(slide.meta || []).map(m => `
              <div class="title-meta-card">
                <div class="meta-label">${m.label}</div>
                <div class="meta-value">${m.value}</div>
                <div class="meta-sub">${m.sub}</div>
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
            <div class="slide-category-badge">Leadership & Engineering Track Record</div>
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
                <div style="font-size: 0.74rem; color: var(--text-secondary); margin-top: 8px; line-height: 1.35;">
                  ${tagline}
                </div>
                <div class="instructor-global-flags">
                  <div class="global-flag-pill" title="India">
                    <img src="Pics/flags/india.svg" alt="India" class="flag-img">
                    <span>India</span>
                  </div>
                  <div class="global-flag-pill" title="Japan">
                    <img src="Pics/flags/japan.svg" alt="Japan" class="flag-img">
                    <span>Japan</span>
                  </div>
                  <div class="global-flag-pill" title="USA">
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

    case 'twocol':
      innerContent = `
        <div class="slide${cls}">
          <div class="slide-bg-glow"></div>
          <div class="slide-header">
            <div class="slide-category-badge">Operational & Architectural Analysis</div>
            <h2>${slide.title}</h2>
            <div class="slide-subtitle">${slide.subtitle || ''}</div>
          </div>
          <div class="slide-body">
            <div class="two-col-grid">
              <div class="col-card">
                <div class="col-header">
                  <h3>${slide.leftCol.title}</h3>
                  <span class="col-badge">${slide.leftCol.badge || 'CURRENT'}</span>
                </div>
                <ul class="bullet-list">
                  ${(slide.leftCol.bullets || []).map(b => `<li>${b}</li>`).join('')}
                </ul>
              </div>
              <div class="col-card highlight">
                <div class="col-header">
                  <h3>${slide.rightCol.title}</h3>
                  <span class="col-badge badge-primary">${slide.rightCol.badge || 'SOLUTION'}</span>
                </div>
                <ul class="bullet-list">
                  ${(slide.rightCol.bullets || []).map(b => `<li>${b}</li>`).join('')}
                </ul>
              </div>
            </div>
          </div>
          ${renderFooter(index)}
        </div>
      `;
      break;

    case 'threecard':
      innerContent = `
        <div class="slide${cls}">
          <div class="slide-bg-glow"></div>
          <div class="slide-header">
            <div class="slide-category-badge">Core Architecture & Capabilities</div>
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
          ${renderFooter(index)}
        </div>
      `;
      break;

    case 'fourcard':
      innerContent = `
        <div class="slide${cls}">
          <div class="slide-bg-glow"></div>
          <div class="slide-header">
            <div class="slide-category-badge">Strategic Value & Market Focus</div>
            <h2>${slide.title}</h2>
            <div class="slide-subtitle">${slide.subtitle || ''}</div>
          </div>
          <div class="slide-body">
            <div class="four-card-grid">
              ${(slide.cards || []).map(c => `
                <div class="four-card-item">
                  <div class="four-card-icon">${c.icon || '📌'}</div>
                  <div class="four-card-content">
                    <h3>${c.title}</h3>
                    <p>${c.body}</p>
                  </div>
                </div>
              `).join('')}
            </div>
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
            <div class="slide-category-badge">Competitive Advantage & System Stack</div>
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
            <div class="slide-category-badge">Engineering & Rollout Roadmap</div>
            <h2>${slide.title}</h2>
            <div class="slide-subtitle">${slide.subtitle || ''}</div>
          </div>
          <div class="slide-body">
            <div class="roadmap-phases-grid">
              ${(slide.phases || []).map((p, pIdx) => `
                <div class="roadmap-phase-card ${pIdx === 0 ? 'active-phase' : ''}">
                  <div class="phase-badge">${p.phase}</div>
                  <div class="phase-title">${p.title}</div>
                  <div class="phase-duration-budget">
                    <span>⏱️ ${p.duration}</span>
                    <span>📦 ${p.budget}</span>
                  </div>
                  <div class="phase-deliverables">
                    <strong>Deliverables:</strong>
                    <ul>
                      ${(p.deliverables || []).map(d => `<li>${d}</li>`).join('')}
                    </ul>
                  </div>
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
            <div class="slide-category-badge">Comparative Analysis & Metrics</div>
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
            <div class="slide-category-badge">Commercial Scope & Investment Tiers</div>
            <h2>${slide.title}</h2>
            <div class="slide-subtitle">${slide.subtitle || ''}</div>
          </div>
          <div class="slide-body">
            <div class="deal-options-grid">
              ${(slide.cards || []).map(c => `
                <div class="deal-card ${c.featured ? 'featured-deal' : ''}">
                  <div class="deal-card-header">
                    <div class="deal-header-top">
                      <h3>${c.title}</h3>
                      ${c.badge ? `<span class="deal-badge-tag">${c.badge}</span>` : ''}
                    </div>
                    <div class="deal-tagline">${c.tagline || ''}</div>
                  </div>
                  <div class="deal-price-box">
                    <div class="deal-price-large">${c.price}</div>
                    <div class="deal-price-sub">${c.priceSub || ''}</div>
                  </div>
                  <ul class="deal-bullets">
                    ${(c.bullets || []).map(b => `<li>${b}</li>`).join('')}
                  </ul>
                  ${c.footerPitch ? `<div class="deal-footer-pitch">${c.footerPitch}</div>` : ''}
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

      innerContent = `
        <div class="slide${cls}">
          <div class="slide-bg-glow"></div>
          <div class="slide-body" style="height: 100%;">
            <div class="qa-slide-container">
              <div class="qa-left-pane">
                <div class="slide-category-badge" style="width: fit-content;">Next Steps & Engagement</div>
                <h2>${slide.title}</h2>
                <p>${slide.subtitle || ''}</p>
                <div class="contact-info-list">
                  ${cInfo.map(c => `
                    <div class="contact-item">
                      <span class="contact-icon">${c.icon}</span>
                      <div class="contact-text-wrap">
                        <span class="label">${c.label}</span>
                        <span class="val">${c.val}</span>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>
              <div class="qa-right-pane">
                <img src="Pics/tencore_digital_labs_logo.png" alt="TenCore Digital Labs" class="qa-studio-logo" onerror="this.style.display='none'">
                <div class="qr-code-box">
                  <img src="Pics/executive_contact_qr.png" alt="Scan to add contact" class="qr-img" width="124" height="124">
                </div>
                <div class="qr-label">${qrL}</div>
                <div class="qr-sub">${qrS}</div>
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
  exportModal.addEventListener('click', (e) => {
    if (e.target === exportModal) closeExportModal();
  });

  ratioCards.forEach(card => {
    card.addEventListener('click', () => {
      ratioCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      const radio = card.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;
      selectedRatio = card.dataset.ratio;
    });
  });

  btnConfirmExport.addEventListener('click', executePdfExport);
}

// Switch to Presenter Mode
function switchToPresentMode() {
  isEditMode = false;
  btnPresentMode.classList.add('active');
  btnEditMode.classList.remove('active');
  presentationView.style.display = 'flex';
  editorView.style.display = 'none';
  editorControls.style.display = 'none';
  renderSlide();
}

// Switch to Edit Mode
function switchToEditMode() {
  isEditMode = true;
  btnEditMode.classList.add('active');
  btnPresentMode.classList.remove('active');
  presentationView.style.display = 'none';
  editorView.style.display = 'block';
  editorControls.style.display = 'flex';
  renderEditor();
}

// Render All Slides in Edit Mode
function renderEditor() {
  editorView.innerHTML = '';
  slides.forEach((slide, idx) => {
    const card = document.createElement('div');
    card.className = 'editor-slide-card';
    card.innerHTML = `
      <div class="editor-slide-header">
        <span class="editor-slide-num">Slide ${idx + 1} • Layout: ${slide.layout.toUpperCase()}</span>
        <div class="editor-slide-actions">
          <button class="btn btn-sm" onclick="moveSlide(${idx}, -1)" ${idx === 0 ? 'disabled' : ''}>⬆️ Move Up</button>
          <button class="btn btn-sm" onclick="moveSlide(${idx}, 1)" ${idx === slides.length - 1 ? 'disabled' : ''}>⬇️ Move Down</button>
          <button class="btn btn-sm btn-danger" onclick="deleteSlide(${idx})" ${slides.length <= 1 ? 'disabled' : ''}>🗑️ Delete</button>
        </div>
      </div>
      <div class="editor-preview-container">
        ${generateSlideHTML(slide, idx)}
      </div>
    `;
    editorView.appendChild(card);
  });
}

// Reorder Slides
window.moveSlide = function(index, direction) {
  const target = index + direction;
  if (target < 0 || target >= slides.length) return;
  const temp = slides[index];
  slides[index] = slides[target];
  slides[target] = temp;
  renderEditor();
};

// Delete Slide
window.deleteSlide = function(index) {
  if (slides.length <= 1) {
    alert('A presentation must have at least one slide.');
    return;
  }
  if (confirm(`Are you sure you want to delete Slide ${index + 1}?`)) {
    slides.splice(index, 1);
    if (currentSlideIndex >= slides.length) currentSlideIndex = slides.length - 1;
    renderEditor();
  }
};

// Add New Slide
function addNewSlide(layout) {
  const newSlide = {
    layout: layout,
    title: 'New Slide Title',
    subtitle: 'Add supporting description or strategic takeaway'
  };

  if (layout === 'twocol') {
    newSlide.leftCol = { title: 'Left Heading', bullets: ['Key point 1', 'Key point 2'] };
    newSlide.rightCol = { title: 'Right Heading', bullets: ['Key point 1', 'Key point 2'] };
  } else if (layout === 'threecard') {
    newSlide.cards = [
      { title: 'Pillar 1', icon: '⚡', body: 'Description', metric: 'Metric' },
      { title: 'Pillar 2', icon: '📱', body: 'Description', metric: 'Metric' },
      { title: 'Pillar 3', icon: '📊', body: 'Description', metric: 'Metric' }
    ];
  } else if (layout === 'fourcard') {
    newSlide.cards = [
      { title: 'Card 1', icon: '📌', body: 'Description' },
      { title: 'Card 2', icon: '📌', body: 'Description' },
      { title: 'Card 3', icon: '📌', body: 'Description' },
      { title: 'Card 4', icon: '📌', body: 'Description' }
    ];
  }

  slides.push(newSlide);
  renderEditor();
}

// Fullscreen Presentation Mode
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(err => console.log(err));
  } else {
    if (document.exitFullscreen) document.exitFullscreen();
  }
}

// Open Export Modal
function openExportModal() {
  exportModal.style.display = 'flex';
}

// Close Export Modal
function closeExportModal() {
  exportModal.style.display = 'none';
}

// Execute PDF Print Export
function executePdfExport() {
  printWithSlideNumbers = chkPrintSlideNumbers.checked;
  closeExportModal();

  const printRatioClass = selectedRatio === '4:3' ? 'aspect-4-3' : 'aspect-16-9';

  // Build clean print deck
  const printDeck = document.createElement('div');
  printDeck.id = 'print-deck-container';
  if (!printWithSlideNumbers) {
    printDeck.classList.add('hide-slide-numbers');
  }

  slides.forEach((slide, idx) => {
    const slideHTML = generateSlideHTML(slide, idx, printRatioClass);
    printDeck.innerHTML += slideHTML;
  });

  // Swap to print deck in presentation workspace
  const previousHTML = viewport.innerHTML;
  viewport.innerHTML = '';
  viewport.appendChild(printDeck);

  setTimeout(() => {
    window.print();
    viewport.innerHTML = previousHTML;
    renderSlide();
  }, 350);
}

// Kickoff
document.addEventListener('DOMContentLoaded', init);

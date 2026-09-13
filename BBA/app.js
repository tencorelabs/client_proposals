// Default Presentation Data
const DEFAULT_SLIDES = [
  {
    layout: 'title',
    title: 'MasterClass for AI in BBA',
    subtitle: 'Navigating the AI Revolution: From Undergraduate Management Student to Future-Ready Business Leader.'
  },
  {
    layout: 'instructor',
    title: 'Meet Your Instructor',
    subtitle: 'TenCore Digital Labs',
    instructorName: 'Devendra Vaja',
    instructorTitle: 'Founder: TenCore Digital Labs',
    bioPoints: [
      { label: 'Background', text: '24+ years building core systems across firmware, mobile architecture (Android), and tech-driven platforms globally.' },
      { label: 'Perspective', text: 'Bridging deep technology architecture with real-world business execution and consumer security dynamics.' }
    ],
    sidebarTitle: 'Why a Technologist is Talking to BBA Students?',
    sidebarBullets: [
      "AI isn't written by IT departments alone anymore—it dictates business strategy, ROI, and organizational structure.",
      "The gap between corporate strategy and technical execution is shrinking rapidly.",
      "Objective: To give you a pragmatic framework to leverage AI rather than fear it."
    ]
  },
  {
    layout: 'divider',
    title: 'The Great AI Reality Check',
    description: 'Addressing your ongoing concerns, hype vs. reality, and what modern companies actually look for.',
    highlight: 'Key Question: Will AI Take My Future Management Job?'
  },
  {
    layout: 'threecard',
    title: 'Will AI Take My Future Management Job?',
    subtitle: 'Hype vs. Reality in the Job Market',
    cards: [
      { title: 'The Myth', icon: '⚠️', body: '"AI will completely replace human managers, financial analysts, and marketers, leaving no roles for fresh BBA graduates."', class: 'myth' },
      { title: 'The Reality', icon: '🛡️', body: 'AI replaces routine operational tasks, not strategic judgment, empathy, negotiation, or contextual leadership.', class: 'reality' },
      { title: 'The Opportunity', icon: '⚡', body: 'The job market won\'t be "Humans vs. AI", but rather "Humans using AI vs. Humans not using AI."', class: 'opportunity' }
    ]
  },
  {
    layout: 'divider',
    title: 'How AI and LLMs are Connected',
    description: '',
    hideAccent: true
  },
  {
    layout: 'twocol',
    title: 'How AI and LLMs are Connected',
    subtitle: 'The Engine of Modern Business Intelligence',
    description: 'An LLM is basically a super-smart AI text predictor. Think of it like autocorrect on steroids, capable of writing entire stories, business reports, or computer code.',
    leftTitle: 'How It Works in Three Simple Steps',
    leftBullets: [
      "<strong>The 'Large' Part (Data):</strong> Read almost the entire internet—millions of books, articles, websites, and conversations.",
      "<strong>The 'Language' Part (Patterns):</strong> Learns statistical word patterns (knows 'The sky is...' likely leads to 'blue').",
      "<strong>The 'Model' Part (The App):</strong> Final program you talk to, like ChatGPT or Google Gemini."
    ],
    rightTitle: 'The Digital Parrot Analogy',
    rightBody: "It is like a digital parrot that has memorized every book in the world. It doesn't actually understand things the way you do, but it is incredibly good at guessing the perfect answer to whatever you ask it."
  },
  {
    layout: 'divider',
    title: 'Interactive Exercise: The Prompt Challenge',
    description: 'Goal: Write a welcome message to our masterclass attendees and tell them how to start?',
    hideAccent: true
  },
  {
    layout: 'prompt_challenge',
    title: 'Interactive Exercise: The Prompt Challenge',
    subtitle: 'Methodology: Live Show of Hands & Prompting',
    leftTitle: 'Key Takeaway: The 3 Parts of a Business Prompt',
    leftIntro: '',
    leftBullets: [
      "<strong>Role / Persona:</strong> Who should the AI act as? (e.g., an expert business consultant, a friendly tutor, a marketing strategist).",
      "<strong>Context / Background:</strong> What is the situation or background information the AI needs to know?",
      "<strong>Task / Instruction:</strong> What exact action or output do you want the AI to generate?"
    ],
    rightTitle: 'The Structured Prompt (Clear & Powerful)',
    rightBullets: [
      "<strong>[Role]:</strong> Act as an expert copywriter for masterclass attendees.",
      "<strong>[Context]:</strong> Our masterclass is called \"Masterclass for AI in BBA,\" and our target audience is third year BBA students who want training onboarding instructions.",
      "<strong>[Task]:</strong> Write a short, friendly welcome email that includes:<br><span style=\"padding-left:12px; display:inline-block; margin-top:4px;\">• A catchy subject line.</span><br><span style=\"padding-left:12px; display:inline-block; margin-top:2px;\">• A warm greeting.</span><br><span style=\"padding-left:12px; display:inline-block; margin-top:2px;\">• Three simple steps to complete their profile and start their first workout.</span>"
    ],
    rightFootnote: ''
  },
  {
    layout: 'divider',
    title: 'AI Across Core Business Pillars',
    description: 'How Finance, Marketing, Operations, and HR are transforming right now.'
  },
  {
    layout: 'fourcard',
    title: 'AI Across BBA Core Functions',
    subtitle: 'How AI is changing the day-to-day work in major departments.',
    cards: [
      { title: 'Marketing & Consumer Behavior', icon: '📢', body: 'Hyper-personalized campaigns, sentiment analysis, predictive customer lifetime value modeling, and automated content pipelines.', class: 'marketing' },
      { title: 'Finance & Risk Management', icon: '📈', body: 'Automated financial forecasting, algorithmic risk assessment, fraud detection, and real-time variance analysis in budgets.', class: 'finance' },
      { title: 'Operations & Supply Chain', icon: '⚙️', body: 'Demand sensing, inventory optimization, automated logistics routing, and predictive equipment maintenance.', class: 'operations' },
      { title: 'HR & Talent Management', icon: '👥', body: 'Resume screening alignment, employee engagement tracking, automated training modules, and workforce productivity insights.', class: 'hr' }
    ]
  },
  {
    layout: 'divider',
    title: 'The Managerial Edge',
    description: 'Building ethics, governance, and leadership traits that algorithms cannot replicate.'
  },
  {
    layout: 'twocol',
    title: 'Ethics, Bias, and Risk Management',
    subtitle: 'The Human Factor in Autonomous Systems',
    leftTitle: 'Why BBA Leaders Matter Here',
    leftBullets: [
      'Technologists build systems to scale; business managers must decide if they should scale them.',
      'Understanding data privacy, algorithmic bias in hiring or loan approvals, and regulatory compliance is a core management responsibility.'
    ],
    rightTitle: 'The Core Skills to Cultivate',
    rightBullets: [
      'Critical cross-functional evaluation of tech solutions.',
      'Managing human-AI collaborative workflows.',
      'Continuous adaptability and rapid unlearning.'
    ]
  },
  {
    layout: 'divider',
    title: 'Your 3-Step Action Plan',
    description: 'What you should do starting tomorrow morning as a final year BBA student.'
  },
  {
    layout: 'blueprint',
    title: 'Your Blueprint to Stand Out',
    subtitle: 'Practical Next Steps',
    steps: [
      { num: '1', title: 'Build a Daily Habit', desc: 'Stop treating AI as a search engine. Use it as a sparring partner to critique your business plans and case studies.' },
      { num: '2', title: 'Upskill in Data Literacy', desc: 'You don\'t need to code in Python, but you must know how to interpret data dashboards and ask the right questions.' },
      { num: '3', title: 'Showcase Projects', desc: 'Include AI-assisted business proposals or workflow optimization projects in your portfolio before placement interviews.' }
    ]
  },
  {
    layout: 'twocard',
    title: 'The Future-Proof BBA Graduate',
    subtitle: 'Your Competitive Edge in the Workforce',
    leftTitle: 'Key Skills to Cultivate',
    leftBullets: [
      '<strong>Prompt Literacy:</strong> Knowing how to ask the right questions to AI systems.',
      '<strong>Critical Evaluation:</strong> Validating AI outputs for hallucination and bias.',
      '<strong>Strategic Synthesis:</strong> Combining AI speed with human empathy and business judgment.'
    ],
    rightTitle: 'Career Advantage',
    rightBody: 'Graduates who master AI-driven productivity tools deliver 3x output, enabling them to focus on high-level negotiation, leadership, and visionary strategy.'
  },
  {
    layout: 'qa',
    title: 'Questions & Answers',
    subtitle: 'Thank you for your energy and engagement!',
    body: 'Let\'s discuss your future in an AI-powered business world.',
    web: 'www.tencorelabs.com',
    email: 'tencorelabs@gmail.com',
    linkedin: 'https://www.linkedin.com/in/devendra-vaja/',
    qrCodeData: 'https://tencorelabs.com/pages/know-the-founder-devendra-vaja.html'
  }
];

// App State
let slides = [];
let currentSlideIndex = 0;
let isEditMode = false;

// Initialize App
function init() {
  // Load from localStorage or fallback to defaults
  const savedSlides = localStorage.getItem('bba_slides_data');
  if (savedSlides) {
    try {
      slides = JSON.parse(savedSlides);
      
      // Auto-migrate old contact email, website, and Slide 4 description in local storage
      slides.forEach(slide => {
        if (slide.layout === 'title') {
          if (slide.title === 'Mastermind for AI in BBA') {
            slide.title = 'MasterClass for AI in BBA';
          }
        }
        if (slide.layout === 'qa') {
          if (slide.email === 'contact@tencorelabs.com') {
            slide.email = 'tencorelabs@gmail.com';
          }
          if (slide.web === 'tencorelabs.com') {
            slide.web = 'www.tencorelabs.com';
          }
          if (!slide.linkedin) {
            slide.linkedin = 'https://www.linkedin.com/in/devendra-vaja/';
          }
          if (!slide.qrCodeData) {
            slide.qrCodeData = 'https://tencorelabs.com/pages/know-the-founder-devendra-vaja.html';
          }
        }
        if (slide.layout === 'divider' && slide.title === 'The Great AI Reality Check') {
          if (!slide.highlight) {
            slide.highlight = 'Key Question: Will AI Take My Future Management Job?';
          }
        }
        if (slide.layout === 'twocol' && slide.title === 'Ethics, Bias, and Risk Management') {
          // Auto-migrate Slide 11 leftBody to leftBullets
          if (slide.leftBody) {
            slide.leftBullets = [
              'Technologists build systems to scale; business managers must decide if they should scale them.',
              'Understanding data privacy, algorithmic bias in hiring or loan approvals, and regulatory compliance is a core management responsibility.'
            ];
            delete slide.leftBody;
          }
        }
        if (slide.layout === 'twocol' && slide.title === 'How AI and LLMs are Connected') {
          if (!slide.description) {
            slide.description = 'An LLM is basically a super-smart AI text predictor. Think of it like autocorrect on steroids, capable of writing entire stories, business reports, or computer code.';
          }
        }
        if ((slide.layout === 'threecard' || slide.layout === 'fourcard') && (slide.title === 'Modernizing Functions with AI' || slide.title === 'AI Across BBA Core Functions')) {
          // Auto-migrate Slide 9 to the new 4-card layout
          slide.layout = 'fourcard';
          slide.title = 'AI Across BBA Core Functions';
          slide.subtitle = 'How AI is changing the day-to-day work in major departments.';
          slide.cards = [
            { title: 'Marketing & Consumer Behavior', icon: '📢', body: 'Hyper-personalized campaigns, sentiment analysis, predictive customer lifetime value modeling, and automated content pipelines.', class: 'marketing' },
            { title: 'Finance & Risk Management', icon: '📈', body: 'Automated financial forecasting, algorithmic risk assessment, fraud detection, and real-time variance analysis in budgets.', class: 'finance' },
            { title: 'Operations & Supply Chain', icon: '⚙️', body: 'Demand sensing, inventory optimization, automated logistics routing, and predictive equipment maintenance.', class: 'operations' },
            { title: 'HR & Talent Management', icon: '👥', body: 'Resume screening alignment, employee engagement tracking, automated training modules, and workforce productivity insights.', class: 'hr' }
          ];
        }
        if (slide.layout === 'prompt_challenge' && slide.title === 'Interactive Exercise: The Prompt Challenge') {
          // Auto-migrate Slide 7 prompt challenge content to new Role-Context-Task structure
          if (slide.leftTitle === 'Interactive Session' || slide.leftIntro) {
            slide.leftTitle = 'Key Takeaway: The 3 Parts of a Business Prompt';
            slide.leftIntro = '';
            slide.leftBullets = [
              "<strong>Role / Persona:</strong> Who should the AI act as? (e.g., an expert business consultant, a friendly tutor, a marketing strategist).",
              "<strong>Context / Background:</strong> What is the situation or background information the AI needs to know?",
              "<strong>Task / Instruction:</strong> What exact action or output do you want the AI to generate?"
            ];
            slide.rightTitle = 'The Structured Prompt (Clear & Powerful)';
            slide.rightBullets = [
              "<strong>[Role]:</strong> Act as an expert copywriter for masterclass attendees.",
              "<strong>[Context]:</strong> Our masterclass is called \"Masterclass for AI in BBA,\" and our target audience is third year BBA students who want training onboarding instructions.",
              "<strong>[Task]:</strong> Write a short, friendly welcome email that includes:<br><span style=\"padding-left:12px; display:inline-block; margin-top:4px;\">• A catchy subject line.</span><br><span style=\"padding-left:12px; display:inline-block; margin-top:2px;\">• A warm greeting.</span><br><span style=\"padding-left:12px; display:inline-block; margin-top:2px;\">• Three simple steps to complete their profile and start their first workout.</span>"
            ];
            slide.rightFootnote = '';
          } else {
            slide.rightFootnote = '';
            slide.leftIntro = '';
          }
        }
      });
      
      // Auto-migrate Slide 7 empty divider insertion
      let hasEmptyPromptDivider = false;
      slides.forEach(slide => {
        if (slide.layout === 'divider' && slide.title === 'Interactive Exercise: The Prompt Challenge' && slide.hideAccent === true) {
          hasEmptyPromptDivider = true;
          // Auto-migrate subtitle description if empty
          if (!slide.description) {
            slide.description = 'Goal: Write a welcome message to our masterclass attendees and tell them how to start?';
          }
        }
      });
      if (!hasEmptyPromptDivider) {
        // Insert empty divider at index 5 (making it the 7th slide)
        slides.splice(5, 0, {
          layout: 'divider',
          title: 'Interactive Exercise: The Prompt Challenge',
          description: 'Goal: Write a welcome message to our masterclass attendees and tell them how to start?',
          hideAccent: true
        });
      }
      
      // Auto-migrate Slide 14 insertion
      let hasFutureProofSlide = false;
      slides.forEach(slide => {
        if (slide.layout === 'twocard' && slide.title === 'The Future-Proof BBA Graduate') {
          hasFutureProofSlide = true;
        }
      });
      if (!hasFutureProofSlide) {
        // Insert Slide 14 at index 13 (before Questions & Answers)
        slides.splice(13, 0, {
          layout: 'twocard',
          title: 'The Future-Proof BBA Graduate',
          subtitle: 'Your Competitive Edge in the Workforce',
          leftTitle: 'Key Skills to Cultivate',
          leftBullets: [
            '<strong>Prompt Literacy:</strong> Knowing how to ask the right questions to AI systems.',
            '<strong>Critical Evaluation:</strong> Validating AI outputs for hallucination and bias.',
            '<strong>Strategic Synthesis:</strong> Combining AI speed with human empathy and business judgment.'
          ],
          rightTitle: 'Career Advantage',
          rightBody: 'Graduates who master AI-driven productivity tools deliver 3x output, enabling them to focus on high-level negotiation, leadership, and visionary strategy.'
        });
      }
      
      // Auto-migrate Slide 4 empty divider insertion
      let hasHowAIDivider = false;
      slides.forEach(slide => {
        if (slide.layout === 'divider' && slide.title === 'How AI and LLMs are Connected' && slide.hideAccent === true) {
          hasHowAIDivider = true;
        }
      });
      if (!hasHowAIDivider) {
        // Insert empty divider at index 3 (making the divider Slide 4, and pushing details to Slide 5)
        slides.splice(3, 0, {
          layout: 'divider',
          title: 'How AI and LLMs are Connected',
          description: '',
          hideAccent: true
        });
      }

      // Auto-migrate Slide reordering (move How AI divider and details after Will AI Take My Job)
      let willAIIndex = -1;
      let howAIDividerIndex = -1;
      let howAIDetailsIndex = -1;
      slides.forEach((slide, index) => {
        if (slide.layout === 'threecard' && slide.title === 'Will AI Take My Future Management Job?') {
          willAIIndex = index;
        }
        if (slide.layout === 'divider' && slide.title === 'How AI and LLMs are Connected') {
          howAIDividerIndex = index;
        }
        if (slide.layout === 'twocol' && slide.title === 'How AI and LLMs are Connected') {
          howAIDetailsIndex = index;
        }
      });
      
      if (howAIDividerIndex !== -1 && willAIIndex !== -1 && howAIDividerIndex < willAIIndex) {
        // Remove the How AI slides
        const dividerSlide = slides.splice(howAIDividerIndex, 1)[0];
        // Splicing out divider slide shifted details slide index by -1
        let detailsIndexToSplice = howAIDetailsIndex > howAIDividerIndex ? howAIDetailsIndex - 1 : howAIDetailsIndex;
        const detailsSlide = slides.splice(detailsIndexToSplice, 1)[0];
        
        // Find new index of Will AI slide
        let newWillAIIndex = -1;
        slides.forEach((slide, index) => {
          if (slide.layout === 'threecard' && slide.title === 'Will AI Take My Future Management Job?') {
            newWillAIIndex = index;
          }
        });
        
        // Insert them right after Will AI slide
        if (newWillAIIndex !== -1) {
          slides.splice(newWillAIIndex + 1, 0, dividerSlide, detailsSlide);
        }
      }
      
      localStorage.setItem('bba_slides_data', JSON.stringify(slides));
    } catch (e) {
      console.error('Failed to parse saved slides, loading defaults', e);
      slides = JSON.parse(JSON.stringify(DEFAULT_SLIDES));
    }
  } else {
    slides = JSON.parse(JSON.stringify(DEFAULT_SLIDES));
  }

  // Setup Event Listeners
  setupEventListeners();

  // Render initial view
  render();
}

// Save to LocalStorage
function saveSlides() {
  localStorage.setItem('bba_slides_data', JSON.stringify(slides));
  showToast('Presentation saved successfully!');
}

// Reset Slides to Defaults
function resetSlides() {
  if (confirm('Are you sure you want to reset the presentation to the original version? Any unsaved edits will be lost.')) {
    slides = JSON.parse(JSON.stringify(DEFAULT_SLIDES));
    localStorage.removeItem('bba_slides_data');
    currentSlideIndex = 0;
    render();
    showToast('Reset to default presentation.');
  }
}

// Setup Event Listeners
function setupEventListeners() {
  // View Toggle Buttons
  document.getElementById('btn-present-mode').addEventListener('click', () => setViewMode(false));
  document.getElementById('btn-edit-mode').addEventListener('click', () => setViewMode(true));

  // Navigation Buttons (Presentation Mode)
  document.getElementById('nav-prev').addEventListener('click', prevSlide);
  document.getElementById('nav-next').addEventListener('click', nextSlide);
  document.getElementById('nav-first').addEventListener('click', firstSlide);
  document.getElementById('nav-last').addEventListener('click', lastSlide);

  // Present Mode Fullscreen
  document.getElementById('btn-fullscreen').addEventListener('click', toggleFullscreen);

  // Action Buttons
  document.getElementById('btn-save').addEventListener('click', saveSlides);
  document.getElementById('btn-reset').addEventListener('click', resetSlides);
  document.getElementById('btn-export-pdf').addEventListener('click', exportToPDF);

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (isEditMode) return; // Disable slide navigation keyboard shortcuts in Edit Mode

    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
      nextSlide();
      e.preventDefault();
    } else if (e.key === 'ArrowLeft' || e.key === 'Backspace' || e.key === 'PageUp') {
      prevSlide();
      e.preventDefault();
    } else if (e.key === 'Home') {
      firstSlide();
      e.preventDefault();
    } else if (e.key === 'End') {
      lastSlide();
      e.preventDefault();
    }
  });

  // Editor specific global listeners
  const addSlideBtn = document.getElementById('btn-add-slide');
  const layoutPicker = document.getElementById('layout-picker');

  addSlideBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    layoutPicker.classList.toggle('active');
  });

  document.addEventListener('click', () => {
    layoutPicker.classList.remove('active');
  });

  // Layout selection options
  const layoutOptions = document.querySelectorAll('.layout-option');
  layoutOptions.forEach(opt => {
    opt.addEventListener('click', (e) => {
      const layout = opt.getAttribute('data-layout');
      addNewSlide(layout);
      layoutPicker.classList.remove('active');
      e.stopPropagation();
    });
  });
}

// View Mode switcher
function setViewMode(editMode) {
  isEditMode = editMode;
  
  const presentBtn = document.getElementById('btn-present-mode');
  const editBtn = document.getElementById('btn-edit-mode');
  const presentView = document.getElementById('presentation-view');
  const editView = document.getElementById('editor-view');
  const editFooter = document.querySelector('.editor-footer-controls');

  if (isEditMode) {
    document.body.classList.add('edit-mode');
    presentBtn.classList.remove('active');
    editBtn.classList.add('active');
    presentView.style.display = 'none';
    editView.style.display = 'flex';
    editFooter.style.display = 'flex';
    renderEditorView();
  } else {
    document.body.classList.remove('edit-mode');
    presentBtn.classList.add('active');
    editBtn.classList.remove('active');
    presentView.style.display = 'flex';
    editView.style.display = 'none';
    editFooter.style.display = 'none';
    renderPresentationView();
  }
}

// Fullscreen capability
function toggleFullscreen() {
  const elem = document.querySelector('.slide-deck-viewport');
  if (!document.fullscreenElement) {
    elem.requestFullscreen().catch(err => {
      alert(`Error attempting to enable fullscreen mode: ${err.message}`);
    });
  } else {
    document.exitFullscreen();
  }
}

// Slide Navigation functions
function nextSlide() {
  if (currentSlideIndex < slides.length - 1) {
    currentSlideIndex++;
    updateActiveSlide();
  }
}

function prevSlide() {
  if (currentSlideIndex > 0) {
    currentSlideIndex--;
    updateActiveSlide();
  }
}

function firstSlide() {
  currentSlideIndex = 0;
  updateActiveSlide();
}

function lastSlide() {
  currentSlideIndex = slides.length - 1;
  updateActiveSlide();
}

// Update Active Slide display in presentation mode
function updateActiveSlide() {
  const slideElements = document.querySelectorAll('#presentation-view .slide');
  slideElements.forEach((el, index) => {
    if (index === currentSlideIndex) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });

  // Update Navigation Counter & progress fill
  document.getElementById('slide-counter-text').innerText = `${currentSlideIndex + 1} / ${slides.length}`;
  
  const percentage = slides.length > 1 ? (currentSlideIndex / (slides.length - 1)) * 100 : 0;
  document.getElementById('slide-progress-fill').style.width = `${percentage}%`;
}

// Render Controller
function render() {
  if (isEditMode) {
    renderEditorView();
  } else {
    renderPresentationView();
  }
}

// Render Presentation View
function renderPresentationView() {
  const container = document.getElementById('slide-viewport');
  container.innerHTML = '';

  slides.forEach((slide, index) => {
    const slideDiv = document.createElement('div');
    slideDiv.className = `slide slide-layout-${slide.layout}`;
    if (index === currentSlideIndex) {
      slideDiv.classList.add('active');
    }

    slideDiv.innerHTML = getSlideHTML(slide, index, false);
    container.appendChild(slideDiv);
  });

  updateActiveSlide();
}

// Render Editor View
function renderEditorView() {
  const container = document.getElementById('editor-view');
  container.innerHTML = '';

  slides.forEach((slide, index) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'editor-slide-wrapper';
    wrapper.id = `editor-slide-${index}`;

    wrapper.innerHTML = `
      <div class="slide-editor-header">
        <div class="slide-label">
          <span class="slide-badge">Slide ${index + 1}</span>
          <span style="font-weight: 500; font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase;">Layout: ${slide.layout}</span>
        </div>
        <div class="slide-editor-actions">
          <button class="action-icon-btn" onclick="moveSlideUp(${index})" title="Move Slide Up">▲</button>
          <button class="action-icon-btn" onclick="moveSlideDown(${index})" title="Move Slide Down">▼</button>
          <button class="action-icon-btn delete" onclick="deleteSlide(${index})" title="Delete Slide">🗑️</button>
        </div>
      </div>
      <div class="editor-slide-container slide-layout-${slide.layout}">
        ${getSlideHTML(slide, index, true)}
      </div>
    `;

    container.appendChild(wrapper);
  });

  // Bind input listeners to save edit changes immediately to state
  bindEditableListeners();
}

// Template Generator helper
function getSlideHTML(slide, index, editable) {
  let html = _getSlideHTMLRaw(slide, index, editable);
  if (slide.layout !== 'title') {
    html += `
      <div class="slide-footer-logo">
        <img src="tencore_digital_labs_logo.png" alt="TenCore Digital Labs Logo" class="footer-logo-img">
      </div>
    `;
  }
  return html;
}

function _getSlideHTMLRaw(slide, index, editable) {
  const attr = (fieldName) => editable ? `contenteditable="true" data-slide-index="${index}" data-field="${fieldName}"` : '';

  switch (slide.layout) {
    case 'title':
      return `
        <div class="logo-container">
          <img src="xcore_labs_logo.png" alt="Xcore Labs Logo" class="title-logo-img">
        </div>
        <h1 ${attr('title')}>${slide.title}</h1>
        <p class="subtitle" ${attr('subtitle')}>${slide.subtitle}</p>
      `;

    case 'divider':
      return `
        ${slide.hideAccent ? '' : '<div class="divider-accent"></div>'}
        <h2 ${attr('title')}>${slide.title}</h2>
        <p ${attr('description')}>${slide.description}</p>
        ${slide.highlight ? `
          <div class="divider-highlight-badge" ${attr('highlight')}>
            ${slide.highlight}
          </div>
        ` : ''}
      `;

    case 'instructor':
      const bioListHTML = slide.bioPoints.map((point, pIndex) => `
        <div class="bio-point">
          <strong>${point.label}</strong>
          <p ${attr(`bioPoints-${pIndex}-text`)}>${point.text}</p>
        </div>
      `).join('');

      const sidebarBulletsHTML = slide.sidebarBullets.map((bullet, bIndex) => `
        <li ${attr(`sidebarBullets-${bIndex}`)}><span>${bullet}</span></li>
      `).join('');

      return `
        <div class="slide-header">
          <div class="slide-subtitle" ${attr('subtitle')}>${slide.subtitle}</div>
          <h2 class="slide-title" ${attr('title')}>${slide.title}</h2>
        </div>
        <div class="slide-body">
          <div class="instructor-profile">
            <div class="instructor-bio">
              <h3 style="font-size: 2rem; color: var(--text-primary);" ${attr('instructorName')}>${slide.instructorName}</h3>
              <div class="instructor-title" ${attr('instructorTitle')}>${slide.instructorTitle}</div>
              <div class="instructor-details">
                ${bioListHTML}
              </div>
              
              <!-- Company Logos Section -->
              <div class="company-logos-section">
                <div class="logos-title">Global Systems Built For & Collaborated With</div>
                <div class="company-logos-grid">
                  <div class="company-logo-badge" title="Larsen & Toubro">
                    <img src="https://logo.clearbit.com/larsentoubro.com" onerror="this.style.display='none'; this.nextElementSibling.style.display='inline-flex';" alt="Larsen & Toubro">
                    <span class="company-logo-text" style="display:none;">L&T</span>
                  </div>
                  <div class="company-logo-badge" title="eInfochips">
                    <img src="https://logo.clearbit.com/einfochips.com" onerror="this.style.display='none'; this.nextElementSibling.style.display='inline-flex';" alt="eInfochips">
                    <span class="company-logo-text" style="display:none;">eInfochips</span>
                  </div>
                  <div class="company-logo-badge" title="Wipro">
                    <img src="https://logo.clearbit.com/wipro.com" onerror="this.style.display='none'; this.nextElementSibling.style.display='inline-flex';" alt="Wipro">
                    <span class="company-logo-text" style="display:none;">Wipro</span>
                  </div>
                  <div class="company-logo-badge" title="Konami Gaming">
                    <img src="https://logo.clearbit.com/konami.com" onerror="this.style.display='none'; this.nextElementSibling.style.display='inline-flex';" alt="Konami Gaming">
                    <span class="company-logo-text" style="display:none;">Konami</span>
                  </div>
                  <div class="company-logo-badge" title="Intel">
                    <img src="https://logo.clearbit.com/intel.com" onerror="this.style.display='none'; this.nextElementSibling.style.display='inline-flex';" alt="Intel">
                    <span class="company-logo-text" style="display:none;">Intel</span>
                  </div>
                  <div class="company-logo-badge" title="Capgemini">
                    <img src="https://logo.clearbit.com/capgemini.com" onerror="this.style.display='none'; this.nextElementSibling.style.display='inline-flex';" alt="Capgemini">
                    <span class="company-logo-text" style="display:none;">Capgemini</span>
                  </div>
                  <div class="company-logo-badge" title="EMC">
                    <img src="https://logo.clearbit.com/emc.com" onerror="this.style.display='none'; this.nextElementSibling.style.display='inline-flex';" alt="EMC">
                    <span class="company-logo-text" style="display:none;">EMC</span>
                  </div>
                  <div class="company-logo-badge" title="D+H">
                    <img src="https://logo.clearbit.com/dh.com" onerror="this.style.display='none'; this.nextElementSibling.style.display='inline-flex';" alt="D+H">
                    <span class="company-logo-text" style="display:none;">D+H</span>
                  </div>
                  <div class="company-logo-badge" title="Chartboost">
                    <img src="https://logo.clearbit.com/chartboost.com" onerror="this.style.display='none'; this.nextElementSibling.style.display='inline-flex';" alt="Chartboost">
                    <span class="company-logo-text" style="display:none;">Chartboost</span>
                  </div>
                  <div class="company-logo-badge" title="Vungle">
                    <img src="https://logo.clearbit.com/vungle.com" onerror="this.style.display='none'; this.nextElementSibling.style.display='inline-flex';" alt="Vungle">
                    <span class="company-logo-text" style="display:none;">Vungle</span>
                  </div>
                  <div class="company-logo-badge" title="Rakuten">
                    <img src="https://logo.clearbit.com/rakuten.com" onerror="this.style.display='none'; this.nextElementSibling.style.display='inline-flex';" alt="Rakuten">
                    <span class="company-logo-text" style="display:none;">Rakuten</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="instructor-sidebar">
              <div class="instructor-image-container">
                <img src="instructor_avatar.png" alt="Instructor Profile Image">
              </div>
              <div class="card secondary-card" style="width: 100%;">
                <h4 class="card-title" ${attr('sidebarTitle')}>${slide.sidebarTitle}</h4>
                <div class="card-body">
                  <ul class="bullet-list" style="gap: 8px; font-size: 0.85rem;">
                    ${sidebarBulletsHTML}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;

    case 'twocol':
      const leftBulletsHTML = slide.leftBullets ? slide.leftBullets.map((b, bIndex) => `
        <li ${attr(`leftBullets-${bIndex}`)}><span>${b}</span></li>
      `).join('') : '';

      const rightSectionHTML = slide.rightBullets ? `
        <ul class="bullet-list">
          ${slide.rightBullets.map((b, bIndex) => `<li ${attr(`rightBullets-${bIndex}`)}><span>${b}</span></li>`).join('')}
        </ul>
      ` : `<p ${attr('rightBody')}>${slide.rightBody}</p>`;

      return `
        <div class="slide-header">
          <div class="slide-subtitle" ${attr('subtitle')}>${slide.subtitle}</div>
          <h2 class="slide-title" ${attr('title')}>${slide.title}</h2>
        </div>
        <div class="slide-body">
          ${slide.description ? `<p class="slide-intro-text" ${attr('description')}>${slide.description}</p>` : ''}
          <div class="col-layout">
            <div class="col-left">
              <h3 style="font-size: 1.3rem; margin-bottom: 20px; color: var(--primary);" ${attr('leftTitle')}>${slide.leftTitle}</h3>
              <ul class="bullet-list" style="gap: 12px;">
                ${leftBulletsHTML}
              </ul>
            </div>
            <div class="col-right">
              <h3 style="font-size: 1.3rem; margin-bottom: 20px; color: var(--secondary);" ${attr('rightTitle')}>${slide.rightTitle}</h3>
              <div class="card">
                ${rightSectionHTML}
              </div>
            </div>
          </div>
        </div>
      `;

    case 'threecard':
      const cardsHTML = slide.cards.map((card, cIndex) => `
        <div class="card ${card.class || ''}">
          <h3 class="card-title">
            <span class="card-title-icon">${card.icon}</span>
            <span ${attr(`cards-${cIndex}-title`)}>${card.title}</span>
          </h3>
          <p class="card-body" ${attr(`cards-${cIndex}-body`)}>${card.body}</p>
        </div>
      `).join('');

      return `
        <div class="slide-header">
          <div class="slide-subtitle" ${attr('subtitle')}>${slide.subtitle}</div>
          <h2 class="slide-title" ${attr('title')}>${slide.title}</h2>
        </div>
        <div class="slide-body">
          <div class="grid-cards-3">
            ${cardsHTML}
          </div>
        </div>
      `;

    case 'fourcard':
      const fourCardsHTML = slide.cards.map((card, cIndex) => `
        <div class="card ${card.class || ''}">
          <h3 class="card-title">
            <span class="card-title-icon">${card.icon}</span>
            <span ${attr(`cards-${cIndex}-title`)}>${card.title}</span>
          </h3>
          <p class="card-body" style="font-size: 0.95rem; line-height: 1.45;" ${attr(`cards-${cIndex}-body`)}>${card.body}</p>
        </div>
      `).join('');

      return `
        <div class="slide-header">
          <div class="slide-subtitle" ${attr('subtitle')}>${slide.subtitle}</div>
          <h2 class="slide-title" ${attr('title')}>${slide.title}</h2>
        </div>
        <div class="slide-body" style="padding: 10px 0;">
          <div class="grid-cards-4">
            ${fourCardsHTML}
          </div>
        </div>
      `;

    case 'prompt_challenge':
      const challengeLeftBullets = slide.leftBullets.map((b, bIndex) => `
        <li ${attr(`leftBullets-${bIndex}`)}><span>${b}</span></li>
      `).join('');

      const challengeRightBullets = slide.rightBullets.map((b, bIndex) => `
        <li ${attr(`rightBullets-${bIndex}`)}><span>${b}</span></li>
      `).join('');

      return `
        <div class="slide-header">
          <div class="slide-subtitle" ${attr('subtitle')}>${slide.subtitle}</div>
          <h2 class="slide-title" ${attr('title')}>${slide.title}</h2>
        </div>
        <div class="slide-body">
          <div class="col-layout">
            <div class="col-left">
              <div class="card primary-card" style="height: 100%; justify-content: flex-start;">
                <h3 class="card-title" style="color: var(--primary); margin-bottom: 10px;" ${attr('leftTitle')}>${slide.leftTitle}</h3>
                ${slide.leftIntro ? `<p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 15px;" ${attr('leftIntro')}>${slide.leftIntro}</p>` : ''}
                <ul class="bullet-list" style="gap: 12px; font-size: 0.92rem;">
                  ${challengeLeftBullets}
                </ul>
              </div>
            </div>
            <div class="col-right">
              <div class="card" style="height: 100%; border-top: 4px solid var(--secondary); justify-content: space-between;">
                <div>
                  <h3 class="card-title" style="color: var(--secondary); margin-bottom: 15px;" ${attr('rightTitle')}>${slide.rightTitle}</h3>
                  <ul class="bullet-list" style="gap: 12px; font-size: 0.88rem;">
                    ${challengeRightBullets}
                  </ul>
                </div>
                ${slide.rightFootnote ? `
                  <div style="border-top: 1px solid var(--border-color); padding-top: 12px; font-weight: 600; font-size: 0.82rem; color: #475569; text-align: center; font-style: italic; line-height: 1.4;" ${attr('rightFootnote')}>
                    ${slide.rightFootnote}
                  </div>
                ` : ''}
              </div>
            </div>
          </div>
        </div>
      `;

    case 'bullets':
      const mainBullets = slide.bullets.map((b, bIndex) => `
        <li ${attr(`bullets-${bIndex}`)}><span>${b}</span></li>
      `).join('');

      return `
        <div class="slide-header">
          <div class="slide-subtitle" ${attr('subtitle')}>${slide.subtitle}</div>
          <h2 class="slide-title" ${attr('title')}>${slide.title}</h2>
        </div>
        <div class="slide-body">
          <div style="max-width: 800px; margin: 0 auto; width: 100%;">
            <ul class="bullet-list">
              ${mainBullets}
            </ul>
          </div>
        </div>
      `;

    case 'blueprint':
      const stepsHTML = slide.steps.map((step, sIndex) => `
        <div class="blueprint-step">
          <div class="step-num">${step.num}</div>
          <h3 class="step-title" ${attr(`steps-${sIndex}-title`)}>${step.title}</h3>
          <p class="step-desc" ${attr(`steps-${sIndex}-desc`)}>${step.desc}</p>
        </div>
      `).join('');

      return `
        <div class="slide-header">
          <div class="slide-subtitle" ${attr('subtitle')}>${slide.subtitle}</div>
          <h2 class="slide-title" ${attr('title')}>${slide.title}</h2>
        </div>
        <div class="slide-body">
          <div class="blueprint-container">
            ${stepsHTML}
          </div>
        </div>
      `;

    case 'twocard':
      const twocardLeftBullets = slide.leftBullets ? slide.leftBullets.map((b, bIndex) => `
        <li ${attr(`leftBullets-${bIndex}`)}><span>${b}</span></li>
      `).join('') : '';

      const twocardRightSection = slide.rightBullets ? `
        <ul class="bullet-list" style="gap: 12px; font-size: 0.95rem;">
          ${slide.rightBullets.map((b, bIndex) => `<li ${attr(`rightBullets-${bIndex}`)}><span>${b}</span></li>`).join('')}
        </ul>
      ` : `<p ${attr('rightBody')} style="font-size: 0.95rem; line-height: 1.55; color: var(--text-secondary);">${slide.rightBody}</p>`;

      return `
        <div class="slide-header">
          <div class="slide-subtitle" ${attr('subtitle')}>${slide.subtitle}</div>
          <h2 class="slide-title" ${attr('title')}>${slide.title}</h2>
        </div>
        <div class="slide-body">
          <div class="col-layout">
            <div class="col-left">
              <div class="card primary-card" style="height: 100%; justify-content: flex-start; border-top: 4px solid var(--primary); padding: 24px 28px;">
                <h3 class="card-title" style="color: var(--primary); margin-bottom: 15px;" ${attr('leftTitle')}>${slide.leftTitle}</h3>
                <ul class="bullet-list" style="gap: 12px; font-size: 0.92rem;">
                  ${twocardLeftBullets}
                </ul>
              </div>
            </div>
            <div class="col-right">
              <div class="card" style="height: 100%; border-top: 4px solid var(--secondary); justify-content: flex-start; padding: 24px 28px;">
                <h3 class="card-title" style="color: var(--secondary); margin-bottom: 15px;" ${attr('rightTitle')}>${slide.rightTitle}</h3>
                <div class="card-body" style="padding: 0;">
                  ${twocardRightSection}
                </div>
              </div>
            </div>
          </div>
        </div>
      `;

    case 'qa':
      return `
        <div class="slide-layout-title" style="background: none; padding: 0; min-height: auto;">
          <h1 style="font-size: 4rem; margin-bottom: 12px;" ${attr('title')}>${slide.title}</h1>
          <p style="font-size: 1.3rem; font-weight: 600; color: var(--primary); margin-bottom: 30px;" ${attr('subtitle')}>${slide.subtitle}</p>
          <div class="qa-card-container">
            <p style="font-size: 1.15rem; color: var(--text-secondary); max-width: 600px;" ${attr('body')}>${slide.body}</p>
            <div class="contact-pill">
              <span>🌐 <a href="https://${slide.web}" target="_blank" ${attr('web')}>${slide.web}</a></span>
              <span>✉️ <a href="mailto:${slide.email}" ${attr('email')}>${slide.email}</a></span>
              ${slide.linkedin ? `
                <span style="display: inline-flex; align-items: center; gap: 4px;">
                  <svg style="width:16px; height:16px; fill:#0077b5; vertical-align:middle; margin-top:-2px;" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  <a href="${slide.linkedin}" target="_blank" ${attr('linkedin')}>${slide.linkedin}</a>
                </span>
              ` : ''}
            </div>
            ${slide.qrCodeData ? `
              <div class="qr-code-container" style="margin-top: 25px; display: flex; flex-direction: column; align-items: center; gap: 8px;">
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=128x128&data=${encodeURIComponent(slide.qrCodeData)}" alt="QR Code" style="width: 128px; height: 128px; border: 4px solid white; box-shadow: 0 4px 12px rgba(0,0,0,0.08); border-radius: 8px;" />
                <span style="font-size: 0.8rem; color: var(--text-secondary); font-weight: 600;">Scan to Know the Founder</span>
              </div>
            ` : ''}
          </div>
        </div>
      `;

    default:
      return `<p>Layout template "${slide.layout}" not implemented.</p>`;
  }
}

// Bind listeners to sync inline HTML edits back to the State
function bindEditableListeners() {
  const editables = document.querySelectorAll('[contenteditable="true"]');
  editables.forEach(el => {
    el.addEventListener('blur', (e) => {
      const slideIndex = parseInt(el.getAttribute('data-slide-index'));
      const field = el.getAttribute('data-field');
      const value = el.innerHTML.trim();

      updateSlideState(slideIndex, field, value);
    });

    // Handle paste as plain text
    el.addEventListener('paste', (e) => {
      e.preventDefault();
      const text = e.clipboardData.getData('text/plain');
      document.execCommand('insertHTML', false, text);
    });
  });
}

// State Mutator
function updateSlideState(slideIndex, field, value) {
  const slide = slides[slideIndex];
  
  if (field.includes('-')) {
    // Array properties e.g., cards-0-title, bioPoints-1-text
    const parts = field.split('-');
    const propName = parts[0];
    const index = parseInt(parts[1]);
    const subProp = parts[2];

    if (subProp) {
      slide[propName][index][subProp] = value;
    } else {
      slide[propName][index] = value;
    }
  } else {
    // Simple values
    slide[field] = value;
  }
}

// Add New Slide
function addNewSlide(layout) {
  let newSlide = { layout: layout };

  // Set default values based on chosen layout
  switch (layout) {
    case 'title':
      newSlide.title = 'New Slide Title';
      newSlide.subtitle = 'New Slide Subtitle or Description goes here.';
      break;
    case 'divider':
      newSlide.title = 'Section Title';
      newSlide.description = 'This is a divider slide description.';
      break;
    case 'twocol':
      newSlide.title = 'Two Column Layout';
      newSlide.subtitle = 'Subtitle';
      newSlide.leftTitle = 'Left Side Topic';
      newSlide.leftBullets = ['Point number one', 'Point number two', 'Point number three'];
      newSlide.rightTitle = 'Right Side Card';
      newSlide.rightBody = 'This is a description inside the right-hand card pane. It can hold paragraphs or descriptions.';
      break;
    case 'threecard':
      newSlide.title = 'Three Card Matrix';
      newSlide.subtitle = 'Subtitle';
      newSlide.cards = [
        { title: 'Card Alpha', icon: '⚡', body: 'Description of the first element in your grid.', class: 'myth' },
        { title: 'Card Beta', icon: '🛡️', body: 'Description of the second element in your grid.', class: 'reality' },
        { title: 'Card Gamma', icon: '📈', body: 'Description of the third element in your grid.', class: 'opportunity' }
      ];
      break;
    case 'bullets':
      newSlide.title = 'Key Point Summary';
      newSlide.subtitle = 'Subtitle';
      newSlide.bullets = [
        'Important key point to remember.',
        'Another key point reflecting business values.',
        'Final concluding thought or step.'
      ];
      break;
    default:
      newSlide.title = 'New Slide';
      newSlide.subtitle = 'Subtitle';
      newSlide.layout = 'title';
  }

  slides.push(newSlide);
  render();
  
  // Save state
  localStorage.setItem('bba_slides_data', JSON.stringify(slides));
  
  // Scroll to new slide in editor
  setTimeout(() => {
    const el = document.getElementById(`editor-slide-${slides.length - 1}`);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, 100);

  showToast('New slide added at the end.');
}

// Slide Order Mutators
window.moveSlideUp = function(index) {
  if (index > 0) {
    const temp = slides[index];
    slides[index] = slides[index - 1];
    slides[index - 1] = temp;
    render();
    localStorage.setItem('bba_slides_data', JSON.stringify(slides));
    showToast('Slide moved up.');
  }
};

window.moveSlideDown = function(index) {
  if (index < slides.length - 1) {
    const temp = slides[index];
    slides[index] = slides[index + 1];
    slides[index + 1] = temp;
    render();
    localStorage.setItem('bba_slides_data', JSON.stringify(slides));
    showToast('Slide moved down.');
  }
};

window.deleteSlide = function(index) {
  if (slides.length <= 1) {
    alert('A presentation must contain at least one slide.');
    return;
  }

  if (confirm(`Are you sure you want to delete Slide ${index + 1}?`)) {
    slides.splice(index, 1);
    
    // Adjust slide indices
    if (currentSlideIndex >= slides.length) {
      currentSlideIndex = slides.length - 1;
    }
    
    render();
    localStorage.setItem('bba_slides_data', JSON.stringify(slides));
    showToast('Slide deleted.');
  }
};

// PDF Exporter Trigger
function exportToPDF() {
  // Ensure we are in Edit Mode first so that all slides flow sequentially in DOM
  if (!isEditMode) {
    setViewMode(true);
  }

  // Display helpful alert/instructions banner
  const banner = document.createElement('div');
  banner.id = 'instructions-banner';
  banner.style.cssText = `
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: #1e293b;
    color: white;
    padding: 16px 24px;
    border-radius: 8px;
    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.3);
    z-index: 9999;
    font-size: 0.9rem;
    text-align: center;
    max-width: 450px;
    line-height: 1.4;
  `;
  banner.innerHTML = `
    <strong style="color: var(--secondary); display: block; margin-bottom: 6px; font-size: 1rem;">PDF Conversion Guide</strong>
    In the print dialog, adjust the following settings for best results:<br>
    1. Set <strong>Destination</strong> to "Save as PDF"<br>
    2. Set <strong>Layout</strong> to "Landscape"<br>
    3. Under More Settings, set <strong>Margins</strong> to "None"<br>
    4. Check <strong>"Background graphics"</strong> (crucial for slides layout)<br>
    <button class="btn btn-primary" style="margin-top: 12px; padding: 4px 12px; font-size: 0.8rem; width: 100%;" onclick="this.parentElement.remove(); window.print();">Open Print Dialog</button>
  `;
  document.body.appendChild(banner);
}

// Toast Notification Panel
function showToast(message) {
  const oldToast = document.querySelector('.toast-notification');
  if (oldToast) oldToast.remove();

  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  toast.style.cssText = `
    position: fixed;
    bottom: 24px;
    right: 24px;
    background: #0f172a;
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
    z-index: 1000;
    font-size: 0.85rem;
    font-weight: 600;
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.3s ease;
  `;
  toast.innerText = message;
  document.body.appendChild(toast);

  // Trigger animation
  setTimeout(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
  }, 10);

  // Fade out
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Start application when DOM loads
window.addEventListener('DOMContentLoaded', init);

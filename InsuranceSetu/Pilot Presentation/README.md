# InsuranceSetu • Founding Partner Pilot Proposal Deck

An executive, client-facing presentation and proposal deck engineered by **TenCore Digital Labs Private Limited**. This deck is tailored specifically for onboarding select early-adopter insurance agencies into the **Founding Partner Pilot Program**.

---

## 📁 Deck Assets & Deliverables

```text
InsuranceSetu/
├── InsuranceSetu_Founding_Partner_Pilot_Proposal.pdf  # Master 16:9 Client Proposal PDF
└── Pilot Presentation/
    ├── index.html                                    # Interactive browser presentation studio
    ├── style.css                                     # TenCore design system & 16:9 print engine
    ├── deck-config.js                                # 11 Slide configurations & commercial terms
    ├── app.js                                        # Navigation, scaling & print exporter
    ├── Pics/                                         # High-resolution logos & QR codes
    └── InsuranceSetu_Founding_Partner_Pilot_Proposal.pdf # Local copy of the presentation PDF
```

---

## 🎯 Executive Proposition: The Founding Partner Deal

The **Founding Partner Program** offers early-adopter agencies (Cohort 1, strictly limited to 5 agencies) an exclusive VIP partnership with zero financial risk:

| What the Agency Receives | What the Agency Commits |
|---|---|
| **30 Days Complimentary PRO Access** (₹2,999/mo value at ₹0 cost) | **Use InsuranceSetu** as primary renewal tool for 30 consecutive days |
| **White-Glove 1-on-1 Setup & Data Ingestion** (Zero admin friction) | **15-Minute Weekly Feedback Touchpoint** with systems architects |
| **Direct WhatsApp Hotline to Founders** (Devendra Vaja & engineering team) | **Share 2–3 historical insurer statement formats** for parser tuning |
| **50% Lifetime Subscription Discount** locked in forever | **Written Testimonial & 1 Referral** upon first ₹50,000+ premium recovery |

### Early Bird Commercial Tiers (Locked for Life)
* **Founder Special (Solo):** **₹499/mo** (Billed annually at ₹5,988 • Regular: ₹999/mo / ₹11,988/yr)
* **Agency Pro (Founding Deal):** **₹1,499/mo** (Billed annually at ₹17,988 • Regular: ₹2,999/mo / ₹35,988/yr)
* **Enterprise Broking:** Custom deployment for large broker networks.

---

## 📑 11 Strategic Presentation Slides

| # | Slide Title | Layout | Key Message & Takeaway |
|:---:|---|:---:|---|
| **1** | **InsuranceSetu • Founding Partner Program** | `title` | Executive cover, Cohort 1 invitation, Devendra Vaja leadership. |
| **2** | **The Hidden ₹20,000/Month Cost of Traditional Renewals** | `twocol` | 25+ hours manual typing trap vs. 1-click 5s PDF ingestion. |
| **3** | **From Raw Insurer PDF to Paid UPI Premium in 60s** | `fourcard` | 4-step pipeline: PDF drop, phonetic match, WhatsApp, family dossier. |
| **4** | **Tailored for High-Volume LIC & Multi-Line Broking** | `twocol` | LIC tabular dues & mother-tongue vs. multi-company general broker cross-sell. |
| **5** | **The 30-Minute Live "White-Glove" Setup Session** | `blueprint` | Zero-effort onboarding: account, brand profile, statement drop, first reminder. |
| **6** | **Your 7-Day Rapid Value Realization Journey** | `blueprint` | Day 1 ingestion &rarr; Day 2 ₹50k+ cash recovery &rarr; Day 4 HNI delight &rarr; Day 7 deal. |
| **7** | **The Founding Partner Deal: A True Growth Partnership** | `twocol` | Clear mutual terms: VIP privileges vs. feedback & testimonial commitment. |
| **8** | **Exclusive Founding Partner Lifetime Pricing** | `pricing` | Permanent 50% discount tiers (Solo ₹499/mo, Agency Pro ₹1,499/mo). |
| **9** | **₹20,500+ Monthly Value for Less Than ₹17/Day** | `table` | Itemized ROI comparison table + 100% breakeven & ₹50k target guarantee. |
| **10** | **Enterprise Architecture & Priority Founder SLA** | `differentiators` | Deterministic math validation, 100% data sovereignty, <4hr patch SLA. |
| **11** | **Claim Your Agency's Founding Partner Slot** | `qa` | Direct executive contacts, WhatsApp link, and QR scan to schedule walkthrough. |

---

## 🖥️ How to Present & Export to PDF

### Presenting Live (Screen Share / Walkthrough)
1. Open `index.html` in Google Chrome or any modern browser.
2. Press **`F`** to enter fullscreen presentation mode.
3. Use **`Space`** or **`Right Arrow`** to advance slides, and **`Left Arrow`** to go back.

### Exporting PDF Directly
* **Via Browser UI:** Click **`📄 Export to PDF`** in the top navigation bar. Select Landscape, Margins: `None`, and check `Background graphics`.
* **Via Headless Chrome CLI:**
  ```bash
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
    --headless --disable-gpu --no-pdf-header-footer \
    --print-to-pdf="InsuranceSetu_Founding_Partner_Pilot_Proposal.pdf" \
    "file://$(pwd)/index.html?print=true"
  ```

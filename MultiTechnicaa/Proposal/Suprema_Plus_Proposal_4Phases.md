# Proposal: Suprema+ Smart Steam System
**A premium, app-controlled steam generator line for gyms, resorts, and spas**

**Prepared for:** MultiTechnicaa (Mr. Kirit Parmar)  
**Prepared by:** Devendra Vaja  
**Date:** 30 August 2026  

---

## 1) Opportunity

MultiTechnicaa already offers reliable, cost-effective steam generators in the **₹25k–₹1.05L** range, widely used in gyms, hotels, and homes. [web:129]

**Market trend:** Competitors (MrSteam, ThermaSol, Helo, TOLO) now win premium projects by offering **mobile app control, remote preheat, and diagnostics**. Gym and resort buyers increasingly expect "smart" features as standard. [web:7][web:10][web:15]

**Gap:** MultiTechnicaa's current lineup is strong on hardware value but does not yet offer a **branded smart ecosystem** to command higher margins in commercial projects.

---

## 2) Solution: Suprema+ Smart Steam System

Launch a **premium product line** – **Suprema+** – with:

- **Same robust hardware base**, upgraded with BLE (and optional Wi‑Fi gateway).  
- **Mobile app (iOS + Android)** to:
  - Turn on/off, set temperature and session time.  
  - Configure ambience temp, cool‑off timer, drain time, alarm, Bluetooth on/off.  
  - View real-time status (heating, steaming, cooling, draining, faults).  
  - Manage multiple rooms/units from a single screen (for gyms/resorts).  
- **Future-ready architecture**:
  - Bluetooth Mesh ready for multi-panel installations.  
  - Optional Wi‑Fi gateway for remote preheat, scheduling, and diagnostics.

**Value to MultiTechnicaa:**

- Differentiate from low-cost competitors.  
- Justify **20–30% higher ASP** on premium units.  
- Strengthen relationships with gyms, resorts, and spa integrators.

---

## 3) Business Case (Simple ROI)

**Assumptions (illustrative):**

- Current 12 kW unit price: ~₹50,000.  
- Suprema+ 12 kW smart unit target price: **₹65,000–₹70,000**.  
- Uplift: **₹15,000–₹20,000 per unit**.

**Break-even logic:**

- If development + consultation investment = **₹30–50 lakh**,  
- Break-even at **~2,000–3,000 premium units** over 2–3 years (or fewer if combined with service contracts and higher-margin projects).  
- Even **500–800 premium units/year** can make this attractive if Suprema+ becomes the default choice for commercial projects.

This is not just an "app cost"; it's a **product line upgrade** that increases per-unit margin and win rate in commercial tenders.

---

## 4) Estimated PCB & Electronics Cost per Unit

For a Suprema+ unit (BLE-ready control board, optional Wi‑Fi gateway later):

**Typical BOM (electronics only, per unit, indicative):**

- BLE/BLE Mesh module (nRF52840 / ESP32‑C3/S3): **₹250–₹600** (volume dependent). [web:116][web:117][web:124][web:125]  
- MCU (if separate), power supply, connectors, enclosure for PCB: **₹400–₹800**.  
- Display (if any), buttons, sensors, wiring harness: **₹600–₹1,500**.  
- Assembly, testing, margin for PCB vendor: **₹400–₹800**.

**Estimated total electronics cost per unit:**  
- **₹1,650–₹3,700** per steam generator (depending on features and volumes).

At **1,000 units/year**, that's **₹16.5L–₹37L/year** in PCB/electronics spend.  
At **3,000 units/year**, that's **₹49.5L–₹1.11Cr/year**.

This context helps show that a **₹45L software investment** is a small fraction of the overall electronics program and can be amortized over a few thousand premium units.

---

## 5) Implementation Plan (4 Phases) + Payment Plan

Total target budget: **₹45,00,000** (₹45 lakh), split into 4 phases to reduce cash-flow pressure.

### Phase 1 – Discovery & Prototype (4–6 weeks)  
**Budget:** ₹6,00,000 (fixed starting point; negotiable within ₹5–7L)

**Scope:**

- Finalize BLE GATT profile (command → ACK → status).  
- Select BLE/BLE Mesh–ready hardware (e.g., nRF52840 / ESP32).  
- Build a **basic prototype app** (BLE connect, start/stop, set temp/time, status display).  
- Pilot with **2–3 friendly gyms/resorts** for feedback.

**Payment plan (Phase 1):**

- **40% on kickoff** – ₹2,40,000  
- **40% on delivery of working prototype** (app + firmware demo) – ₹2,40,000  
- **20% on completion of pilot feedback report & go/no-go decision** – ₹1,20,000  

**Outcome:** Working demo + validated feature set + clear go/no-go for Phase 2.

---

### Phase 2 – MVP Core (8–10 weeks)  
**Budget:** ₹12,00,000

**Scope:**

- Full cross-platform app (iOS + Android) – core features only.  
- Multi-unit support (list view), presets, basic diagnostics, fault codes.  
- Firmware integration with production-grade BLE stack.  
- Internal testing and initial field testing.

**Payment plan (Phase 2):**

- **30% on Phase 2 kickoff** – ₹3,60,000  
- **40% on beta app + integrated firmware** (internal testing ready) – ₹4,80,000  
- **30% on MVP Core sign-off** (after initial field testing) – ₹3,60,000  

**Outcome:** Market-ready core app and firmware for early commercial launch.

---

### Phase 3 – Commercial Readiness (8–10 weeks)  
**Budget:** ₹15,00,000

**Scope:**

- Enhanced UX, onboarding, error handling, offline behavior.  
- Advanced diagnostics, maintenance reminders, usage stats.  
- App store preparation (assets, compliance, privacy policy).  
- Pilot deployments with 5–10 commercial sites (gyms/resorts).

**Payment plan (Phase 3):**

- **30% on Phase 3 kickoff** – ₹4,50,000  
- **40% on feature-complete build** (all planned features implemented) – ₹6,00,000  
- **30% on final acceptance** (after pilot validation & performance sign-off) – ₹4,50,000  

**Outcome:** Commercially deployable Suprema+ system ready for wider rollout.

---

### Phase 4 – Scale & Enhancements (10–12 weeks, optional)  
**Budget:** ₹12,00,000

**Scope:**

- Wi‑Fi gateway integration (remote preheat, scheduling).  
- Admin dashboard / multi-site management (optional).  
- Advanced analytics, usage-based insights, optional cloud features.  

**Payment plan (Phase 4):**

- **30% on Phase 4 kickoff** – ₹3,60,000  
- **40% on feature-complete build** – ₹4,80,000  
- **30% on final acceptance** (after field validation) – ₹3,60,000  

**Outcome:** Full-featured smart ecosystem to compete with MrSteam/ThermaSol in high-end projects. [web:10][web:12][web:15]

---

## 6) Investment Summary & Cash Flow View

**Total budget (Phases 1–4):** ₹45,00,000

**Cash flow over time (example):**

- **Month 0–1.5 (Phase 1):** ₹6,00,000  
- **Month 2–4.5 (Phase 2):** ₹12,00,000  
- **Month 5–7.5 (Phase 3):** ₹15,00,000  
- **Month 8–11 (Phase 4):** ₹12,00,000  

This 4-phase structure keeps each tranche smaller and ties payments to **visible, working deliverables**, reducing perceived risk.

**Store fees (ongoing):**

- Google Play: **$25 one-time** (~₹2,100–₹2,200). [web:99][web:105]  
- Apple Developer Program: **$99/year** (~₹8,300–₹8,500/year). [web:101][web:112]

**Sideloading option:**

- Android: easy APK distribution for B2B pilots (no mandatory Play listing).  
- iOS: TestFlight / Apple Business Manager for controlled pilots; App Store for general launch.

---

## 7) Alternative Deal Structures

If a straight ₹45L fixed-fee feels heavy, here are two alternative models with clear pricing examples.

### A) Lower Upfront + Per-Unit Royalty

**Idea:** Reduce cash outlay now; share upside as Suprema+ sells.

**Example structure (target total value ≈ ₹45L over 2–3 years):**

- **Upfront (Phases 1–3 only):** ₹30,00,000  
  - Phase 1: ₹6,00,000  
  - Phase 2: ₹10,00,000  
  - Phase 3: ₹14,00,000  
- **Per-unit royalty:** ₹750 per Suprema+ unit sold, for up to **2,000 units** (cap at ₹15,00,000).  
  - Max total = ₹30L + ₹15L = **₹45L**.  
  - If sales exceed 2,000 units, royalty stops (or can continue at a lower rate if agreed).

**How to pitch:**

> "Instead of paying the full ₹45L upfront, you pay ₹30L during development, and only start paying ₹750 per unit once Suprema+ sells. If we sell 2,000 units, the total comes to ₹45L. If we sell fewer, your total cost is lower. This aligns our success with yours."

**Variations:**

- Lower upfront (e.g., ₹25L) + higher royalty (₹1,000/unit, cap at ₹20L).  
- Higher upfront (₹35L) + lower royalty (₹500/unit, cap at ₹10L).

Use whichever combination keeps Phase 1–3 comfortable for MultiTechnicaa while preserving your total expected value.

---

### B) Joint Product Approach (Shared Upside)

**Idea:** Treat Suprema+ as a **joint product line** where you share in the premium margin, not just a fixed fee.

**Example structure:**

- **Upfront development fee:** ₹20,00,000 (covers Phases 1–2 fully, partial Phase 3).  
- **Revenue share:** 10% of the **Suprema+ price uplift** for 3 years.

Assume:

- Standard 12 kW unit: ₹50,000.  
- Suprema+ 12 kW unit: ₹68,000.  
- Uplift: ₹18,000 per unit.  
- Your share: 10% of ₹18,000 = **₹1,800 per unit**.

If MultiTechnicaa sells:

- **1,000 units/year** → ₹18L/year uplift → your share = ₹1.8L/year.  
- Over 3 years (3,000 units) → your share = ₹5.4L.  
- Total to you: ₹20L + ₹5.4L = ₹25.4L (lower than ₹45L, but you participate in long-term upside and can negotiate higher % or longer term).

To reach an **expected total of ~₹45L**, you might structure:

- Upfront: ₹25,00,000  
- Revenue share: 15% of uplift for 3 years.  
  - 15% of ₹18,000 = ₹2,700/unit.  
  - 3,000 units → ₹8.1L.  
  - 5,000 units → ₹13.5L.  
  - Total = ₹25L + ₹8.1–13.5L = ₹33.1–38.5L (still below ₹45L unless volumes are higher).

To hit ~₹45L expected value, you can combine:

- Upfront: ₹30,00,000  
- Revenue share: 15% of uplift, capped at ₹15,00,000.  
  - Cap reached at ~5,556 units (₹15L / ₹2,700 per unit).  
  - Total = ₹30L + ₹15L = **₹45L**.

**How to pitch:**

> "We treat Suprema+ as a joint product. You pay ₹30L during development, and we share 15% of the extra margin you earn on each Suprema+ unit for 3 years, capped at ₹15L. This means our total is linked to how well Suprema+ performs. If it does very well, we both benefit; if it underperforms, your total cost is lower."

---

## 8) Which Model to Use When?

- **If MultiTechnicaa is cash-conscious but confident in sales:**  
  → Use **Lower Upfront + Per-Unit Royalty** (e.g., ₹30L + ₹750/unit, cap ₹15L).  

- **If they want a long-term partner and are open to sharing margin:**  
  → Use **Joint Product Approach** (e.g., ₹30L + 15% of uplift, capped at ₹15L).  

- **If they prefer simplicity and predictable cost:**  
  → Use the **4-phase fixed-fee** (₹45L total) with staggered payments.

You can present all three options and let them choose the one that feels most comfortable.

---

## 9) Why This Makes Sense Now

- Competitors already use app control as a **key differentiator** in commercial projects. [web:7][web:10][web:15]  
- Gym and resort buyers are willing to pay more for **remote preheat, multi-room control, and diagnostics**.  
- MultiTechnicaa's strong hardware reputation + a smart app = a **clear premium tier** without reinventing the core product.

**Ask:** Approve **Phase 1 (₹6L)** with the payment plan above to build a working prototype and validate demand with real customers. Based on pilot feedback, decide on Phase 2 rollout under one of the three deal structures (fixed-fee, royalty, or joint product).

---

## 10) Contact

**Devendra Vaja**  
Mumbai, Maharashtra, India  
[Your Email] | [Your Phone]  

---

*References:*  
[web:7] ThermaSol Solitude Mobile – remote steam shower control.  
[web:10][web:12][web:15] MrSteam SteamLinx, Helo Control – app-controlled steam/sauna systems.  
[web:99][web:101][web:105][web:112] App Store / Play Store developer fees.  
[web:116][web:117][web:124][web:125] BLE module pricing (nRF52840 / ESP32).  
[web:129] MultiTechnicaa steam generator product page and pricing.

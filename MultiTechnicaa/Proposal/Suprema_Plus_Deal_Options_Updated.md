# Suprema+ – Deal Options Sheet
**For:** MultiTechnicaa (Mr. Kirit Parmar)  
**Prepared by:** Devendra Vaja  
**Date:** 30 August 2026  

---

## Context: Electronics Cost per Unit

**Estimated PCB/electronics cost per Suprema+ unit:**  
- **₹1,650–₹3,700** per steam generator (BLE module, MCU/power, display/sensors, assembly). [web:116][web:117][web:124][web:125]

At:

- **1,000 units/year** → **₹16.5L–₹37L/year** electronics spend.  
- **3,000 units/year** → **₹49.5L–₹1.11Cr/year**.

A **₹45L software investment** is a small fraction of this program and can be amortized over a few thousand premium units.

---

## Optional Add-On: BLE Protocol Design & Hardware Integration

**Investment:** ₹4,00,000 (one-time, before Phase 1)

### What's Included

- **BLE GATT Profile Design**
  - Service and characteristic UUIDs
  - Properties (read/write/notify/indicate)
  - Descriptor definitions

- **Binary Protocol Specification**
  - Command frame structure (opcode, sequence, payload, CRC)
  - Status/result frame structure
  - State machine and fault codes
  - Timeout and retry behavior

- **Safety & Interlock Definition**
  - Which commands require hardware validation
  - Fault conditions that block operation
  - Emergency stop behavior

- **Firmware Simulator Spec**
  - Behavior matrix for app development
  - Fault injection scenarios
  - Test cases for validation

- **Joint Review & Approval**
  - 2-3 workshops with hardware team
  - Final specification sign-off
  - Hardware implementation review

### Why This Is Separate

- This is **embedded systems consulting**, not app development
- Creates **permanent product IP** owned by MultiTechnicaa
- Can be **reused** for future apps (Wi-Fi gateway, second vendor, etc.)
- Hardware team should own this cost as part of product development

### When This Is NOT Needed

- ✅ Your hardware team already has BLE protocol finalized
- ✅ You have a third-party BLE module with documented protocol
- ✅ You're okay with us using our "reference protocol" as-is

### Decision

☐ **Include BLE Protocol Design** - Add ₹4,00,000 to Phase 1  
☐ **Skip** - Hardware team will provide finalized protocol before app development starts

---

## Option 1 – 4-Phase Fixed Fee (Predictable Cost)

**Total budget:** ₹45,00,000 (₹45 lakh)  
**Phases:**

- Phase 1 (Discovery & Prototype): ₹6,00,000 (or ₹10,00,000 with BLE Protocol add-on)
- Phase 2 (MVP Core): ₹12,00,000  
- Phase 3 (Commercial Readiness): ₹15,00,000  
- Phase 4 (Scale & Enhancements): ₹12,00,000  

**Payment style:** Fixed amounts at defined milestones (kickoff, beta, sign-off).  

**Best when:**  
- MultiTechnicaa wants **simple, predictable costing**.  
- They prefer to own the software outright with no ongoing royalty.

**Pitch line:**

> "You pay a clear, fixed total of ₹45L in four small tranches as we deliver each phase. No royalties, no surprises."

---

## Option 2 – Lower Upfront + Per-Unit Royalty

**Goal:** Reduce cash outlay now; share upside as Suprema+ sells.  
**Target total value:** ~₹45L over 2–3 years.

### Example Structure A

- **Upfront (Phases 1–3):** ₹30,00,000  
- **Per-unit royalty:** ₹750 per Suprema+ unit sold, for up to **2,000 units** (cap at ₹15,00,000).  
- **Max total:** ₹30L + ₹15L = **₹45L**.  
- Royalty stops after 2,000 units (or can continue at a lower rate if agreed).

### Variations

- **More cash-light:**  
  - Upfront: ₹25,00,000  
  - Royalty: ₹1,000/unit, cap ₹20,00,000  
  - Max total: ₹45L (cap at 2,000 units).

- **More upfront, less royalty:**  
  - Upfront: ₹35,00,000  
  - Royalty: ₹500/unit, cap ₹10,00,000  
  - Max total: ₹45L (cap at 2,000 units).

**Best when:**  
- MultiTechnicaa is **cash-conscious** but confident in sales volumes.  
- They like the idea of paying more only if the product sells well.

**Pitch line:**

> "Instead of paying the full ₹45L upfront, you pay ₹30L during development, and only start paying ₹750 per unit once Suprema+ sells. If we sell 2,000 units, the total comes to ₹45L. If we sell fewer, your total cost is lower. This aligns our success with yours."

---

## Option 3 – Joint Product Approach (Shared Upside)

**Goal:** Treat Suprema+ as a **joint product line** where you share in the premium margin.

### Assumptions (illustrative)

- Standard 12 kW unit: ₹50,000.  
- Suprema+ 12 kW unit: ₹68,000.  
- Uplift: ₹18,000 per unit.

### Example Structure (Target ~₹45L)

- **Upfront:** ₹30,00,000  
- **Revenue share:** 15% of the **Suprema+ price uplift** for 3 years, capped at ₹15,00,000.  
  - 15% of ₹18,000 = **₹2,700 per unit**.  
  - Cap reached at ~5,556 units (₹15L / ₹2,700).  
  - Total = ₹30L + ₹15L = **₹45L**.

**Variations:**

- Upfront: ₹25–35L  
- Share: 10–20% of uplift  
- Cap: ₹10–20L  
- Term: 2–4 years

**Best when:**  
- MultiTechnicaa wants a **long-term partner**, not just a vendor.  
- They are open to sharing a small slice of the extra margin in exchange for lower fixed cost and aligned incentives.

**Pitch line:**

> "We treat Suprema+ as a joint product. You pay ₹30L during development, and we share 15% of the extra margin you earn on each Suprema+ unit for 3 years, capped at ₹15L. This means our total is linked to how well Suprema+ performs. If it does very well, we both benefit; if it underperforms, your total cost is lower."

---

## Pricing Summary

### Scenario 1: App Only (Hardware Team Provides Protocol)

| Option | Upfront (Phases 1-3) | Ongoing | Max Total |
|--------|---------------------|---------|-----------|
| **Fixed Fee** | ₹45,00,000 | None | ₹45,00,000 |
| **Royalty** | ₹30,00,000 | ₹750/unit (cap ₹15L) | ₹45,00,000 |
| **Joint Product** | ₹30,00,000 | 15% of uplift (cap ₹15L) | ₹45,00,000 |

### Scenario 2: Full Solution (Including BLE Protocol Design)

| Option | Upfront (Protocol + Phases 1-3) | Ongoing | Max Total |
|--------|--------------------------------|---------|-----------|
| **Fixed Fee** | ₹49,00,000 | None | ₹49,00,000 |
| **Royalty** | ₹34,00,000 | ₹750/unit (cap ₹15L) | ₹49,00,000 |
| **Joint Product** | ₹34,00,000 | 15% of uplift (cap ₹15L) | ₹49,00,000 |

---

## How to Use This Sheet

1. Present **all three options** to Mr. Parmar.  
2. Ask which **financial model feels most comfortable**:  
   - Fixed cost (Option 1)  
   - Pay-more-only-if-it-sells (Option 2)  
   - Partner/share-upside (Option 3)  
3. Ask whether **BLE Protocol Design** is needed (₹4L add-on).  
4. Once he indicates a preference, finalize the exact numbers (upfront, royalty/share %, cap, term) in a simple term sheet.

---

## Recommended Next Steps

1. **Review this sheet** with your hardware team.  
2. **Decide** whether BLE protocol design is needed internally or should be outsourced.  
3. **Choose** one of the three financial models.  
4. **Approve Phase 1** (₹6L or ₹10L with protocol) to start development.  
5. **Schedule kickoff** meeting to finalize timeline and deliverables.

---

**Contact**

**Devendra Vaja**  
Mumbai, Maharashtra, India  
[Your Email] | [Your Phone]  

---

*References:*  
[web:116][web:117][web:124][web:125] BLE module pricing (nRF52840 / ESP32).

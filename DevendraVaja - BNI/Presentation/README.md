# TenCore Digital Labs • Master Presentation Template

A production-grade, responsive executive presentation studio engineered by **TenCore Digital Labs**. Designed to rapidly generate visually stunning client pitch decks and export millimeter-perfect PDFs in **16:9 Widescreen** and **4:3 / A4 Standard**.

---

## 📁 Template Structure

```
Templates/Master-Presentation/
├── index.html         # Universal HTML presentation shell & export modal
├── style.css          # Design system, responsive scale, and 16:9 / 4:3 print engine
├── deck-config.js     # Client metadata, color theme & 11 slide layout templates
├── app.js             # Presentation logic, keyboard navigation & print exporter
├── Pics/              # Brand logos and client asset folder
└── README.md          # Guide & layout documentation
```

---

## 🚀 How to Create a New Client Presentation (in 3 Minutes)

### Step 1: Copy the Template Folder
Duplicate the `Templates/Master-Presentation` folder into your client directory:
```bash
cp -r "Templates/Master-Presentation" "Clients/ParkingSetu/Presentation"
```

### Step 2: Open `deck-config.js` and Customize
1. **Set Presentation Metadata**:
   ```javascript
   const DECK_META = {
     title: "Parking Setu",
     subtitle: "Digital Valet & Hospitality Operations Platform",
     pillTag: "🚗 Digital Valet MVP Architecture",
     version: "Version 1.0",
     date: "September 2026",
     category: "Client MVP Proposal",
     storageKey: "parkingsetu_presentation_v1"
   };
   ```

2. **(Optional) Set Client Color Theme**:
   ```javascript
   const THEME_CONFIG = {
     primary: "#1e3a8a",       // Deep Navy
     primaryDark: "#172554",
     primaryLight: "#dbeafe",
     secondary: "#d97706",     // Amber / Gold Accent
     accent: "#2563eb"
   };
   ```

3. **Populate Slides**:
   Edit or add slide objects in the `DEFAULT_SLIDES` array using any of the 11 built-in layouts.

### Step 3: View & Export
- Double-click `index.html` in your browser.
- Press **F** for Fullscreen presentation mode.
- Click **📄 Export to PDF** to generate 16:9 widescreen or 4:3 A4 printouts.

---

## 🎨 Supported 11 Slide Layouts

| Layout Key | Description | Best Used For |
| :--- | :--- | :--- |
| `title` | Title cover with pill tag & meta cards | Slide 1 (Opening Cover) |
| `instructor` | Founder avatar card + 3 engineering pillars | Slide 2 (Devendra Vaja / Leadership) |
| `divider` | Dark gradient section divider | Major agenda / topic transitions |
| `twocol` | Two-column cards with bullet lists | Problem vs. Solution / Before vs. After |
| `threecard` | 3-Card grid with icons & highlight metric tags | Core Capabilities, Product Pillars |
| `fourcard` | 2×2 Card grid with custom icons | Strategic Asks, Commercial Benefits |
| `differentiators`| Left feature list + Right vertical system stack | Architectural Differentiators & Tech Stack |
| `blueprint` | 4-Phase horizontal roadmap with milestones | Rollout Timeline, Project SOW, Budget Phases |
| `table` | Multi-column comparative data matrix | Feature Comparison, Competitor Benchmarks |
| `pricing` | 3-Tier commercial deal cards | MVP Scope, Pricing, Annual SLA Tiers |
| `qa` | Executive contact cards + QR scan box | Slide 18 (Closing, Next Steps & Q&A) |

---

## 🖨️ PDF Export Settings

When printing or saving as PDF from Chrome / Safari / Edge:
- **Paper Size**: A4 (for standard printing) or Custom 297×167mm (for borderless 16:9).
- **Layout**: `Landscape`
- **Margins**: **`None`**
- **Options**:
  - ✅ **`Background graphics`** (Checked)
  - ❌ **`Headers and footers`** (Unchecked)

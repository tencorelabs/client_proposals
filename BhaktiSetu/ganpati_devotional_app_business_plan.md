# Ganpati Devotional App — Phase-wise Business Plan

## Executive Summary

**Business model:** Freemium Android app with digital products first; add physical pooja samagri only after demand validation.

**Entity:** Use the existing software-company GST registration, subject to confirming the business activity and product classifications with your CA.

**MVP objective:** Establish a trusted Ganpati-content catalogue, validate free-to-paid conversion, and build rights-cleared digital assets before commerce expansion.

## Phase 1 — Digital-only MVP (Months 1–2)

### Product scope

**Free tier**
- Daily Ganpati aarti: 3–5 rights-cleared tracks
- Ganesh Chaturthi countdown and festival calendar
- Basic panchang and Sankashti reminders
- Five original or properly licensed Ganpati wallpapers
- Limited puja-vidhi checklist

**Premium subscription**
- ₹99/month or ₹699/year as an initial pricing test
- Ad-free experience
- Offline aarti downloads
- Expanded Marathi, Hindi and Sanskrit aarti catalogue
- Full wallpaper catalogue
- Premium puja-vidhi content and festival reminders

**One-time digital SKUs**
| SKU | Suggested price | Deliverable |
|---|---:|---|
| Ganesh Chaturthi Puja Vidhi Guide | ₹49 | Original PDF: ritual sequence, mantras, transliteration, meanings and samagri checklist |
| Ganpati Wallpaper Pack | ₹99 | 50 rights-cleared high-resolution wallpapers |
| Aarti Audio Pack | ₹149 | 20 professionally recorded, rights-cleared tracks |
| Personalised Sankalp Recording | ₹299–₹499 | A verified priest’s recording using user-provided details |

### Technical stack
- Native Android in Kotlin
- Firebase Authentication, Firestore, Cloud Storage and FCM
- Google Play Billing for subscriptions and digital in-app products
- Firebase Analytics and Play Console for funnel tracking
- A small admin CMS for assets, content versions, entitlements and fulfilment status

### Delivery checklist

**Weeks 1–2**
- Finalise free versus paid catalogue
- Commission original content and obtain contracts/licenses
- Implement user account, catalogue, downloads and offline playback
- Add privacy policy, terms, support contact and data-deletion controls

**Weeks 3–4**
- Integrate and test Play Billing with license-test accounts
- Create Play listing assets and privacy/data-safety disclosures
- Release closed test to 20–50 users
- Fix onboarding, payment and offline-download issues

**Month 2**
- Launch production version
- Run modest keyword/creative tests around Ganpati aarti and Ganesh Chaturthi
- Collect user feedback in-app rather than relying only on WhatsApp
- Add the most-requested language/content only where rights are clear

### Validation metrics
| Metric | Initial target |
|---|---:|
| First-month installs | 1,000+ |
| Free-to-paid conversion | 3–5% |
| Day-7 retention | 30–40% |
| Day-30 retention | 15–25% |
| Refund rate | Under 3% |
| Sankalp fulfilment within SLA | 95% within 48 hours |

## Phase 2 — Optional Pooja Samagri (Months 3–6)

Do not start with broad catalogue commerce. Begin only if the app has repeat engagement and you can fulfil reliably.

### Commerce sequence
1. Launch one pre-order or limited-stock Ganesh Chaturthi pooja kit through your own web checkout.
2. Add a small, curated set of non-perishable essentials such as incense, cotton wicks, camphor, kumkum and kalava.
3. Add festival kits: Diwali, Navratri and Janmashtami.
4. Consider a monthly replenishment subscription only after repeat-purchase evidence.

### Channel decision
- Use **Google Play Billing only for digital goods and app subscriptions**.
- Use your **own website/payment gateway** for physical products, with appropriate invoices, shipping, returns and GST treatment.
- Do not represent a physical kit as a Play Store digital SKU.

### Operations checklist
- Obtain supplier GST details, invoices, samples and written quality/return terms
- Use product-level HSN classification and confirm GST treatment with a CA
- Show product material, quantity, expiry/shelf-life where relevant, shipping costs and return policy
- Start with pre-orders or low inventory to avoid dead stock
- Avoid edible products initially; food brings FSSAI and labelling obligations

## Phase 3 — Scale Carefully (Months 6–12)

- Add regional-language content based on usage, beginning with Marathi
- Build a reusable festival-content framework rather than a Ganesh-only seasonal app
- Offer B2B corporate/festival kit orders only after fulfilment quality is stable
- Build priest-partner operations with SLAs, audits and structured payouts
- Add iOS only after Android retention and paid conversion are proven

## Legal Sourcing Guide for Digital Products

## 1. Ganpati Wallpapers

### What you can sell
You can sell an original or validly licensed digital image as a wallpaper pack. The fact that an idol or pandal is publicly visible does **not** give you rights to reproduce another photographer’s image commercially. Copyright in a photograph generally belongs to the photographer/rights owner unless a written agreement states otherwise.

### Safe sourcing routes

**A. Commission photography — preferred**
- Hire a photographer to shoot permitted locations and/or original home pandals.
- Obtain venue/pandal permission where required, especially for interior, commercial or restricted shoots.
- Execute a written assignment/work-for-hire agreement covering worldwide, perpetual commercial use in apps, subscriptions, paid downloads and marketing.
- Obtain a representation that the photographer has obtained required model/property permissions.

**B. License stock photography**
- Buy an appropriate commercial licence from a reputable stock provider.
- Verify that the licence specifically permits mobile apps, paid downloads, subscriptions and advertising.
- Keep the invoice, licence text, asset ID and a copy of the delivered asset.

**C. User-generated home-pandal photos**
- Obtain an explicit upload licence in the app terms and a rights confirmation at upload.
- Use a moderation flow for copied, offensive, trademarked or sensitive material.
- Credit creators where promised; provide takedown and dispute processes.

### Avoid
- Downloading from Google Images, Instagram, Facebook, news sites or YouTube
- Calling imagery “official,” “Lalbaugcha Raja,” “Dagdusheth official,” “blessed,” or temple-approved without written authorisation
- Using a temple or event logo without a trademark licence

### Required records
- Photographer assignment or stock licence
- Location/pandal approval if applicable
- Asset ID, creation date, rights owner and permitted uses
- Takedown contact and rights-complaint process

## 2. Puja Vidhi PDF

### What you may use
Ancient mantras and traditional liturgical text may be public-domain, but a modern translation, commentary, artwork, typesetting, compilation or PDF can itself be copyrighted. Do not copy another app’s guide, a publisher’s translation, or an online PDF merely because it is accessible.

### Recommended production flow
1. Engage a qualified priest/Sanskrit scholar to prepare an original ritual sequence and review pronunciations.
2. Use public-domain source texts only after checking the source’s reuse terms.
3. Write your own explanations, translations and checklist; avoid copying prose from websites or books.
4. Commission original illustrations/layout and secure an IP assignment from the designer.
5. Version the guide by tradition/region where rituals differ, for example Maharashtra-focused versus pan-Indian guidance.
6. Have a qualified reviewer sign off on the final version before release.

### Rights contract essentials
- Contributor assigns copyright in original explanations, translation, artwork and layout to your company
- Contributor warrants work is original and non-infringing
- Permission for edits, translations and all digital commercial distribution
- Credit terms and fixed fee/royalty terms, if any

## 3. High-fidelity Aarti Recordings

### Rights you must clear
A traditional lyric/melody can be public-domain, while a particular performance and sound recording are protected separately. Never rip or repackage audio from YouTube, Spotify, CDs, streaming services or another devotional app.

### Recommended production flow
1. Create a repertoire sheet: title, language, source, composer status and arrangement notes.
2. Use a music/IP professional to confirm whether each composition and lyrics are public-domain or require licensing.
3. Hire singers, musicians and a producer/studio under written agreements.
4. Contractually obtain rights in performances, arrangements, masters and any artwork/metadata.
5. Deliver masters in WAV; generate lower-bitrate encrypted/downloadable variants for the app.
6. Maintain a rights register with every contributor, date, agreement and track identifier.

### Contract essentials
- Assignment/licence for commercial app distribution, downloads, subscription access and promotional clips
- Performer consent and release, including rights in recorded performance
- Confirmation that no third-party samples, backing tracks or arrangements are used without clearance
- Credit and royalty terms, if any

### Important nuance
Do not rely on “traditional aarti” alone as a clearance decision. Get composition status checked, and clear every modern arrangement and recording used.

## 4. Personalised Priest Sankalp Recordings

### Product model
A user selects a sankalp purpose and language, provides only essential details, and receives a priest-recorded audio/video within a published service-level window. Existing online-puja services demonstrate that personalised sankalps and recorded/live rituals are commercially feasible. [web:229][web:231]

### Recommended operational setup
1. Onboard 2–3 verified priests initially, not a large marketplace.
2. Sign an independent-contractor agreement: fee per fulfilled recording, turnaround time, quality standard, confidentiality, data-deletion duty and prohibited direct solicitation of users.
3. Build a structured order form: name, gotra if voluntarily supplied, city/time zone only if required, language, purpose and preferred delivery mode.
4. Give the priest a minimal job sheet rather than full customer profile.
5. Upload recording to a private, time-limited link; mark order fulfilled after delivery.
6. Auto-delete raw job data and recordings according to the retention period in your privacy notice, unless a user chooses to retain access.

### Privacy controls
- Obtain separate, clear consent before collecting details for a personalised recording.
- State exactly which details are shared with the priest and why.
- Minimise data: do not collect date of birth, address or identification unless genuinely needed.
- Provide deletion/contact mechanisms and encrypt data in transit and at rest.
- Limit priest account access to assigned jobs and log every access/download.

### Product wording
Use accurate language: “recorded by a verified independent priest” only when that is true. Do not promise spiritual, medical, financial or guaranteed outcomes.

## Play Store SKU Design

| Play product type | SKU example | Use |
|---|---|---|
| Auto-renewing subscription | `ganpati_premium_monthly` | Ongoing premium access |
| Auto-renewing subscription | `ganpati_premium_annual` | Discounted annual access |
| One-time in-app product | `puja_vidhi_2026` | Permanent PDF entitlement |
| One-time in-app product | `wallpaper_pack_ganpati_01` | Permanent digital download entitlement |
| One-time in-app product | `aarti_pack_marathi_01` | Permanent audio entitlement |
| External service checkout | Not a Play Billing SKU | Priest service or future physical goods; confirm current Play policy before implementation |

Keep a server-side entitlement record keyed to the Play purchase token, validate purchases securely, and provide restore-purchase handling.

## Compliance Boundaries

- Confirm GST/SAC/HSN treatment with your CA; your existing entity can generally carry multiple activities, but invoices and registrations must accurately reflect them.
- Avoid food/prasad until you have assessed FSSAI, labelling, storage and fulfilment requirements.
- Never make unlicensed temple-affiliation, consecration, “official prasad,” or miracle/guaranteed-benefit claims. A 2026 CCPA action against Amazon over unauthorised Ram Mandir prasad listings illustrates the consumer-protection risk of religious-origin claims. [web:141][web:142][web:143]
- Treat copyright, privacy and consumer-law review as launch blockers for paid content.
- This document is product guidance, not legal or tax advice; have an Indian IP lawyer, CA and privacy counsel review contracts, Play policy flow and public claims before launch.

## Budget Range for Digital MVP

| Asset/workstream | Indicative one-time range |
|---|---:|
| Original photo/wallpaper shoot and rights | ₹5,000–₹25,000+ |
| Scholar/priest review and original PDF | ₹3,000–₹15,000+ |
| Singer/studio/production for first audio pack | ₹15,000–₹75,000+ |
| Priest onboarding and sample fulfilment | ₹5,000–₹20,000+ |
| Design/legal templates/QA | ₹10,000–₹50,000+ |
| Initial launch testing | ₹10,000–₹30,000 |

## Immediate Next Actions

1. Choose a single launch niche: Marathi-first Ganpati aarti plus original puja guide.
2. Prepare four short contracts: photographer, scholar, singer/producer and priest.
3. Commission 10 wallpapers, one reviewed PDF and five aartis—not 50/20 initially.
4. Build the entitlement, download and privacy foundations before adding more content.
5. Run a closed beta and measure engagement before committing to the physical-commerce phase.

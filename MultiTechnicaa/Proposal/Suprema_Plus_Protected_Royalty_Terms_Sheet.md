# Suprema+ — Commercial Terms Sheet and Protected Royalty Clauses

**Purpose:** Negotiation draft for discussion between Devendra Vaja (“Developer”) and MultiTechnicaa / the applicable legal entity (“Company”).  
**Status:** Commercial draft only. Obtain review and adaptation by a qualified Indian commercial/IP lawyer before signing.  
**Project:** Suprema+ mobile application and, if selected, BLE Protocol Design & Hardware Integration.

---

# 1. Parties and Project

| Item | Details to complete before signing |
|---|---|
| Developer | Devendra Vaja, [legal name/entity type], [address], [PAN/GSTIN if applicable] |
| Company | [Full legal entity name], [CIN/GSTIN], [registered address], represented by [authorized signatory] |
| Product | Suprema+ smart steam-generator controller, including the agreed mobile application and related documentation |
| Effective date | [DD Month YYYY] |
| Agreement term | From Effective Date until project completion plus applicable royalty/revenue-share term |

---

# 2. Commercial Model Election

The parties must select **one** model below in the signed Statement of Work (“SOW”). Any royalty or revenue-share model must include the protection clauses in Sections 6–12.

## Model A — Fixed Fee

- App development fees: **₹45,00,000** plus applicable GST/taxes.
- Optional BLE Protocol Design & Hardware Integration: **₹4,00,000** plus applicable GST/taxes.
- No per-unit royalty or revenue share.

## Model B — Protected Per-Unit Royalty

- Upfront development fee: **₹30,00,000** plus applicable GST/taxes.
- Royalty: **₹750 per Suprema+ Unit**.
- Royalty cap: **₹15,00,000**.
- Maximum total commercial consideration: **₹45,00,000** plus applicable GST/taxes.
- Royalty term: Until the cap is paid or [36] months from first Commercial Sale, whichever occurs first.
- Optional BLE Protocol Design & Hardware Integration: **₹4,00,000** plus applicable GST/taxes, payable separately and not offset against royalty unless explicitly stated.

## Model C — Protected Joint Product / Price-Uplift Share

- Upfront development fee: **₹30,00,000** plus applicable GST/taxes.
- Revenue share: **15% of Suprema+ Price Uplift**, equal to the example of **₹2,700 per eligible unit** only where Price Uplift is ₹18,000.
- Revenue-share cap: **₹15,00,000**.
- Maximum total commercial consideration: **₹45,00,000** plus applicable GST/taxes.
- Revenue-share term: Until cap is paid or [36] months from first Commercial Sale, whichever occurs first.
- Optional BLE Protocol Design & Hardware Integration: **₹4,00,000** plus applicable GST/taxes, payable separately and not offset against revenue share unless explicitly stated.

---

# 3. Definitions

The following definitions apply, especially for Models B and C:

1. **“Suprema+ Unit”** means every steam generator, panel, controller, gateway, kit, replacement unit, refurbished unit, bundled unit, or substantially similar product sold, leased, installed, supplied, transferred, or otherwise commercially exploited under the Suprema+ name or using the app, BLE protocol, firmware interface, designs, documentation, or substantially similar derivative created under this project.

2. **“Commercial Sale”** means any sale, invoice, dispatch, installation, lease, rental, transfer for consideration, bundled sale, or supply of a Suprema+ Unit to a customer, distributor, dealer, affiliate, related party, installer, or any third party. A unit supplied free of charge for marketing, demo, warranty replacement, internal use, or pilot is also reportable, though the parties may expressly define whether it is royalty-bearing.

3. **“Unit Manufactured”** means a Suprema+ Unit for which the Company has completed final assembly, assigned a unique serial number, or programmed the production firmware. The parties may elect this as an alternative royalty trigger if they prefer a manufacturing-based model.

4. **“Activation”** means the first successful registration, pairing, local claim, or app/gateway connection of a Suprema+ Unit’s immutable serial number with the approved Suprema+ software system. Activation is a verification signal; it does not by itself replace reportable sales/manufacturing records.

5. **“Net Sales”** means gross amounts actually invoiced or received for Suprema+ Units, excluding only separately itemized GST and documented, bona fide refunds/returns. No deduction may be made for internal charges, marketing, distributor margins, related-party transfers, freight, bundled pricing allocations, rebates, or discounts unless expressly approved in writing.

6. **“Baseline Product Price”** means the agreed ex-GST price of the comparable non-smart MultiTechnicaa steam-generator unit for the same kW/technical configuration, listed in **Schedule A**.

7. **“Suprema+ Price Uplift”** means the ex-GST invoice price of a Suprema+ Unit minus the applicable Baseline Product Price. If the Unit is sold as a package, bundle, project quote, or discount, the allocation method in Schedule A applies; the Company may not artificially allocate value away from Suprema+ to reduce the Price Uplift.

8. **“Affiliate”** means any entity directly or indirectly controlling, controlled by, or under common control with the Company, including related-party dealers/distributors used to sell or transfer Suprema+ Units.

9. **“Books and Records”** means complete and accurate sales registers, invoices, e-way bills/dispatch records, purchase orders, manufacturing records, serial-number records, inventory reports, warranty registrations, activation records, GST returns relevant to Suprema+ sales, and all data reasonably required to verify royalty/revenue-share calculations.

10. **“Business Day”** means a day other than a Saturday, Sunday, or public holiday in Mumbai, Maharashtra.

---

# 4. Scope, Deliverables, and Dependencies

## 4.1 App development scope

The app scope, priorities, acceptance criteria, and release phases are described in the agreed Suprema+ PRD and applicable SOW. The current proposal is a commercial overview; the PRD and technical appendix become binding only when explicitly attached and referenced in the signed SOW.

## 4.2 Optional BLE Protocol Design & Hardware Integration

If selected, this is a separate, chargeable scope worth **₹4,00,000** plus applicable GST/taxes. It includes:

- BLE GATT profile and UUID registry.
- Command/status frame and protocol specification.
- Command acknowledgement, retries, state machine, error/fault code design.
- App/firmware integration workshop(s).
- Firmware simulator specification and validation plan.
- Review of hardware implementation against agreed app-device contract.

## 4.3 Hardware dependency clause

The Company shall provide, at its own expense and on time:

- A functioning BLE-enabled development board/controller prototype.
- Final or interim hardware/firmware specification.
- A designated embedded engineer with authority to make technical decisions.
- Access to test units, panel/display behavior, fault simulation, and installed-environment testing.
- Safety limits, interlock rules, electrical/thermal certifications, and required operating constraints.

Delays, changes, instability, missing documentation, or changed GATT/protocol requirements caused by hardware/firmware are Change Requests and may extend timelines and/or add fees.

## 4.4 Safety allocation

The Company retains sole responsibility for hardware design, firmware safety, electrical safety, thermal controls, emergency shutdown, interlocks, water management, statutory approvals, installation, and product liability. The mobile app must never be treated as the sole safety mechanism.

---

# 5. Payment Terms and Milestones

## 5.1 Fixed-fee four-phase schedule

| Phase | Scope | Fee | Milestone payment schedule |
|---|---|---:|---|
| Phase 1 | Discovery and Prototype | ₹6,00,000 | 40% kickoff (₹2,40,000); 40% working prototype (₹2,40,000); 20% pilot report/go-no-go (₹1,20,000) |
| Phase 2 | MVP Core | ₹12,00,000 | 30% kickoff (₹3,60,000); 40% beta/integrated firmware build (₹4,80,000); 30% sign-off (₹3,60,000) |
| Phase 3 | Commercial Readiness | ₹15,00,000 | 30% kickoff (₹4,50,000); 40% feature-complete build (₹6,00,000); 30% acceptance (₹4,50,000) |
| Phase 4 | Scale and Enhancements | ₹12,00,000 | 30% kickoff (₹3,60,000); 40% feature-complete build (₹4,80,000); 30% acceptance (₹3,60,000) |

## 5.2 Protocol add-on schedule

If selected, BLE Protocol Design & Hardware Integration of **₹4,00,000** is payable as:

- 50% at protocol-design kickoff: **₹2,00,000**.
- 30% on delivery of draft GATT/protocol specification and workshop review: **₹1,20,000**.
- 20% on joint sign-off of final protocol specification: **₹80,000**.

## 5.3 General payment rules

- All fees are exclusive of GST and other applicable taxes.
- Invoices are payable within **7 calendar days** unless parties expressly agree otherwise.
- Work may pause if a payment is overdue by more than 7 calendar days.
- Late payments attract interest at **1.5% per month** or the maximum lawful rate, whichever is lower.
- Phase acceptance is deemed granted if Company does not provide a written, itemized rejection mapped to agreed acceptance criteria within **7 Business Days** after delivery.
- Acceptance cannot be withheld for new features, aesthetic preferences not in scope, or external hardware defects.

---

# 6. Royalty / Revenue Share Reporting

This section applies to Models B and C.

## 6.1 Monthly reporting obligation

Within **15 calendar days** after the end of every calendar month, Company shall provide Developer with a complete Suprema+ report in CSV/XLSX and PDF format containing at minimum:

- Unique serial number for every Suprema+ Unit manufactured, dispatched, invoiced, installed, activated, returned, replaced, or held in inventory during the month.
- Unit model, kW/configuration, manufacturing date, dispatch date, invoice date, installation date, and activation date (if applicable).
- Customer/distributor/installer name, invoice number, invoice value, and status (paid/unpaid/returned), subject to reasonable redaction of personal customer contact information.
- Baseline Product Price, Suprema+ invoice price, discount, bundle allocation, and calculated Price Uplift for Model C.
- Royalty/revenue share payable for each reportable unit and cumulative cap utilization.
- Opening inventory, units produced, units dispatched, units sold, units returned/replaced, and closing inventory.

## 6.2 Payment obligation

- Royalty/revenue share due for a month must be paid with the monthly report and no later than **15 calendar days** after month-end.
- Payments must identify month, report version, invoice number, amount, and cumulative amount paid.
- Company may not defer payment because its customer/dealer has not paid, unless Developer expressly agrees in writing.

## 6.3 Nil report

Company must provide a signed **nil report** for any month with no reportable sales/manufacture/activations. Silence is not a nil report.

## 6.4 Minimum information standard

A report lacking unit-level serial numbers or invoice/production traceability is incomplete and does not start the audit limitation period.

---

# 7. Technical Verification and Activation Register

## 7.1 Immutable serial identity

Each Suprema+ Unit must receive a unique, non-reusable, tamper-resistant serial number during manufacture. That serial shall be:

- Programmed into controller firmware/readable through the Device Information or Suprema+ Control GATT service.
- Printed/marked physically on the product, PCB, or a durable label.
- Included in manufacturing, dispatch, warranty, and activation records.

## 7.2 Activation event logging

Where app/gateway connectivity is included, the software shall record first activation and subsequent material lifecycle events, subject to customer consent/privacy law. The minimum activation event should include:

- Immutable unit serial number or privacy-safe cryptographic hash.
- Activation timestamp.
- App/gateway version and product firmware version.
- Site/customer identifier in pseudonymized form where needed.
- No customer Wi-Fi credentials, BLE keys, passwords, or unnecessary personal data.

## 7.3 Shared visibility

The parties shall agree on one of these arrangements before commercial launch:

- A jointly viewable dashboard with role-based read-only access for Developer; or
- A monthly signed export from a controlled cloud account; or
- An independent third-party data escrow/export arrangement.

The data source must not be alterable solely by one party without an immutable audit trail.

## 7.4 Activation does not reduce reporting duty

Company must report every Commercial Sale/Unit Manufactured even if it is not activated. Lack of activation cannot be used to avoid payment.

## 7.5 Discrepancy rule

If activation count, manufacturing serial count, dispatch/invoice count, warranty registration, or sales report count differ materially, Company shall explain the difference in the monthly report. Developer may request supporting records. For royalty calculation, the **highest reasonably evidenced reportable-unit count** applies unless Company proves a documented exception such as return, warranty replacement, or unused demo unit.

---

# 8. Audit Rights

## 8.1 Audit right

Developer or an independent chartered accountant/auditor bound by confidentiality may audit Books and Records relevant to Suprema+ **once per calendar year** and additionally where a material discrepancy is reasonably suspected.

## 8.2 Notice and access

- Developer shall provide at least **30 calendar days** prior written notice for a routine audit.
- Audit shall occur during normal business hours and be limited to records reasonably necessary to verify obligations under Models B/C.
- Company shall provide electronic exports and reasonable access to relevant manufacturing, serial, inventory, invoice, warranty, activation, and tax records.

## 8.3 Audit period

Records must be retained for at least **7 years** after each reporting period, or longer if required by applicable law.

## 8.4 Audit cost allocation

- Developer initially bears routine audit costs.
- If an audit finds under-reporting or underpayment of more than **5%** for the audited period, Company shall reimburse reasonable audit costs and pay all shortfall amounts.

## 8.5 Audit findings and payment

Company shall pay verified underpayments, interest, and applicable audit-cost reimbursement within **15 calendar days** after audit findings are delivered.

---

# 9. Under-Reporting, Evasion, and Remedies

## 9.1 No avoidance

Company shall not evade royalty/revenue-share obligations by any of the following:

- Selling or supplying a Suprema+ Unit through an Affiliate, related party, distributor, installer, employee, intermediary, or alternate brand.
- Renaming or rebranding a substantially similar product that uses the project deliverables or derivative works.
- Splitting product price, bundling, discounting, or allocating invoice amounts artificially to reduce Price Uplift.
- Omitting serial numbers, delaying activation, failing to issue invoices, moving units as “demo” or “replacement” without records, or transferring units at below-market related-party pricing.
- Using a third-party manufacturer or PCB supplier to produce units outside reported manufacturing records.

## 9.2 Consequences of under-reporting

If an audit or mutually accepted reconciliation establishes intentional under-reporting, concealment, record manipulation, or evasion, Company shall pay:

1. The unpaid royalty/revenue share.
2. Interest at 1.5% per month from original due date (or maximum lawful rate, if lower).
3. A contractual penalty equal to **two times the unpaid amount**, subject to enforceability under applicable law and adjustment by counsel.
4. Reasonable audit, legal, and recovery costs.
5. Any additional lawful remedies, including injunctive relief for continued unauthorized use of Developer IP where applicable.

**Legal note:** Indian counsel should validate/adjust the penalty wording so it is drafted as a reasonable pre-estimate of loss or otherwise legally enforceable.

## 9.3 Material breach

A missed report, false nil report, refusal of reasonable audit access, or payment delay exceeding **30 calendar days** after written notice is a material breach. Developer may suspend support, pause future work, and pursue recovery/remedies until cured.

---

# 10. Minimum Guarantee (Optional Protection)

The parties may elect this section for Model B or C.

- For the first **12 months** after first Commercial Sale, Company shall pay a minimum monthly royalty/revenue-share amount of **₹50,000** plus applicable GST/taxes.
- The amount due each month is the higher of: (a) actual calculated royalty/revenue share, or (b) ₹50,000 minimum guarantee.
- Total minimum-guarantee payments count toward the royalty/revenue-share cap unless Schedule B states otherwise.
- The minimum guarantee is not payable before first Commercial Sale unless the parties select a launch-date-based minimum.

**Negotiation use:** This reduces Developer exposure where sales are slow or reporting is weak. Company may request a lower minimum (e.g., ₹25,000) in exchange for a longer royalty term or a higher upfront fee.

---

# 11. Revenue-Share Specific Protections (Model C)

## 11.1 Baseline schedule

Before sales begin, parties shall attach **Schedule A** listing comparable standard products, kW/configuration, Baseline Product Price, and approved Suprema+ premium/minimum price.

## 11.2 Price floor / minimum deemed uplift

To stop artificial discounting, parties should choose one:

- **Price floor approach:** Suprema+ Unit cannot be sold below the agreed floor without Developer’s written consent; revenue share is calculated from actual invoice price or price floor, whichever is higher.
- **Minimum deemed uplift approach:** Revenue share is calculated on at least the agreed minimum uplift for the configuration, even if discounted/bundled.

**Recommended starting point:** Minimum deemed uplift of **₹15,000 per equivalent 12 kW unit**, adjusted by a configuration table in Schedule A.

## 11.3 Related-party and bundled transactions

For Affiliate/related-party transfers, free items, exchanges, bundles, or non-cash transactions, revenue share is calculated on fair market value or the Schedule A minimum price/uplift, whichever is higher.

## 11.4 Margin information

If revenue share is described as a share of “margin,” define margin precisely. Prefer **price uplift**, not “net profit,” because net profit can be reduced by internal allocations. “Price uplift” is clearer, simpler to audit, and less open to manipulation.

---

# 12. Manufacturing-Based Alternative (Optional)

Instead of royalty on sales, the parties may choose a royalty on **Units Manufactured**:

- Rate: ₹[750] per unit manufactured/serialised.
- Reporting: Monthly serialised manufacturing report.
- Trigger: Final assembly, serial assignment, or production firmware programming.
- Cap: ₹15,00,000.
- Reconciliation: Company may receive credit for documented scrapped units before commercial dispatch, subject to quarterly reconciliation.

**Commercial note:** This is easier to audit because production, PCB purchase, serial programming, and dispatch records create multiple trails. It shifts inventory risk toward Company, so it may be harder to negotiate than sales-based royalty.

---

# 13. Intellectual Property and Source Code

## 13.1 Pre-existing IP

Each party retains ownership of its pre-existing IP, tools, libraries, frameworks, know-how, templates, and reusable components.

## 13.2 Project IP

Choose and finalize one commercial position:

### Option 1 — Assignment after full payment (recommended for fixed fee)

Upon receipt of all agreed fees, Company receives assignment of the specifically developed Suprema+ app source code, product-specific designs, and documentation, excluding Developer’s pre-existing/reusable tools and third-party open-source components.

### Option 2 — License until full payment (recommended for royalty/share model)

Until all upfront fees and capped royalty/revenue-share amounts are paid, Developer grants Company a non-exclusive, non-transferable, revocable (upon material non-payment) license to use the deliverables only for Suprema+.

After full payment/cap satisfaction, Company receives a perpetual product license or assignment as agreed.

## 13.3 Source-code escrow (optional)

For business continuity, parties may use a neutral source-code repository/escrow. Company receives release rights only upon defined events such as Developer insolvency or material unremedied failure to provide contracted support—not merely payment dispute without resolution.

---

# 14. Change Control

- Any requirement outside signed scope, including Wi-Fi/cloud, Mesh, API integrations, new hardware variants, changed BLE protocol, new panel behavior, new fault codes, or significant UI redesign, requires a written Change Request.
- Each Change Request states scope, fee, timeline impact, dependencies, and acceptance criteria.
- Developer has no obligation to start change work until both parties approve the Change Request in writing.

---

# 15. Confidentiality and Data Protection

- Both parties must protect confidential business, technical, pricing, customer, firmware, source-code, and protocol information.
- Customer personal data must be minimized; activation tracking should use pseudonymized data where possible.
- Neither party may disclose the other party’s confidential information except to employees/advisers with a need to know and confidentiality obligation, or where legally required.
- Cloud account ownership, access control, retention, backups, and data-export rights must be agreed before activation tracking is deployed.

---

# 16. Termination and Transition

## 16.1 Termination for cause

Either party may terminate for material breach not cured within **30 calendar days** after written notice, except payment/reporting breaches may have a shorter cure period of **15 calendar days**.

## 16.2 Effect of termination

- Company pays all approved milestone fees, unpaid invoices, accrued royalty/revenue share, and any minimum guarantee due through termination date.
- Royalty/revenue share on units manufactured, sold, dispatched, installed, or activated before termination remains payable.
- If Company continues to use Developer-owned deliverables after termination without full payment/license rights, it is unauthorized use.
- Developer provides reasonable transition artifacts only after undisputed overdue payments are settled.

---

# 17. Dispute Resolution and Governing Law

- Parties first attempt good-faith resolution between authorized business representatives for **15 calendar days**.
- If unresolved, dispute proceeds to mediation in Mumbai, Maharashtra.
- If still unresolved, dispute is referred to arbitration under the Arbitration and Conciliation Act, 1996; seat and venue: Mumbai; language: English; arbitrator count: one, jointly appointed or appointed per applicable rules.
- Governing law: laws of India.
- Courts in Mumbai retain jurisdiction for interim/injunctive relief as permitted by law.

**Legal note:** Final arbitration, jurisdiction, and penalty language should be reviewed by Indian counsel.

---

# 18. Schedules to Attach Before Signing

## Schedule A — Product and Price-Uplift Table (for Model C)

| Product configuration | Comparable standard SKU | Baseline ex-GST price | Suprema+ price floor | Minimum deemed uplift | Developer share % |
|---|---|---:|---:|---:|---:|
| 6 kW | [SKU] | ₹[ ] | ₹[ ] | ₹[ ] | 15% |
| 9 kW | [SKU] | ₹[ ] | ₹[ ] | ₹[ ] | 15% |
| 12 kW | [SKU] | ₹50,000 example | ₹68,000 example | ₹15,000 recommended minimum | 15% |
| 15 kW | [SKU] | ₹[ ] | ₹[ ] | ₹[ ] | 15% |
| 22.5 kW | [SKU] | ₹[ ] | ₹[ ] | ₹[ ] | 15% |

## Schedule B — Model Election and Numbers

- Selected model: ☐ A Fixed Fee ☐ B Protected Royalty ☐ C Protected Joint Product
- Protocol add-on selected: ☐ Yes (₹4,00,000) ☐ No
- Royalty rate / share: ₹[ ] per unit / [ ]% of Price Uplift
- Cap: ₹[ ]
- Term: [ ] months
- Minimum guarantee: ☐ None ☐ ₹[ ]/month for [ ] months
- Royalty trigger: ☐ Commercial Sale ☐ Unit Manufactured ☐ Hybrid
- Demo/warranty/replacement handling: [ ]
- Price floor / deemed uplift handling: [ ]

## Schedule C — Monthly Royalty Report Template

| Serial no. | Model/kW | Manufactured date | Dispatch date | Invoice no. | Customer/distributor | Invoice ex-GST | Baseline price | Price uplift | Activation date | Status | Royalty/share due |
|---|---|---|---|---|---|---:|---:|---:|---|---|---:|
| [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | ₹[ ] | ₹[ ] | ₹[ ] | [ ] | Sold/Returned/etc. | ₹[ ] |

---

# 19. Negotiation Notes (Not Part of Signed Agreement)

## Best protection stack for the Developer

1. Take meaningful upfront payment; do not fund the whole product based on future sales.
2. Use unique immutable serial numbers from manufacturing onward.
3. Require monthly unit-level reporting, including serials and invoices/production data.
4. Use shared activation records as an additional trail, not the only source of truth.
5. Preserve annual audit rights plus discrepancy-triggered audit.
6. Include a cap, term, late-payment interest, and minimum guarantee.
7. For Model C, use defined **price uplift** and price floors/deemed uplift—not “net profit.”
8. Ensure the contract captures affiliate, alternate-brand, bundle, and related-party sales.

## Recommended practical commercial position

If Company insists on Option 2 or 3, propose:

- ₹30L upfront.
- ₹750/unit royalty **or** 15% of clearly defined price uplift.
- ₹15L cap.
- 36-month term.
- Monthly serial-level reporting by the 15th.
- Shared activation dashboard.
- Annual audit right; Company pays audit costs if discrepancy exceeds 5%.
- ₹50,000/month minimum guarantee for the first 12 months after launch, negotiable to ₹25,000 if required.
- Add ₹4L separately if BLE Protocol Design & Hardware Integration is selected.

---

## Signature Blocks (For Lawyer-Finalized Version)

**For Developer**  
Name: __________________________  
Title/Capacity: __________________  
Signature: _______________________  
Date: ___________________________

**For Company**  
Legal entity: _____________________  
Name: __________________________  
Title/Capacity: __________________  
Signature: _______________________  
Date: ___________________________

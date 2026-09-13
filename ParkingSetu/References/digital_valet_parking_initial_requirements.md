# Digital Valet Parking Management System
## Initial Requirements and Solution Document

**Client type:** Five-star hotel / hospitality property  
**Document status:** Initial discussion draft  
**Version:** 0.2  
**Prepared for:** Client and development team  
**Prepared by:** Devendra Vaja  

---

## 1. Executive Summary

The hotel requires a digital valet parking solution for normal operations and high-volume events. Guests currently hand over their vehicle and key to valet staff and receive a physical token. During busy events, guests may wait in queues, staff may have difficulty locating vehicles, and the hotel may lack real-time visibility of vehicle and key status.

The proposed system will replace or supplement paper tokens with a secure digital valet session. A guest will receive a QR code or secure mobile link after vehicle check-in. The guest can use this ticket to view vehicle status and request the vehicle before reaching the pickup point. Valet staff will record vehicle details, photographs, key custody, and exact parking location. Hotel staff will manage pickup requests through a live operations dashboard.

---

## 2. Business Objectives

The system should reduce guest waiting time, improve the event experience, locate vehicles and keys quickly, document vehicle condition, improve staff accountability, support varied parking locations, and provide operational, security, finance, and management reports.

---

## 3. Product Vision

> A premium, secure, app-less digital valet experience that allows hotel guests to hand over their vehicle confidently, request it remotely, and collect it with minimal waiting.

---

## 4. Users and Roles

| Role | Main responsibilities |
|---|---|
| Guest | Receives digital ticket, views vehicle status, requests vehicle, receives updates, completes handover |
| Valet attendant | Registers vehicle, receives key, captures vehicle condition, parks, retrieves, and hands over vehicle |
| Valet supervisor | Monitors operations, assigns work, manages exceptions, and controls overrides |
| Help-desk operator | Monitors pickup requests and coordinates pickup locations |
| Hotel administrator | Configures properties, parking areas, users, events, tariffs, permissions, and reports |
| Security officer | Verifies vehicle exit and reviews handover and incident records |
| Finance/front-office user | Reviews payments, validations, refunds, and PMS/folio postings |
| System administrator | Manages technical configuration, integrations, monitoring, and support |

---

## 5. Proposed Solution Components

- **Guest PWA:** QR, SMS, WhatsApp, or email access without mandatory installation.
- **Valet Android app:** Intake, photographs, keys, locations, retrieval, handover, incidents, and offline synchronisation.
- **Hotel dashboard:** Live sessions, pickup queue, staff assignment, search, exceptions, KPIs, and reports.
- **Backend platform:** Authentication, sessions, vehicle/key/location services, notifications, payments, audit, reporting, and integration adapters.

---

## 6. End-to-End Process

### 6.1 Check-in

```text
Guest arrives → Vehicle/key received → Guest OTP verification → Vehicle details and photographs → Key tag recorded → Digital QR ticket issued → Vehicle parked → Parking QR scanned → Key rack recorded → Guest receives parked notification
```

### 6.2 Retrieval

```text
Guest opens ticket → Requests vehicle → System validates session → Pickup request created → Supervisor assigns runner → Runner sees vehicle/key location → Vehicle retrieved → Vehicle marked ready → Guest receives notification → QR/OTP handover verification → Payment/folio completion → Session closed
```

### 6.3 Exceptions

Support lost tickets, changed mobile numbers, vehicle/key not found, wrong location, damage disputes, duplicate requests, payment failures, security holds, and incomplete handovers. Every exception should record notes, photographs where applicable, staff identity, timestamp, severity, owner, and resolution.

---

## 7. Core Functional Requirements

### Guest

- Secure QR-based digital valet ticket.
- OTP or magic-link authentication.
- Vehicle details and status.
- Advance pickup request.
- Estimated preparation time and pickup point.
- SMS/WhatsApp/email notifications.
- Secure QR/OTP collection.
- Payment, receipt, support, and feedback.

### Vehicle intake

- Registration number, make, model, colour, type, guest mobile, name, event/room reference, special instructions, and priority flag.
- Front, rear, left, and right photographs.
- Existing scratches/dents, fuel or battery status, odometer, key count, and guest acknowledgement.
- Timestamp, staff identity, device identity, and session ID for records.

### Parking location

```text
Property → Parking area → Zone → Row → Floor/level → Bay → Position
```

The MVP should use QR markers at zones, rows, or bays. Future options include Bluetooth beacons, RFID/NFC, indoor maps, ANPR, GPS, and bay sensors.

### Key management

- Unique tag and key-rack/locker location.
- Key photograph and number of keys.
- Received, stored, issued, returned, and missing states.
- Staff-to-staff transfer history.
- Supervisor override and shift reconciliation.

### Retrieval and handover

- Pickup queue, staff assignment, priorities, delay reasons, and reassignment.
- Two-factor matching using QR/OTP plus vehicle number or registered mobile.
- Handover blocked for invalid token, mismatch, completed session, security hold, or unresolved approval/payment.

### Dashboard and reports

Display active vehicles, pending pickups, retrieval status, ready vehicles, delays, key status, queue length, and average retrieval time. Support search by vehicle, session, mobile, guest, room, event, key tag, and parking location.

Reports should include intake/exit, retrieval time, peak periods, staff productivity, dwell time, parking utilisation, key reconciliation, open sessions, incidents, payments, event revenue, feedback, and SLA breaches.

---

## 8. MVP Scope

### Guest MVP

QR ticket, OTP/magic link, vehicle/session view, pickup request, status updates, SMS, optional WhatsApp, QR/OTP pickup, and help-desk contact.

### Staff MVP

Role-based login, intake, mobile capture, key tag, photographs, damage notes, parking QR, pickup queue, location display, retrieval status, and handover.

### Hotel MVP

Live dashboard, parking configuration, staff/event management, search, history, key audit, reports, manual overrides, and audit trail.

### Deferred

Native guest app, deep PMS integration, ANPR, indoor navigation, dynamic staffing, automated folio posting, EV charging, multi-property administration, AI analytics, and loyalty integration.

---

## 9. Technical Architecture

```text
Guest PWA | Valet Android App | Hotel Dashboard
                    ↓
              API Gateway
                    ↓
Authentication | Valet Sessions | Vehicle/Location | Keys
Pickup Queue | Notifications | Payments | PMS Adapter | Reports
                    ↓
Relational DB | Photo Object Storage | Audit Log Store
```

Recommended direction: Kotlin/Jetpack Compose for Android, responsive PWA for guests, web dashboard, REST APIs, WebSockets or server-sent events, PostgreSQL, encrypted object storage, background workers, API versioning, idempotent pickup/payment operations, centralised logs, backups, and offline-first staff workflows.

---

## 10. Security and Privacy

Use role-based access, administrator MFA, encryption in transit and at rest, short-lived/revocable QR tokens, OTP rate limiting, masked phone numbers, photograph access controls, audit logs, encrypted backups, session revocation, configurable retention, secure deletion, and breach response.

Do not place raw guest personal information inside the QR code. Validate consent, lawful processing, retention, and security requirements with the hotel’s compliance/legal team before production.

---

## 11. Implementation Plan

### Phase 0: Discovery

Observe the current process, measure volumes and retrieval times, survey parking and connectivity, identify PMS/POS/payment/notification systems, interview stakeholders, define privacy and incident rules, and select a pilot event.

### Phase 1: MVP build

Build guest PWA, Android staff app, hotel dashboard, QR/OTP ticketing, vehicle/key/location records, pickup workflow, notifications, reports, audit, and offline queue.

### Phase 2: Pilot

Pilot one property and preferably one high-volume event. Measure intake/retrieval time, location/key errors, digital adoption, notification success, overrides, staff adoption, feedback, downtime, and queue length.

### Phase 3: Production hardening

Add monitoring, performance improvements, refined permissions, payment/PMS integrations, multilingual support, security testing, support processes, and training.

### Phase 4: Advanced capabilities

Add WhatsApp automation, ANPR, indoor maps, EV workflow, multi-property administration, predictive staffing, guest recognition, and loyalty integration.

---

## 12. Physical Hotel Setup

Provide QR boards at valet points, QR markers in parking areas, numbered key racks/lockers, printed fallback tickets, pickup signage, staff devices, charging, connectivity, downtime procedures, CCTV, and staff training. Configure event-specific parking zones, pickup points, staffing, priorities, tariffs, and queue thresholds.

---

## 13. Non-Functional Requirements

- Fast, simple one-handed staff workflow.
- Near-real-time pickup dashboard.
- Peak-event capacity defined during discovery.
- Offline continuation for critical staff actions.
- Search and status updates should be responsive.
- Secure, protected, timestamped audit history.
- Configurable availability and support SLA.
- Scalable from one property to multiple properties.

---

## 14. Risks and Mitigations

| Risk | Mitigation |
|---|---|
| Poor basement connectivity | Offline-first staff workflow and network survey |
| Guest does not receive message | PWA, printed fallback, WhatsApp, and manual lookup |
| Lost/shared QR | OTP and vehicle-number verification |
| Wrong location | Mandatory location scan and supervisor correction |
| Lost key | Key-rack QR, photograph, custody audit, reconciliation |
| Damage dispute | Time-stamped photographs and acknowledgement |
| Staff bypass | Simple workflow and supervisor reporting |
| Event overload | Queue priorities, extra pickup points, and staffing dashboard |
| PMS delay | Adapter with temporary manual billing |
| Privacy exposure | Tokenised QR, RBAC, retention, encryption |

---

## 15. Competitor Analysis and Market Position

### 15.1 Competitive landscape

The market includes:

1. Simple usage-based QR/WhatsApp tools.
2. Basic Indian valet SaaS platforms.
3. Professional valet platforms with tickets, requests, reporting, and payments.
4. Enterprise hotel platforms with integrations, implementation, security, and support.

Public pricing is inconsistent. Some vendors publish prices, while hotel-focused enterprise vendors generally require a quote. Market benchmarks include ValetPark/Varlet at approximately US$136–US$359/month for published lower tiers, Summon from approximately US$99.99/month, and Indian products ranging from approximately ₹499/location/month to ₹2/vehicle. Validate current pricing directly before using it in a client proposal.

### 15.2 Competitor comparison

| Competitor/category | Positioning | Notable capabilities | Public pricing indication |
|---|---|---|---:|
| ValetPark / Varlet | General valet operations | Digital tickets, QR/SMS requests, locations, users, volume plans, reporting | Approx. US$136–US$359/month; enterprise custom |
| Summon | Ticketless valet | SMS tickets, mobile requests, transient/overnight tickets | From approx. US$99.99/month |
| PUR Valet | Hotel and enterprise valet | QR/SMS tickets, photos, retrieval, payments, tips, PMS integration | Listings indicate a starting point around US$99/month; confirm directly |
| O-Valet | Multi-industry valet | Tickets, payments, kiosks, staff performance, revenue reporting | Directories indicate around US$99/month; basis varies |
| Oobeo | Valet and event parking | Event parking, payments, ticketing, tracking, reports | Pricing is generally quote-based or inconsistent publicly |
| ValetDesk | Indian valet operations | Paperless ticketing, tracking, productivity, utilisation | Public references mention from approximately ₹6,000/month |
| Valto by Mytra | India WhatsApp-first | Key-tag QR, WhatsApp ticket, retrieve action, no guest app | ₹2/vehicle shown publicly |
| ValetOS by amealio | India premium valet | Live tracking, ETA, geofencing, WhatsApp, UPI, offline, OCR | From ₹499/location/month shown publicly |

### 15.3 Capability comparison

| Capability | Simple tools | Indian SaaS | Enterprise platforms | Recommended product |
|---|---:|---:|---:|---:|
| QR/digital ticket | Yes | Yes | Yes | Yes |
| No guest app required | Usually | Usually | Usually | Yes |
| WhatsApp retrieval | Strong in newer tools | Increasingly common | Depends | Core |
| Vehicle location | Basic | Moderate | Strong | Strong zone/bay model |
| Key location | Limited | Possible | Often available | Core differentiator |
| Vehicle photographs | Limited | Possible | Strong | Core |
| Damage workflow | Limited | Possible | Strong | Core |
| Pickup queue/staff assignment | Basic | Moderate | Strong | Event-ready |
| Offline operation | Rare | Varies | Varies | Required |
| UPI/Indian payments | Limited | Stronger | Integration required | Required |
| PMS/folio integration | Rare | Limited | Stronger | Phase two |
| Multi-property | Varies | Possible | Strong | Pro/Enterprise |

### 15.4 SWOT analysis

#### International enterprise platforms

**Strengths:** Mature workflows, broad features, established references, payments, reporting, and integrations.

**Weaknesses:** Higher or less transparent pricing, longer implementation cycles, and limited India-specific WhatsApp, UPI, language, and operating workflows.

**Opportunities for this product:** India-first experience, faster deployment, local support, simpler staff workflows, and hotel-specific event operations.

**Threats:** Established hospitality relationships, larger development budgets, and stronger enterprise integration capabilities.

#### Indian valet SaaS platforms

**Strengths:** Local pricing, WhatsApp familiarity, UPI support, local implementation, and lower adoption barriers.

**Weaknesses:** Some may have limited PMS integration, weaker audit/key custody, less mature enterprise administration, or limited documentation.

**Opportunities for this product:** Own the five-star hotel segment with better guest experience, event mode, security, offline operation, damage protection, and PMS readiness.

**Threats:** Price competition, rapid feature copying, and low-cost per-vehicle offerings.

### 15.5 Recommended position

Position the system as:

> **An India-first, hotel-grade digital valet platform for QR, WhatsApp, vehicle tracking, key custody, and event-ready retrieval operations.**

The differentiator should be the complete operating system, not QR tickets alone:

- Accurate vehicle and key location.
- Advance retrieval requests.
- Staff assignment and queue management.
- Vehicle photos and damage documentation.
- Live SLA visibility.
- WhatsApp, SMS, and UPI.
- Offline basement operation.
- Hotel-grade audit and privacy.
- PMS and folio integration roadmap.

---

## 16. SaaS Business Model and Pricing

### 16.1 Recommended model

Use:

```text
Base subscription + included vehicle volume + paid integrations and event services
```

Hotels pay for reliability, implementation, training, support, reporting, integrations, and accountability—not only digital tickets.

### 16.2 Indicative India pricing

These are initial pricing hypotheses, not confirmed competitor prices.

| Plan | Indicative price | Suitable for | Included scope |
|---|---:|---|---|
| Basic / Starter | ₹2,999/property/month | Restaurants, clubs, small hotels | QR ticket, guest PWA, basic check-in, pickup request, dashboard, up to 500 vehicles |
| Growth | ₹7,999/property/month | Boutique and mid-sized hotels | Staff accounts, QR/SMS, WhatsApp workflow, photos, basic locations, reports, up to 2,500 vehicles |
| Professional | ₹14,999/property/month | Five-star hotels and event venues | Key tracking, zone/bay locations, queue, staff assignment, damage workflow, offline mode, priority support, up to 7,500 vehicles |
| Pro Plus / Hotel | ₹24,999/property/month | High-volume hotels and events | Multiple areas, event mode, advanced reports, UPI/payment integration, WhatsApp automation, branding, SLA support, up to 15,000 vehicles |
| Enterprise | ₹50,000–₹2,00,000+/month | Hotel groups | Multi-property administration, PMS/POS, SSO, custom workflows/reports, dedicated support, negotiated volume |

### 16.3 Implementation pricing

| Component | Indicative range |
|---|---:|
| Basic configuration | ₹25,000–₹50,000 |
| Site survey and parking setup | ₹25,000–₹75,000 |
| Training and pilot support | ₹25,000–₹75,000 |
| Branding/custom workflow | ₹50,000–₹1,50,000 |
| PMS/POS/payment integration | ₹75,000–₹3,00,000+ |
| Complete hotel pilot | ₹1,50,000–₹3,00,000 |

### 16.4 Overage and variable charges

Suggested included volumes:

- Basic: 500 vehicles/month.
- Growth: 2,500 vehicles/month.
- Professional: 7,500 vehicles/month.
- Pro Plus: 15,000 vehicles/month.

Suggested overage: ₹1–₹3 per additional vehicle. Charge separately for SMS, WhatsApp fees, payment gateway charges, excessive photo storage, ANPR, premium integrations, dedicated support, and event operations.

### 16.5 Event packages

| Package | Indicative price | Scope |
|---|---:|---|
| Small event | ₹5,000–₹10,000 | Temporary configuration, QR setup, basic report |
| Medium event | ₹15,000–₹30,000 | Extra pickup point, event dashboard, staff planning, support |
| Large event | ₹50,000–₹1,50,000+ | Temporary zones, high-volume support, dedicated operator, SLA monitoring, post-event report |

### 16.6 Recommended first-client proposal

```text
Pilot implementation: ₹1,50,000–₹3,00,000

Includes:
- Discovery and site survey
- Guest PWA
- Valet Android application
- Hotel dashboard
- QR ticketing
- Vehicle and key tracking
- Parking-zone configuration
- Pickup workflow
- SMS/WhatsApp integration
- Staff training
- One event or pilot period
- 30–60 days of launch support

Post-pilot subscription:
₹14,999–₹29,999/property/month

Additional charges:
- PMS integration
- Payment integration
- Custom branding
- Dedicated SLA
- Additional properties
- Event support
```

---

## 17. SaaS Viability Assessment

### 17.1 Why the opportunity is attractive

- The problem repeats across hotels, restaurants, clubs, malls, hospitals, and event venues.
- The core workflow is similar across properties.
- Configuration can replace repeated custom development.
- Value is measurable through shorter queues, fewer lost tickets, better accountability, and guest satisfaction.
- QR tickets, notifications, reports, and staff workflows suit cloud delivery.
- India-specific WhatsApp, UPI, language, GST, privacy, and support create local differentiation.
- Event operations create recurring or usage-based revenue.
- QR codes and existing phones limit hardware investment.

### 17.2 Main challenges

- Hotel sales cycles can be slow.
- Parking layouts and operating procedures differ.
- PMS/POS integrations require technical work.
- Staff training is required.
- Basement connectivity may be unreliable.
- Vehicle photographs and guest data create privacy obligations.
- Hotels expect dependable event support.
- Custom branding, contracts, and SLAs may be required.

### 17.3 Recommendation

Proceed with a focused SaaS strategy, but begin as **productised implementation plus recurring SaaS**, not pure self-service SaaS. Focus first on five-star and premium hotels with frequent events. Build a configurable core product, charge implementation separately, and avoid excessive one-off customisation.

Do not initially build a broad parking platform covering barriers, city parking, enforcement, and hardware. Start with hotel and premium-venue valet operations.

### 17.4 SaaS decision gate

Before investing heavily in a multi-property platform, validate:

- One successful hotel pilot.
- At least three design-partner properties or venues.
- At least two customers paying recurring subscription fees.
- A repeatable onboarding process.
- Measurable retrieval-time improvement.
- Reliable peak-event operation.
- Willingness to pay for key tracking, reporting, and support.
- Limited customer-specific customisation.

---

## 18. Go-to-Market Guidance

### 18.1 Initial beachhead

1. Five-star and luxury hotels.
2. Hotels with weddings, conferences, and large events.
3. Independent hotels and regional hotel groups.
4. Premium restaurants and clubs as a lower-complexity segment.
5. Hospitals and malls after the hotel workflow is stable.

### 18.2 Sales approach

1. Conduct an on-site valet workflow audit.
2. Measure current queue and retrieval times.
3. Demonstrate a guest and staff prototype.
4. Run a limited event pilot.
5. Compare before-and-after metrics.
6. Convert the pilot into an annual subscription.
7. Use the client as a case study for similar properties.

### 18.3 Metrics to demonstrate ROI

- Average guest waiting time.
- Peak queue length.
- Average retrieval time.
- Lost or disputed tickets.
- Vehicle-location errors.
- Key-location errors.
- Advance-retrieval adoption.
- Staff productivity.
- Manual calls to valet desk.
- Guest satisfaction.
- Event throughput.
- Notification delivery success.
- Manual overrides and exceptions.

### 18.4 Messaging

Emphasise:

- No paper-token dependency.
- Guests request cars before reaching the lobby.
- Staff know exactly where the car and key are located.
- Faster event retrieval.
- Photo-based damage protection.
- Live queue and SLA visibility.
- WhatsApp and UPI support.
- Offline basement operation.
- Hotel-grade audit and privacy.
- PMS and folio integration roadmap.

Avoid describing the product only as a QR-ticket generator, generic parking application, or basic valet tracking app.

---

## 19. Commercial Validation Questions

1. What monthly subscription would the client consider reasonable after the pilot?
2. Would the hotel prefer a one-time licence, subscription, or hybrid contract?
3. Is the hotel willing to pay separately for PMS and payment integrations?
4. Does the hotel require 24/7 support during events?
5. How many vehicles are processed monthly and during peak events?
6. Would event support be purchased as an add-on?
7. Does the hotel group require multi-property administration?
8. Is the client willing to become a reference customer?
9. Which features are mandatory for the first paid pilot?
10. What is the hotel’s procurement and security-review process?
11. Who will provide and manage staff devices?
12. Who pays SMS, WhatsApp, hosting, and payment-gateway charges?
13. What retrieval-time target should be included in the SLA?
14. What data retention and vehicle-photo policy will the hotel require?
15. What level of custom branding and reporting is expected?

---

## 20. Acceptance Criteria for Pilot Launch

The pilot may be considered ready when:

- Staff can create and complete a valet session.
- Guests can receive and open the digital ticket.
- Guests can request their vehicle remotely.
- Staff can see pickup requests in the dashboard.
- Every active vehicle has a parking location.
- Every active key has a recorded custody location.
- Staff can retrieve a vehicle using dashboard information.
- Handover requires guest and vehicle verification.
- Vehicle photographs are stored and viewable by authorised users.
- Exceptions and overrides are auditable.
- A downtime procedure exists.
- Hotel staff have completed training.
- The pilot has processed a realistic peak workload.

---

## 21. Document Status

This is an initial requirements, market, and commercial strategy document. It should be refined after on-site observation, stakeholder interviews, parking-layout review, network assessment, PMS/POS assessment, privacy review, peak-event validation, customer pricing interviews, and pilot feedback.

The next formal documents should be:

1. Business Requirements Document.
2. Product Requirements Document.
3. Detailed User Stories and Acceptance Criteria.
4. UX wireframe specification.
5. Technical Architecture Document.
6. API and data-model specification.
7. Test Strategy and UAT Plan.
8. Deployment, training, and support plan.
9. Pricing and commercial proposal.

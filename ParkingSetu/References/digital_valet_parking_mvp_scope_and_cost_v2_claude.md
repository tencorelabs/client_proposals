# Digital Valet Parking System
## MVP Scope, Technology, Cost, and Post-Launch Pricing (Revised)

**Client:** Five-star hotel / hospitality property
**Document type:** Client-facing MVP proposal — **Phase 1 of a 5-phase roadmap**
**Version:** 2.0 (supersedes v1.0 — adds a team/effort model behind the fixed price, and aligns post-launch support pricing with the Phase 2–5 roadmap)
**Currency:** Indian Rupees (INR)
**Development budget:** ₹2,40,000 (unchanged from v1.0)
**Companion document:** `digital_valet_parking_phase2_to_phase5_scope_and_cost.md`

---

## 1. Executive Summary

This document defines a focused MVP for a digital valet parking system. The MVP is designed for **one hotel property** and validates the complete operational workflow:

```text
Vehicle check-in → Digital ticket → Vehicle parked → Guest requests vehicle →
Staff retrieves vehicle → Guest verifies handover → Session completed
```

The product includes a valet staff Android application, a guest mobile web/PWA experience, a hotel operations web dashboard, a backend API and database, QR-based digital valet tickets, and basic vehicle, key, location, pickup, and handover tracking.

This is **Phase 1 of a five-phase roadmap** (MVP → Production Reliability → Commercial & Event Operations → Multi-Property Foundation → Enterprise Scale). PMS integration, payments, ANPR, multi-property support, sensors, and advanced analytics are intentionally excluded from this budget and picked up in later phases — see the companion Phase 2–5 document for what comes next and why costs grow the way they do.

---

## 2. MVP Goals

The MVP must prove that the hotel can:

1. Register a vehicle digitally.
2. Issue a digital valet ticket to the guest.
3. Record the key and parking location.
4. Allow the guest to request the vehicle before reaching the pickup point.
5. Show the request to hotel/valet staff.
6. Help staff find the vehicle and key.
7. Verify the guest before handover.
8. Close the valet session with an audit record.
9. Operate with a simple fallback when digital services are unavailable.

### Primary success criterion

> Valet staff must be able to accurately register, locate, retrieve, and hand over a vehicle while the guest receives a simple digital ticket and pickup update.

---

## 3. Users and Interfaces

| User | Interface | Main use |
|---|---|---|
| Guest | Mobile web/PWA | View ticket, status, and request vehicle |
| Valet attendant | Android app | Register, park, retrieve, and hand over vehicles |
| Valet supervisor | Web dashboard and Android app | Monitor queue, assign staff, resolve exceptions |
| Help-desk operator | Web dashboard | Search sessions and coordinate pickups |
| Hotel administrator | Web dashboard | Configure locations, users, and basic settings |

Only the valet staff application is native in the MVP. Guests do not need to install an app.

---

## 4. Critical MVP Features

**4.1 Staff authentication and roles** — Login, role types (attendant/supervisor/administrator), basic RBAC, session timeout, ability to disable a user, basic activity logging.

**4.2 Vehicle check-in** — Session creation with registration number, make, model, colour, guest name/mobile, event/visit reference, priority flag, special instructions; system generates a unique session ID.

**4.3 Key tracking** — Key tag number, keys received, key-rack/storage location, key status (received/stored/issued/completed/exception), staff identity at each transfer.

**4.4 Vehicle condition record** — One or more photographs, damage notes, optional odometer/fuel-battery status, guest acknowledgement where feasible. No computer-vision damage detection.

**4.5 Parking-location tracking** — QR labels or manually configured locations (`Property → Parking area → Zone → Row/Bay`); scan or select, link to session, view during retrieval, change with mandatory reason. No indoor navigation or sensors.

**4.6 Guest digital valet ticket** — Session number, vehicle details, hotel/event name, drop-off time, current status, secure QR, "Request My Vehicle" action, support contact. Token-based QR; no raw PII embedded.

**4.7 Guest verification** — One primary method (OTP via SMS **or** secure magic link), plus a printed/manual fallback for guests without digital access.

**4.8 Vehicle pickup request** — Open ticket → verify session → "Request My Vehicle" → confirmation → ready notification. Duplicate active requests are prevented.

**4.9 Staff retrieval workflow** — View pending requests, see vehicle photo/location/key location, assign a runner, mark retrieval started/ready, record delay or exception.

**4.10 Secure handover** — Two-factor verification where practical (QR/link + vehicle number, or mobile/OTP); staff confirms guest, vehicle, key, timestamp, and identity; session moves to **Completed**.

**4.11 Status workflow** — Checked In → Parked → Pickup Requested → Retrieving → Ready → Completed, plus Exception and Cancelled. Every status change records user and timestamp.

**4.12 Hotel dashboard** — Active vehicle list, pending pickup queue, vehicle/key status and location, search (vehicle/mobile/session/key tag), staff assignment, manual correction with reason, exception notes, basic daily report and session history.

**4.13 Notifications** — One primary channel (SMS) plus email where practical, for ticket creation, parked confirmation, pickup confirmation, ready notification, and handover completion. WhatsApp only if the hotel already has an approved Business Platform account and templates.

**4.14 Basic audit and administration** — Every state change (session, vehicle, key, location, pickup, staff assignment, retrieval, handover, override, exception) is logged. Administrators can configure property name, parking areas, pickup point, staff users, notification templates, and basic session settings.

---

## 5. Team, Effort, and Budget Justification

*(New in v2.0 — this section directly answers the earlier review finding that the MVP scope looked tight against its ₹2,40,000 / 8–10 week budget. The short answer: the number holds, but only under a stated set of team, rate, and scope-discipline assumptions — spelled out below so the fixed price is defensible rather than a round number.)*

### 5.1 Rate card used for this estimate

MVP-stage work is intentionally staffed with a **lean, mostly mid/junior generalist team** rather than specialists — that is the single biggest lever that keeps the price at ₹2,40,000. From Phase 2 onward, specialist roles (payments, DevOps/SRE, security, integration) are introduced, which is the main reason later-phase day rates — and therefore costs — step up (see the companion document, §2).

| Role | Rate/day |
|---|---:|
| Mid-level Developer (backend/frontend/Android) | ₹2,000 |
| UX/UI support (wireframes only, no design system) | ₹2,000 |
| QA support (manual testing) | ₹2,000 |
| PM/coordination (part-time) | ₹2,000 |

A single blended rate of **₹2,000/person-day** is used for the whole MVP team. This is deliberately flat and low relative to later phases — it assumes a small agency/team with standard tooling and reusable templates, not senior specialists.

### 5.2 Effort model (reconciles exactly to the ₹2,40,000 fixed price)

| Work package | Person-days | Rate/day | Cost |
|---|---:|---:|---:|
| Discovery, scope freeze, technical design | 6 | ₹2,000 | ₹12,000 |
| UX wireframes and basic visual design | 7.5 | ₹2,000 | ₹15,000 |
| Backend, PostgreSQL, Redis, authentication, APIs | 30 | ₹2,000 | ₹60,000 |
| Valet staff Android application | 36 | ₹2,000 | ₹72,000 |
| Guest PWA/mobile web | 14 | ₹2,000 | ₹28,000 |
| Hotel dashboard | 16 | ₹2,000 | ₹32,000 |
| Notifications, audit, reports, deployment | 5.5 | ₹2,000 | ₹11,000 |
| QA, UAT support, training, handover | 5 | ₹2,000 | ₹10,000 |
| **Total** | **120 person-days** | | **₹2,40,000** |

120 person-days at a flat ₹2,000/day blended rate is the arithmetic behind the fixed price. Anything that pushes actual effort meaningfully above ~120 person-days (see §5.4) will not fit inside this budget.

### 5.3 Team roster and calendar allocation (8–10 week timeline)

120 person-days spread over an 8–10 week calendar (≈ 40–50 working days) implies an average of roughly **2.5–3 people working concurrently**. In practice, allocation is front- and back-loaded rather than flat:

| Role | Active weeks | Allocation | Person-days |
|---|---|---|---:|
| Tech Lead / Backend Developer | Weeks 1–9 | ~90% (discovery + backend build) | 36 |
| Android Developer | Weeks 2–9 | 100% | 36 |
| Frontend Developer (PWA + Dashboard) | Weeks 2–8 | 100% | 30 |
| UX/UI support | Weeks 1–2 | Part-time | 7.5 |
| QA support | Weeks 8–9 | Part-time | 5 |
| PM / coordination + deployment support | Throughout, light-touch | Part-time | 5.5 |

Three people are effectively full-time for most of the build (weeks 2–8), with UX front-loaded and QA/handover back-loaded. This is a **compact, dedicated team assumption** — if the same individuals are shared across multiple concurrent client projects, either the price or the timeline (or both) will need to move.

### 5.4 What keeps the MVP affordable at this scope — explicit trade-offs

The ₹2,40,000 figure only holds because the MVP deliberately narrows *how* each feature is built, not just *which* features are included:

- **One guest verification method**, not three or four in parallel (OTP *or* magic link, not both built and maintained).
- **Manual QA**, not an automated regression suite — acceptable for a single-property pilot, not for later phases.
- **Wireframes only**, no custom visual design system — the UI uses standard component libraries (e.g., Tailwind/shadcn-style defaults) rather than bespoke branding work.
- **Basic offline queue**, not conflict resolution — if two devices edit the same session while offline, the MVP flags it for manual supervisor review rather than auto-resolving it (real conflict handling is a Phase 2 item).
- **No dedicated DevOps/security specialist** — the backend developer applies baseline hardening (HTTPS, hashed secrets, rate limiting) as part of normal build work, not as a separate hardening pass.
- **Template-based notification content**, not multilingual or highly customised messaging.
- **Basic monitoring** (uptime + error alerts), not full observability tooling.

### 5.5 What this means for scope control

If discovery reveals materially more scope than assumed here — for example, more than 3 parking zones each needing distinct configuration, a requirement for PMS/guest lookup even at pilot stage, a bespoke design system, or a dedicated automated test suite — the effort model in §5.2 no longer holds. In that case a change order is raised **before** development starts, not mid-build (see §15, Change Request Policy). This keeps the fixed price honest rather than quietly eroding delivery quality to protect the number.

---

## 6. Technology Stack

### 6.1 Architecture

```text
Guest PWA              Valet Android App              Hotel Dashboard
     ↓                         ↓                             ↓
                    Secure HTTPS API / Backend
                                  ↓
        PostgreSQL | Redis | Authentication | Object Storage
                                  ↓
                       Notifications and Audit Logs
```

### 6.2 Recommended technologies

| Layer | Technology | Purpose |
|---|---|---|
| Staff mobile app | Kotlin + Jetpack Compose | Native Android application for valet staff |
| Camera and QR | CameraX + ML Kit or ZXing | Vehicle photos and QR scanning |
| Local mobile storage | Room database | Temporary offline queue and local session state |
| Background sync | WorkManager | Retry queued actions when connectivity returns |
| Guest frontend | React/Next.js PWA | App-less guest ticket and pickup request |
| Hotel dashboard | React/Next.js | Operations and administration dashboard |
| Backend | Kotlin/Spring Boot | Secure REST API and business workflow |
| API documentation | OpenAPI/Swagger | Developer and integration documentation |
| Primary database | PostgreSQL | Users, sessions, vehicles, keys, locations, requests, audit records |
| Cache/queue | Redis | OTP/rate limiting, short-lived state, queue support, job coordination |
| Authentication | Backend auth with JWT/session tokens | Staff login, guest token, OTP/magic link, role-based access |
| Photo storage | S3-compatible object storage | Vehicle and incident images with signed URLs |
| Notifications | Indian SMS provider (MSG91, Exotel, Gupshup, or client-approved) | OTP and operational messages |
| Optional WhatsApp | WhatsApp Business Platform, if client-ready | Digital ticket and pickup messages |
| Hosting | AWS Mumbai, Google Cloud Mumbai, or Azure India | Production hosting and data residency |
| Monitoring | Sentry plus cloud logs/metrics | Errors, performance, and operational monitoring |
| CI/CD | GitHub Actions or GitLab CI | Automated build, test, and deployment |
| Source control | GitHub/GitLab private repository | Code management and release history |

*No API gateway, managed enterprise auth provider, message bus, or BI tooling at this stage — those are introduced only when Phase 4/5 property counts justify them (see companion document, §6.3 and §7.3).*

### 6.3 PostgreSQL scope

Properties/parking locations, staff users/roles, guests/vehicles, valet sessions, keys/key locations, pickup requests, status transitions, notifications, exceptions, audit records.

### 6.4 Redis scope

OTP expiry/rate limiting, session-link throttling, duplicate request protection, short-lived dashboard/queue state, background-job coordination if required. PostgreSQL remains the system of record.

### 6.5 Authentication scope

Staff login (email/mobile + password or OTP), role-based permissions, guest session via signed short-lived token and/or OTP, administrator MFA recommended, password reset, device/session revocation, OTP/login rate limiting.

---

## 7. Included in the ₹2,40,000 Development Cost

### 7.1 Product deliverables

One hotel/property configuration; one Android valet staff app; one guest PWA; one hotel operations dashboard; backend APIs; PostgreSQL data model; Redis integration; authentication and basic role management; QR ticket generation/validation; vehicle/key/location workflow; vehicle photo upload; pickup request workflow; retrieval and handover workflow; basic notification integration; basic audit logging; basic reports; deployment to agreed cloud environment; basic UAT support; staff walkthrough/training; source-code handover; basic technical and user documentation.

### 7.2 Development cost allocation

*(Identical to the effort model in §5.2 — repeated here for the commercial summary.)*

| Work package | Amount |
|---|---:|
| Discovery, scope freeze, and technical design | ₹12,000 |
| UX wireframes and basic visual design | ₹15,000 |
| Backend, PostgreSQL, Redis, authentication, and APIs | ₹60,000 |
| Valet staff Android application | ₹72,000 |
| Guest PWA/mobile web | ₹28,000 |
| Hotel dashboard | ₹32,000 |
| Notifications, audit, reports, and deployment | ₹11,000 |
| QA, UAT support, training, and handover | ₹10,000 |
| **Total development cost** | **₹2,40,000** |

### 7.3 Development payment milestones

| Milestone | Percentage | Amount |
|---|---:|---:|
| Kickoff and scope approval | 30% | ₹72,000 |
| Backend and staff workflow milestone | 30% | ₹72,000 |
| Guest PWA and hotel dashboard milestone | 25% | ₹60,000 |
| UAT, deployment, training, and handover | 15% | ₹36,000 |
| **Total** | **100%** | **₹2,40,000** |

---

## 8. Not Included in the Development Cost

PMS integration; POS integration; hotel folio posting; payment gateway/UPI integration; automated ANPR; native guest Android/iOS app; multi-property administration; advanced multi-tenant SaaS billing; Bluetooth/RFID/NFC/sensor/camera hardware integrations; indoor map navigation; AI ETA prediction or computer-vision damage detection; advanced offline conflict resolution; advanced tariffs/discounts/tax invoices/refunds/tips; enterprise SSO/SAML/OIDC; advanced BI/data warehouse; 24/7 support or on-call operations; unlimited changes after scope approval; hardware/devices/QR signage/key lockers/network upgrades; cloud/SMS/WhatsApp/email/payment/map usage charges; app-store fees if a native app is later added; travel/on-site expenses; GST and applicable taxes.

---

## 9. Infrastructure and Third-Party Costs

### 9.1 Initial setup reserve

| Item | Initial estimate |
|---|---:|
| Cloud account/environment setup | ₹0–₹5,000 |
| Managed PostgreSQL initial allocation | ₹0–₹5,000 |
| Redis initial allocation | ₹0–₹3,000 |
| Object storage and backups | ₹0–₹3,000 |
| Domain and SSL | ₹1,000–₹3,000 |
| Monitoring/error tracking | ₹0–₹5,000 |
| SMS/OTP wallet | ₹5,000–₹10,000 |
| WhatsApp provider reserve, if used | ₹5,000–₹15,000 |
| **Recommended initial reserve** | **₹15,000–₹49,000** |

For budget planning, show **₹25,000–₹50,000** as an additional initial infrastructure/third-party reserve.

### 9.2 Expected monthly post-launch cost

| Cost item | Estimated monthly range |
|---|---:|
| Application/API hosting | ₹1,500–₹5,000 |
| Managed PostgreSQL | ₹1,500–₹5,000 |
| Managed Redis | ₹500–₹2,500 |
| Object storage and backups | ₹500–₹2,000 |
| Monitoring, logs, and email | ₹0–₹2,000 |
| SMS/OTP | ₹1,000–₹8,000+ |
| WhatsApp usage, if enabled | ₹1,000–₹10,000+ |
| Domain and miscellaneous | ₹100–₹500 |
| **Estimated monthly total** | **₹6,100–₹35,000+** |

### 9.3 Recommended hosting configuration for MVP

One production API/application environment; one small/shared staging environment; managed PostgreSQL with automated backups; small managed Redis instance; object storage for photographs; HTTPS certificate; basic monitoring and error alerts; daily database backup with a tested restore procedure. Avoid multi-region deployment, Kubernetes, database replicas, or HA architecture at this stage.

---

## 10. Post-Launch Pricing and Support

*(Revised in v2.0 — pricing below is the MVP column of a single tier table used consistently across all five phases. See the companion document, §3, for the full Basic/Standard/Priority/Premium ladder across MVP through Phase 5 — this keeps naming and price growth consistent as the hotel scales up, rather than each phase document inventing its own tier names.)*

| Support Tier | MVP (1 property) | Includes |
|---|---:|---|
| Basic | ₹8,000/month | Bug fixes, monitoring review, minor configuration assistance, business-hours response |
| Standard | ₹15,000/month | Basic support plus monthly health check, small content/configuration changes, priority response |
| Priority | ₹25,000/month | Priority support, event assistance by arrangement, faster response, operational review |
| On-demand | ₹1,500–₹2,500/hour | Work outside included support scope |
| Major feature/change request | Quoted separately | New integrations, workflows, reports, or screens (see Phase 2 onward) |

Third-party infrastructure and messaging charges are additional in every plan.

### Recommended client commercial model

```text
One-time MVP development: ₹2,40,000
Initial infrastructure/third-party reserve: ₹25,000–₹50,000
Post-launch subscription/support: ₹8,000–₹25,000/month
Cloud and messaging usage: billed at actual cost
```

| Cost | Amount |
|---|---:|
| MVP development | ₹2,40,000 |
| Initial infrastructure reserve | ₹35,000 |
| 12 months Basic support at ₹8,000/month | ₹96,000 |
| 12 months estimated infrastructure at ₹10,000/month | ₹1,20,000 |
| **Illustrative first-year total** | **₹4,91,000** |

### Optional post-launch feature pricing (ballpark, ahead of Phase 2)

| Feature | Ballpark additional development cost |
|---|---:|
| Payment gateway/UPI integration | See Phase 3, companion document |
| WhatsApp production workflow | See Phase 2, companion document |
| PMS integration | See Phase 3, companion document |
| ANPR integration | See Phase 5, companion document |
| Multi-property administration | See Phase 4, companion document |
| Native guest mobile app | ₹2,00,000–₹5,00,000+ (not currently roadmapped) |

---

## 11. MVP Delivery Timeline

| Stage | Duration | Primary team (from §5.3) |
|---|---:|---|
| Scope freeze and workflow confirmation | 2–3 days | Tech Lead, PM |
| Wireframes and technical design | 4–5 days | UX support, Tech Lead |
| Backend, PostgreSQL, Redis, and authentication | 1.5–2 weeks | Tech Lead / Backend Developer |
| Android staff app | 2.5–3 weeks | Android Developer |
| Guest PWA | 1–1.5 weeks | Frontend Developer |
| Hotel dashboard | 1.5–2 weeks | Frontend Developer |
| Integration, QA, deployment, and training | 1.5–2 weeks | QA support, Tech Lead, PM |
| **Total MVP delivery** | **8–10 weeks** | ~3 people concurrently at peak |

Assumes prompt client feedback, one property, no PMS/POS integration, one notification provider, no major scope changes, and the team composition in §5.3 remaining stable for the duration.

---

## 12. Acceptance Criteria

The MVP is considered ready for pilot when: staff can log in per role; staff can create a vehicle session; guest receives a valid digital ticket; vehicle and key details are recorded; vehicle location is recorded; guest can request the vehicle; pickup request appears on the dashboard; staff can view vehicle and key location; staff can update retrieval status; guest and vehicle are verified before handover; session can be closed as completed; vehicle photographs can be viewed by authorised staff; manual exceptions/overrides are recorded; basic reports can be generated; backup/restore procedure is documented; hotel staff complete UAT and training.

---

## 13. Critical Assumptions and Client Responsibilities

- The client provides timely feedback and one authorised decision-maker.
- The client provides hotel branding, content, workflow rules, and notification text.
- The client provides access to required devices or approves test devices.
- The client provides SMS/WhatsApp account access if those channels are required.
- The client provides parking-layout information and location naming.
- The client nominates staff for UAT and training.
- The client pays cloud and third-party charges.
- The client accepts a manual fallback for outages.
- The client does not require PMS/POS/payment integration in the MVP.
- **The team composition and allocation in §5.3 stays stable for the project duration** — swapping in different individuals mid-build, or spreading the same individuals across other concurrent projects, invalidates the effort model in §5.2.
- New requirements after scope approval may change cost and timeline.

---

## 14. Final Commercial Summary

| Item | Amount |
|---|---:|
| Fixed MVP development cost | **₹2,40,000** |
| Additional initial infrastructure/third-party reserve | **₹25,000–₹50,000** |
| Expected monthly infrastructure after launch | **₹6,100–₹35,000+** |
| Recommended monthly support | **₹8,000–₹25,000** |
| MVP delivery timeline | **8–10 weeks** |

### Recommended client-facing quote

> **Digital Valet Parking MVP (Phase 1 of 5): ₹2,40,000**
> **Initial infrastructure and third-party services: ₹25,000–₹50,000 additional, billed separately or paid directly by the client**
> **Post-launch support: ₹8,000–₹25,000 per month, plus actual cloud and messaging usage**

This pricing covers a focused one-property pilot and should be presented as a validation MVP. See the companion Phase 2–5 document for the full roadmap, cost progression, and staffing behind each subsequent phase.

---

## 15. Change Request Policy

The fixed price covers only the features listed in this document, built to the effort model and trade-offs in §5. Any change that adds a new integration, user role, application, workflow, report, hardware connection, or major design change must be estimated separately. Minor corrections during UAT are included when they relate to the agreed scope. New functionality, additional platforms, additional properties, and third-party integrations are not considered bug fixes.

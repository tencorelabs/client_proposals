# Digital Valet Parking System
## MVP Scope, Technology, Cost, and Post-Launch Pricing

**Client:** Five-star hotel / hospitality property  
**Document type:** Client-facing MVP proposal  
**Version:** 1.0  
**Currency:** Indian Rupees (INR)  
**Development budget:** ₹2,40,000  

---

## 1. Executive Summary

This document defines a focused MVP for a digital valet parking system. The MVP is designed for **one hotel property** and validates the complete operational workflow:

```text
Vehicle check-in → Digital ticket → Vehicle parked → Guest requests vehicle →
Staff retrieves vehicle → Guest verifies handover → Session completed
```

The product will include:

- A valet staff Android application.
- A guest mobile web/PWA experience.
- A hotel operations web dashboard.
- A backend API and database.
- QR-based digital valet tickets.
- Basic vehicle, key, location, pickup, and handover tracking.

This is a pilot-quality MVP, not a complete enterprise hotel platform. PMS integration, advanced payments, ANPR, multi-property support, sensors, and advanced analytics are excluded from this budget.

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

### 4.1 Staff authentication and roles

- Staff login.
- Role types: attendant, supervisor, administrator.
- Basic role-based access control.
- Session timeout.
- Ability to disable a staff user.
- Basic activity logging.

### 4.2 Vehicle check-in

Staff must be able to create a valet session with:

- Vehicle registration number.
- Vehicle make.
- Vehicle model.
- Vehicle colour.
- Guest name, if required.
- Guest mobile number.
- Event or hotel visit reference, if required.
- Priority/VIP flag.
- Special instructions.

The system must generate a unique valet session ID.

### 4.3 Key tracking

The MVP must record:

- Key tag number.
- Number of keys received.
- Key-rack or key-storage location.
- Key status: received, stored, issued, completed, or exception.
- Staff member who accepted the key.
- Staff member who issued the key for retrieval.

### 4.4 Vehicle condition record

The staff member should capture a minimum condition record:

- One or more vehicle photographs.
- Existing damage notes.
- Optional odometer or fuel/battery status.
- Guest acknowledgement where operationally feasible.

The MVP will not include computer-vision damage detection.

### 4.5 Parking-location tracking

The MVP should use QR labels or manually configured locations.

Recommended location structure:

```text
Property → Parking area → Zone → Row/Bay
```

Staff must be able to:

- Select or scan a parking location.
- Link the location to the valet session.
- View the current location during retrieval.
- Change the location with a mandatory reason.

Exact indoor navigation and sensor-based positioning are excluded.

### 4.6 Guest digital valet ticket

The guest receives a secure mobile link containing:

- Valet session number.
- Vehicle registration number.
- Vehicle make/model/colour.
- Hotel or event name.
- Drop-off time.
- Current status.
- Secure QR code.
- Request-my-vehicle action.
- Support contact.

The QR must contain a secure token and must not expose raw personal information.

### 4.7 Guest verification

The MVP supports one primary verification method:

- OTP through SMS, or
- Secure magic link.

A printed/manual fallback must be available for guests who cannot access the digital ticket.

### 4.8 Vehicle pickup request

The guest must be able to:

1. Open the digital valet ticket.
2. Verify the session.
3. Tap “Request My Vehicle”.
4. Receive request confirmation.
5. Receive a vehicle-ready notification.

The system must prevent duplicate active pickup requests.

### 4.9 Staff retrieval workflow

Staff must be able to:

- View pending pickup requests.
- See vehicle number, vehicle photo, parking location, and key location.
- Assign a runner or mark a responsible staff member.
- Mark retrieval started.
- Mark vehicle ready at pickup point.
- Record delay or exception.

### 4.10 Secure handover

The MVP should use two-factor verification where practical:

- Guest QR or secure link.
- Vehicle registration number.
- Guest mobile number or OTP.

The staff member must confirm:

- Correct guest/session.
- Correct vehicle.
- Key handed over.
- Handover date and time.
- Staff identity.

The system then changes the session to **Completed**.

### 4.11 Status workflow

```text
Checked In
    ↓
Parked
    ↓
Pickup Requested
    ↓
Retrieving
    ↓
Ready
    ↓
Completed
```

Additional status:

- Exception.
- Cancelled.

All important status changes must record user and timestamp.

### 4.12 Hotel dashboard

The dashboard must provide:

- Active vehicle list.
- Pending pickup queue.
- Vehicle status.
- Vehicle and key location.
- Search by vehicle number, mobile number, session ID, or key tag.
- Staff assignment.
- Manual correction with reason.
- Exception notes.
- Basic daily report.
- Basic session history.

### 4.13 Notifications

The MVP should support one primary notification channel plus email where practical:

- Digital ticket link.
- Vehicle parked confirmation.
- Pickup request confirmation.
- Vehicle-ready notification.
- Handover completion.

SMS is recommended for the first deployment. WhatsApp may be implemented if the client already has an approved Business Platform account and templates.

### 4.14 Basic audit and administration

The system must record:

- Session creation.
- Vehicle updates.
- Key updates.
- Location updates.
- Pickup request.
- Staff assignment.
- Retrieval status changes.
- Handover.
- Manual overrides.
- Exceptions.

Administrators should be able to configure:

- Hotel/property name.
- Parking areas and locations.
- Pickup point.
- Staff users.
- Notification templates.
- Basic session settings.

---

## 5. Technology Stack

### 5.1 Architecture

```text
Guest PWA              Valet Android App              Hotel Dashboard
     ↓                         ↓                             ↓
                    Secure HTTPS API / Backend
                                  ↓
        PostgreSQL | Redis | Authentication | Object Storage
                                  ↓
                       Notifications and Audit Logs
```

### 5.2 Recommended technologies

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
| Authentication | Backend auth with JWT/session tokens or managed Auth provider | Staff login, guest token, OTP/magic link, role-based access |
| Photo storage | S3-compatible object storage | Vehicle and incident images with signed URLs |
| Notifications | Indian SMS provider such as MSG91, Exotel, Gupshup, or client-approved provider | OTP and operational messages |
| Optional WhatsApp | WhatsApp Business Platform through approved provider | Digital ticket and pickup messages |
| Hosting | AWS Mumbai, Google Cloud Mumbai, or Azure India | Production hosting and data residency considerations |
| Monitoring | Sentry plus cloud logs/metrics | Errors, performance, and operational monitoring |
| CI/CD | GitHub Actions or GitLab CI | Automated build, test, and deployment |
| Source control | GitHub/GitLab private repository | Code management and release history |

### 5.3 PostgreSQL scope

PostgreSQL will store:

- Properties and parking locations.
- Staff users and roles.
- Guests and vehicles.
- Valet sessions.
- Keys and key locations.
- Pickup requests.
- Status transitions.
- Notifications.
- Exceptions.
- Audit records.

### 5.4 Redis scope

Redis will be used only for short-lived or operational data, such as:

- OTP expiry and rate limiting.
- Session-link throttling.
- Duplicate request protection.
- Short-lived dashboard or queue state.
- Background-job coordination, if required.

PostgreSQL remains the system of record. Redis must not be the only storage location for business-critical vehicle or handover information.

### 5.5 Authentication scope

- Staff login with email/mobile and password or OTP.
- Role-based staff permissions.
- Guest session through signed, short-lived token and/or OTP.
- Administrator MFA recommended.
- Password reset for staff.
- Device/session revocation.
- Rate limiting for OTP and login attempts.

---

## 6. Included in the ₹2,40,000 Development Cost

### 6.1 Product deliverables

- One hotel/property configuration.
- One Android valet staff application.
- One guest PWA/mobile web experience.
- One hotel operations dashboard.
- Backend APIs.
- PostgreSQL data model.
- Redis integration for temporary operational state.
- Authentication and basic role management.
- QR ticket generation and validation.
- Vehicle, key, and parking-location workflow.
- Vehicle photo upload.
- Pickup request workflow.
- Retrieval and handover workflow.
- Basic notification integration.
- Basic audit logging.
- Basic reports.
- Deployment to agreed cloud environment.
- Basic UAT support.
- Staff walkthrough/training session.
- Source-code handover according to contract.
- Basic technical and user documentation.

### 6.2 Suggested development cost allocation

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

This allocation is for planning and proposal presentation. Internal effort can be redistributed without changing the total fixed development fee.

### 6.3 Development payment milestones

| Milestone | Percentage | Amount |
|---|---:|---:|
| Kickoff and scope approval | 30% | ₹72,000 |
| Backend and staff workflow milestone | 30% | ₹72,000 |
| Guest PWA and hotel dashboard milestone | 25% | ₹60,000 |
| UAT, deployment, training, and handover | 15% | ₹36,000 |
| **Total** | **100%** | **₹2,40,000** |

---

## 7. Not Included in the Development Cost

The following are outside the ₹2,40,000 fixed development fee unless specifically added through a change request:

- PMS integration.
- POS integration.
- Hotel folio posting.
- Payment gateway integration.
- UPI collection and reconciliation.
- Automated ANPR/number-plate recognition.
- Native guest Android or iOS application.
- Multi-property or hotel-group administration.
- Advanced multi-tenant SaaS billing.
- Bluetooth, RFID, NFC, sensors, cameras, or hardware integrations.
- Indoor map navigation.
- AI ETA prediction or computer-vision damage detection.
- Advanced offline conflict resolution.
- Advanced tariffs, discounts, tax invoices, refunds, or tips.
- Enterprise SSO/SAML/OIDC.
- Advanced BI/data warehouse.
- 24/7 support or on-call operations.
- Unlimited changes after scope approval.
- Hardware, Android devices, QR boards, key lockers, and network upgrades.
- Cloud hosting, SMS, WhatsApp, email, payment, map, or other third-party usage charges.
- App-store fees, if a native guest app is later added.
- Travel and on-site expenses.
- GST and applicable taxes.

---

## 8. Infrastructure and Third-Party Costs

Infrastructure and third-party costs are separate from development. They are paid by the client or reimbursed at actual cost.

### 8.1 Initial setup reserve

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

For the client’s budget planning, show **₹25,000–₹50,000 as an additional initial infrastructure/third-party reserve**.

### 8.2 Expected monthly post-launch cost

| Cost item | Estimated monthly range |
|---|---:|
| Application/API hosting | ₹1,500–₹5,000 |
| Managed PostgreSQL | ₹1,500–₹5,000 |
| Managed Redis | ₹500–₹2,500 |
| Object storage and backups | ₹500–₹2,000 |
| Monitoring, logs, and email | ₹0–₹2,000 |
| SMS/OTP | ₹1,000–₹8,000+ |
| WhatsApp usage, if enabled | ₹1,000–₹10,000+ |
| Domain and miscellaneous services | ₹100–₹500 |
| **Estimated monthly total** | **₹6,100–₹35,000+** |

Actual messaging cost depends on the number of check-ins, OTP attempts, status messages, and WhatsApp conversations. Cloud services are also usage-based. The client should maintain an initial reserve and review actual consumption after the pilot month.

### 8.3 Recommended hosting configuration for MVP

- One production API/application environment.
- One small staging environment or shared staging setup.
- Managed PostgreSQL with automated backups.
- Small managed Redis instance.
- Object storage for photographs.
- HTTPS certificate.
- Basic monitoring and error alerts.
- Daily database backup and tested restore procedure.

Avoid multi-region deployment, Kubernetes, database replicas, and high-availability architecture in this budget unless the hotel explicitly requires them.

---

## 9. Post-Launch Pricing and Support

### 9.1 Recommended post-launch options

| Option | Monthly fee | Includes |
|---|---:|---|
| Basic support | ₹8,000/month | Bug fixes, monitoring review, minor configuration assistance, business-hours response |
| Standard support | ₹15,000/month | Basic support plus monthly health check, small content/configuration changes, priority response |
| Premium support | ₹25,000–₹35,000/month | Priority support, event assistance by arrangement, faster response, operational review |
| On-demand support | ₹1,500–₹2,500/hour | Work outside included support scope |
| Major feature/change request | Quoted separately | New integrations, workflows, reports, or screens |

Third-party infrastructure and messaging charges are additional in every support plan.

### 9.2 Recommended client commercial model

```text
One-time MVP development: ₹2,40,000
Initial infrastructure/third-party reserve: ₹25,000–₹50,000
Post-launch subscription/support: ₹8,000–₹15,000/month
Cloud and messaging usage: billed at actual cost
```

A practical first-year planning example:

| Cost | Amount |
|---|---:|
| MVP development | ₹2,40,000 |
| Initial infrastructure reserve | ₹35,000 |
| 12 months basic support at ₹8,000/month | ₹96,000 |
| 12 months estimated infrastructure at ₹10,000/month | ₹1,20,000 |
| **Illustrative first-year total** | **₹4,91,000** |

A lower-usage pilot may cost less. A high-event-volume hotel using significant SMS/WhatsApp and storage may cost more.

### 9.3 Optional post-launch feature pricing

These are ballpark estimates for future change requests:

| Feature | Ballpark additional development cost |
|---|---:|
| Payment gateway/UPI integration | ₹50,000–₹1,00,000 |
| WhatsApp production workflow | ₹35,000–₹75,000 plus provider fees |
| One PMS integration | ₹1,00,000–₹3,00,000+ |
| POS or folio integration | ₹75,000–₹2,00,000+ |
| ANPR integration | ₹1,00,000–₹3,00,000+ plus camera/API costs |
| Multi-property administration | ₹2,00,000–₹5,00,000+ |
| Advanced offline synchronisation | ₹75,000–₹1,50,000 |
| Advanced reports/analytics | ₹50,000–₹1,50,000 |
| Native guest mobile app | ₹2,00,000–₹5,00,000+ |
| Hardware/sensor integration | Quoted after site survey |

---

## 10. MVP Delivery Timeline

| Stage | Duration |
|---|---:|
| Scope freeze and workflow confirmation | 2–3 days |
| Wireframes and technical design | 4–5 days |
| Backend, PostgreSQL, Redis, and authentication | 1.5–2 weeks |
| Android staff app | 2.5–3 weeks |
| Guest PWA | 1–1.5 weeks |
| Hotel dashboard | 1.5–2 weeks |
| Integration, QA, deployment, and training | 1.5–2 weeks |
| **Total MVP delivery** | **8–10 weeks** |

The timeline assumes prompt client feedback, one property, no PMS/POS integration, one notification provider, and no major scope changes.

---

## 11. Acceptance Criteria

The MVP is considered ready for pilot when:

- Staff can log in according to their role.
- Staff can create a vehicle session.
- Guest receives a valid digital ticket.
- Vehicle and key details are recorded.
- Vehicle location is recorded.
- Guest can request the vehicle.
- Pickup request appears on the dashboard.
- Staff can view vehicle and key location.
- Staff can update retrieval status.
- Guest and vehicle are verified before handover.
- Session can be closed as completed.
- Vehicle photographs can be viewed by authorised staff.
- Manual exceptions and overrides are recorded.
- Basic reports can be generated.
- Backup and restoration procedure is documented.
- Hotel staff complete UAT and training.

---

## 12. Critical Assumptions and Client Responsibilities

The estimate depends on these assumptions:

- The client provides timely feedback and one authorised decision-maker.
- The client provides hotel branding, content, workflow rules, and notification text.
- The client provides access to required devices or approves test devices.
- The client provides SMS/WhatsApp account access if those channels are required.
- The client provides parking-layout information and location naming.
- The client nominates staff for UAT and training.
- The client pays cloud and third-party charges.
- The client accepts a manual fallback for outages.
- The client does not require PMS/POS/payment integration in the MVP.
- New requirements after scope approval may change cost and timeline.

---

## 13. Final Commercial Summary

| Item | Amount |
|---|---:|
| Fixed MVP development cost | **₹2,40,000** |
| Additional initial infrastructure/third-party reserve | **₹25,000–₹50,000** |
| Expected monthly infrastructure after launch | **₹6,100–₹35,000+** |
| Recommended monthly support | **₹8,000–₹15,000** |
| MVP delivery timeline | **8–10 weeks** |

### Recommended client-facing quote

> **Digital Valet Parking MVP: ₹2,40,000**  
> **Initial infrastructure and third-party services: ₹25,000–₹50,000 additional, billed separately or paid directly by the client**  
> **Post-launch support: ₹8,000–₹15,000 per month, plus actual cloud and messaging usage**

This pricing covers a focused one-property pilot and should be presented as a validation MVP. Enterprise features and integrations should be priced separately after the hotel validates the core valet workflow.

---

## 14. Change Request Policy

The fixed price covers only the features listed in this document. Any change that adds a new integration, user role, application, workflow, report, hardware connection, or major design change must be estimated separately.

Minor corrections during UAT are included when they relate to the agreed scope. New functionality, additional platforms, additional properties, and third-party integrations are not considered bug fixes.

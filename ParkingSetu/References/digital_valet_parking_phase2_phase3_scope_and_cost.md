# Digital Valet Parking System
## Phase 2 and Phase 3 Scope, Technology, Cost, and Post-Launch Pricing

**Client:** Five-star hotel / hospitality property  
**Document type:** Client-facing phased expansion proposal  
**Version:** 1.0  
**Currency:** Indian Rupees (INR)  
**Relationship to MVP:** This document covers enhancements after the one-property MVP  

---

## 1. Purpose

The MVP validates the basic valet workflow:

```text
Vehicle check-in → Digital ticket → Vehicle parked → Pickup request → Retrieval → Verified handover
```

This document defines the recommended capabilities after MVP validation:

- **Phase 2:** Production hotel operations, event management, payments, WhatsApp, reliability, and selected integrations.
- **Phase 3:** Enterprise multi-property SaaS, hotel-group administration, advanced integrations, security, analytics, and optional automation.

Phase 2 and Phase 3 should be funded only after the hotel confirms that the MVP improves valet operations and that staff and guests adopt the workflow.

---

## 2. Planning Assumptions

Estimates assume:

- The MVP backend, Android staff app, guest PWA, and dashboard already exist.
- One pilot hotel has completed UAT.
- Existing core data model is reusable.
- New work is delivered incrementally without rewriting the MVP.
- Third-party API access is available.
- The client provides PMS/POS documentation, credentials, test environments, and authorised contacts.
- Hardware, cameras, sensors, network upgrades, GST, travel, and vendor charges are additional.
- The cost ranges are ballpark planning figures, not fixed quotations.

---

## 3. Phase 2: Production Hotel Operations

### 3.1 Phase 2 objective

Phase 2 should make the MVP suitable for daily hotel operations and large events. The focus is operational reliability, lower manual work, better guest communication, event-specific workflows, payment readiness, and stronger reporting.

### 3.2 Phase 2 critical features

#### A. WhatsApp and guest communication

- WhatsApp Business Platform integration.
- Approved message templates.
- Digital ticket through WhatsApp.
- Pickup request through WhatsApp.
- Vehicle-ready notification.
- Delivery status and failure handling.
- SMS fallback when WhatsApp delivery fails.
- Consent and opt-out handling.
- Notification history per valet session.

#### B. Payments and tariffs

- Configurable valet tariff rules.
- Complimentary parking.
- Event-specific tariffs.
- Discounts and validations.
- UPI/payment-gateway integration.
- Payment status and receipt.
- Payment webhook handling.
- Failed-payment retry or manual settlement.
- Basic refund workflow.
- Daily settlement report.

#### C. Event operations

- Create and configure an event.
- Event start/end date and operating window.
- Temporary parking zones.
- Temporary pickup points.
- Event-specific tariffs.
- Event-specific notification templates.
- Expected vehicle volume.
- Event staffing plan.
- Priority and VIP rules.
- Event dashboard.
- Post-event report.

#### D. Multiple parking areas and pickup points

- Multiple indoor and outdoor parking areas.
- Basement, compound, external, and temporary locations.
- Multiple pickup desks.
- Location availability and capacity.
- Zone, row, bay, and key-rack configuration.
- Vehicle transfer between areas.
- Location-change history.

#### E. Queue and staff operations

- Pickup priority rules.
- VIP and accessibility priority.
- Checkout-time priority.
- Event-closing priority.
- Staff shift management.
- Runner assignment and reassignment.
- Workload visibility.
- Delay reason codes.
- Escalation timer.
- SLA breach alert.
- Shift closing and reconciliation.

#### F. Improved key and incident management

- Key-rack audit.
- Key transfer confirmation.
- Missing-key workflow.
- Key mismatch escalation.
- Lost-ticket workflow.
- Damage-incident workflow.
- Guest acknowledgement and staff notes.
- Before/after vehicle photographs.
- Supervisor approval and closure.

#### G. Offline and reliability improvements

- Better offline session creation.
- Encrypted local photo queue.
- Retryable event synchronisation.
- Conflict detection.
- Supervisor conflict resolution.
- Clear device sync status.
- Duplicate-event prevention.
- API idempotency.
- Retryable notification jobs.
- Backup verification.
- Monitoring and alerts.

#### H. Hotel administration and reporting

- Hotel branding and configurable content.
- Multiple staff shifts.
- Notification template management.
- Multilingual notification content.
- Staff productivity reports.
- Average and percentile retrieval time.
- Event throughput report.
- Key reconciliation report.
- Damage and exception report.
- Payment and validation report.
- Guest feedback report.
- SLA and delay report.
- CSV export.

#### I. Privacy and support administration

- Configurable retention period.
- Photo-retention rules.
- Sensitive-photo access controls.
- Data-access audit.
- Guest data correction workflow.
- Data deletion workflow where applicable.
- Support notes.
- Incident severity and escalation.
- Admin activity monitoring.

### 3.3 Phase 2 optional features

These may be added if required, but should not delay the core Phase 2 release:

- PMS guest and room lookup.
- PMS folio posting.
- POS integration.
- Automated number-plate recognition.
- Exact bay QR tracking.
- Room-based guest verification.
- Event attendee identity verification.
- Customer-facing queue position.
- Corporate accounts.
- Recurring vehicles.
- Digital tips and gratuity.
- EV charging status.
- Temporary parking shuttle workflow.
- Guest feedback dashboard.
- Basic hotel mobile-app deep links.
- Public API for one approved hotel system.

---

## 4. Phase 2 Technology Blueprint

### 4.1 Architecture

```text
Guest PWA / WhatsApp
        ↓
API Gateway and Authentication
        ↓
Valet Session and Workflow Services
        ↓
PostgreSQL ← Redis / Job Queue
        ↓
Object Storage, Notifications, Payments, PMS/POS Adapters
        ↓
Hotel Dashboard and Android Staff App
```

### 4.2 Recommended technologies

| Layer | Recommended technology | Phase 2 purpose |
|---|---|---|
| Staff app | Kotlin + Jetpack Compose | More reliable production workflows, offline improvements, shift operations |
| QR/camera | CameraX + ML Kit or ZXing | QR locations, key tags, and optional plate assistance |
| Local storage | Room database | Offline queue, photos, and pending actions |
| Sync | WorkManager | Retry and conflict-aware synchronisation |
| Guest frontend | React/Next.js PWA | Guest status, pickup, payment links, multilingual content |
| Dashboard frontend | React/Next.js | Events, queues, reports, administration |
| Backend | Kotlin/Spring Boot | Core API, workflow, payment, notifications, integrations |
| API contracts | OpenAPI/Swagger | PMS/POS/payment adapter contracts |
| Database | PostgreSQL | System of record for sessions, payments, events, staff, and audit |
| Cache/queue | Redis | OTPs, rate limits, duplicate protection, jobs, locks, short-lived state |
| Authentication | Managed Auth or backend auth | Staff roles, guest tokens, MFA, session/device revocation |
| Object storage | S3-compatible storage | Vehicle, damage, and incident photographs |
| Messaging | WhatsApp Business Platform plus Indian SMS provider | Guest notifications and fallbacks |
| Payments | Razorpay, Cashfree, PayU, or hotel-approved provider | UPI, cards, payment links, refunds, and reconciliation |
| PMS/POS integration | Adapter service | Avoid direct dependency on a single hotel vendor |
| Background jobs | Redis-backed worker or managed queue | Notifications, payment reconciliation, reports, retries |
| Monitoring | Sentry plus cloud logs/metrics | Production visibility and alerting |
| CI/CD | GitHub Actions/GitLab CI | Controlled staging and production deployments |

### 4.3 Phase 2 build approach

1. Review MVP analytics and support incidents.
2. Freeze Phase 2 workflows and integration boundaries.
3. Build WhatsApp and payment adapters independently from the core session service.
4. Implement event configuration and priority queues.
5. Improve offline synchronisation and idempotency.
6. Add production reporting and reconciliation.
7. Test peak-event volumes and poor connectivity.
8. Pilot one integration at a time.
9. Release behind feature flags.
10. Train hotel supervisors and document operating procedures.

The core valet session must remain stable even if WhatsApp, payment, or PMS services are temporarily unavailable.

---

## 5. Phase 2 Delivery Timeline

| Workstream | Indicative duration |
|---|---:|
| Production review and Phase 2 design | 1–2 weeks |
| WhatsApp and notification production workflow | 2–3 weeks |
| Payments, tariffs, receipts, and reconciliation | 2–4 weeks |
| Event mode, areas, priorities, and shifts | 3–5 weeks |
| Offline hardening, key audit, and incidents | 2–4 weeks |
| Reports, SLA, feedback, and administration | 2–3 weeks |
| QA, UAT, training, and rollout | 2–3 weeks |
| **Phase 2 without PMS integration** | **8–12 weeks** |
| One PMS/POS adapter, if included | Additional 4–8 weeks |
| **Phase 2 with one PMS integration** | **12–18 weeks** |

Timelines assume reuse of the MVP and timely access to third-party test environments.

---

## 6. Phase 2 Cost

### 6.1 Development cost

| Phase 2 scope | Ballpark cost |
|---|---:|
| Production operations, event mode, reporting, and hardening | ₹10,00,000–₹18,00,000 |
| WhatsApp, payments, event mode, reports, and production hardening | ₹12,00,000–₹22,00,000 |
| One PMS/POS integration | Additional ₹5,00,000–₹15,00,000 |
| Multiple PMS/POS integrations | Additional ₹12,00,000–₹30,00,000+ |
| **Recommended Phase 2 client budget** | **₹15,00,000–₹30,00,000** |

The final Phase 2 quote should be split into a core package and optional integration add-ons.

### 6.2 Phase 2 additional infrastructure cost

Infrastructure is separate from development.

| Cost item | Estimated monthly range |
|---|---:|
| Application/API hosting | ₹8,000–₹30,000 |
| Managed PostgreSQL, backups, and replicas | ₹10,000–₹35,000 |
| Managed Redis and queue workers | ₹2,000–₹10,000 |
| Photo storage, backups, and data transfer | ₹3,000–₹20,000 |
| Monitoring, logs, alerting, and support tooling | ₹3,000–₹15,000 |
| SMS, WhatsApp, payment, and email services | ₹10,000–₹75,000+, usage-dependent |
| **Estimated Phase 2 infrastructure total** | **₹36,000–₹1,85,000+/month** |

### 6.3 Phase 2 post-launch support

| Support option | Monthly fee | Includes |
|---|---:|---|
| Standard support | ₹15,000–₹25,000 | Business-hours support, bug fixes, monitoring review, minor configuration |
| Priority support | ₹25,000–₹50,000 | Faster response, monthly health check, event planning support by arrangement |
| Premium/event support | ₹50,000–₹1,00,000+ | Dedicated event support, escalation management, operational review, agreed SLA |
| On-demand development | ₹1,500–₹2,500/hour | Work outside the agreed support scope |

Cloud and third-party charges remain additional.

### 6.4 Phase 2 pricing example

| Cost | Low planning case | Higher planning case |
|---|---:|---:|
| Phase 2 development | ₹15,00,000 | ₹30,00,000 |
| Initial integration/setup reserve | ₹50,000 | ₹2,00,000 |
| 12 months infrastructure | ₹4,32,000 | ₹22,20,000 |
| 12 months standard/priority support | ₹1,80,000 | ₹6,00,000 |
| **Illustrative first-year Phase 2 total** | **₹21,62,000** | **₹60,20,000** |

The higher scenario includes heavier messaging, storage, integration, and support usage. It is not a fixed quotation.

---

## 7. Phase 2 Included and Excluded Scope

### Included in the recommended Phase 2 core package

- Production hardening of the MVP.
- Event configuration and temporary zones.
- Multiple parking areas and pickup points.
- Priority queues and staff shifts.
- Improved key and incident management.
- Offline improvements and synchronisation controls.
- WhatsApp/SMS notification workflow.
- Payment and tariff module, if included in the selected package.
- Reports, exports, SLA indicators, and administration.
- Monitoring, backups, deployment, training, and documentation.

### Not included unless separately quoted

- PMS/POS integration.
- Hotel folio posting.
- Multi-property administration.
- Hardware and sensors.
- ANPR cameras and vendor licences.
- Indoor navigation.
- AI analytics.
- Native guest application.
- Enterprise SSO.
- 24/7 on-call service.
- Unlimited events, users, storage, or messages.
- Network upgrades and on-site infrastructure.

---

## 8. Phase 3: Enterprise Multi-Property Platform

### 8.1 Phase 3 objective

Phase 3 converts the validated hotel product into an enterprise SaaS platform for hotel groups and multiple properties. It adds tenant governance, central administration, integration scalability, enterprise security, advanced reporting, and formal support operations.

### 8.2 Phase 3 critical features

#### A. Multi-property SaaS administration

- Hotel-group account.
- Multiple properties and locations.
- Tenant and property isolation.
- Property-level branding.
- Property-specific tariffs and workflows.
- Central staff and role administration.
- Property-level administrators.
- Central configuration templates.
- Cross-property user access rules.

#### B. Enterprise authentication and security

- SSO using SAML/OIDC where required.
- MFA and device/session policies.
- Enterprise role hierarchy.
- IP/device restrictions where required.
- Central audit and investigation tools.
- Secrets and key management.
- Security incident workflow.
- Vulnerability and patch-management process.
- Penetration testing support.
- Compliance documentation.

#### C. Integration platform

- Versioned public API.
- Webhooks.
- PMS adapter framework.
- POS/payment adapter framework.
- Hotel-app SDK or deep-link package.
- Retry, reconciliation, and failure queues.
- Integration health dashboard.
- Sandbox and test credentials.
- API rate limiting and tenant quotas.

#### D. Central reporting and commercial administration

- Group-wide operational dashboard.
- Property comparison.
- Retrieval-time trends.
- Event and revenue reporting.
- Usage and cost reports.
- Subscription and billing administration.
- Usage metering.
- Invoice and tax configuration.
- Contract and SLA records.
- Export and scheduled reports.

#### E. Reliability and disaster recovery

- High-availability deployment.
- Database replication or managed HA.
- Disaster-recovery environment.
- Tested restore process.
- Defined recovery time objective.
- Defined recovery point objective.
- Central monitoring and alerting.
- Incident management.
- Release rollback.
- Capacity and load testing.

#### F. Enterprise support operations

- Customer support portal.
- Support ticketing.
- Property-level incident visibility.
- SLA timers and escalation.
- Release notes and maintenance windows.
- Customer health dashboard.
- Onboarding and training tracking.
- Knowledge base.

#### G. Advanced operational controls

- Large-event capacity planning.
- Cross-property staff reporting.
- Property-specific operating policies.
- Advanced key and exception investigations.
- Immutable or protected audit history.
- Data-retention and legal-hold controls.
- Data export and deletion administration.

### 8.3 Phase 3 optional features

- Native hotel-app SDK.
- Automatic number-plate recognition.
- Indoor maps and guided valet navigation.
- Bluetooth, RFID, NFC, or parking-bay sensors.
- Predictive ETA and staffing recommendations.
- Computer-vision damage detection.
- EV charging integration.
- Loyalty and guest-profile integration.
- Corporate fleet and recurring vehicles.
- Digital tipping and incentive management.
- Self-service kiosks.
- Voice/call-centre retrieval requests.
- White-label reseller mode.
- Advanced BI warehouse and data-science models.
- Automated pricing optimisation.
- Security-camera integration.

---

## 9. Phase 3 Technology Blueprint

### 9.1 Architecture

```text
Hotel Group Admin / Property Dashboards / Guest Channels / Staff Apps
                              ↓
                     API Gateway and WAF
                              ↓
           Identity, Tenant Routing, Rate Limits, Audit
                              ↓
 Valet Sessions | Events | Keys | Locations | Payments | Integrations
                              ↓
 PostgreSQL HA | Redis Cluster | Durable Queue/Event Bus | Object Storage
                              ↓
        BI Warehouse | Monitoring | Security | DR Environment
```

### 9.2 Recommended technologies

| Layer | Recommended technology | Phase 3 purpose |
|---|---|---|
| Frontend | React/Next.js with design system | Multi-property dashboards, admin, reporting, and portals |
| Staff mobile | Kotlin/Jetpack Compose | Enterprise app distribution and advanced operational workflows |
| Guest channels | PWA, WhatsApp, hotel-app SDK | Consistent guest experience across properties |
| Backend | Kotlin/Spring Boot modular services | Core platform and integration APIs |
| API gateway | Managed API Gateway, Kong, or equivalent | Routing, throttling, tenant quotas, and versioning |
| Auth | Keycloak, Auth0, Okta, Azure AD B2C, or equivalent | SSO, MFA, enterprise identity, and tenant roles |
| Database | PostgreSQL managed HA | Tenant-isolated transactional system of record |
| Cache | Redis Cluster | Distributed locks, rate limits, sessions, queues, and hot data |
| Durable messaging | Kafka, Pub/Sub, SQS/SNS, or equivalent | Integration events, retries, and decoupled processing |
| Object storage | S3-compatible storage | Photos, documents, exports, and lifecycle retention |
| Search | PostgreSQL search initially; OpenSearch when justified | Group-wide session and incident search |
| BI/data warehouse | BigQuery, Redshift, Snowflake, or equivalent | Cross-property analytics and usage reporting |
| Infrastructure | Terraform plus managed containers/serverless | Repeatable property and environment deployment |
| Containers | Managed Kubernetes or managed container service when justified | Scale and service isolation; avoid premature complexity |
| Observability | OpenTelemetry, Sentry, cloud monitoring, SIEM integration | Enterprise metrics, traces, logs, and security alerts |
| CI/CD | GitHub Actions/GitLab CI with approvals | Controlled enterprise releases and rollback |
| Device management | Android Enterprise/MDM | Managed hotel-owned staff devices |

### 9.3 Phase 3 build approach

1. Validate multi-property demand and contracts.
2. Define tenant, property, user, and data-isolation rules.
3. Refactor the MVP into stable modular domain boundaries.
4. Introduce versioned APIs and integration adapters.
5. Add enterprise identity and group administration.
6. Add high-availability and disaster recovery.
7. Add central reporting and usage billing.
8. Add one strategic integration at a time.
9. Perform security, load, and disaster-recovery testing.
10. Roll out property by property with feature flags and pilot gates.

Do not introduce Kubernetes, sensors, or AI merely for marketing. Add them only when customer demand and measurable operational benefit justify the additional support burden.

---

## 10. Phase 3 Delivery Timeline

| Workstream | Indicative duration |
|---|---:|
| Multi-tenant architecture and group administration | 4–8 weeks |
| Enterprise identity, roles, billing, subscriptions | 3–6 weeks |
| Public API, webhooks, and integration framework | 4–8 weeks |
| Central reporting and BI | 4–8 weeks |
| High availability, DR, and security hardening | 4–8 weeks |
| Enterprise support portal and SLA tooling | 3–5 weeks |
| One major hardware, ANPR, or AI capability | Additional 6–12 weeks |
| Enterprise QA, compliance, and rollout | 4–6 weeks |
| **Phase 3 core timeline** | **16–24 weeks** |
| **With major hardware/AI integrations** | **24–36+ weeks** |

---

## 11. Phase 3 Cost

### 11.1 Development cost

| Phase 3 scope | Ballpark cost |
|---|---:|
| Multi-property SaaS foundation | ₹25,00,000–₹45,00,000 |
| Enterprise APIs, reporting, security, and DR | ₹20,00,000–₹40,00,000 |
| One major hardware/AI integration | Additional ₹10,00,000–₹30,00,000 |
| **Full enterprise platform programme** | **₹50,00,000–₹1,00,00,000+** |

### 11.2 Phase 3 additional infrastructure cost

| Cost item | Estimated monthly range |
|---|---:|
| High-availability application/API hosting | ₹40,000–₹2,00,000+ |
| PostgreSQL HA, replicas, backups, and DR | ₹35,000–₹1,50,000+ |
| Redis cluster and durable queues | ₹15,000–₹75,000+ |
| Object storage, CDN, logs, and data warehouse | ₹20,000–₹1,00,000+ |
| Monitoring, observability, security, and SIEM | ₹20,000–₹1,00,000+ |
| Messaging, payments, maps, OCR, and AI APIs | ₹25,000–₹3,00,000+ |
| Enterprise support/on-call tooling | ₹50,000–₹3,00,000+ |
| **Estimated Phase 3 total** | **₹2,05,000–₹12,25,000+/month** |

This excludes field hardware, ANPR cameras, sensors, network upgrades, dedicated support staff, and enterprise vendor contracts.

### 11.3 Phase 3 post-launch support

| Support option | Monthly fee | Includes |
|---|---:|---|
| Enterprise standard | ₹50,000–₹1,00,000 | Business-hours support, monitoring, release management, monthly service review |
| Enterprise priority | ₹1,00,000–₹2,50,000 | Faster response, escalation, integration monitoring, agreed SLA |
| Dedicated managed operations | ₹2,50,000–₹6,00,000+ | Dedicated support capacity, event readiness, on-call coverage, service management |

### 11.4 Phase 3 pricing example

| Cost | Lower planning case | Higher planning case |
|---|---:|---:|
| Phase 3 development | ₹50,00,000 | ₹1,00,00,000 |
| Enterprise setup/security reserve | ₹2,00,000 | ₹10,00,000 |
| 12 months infrastructure | ₹24,60,000 | ₹1,47,00,000 |
| 12 months enterprise support | ₹6,00,000 | ₹30,00,000 |
| **Illustrative first-year Phase 3 total** | **₹82,60,000** | **₹2,87,00,000** |

The higher case reflects a larger multi-property platform, heavier messaging and data usage, advanced security, high availability, enterprise support, and optional integrations.

---

## 12. Phase 3 Included and Excluded Scope

### Included in the core Phase 3 package

- Multi-property and hotel-group administration.
- Tenant isolation and property-level configuration.
- Enterprise roles and authentication foundation.
- Central reporting and usage administration.
- Versioned APIs and webhooks.
- Integration framework.
- High-availability and disaster-recovery foundation.
- Security and audit improvements.
- Support portal and SLA tooling.
- Enterprise QA, documentation, and rollout process.

### Not included unless separately quoted

- Every PMS/POS integration in the market.
- Hardware installation and field networking.
- ANPR cameras and licences.
- Parking sensors and gates.
- Hotel-app development owned by another vendor.
- Custom workflows for every property without configuration limits.
- Unlimited storage, users, messages, events, or API calls.
- 24/7 physical on-site support at every property.
- Legal, compliance, certification, or audit fees charged by external parties.
- Custom AI models and data-science projects.

---

## 13. Consolidated Roadmap

| Phase | Objective | Timeline | Development cost | Additional infrastructure |
|---|---|---:|---:|---:|
| MVP | One-property workflow validation | 8–10 weeks | ₹2,40,000 | ₹25,000–₹50,000 initial; ₹6,100–₹35,000+/month |
| Phase 2 | Production hotel operations | 8–12 weeks; 12–18 with PMS | ₹15,00,000–₹30,00,000 | ₹36,000–₹1,85,000+/month |
| Phase 3 | Enterprise multi-property SaaS | 16–24 weeks core | ₹50,00,000–₹1,00,00,000+ | ₹2,05,000–₹12,25,000+/month |

---

## 14. Commercial and Change-Control Rules

- Development estimates are ballpark until a signed scope and integration assessment are completed.
- Infrastructure and third-party charges are separate from development.
- Cloud, SMS, WhatsApp, payment, maps, OCR, AI, and vendor licence charges are usage-based or contract-based.
- PMS/POS integrations require separate estimates unless explicitly included.
- A new property, integration, report, workflow, or interface may require a change request.
- Support fees do not include major new feature development.
- Third-party outages do not automatically constitute a product defect.
- Client procurement, legal, privacy, security, and compliance approvals may affect schedule.
- Hardware, devices, QR signage, key lockers, cameras, sensors, and network upgrades are client-side or separately quoted.

---

## 15. Recommended Client Decision Gates

### Gate 1: After MVP

Proceed to Phase 2 if:

- Staff use the system consistently.
- Vehicle and key location errors are acceptable.
- Retrieval time improves measurably.
- Guests use digital tickets and pickup requests.
- The hotel is willing to pay recurring support/SaaS fees.

### Gate 2: After Phase 2

Proceed to Phase 3 if:

- At least three properties or venues show repeatable demand.
- Customers request group-level administration.
- PMS/payment/WhatsApp integrations are reusable.
- Support workload and unit economics are understood.
- Multi-property pricing is commercially viable.

### Gate 3: Enterprise scale

Invest in advanced hardware, AI, and high availability only when:

- Contracted customers justify the investment.
- The operational benefit can be measured.
- Field support and maintenance are funded.
- Data, security, and compliance responsibilities are clear.

---

## 16. Final Summary

Phase 2 should make the MVP dependable and valuable for one hotel’s real daily and event operations. Phase 3 should be considered only after the workflow, pricing, support model, and repeatability have been proven.

The recommended commercial strategy is:

```text
MVP validation → Production hotel operations → Multi-property SaaS
```

This prevents premature investment in complex integrations, hardware, AI, and enterprise infrastructure before the hotel has validated the core valet experience.

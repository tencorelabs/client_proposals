# Digital Valet Parking Management System
## Initial Requirements and Solution Document

**Client type:** Five-star hotel / hospitality property  
**Document status:** Initial discussion draft  
**Version:** 0.1  
**Prepared for:** Client and development team  
**Prepared by:** Devendra Vaja  

---

## 1. Executive Summary

The hotel requires a digital valet parking solution for normal operations and high-volume events. Guests currently hand over their vehicle and key to valet staff and receive a physical token. During busy events, guests may wait in queues, staff may have difficulty locating vehicles, and the hotel may lack real-time visibility of vehicle and key status.

The proposed system will replace or supplement paper tokens with a secure digital valet session. A guest will receive a QR code or secure mobile link after vehicle check-in. The guest can use this ticket to view vehicle status and request the vehicle before reaching the pickup point. Valet staff will record vehicle details, photographs, key custody, and exact parking location. Hotel staff will manage pickup requests through a live operations dashboard.

The proposed first release consists of:

- Guest mobile web experience / PWA, with no mandatory app installation.
- Android application for valet staff.
- Web dashboard for supervisors and hotel operations.
- QR-based digital valet tickets.
- QR-based parking-location tracking.
- Key custody management.
- Vehicle condition photographs and damage notes.
- Advance pickup requests.
- SMS and/or WhatsApp notifications.
- Secure QR/OTP-based vehicle handover.
- Reports, audit history, and exception handling.

---

## 2. Business Objectives

The system should:

1. Reduce guest waiting time at vehicle pickup.
2. Improve the guest experience during large events.
3. Provide the guest with a digital valet ticket.
4. Allow guests to request their vehicle before arriving at the pickup point.
5. Help staff locate vehicles and keys quickly.
6. Maintain a complete history of vehicle movements and handovers.
7. Reduce disputes by recording vehicle condition at drop-off.
8. Improve accountability for valet staff and supervisors.
9. Support indoor, outdoor, basement, temporary, and event parking areas.
10. Provide reports for hotel management, security, finance, and operations.
11. Create a foundation for future PMS, POS, payment, and hotel-app integration.

---

## 3. Product Vision

> A premium, secure, app-less digital valet experience that allows hotel guests to hand over their vehicle confidently, request it remotely, and collect it with minimal waiting.

The system should be fast enough for event operations, simple enough for valet staff, secure enough for a five-star hotel, and flexible enough to support different parking layouts and operating procedures.

---

## 4. Users and Roles

| Role | Main responsibilities |
|---|---|
| Guest | Receives digital ticket, views vehicle status, requests vehicle, receives updates, completes handover |
| Valet attendant | Registers vehicle, receives key, captures vehicle condition, parks vehicle, retrieves and hands over vehicle |
| Valet supervisor | Monitors operations, assigns retrieval work, manages exceptions, controls overrides |
| Help-desk operator | Monitors pickup requests, communicates with guests, coordinates pickup locations |
| Hotel administrator | Configures property, parking areas, users, events, tariffs, permissions, and reports |
| Security officer | Verifies vehicle exit, reviews handover and incident records |
| Finance/front-office user | Reviews payments, validations, refunds, and PMS/folio postings |
| System administrator | Manages technical configuration, integrations, monitoring, and support |

---

## 5. Proposed Solution Components

### 5.1 Guest mobile web application / PWA

The guest should not be required to download a native mobile application. The guest can access the digital valet session through:

- QR code.
- SMS link.
- WhatsApp link.
- Email link.
- Optional hotel mobile application integration in a later phase.

### 5.2 Valet staff Android application

The Android application will be used by valet attendants and supervisors for:

- Vehicle check-in.
- Guest and vehicle data capture.
- Vehicle photographs.
- Key registration.
- Parking-location scanning.
- Pickup processing.
- Retrieval and handover.
- Incident reporting.
- Offline queue and synchronisation.

### 5.3 Hotel operations dashboard

The dashboard will be used by supervisors and hotel staff to:

- Monitor all active valet sessions.
- View pickup queues.
- Assign staff.
- Search for vehicles and keys.
- Manage parking locations.
- Handle exceptions.
- Monitor service-level performance.
- Generate reports.

### 5.4 Backend platform

The backend will provide:

- Authentication and authorisation.
- Guest and staff session management.
- Valet-session management.
- Vehicle and key tracking.
- Parking-location tracking.
- Pickup queue management.
- Notifications.
- Payments and billing integration.
- Audit logging.
- Reporting.
- PMS/POS integration adapters.

---

## 6. End-to-End Process

### 6.1 Vehicle arrival and check-in

```text
Guest arrives at valet point
        ↓
Valet greets guest and receives vehicle/key
        ↓
Guest scans valet QR or staff starts a session
        ↓
Guest verifies mobile number using OTP
        ↓
Staff enters vehicle details
        ↓
Staff captures vehicle condition photographs
        ↓
Staff records key tag and number of keys
        ↓
System creates valet session
        ↓
Guest receives digital QR ticket
        ↓
Vehicle status = Checked In
        ↓
Valet moves vehicle to parking area
        ↓
Valet scans parking-zone or bay QR
        ↓
Valet stores key and records key-rack location
        ↓
Vehicle status = Parked
        ↓
Guest receives parked confirmation
```

### 6.2 Vehicle retrieval

```text
Guest opens digital ticket
        ↓
Guest taps “Request My Car”
        ↓
System validates QR/session/OTP
        ↓
System checks payment and exceptions
        ↓
Pickup request is created
        ↓
Supervisor assigns valet runner
        ↓
Runner receives vehicle and key location
        ↓
Runner collects key
        ↓
Runner confirms vehicle location
        ↓
Vehicle status = Retrieving
        ↓
Runner brings vehicle to pickup point
        ↓
Vehicle status = Ready
        ↓
Guest receives ready notification
        ↓
Guest presents QR or OTP
        ↓
Staff verifies guest and vehicle
        ↓
Payment or hotel folio is completed
        ↓
Handover is confirmed
        ↓
Vehicle status = Completed
        ↓
Guest receives receipt and feedback request
```

### 6.3 Exception flow

```text
Exception detected
        ↓
Staff selects exception type
        ↓
System records notes, photographs, and staff identity
        ↓
Supervisor is notified
        ↓
Supervisor resolves or escalates
        ↓
Guest receives appropriate update
        ↓
Session continues or is placed on hold
```

Possible exceptions include:

- Lost ticket.
- QR unavailable.
- Guest changed mobile number.
- Vehicle not found.
- Key not found.
- Wrong parking location.
- Vehicle moved by security.
- Vehicle damage dispute.
- Duplicate pickup request.
- Payment failure.
- Guest requests an item from the vehicle.
- Vehicle handed over but session not closed.

---

## 7. Guest Requirements

### 7.1 Digital valet ticket

The guest ticket should display:

- Unique valet session number.
- Secure QR code.
- Vehicle registration number.
- Vehicle make and model.
- Vehicle colour.
- Hotel or event name.
- Drop-off date and time.
- Current vehicle status.
- Pickup location.
- Valet support contact.
- Request-my-car action.
- Payment status, where applicable.

The QR code must contain a secure random or signed token. It must not directly expose the guest mobile number or other personal data.

### 7.2 Guest authentication

Supported options:

- OTP through SMS.
- Secure magic link.
- QR session token.
- WhatsApp link.
- Manual verification by help-desk staff.

A guest should not need to create or remember a password for a single valet visit.

### 7.3 Guest vehicle status

Recommended statuses:

1. Checked in.
2. Keys received.
3. Vehicle condition recorded.
4. Vehicle parked.
5. Pickup request received.
6. Retrieval assigned.
7. Vehicle being retrieved.
8. Vehicle at pickup point.
9. Handover verification pending.
10. Completed.
11. Cancelled or exception.

### 7.4 Guest pickup request

The guest should be able to request the vehicle:

- From the event hall.
- From the hotel room.
- From a restaurant or lounge.
- From the lobby.
- From an SMS link.
- From a WhatsApp message.
- By scanning the digital valet QR code.
- Through a help-desk operator.

The pickup screen should display:

- Request confirmation.
- Estimated preparation time.
- Queue position, if enabled.
- Current vehicle status.
- Pickup point.
- Outstanding payment.
- Instructions for collection.

### 7.5 Notifications

The system should support configurable notifications for:

- Digital ticket created.
- Vehicle successfully parked.
- Pickup request received.
- Retrieval started.
- Vehicle ready at pickup point.
- Payment required.
- Payment completed.
- Delay or service exception.
- Handover completed.
- Feedback request.

Possible notification channels:

- SMS.
- WhatsApp.
- Email.
- Browser notifications.
- Hotel-app push notification.

---

## 8. Vehicle Intake Requirements

### 8.1 Vehicle details

Required or configurable fields:

- Vehicle registration number.
- Vehicle make.
- Vehicle model.
- Vehicle colour.
- Vehicle type.
- Guest mobile number.
- Guest name, if required.
- Hotel room number, if applicable.
- Event or visit reference.
- Drop-off location.
- Expected pickup time, if known.
- Special instructions.
- VIP or priority flag.

### 8.2 Vehicle identification

The system may support:

- Manual number-plate entry.
- Camera-assisted number-plate recognition.
- Make, model, and colour selection.
- Vehicle photographs.
- PMS guest lookup.
- Existing guest/vehicle lookup.

Automatic number-plate recognition should be considered after the initial workflow is stable. Manual correction must always be available.

### 8.3 Vehicle condition record

The valet attendant should capture:

- Front photograph.
- Rear photograph.
- Left-side photograph.
- Right-side photograph.
- Interior photograph where permitted by policy.
- Existing scratches and dents.
- Fuel or battery status.
- Odometer reading.
- Valuable-items declaration, where required.
- Guest acknowledgement.

Each record should include:

- Timestamp.
- Staff identity.
- Device identity.
- Session ID.
- Optional location information.

---

## 9. Parking Location Management

### 9.1 Location hierarchy

```text
Property
 └── Parking area
      └── Zone
           └── Row
                └── Floor or level
                     └── Bay
                          └── Position
```

Example:

```text
Hotel compound
 └── Basement B2
      └── Zone C
           └── Row 04
                └── Bay 18
```

### 9.2 Parking-location fields

Each location may contain:

- Location ID.
- Location code.
- Location name.
- Location type.
- Parent location.
- QR marker.
- Capacity.
- Occupancy status.
- Vehicle-type restrictions.
- EV charging availability.
- Accessibility designation.
- Indoor/outdoor classification.
- Security notes.

### 9.3 Location capture

Recommended initial workflow:

1. Valet parks the vehicle.
2. Valet scans the QR marker at the zone, row, or bay.
3. The system links the vehicle to that location.
4. The valet stores the key and records the key-rack location.
5. A supervisor can correct the location with a reason.

Future options:

- Bluetooth beacons.
- RFID or NFC tags.
- Indoor mapping.
- Camera-based vehicle recognition.
- GPS for outdoor areas.
- Automated bay sensors.

For the first release, QR markers with clear physical signage are recommended because they are low-cost, fast, and easy to operate.

---

## 10. Key Management

Key custody must be managed as an independent controlled workflow.

### 10.1 Key requirements

The system should support:

- Unique key-tag number.
- Key-rack or locker position.
- Key photograph.
- Number of keys received.
- Key handover between staff.
- Staff identity and confirmation.
- Key status: received, stored, issued, returned.
- Key-transfer history.
- Missing-key incident workflow.
- Supervisor override.
- Restricted access to key images.

### 10.2 Key lifecycle

```text
Key received
    ↓
Key tagged
    ↓
Key stored
    ↓
Vehicle parked
    ↓
Pickup request received
    ↓
Key issued to runner
    ↓
Vehicle retrieved
    ↓
Key handed over with vehicle
    ↓
Session completed
```

A key should not be moved between staff without an electronic transfer record.

---

## 11. Retrieval and Handover Requirements

### 11.1 Retrieval workflow

The help-desk or supervisor should be able to:

- View pending requests.
- Sort by request time.
- Prioritise VIP or accessibility requests.
- Assign a valet runner.
- View exact vehicle location.
- View key-rack location.
- View vehicle photographs.
- Monitor retrieval duration.
- Mark delays and exceptions.
- Reassign work if required.

### 11.2 Secure handover

At least two matching factors should be used, such as:

- Guest QR code plus vehicle number.
- Guest OTP plus vehicle number.
- Guest QR code plus registered mobile number.
- Staff confirmation plus vehicle photograph.
- Authorised supervisor override with reason.

The system must prevent handover if:

- The session is already completed.
- The QR token is expired or revoked.
- The vehicle number does not match.
- The guest cannot be verified.
- The vehicle is on security hold.
- A required payment or approval is incomplete.

---

## 12. Operations Dashboard

### 12.1 Live overview

Display:

- Total active vehicles.
- Vehicles awaiting parking.
- Parked vehicles.
- Pending pickup requests.
- Vehicles being retrieved.
- Vehicles ready at pickup point.
- Delayed requests.
- Unclaimed vehicles.
- Key status and reconciliation state.
- Current queue length.
- Average retrieval time.

### 12.2 Operational board

Recommended board:

```text
Checked In → Parked → Pickup Requested → Retrieving → Ready → Completed
```

Each vehicle card should show:

- Vehicle number.
- Guest name or masked identity.
- Session number.
- Time received.
- Current location.
- Key location.
- Assigned staff member.
- Priority.
- Elapsed time.
- Payment status.
- Damage-alert indicator.

### 12.3 Search

Search by:

- Vehicle registration number.
- Session number.
- Mobile number.
- Guest name.
- Room number, if integrated.
- Event name.
- Key-tag number.
- Parking location.

---

## 13. Payments and Hotel Billing

### 13.1 MVP payment options

- Cash marked as received.
- Card terminal reference.
- UPI payment link or QR.
- Complimentary parking.
- Manual validation.
- Manual discount.
- Payment receipt by SMS or email.

### 13.2 Future payment options

- Online payment gateway.
- Automatic tariff calculation.
- Event-specific pricing.
- Hotel-room folio posting.
- PMS charge posting.
- Corporate account billing.
- Refunds and partial refunds.
- Tips.
- Tax invoice generation.
- Settlement reports.

The implementation team should investigate the hotel’s PMS and POS capabilities before finalising the integration design. If the hotel uses Oracle OPERA Cloud, use its supported hospitality integration and API mechanisms rather than directly accessing the PMS database.

---

## 14. Reporting and Analytics

The system should provide:

- Daily vehicle intake and exit report.
- Average retrieval-time report.
- Peak arrival and departure report.
- Staff productivity report.
- Vehicle dwell-time report.
- Parking-area utilisation report.
- Key reconciliation report.
- Open-session report at shift closing.
- Lost-ticket and lost-key incident report.
- Damage-incident report.
- Cancelled-request report.
- Payment and collection report.
- Complimentary-parking report.
- Event-wise revenue report.
- Guest feedback report.
- SLA-breach report.

Recommended KPIs:

- Average check-in time.
- Average retrieval time.
- 90th-percentile retrieval time.
- Percentage of vehicles delivered within target.
- Number of manual interventions.
- Number of location mismatches.
- Number of key mismatches.
- Guest satisfaction score.
- Vehicles processed per attendant per hour.
- Percentage of guests using digital tickets.

---

## 15. Functional Requirements

### 15.1 Authentication and access control

- Staff must log in using authorised credentials.
- Staff access must be role-based.
- Administrators should be able to create, disable, and update users.
- Supervisors should be able to start and close staff shifts.
- Administrative actions should require enhanced authentication.
- Guest access should use OTP, magic link, or secure session token.
- Sessions should expire after a configurable period.
- Lost or compromised guest links should be revocable.

### 15.2 Valet-session management

- Staff must be able to create a new valet session.
- The system must generate a unique session ID.
- The system must generate a secure digital ticket.
- The system must prevent duplicate active sessions for the same vehicle where configured.
- Staff must be able to search active and historical sessions.
- Supervisors must be able to correct session information with a reason.
- Every status transition must be audited.

### 15.3 Vehicle management

- Vehicle registration number must be captured.
- Vehicle details must be editable by authorised users.
- Vehicle condition records must be linked to the valet session.
- Vehicle photographs must be timestamped.
- The system must record the current vehicle location.
- The system must record location changes.

### 15.4 Key management

- A key tag must be recorded at intake.
- Key storage location must be recorded.
- Key transfer must be logged.
- Key issue must be confirmed before retrieval.
- Missing-key incidents must be recorded.
- Key status must be visible to authorised staff.

### 15.5 Pickup requests

- A verified guest must be able to request a vehicle.
- Duplicate active pickup requests must be prevented.
- Pickup requests must appear on the dashboard immediately.
- Supervisors must be able to assign and reassign requests.
- Staff must be able to record delay reasons.
- Guests must receive configurable status notifications.

### 15.6 Handover

- The guest must be verified before handover.
- Vehicle number must be matched.
- Handover staff must be recorded.
- Handover date and time must be recorded.
- Payment or validation status must be checked.
- The session must be closed after successful handover.
- A completed session must not be reusable.

### 15.7 Notifications

- Notification templates must be configurable.
- Delivery status should be stored where supported.
- Failed notifications should be retried according to policy.
- Staff should be able to resend a guest link.
- Notification content must not expose unnecessary personal data.

### 15.8 Audit and exception management

- Every important action must record user, timestamp, and session.
- Manual overrides must require a reason.
- Exceptions must have status: open, assigned, resolved, or closed.
- Supervisors must be notified of high-severity incidents.
- Audit data must not be editable by normal users.

---

## 16. Core Data Model

### 16.1 Main entities

```text
Hotel
Property
ParkingArea
ParkingZone
ParkingBay
Event
Guest
GuestVehicle
ValetSession
VehicleConditionRecord
VehiclePhoto
KeyRecord
KeyLocation
PickupRequest
StaffUser
StaffShift
Payment
Notification
Exception
AuditEvent
```

### 16.2 Valet session fields

```text
sessionId
propertyId
eventId
guestId
guestName
guestMobile
vehicleRegistrationNumber
vehicleMake
vehicleModel
vehicleColour
vehicleType
keyTagNumber
keyLocationId
parkingLocationId
dropOffPoint
pickupPoint
sessionStatus
priority
checkInTime
parkedTime
pickupRequestedTime
retrievalStartedTime
readyTime
handoverTime
checkoutTime
paymentStatus
createdBy
lastUpdatedBy
createdAt
updatedAt
```

---

## 17. Recommended Technical Architecture

```text
Guest PWA
Valet Android App
Hotel Admin Dashboard
        ↓
API Gateway
        ↓
Authentication and Authorisation
        ↓
Valet Session Service
Vehicle and Location Service
Key Management Service
Pickup Queue Service
Notification Service
Payment Service
PMS Integration Adapter
Reporting Service
        ↓
Relational Database
Object Storage for Photographs
Audit Log Store
```

### 17.1 Guest application

Recommended characteristics:

- Responsive mobile-first web application.
- QR and deep-link support.
- OTP or signed magic-link authentication.
- No mandatory account password.
- Accessible interface.
- Configurable language and branding.
- Secure token handling.

### 17.2 Valet Android application

Recommended technology direction:

- Kotlin.
- Jetpack Compose.
- Camera and QR scanning.
- Encrypted local storage.
- Offline-first event queue.
- Background synchronisation.
- Push notifications.
- Device-level session timeout.
- Controlled deployment to hotel-owned devices.

### 17.3 Backend

Recommended capabilities:

- REST APIs for standard workflows.
- WebSockets or server-sent events for live dashboards.
- Relational database such as PostgreSQL.
- Object storage for photographs.
- Queue/cache system for OTPs and notifications.
- Background workers.
- API versioning.
- Idempotency for pickup requests and payment callbacks.
- Centralised logs and monitoring.
- Automated backups.

### 17.4 Offline operation

The valet application should support limited offline operation:

- Create intake record offline.
- Capture photographs locally in encrypted storage.
- Record parking location offline.
- Record key movement offline.
- Queue events for synchronisation.
- Display sync status.
- Detect conflicting updates.
- Require supervisor resolution when necessary.

---

## 18. Security and Privacy Requirements

The system processes mobile numbers, guest identity, vehicle registration numbers, photographs, and possibly room or event information. Privacy and security must be considered from the beginning.

Required controls:

- Clear privacy notice at guest registration.
- Consent or another documented lawful basis.
- Purpose limitation.
- Minimum data collection.
- Configurable data-retention period.
- Secure deletion workflow.
- Encryption in transit and at rest.
- Role-based access control.
- Multi-factor authentication for administrators.
- Short-lived QR and magic-link tokens.
- OTP rate limiting.
- Masked phone numbers where possible.
- Photograph access controls.
- Audit logs for sensitive-data access.
- Encrypted backups.
- Device logout and session revocation.
- Breach-response process.
- Data export and deletion process where applicable.

The QR code must not contain raw guest personal information. It should contain a random, signed, short-lived, or revocable token that maps to the server-side valet session.

Legal and privacy requirements should be validated with the hotel’s legal or compliance team before production rollout.

---

## 19. Recommended Screens

### 19.1 Guest screens

- Welcome / QR scan confirmation.
- OTP verification.
- Digital valet ticket.
- Vehicle details.
- Vehicle status.
- Request vehicle.
- Pickup-progress screen.
- Ready-for-collection screen.
- Payment screen.
- Receipt.
- Feedback.
- Help and support.

### 19.2 Valet staff screens

- Staff login.
- Active shift.
- New vehicle intake.
- Vehicle photographs.
- Key recording.
- Park vehicle.
- Active sessions.
- Pickup queue.
- Vehicle retrieval details.
- Key issue confirmation.
- Ready at pickup point.
- Handover verification.
- Incident reporting.
- Shift reconciliation.

### 19.3 Supervisor screens

- Live operations dashboard.
- Parking-location hierarchy.
- Pickup queue.
- Staff assignment.
- Key audit.
- Exception management.
- Session search.
- Reports.
- Staff and shift management.
- Event configuration.

---

## 20. MVP Scope

### 20.1 Guest MVP

- QR-based digital valet ticket.
- OTP or magic-link authentication.
- Vehicle details and session view.
- Pickup request.
- Status updates.
- SMS notifications.
- Optional WhatsApp notifications.
- Pickup QR or OTP.
- Help-desk contact option.

### 20.2 Valet MVP

- Staff login with role-based access.
- Vehicle check-in.
- Guest mobile-number capture.
- Key-tag capture.
- Vehicle photographs.
- Damage notes.
- Parking-zone QR scanning.
- Pickup-request queue.
- Vehicle and key-location display.
- Retrieval status updates.
- Handover confirmation.

### 20.3 Hotel MVP

- Live dashboard.
- Parking-location configuration.
- Staff management.
- Event configuration.
- Search and session history.
- Key audit.
- Daily reports.
- Manual override with reason.
- Audit trail.

### 20.4 Deferred features

- Native guest app.
- Deep PMS integration.
- Automatic number-plate recognition.
- Indoor navigation.
- Dynamic staffing prediction.
- Automated payment and folio posting.
- EV charging management.
- Multi-property administration.
- AI analytics.
- Loyalty integration.

---

## 21. Implementation Plan

### Phase 0: Discovery and site study

Activities:

- Observe the current valet workflow.
- Measure arrival and retrieval volumes.
- Identify all parking areas.
- Document indoor, outdoor, basement, and temporary parking.
- Count key racks and storage points.
- Review Wi-Fi and mobile-network coverage.
- Identify PMS, POS, payment, SMS, WhatsApp, and security systems.
- Interview valet, supervisor, reception, security, finance, and event teams.
- Define privacy, retention, and incident policies.
- Select a pilot event or operating period.

Deliverables:

- Site survey.
- As-is process map.
- To-be process map.
- Feature-prioritisation document.
- Integration assessment.
- Risk register.
- Pilot plan.

### Phase 1: MVP build

- Guest PWA.
- Android valet application.
- Hotel operations dashboard.
- QR ticketing.
- OTP authentication.
- Vehicle and key records.
- Parking-location QR scanning.
- Pickup workflow.
- SMS notifications.
- Basic reports.
- Audit trail.
- Offline queue for critical staff actions.

### Phase 2: Pilot

Pilot the system at one property and, preferably, during one high-volume event.

Measure:

- Vehicle registration time.
- Vehicle retrieval time.
- Location errors.
- Key errors.
- Digital-ticket adoption.
- Notification delivery success.
- Manual overrides.
- Staff adoption.
- Guest feedback.
- System downtime.
- Peak queue length.

### Phase 3: Production hardening

- Performance improvements.
- Monitoring and alerting.
- Permission refinement.
- Payment integration.
- PMS integration.
- Multilingual content.
- Improved offline-conflict handling.
- Support and incident-response process.
- Security testing.
- Staff training.

### Phase 4: Advanced capabilities

- PMS and folio integration.
- WhatsApp workflow.
- Number-plate recognition.
- Indoor parking map.
- EV charging workflow.
- Multi-property administration.
- Predictive staffing.
- Guest recognition.
- In-vehicle item retrieval.
- Loyalty and guest-profile integration.

---

## 22. Physical Hotel Setup

The hotel should provide:

- QR boards at valet arrival points.
- QR markers in parking zones, rows, or bays.
- Numbered key racks or lockers.
- Printed fallback tickets.
- Clearly marked pickup locations.
- Help-desk tablet or computer.
- Staff mobile devices.
- Charging stations and power banks.
- Stable Wi-Fi or mobile data.
- Downtime and manual fallback procedure.
- CCTV coverage around key and vehicle handover points.
- Staff training and shift procedures.

For large events, configure:

- Event name.
- Expected vehicle volume.
- Arrival and departure windows.
- Temporary parking zones.
- Additional pickup points.
- Staffing plan.
- Priority and VIP rules.
- Event-specific tariffs.
- Maximum queue thresholds.

---

## 23. Non-Functional Requirements

### Performance

- Check-in screens should respond quickly under normal network conditions.
- Pickup requests should appear on the dashboard near real time.
- The system should support the hotel’s expected peak event load.
- Search should return active sessions quickly.

### Availability

- The production platform should have an agreed availability target.
- Staff workflows should continue during temporary connectivity loss.
- Notification failures should not block vehicle handover.
- The hotel must have an operational downtime procedure.

### Scalability

The system should support:

- Multiple parking areas.
- Multiple events.
- Multiple pickup points.
- Increasing staff and device counts.
- Future multi-property operation.

### Usability

- Staff should be able to complete a standard intake with minimal typing.
- Common actions should be reachable with one hand.
- Buttons should be large enough for outdoor and hurried operation.
- The application should support dark or high-contrast modes where useful.
- Error messages should provide a clear next action.

### Auditability

The system must retain an immutable or protected record of:

- Session creation.
- Vehicle changes.
- Key acceptance and transfer.
- Parking-location changes.
- Pickup requests.
- Staff assignments.
- Manual overrides.
- Payments.
- Handover.
- Exceptions.
- Sensitive-data access.

---

## 24. Risks and Mitigations

| Risk | Mitigation |
|---|---|
| Poor internet in basement | Offline-first staff workflow and network survey |
| Guest does not receive SMS | PWA, printed ticket, WhatsApp, and manual lookup |
| Lost or shared QR | OTP and vehicle-number verification |
| Wrong parking location | Mandatory location scan and supervisor correction |
| Key misplaced | Key-rack QR, photograph, custody audit, shift reconciliation |
| Vehicle damage dispute | Time-stamped photographs and guest acknowledgement |
| Staff bypasses system | Simple workflow, mandatory transitions, supervisor reports |
| Peak event overload | Queue priorities, multiple pickup points, and staffing dashboard |
| PMS integration delay | Integration adapter and temporary manual billing |
| Privacy exposure | Tokenised QR, RBAC, retention rules, and encryption |
| Guest refuses digital process | Printed fallback ticket and help-desk workflow |
| Duplicate pickup request | Idempotent request handling and active-request check |

---

## 25. Open Questions for Client Discovery

### Business and operations

1. How many vehicles arrive during normal operations?
2. How many vehicles arrive during the largest events?
3. What is the current average vehicle retrieval time?
4. What is the target retrieval time?
5. Is valet operated by hotel staff or an external contractor?
6. Are there multiple valet desks or pickup points?
7. Are VIP, accessibility, or emergency priorities required?
8. What is the current paper-ticket and key-rack process?

### Parking and location

1. How many parking zones, rows, levels, and bays exist?
2. Is exact-bay tracking operationally realistic?
3. Are temporary external parking locations used?
4. Are there valet shuttle or transfer requirements?
5. Is there a basement network dead zone?
6. Are EV charging spaces included?

### Integration

1. Which PMS is used?
2. Which POS or payment system is used?
3. Is folio posting required?
4. Is WhatsApp Business already available?
5. Which SMS provider is approved by the hotel?
6. Is a hotel mobile application already available?
7. Is guest-room verification required?

### Security and privacy

1. What vehicle photographs are permitted?
2. How long should photos and guest data be retained?
3. Who can view vehicle and key photographs?
4. What is the lost-ticket policy?
5. What is the vehicle-damage dispute policy?
6. Is guest consent required at digital check-in?
7. What is the required incident-response process?

### Commercial

1. Is the system for one property or a hotel group?
2. Is the client expecting a one-time build, subscription, or hybrid model?
3. Who will provide and manage staff devices?
4. Who will pay SMS, WhatsApp, hosting, and payment-gateway charges?
5. What level of post-launch support is required?

---

## 26. Recommended Initial Proposal

### Pilot MVP

A branded, app-less digital valet system for one five-star hotel property, consisting of:

- Guest QR/PWA experience.
- Android valet staff application.
- Live hotel dashboard.
- QR-based parking-location tracking.
- Key custody records.
- Vehicle photographs.
- Pickup requests.
- SMS and optional WhatsApp updates.
- Secure QR/OTP handover.
- Basic reporting and audit history.
- Staff training and pilot support.

### Production expansion

After a successful pilot, add:

- Payment gateway.
- PMS and folio integration.
- WhatsApp automation.
- Event-specific tariffs.
- Multiple properties.
- Advanced analytics.
- Number-plate recognition.
- Indoor maps and advanced parking automation.

The primary value of the system is not only the QR code. The main value comes from combining accurate vehicle location, accurate key location, advance pickup requests, staff assignment, guest notifications, secure handover, and complete accountability for every vehicle movement.

---

## 27. Acceptance Criteria for Pilot Launch

The pilot may be considered ready when:

- Staff can create and complete a valet session.
- Guests can receive and open the digital ticket.
- Guests can request their vehicle remotely.
- Staff can see pickup requests in the dashboard.
- Every active vehicle has a parking location.
- Every active key has a recorded storage or custody location.
- Staff can retrieve a vehicle using the dashboard information.
- Handover requires guest and vehicle verification.
- Vehicle photographs are stored and viewable by authorised users.
- Exceptions and manual overrides are auditable.
- The system has a documented downtime procedure.
- Hotel staff have completed pilot training.
- The pilot has successfully processed a realistic peak workload.

---

## 28. Document Status

This is an initial requirements and solution document. It should be refined after:

- On-site observation.
- Stakeholder interviews.
- Parking-layout review.
- Network assessment.
- PMS/POS integration assessment.
- Privacy and security review.
- Peak-event volume validation.
- Pilot feedback.

The next formal documents should be:

1. Business Requirements Document.
2. Product Requirements Document.
3. Detailed User Stories and Acceptance Criteria.
4. UX wireframe specification.
5. Technical Architecture Document.
6. API and data-model specification.
7. Test Strategy and UAT Plan.
8. Deployment, training, and support plan.

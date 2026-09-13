# Suprema+ Mobile App — Product Requirements Document (PRD)

**Version:** 1.0  
**Date:** 30 August 2026  
**Product:** Suprema+ Smart Steam Generator Controller  
**Platforms:** Android and iOS  
**Primary users:** Gym/resort staff, facility managers, service technicians, authorized owners  
**Recommended build:** Flutter app with native BLE adapters; firmware exposes BLE GATT now and retains Wi-Fi/gateway compatibility for a future release.

---

## 1. Product Summary

Suprema+ is a mobile application for authorized users to control and monitor MultiTechnicaa Suprema+ steam-generator units. It must support local Bluetooth Low Energy (BLE) control in the first release, with a clean upgrade path for Wi-Fi gateway, cloud access, scheduling, and multi-site management.

The app must make safety and certainty visible: every user command must show **sent**, **accepted/rejected**, and the resulting device state. The app is a convenience control surface, not a replacement for hardware safety interlocks, physical emergency stop, thermal cutoff, water-level protection, or local panel control.

### Product goals

- Provide reliable BLE control for start/stop, temperature, duration, ambience temperature, cool-off, drain time, alarm, and Bluetooth enable/disable.
- Show real-time unit state: disconnected, idle, heating, at temperature, steaming, cool-off, draining, fault, and emergency lockout.
- Support one phone controlling many authorized units without selecting the wrong nearby device.
- Provide technician-grade diagnostics and auditability without exposing unsafe settings to normal users.
- Ship on Android and iOS with functional parity for all core user flows.

### Non-goals for V1

- Public/unrestricted guest control.
- Controlling safety-critical hardware solely from the cloud.
- Replacing the local physical display/panel.
- Multi-hop Bluetooth Mesh routing in the guest/staff app; Mesh provisioning may be an installer/technician capability.
- Full booking-system, CRM, payment, voice assistant, or hotel PMS integration.

---

## 2. Market and Competitor Notes

| Competitor / system | Known app-led features | Learning for Suprema+ |
|---|---|---|
| MrSteam SteamLinx | Mobile on/off, temperature, duration, remote access; public Android listing shows a low rating (1.5/5 from about 60 reviews), signalling reliability and support risk. [web:45][web:46] | Make command confirmation, reconnecting, and truthful state feedback the differentiator. |
| ThermaSol Solitude | Remote control, time/temp, presets, lights/music, diagnostics. [web:7] | Keep controls simple in V1, but design feature flags for ambience and maintenance modules. |
| Helo Elite Free / Helo Control | Cloud-based remote control, scheduling, fans, fragrance and lighting. [web:15] | Wi-Fi and scheduling are valuable Phase-2/3 upsells for resort and gym operations. |
| Steamtec/TOLO | Time/temp plus accessory controls such as aroma, LED and fan. [web:5] | Use a modular settings UI so hardware options appear only on compatible units. |
| Effe Experience | Phone/tablet remote control for Turkish-bath generators. [web:9] | A premium wellness experience requires a polished visual app and trustworthy status. |

### Core category lessons

- Remote start, temperature, and duration are category-baseline features. [web:10][web:12]
- Commercial buyers gain extra value from multi-unit views, diagnostics, maintenance reminders, and later, scheduling.
- Customer frustration concentrates around poor onboarding, delayed commands, unclear device status, and unreliable connectivity; address these before adding decorative features. [web:45][web:46]

---

## 3. Users and Roles

| Role | Typical user | Permissions |
|---|---|---|
| Operator | Gym/reception/spa staff | View assigned units; start/stop; set approved session temperature/duration; view basic status and faults. |
| Facility Manager | Resort/gym manager | Everything an operator can do; claim/assign units; configure approved operating ranges; manage users; view history. |
| Technician | Installer/service engineer | Commission units; BLE/Mesh provisioning; advanced parameters; firmware details; diagnostic logs; maintenance reset. |
| Owner/Admin | MultiTechnicaa or designated site owner | Organization/site management; role assignment; optional cloud support and fleet visibility in future versions. |
| Guest (optional future) | Hotel/spa guest | Time-limited, room-scoped control with limited temperature/time range; no advanced settings or service data. |

### Authorization principle

A user must have both: (1) app authorization for a site/unit and (2) a trusted BLE relationship with the physical unit. Sensitive settings must require Manager or Technician role plus a local proximity check.

---

## 4. Supported Platforms

### Android

- Target current supported Android versions; minimum OS version to be finalized during technical discovery.
- Android BLE use requires declared Bluetooth permissions; Android 12+ separates scan and connect permissions. [web:130][web:131]
- Support BLE scanning, pairing/bonding, GATT connections, notifications/indications, reconnect flow, and optional background status handling.

### iOS

- Target current supported iOS versions; minimum OS version to be finalized during technical discovery.
- Use CoreBluetooth with clear `NSBluetoothAlwaysUsageDescription` language.
- If background communication is required, configure the `bluetooth-central` background mode and state restoration; iOS background scanning is constrained and must filter by known service UUIDs. [web:133][web:143][web:144]

### Delivery

- Release publicly through Google Play and Apple App Store for broad customer access.
- Pilot distribution: Android signed APK via MDM/direct controlled distribution; iOS via TestFlight or Apple Business Manager Custom Apps.
- Use the company-owned Play Console and Apple Developer accounts, not an agency personal account.

---

## 5. Product Scope and Release Plan

| Release | Purpose | Included features |
|---|---|---|
| Phase 1: Prototype | Validate electronics, BLE, command reliability, and UX | F01–F08 for one unit; prototype BLE GATT; technician test screen; no account/cloud required. |
| Phase 2: Core MVP | Commercial pilot for iOS + Android | F01–F18, F22–F24; multi-unit local control; roles; diagnostics; history; store-ready app. |
| Phase 3: Commercial release | Improve operations and support | F19–F21, F25–F29; maintenance, polished onboarding, optional Mesh technician mode, analytics/audit export. |
| Phase 4: Connected ecosystem | Premium commercial tier | F30–F37; Wi-Fi gateway, remote access, schedules, multi-site dashboard, notifications and integrations. |

---

# 6. Feature Requirements

Each feature below is deliberately separable. An AI coder or engineering team should implement and test it as an independent vertical slice, then integrate it through the shared domain models and BLE protocol.

## F01 — App Launch and Session

**Priority:** Must-have (MVP)  
**Users:** All  
**Goal:** Let a user enter the correct app state securely and quickly.

### Functional requirements

- Show branded splash screen for no more than 2 seconds while checking saved session, local unit registry, and Bluetooth availability.
- If signed out, show Sign In and Continue in Local Technician Mode (only if enabled in build/site policy).
- If signed in, land on **My Units**.
- Persist session securely using Keychain (iOS) / Android Keystore-backed storage.
- Support logout; logout removes application tokens but does not erase bonded device keys unless user explicitly chooses “Forget this phone from device.”

### Acceptance criteria

- Given a valid saved session, opening the app reaches My Units without asking for credentials.
- Given an expired session, the user is redirected to Sign In with a clear explanation.
- No secret, token, or BLE key is stored in plaintext.

### UI prompt for Stitch

> Create a mobile app launch and sign-in flow for a premium steam-generator controller. Use dark charcoal, warm steam-grey, white, and cyan/teal status accents. Create Splash, Sign In, Forgot Password, and My Units entry states. Keep controls large, industrial-premium, accessible, and suitable for wet-spa environments.

---

## F02 — Authentication and Role Access

**Priority:** Must-have for commercial MVP; optional for local-only prototype  
**Users:** Operator, Manager, Technician, Admin

### Functional requirements

- Email/mobile + password authentication; allow magic-link/OTP option in later iteration.
- Role returned by backend/local registry controls what screens and settings appear.
- Show account role in Profile.
- Support Manager invitation of Operator users for an assigned site/unit.
- Require recent re-authentication or device PIN for sensitive technician actions.

### Acceptance criteria

- Operator cannot see advanced drain, alarm policy, Bluetooth radio, provisioning, firmware, or user-management screens.
- Technician can access commissioning only after an explicit local authentication step.
- Unauthorized API/UI action returns a safe “You do not have permission” message and does not attempt device control.

### UI prompt for Stitch

> Design role-aware account screens: profile card with role badge, team members list, invite operator form, and a locked Advanced Settings row that explains manager/technician access is required.

---

## F03 — Bluetooth Permission and Readiness

**Priority:** Must-have  
**Users:** All

### Functional requirements

- Detect Bluetooth unsupported, powered off, permission denied, and ready states.
- Explain why permission is needed: “Suprema+ uses Bluetooth to find and safely control nearby steam generators.”
- Provide OS settings deep-link where supported.
- Do not begin BLE scan until permissions are granted.
- Show a non-blocking connectivity banner throughout the app.

### Acceptance criteria

- On Android 12+, request the appropriate scan/connect permissions before scanning/connecting. [web:130][web:131]
- On iOS, show the system Bluetooth permission prompt only after the app has shown its own explanatory screen.
- A denied permission state provides retry and Settings actions.

### UI prompt for Stitch

> Create a Bluetooth readiness screen with four states: Bluetooth off, permission required, permission denied, and ready to scan. Use an illustration of a phone connecting to a steam controller, concise explanatory text, primary “Enable Bluetooth” / “Allow Access” buttons, and a secondary “Open Settings” button.

---

## F04 — Discover Nearby Suprema+ Units

**Priority:** Must-have  
**Users:** Manager, Technician; Operator for first connection

### Functional requirements

- Scan only for Suprema+ service UUID and manufacturer data; do not show generic Bluetooth devices.
- Show device name, serial suffix, signal strength category, provisioning state, and approximate identification label if already claimed.
- Default device advertisement name: `SUPREMA-XXXX` where `XXXX` is last four characters of immutable hardware serial.
- Sort known/claimed units first, then by signal quality.
- Allow scan refresh; stop scanning after a configurable timeout (e.g., 15 seconds) to save battery.
- Require a physical proximity confirmation during first claim: device blink/beep code, panel confirmation code, QR scan, or a physical commissioning button.

### Acceptance criteria

- Two nearby units with similar names remain distinguishable via serial suffix and QR/physical confirmation.
- A device cannot be claimed merely because it is visible in scan results.
- The scan screen states “Move close to the required unit before pairing.”

### UI prompt for Stitch

> Design a “Nearby Suprema+ Units” scan screen. Include a scanning animation, cards with room name or “Unassigned unit,” device serial suffix, signal bars, “Already Added” state, and a “Scan QR” action. Add a safety note: “Stand near the unit before pairing.”

---

## F05 — Unit Claiming and Secure Pairing

**Priority:** Must-have  
**Users:** Manager, Technician

### Functional requirements

- Use BLE LE Secure Connections and bonding where hardware/OS support permits.
- Unit enters claimable/provisioning mode only by physical action: panel menu, recessed button, technician key, or one-time code.
- App verifies immutable serial number, firmware version, and unit certificate/secret before claiming.
- Ask for site, room name, and user-visible unit label.
- Store a unique internal `unitId`, hardware serial, BLE identity, BLE bond reference, assigned role policy, and optional Mesh unicast address.
- Prevent a unit from being claimed by a different organization unless released by a Manager/Technician or factory reset with physical authorization.

### Acceptance criteria

- A unit outside provisioning mode rejects initial claim.
- App confirms physical identity via QR code, displayed short code, or blink/beep challenge before saving room name.
- The app displays success only after device-side claim acknowledgement is received.

### UI prompt for Stitch

> Create a 4-step “Add Suprema+ Unit” wizard: 1) select/scan unit, 2) confirm physical unit using QR or 6-digit code, 3) name room and assign site, 4) success with “Test Connection.” Use a horizontal progress indicator and an industrial-premium visual style.

---

## F06 — My Units Dashboard

**Priority:** Must-have  
**Users:** Operator, Manager, Technician

### Functional requirements

- Show assigned units as cards/list: room name, connectivity, current state, current temperature, target temperature, remaining time, latest fault, and last-updated timestamp.
- Statuses: `Disconnected`, `Idle`, `Heating`, `At Temperature`, `Steaming`, `Cool-Off`, `Draining`, `Fault`, `Emergency Lockout`.
- Tap card to open Unit Detail.
- Support filter by state and search by room/unit name.
- In BLE-only V1, label data as `Live` only while connected; otherwise show `Last known at <time>`.

### Acceptance criteria

- A disconnected unit never appears as actively live.
- Fault states use strong visual priority and do not get hidden below normal units.
- A card updates within 2 seconds of a received state indication while app is foregrounded.

### UI prompt for Stitch

> Design a premium “My Units” dashboard for a commercial steam generator app. Create unit cards for: Heating, Steaming, Draining, Disconnected, and Fault. Each card should show room name, live temperature, target temperature, remaining time, connection icon, colored status chip, and last-updated time. Include filters and search.

---

## F07 — Unit Detail and Live Status

**Priority:** Must-have  
**Users:** All authorized roles

### Functional requirements

- Show room/unit name, connection status, current state, current room temperature, target temperature, session remaining time, ambience temperature, water/drain state where available, alarm state, and latest error.
- Display a state timeline: command accepted → heating → at temperature → session active → cool-off → draining → off.
- Show “Last confirmed by device” timestamp.
- Add pull-to-refresh/reconnect action.
- Display `Unknown` rather than guessed values when a sensor/status is unavailable.

### Acceptance criteria

- Unit Detail clearly distinguishes target temperature from actual room temperature.
- A command acknowledgement and later state progression are visually separate.
- If telemetry stops, data becomes “Last known,” not “live.”

### UI prompt for Stitch

> Create a “Steam Room 01” detail screen. Top: large current temperature gauge, target temperature, state chip, and countdown. Middle: Start/Stop primary control and session settings. Bottom: live status timeline, drain/water/alarm indicators, last confirmed timestamp, and diagnostic link. Create variants for Idle, Heating, Steaming, Draining, and Fault.

---

## F08 — Start Steam Session

**Priority:** Must-have  
**Users:** Operator, Manager, Technician

### Functional requirements

- Start flow captures/uses target room temperature and session duration.
- Validate setpoints against device-provided safe min/max range and role policy.
- Require user confirmation containing room name, target temperature, duration, and a safety notice.
- Send one atomic `START_SESSION` command where firmware supports it; avoid separate start/temp/time commands that can leave partial state.
- Disable duplicate taps while command is pending.
- Show the three delivery states: `Sending`, `Device accepted`, `Session started / Heating`.
- On rejection, show device-provided error and safe next action.

### Acceptance criteria

- The app does not claim “Steam started” merely after an ATT write response; it must wait for application-level `ACK_OK` and then actual state confirmation.
- Duplicate Start taps do not create multiple commands.
- If safety interlock blocks start, user sees a specific fault/reason and no fake countdown starts.

### UI prompt for Stitch

> Design a Start Steam Session bottom sheet for “Steam Room 01.” Include a temperature stepper, duration stepper, safety range hint, compact summary, and primary “Start Session” button. Make a progress state sequence: Sending command, Device accepted, Heating started. Include an error state for safety interlock or low-water fault.

---

## F09 — Stop Steam Session / Emergency Stop

**Priority:** Must-have  
**Users:** Operator, Manager, Technician

### Functional requirements

- Provide normal Stop Session from Unit Detail.
- Require confirmation because stopping may begin cool-off/drain sequence rather than immediate power-off.
- Provide an optional clearly separated **Emergency Stop** only if hardware supports a safe remote emergency action and the manufacturer approves it.
- Emergency Stop must never replace physical emergency stop requirements; show “Use the physical emergency control for immediate local danger.”
- Log actor, time, command sequence, device acknowledgement, and final state.

### Acceptance criteria

- Normal Stop shows expected post-stop behavior: cooling and/or draining.
- Device acknowledgement failure leaves UI in “Stop command not confirmed” and prompts user to use local panel if safety requires.
- Emergency Stop is visually distinct and protected by hold-to-confirm / second confirmation.

### UI prompt for Stitch

> Create Stop Session confirmation and Emergency Stop screens. Normal stop uses amber styling and explains cool-off/drain. Emergency Stop uses red styling, hold-to-confirm interaction, and a warning to use physical emergency controls for immediate danger.

---

## F10 — Temperature Control

**Priority:** Must-have  
**Users:** Operator, Manager, Technician

### Functional requirements

- Set target room temperature in °C; optionally display °F later.
- Unit reports allowed min/max/step size; app must not hard-code values as the final authority.
- Operator range may be narrower than hardware safe range; Manager/Technician may edit site policy within hardware limits.
- Show current, target, and recommended/default setpoint.
- Apply requires command acknowledgement and reflected device configuration status.

### Acceptance criteria

- Input cannot exceed device safety limits.
- The selected setpoint appears “Pending” until device ACK, then “Applied” only after device reports the same value.
- Invalid values return an actionable explanation.

### UI prompt for Stitch

> Design a temperature settings screen with a large circular dial or plus/minus stepper, current room temperature, allowed range, target label, safe-range helper text, and an Apply button. Include pending, applied, and rejected command states.

---

## F11 — Session Duration Control

**Priority:** Must-have  
**Users:** Operator, Manager, Technician

### Functional requirements

- Set steam time in whole minutes, constrained by device and role policy.
- Show current configured duration and live remaining duration during an active session.
- Allow an authorized user to extend/reduce time while session is active only if firmware policy permits.
- Confirm whether a duration change applies to current session or next session.

### Acceptance criteria

- Countdown derives from device-reported remaining time, not a phone-only timer.
- On reconnection, the app refreshes remaining time from the device.
- Session timeout triggers device state update even if the phone is absent.

### UI prompt for Stitch

> Create a session duration screen with 5-minute quick chips, a minute stepper, maximum-duration hint, and a live countdown variant for an active session. Include a clear choice between “Apply to current session” and “Save as default.”

---

## F12 — Ambience Temperature

**Priority:** Required if hardware exposes it; otherwise feature-flagged  
**Users:** Manager, Technician; Operator if policy allows

### Functional requirements

- Expose ambience temperature only for compatible hardware.
- Explain what ambience temperature controls in the product-specific wording approved by MultiTechnicaa.
- Validate against device-reported limits.
- Allow per-unit default and optional per-session override.

### Acceptance criteria

- The feature is hidden—not disabled—on units without capability flag `AMBIENCE_TEMP`.
- Device ACK and reflected status are required before showing saved state.

### UI prompt for Stitch

> Create an advanced ambience-temperature setting card. Show an explanation tooltip, current value, allowed range, a stepper, and a compatibility-empty state reading “Not available on this Suprema+ unit.”

---

## F13 — Cool-Off Timer Before Drain

**Priority:** Must-have for Manager/Technician if supported  
**Users:** Manager, Technician

### Functional requirements

- Configure cool-off delay in seconds before drain begins.
- Show the operating sequence: Session ends/Stop → Cool-Off delay → Drain → Off.
- Restrict edits while an active sequence is in a stage that cannot safely be changed, unless firmware explicitly supports it.
- Require elevated confirmation: “This affects post-session equipment operation.”

### Acceptance criteria

- App labels units consistently: seconds (`s`) only.
- App displays device reported configured value after ACK.
- Invalid/unsafe values show device-provided rejection reason.

### UI prompt for Stitch

> Design a technician-only cool-off timer setting with a seconds stepper, visual process strip (Steam → Cool-Off → Drain → Off), safety warning, and Apply confirmation.

---

## F14 — Water Drain Time

**Priority:** Must-have for Manager/Technician if supported  
**Users:** Manager, Technician

### Functional requirements

- Configure automatic water drain duration in minutes.
- Show current drain status and time remaining during active drain.
- Provide manual drain request only where hardware supports it and only to authorized roles.
- Require safety confirmation and prevent starting a steam session while an active drain lock is present.

### Acceptance criteria

- During drain, Start Session is disabled with clear explanation.
- A manual drain command uses ACK/status confirmation and is recorded in history.
- Device fault during drain is prominently surfaced.

### UI prompt for Stitch

> Create a drain configuration and live-drain screen. Include drain duration setting, current drain state, remaining minutes, a technician-only “Start Manual Drain” action, and a safety lock message preventing a steam session during drainage.

---

## F15 — Alarm Enable/Disable and Fault Handling

**Priority:** Must-have  
**Users:** Manager, Technician; Operator views only

### Functional requirements

- Show alarm enabled/disabled state where hardware supports a configurable alarm.
- Define alarm scope precisely in firmware contract: audible panel alarm, remote fault alert, or both.
- Operator may acknowledge a visible alert but cannot suppress a safety alarm or clear fault without authorization.
- Provide fault cards: code, severity, plain-language description, recommended action, timestamp, and whether steam operation is blocked.
- Fault codes must originate from device firmware; app owns the human-readable mapping and support guidance.

### Acceptance criteria

- Safety-critical alarms cannot be turned off by a normal Operator.
- “Alarm disabled” does not imply safety interlocks are disabled; UI explicitly explains this.
- Fault remains visible after reconnect until device reports it cleared or technician clears it through approved flow.

### UI prompt for Stitch

> Design an alarm and fault UI. Include normal status, warning, critical fault, and acknowledged states. Use a fault detail drawer with error code, what happened, what to do now, whether operation is blocked, and “Contact Service” action.

---

## F16 — Bluetooth Radio Enable/Disable

**Priority:** Technician-only; optional by product policy  
**Users:** Technician

### Functional requirements

- Do not expose Bluetooth on/off as a normal user setting; disabling radio can lock users out.
- Require local panel confirmation, technician PIN, and warning that device must retain a recovery/physical control path.
- If radio is disabled, device should advertise a recoverable local service only through approved service procedure, or require a physical re-enable action.
- Log every change.

### Acceptance criteria

- A user cannot accidentally disable Bluetooth in general settings.
- Device remains operable from its local physical panel regardless of radio state.
- App shows unambiguous recovery instructions before confirmation.

### UI prompt for Stitch

> Create a technician-only Bluetooth radio control screen with a prominent warning, device recovery steps, a physical-panel confirmation checklist, technician PIN field, and a hold-to-confirm disable action.

---

## F17 — Presets

**Priority:** Should-have  
**Users:** Operator, Manager, Technician

### Functional requirements

- Save named presets: target temperature, duration, ambience temperature if applicable, cool-off and drain settings only if role permits.
- Default presets: `Quick Warm-Up`, `Standard`, `Deep Steam` only after MultiTechnicaa confirms safe defaults.
- Operators can run approved presets; Managers create/edit them; Technicians can mark factory presets.
- Apply a preset through a review/confirm screen; show which values will change.

### Acceptance criteria

- A preset cannot include unsupported capabilities.
- Restricted parameters in a preset cannot be run by an unauthorized role.
- Applying a preset uses an atomic config/session command or sequenced transactional commands with rollback/reporting.

### UI prompt for Stitch

> Design a Presets screen with cards for Quick Warm-Up, Standard, and custom presets. Each card shows temperature, duration, and optional ambience settings. Include “Run,” “Edit,” and “Create Preset” interactions with role-aware locks.

---

## F18 — Multi-Unit Management

**Priority:** Must-have for commercial MVP  
**Users:** Manager, Technician; Operator for assigned units

### Functional requirements

- Support at least 20 locally registered units per site in V1; final scalability target to be validated with hardware/network design.
- Require unit room labels, serial suffixes, and optional photo/location notes.
- Display nearby/connected relationship per unit; BLE-only mode may require the phone to be in range of each controlled unit.
- Provide sequential “Connect and Control” behavior—not uncontrolled simultaneous BLE connections—unless validated on both platforms.
- Group control is future/Wi-Fi-gateway or Mesh policy feature; do not bulk start steam units in V1 without explicit safety policy.

### Acceptance criteria

- A Manager can distinguish two units even if both are in the same corridor and have similar signal strength.
- Unit commands include immutable device identifier and command sequence; app never targets based only on display name or RSSI.
- Multi-unit page clearly warns when a selected unit is out of BLE range.

### UI prompt for Stitch

> Create a multi-unit commercial dashboard with a list/map-style selector for Steam Room 01–10. Include room labels, serial suffixes, status colors, search, filters, connection badges, and a detail drawer. Do not include bulk start controls; use safe individual actions.

---

## F19 — Command Delivery, ACK, Retry, and Status Reconciliation

**Priority:** Must-have  
**Users:** All

### Functional requirements

- Use `Write With Response` for commands requiring ATT-level transport confirmation.
- Device must send application-level command result via a Status **Indication** whenever possible; indications are acknowledged, while notifications are not. [web:56][web:59][web:60]
- Every command payload includes `commandId`, `sequenceNumber`, `issuedAt`, parameters, and optional idempotency key.
- Device response includes same `commandId/sequenceNumber`, result (`ACCEPTED`, `REJECTED`, `EXECUTING`, `COMPLETED`, `FAILED`), error code, authoritative state snapshot, and device timestamp/uptime.
- UI states: `Not sent` → `Sending` → `Transport acknowledged` → `Device accepted/rejected` → `State confirmed`.
- Do not retry non-idempotent commands blindly. Retry only when firmware recognizes the same idempotency key and returns prior outcome.
- Reconnect flow reads authoritative state/config/history snapshot before enabling new command interactions.

### Acceptance criteria

- Losing BLE after ATT response but before device status indication shows “Command outcome unknown—reconnecting to confirm,” not success.
- Duplicate sequence/idempotency key does not run the same physical action twice.
- The device status indication is persisted in local command history.

### Example command envelope

```json
{
  "protocolVersion": 1,
  "commandId": "b12d0f12-6b3c-4cf0-94cf-513a2b937a06",
  "sequence": 1042,
  "type": "START_SESSION",
  "payload": {"targetTempDeciC": 450, "durationSeconds": 900},
  "issuedAtEpochMs": 1788100000000,
  "idempotencyKey": "b12d0f12-6b3c-4cf0-94cf-513a2b937a06"
}
```

### Example device result

```json
{
  "commandId": "b12d0f12-6b3c-4cf0-94cf-513a2b937a06",
  "sequence": 1042,
  "result": "ACCEPTED",
  "errorCode": "NONE",
  "state": "HEATING",
  "currentTempDeciC": 327,
  "targetTempDeciC": 450,
  "remainingSeconds": 900,
  "deviceUptimeSeconds": 51402
}
```

### UI prompt for Stitch

> Create command-feedback components for a connected hardware app: inline progress “Sending…”, green “Device accepted”, blue “Heating started”, orange “Command outcome unknown—reconnecting”, and red “Rejected: Low water.” Include a compact command activity log with timestamps.

---

## F20 — Live Telemetry Subscription

**Priority:** Must-have  
**Users:** All authorized roles

### Functional requirements

- Subscribe to Status indication/notification characteristic on connect.
- Default update policies: immediate on state/fault/config change; periodic heartbeat during active session; lower frequency in idle state.
- Device exposes at minimum: state, actual temperature, target temperature, remaining time, cool-off/drain remaining time where active, fault code, alarm state, water/interlock status where hardware provides it, and firmware version.
- App displays stale-data threshold; if no telemetry heartbeat for configured time, mark data stale.

### Acceptance criteria

- Live active-session status updates appear promptly under normal BLE conditions.
- App remains stable if it receives an unknown future state/field.
- App explicitly labels stale data and triggers reconnect affordance.

### UI prompt for Stitch

> Design a live telemetry component with current temperature, target, time remaining, state timeline, last update age, connection quality, and a stale-data warning state. Make it readable from arm’s length with large numbers.

---

## F21 — Connection Management and Offline Mode

**Priority:** Must-have  
**Users:** All

### Functional requirements

- Auto-reconnect to a previously bonded/authorized unit while Unit Detail remains open.
- Provide manual reconnect and “Forget device” (Manager/Technician only).
- Use exponential backoff with a finite retry window; never continuously scan in background without user value/OS allowance.
- Cache last-known device snapshot with timestamp locally.
- On reconnect: discover services if needed; enable indications; read Device Info, Config, Current Status, Last Command Result, and Fault Snapshot; reconcile local UI.
- BLE-only mode must work without internet; sign-in/role cache policy must be explicitly defined.

### Acceptance criteria

- A dropped connection while session is active does not alter the physical session; it only affects app visibility/control.
- Reconnected app displays authoritative device state before allowing a new Start/Stop command.
- User sees meaningful messages: “Out of range,” “Bluetooth off,” “Unit unavailable,” “Reconnecting,” rather than a generic failure.

### UI prompt for Stitch

> Create reusable connection banners and full-screen states for: Connecting, Connected, Weak signal, Reconnecting, Out of range, Bluetooth off, and Last known status. Keep primary actions contextual: Retry, Open Bluetooth Settings, or Return to Units.

---

## F22 — Diagnostics

**Priority:** Must-have for pilot/MVP  
**Users:** Manager (limited), Technician (full)

### Functional requirements

- Read-only device info: serial, product model, firmware version, BLE protocol version, hardware revision, capability flags, signal strength, uptime, relay/heater state where safe to disclose.
- Fault detail: active faults, last faults, time/device uptime, severity, action guidance.
- Technician export: diagnostic snapshot as JSON/CSV/PDF-compatible data in future; V1 can provide shareable text bundle.
- “Contact Support” action includes unit serial and fault code but requires user consent before sharing data.

### Acceptance criteria

- Diagnostic data is segregated from normal operator controls.
- Support bundle excludes secrets, BLE keys, tokens, and personally sensitive data.
- An unknown fault code shows “Unknown code—contact service” rather than misleading advice.

### UI prompt for Stitch

> Create a diagnostics screen with sections: Device Identity, Connectivity, Current Status, Active Faults, Recent Faults, and Support. Use monospaced values for serial/version fields and a clear “Share Support Bundle” button.

---

## F23 — Maintenance and Service Reminders

**Priority:** Should-have  
**Users:** Manager, Technician

### Functional requirements

- Show runtime hours, steam-cycle count, drain-cycle count, and descaling/service due status when firmware provides them.
- Notify Manager/Technician of maintenance due; do not show intrusive guest-facing notices.
- Technician can mark maintenance complete only with note, date, and optional service reference.
- Device keeps authoritative safety/service lock state; app cannot override it.

### Acceptance criteria

- Reminder is based on device telemetry/defined policy, not solely phone-local timer.
- Service completion is audited.
- If a maintenance lock blocks operation, Start flow shows why and directs to service.

### UI prompt for Stitch

> Design a maintenance screen with health score, runtime hours, service-due card, checklist, service history timeline, and a technician-only “Mark Service Complete” flow with notes.

---

## F24 — Activity and Audit History

**Priority:** Must-have for commercial MVP  
**Users:** Operator (own/assigned read-only), Manager, Technician

### Functional requirements

- Log commands, results, state changes, pairing/claim events, config changes, faults, and maintenance events.
- Each entry includes timestamp, actor/app user if available, unit serial, command ID, result, and source (app/local panel/device/system) where firmware supports it.
- Filters: commands, faults, maintenance, time range.
- In BLE-only V1, history is partly local unless device provides event log; label source clearly.

### Acceptance criteria

- Command history differentiates “requested” from “confirmed by device.”
- History cannot be edited by normal users.
- Logs are retained according to a documented site/app policy.

### UI prompt for Stitch

> Create an activity history screen for a steam unit. Include timeline rows for Start requested, Device accepted, Heating, Fault, Drain started, and Session completed. Add filters, date range, actor, status icons, and a command detail sheet.

---

## F25 — BLE Mesh Provisioning and Node Management

**Priority:** Optional; Technician-only; use only when physical topology needs it  
**Users:** Technician

### Decision rule

Do **not** make Bluetooth Mesh mandatory for a single steam generator + phone. Use standard point-to-point BLE for simple installations. Use Mesh where multiple fixed panels/nodes need local relay, multi-room coverage, or gateway-mediated commercial control.

### Functional requirements

- Provide a separate, protected Technician Mesh mode; do not expose Mesh terminology to operators/guests.
- Scan for unprovisioned Suprema+ Mesh nodes using product-specific identification.
- Provision node with a unique device key, network key, application key, and unicast address.
- Allocate and persist unicast addresses; one physical node/element must not share an address with another.
- Configure optional group addresses by site/zone (e.g., `Resort A / Spa Wing`), but do not use group/broadcast commands for unsafe bulk start actions.
- Bind Suprema+ vendor model/application key; configure publication/subscription only after physical location verification.
- Store mapping: site, room, panel serial, generator serial, Mesh node UUID, primary unicast address, element addresses, group membership, provisioning date, technician.
- Provide a physical identify action (LED/display/buzzer) after provisioning to ensure installer maps the correct panel.

Bluetooth Mesh uses provisioner-assigned unicast addresses for individual elements and group addresses for multicast; this is the core mechanism for avoiding wrong-panel control. [web:132][web:135][web:136]

### Acceptance criteria

- App refuses provisioning if it cannot reserve a unique address range.
- Technician must confirm physical identify before assigning final room name.
- Critical steam commands are addressed to a specific unicast node and include application-level command sequence/ACK semantics.
- Device reset/unprovision action requires physical confirmation and Manager/Technician authorization.

### UI prompt for Stitch

> Design a technician-only Bluetooth Mesh provisioning flow: scan unprovisioned nodes, identify node by blinking panel, allocate address, select site and room, configure group, test command, and complete. Include a topology list with node serial, room name, unicast address, signal/relay health, and provisioning status.

---

## F26 — Firmware Compatibility and OTA Updates

**Priority:** Optional for initial release; strongly recommended before scale  
**Users:** Technician, Admin

### Functional requirements

- Show firmware version and minimum supported app/protocol version.
- Block incompatible command payloads with an upgrade explanation.
- OTA update must be resumable, authenticated, battery/power safe, and designed by embedded team; never start during active steam session, cool-off, drain, or fault state.
- Require wired/local recovery procedure for failed OTA.

### Acceptance criteria

- OTA cannot start unless unit is idle and power conditions are acceptable.
- Firmware image authenticity is verified on device.
- Update result appears in activity history.

### UI prompt for Stitch

> Create a firmware update screen for a connected steam generator: current version, available version, release notes summary, pre-update safety checklist, progress, do-not-close warning, success, and recovery/contact-support states.

---

## F27 — Notifications

**Priority:** Should-have; full usefulness arrives with Wi-Fi/cloud  
**Users:** Manager, Technician

### Functional requirements

- Local in-app alerts in BLE-only mode when phone is connected.
- Future push notifications through Wi-Fi gateway/cloud: fault, session complete, maintenance due, offline unit.
- Per-site and per-unit preferences; critical safety alerts cannot be silently downgraded without policy.

### Acceptance criteria

- BLE-only app does not promise alerts when phone is out of range/background-limited.
- Notification opens the relevant unit/fault screen.

### UI prompt for Stitch

> Design notification preferences for a multi-unit steam system. Include toggles for Faults, Session Complete, Maintenance Due, and Unit Offline; show whether each works locally only or requires Wi-Fi gateway.

---

## F28 — Help, Safety, and Support

**Priority:** Must-have  
**Users:** All

### Functional requirements

- Include safety warning before first remote/session control use.
- Provide quick help for Bluetooth pairing, reconnecting, common fault states, and local-panel fallback.
- “Contact support” pre-fills serial/model/app/firmware version, but user chooses what to share.
- Display emergency guidance: remote controls must not be used as the sole safety mechanism; use local emergency procedures where required.

### Acceptance criteria

- Help remains available offline for core pairing/safety instructions.
- Safety messages are concise and contextual rather than buried in legal text.

### UI prompt for Stitch

> Create a Help & Safety center for Suprema+. Include tiles for Pair a Unit, Connection Problems, Understanding Faults, Maintenance, and Emergency Guidance. Use clear warning cards and a “Contact Support” action with unit details preview.

---

## F29 — Settings, Preferences, and Data Privacy

**Priority:** Must-have  
**Users:** All; role-specific sections

### Functional requirements

- User preferences: theme, temperature unit, notification settings, language readiness.
- Site policy: allowed operating ranges, user roles, local-only/cloud mode (Manager/Admin).
- Privacy: data collected, local data clear, account deletion request where backend exists.
- Never expose BLE keys, Mesh keys, credentials, or raw provisioning secrets in UI/log exports.

### Acceptance criteria

- User can see whether a unit is controlled locally via BLE or remotely via gateway/cloud.
- Clearing local app data warns that bonded/re-claim relationship may need setup again.

### UI prompt for Stitch

> Design a Settings screen with sections: Account, App Preferences, Connected Units, Notifications, Privacy & Data, Help, and About. Include role-aware Advanced/Technician Settings with lock icons.

---

## F30 — Wi-Fi Gateway Setup (Future)

**Priority:** Phase 4 / optional premium tier  
**Users:** Manager, Technician

### Functional requirements

- Gateway pairs to generator/panel via approved BLE/Mesh/wired interface and joins site Wi-Fi.
- Setup supports 2.4 GHz network requirements where hardware requires it; show router compatibility guidance.
- App performs local gateway commissioning, network credential transfer securely, health check, and device registration.
- Gateway is the remote command broker; cloud never bypasses device safety validation.

### Acceptance criteria

- Gateway setup reports each stage separately: phone→gateway, gateway→Wi-Fi, gateway→cloud, gateway→unit.
- Failed Wi-Fi setup provides diagnostic reason without exposing password.

### UI prompt for Stitch

> Design a Wi-Fi gateway setup wizard: connect to gateway, select Wi-Fi network, enter password, verify gateway online, link rooms/units, and success. Include diagnostic cards for router unavailable, wrong password, weak signal, and unit not linked.

---

## F31 — Remote Control (Future)

**Priority:** Phase 4  
**Users:** Manager, authorized Operator

### Functional requirements

- Allow remote start/stop/time/temp only through authenticated gateway/cloud path.
- Show connection route: `Remote via Gateway`, `Local Bluetooth`, or `Last known`.
- Require stronger authentication/re-authentication for remote start.
- Enforce geofencing/site policy/time windows if commercial safety policy requires it.

### Acceptance criteria

- Remote command outcome follows same delivery model as BLE: requested → gateway accepted → unit accepted/rejected → state confirmed.
- Cloud/gateway outage never displays stale success.

### UI prompt for Stitch

> Create a remote-control variant of the Unit Detail screen. Show a “Remote via Wi-Fi Gateway” badge, gateway health, stronger confirmation for Start Session, command delivery timeline, and clear offline/last-known states.

---

## F32 — Scheduling (Future)

**Priority:** Phase 4  
**Users:** Manager

### Functional requirements

- Create per-unit schedules for warm-up/session windows with timezone/site policy.
- Resolve schedule conflicts, maintenance locks, fault locks, manual override, and daylight-saving behavior.
- Provide pause/resume/delete and audit history.
- Scheduling must execute at gateway/device layer, not only on phone.

### Acceptance criteria

- A scheduled start blocked by a safety condition records a failed schedule event and alerts Manager.
- Manual stop behavior against future schedule is explicitly configurable.

### UI prompt for Stitch

> Design a scheduling interface for commercial steam rooms: weekly calendar, time windows, target temperature, duration, repeat rules, conflict warning, upcoming schedule list, and “Skipped due to fault” history state.

---

## F33 — Multi-Site and Organization Dashboard (Future)

**Priority:** Phase 4  
**Users:** Admin, Manager

### Functional requirements

- Support organizations, sites, zones, units, user role assignments, and gateway health.
- Show fleet status and fault summary; deep link to a unit.
- Ensure tenant isolation so one resort cannot access another resort’s devices/data.

### Acceptance criteria

- Admin can switch site context and sees only authorized units.
- Any cross-site control attempt is denied and audited.

### UI prompt for Stitch

> Design a multi-site management dashboard for a resort chain. Include site switcher, total units, operating/heating/fault/offline counts, recent alerts, gateway health, and a list of sites with status summaries.

---

## F34 — Integrations and APIs (Future)

**Priority:** Optional  
**Users:** Admin/Integration engineer

### Functional requirements

- Provide documented REST/Webhook API only after security and tenancy model is stable.
- Candidate events: `unit.state_changed`, `fault.created`, `fault.cleared`, `maintenance.due`, `session.completed`.
- Candidate commands: controlled, scoped commands only; never unrestricted public start endpoints.

### Acceptance criteria

- API uses OAuth/client credentials, per-tenant scopes, rate limits, idempotency keys, and audit logs.
- Webhook signing and retry are implemented.

### UI prompt for Stitch

> Create an integrations settings screen with API key management, webhook endpoint list, event subscriptions, test webhook action, delivery history, and security warning cards.

---

## F35 — Analytics (Future)

**Priority:** Optional  
**Users:** Admin, Manager

### Functional requirements

- Track aggregated, privacy-conscious metrics: session count, duration, temperature bands, faults, downtime, maintenance frequency, gateway uptime.
- Separate product analytics from personally identifiable staff activity; disclose collection.

### Acceptance criteria

- Analytics can be disabled or configured per tenant where required.
- No BLE secrets or raw customer Wi-Fi credentials are ever sent to analytics.

### UI prompt for Stitch

> Design a commercial equipment analytics screen with KPIs for sessions, runtime, average duration, fault frequency, maintenance due, and uptime. Use charts only where useful and show date/site filters.

---

## F36 — Guest Mode (Future)

**Priority:** Optional  
**Users:** Guest

### Functional requirements

- QR/time-limited token links only to assigned room/unit.
- Restrict temperature/duration to safe site-approved range.
- No advanced settings, diagnostic data, user list, or other rooms.
- Automatically expires at checkout/session end.

### Acceptance criteria

- A guest token cannot discover or operate another unit.
- All guest commands are logged as Guest/room token source.

### UI prompt for Stitch

> Design a minimal hotel guest steam-room control page opened by QR code: room name, current status, simple temperature and duration controls within safe limits, Start/Stop, safety notice, and no account requirement.

---

## F37 — Accessibility and Localization

**Priority:** Must-have baseline; expand over time  
**Users:** All

### Functional requirements

- Support large text, screen readers, accessible touch targets, high contrast, color + icon/text status signals, and non-color-only fault differentiation.
- Design language-ready strings; start with English and plan Hindi/other languages based on market rollout.
- Use 24-hour / local time formatting where suitable; use metric defaults for India.

### Acceptance criteria

- Critical state is understandable without relying on color alone.
- Major controls meet platform touch-target guidance.
- All user-facing strings are externalized for localization.

### UI prompt for Stitch

> Apply an accessible design system for a steam-controller app: large high-contrast controls, 48dp-plus touch targets, status labels with icons and text, scalable typography, and clear error messages.

---

# 7. BLE Device Contract

## 7.1 Roles

- **Phone:** BLE Central / GATT Client.
- **Suprema+ controller:** BLE Peripheral / GATT Server.
- **Gateway (future):** BLE Central/Proxy and Wi-Fi client; may bridge controlled traffic only.

## 7.2 Services and characteristics

Use a product-owned 128-bit UUID base. Do not use example UUIDs below in production without creating a controlled UUID registry.

| Service / characteristic | Properties | Purpose |
|---|---|---|
| Device Information Service (standard) | Read | Manufacturer, model, serial, firmware, hardware revision. |
| Battery Service (standard, if relevant) | Read/Notify | Only if panel has meaningful backup battery value. |
| Suprema+ Control Service | Primary custom service | All control and telemetry. |
| `Command` characteristic | Write With Response | Command envelope from app to controller. |
| `Status` characteristic | Read + Indicate; Notify fallback | State, command results, periodic telemetry, faults. |
| `Configuration` characteristic | Read + Write With Response | Capability flags and authorized configuration values. |
| `History/Last Result` characteristic | Read | Resync after reconnect; latest command/event records. |
| `Provisioning` characteristic | Restricted | Claim/provisioning handshake; disabled outside service window. |
| DFU/OTA service (future) | Secure vendor service | Authenticated firmware update only. |

GATT supports commands, requests, responses, indications, notifications and confirmations. Prefer **indications** for safety-relevant command ACK/status because they are acknowledged; use notifications for noncritical high-rate telemetry if required. [web:56][web:59][web:60]

## 7.3 Mandatory command types

| Command | Roles | Required parameters |
|---|---|---|
| `GET_SNAPSHOT` | All authorized | None |
| `START_SESSION` | Operator+ | target temperature, duration, optional approved ambience value |
| `STOP_SESSION` | Operator+ | reason/source |
| `SET_TARGET_TEMP` | Operator+ by policy | target temperature |
| `SET_DURATION` | Operator+ by policy | duration |
| `SET_AMBIENCE_TEMP` | Manager+/policy | ambience temperature |
| `SET_COOLOFF_SECONDS` | Manager+ | seconds |
| `SET_DRAIN_MINUTES` | Manager+ | minutes |
| `SET_ALARM_POLICY` | Manager+/Technician | desired policy |
| `REQUEST_MANUAL_DRAIN` | Technician / Manager policy | confirmation token |
| `ACK_FAULT_VIEWED` | Operator+ | fault id |
| `CLEAR_FAULT` | Technician only, if device permits | fault id + authorization |
| `IDENTIFY` | Technician | identify duration/mode |
| `SET_BLE_RADIO` | Technician only | enabled/disabled + recovery confirmation |

## 7.4 Mandatory state and fault model

### State enum

```text
OFF
IDLE
HEATING
AT_TEMPERATURE
STEAMING
COOL_OFF
DRAINING
MAINTENANCE_LOCK
FAULT
EMERGENCY_LOCKOUT
UPDATING_FIRMWARE
UNKNOWN
```

### Common fault categories

```text
LOW_WATER
OVER_TEMPERATURE
TEMPERATURE_SENSOR_FAILURE
DRAIN_FAILURE
HEATER_FAILURE
COMMUNICATION_FAILURE
DOOR_OR_INTERLOCK_OPEN
MAINTENANCE_REQUIRED
POWER_FAULT
UNKNOWN_FAULT
```

Final fault codes, recovery policies, and which faults block operation must come from the embedded/hardware safety specification.

## 7.5 BLE reliability requirements

- Command must have both transport-level acknowledgement and application-level result.
- `Status` packet must echo `commandId` and/or `sequence` for command response correlation.
- Device retains the last N command outcomes (recommend at least 20) to support reconnect reconciliation.
- Device must reject replayed commands unless idempotency key returns same known outcome.
- Device status includes monotonic uptime/event counter to detect stale/out-of-order packets.
- Use checksum/CRC at application payload level if framing/transport design requires it.
- Use MTU negotiation but support a conservative payload size for platform compatibility.
- Define timeout values in firmware/app integration test plan; do not invent them in UI alone.

---

# 8. Bluetooth Mesh Requirements

## 8.1 Mesh architecture decision

| Installation | Recommended topology |
|---|---|
| One generator + one local panel + nearby phone | Point-to-point BLE GATT. |
| Several independently controlled nearby generators, phone enters each room/area | Point-to-point BLE with unique serial/claiming; Mesh optional. |
| Multiple fixed panels in a corridor / long commercial site / local relay coverage needed | Bluetooth Mesh for panel-node layer plus gateway or technician provisioner. |
| Resort-wide remote control / multi-site monitoring | Wi-Fi/Ethernet gateway + cloud; Mesh only for local panel/node connectivity if needed. |

## 8.2 Mesh minimum technical requirements

- SIG-compliant Bluetooth Mesh stack on supported hardware.
- Provisioner capability in technician app or dedicated commissioning app/gateway.
- Unique device UUID and immutable serial for every node.
- Provisioner-managed allocation of unique unicast address range; individual element addresses must be unique. [web:132][web:136]
- Network Keys, Application Keys, Device Keys, key-refresh procedure, and secure storage in gateway/app.
- Suprema+ vendor model/opcodes for generator controls and state reporting.
- Separate application keys/permissions for operational control vs technician commissioning where feasible.
- Fixed mapping database from physical room/panel to node UUID/unicast address/elements.
- Identify action and installer confirmation before final naming.
- Relay/proxy/friend features decided from power, topology, and coverage test; do not enable relay everywhere by default.
- Message TTL, retransmit, publish intervals, and rate limits tuned through on-site RF tests.
- Critical commands use **unicast destination** and application-level acknowledgement. Group address is allowed only for nonhazardous functions (e.g., status query, panel light test) unless a formal safety review approves otherwise.

## 8.3 Anti-interference and wrong-device protections

- Never target a device by Bluetooth name or RSSI alone.
- Use immutable serial + provisioned `unitId` + BLE identity / Mesh unicast address.
- Commission one node at a time in physical provisioning mode.
- Require `IDENTIFY` confirmation (panel blink/buzzer/display code) before assigning room name.
- Keep RF antenna away from metal enclosures, steam/water exposure, high-current relay wiring, and power-conversion noise; hardware team must perform range/RF validation in an installed steam-room environment.
- Implement command rate limiting and queue serialization; do not flood dense Mesh networks.
- Use encrypted BLE/Mesh traffic, role-bound keys, and key rotation / factory reset procedures.

---

# 9. Safety, Security, and Compliance Requirements

## Safety requirements

- Hardware/firmware owns all safety interlocks and must reject unsafe commands independently of mobile app.
- Local panel must remain functional if phone, BLE, Wi-Fi, gateway, cloud, or app is unavailable.
- Remote Start must be gated by hardware conditions such as water availability, temperature limits, drain state, maintenance lock, and configured interlocks.
- App must visibly state that remote control is not an emergency safety system.
- No automatic retry of START/STOP after ambiguous delivery without explicit device reconciliation.
- Require product/legal review of applicable electrical appliance, sauna/steam, hotel/gym, and regional safety obligations before commercial rollout.

## Security requirements

- BLE LE Secure Connections/bonding where available; prohibit default/shared PINs.
- Unique per-device identity and secrets provisioned at manufacturing; no cloned keys.
- Secure boot and signed firmware recommended for production electronics.
- Encrypted local storage for tokens and sensitive unit references.
- Role-based authorization enforced in both app and backend/device policy; UI restrictions alone are insufficient.
- Rate-limit failed pairing/authentication attempts.
- Audit command origin and result.
- Redact secrets from logs, crash reporting, analytics, support exports, and screenshots.

---

# 10. Data Model

## Core entities

| Entity | Key fields |
|---|---|
| User | id, name, email/mobile, role, organizationIds, lastLogin |
| Organization | id, name, plan, settings |
| Site | id, organizationId, name, address/timezone, policy |
| Unit | unitId, serial, model, hardwareRevision, firmwareVersion, capabilityFlags, siteId, roomName, BLE identity, Mesh address, gatewayId |
| UnitSnapshot | unitId, state, currentTemp, targetTemp, ambienceTemp, remainingSeconds, drain state, alarm state, faults, source, timestamp, deviceUptime |
| Command | commandId, unitId, sequence, type, payload, actorId, requestedAt, transportStatus, deviceResult, resultAt |
| Fault | id, unitId, code, severity, active, openedAt, clearedAt, detail |
| Preset | id, siteId/unitId, name, values, allowedRoles |
| MaintenanceRecord | id, unitId, type, dueAt, completedAt, technicianId, notes |
| MeshNode | nodeUuid, serial, unicastAddress, elements, groups, keysReference, provisionedAt |

---

# 11. Navigation Map

```text
Splash
 ├─ Sign In / Local Technician Mode
 ├─ Bluetooth Readiness
 └─ My Units
     ├─ Unit Detail
     │   ├─ Start Session
     │   ├─ Stop / Emergency Stop
     │   ├─ Temperature
     │   ├─ Duration
     │   ├─ Advanced Settings
     │   │   ├─ Ambience Temperature
     │   │   ├─ Cool-Off Timer
     │   │   ├─ Drain Time
     │   │   ├─ Alarm
     │   │   └─ Bluetooth Radio (Technician)
     │   ├─ Presets
     │   ├─ Diagnostics
     │   ├─ Maintenance
     │   └─ Activity History
     ├─ Add Unit / Scan / Claim
     ├─ Mesh Technician Mode (optional)
     ├─ Notifications
     └─ Profile / Settings / Help
```

---

# 12. UI Design System Brief for Google Stitch

## Product character

- **Brand feeling:** Premium industrial wellness; safe, calm, technically trustworthy.
- **Visual environment:** Steam/spa friendly, low-glare, legible in dim corridors and humid spaces.
- **Palette:** Deep charcoal/graphite base; warm off-white surfaces; teal/cyan for connected/active; amber for attention; red for faults/emergency; grey for offline/stale.
- **Typography:** Large numeric temperature/countdown; short labels; high contrast.
- **Controls:** Minimum 48dp touch targets; avoid tiny sliders for time/temperature; use steppers/dials plus direct numeric display.
- **Status:** Always pair color with icon and text. Never signal a fault by color alone.
- **Motion:** Subtle steam/heat animation only for live active state; respect reduced-motion setting.

## Core reusable components

- Unit card
- Connection/status chip
- Temperature gauge
- Countdown tile
- Stepper control
- Command progress banner
- State timeline
- Fault card
- Device/room identity pill (room + serial suffix)
- Confirm action bottom sheet
- Technician access lock card
- Empty/offline/error/retry screen

## Global Stitch prompt

> Build an iOS and Android responsive mobile UI kit for “Suprema+,” a premium commercial steam-generator controller for gyms and resorts. Visual style: dark charcoal, steam-grey, warm white, teal/cyan active accents, amber warnings, red faults. Prioritize safety, clarity, large touch targets, high contrast, and live equipment status. Include reusable cards, status chips, temperature gauge, countdown, steppers, confirmation bottom sheets, fault alerts, command-progress states, connection banners, empty states, and technician-only locked settings. Design for one-handed staff operation in a humid/dim wellness environment.

---

# 13. Test Plan and Acceptance Gates

## Functional tests

- Pair/claim a new unit; prevent claim without physical confirmation.
- Start/stop session; verify command ACK and actual device state sequence.
- Set each supported parameter; validate range and role permissions.
- Reconnect during heating, steaming, cool-off, draining, and fault.
- Test two or more nearby units; ensure commands reach only selected serial/unicast address.
- Test fault injection from firmware simulator: low water, over-temp, sensor error, drain failure, maintenance lock.
- Verify local panel actions update app status.

## BLE/RF tests

- Test in lab and installed steam-room conditions: metal cabinet, closed door, active electrical loads, Wi-Fi traffic, multiple devices.
- Measure scan discovery, connect time, command acknowledgement time, telemetry freshness, reconnect time, and packet failure behavior.
- Test iOS and Android across representative device models and OS versions.
- Validate background limitations honestly; never promise continuous BLE service where OS will suspend it.

## Mesh tests (if enabled)

- Provision/unprovision/reprovision nodes; reject duplicate address allocation.
- Confirm physical identify for every room mapping.
- Test unicast control, noncritical group query, relay/proxy coverage, key refresh, and node replacement.
- Test network congestion/rate limiting and ensure no wrong-unit command execution.

## Security tests

- Unauthorized phone attempts scan/claim/control.
- Lost phone/logout/role removal.
- Replay a prior command payload.
- Manipulated command parameter beyond limit.
- BLE key/provisioning secret leakage review.

## Release gates

- No unresolved safety-critical defects.
- All core commands show end-to-end ACK/reconciliation in both platforms.
- Field pilot completes with target command-confirmation rate and no wrong-unit control incidents.
- App Store/Play policy, privacy policy, support process, and ownership of source code/signing accounts confirmed.

---

# 14. Open Decisions Before Development

1. Final hardware capabilities and sensor list: actual room temperature sensor, ambience sensor, water level, drain feedback, heater/relay feedback, panel display/buzzer.
2. Product safety policy: permitted temperature/time ranges; who may alter drain/cool-off/alarm controls; remote stop/emergency behavior.
3. BLE silicon/firmware stack: nRF52-class vs ESP32-class; certification and RF/antenna approach.
4. Is Bluetooth Mesh truly needed for first installation topology, or should it stay Phase 3/4?
5. Is V1 local-only BLE, or does it require Wi-Fi gateway at launch?
6. Account model: local technician credentials only vs cloud-backed user/site/role management.
7. Commercial deployment model: public app stores, private B2B distribution, or both.
8. Data retention, support SLA, warranty process, and ownership of ongoing firmware/app maintenance.
9. Which advanced settings are exposed in the operator app versus local panel/service tool only?
10. Exact UI wording for “ambience temperature,” alarm, and drain behavior after confirmation from the control-system engineer.

---

# 15. Recommended First Build Order

1. Finalize hardware safety specification, state model, fault model, and BLE GATT contract.
2. Build firmware simulator/mock GATT peripheral for parallel app development.
3. Implement F03–F05 (permission, scan, secure claim).
4. Implement F06–F11 (dashboard, detail, start/stop, temperature, duration).
5. Implement F19–F21 (ACK/status/reconnect) before adding advanced UI.
6. Implement F12–F16 advanced parameters based on confirmed hardware capability.
7. Implement F22, F24, F28, F29 (diagnostics, history, help, settings).
8. Pilot with actual units and harden RF/recovery flows.
9. Add F17, F23, F25–F27 as commercial/technician enhancements.
10. Add Wi-Fi/gateway features F30–F35 only after local BLE control is field-proven.

---

## Source Notes

- Android BLE permissions and platform guidance: [web:130][web:131]
- iOS background BLE considerations and service-filtered scanning: [web:133][web:143][web:144]
- Bluetooth GATT messages, indications and notifications: [web:56][web:59][web:60]
- Bluetooth Mesh addressing/provisioning: [web:132][web:135][web:136]
- Competitor/context sources: [web:5][web:7][web:9][web:10][web:12][web:15][web:45][web:46]

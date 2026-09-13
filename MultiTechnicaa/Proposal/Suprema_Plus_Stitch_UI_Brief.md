# Suprema+ — Google Stitch UI Brief

Use this document as the single source of truth for generating all UI screens and components in Google Stitch. It contains only the global design prompt and the per-feature UI prompts extracted from the PRD.

---

## Global Design Prompt for Stitch

> Build an iOS and Android responsive mobile UI kit for **Suprema+**, a premium commercial steam-generator controller for gyms and resorts. Visual style: **dark charcoal, steam-grey, warm white, teal/cyan active accents, amber warnings, red faults**. Prioritize **safety, clarity, large touch targets, high contrast**, and **live equipment status**. Include reusable cards, status chips, temperature gauge, countdown, steppers, confirmation bottom sheets, fault alerts, command-progress states, connection banners, empty states, and technician-only locked settings. Design for **one-handed staff operation** in a **humid/dim wellness environment**.

**Product character**

- Brand feeling: Premium industrial wellness; safe, calm, technically trustworthy.
- Visual environment: Steam/spa friendly, low-glare, legible in dim corridors and humid spaces.
- Palette: Deep charcoal/graphite base; warm off-white surfaces; teal/cyan for connected/active; amber for attention; red for faults/emergency; grey for offline/stale.
- Typography: Large numeric temperature/countdown; short labels; high contrast.
- Controls: Minimum 48dp touch targets; avoid tiny sliders for time/temperature; use steppers/dials plus direct numeric display.
- Status: Always pair color with icon and text. Never signal a fault by color alone.
- Motion: Subtle steam/heat animation only for live active state; respect reduced-motion setting.

**Core reusable components**

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

---

## Per-Feature UI Prompts

### F01 — App Launch and Session

> Create a mobile app launch and sign-in flow for a premium steam-generator controller. Use dark charcoal, warm steam-grey, white, and cyan/teal status accents. Create Splash, Sign In, Forgot Password, and My Units entry states. Keep controls large, industrial-premium, accessible, and suitable for wet-spa environments.

---

### F02 — Authentication and Role Access

> Design role-aware account screens: profile card with role badge, team members list, invite operator form, and a locked Advanced Settings row that explains manager/technician access is required.

---

### F03 — Bluetooth Permission and Readiness

> Create a Bluetooth readiness screen with four states: Bluetooth off, permission required, permission denied, and ready to scan. Use an illustration of a phone connecting to a steam controller, concise explanatory text, primary "Enable Bluetooth" / "Allow Access" buttons, and a secondary "Open Settings" button.

---

### F04 — Discover Nearby Suprema+ Units

> Design a "Nearby Suprema+ Units" scan screen. Include a scanning animation, cards with room name or "Unassigned unit," device serial suffix, signal bars, "Already Added" state, and a "Scan QR" action. Add a safety note: "Stand near the unit before pairing."

---

### F05 — Unit Claiming and Secure Pairing

> Create a 4-step "Add Suprema+ Unit" wizard: 1) select/scan unit, 2) confirm physical unit using QR or 6-digit code, 3) name room and assign site, 4) success with "Test Connection." Use a horizontal progress indicator and an industrial-premium visual style.

---

### F06 — My Units Dashboard

> Design a premium "My Units" dashboard for a commercial steam generator app. Create unit cards for: Heating, Steaming, Draining, Disconnected, and Fault. Each card should show room name, live temperature, target temperature, remaining time, connection icon, colored status chip, and last-updated time. Include filters and search.

---

### F07 — Unit Detail and Live Status

> Create a "Steam Room 01" detail screen. Top: large current temperature gauge, target temperature, state chip, and countdown. Middle: Start/Stop primary control and session settings. Bottom: live status timeline, drain/water/alarm indicators, last confirmed timestamp, and diagnostic link. Create variants for Idle, Heating, Steaming, Draining, and Fault.

---

### F08 — Start Steam Session

> Design a Start Steam Session bottom sheet for "Steam Room 01." Include a temperature stepper, duration stepper, safety range hint, compact summary, and primary "Start Session" button. Make a progress state sequence: Sending command, Device accepted, Heating started. Include an error state for safety interlock or low-water fault.

---

### F09 — Stop Steam Session / Emergency Stop

> Create Stop Session confirmation and Emergency Stop screens. Normal stop uses amber styling and explains cool-off/drain. Emergency Stop uses red styling, hold-to-confirm interaction, and a warning to use physical emergency controls for immediate danger.

---

### F10 — Temperature Control

> Design a temperature settings screen with a large circular dial or plus/minus stepper, current room temperature, allowed range, target label, safe-range helper text, and an Apply button. Include pending, applied, and rejected command states.

---

### F11 — Session Duration Control

> Create a session duration screen with 5-minute quick chips, a minute stepper, maximum-duration hint, and a live countdown variant for an active session. Include a clear choice between "Apply to current session" and "Save as default."

---

### F12 — Ambience Temperature

> Create an advanced ambience-temperature setting card. Show an explanation tooltip, current value, allowed range, a stepper, and a compatibility-empty state reading "Not available on this Suprema+ unit."

---

### F13 — Cool-Off Timer Before Drain

> Design a technician-only cool-off timer setting with a seconds stepper, visual process strip (Steam → Cool-Off → Drain → Off), safety warning, and Apply confirmation.

---

### F14 — Water Drain Time

> Create a drain configuration and live-drain screen. Include drain duration setting, current drain state, remaining minutes, a technician-only "Start Manual Drain" action, and a safety lock message preventing a steam session during drainage.

---

### F15 — Alarm Enable/Disable and Fault Handling

> Design an alarm and fault UI. Include normal status, warning, critical fault, and acknowledged states. Use a fault detail drawer with error code, what happened, what to do now, whether operation is blocked, and "Contact Service" action.

---

### F16 — Bluetooth Radio Enable/Disable

> Create a technician-only Bluetooth radio control screen with a prominent warning, device recovery steps, a physical-panel confirmation checklist, technician PIN field, and a hold-to-confirm disable action.

---

### F17 — Presets

> Design a Presets screen with cards for Quick Warm-Up, Standard, and custom presets. Each card shows temperature, duration, and optional ambience settings. Include "Run," "Edit," and "Create Preset" interactions with role-aware locks.

---

### F18 — Multi-Unit Management

> Create a multi-unit commercial dashboard with a list/map-style selector for Steam Room 01–10. Include room labels, serial suffixes, status colors, search, filters, connection badges, and a detail drawer. Do not include bulk start controls; use safe individual actions.

---

### F19 — Command Delivery, ACK, Retry, and Status Reconciliation

> Create command-feedback components for a connected hardware app: inline progress "Sending…", green "Device accepted", blue "Heating started", orange "Command outcome unknown—reconnecting", and red "Rejected: Low water." Include a compact command activity log with timestamps.

---

### F20 — Live Telemetry Subscription

> Design a live telemetry component with current temperature, target, time remaining, state timeline, last update age, connection quality, and a stale-data warning state. Make it readable from arm's length with large numbers.

---

### F21 — Connection Management and Offline Mode

> Create reusable connection banners and full-screen states for: Connecting, Connected, Weak signal, Reconnecting, Out of range, Bluetooth off, and Last known status. Keep primary actions contextual: Retry, Open Bluetooth Settings, or Return to Units.

---

### F22 — Diagnostics

> Create a diagnostics screen with sections: Device Identity, Connectivity, Current Status, Active Faults, Recent Faults, and Support. Use monospaced values for serial/version fields and a clear "Share Support Bundle" button.

---

### F23 — Maintenance and Service Reminders

> Design a maintenance screen with health score, runtime hours, service-due card, checklist, service history timeline, and a technician-only "Mark Service Complete" flow with notes.

---

### F24 — Activity and Audit History

> Create an activity history screen for a steam unit. Include timeline rows for Start requested, Device accepted, Heating, Fault, Drain started, and Session completed. Add filters, date range, actor, status icons, and a command detail sheet.

---

### F25 — BLE Mesh Provisioning and Node Management

> Design a technician-only Bluetooth Mesh provisioning flow: scan unprovisioned nodes, identify node by blinking panel, allocate address, select site and room, configure group, test command, and complete. Include a topology list with node serial, room name, unicast address, signal/relay health, and provisioning status.

---

### F26 — Firmware Compatibility and OTA Updates

> Create a firmware update screen for a connected steam generator: current version, available version, release notes summary, pre-update safety checklist, progress, do-not-close warning, success, and recovery/contact-support states.

---

### F27 — Notifications

> Design notification preferences for a multi-unit steam system. Include toggles for Faults, Session Complete, Maintenance Due, and Unit Offline; show whether each works locally only or requires Wi-Fi gateway.

---

### F28 — Help, Safety, and Support

> Create a Help & Safety center for Suprema+. Include tiles for Pair a Unit, Connection Problems, Understanding Faults, Maintenance, and Emergency Guidance. Use clear warning cards and a "Contact Support" action with unit details preview.

---

### F29 — Settings, Preferences, and Data Privacy

> Design a Settings screen with sections: Account, App Preferences, Connected Units, Notifications, Privacy & Data, Help, and About. Include role-aware Advanced/Technician Settings with lock icons.

---

### F30 — Wi-Fi Gateway Setup (Future)

> Design a Wi-Fi gateway setup wizard: connect to gateway, select Wi-Fi network, enter password, verify gateway online, link rooms/units, and success. Include diagnostic cards for router unavailable, wrong password, weak signal, and unit not linked.

---

### F31 — Remote Control (Future)

> Create a remote-control variant of the Unit Detail screen. Show a "Remote via Wi-Fi Gateway" badge, gateway health, stronger confirmation for Start Session, command delivery timeline, and clear offline/last-known states.

---

### F32 — Scheduling (Future)

> Design a scheduling interface for commercial steam rooms: weekly calendar, time windows, target temperature, duration, repeat rules, conflict warning, upcoming schedule list, and "Skipped due to fault" history state.

---

### F33 — Multi-Site and Organization Dashboard (Future)

> Design a multi-site management dashboard for a resort chain. Include site switcher, total units, operating/heating/fault/offline counts, recent alerts, gateway health, and a list of sites with status summaries.

---

### F34 — Integrations and APIs (Future)

> Create an integrations settings screen with API key management, webhook endpoint list, event subscriptions, test webhook action, delivery history, and security warning cards.

---

### F35 — Analytics (Future)

> Design a commercial equipment analytics screen with KPIs for sessions, runtime, average duration, fault frequency, maintenance due, and uptime. Use charts only where useful and show date/site filters.

---

### F36 — Guest Mode (Future)

> Design a minimal hotel guest steam-room control page opened by QR code: room name, current status, simple temperature and duration controls within safe limits, Start/Stop, safety notice, and no account requirement.

---

### F37 — Accessibility and Localization

> Apply an accessible design system for a steam-controller app: large high-contrast controls, 48dp-plus touch targets, status labels with icons and text, scalable typography, and clear error messages.

---

## How to Use This Brief in Stitch

1. Start a new project with the **Global Design Prompt** as the base style.
2. Generate core components first (unit card, status chip, temperature gauge, countdown, stepper, command progress, state timeline, fault card, connection banners).
3. Then generate screens feature-by-feature using the per-feature prompts.
4. Keep the same design tokens (colors, type scale, spacing, radius) across all screens.
5. Export component variants for: Idle, Heating, Steaming, Draining, Fault, Disconnected, and Last Known states.

This brief is intentionally UI-only; refer to the main PRD for BLE contract, safety rules, and acceptance criteria.

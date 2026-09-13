# Suprema+ — GATT Explained (Developer Reference)

**Companion to:** Suprema+ Mobile App PRD and Flutter MVP Technical Appendix  
**Audience:** App developers, embedded engineers, and technical stakeholders  
**Purpose:** Explain GATT (Generic Attribute Profile) in the context of Suprema+ BLE communication

---

## 1. What is GATT?

**GATT (Generic Attribute Profile)** is the communication protocol that defines **how BLE devices exchange data** over a Bluetooth connection. Think of it as the "language" and "data structure" that your Flutter app uses to talk to the Suprema+ steam generator.

---

## 2. Simple Analogy

| GATT Concept | Restaurant Analogy | Suprema+ Example |
|--------------|-------------------|------------------|
| **GATT Server** | The restaurant | Suprema+ steam generator controller |
| **GATT Client** | The customer | Your Flutter app on phone |
| **Service** | A menu category (e.g., "Main Dishes") | Device Information, Suprema+ Control Service |
| **Characteristic** | A specific menu item (e.g., "Steam Session") | Command, Status, Temperature |
| **Descriptor** | Details about the item (e.g., "Spicy") | Temperature range, units |
| **Read** | Asking "What's the current temperature?" | Read current temperature value |
| **Write** | Ordering "Set temperature to 45�C" | Send START_SESSION command |
| **Notify/Indicate** | Waiter bringing updates without asking | Device pushes state changes to app |

---

## 3. GATT Hierarchy

```text
GATT Server (Suprema+ Device)
│
├── Service: Device Information (standard, UUID 0x180A)
│   ├── Characteristic: Manufacturer Name (read-only)
│   ├── Characteristic: Model Number (read-only)
│   └── Characteristic: Serial Number (read-only)
│
├── Service: Battery Service (standard, UUID 0x180F, if applicable)
│   └── Characteristic: Battery Level (read + notify)
│
└── Service: Suprema+ Control Service (custom, UUID 7D61A000-...)
    ├── Characteristic: Command (write with response)
    ├── Characteristic: Status (read + indicate/notify)
    ├── Characteristic: Configuration (read + write)
    └── Characteristic: Snapshot (read)
```

---

## 4. Key GATT Concepts

### 4.1 GATT Server vs GATT Client

| Role | Suprema+ Context |
|------|------------------|
| **GATT Server** | The steam generator controller (BLE peripheral) |
| **GATT Client** | Your Flutter app (BLE central) |

**Important:** The "server" is the **device**, not the cloud. Your phone is the "client" even though it initiates connections.

---

### 4.2 Services

A **Service** groups related functionality. Each service has a unique 16-bit or 128-bit UUID.

**Examples:**

| Service | UUID | Type | Purpose |
|---------|------|------|---------|
| Device Information | `0x180A` | Standard | Read manufacturer, model, serial |
| Battery Service | `0x180F` | Standard | Read battery level (if applicable) |
| Suprema+ Control Service | `7D61A000-6C42-4EEA-9D0A-000000000001` | Custom | All Suprema+ control and telemetry |

---

### 4.3 Characteristics

A **Characteristic** is a single data point within a service. This is where actual data lives.

**Properties:**

| Property | What It Means | Suprema+ Example |
|----------|---------------|------------------|
| **Read** | Client can read the value | Read current temperature |
| **Write** | Client can write a value | Set target temperature |
| **Write Without Response** | Write without waiting for ACK | Send frequent telemetry (not recommended for commands) |
| **Write With Response** | Write and wait for ATT-level ACK | Send start/stop commands |
| **Notify** | Server pushes updates (unacknowledged) | Stream temperature updates |
| **Indicate** | Server pushes updates (acknowledged) | Send command results (safer) |

---

### 4.4 Descriptors

A **Descriptor** provides metadata about a characteristic.

**Example:**

- Characteristic: `Temperature`
- Descriptor: `Temperature Range: 30�C - 60�C, Units: Celsius`

---

## 5. GATT Operations in Suprema+

### 5.1 Discovery (First Connection)

```dart
// Flutter app discovers services and characteristics
await device.discoverServices();

// Result: App learns the device has:
// - Device Information Service (0x180A)
// - Suprema+ Control Service (7D61A000-...)
//   - Command Characteristic (7D61A001-...)
//   - Status Characteristic (7D61A002-...)
//   - Configuration Characteristic (7D61A003-...)
//   - Snapshot Characteristic (7D61A004-...)
```

**When:** Immediately after connection, before any read/write/subscribe operations.

---

### 5.2 Read Operation

```dart
// App reads current temperature from Status characteristic
final statusCharacteristic = service.getCharacteristic(STATUS_UUID);
final value = await statusCharacteristic.read();

// Device responds with bytes: [0x2D, 0x01] = 301 (30.1�C)
```

**Use cases:**

- Read device serial number
- Read firmware version
- Read current state snapshot
- Read configuration values

---

### 5.3 Write With Response (Commands)

```dart
// App sends START_SESSION command
final commandCharacteristic = service.getCharacteristic(COMMAND_UUID);
await commandCharacteristic.write([0x01, 0x02, 0x00, 0x01, ...]);

// Device responds with ATT-level ACK (transport confirmed)
// Then sends application-level result via Status indication
```

**Use cases:**

- Start/stop steam session
- Set target temperature
- Set session duration
- Claim/provision device

---

### 5.4 Subscribe to Indications/Notifications (Status Updates)

```dart
// App subscribes to Status characteristic
await statusCharacteristic.setNotifyValue(true);

// Device pushes updates automatically:
// [0x03, 0x01, 0x2D, 0x01, ...] = STEAMING, 30.1�C
statusCharacteristic.onValueReceived.listen((value) {
  // Update UI with new temperature/state
});
```

**Use cases:**

- Receive live temperature updates
- Receive state changes (HEATING → STEAMING → COOLING)
- Receive command results (ACCEPTED/REJECTED)
- Receive fault alerts

---

## 6. Suprema+ GATT Profile

Your PRD defines this GATT structure:

| Service/Characteristic | UUID (Example) | Properties | Purpose |
|------------------------|----------------|------------|---------|
| **Suprema+ Control Service** | `7D61A000-6C42-4EEA-9D0A-000000000001` | Primary Service | Groups all control functions |
| **Command** | `7D61A001-6C42-4EEA-9D0A-000000000001` | Write With Response | Send start/stop/set commands |
| **Status** | `7D61A002-6C42-4EEA-9D0A-000000000001` | Read + Indicate (Notify optional) | Receive state, telemetry, command results |
| **Configuration** | `7D61A003-6C42-4EEA-9D0A-000000000001` | Read + Write With Response | Read/write device settings |
| **Snapshot / Last Result** | `7D61A004-6C42-4EEA-9D0A-000000000001` | Read | Get full device state snapshot |
| **Claim / Provisioning** | `7D61A005-6C42-4EEA-9D0A-000000000001` | Write With Response (restricted) | Claim/provision device |

---

## 7. Critical GATT Rules for Suprema+

### 7.1 Never Trust ATT Write Success Alone

```dart
// ❌ WRONG: Assuming success from write response
await commandCharacteristic.write(commandBytes);
showSuccess("Steam started!"); // DANGEROUS!

// ✅ CORRECT: Wait for application-level ACK
await commandCharacteristic.write(commandBytes);
final result = await statusStream.firstWhere(
  (s) => s.commandToken == commandToken && s.sequence == sequence
);
if (result.result == CommandResult.accepted) {
  showSuccess("Steam started!");
} else {
  showError("Rejected: ${result.faultCode}");
}
```

**Why:** ATT write success only means the **transport layer** accepted the packet. The device firmware might reject the command due to safety interlocks, low water, over-temperature, etc.

---

### 7.2 Use Indications for Safety-Critical Updates

| Mechanism | Acknowledged? | Use For |
|-----------|---------------|---------|
| **Notification** | ❌ No | High-frequency, non-critical telemetry (e.g., temperature every 5s) |
| **Indication** | ✅ Yes | Command results, state changes, faults (safety-critical) |

**Why:** Indications guarantee the app received the update. Notifications can be lost without the app knowing.

**GATT specification:** Indications require the client to send a confirmation back to the server; notifications do not. [web:56][web:59][web:60]

---

### 7.3 Always Discover Services First

```dart
// Must do this before any read/write/subscribe
await device.discoverServices();

// Then find your service
final service = device.services.firstWhere(
  (s) => s.serviceUuid == SUPREMA_SERVICE_UUID
);
```

**Why:** The app doesn't know what characteristics exist until it discovers them. Attempting to access a characteristic before discovery will fail.

---

### 7.4 Handle Disconnections Gracefully

```dart
// On disconnect:
// 1. Mark all data as "Last known at <timestamp>"
// 2. Stop command queue
// 3. Attempt reconnect (exponential backoff)
// 4. On reconnect: re-discover services, re-enable indications, read snapshot
```

**Why:** BLE connections are fragile. The app must handle disconnects without losing state or sending duplicate commands.

---

### 7.5 Match Command Results by Sequence and Token

```dart
// Command sent:
// sequence: 1042, commandToken: 0xABCD1234

// Wait for matching result:
final result = await statusStream.firstWhere(
  (s) => s.sequence == 1042 && s.commandToken == 0xABCD1234
);
```

**Why:** Multiple commands may be in flight (especially if the user taps quickly). Matching by sequence/token ensures the result corresponds to the correct command.

---

## 8. GATT State Machine for Suprema+

```text
┌─────────────────────────────────────────────────────────────┐
│                    GATT Connection Lifecycle                │
└─────────────────────────────────────────────────────────────┘

1. Scan for Suprema+ devices (filter by service UUID)
   ↓
2. Connect to selected device
   ↓
3. Discover services and characteristics
   ↓
4. Read Device Info (serial, model, firmware)
   ↓
5. Subscribe to Status indications
   ↓
6. Read initial Snapshot
   ↓
7. Send commands (Write With Response)
   ↓
8. Receive command results via Status indications
   ↓
9. Receive state updates via Status indications
   ↓
10. On disconnect: mark data stale, attempt reconnect
   ↓
11. On reconnect: re-discover, re-subscribe, read snapshot
```

---

## 9. GATT in Flutter Code

### 9.1 BLE Gateway Abstraction

```dart
// lib/data/ble/ble_gateway.dart
abstract interface class BleGateway {
  Stream<List<DiscoveredUnit>> scanSupremaUnits();
  Future<void> stopScan();
  Future<void> connect(String platformId);
  Future<void> disconnect();
  Stream<bool> get connectionStates;
  Stream<UnitSnapshot> get statusStream;
  Future<UnitSnapshot> readSnapshot();
  Future<void> sendCommand(SupremaCommand command);
  Future<int> requestMtu(int preferredMtu);
}
```

### 9.2 Protocol Codec

```dart
// lib/data/ble/ble_protocol_codec.dart
class SupremaProtocolCodec {
  List<int> encodeCommand(SupremaCommand command) {
    // Build binary frame with CRC
  }

  UnitSnapshot decodeSnapshot({required String unitId, required List<int> bytes}) {
    // Parse binary frame, verify CRC, return snapshot
  }
}
```

### 9.3 Command Coordinator

```dart
// lib/domain/repositories/command_repository.dart
class CommandRepository {
  Future<CommandResult> sendCommand(SupremaCommand command) async {
    // 1. Persist command as REQUESTED
    // 2. Write with response
    // 3. Wait for matching indication (sequence + commandToken)
    // 4. Return ACCEPTED/REJECTED/FAILED
  }
}
```

---

## 10. GATT Testing Checklist

| Test | Android | iOS | Pass/Fail |
|------|---------|-----|-----------|
| Scan discovers Suprema+ service | ☐ | ☐ | |
| Connect and discover services | ☐ | ☐ | |
| Read Device Info characteristics | ☐ | ☐ | |
| Subscribe to Status indications | ☐ | ☐ | |
| Send START_SESSION command | ☐ | ☐ | |
| Receive ACCEPTED result | ☐ | ☐ | |
| Receive state update (HEATING → STEAMING) | ☐ | ☐ | |
| Handle disconnect and reconnect | ☐ | ☐ | |
| Handle command rejection (e.g., LOW_WATER) | ☐ | ☐ | |
| Handle malformed packet (CRC mismatch) | ☐ | ☐ | |
| Handle duplicate result (same sequence/token) | ☐ | ☐ | |
| Handle timeout (no result within 8s) | ☐ | ☐ | |

---

## 11. GATT Summary for Suprema+

| Question | Answer |
|----------|--------|
| **What is GATT?** | The protocol for BLE data exchange |
| **Who is the server?** | Suprema+ steam generator |
| **Who is the client?** | Your Flutter app |
| **What is a service?** | A group of related characteristics |
| **What is a characteristic?** | A single data point (temperature, command, state) |
| **How do you send commands?** | Write With Response to Command characteristic |
| **How do you receive status?** | Subscribe to Status characteristic with Indications |
| **What's the most important rule?** | ATT write success ≠ command success; wait for application ACK |
| **What indicates safety-critical data?** | Use Indications (acknowledged), not Notifications (unacknowledged) |
| **When do you discover services?** | Immediately after connection, before any read/write/subscribe |

---

## 12. References

- **Bluetooth SIG GATT Specification**: [Official GATT docs](https://www.bluetooth.com/specifications/specs/generic-attribute-profile/)
- **GATT Messages**: Commands, requests, responses, indications, notifications, confirmations [web:56][web:57][web:58]
- **Indications vs Notifications**: Indications are acknowledged, notifications are not [web:59][web:60][web:61][web:62]
- **Flutter BLE Guide**: [flutter_blue_plus documentation](https://pub.dev/packages/flutter_blue_plus)
- **Your PRD Section 7**: Complete GATT contract for Suprema+

---

**Bottom line:** GATT is the "language" your app uses to control the steam generator. Your Flutter app (GATT Client) reads/writes/subscribes to characteristics on the Suprema+ device (GATT Server) to send commands and receive status updates. Always wait for application-level ACK, not just transport-level ACK.

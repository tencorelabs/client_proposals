# Suprema+ — Flutter MVP Technical Appendix and 4-Week Delivery Plan

**Companion to:** Suprema+ Mobile App PRD  
**Scope:** Android + iOS BLE-only pilot app, delivered in 4 weeks  
**Primary developer:** Senior Android developer using Flutter  
**Architecture decision:** Flutter for the 4-week MVP; defer BLE Mesh, Wi-Fi gateway/cloud, scheduling, and full multi-site features until the BLE core is proven in the field.

---

# 1. Scope Lock for a 4-Week MVP

## In scope

1. Bluetooth readiness and permission flow.
2. Scan only for Suprema+ BLE service UUID.
3. Connect to one selected Suprema+ unit at a time.
4. Claim/identify flow using device serial + QR code or panel confirmation code.
5. My Units list with locally registered units and last-known status.
6. Unit Detail: state, actual temperature, target temperature, duration/remaining time, connectivity.
7. Start Session, Stop Session, Set Target Temperature, Set Duration.
8. Device command lifecycle: transport write response + application ACK + state confirmation.
9. Status indications, reconnect, stale-data handling, and simple command history.
10. Basic diagnostic page: serial, model, firmware, RSSI, active fault, last update.
11. Android signed APK for pilot and iOS TestFlight build.

## Explicitly deferred

- Bluetooth Mesh provisioning/routing.
- Wi-Fi gateway, remote control, cloud account system, push notifications.
- Booking/PMS/CRM integrations.
- Schedules, multi-site dashboard, guest mode, OTA firmware update.
- Advanced parameter editing: ambience temperature, cool-off, drain time, alarm policy, Bluetooth radio; keep read-only/hidden until hardware behavior and safety rules are approved.
- Public store release if the pilot hardware/firmware is not stable.

## MVP success criteria

- A staff user can connect to the right nearby unit, start/stop it, set time/temperature, and see confirmed device status on both Android and iOS.
- Every control operation has an observable result: accepted, rejected with reason, or unknown/reconnecting.
- No command is sent to the wrong claimed unit during pilot testing.
- Local hardware controls and safety interlocks remain authoritative.

---

# 2. Selected Technical Stack

## Application stack

| Area | Decision | Notes |
|---|---|---|
| Framework | Flutter stable channel, pin exact version in repository | Use Flutter for speed and one UI codebase. |
| Language | Dart, current stable SDK bundled with pinned Flutter SDK | Use strict linting and immutable domain models. |
| BLE | `flutter_blue_plus` | Supports Android/iOS BLE scan, connection, read/write, subscriptions, MTU controls; check package changelog before pinning. [web:160][web:162][web:166] |
| State management | `flutter_riverpod` | Providers for scan, selected unit, connection, telemetry, commands, and repositories. |
| Routing | `go_router` | Declarative navigation and deep-link readiness. |
| Models | `freezed` + `json_serializable` | Immutable models and safe serialization. |
| Secure values | `flutter_secure_storage` | Store app secrets, local authorization token, and opaque device references—not BLE/Mesh raw keys in plain storage. |
| Local DB | `drift` + SQLite | Persist units, snapshots, commands, diagnostics, and local activity timeline. |
| Logging | `logger` plus redacted file logger | Never log credentials, pairing keys, Wi-Fi credentials, or raw secrets. |
| Crash reporting | Optional Sentry/Firebase Crashlytics after consent review | Keep disabled in early hardware lab build if data policy is undecided. |
| Testing | `flutter_test`, `mocktail`, `integration_test` | Include a fake BLE gateway for deterministic test flows. |
| CI | GitHub Actions: Android first; macOS runner for iOS | iOS build/signing needs macOS/Xcode. |

## Recommended initial dependency versions

Do not blindly hard-code versions from an old document. At project creation, run `flutter pub add` and commit the generated `pubspec.lock`; pin only after first known-good iOS and Android build.

```yaml
environment:
  sdk: ">=3.0.0 <4.0.0"

dependencies:
  flutter:
    sdk: flutter
  flutter_blue_plus: ^2.1.0
  flutter_riverpod: ^2.6.1
  go_router: ^14.8.1
  freezed_annotation: ^2.4.4
  json_annotation: ^4.9.0
  flutter_secure_storage: ^9.2.4
  drift: ^2.26.0
  sqlite3_flutter_libs: ^0.5.30
  path_provider: ^2.1.5
  logger: ^2.5.0
  uuid: ^4.5.1

dev_dependencies:
  flutter_test:
    sdk: flutter
  integration_test:
    sdk: flutter
  flutter_lints: ^5.0.0
  build_runner: ^2.4.15
  freezed: ^2.5.8
  json_serializable: ^6.9.4
  drift_dev: ^2.26.0
  mocktail: ^1.0.4
```

The exact versions above are a starting point, not an immutable contract. `flutter_blue_plus` documents iOS permission configuration and BLE communication support; validate the selected version against your target Flutter/Xcode/Android Gradle Plugin versions before implementation. [web:160][web:162][web:166]

## Minimum target platforms

- **Android:** minSdk 26 (Android 8.0), target latest stable Android SDK at build time.
- **iOS:** iOS 15.0 minimum for a practical 2026 commercial baseline; reduce only if client device inventory requires it.
- **Required test devices:** Android Pixel, Samsung, Xiaomi/Redmi or OnePlus; iPhone 12/13-class and a current iPhone model.

---

# 3. Project Structure

```text
suprema_plus/
├── lib/
│   ├── main.dart
│   ├── app.dart
│   ├── core/
│   │   ├── config/
│   │   ├── errors/
│   │   ├── logging/
│   │   ├── theme/
│   │   ├── utils/
│   │   └── widgets/
│   ├── domain/
│   │   ├── models/
│   │   ├── repositories/
│   │   ├── usecases/
│   │   └── protocol/
│   ├── data/
│   │   ├── ble/
│   │   │   ├── ble_gateway.dart
│   │   │   ├── flutter_blue_gateway.dart
│   │   │   ├── ble_protocol_codec.dart
│   │   │   └── fake_ble_gateway.dart
│   │   ├── local/
│   │   └── repositories/
│   └── features/
│       ├── bluetooth_readiness/
│       ├── device_scan/
│       ├── unit_claim/
│       ├── units/
│       ├── unit_detail/
│       ├── session_control/
│       ├── diagnostics/
│       ├── command_history/
│       └── settings/
├── test/
├── integration_test/
├── android/
├── ios/
├── docs/
│   ├── protocol.md
│   ├── hardware-test-matrix.md
│   └── release-checklist.md
└── pubspec.yaml
```

## Dependency direction

```text
Presentation/UI → Feature Controller (Riverpod) → Use Case → Repository
Repository → BLE Gateway / Local Database
BLE Gateway → flutter_blue_plus
```

Do not call `FlutterBluePlus` directly from widgets. All BLE library calls must remain inside the BLE data layer so the simulator and later library replacement remain possible.

---

# 4. Android and iOS Configuration

## Android manifest

Android BLE APIs require manifest declarations, and Android 12+ uses runtime `BLUETOOTH_SCAN` and `BLUETOOTH_CONNECT` permissions. [web:130][web:131][web:165][web:166]

```xml
<!-- android/app/src/main/AndroidManifest.xml -->
<manifest xmlns:android="http://schemas.android.com/apk/res/android">
    <!-- Legacy permissions only for Android 11 and below -->
    <uses-permission
        android:name="android.permission.BLUETOOTH"
        android:maxSdkVersion="30" />
    <uses-permission
        android:name="android.permission.BLUETOOTH_ADMIN"
        android:maxSdkVersion="30" />
    <uses-permission
        android:name="android.permission.ACCESS_FINE_LOCATION"
        android:maxSdkVersion="30" />

    <!-- Android 12+ BLE permissions -->
    <uses-permission
        android:name="android.permission.BLUETOOTH_SCAN"
        android:usesPermissionFlags="neverForLocation" />
    <uses-permission android:name="android.permission.BLUETOOTH_CONNECT" />

    <uses-feature
        android:name="android.hardware.bluetooth_le"
        android:required="true" />

    <application
        android:label="Suprema+"
        android:name="${applicationName}"
        android:icon="@mipmap/ic_launcher">
        <!-- existing Flutter activity -->
    </application>
</manifest>
```

### Android rules

- Ask permission only after explaining why; do not request location if your scan is restricted to Suprema+ service UUID/manufacturer data and `neverForLocation` is valid for the final product claim.
- Use an Android foreground service only if a later requirement truly needs sustained background BLE connection/telemetry. Do not add one for the MVP without an explicit product reason.
- Test scan/connect/reconnect on Samsung, Pixel, and Xiaomi/OnePlus because OEM power management can differ.

## iOS Info.plist

`NSBluetoothAlwaysUsageDescription` is required for Bluetooth access. A background central declaration can maintain active connections and receive peripheral updates, but background scanning is constrained and should use known service UUID filters. [web:160][web:164][web:167]

```xml
<!-- ios/Runner/Info.plist -->
<key>NSBluetoothAlwaysUsageDescription</key>
<string>Suprema+ uses Bluetooth to securely find and control nearby steam generators.</string>

<!-- Include only if the MVP genuinely needs live status while backgrounded. -->
<key>UIBackgroundModes</key>
<array>
    <string>bluetooth-central</string>
</array>
```

### iOS rules

- Do not depend on BLE MAC addresses; identify claimed units through immutable serial number and app-level `unitId` read from GATT.
- Never depend on continuous background scanning. For iOS, foreground scan is the normal commissioning experience; reconnect only to known devices/services where OS policy allows.
- Implement state restoration only if background continuity is explicitly required and tested.
- Test with locked screen, app background/foreground, Bluetooth toggled off/on, and app force-killed.

---

# 5. Suprema+ BLE Protocol Contract (MVP)

## Before coding: hardware sign-off required

The app cannot safely interoperate with a controller until firmware provides the exact custom UUIDs, characteristic capabilities, payload format, byte order, device limits, supported states, errors, and timing behavior. The values below define an MVP protocol template; replace UUIDs and finalize the enums jointly with embedded engineering before code freeze.

## Roles

- Phone: BLE Central / GATT Client.
- Suprema+ controller: BLE Peripheral / GATT Server.
- Controller firmware: sole authority for interlocks, safe ranges, heating, cool-off, drain, and fault decisions.

## UUID registry (development placeholders)

| Item | Development UUID | Required GATT properties |
|---|---|---|
| Suprema+ Control Service | `7D61A000-6C42-4EEA-9D0A-000000000001` | Primary service |
| Command | `7D61A001-6C42-4EEA-9D0A-000000000001` | Write With Response |
| Status | `7D61A002-6C42-4EEA-9D0A-000000000001` | Read, Indicate; Notify optional for noncritical telemetry |
| Configuration | `7D61A003-6C42-4EEA-9D0A-000000000001` | Read, Write With Response |
| Snapshot / Last Result | `7D61A004-6C42-4EEA-9D0A-000000000001` | Read |
| Claim / Provisioning | `7D61A005-6C42-4EEA-9D0A-000000000001` | Write With Response, restricted |

GATT supports read/write/notification/indication mechanisms. Use **Write With Response** for command transport acknowledgement and **Indications** for safety-relevant application ACK/status because indications are confirmed, while notifications are not. [web:56][web:59][web:60]

## Protocol decision: binary V1

Use a compact binary protocol for V1 to avoid BLE payload-size issues. The decoder/encoder must be isolated in `ble_protocol_codec.dart`, allowing JSON/CBOR replacement later without changing UI/business logic.

### Global rules

- Byte order: **little-endian** for all multi-byte integers.
- Version: protocol `0x01`.
- `sequence`: unsigned 16-bit, incremented per unit by app; reset handling uses device uptime plus command ID.
- `commandToken`: unsigned 32-bit random value, generated by app; device retains outcomes for at least last 20 command tokens.
- Every status/command result includes sequence and command token when it relates to a command.
- CRC-16: use **CRC-16/CCITT-FALSE** over bytes from `protocolVersion` through final payload byte, excluding CRC itself.
- Maximum payload: must fit negotiated MTU; V1 command messages are designed under 20 bytes to work even with ATT MTU 23.

### Command frame

```text
Offset  Size  Field
0       1     protocolVersion = 0x01
1       1     messageType = 0x01 (COMMAND)
2       1     commandCode
3       1     flags
4       2     sequence (uint16 little-endian)
6       4     commandToken (uint32 little-endian)
10      N     command payload
10+N    2     crc16 (uint16 little-endian)
```

### Command codes

| Code | Command | Payload |
|---:|---|---|
| `0x01` | `GET_SNAPSHOT` | none |
| `0x02` | `START_SESSION` | targetTempDeciC: uint16; durationSeconds: uint16 |
| `0x03` | `STOP_SESSION` | stopReason: uint8 (`0x01` user, `0x02` manager, `0x03` safety workflow) |
| `0x04` | `SET_TARGET_TEMP` | targetTempDeciC: uint16 |
| `0x05` | `SET_DURATION` | durationSeconds: uint16 |
| `0x06` | `IDENTIFY_UNIT` | identifySeconds: uint8 |
| `0x07` | `GET_DIAGNOSTICS` | none |
| `0x08` | `CLAIM_BEGIN` | claimNonce: uint32 |
| `0x09` | `CLAIM_CONFIRM` | claimNonce: uint32; panelCode: uint16 |

## Status/result frame

```text
Offset  Size  Field
0       1     protocolVersion = 0x01
1       1     messageType = 0x02 (STATUS) or 0x03 (COMMAND_RESULT)
2       1     stateCode
3       1     resultCode
4       2     sequence (uint16)
6       4     commandToken (uint32)
10      2     currentTempDeciC (uint16)
12      2     targetTempDeciC (uint16)
14      2     remainingSeconds (uint16)
16      1     alarmFlags
17      1     faultCode
18      4     deviceUptimeSeconds (uint32)
22      2     crc16 (uint16)
```

### State codes

| Code | State |
|---:|---|
| `0x00` | OFF / IDLE |
| `0x01` | HEATING |
| `0x02` | AT_TEMPERATURE |
| `0x03` | STEAMING |
| `0x04` | COOL_OFF |
| `0x05` | DRAINING |
| `0x06` | MAINTENANCE_LOCK |
| `0x07` | FAULT |
| `0x08` | EMERGENCY_LOCKOUT |
| `0xFF` | UNKNOWN |

### Result codes

| Code | Meaning | App behavior |
|---:|---|---|
| `0x00` | NONE / periodic state | Update telemetry only |
| `0x01` | ACCEPTED | Show “Device accepted”; await state confirmation |
| `0x02` | REJECTED | Show fault/reason; do not retry automatically |
| `0x03` | EXECUTING | Show in-progress state |
| `0x04` | COMPLETED | Mark command complete |
| `0x05` | FAILED | Show reason; offer safe reconnection/help action |

### MVP fault codes

| Code | Fault | Start allowed? |
|---:|---|---|
| `0x00` | NONE | Yes |
| `0x01` | LOW_WATER | No |
| `0x02` | OVER_TEMPERATURE | No |
| `0x03` | TEMPERATURE_SENSOR_FAILURE | No |
| `0x04` | DRAIN_FAILURE | No |
| `0x05` | HEATER_FAILURE | No |
| `0x06` | MAINTENANCE_REQUIRED | Product-policy decision |
| `0x07` | COMMUNICATION_FAILURE | No until recovered |
| `0xFF` | UNKNOWN_FAULT | No; contact service |

## Required command lifecycle

```text
1. App validates UI input against latest device capabilities.
2. App writes command characteristic with response.
3. ATT write success = transport accepted only; UI shows “Sent to unit”.
4. Controller validates command against safety/interlock state.
5. Controller sends indicated COMMAND_RESULT with matching sequence + commandToken.
6. App receives ACCEPTED/REJECTED.
7. Controller sends indicated STATUS state updates.
8. App marks “State confirmed” only once expected state/config appears in status snapshot.
9. On disconnect/timeout: app reads snapshot/last result after reconnect before allowing another risky command.
```

### Timeout and retry defaults

| Stage | Initial value | Behavior |
|---|---:|---|
| Connect timeout | 12 seconds | Cancel and show Retry |
| Service discovery | 8 seconds | Retry once after reconnect |
| ATT write response | 5 seconds | One reconnect + outcome reconciliation; do not blind retry command |
| Application command result | 8 seconds | Show “Outcome unknown—reconnecting to confirm” |
| Status heartbeat active session | 5 seconds | Mark stale after 15 seconds without update |
| Status heartbeat idle | 30 seconds | Mark stale after 90 seconds without update |
| Reconnect backoff | 1s, 2s, 4s, 8s, 15s | Stop after 5 attempts; manual retry remains |

Firmware and app teams must tune these with real hardware; treat these as safe pilot defaults, not final RF guarantees.

---

# 6. BLE Abstraction and Starter Boilerplate

This is a scaffold, not a complete production package. It is intentionally organized so a coding agent can implement feature-by-feature without leaking BLE calls into screens.

## `lib/domain/models/unit_snapshot.dart`

```dart
import 'package:freezed_annotation/freezed_annotation.dart';
part 'unit_snapshot.freezed.dart';
part 'unit_snapshot.g.dart';

enum SteamState { idle, heating, atTemperature, steaming, coolOff, draining, maintenanceLock, fault, emergencyLockout, unknown }
enum CommandResult { none, accepted, rejected, executing, completed, failed }

@freezed
class UnitSnapshot with _$UnitSnapshot {
  const factory UnitSnapshot({
    required String unitId,
    required SteamState state,
    required CommandResult result,
    required int currentTempDeciC,
    required int targetTempDeciC,
    required int remainingSeconds,
    required int alarmFlags,
    required int faultCode,
    required int deviceUptimeSeconds,
    required DateTime receivedAt,
    int? sequence,
    int? commandToken,
  }) = _UnitSnapshot;

  factory UnitSnapshot.fromJson(Map<String, dynamic> json) => _$UnitSnapshotFromJson(json);
}
```

## `lib/domain/models/suprema_command.dart`

```dart
import 'dart:math';

enum SupremaCommandType { getSnapshot, startSession, stopSession, setTargetTemp, setDuration, identifyUnit, getDiagnostics, claimBegin, claimConfirm }

class SupremaCommand {
  SupremaCommand({
    required this.type,
    required this.sequence,
    required this.commandToken,
    required this.payload,
  });

  final SupremaCommandType type;
  final int sequence;
  final int commandToken;
  final Map<String, int> payload;

  factory SupremaCommand.startSession({required int sequence, required int targetTempDeciC, required int durationSeconds}) {
    return SupremaCommand(
      type: SupremaCommandType.startSession,
      sequence: sequence,
      commandToken: Random.secure().nextInt(0xFFFFFFFF),
      payload: {'targetTempDeciC': targetTempDeciC, 'durationSeconds': durationSeconds},
    );
  }
}
```

## `lib/data/ble/ble_gateway.dart`

```dart
import '../../domain/models/suprema_command.dart';
import '../../domain/models/unit_snapshot.dart';

class DiscoveredUnit {
  const DiscoveredUnit({required this.platformId, required this.name, required this.rssi, required this.serialHint});
  final String platformId;
  final String name;
  final int rssi;
  final String? serialHint;
}

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

## `lib/data/ble/ble_protocol_codec.dart`

```dart
import 'dart:typed_data';
import '../../domain/models/suprema_command.dart';
import '../../domain/models/unit_snapshot.dart';

class SupremaProtocolCodec {
  static const int protocolVersion = 1;
  static const int commandMessage = 0x01;
  static const int statusMessage = 0x02;
  static const int resultMessage = 0x03;

  List<int> encodeCommand(SupremaCommand command) {
    final payload = BytesBuilder();
    payload.addByte(protocolVersion);
    payload.addByte(commandMessage);
    payload.addByte(_commandCode(command.type));
    payload.addByte(0);
    _u16(payload, command.sequence);
    _u32(payload, command.commandToken);

    switch (command.type) {
      case SupremaCommandType.startSession:
        _u16(payload, command.payload['targetTempDeciC']!);
        _u16(payload, command.payload['durationSeconds']!);
      case SupremaCommandType.stopSession:
        payload.addByte(command.payload['stopReason'] ?? 1);
      case SupremaCommandType.setTargetTemp:
        _u16(payload, command.payload['targetTempDeciC']!);
      case SupremaCommandType.setDuration:
        _u16(payload, command.payload['durationSeconds']!);
      case SupremaCommandType.identifyUnit:
        payload.addByte(command.payload['identifySeconds'] ?? 5);
      case SupremaCommandType.claimBegin:
      case SupremaCommandType.claimConfirm:
        _u32(payload, command.payload['claimNonce']!);
        if (command.type == SupremaCommandType.claimConfirm) _u16(payload, command.payload['panelCode']!);
      case SupremaCommandType.getSnapshot:
      case SupremaCommandType.getDiagnostics:
        break;
    }

    final data = payload.toBytes();
    final crc = crc16CcittFalse(data);
    final frame = BytesBuilder()..add(data)..add([crc & 0xFF, (crc >> 8) & 0xFF]);
    return frame.toBytes();
  }

  UnitSnapshot decodeSnapshot({required String unitId, required List<int> bytes}) {
    if (bytes.length < 24) throw const FormatException('Suprema+ status frame is too short');
    final frame = Uint8List.fromList(bytes);
    final receivedCrc = frame[frame.length - 2] | (frame[frame.length - 1] << 8);
    final calculatedCrc = crc16CcittFalse(frame.sublist(0, frame.length - 2));
    if (receivedCrc != calculatedCrc) throw const FormatException('Suprema+ status CRC mismatch');
    if (frame[0] != protocolVersion) throw const FormatException('Unsupported Suprema+ protocol version');
    if (frame[1] != statusMessage && frame[1] != resultMessage) throw const FormatException('Unexpected Suprema+ message type');

    int u16(int offset) => frame[offset] | (frame[offset + 1] << 8);
    int u32(int offset) => frame[offset] | (frame[offset + 1] << 8) | (frame[offset + 2] << 16) | (frame[offset + 3] << 24);

    return UnitSnapshot(
      unitId: unitId,
      state: _steamState(frame[2]),
      result: _commandResult(frame[3]),
      sequence: u16(4),
      commandToken: u32(6),
      currentTempDeciC: u16(10),
      targetTempDeciC: u16(12),
      remainingSeconds: u16(14),
      alarmFlags: frame[16],
      faultCode: frame[17],
      deviceUptimeSeconds: u32(18),
      receivedAt: DateTime.now(),
    );
  }

  static void _u16(BytesBuilder b, int value) => b.add([value & 0xFF, (value >> 8) & 0xFF]);
  static void _u32(BytesBuilder b, int value) => b.add([value & 0xFF, (value >> 8) & 0xFF, (value >> 16) & 0xFF, (value >> 24) & 0xFF]);

  static int _commandCode(SupremaCommandType type) => switch (type) {
    SupremaCommandType.getSnapshot => 0x01,
    SupremaCommandType.startSession => 0x02,
    SupremaCommandType.stopSession => 0x03,
    SupremaCommandType.setTargetTemp => 0x04,
    SupremaCommandType.setDuration => 0x05,
    SupremaCommandType.identifyUnit => 0x06,
    SupremaCommandType.getDiagnostics => 0x07,
    SupremaCommandType.claimBegin => 0x08,
    SupremaCommandType.claimConfirm => 0x09,
  };

  static SteamState _steamState(int v) => switch (v) {
    0x00 => SteamState.idle, 0x01 => SteamState.heating, 0x02 => SteamState.atTemperature,
    0x03 => SteamState.steaming, 0x04 => SteamState.coolOff, 0x05 => SteamState.draining,
    0x06 => SteamState.maintenanceLock, 0x07 => SteamState.fault,
    0x08 => SteamState.emergencyLockout, _ => SteamState.unknown,
  };

  static CommandResult _commandResult(int v) => switch (v) {
    0x01 => CommandResult.accepted, 0x02 => CommandResult.rejected, 0x03 => CommandResult.executing,
    0x04 => CommandResult.completed, 0x05 => CommandResult.failed, _ => CommandResult.none,
  };
}

int crc16CcittFalse(List<int> bytes) {
  var crc = 0xFFFF;
  for (final byte in bytes) {
    crc ^= byte << 8;
    for (var i = 0; i < 8; i++) {
      crc = (crc & 0x8000) != 0 ? ((crc << 1) ^ 0x1021) & 0xFFFF : (crc << 1) & 0xFFFF;
    }
  }
  return crc;
}
```

## Command coordinator rule

Implement a `CommandCoordinator` that permits **one pending risky command per connected unit**. It must match the resulting status indication by `sequence` and `commandToken`; it must not infer success merely from a completed GATT write.

```text
send command
  → persist local record as REQUESTED
  → write with response
  → record TRANSPORT_ACKNOWLEDGED
  → await matching indicated COMMAND_RESULT for 8 seconds
       → ACCEPTED: record DEVICE_ACCEPTED; await matching/new state snapshot
       → REJECTED/FAILED: record DEVICE_REJECTED; show fault text
       → timeout/disconnect: record OUTCOME_UNKNOWN; reconnect and read snapshot/last result
```

---

# 7. Firmware Simulator Specification

## Purpose

App development must not wait for the final control board. Create a simulator as a separate engineering workstream by Day 3.

## Preferred implementation

- **Primary:** ESP32/nRF development board running the agreed GATT service and MVP protocol.
- **Secondary:** a Flutter `FakeBleGateway` for UI/unit tests; it cannot fully replace real BLE behavior.
- **Optional desktop:** Python/Node BLE peripheral only if the team can validate iOS compatibility; real hardware dev board is more reliable for both mobile platforms.

## Simulator behavior

| App command | Simulator result | State transition |
|---|---|---|
| `GET_SNAPSHOT` | Immediate indicated/current snapshot | No change |
| `START_SESSION` | ACK ACCEPTED unless fault/low water | IDLE → HEATING → STEAMING |
| `STOP_SESSION` | ACK ACCEPTED | HEATING/STEAMING → COOL_OFF → DRAINING → IDLE |
| `SET_TARGET_TEMP` | ACK ACCEPTED if in bounds | Updates target temp |
| `SET_DURATION` | ACK ACCEPTED if in bounds | Updates duration/remaining time |
| `IDENTIFY_UNIT` | ACK COMPLETED | LED/buzzer/display test for N seconds |
| Claim commands | Accept only when simulator physical button/mode is enabled | Claimed identity returned |

## Required fault injection switches

- Low water: Start rejected with `LOW_WATER`.
- Over-temperature: active session transitions to `FAULT`.
- Sensor failure: telemetry becomes invalid/unknown and fault raised.
- Drain failure: transition to `FAULT` during drain.
- Delayed response: command result after 10–15 seconds.
- Lost indication: ATT write succeeds but no application result is sent.
- Forced disconnect: disconnect during command, heating, and drain.
- Bad CRC: send malformed status packet.
- Duplicate result: resend same sequence/token.

## Simulator acceptance

- iOS and Android discover it using the Suprema+ service UUID.
- It supports Write With Response and Status Indications.
- It lets the team reproduce every command lifecycle screen without dangerous physical heating hardware.

---

# 8. Four-Week Sprint Plan

## Week 0: prerequisites before Day 1

- Obtain Mac with current Xcode, Apple ID/team access, and physical iPhone.
- Obtain Google Play organization account access or agree on APK-only pilot.
- Obtain two BLE dev boards / controller prototypes and embedded contact.
- Freeze MVP UUID registry and initial payload contract.
- Create Git repository; confirm company ownership of package IDs, signing keys, source code, and release accounts.

## Week 1 — Foundation and end-to-end happy path

| Day | Deliverable |
|---:|---|
| 1 | Flutter project, linting, flavor/config placeholders, Android/iOS BLE permissions, theme, navigation shell. |
| 2 | BLE gateway abstraction, scan screen, Android physical-device scan test, unit list UI. |
| 3 | Connect/disconnect/service discovery, simulator available, iOS scan/connect test. |
| 4 | Protocol codec, Status subscription, Unit Detail telemetry UI with fake + hardware stream. |
| 5 | Start/Stop command coordinator, ACK/result UI states, demo on Android and iPhone. |

**Week 1 exit gate:** One simulator/prototype can be discovered, connected, controlled with Start/Stop, and returns confirmed status on Android and iOS.

## Week 2 — Core operations and robust reconciliation

| Day | Deliverable |
|---:|---|
| 6 | Temperature and duration controls with validation, pending/applied/rejected states. |
| 7 | Snapshot read, reconnect flow, stale-data UI, command history persistence. |
| 8 | Claiming wizard: scan, physical identify/QR/code confirmation, room naming, local unit registry. |
| 9 | Dashboard for multiple saved units, but one active BLE connection at a time; diagnostics basics. |
| 10 | Fault mapping, safe error handling, low-water/over-temp/disconnect simulator tests. |

**Week 2 exit gate:** All core MVP commands pass happy-path, rejection, disconnect, and reconnection tests on both platforms.

## Week 3 — Pilot quality and feature completion

| Day | Deliverable |
|---:|---|
| 11 | UI polish from Stitch, accessibility, large controls, loading/empty/offline states. |
| 12 | Local settings/preferences, unit rename/forget, help and safety screens. |
| 13 | Diagnostic/support bundle and activity timeline; redacted logging. |
| 14 | Platform edge tests: lock screen, background/foreground, Bluetooth toggle, app restart. |
| 15 | Field/RF test in actual installation-like environment; fix highest-impact BLE issues. |

**Week 3 exit gate:** Pilot candidate build with no known wrong-unit targeting, no fake success UI, and documented known limitations.

## Week 4 — Release candidate and deployment

| Day | Deliverable |
|---:|---|
| 16 | Test matrix on Android OEMs and iPhones; record results. |
| 17 | Regression fixes, performance/reconnect polish, error text review with hardware team. |
| 18 | Android signed APK/AAB, Play listing assets/draft; iOS archive/TestFlight metadata. |
| 19 | TestFlight upload and Android pilot distribution; installation guide and support process. |
| 20 | Pilot handover, known-issues log, source-code cleanup, release tag, Phase-2 backlog. |

**Week 4 exit gate:** Signed Android APK and TestFlight build are deployed to pilot testers; the team has a rollback build and a support/diagnostic procedure.

---

# 9. Platform Quirks and Required Tests

| Topic | Android | iOS | Engineering response |
|---|---|---|---|
| Device identity | MAC/device ID may be available but must not be sole identity | MAC address is not available/reliable for product mapping | Read immutable serial from GATT; map to app `unitId`. |
| Permissions | Android 12+ scan/connect runtime permissions | Bluetooth usage description in Info.plist | Implement platform-aware readiness flow. [web:130][web:131][web:165] |
| MTU | Explicit request generally available | OS behavior differs; do not depend on large MTU | Keep V1 frames under 20 bytes where practical; test negotiated MTU. [web:166][web:171] |
| Background work | Can use foreground service if justified | Background BLE constrained; filtered known-service behavior | MVP does not promise continuous background control. [web:167] |
| Bonding | OS/vendor-dependent flows | Encryption prompt may occur on secure characteristic access | Make claim/provisioning a physical-confirmation workflow; avoid UX dependent on platform bonding UI. |
| OEM differences | Aggressive battery optimization can affect scans/reconnects | More homogeneous hardware, stricter OS policy | Test named device matrix and provide reconnect UX. |
| Concurrent units | Multiple connections may work but add instability | Connection limits/behavior vary | Keep one active connected unit in MVP; show last-known values for others. |

---

# 10. Definition of Done Per Feature

A feature is not complete until it meets all items below:

- UI implemented for normal, loading, unavailable, permission-denied, and error states.
- No widget directly accesses BLE library APIs.
- Unit tests cover codec/domain decisions.
- Integration test covers fake gateway behavior.
- Physical Android and iOS validation is recorded for BLE-touching features.
- All command results are displayed as requested/transport ACK/device accepted/rejected/state confirmed, as applicable.
- Logs omit secrets and personal data.
- Accessibility labels and large touch targets are present.
- Feature behavior is documented in PRD/README and added to pilot test sheet.

---

# 11. Pilot Deployment Checklist

## Android

- Set application ID: `com.multitechnicaa.supremaplus` (confirm company ownership before publishing).
- Create upload keystore held by MultiTechnicaa, not an individual contractor.
- Build signed APK for direct B2B pilot; build AAB for eventual Google Play release.
- Test installation on a clean device; document unknown-sources/MDM installation steps.

## iOS

- Set bundle identifier: `com.multitechnicaa.supremaplus` (confirm availability in Apple Developer account).
- MultiTechnicaa owns Apple Developer account and certificates where possible.
- Add TestFlight beta test description, Bluetooth permission reason, privacy answers, support URL, and contact email.
- Test install/upgrade/reinstall behavior on physical iPhone.

## Shared

- Privacy policy draft states what is stored locally and what is not transmitted in BLE-only MVP.
- Include support contact and device serial capture method.
- Include field fallback: “Use local controller/panel if app is disconnected or command status is unknown.”
- Create a release notes template and known-issues list.

---

# 12. Coding-Agent Prompt to Start Implementation

Use this prompt after adding the PRD and this appendix to the repository:

> You are implementing Suprema+, a Flutter Android/iOS BLE-only MVP. Follow `Suprema_Plus_Mobile_App_PRD.md` and `Suprema_Plus_Flutter_MVP_Technical_Appendix.md` exactly. Build only the 4-week MVP scope in Appendix Section 1; do not add Wi-Fi, Mesh, cloud, scheduling, OTA, or advanced safety settings. Use Flutter, flutter_blue_plus, Riverpod, go_router, Drift, secure storage, immutable models, and the BLE gateway abstraction specified in the appendix. Never call flutter_blue_plus from a widget. Implement each feature as a separate vertical slice with unit tests and fake BLE gateway tests. Commands must use Write With Response plus matching indicated application result (`sequence` + `commandToken`); ATT write success is never physical command success. Treat hardware safety interlocks as authoritative. Before generating code, output a file plan and identify any missing hardware values as TODO constants without inventing unsafe behavior.

---

# 13. Decisions Required in the Next 48 Hours

1. Confirm whether the 4-week deliverable is **pilot only** (recommended) or public App Store/Play Store launch.
2. Confirm actual controller hardware availability date and embedded engineering owner.
3. Freeze V1 GATT UUIDs, binary payloads, state codes, fault codes, safe ranges, and timeout behavior with firmware team.
4. Confirm physical identity method: QR code, panel code, BLE identify LED/buzzer, or commissioning button; use at least two factors for first claim.
5. Confirm whether iOS background telemetry is a genuine MVP requirement. If not, omit background mode to reduce review/behavior risk.
6. Confirm company-owned Apple/Google developer accounts and package names.
7. Confirm pilot devices/sites and available physical test phones.
8. Confirm which fields are read-only vs editable in MVP, especially drain/cool-off/alarm/Bluetooth radio.

---

## Sources

- Flutter BLE plugin and permission guidance: [web:160][web:162][web:166]
- Android BLE permissions: [web:130][web:131][web:165]
- iOS background BLE considerations: [web:167]
- BLE communication concepts: [web:56][web:59][web:60]

---
title: "C++"
---

# C++

[[toc]]

## Installation

### OS

If you are using CMake head over to [https://www.cmake.org/download/](https://www.cmake.org/download/) or install it via Homebrew `brew install cmake`.

#### Make

```bash
git clone https://github.com/ArkEcosystem/cpp-crypto
cd cpp-crypto
// init & update micro-ecc submodule
git submodule init
git submodule update
cmake .
cmake --build .
```

#### Tests

```bash
./bin/Ark-Cpp-Crypto-tests
```

### Arduino

Download and install the Arduino IDE (>=1.8.5) from [https://www.arduino.cc/en/Main/Software](https://www.arduino.cc/en/Main/Software)

#### Dependencies

Using the Arduino IDE's built in Library Manager, install the following Libraries:

- micro-ecc
- AUnit

#### Using with the Arduino IDE

Include the following header in your Arduino Sketch:

```cpp
#include <arkCrypto.h>
```

### PlatformIO

Python is required to run PlatformIO, so grab an installer package from [https://www.python.org/downloads/](https://www.python.org/downloads/)

#### Installation

```bash
pip install -U platformio
platformio lib -g install 2778 1665
```

#### Tests

##### ESP8266

```bash
cd cpp-crypto/test
pio run -e esp8266 -t upload
```

##### ESP32

```bash
cd cpp-crypto/test
pio run -e esp32 -t upload
```

## Transactions

### Sign

```cpp
...
```

### Serialize (AIP11)

```cpp
...
```

### Deserialize (AIP11)

```cpp
...
```

## Message

### Sign

```cpp
const auto text = "Computer science is no more about computers than astronomy is about telescopes.";
const auto passphrase = "bullet parade snow bacon mutual deposit brass floor staff list concert ask";
Ark::Crypto::Utils::Message message;
message.sign(text, passphrase);
```

### Verify

```cpp
const auto text = "Computer science is no more about computers than astronomy is about telescopes.";
PublicKey publicKey = PublicKey::fromHex("0275776018638e5c40f1b922901e96cac2caa734585ef302b4a2801ee9a338a456");
std::vector<uint8_t> signature = HexToBytes("3044022021704f2adb2e4a10a3ddc1d7d64552b8061c05f6d12a168c69091c75581d611402200edf37689d2786fc690af9f0f6fa1f629c95695039f648a6d455484302402e93");

Ark::Crypto::Utils::Message message(
    text,
    publicKey,
    signature
);

message.verify();
```

## Identities

### Address

#### Get an address from a passphrase
```cpp
const auto passphrase = "bullet parade snow bacon mutual deposit brass floor staff list concert ask";
const uint8_t networkVersion = 0x1E;
Address address = Address::fromPassphrase(passphrase, networkVersion);
```

#### Get an address from a public key
```cpp
PublicKey publicKey("029fdf41a7d69d8efc7b236c21b9509a23d862ea4ed8b13a56e31eee58dbfd97b4");
const uint8_t networkVersion = 0x1E;
Address address = Address::fromPublicKey(publicKey, networkVersion);
```

#### Get an address from a private key
```cpp
PrivateKey privateKey("950981ce17df662dbc1d25305f8597a71309fb8f7232203a0944477e2534b021");
const uint8_t networkVersion = 0x1E;
Address address = Address::fromPrivateKey(privateKey, networkVersion);
```

#### Validate an address
```cpp
Address address("DStZXkgpEjxbG355nQ26vnkp95p24U9tsV");
bool isValidAddress = Address::validate(address, networkVersion);
```

### Private Key

#### Get a private key from a passphrase
```cpp
const auto passphrase = "bullet parade snow bacon mutual deposit brass floor staff list concert ask";
PrivateKey privateKey = PrivateKey::fromPassphrase(passphrase);
```

#### Get a private key instance object from hex
```cpp
PrivateKey privateKey = PrivateKey::fromHex("950981ce17df662dbc1d25305f8597a71309fb8f7232203a0944477e2534b021");
```

### Public Key

#### Get a public key from a passphrase
```cpp
const auto passphrase = "bullet parade snow bacon mutual deposit brass floor staff list concert ask";
PublicKey publicKey = PublicKey::fromPassphrase(passphrase);
```

#### Get a public key instance object from hex
```cpp
PublicKey publicKey = PublicKey::fromHex("029fdf41a7d69d8efc7b236c21b9509a23d862ea4ed8b13a56e31eee58dbfd97b4");
```

### WIF

#### Get a WIF from a passphrase
```cpp
const auto passphrase = "bullet parade snow bacon mutual deposit brass floor staff list concert ask";
const uint8_t wifByte = 0xaa;
WIF wif = WIF::fromPassphrase(passphrase, wifByte);
```

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
git clone https://github.com/ArkEcosystem/cpp-client
cd cpp-client
# init & update micro-ecc submodule
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
cd cpp-client/test
pio run -e esp8266 -t upload
```

##### ESP32

```bash
cd cpp-client/test
pio run -e esp32 -t upload
```

## Usage

The Cpp Client is meant to be used for creating request to an API endpoint.
For cryptography related functionality, such as generating addresses or creating transactions,
please see the [Cpp Crypto](https://github.com/ArkEcosystem/cpp-crypto) repository.

### Connection

Before making a request, you should create a `Connection`.
A `Connection` expects a `host`, which is an url on which the API can be reached,
and a network `version`, which specifies whether we are using v1 or v2.
An example `Connection` that connects to a v2 API of a node, would be created as follows:

```cpp
// Create a connection
Ark::Client::Connection<Ark::Client::API::Two> connection("167.114.29.54", 4003);
```

### Making an API Request

The below example shows how you can perform a request.

```cpp
// Check the API Version
auto apiVersion = connection.api.version();

// Perform an API call using the connection to access endpoint
const auto blockResponse = connection.api.blocks.get("13114381566690093367")

const auto delegateResponse = connection.api.delegates.get("boldninja");

const auto nodeConfiguration = connection.api.node.configuration();

const auto peer = connection.api.peers.get("167.114.29.49");

const auto transaction = connection.api.transactions.get("b324cea5c5a6c15e6ced3ec9c3135a8022eeadb8169f7ba66c80ebc82b0ac850");

const auto vote = connection.api.votes.get("d202acbfa947acac53ada2ac8a0eb662c9f75421ede3b10a42759352968b4ed2");

const auto walletsSearch = connection.api.wallets.search({"username", "baldninja"});
```

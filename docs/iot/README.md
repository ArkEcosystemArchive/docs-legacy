# IoT(Internet of Things)

[[toc]]

ARK IoT is a growing ecosystem of _"things"_ interoperability that aims to make using IoT and Blockchain technology easier.

If you previously wanted to use IoT and Crypto tech in general, you had to try dozens of libraries; wasting countless hours of tweaking and debugging.  
It's a lot like getting a 5,000-piece puzzle with no picture and no edges.

Much like in crypto, ARK's approach to a _"framework for mass adoption"_ fit's perfectly here.

Even if you have the "big picture" in your head, you may not know where to start.
Ark provides the "edge pieces"--or starting point--for your project; so you can spend less time debugging, and more time building.

Ark IoT features the first crypto SDK's designed to support IoT architecture, enabling novel use-cases on platforms with otherwise constrained resources.

## Which SDK Supports IoT

Currently, the Ark [Cpp-Client](https://github.com/ArkEcosystem/cpp-client) and [Cpp-Crypto](https://github.com/ArkEcosystem/cpp-crypto) SDK's are designed to run on boards and platforms like [Espressif](https://www.espressif.com/), [Arduino](https://www.arduino.cc/), [PlatformIO](https://platformio.org/).

<p align="center">
  <img src="https://raw.githubusercontent.com/ArkEcosystem/cpp-client/master/banner.png" width="900"> 
</p>

The [**Cpp-Client**](https://github.com/ArkEcosystem/cpp-client) SDK help developers fetch information from the Ark blockchain about its current state: which delegates are currently forging, what transactions are associated with a given wallet, and so on. 

---
<p align="center">
  <img src="https://raw.githubusercontent.com/ArkEcosystem/cpp-crypto/master/banner.png" width="900"> 
</p>

The [**Cpp-Crypto**](https://github.com/ArkEcosystem/cpp-crypto) SDK, by contrast, assist developers in working with transactions: signing, serializing, deserializing, etc.

## Currently Supported Boards

- [Adafruit ESP32 Overview and Setup](/tutorials/iot/boards/esp32-adafruit/)
- [Adafruit ESP8266 Overview and Setup](/tutorials/iot/boards/esp8266-adafruit/)

## IoT Tutorials

- [How to Setup the Arduino IDE](/tutorials/iot/environment/arduino/)
- [How to Setup VSCode and PlatformIO](/tutorials/iot/environment/os/)
- [How to Setup the Cpp SDK's](/tutorials/iot/environment/cpp/)
- [Storing Data on the Blockchain](/tutorials/iot/storing-data-on-the-blockchain.md)
- [Reacting to Data on the Blockchain](/tutorials/iot/reacting-to-data-on-the-blockchain.md)

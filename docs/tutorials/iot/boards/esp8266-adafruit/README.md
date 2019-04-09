---
title: Adafruit ESP8266 Overview and Setup
---

# Adafruit ESP8266 Feather

![ESP8266](../assets/esp8266-adafruit/esp8266-adafruit-upper.jpg)

[[toc]]

## Features

<details><summary>These are the SDK features that are currently available on the Adafruit ESP8266 Feather board.
</summary>
<p>

**Cpp-Client:**
| Feature: | Supported:**[ ]**|
| :------: | :----: |

**API:**
| **Blocks:** |**[x]**|
| :----- | :---: |
| • `get(const char* const blockId)` |**[x]**|
| • `all(int limit, int page)` |**[x]**|
| • `transactions(const char* const blockId)` |**[x]**|
| • `search(const std::map<std::string, std::string>& bodyParameters, int limit, int page)` |**[x]**|

| **Delegates:** |**[x]**|
| :----- | :---: |
| • `get(const char *const identifier)` |**[x]**|
| • `all(int limit, int page)` |**[x]**|
| • `blocks(const char *const identifier, int limit, int page)` |**[x]**|
| • `voters(const char *const identifier, int limit, int page)` |**[x]**|

| **Node:** |**[x]**|
| :----- | :---: |
| • `configuration()` |**[x]**|
| • `status()` |**[x]**|
| • `syncing()` |**[x]**|

| **Peers:** |**[x]**|
| :----- | :---: |
| • `get(const char* const ip)` |**[x]**|
| • `all(int limit, int page)` |**[x]**|

| **Transactions** |**[x]**|
| :----- | :---: |
| • `getUnconfirmed(const char* const identifier)` |**[x]**|
| • `get(const char* const identifier)` |**[x]**|
| • `all(int limit, int page)` |**[x]**|
| • `allUnconfirmed(int limit, int page)` |**[x]**|
| • `types()` |**[x]**|
| • `search(const std::map<std::string, std::string>& body_parameters, int limit, int page)` |**[x]**|

| **Votes** |**[x]**|
| :----- | :---: |
| • `get(const char* const identifier)` |**[x]**|
| • `all(int limit, int page)` |**[x]**|

| **Wallets** |**[x]**|
| :----- | :---: |
| • `get(const char *const identifier)` |**[x]**|
| • `all(int limit, int page)` |**[x]**|
| • `top(int limit, int page)` |**[x]**|
| • `transactions(const char *const identifier, int limit, int page)` |**[x]**|
| • `transactionsReceived(const char *const identifier, int limit, int page)` |**[x]**|
| • `transactionsSent(const char *const identifier, int limit, int page)` |**[x]**|
| • `votes(const char *const identifier, int limit, int page)` |**[x]**|
| • `search(const std::map<std::string, std::string> &bodyParameters, int limit, int page)` |**[x]**|

---

**Cpp-Crypto:**

**Configuration:**
| **Fee:** |**[x]**|
| :----- | :---: |
| • `get(int type)` |**[x]**|
| • `set(int type, uint64_t fee)` |**[x]**|

| **Network:** |**[x]**|
| :----- | :---: |
| • `get()` |**[x]**|
| • `set(const AbstractNetwork& network)` |**[x]**|

**Enums:**
| **Fees:** |**[x]**|
| :----- | :---: |

| **Types:** |**[x]**|
| :----- | :---: |

**Identities:**
| **Address:** |**[x]**|
| :----- | :---: |
| • `toBytes()` |**[x]**|
| • `toString()` |**[x]**|
| • `fromPassphrase(const char *const passphrase, uint8_t networkVersion)` |**[x]**|
| • `fromPrivateKey(PrivateKey privateKey, uint8_t networkVersion)` |**[x]**|
| • `fromPublicKey(PublicKey publicKey, uint8_t networkVersion)` |**[x]**|
| • `validate(Address address, uint8_t networkVersion)` |**[x]**|
| • `validate(const char *const addressStr, uint8_t networkVersion)` |**[x]**|
| • `validate(const uint8_t *addressBytes, uint8_t networkVersion)` |**[x]**|
| • `base58encode(const uint8_t *source)` |**[x]**|
| • `bytesFromBase58Check(const char *const address)` |**[x]**|

| **Mnemonic:** |**[x]**|
| :----- | :---: |
| • `generate(size_t num_words = 12u, Language language)` |**[x]**|

| **PrivateKey:** |**[x]**|
| :----- | :---: |
| • `toBytes()` |**[x]**|
| • `toString()` |**[x]**|
| • `fromPassphrase(const char *const passphrase)` |**[x]**|
| • `fromHex(const char *const privateKey)` |**[x]**|
| • `fromWIFString(const char *wifStr, uint8_t wifByte)` |**[x]**|
| • `validate(PrivateKey privateKey)` |**[x]**|
| • `validate(const char *privateKeyStr)` |**[x]**|
| • `validate(const uint8_t *privateKeyBytes)` |**[x]**|

| **PublicKey:** |**[x]**|
| :----- | :---: |
| • `toBytes()` |**[x]**|
| • `toString()` |**[x]**|
| • `isValid()` |**[x]**|
| • `fromPassphrase(const char *const passphrase)` |**[x]**|
| • `fromHex(const char *const publicKey)` |**[x]**|
| • `fromPrivateKey(PrivateKey privateKey)` |**[x]**|
| • `validate(PublicKey publicKey)` |**[x]**|
| • `validate(const char *publicKeyStr)` |**[x]**|
| • `validate(const uint8_t *publicKeyBytes)` |**[x]**|

| **WIF:** |**[x]**|
| :----- | :---: |
| • `toBytes()` |**[x]**|
| • `toString()` |**[x]**|
| • `fromPassphrase(const char *const passphrase, uint8_t wifByte)` |**[x]**|

**Transactions:**
|  **builder:** |**[x]**|
| :----- | :---: |
| • `buildTransfer(std::string recipientId, uint64_t amount, std::string vendorField, std::string passphrase std::string secondPassphrase = "")` |**[x]**|
| • `buildSecondSignatureRegistration(std::string passphrase, std::string secondPassphrase = "")` |**[x]**|
| • `buildDelegateRegistration(std::string username, std::string passphrase, std::string secondPassphrase = "")` |**[x]**|
| • `buildVote(std::vector<std::string> votes, std::string passphrase, std::string secondPassphrase = "")` |**[x]**|
| • `buildMultiSignatureRegistration(uint8_t min, uint8_t lifetime, std::vector<std::string> keysgroup, std::string passphrase, std::string secondPassphrase = "")` |**[x]**|

| **Deserializer:** |**[x]**|
| :----- | :---: |
| • `deserialize()` |**[x]**|

| **Serializer:** |**[x]**|
| :----- | :---: |
| • `serialize()` |**[x]**|

| **Transaction:** |**[*]**|
| :----- | :---: |
| • `getId()` |**[x]**|
| • `sign(const char* passphrase)` |**[x]**|
| • `secondSign(const char* passphrase)` |**[x]**|
| • `verify()` |**[ ]**|
| • `secondVerify(const char* secondPublicKey)` |**[ ]**|
| • `toBytes(bool skipSignature = true, bool skipSecondSignature = true)` |**[x]**|

**Utils:**
| **Message:** |**[_unstable_]**|
| :----- | :---: |
| • `sign(std::string newMessage, const char *const passphrase)` |**[x]**|
| • `verify()` |**[ ]**|
| • `toArray()` |**[x]**|
| • `toJson()` |**[x]**|
| • `toString()` |**[x]**|

| **slot:** |**[_unstable_]**|
| :----- | :---: |
| • `time(Crypto::Networks::AbstractNetwork network)` |**[ ]**|
| • `epoch(Crypto::Networks::AbstractNetwork network)` |**[ ]**|

</p>
</details>

---

## Specs

<details><summary>These are the specifications for the Adafruit ESP8266 Feather board.</summary>
<p>

> This is the Adafruit Feather HUZZAH ESP8266 - our take on an 'all-in-one' ESP8266 WiFi development board with built in USB and battery charging. Its an ESP8266 WiFi module with all the extras you need, ready to rock!
>
> At the Feather HUZZAH's heart is an ESP8266 WiFi microcontroller clocked at 80 MHz and at 3.3V logic. This microcontroller contains a Tensilica chip core as well as a full WiFi stack. You can program the microcontroller using the Arduino IDE for an easy-to-run Internet of Things core. We wired up a high-quality SiLabs CP2104 USB-Serial chip that can upload code at a blistering 921600 baud for fast development time. It also has auto-reset so no noodling with pins and reset button pressings. The CP2104 has better driver support than the CH340 and can do very high speeds without stability issues.
>
> To make it easy to use for portable projects, we added a connector for any of our 3.7V Lithium polymer batteries and built in battery charging. You don't need a battery, it will run just fine straight from the micro USB connector. But, if you do have a battery, you can take it on the go, then plug in the USB to recharge. The Feather will automatically switch over to USB power when its available.
>
> ~ [Adafruit.com](https://www.adafruit.com/product/2821)

- Measures 2.0" x 0.9" x 0.28" (51mm x 23mm x 8mm) without headers soldered in
- Light as a (large?) feather - 9.7 grams
- ESP8266 @ 80MHz with 3.3V logic/power
- 4MB of FLASH (32 MBit)
- Built in WiFi 802.11 b/g/n
- 3.3V regulator with 500mA peak current output
- CP2104 USB-Serial converter onboard with 921600 max baudrate for speedy uploading
- Auto-reset support for getting into bootload mode before firmware upload
- 9 x GPIO pins - can also be used as I2C and SPI
- 1 x analog inputs 1.0V max
- Built in 100mA LiPoly charger with charging status indicator LED,
  can also cut a trace to disable the charger
- Pin #0 red LED for general purpose blinking.
  Pin #2 blue LED for bootloading debug & general purpose blinking
- Power/enable pin
- 4 mounting holes
- Reset button

**Pinout:**
![ESP8266 Lower](../assets/esp8266-adafruit/esp8266-adafruit-lower.jpg)
![ESP8266 Pinout](../assets/esp8266-adafruit/esp8266-adafruit-pinout.png)


**External Resources:**

- **Adafruit Feather Huzzah ESP8266: Overview:**
  > https://learn.adafruit.com/adafruit-feather-huzzah-esp8266/overview
- **How To: Up and Running with Adafruit HUZZAH Feather ESP8266:**
  > http://imaginen4tion.blogspot.com/2015/12/how-to-up-and-running-with-adafruit.html
- **espressif.com: ESP8266 SDK's and Demos:**
  > http://espressif.com/en/support/download/sdks-demos
- **ESP 8266 Non-OS SDK API Reference:**
  > http://espressif.com/sites/default/files/documentation/2c-esp8266_non_os_sdk_api_reference_en.pdf

**Troubleshooting:**

- **ESP8266: Crashing:**
  > http://arduino-esp8266.readthedocs.io/en/latest/faq/a02-my-esp-crashes.html#introduction
- **ESP8266: Exception Causes:**
  > https://github.com/esp8266/Arduino/blob/master/doc/exception_causes.rst

</p>
</details>

---

## Setup

<details><summary>These are the steps to setup your Adafruit ESP8266 Feather board.</summary>
<p>

**Add ESP8266 to the Arduino IDE:**

**Additional Boards Manager URL's:**
To add ESP8266 to the Arduino IDE, use _**'Additional Boards Manager URL's'**_ in 'Preferences';
this is a line separated list of hardware configuration JSON configs.

> **Preferences** >> **Additional Boards Manager URL's**

Add this line to the URL's list:
> `http://arduino.esp8266.com/stable/package_esp8266com_index.json`

![Arduino Board URLs](../assets/esp32-adafruit/arduino-ide-esp32-board-urls.png)

---

**Download the ESP8266 packages via Board Manager:**

Open the Boards Manager from the _**Tools**_ dropdown menu:
> **Tools** >> **Board** >> **Boards Manager**

Search for and install the '**ESP8266**' package in _**Boards Manager**_.

![Open Boards Manager](../assets/esp8266-adafruit/arduino-ide-esp8266-open-boards-manager.png)
![Search Boards Manager](../assets/esp8266-adafruit/arduino-ide-esp8266-search-boards-manager.png)

---

**Select your Board:**

From the _**Tools**_ dropdown menu:
> **Tools** >> **Board**

Select the Adafruit ESP32 Feather board

![Select Board](../assets/esp8266-adafruit/arduino-ide-esp8266-select-board.png)

---

**Install the USB driver:**

For your system to talk to the ESP8266 via USB, you will also need to install the _**SiLabs CP2104 Driver**_.

1) You can download the zip file for your operating system from the following website:
    - https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers
    > _e.g._
    > -  _Linux_3.x.x_4.x.x_VCP_Driver_Source.zip_
    > - _Mac_OSX_VCP_Driver.zip_
    > - _CP210x_VCP_Windows.zip_
2) Unzip the downloaded file and run the installation package inside the unzipped folder.

<details><summary>The following pictures are of the CP2104 USB Driver installation process for macOS systems:
</summary>
<p>

![CP2104](../assets/cp2104/cp2104-usb-driver-1.jpeg)
![CP2104](../assets/cp2104/cp2104-usb-driver-2.jpeg)
![CP2104](../assets/cp2104/cp2104-usb-driver-3.jpeg)
![CP2104](../assets/cp2104/cp2104-usb-driver-4.jpeg)
![CP2104](../assets/cp2104/cp2104-usb-driver-5.jpeg)
![CP2104](../assets/cp2104/cp2104-usb-driver-6.jpeg)
![CP2104](../assets/cp2104/cp2104-usb-driver-7.jpeg)
![CP2104](../assets/cp2104/cp2104-usb-driver-8.jpeg)
![CP2104](../assets/cp2104/cp2104-usb-driver-9.jpeg)

</p>
</details>

</p>
</details>

---

## Client Example: Arduino Sketch

<details><summary>ESP8266.ino:</summary>
<p>

```cpp
/**
 * This file is part of ARK Cpp Client.
 *
 * (c) ARK Ecosystem <info@ark.io>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 **/

/**d
 * This sketch covers how to use the Cpp-Client API.
 * It allows your ESP8266 to send requests to an ARK Node
 */

 /**
 * NOTE: At the time of this writing, the Cpp-Client library requires running the 'ARDUINO_IDE.sh' bash script located in the 'extras' folder.
 * This converts our library to be compatible with the Arduino IDE.
 */

/****************************************/

/**
 * This is where you include the 'arkClient.h' header.
 * This allows your project to use ARK Cpp-Client.
 */
#include <arkClient.h>
/**/

/****************************************/

/**
 * This is where you include WiFi header for your board.
 * This example is for the ESP8266, and includes the 'ESP8266WiFi.h' header.
 */
#include <ESP8266WiFi.h>
/**/

/****************************************/

/* This is the WiFi network you'd like your board to connect to. */
const char* ssid = "yourSSID";
const char* password = "yourWiFiPassword";
/**/

/****************************************/

/**
 *  This is the IP address of an ARK Node
 *  Specifically, this is a Devnet V2 Node IP
 *  You can find more peers here: https://github.com/ARKEcosystem/peers
 *
 *  The Public API port for the V2 ARK network is '4003'
 */
const char* peer = "167.114.29.55";
int port = 4003;
/**/

/****************************************/

/**
 * This is how you define a connection while speficying the API class as a 'template argument'
 * You instantiate a connection by passing a IP address as a 'c_string', and the port as an 'int'.
 */
ARK::Client::Connection<ARK::Client::Api> connection(peer, port);
/**/

/****************************************/

void checkAPI() {
  /**
   * This is how you can check the Version of the API
   * In this example, it should return '2' as an 'int' for V2 of ARKs' API.
   */
  auto apiVersion = connection.api.version();
    Serial.print("\nAPI Version: ");
    Serial.println(apiVersion);
  /**/

  /********************/

  /**
   * Here you can call a list of 'All' 'Blocks' on the network.
   * The '2' and '1' refer to the pagination (e.g. response limit and how many pages)
   *
   * This is equivalant to calling '167.114.29.49:4003/api/v2/blocks?limit=2&page=1'
   *
   * The response should be a json-formatted object
   * The "pretty print" version would look something like this
   *
   * {
   *  "meta": {
   *    "count": 2,
   *    "pageCount": 597291,
   *    "totalCount": 1194581,
   *    "next": "\/api\/v2\/blocks?limit=2&page=2",
   *    "previous": null,
   *    "self": "\/api\/v2\/blocks?limit=2&page=1",
   *    "first": "\/api\/v2\/blocks?limit=2&page=1",
   *    "last": "\/api\/v2\/blocks?limit=2&page=597291"
   *    },
   *  "data": [
   *    {
   *      "id": "9809002764916365223",
   *      "version": 0,
   *      "height": 1178071,
   *      "previous": "10476150126412446830",
   *      "forged": {
   *        "reward": 200000000,
   *        "fee": 0,
   *        "total": 200000000,
   *        "amount": 0
   *      },
   *      "payload": {
   *        "hash": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
   *        "length": 0
   *      },
   *      "generator": {
   *        "username": "darkcrow",
   *        "address": "DFSUsSmcVUhVZYQ1nowciWmmtnj1kvZK5Z",
   *        "publicKey": "03a8ff0a3cbdcb3bfbdb84dbf83226f338ba1452047ac5b8228a1513f7f1de80de"
   *      },
   *      "signature": "304402207fd861e98aa5e4ea0c4a828ad9104bb636b429bc73dc0d5bfe3515347e8b1a79022051f8fb3b3752f1204e8c425d0528203942756811d669c7dd1ccb15ff7bc14e09",
   *      "transactions": 0,
   *      "timestamp": {
   *        "epoch": 57144626,
   *        "unix": 1547245826,
   *        "human": "2019-01-11T22:30:26.000Z"
   *       }
   *      },
   *    {
   *      "id": "10476150126412446830",
   *      "version": 0,
   *      "height": 1178070,
   *      "previous": "1656548224477584335",
   *      "forged": {
   *        "reward": 200000000,
   *        "fee": 0,
   *        "total": 200000000,
   *        "amount": 0
   *      },
   *      "payload": {
   *        "hash": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
   *        "length": 0
   *      },
   *      "generator": {
   *        "username": "genesis_16",
   *        "address": "DHg1jYVS23D6GP7RuhckuJsYAr6crH6c3Z",
   *        "publicKey": "03c57b6a3eb7d01ade51f95c8ae4e8ebeb7ca7b8422ab0fb2a236de5d1a5bc6a1b"
   *      },
   *      "signature": "304402201e548ee45d835a7edda9cddbe26530563c1aceebbb25ebf89966eed8fec5d0e40220140aee033d42562b22c73f097249e9a59cef24a2a7e1c887c7a16691445c2987",
   *      "transactions": 0,
   *      "timestamp": {
   *        "epoch": 57144618,
   *        "unix": 1547245818,
   *        "human": "2019-01-11T22:30:18.000Z"
   *      }
   *    }
   *  ]
   * }
   *
   */
  const auto blocksResponse = connection.api.blocks.all(2, 1);
    Serial.print("\nBlocks Response: ");
    Serial.println(blocksResponse.c_str()); // The response is a 'std::string', to Print on Arduino, we need the c_string type.
  /**/

  /********************/

  /**
   * The following method can be used to search for a speficit Delegate.
   * In this case, 'boldninja'.
   *
   * This is equivalant to calling '167.114.29.49:4003/api/v2/delegates/boldninja'
   *
   * The response should be a json-formatted object
   * The "pretty print" version would look something like this:
   *
   * {
   *  "data": {
   *    "username": "boldninja",
   *    "address": "DKrACQw7ytoU2gjppy3qKeE2dQhZjfXYqu",
   *    "publicKey": "023ee98f453661a1cb765fd60df95b4efb1e110660ffb88ae31c2368a70f1f7359",
   *    "votes": 4970515580299,
   *    "rank": 27,
   *    "blocks": {
   *      "produced": 23867,
   *      "missed": 439,
   *      "last": {
   *        "id": "13492733628654518284",
   *        "height": 1178126,
   *        "timestamp": {
   *          "epoch": 57145090,
   *          "unix": 1547246290,
   *          "human": "2019-01-11T22:38:10.000Z"
   *        }
   *      }
   *    },
   *    "production": {
   *      "approval": 0.04,
   *      "productivity": 98.19
   *    },
   *    "forged": {
   *      "fees": 103507430299,
   *      "rewards": 4731200000000,
   *      "total": 4834707430299
   *    }
   *  }
   * }
   */
  const auto delegateResponse = connection.api.delegates.get("boldninja");
    Serial.print("\nDelegate Response: ");
    Serial.println(delegateResponse.c_str()); // The response is a 'std::string', to Print on Arduino, we need the c_string type.
  /**/

  /********************/

  /**
   * The following method can be used to get the Status of a Node.
   *
   * This is equivalant to calling '167.114.29.49:4003/api/v2/node/status'
   *
   * The response should be a json-formatted object
   * The "pretty print" version would look something like this:
   *
   * {
   *  "data": {
   *    "synced": true,
   *    "now": 1178395,
   *    "blocksCount": 0
   *   }
   * }
   */
  const auto nodeStatus = connection.api.node.status();
    Serial.print("\nNode Status: ");
    Serial.println(nodeStatus.c_str()); // The response is a 'std::string', to Print on Arduino, we need the c_string type.
  /**/

  /********************/

  /**
   * The following method can be used to get a list of 'All' 'Peers' on the network.
   *
   * The '2' and '1' refer to the pagination (e.g. response limit and how many pages)
   *
   * This is equivalant to calling 'http://167.114.29.49:4003/api/v2/peers?limit=2&page=1'
   *
   * The response should be a json-formatted object
   * The "pretty print" version would look something like this:
   *
   * {
   *  "meta": {
   *    "count": 2,
   *    "pageCount": 46,
   *    "totalCount": 91,
   *    "next": "\/api\/v2\/peers?limit=2&page=2",
   *    "previous": null,
   *    "self": "\/api\/v2\/peers?limit=2&page=1",
   *    "first": "\/api\/v2\/peers?limit=2&page=1",
   *    "last": "\/api\/v2\/peers?limit=2&page=46"
   *  },
   *  "data": [
   *    {
   *      "ip": "213.32.9.98",
   *      "port": 4002,
   *      "version": "2.1.0",
   *      "height": 1178420,
   *      "status": 200,
   *      "os": "linux",
   *      "latency": 15,
   *      "hashid": "1c254aa0"
   *    },
   *    {
   *      "ip": "137.74.237.196",
   *      "port": 4002,
   *      "version": "2.1.0",
   *      "height": 1178420,
   *      "status": 200,
   *      "os": "linux",
   *      "latency": 20,
   *      "hashid": "64e290cc"
   *    }
   *  ]
   * }
   */
  const auto allPeers = connection.api.peers.all(2, 1);
    Serial.print("\nAll Peers: ");
    Serial.println(allPeers.c_str()); // The response is a 'std::string', to Print on Arduino, we need the c_string type.
  /**/

  /********************/

  /**
   * The following method can be used to get a list of 'Transaction' 'Types'.
   *
   * This is equivalant to calling 'http://167.114.29.49:4003/api/v2/transactions/types'
   *
   * The response should be a json-formatted object
   * The "pretty print" version would look something like this:
   *
   * {
   *  "data": {
   *    "Transfer": 0,
   *    "SecondSignature": 1,
   *    "DelegateRegistration": 2,
   *    "Vote": 3,
   *    "MultiSignature": 4,
   *    "Ipfs": 5,
   *    "TimelockTransfer": 6,
   *    "MultiPayment": 7,
   *    "DelegateResignation": 8
   *  }
   * }
   */
  const auto transactionTypes = connection.api.transactions.types();
    Serial.print("\nTransaction Types: ");
    Serial.println(transactionTypes.c_str()); // The response is a 'std::string', to Print on Arduino, we need the c_string type.
  /**/

  /********************/

  /**
   * This method can be used to get a list of 'Vote' Transactions.
   * The '2' and '1' refer to the pagination (e.g. response limit and how many pages)
   *
   * This is equivalant to calling 'http://167.114.29.49:4003/api/v2/votes?limit=2&page=1'
   *
   * The response should be a json-formatted object
   * The "pretty print" version would look something like this:
   *
   * {
   *  "meta": {
   *    "count": 2,
   *    "pageCount": 6962,
   *    "totalCount": 13924,
   *     "next": "\/api\/v2\/votes?limit=2&page=2",
   *     "previous": null,
   *     "self": "\/api\/v2\/votes?limit=2&page=1",
   *     "first": "\/api\/v2\/votes?limit=2&page=1",
   *     "last": "\/api\/v2\/votes?limit=2&page=6962"
   *  },
   *  "data": [
   *    {
   *      "id": "315481aa6f8023beb5e0e89ab2b35f11e2fda3f3f34003e6ff563517fe497e0b",
   *      "blockId": "8426118737032066166",
   *      "version": 1,
   *      "type": 3,
   *      "amount": 0,
   *      "fee": 80494853,
   *      "sender": "DQjc6E6WAH7PNtPUNALjZmkyk5yU34RTkU",
   *      "recipient": "DQjc6E6WAH7PNtPUNALjZmkyk5yU34RTkU",
   *      "signature": "30450221009095883cb1e4ddab2724a9c7473ca12fd40f390765776e1258375859beb05f12022023d845fd9ce1e424a54adf056e3915ca2a2e9c55a6ea6713639e3da781263df5",
   *      "asset": {
   *        "votes": [
   *          "+033cce8deb934704f07c994f2f5cfe54d59e061aad8e2f7fc982e4fe978d312a43"
   *        ]
   *      },
   *      "confirmations": 11466,
   *      "timestamp": {
   *        "epoch": 57049890,
   *        "unix": 1547151090,
   *        "human": "2019-01-10T20:11:30.000Z"
   *      }
   *    },
   *    {
   *      "id": "8484b6de30fe2cc51e7c1844dfae436ba56de3280182e87ff37f1aab7a2d3aa3",
   *      "blockId": "4417493337461919261",
   *      "version": 1,
   *      "type": 3,
   *      "amount": 0,
   *      "fee": 80494853,
   *      "sender": "DQjc6E6WAH7PNtPUNALjZmkyk5yU34RTkU",
   *      "recipient": "DQjc6E6WAH7PNtPUNALjZmkyk5yU34RTkU",
   *      "signature": "30440220486bfed2fafdc4b56cd271cceff7849e952776ec10dcfa66ac172f21b9146f8302200751d94d938b0db033019c02ecf9a831fb228e025c5ecbd7a5b5ee8f8634fb1f",
   *      "asset": {
   *        "votes": [
   *          "-03f294777f7376e970b2bd4805b4a90c8449b5935d530bdb566d02800ac44a4c00"
   *        ]
   *      },
   *      "confirmations": 11480,
   *      "timestamp": {
   *        "epoch": 57049770,
   *        "unix": 1547150970,
   *        "human": "2019-01-10T20:09:30.000Z"
   *      }
   *    }
   *  ]
   * }
    */
  const auto allVotes = connection.api.votes.all(2, 1);
    Serial.print("\nAll Votes: ");
    Serial.println(allVotes.c_str()); // The response is a 'std::string', to Print on Arduino, we need the c_string type.
  /**/

  /********************/

  /**
   * This method can be used to get a list of 'Top' 'Wallets' (Wallets with the most ARK).
   * The '2' and '1' refer to the pagination (e.g. response limit and how many pages)
   *
   * This is equivalant to calling '167.114.29.49:4003/api/v2/wallets/top?limit=2&page=1'
   *
   * The response should be a json-formatted object
   * The "pretty print" version would look something like this:
   *
   * {
   *  "meta": {
   *    "count": 2,
   *    "pageCount": 97775,
   *    "totalCount": 195549,
   *    "next": "\/api\/v2\/wallets\/top?limit=2&page=2",
   *    "previous": null,
   *    "self": "\/api\/v2\/wallets\/top?limit=2&page=1",
   *    "first": "\/api\/v2\/wallets\/top?limit=2&page=1",
   *    "last": "\/api\/v2\/wallets\/top?limit=2&page=97775"
   *  },
   *  "data": [
   *    {
   *      "address": "D6Z26L69gdk9qYmTv5uzk3uGepigtHY4ax",
   *      "publicKey": "03d3fdad9c5b25bf8880e6b519eb3611a5c0b31adebc8455f0e096175b28321aff",
   *      "username": null,
   *      "secondPublicKey": null,
   *      "balance": 10181224932845318,
   *      "isDelegate": false
   *    },
   *    {
   *      "address": "DEyaFhDuaoQyKbFH4gJtYZvKkB6umyrEUj",
   *      "publicKey": "033c59dcdc36944cc28f68c1e4b47ac370fe326e53f9adf5f07764d3e8b74b1838",
   *      "username": "whalessio",
   *      "secondPublicKey": "03820f214bd49a09c636fa366b4b3c1a0dbd2953d14aac7e68a596e0636e662dfb",
   *      "balance": 2000035979999643,
   *      "isDelegate": true
   *    }
   *  ]
   * }
   */
   const auto topWallets = connection.api.wallets.top(2, 1);
    Serial.print("\nTop Wallets: ");
    Serial.println(topWallets.c_str()); // The response is a 'std::string', to Print on Arduino, we need the c_string type.
  /**/
};

/****************************************/

void setup()
{
  Serial.begin(115200); // Begin your Serial Connection. This allows you to monitor your boards output.

  WiFi.mode(WIFI_STA); // WiFi Station Mode. Meaning it will only connect to WiFi (vs. acting as an access point).
  WiFi.begin(ssid, password); // This starts your boards connection to WiFi.
  while (WiFi.status() != WL_CONNECTED) // This will delay your board from continuing until a WiFi connection is established.
  {
    delay(500);
    Serial.print(".");
  }
  Serial.println();

  Serial.print("Connected, IP address: ");
  Serial.println(WiFi.localIP());

  checkAPI(); // Begin API Requests
};

/****************************************/

void loop() {}; // We can leave this empty, as we don't want to repeat anything in this example.

```

</p>
</details>

> you can also download the `ESP8266.ino` Client Sketch [here](https://github.com/ARKEcosystem/cpp-client/blob/master/examples/arduino/ESP8266/ESP8266.ino).

---

## Crypto Example: Arduino Sketch

<details><summary>ESP8266.ino</summary>
<p>

```cpp
/**
 * This file is part of ARK Cpp Crypto.
 *
 * (c) ARK Ecosystem <info@ark.io>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 **/

/**
 * ESP8266 Cpp-Crypto Usage Sketch
 *
 * This sketch covers how to use the Cpp-Crypto library.
 * It allows your ESP8266 use ARK Ecosystem cryptographic protocols.
 */

 /**
 * NOTE: At the time of this writing, the Cpp-Crypto library requires running the 'ARDUINO_IDE.sh' bash script located in the 'extras' folder.
 * This converts our library to be compatible with the Arduino IDE.
 */

/****************************************/

/**
 * This is where you include the 'arkCrypto.h' header.
 * This allows your project to use ARK Cpp-Crypto.
 */
#include <arkCrypto.h>
/**/

/****************************************/

void checkCrypto() {
  /**
   * This is how you can check the default 'Network' "Transaction 'Fees' by type.
   * In this example, it should return a 'uint64_t' integer of '10000000' as the default 'Fee' for a 'Transaction' of 'Type' '0'.
   */
    ARK::Crypto::Configuration::Fee fee;
    unsigned long typeZeroTransactionFee = fee.get(0);
    Serial.print("\n Type 0 default Transaction Fee: ");
    Serial.println(typeZeroTransactionFee); // The response is a 'uint64_t' integer.

  /**/

  /********************/

  /**
   * The following methods allows you to create an ARK address.
   * This is done by passing a 12-word 'Passphrase' and the 'Network' 'Version' "byte".
   * The 'Version" "byte" is a BASE58 P2PKH byte. ARK Devnet is '0x1E'; ARK Mainnet is '0x17'.
   *
   * Given the passphrase ""bullet parade snow bacon mutual deposit brass floor staff list concert ask",
   * and the 'Devnet' 'Version' byte (0x1E); the ARK Address should be "DStZXkgpEjxbG355nQ26vnkp95p24U9tsV"
   */
  const auto passphrase = "bullet parade snow bacon mutual deposit brass floor staff list concert ask";
  const uint8_t networkVersion = 0x1E;

  Address arkAddress = Address::fromPassphrase(passphrase, networkVersion);
    Serial.print("\nARK Address: ");
    Serial.println(arkAddress.toString().c_str()); // The 'Address' object is a type. Use 'toString()' to view the output. Arduino requires a 'c_str()' to 'print'.
  /**/


  /********************/

  /**
   * The following methods allows create a 'PrivateKey'.
   * This is done by passing a 12-word 'Passphrase'.
   *
   * Given the passphrase ""bullet parade snow bacon mutual deposit brass floor staff list concert ask",
   * the 'PrivateKey" should be "950981ce17df662dbc1d25305f8597a71309fb8f7232203a0944477e2534b021".
   * This is a 'SHA256' of your "Passphrase".
   */
  const auto passphrase2 = "bullet parade snow bacon mutual deposit brass floor staff list concert ask";
  PrivateKey privateKeyFromPassphrase = PrivateKey::fromPassphrase(passphrase2);
    Serial.print("\nPrivateKey from Passphrase: ");
    Serial.println(privateKeyFromPassphrase.toString().c_str()); // The 'PrivateKey' object is a type. Use 'toString()' to view the output. Arduino requires a 'c_str()' to 'print'.
  /**/

  /********************/

  /**
   * The following methods allows create a 'PublicKey'.
   * This is done by passing a 12-word 'Passphrase'.
   *
   * Given the passphrase ""bullet parade snow bacon mutual deposit brass floor staff list concert ask",
   * the 'PublicKey" should be "029fdf41a7d69d8efc7b236c21b9509a23d862ea4ed8b13a56e31eee58dbfd97b4".
   */
  const auto passphrase3 = "bullet parade snow bacon mutual deposit brass floor staff list concert ask";
  PublicKey publicKeyFromPassphrase = PublicKey::fromPassphrase(passphrase3);
    Serial.print("\nPublicKey from Passphrase: ");
    Serial.println(publicKeyFromPassphrase.toString().c_str()); // the 'PublicKey' object is a type. Use 'toString()' to view the output. Arduino requires a 'c_str()' to 'print'.
  /**/

  /********************/

  /**
   * The following methods allows create a 'WIF'-style "PrivateKey".
   * 'WIF' stands for "Wallet Import Format"
   * This is done by passing a 12-word 'Passphrase' and the 'Network' 'WIF' "byte".
   * The 'WIF" "byte" is a BASE58 WIF byte. ARK Devnet is '0xaa'; ARK Mainnet is also '0xaa'.

   *
   * Given the passphrase ""bullet parade snow bacon mutual deposit brass floor staff list concert ask",
   * and the 'Devnet' 'WIF' byte (0xaa);
   * The 'WIF" should be "SEZuJZouNK8GLXNApjciH4QnSKiNr971exVcL2Y6XfrDF5o977zB".
   */
  const auto passphrase4 = "bullet parade snow bacon mutual deposit brass floor staff list concert ask";
  const uint8_t wifByte = 0xaa;
  WIF wifFromPassphrase = WIF::fromPassphrase(passphrase4, wifByte);
    Serial.print("\nWIF from Passphrase: ");
    Serial.println(wifFromPassphrase.toString().c_str()); // the 'WIF' object is a type. Use 'toString()' to view the output. Arduino requires a 'c_str()' to 'print'.
  /**/
};

/****************************************/

void setup()
{
  Serial.begin(115200); // Begin your Serial Connection. This allows you to monitor your boards output.

  checkCrypto(); // Begin Crypto example usage.
};

/****************************************/

void loop() {}; // We can leave this empty, as we don't want to repeat anything in this example.

```

</p>
</details>

> you can also download the `ESP8266.ino` Crypto Sketch [here](https://github.com/ARKEcosystem/cpp-crypto/blob/master/examples/arduino/ESP8266/ESP8266.ino).

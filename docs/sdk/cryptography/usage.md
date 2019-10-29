---
title: "Usage"
---

# Cryptography Clients

[[toc]]

## Installation

We recommend using each languages' standards for dependency management and builds and attempt to make our SDKs compatible with current practices for each language.

Below are useful links to get started with each SDK:

:::: tabs

::: tab javascript

#### NodeJS Installation

NodeJS can be downloaded [here](https://nodejs.org/en/download/).

An excellent way to manage your NodeJS installation and be able to work with multiple version is to go through [NVM](https://github.com/creationix/nvm).

#### Yarn Installation

Yarn can be downloaded [here](https://yarnpkg.com/lang/en/docs/install/#windows-stable).

#### Installation

```bash
$ yarn add @arkecosystem/crypto
```

:::

::: tab java

#### Java Installation

Java may be installed from [Oracle](https://www.java.com/en/download/help/download_options.xml) or from [OpenJDK](https://openjdk.java.net/). Recently licensing on Oracle's hosted Java installation changed, so we recommend using OpenJDK.

#### Gradle

```bash
compile group: 'org.arkecosystem.crypto', name: 'crypto', version: '0.1.2'
```

#### Maven

```xml
<dependency>
  <groupId>org.arkecosystem</groupId>
  <artifactId>crypto</artifactId>
  <version>0.1.2</version>
</dependency>
```

:::

::: tab .NET

#### .NET Installation

To get started with `C#` and the `.NET` framework, follow the [official guide](https://docs.microsoft.com/en-us/dotnet/framework/install/guide-for-developers).

#### Package Manager

```bash
Install-Package ARKEcosystem.Crypto -Version 0.2.1
```

#### .NET CLI

```bash
dotnet add package ARKEcosystem.Crypto --version 0.2.1
```

#### Paket CLI

```bash
paket add ARKEcosystem.Crypto --version 0.2.1
```

:::

::: tab php

#### PHP Installation

Documentation can be found [here](http://php.net/manual/en/install.php).

Others solutions like [LAMP](https://www.digitalocean.com/community/tutorials/how-to-install-linux-apache-mysql-php-lamp-stack-ubuntu-18-04), [WAMP](http://www.wampserver.com/) or [MAMP](https://www.mamp.info/en/) are available.

#### Composer

```bash
composer require arkecosystem/crypto
```

:::

::: tab python

#### Python Installation

Python can be downloaded [here](https://www.python.org/downloads/).

For further information on how to install Python on your operating system:

[Windows guide](https://docs.python.org/3/using/windows.html)

[Unix guide](https://docs.python.org/3/using/unix.html)

[OSx guide](https://docs.python.org/3/using/mac.html)

#### PIP

```bash
pip install arkecosystem-crypto
```

:::

::: tab golang

#### Golang Installation

Go can be installed by following [this guide](https://golang.org/doc/install).

The package can be installed by using the following commands in your terminal:

#### Go Get

```bash
go get github.com/ARKEcosystem/go-crypto/crypto
```

:::

::: tab C++

#### OS

If you are using CMake head over to [cmake.org](https://www.cmake.org/download/) or install it via Homebrew `brew install cmake`.

#### Make

```bash
git clone https://github.com/ArkEcosystem/cpp-crypto
cd cpp-crypto
# Init & Update Micro-Ecc Submodule
git submodule init
git submodule update
cmake .
cmake --build .
```

#### Arduino

Download and install the Arduino IDE (>=1.8.5) from [arduino.cc](https://www.arduino.cc/en/Main/Software)

Using the Arduino IDE's built-in Library Manager, install the ARK-Cpp-Crypto library.
Be sure to install the "-arduino" version of Cpp-Crypto.

##### Dependencies

Using the Arduino IDE's built-in Library Manager, also install the following libraries:

- micro-ecc
- ArduinoJson@5.13.5

#### Using With the Arduino IDE

Include the following header in your Arduino Sketch:

```cpp
#include <arkCrypto.h>
```

#### PlatformIO

Python is required to run PlatformIO, so grab an installer package from [python.org](https://www.python.org/downloads/).

Add the following line to your `platformio.ini` configuration file:

```asciidoc
lib_deps = ARK-Cpp-Crypto
```

This is an example of a fully configured `platformio.ini file for the Adafruit ESP32 Feather:

```asciidoc
; PlatformIO Project Configuration File
;
;   Build options: build flags, source filter
;   Upload options: custom upload port, speed and extra flags
;   Library options: dependencies, extra library storages
;   Advanced options: extra scripting
;
; Please visit documentation for the other options and examples
; https://docs.platformio.org/page/projectconf.html

[env:featheresp32]platform = espressif32
board = featheresp32
framework = arduino
lib_deps = ARK-Cpp-Crypto
upload_speed = 921600
monitor_speed = 115200

```

:::

::: tab ruby

#### Ruby Installation

Ruby can be downloaded [here](https://www.ruby-lang.org/en/downloads/).

For further information on how to install Ruby on your operating system:

Windows : [RubyInstaller](https://rubyinstaller.org/)

Unix & Linux: [rbenv](https://github.com/rbenv/rbenv) and [rvm](http://rvm.io/)

#### Gem Install

Add this line to your application's Gemfile and then execute `bundle`.

```bash
gem 'arkecosystem-crypto'
```

Alternatively, install it from the command line.

```bash
gem install arkecosystem-crypto
```

:::

::: tab swift

#### Requirements

- iOS 8.0+ / macOS 10.10+
- Xcode 9.0+
- Swift 4.0+

#### Swift Installation

Swift is the alternative to Object-C by Apple. To get started, head over to the official [guide](https://swift.org/getting-started/).

#### CocoaPods

[CocoaPods](https://cocoapods.org) is a dependency manager for Swift (and Objective-C) Cocoa Projects.
You can use it to integrate the ARK Swift Crypto in your project, by adding it to your `Podfile` as follows:

```
pod 'SwiftCrypto', :git => 'https://github.com/ARKEcosystem/swift-crypto.git', :tag => '1.0.1'
```

Afterward, install it by running `pod install`.
You are then able to use it in your project by using `import SwiftCrypto`.

:::

::: tab rust

#### Rust Installation

Rust can be installed by following [this guide](https://www.rust-lang.org/install.html).

#### Cargo

Add the following to your Cargo.toml:

```
[dependencies]
arkecosystem-crypto = {git = "https://github.com/ARKEcosystem/rust-crypto", branch = "master" }
```

:::

::: tab elixir

#### Elixir Installation

Elixir can be installed by following [this guide](https://elixir-lang.org/install.html).

#### Installation

The package can be installed by adding `arkecosystem_crypto to your list of dependencies in`mix.exs`:

```elixir
def deps do
  {:arkecosystem_crypto, "~> 0.1.0"}
end
```

Once installed, you should run the following command to install the dependencies:

```bash
mix deps.get
```

:::

::::

## Development Setup

If you want to contribute to the code of this SDK, execute the following commands:

:::: tabs

::: tab javascript

1. Fork the [package](https://github.com/ARKEcosystem/javascript-crypto).

2. Clone your forked repository.

```bash
git clone https://github.com/<githubusername>/javascript-crypto
```

3. Next, move into the cloned directory.

```bash
cd javascript-crypto
```

4. Proceed to install the dependencies.

```bash
yarn install
```

5. Dependencies are now installed, you can now run the tests to see if everything is running as it should.

```bash
yarn test
```

:::

::: tab java

:::

::: tab .NET

:::

::: tab php

1. Fork the [package](https://github.com/ARKEcosystem/php-crypto).

2. Clone your forked repository.

```bash
$ git clone https://github.com/<githubusername>/php-crypto
```

3. Next, move into the cloned directory.

```bash
$ cd php-crypto
```

4. Install the dependencies with composer.

```bash
$ composer install
```

5. Dependencies are now installed, you can now run the tests to see if everything is running as it should.

```bash
$ phpunit
...
```

:::

::: tab python

1. Fork the [package](https://github.com/ARKEcosystem/python-crypto).

2. Clone your forked repository.

```bash
git clone https://github.com/<githubusername>/python-crypto
```

3. Next, move into the cloned directory.

```bash
cd python-crypto
```

4. The next step would be to create something like a [virtual environment](https://virtualenv.pypa.io/en/latest/) and install the dependencies of this package inside it.

5. Proceed to install the dependencies. These are listed inside the setup.py file.

```bash
pip install flake8 flake8-import-order flake8-print flake8-quotes pytest pytest-cov
```

6. Dependencies are now installed, you can now run the tests to see if everything is running as it should.

```bash
pytest
```

:::

::: tab golang

1. Fork the [package](https://github.com/ARKEcosystem/go-crypto).

2. Clone your forked repository.

```bash
git clone https://github.com/<githubusername>/go-crypto
```

3. Next, move into the cloned directory.

```bash
cd go-crypto
```

4. Install the dependencies.

```bash
# -t Will Also Fetch Dependencies Related to Tests
go get -t ./...
```

5. Dependencies are now installed, you can now run the tests to see if everything is running as it should.

```bash
$ go test ./...
```

:::

::: tab C++

1. Fork the [package](https://github.com/ARKEcosystem/cpp-crypto).

2. Clone the newly forked repository.

```bash
git clone https://github.com/<githubusername>/cpp-crypto
```

3. Next, we move into the cloned directory.

```bash
cd cpp-crypto
```

4. Build the package using CMake.

```bash
cmake
cmake --build .
```

5. Now we can run the tests to see if everything is running as it should.

```bash
./test/ARK-Cpp-Crypto-tests
```

#### ESP8266 (PlatformIO)

```bash
pio run -e esp8266 -t upload
```

#### ESP32 (PlatformIO)

```bash
pio run -e esp32 -t upload
```

:::

::: tab ruby

:::

::: tab swift

1. Fork the [package](https://github.com/ARKEcosystem/swift-crypto).

2. Clone your forked repository.

```bash
git clone https://github.com/<githubusername>/swift-crypto
```

3. Next, move into the cloned directory.

```bash
cd swift-crypto/Crypto
```

4. Install the dependencies.

```bash
pod install
```

Installing the dependency (BitcointKit) of this SDK will require a good bit of time. So after running `pod install` it might take up to 10 minutes to install the BitcoinKit dependency.
This is due to the crypto dependencies it relies on, like secp256k, that are compiled from scratch during the install.
Don't be alarmed when it looks like the installation got stuck. It's just the underlying dependencies taking their time.

You will also need to install [Swiftlint](https://github.com/realm/SwiftLint) as an additional step, as that is used to lint our code.
The easiest way to install this is by using Homebrew: `brew install swiftlint`.

5. Dependencies are now installed, you can now run the tests to see if everything is running like it should be opening the `Crypto.xcworkspace` in Xcode.

:::

::: tab rust

1. Fork the [package](https://github.com/ARKEcosystem/rust-crypto).

2. Clone your forked repository.

```bash
git clone https://github.com/<githubusername>/rust-crypto
```

3. Next, move into the cloned directory.

```bash
cd rust-crypto
```

4. Install the dependencies.

```bash
cargo build
```

5. Dependencies are now installed, you can now run the tests to see if everything is running as it should.

```bash
cargo test
```

:::

::: tab elixir

1. Fork the [package](https://github.com/ARKEcosystem/elixir-crypto).

2. Clone your forked repository.

```bash
git clone https://github.com/<githubusername>/elixir-crypto
```

3. Next, move into the cloned directory.

```bash
cd elixir-crypto
```

4. Install the dependencies.

```bash
mix deps.get
```

5. Dependencies are now installed, you can now run the tests to see if everything is running as it should.

```bash
mix test
```

:::

::::

## Initialization

Depending on the library, you must import and initialize it in a specific way.

:::: tabs

::: tab javascript

To perform cryptographic functions with the ARK JavaScript Crypto library, you must first require it:

```js
const { Crypto } = require("@arkecosystem/crypto");
```

Throughout this document, the keys object used is:

```js
const BIP32Wallet = Crypto.HDWallet.fromMnemonic("this is a top-secret passphrase");

const keys = Crypto.HDWallet.getKeys(BIP32Wallet);
```

:::

::: tab java

```java
import org.arkecosystem.crypto.transactions.Transaction;
import org.arkecosystem.crypto.transactions.builder.Transfer;
```

:::

::: tab .NET

```csharp
using ARKEcosystem.Crypto;
```

:::

::: tab php

```php
use ARKEcosystem\Crypto\Transactions\Builder\Transfer;
```

:::

::: tab python

```python
from crypto.transactions.builder.transfer import Transfer
```

:::

::: tab go

```go
package main

import (
    crypto "github.com/ARKEcosystem/go-crypto/crypto"
)
```

:::

::: tab C++

```cpp
#include <arkCrypto.h>
```

:::

::: tab ruby

```ruby
require 'arkecosystem/crypto'
```

:::

::: tab swift
:::

::: tab rust

```rust
use arkecosystem_crypto::transactions::builder;
```

:::

::: tab elixir

```elixir
alias ARKEcosystem.Crypto.Transactions.Transaction
alias ARKEcosystem.Crypto.Transactions.Builder
```

:::

::::

## Transactions

A transaction is an object specifying the transfer of funds from the sender's wallet to the recipient's. Each transaction must be signed by the sender's private key to prove authenticity and origin. After broadcasting through the [client SDK](/sdk/clients/usage.md), a transaction is permanently incorporated in the blockchain by a Delegate Node.

### Sign

The crypto SDK can sign a transaction using your private key or passphrase (from which the private key is generated). Ensure you are familiar with [digital signatures](https://en.wikipedia.org/wiki/Digital_signature) before using the crypto SDKs.

:::: tabs

::: tab javascript

The transaction object used for this section:

```js
const transaction = {
  type: 0,
  amount: 1000,
  fee: 2000,
  recipientId: "DM7UiH4b2rW2Nv11Wu6ToiZi8MJhGCEWhP",
  timestamp: 121212,
  asset: {},
  senderPublicKey: "034151a3ec46b5670a682b0a63394f863587d1bc97483b1b"
};
```

For serializing and deserializing, we must require the Transaction model:

```js
const { Transaction } = require("@arkecosystem/crypto").models;
```

```js
crypto.sign(transaction, keys);
```

:::

::: tab java

```java
import org.arkecosystem.crypto.transactions.Transaction;
import org.arkecosystem.crypto.transactions.builder.Transfer;

Transaction transfer = new Transfer()
    .recipient('AXoXnFi4z1Z6aFvjEYkDVCtBGW2PaRiM25')
    .amount(133380000000)
    .vendorField("This is a transaction from Java")
    .sign('this is a top secret passphrase')
    .transaction;
```

:::

::: tab .NET

```csharp
using ARKEcosystem.Crypto;

var transaction = Crypto.Builder.Transfer.Create(
  "AXoXnFi4z1Z6aFvjEYkDVCtBGW2PaRiM25",
  133380000000,
  "This is a transaction from .NET",
  "This is a top secret passphrase"
);
```

:::

::: tab php

```php
use ARKEcosystem\Crypto\Transactions\Builder\Transfer;

$transaction = Transfer::new()
    ->recipient('DGihocTkwDygiFvmg6aG8jThYTic47GzU9')
    ->amount(1 * 10 ** 8)
    ->vendorField('This is a transaction from PHP')
    ->sign('This is a top secret passphrase');
```

:::

::: tab python

```python
from crypto.transactions.builder.transfer import Transfer

tx = Transfer(recipientId='D5rHMAmTXVbG7HVF3NvTN3ghpWGEii5mH2', amount=1000)
tx.sign('shed flock autumn there ghost slight danger story topic sustain orange slender')
```

:::

::: tab golang

```go
transaction := crypto.BuildTransfer(
  "address",
  uint64(amount),
  "Hello World",
  "top secret",
  "second top secret",
  )
```

:::

::: tab C++

Using the Transaction builder class.

```cpp
Ark::Crypto::Transactions::Transaction transfer = Ark::Crypto::Transactions::Builder::buildTransfer(
    "recipientID",
    1000000000,
    "vendorfield",
    "passphrase",
    "secondPassphrase");
```

We can also do this manually.

```cpp
  Ark::Crypto::Transactions::Transaction transaction;
  transaction.type = Ark::Crypto::Enums::Types::TRANSFER;
  transaction.fee = Ark::Crypto::Configuration::Fee().get(Ark::Crypto::Enums::Types::TRANSFER);
  transaction.recipientId = "recipientId";
  transaction.amount = 1000000000;
  transaction.vendorField = "vendorfield";

  std::string signature = sign(transaction, "passphrase", "secondPassphrase");
```

:::

::: tab ruby

```ruby
require 'arkecosystem/crypto'

transaction = ARKEcosystem::Crypto::Transactions::Builder::Transfer.new()
  .set_recipient_id('DGihocTkwDygiFvmg6aG8jThYTic47GzU9')
  .set_amount(1 * 10 ** 8)
  .set_vendor_field('This is a transaction from Ruby')
  .sign('This is a top secret passphrase')

puts transaction.verify
puts transaction.to_params
```

:::

::: tab swift

```swift
// Creating a transaction automatically signs it with the provides passphrase(s)
let transfer = ARKBuilder.buildTransfer(
    "secret passphrase",
    secondPassphrase: nil,
    to: "DBk4cPYpqp7EBcvkstVDpyX7RQJNHxpMg8",
    amount: 10000000,
    vendorField: "this is a tx from Swift")
```

:::

::: tab rust

```rust
use arkecosystem_crypto::transactions::builder;

let transaction = builder::build_transfer(
    "this is a top secret passphrase",
    None,
    "DGihocTkwDygiFvmg6aG8jThYTic47GzU9",
    10_000_000,
    "This is a transaction from Rust",
).unwrap();
```

:::

::: tab elixir

```elixir
alias ARKEcosystem.Crypto.Transactions.Transaction
alias ARKEcosystem.Crypto.Transactions.Builder

transaction = Builder.build_transfer(
    "AXoXnFi4z1Z6aFvjEYkDVCtBGW2PaRiM25",
    133_380_000_000,
    "This is a transaction from Elixir",
    "this is a top secret passphrase"
)

IO.puts Transaction.verify(transaction)
```

:::

::::

### Serialize (AIP11)

Serialization of a transaction object ensures it is compact and properly formatted to be incorporated in the ARK blockchain. If you are using the crypto SDK in combination with the public API SDK, you should not need to serialize manually.

:::: tabs

::: tab javascript

```js
const serialized = Transactions.Serializer.getBytes(transaction).toString("hex");
```

:::

::: tab java

```java
import org.arkecosystem.crypto.transactions.Serializer;

byte[] bytes = new Serializer().serialize(transaction);
String serializedHex = Arrays.toString(bytes);
```

:::

::: tab .NET

```csharp
using ARKEcosystem.Crypto;

var transaction = new Serializer(transactionObject).Serialize();
```

:::

::: tab php

```php
use ARKEcosystem\Crypto\Transactions\Serializer;

$buffer = Serializer::new($transaction)->serialize();
```

:::

::: tab python

```python
from crypto.transactions.serializer import Serializer

serialized_transaction = Serializer(transaction_data).serialize()
```

:::

::: tab golang

```go
serialized := crypto.SerializeTransaction(transaction)
```

:::

::: tab C++

```cpp
Ark::Crypto::Transactions::Transaction transfer = Ark::Crypto::Transactions::Builder::buildTransfer(
    "recipientID",
    1000000000,
    "vendorfield",
    "passphrase",
    "secondPassphrase");

Ark::Crypto::Transactions::Serializer serializer(transfer);
std::string serializedTransaction = serializer.serialize();
```

:::

::: tab ruby

```ruby
require 'arkecosystem/crypto'

serializer = ARKEcosystem::Crypto::Transactions::Serializer.new(transaction)

puts serializer.serialize
```

:::

::: tab swift

```swift
let serialized = ARKSerializer.serialize(transaction: transaction)
```

:::

::: tab rust

```rust
use arkecosystem_crypto::transactions;

println!("{:?}", transactions::serialize(&transaction));
```

:::

::: tab elixir

```elixir
alias ARKEcosystem.Crypto.Transactions.Serializer

serialized = Serializer.serialize(transaction, %{underscore: true})

IO.puts serialized
```

:::

::::

### Deserialize (AIP11)

A serialized transaction may be deserialized for inspection purposes. The public API does not return serialized transactions, so you should only need to deserialize in exceptional circumstances.

:::: tabs

::: tab javascript

```js
const deserialized = Transactions.deserializer.deserialize(serialized);
```

:::

::: tab java

```java
import org.arkecosystem.crypto.transactions.Deserializer;

Transaction transaction = new Deserializer().deserialize("serialized-hex");
```

:::

::: tab .NET

```csharp
using ARKEcosystem.Crypto;

var transaction = new Deserializer(serializedTransaction).Deserialize();
```

:::

::: tab php

```php
use ARKEcosystem\Crypto\Transactions\Deserializer;

$transaction = Deserializer::new($serializedTransaction)->deserialize();
```

:::

::: tab python

```python
from crypto.transactions.deserializer import Deserializer

transaction_data = Deserializer(serialized_data).deserialize()
```

:::

::: tab golang

```go
transaction := crypto.DeserializeTransaction(serialized)
```

:::

::: tab C++

```cpp
Ark::Crypto::Transactions::Deserializer deserializer("serialized_transaction");
auto actual = deserializer.deserialize();
```

:::

::: tab ruby

```ruby
require 'arkecosystem/crypto'

deserializer = ARKEcosystem::Crypto::Transactions::Deserializer.new(serialized_transaction)
```

:::

::: tab swift

```swift
let deserialized = ARKDeserializer.deserialize(serialized: serialized)
```

:::

::: tab rust

```rust
use arkecosystem_crypto::transactions;

let transaction = transactions::deserialize(&serialized_transaction);
```

:::

::: tab elixir

```elixir
alias ARKEcosystem.Crypto.Transactions.Deserializer

transaction = Deserializer.deserialize(serialized_transaction)
```

:::

::::

## Message

The crypto SDK not only supports transactions but can also work with other arbitrary data (expressed as strings).

### Sign

Signing a string works much like signing a transaction: in most implementations, the message is hashed, and the resulting hash is signed using the `private key` or `passphrase`.

:::: tabs

::: tab javascript

```js
const signature = Crypto.Message.sign("Hello World", "this is a top secret passphrase")
```

:::

::: tab java

```java
import org.arkecosystem.crypto.utils.Message;

Message message = Message.sign("Hello World", "this is a top secret passphrase");
```

:::

::: tab .NET

```csharp
using ARKEcosystem.Crypto;

var message = Message.Sign("Hello World", "this is a top secret passphrase");
```

:::

::: tab php

```php
use ARKEcosystem\Crypto\Utils\Message;

$message = Message::sign('Hello World', 'this is a top secret passphrase');
```

:::

::: tab python

```python
from crypto.utils.message import Message

message = Message.sign('Hello World', 'this is a top secret passphrase')
```

:::

::: tab golang

```go
message, _ := crypto.SignMessage("Hello World", "this is a top secret passphrase")
```

:::

::: tab C++

```cpp
const auto text = "Computer science is no more about computers than astronomy is about telescopes.";
const auto passphrase = "bullet parade snow bacon mutual deposit brass floor staff list concert ask";
Ark::Crypto::Utils::Message message;
message.sign(text, passphrase);
```

:::

::: tab ruby

```ruby
require 'arkecosystem/crypto'

message = ARKEcosystem::Crypto::Utils::Message.sign('Hello World', 'this is a top secret passphrase')
```

:::

::: tab swift

```swift
let message = ARKMessage.sign(message: "Hello World", passphrase: "this is a top secret passphrase")
```

:::

::: tab rust

```rust
use arkecosystem_crypto::utils::Message;

let message = Message::sign("Hello World", "this is a top secret passphrase");
```

:::

::: tab elixir

```elixir
alias ARKEcosystem.Crypto.Utils.Message

message = Message.sign("Hello World", "passphrase")
```

:::

::::

### Verify

A message's signature can easily be verified by hash, without the private key that signed the message, by using the `verify` method.

:::: tabs

::: tab javascript

```js
Crypto.Message.verify({ message, publicKey, signature })

Crypto.Hash.verifyECDSA(hash, signatureECDSA, keys.publicKey);

Crypto.Hash.verifySchnorr(hash, signatureSchnorr, keys.publicKey);
```

:::

::: tab java

```java
import org.arkecosystem.crypto.utils.Message;

Message message = Message.sign("Hello World", "this is a top secret passphrase");
System.out.println(message.verify());
```

:::

::: tab .NET

```csharp
using ARKEcosystem.Crypto;

var message = Message.Sign("Hello World", "passphrase");
Console.WriteLine(message.Verify());
```

:::

::: tab php

```php
use ARKEcosystem\Crypto\Utils\Message;

$message = Message::new([
    'publickey' => '02e012f0a7cac12a74bdc17d844cbc9f637177b470019c32a53cef94c7a56e2ea9',
    'signature' => '304402202e00853a2438249fbaa030151b47e25bc1668dfed6eb7bc159fb347e50e7a87e0220472dcef61c89904fd05e2069cedf89ccbf644fe8d741a0b78aa3933056ca0802',
    'message' => 'Hello World'
]);

echo($message->verify() ? 'Valid' : 'Invalid');
```

:::

::: tab python

```python
from crypto.utils.message import Message

message = Message(
    message='Hello World',
    signature='304402202e00853a2438249fbaa030151b47e25bc1668dfed6eb7bc159fb347e50e7a87e0220472dcef61c89904fd05e2069cedf89ccbf644fe8d741a0b78aa3933056ca0802',
    public_key='02e012f0a7cac12a74bdc17d844cbc9f637177b470019c32a53cef94c7a56e2ea9'
)
message.verify() is True
```

:::

::: tab golang

```go
message, _ := crypto.SignMessage("Hello World", "top secret")
ok, err := message.Verify()
```

:::

::: tab C++

```cpp
const auto text = "Computer science is no more about computers than astronomy is about telescopes.";
Ark::Crypto::Identities::PublicKey publicKey = Ark::Crypto::Identities::PublicKey::fromHex("0275776018638e5c40f1b922901e96cac2caa734585ef302b4a2801ee9a338a456");
std::vector<uint8_t> signature = HexToBytes("3044022021704f2adb2e4a10a3ddc1d7d64552b8061c05f6d12a168c69091c75581d611402200edf37689d2786fc690af9f0f6fa1f629c95695039f648a6d455484302402e93");

Ark::Crypto::Utils::Message message(
    text,
    publicKey,
    signature
);

bool isValid = message.verify();
```

:::

::: tab ruby

```ruby
require 'arkecosystem/crypto'

message = ARKEcosystem::Crypto::Utils::Message.new(
  publickey: '02e012f0a7cac12a74bdc17d844cbc9f637177b470019c32a53cef94c7a56e2ea9',
  signature: '304402202e00853a2438249fbaa030151b47e25bc1668dfed6eb7bc159fb347e50e7a87e0220472dcef61c89904fd05e2069cedf89ccbf644fe8d741a0b78aa3933056ca0802',
  message: 'Hello World'
)

puts message.verify
```

:::

::: tab swift

```swift
// Create a message by providing the required info, or sign one with the method shown above
let message = ARKMessage(publicKey: "034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192",
                         signature: "304402200fb4adddd1f1d652b544ea6ab62828a0a65b712ed447e2538db0caebfa68929e02205ecb2e1c63b29879c2ecf1255db506d671c8b3fa6017f67cfd1bf07e6edd1cc8",
                         message: "Hello World")

print(message.verify())
```

:::

::: tab rust

```rust
use arkecosystem_crypto::utils::Message;

let message = Message::new(
    "034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192",
    "304402200fb4adddd1f1d652b544ea6ab62828a0a65b712ed447e2538db0caebfa68929e02205ecb2e1c63b29879c2ecf1255db506d671c8b3fa6017f67cfd1bf07e6edd1cc8",
    "Hello World"
);

println!("Valid: {:?}", message.verify());
```

:::

::: tab elixir

```elixir
alias ARKEcosystem.Crypto.Utils.Message

message = Message.sign("Hello World", "passphrase")

IO.puts Message.verify(message.message, message.signature, message.publicKey)
```

:::

::::

## Identities

The identities class allows for the creation and inspection of keypairs from `passphrases`. Here you find vital functions when creating transactions and managing wallets.

### Derive the Address from a Passphrase

:::: tabs

::: tab javascript

To use identities in your project, first, require the module.

```js
const { Identities } = require("@arkecosystem/crypto");
```

```js
Identities.Address.fromPassphrase("this is a top secret passphrase");
```

:::

::: tab java

```java
import org.arkecosystem.crypto.identities.Address;

Address.fromPassphrase("this is a top secret passphrase");
```

:::

::: tab .NET

```csharp
using ARKEcosystem.Crypto;

Identities.Address.FromPassphrase('this is a top secret passphrase');
```

:::

::: tab php

```php
ARKEcosystem\Crypto\Identities\Address::fromPassphrase('this is a top secret passphrase');
```

:::

::: tab python

```python
from crypto.identity.address import address_from_passphrase

address = address_from_passphrase('this is a top secret passphrase')
```

:::

::: tab golang

```go
address, _ := crypto.AddressFromPassphrase("this is a top secret passphrase")
```

:::

::: tab C++

```cpp
const auto passphrase = "bullet parade snow bacon mutual deposit brass floor staff list concert ask";
const uint8_t networkVersion = 0x1E;
Ark::Crypto::Identities::Address address = Ark::Crypto::Identities::Address::fromPassphrase(passphrase, networkVersion);
```

:::

::: tab ruby

```ruby
ARKEcosystem::Crypto::Identities::Address.from_passphrase('this is a top secret passphrase')
```

:::

::: tab swift

```swift
let address = ARKAddress.from(passphrase: "this is a top secret passphrase")
```

:::

::: tab rust

```rust
use arkecosystem_crypto::identities::address;
address::from_passphrase("this is a top secret passphrase", None);
```

:::

::: tab elixir

```elixir
ARKEcosystem.Crypto.Identities.Address.from_passphrase('this is a top secret passphrase')
```

:::

::::

### Derive the Address from a Public Key

:::: tabs

::: tab javascript

```js
Identities.Address.fromPublicKey(
  keys.publicKey
);
```

:::

::: tab java

```java
import org.arkecosystem.crypto.identities.Address;

Address.fromPublicKey("034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192");
```

:::

::: tab .NET

```csharp
using ARKEcosystem.Crypto;

Identities.Address.FromPublicKey('034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192');
```

:::

::: tab php

```php
ARKEcosystem\Crypto\Identities\Address::fromPublicKey('034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192');
```

:::

::: tab python

```python
from crypto.identity.address import address_from_public_key

address = address_from_public_key('034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192')
```

:::

::: tab golang

```go
publicKey, _ := crypto.PublicKeyFromPassphrase("this is a top secret passphrase")
address := publicKey.ToAddress()
```

:::

::: tab C++

```cpp
Ark::Crypto::Identities::PublicKey publicKey("029fdf41a7d69d8efc7b236c21b9509a23d862ea4ed8b13a56e31eee58dbfd97b4");
const uint8_t networkVersion = 0x1E;
Ark::Crypto::Identities::Address address = Ark::Crypto::Identities::Address::fromPublicKey(publicKey, networkVersion);
```

:::

::: tab ruby

```ruby
ARKEcosystem::Crypto::Identities::Address.from_public_key('034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192')
```

:::

::: tab swift

```swift
let address = ARKAddress.from(publicKey: "034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192")
```

:::

::: tab rust

```rust
use arkecosystem_crypto::identities::{address, public_key};
let public_key = public_key::from_hex("034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192").unwrap();
address::from_public_key(&public_key, None);
```

:::

::: tab elixir

```elixir
ARKEcosystem.Crypto.Identities.Address.from_public_key('034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192')
```

:::

::::

### Derive the Address from a Private Key

:::: tabs

::: tab javascript

```js
Identities.Address.fromPrivateKey({
  publicKey: keys.publicKey
});
```

:::

::: tab java

```java
import org.arkecosystem.crypto.identities.Address;

Address.fromPrivateKey(privateKey);
```

:::

::: tab .NET

```csharp
using ARKEcosystem.Crypto;

Identities.Address.FromPrivateKey('d8839c2432bfd0a67ef10a804ba991eabba19f154a3d707917681d45822a5712');
```

:::

::: tab php

```php
ARKEcosystem\Crypto\Identities\Address::fromPrivateKey('d8839c2432bfd0a67ef10a804ba991eabba19f154a3d707917681d45822a5712');
```

:::

::: tab python

```python
from crypto.identity.address import address_from_private_key

address = address_from_private_key('d8839c2432bfd0a67ef10a804ba991eabba19f154a3d707917681d45822a5712')
```

:::

::: tab golang

```go
privateKey, _ := crypto.PrivateKeyFromPassphrase("this is a top secret passphrase")

fmt.Println(privateKey.ToAddress())
```

:::

::: tab C++

```cpp
PrivateKey privateKey("950981ce17df662dbc1d25305f8597a71309fb8f7232203a0944477e2534b021");
const uint8_t networkVersion = 0x1E;
Ark::Crypto::Identities::Address address = Ark::Crypto::Identities::Address::fromPrivateKey(privateKey, networkVersion);
```

:::

::: tab ruby

```ruby
ARKEcosystem::Crypto::Identities::Address.from_private_key('d8839c2432bfd0a67ef10a804ba991eabba19f154a3d707917681d45822a5712')
```

:::

::: tab swift

```swift
let address = ARKAddress.from(privateKey: ARKPrivateKey.from(hex: "d8839c2432bfd0a67ef10a804ba991eabba19f154a3d707917681d45822a5712"))
```

:::

::: tab rust

```rust
use arkecosystem_crypto::identities::{address, private_key};
let private_key = private_key::from_hex("d8839c2432bfd0a67ef10a804ba991eabba19f154a3d707917681d45822a5712").unwrap();
address::from_private_key(&private_key, None);
```

:::

::: tab elixir

```elixir
ARKEcosystem.Crypto.Identities.Address.from_private_key('d8839c2432bfd0a67ef10a804ba991eabba19f154a3d707917681d45822a5712')
```

:::

::::

### Validate an Address

:::: tabs

::: tab javascript

```js
Identities.Address.validate("D61mfSggzbvQgTUe6JhYKH2doHaqJ3Dyib");
```

:::

::: tab java

```java
import org.arkecosystem.crypto.identities.Address;

Address.validate("D61mfSggzbvQgTUe6JhYKH2doHaqJ3Dyib");
```

:::

::: tab .NET

```csharp
using ARKEcosystem.Crypto;

Identities.Address.Validate('D61mfSggzbvQgTUe6JhYKH2doHaqJ3Dyib');
```

:::

::: tab php

```php
ARKEcosystem\Crypto\Identities\Address::validate('D61mfSggzbvQgTUe6JhYKH2doHaqJ3Dyib');
```

:::

::: tab python

```python
from crypto.identity.address import validate_address

is_valid = validate_address('DGihocTkwDygiFvmg6aG8jThYTic47GzU9')
```

:::

::: tab golang

```go
fmt.Println(crypto.ValidateAddress("D61mfSggzbvQgTUe6JhYKH2doHaqJ3Dyib"))
```

:::

::: tab C++

```cpp
Ark::Crypto::Identities::Address address("DStZXkgpEjxbG355nQ26vnkp95p24U9tsV");
const uint8_t networkVersion = 0x1E;
bool isValid = Ark::Crypto::Identities::Address::validate(address, networkVersion);
```

:::

::: tab ruby

```ruby
ARKEcosystem::Crypto::Identities::Address.validate('address')
```

:::

::: tab swift

```swift
print(ARKAddress.validate(address: "D61mfSggzbvQgTUe6JhYKH2doHaqJ3Dyib"))
```

:::

::: tab rust

```rust
use arkecosystem_crypto::identities::address;
address::validate("D61mfSggzbvQgTUe6JhYKH2doHaqJ3Dyib", None);
```

:::

::: tab elixir

```elixir
ARKEcosystem.Crypto.Identities.Address.validate('D61mfSggzbvQgTUe6JhYKH2doHaqJ3Dyib')
```

:::

::::

## Private Key

::: warning

As the name implies, private keys and passphrases are to remain private. Never store these unencrypted and minimize access to these secrets

:::

### Derive the Private Key from a Passphrase

:::: tabs

::: tab javascript

```js
Identities.PrivateKey.fromPassphrase("this is a top secret passphrase");
```

:::

::: tab java

```java
import org.arkecosystem.crypto.identities.PrivateKey;

PrivateKey.fromPassphrase("this is a top secret passphrase").getPrivateKeyAsHex();
```

:::

::: tab .NET

```csharp
using ARKEcosystem.Crypto;

Identities.PrivateKey.FromPassphrase('this is a top secret passphrase');
```

:::

::: tab php

```php
ARKEcosystem\Crypto\Identities\PrivateKey::fromPassphrase('this is a top secret passphrase');
```

:::

::: tab python

```python
from crypto.identity.private_key import PrivateKey

private_key = PrivateKey.from_passphrase('this is a top secret passphrase').to_hex()
```

:::

::: tab golang

```go
privateKey, _ := crypto.PrivateKeyFromPassphrase("this is a top secret passphrase")
```

:::

::: tab C++

```cpp
const auto passphrase = "bullet parade snow bacon mutual deposit brass floor staff list concert ask";
Ark::Crypto::Identities::PrivateKey privateKey = Ark::Crypto::Identities::PrivateKey::fromPassphrase(passphrase);
```

:::

::: tab ruby

```ruby
ARKEcosystem::Crypto::Identities::PrivateKey.from_passphrase('this is a top secret passphrase')
```

:::

::: tab swift

```swift
let privateKey = ARKPrivateKey.from(passphrase: "this is a top secret passphrase")
```

:::

::: tab rust

```rust
use arkecosystem_crypto::identities::private_key;
private_key::from_passphrase("this is a top secret passphrase").unwrap();
```

:::

::: tab elixir

```elixir
ARKEcosystem.Crypto.Identities.PrivateKey.from_passphrase('this is a top secret passphrase')
```

:::

::::

### Derive the Private Key Instance Object from a Hexadecimal Encoded String

:::: tabs

::: tab javascript

This function has not been implemented in this client library.

:::

::: tab java

```java
import org.arkecosystem.crypto.identities.PrivateKey;

PrivateKey.fromHex("d8839c2432bfd0a67ef10a804ba991eabba19f154a3d707917681d45822a5712").getPrivateKeyAsHex();
```

:::

::: tab .NET

```csharp
using ARKEcosystem.Crypto;

Identities.PrivateKey.FromHex('d8839c2432bfd0a67ef10a804ba991eabba19f154a3d707917681d45822a5712');
```

:::

::: tab php

```php
ARKEcosystem\Crypto\Identities\PrivateKey::fromHex('d8839c2432bfd0a67ef10a804ba991eabba19f154a3d707917681d45822a5712');
```

:::

::: tab python

```python
from crypto.identity.private_key import PrivateKey

private_key = PrivateKey.from_hex('d8839c2432bfd0a67ef10a804ba991eabba19f154a3d707917681d45822a5712')
```

:::

::: tab golang

```go
privateKey, _ := crypto.PrivateKeyFromHex("d8839c2432bfd0a67ef10a804ba991eabba19f154a3d707917681d45822a5712")
```

:::

::: tab C++

```cpp
Ark::Crypto::Identities::PrivateKey privateKey = Ark::Crypto::Identities::PrivateKey::fromHex("950981ce17df662dbc1d25305f8597a71309fb8f7232203a0944477e2534b021");
```

:::

::: tab ruby

```ruby
ARKEcosystem::Crypto::Identities::PrivateKey.from_hex('d8839c2432bfd0a67ef10a804ba991eabba19f154a3d707917681d45822a5712')
```

:::

::: tab swift

```swift
let privateKey = ARKPrivateKey.from(hex: "d8839c2432bfd0a67ef10a804ba991eabba19f154a3d707917681d45822a5712")
```

:::

::: tab rust

```rust
use arkecosystem_crypto::identities::private_key;
private_key::from_hex("d8839c2432bfd0a67ef10a804ba991eabba19f154a3d707917681d45822a5712").unwrap();
```

:::

::: tab elixir

```elixir
ARKEcosystem.Crypto.Identities.PrivateKey.from_hex('d8839c2432bfd0a67ef10a804ba991eabba19f154a3d707917681d45822a5712')
```

:::

::::

### Derive the Private Key from a WIF

:::: tabs

::: tab javascript

```js
Identities.PrivateKey.fromWIF(
  "SGq4xLgZKCGxs7bjmwnBrWcT4C1ADFEermj846KC97FSv1WFD1dA"
);
```

:::

::: tab java
This function has not been implemented in this client library.
:::

::: tab .NET
This function has not been implemented in this client library.
:::

::: tab php

```php
ARKEcosystem\Crypto\Identities\PrivateKey::fromWif('SGq4xLgZKCGxs7bjmwnBrWcT4C1ADFEermj846KC97FSv1WFD1dA');
```

:::

::: tab python
This function has not been implemented in this client library.
:::

::: tab golang
This function has not been implemented in this client library.
:::

::: tab C++

```cpp
const char* wifStr = "SEZuJZouNK8GLXNApjciH4QnSKiNr971exVcL2Y6XfrDF5o977zB";
Ark::Crypto::Identities::PrivateKey privateKey = Ark::Crypto::Identities::PrivateKey::fromWIFString(wifStr, wifByte);
```

:::

::: tab ruby
This function has not been implemented in this client library.
:::

::: tab swift
This function has not been implemented in this client library.
:::

::: tab rust
This function has not been implemented in this client library.
:::

::: tab elixir
This function has not been implemented in this client library.
:::

::::

## Public Key

::: tip

Public Keys may be freely shared, and are included in transaction objects to validate the authenticity.

:::

### Derive the Public Key from a Passphrase

:::: tabs

::: tab javascript

```js
Identities.PublicKey.fromPassphrase("this is a top secret passphrase");
```

:::

::: tab java

```java
import org.arkecosystem.crypto.identities.PublicKey;

PublicKey.fromPassphrase("this is a top secret passphrase");
```

:::

::: tab .NET

```csharp
using ARKEcosystem.Crypto;

Identities.PublicKey.FromPassphrase('this is a top secret passphrase');
```

:::

::: tab php

```php
ARKEcosystem\Crypto\Identities\PublicKey::fromPassphrase('this is a top secret passphrase');
```

:::

::: tab python

```python
from crypto.identity.public_key import PublicKey

public_key = PublicKey.from_passphrase('this is a top secret passphrase')
```

:::

::: tab golang

```go
publicKey, _ := crypto.PublicKeyFromPassphrase("this is a top secret passphrase")
```

:::

::: tab C++

```cpp
const auto passphrase = "bullet parade snow bacon mutual deposit brass floor staff list concert ask";
Ark::Crypto::Identities::PublicKey publicKey = Ark::Crypto::Identities::PublicKey::fromPassphrase(passphrase);
```

:::

::: tab ruby

```ruby
ARKEcosystem::Crypto::Identities::PublicKey.from_passphrase('this is a top secret passphrase')
```

:::

::: tab swift

```swift
let publicKey = ARKPublicKey.from(passphrase: "this is a top secret passphrase")
```

:::

::: tab rust

```rust
use arkecosystem_crypto::identities::public_key;

public_key::from_passphrase("this is a top secret passphrase").unwrap();
```

:::

::: tab elixir

```elixir
ARKEcosystem.Crypto.Identities.PublicKey.from_passphrase('this is a top secret passphrase')
```

:::

::::

### Derive the Public Key Instance Object from a Hexadecimal Encoded String

:::: tabs

::: tab javascript
This function has not been implemented in this client library.
:::

::: tab java
This function has not been implemented in this client library.
:::

::: tab .NET

```csharp
using ARKEcosystem.Crypto;

Identities.PublicKey.FromHex('034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192');
```

:::

::: tab php

```php
ARKEcosystem\Crypto\Identities\PublicKey::fromHex('034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192');
```

:::

::: tab python

```python
from crypto.identity.public_key import PublicKey

public_key = PublicKey.from_hex('034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192')
```

:::

::: tab golang

```go
publicKey, _ := crypto.PublicKeyFromHex("034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192")
```

:::

::: tab C++

```cpp
Ark::Crypto::Identities::PublicKey publicKey = Ark::Crypto::Identities::PublicKey::fromHex("029fdf41a7d69d8efc7b236c21b9509a23d862ea4ed8b13a56e31eee58dbfd97b4");
```

:::

::: tab ruby

```ruby
ARKEcosystem::Crypto::Identities::PublicKey.from_hex('034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192')
```

:::

::: tab swift

```swift
let publicKey = ARKPublicKey.from(hex: "d8839c2432bfd0a67ef10a804ba991eabba19f154a3d707917681d45822a5712")
```

:::

::: tab rust

```rust
use arkecosystem_crypto::identities::public_key;

public_key::from_hex("034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192").unwrap();
```

:::

::: tab elixir

```elixir
ARKEcosystem.Crypto.Identities.PublicKey.from_hex('034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192')
```

:::

::::

### Validate a Public Key

:::: tabs

::: tab javascript

```js
Identities.PublicKey.validate(
  "034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192"
);
```

:::

::: tab java
This function has not been implemented in this client library.
:::

::: tab .NET
This function has not been implemented in this client library.
:::

::: tab php

```php
ARKEcosystem\Crypto\Identities\PublicKey::validate('034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192');
```

:::

::: tab python
This function has not been implemented in this client library.
:::

::: tab golang
This function has not been implemented in this client library.
:::

::: tab C++

```cpp
Ark::Crypto::Identities::PublicKey publicKey("029fdf41a7d69d8efc7b236c21b9509a23d862ea4ed8b13a56e31eee58dbfd97b4");
bool isValid = Ark::Crypto::Identities::PublicKey::validate(publicKey);
```

:::

::: tab ruby
This function has not been implemented in this client library.
:::

::: tab swift
This function has not been implemented in this client library.
:::

::: tab rust
This function has not been implemented in this client library.
:::

::: tab elixir
This function has not been implemented in this client library.
:::

::::

## WIF

::: warning

The WIF should remain secret, just like your `passphrase` and `private key`.

:::

### Derive the WIF from a Passphrase

:::: tabs

::: tab javascript

```js
Identities.WIF.fromPassphrase("this is a top secret passphrase");
```

:::

::: tab java

```java
import org.arkecosystem.crypto.identities.WIF;

WIF.fromPassphrase("this is a top secret passphrase");
```

:::

::: tab .NET

```csharp
using ARKEcosystem.Crypto;

Identities.WIF.FromPassphrase('this is a top secret passphrase')
```

:::

::: tab php

```php
ARKEcosystem\Crypto\Identities\WIF::fromPassphrase('this is a top secret passphrase');
```

:::

::: tab python

```python
from crypto.identity.wif import wif_from_passphrase

wif = wif_from_passphrase('this is a top secret passphrase')
```

:::

::: tab golang

```go
privateKey, _ := crypto.PrivateKeyFromPassphrase("this is a top secret passphrase")
```

:::

::: tab C++

```cpp
const auto passphrase = "bullet parade snow bacon mutual deposit brass floor staff list concert ask";
const uint8_t wifByte = 0xaa;
Ark::Crypto::Identities::WIF wif = Ark::Crypto::Identities::WIF::fromPassphrase(passphrase, wifByte);
```

:::

::: tab ruby

```ruby
ARKEcosystem::Crypto::Identities::WIF.from_passphrase('this is a top secret passphrase')
```

:::

::: tab swift

```swift
let wif = WIF.from(passphrase: "this is a top secret passphrase")
```

:::

::: tab rust

```rust
use arkecosystem_crypto::identities::wif;
wif::from_passphrase("this is a top secret passphrase").unwrap();
```

:::

::: tab elixir

```elixir
ARKEcosystem.Crypto.Identities.WIF.from_passphrase('this is a top secret passphrase')
```

:::

::::

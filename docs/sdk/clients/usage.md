---
title: "Usage"
---

# API Clients

[[toc]]

## Installation

We recommend using each languages' standards for dependency management and builds and attempt to make our SDKs compatible with current practices for each language.

Below are useful links to get started with each SDK:

:::: tabs

::: tab javascript

#### NodeJS Installation

NodeJS can be downloaded [here](https://nodejs.org/en/download/)

An excellent way to manage your NodeJS installation and be able to work with multiple version is to go through [NVM](https://github.com/creationix/nvm)

#### Yarn Installation

Yarn can be downloaded [here](https://yarnpkg.com/lang/en/docs/install/#windows-stable)

#### Installation

```bash
$ yarn add @arkecosystem/client
```

:::

::: tab java

#### Java Installation

Java may be installed from [Oracle](https://www.java.com/en/download/help/download_options.xml) or from [OpenJDK](https://openjdk.java.net/). Recently licensing on Oracle's hosted Java installation changed, so we recommend using OpenJDK.

#### Gradle

```bash
compile group: 'org.arkecosystem.client', name: 'client', version: '0.1.2'
```

#### Maven

```xml
<dependency>
  <groupId>org.arkecosystem</groupId>
  <artifactId>client</artifactId>
  <version>0.1.2</version>
</dependency>
```

:::

::: tab .NET

#### .NET installation

To get started with `C#` and the `.NET` framework, follow the [official guide](https://docs.microsoft.com/en-us/dotnet/framework/install/guide-for-developers).

#### Package Manager

```bash
Install-Package ARKEcosystem.Client -Version 0.2.1
```

#### .NET CLI

```bash
dotnet add package ARKEcosystem.Client --version 0.2.1
```

#### Paket CLI

```bash
paket add ARKEcosystem.Client --version 0.2.1
```

:::

::: tab php

#### PHP Installation

Documentation can be found [here](http://php.net/manual/en/install.php).

Others solutions like [LAMP](https://www.digitalocean.com/community/tutorials/how-to-install-linux-apache-mysql-php-lamp-stack-ubuntu-18-04), [WAMP](http://www.wampserver.com/) or [MAMP](https://www.mamp.info/en/) are available.

#### Composer

```bash
composer require arkecosystem/client
```

:::

::: tab python

#### Python Installation

Python can be downloaded [here](https://www.python.org/downloads/).

For further information on how to install Python on your operating system :

[Windows guide](https://docs.python.org/3/using/windows.html)

[Unix guide](https://docs.python.org/3/using/unix.html)

[OSx guide](https://docs.python.org/3/using/mac.html)

#### PIP

```bash
pip install arkecosystem-client
```

:::

::: tab golang

#### Golang Installation

Go can be installed by following [this guide](https://golang.org/doc/install)

The package can be installed by using the following commands in your terminal :

#### go get

```bash
go get github.com/ARKEcosystem/go-client/client
```

:::

::: tab C++

#### OS

If you are using CMake head over to [cmake.org](https://www.cmake.org/download/) or install it via Homebrew `brew install cmake`.

#### CMake

```bash
git clone https://github.com/ARKEcosystem/cpp-client
cd cpp-client
# init & update micro-ecc submodule
git submodule init
git submodule update
cmake .
cmake --build .
```

#### Arduino

Download and install the Arduino IDE (>=1.8.5) from [arduino.cc](https://www.arduino.cc/en/Main/Software)

Using the Arduino IDE's built-in Library Manager, install the ARK-Cpp-Client library.
Be sure to install the "-arduino" version of Cpp-Client.

#### Using with the Arduino IDE

Include the following header in your Arduino Sketch:

```cpp
#include <arkClient.h>
```

#### PlatformIO

Python is required to run PlatformIO, so grab an installer package from [python.org](https://www.python.org/downloads/).

Add the following line to your `platformio.ini` configuration file:

```asciidoc
lib_deps = ARK-Cpp-Client
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
lib_deps = ARK-Cpp-Client
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

Add this line to your application's Gemfile and then execute `bundle`

```bash
gem 'arkecosystem-client'
```

Alternatively, install it from the command line.

```bash
gem install arkecosystem-client
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
You can use it to integrate the ARK Swift Client in your project, by adding it to your `Podfile` as follows:

```
pod 'SwiftClient', :git => 'https://github.com/ARKEcosystem/swift-client.git', :tag => '1.0.1'
```

Afterward, install it by running `pod install`.
You are then able to use it in your project by using `import SwiftClient`.

:::

::: tab rust

#### Rust Installation

Rust can be installed by following [this guide](https://www.rust-lang.org/install.html)

#### Cargo

Add the following to your Cargo.toml:

```
[dependencies]
arkecosystem-client = {git = "https://github.com/ARKEcosystem/rust-client", branch = "master" }
```

:::

::: tab elixir

#### Elixir Installation

Elixir can be installed by following [this guide](https://elixir-lang.org/install.html)

#### Installation

The package can be installed by adding `arkecosystem_client` to your list of dependencies in `mix.exs`:

```elixir
def deps do
  {:arkecosystem_client, "~> 0.1.0"}
end
```

Once installed, you should run the following command to install the dependencies :

```bash
$ mix deps.get
```

:::

::::

## Development setup

If you want to contribute to the SDKs itself, follow this guide.

:::: tabs

::: tab javascript

1. Fork the [package](https://github.com/ARKEcosystem/javascript-client).

2. Clone your forked repository.

```bash
git clone https://github.com/<githubusername>/javascript-client
```

3. Next, move into the fresh cloned directory.

```bash
cd javascript-client
```

4. Proceed to install the dependencies.

```bash
yarn install
```

5. Dependencies are now installed, you can now run the tests to see if everything is running as it should.

```bash
$ yarn test
```

:::

::: tab java

:::

::: tab .NET

:::

::: tab php

1. Fork the [package](https://github.com/ARKEcosystem/php-client).

2. Clone your forked repository.

```bash
$ git clone https://github.com/<githubusername>/php-client
```

3. Next, move into the cloned directory.

```bash
$ cd php-client
```

4. Install the dependencies with composer.

```bash
$ composer install
```

5. Dependencies are now installed, you can now run the tests to see if everything is running as it should.

```bash
$ phpunit
```

:::

::: tab python

1. Fork the [package](https://github.com/ARKEcosystem/python-client).

2. Clone your forked repository.

```bash
git clone https://github.com/<githubusername>/python-client
```

3. Next, move into the fresh cloned directory.

```bash
cd python-client
```

4. The next step would be to create something like a [virtual environment](https://virtualenv.pypa.io/en/latest/) to ensure no name clashes occur.

5. Once the virtualenv has finished initializing, you can proceed to install the dependencies. These are listed inside the setup.py file.

```bash
pip install \
        requests \
        backoff \
        flake8 \
        flake8-import-order \
        flake8-print \
        flake8-quotes \
        pytest \
        pytest-responses \
        pytest-mock \
        pytest-cov
```

6. Dependencies are now installed, you can now run the tests to see if everything is running as it should.

```bash
pytest
```

:::

::: tab golang

1. Fork the [package](https://github.com/ARKEcosystem/go-client)

2. Clone your forked repository.

```bash
git clone https://github.com/<githubusername>/go-client
```

3. Next, move into the fresh cloned directory.

```bash
cd go-client
```

4. Install the dependencies.

```bash
# -t also fetches dependencies related to tests
go get -t ./...
```

5. Dependencies are now installed, you can now run the tests to see if everything is running as it should.

```bash
go test ./...
```

:::

::: tab C++

1. Fork the [package](https://github.com/ARKEcosystem/cpp-client).

2. Clone the newly forked repository.

```bash
git clone https://github.com/<githubusername>/cpp-client
```

3. Next, we move into the cloned directory.

```bash
cd cpp-client
```

4. Build the package using CMake.

```bash
cmake
cmake --build .
```

5. Now we can run the tests to see if everything is running as it should.

```bash
./test/ARK-Cpp-Client-tests
```

#### ESP8266 (PlatformIO)

```bash
pio run -e esp8266 -t upload
```

#### ESP32 (PlatformIO)

```bash
pio run -e esp32 -t upload
```

::: tab ruby

:::

::: tab swift

1. Fork the [package](https://github.com/ARKEcosystem/swift-client).

2. Clone your forked repository.

```bash
git clone https://github.com/<githubusername>/swift-client
```

3. Next, move into the fresh cloned directory.

```bash
cd swift-client/Client
```

4. Install the dependencies.

For this you will first need to install [Carthage](https://github.com/Carthage/Carthage), which can be done quickly with Homebrew: `brew install carthage`

```bash
carthage update
```

You will also need to install Swiftlint as an additional step, as that is used to lint our code. The easiest way to install this is by using Homebrew: brew install swiftlint.

Dependencies are now installed, you can now run the tests to see if everything is running like it should by opening the Client.xcodeproj in Xcode.

:::

::: tab rust

1. Fork the [package](https://github.com/ARKEcosystem/rust-client).

2. Clone your forked repository.

```bash
git clone https://github.com/<githubusername>/rust-client
```

3. Next, move into the fresh cloned directory.

```bash
cd rust-client
```

4. Install the dependencies.

```bash
cargo build
```

5. Dependencies are now installed, you can now run the tests to see if everything is running as it should.

```bash
cargo test
```

#### Additional information

By default, the requests are performed with [Alamofire](https://github.com/Alamofire/Alamofire), and the response is given to the callback function as `[String: Any]`.
The functions that are responsible for this can be found in `Utils.swift`.
You can easily override this default functionality by defining your own `handleApiGet` and `handleApiPost` functions and passing them to the endpoint object (e.g. `Blocks`.
An example of how this is done can be found by looking at the tests, e.g. those of [Blocks](https://github.com/ARKEcosystem/swift-client/blob/master/Client/ClientTests/Api/Endpoints/BlocksTest.swift), as a mocked api handler is used for them.

:::

::: tab elixir

1. Fork the [package](https://github.com/ARKEcosystem/elixir-client).

2. Clone your forked repository.

```bash
git clone https://github.com/<githubusername>/elixir-client
```

3. Next, move into the fresh cloned directory.

```bash
cd elixir-client
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

Each API client is instantiated roughly the same. It requires a fully qualified URL pointing to the node used in the requests and allows for optional parameters providing more custom configurations.

Each SDK attempts to return a response in an idiomatic way (i.e., using structs if appropriate) and a way to access the underlying HTTP response. You can use a public node in your API requests, such as the [official explorer](https://explorer.ark.io:8443/api), but for security reasons, we recommend running your node.

:::: tabs

::: tab javascript

```js
const Client = require("@arkecosystem/client");

const client = new Client("http://my.node.ip:port");
client.setVersion(2);
```

:::

::: tab java

```java
import com.google.gson.internal.LinkedTreeMap;
import org.arkecosystem.client.Connection;
import org.arkecosystem.client.api.two.Two;

import java.util.HashMap;
import java.io.IOException;

public class Main {
    public static void main(String[] args) throws IOException {
        HashMap<String, Object> map = new HashMap<>();
        map.put("host", "http://my.node.v2.ip:port/api/");
        map.put("API-Version", 2);
        Connection<Two> connection = new Connection(map);
    }
}
```

:::

::: tab .NET

```csharp
using ARKEcosystem.Client;
using ARKEcosystem.Client.API.Two;

static void Main(string[] args)
{
    ConnectionManager.Connect(new Connection<Two>("http://my-backup.ark.node:port/api/", "main"))

    try {
        response = ConnectionManager.Connection("main").Api.Accounts.Balance("DARiJqhogp2Lu6bxufUFQQMuMyZbxjCydN");
    } catch (Exception e) {
       // handle e
    }
}
```

:::

::: tab php

```php
<?php

require_once('vendor/autoload.php');

use ARKEcosystem\Client\Connection;

$connection = new Connection([
    'host' => 'http://my.ark.node:port/api/', // TRAILING SLASH!
]);
```

:::

::: tab python

```python
from client import ARKClient

client = ARKClient('http://127.0.0.1:4003/api')
```

:::

::: tab golang

```go
package main

import (
    "net/url"

    ark "github.com/ARKEcosystem/go-client/client"
)

func main() {
    // OPTIONAL: client accepts a *http.Client.
    // Defaults to http.DefaultClient
    client := ark.NewClient(nil)

    // OPTIONAL: You can specify the URL of your choice.
    // Defaults to "https://dexplorer.ark.io:8443/api/"
    url, _ := url.Parse("http://127.0.0.1:4003/api")
    client.BaseURL = url
}
```

:::

::: tab C++

Before making a request, you should create a `Connection`.
A `Connection` expects an IP Address and Port by which the API can be reached.
An example Connection, that interfaces with the API of an ARK Node, would be created as follows:

```cpp
ARK::Client::Connection<ARK::Client::Api> connection("167.114.29.54", 4003);
```

:::

::: tab ruby

```ruby
require 'arkecosystem/client'

manager = ARKEcosystem::Client::ConnectionManager.new()

manager.connect(ARKEcosystem::Client::Connection.new({
  host: "http://my.ark.node:port/api/",
  version: 2
}), 'main')
```

:::

::: tab swift

Before making a request, you should create a `Connection`.
A `Connection` expects a `host`, which is an URL on which the API can be reached,
An example `Connection` that connects to a node, would be created as follows:

```swift
// Mind the '/api' after the URL, no trailing '/'!
let conn = Connection(host: "http://0.0.0.0:4003/api")
```

:::

::: tab rust

```rust
extern crate arkecosystem_client;

use arkecosystem_client::connection::Connection;
use arkecosystem_client::api::two::Two;

fn main() {
    let v2 = Connection::<Two>::new("http://my.ark.node:port/api/");
    // Parameters are passed as a Vec of string tuples (key, value).
    let params = Vec::<(String, String)>::new();
}
```

:::

::: tab elixir

```elixir
iex > client = ARKEcosystem.Client.new(%{
... >             host: "http://my.node.ip:myport/api",
... >             nethash: "578e820911f24e039733b45e4882b73e301f813a0d2c31330dafda84534ffa23",
... >             version: "1.1.1"
... > })
```

:::

::::

## Blocks

This service API grants access to the [blocks resource](/api/public/v2/blocks.html). A block is a signed set of transactions created by a delegate and permanently committed to the ARK blockchain.

You may query for:

- All blocks, which is a paginated API due to the large number of existing blocks.
- A specific block using its ID.
- Query for transactions within a specific block.
- Search for a block based on search parameters.

It is not possible to `POST` a block through the public API. Relay Nodes accept only blocks posted by a delegate at the correct time through the internal API.

:::: tabs

### List all blocks

::: tab javascript

```js
async function init() {
  try {
    const response = await client.resource('blocks').all('limit': 1);
    return response.data;
  } catch (e) {
    console.log(e);
  }
}
```

:::

::: tab java

```java
LinkedTreeMap<String, Object> actual = connection.api().blocks.all();
```

:::

::: tab .NET

```csharp
var response = connection.Api.Blocks.All();
```

::: tab php

```php
<?php
$response = $connection->blocks()->all(['limit' => 10]);

if ($response['data']) {
    echo($response['data']);
}

>> ['meta': ['count': 10, ... ]]
```

:::

::: tab python

```python
print(client.blocks.all(page=5, limit=10))

>> {'meta': {'count': 10, ... }}
```

#### Retrieve a block

```python
print(client.blocks.get(block_id='1102328654748179318'))

>> {'data': {'id': '11023286547481793189' ... }}
```

#### List all transactions of a block

```python
print(client.blocks.transactions(block_id='1596548201794970158', limit=10))

>> {'meta': {'count': 4, ... }}
```

#### Search all blocks

```python
print(client.blocks.search(
    {'generatorPublicKey': '0232b96d57ac27f9a99242bc886e433baa89f596d435153c9dae47222c0d1cecc3'}))

>> {'meta': {'count': 100, ... }}
```

:::

::: tab golang

```go
func main() {
    query := &arkClient.Pagination{Limit: 10}
    response, _, _ := client.Blocks.List(context.Background(), query)
}
```

:::

::: tab C++

```cpp
const auto blocks = connection.api.blocks.all()
```

:::

::: tab ruby

```ruby
response = connection.blocks.all().body
```

:::

::: tab swift

```swift
let blocks = Blocks(connection: conn)

// Perform an API call, note that requests are async and returned in a closure
blocks.all { (response) in
    // Do something with the response
    // Note that response is of type [String: Any]
}
```

```swift
// Getting the transactions of a specific block can for example be done as follows:
blocks.transactions(ofBlock: "297551546576616827") { (response) in
    print(response)
}
```

:::

::: tab rust

```rust
let blocks = v2.blocks.all(&params);
```

:::

::: tab elixir

```elixir
iex> ARKEcosystem.Client.API.Two.Blocks.list(client)
```

:::

::::

## Delegates

The client SDK can be used to query the [delegate resource](/api/public/v2/delegates.html).

A delegate is a regular wallet that has broadcasted a registration transaction, acquired a sufficient number of votes, and has a Relay Node configured to forge new blocks through a `forger` module. At any time only 51 delegates are active. They are cost-efficient miners running the ARK Network.

Voters are wallets which have broadcasted a vote transaction on a delegate. A vote remains active until an un-vote transaction is sent (it does not have to be recast unless a wallet wishes to change from delegate). Voting for a delegate does not give the delegate access to the wallet nor does it lock the coins in it.

You may query for:

- All delegates through the paginated API.
- A specific delegate using the username as ID.
- All blocks forged by a specific delegate.
- The voters of a specific delegate.

:::: tabs

::: tab javascript

```js
async function init() {
  try {
    const response = await client.resource("delegates").all({ limit: 1 });
    return response.data;
  } catch (e) {
    console.log(e);
  }
}
```

:::

::: tab java

```java
LinkedTreeMap<String, Object> actual = connection.api().delegates.all();
```

:::

::: tab .NET

```csharp
var response = connection.Api.Delegates.All();
```

:::

::: tab php

```php
$response = $connection->delegates()->all(['limit' => 10]);

if ($response['data']) {
    echo($response['data']);
}

>> ['meta': ['count': 10, ... ]]
```

:::

::: tab python

#### List all delegates

```python
print(client.delegates.all(page=5, limit=20))
>> {'meta': {'count': 20, ... }}
```

#### Retrieve a delegate

```python
print(client.delegates.get(delegate_id="goose"))
>> {'data': {'username': 'goose', ... }}
```

#### Search delegates

```python
print(client.delegates.search(username='goose'))
>> {'meta': {'count': 1, ... }}
```

#### List all blocks of a delegate

```python
print(client.delegates.blocks(delegate_id="goose"))
>> {'meta': {'count': 100, ... }}
```

#### List all voters of a delegate

```python
print(client.delegates.voters(delegate_id="goose"))
>> {'meta': {'count': 100, ... }}
```

:::

::: tab golang

```go
func main() {
    query := &arkClient.Pagination{Limit: 10}
    response, _, _ := client.Delegates.List(context.Background(), query)
}
```

:::

::: tab C++

```cpp
const auto delegateResponse = connection.api.delegates.all();
```

:::

::: tab ruby

```ruby
response = connection.delegates.all().body
```

:::

::: tab swift

```swift
let delegates = Delegates(connection: conn)
```

:::

::: tab rust

```rust
let delegates = v2.delegates.all(&params);
```

:::

::: tab elixir

```elixir
iex> ARKEcosystem.Client.API.Two.Delegates.list(client)
```

:::

::::

## Node

The ARK Network consists of different anonymous nodes (servers), maintaining the public ledger, validating transactions and blocks and providing APIs. The [node resource](/api/public/v2/node.html) allows for querying the health and configurations of the node used by the instantiated client.

You may query for:

- The node's network configuration.
- The status of the node.
- The syncing progress.

:::: tabs

::: tab javascript

```js
async function init() {
  try {
    const response = await client.resource("node").status();
    return response.data;
  } catch (e) {
    console.log(e);
  }
}
```

:::

::: tab java

```java
LinkedTreeMap<String, Object> actual = connection.api().node.status();
```

:::

::: tab .NET

```csharp
var response = connection.Api.Node.Configuration();
```

:::

::: tab php

```php
$response = $connection->node()-status();

if ($response['data']) {
    echo($response['data']);
}

>> ['data': ['syncing': False, 'blocks': -22, 'height': 820355, 'id': '2134055295567604949']]
```

:::

::: tab python

#### Retrieve the configuration

```python
print(client.node.configuration())
>> {'data': {'nethash': '6e84d08bd299ed97c212c886c98a57e36545c8f5d645ca7eeae63a8bd62d8988', ... }}
```

#### Retrieve the status

```python
print(client.node.status())
>> {'data': {'synced': True, 'now': 6897158, 'blocksCount': -1}}
```

#### Retrieve the syncing status

```python
print(client.node.syncing())
>> {'data': {'syncing': False, 'blocks': -1, 'height': 6897160, 'id': '12905037940821862953'}}
```

:::

::: tab golang

```go
func main() {
    query := &arkClient.Pagination{Limit: 10}
    response, _, _ := client.Node.Status(context.Background())
}
```

:::

::: tab C++

```cpp
const auto nodeConfiguration = connection.api.node.configuration();
```

:::

::: tab ruby

```ruby
response = connection.node.status().body
```

:::

::: tab swift

```swift
let node = Node(connection: conn)
```

:::

::: tab rust

```rust
let node = v2.node.status().unwrap();
```

:::

::: tab elixir

```elixir
iex> ARKEcosystem.Client.API.Two.Node.status(client)
```

:::

::::

## Peers

Each node is connected to a set of peers, which are Relay or Delegate Nodes as well. The [peers resource](/api/public/v2/peers.html) provides access to all peers connected to our node.

Peers have made their Public API available for use; however for mission-critical queries and transaction posting you should use a node which is under your control. We provide a guide to setting up a Relay Node [here](/tutorials/node/setup.html).

You may query for:

- All peers through the paginated API.
- Obtain a specific peer by IP address.

:::: tabs

::: tab javascript

```js
async function init() {
  try {
    const response = await client.resource("peers").all({ limit: 1 });
    return response.data;
  } catch (e) {
    console.log(e);
  }
}
```

:::

::: tab java

```java
LinkedTreeMap<String, Object> actual = connection.api().peers.all();
```

:::

::: tab .NET

```csharp
var response = connection.Api.Peers.All();
```

:::

::: tab php

```php
$response = $connection->peers()->all(['limit' => 10]);
```

:::

::: tab python

#### List all peers

```python
client.peers.all()
```

#### Retrieve a peer

```python
client.peers.get(ip='51.255.105.52')
```

:::

::: tab golang

```go
func main() {
    query := &arkClient.Pagination{Limit: 10}
    response, _, _ := client.Peers.List(context.Background(), query)
}
```

:::

::: tab C++

```cpp
const auto peer = connection.api.peers.get("167.114.29.49");
```

:::

::: tab ruby

```ruby
response = connection.peers.all().body
```

:::

::: tab swift

```swift
let peers = Peers(connection: conn)
```

:::

::: tab rust

```rust
let peers = v2.peers.all(&params);
```

:::

::: tab elixir

```elixir
iex> ARKEcosystem.Client.API.Two.Peers.list(client)
```

:::

::::

## Transactions

The heart of any blockchain is formed by its transactions; state-altering payloads signed by a wallet. Most likely you will be querying for transactions most often, using the [transaction resource](/api/public/v2/transactions.html).

A transaction is the only object which may be posted by a non-delegate. It requires a signature from a wallet containing a sufficient amount of ARK.

Through this API you can:

- Post a signed transaction to a Relay Node.
- Obtain a transaction by ID.
- List transactions through a paginated API.
- List unconfirmed transactions (mempool).
- Obtain an unconfirmed transaction by ID.
- Search for transactions by search parameters.
- Obtain all transaction types supported by the network.
- Obtain non-dynamic fees for the network.

:::: tabs

::: tab javascript

```js
async function init() {
  try {
    const response = await client
      .resource("transactions")
      .all({
        senderId: "AUDud8tvyVZa67p3QY7XPRUTjRGnWQQ9Xv",
        orderBy: "timestamp.epoch"
      });
    return response.data;
  } catch (e) {
    console.log(e);
  }
}
```

:::

::: tab java

```java
LinkedTreeMap<String, Object> actual = connection.api().transactions.all();
```

:::

::: tab .NET

```csharp
var response = connection.Api.Transactions.All();
```

:::

::: tab php

```php
$response = $connection->transactions()->all(['limit' => 10]);
```

:::

::: tab python

#### Create a transaction

```python
tx_response = client.transactions.create([signed_transaction])
```

#### Retrieve a transaction

```python
tx = client.transactions.get(
    transaction_id='e5f5de5716bffb2fa924d26fcfebaff58c8bfd50d8eac1487b0e981113b482fc')
```

#### List all transactions

```python
txs = client.transactions.all(limit=5)
```

#### List all unconfirmed transactions

```python
txs = client.transactions.all_unconfirmed(limit=5)
```

#### Get unconfirmed transaction

```python
 txs = client.transactions.get_unconfirmed(transaction_id='18bd569d26047a3379f04dfa6df16fc72387ed7a20a477dd681d980cd794add2')
```

#### Search transactions

```python
txs = client.transactions.search(
    {'senderId':'AQEA7wbPq9obWr2yEXRksanArn6Jyz4UPN'},
    limit=5)
```

#### List transaction types

```python
types = client.transactions.types()
```

#### List transaction fees (Non-dynamic)

```python
fees = client.transactions.fees()
```

:::

::: tab golang

```go
func main() {
    query := &arkClient.Pagination{Limit: 10}
    response, _, _ := client.Transactions.List(context.Background(), query)
}
```

:::

::: tab C++

```cpp
const auto transaction = connection.api.transactions.get("b324cea5c5a6c15e6ced3ec9c3135a8022eeadb8169f7ba66c80ebc82b0ac850");
```

:::

::: tab ruby

```ruby
response = connection.transactions.all().body
```

:::

::: tab swift

```swift
let transactions = Transactions(connection: conn)
```

:::

::: tab rust

```rust
let transactions = v2.transactions.all(&params).unwrap();
```

:::

::: tab elixir

```elixir
iex> ARKEcosystem.Client.API.Two.Transactions.list(client)
```

:::

::::

## Votes

A [vote](/api/public/v2/votes.html) is a transaction sub-type, where the `asset` field contains a `votes` object and the `transaction.type` is `3`.

Through the votes resource, you can query for:

- All votes (paginated API).
- A specific vote by ID.

:::: tabs

::: tab javascript

```js
async function init() {
  try {
    const response = await client.resource("votes").all();
    return response.data;
  } catch (e) {
    console.log(e);
  }
}
```

:::

::: tab java

```java
LinkedTreeMap<String, Object> actual = connection.api().votes.all();
```

:::

::: tab .NET

```csharp
var response = connection.Api.Votes.All();
```

:::

::: tab php

```php
$response = $connection->votes()->all(['limit' => 10]);
```

:::

::: tab python

#### List all votes

```python
votes = client.votes.all(limit=5)
```

#### Retrieve a vote

```python
vote = (client.votes.get(
    vote_id='49a6bdffef623e83087a6fff3f4e7dd6929a6df9abf9f7d0b08a36fcba9512f7')
```

:::

::: tab golang

```go
func main() {
    query := &arkClient.Pagination{Limit: 10}
    response, _, _ := client.Votes.List(context.Background(), query)
}
```

:::

::: tab C++

```cpp
const auto vote = connection.api.votes.get("d202acbfa947acac53ada2ac8a0eb662c9f75421ede3b10a42759352968b4ed2");
```

:::

::: tab ruby

```ruby
response = connection.votes.all().body
```

:::

::: tab swift

```swift
let votes = Votes(connection: conn)
```

:::

::: tab rust

```rust
let votes = v2.votes.all(&params).unwrap();
```

:::

::: tab elixir

```elixir
iex> ARKEcosystem.Client.API.Two.Votes.list(client)
```

:::

::::

## Wallets

The [wallet resource](/api/public/v2/wallets.html#list-all-wallets) provides access to:

- Wallets.
- Incoming and outgoing transactions per wallet.
- Each wallet's votes.

:::: tabs

::: tab javascript

```js
async function init() {
  try {
    const response = await client
      .resource("wallets")
      .get("AFrPtEmzu6wdVpa2CnRDEKGQQMWgq8nE9V");
    return response.data;
  } catch (e) {
    console.log(e);
  }
}
```

:::

::: tab java

```java
LinkedTreeMap<String, Object> actual = connection.api().wallets.all();
```

:::

::: tab .NET

```csharp
var response = connection.Api.Wallets.All();
```

:::

::: tab php

```php
$response = $connection->wallets()->all(['limit' => 10]);
```

:::

::: tab python

#### Retrieve all wallets

```python
wallets = client.wallets.all(limit=10)

```

#### Retrieve a wallet

```python
wallet = client.wallets.get(wallet_id='AQEA7wbPq9obWr2yEXRksanArn6Jyz4UPN')
```

#### List all transactions of a wallet

```python
wallet_transactions = client.wallets.transactions(wallet_id='AQEA7wbPq9obWr2yEXRksanArn6Jyz4UPN')
```

#### List all received transactions of a wallet

```python
received_transactions = client.wallets.transactions_received(wallet_id='AQEA7wbPq9obWr2yEXRksanArn6Jyz4UPN')
```

#### List all sent transactions of a wallet

```python
sent_transactions = client.wallets.transactions_sent(wallet_id='AQEA7wbPq9obWr2yEXRksanArn6Jyz4UPN')
```

#### List all votes of a wallet

```python
votes = client.wallets.votes(wallet_id='AQEA7wbPq9obWr2yEXRksanArn6Jyz4UPN')
```

#### List all top wallets

```python
top = client.wallets.top(limit=10)
```

#### Search all wallets

```python
wallet = client.wallets.search(
    {'publicKey':'03a3cd9d5095147d7820b39fd697bd6c6831b1d474125e97d38f2f131eede5fa19'},
    limit=5)
```

:::

::: tab golang

```go
func main() {
    query := &arkClient.Pagination{Limit: 10}
    response, _, _ := client.Wallets.List(context.Background(), query)
}
```

:::

::: tab C++

```cpp
const auto wallet = connection.api.wallets.search( {{"username", "boldninja"}} );
```

:::

::: tab ruby

```ruby
response = connection.wallets.all().body
```

:::

::: tab swift

```swift
let wallets = Wallets(connection: conn)
```

:::

::: tab rust

```rust
let wallets = v2.wallets.all(&params).unwrap();
```

:::

::: tab elixir

```elixir
iex> ARKEcosystem.Client.API.Two.Wallets.list(client)
```

:::

::::

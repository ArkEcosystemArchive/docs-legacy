# How to Send Your First Transaction using the Ark SDK

We will use the client and crypto libraries to send an Ark transaction programmatically. You will see how the client and crypto libraries work together to provide a comprehensive base for any Ark project and learn how to configure the SDKs to work alongside your testnet.

## Getting Started

We will be reusing the test network created in [How to Setup Dev Environment](/guidebook/developer/setup-dev-environment.html).

You'll also want to make a directory in which to place your code. Because we connect to the testnet over HTTP, it's not necessary to include the code in the same folder as your `core` installation. Just make sure you're not in a major folder such as `home` or `Documents`, as you'll need to install NPM dependencies for your code to work as intended (or at all).

Finally, to send a transaction, we need our testnet to be running. So before we start writing code, make sure to start the testnet by navigating to the `packages/core` folder of your `core` repo and running the command `yarn full:testnet`.

## Connect To Testnet

With our testnet up and running, the first thing we need to do is connect to it. All interactions between Ark Nodes and the outside world happen through the Public API, which is a REST API facilitating different [actions](/api/) on the blockchain.

It is possible to interact with a node directly through HTTP without using any programming language at all. By default, the Public API for testnet opens a connection on your local machine at `http://0.0.0.0:4003/api`. We can check out newly forged [blocks](http://0.0.0.0:4003/api/blocks) in our browser with a running testnet. You should see a response showing you all the (empty) blocks your testnet forgers have recently created.

::: tip

If the response you see is hard to read, consider downloading a JSON Viewer for your browser of choice. It'll format JSON documents to make them much more readable. [Postman](https://www.getpostman.com/) is also a great tool when working extensively with an API.

:::

Sending complex requests directly in your browser's URL window by typing them out is neither fun nor efficient. Instead, we can leverage one of Ark's most popular features: the client SDKs available in virtually all major programming languages. These SDKs streamline interacting with the Ark blockchain no matter your language.

::: tip

We attempt to have code examples in all supported languages. If you find a mistake/missing snippet, add an issue or create a pull request in the [repository](https://github.com/arkecosystem/docs).

:::

All SDK implementations are split into two libraries. The `client` library is responsible for sending requests and interpreting responses between your application and ARK nodes. By contrast, the `crypto` library is responsible for building and signing transactions and validating payloads.

We'll make extensive use of both libraries. Instructions on installation and more can be found in the respective [client](/sdk/client) and [crypto](/sdk/cryptography) documentation.

To connect to our testnet, we'll need two pieces of data to pass to our client:

1. The URL containing the location of the node serving as Public API endpoint.
2. The version of the ARK API we want to access. 1 is for API v1, 2 is for API v2. If possible, always go for v2.

::: tip

API v1 has officially been deprecated. The newest versions of the SDK no longer support v1, so depending on the SDK version, you will not need explicitly define an API version.

:::

As mentioned above, by default our testnet will connect its Public API to the [http://0.0.0.0:4003](http://0.0.0.0:4003) URL. Accordingly, our first lines of code will look something like this:

:::: tabs

::: tab javascript

```js
const Client = require('@arkecosystem/client')

const client = new Client('http://0.0.0.0:4003');
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
        map.put("host", "http://0.0.0.0:4003/api/");
        map.put("API-Version", 2);
        Connection<Two> connection = new Connection(map);
    }
}
```

:::

::: tab .NET

```csharp
using ArkEcosystem.Client;
using ArkEcosystem.Client.API.Two;

static void Main(string[] args)
{
    ConnectionManager.Connect(new Connection<Two>("http://0.0.0.0:4003/api/", "main"))

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

use ArkEcosystem\Client\Connection;

$connection = new Connection([
    'host' => 'http://0.0.0.0:4003/api/',
]);
```

:::

::: tab python

```python
from client import ArkClient

client = ArkClient('http://127.0.0.1:4003/api')
```

:::

::: tab golang

```go
package main

import (
    "net/url"

    ark "github.com/ArkEcosystem/go-client/client"
)

func main() {
    // OPTIONAL: client accepts a *http.Client.
    // Defaults to http.DefaultClient
    client := ark.NewClient(nil)

    // OPTIONAL: You can specify the URL of your choice.
    // Defaults to "https://dexplorer.ark.io:8443/api/"
    url, _ := url.Parse("http://0.0.0.0:4003")
    client.BaseURL = url
}
```

:::

::: tab C++

```cpp
Ark::Client::Connection<Ark::Client::Api> connection("167.114.29.54", 4003);
```

:::

::: tab ruby

```ruby
require 'arkecosystem/client'

manager = ArkEcosystem::Client::ConnectionManager.new()

manager.connect(ArkEcosystem::Client::Connection.new({
  host: "http://0.0.0.0:4003/api/",
  version: 2
}), 'main')
```

:::

::: tab swift

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
    let v2 = Connection::<Two>::new("http://0.0.0.0:4003/api/");
    // Parameters are passed as a Vec of string tuples (key, value).
    let params = Vec::<(String, String)>::new();
}
```

:::

::: tab elixir

```elixir
iex > client = ArkEcosystem.Client.new(%{
... >             host: "http://0.0.0.0:4003/api",
... >             nethash: "578e820911f24e039733b45e4882b73e301f813a0d2c31330dafda84534ffa23",
... >             version: "1.1.1"
... > })
```

:::

::::

Using the `client` package follows a similar pattern no matter what SDK you use; first, you specify which resource you want to access, then you specify which action you want to take with that resource. For example, if we wanted to access the same transaction data we saw when visiting `/api/blocks` in the browser, we could do the following:

:::: tabs

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
iex> ArkEcosystem.Client.API.Two.Blocks.list(client)
```

:::

::::

With any luck, the data you'll get back from that request will very closely resemble the information you found at `/api/transactions`. And with that, we're now connected to our testnet!

## Changing Config Manager

At some point during the tutorial, you might run into some network-related bugs. By default, as of the time of writing, the `crypto` and `client` libraries are configured to work on devnet unless explicitly told otherwise. As devnet is the ecosystem-wide testing ground for the new Ark Core, setting devnet as the default ensures that community testers can set up nodes and applications with a minimum of overhead.

However, there are some network-level differences between testnet and devnet that will cause some problems in our application if left unaddressed. To solve this, we need to tell our application to use the testnet settings.

The fastest way to do so is by using the `configManager` module that ships with the `crypto` library. As Node caches all `require` expressions to reuse across your application, setting `configManager` to use `testnet` once at the beginning of our app will ensure that we won't have to worry about it again, as our preferences will be saved and reused when needed.

To do so, import the `configManager` package from `crypto`, then tell it to use the `ark` network on `testnet` settings:

:::: tabs

::: tab javascript

```js
const Client = require('@arkecosystem/client')
const { configManager } = require('@arkecosystem/crypto')

configManager.setFromPreset('ark', 'testnet')

const testnetClient = new Client('http://0.0.0.0:4003', 2) // (API URL, API version)
```

:::

::: tab java
:::

::: tab .NET
:::

::: tab php
:::

::: tab python

```python
from crypto.networks.testnet import Testnet
from crypto.configuration.network import set_network

set_network(Testnet)

# or if you need custom parameters
from crypto.configuration.network import set_custom_network

set_custom_network(epoch, version, wif)
```

:::

::: tab golang

```go
package main

import (
    crypto "github.com/ArkEcosystem/go-crypto/crypto"
)

func main() {
    crypto.SetNetwork(crypto.NETWORKS_TESTNET)

    // or if you need custom parameters
    crypto.SetNetwork(&crypto.Network{
        Epoch:   time.Date(2017, 3, 21, 13, 00, 0, 0, time.UTC),
        Version: 23,
        Wif:     186,
    })
}
```

:::

::: tab C++

With the C++ SDK's, there is no default network configuration.

i.e. Each method that produces network-dependent output takes the network version as a function parameter.

```cpp
const char * passphrase = "this is a top secret passphrase";
const uint8_t devnetByte = 0x1E;
Address address = Address::fromPassphrase(passphrase, devnetByte);

//  'address.toString()' output: "D61mfSggzbvQgTUe6JhYKH2doHaqJ3Dyib"
```

:::

::: tab ruby
:::

::: tab swift
:::

::: tab rust
:::

::: tab elixir
:::

::::

After doing so, our set up is complete, and we are ready to start sending transactions!

## Set Up Sending and Receiving Accounts

To send a transaction, we need two an account to send the transaction from, and an account to receive the transaction.

Fortunately, our testnet comes equipped with 51 accounts out of the box: our forging delegates. By now, if your testnet has been running for more than a couple minutes, each of your delegates should have received forging rewards for creating blocks, so we can be sure that our accounts have enough ARK to send a transaction. We need to means of accessing those funds.

To do so, we'll need to look in the directory containing our testnet files. There, in the `packages/core` directory, we'll find a `lib` folder containing all of the application files used by the `core` package. Included there is a `config` directory, which holds all of the configuration settings for each network supported by Ark Core out of the box. Inside the `testnet` config directory, we find a file called `delegates.json`.

If you open that file, you should see some information about dynamic fees, followed by a list of passphrases under the key `secrets`. Each of those passphrases represents a single delegate on our testnet. Using nothing more than the passphrase, we can use the `crypto` library to derive private keys, public keys, and addresses for a given delegate. If you're interested in learning how that's possible, the standard comes from [Bitcoin Improvement Proposal 39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki).

Now, it is probably important to note here that, although we will be picking passphrases to use for both the sending and receiving accounts, you do not need the recipient's passphrase to send them a transaction. However, as we are the only users on our testnet, we need to create both sides of the transaction.

There are a few different ways we could solve this problem. For this tutorial, we're going to use a second delegate passphrase as our recipient account, doing so will demonstrate how to use the `crypto` library to go from a passphrase to a public address, which may be helpful as you build your applications.

::: tip

The passphrase is used as a deterministic seed. It is not required to be human-legible; random characters work fine but are difficult to inspect for typos.

:::

You are welcome to pick any two passphrases, or select the same ones as we use here — these addresses are the same for every testnet installation.

::: danger

Before we continue, heed our warning: including your passphrases directly in your source code is a ** terrible idea**, and you should never do so when sending transactions in a production environment. Either load your passwords from a `.env` file, dedicated KMS or environment variables.

:::

Let's pick two and save them as variables for later use:

senderPassphrase: `measure blue volcano month orphan only cupboard found laugh peasant drama monitor`

recipientPassphrase: `craft imitate step mixture patch forest volcano business charge around girl confirm`

## Build Transaction

To create a transaction, we will need a builder class/instance. Depending on your SDK, it might be a single function, a class or a builder.

This object formats our transaction correctly so that our testnet node will accept it upon submission to the network.

:::: tabs

::: tab javascript

```js
const transaction = transactionBuilder
  .transfer() // specify 'transfer' as our AIP11 transaction type
  .amount(20 * 1e8) // 20 ARK, multiplied by 10^8 to get arktoshi value
  .vendorField("your vendorField message here")
  .recipientId("your recipient's address here")
  .sign("your sender's passphrase here")
  .getStruct() // returns signed transaction object
```

:::

::: tab java
:::

::: tab .NET
:::

::: tab php
:::

::: tab python

```python
from crypto.transactions.builder import Transfer

transaction = Transfer("recipient_id", (10 * 10**8), "vendor_field")
transaction.sign("passphrase")

# optional, if it is a multisignature wallet
transaction.second_sign("second_passphrase")
```

:::

::: tab golang

```go
func main() {
    tx := crypto.BuildTransfer(
        "recipientID",
        1000000000,
        "vendorfield",
        "passphrase",
        "secondPassphrase")
}
```

:::

::: tab C++

```cpp
auto transfer = Ark::Crypto::Transactions::Builder::buildTransfer(
    "recipientID",
    1000000000,
    "vendorfield",
    "passphrase",
    "secondPassphrase");
```

:::

::: tab ruby
:::

::: tab swift
:::

::: tab rust
:::

::: tab elixir
:::

::::

## Send Transaction

With everything in place, it's time to send some TARK (testnet ARK) using the `client` package.

:::: tabs

::: tab javascript

```js
testnetClient
  .resource('transactions')
  .create({ transactions: [transaction] })
  .then(response => console.log(response.data))
  .catch(error => console.error(error))
```

All client method calls to API endpoints return [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) objects, which should be resolved either with the `then... catch` methods as used in our example, or the newer ES6 `async/await` syntax if your environment supports it.

:::

::: tab java
:::

::: tab .NET
:::

::: tab php
:::

::: tab python

```python
tx_response = client.transactions.create([transaction])
```

:::

::: tab golang

```go
body := &arkClient.CreateTransactionRequest{
    Transactions: []interface{}{
        *transaction,
    },
}

response, _, err := client.Transactions.Create(context.Background(), body)
```

:::

::: tab C++

```cpp
char transactionsBuffer[600];
snprintf(&transactionsBuffer[0], 600, "{\"transactions\":[%s]}", transaction.toJson().c_str());

std::string sendResponse = connection.api.transactions.send(transactionsBuffer);
```

:::

::: tab ruby
:::

::: tab swift
:::

::: tab rust
:::

::: tab elixir
:::

::::

A couple of things to note here:

- In this example, we're just receiving the response from the server and logging it to the console immediately. In a real-world scenario, you'd likely want to do something with this response: more on that in a moment.
  
- All transactions should be wrapped in an array since it is possible to send multiple transactions at once.

For the full SDK demo, check out the [demos](/sdk/examples/sdk-demos.html)

With any luck, if we run the code and output to the console, our transfer should be sent successfully! You should receive an object similar to the below as a response:

```json
{
  "data": {
    "accept": ["62c0bcb45bddfcf68c57a5b7b7a36d4bb6463e1eb7ba1318804f83b4fa4f8d7d"],
    "excess": [],
    "invalid": [],
    "broadcast": ["62c0bcb45bddfcf68c57a5b7b7a36d4bb6463e1eb7ba1318804f83b4fa4f8d7d"]
  },
  "errors": null
}
```

From this response, we can see that we have one transaction ID in the `accept` array and one transaction in the `broadcast` array, meaning that our node accepted our transaction and broadcasted it to its peers. In this case, we are only running a single node (with 51 virtualized delegates), so our transaction did not go to any peers, but typically by this point other nodes in the network would be receiving and validating our transaction in the same way as the first node did.

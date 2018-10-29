# How to Send Your First Transaction with ARK SDK

In this recipe, we'll use Ark's Client and Crypto libraries to send an ARK transaction programmatically. You'll see how the Client and Crypto libraries work together to provide a comprehensive base for any ARK project, and you'll learn how to configure ARK's SDKs to work alongside your testnet.

## Getting Started

For this recipe, we'll be using a testnet to send our first transaction. A **testnet** is an ARK blockchain that runs exclusively on your own computer, and for that reason it's a great place to try out new concepts before porting them to devnet or mainnet. If you haven't set up your own testnet yet, check out our recipe on [How to Setup Dev Environment](/cookbook/developer/setup-dev-environment.html) and follow the instructions there before continuing.

You'll also want to make a folder in which to place the file containing your transaction-sending code. Because you'll connect to your testnet over HTTP, it's not necessary to include the transaction code in the same folder as your `core` installation. Just make sure you're not in a major folder such as `home` or `Documents`, as you'll need to install NPM dependencies for your code to work as intended (or at all).

Finally, in order to send a transaction, we'll need our testnet to be running. So before we start writing code, make sure to start the testnet by navigating to the `packages/core` folder of your `core` repo and running the command `yarn full:testnet`. If you see a node start up with 51 forgers, you're ready to start sending some digital bread.

## Connect To Testnet

With our testnet up and running, the first thing we'll need to do is connect to it. All interactions between ARK nodes and the outside world happen through the Public API, which is ARK's REST API to facilitate actions on the blockchain.

Now, it's possible to interact with ARK directly through HTTP without using any programming language at all. By default, the Public API for testnet opens a connection on your local machine at `http://0.0.0.0:4003`, where `0.0.0.0` is your local IP address and `4003` is the port used by the API. If visit `[http://0.0.0.0:4003/api/transactions](http://0.0.0.0:4003/api/transactions)` on your browser with a running testnet, you'll see a response showing you all the (empty) blocks your  testnet forgers have recently created.

HINT: If the response you see is hard to read, consider downloading a JSON Viewer for your browser of choice. It'll format JSON documents to make them much more readable.

Sending complex requests directly in your browser's URL window by typing them out is neither fun nor efficient. Instead, we can leverage one of ARK's most popular features: the first-party SDKs available in virtually all major programming languages. These SDKs streamline interacting with the ARK blockchain no matter your language; we'll be using the JavaScript SDK for the sake of continuity, but you're welcome to copy our approach with the SDK of your choice.

All SDK implementations are split into two libraries. The `client` library is responsible for sending requests and interpreting responses between your application and ARK nodes. By contrast, the `crypto` library is responsible for many of the most common ARK-related calculations your app will make: building transactions to send, signing transactions with passphrases, changing configuration settings, and so on.

We'll make extensive use of both libraries, so let's install them now. Run the following command from your terminal while in your project folder:

```sh
yarn add @arkecosystem/client @arkecosystem/crypto
```

Next, let's create an `index.js` file in which to write our code:

```sh
touch index.js
```

To connect to our testnet, we'll need two pieces of data to pass to our client:

1. The URL containing the location of our Public API
2. The version of the ARK API we want to access. 1 is for ARK v1, 2 is for ARK v2. If possible, always go full v2.

As mentioned above, by default our testnet will connect its Public API to the `[http://0.0.0.0:4003](http://0.0.0.0:4003)` URL. Accordingly, our first lines of code will look something like this:

```js
const Client = require('@arkecosystem/client')

const testnetClient = new Client('http://0.0.0.0:4003', 2) // (API URL, API version)`
```

Using the `client` package follows a similar pattern no matter what SDK you use: first you specify which resource you want to access, then you specify which action you want to take with that resource. For example, if we wanted to access the same transaction data we saw when visiting `/api/transactions` in the browser, we could do the following:

```js
console.log(testnetClient.resource('transactions').index())
```

With any luck, the data you'll get back from that request will very closely resemble the information you found at `/api/transactions`. And with that, we're now connected to our testnet!

## Changing Config Manager

At some point during the tutorial, you might run into some network-related bugs. By default, as of the time of writing, the `crypto` and `client` libraries are configured to work on devnet unless specifically told otherwise. As devnet is the ecosystem-wide testing ground for the new Ark Core, setting devnet as the default ensures that community testers can set up nodes and applications with a minimum of overhead.

However, there are some network-level differences between testnet and devnet that will cause some problems in our application if left unaddressed. To solve this, we need to tell our application to use the testnet settings.

The fastest way to do so is by using the `configManager` module that ships with the `crypto` library. As Node caches all `require` expressions to reuse across your application, setting `configManager` to use `testnet` once at the beginning of our app will ensure that we won't have to worry about it again, as our preferences will be saved and reused when needed.

To do so, import the `configManager` package from `crypto`, then tell it to use the `ark` network on `testnet` settings:

```js
const Client = require('@arkecosystem/client')
const { configManager } = require('@arkecosystem/crypto')

configManager.setFromPreset('ark', 'testnet')

const testnetClient = new Client('http://0.0.0.0:4003', 2) // (API URL, API version)
```

After doing so, our setup is complete, and we're ready to start sending transactions!

## Set Up Sending and Receiving Accounts

To send a transaction, we'll need two important pieces of the puzzle: an account to send the transaction, and an account to receive the transaction.

Fortunately, our testnet comes equipped with 51 accounts out of the box: our forging delegates. By now, if your testnet has been running for more than a couple minutes, each of your delegates should have received forging rewards for creating blocks, so we can be sure that our accounts have enough ARK to send a transaction. We just need to figure out a means of accessing those funds.

To do so, we'll need to look in the directory containing our testnet files. There, in the `packages/core` directory, we'll find a `lib` folder containing all of the application files used by the `core` package. Included there is a `config` directory, which holds all of the configuration settings for each network supported by ARK Core out of the box. Inside the `testnet` config directory, we'll find a file called `delegates.json` — this is what we're looking for.

If you open that file, you'll see some information about dynamic fees, followed by a list of passphrases under the key `secrets`. Each of those passphrases represents a single delegate on our testnet. Using nothing more than the passphrase, we can use the `crypto` library to derive private keys, public keys, and addresses for a given delegate. If you're interested in learning how that's possible, the standard comes from [Bitcoin Improvement Proposal 39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki). But if you're not interested and just want things to work, that's exactly what we'll be doing here.

Now, it's probably important to note here that, although we'll be picking passphrases to use for both the sending and receiving accounts, typically you don't need the recipient's password to send them a transaction. However, as we're the only users on our own testnet, we can't exactly ask a friend for their ARK address so we can send them test transactions.

There are a few different ways we could solve this problem. For this tutorial, we're going to use a second delegate passphrase as our recipient account Doing so will demonstrate how to use the `crypto` library to go from a passphrase to a public address, which may be helpful as you build your applications.

You are welcome to pick any two passcodes that strike your fancy, or select the same ones as we'll use here — these addresses are the same for every testnet installation.

However, before we continue, heed our warning: including your passphrases directly in your source code is a **very bad idea**, and you should never do so when sending transactions in a production environment. Either load your passwords from a `.env` file or collect your

Let's pick two and save them as variables for later use:

```js
const Client = require('@arkecosystem/client')
const { configManager } = require('@arkecosystem/crypto')

configManager.setFromPreset('ark', 'testnet')

const testnetClient = new Client('http://0.0.0.0:4003', 2) // (API URL, API version)

const senderPassphrase = 'measure blue volcano month orphan only cupboard found laugh peasant drama monitor'
const recipientPassphrase = 'craft imitate step mixture patch forest volcano business charge around girl confirm'
```

## Derive an Address from a Passphrase

In order to go from our recipient passphrase to our recipient testnet address, we'll need to pull off a crypto Inception and require the `crypto` module from the `crypto` package. This library contains most of the cryptographic functions we'll need to work with ARK, from signing transactions to, as we'll soon see, deriving hashes from other hashes.

So, the first thing we'll need is a keypair — in other words, a pairing of a public and private key. To derive this, we'll use the `getKeys` function on the recipient passphrase:

```js
const Client = require('@arkecosystem/client')
const { crypto, configManager } = require('@arkecosystem/crypto')

configManager.setFromPreset('ark', 'testnet')

const testnetClient = new Client('http://0.0.0.0:4003', 2)

const senderPassphrase = 'measure blue volcano month orphan only cupboard found laugh peasant drama monitor'
const recipientPassphrase = 'craft imitate step mixture patch forest volcano business charge around girl confirm'
const recipientKeys = crypto.getKeys(recipient)
```

Now, despite popular conception, a public key is not the same thing as an address. That means we've got one more function to call to go from a public key to an address we can send our transaction to:

```js
const Client = require('@arkecosystem/client')
const { crypto, configManager } = require('@arkecosystem/crypto')

configManager.setFromPreset('ark', 'testnet')

const testnetClient = new Client('http://0.0.0.0:4003', 2)

const senderPassphrase = 'measure blue volcano month orphan only cupboard found laugh peasant drama monitor'
const recipientPassphrase = 'craft imitate step mixture patch forest volcano business charge around girl confirm'
const recipientKeys = crypto.getKeys(recipient)
const recipientAddress = crypto.getAddress(recipientKeys.publicKey)
```

## Build Transaction

We'll pull in another module from the `crypto` library, this one appropriately named `transactionBuilder`.

This module formats our transaction properly so that our testnet node will accept it upon submission to the network. All transaction builder functions include the method `getStruct`, which returns a transaction object that we can submit directly to the Public API with our `client`. An example could look something like this:

```js
const transaction = transactionBuilder
  .transfer() // specify 'transfer' as our AIP11 transaction type
  .amount(20 * 1e8) // 20 ARK, multiplied by 10^8 to get arktoshi value
  .vendorField("your vendorField message here")
  .recipientId("your recipient's address here")
  .sign("your sender's passphrase here")
  .getStruct() // returns signed transaction object
```

Let's merge this code into the progress we've made so far:

```js
const Client = require('@arkecosystem/client')
const { crypto, configManager } = require('@arkecosystem/crypto')

configManager.setFromPreset('ark', 'testnet')

const testnetClient = new Client('http://0.0.0.0:4003', 2)

const transaction = transactionBuilder
  .transfer()
  .amount(20 * 1e8)
  .vendorField('sending our first transaction')
  .recipientId('AFrPtEmzu6wdVpa2CnRDEKGQQMWgq8nE9V')
  .sign('measure blue volcano month orphan only cupboard found laugh peasant drama monitor')
  .getStruct()
```

## Send Transaction

With everything in place, it's time to send some (T)ARK. Using the `client` package from the beginning of the recipe, let's run through an example of how to send a transaction:
```js
testnetClient
  .resource('transactions')
  .create({ transactions: [transaction] })
  .then(response => console.log(response.data))
  .catch(error => console.error(error))
```

A couple things to note here:

- All client method calls to API endpoints return [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) objects, which should be resolved either with the `then... catch` methods as used in our example, or in the newer ES6 `async/await` syntax if your environment supports it.
- In this example, we're just receiving the response from the server and logging it to the console immediately. In a real-world scenario you'd likely want to do something with this response: more on that in a moment.
- All transactions should be wrapped in an array.

All told, our transaction example looks like this:

```js
const Client = require('@arkecosystem/client')
const { crypto, transactionBuilder, configManager } = require('@arkecosystem/crypto')

configManager.setFromPreset('ark', 'testnet')

const testnetClient = new Client('http://0.0.0.0:4003', 2)

const transaction = transactionBuilder.transfer()
  .vendorField('something')
  .recipientId('AFrPtEmzu6wdVpa2CnRDEKGQQMWgq8nE9V')
  .sign('measure blue volcano month orphan only cupboard found laugh peasant drama monitor')
  .getStruct()

testnetClient
  .resource('transactions')
  .create({ transactions: [transaction] })
  .then(response => console.log(response.data))
  .catch(error => console.log(error))
```

With any luck, if we call `node index.js` in our console, our transfer should be sent successfully! You should receive an object similar to the below as a response:

```js
{
  data: {
    accept: [ '62c0bcb45bddfcf68c57a5b7b7a36d4bb6463e1eb7ba1318804f83b4fa4f8d7d' ],
    excess: [],
    invalid: [],
    broadcast: [ '62c0bcb45bddfcf68c57a5b7b7a36d4bb6463e1eb7ba1318804f83b4fa4f8d7d' ]
  },
  errors: null
}
```

From this response, we can see that we have one transaction ID in the `accept` array and one transaction in the `broadcast` array, meaning that our node accepted our transaction and broadcasted it to its peers. In this case, we're only running one node, so our transaction didn't actually go to any peers, but typically by this point other nodes in the network would be receiving and validating our transaction in the same way as our node did.

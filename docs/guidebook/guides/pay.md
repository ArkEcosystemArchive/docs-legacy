# Pay

This is the reference implementation for ARK Pay, a simple open-source library that provides merchants with the ability to readily accept ARK as a means of payment in online stores.

[[toc]]

## Installation

```bash
yarn add @arkecosystem/pay
```

## Usage with Browsers

::: warning
When using this module from a website that requires secure connections via HTTPS (SSL), you will need to specify peers that use HTTPS as browsers will not allow connections from HTTPS to HTTP (Peers). The default for ARK Core is to run the public API on HTTP connections without SSL.
:::

Below you can find two of our secure HTTPS (SSL) nodes. If you wish to use them call the below snippets before `gateway.start()`.

### Mainnet

```js
gateway.peers([
  {
    ip: "explorer.ark.io",
    port: 8443,
    protocol: "https"
  }
]);
```

### Devnet

```js
gateway.peers([
  {
    ip: "dexplorer.ark.io",
    port: 8443,
    protocol: "https"
  }
]);
```

## Example

```js
const ARKPay = require("@arkecosystem/pay");
const gateway = new ARKPay();

gateway
  .recipient("DNjuJEDQkhrJ7cA9FZ2iVXt5anYiM8Jtc9")
  .amount(1)
  .vendorField("Hello World")
  .currency("USD")
  .coin("ARK")
  .network("devnet");

// The "started" event is emitted when ARK Pay loaded all seeds, peers
// and exchange rates to make sure we are requesting the correct amount.
gateway.on("started", data => {
  // Send the session data to your backend, render it to the UI, etc.
});

// The "completed" event is emitted when ARK Pay received the exact amount
// with the correct vendor field within the specified time frame.
gateway.on("completed", data => {
  // Send a confirmation email, redirect the user, etc.
});

// The "aborted" event is emitted when ARK Pay is unable to find any seeds,
// peers or exchange rates for the active network within a reasonable time frame.
gateway.on("aborted", data => {
  // Restart the session, refresh the page or flush the shopping cart, etc.
});

// The "error" event is emitted when ARK Pay encounters any errors like an
// invalid or malformed response to an HTTP request.
gateway.on("error", data => {
  // React to the error, note that errors are not always critical, etc.
});

// The "start" method will initialize the transaction listener.
await gateway.start();
```

## API

### Set the recipient of the transfer.

```js
.recipient('ARMy9u1XvrZ124JzQq3oeJpjmBEnYkyU7D')
```

### Set the total amount of the transfer.

```js
.amount(1)
```

### Set the vendor field of the transfer.

```js
.vendorField('Hello World')
```

### Set the fiat currency of the transfer.

```js
.currency('USD')
```

### Set the cryptocurrency of the transfer.

```js
.coin('ARK')
```

### Set the network of the transfer.

```js
.network('devnet')
```

### Set the seeds of the network.

```js
.seeds('ark', [{
    ip: '127.0.0.1',
    port: '4003'
}, {
    ip: '127.0.0.1',
    port: '4003'
}, {
    ip: '127.0.0.1',
    port: '4003'
}])
```

### Set the peers of the network.

```js
.peers([{
    ip: '127.0.0.1',
    port: '4003'
}, {
    ip: '127.0.0.1',
    port: '4003'
}, {
    ip: '127.0.0.1',
    port: '4003'
}])
```

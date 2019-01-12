---
title: "JavaScript"
---

# JavaScript

[[toc]]

## NodeJS Installation
NodeJS can be downloaded [here](https://nodejs.org/en/download/)

A good way to manage your NodeJS installation and be able to work with multiple version is to go through [NVM](https://github.com/creationix/nvm)

## Yarn Installation

Yarn can be downloaded [here](https://yarnpkg.com/lang/en/docs/install/#windows-stable)

## Installation

```bash
$ yarn add @arkecosystem/client
```

## Development setup

If you want to contribute to the code of this package execute the following commands

1) Fork the [package](https://github.com/ArkEcosystem/javascript-client)

2) Clone your forked repository

```bash
$ git clone https://github.com/<githubusername>/javascript-client
```

3) Next, move into the fresh cloned directory

```js
...
async function init() {
  try {
    const response = await client.accounts.all({'limit': 1});
    return response.data;
  } catch (e) {
    console.log(e);
  }
}
```bash
$ cd javascript-client
```

4) Once the previous point done, you can proceed to install the dependencies

```bash
$ yarn install
```

5) Dependencies are now installed, you can now run the tests to see if everything is running like it should

```bash
$ yarn test
...
async function init() {
  try {
    const response = await client.blocks.all({'limit': 1});
    return response.data;
  } catch (e) {
    console.log(e);
  }
}
```

## Usage

### Initializing the Client

First step is to initialize the Client

```js
const Client = require('@arkecosystem/client')

const client = new Client('http://my.node.ip:port');
// For V2
client.setVersion(2);
...
```

### Blocks V2

```js
...
async function init() {
  try {
    const response = await client.blocks.all({'limit': 1});
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

init().then(json => {
  console.log(json);
})

... >{ meta:
... > { count: 1
... >   ...
... > }
... >}
```

### Delegates V1 and V2

```js
...
async function init() {
  try {
    const response = await client.delegates.search({"q": "ark", "limit": 1});
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

init().then(json => {
  console.log(json);
})

... >{ delegates:
... > [{
... >   ...
... > }]
... >}
```
### Delegates V2

```js
...
async function init() {
  try {
    const response = await client.delegates.all({"limit": 1});
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

init().then(json => {
  console.log(json);
})

... >{ meta:
... > { count: 1,
... >   ...
... > }
... >}
```

### Loader - V1

```js
...
async function init() {
  try {
    const response = await client.loader.status();
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

init().then(json => {
  console.log(json);
})

... >{ loaded: ... }
```

### Node - V2

```js
...
async function init() {
  try {
    const response = await client.node.status();
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

init().then(json => {
  console.log(json);
})

... >{ data: {...} }
```

### Peers - V1 and V2

```js
...
async function init() {
  try {
    const response = await client.peers.all({"limit": 1});
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

init().then(json => {
  console.log(json);
})

... >{ peers:
... > [{
... >   ...
... > }]
... >}
```
### Peers - V2

```js
...
async function init() {
  try {
    const response = await client.peers.all({"limit": 1});
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

init().then(json => {
  console.log(json);
})

... >{ meta:
... > { count: 1
... >   ...
... > }
... >}
```

### Signatures - V1

```js
...
async function init() {
  try {
    const response = await client.signatures.fee();
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

init().then(json => {
  console.log(json);
})

... >{ fee: ... }
```

### Transactions - V1 and V2

```js
...
async function init() {
  try {
    const response = await client.transactions.all({"senderId": "AUDud8tvyVZa67p3QY7XPRUTjRGnWQQ9Xv"});
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

init().then(json => {
  console.log(json);
})

... >{ transactions:
... > [{
... >   ...
... > }]
... >}
```
### Transactions - V2

```js
...
async function init() {
  try {
    const response = await client.transactions.all({"senderId": "AUDud8tvyVZa67p3QY7XPRUTjRGnWQQ9Xv", "orderBy": "timestamp.epoch"});
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

init().then(json => {
  console.log(json);
})

... >{ meta:
... > { count: 4
... >   ...
... > }
... >}
```

### Votes - V2

```js
...
async function init() {
  try {
    const response = await client.votes.all();
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

init().then(json => {
  console.log(json);
})

... >{ meta:
... > {
... >   ...
... > }
... >}
```

### Wallets - V2

```js
...
async function init() {
  try {
    const response = await client.wallets.get('AFrPtEmzu6wdVpa2CnRDEKGQQMWgq8nE9V');
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

init().then(json => {
  console.log(json);
})

... >{ data:
... > {
... >   ...
... > }
... >}
```

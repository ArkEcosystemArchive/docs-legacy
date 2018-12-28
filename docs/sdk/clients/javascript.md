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
    const response = await client.resource('blocks').all('limit': 1);
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

### Delegates V2

```js
...
async function init() {
  try {
    const response = await client.resource('delegates').all({"limit": 1});
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

### Node - V2

```js
...
async function init() {
  try {
    const response = await client.resource('node').status();
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

### Peers - V2

```js
...
async function init() {
  try {
    const response = await client.resource('peers').all({"limit": 1});
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

### Transactions - V2

```js
...
async function init() {
  try {
    const response = await client.resource('transactions').all({"senderId": "AUDud8tvyVZa67p3QY7XPRUTjRGnWQQ9Xv", "orderBy": "timestamp.epoch"});
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
    const response = await client.resource('votes').all();
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
    const response = await client.resource('wallets').get('AFrPtEmzu6wdVpa2CnRDEKGQQMWgq8nE9V');
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

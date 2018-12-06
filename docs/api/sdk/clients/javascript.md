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

## Usage

### Initializing the Client

First step is to initialize the Client

```js
const Client = require('@arkecosystem/client')

const client = new Client('http://my.node.ip:port');
// For V1
client.setVersion(1);
// For V2
client.setVersion(2);
...
```

### Accounts - V1

```js
...
async function init() {
  try {
    const response = await client.resource('accounts').all('limit': 1);
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

init().then(json => {
  console.log(json);
})

... >{ accounts:
... > [{
... >   ...
... > }] 
... >}
```

### Blocks V1 and V2

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

... >{ blocks:
... > [{
... >   ...
... > }] 
... >}
```

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

### Delegates V1 and V2

```js
...
async function init() {
  try {
    const response = await client.resource('delegates').search({"q": "ark", "limit": 1});
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

### Loader - V1

```js
...
async function init() {
  try {
    const response = await client.resource('loader').status();
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

### Peers - V1 and V2

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

... >{ peers:
... > [{
... >   ...
... > }] 
... >}
```

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

### Signatures - V1 

```js
...
async function init() {
  try {
    const response = await client.resource('signatures').fee();
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
    const response = await client.resource('transactions').all({"senderId": "AUDud8tvyVZa67p3QY7XPRUTjRGnWQQ9Xv"});
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

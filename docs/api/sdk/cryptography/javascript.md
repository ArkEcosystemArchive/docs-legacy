---
title: "JavaScript"
---

# JavaScript

::: warning
This project is still under development. This page will get more content as the project evolves. In the meantime you can view its source on [Github](https://github.com/ArkEcosystem/core/tree/master/packages/crypto).
:::

[[toc]]

## Installation

```bash
yarn add @arkecosystem/crypto
```

## Transactions

### Sign

```js

```

### Serialize (AIP11)

```js

```

### Deserialize (AIP11)

```js

```

## Message

### Sign

### Verify


## Identities

### Address

#### Get an address from a passphrase

```js

```

#### Get an address from a public key

```js

```

#### Get an address from a private key

```js

```

#### Validate an address

```js
const { validator } = require('@arkecosystem/crypto')

validator.__validateWithRule('DARiJqhogp2Lu6bxufUFQQMuMyZbxjCydN', 'address')

validator.passes() // returns true
```

### Private Key

#### Get a private key from a passphrase

```js
```

#### Get a private key instance object from hex

```js
```

#### Get a private key from a WIF

```js
```
	
### Public Key

#### Get a public key from a passphrase

```js
```

#### Get a public key instance object from hex

```js
```

#### Validate a public key

```js
```

### WIF

#### Get a WIF from a passphrase

```js
```

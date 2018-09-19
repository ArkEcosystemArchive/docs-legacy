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

To manage identities, the crypto object must first be required:

```js
const { crypto } = require('@arkecosystem/crypto')
```

This is true for getting addresses, public keys, private keys and WIFs.

### Address

#### Get an address from a passphrase

```js
const { crypto } = require('@arkecosystem/crypto')

const keyPair = crypto.getKeys('top secret passphrase')
const address = crypto.getAddress(keyPair.publicKey.toString('hex'))
```

#### Get an address from a public key

```js
const { crypto } = require('@arkecosystem/crypto')

const publicKey = '03f0a5be9bbed6ccf7b241198295e60de919bf56dc4ad17437aad8e096389101f1'
const address = crypto.getAddress(publicKey.toString('hex'))
```

#### Get an address from a private key

```js
const { crypto } = require('@arkecosystem/crypto')

const key = {
  privateKey: '26cb357307fc1ba59af3eb244f799578ea9a998a154b0b54fa0bfd77688bdc86',
  compressed: true
}

const WIF = crypto.keysToWIF(key)
const keyPair = crypto.getKeysFromWIF(WIF)
const address = crypto.getAddress(keyPair.publicKey.toString('hex'))
```

#### Validate an address

```js
crypto.validateAddress('DTZrKeW8Mn61SqXVvTGt5Q3juNvn2cMJLx')
```

### Private Key

#### Get a private key from a passphrase

```js
crypto.getKeys('top secret passphrase')['privateKey']
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
crypto.getKeys('top secret passphrase')['publicKey']
```

#### Get a public key instance object from hex

```js
```

#### Validate a public key

```js
crypto.validatePublicKey('03f0a5be9bbed6ccf7b241198295e60de919bf56dc4ad17437aad8e096389101f1')
```

### WIF

#### Get a WIF from a passphrase

```js
crypto.keysToWIF(crypto.getKeys('top secret passphrase'))
```


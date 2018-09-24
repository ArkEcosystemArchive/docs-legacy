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

To perform cryptographic functions with the Ark JavaScript Crypto library, you must first require it:

```js
const { crypto } = require('@arkecosystem/crypto')
```

Throughout this document, the keys object used is:

```js
const keys = crypto.getKeys('top secret passphrase')
```

## Transactions

The transaction object used for this section:

```js
const transaction = {
  type: 0,
  amount: 1000,
  fee: 2000,
  recipientId: 'DM7UiH4b2rW2Nv11Wu6ToiZi8MJhGCEWhP',
  timestamp: 121212,
  asset: {},
  senderPublicKey: keys.publicKey
}
```

For serializing and deserializing, we must require the Transaction model:

```js
const { Transaction } = require('@arkecosystem/crypto').models
```

### Sign

```js
crypto.sign(transaction, keys)
```

### Serialize (AIP11)

```js
const serialized = Transaction.serialize(transaction).toString('hex')
```

### Deserialize (AIP11)

```js
const deserialized = Transaction.deserialize(serialized)
```

## Message

### Sign

```js
const message = "Arbitrary entry of data"
const hash = utils.sha256(message)
const signature = crypto.signHash(hash, keys)

const signed = {
  message, hash, signature
}
```

### Verify

```js
crypto.verifyHash(signed.hash, signed.signature, keys.publicKey)
```
## Identities

### Address

#### Get an address from a passphrase

```js
crypto.getAddress(crypto.getKeys('top secret passphrase'))
```

#### Get an address from a public key

```js
crypto.getAddress(keys.publicKey)
```

#### Get an address from a private key

Assuming the public key is not part of the keys object, it can also be omitted:

```js
const keys = {
  privateKey: '26cb357307fc1ba59af3eb244f799578ea9a998a154b0b54fa0bfd77688bdc86'
  compressed: true
}

crypto.getAddress(crypto.getKeysFromWIF(crypto.keysToWIF(keys))['publicKey'])
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
crypto.getKeysFromWIF('SAsbyqRNUBsqfn1kH7CeH4oMBwFHukAWhFW9M32vbHT68psRhP8D')['privateKey']
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

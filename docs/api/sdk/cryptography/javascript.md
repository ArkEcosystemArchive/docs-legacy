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

To use identities in your project, first require the module

```js
const { identities } = require('@arkecosystem/crypto')
```

### Address

#### Get an address from a passphrase

```js
identities.address.fromPassphrase('top secret passphrase')
```

#### Get an address from a public key

```js
identities.address.fromPublicKey(keys.publicKey)
```

#### Get an address from a private key

```js
identities.address.fromPrivateKey(keys.privateKey)
```

#### Validate an address

```js
identities.address.validate('DTZrKeW8Mn61SqXVvTGt5Q3juNvn2cMJLx')
```

### Private Key

#### Get a private key from a passphrase

```js
identities.privateKey.fromPassphrase('top secret passphrase')
```

#### Get a private key instance object from hex

```js
unimplemented
```

#### Get a private key from a WIF

```js
identities.privateKey.fromWIF('SAsbyqRNUBsqfn1kH7CeH4oMBwFHukAWhFW9M32vbHT68psRhP8D')
```

### Public Key

#### Get a public key from a passphrase

```js
identities.publicKey.fromPassphrase('top secret passphrase')
```

#### Get a public key instance object from hex

```js
unimplemented
```

#### Get a private key from a WIF

```js
identities.publicKey.fromWIF('SAsbyqRNUBsqfn1kH7CeH4oMBwFHukAWhFW9M32vbHT68psRhP8D')
```

#### Validate a public key

```js
identities.publicKey.validate('03f0a5be9bbed6ccf7b241198295e60de919bf56dc4ad17437aad8e096389101f1')
```

### WIF

#### Get a WIF from a passphrase

```js
identities.wif.fromPassphrase('top secret passphrase')
```

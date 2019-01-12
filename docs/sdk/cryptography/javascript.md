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
yarn add @arkecosystem/crypto
```

## Development setup

If you want to contribute to the code of this package execute the following commands

1) Fork the [package](https://github.com/ArkEcosystem/javascript-crypto)

2) Clone your forked repository

```bash
$ git clone https://github.com/<githubusername>/javascript-crypto
```

3) Next, move into the fresh cloned directory

```bash
$ cd javascript-crypto
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

To perform cryptographic functions with the Ark JavaScript Crypto library, you must first require it:

```js
const { crypto } = require('@arkecosystem/crypto')
```

Throughout this document, the keys object used is:

```js
const keys = crypto.getKeys('this is a top secret passphrase')
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
  senderPublicKey: '034151a3ec46b5670a682b0a63394f863587d1bc97483b1b'
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
crypto.verifyHash(signed.hash, signed.signature, '034151a3ec46b5670a682b0a63394f863587d1bc97483b1b')
```
## Identities

To use identities in your project, first require the module

```js
const { identities } = require('@arkecosystem/crypto')
```

### Address

#### Get an address from a passphrase

```js
identities.address.fromPassphrase('this is a top secret passphrase')
```

#### Get an address from a public key

```js
identities.address.fromPublicKey('034151a3ec46b5670a682b0a63394f863587d1bc97483b1b')
```

#### Get an address from a private key

```js
identities.address.fromPrivateKey('d8839c2432bfd0a67ef10a804ba991eabba19f154a3d707917681d45822a5712')
```

#### Validate an address

```js
identities.address.validate('D61mfSggzbvQgTUe6JhYKH2doHaqJ3Dyib')
```

### Private Key

#### Get a private key from a passphrase

```js
identities.privateKey.fromPassphrase('this is a top secret passphrase')
```

#### Get a private key instance object from hex

```js
unimplemented
```

#### Get a private key from a WIF

```js
identities.privateKey.fromWIF('SGq4xLgZKCGxs7bjmwnBrWcT4C1ADFEermj846KC97FSv1WFD1dA')
```

### Public Key

#### Get a public key from a passphrase

```js
identities.publicKey.fromPassphrase('this is a top secret passphrase')
```

#### Get a public key instance object from hex

```js
unimplemented
```

#### Get a private key from a WIF

```js
identities.publicKey.fromWIF('SGq4xLgZKCGxs7bjmwnBrWcT4C1ADFEermj846KC97FSv1WFD1dA')
```

#### Validate a public key

```js
identities.publicKey.validate('034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192')
```

### WIF

#### Get a WIF from a passphrase

```js
identities.wif.fromPassphrase('this is a top secret passphrase')
```

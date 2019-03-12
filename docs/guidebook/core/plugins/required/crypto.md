---
title: Crypto
---

# Crypto

## Implementation

[crypto](https://github.com/ArkEcosystem/core/tree/develop/packages/crypto)

## **Summary**

The `crypto` package is not actually an Ark Core package, in that it is not loaded into the container when starting an Ark Core node. Instead, the `crypto` package provides a host of utility functions designed to facilitate the process of interacting with Ark blockchains.

## Builder

The transaction builder can be used to map raw data into properly structured and serializable Ark transactions. All transaction builders contain two primary types of functions:

- Input functions, which take raw data (transaction amount, sender, etc) and transform them into their equivalents in the Ark protocol
- Return functions, which return objects to submit to the network with Ark Client

After calling input functions on a transaction to fill out its details, use the return function to retrieve the output for use in Ark Client.

## Crypto

This directory contains the cryptographic functions underpinning much of the core functionality of Ark. Ark's cryptography is inherited from Bitcoin. Like in Bitcoin, [secpk256k1](https://en.bitcoin.it/wiki/Secp256k1) is used in Ark to create keypairs, sign and validate transactions. This allows Ark blockchains to utilize many of Bitcoin's strongest cryptographic principles and the benefits they provide, such as [HD wallets](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki). The files in this directory include:

- [crypto](https://github.com/ArkEcosystem/core/blob/develop/packages/crypto/lib/crypto/crypto.js): perform and verify cryptographic functions
- [hdwallet](https://github.com/ArkEcosystem/core/blob/develop/packages/crypto/lib/crypto/hdwallet.js): create and extend HD wallets
- [slots](https://github.com/ArkEcosystem/core/blob/develop/packages/crypto/lib/crypto/slots.js): create and maintain delegate order in forging rounds
- [utils](https://github.com/ArkEcosystem/core/blob/develop/packages/crypto/lib/crypto/utils.js): helper functions to quickly create ripemd160, sha1, sha256, hash160, and hash256 buffers
- [message](https://github.com/ArkEcosystem/core/blob/develop/packages/crypto/lib/crypto/message.js): used to sign and verify messages

## Models

These are the non-cryptographic data structures that define Ark Core. There are four models:

- [Block](https://github.com/ArkEcosystem/core/blob/develop/packages/crypto/lib/models/block.js)
- [Delegate](https://github.com/ArkEcosystem/core/blob/develop/packages/crypto/lib/models/delegate.js)
- [Transaction](https://github.com/ArkEcosystem/core/blob/develop/packages/crypto/lib/models/transaction.js)
- [Wallet](https://github.com/ArkEcosystem/core/blob/develop/packages/crypto/lib/models/wallet.js)

Each of these files is a JavaScript constructor function that matches data with functionality. Ark Core fetches raw information out of `core-database` with SQL queries and passes it into these constructor function to produce many of the functional models used throughout Ark Core.

Where relevant, the serialization and deserialization methods for each data model are included in these classes. 

The Delegate model's `forge` method is responsible for forging and signing blocks from transactions. The Delegate model uses `forge` in `core-forger` to produce, record and broadcast new blocks to the network.

## Identities

Identities represent the cryptographic primitives that comprise all Ark networks. There are five identities:

- [Address](https://github.com/ArkEcosystem/core/blob/develop/packages/crypto/lib/identities/address.js)
- [Keys](https://github.com/ArkEcosystem/core/blob/develop/packages/crypto/lib/identities/keys.js)
- [Private Key](https://github.com/ArkEcosystem/core/blob/develop/packages/crypto/lib/identities/private-key.js)
- [Public Key](https://github.com/ArkEcosystem/core/blob/develop/packages/crypto/lib/identities/public-key.js)
- [WIF](https://github.com/ArkEcosystem/core/blob/develop/packages/crypto/lib/identities/wif.js)

Unlike the models, these identities are not constructor functions, and thus cannot be instantiated with the `new` keyword. Instead, each class provides static methods designed to easily convert from one cryptographic identity to another. 

Many methods in these classes are used for deriving cryptographic identities from passphrases, making them good choices for use whenever working with sensitive inputs that should not be stored to memory. For example, here is the method used to create [WIFs](https://en.bitcoin.it/wiki/Wallet_import_format) from a given passphrase:
```js
module.exports = class WIF {
  static fromPassphrase(passphrase, network) {
    const keys = Keys.fromPassphrase(passphrase)

    if (!network) {
      network = configManager.all()
    }

    return wif.encode(
      network.wif,
      Buffer.from(keys.privateKey, 'hex'),
      keys.compressed,
    )
  }
}
```
And here is the `Keys.fromPassphrase(passphrase)` method that the above WIF method relies on:
```js
static fromPassphrase(passphrase, compressed = true) {
    const privateKey = utils.sha256(Buffer.from(passphrase, 'utf8'))
    return Keys.fromPrivateKey(privateKey, compressed)
  }
```
## Managers

There are four managers of note:

- [Config](https://github.com/ArkEcosystem/core/blob/develop/packages/crypto/lib/managers/config.js)
    - sets config for use in `crypto` calculations, both for cryptographic and non-cryptographic functions
- [Dynamic Fee](https://github.com/ArkEcosystem/core/blob/develop/packages/crypto/lib/managers/dynamic-fee.js)
    - One relevant function in the Dynamic Fee Manager is `calculateFee`, which accepts an arktoshi-per-byte rate and a transaction and returns an arktoshi amount.
    - This function uses the serialized transaction to calculate the transaction size, then calculates a minimum fee `f` by the calculation `f = (c + s) * r`:
        - `c` is a minimum arktoshi constant, set by forgers and based on transaction type
        - `s` is the transaction size in bytes
        - `r` is the arktoshi-per-byte rate
- [Fee](https://github.com/ArkEcosystem/core/blob/develop/packages/crypto/lib/managers/fee.js)
    - Fee Manager is used for static fees. If static fees are enabled in your node, this Fee Manager is used to match incoming fees against the values defined in your network config file.
- [Network](https://github.com/ArkEcosystem/core/blob/develop/packages/crypto/lib/managers/network.js)
    - The NetworkManager class fetches JSON configs out of the neighboring `networks` directory based on which coin and network the client requests. By default, the NetworkManager selects `ark` as the default coin and `devnet` as the default network.
    - NetworkManager's `findByName` function is used in `core-container` to set configuration settings in the `Environment` class. This ensures that Ark Core nodes always have fallback values to refer to if used in conjunction with the `ark` network.

## Handlers

The transaction handlers in the `handlers` directory set rules governing whether or not a given transaction can be applied to a given wallet. The TransactionHandler is used by the Wallet model to check incoming transactions against the requirements for that transaction type.

Each transaction handler implements the following methods:

- `canApply(wallet, transaction, errors)` - determines whether the given transaction can be applied to the wallet
- `applyTransactionToSender(wallet, transaction)`
- `applyTransactionToRecipient(wallet, transaction)`
- `revertTransactionForSender(wallet, transaction)`
- `revertTransactionForRecipient(wallet, transaction)`

## Utils

The utils directory contains several utility functions:

- [bignum.js](https://github.com/ArkEcosystem/core/blob/develop/packages/crypto/lib/utils/bignum.js): sets up a global instance of bignumber.js with no decimal places and default ZERO and ONE properties
- [format-arktoshi](https://github.com/ArkEcosystem/core/blob/develop/packages/crypto/lib/utils/format-arktoshi.js): takes an arktoshi value and outputs it as a human-readable value
- [sort-transactions](https://github.com/ArkEcosystem/core/blob/develop/packages/crypto/lib/utils/sort-transactions.js): provides basic algorithm for sorting transactions prior to their inclusion in a block. Types with a larger type value (as found in [constants](https://github.com/ArkEcosystem/core/blob/develop/packages/crypto/lib/constants.js)) are sorted before smaller transaction types, and timestamps are used to sort transactions of similar type.

## Validation

The `validation` [library](https://github.com/ArkEcosystem/core/blob/develop/packages/crypto/lib/validation/validator.js) contains a Joi validation engine with special extensions to validate API endpoints using Ark-specific data structures. This `validation` library is utilized in `core-api` and `core-p2p`, where it is used to make sure that incoming POST requests conform to Ark Core standards.
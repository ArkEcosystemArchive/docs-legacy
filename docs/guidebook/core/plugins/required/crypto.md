---
title: "Crypto"
---

# Crypto

## Implementation

[crypto](https://github.com/ARKEcosystem/core/tree/develop/packages/crypto)

## **Summary**

The `crypto` package is not actually an ARK Core package, in that it is not loaded into the container when starting an ARK Core node. Instead, the `crypto` package provides a host of utility functions designed to facilitate the process of interacting with ARK blockchains.

## Builder

The transaction builder can be used to map raw data into properly structured and serializable ARK transactions. All transaction builders contain two primary types of functions:

- Input functions, which take raw data (transaction amount, sender, etc) and transform them into their equivalents in the ARK protocol
- Return functions, which return objects to submit to the network with ARK Client

After calling input functions on a transaction to fill out its details, use the return function to retrieve the output for use in ARK Client.

## Crypto

This directory contains the cryptographic functions underpinning much of the core functionality of ARK. ARK's cryptography is inherited from Bitcoin. Like in Bitcoin, [secpk256k1](https://en.bitcoin.it/wiki/Secp256k1) is used in ARK to create keypairs, sign and validate transactions. This allows ARK blockchains to utilize many of Bitcoin's strongest cryptographic principles and the benefits they provide, such as [HD wallets](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki). The files in this directory include:

- [crypto](https://github.com/ARKEcosystem/core/blob/develop/packages/crypto/src/crypto/crypto.ts): perform and verify cryptographic functions
- [hdwallet](https://github.com/ARKEcosystem/core/blob/develop/packages/crypto/src/crypto/hdwallet.ts): create and extend HD wallets
- [slots](https://github.com/ARKEcosystem/core/blob/develop/packages/crypto/src/crypto/slots.ts): create and maintain delegate order in forging rounds
- [utils](https://github.com/ARKEcosystem/core/blob/develop/packages/crypto/src/crypto/hash-algorithms.ts): helper functions to quickly create ripemd160, sha1, sha256, hash160, and hash256 buffers
- [message](https://github.com/ARKEcosystem/core/blob/develop/packages/crypto/src/crypto/message.ts): used to sign and verify messages

## Models

These are the non-cryptographic data structures that define ARK Core. There are three models:

- [Block](https://github.com/ARKEcosystem/core/blob/develop/packages/crypto/src/models/block.ts)
- [Delegate](https://github.com/ARKEcosystem/core/blob/develop/packages/crypto/src/models/delegate.ts)
- [Transaction](https://github.com/ARKEcosystem/core/blob/develop/packages/crypto/src/transactions/types/transaction.ts)

Each of these files is a Typescript class that matches data with functionality. ARK Core fetches raw information out of `core-database` with SQL queries and passes it into these constructor function to produce many of the functional models used throughout ARK Core.

Where relevant, the serialization and deserialization methods for each data model are included in these classes.

The Delegate model's `forge` method is responsible for forging and signing blocks from transactions. The Delegate model uses `forge` in `core-forger` to produce, record and broadcast new blocks to the network.

## Identities

Identities represent the cryptographic primitives that comprise all ARK networks. There are five identities:

- [Address](https://github.com/ARKEcosystem/core/blob/develop/packages/crypto/src/identities/address.ts)
- [Keys](https://github.com/ARKEcosystem/core/blob/develop/packages/crypto/src/identities/keys.ts)
- [Private Key](https://github.com/ARKEcosystem/core/blob/develop/packages/crypto/src/identities/private-key.ts)
- [Public Key](https://github.com/ARKEcosystem/core/blob/develop/packages/crypto/src/identities/public-key.ts)
- [WIF](https://github.com/ARKEcosystem/core/blob/develop/packages/crypto/src/identities/wif.ts)

Unlike the models, these classes do not have a constructor, and thus cannot be instantiated with the `new` keyword. Instead, each class provides static methods designed to easily convert from one cryptographic identity to another.

Many methods in these classes are used for deriving cryptographic identities from passphrases, making them good choices for use whenever working with sensitive inputs that should not be stored to memory. For example, here is the method used to create [WIFs](https://en.bitcoin.it/wiki/Wallet_import_format) from a given passphrase:

```ts
public static fromPassphrase(passphrase: string, network?: INetwork): string {
    const keys = Keys.fromPassphrase(passphrase);

    if (!network) {
        network = configManager.all();
    }

    return wif.encode(network.wif, Buffer.from(keys.privateKey, "hex"), keys.compressed);
}
```

And here is the `Keys.fromPassphrase(passphrase, compresses)` method that the above WIF method relies on:

```ts
public static fromPassphrase(passphrase: string, compressed: boolean = true): KeyPair {
    const privateKey = HashAlgorithms.sha256(Buffer.from(passphrase, "utf8"));
    return Keys.fromPrivateKey(privateKey, compressed);
}
```

## Managers

There are three managers of note:

- [Config](https://github.com/ARKEcosystem/core/blob/develop/packages/crypto/src/managers/config.ts)
  - sets config for use in `crypto` calculations, both for cryptographic and non-cryptographic functions
- [Fee](https://github.com/ARKEcosystem/core/blob/develop/packages/crypto/src/managers/fee.ts)
  - Fee Manager is used for static fees. If static fees are enabled in your node, this Fee Manager is used to match incoming fees against the values defined in your network config file.
- [Network](https://github.com/ARKEcosystem/core/blob/develop/packages/crypto/src/managers/network.ts)
  - The NetworkManager class fetches JSON configs out of the neighboring `networks` directory based on which coin and network the client requests. By default, the NetworkManager selects `ark` as the default coin and `devnet` as the default network.
  - NetworkManager's `findByName` function is used in `core-container` to set configuration settings in the `Environment` class. This ensures that ARK Core nodes always have fallback values to refer to if used in conjunction with the `ark` network.

## Utils

The [utils](https://github.com/ARKEcosystem/core/blob/develop/packages/crypto/src/utils.ts) file contains several utility functions, which include:

- [formatSatoshi](https://github.com/ARKEcosystem/core/blob/develop/packages/crypto/src/utils.ts#L17): takes a satoshi value and outputs it as a human-readable value
- [sortTransactions](https://github.com/ARKEcosystem/core/blob/develop/packages/crypto/src/utils.ts#L39): provides basic algorithm for sorting transactions prior to their inclusion in a block. Types with a larger type value (as found in [constants](https://github.com/ARKEcosystem/core/blob/develop/packages/crypto/src/constants.ts)) are sorted before smaller transaction types, and timestamps are used to sort transactions of similar type.

It also [sets up](https://github.com/ARKEcosystem/core/blob/develop/packages/crypto/src/utils.ts#L7) a global instance of bignumber.js with no decimal places and default ZERO and ONE properties

## Validation

The `validation` [library](https://github.com/ARKEcosystem/core/blob/develop/packages/crypto/src/validation/validator.ts) contains a Ajv validation engine with special extensions to validate API endpoints using ARK-specific data structures. This `validation` library is utilized in `core-api` and `core-p2p`, where it is used to make sure that incoming POST requests conform to ARK Core standards.

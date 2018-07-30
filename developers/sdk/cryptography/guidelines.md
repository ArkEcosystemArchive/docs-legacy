---
title: "Guidelines"
---

# Guidelines

[[toc]]

## Introduction

**The following is a guide for implementing a new Ark Cryptography SDK. It covers the required functionalities as well as guidelines for how cryptography should typically look and behave.**

These guidelines are to be strictly followed if you are implementing or modifying a cryptography package for the Ark Ecosystem.

Following these guidelines is required to provide a streamlined experience across different languages in order to make it easier for new developers to get started with developing a new package or modify an existing one without lowering the quality of the already existing implementation.

**Carefully read those guidelines and abide to them while developing a cryptography package.**

## Required Functionality

### AIP11 Serialization
- Transfer **(Type 0)**
- Second Signature Registration **(Type 1)**
- Delegate Registration **(Type 2)**
- Vote **(Type 3)**
- Multi Signature Registration **(Type 4)**
- IPFS **(Type 5)**
- Timelock Transfer **(Type 6)**
- Multi Payment **(Type 7)**
- Delegate Resignation **(Type 8)**

### AIP11 Deserialization
- Transfer **(Type 0)**
- Second Signature Registration **(Type 1)**
- Delegate Registration **(Type 2)**
- Vote **(Type 3)**
- Multi Signature Registration **(Type 4)**
- IPFS **(Type 5)**
- Timelock Transfer **(Type 6)**
- Multi Payment **(Type 7)**
- Delegate Resignation **(Type 8)**

### Transaction Signing
- Transfer **(Type 0)**
- Second Signature Registration **(Type 1)**
- Delegate Registration **(Type 2)**
- Vote **(Type 3)**
- Multi Signature Registration **(Type 4)**
- ~~IPFS **(Type 5)**~~
- ~~Timelock Transfer **(Type 6)**~~
- ~~Multi Payment **(Type 7)**~~
- ~~Delegate Resignation **(Type 8)**~~

### Transaction Verifying
- Transfer **(Type 0)**
- Second Signature Registration **(Type 1)**
- Delegate Registration **(Type 2)**
- Vote **(Type 3)**
- Multi Signature Registration **(Type 4)**
- ~~IPFS **(Type 5)**~~
- ~~Timelock Transfer **(Type 6)**~~
- ~~Multi Payment **(Type 7)**~~
- ~~Delegate Resignation **(Type 8)**~~

## Transaction
- **getId** Compute the unique transaction ID.
- **sign** Sign the transaction using a passphrase.
- **secondSign** Sign the transaction using a second passphrase.
- **verify** Verify the transaction.
- **secondVerify** Verify the transaction using a second public key.
- **parseSignatures** Parse the signature, second signature and multi signatures.
- **serialize** Serialise the object via AIP11.
- **deserialize** Deserialise the given hex string via AIP11.
- **toBytes** Turn the transaction into its v1 byte representation.
- **toArray** Turn the transaction into a standardised array.
- **toJson** Turn the transaction into a JSON string using the `toArray` data as source.

### Message
- **sign** Create a signed message using the given message and passphrase.
- **verify** Verify the given message, public key and signature combination.
- **toArray** Turn the message into a standardised array.
- **toJson** Turn the message into a JSON string using the `toArray` data as source.

### Private Key
- **fromPassphrase** Derive a private key from the given passphrase.
- **fromHex** Get a private key instance from a private key hex string.

### Public Key
- **fromPassphrase** Derive a public key from the given passphrase.
- **fromHex** Get a public key instance from a public key hex string.

### Address
- **fromPassphrase** Derive an address from the given passphrase.
- **fromPublicKey** Derive an address from the given public key.
- **fromPrivateKey** Derive an address from the given private key.
- **validate** Validate the given address against the given network.

### WIF
- **fromPassphrase** Derive a WIF from the given passphrase.

### Configuration
- **getNetwork** Get the default network used by all functions.
- **setNetwork** Set the default network used by all functions.
- **getFee** Get a default fee by type used by all functions.
- **setFee** Set a default fee by type used by all functions.

### Slot
- **time** Get the time elapsed since network start.
- **epoch** Get the timestamp of the network start.

## Networks (Mainnet, Devnet & Testnet)
- **epoch** Get the epoch of the network.
- **version** Get the version of the network.
- **nethash** Get the nethash of the network.
- **wif** Get the wif prefix of the network.

## Things to keep in mind

- Do not assume what the developer is going to do with the output. **If you are working with a buffer, return the buffer instead of a hex encoded value.**
- Add optional helper methods to easily convert identities between `binary` and `hex`. **An example of this would be to be able to do `privateKey.toHex()` instead of having to manually encode the private key bytes to hex.**
- Do not add functionality outside of the required functionality. **An example would be to add helper methods for very niche use-cases just because they seem like a nice-to-have.**
- Add optional helper methods to easily derive identities from multiple sources. **An example would be  methods like `AddressFromPassphrase`, `PublicKeyFromPassphrase` or `PublicKeyFromPrivateKey`.**

## Terminology & Phrasing

- If you need to use the `Ark` name, keep these 2 use-cases in mind. The first one is `ARK` which is used in financial contexts like `10 ARK`. The second is `Ark` which used for everything else that is not talking about `ARK`, the financial unit.

- If you work with functions that require a `secret` or `passphrase` name the variables `passphrase` and `secondPassphrase`.

- If you work with `serialisation` use the American english `serialization` variant with `z` to name methods and variables.

- If you work with `deserialisation` use the American english `deserialization` variant with `z` to name methods and variables.

## File & Directory Structure

The structure outline here should be followed as closely as possible. If you work with an **Object Oriented Programming Language** you should be able to implement this structure as is, small adjustments might be required for languages like Go as nested packages can get hacky.

You can check https://github.com/ArkEcosystem/php-crypto for an example of how this structure looks like when implemented and how it is reflected in the structure of tests.

```
[src | lib | crypto]
├── Configuration
│   ├── Fee
│   └── Network
├── Enums
│   ├── Fees
│   └── Types
├── Identities
│   ├── Address
│   ├── PrivateKey
│   ├── PublicKey
│   └── WIF
├── Networks
│   ├── Devnet
│   ├── Mainnet
│   └── Testnet
├── Transactions
│   ├── Builder
│   │   ├── DelegateRegistration
│   │   ├── DelegateResignation
│   │   ├── IPFS
│   │   ├── MultiPayment
│   │   ├── MultiSignatureRegistration
│   │   ├── SecondSignatureRegistration
│   │   ├── TimelockTransfer
│   │   ├── Transfer
│   │   └── Vote
│   ├── Deserializer
│   ├── Deserializers
│   │   ├── DelegateRegistration
│   │   ├── DelegateResignation
│   │   ├── IPFS
│   │   ├── MultiPayment
│   │   ├── MultiSignatureRegistration
│   │   ├── SecondSignatureRegistration
│   │   ├── TimelockTransfer
│   │   ├── Transfer
│   │   └── Vote
│   ├── Serializer
│   ├── Serializers
│   │   ├── DelegateRegistration
│   │   ├── DelegateResignation
│   │   ├── IPFS
│   │   ├── MultiPayment
│   │   ├── MultiSignatureRegistration
│   │   ├── SecondSignatureRegistration
│   │   ├── TimelockTransfer
│   │   ├── Transfer
│   │   └── Vote
│   └── Transaction
└── Utils
    ├── Message
    └── Slot
```

## Implementation

Depending on if you are working with an `Object Oriented Programming Language` or `Functional Programming Language`  the tools at your disposal for how to implement the require functionality will differ.

If you for example work with an OOP language you will be able to isolate functionality into `Objects` whereas you won't be able to do that with a Functional language but instead need to think of everything as `Functions`.

There are already a few implementations of cryptography packages available, so take a look at them and decide which approach is the right one for your language.

### Object Oriented Programming
- [https://github.com/ArkEcosystem/dotnet-crypto](https://github.com/ArkEcosystem/dotnet-crypto)
- [https://github.com/ArkEcosystem/php-crypto](https://github.com/ArkEcosystem/php-crypto)
- [https://github.com/ArkEcosystem/python-crypto](https://github.com/ArkEcosystem/python-crypto)
- [https://github.com/ArkEcosystem/ruby-crypto](https://github.com/ArkEcosystem/ruby-crypto)

### Functional Programming
- [https://github.com/ArkEcosystem/elixir-crypto](https://github.com/ArkEcosystem/elixir-crypto)
- [https://github.com/ArkEcosystem/go-crypto](https://github.com/ArkEcosystem/go-crypto)

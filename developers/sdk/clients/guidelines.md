---
title: "Guidelines"
---

# Guidelines

[[toc]]

## Introduction

**The following is a guide for implementing a new Ark Client SDK. It covers the required functionalities as well as guidelines for how clients should typically look and behave.**

These guidelines are to be strictly followed if you are implementing or modifying an API client for the Ark Ecosystem.

Following these guidelines is required to provide a streamlined experience across different languages in order to make it easier for new developers to get started with developing a new package or modify an existing one without lowering the quality of the already existing implementation.

**Carefully read those guidelines and abide to them while developing an API client.**

## Required Functionality

### Connection
- Accept configuration for the base URI and API version.
- **Optional:** Allow to pass in a custom http client.

### Connection Manager
##### This can be omitted in languages which have no concept of objects and thus making it impossible to store connection objects.
- **Connect** Connect to the given connection.
- **Disconnect** Disconnect from the given connection.
- **Connection** Get a connection instance.
- **GetDefaultConnection** Get the default connection name.
- **SetDefaultConnection** Set the default connection name.
- **GetConnections** Return all of the created connections.

### Public API 1.0 Support
- Accounts
- Blocks
- Delegates
- Loader
- Peers
- Signatures
- Transactions

### Public API 2.0 Support
- Blocks
- Delegates
- Node
- Peers
- Transactions
- Votes
- Wallets

## Things to keep in mind

- Do not assume what the developer is going to do with the output. **If your programming language of choice allows you to return the raw response without any mapping, do so. If you work with a programming language like `Go` that is strict and requires you to provide a struct you should fully reflect the original API response in your struct.**
- Do not incorporate any cryptography functionality. **An example of this would be to have a  `createTransaction` method that sends a signed transaction to the API and the method itself would create the signed transaction instead of expecting it as an argument.**
- Do not integrate the P2P API as it is out of scope. **In `ark-node` it is require to send your transactions to the P2P API because there is no Public API endpoint for doing this. With the introduction of `ark-core` and the revamped Public API there is no longer the need to use the P2P API.**

## Terminology & Phrasing

- If you need to use the `Ark` name, keep these 2 use-cases in mind. The first one is `ARK` which is used in financial contexts like `10 ARK`. The second is `Ark` which used for everything else that is not talking about `ARK`, the financial unit.

- If you need to namespace something with a numerical value in it, write out the numerical value. _An example would be `App\Versions\One` instead of `App\V1`._

- If you work with a language that provides standard interfaces for HTTP messaging, implement them to provide standardized and compliant interface which allows other developers to easily replace parts. _An example of this would be [PSR-7](https://www.php-fig.org/psr/psr-7/) for PHP which allows developers to create HTTP clients that follow a standardized interface which allows switching implementations while knowing it will work._

## Implementation

Depending on if you are working with an `Object Oriented Programming Language` or `Functional Programming Language`  the tools at your disposal for how to implement the require functionality will differ.

If you for example work with an OOP language you will be able to isolate functionality into `Objects` whereas you won't be able to do that with a Functional language but instead need to think of everything as `Functions`.

There are already a few implementations of cryptography packages available, so take a look at them and decide which approach is the right one for your language.

### Object Oriented Programming
- [https://github.com/ArkEcosystem/dotnet-client](https://github.com/ArkEcosystem/dotnet-client)
- [https://github.com/ArkEcosystem/php-client](https://github.com/ArkEcosystem/php-client)
- [https://github.com/ArkEcosystem/python-client](https://github.com/ArkEcosystem/python-client)
- [https://github.com/ArkEcosystem/ruby-client](https://github.com/ArkEcosystem/ruby-client)

### Functional Programming
- [https://github.com/ArkEcosystem/elixir-client](https://github.com/ArkEcosystem/elixir-client)
- [https://github.com/ArkEcosystem/go-client](https://github.com/ArkEcosystem/go-client)

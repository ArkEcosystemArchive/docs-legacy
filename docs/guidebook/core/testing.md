---
title: "Testing"
---

# Testing

[[toc]]

## Introduction

Core is built with testing in mind. In fact, support for testing with `jest` is included out of the box and a `jest-preset.json` file is already set up.

By default, Core's `__tests__` directory contains two directories: `integration` and `unit`. Unit tests are tests that focus on a very small, isolated portion of your code. In fact, most unit tests probably focus on a single method. Integration tests may test a larger portion of your code, including how several objects interact with each other or even a full HTTP request to a JSON endpoint.

## Benefits

### Integration Tests

Integration tests generally are rather slow compared to unit tests as they test the behaviour of larger parts of an application. While that could be seen as a negative, those tests will ensure that the application is tested from the end-users perspective.

### Unit Tests

Unit tests generally are the fastest tests in your suite. The speed at which they are executed is great but they give you no guarantee that all components work once they are stitched together, which is why need the previously mentioned `integration` tests.

## Code organization

Before all, let's see and understand how the code is organized. When you open the ark repository, you should see the following directory structure:

```
/__tests__
/docker
/packages
/plugins
/scripts
```

For developing and testing, we are mainly interested in the `packages` directory as it contains the whole core code, and `__tests__` directory as it contains the tests.

Have a look at the `packages` directory, to see how the application is divided into different packages :

```
/packages/core
/packages/core-api
/packages/core-blockchain
.......
```

We will now dig into the typical structure of a package. So let us look at `/packages/core-blockchain` as an example. It has a main folder named `src` :

**/packages/core-blockchain/src**

This folder contains the TypeScript code before it gets compiled to JavaScript via `tsc`.

Now the unit tests associated to this packages would be located in the following directory :

**/\_\_tests__/unit/core-blockchain**

Now that we have an idea of how the code is organized, we can go inside the `/__tests__/unit/core-blockchain` folder and see how the tests are structured.

## Tests structure

We'll keep `/__tests__/unit/core-blockchain` as an example. Open the folder and you'll see something like this:

```
/machines
    blockchain.test.ts
/mocks
blockchain.test.ts
state-machine.test.ts
state-storage.test.ts
```

### Matching the `/src` folder

Important thing to note: except for special directories like `mocks`, the directory structure **matches** the `/src` structure. We want to keep it this way as much as possible to make it easy to identify what is being tested. If you have worked with Go this [practice](https://golang.org/pkg/testing/) should be familiar.

### Mocks

Most unit tests need *mocks*, hence the `/mock` folder where general mocking is set up (this folder contains mostly basic mocks corresponding to packages dependencies, for example `core-blockchain` is depending on `core-container` which will be mocked here).

Then in the actual test files we will be able to use the pre-defined mocks by importing the `mock` folder, but also modify or add new mocks as we need.

### Utils

The main utils folder (`/__tests__/utils`) is a shared library for testing. It helps keep the tests clean and remove redundancy.

Have a look at it and don't hesitate to improve. Here are some examples of what you can find :

- Network configuration files
- Network fixtures (blocks, delegates public keys and secrets)
- Generators: generate objects such as transactions

## Jest Matchers

Core provides a variety of matchers for [Jest](https://jestjs.io/) that can be used in combination with `expect()`.

If you plan to use them simply run `yarn add @arkecosystem/core-jest-matchers --dev` and include them with `import "@arkecosystem/core-jest-matchers";` on top of your tests.

### Transactions

#### toBeTransferType()

Assert that the given value is a transfer transaction.

```ts
expect({ type: 0 }).toBeTransferType();
```

#### toBeSecondSignatureType()

Assert that the given value is a second signature registration transaction.

```ts
expect({ type: 1 }).toBeSecondSignatureType();
```

#### toBeDelegateType()

Assert that the given value is a delegate registration transaction.

```ts
expect({ type: 2 }).toBeDelegateType();
```

#### toBeVoteType()

Assert that the given value is a vote transaction.

```ts
expect({ type: 3 }).toBeVoteType();
```

#### toBeMultiSignatureType()

Assert that the given value is a multi signature registration transaction.

```ts
expect({ type: 4 }).toBeMultiSignatureType();
```

#### toBeIpfsType()

Assert that the given value is an IPFS transaction.

```ts
expect({ type: 5 }).toBeIpfsType();
```

#### toBeTimelockTransferType()

Assert that the given value is a timelock transfer transaction.

```ts
expect({ type: 6 }).toBeTimelockTransferType();
```

#### toBeMultiPaymentType()

Assert that the given value is a multi payment transaction.

```ts
expect({ type: 7 }).toBeMultiPaymentType();
```

#### toBeDelegateResignationType()

Assert that the given value is a delegate resignation transaction.

```ts
expect({ type: 8 }).toBeDelegateResignationType();
```

#### toBeTransaction()

Assert that the given value is a transaction.

```ts
expect({
    version: 1,
    network: 23,
    type: 0,
    timestamp: 35672738,
    senderPublicKey: "03d7dfe44e771039334f4712fb95ad355254f674c8f5d286503199157b7bf7c357",
    fee: 10000000,
    vendorFieldHex: "5449443a2030",
    amount: 200000000,
    expiration: 0,
    recipientId: "AFzQCx5YpGg5vKMBg4xbuYbqkhvMkKfKe5",
    signature:
        "304502210096ec6e27176fa694638d6fff35d7a551b2ed8c479a7e03264026eea41a05edd702206c071c97d1c6cc3bfec64dfff808cb0d5dfe857803428efb80bf7717b85cb619",
    vendorField: "TID: 0",
    id: "a5e9e6039675563959a783fa672c0ffe65369168a1ecffa3c89bf82961d8dbad",
}).toBeTransaction();
```

#### toBeValidTransaction()

Assert that the given value is a valid transaction.

```ts
expect({
    version: 1,
    network: 23,
    type: 0,
    timestamp: 35672738,
    senderPublicKey: "03d7dfe44e771039334f4712fb95ad355254f674c8f5d286503199157b7bf7c357",
    fee: 10000000,
    vendorFieldHex: "5449443a2030",
    amount: 200000000,
    expiration: 0,
    recipientId: "AFzQCx5YpGg5vKMBg4xbuYbqkhvMkKfKe5",
    signature:
        "304502210096ec6e27176fa694638d6fff35d7a551b2ed8c479a7e03264026eea41a05edd702206c071c97d1c6cc3bfec64dfff808cb0d5dfe857803428efb80bf7717b85cb619",
    vendorField: "TID: 0",
    id: "a5e9e6039675563959a783fa672c0ffe65369168a1ecffa3c89bf82961d8dbad",
}).toBeValidTransaction();
```

### Wallets

#### toBeAddress()

Assert that the given value is an address.

```ts
expect("DARiJqhogp2Lu6bxufUFQQMuMyZbxjCydN").toBeAddress();
```

#### toBePublicKey()

Assert that the given value is a public key.

```ts
expect("022cca9529ec97a772156c152a00aad155ee6708243e65c9d211a589cb5d43234d").toBePublicKey();
```

#### toBeWallet()

Assert that the given value is a wallet.

```ts
expect({
    address: "DQ7VAW7u171hwDW75R1BqfHbA9yiKRCBSh",
    publicKey: "0310ad026647eed112d1a46145eed58b8c19c67c505a67f1199361a511ce7860c0",
}).toBeWallet();
```

#### toBeDelegate()

Assert that the given value is a delegate wallet.

```ts
expect({
    username: "arkxdev",
    address: "DQ7VAW7u171hwDW75R1BqfHbA9yiKRCBSh",
    publicKey: "0310ad026647eed112d1a46145eed58b8c19c67c505a67f1199361a511ce7860c0",
}).toBeDelegate();
```

### Blocks

#### toBeValidArrayOfBlocks()

Assert that the given value is an array containing blocks.

```ts
expect([{
    blockSignature: "",
    createdAt: "",
    generatorPublicKey: "",
    height: "",
    id: "",
    numberOfTransactions: "",
    payloadHash: "",
    payloadLength: "",
    previousBlock: "",
    reward: "",
    timestamp: "",
    totalAmount: "",
    totalFee: "",
    transactions: "",
    updatedAt: "",
    version: "",
}]).toBeValidArrayOfBlocks();
```

#### toBeValidBlock()

Assert that the given value is a transfer transaction.

```ts
expect({
    blockSignature: "",
    createdAt: "",
    generatorPublicKey: "",
    height: "",
    id: "",
    numberOfTransactions: "",
    payloadHash: "",
    payloadLength: "",
    previousBlock: "",
    reward: "",
    timestamp: "",
    totalAmount: "",
    totalFee: "",
    transactions: "",
    updatedAt: "",
    version: "",
}).toBeValidBlock();
```

### Peers

#### toBeValidArrayOfPeers()

Assert that the given value is an array containing peers.

```ts
expect([{ ip: "", port: "" }]).toBeValidArrayOfPeers();
```

#### toBeValidPeer()

Assert that the given value is a valid peer.

```ts
expect({ ip: "", port: "" }).toBeValidPeer();
```

### Core API

#### toBeApiTransaction()

Assert that the given value is a transaction from an API response.

```ts
expect({
    id: "",
    blockid: "",
    type: "",
    timestamp: "",
    amount: "",
    fee: "",
    senderId: "",
    senderPublicKey: "",
    signature: "",
    asset: "",
    confirmations: "",
}).toBeApiTransaction();
```

#### toBePaginated()

Assert that the given value is a paginated API response.

```ts
expect({
    status: 200,
    headers: {},
    data: {
        meta: {
            pageCount: "",
            totalCount: "",
            next: "",
            previous: "",
            self: "",
            first: "",
            last: "",
        },
    },
}).toBePaginated();
```

#### toBeSuccessfulResponse()

Assert that the given value is a successful API response.

```ts
expect({
    status: 200,
    headers: {},
    data: {
        meta: {
            pageCount: "",
            totalCount: "",
            next: "",
            previous: "",
            self: "",
            first: "",
            last: "",
        },
    },
}).toBeSuccessfulResponse();
```

## Guidelines for writing tests

### Use `utils` folder for common stuff

For testing, we are doing a lot of common things across the packages. Let us try to use the `__tests__/utils` folder as a shared library to avoid duplication.

Here are some things that are available in `utils`:

- Container set up
- Testnet configuration files
- Testnet fixtures (blocks, delegates public keys and secrets)
- Generators: generate objects such as transactions

There is still a lot to improve in `utils`, some things might also be outdated. *Don't hesitate to make changes to improve it*.

### Do more than "basic" tests

When we write some new tests, generally we start by checking that the feature is working as expected in the general case, which is perfectly fine. However, please do not stop there, it is the edge cases we are worried about.

Go deeper and test it with different parameters. Ask yourself: in which case this could very well fail, such as a particular set of parameters? If I were to refactor the feature, what would I like to be tested then?

### Contact us

If you have anything to ask, suggest or want to have any talk about testing, don't hesitate to reach out to the team.

On Slack, you can contact *Air1* as he is managing the tests.

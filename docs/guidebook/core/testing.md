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
/docker
/packages
/plugins
/scripts
```

For developing and testing, we are mainly interested in the `packages` and `__tests__` directories, as it contains the whole core code. It is divided into a set of packages:

```
/packages/client
/packages/core
/packages/core-api
/packages/core-blockchain
.......
/packages/core-test-utils
.......
```

We will now dig into the typical structure of a package, but please note the `core-test-utils` package which will be useful to us for testing.

So let us look at `/packages/core-blockchain` as an example. There are 2 directories that are of interest:

**/packages/core-blockchain/src**

This folder contains the TypeScript code before it gets compiled to JavaScript via `tsc`.

**/__tests__/unit/core-blockchain**

This folder contains the unit tests that test behaviou specific to the functionality of this package.

Now that we have an idea of how the code is organized, we can go inside the `/__tests__/unit/core-blockchain` folder and see how the tests are structured.

## Tests structure

We'll keep `/__tests__/unit/core-blockchain` as an example. Open the folder and you'll see something like this:

```
/__support__
    setup.js

/machines
    blockchain.test.js

blockchain.test.js
state-machine.test.js
state-storage.test.js
```

### Matching the `/src` folder

Important thing to note: except for `__support__`, the directory structure **matches** the `/src` structure. We want to keep it this way as much as possible to make it easy to identify what is being tested. If you have worked with Go this [practice](https://golang.org/pkg/testing/) should be familiar.

### Container setup and common initialization in `__support__/setup.js`

In most packages, to test the code you will want to launch an Ark Node or at least parts of it. This is why you will often access the `setup.js` file, which is used to start the components of the node needed for our tests.

Let's have a look at this file in our `core-blockchain` package :

```js
const container = require('@arkecosystem/core-container')
const containerHelper = require('@arkecosystem/core-test-utils/lib/helpers/container')

jest.setTimeout(60000)

exports.setUp = async () => {
  await containerHelper.setUp({
    exit: '@arkecosystem/core-p2p',
    exclude: ['@arkecosystem/core-blockchain']
  })

  return container
}

exports.tearDown = async () => container.tearDown()
```

A couple of things to see here:

- We declare a `setUp` and a `tearDown` method: these will be used in our tests' `beforeAll` and `afterAll` methods.
- We use `@arkecosystem/core-test-utils` to help us set up the container.
- The `containerHelper.setUp` method accepts a configuration object which will be used to launch (or not) the different modules of the Ark Node.

Now this can be used in every test that needs it, just like this:

```js
const app = require('./__support__/setup')

let container

beforeAll(async () => {
  container = await app.setUp()
  // After the container has been set up, we can require and use any module
  const logger = container.resolvePlugin('logger')
  logger.debug('Hello')
})

afterAll(async () => {
  await app.tearDown()
})
```

## Guidelines for writing tests

### Use `core-test-utils` for common stuff

For testing, we are doing a lot of common things across the packages, like container set up as we have seen before. Let us try to use `core-test-utils` as a shared library to avoid duplication.

Here are some things that are available on `core-test-utils`:

- Container set up.
- Testnet configuration files (the container setup uses testnet config).
- Testnet fixtures (blocks, delegates public keys and secrets).
- Custom matchers: for example `expect(tx).toBeTransaction()`. Don't hesitate to use / update / create custom matchers for common things.
- Generators: generate objects such as transactions.

There is still a lot to improve in `core-test-utils`, some things might also be outdated. *Don't hesitate to make changes to improve it*.

### Do more than "basic" tests

When we write some new tests, generally we start by checking that the feature is working as expected in the general case, which is perfectly fine. However, please do not stop there, it is the edge cases we are worried about.

Go deeper and test it with different parameters. Ask yourself: in which case this could very well fail, such as a particular set of parameters? If I were to refactor the feature, what would I like to be tested then?

### Contact us

If you have anything to ask, suggest or want to have any talk about testing, don't hesitate to reach out to the team.

On Slack, you can contact *Air1* as he is managing the tests.

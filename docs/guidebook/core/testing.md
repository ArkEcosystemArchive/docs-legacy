---
title: "Testing"
---

# Testing

[[toc]]

## Code organization

Before all, let's see and understand how the code is organized. When you open the ark repository, you will have a directory structure like this:

```
/docker
/node_modules
/packages
/plugins
```

For developing and testing, we are mainly interested in the `packages` directory, as it contains the whole core code. It is divided into a set of packages:

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

So let's look at `/packages/core-blockchain` as an example. It has two main directories:

```
/packages/core-blockchain/__tests__
/packages/core-blockchain/lib
```

`lib` is the actual code while `__tests__` contains the tests for the code.

Now that we have a global idea of how the code is organized, we can actually go inside the `__tests__` folder and see how the tests are structured.

## Tests structure

We'll keep `packages/core-blockchain/__tests__` as an example. Open the folder and you'll see something like this:

```
/__support__
    setup.js

/machines
    blockchain.test.js

blockchain.test.js
state-machine.test.js
```

### Matching the `/lib` folder

Important thing to note: except for `__support__`, the directory structure **matches** the `/lib` structure. We want to keep it this way as much as possible to make it easy to identify what is being tested.

### Container setup and common initialization in `__support__/setup.js`

In most packages, to test the code you will want to actually launch an Ark node, or at least parts of it. This is why you will often access the `setup.js` file, which is used to launch the parts of the node needed for our tests.

Let's have a look at this file in our `core-blockchain` package :

```js
const  container  =  require('@arkecosystem/core-container')
const  containerHelper  =  require('@arkecosystem/core-test-utils/lib/helpers/container')

jest.setTimeout(60000)

exports.setUp  =  async () => {
  await  containerHelper.setUp({
    exit: '@arkecosystem/core-p2p',
    exclude: ['@arkecosystem/core-blockchain']
  })

  return  container
}

exports.tearDown  =  async () =>  container.tearDown()
```

A couple of things to see here:

- We declare a `setUp` and a `tearDown` method: these will be used in our tests' `beforeAll` and `afterAll` methods
- We use `@arkecosystem/core-test-utils` to help us setting up the container
- The `containerHelper.setUp` method accepts a configuration object which will be used to launch (or not) the different modules of the Ark node

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

For testing, we are doing a lot of common things across the packages, like container set up as we've seen before. Let's try to use `core-test-utils` as a common library to avoid duplication.

Here are some things that are available on `core-test-utils`:

- Container set up
- Testnet configuration files (the container setup uses testnet config)
- Testnet fixtures (blocks, delegates public keys and secrets, ...)
- Custom matchers: to use like for example `expect(tx).toBeTransaction()`. Don't hesitate to use / update / create custom matchers for common things.
- Generators: generate things, for example transactions

There are still a lot to improve in `core-test-utils`, some things might also be outdated: **don't hesitate to make changes to improve it**.

### Do more than "basic" tests

When we write some new tests, generally we start by checking that the feature is working as expected in the general case. This is perfectly fine. But don't stop there, you can do better 💪

Go deeper and test it with different parameters. Ask yourself: in which case this could very well fail, which parameters could make it tricky? If I were to refactor the feature, what would I like to be tested then?

### Talk to us!

If you have anything to ask, suggest or want to have any talk about testing, don't hesitate to reach out to the team.

On Slack you can go and talk to *Air1* as he's managing the tests.

---
title: "Testing"
---

# Testing

[[toc]]

## Code organization

Before all, let's see and understand how the code is organized. When you open the ark repository, you should see the following directory structure:

```console
/docker
/packages
/plugins
/scripts
```

For developing and testing, we are mainly interested in the `packages` directory, as it contains the whole core code. It is divided into a set of packages:

```console
/packages/client
/packages/core
/packages/core-api
/packages/core-blockchain
.......
/packages/core-test-utils
.......
```

We will now dig into the typical structure of a package, but please note the `core-test-utils` package which will be useful to us for testing.

So let us look at `/packages/core-blockchain` as an example. It has two main directories:

```console
/packages/core-blockchain/__tests__
/packages/core-blockchain/lib
```

`lib` is the actual code while `__tests__` contains the tests for the code.

Now that we have a global idea of how the code is organized, we can go inside the `__tests__` folder and see how the tests are structured.

## Tests structure

We'll keep `packages/core-blockchain/__tests__` as an example. Open the folder and you'll see something like this:

```console
/__support__
    setup.js

/machines
    blockchain.test.js

blockchain.test.js
state-machine.test.js
state-storage.test.js
```

### Matching the `/lib` folder

Important thing to note: except for `__support__`, the directory structure **matches** the `/lib` structure. We want to keep it this way as much as possible to make it easy to identify what is being tested. If you have worked with Go this [practice](https://golang.org/pkg/testing/) should be familiar.

### Container setup and common initialization in `__support__/setup.js`

In most packages, to test the code you will want to launch an Ark Node or at least parts of it. This is why you will often access the `setup.js` file, which is used to start the components of the node needed for our tests.

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

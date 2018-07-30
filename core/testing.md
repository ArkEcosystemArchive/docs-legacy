---
title: "Testing"
---

# Testing

[[toc]]

## Containers

Some use the special `core-container` package to different purposes, such as loading the configuration:

```js
const container = require('@arkecosystem/core-container')
const logger = container.resolvePlugin('logger')
const config = container.resolvePlugin('config')

module.exports = class AwesomeManager {
  constructor () {
    if (config.awesome) {
      logger.info('You are awesome!')
    } else {
      logger.info('You are awesome too!')
    }
  }
}
```

In those cases, creating a `setup.js` file with all the necessary environment to run the tests is a good practice:

```js
const container = require('@arkecosystem/core-container')

jest.setTimeout(60000)

exports.setUp = async () => {
  await container.setUp({
    // configuration
  })
}

exports.tearDown = async () => {
  await container.tearDown()
}
```

Then, you could set-up the environment of each test suite:

```js
const app = require('./__support__/setup')

let Manager

beforeAll(async () => {
  await app.setUp()
  // Manager should be required AFTER having setting up the container
  Manager = require('../lib/manager')
})

afterAll(async () => {
  await app.tearDown()
})
```

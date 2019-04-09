# How to Monitor the Blockchain

In this recipe, we will build an ARK Core plugin to monitor our blockchain and trigger an action whenever a given delegate forges a block. You are going to learn how to integrate custom functionality into your ARK Core node by writing plugins to react to network events as they occur.

## Define the problem

Generally speaking, there are two primary contexts in which you might want to monitor your blockchain:

1. From a full node.
2. From an external application.

Monitoring to the blockchain on a node is useful in combination with a local wallet to trigger actions as soon as possible after an event occurs.  External applications might want to listen to the blockchain to synchronize their database with the network's current state.

Within ARK Core (that is, on a particular node), monitoring can be done in a custom plugin. In this approach, the recommended strategy involves subscribing to events created by the `core-event-emitter` module.

By contrast, monitoring your blockchain from an external application is best done by subscribing to a webhook. Under this model, ARK Core nodes `POST` a payload to your application with relevant information whenever a subscribed event is triggered.

This recipe will cover the first approach — monitoring with a custom plugin installed in ARK Core. Implementing webhooks can differ substantially depending on the languages and frameworks you use. A detailed webhook recipe is in the works with examples across SDKs. For now, if you're looking to get started with webhooks in your application, the [Webhooks](/guidebook/core/webhooks.html) chapter of the Guidebook is an excellent place to start.

This example assumes you have a working testnet running, and we'll need to create a custom plugin. Make sure you have a correctly set up development environment.

## Design an Approach

Before considering what code we want to write, it can help to formulate the problem in the most straightforward way possible: how can we take action as soon as possible after a specific delegate forges a new block?

The simplest solution to this problem is: when a delegate forges, we should do something. In pseudocode, that would be something similar to:

```js
if (ourDelegate.Forges()) {
    doSomething()
}
```

For our "something" in this example, we'll be outputting text to the console. So our pseudocode would look something closer to:

```js
if (ourDelegate.Forges()) {
    console.log('Our delegate forged')
}
```

Now, how can we replace `ourDelegate.Forges()` with something more specific?

We know that we want to know as soon as our delegates forges. One potential approach is to check every block that is added to the blockchain and to do something if our delegate forged the newest block.

```js
if (delegateWhoForgedBlock == delegateWeAreMonitoring) {
    console.log('Our delegate forged!')
}
```

### Pick a Delegate to Monitor

To avoid getting sidetracked by creating a delegate, we will select one of testnet's existing delegates. As part of the Public API, we can access an endpoint showing the addresses and usernames of all forging delegates — precisely what we need. The default URL for this endpoint in a testnet node is at `0.0.0.0:4003/api/delegates`, as the Public API is bound to port 4003 by default. If you visit that link with testnet running, you should see a list of delegates.

::: tip

The piped command only pretty prints the JSON response. You can also call `curl 0.0.0.0:4003/api/delegates`, however, the response will be compacted.

:::

```bash
curl 0.0.0.0:4003/api/delegates | node <<< "var o = $(cat); console.log(JSON.stringify(o, null, 4));"
```

```js
{
    "username": "genesis_20",
    "address": "ALHDQyTm7wALtwjmKwEejZjq7f6u6w5xCv",
    "publicKey": "02c1151ab35e371a333e73f72e9971cfc16782e421186cfff9325d3c3b9cf91751",
    "vote": "245098300000000",
    "producedblocks": 196,
    "missedblocks": 13,
    "rate": 2,
    "approval": 1.96,
    "productivity": 93.78
}
```

We can use this information to match against our forged blocks.

## The Events API

At this point, researching the Events API can help us see which events might broadcast the information we are looking and, by extension, which events are most worth listening to.

Looking at the list of [available events](/guidebook/core/events.html#available-events), the most suitable candidate for obtaining blocks is `block.applied`.

::: tip

While `block.forged` might initially seem a better candidate, the `block.forged` event is only fired at the moment a delegate forges before the block has been broadcasted to the network. Waiting for `block.applied` ensures that the block in question has been accepted and applied to the chain by a majority of the node network, lessening the risk of our code acting upon an invalid block.

:::

If we can assume that the `block.applied` event gives us a copy of the block that was just applied. We can specify our pseudocode further:

```js
if (block.forger === delegateWeAreMonitoring) {
    console.log('Our delegate forged!')
}
```

Looking at the data model for a [block](/guidebook/core/data-models.html#block), we can see that each block holds a copy of `generatorPublicKey` — in other words, the public key of the delegate who generated this block. That means, with the delegate information we got from the API and the block information we are receiving from our `block.applied` event, we should have everything we need to turn our pseudocode into working code.

```js
// the public key from /api/delegates JSON response
const delegateKey = '02c1151ab35e371a333e73f72e9971cfc16782e421186cfff9325d3c3b9cf91751'
// the public key of the block generator
const generatorKey = block.generatorPublicKey

if (delegateKey === generatorKey) {
    console.log('Our delegate forged!')
}
```

## Creating the Plugin

Now that we have a workable solution, we are going to run it in our testnet.

The first thing we will do is scaffold out a custom plugin called `core-delegate-monitor`. From our top-level Core directory:

```bash
cd plugins/
git submodule add -f https://github.com/ARKEcosystem/core-plugin-skeleton
```

Once the submodule is added, rename the `core-plugin-skeleton` directory to `core-delegate-monitor`. Make sure to rename your plugin to `@arkecosystem/core-delegate-monitor` in your plugin's new `package.json`, and to add the necessary configuration to your `plugins.js` file. It is also convenient to alter the remote URL of the repository; so you can manage your plugin as a separate repository.

Next, let us get our solution into code. We will create a file in our plugin's `lib` folder called `delegate-monitor.js` and drop our solution inside.

```js
// lib/delegate-monitor.js

const delegateKey = '02c1151ab35e371a333e73f72e9971cfc16782e421186cfff9325d3c3b9cf91751'
const generatorKey = block.generatorPublicKey

if (delegateKey === generatorKey) {
    console.log('Our delegate forged!')
}
```

Now we need to figure out where to get our block object from to create our generatorKey. To do so, we require the `core-event-emitter` package. Because `core-event-emitter`'s API is virtually identical to that of Node's [Event class](https://nodejs.org/api/events.html), we can use NodeJS documentation to help us find the specific methods we need.

In our case, we need to utilize the `addListener` method, also available by calling the `on` alias. To do so, wrap our `if` statement into a callback function that we can pass to our event emitter:

```js
function listenToDelegate (block) {
    const delegateKey = '02c1151ab35e371a333e73f72e9971cfc16782e421186cfff9325d3c3b9cf91751'
    const generatorKey = block.generatorPublicKey

    if (delegateKey === generatorKey) {
        console.log('Our delegate forged!')
    }
}
```

Now we use `event-emitter` as a listener object. We will do so by loading our container, then resolving our plugin out of it:

```js
const container = require('@arkecosystem/core-container')
const emitter = container.resolvePlugin('event-emitter')
```

Now, because we want to attach our listener when our node boots up and detach our listener when our node shuts down, we want to export functions that we can use in our plugin's `register` and `deregister` hooks. Let's add two functions to our `module.exports`:

```js
const container = require('@arkecosystem/core-container')
const emitter = container.resolvePlugin('event-emitter')

module.exports = {
    startMonitoring () {
        emitter.on('block.applied', monitorDelegate)
    },
    stopMonitoring () {
        emitter.off('block.applied', monitorDelegate)
    }
}

function monitorDelegate (block) {
    const delegateKey = '02c1151ab35e371a333e73f72e9971cfc16782e421186cfff9325d3c3b9cf91751'
    const generatorKey = block.generatorPublicKey

    if (delegateKey === generatorKey) {
        console.log('Our delegate forged!')
    }
}
```

## Tying It Together

With our functions in place, the only steps remaining involve making some changes to our plugin's `index.js` file:

```js
'use strict'
const { startMonitoring, stopMonitoring } = require('./delegate-monitor')

/**
* The struct used by the plugin container.
* @type {Object}
*/
exports.plugin = {
    pkg: require('../package.json'),
    defaults: require('./defaults'),
    alias: 'core-delegate-monitor',
    async register (container, options) {
      startMonitoring()
    },
    async deregister (container, options) {
      stopMonitoring()
    }
}
```

The next time your node reboots, your monitor should be working.

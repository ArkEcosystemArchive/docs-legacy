# How to Listen to Your Blockchain

In this recipe, we'll build an Ark Core plugin to listen to our blockchain and trigger an action whenever a given delegate forges a block. You'll learn how to integrate custom functionality into your Ark Core node by writing plugins to react to network events as they occur. 

# Decide Your Approach

Generally speaking, there are two primary contexts in which you might want to listen to your blockchain: either from a node or from an external application. Listening to the blockchain on a node is useful in combination with a local wallet in order to trigger actions as soon as possible after an event occurs.  External applications might want to listen to the blockchain in order to synchronize their database with the network's current state.

Listening to your blockchain within Ark Core (that is, on a particular node) can be done in a custom plugin. In this approach, the recommended strategy involves subscribing to events created by the `core-event-emitter` module.  

By contrast, listening to your blockchain from an external application is best done by subscribing to a webhook. Under this model, Ark Core nodes ping your application with relevant information whenever a subscribed event is triggered.

This recipe will cover the first approach — listening with a custom plugin installed in Ark Core. Implementing webhooks can differ substantively depending on the languages and frameworks you use. A detailed webhook recipe is in the works with examples across SDKS. For now, if you're looking to get started with webhooks in your application, the [Webhooks](https://docs.ark.io/guidebook/core/webhooks.html) chapter of the Guidebook is an excellent place to start.

This example assumes you have a working testnet running, and we'll need to create a custom plugin. If you haven't already, following the [dev environment](https://docs.ark.io/cookbook/developer/setup-dev-environment.html) and [plugin](https://docs.ark.io/cookbook/developer/write-a-plugin.html) recipes should prove helpful in getting you started with a working testnet environment.

## Setup the Problem

Before considering what code we want to write, it can help to consider our problem in the most straightforward way possible: how can we take action as soon as possible after a specific delegate forges a new block?

The simplest solution to this problem is: when a delegate forges, we should do something. In pseudocode, that would be something similar to:
```js
if (our delegate forges) {
    doSomething()
}
```
For our "something" in this example, we'll be outputting text to the console. So our pseudocode would look something closer to:
```js
if (our delegate forges) {
    console.log('Our delegate forged')
}
```
Now, how can we replace `(our delegates forges)` with something more specific?

We know that we want to know as soon as our delegates forges. One potential approach is to listen to every block that's added to the blockchain, and to do something if the block we listened to was forged by our delegate in question.

So, perhaps a solution like this:
```js
if (delegateWhoForgedBlock == delegateWeAreListeningTo) {
    console.log('Our delegate forged!')
}
```
## Find Our Delegate To Listen To

To avoid getting sidetracked by creating a delegate, we'll select one of testnet's existing delegates to listen to. As part of the Public API, we can access an endpoint showing the addresses and usernames of all forging delegates — exactly what we need. The default URL for this endpoint in a testnet node is at 0.0.0.0:4003/api/delegates, as the Public API listens on port 4003 by default. If you visit that link with testnet running, you should see a list of delegates. Here's a sample result:
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
We'll need some of this information to match against our forged blocks; let's start listening to our blockchain to determine which delegate information can help us most directly.

## Listen To Our Blockchain

At this point, researching the Events API can help us see which events might broadcast the information we're looking and, by extension, which events are most worth listening to.

Looking at the list of [available events](https://docs.ark.io/guidebook/core/events.html#available-events), the most suitable candidate for listening to blocks is `block.applied`. 

::: tip

While `block.forged` might initially seem a better candidate, the `block.forged` event is only fired at the moment a delegate forges, before the block has been broadcasted to the network. Waiting for `block.applied` ensures that the block in question has been accepted and applied to the chain by a majority of the node network, lessening the risk of acting upon an invalid block.

:::

If we can assume that the `block.applied` event gives us a copy of the block that was just applied, we can specify our pseudocode further:
```js
if (block.forger === delegateWeAreListeningTo) {
    console.log('Our delegate forged!')
}
```
Looking at the [data model for Blocks](https://docs.ark.io/guidebook/core/data-models.html#block), we can see that each block holds a copy of `generatorPublicKey` — in other words, the public key of the delegate who generated this block. That means, with the delegate information we got from the API and the block information we're receiving from our `block.applied` event, we should have everything we need to turn our pseudocode into working code.
```js
// the public key from /api/delegates JSON response
const delegateKey = '02c1151ab35e371a333e73f72e9971cfc16782e421186cfff9325d3c3b9cf91751' 
// the public key of the block generator
const generatorKey = block.generatorPublicKey

if (delegateKey === generatorKey) {
    console.log('Our delegate forged!')
}
```
## Setup the Plugin

Now that we've got a workable solution, let's connect it to our testnet.

The first think we'll do is scaffold out a custom plugin called `core-delegate-listener`. From our top-level Core directory:
```bash
cd plugins/
git submodule add -f https://github.com/ArkEcosystem/core-plugin-skeleton
```
Once the submodule has installed, rename the `core-plugin-skeleton` directory to `core-delegate-listener`. Make sure to rename your plugin to `@arkecosystem/core-delegate-listener` in your plugin's new `package.json`, and to add the necessary configuration to your `plugins.js` file.

Next, let's get our solution into code. We'll create a file in our plugin's `lib` folder called `delegate-listener.js` and drop our solution inside.
```js
// lib/delegate-listener.js

const delegateKey = '02c1151ab35e371a333e73f72e9971cfc16782e421186cfff9325d3c3b9cf91751' 
const generatorKey = block.generatorPublicKey

if (delegateKey === generatorKey) {
    console.log('Our delegate forged!')
}
```
Now we need to figure out where to get our block object from to create our generatorKey. To do so, we'll require the `core-event-emitter` package to listen to our delegate. Because `core-event-emitter`'s API is virtually identical to that of Node's [Event class](https://nodejs.org/api/events.html), we can use NodeJS documentation to help us find the specific methods we need. 

In our case, we need to utilize the `addListener` method, also available by calling the `on` alias. To do so, we'll wrap our `if` statement into a callback function that we can pass to our event emitter:
```js
function listenToDelegate (block) {
    const delegateKey = '02c1151ab35e371a333e73f72e9971cfc16782e421186cfff9325d3c3b9cf91751' 
    const generatorKey = block.generatorPublicKey

    if (delegateKey === generatorKey) {
        console.log('Our delegate forged!')
    }
}
```
Next, we'll require our `event-emitter` into a listener object. We'll do so by loading our container, then resolving our plugin out of it:
```js
const container = require('@arkecosystem/core-container')
const listener = container.resolvePlugin('event-emitter')
```
Now, because we'll want to attach our listener when our node boots up and detach our listener when our node shuts down, we'll want to export functions that we can use in our plugin's `register` and `deregister` hooks. Let's add two functions to our `module.exports`:
```js
const container = require('@arkecosystem/core-container')
const listener = container.resolvePlugin('event-emitter')

module.exports = {
    startListening () {
        listener.on('block.applied', listenToDelegate)
    },
    stopListening () {
        listener.off('block.applied', listenToDelegate)
    }
}

function listenToDelegate (block) {
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
const { startListening, stopListening } = require('./delegate-listener')

/**
* The struct used by the plugin container.
* @type {Object}
*/
exports.plugin = {
    pkg: require('../package.json'),
    defaults: require('./defaults'),
    alias: 'core-delegate-listener',
    async register (container, options) {
    startListening()
    },
    async deregister (container, options) {
    stopListening()
    }
}
```
With any luck, the next time your node reboots, your listener should be working.
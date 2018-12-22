---
title: "Event Emittter"
---

# Event Emitter

## Installation

```bash
yarn add @arkecosystem/core-event-emitter
```

## **Alias**

`event-emitter`

## **Implementation**

[core-event-emitter](https://github.com/ArkEcosystem/core/tree/develop/packages/core-event-emitter)

## Notable Dependencies

- [eventemitter3](https://github.com/primus/eventemitter3)

## Summary

`core-event-emitter` wraps around NodeJS's native Event class to provide event functionality across an Ark Core node. While Ark Core uses eventemitter3 to utilize fully asynchronous event handling, the eventemitter3 API mirrors that of NodeJS's Event API, allowing Node developers to build Ark packages using familiar and extensible conventions.

## Behind the Scenes

Events are used inside Ark Core to trigger blockchain actions and the delivery of webhook payloads. Additionally, custom plugins can utilize the event emitter package to trigger their own actions in response to blockchain events.

Conceptually, this feature is similar to the [Hooks implementation in WordPress](https://codex.wordpress.org/Plugin_API), as well as to the lifecycle hook access provided by JavaScript frameworks such as [Vue](https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks) and [React](https://reactjs.org/docs/state-and-lifecycle.html). All of these systems expose  The primary difference is that, because of the need for strict protocols around blockchain data creation and retrieval, Ark events are strictly reactionary. In other words, Ark Core events are **not** capable of changing data at runtime. The `transaction.applied` event, for instance, passes a complete transaction instance, not raw transaction data that can be altered in the style of a WordPress Filter.

Another way to think of the Event API is in the context of a [publish-subscribe pattern](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern). In this pattern, Ark Core packages can act both as publishers and subscribers of events. 

The list of events published by Ark Core packages can be found in `core-blockchain`'s `getEvents` [method](https://github.com/ArkEcosystem/core/blob/develop/packages/core-blockchain/lib/blockchain.js#L638):

```js
getEvents() {
  return [
    'block.applied',
    'block.forged',
    'block.reverted',
    'delegate.registered',
    'delegate.resigned',
    'forger.failed',
    'forger.missing',
    'forger.started',
    'peer.added',
    'peer.removed',
    'round.created',
    'state:started',
    'transaction.applied',
    'transaction.expired',
    'transaction.forged',
    'transaction.reverted',
    'wallet.saved',
    'wallet.created.cold',
  ]
}
```
---
title: "Events"
---

# Events


In order to create efficient integrations on your server, similar to how webhooks work, an event emitter will inform you about any events that could require actions to be performed like missing a block.

## Emitting Events

Emitting events is pretty straightforward. Just resolve the `event-emitter` from `@arkecosystem/core-container` and call the `emit` method with a name and data to be emitted.

```js
const container = require('@arkecosystem/core-container')
const emitter = container.resolvePlugin('event-emitter')

emitter.emit('block.forged', {
  id: 'fake-id',
  generatorPublicKey: 'fake-generator-public-key',
  amount: 10
})
```

## Listening to Events

Listening to events is as straightforward as emitting them. Just resolve the `event-emitter` from `@arkecosystem/core-container` and call the `on` method with a name and then process the incoming data.

```js
const container = require('@arkecosystem/core-container')
const emitter = container.resolvePlugin('event-emitter')

emitter.on('block.forged', block => {
  if (block.generatorPublicKey === 'fake-generator-public-key') {
    console.log(`You just forged a block for ${block.amount} ARK`)
  }
})
```

## Available Events

**block.applied**
This event will be emitted when a block is applied to a delegate and all including transactions are applied to wallets.

**block.forged**
This event will be emitted when a new block was forged.

**block.reverted**
This event will be emitted when a block is reverted from a delegate and all including transactions are reverted from wallets.

**delegate.registered**
This event will be emitted when a wallet registers as a delegate.

**delegate.resigned**
This event will be emitted when a wallet resigns as a delegate.

**forger.failed**
This event will be emitted when the forger failed to forge a new block.

**forger.missing**
This event will be emitted when the forger is missing a block.

**forger.started**
This event will be emitted when the forger is started.

**peer.added**
This event will be emitted when a peer is added to the list of accepted peers.

**peer.removed**
This event will be emitted when a peer is removed from the list of accepted peers.

**transaction.applied**
This event will be emitted when a transactions is applied to a wallet.

**transaction.expired**
This event will be emitted when a transaction has expired and is removed from the transaction pool.

**transaction.forged**
This event will be emitted when a transaction is included in a block and thus being forged.

**transaction.reverted**
This event will be emitted when a transactions is reverted from a wallet.

**wallet.vote**
This event will be emitted when a wallet casts a vote in favor of a delegate.

**wallet.unvote**
This event will be emitted when a wallet removes the vote for their current delegate.

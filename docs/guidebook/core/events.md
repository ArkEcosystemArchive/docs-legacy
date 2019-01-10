---
title: "Events"
---
[[toc]]

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

### block.applied

#### event

```js
"block.applied"
```

#### description

Emitted when a block is applied to the Node and all including transactions are applied to wallets.

#### payload

[Block](/guidebook/core/data-models.html#block)

### block.forged

#### event

```js
"block.forged"
```

#### description

When a Delegate Node has created a new block, the newly created block is emitted.

#### payload

[Block](/guidebook/core/data-models.html#block)

### block.reverted

#### event

```js
"block.reverted"
```

#### description

Due to data corruption or other reasons, a Node might revert its state until it reaches a valid state, blocks including their transactions are reverted from wallets.

#### payload

[Block](/guidebook/core/data-models.html#block)

### delegate.registered

#### event

```js
"delegate.registered"
```

#### description

When a transaction has been processed and a wallet registers itself as a Delegate, the registered wallet is emitted.

#### payload

[Delegate](/guidebook/core/data-models.html#delegate)

### delegate.resigned

#### event

```js
"delegate.resigned"
```

#### description

This event will be emitted when a wallet resigns as a Delegate and the transaction has been processed.

#### payload

[Delegate](/guidebook/core/data-models.html#delegate)

### forger.failed

#### event

```js
"forger.failed"
```

#### description

Emitted when the `forger` module fails to forge a new block.

#### payload

The `error` message causing the failure.

### forger.missing

#### event

```js
"forger.missing"
```

#### description

This event will be emitted when the `forger` is missing a block.

#### payload

The `error` message causing the failure.

### forger.started

::: warning
This event is currently [disabled](https://github.com/ArkEcosystem/core/blob/a71f007fe13e5465f2a5ecc20203ded04b2bc783/packages/core-forger/lib/manager.js#L197-L203) to due to a bug in the implementation.
:::

#### event

```js
"forger.started"
```

#### description

When the `forger` module has started, this event is emitted.

#### payload

The `publicKey` of the forging Delegate.

### peer.added

#### event

```js
"peer.added"
```

#### description

This event will be emitted when a peer is added to the list of accepted peers.

#### payload

[Peer](/guidebook/core/data-models.html#peer)

### peer.removed

#### event

```js
"peer.removed"
```

#### description

Fired after a peer has been removed from the accepted peers.

#### payload

[Peer](/guidebook/core/data-models.html#peer)


### transaction.applied

#### event

```js
"transaction.applied"
```

#### description

This event will be emitted when a transaction is applied to a wallet.

#### payload

[Transaction](/guidebook/core/data-models.html#transaction)

### transaction.expired

#### event

```js
"transaction.expired"
```

#### description

After a transaction has expired and is removed from the transaction pool, the `transactionGuard` emits this event.

#### payload

[Transaction](/guidebook/core/data-models.html#transaction)

### transaction.forged

#### event

```js
"transaction.forged"
```

#### description

This event will be emitted when a transaction is included in a block and thus has been forged.

#### payload

[Transaction](/guidebook/core/data-models.html#transaction)

### transaction.reverted

#### event

```js
"transaction.reverted"
```

#### description

This event will be emitted when a transaction is reverted from a wallet. Fired in conjunction with `block.reverted`.

#### payload

[Transaction](/guidebook/core/data-models.html#transaction)

### wallet.vote

#### event

```js
"wallet.vote"
```

#### description

This event will be emitted when a wallet casts a vote in on a delegate.

#### payload

[Wallet](/guidebook/core/data-models.html#wallet)


### wallet.unvote

#### event

```js
"wallet.unvote"
```

#### description

This event will be emitted when a wallet removes the vote for their current delegate.

#### payload

[Wallet](/guidebook/core/data-models.html#wallet)

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

```json
{}
```

### block.forged

#### event

```js
"block.forged"
```

#### description

When a Delegate Node has created a new block, the newly created block is emitted.

#### payload

```json
{}
```

### block.reverted

#### event

```js
"block.reverted"
```

#### description

Due to data corruption or other reasons, a Node might revert its state until it reaches a valid state, blocks including their transactions are reverted from wallets.

#### payload

```json
{}
```

### delegate.registered

#### event

```js
"delegate.registered"
```

#### description

When a transaction has been processed and a wallet registers itself as a Delegate, the registered wallet is emitted.

#### payload

```json
{}
```

### delegate.resigned

#### event

```js
"delegate.resigned"
```

#### description

This event will be emitted when a wallet resigns as a Delegate and the transaction has been processed.

#### payload

```json
{}
```

### forger.failed

#### event

```js
"forger.failed"
```

#### description

Emitted when the `forger` module fails to forge a new block.

#### payload

```json
{}
```

### forger.missing

#### event

```js
"forger.missing"
```

#### description

This event will be emitted when the forger is missing a block.

#### payload

```json
{}
```

### forger.started

#### event

```js
"forger.started"
```

#### description

When the `forger` module has started, this event is emitted.

#### payload

```json
{}
```

### peer.added

#### event

```js
"peer.added"
```

#### description

This event will be emitted when a peer is added to the list of accepted peers.

#### payload

```json
{}
```

### peer.removed

#### event

```js
"peer.removed"
```

#### description

Fired after a peer has been removed from the accepted peers.

#### payload

```json
{}
```

### transaction.applied

#### event

```js
"transaction.applied"
```

#### description

This event will be emitted when a transaction is applied to a wallet.

#### payload

```json
{}
```

### transaction.expired

#### event

```js
"transaction.expired"
```

#### description

After a transaction has expired and is removed from the transaction pool, the `transactionGuard` emits this event.

#### payload

```json
{}
```

### transaction.forged

#### event

```js
"transaction.forged"
```

#### description

This event will be emitted when a transaction is included in a block and thus has been forged.

#### payload

```json
{}
```

### transaction.reverted

#### event

```js
"transaction.reverted"
```

#### description

This event will be emitted when a transaction is reverted from a wallet. Fired in conjunction with `block.reverted`.

#### payload

```json
{}
```

### wallet.vote

#### event

```js
"wallet.vote"
```

#### description

This event will be emitted when a wallet casts a vote in on a delegate.

#### payload

```json
{}
```

### wallet.unvote

#### event

```js
"wallet.unvote"
```

#### description

This event will be emitted when a wallet removes the vote for their current delegate.

#### payload

```json
{}
```
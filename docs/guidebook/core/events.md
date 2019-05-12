---
title: "Events"
---

# Events

Effective integrations in your backend can be achieved using events, similar to how webhooks work. An event emitter will inform you about any events that could require actions to be performed like missing a block, saving you from repeatedly querying the API.

[[toc]]

## Emitting Events

Emitting events is pretty straightforward. Just resolve the `event-emitter` from `@arkecosystem/core-container` and call the `emit` method with a name and data to be emitted.

```js
const container = require("@arkecosystem/core-container");
const emitter = container.resolvePlugin("event-emitter");

emitter.emit("block.forged", {
  id: "fake-id",
  generatorPublicKey: "fake-generator-public-key",
  amount: 10
});
```

## Listening to Events

Listening to events is as straightforward as emitting them. Just resolve the `event-emitter` from `@arkecosystem/core-container` and call the `on` method with a name and then process the incoming data.

```js
const container = require("@arkecosystem/core-container");
const emitter = container.resolvePlugin("event-emitter");

emitter.on("block.forged", block => {
  if (block.generatorPublicKey === "fake-generator-public-key") {
    console.log(`You just forged a block for ${block.amount} ARK`);
  }
});
```

## Available Events

### block.applied

#### Event

```js
"block.applied";
```

#### Description

Emitted when a block is applied to the Node and all including transactions are applied to wallets.

#### Payload

[Block](/guidebook/core/data-models.html#block)

### block.forged

#### Event

```js
"block.forged";
```

#### Description

When a Delegate Node has created a new block, the newly created block is emitted.

#### Payload

[Block](/guidebook/core/data-models.html#block)

### block.reverted

#### Event

```js
"block.reverted";
```

#### Description

Due to data corruption or other reasons, a Node might revert its state until it reaches a valid state. Blocks -including their transactions- are reverted from wallets.

#### Payload

[Block](/guidebook/core/data-models.html#block)

### block.disregarded

#### Event

```js
"block.disregarded";
```

#### Description

Fires when a block is disregarded

### block.received

#### Event

```js
"block.received";
```

#### Description

Fires when a block is incoming

### delegate.registered

#### Event

```js
"delegate.registered";
```

#### Description

When a transaction has been processed, and a wallet registers itself as a Delegate, the registered wallet is emitted.

#### Payload

[Delegate](/guidebook/core/data-models.html#delegate)

### delegate.resigned

#### Event

```js
"delegate.resigned";
```

#### Description

This event will be emitted when a wallet resigns as a Delegate, and the transaction has been processed.

#### Payload

[Delegate](/guidebook/core/data-models.html#delegate)

### forger.failed

#### Event

```js
"forger.failed";
```

#### Description

Emitted when the `forger` module fails to forge a new block.

#### Payload

The `error` message causing the failure.

### forger.missing

#### Event

```js
"forger.missing";
```

#### Description

This event will be emitted when the `forger` is missing a block.

#### Payload

The `error` message causing the failure.

### forger.started

::: warning
This event is currently [disabled](https://github.com/ARKEcosystem/core/blob/a71f007fe13e5465f2a5ecc20203ded04b2bc783/packages/core-forger/lib/manager.js#L197-L203) due to a bug in the implementation.
:::

#### Event

```js
"forger.started";
```

#### Description

When the `forger` module has started, this event is emitted.

#### Payload

The `publicKey` of the forging Delegate.

### peer.added

#### Event

```js
"peer.added";
```

#### Description

This event will be emitted when a peer is added to the list of accepted peers.

#### Payload

[Peer](/guidebook/core/data-models.html#peer)

### peer.removed

#### Event

```js
"peer.removed";
```

#### Description

Fired after a peer has been removed from the accepted peers.

#### Payload

[Peer](/guidebook/core/data-models.html#peer)

### transaction.applied

#### Event

```js
"transaction.applied";
```

#### Description

This event will be emitted when a transaction is applied to a wallet.

#### Payload

[Transaction](/guidebook/core/data-models.html#transaction)

### transaction.expired

#### Event

```js
"transaction.expired";
```

#### Description

After a transaction has expired and is removed from the transaction pool, the `transactionGuard` emits this event.

#### Payload

[Transaction](/guidebook/core/data-models.html#transaction)

### transaction.forged

#### Event

```js
"transaction.forged";
```

#### Description

This event will be emitted when a transaction is included in a block and thus has been forged.

#### Payload

[Transaction](/guidebook/core/data-models.html#transaction)

### transaction.pool.added

#### Event

```js
"transaction.pool.added";
```

#### Description

Fires when transactions are added to the transaction pool

### transaction.pool.rejected

#### Event

```js
"transaction.pool.rejected";
```

#### Description

Fires when transactions are rejected and not added to the transaction pool

### transaction.pool.removed

#### Event

```js
"transaction.pool.removed";
```

#### Description

Fires when a transaction is removed from the transaction pool by its ID

### transaction.reverted

#### Event

```js
"transaction.reverted";
```

#### Description

This event will be emitted when a transaction is reverted from a wallet. Often fired in conjunction with `block.reverted`.

#### Payload

[Transaction](/guidebook/core/data-models.html#transaction)

### wallet.vote

#### Event

```js
"wallet.vote";
```

#### Description

This event will be emitted when a wallet casts a vote in on a delegate.

#### Payload

[Wallet](/guidebook/core/data-models.html#wallet)

### wallet.unvote

#### Event

```js
"wallet.unvote";
```

#### Description

This event will be emitted when a wallet removes the vote for their current delegate.

#### Payload

[Wallet](/guidebook/core/data-models.html#wallet)

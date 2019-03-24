---
title: "Transaction Pool"
---

# Transaction Pool

::: tip
You can find the source code of this package at [packages/core-transaction-pool](https://github.com/ArkEcosystem/core/tree/develop/packages/core-transaction-pool).
:::

## Installation

```bash
yarn add @arkecosystem/core-transaction-pool
```

## Alias

`transaction-pool`

## Interface

[core-transaction-pool](https://github.com/ArkEcosystem/core/tree/develop/packages/core-transaction-pool)

## Implementation

[core-transaction-pool-mem](https://github.com/ArkEcosystem/core/tree/develop/packages/core-transaction-pool-mem)

## Notable Dependencies

- [better-sqlite3](https://github.com/JoshuaWise/better-sqlite3)

## Summary

The transaction pool package is responsible for verifying, validating and sorting valid transactions within the Ark Core node prior to their inclusion in a block and the blockchain history. 

Within the lifecycle of a transaction as it goes from request to blockchain entry, `core-transaction-pool` represents the intermediate step: after a transaction is submitted to the network, before it is included on the blockchain.

## Usage

As `core-transaction-pool` is primarily an internal tool, all Ark Core nodes that utilize this package (all nodes except dedicated forgers) don't need to do anything to set up their pools. The pool will load and begin working by default upon node startup.

If you are a forging delegate running a full node, customizing the transaction pool limit is one way to affect the economics behind running your node. Increasing the pool limit can increase your node's capacity to process transactions during times of increased blockchain activity. 

Conversely, decreasing your pool's capacity could have the effect of increasing your node's average fee per transaction. When your pool fills up it compares incoming transactions against the transactions currently in the pool, picking the higher-fee and discarding the lower-fee transaction. Because of this, while your node's transaction count per block might go down, the average fee per transaction will rise as higher fees enter the pool and lower fees are rejected. 

It is up to each forging delegate to determine what balance between transaction quantity and transaction profitability will work best for their particular situation and setup.

Typically, plugin developers should have no reason to access the transaction pool directly. As the transaction pool is only a temporary stopping point for transactions en route to blockchain history, customizing the transaction pool too much as an individual node runs the risk of bringing your node out of sync with the network. 

Bridgechain developers looking to alter their chain's consensus rules could benefit from a custom implementation of `core-transaction-pool`, as the pool's Guard class bears the primary responsibility for determining which transactions are valid under the rules of the network. Changing the Guard's verification rules, therefore, is a logical first step towards modifying consensus protocols to better match your custom network objectives.

## Behind the Scenes

All transactions must be confirmed as valid prior to being added to the transaction pool. This ensures that when `core-blockchain` decides which transactions to include in the next forging block, it can be sure that all transactions in the pool are valid. 

The package contains two primary submodules worth inspecting in detail: the Guard and the Pool.

The Guard makes sure that a given transaction can be safely added to the blockchain before passing it to the Pool, which determines what transactions should be included in a block and in what order.

As of the time of writing, the Guard filters out the following types of transaction requests:

- Transactions already in the pool (to prevent [replay attacks](https://en.wikipedia.org/wiki/Replay_attack))
- Transactions from blocked senders (senders who send invalid transactions/blocks)
- Transactions from the future
- Transactions with fees to low to accept/broadcast
- Transactions that fail to verify when cast into a Transaction model

Transactions that pass the Guard are added to the Pool, assuming that the Pool has enough room and that the sending account has enough balance to complete the transaction. 

The Pool deducts the outstanding balance from the sending wallet **before** the transaction is included in a block to prevent this balance from being double spent. 

It is important to note that this deduction is not final, and that the balance is returned if the transaction drops out of the Pool before inclusion in a block.

## Configuration

```ts
export const defaults = {
    enabled: !process.env.CORE_TRANSACTION_POOL_DISABLED,
    syncInterval: 512,
    storage: `${process.env.CORE_PATH_DATA}/transaction-pool.sqlite`,
    // When the pool contains that many transactions, then a new transaction is
    // only accepted if its fee is higher than the transaction with the lowest
    // fee in the pool. In this case the transaction with the lowest fee is removed
    // from the pool in order to accommodate the new one.
    maxTransactionsInPool: process.env.CORE_MAX_TRANSACTIONS_IN_POOL || 100000,
    maxTransactionsPerSender: process.env.CORE_TRANSACTION_POOL_MAX_PER_SENDER || 300,
    allowedSenders: [],
    maxTransactionsPerRequest: process.env.CORE_TRANSACTION_POOL_MAX_PER_REQUEST || 40,
    maxTransactionBytes: process.env.CORE_TRANSACTION_POOL_MAX_TRANSACTIONS_SIZE || 1047876,
    maxTransactionAge: 21600,
    dynamicFees: {
        enabled: true,
        minFeePool: 3000,
        minFeeBroadcast: 3000,
        addonBytes: {
            transfer: 100,
            secondSignature: 250,
            delegateRegistration: 400000,
            vote: 100,
            multiSignature: 500,
            ipfs: 250,
            timelockTransfer: 500,
            multiPayment: 500,
            delegateResignation: 400000,
        },
    },
};
```
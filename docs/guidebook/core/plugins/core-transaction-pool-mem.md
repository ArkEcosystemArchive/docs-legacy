---
title: "Transaction Pool - Memory"
---

# Transaction Pool - Memory

::: tip
You can find the source code of this package at [packages/core-transaction-pool-mem](https://github.com/ArkEcosystem/core/tree/develop/packages/core-transaction-pool-mem).
:::

## Installation

```bash
yarn add @arkecosystem/core-transaction-pool-mem
```

## Configuration

```js
module.exports = {
  enabled: !process.env.ARK_TRANSACTION_POOL_DISABLED,
  syncInterval: 512,
  storage: `${process.env.ARK_PATH_DATA}/database/transaction-pool-${process.env.ARK_NETWORK_NAME}.sqlite`,
  // When the pool contains that many transactions, then a new transaction is
  // only accepted if its fee is higher than the transaction with the lowest
  // fee in the pool. In this case the transaction with the lowest fee is removed
  // from the pool in order to accommodate the new one.
  maxTransactionsInPool: process.env.ARK_MAX_TRANSACTIONS_IN_POOL || 100000,
  maxTransactionsPerSender: process.env.ARK_TRANSACTION_POOL_MAX_PER_SENDER || 300,
  whitelist: [],
  allowedSenders: [],
  maxTransactionsPerRequest: 40,
  maxTransactionAge: 2700,
}
```

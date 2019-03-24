---
title: How to interact with the transaction pool
---

# How to interact with the transaction pool

[[toc]]

## Getting Started

The `core-transaction-pool` package manages everything that is related to transactions. It usually receives its data from the `core-api` or `core-p2p` packages when they received new transactions.

**Manual usage of the transaction pool methods should be avoided unless you are an experienced developer with core and understand potential consequences.**

## Interacting with the transaction pool

```ts
import { app } from "@arkecosystem/core-container";

const transactionPool = app.resolvePlugin("transaction-pool");

async function callTransactionPoolMethods() {
  // Get all transfer transactions from the pool.
  transactionPool.getTransactionsByType(0);

  // Get the number of transactions in the pool.
  transactionPool.getPoolSize();

  // Get the number of transactions in the pool from a specific sender.
  transactionPool.getSenderSize();

  // Add many transactions to the pool. The input should be an array of Transaction model instances from the @arkecosystem/crypto package.
  // Internally only data that has been verified by the transaction guard will enter the pool so make sure all of your data is verified.
  transactionPool.addTransactions([transaction, transaction, transaction]);

  // Add a transaction to the pool. The input should be a Transaction model instance from the @arkecosystem/crypto package.
  transactionPool.addTransaction(transaction);

  // Remove a transaction from the pool based on a Transaction model instance.
  transactionPool.removeTransaction(transaction);

  // Remove a transaction from the pool by id.
  transactionPool.removeTransactionById();

  // Get 150 transactions that are ready to be forged.
  transactionPool.getTransactionsForForging(150);

  // Get a transaction by transaction id.
  transactionPool.getTransaction();

  // Get all transactions within the specified range [start, start + size), ordered by fee.
  transactionPool.getTransactions(start, size);

  // Get all transactions within the specified range [start, start + size).
  transactionPool.getTransactionIdsForForging(start, size);

  // Get data from all transactions within the specified range [start, start + size).
  transactionPool.getTransactionsData(start, size);

  // Remove all transactions from the transaction pool belonging to specific sender.
  transactionPool.removeTransactionsForSender(senderPublicKey);

  // Check whether the sender of the transactions has exceeded the maximum nmber of transactions in queue.
  transactionPool.hasExceededMaxTransactions(transaction);

  // Flush the pool (delete all transactions from it).
  transactionPool.flush();

  // Checks if a transaction exists in the pool.
  transactionPool.transactionExists(transactionId);

  // Check if transaction sender is blocked.
  transactionPool.isSenderBlocked(senderPublicKey);

  // Blocks sender for a specified time.
  transactionPool.blockSender(senderPublicKey);

  // Purges all transactions from the given sender.
  transactionPool.purgeByPublicKey(senderPublicKey);

  // Purges all transactions from senders with at least one invalid transaction.
  transactionPool.purgeSendersWithInvalidTransactions(block);

  // Check whether a given sender has any transactions of the specified type in the pool.
  transactionPool.senderHasTransactionsOfType(senderPublicKey);
}

callTransactionPoolMethods();
```

## Conclusion

This guide should give you a rough idea of how to interact with the transaction pool.

**You should generally treat the transaction pool as a read-only entity when interacting with it through your plugin to avoid any unwanted side-effects unless you are experienced and know how to handle issues.**.

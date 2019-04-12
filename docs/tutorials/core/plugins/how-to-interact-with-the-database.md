---
title: "How to Interact With the Database"
---

# How to Interact With the Database

[[toc]]

## Getting Started

Blocks and transactions are the bread and butter of every blockchain. Core stores them in a [PostgreSQL](https://www.postgresql.org/) database.

## Retrieving Blocks & Transactions

```ts
import { app } from "@arkecosystem/core-container";

const database = app.resolvePlugin("database");

async function callDatabaseMethods() {
  // Get a block from the database by its id
  await database.getBlock("some block id");

  // Skip the first 100 blocks, grab the next 100
  await database.getBlocks(100, 100);

  // Grab blocks at height 1, 5 and 10
  await database.getBlocksByHeight([1, 5, 10]);

  // Get all blocks that have been forged in round 10
  await database.getBlocksForRound(10);

  // Get the last block we've received
  await database.getLastBlock();

  // Get the last 10 blocks we've received
  await database.getRecentBlockIds();

  // Get a transaction from the database by its id
  await database.getTransaction("some transaction id");
}

callDatabaseMethods();
```

## Conclusion

This guide should give you a rough idea how to easily access blocks and transactions from the database that you can then use to process in your plugins.

**Keep in mind that database queries on large tables like blocks and transactions are expensive so try to keep to a minimum.**

::: warning
Be careful when accessing the database with your applications outside of Core as you might cause a deadlock which can result in your node going out of sync if it doesn't resolve itself.
:::

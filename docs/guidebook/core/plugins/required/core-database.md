---
title: "Database"
---

# Database

::: tip
You can find the source code of this package at [packages/core-database](https://github.com/ArkEcosystem/core/tree/develop/packages/core-database).
:::

## Installation

```bash
yarn add @arkecosystem/core-database
```

## Alias
`database`

## Interface
[core-database](https://github.com/ArkEcosystem/core/tree/develop/packages/core-database)

## Implementation
[core-database-postgres](https://github.com/ArkEcosystem/core/tree/develop/packages/core-database-postgres)

## Notable Dependencies

- [bluebird](https://github.com/petkaantonov/bluebird)
- [pg-promise](https://github.com/vitaly-t/pg-promise)

## Summary

The database package is the primary interaction layer between the raw blockchain data and the various other packages who need to access that layer.

The current database implementation is built upon [PostgresQL](https://www.postgresql.org/), a high-performance relational database that facilitates the SQL read queries necessary to ensure the full range of API and webhook functionality.

## Usage

Resolving `core-database` into your plugins after `core-database-postgres` has loaded in your node will give you an object with several methods designed as top-level entry points to the Postgres database. Keep in mind that the database is largely an internal package, and that the database state alone does not represent the total state of the blockchain. Thus, for all access-related queries it is generally recommended to use the Public API instead. Nonetheless, for bridgechain developers and core developers, the `core-database-postgres` package offers several methods to access and update your Ark Core database:

- `getBlock(id)` accepts a block ID and returns a Block model from `crypto` with all relevant transactions attached as an array of Transaction models.
- `getLastBlock()` returns the last block stored in the database. Keep in mind that this block might not always be the most current block: if a block has just propagated elsewhere, there is a slight delay that block's creation and its inclusion in all nodes across the network. Thus, for accessing the last block, it is often better to use the `core-blockchain` API, which has better vision into the state of the network.
- `getBlocks(offset, limit)` accepts a limit and an offset from maximum height, and returns an array of blocks with related transactions.
- `getBlockHeaders(offset, limit)` does the same as `getBlocks`, but returns exclusively headers. Useful in chain validation.
- `getTransaction(id)` takes a transaction ID and returns a Transaction model from `crypto`.
- `getActiveDelegates(height, delegates)` takes as parameters the total list of delegates and the height at which a delegate list should be built. It returns an array of all actively forging delegates, sorted by vote count descending.
- `buildWallets()` loads and returns wallets using simple payment verification.
- `verifyBlockchain()` checks the Postgres database to ensure the following facts:
    - A last block (ie. the block at maximum chain height) is accessible
    - Last block height is equal to the block count
    - Number of stored transactions equals the sum of all block transaction counts
    - Sum of all transaction fees equals all block fees
    - Sum of all transaction amounts equals all block total amounts

## Behind the Scenes

At the top level of the package, an instance of PostgresConnection is created from the neighboring [connection.js](https://github.com/ArkEcosystem/core/blob/develop/packages/core-database-postgres/lib/connection.js) file and loaded into the [database manager](https://github.com/ArkEcosystem/core/blob/develop/packages/core-database/lib/manager.js) found in the interface.

The connection from Ark Core to the Postgres database is created though the connection's `make` method:
```ts
public async make(): Promise<Database.IDatabaseConnection> {
    if (this.db) {
        throw new Error("Database connection already initialised");
    }

    this.logger.debug("Connecting to database");

    this.queuedQueries = null;
    this.cache = new Map();

    try {
        await this.connect();
        this.exposeRepositories();
        await this.registerQueryExecutor();
        await this.runMigrations();
        await this.registerModels();
        this.logger.debug("Connected to database.");
        this.emitter.emit(Database.DatabaseEvents.POST_CONNECT);

        return this;
    } catch (error) {
        app.forceExit("Unable to connect to the database!", error);
    }

    return null;
}
```
As the code above demonstrates, the PostgresQL database connection consists of the following major parts:

- [QueryExecutor](https://github.com/ArkEcosystem/core/blob/develop/packages/core-database-postgres/lib/sql/query-executor.js): this class is responsible for executing queries on the databases. Its various methods correspond to how many results the query should expect as its return value: `none`, `one`, `oneOrNone`, `many`, `manyOrNone`, and `any`.
- [Migrations](https://github.com/ArkEcosystem/core/blob/develop/packages/core-database-postgres/lib/migrations/index.js): this JavaScript file loads the various migration SQL files necessary for the PostgresQL DB and executes them if necessary. In general, the concept of [migrations](https://en.wikipedia.org/wiki/Schema_migration) is used across software programming to refer to the process of creating and updating how data is saved in a database. In other words, as applications evolve and their data needs change, data representations *migrate* from one form to another, with each such migration represented in one SQL query.
    - `core-database-postgres` defines four migrations that create new Postgres tables: [wallets](https://github.com/ArkEcosystem/core/blob/develop/packages/core-database-postgres/lib/migrations/20180305100000-create-wallets-table.sql), [blocks](https://github.com/ArkEcosystem/core/blob/develop/packages/core-database-postgres/lib/migrations/20180305300000-create-blocks-table.sql), [transactions](https://github.com/ArkEcosystem/core/blob/develop/packages/core-database-postgres/lib/migrations/20180305400000-create-transactions-table.sql), and [rounds](https://github.com/ArkEcosystem/core/blob/develop/packages/core-database-postgres/lib/migrations/20180305200000-create-rounds-table.sql).
- [Models](https://github.com/ArkEcosystem/core/tree/develop/packages/core-database-postgres/lib/models): these JavaScript classes guide the serialization process as raw PostgresQL query results are transformed into data objects for use elsewhere in Ark Core. Keep in mind that, unlike the data models available in Core's `crypto` library, these data models contain strictly data, not methods. The sole responsibility of the models in `core-database-postgres` is to ensure that the raw data results returned from Postgres queries can be accessed in JavaScript without incident.
- [Repositories](https://github.com/ArkEcosystem/core/tree/develop/packages/core-database-postgres/lib/repositories): These repositories combine Postgres queries with database models to produce JavaScript object responses to data queries throughout Core.
- [WalletManager](https://github.com/ArkEcosystem/core/blob/develop/packages/core-database/lib/wallet-manager.js): an in-memory access point for wallet information. Changes in wallet balances are recorded in the WalletManager first, then saved into the database in batches to improve performance.

## Interface Methods

These are the functions outlined in the database interface:

- verifyBlockchain
- getActiveDelegates
- buildWallets
- saveWallets
- saveBlock
- enqueueSaveBlock
- enqueueDeleteBlock
- enqueueDeleteRound
- commitQueuedQueries
- deleteBlock
- getBlock
- getLastBlock
- getBlocks
- getTopBlocks
- getRecentBlockIds
- saveRound
- deleteRound

Rewriting the `core-database` layer should be done with caution. Although the Postgres database implementation might require more computational resources than a lower-level datastore, this complexity brings with it a streamlining of developer experience through the use of well-known SQL queries. This is particularly important given the many ways in which Ark Core data can be accessed by external applications — from the Public API to webhooks.

## Postgres Database Configuration
```ts
export const defaults = {
    initialization: {
        capSQL: true,
        promiseLib: require("bluebird"),
        noLocking: process.env.NODE_ENV === "test",
    },
    connection: {
        host: process.env.CORE_DB_HOST || "localhost",
        port: process.env.CORE_DB_PORT || 5432,
        database: process.env.CORE_DB_DATABASE || `${process.env.CORE_TOKEN}_${process.env.CORE_NETWORK_NAME}`,
        user: process.env.CORE_DB_USERNAME || process.env.CORE_TOKEN,
        password: process.env.CORE_DB_PASSWORD || "password",
    },
};
```

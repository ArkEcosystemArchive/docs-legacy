---
title: "Database"
---

# Database

In order to operate a node in any Ark network you need some way of storing the blocks, transactions and wallets in a database on your server.

The default driver for database communication we provide is [PostgresQL](https://www.postgresql.org/).

## A look under the hood

Let's take a closer look at how the database connection is bootstrapped and how to extend it.

```js
const postgres = new PostgresConnection(options)

const databaseManager = container.resolvePlugin('databaseManager')
await databaseManager.makeConnection(postgres)

return databaseManager.connection()
```

The first thing we do is grab an instance of the `DatabaseManager` that is available through the `Container` that provides us with all instances of other plugins.

Next we create an instance of our `PostgresConnection` which is the concrete implementation of a `ConnectionInterface` provided by `@arkecosystem/core-database` which connects to the database.

You can write any database connection that you like. There are only two requirements:

1. Your plugin class must extend `ConnectionInterface` (found [here](https://github.com/ArkEcosystem/core/blob/master/packages/core-database/lib/interface.js)).
2. Your exported plugin must include an `alias` key that matches the `alias` of the library you are looking to override: in this case, `databaseManager`.

Imagine how you could implement a `CassandraConnection` that connects to an [Apache Cassandra](http://cassandra.apache.org/) instance for a large private blockchain.

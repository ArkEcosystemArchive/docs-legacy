---
title: "Database"
---

# Database

[[toc]]

## Introduction

In order to operate a node in any ARK network you need some way of storing the blocks, transactions and wallets in a database on your server.

The default driver for database communication we provide is [Sequelize](https://github.com/sequelize/sequelize) which supports SQLite, PostgreSQL and MySQL.

## A look under the hood

Let's take a closer look at how the database connection is bootstrapped and how easy it is to extend it.

```js
const sequelize = new SequelizeConnection(options)

const databaseManager = manager.get('databaseManager')
await databaseManager.makeConnection(sequelize)

return databaseManager.connection()
```

The first thing we do is to grab an instance of the `DatabaseManager` that is available through the `Container` that provides us with all instances of other plugins.

Next we create an instance of our `SequelizeConnection` which is the concrete implementation of a `ConnectionInterface` provided by `@arkecosystem/core-database` which connects to the database.

Imagine how you could implement a `CassandraConnection` that connects to an [Apache Cassandra](http://cassandra.apache.org/) instance for a large private blockchain.

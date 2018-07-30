---
title: "Configuration"
---

# Configuration

[[toc]]

## Introduction

In order to operate a node in any ARK network you need to provide configuration to it one way or another.

The default method of providing the required configuration is to load it from a local directory on your server but implementing a different way of loading your configuration is a breeze.

## A look under the hood

Let's take a closer look at how the configuration is bootstrapped and how easy it is to extend it.

```js
const configManager = pluginManager.get('configManager')
await configManager.makeDriver(new JsonDriver(options))

return configManager.driver()
```

The first thing we do is to grab an instance of the `ConfigManager` that is available through the `Container` that provides us with all instances of other plugins.

Next we create an instance of our `JsonDriver` which is the concrete implementation of a `ConfigInterface` provided by `@arkecosystem/core-config` which loads the configuration from JSON files.

Imagine how you could implement a `HttpDriver` that pulls in the configuration for hundreds of nodes in a private network from a central server instead of having to update local files on all of those nodes.

## Environment Configuration
ARK Core allows you to use an [.env](https://github.com/bevry/envfile) to provide configuration that is environment specific without having to touch the `~/.ark/config/plugins.js` file. The `.env` file needs to be stored at `~/.ark/.env`.

**ARK_LOG_FILE**
This variable is used to specify the file `@arkecosystem/core-logger-winston` will use to create logfiles. The default is `${process.env.ARK_PATH_DATA}/logs/core/${process.env.ARK_NETWORK_NAME}/%DATE%.log`.

**ARK_DB_STORAGE**
This variable is used to specify the file `@arkecosystem/core-database-sequelize` will use for SQLite. The default is `${process.env.ARK_PATH_DATA}/database/${process.env.ARK_NETWORK_NAME}.sqlite`.

**ARK_DB_HOST**
This variable is used to specify the host `@arkecosystem/core-database-sequelize` will use for PostgreSQL. The default is `localhost`.

**ARK_DB_USERNAME**
This variable is used to specify the username `@arkecosystem/core-database-sequelize` will use for PostgreSQL. The default is `ark`.

**ARK_DB_PASSWORD**
This variable is used to specify the password `@arkecosystem/core-database-sequelize` will use for PostgreSQL. The default is `password`.

**ARK_DB_DATABASE**
This variable is used to specify the database `@arkecosystem/core-database-sequelize` will use. The default is `ark_devnet`.

**ARK_REDIS_HOST**
This variable is used to specify the redis host any plugins will use. The default is `localhost`.

**ARK_REDIS_PORT**
This variable is used to specify the redis port any plugins will use. The default is `6379`.

**ARK_P2P_HOST**
This variable is used to specify the host `@arkecosystem/core-p2p` will use. The default is `0.0.0.0`.

**ARK_P2P_PORT**
This variable is used to specify the port `@arkecosystem/core-p2p` will use. The default is `4002`.

**ARK_API_HOST**
This variable is used to specify the host `@arkecosystem/core-api` will use. The default is `0.0.0.0`.

**ARK_API_PORT**
This variable is used to specify the port `@arkecosystem/core-api` will use. The default is `4003`.

**ARK_WEBHOOKS_HOST**
This variable is used to specify the host `@arkecosystem/core-webhooks` will use. The default is `0.0.0.0`.

**ARK_WEBHOOKS_PORT**
This variable is used to specify the port `@arkecosystem/core-webhooks` will use. The default is `4004`.

**ARK_GRAPHQL_HOST**
This variable is used to specify the host `@arkecosystem/core-graphql` will use. The default is `0.0.0.0`.

**ARK_GRAPHQL_PORT**
This variable is used to specify the port `@arkecosystem/core-graphql` will use. The default is `4005`.

**ARK_JSONRPC_HOST**
This variable is used to specify the host `@arkecosystem/core-json-rpc` will use. The default is `0.0.0.0`.

**ARK_JSONRPC_PORT**
This variable is used to specify the port `@arkecosystem/core-json-rpc` will use. The default is `8080`.

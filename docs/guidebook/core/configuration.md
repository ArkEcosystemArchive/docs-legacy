---
title: "Configuration"
---

# Configuration

In order to operate a node in any Ark network you need to provide configuration to it one way or another.

## Environment Configuration
Ark Core allows you to use an [.env](https://github.com/bevry/envfile) to provide configuration that is environment specific without having to touch the `~/.ark/config/plugins.js` file. The `.env` file needs to be stored at `~/.ark/.env`.

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

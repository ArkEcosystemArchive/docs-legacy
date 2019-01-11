---
title: "Configuration"
---

# Configuration

To operate a node in any Ark network, you need to provide configuration to it one way or another.

## Environment Configuration

Ark Core allows you to use a [.env](https://github.com/bevry/envfile) file to provide a configuration that is environment specific without having to touch the `~/.ark/config/plugins.js` file. The `.env` file needs to be stored at `~/.ark/.env`.

**ARK_LOG_FILE** specifies which file `@arkecosystem/core-logger-winston` will use to create logfiles. The default is `${process.env.ARK_PATH_DATA}/logs/core/${process.env.ARK_NETWORK_NAME}/%DATE%.log`.

**ARK_DB_STORAGE** specifies the file `@arkecosystem/core-database-postgres` will use for PostgreSQL. The default is `${process.env.ARK_PATH_DATA}/database/${process.env.ARK_NETWORK_NAME}`.

**ARK_DB_HOST** specifies the host `@arkecosystem/core-database-postgres` will use for PostgreSQL. The default is `localhost`.

**ARK_DB_USERNAME** specifies the username `@arkecosystem/core-database-postgres` will use for PostgreSQL. The default is `ark`.

**ARK_DB_PASSWORD** specifies the password `@arkecosystem/core-database-postgres` will use for PostgreSQL. The default is `password`.

**ARK_DB_DATABASE** specifies the database `@arkecosystem/core-database-postgres` will use. The default is `ark_devnet`.

**ARK_P2P_HOST** specifies the host `@arkecosystem/core-p2p` will use. The default is `0.0.0.0`.

**ARK_P2P_PORT** specifies the port `@arkecosystem/core-p2p` will use. The default is `4002`.

**ARK_API_HOST** specifies the host `@arkecosystem/core-api` will use. The default is `0.0.0.0`.

**ARK_API_PORT** specifies the port `@arkecosystem/core-api` will use. The default is `4003`.

**ARK_WEBHOOKS_HOST** specifies the host `@arkecosystem/core-webhooks` will use. The default is `0.0.0.0`.

**ARK_WEBHOOKS_PORT** specifies the port `@arkecosystem/core-webhooks` will use. The default is `4004`.

**ARK_GRAPHQL_HOST** specifies the host `@arkecosystem/core-graphql` will use. The default is `0.0.0.0`.

**ARK_GRAPHQL_PORT** specifies the port `@arkecosystem/core-graphql` will use. The default is `4005`.

**ARK_JSONRPC_HOST** specifies the host `@arkecosystem/core-json-rpc` will use. The default is `0.0.0.0`.

**ARK_JSONRPC_PORT** specifies the port `@arkecosystem/core-json-rpc` will use. The default is `8080`.

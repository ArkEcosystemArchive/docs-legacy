---
title: "Configuration"
---

# Configuration

To operate a node in any Ark network, you need to provide configuration to it one way or another.

## Environment Configuration

Ark Core allows you to use a [.env](https://github.com/bevry/envfile) file to provide a configuration that is environment specific without having to touch the `~/.ark/config/plugins.js` file. The `.env` file needs to be stored at `~/.ark/.env`.

| Variable          | Plugin                               | Default                                               |
|-------------------|--------------------------------------|-------------------------------------------------------|
| ARK_LOG_FILE      | @arkecosystem/core-logger-winston    | $ARK_PATH_DATA/logs/core/$ARK_NETWORK_NAME/%DATE%.log |
| ARK_DB_STORAGE    | @arkecosystem/core-database-postgres | $ARK_PATH_DATA/database/$ARK_NETWORK_NAME             |
| ARK_DB_HOST       | @arkecosystem/core-database-postgres | localhost                                             |
| ARK_DB_USERNAME   | @arkecosystem/core-database-postgres | ark                                                   |
| ARK_DB_PASSWORD   | @arkecosystem/core-database-postgres | password                                              |
| ARK_DB_DATABASE   | @arkecosystem/core-database-postgres | ark_devnet                                            |
| ARK_P2P_HOST      | @arkecosystem/core-p2p               | 0.0.0.0                                               |
| ARK_P2P_PORT      | @arkecosystem/core-p2p               | 4002                                                  |
| ARK_API_HOST      | @arkecosystem/core-api               | 0.0.0.0                                               |
| ARK_API_PORT      | @arkecosystem/core-api               | 4003                                                  |
| ARK_WEBHOOKS_HOST | @arkecosystem/core-webhooks          | 0.0.0.0                                               |
| ARK_WEBHOOKS_PORT | @arkecosystem/core-webhooks          | 4004                                                  |
| ARK_GRAPHQL_HOST  | @arkecosystem/core-graphql           | 0.0.0.0                                               |
| ARK_GRAPHQL_PORT  | @arkecosystem/core-graphql           | 4005                                                  |
| ARK_JSONRPC_HOST  | @arkecosystem/core-json-rpc          | 0.0.0.0                                               |
| ARK_JSONRPC_PORT  | @arkecosystem/core-json-rpc          | @arkecosystem/core-json-rpc                           |
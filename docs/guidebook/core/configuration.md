---
title: "Configuration"
---

# Configuration

To operate a node in any ARK network, you need to provide configuration to it one way or another.

## Environment Configuration

ARK Core allows you to use a [.env](https://github.com/bevry/envfile) file to provide a configuration that is environment specific without having to touch the `~/.config/ark-core/{network}/plugins.js` file. The `.env` file needs to be stored at `~/.config/ark-core/{network}/.env`.

| Variable          | Plugin                               | Default                                               |
|-------------------|--------------------------------------|-------------------------------------------------------|
| CORE_DB_HOST       | @arkecosystem/core-database-postgres | localhost                                             |
| CORE_DB_USERNAME   | @arkecosystem/core-database-postgres | ark                                                   |
| CORE_DB_PASSWORD   | @arkecosystem/core-database-postgres | password                                              |
| CORE_DB_DATABASE   | @arkecosystem/core-database-postgres | ark_devnet                                            |
| CORE_P2P_HOST      | @arkecosystem/core-p2p               | 0.0.0.0                                               |
| CORE_P2P_PORT      | @arkecosystem/core-p2p               | 4002                                                  |
| CORE_API_HOST      | @arkecosystem/core-api               | 0.0.0.0                                               |
| CORE_API_PORT      | @arkecosystem/core-api               | 4003                                                  |
| CORE_WEBHOOKS_HOST | @arkecosystem/core-webhooks          | 0.0.0.0                                               |
| CORE_WEBHOOKS_PORT | @arkecosystem/core-webhooks          | 4004                                                  |
| CORE_JSON_RPC_HOST | @arkecosystem/core-json-rpc          | 0.0.0.0                                               |
| CORE_JSON_RPC_PORT | @arkecosystem/core-json-rpc          | 8080                                                  |

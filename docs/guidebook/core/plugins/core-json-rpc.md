---
title: "JSON-RPC"
---

::: warning
If you are looking to just create and broadcast transactions you should take a look at [Create a transactions](/api/public/v2/transactions.html#create-a-transaction) for the public API instead.
:::

# JSON-RPC

::: tip
You can find the source code of this package at [packages/core-json-rpc](https://github.com/ArkEcosystem/core/tree/develop/packages/core-json-rpc).
:::

## Installation

```bash
yarn add @arkecosystem/core-json-rpc
```

## Configuration

```js
module.exports = {
  enabled: process.env.ARK_JSON_RPC_ENABLED,
  host: process.env.ARK_JSON_RPC_HOST || '0.0.0.0',
  port: process.env.ARK_JSON_RPC_PORT || 8080,
  allowRemote: false,
  whitelist: ['127.0.0.1', '::ffff:127.0.0.1'],
  database: {
    uri: process.env.ARK_JSON_RPC_DATABASE || `sqlite://${process.env.ARK_PATH_DATA}/database/json-rpc.sqlite`,
    options: {},
  },
}

```

---
title: "Elasticsearch"
---

# Elasticsearch

::: tip
You can find the source code of this package at [packages/core-elasticsearch](https://github.com/ArkEcosystem/core/tree/develop/packages/core-elasticsearch).
:::

## Installation

```bash
yarn add @arkecosystem/core-elasticsearch
```

## Configuration

```js
module.exports = {
  server: {
    host: '0.0.0.0',
    port: 4007,
    whitelist: ['*'],
  },
  client: {
    host: 'localhost:9200',
    log: 'info',
  },
  chunkSize: 50000,
}
```

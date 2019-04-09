---
title: "Elasticsearch"
---

# Elasticsearch

::: tip
You can find the source code of this package at [packages/core-elasticsearch](https://github.com/ARKEcosystem/core/tree/develop/packages/core-elasticsearch).
:::

## Installation

```bash
yarn add @arkecosystem/core-elasticsearch
```

## Alias

`elasticsearch`

## Configuration

```ts
export const defaults = {
  server: {
    host: "0.0.0.0",
    port: 4007,
    whitelist: ["*"]
  },
  client: {
    host: "localhost:9200",
    log: "info"
  },
  chunkSize: 5000
};
```

---
title: "GrahpQL"
---

# GraphQL

::: tip
You can find the source code of this package at [packages/core-graphql](https://github.com/ArkEcosystem/core/tree/develop/packages/core-graphql).
:::

## Installation

```bash
yarn add @arkecosystem/core-graphql
```

## Configuration

```js
module.exports = {
  enabled: false,
  host: process.env.ARK_GRAPHQL_HOST || '0.0.0.0',
  port: process.env.ARK_GRAPHQL_PORT || 4005,
  path: '/graphql',
}
```

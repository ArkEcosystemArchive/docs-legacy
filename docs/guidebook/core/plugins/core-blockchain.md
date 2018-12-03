---
title: "Blockchain"
---

# Blockchain

::: tip
You can find the source code of this package at [packages/core-blockchain](https://github.com/ArkEcosystem/core/tree/develop/packages/core-blockchain).
:::

## Installation

```bash
yarn add @arkecosystem/core-blockchain
```

## Configuration

```js
module.exports = {
  version: '2.0.0',
  fastRebuild: false,
  databaseRollback: {
    maxBlockRewind: 10000,
    steps: 1000,
  },
  state: {
    maxLastBlocks: 100,
    maxLastTransactionIds: 10000,
  },
}
```

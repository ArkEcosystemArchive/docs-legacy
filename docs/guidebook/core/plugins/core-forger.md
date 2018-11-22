---
title: "Forger"
---

# Forger

::: tip
You can find the source code of this package at [packages/core-forger](https://github.com/ArkEcosystem/core/tree/develop/packages/core-forger).
:::

## Installation

```bash
yarn add @arkecosystem/core-forger
```

## Configuration

```js
module.exports = {
  hosts: [`http://127.0.0.1:${process.env.ARK_P2P_PORT || 4002}`],
}
```

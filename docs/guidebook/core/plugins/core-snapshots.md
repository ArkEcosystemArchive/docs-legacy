---
title: "Snapshots"
---

# Snapshots

::: tip
You can find the source code of this package at [packages/core-snapshots](https://github.com/ArkEcosystem/core/tree/develop/packages/core-snapshots).
:::

## Purpose

The purpose of this plugin is to provide local snapshot functionality, so in case of issues the blockchain can be rebuild locally from own exported data.

Snapshot files will be generated in your configured folder. By default this folder will be in `~.ark/snapshots/NETWORK_NAME/FOLDER_NAME`.
Fodler names are following this pattern: `startHeight-endHeight`.

It can be also used from the `cli`. Please check the `core-snapshosts-cli` documentation, [where more information is available](https://github.com/ArkEcosystem/core/blob/develop/packages/core-snapshots-cli/README.md).

## Installation

```bash
yarn add @arkecosystem/core-snapshots
```

## Configuration

```js
module.exports = {
  codec: 'lite',
  chunkSize: 50000,
}
```

---
title: "Error Tracker - Bugsnag"
---

# Error Tracker - Bugsnag

::: tip
You can find the source code of this package at [packages/core-error-tracker-bugsnag](https://github.com/ArkEcosystem/core/tree/develop/packages/core-error-tracker-bugsnag).
:::

## Installation

```bash
yarn add @arkecosystem/core-error-tracker-bugsnag
```

## Configuration

```js
module.exports = {
  apiKey: process.env.ARK_ERROR_TRACKER_BUGSNAG_API_KEY,
  configuration: {
    metaData: {
      network: process.env.ARK_NETWORK_NAME,
    },
  },
}
```

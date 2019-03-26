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

## Alias

`error-tracker`

## Configuration

> Check https://docs.bugsnag.com/platforms/nodejs/other/configuration-options/ for more options and details.

```ts
export const defaults = {
    apiKey: process.env.CORE_ERROR_TRACKER_BUGSNAG_API_KEY,
    metaData: {
        network: process.env.CORE_NETWORK_NAME,
    },
};
```

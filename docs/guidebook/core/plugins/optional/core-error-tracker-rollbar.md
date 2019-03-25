---
title: "Error Tracker - Rollbar"
---

# Error Tracker - Rollbar

::: tip
You can find the source code of this package at [packages/core-error-tracker-rollbar](https://github.com/ArkEcosystem/core/tree/develop/packages/core-error-tracker-rollbar).
:::

## Installation

```bash
yarn add @arkecosystem/core-error-tracker-rollbar
```

## Configuration

> Check https://docs.rollbar.com/docs/nodejs for more options and details.

```js
export const defaults = {
  accessToken: process.env.CORE_ERROR_TRACKER_ROLLBAR_ACCESS_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true
};
```

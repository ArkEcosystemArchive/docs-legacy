---
title: "Error Tracker - Sentry"
---

# Error Tracker - Sentry

::: tip
You can find the source code of this package at [packages/core-error-tracker-sentry](https://github.com/ARKEcosystem/core/tree/develop/packages/core-error-tracker-sentry).
:::

## Installation

```bash
yarn add @arkecosystem/core-error-tracker-sentry
```

## Alias

`error-tracker`

## Configuration

> Check https://docs.sentry.io/quickstart?platform=node to find your DSN and more information about available options.

```ts
export const defaults = {
    dsn: process.env.CORE_ERROR_TRACKER_SENTRY_DSN,
    debug: true,
    attachStacktrace: true,
    environment: process.env.CORE_NETWORK_NAME,
};
```

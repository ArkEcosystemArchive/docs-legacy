---
title: "Error Tracker - Airbrake"
---

# Error Tracker - Airbrake

::: tip
You can find the source code of this package at [packages/core-error-tracker-airbrake](https://github.com/ArkEcosystem/core/tree/develop/packages/core-error-tracker-airbrake).
:::

## Installation

```bash
yarn add @arkecosystem/core-error-tracker-airbrake
```

## Configuration

> Check https://github.com/airbrake/airbrake-js for more options and details.

```js
export const defaults = {
  projectId: process.env.CORE_ERROR_TRACKER_AIRBRAKE_PROJECT_ID,
  projectKey: process.env.CORE_ERROR_TRACKER_AIRBRAKE_PROJECT_KEY
};
```

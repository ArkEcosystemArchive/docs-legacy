---
title: "Vote Report"
---

# Vote Report

::: tip
You can find the source code of this package at [packages/core-vote-report](https://github.com/ARKEcosystem/core/tree/develop/packages/core-vote-report).
:::

## Installation

```bash
yarn add @arkecosystem/core-vote-report
```

## Alias

`vote-report`

## Summary

The `vote-report` package creates a webpage showing various delegate statistics for the network the current node is running on. This package is primarily useful as a lightweight alternative to a full explorer node, as it runs on-node with no external installations required.

This package can also be used to sanity-check your node. Note that this should not be your first troubleshooting step — your node console likely has more focused error handling messages. However, by checking the values in your `vote-report` and comparing them to your network's explorer, you can make sure that your node is fully synced with the network.

## Usage

To use the `vote-report` package, add it to your plugins file in your config directory. After doing so and restarting your node, connect to your vote report page by visiting `YOUR.NODE.IP.ADDR:4006`. If your node IP is `123.456.789.0`, for example, `123.456.789.0:4006` will take you to your vote report page.

## Configuration

```ts
export const defaults = {
    host: process.env.CORE_VOTE_REPORT_HOST || "0.0.0.0",
    port: process.env.CORE_VOTE_REPORT_PORT || 4006,
    delegateRows: process.env.CORE_VOTE_REPORT_DELEGATE_ROWS || 80,
};
```

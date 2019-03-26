---
title: "Logging"
---

# Logging

[[toc]]

## Introduction

To efficiently operate a node in the Ark Network or a BridgeChain, logging malfunctions and obtaining insights when errors occur is invaluable. As a Delegate, you also wish to be informed when critical errors occur, and monitor the day-to-day activity of the Delegate Node.

The default logger we provide is [winston](https://github.com/winstonjs/winston) which allows you to use multiple types of transport with minimal configuration needed.

## A look under the hood

Let's take a closer look at how the logger is bootstrapped and how easy it is to extend it.

```js
const logManager = manager.get("log-manager");
await logManager.makeDriver(new WinstonDriver(options));

return logManager.driver();
```

The first thing we do is to grab an instance of the `LogManager` that is available through the `container` that provides us with all instances of other plugins.

Next, we create an instance of our `WinstonDriver` which is the concrete implementation of a `LoggerInterface` provided by `@arkecosystem/core-logger` which uses [winston](https://github.com/winstonjs/winston).

Imagine how you could implement a `TelegramDriver` that sends all error messages to your telegram group but logs others into a file.

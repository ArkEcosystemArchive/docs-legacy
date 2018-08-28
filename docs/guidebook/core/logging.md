---
title: "Logging"
---

# Logging

[[toc]]

## Introduction

In order to efficiently operate a node in any ARK network you need to get some insight into what actually went wrong when any issues occur on your node.

The default logger we provide is [winston](https://github.com/winstonjs/winston) which allows you to use multiple transports with very little configuration needed.

## A look under the hood

Let's take a closer look at how the logger is bootstrapped and how easy it is to extend it.

```js
const logManager = manager.get('logManager')
await logManager.makeDriver(new WinstonDriver(options))

return logManager.driver()
```

The first thing we do is to grab an instance of the `LogManager` that is available through the `Container` that provides us with all instances of other plugins.

Next we create an instance of our `WinstonDriver` which is the concrete implementation of a `LoggerInterface` provided by `@arkecosystem/core-logger` which uses [winston](https://github.com/winstonjs/winston).

Imagine how you could implement a `TelegramDriver` that sends all error messages to your telegram group but logs others into a file.

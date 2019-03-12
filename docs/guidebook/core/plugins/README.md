---
title: "Plugins"
---

# Plugins

[[toc]]

## Introduction

Ark Core has an extensive and powerful plugin system that allows you to very easily break your application up into isolated pieces of business logic, and reusable utilities.

## Installing Plugins

Since 2.2.0 we ship Core as an NPM package that provides a global bin to manage core via the `ark` command. A few changes come with that in regards to how you install plugins.

### npm / yarn

The recommended way of using Core is to install it via npm / yarn which will provide everything pre-packaged. The difference to the previous way of using a git repository is that you don't have a `plugins` directory that `lerna` can use to link your plugins to Core.

In order to get around that issue you will need to use [yarn global](https://yarnpkg.com/lang/en/docs/cli/global/#toc-yarn-global), specifically [yarn global add](https://yarnpkg.com/en/docs/cli/add). When you run `yarn global add @my/custom-plugin` your plugin will be installed globally and Core will be able to load it once it is registered in your `plugins.js` file.

The use of `yarn global add` assumes that your plugins are either an npm package or provided through a git repository, if for some reason you are not able to provide either of those and wish to use your plugins only locally you can take a look at [yarn link](https://yarnpkg.com/lang/en/docs/cli/link/) to link your package globally so Core will be able to work with it.

### git (developers)

If you are a developer or someone that uses the git clone instead of the recommended npm packages you will need to place your plugins in the `plugins` directory and run `yarn bootstrap`.

If you're plugins are written in TypeScript it is recommended to run `yarn build` in the root of the repository to rebuild all packages and you should also copy how official core plugins get build via `tsc`.

### Registering the plugin

In order to make sure that your plugin is registered you need to modify the `/.config/ark-core/{network}/plugins.json` file and add your plugin to a specific point in the application lifecycle.

```js
module.exports = {
  "@arkecosystem/core-event-emitter": {},
  "@arkecosystem/core-logger": {},
  "@arkecosystem/core-logger-pino": {},
  "@arkecosystem/core-database": {},
  "@arkecosystem/core-database-postgres": {},
  "@arkecosystem/core-transaction-pool": {},
  "@arkecosystem/core-p2p": {},
  "@arkecosystem/core-blockchain": {},
  "@arkecosystem/core-api": {},
  "@arkecosystem/core-webhooks": {},
  "@arkecosystem/core-forger": {},
  "@arkecosystem/core-json-rpc": {}
};
```

Every plugin that is being registered in this file will be automatically loaded one after another to guarantee that all required data is available, so make sure your custom plugins are placed in the right spot.

## Developing Plugins

Plugins are very simple to write. At their core they are an object with a register property, that is a function with the signature async function. Additionally the plugin object has a required `pkg` property and several optional properties including version.

```js
import { Container } from "@arkecosystem/core-interfaces";
import { LogManager } from "@arkecosystem/core-logger";
import { defaults } from "./defaults";
import { PinoLogger } from "./driver";

export const plugin: Container.PluginDescriptor = {
  pkg: require("../package.json"),
  defaults,
  alias: "logger",
  extends: "@arkecosystem/core-logger",
  async register(container: Container.IContainer, options) {
    const logManager: LogManager = container.resolvePlugin("logManager");
    await logManager.makeDriver(new PinoLogger(options));

    return logManager.driver();
  }
};
```

### pkg

This property contains all the information about your plugin that is needed to register it like the name and version, usually this will be simply your `package.json` as it already has all of that information.

### defaults

All of the settings that your plugin provides should come with a default value so the user needs to configure as little as possible. An exception to this rule would be things like addresses, public keys or passphrases as those are things the user should configure so he knows the values.

### alias

In the above example you've probably noticed the `alias: "logger"` line. This serves as an alias to allow us quick access to the plugin via `container.resolvePlugin("logger")` instead of having to type the exact name of the logger we are using, e.g. `container.resolvePlugin("@arkecosystem/core-logger-pino")`.

::: warning
Aliases should be used with caution if you are using a lot of plugins as you might overwrite something that you did not intend to overwrite which can cause unwanted behaviours.
:::

### extends

This property will be rarely used and only be seen in a few plugins like logger or database implementations. The `extends` property tells the container that we first need to load the plugin that was defined via the `extends` property before we can continue with registering our plugin.

Plugins that are loaded via `extends` usually don't do anything on their own as they just provide an abstract, a factory or interfaces that should be used by plugins that provide concrete implementations.

### register

As we've seen above, the **register** method accepts two parameters, **container** and **options**.

The **container** parameter is an instance of the application container to provide you easy access to other plugins like configuration or database connections.

The **options** parameter is whatever options the user passes to your plugin when registering.

**register** should be an async function that returns once your plugin has completed whatever steps are necessary for it to be ready. Alternatively your register plugin should throw an error if an error occurred while registering your plugin.

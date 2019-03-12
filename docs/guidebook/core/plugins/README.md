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

If you are a developer or someone that uses the git clone instead of the recommended npm packages you will need to place your plugins in the `plugins` directory and run `lerna bootstrap`.

If you're plugins are written in TypeScript it is recommended to run `yarn build` in the root of the repository to rebuild all packages and you should also copy how official core plugins get build via `tsc`.

## Developing the Plugin

Plugins are very simple to write. At their core they are an object with a register property, that is a function with the signature async function. Additionally the plugin object has a required name property and several optional properties including version.

```js
"use strict";

const WinstonDriver = require("./driver");

/**
 * The struct used by the plugin container.
 * @type {WinstonDriver}
 */
exports.plugin = {
  pkg: require("../package.json"),
  defaults: require("./defaults"),
  alias: "logger",
  register: async (container, options) => {
    const logManager = container.resolvePlugin("logManager");
    await logManager.makeDriver(new WinstonDriver(options));

    return logManager.driver();
  }
};
```

As we've seen above, the **register** method accepts two parameters, **container** and **options**.

The **container** parameter is an instance of the application container to provide you easy access to other plugins like configuration or database connections.

The **options** parameter is whatever options the user passes to your plugin when registering.

**register** should be an async function that returns once your plugin has completed whatever steps are necessary for it to be ready. Alternatively your register plugin should throw an error if an error occurred while registering your plugin.

## Putting the Plugin in place

Core consist of 2 directories, which are `packages` and `plugins`, both of them serve different purposes.

### Packages

The `packages` directory holds all official packages shipped by ArkEcosystem together with core. These should not be modified or you might end up with git conflicts when you try to pull or update.

### Plugins

The `plugins` directory holds all unofficial/third-party packages that you choose to install. This directory will be ignored by git, thus not resulting in any conflicts when you try to pull or update.

**If you install a third-party plugin, remember to run `lerna bootstrap` from the root of core in order to install all of its dependencies.**

## Registering the Plugin

In order to make sure that your plugin is registered you need to modify the **plugins.json** and add your plugin to a specific point in the application lifecycle.

```js
module.exports = {
  "@arkecosystem/core-event-emitter": {},
  "@arkecosystem/core-logger": {},
  "@arkecosystem/core-logger-winston": {},
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

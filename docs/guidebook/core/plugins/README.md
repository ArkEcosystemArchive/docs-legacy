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

Check our [official guide](/guidebook/developer/write-a-plugin.html) to learn more about how to get started with plugin development.

# Migrating from v2.2 to v2.3

Upgrading from `v2.2` to `v2.3` is fairly straightforward if you follow the instructions. Even though we try to ensure backward compatibility (BC) as much as possible, sometimes it is not possible or very complicated to avoid it and still create a good solution to a problem.

::: tip 
Upgrading a complex software project always comes at the risk of breaking something, so make sure you have a backup.
:::

### Notes

After upgrading you should check whether your application still works as expected and no plugins are broken. See the following notes on which changes to consider when upgrading from one version to another.

## Upgrade steps

::: warning
Be sure to complete all of the following changes before you continue to upgrade to the latest version.
:::

### Step 1. Adjusting Configuration (new logger package)

Since 2.3 we ship an additional logger implementation, `@arkecosystem/core-logger-pino`. We advise you to switch to the new package, to do so open the `~/.config/ark-core/<network>/plugins.js` file (e.g. for mainnet using nano you would run `nano ~/.config/ark-core/mainnet/plugins.js`), locate the `@arkecosystem/core-logger-winston` plugin and replace it like shown below.


1. Open the file `~/.config/ark-core/mainnet/plugins.js`
2. Locate the `logger-winston` package. The logger package can be found at the start of the `plugins.js` file (line 3 starting with `"@arkecosystem/core-logger-winston": {...`). 
3. Remove the section related to the `core-logger-winston` (remove the following code):
```js
// Remove all this code from the file
"@arkecosystem/core-logger-winston": { 
    transports: {
        console: {
            options: {
                level: process.env.CORE_LOG_LEVEL || "debug",
            },
        },
        dailyRotate: {
            options: {
                level: process.env.CORE_LOG_LEVEL || "debug",
            },
        },
    },
},
```
4. Save the changes.
5. Add the new logger configuration to the already opened file `~/.config/ark-core/mainnet/plugins.js`. Add this line (see below):
```js
"@arkecosystem/core-logger-pino": {}, // Add this line
```
6. Save the changes. Your configuration file should look like this:
```bash
module.exports = {
    "@arkecosystem/core-event-emitter": {},
    "@arkecosystem/core-logger-pino": {},
    "@arkecosystem/core-database-postgres": {
    ...
    ...
    ...
```
### Step 2. Running the upgrade command via the `ark cli`

::: warning
Do not run any of the mentioned commands with `sudo` unless explicitly stated.
:::

Make sure that [Step 1](https://docs.ark.io/releases/v2.3/migrating_2.2_2.3.html#step-1-adjusting-configuration-new-logger-package) was successfully completed (new logger package change in the `~/.config/ark-core/<network>/plugins.js`) before running the `ark update` command via the cli.
To update to the v2.3 run the following command:

```bash
ark update
```

Wait for core to update, follow console output. **As a node operator your work here is done**. You successfully upgraded to the latest version of ARK Core.

If you are a developer please check the info [Section below](https://docs.ark.io/releases/v2.3/migrating_2.2_2.3.html#devnet-only-developer-related-information).

## Reporting Problems

If you happen to experience any issues please [open an issue](https://github.com/ARKEcosystem/core/issues/new?template=Bug_report.md) with a detailed description of the problem, steps to reproduce it and info about your environment.

---

## [DEVNET ONLY] Developer related information

::: warning
This section addresses developers and shows notable changes during this version upgrade. For more details make sure you checkout [CHANGELOG](https://github.com/ArkEcosystem/core/blob/master/CHANGELOG.md) document. 
:::

### Renaming of Major Package Aliases

From version 2.3 onwards all aliases defined by Core packages will adhere to the `kebab-case` format. If your plugin makes use of any of the following packages, make sure to adjust the calls to the core containers `resolvePlugin` and `resolveOptions` methods with the new alias:

| Old             | New              |
| :-------------- | :--------------- |
| databaseManager | database-manager |
| logManager      | log-manager      |
| transactionPool | transaction-pool |

For example, change

```ts
const logManager: LogManager = container.resolvePlugin("logManager");
```

to

```ts
const logManager: LogManager = container.resolvePlugin("log-manager");
```

### Switching to the `next` release channel

To continue testing alfa/beta releases follow the instructions below. This is for experienced user, developer project that know what are new features and want to test them ahead of the official release on mainnet.

During the development of 2.2.0 there were the channels `alpha`, `beta` and `rc` as a lot of testing had to be done before going public with the switch from using a git repository to providing a CLI. Run the following command to install the 2.3.0 release.

```shell
yarn global add @arkecosystem/core@next
```

From 2.3.0 onwards the `next` channel will serve as a combination of all of the old channels on `devnet`. This means there won't be the need to switch between alpha, beta or rc anymore.


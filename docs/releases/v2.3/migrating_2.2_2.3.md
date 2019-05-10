# Migrating from v2.2 to v2.3

Upgrading from `v2.2` to `v2.3` is fairly straightforward if you follow the instructions. Even though we try to ensure backward compatibility (BC) as much as possible, sometimes it is not possible or very complicated to avoid it and still create a good solution to a problem.

::: warning
Upgrading a complex software project always comes at the risk of breaking something, so make sure you have a backup.
:::

## Notes

After upgrading you should check whether your application still works as expected and no plugins are broken. See the following notes on which changes to consider when upgrading from one version to another.

## Upgrade Steps

::: tip
Be sure to complete all of the following steps before you continue to upgrade with the `ark update` command to the latest version.
:::

### Step 1. Adjusting Configuration

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

4. Add the new logger configuration to the already opened file `~/.config/ark-core/mainnet/plugins.js`. Add this line (see below):

   ```js
   "@arkecosystem/core-logger-pino": {}, // Add this line
   ```

5. Save the changes. Your configuration file should look like this:

   ```js
   module.exports = {
       "@arkecosystem/core-event-emitter": {},
       "@arkecosystem/core-logger-pino": {},
       "@arkecosystem/core-database-postgres": {},
       ...
       ...
       ...
   }
   ```

### Step 2. Running the Update Command via the `ark` CLI

::: warning
Do not run any of the mentioned commands with `sudo` unless explicitly stated.
:::

Make sure that [Step 1](https://docs.ark.io/releases/v2.3/migrating_2.2_2.3.html#step-1-adjusting-configuration-new-logger-package) was successfully completed before running the `ark update` command via the cli.
To update to the v2.3 run the following command:

```bash
ark update
```

When updating from 2.2.x to 2.3.0 the first start might take a few minutes because Core will need to migrate all transactions to have an `asset` column that is required for AIP29. This can **take up to a few minutes on low-spec servers**.
**As a node operator your work here is done**. You successfully upgraded to the latest version of ARK Core. If you are a developer please check the next Section below, where major changes are listed.

## Developer Related Information

This section addresses developers and lists notable changes during this version upgrade. For more details make sure you checkout the [CHANGELOG](https://github.com/ArkEcosystem/core/blob/master/CHANGELOG.md) document. The following breaking changes where introduced in v2.3:

### 1. Renaming of Major Package Aliases

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

### 2. Wallets Table Removed from the Database

Core 2.0 has been fully reliant on in-memory wallets since the 2.0 release. This change removes storing of wallets in the database, reducing the database size and bringing various performance improvements. If you have applications that rely on the database wallets table you will need to migrate them as soon as possible to using the API calls as this is the only way to get wallet data.

### 3. Block ID Transition to SHA-256 Block IDs

This major change is the transition to full SHA256 block IDs, encoded as a hex string. In simple terms, this eliminates a potential collision of block IDs with blockchain height or other block IDs, making ARK safer and future-proof.

### 4. Smartbridge Size Increased

The Smartbridge (Vendorfield) can now hold a total of 255 bytes of data, compared to the previous 64 bytes this is a four fold increase. This increase will allow applications to store more data on the blockchain and widen the use-case landscape.

## [DEVNET ONLY] The `next` release channel

To continue testing on the developer branch, you must switch your `ark cli` to the `next` release channel. This is for experienced users and developer projects that want to test the new features ahead of the official release on our mainnet. Use this for testing of developer releases, devnet only.

During the development of 2.2.0 we had channels for `alpha`, `beta` and `rc` as a lot of testing had to be done before going public with the switch from using a git repository to providing a CLI. Run the following command to install the `next` release and stay on the `next` release channel:

```shell
yarn global add @arkecosystem/core@next
```

From 2.3.0 onwards the `next` channel will serve as a combination of all of the old channels on `devnet`. This means there won't be any need to switch between `alpha`, `beta` or `rc` anymore.

## Reporting Problems

If you happen to experience any issues please [open an issue](https://github.com/ARKEcosystem/core/issues/new?template=Bug_report.md) with a detailed description of the problem, steps to reproduce it and info about your environment.

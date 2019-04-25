# Migrating from v2.3 to v2.4

Upgrading from `v2.3` to `v2.4` is fairly straightforward if you follow the instructions. Even though we try to ensure backward compatibility (BC) as much as possible, sometimes it is not possible or very complicated to avoid it and still create a good solution to a problem.

::: warning
Upgrading a complex software project always comes at the risk of breaking something, so make sure you have a backup.
:::

## Notes

After upgrading you should check whether your application still works as expected and no plugins are broken. See the following notes on which changes to consider when upgrading from one version to another.

## Upgrade steps

::: tip
Be sure to complete all of the following steps before you continue to upgrade with the `ark update` command to the latest version.
:::

### Step 1. Adjusting Configuration

1. Open `~/.config/ark-core/<network>/plugins.js`
2. Locate the `@arkecosystem/core-database-postgres` package.
3. Add the new logger configuration to the already opened file `~/.config/ark-core/mainnet/plugins.js`. Add this line (see below):

   ```js
   "@arkecosystem/core-state": {}, // Add this line before it
   ```

4. Save the changes. Your configuration file should look like this:

   ```js
   module.exports = {
       "@arkecosystem/core-event-emitter": {},
       "@arkecosystem/core-logger-pino": {},
       "@arkecosystem/core-state": {},
       "@arkecosystem/core-database-postgres": {},
       ...
       ...
       ...
   }
   ```

### Step 2. Running the update command via the `ark` CLI

::: warning
Do not run any of the mentioned commands with `sudo` unless explicitly stated.
:::

Make sure that [Step 1](http://localhost:8080/releases/v2.4/migrating_2.3_2.4.html#step-1-adjusting-configuration) was successfully completed before running the `ark update` command via the cli.

**To update to v2.4 run the following command:**

```bash
ark update
```

## Reporting Problems

If you happen to experience any issues please [open an issue](https://github.com/ARKEcosystem/core/issues/new?template=Bug_report.md) with a detailed description of the problem, steps to reproduce it and info about your environment.

# Migrating from v2.5 to v2.6

Upgrading from `v2.5` to `v2.6` is fairly straightforward if you follow the instructions. Even though we try to ensure backward compatibility (BC) as much as possible, sometimes it is not possible or very complicated to avoid it and still create a good solution to a problem.

::: warning
Upgrading a complex software project always comes at the risk of breaking something, so make sure you have a backup.
:::

## Notes

After upgrading you should check whether your application still works as expected and no plugins are broken. See the following notes on which changes to consider when upgrading from one version to another.

## Upgrade Steps

::: warning
Do not run any of the mentioned commands with `sudo` unless explicitly stated.
:::

**To update to v2.6 run the following command:**

```bash
ark update
```

### Step 1. Add `core-magistrate-transactions` Package

1. Open `~/.config/ark-core/mainnet/plugins.js`
2. Locate the `@arkecosystem/core-database-postgres` entry.
3. Add this package addition line before it (see below):

   ```js
   "@arkecosystem/core-magistrate-transactions": {}, // Add this line before it
   ```

4. Save the changes. Your configuration file should look like this:

   ```js
   module.exports = {
       "@arkecosystem/core-event-emitter": {},
       "@arkecosystem/core-logger-pino": {},
       "@arkecosystem/core-state": {},
       "@arkecosystem/core-magistrate-transactions": {},
       "@arkecosystem/core-database-postgres": {},
       ...
       ...
       ...
   }
   ```

## Reporting Problems

If you happen to experience any issues please [open an issue](https://github.com/ARKEcosystem/core/issues/new?template=Bug_report.md) with a detailed description of the problem, steps to reproduce it and info about your environment.

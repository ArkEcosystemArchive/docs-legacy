# Migrating from v2.4 to v2.5

Upgrading from `v2.4` to `v2.5` is fairly straightforward if you follow the instructions. Even though we try to ensure backward compatibility (BC) as much as possible, sometimes it is not possible or very complicated to avoid it and still create a good solution to a problem.

::: warning
Upgrading a complex software project always comes at the risk of breaking something, so make sure you have a backup.
:::

## Notes

After upgrading you should check whether your application still works as expected and no plugins are broken. See the following notes on which changes to consider when upgrading from one version to another.

## Upgrade Steps

::: warning
Do not run any of the mentioned commands with `sudo` unless explicitly stated.
:::

**To update to v2.5 run the following command:**

```bash
ark update
```

## Developer Related Information

This section addresses developers and lists notable changes during this version upgrade. For more details make sure you checkout the [CHANGELOG](https://github.com/ArkEcosystem/core/blob/master/CHANGELOG.md) document. The following breaking changes where introduced in v2.5:

### 1. `BigInt` values returned as `string` via Public API

All v2 API endpoints now return `BigInt` values as `string` to avoid rounding issues for chains that use very large supplies. This should only affect developers that haven't properly handled `BigInt` values already, meaning you treated `BigInt` values as numbers instead of casting them after receiving them.

## Reporting Problems

If you happen to experience any issues please [open an issue](https://github.com/ARKEcosystem/core/issues/new?template=Bug_report.md) with a detailed description of the problem, steps to reproduce it and info about your environment.

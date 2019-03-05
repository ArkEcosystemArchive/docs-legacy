# Migrating from v2.1 to v2.2

Upgrading from `v2.1` to `v2.2` is fairly straightforward if you follow the instructions. Even though we try to ensure backward compatibility (BC) as much as possible, sometimes it is not possible or very complicated to avoid it and still create a good solution to a problem.

::: warning
Upgrading a complex software project always comes at the risk of breaking something, so make sure you have a backup.
:::

### Notes

After upgrading you should check whether your application still works as expected and no plugins are broken. See the following notes on which changes to consider when upgrading from one version to another.

## Instructions

### Removing v2.1

```bash
pm2 delete all
rm -rf ~/core
rm -rf ~/ark-core
echo 'export PATH=$(yarn global bin):$PATH' >> ~/.bashrc
yarn global add @arkecosystem/core
```

### Start Relay

```bash
ark relay:start
```

### Start Forger

```bash
ark forger:start
```

### Changes

#### Configuration

- Since 2.2 we no longer ship `@arkecosystem/core-graphql` by default, open the `~/.config/ark-core/<network>/plugins.js` file, locate the `@arkecosystem/core-graphql` plugin and remove the whole block.

```js
{
    "@arkecosystem/core-graphql": {
        // ...
    }
}
```

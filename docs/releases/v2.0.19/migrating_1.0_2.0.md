# Migrating from v1 to v2.0

::: danger
This is an archived guide. `v2.0.X` has been deprecated.
:::

Initially, you might have created your BridgeChain using [Ark Node](https://github.com/ArkEcosystem/ark-node), the official v1 implementation. Now that [Ark Core](https://github.com/arkecosystem/core) (v2) has reached a stable, production-ready release, you will want to upgrade your network.

Depending on the size of your BridgeChain network, upgrading to `Ark Core` may need more or less preparation. Upgrading is a breaking change, and all `v1` nodes will become incompatible with your new network. You should ensure that your users are aware of the upgrade, and node operators have time to adequately prepare for the migration, as they will need to update their tools and code bases.

[[toc]]

## Initial Preparation

Ensure you have correctly mapped all participants in your network. You should be able to answer the following questions:

- How many node operators are there, and am I able to contact all of them?
- Are services dependent on my network, such as exchanges or third party apps?

During the migrations, third-party providers and exchanges should ensure they stop accepting transactions, as there is a gap where the blockchain is possibly rolled back a few hundred blocks. Once the migration is completed, these services must ensure they are not on a forked network; it is best to wait a few hours to a day until everyone is sure a network consensus has been reached.

All node operators must cooperate in the migration. (Technicallhttp://0.0.0.0:8080y only > 50% of the delegates need to migrate. However, you should avoid a community split). We recommend having a dedicated slack channel, monitored by your team during the entire migration process, so that you may provide assistance.

Together with your node operators, it would be best if you decided on a cutoff block `height`, after this height, `v1` will no longer be supported in your BridgeChain, and services relying on `v1` nodes may break and should be considered unreliable.

## Setting the BridgeChain Configuring

The new `v2` implementation is backward compatible with `v1`; thus we can deploy our new nodes without forcing a migration. Your BridgeChain configuration is defined by the following files, which are needed by `v2` as well.

- [config.mainnet.json](https://github.com/ArkEcosystem/ark-node/blob/mainnet/config.mainnet.json)
- [genesisBlock.json](https://github.com/ArkEcosystem/ark-node/blob/mainnet/genesisBlock.json)

Clone [Ark Core](https://github.com/arkecosystem/core) so that we can configure our network. Make sure to verify that you have the latest tag.

```bash
git clone git@github.com:arkecosystem/core
git checkout tags/<2.0.X> -b <branch_name>
cd core
```

Create a new directory in `packages/core/lib/config` for your BridgeChain configurations.

```bash
cd packages/core/lib/config
mdkir MyNet
```

The following files are required to make `v2` compatible with your custom network.

- **genesisBlock.json:** defines the very first block of your network, and from it your `networkhash` is derived, as it is the header of the first block.
- **peers.json:** used by the node to find other exising nodes. The file resembles something like this:

```json
{
"minimumVersion": ">=0",
"minimumNetworkReach": 20,
"globalTimeout": 5000,
"coldStart": 30,
"whiteList": [],
"blackList": [],
"list": [
{
    "ip": "5.196.105.32",
    "port": 4001
},
```

`minimumVersion` is of special interest to use, as we will use it later to evict all `v1` nodes from our network. Ensure it is not set to `>=2.X.X`, as your new node will not be able to sync due to it banning existing `v1` nodes.

- **plugins.js:** contains default configurations for your node. You can copy the below file for sane defaults and edit them later. These are not very relevant to the migration.

```js
module.exports = {
  '@arkecosystem/core-event-emitter': {},
  '@arkecosystem/core-logger-winston': {
    transports: {
      console: {
        options: {
          level: process.env.ARK_LOG_LEVEL || 'debug',
        },
      },
      dailyRotate: {
        options: {
          level: process.env.ARK_LOG_LEVEL || 'debug',
        },
      },
    },
  },
  '@arkecosystem/core-database-postgres': {
    connection: {
      host: process.env.ARK_DB_HOST || 'localhost',
      port: process.env.ARK_DB_PORT || 5432,
      database:
        process.env.ARK_DB_DATABASE || `ark_${process.env.ARK_NETWORK_NAME}`,
      user: process.env.ARK_DB_USERNAME || 'ark',
      password: process.env.ARK_DB_PASSWORD || 'password',
    },
  },
  '@arkecosystem/core-transaction-pool-mem': {
    enabled: !process.env.ARK_TRANSACTION_POOL_DISABLED,
    maxTransactionsPerSender:
      process.env.ARK_TRANSACTION_POOL_MAX_PER_SENDER || 300,
    allowedSenders: [],
  },
  '@arkecosystem/core-p2p': {
    host: process.env.ARK_P2P_HOST || '0.0.0.0',
    port: process.env.ARK_P2P_PORT || 4001,
    whitelist: ['127.0.0.1', '::ffff:127.0.0.1'],
  },
  '@arkecosystem/core-blockchain': {
    fastRebuild: false,
  },
  '@arkecosystem/core-api': {
    enabled: !process.env.ARK_API_DISABLED,
    host: process.env.ARK_API_HOST || '0.0.0.0',
    port: process.env.ARK_API_PORT || 4003,
    whitelist: ['*'],
  },
  '@arkecosystem/core-webhooks': {
    enabled: process.env.ARK_WEBHOOKS_ENABLED,
    server: {
      enabled: process.env.ARK_WEBHOOKS_API_ENABLED,
      host: process.env.ARK_WEBHOOKS_HOST || '0.0.0.0',
      port: process.env.ARK_WEBHOOKS_PORT || 4004,
      whitelist: ['127.0.0.1', '::ffff:127.0.0.1'],
    },
  },
  '@arkecosystem/core-graphql': {
    enabled: process.env.ARK_GRAPHQL_ENABLED,
    host: process.env.ARK_GRAPHQL_HOST || '0.0.0.0',
    port: process.env.ARK_GRAPHQL_PORT || 4005,
  },
  '@arkecosystem/core-forger': {
    hosts: [`http://127.0.0.1:${process.env.ARK_P2P_PORT || 4001}`],
  },
  '@arkecosystem/core-json-rpc': {
    enabled: process.env.ARK_JSON_RPC_ENABLED,
    host: process.env.ARK_JSON_RPC_HOST || '0.0.0.0',
    port: process.env.ARK_JSON_RPC_PORT || 8080,
    allowRemote: false,
    whitelist: ['127.0.0.1', '::ffff:127.0.0.1'],
  },
  '@arkecosystem/core-snapshots': {},
}
```

Your directory `MyNet` should now contain `genesisBlock.json`, `peers.json`, and a `plugins.js`. If you use the terms `mainnet`, `devnet` and `testnet` in your BridgeChain, you should create configuration directories for each of these networks, overriding the existing directories.

Next, we need to edit our scripts to use the new configurations. From your git root, open `packages/core/bin/ark`. Edit the file, removing references of ark and replacing it with your BridgeChain name. These changes are for cosmetic purposes only.

Open `packages/core/package.json`. Here the common startup scripts are defined. You can read more on how these work in the [node lifecycle](/guidebook/core/node-lifecycle.md) section. We are interested in the `scripts` key.

```json
"scripts": {
    "debug:start": "node --inspect-brk ./bin/ark start",
    "debug:relay": "node --inspect-brk ./bin/ark relay",
    "debug:forger": "node --inspect-brk ./bin/ark forger",
    "debug:snapshot": "node --inspect-brk ./bin/ark snapshot",
    "start": "./bin/ark start",
    "start:mainnet": "./bin/ark start --config ./lib/config/mainnet --network mainnet",
    "start:devnet": "./bin/ark start --config ./lib/config/devnet --network devnet",
    "start:testnet": "cross-env ARK_ENV=test ./bin/ark start --config ./lib/config/testnet --network testnet",
    "start:testnet:live": "./bin/ark start --config ./lib/config/testnet.live --network testnet",
    "relay": "./bin/ark relay",
    "relay:mainnet": "./bin/ark relay --config ./lib/config/mainnet --network mainnet",
    "relay:devnet": "./bin/ark relay --config ./lib/config/devnet --network devnet",
    "relay:testnet": "cross-env ARK_ENV=test ./bin/ark relay --config ./lib/config/testnet --network testnet",
    "relay:testnet:live": "./bin/ark relay --config ./lib/config/testnet.live --network testnet",
    "forger": "./bin/ark forger",
    "forger:mainnet": "./bin/ark forger --config ./lib/config/mainnet --network mainnet",
    "forger:devnet": "./bin/ark forger --config ./lib/config/devnet --network devnet",
    "forger:testnet": "cross-env ARK_ENV=test ./bin/ark forger --config ./lib/config/testnet --network testnet",
    "forger:testnet:live": "./bin/ark forger --config ./lib/config/testnet.live --network testnet",
    "snapshot": "./bin/ark snapshot",
    "snapshot:mainnet": "./bin/ark snapshot --config ./lib/config/mainnet --network mainnet",
    "snapshot:devnet": "./bin/ark snapshot --config ./lib/config/devnet --network devnet",
    "snapshot:testnet": "./bin/ark snapshot --config ./lib/config/testnet --network testnet",
    "snapshot:testnet:live": "./bin/ark snapshot --config ./lib/config/testnet.live --network testnet",
    "full:testnet": "cross-env ARK_ENV=test ./bin/ark start --config ./lib/config/testnet --network testnet --network-start",
    "full:testnet:live": "./bin/ark start --config ./lib/config/testnet.live --network testnet --network-start",
    "full:testnet:2tier:2": "cross-env ARK_ENV=test ./bin/ark start --config ./lib/config/testnet.2 --network testnet --network-start",
    "full:testnet:2tier:1": "cross-env ARK_ENV=test ./bin/ark start --config ./lib/config/testnet.1 --network testnet --network-start",
    "full:testnet:2tier": "cross-env ARK_ENV=test ./bin/ark start --config ./lib/config/testnet.1 --network testnet --network-start && ./bin/ark start --config ./lib/config/testnet.2 --network testnet --network-start",
    "lint": "eslint ./ --fix"
  },
```

Some of these commands use the `--config` option. This accepts a relative directory as its parameter, pointing to our pre-created configuration directories. If you altered the existing `mainnet`, `devnet` and `testnet` directories, these commands will now work with your configurations.

We will continue this guide using the name `MyNet`, as that means we cover all options and places to edit. Add the following lines to `scripts`:

```json
"start:MyNet": "./bin/ark start --config ./lib/config/MyNet --network MyNet",
"relay:MyNet": "./bin/ark relay --config ./lib/config/MyNet --network MyNet",
"forger:MyNet": "./bin/ark forger --config ./lib/config/MyNet --network MyNet",
"snapshot:MyNet": "./bin/ark snapshot --config ./lib/config/MyNet --network MyNet",
```

These shortcut commands will use your custom configurations.

We will also need to edit our snapshot commands, which we will use later on to jumpstart our `v2` network. Go to `core/packages/core-snapshot-cli` and open `package.json`. Once again we are interested in the scripts section.

```json
"scripts": {
    "start": "./bin/snapshot",
    "debug": "node --inspect-brk ./bin/snapshot",
    "create:mainnet": "./bin/snapshot create --config ../core/lib/config/mainnet --network mainnet",
    "create:devnet": "./bin/snapshot create --config ../core/lib/config/devnet --network devnet",
    "create:testnet": "./bin/snapshot create --config ../core/lib/config/testnet --network testnet",
    "import:mainnet": "./bin/snapshot import --config ../core/lib/config/mainnet --network mainnet",
    "import:devnet": "./bin/snapshot import --config ../core/lib/config/devnet --network devnet",
    "import:testnet": "./bin/snapshot import --config ../core/lib/config/testnet --network testnet",
    "verify:mainnet": "./bin/snapshot verify --config ../core/lib/config/mainnet --network mainnet",
    "verify:devnet": "./bin/snapshot verify --config ../core/lib/config/devnet --network devnet",
    "verify:testnet": "./bin/snapshot verify --config ../core/lib/config/testnet --network testnet",
    "rollback:mainnet": "./bin/snapshot rollback --config ../core/lib/config/mainnet --network mainnet",
    "rollback:devnet": "./bin/snapshot rollback --config ../core/lib/config/devnet --network devnet",
    "rollback:testnet": "./bin/snapshot rollback --config ../core/lib/config/testnet --network testnet",
    "truncate:mainnet": "./bin/snapshot truncate --config ../core/lib/config/mainnet --network mainnet",
    "truncate:devnet": "./bin/snapshot truncate --config ../core/lib/config/devnet --network devnet",
    "truncate:testnet": "./bin/snapshot truncate --config ../core/lib/config/testnet --network testnet",
    "test": "cross-env ARK_ENV=test jest --runInBand --detectOpenHandles",
    "test:coverage": "cross-env ARK_ENV=test jest --coverage --runInBand --detectOpenHandles",
    "test:debug": "cross-env ARK_ENV=test node --inspect-brk ../../node_modules/.bin/jest --runInBand --watch",
    "test:watch": "cross-env ARK_ENV=test jest --runInBand --watch",
    "test:watch:all": "cross-env ARK_ENV=test jest --runInBand --watchAll",
    "lint": "eslint ./ --fix"
  },
```

Add the following keys to the scripts section:

```json
"create:MyNet": "./bin/snapshot create --config ../core/lib/config/MyNet --network MyNet",
"import:MyNet": "./bin/snapshot import --config ../core/lib/config/MyNet --network MyNet",
"verify:MyNet": "./bin/snapshot verify --config ../core/lib/config/MyNet --network MyNet",
"rollback:MyNet": "./bin/snapshot rollback --config ../core/lib/config/MyNet --network MyNet",
"truncate:MyNet": "./bin/snapshot truncate --config ../core/lib/config/MyNet --network MyNet",
```

If you chose to override the existing `mainnet`, `testnet` and `devnet` configurations, you should omit this step.

Commit your changes and push them to your organizations' repository; your node operators may make these changes themselves, or clone the new configurations from this repository.

```bash
git remote set-url origin https://github.com/myorganization/mynet-v2.git
git push
```

## Syncing with the Existing Network

We are going to start a relay node, which is the equivalent of a standard `v1` node without entering your delegate's passphrase. First bootstrap all dependencies.

```bash
lerna bootstrap
```

This might take a while, as lerna obtains all dependencies required for `Ark Core`. Once the process is done, run the following command to start the synchronization process:

```bash
(cd packages/core && yarn start:MyNet)
```

Your node should now start and connect with the peers we set in our `peers.json`. It will take a few hours to a couple of days for the entire synchronization process to finalize, depending on the size of your blockchain.

All node operators, delegates and third-party services should do the same and create a `v2` node. Once enough participants are in sync, we can move to the next step.

## Migrating

::: warning

Once you proceed with the following steps, `v1` nodes will not be able to join your network, nor will you be able to downgrade the network.

:::

Ensure that during this phase, all delegates and node operators are communicating with you. First, we need to collect all peers running `v2` nodes, and create an updated `peers.json`. Remove all `v1` nodes from your peers list, and add the `v2` nodes. (Only add reliable nodes, for example, the ones curated by your team).

Once we are passed the cutoff block, all node operators should create a snapshot of their blockchain:

```bash
(cd packages/core-snapshot-cli && yarn create:MyNet)
```

Stop the running node process, and proceed to truncate the existing database:

```bash
(cd packages/core-snapshot-cli && yarn truncate:MyNet)
```

Now we must ban all `v1` nodes, by editing our `peers.json` file. Set the `minimumVersion` key to `">=2.0.15"`. We recommend committing this change to your repository after the migration is complete. Your `peers.json` should now only contain IP addresses of `v2` nodes and have the `minimumVersion` key set to something greater than 1.X.X.

Import the snapshot up to the cutoff block:

```bash
(cd packages/core-snapshot-cli && yarn import:devnet -b 0-$CUTOFF_BLOCK_HEIGHT)
```

Your blockchain will now be up to the cutoff point. Restart the nodes, either using `start:MyNet` or `relay:MyNet`. The forging process should restart, and your network has been upgraded to `v2`. Pop a bottle of champagne and wipe the sweat of your brow.

## Considerations

The upgrading process is a vulnerable stage in your blockchains lifecycle. Ensure the following:

- `genesisBlock.json` must be exactly the same as the `v1` genesis block. Have each node operator verify this themselves.
- Snapshots should not be shared during the upgrade process. If you do this, use this command instead to decrease the risk of a malicious participant corrupting the chain:

```bash
(cd packages/core-snapshot-cli && \
    yarn import:devnet -b 0-$CUTOFF_BLOCK_HEIGHT --signature-verify)
    # --signature-verify forces our node to check each block.
```

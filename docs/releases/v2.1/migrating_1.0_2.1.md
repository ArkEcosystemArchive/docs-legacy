# Migrating from v1.0 to v2.1

Shortly after the release of `v2.0`, Ark Core was rewritten in [TypeScript](https://www.typescriptlang.org/), a typed superset of JavaScript, well suited for large projects as it prevents an entire class of runtime bugs. If you are on `v1`, we recommend upgrading to `v2.1` and skipping `v2.0`.

The process is mostly the same, where we will port our custom configurations to the appropriate files, alter some defaults and then letting our `v2.1` nodes sync before excluding old nodes from our network.

[[toc]]

## Initial Preparation

Ensure you have correctly mapped all participants in your network. You should be able to answer the following questions:

- How many node operators are there, and am I able to contact all of them?
- Are services dependent on my network, such as exchanges or third party apps?

During the migrations, third-party providers and exchanges should ensure they stop accepting transactions, as there is a gap where the blockchain is possibly rolled back a few hundred blocks. Once the migration is completed, these services must ensure they are not on a forked network; it is best to wait a few hours to a day until everyone is sure a network consensus has been reached.

All node operators must cooperate in the migration. (Technically only > 50% of the delegates need to migrate. However, you should avoid a community split). We recommend having a dedicated slack channel, monitored by your team during the entire migration process, so that you may provide assistance.

Together with your node operators, it would be best if you decided on a cutoff block `height`, after this height, `v1` will no longer be supported in your BridgeChain, and services relying on `v1` nodes may break and should be considered unreliable. `v2.0` nodes, however, are still compatible with your network, and thus you may choose to keep support for these nodes.

::: tip
Experience teaches us that migrations are always troublesome and that supporting multiple versions can be quite a headache. We recommend forcing all node operators to upgrade to `v2.1`, instead of supporting both `v2.0` and `v2.1`.
:::

## Setting the BridgeChain Configuring

The new `v2.1` implementation is backward compatible with `v1`; thus we can deploy our new nodes without forcing a migration. Your BridgeChain configuration is defined by the following files, which we will use in our `v2.1` configuration as well.

- [config.mainnet.json](https://github.com/ArkEcosystem/ark-node/blob/mainnet/config.mainnet.json)
- [genesisBlock.json](https://github.com/ArkEcosystem/ark-node/blob/mainnet/genesisBlock.json)

Clone [Ark Core](https://github.com/arkecosystem/core) so that we can configure our network. Make sure to verify that you have the latest tag.

```bash
git clone git@github.com:arkecosystem/core
git checkout tags/<2.1.X> -b <branch_name>
cd core
```

Create a new directory in `packages/core/lib/config` for your BridgeChain configurations.

```bash
cd packages/core/src/config
mdkir MyNet
```

To configure `v2.1`, we will edit `core-p2p/src/defaults.ts` and add configuration files in our `MyNet` directory. If you look at a different network, `core/src/config/devnet` for example, you should see three files:

- **peers.json:** used by the node to find other existing nodes.
- **plugins.js:** contains constructor arguments for the different core plugins.
- **delegates.json:** holds the secrets for the initial virtualized delegates.

To us, `peers.json` is most relevant. The latter should look something like this:

```json
{
    "list": [
        {
            "ip": "167.114.29.51",
            "port": 4002
        },
        {
            "ip": "167.114.29.52",
            "port": 4002
        },
    ],
    "sources": ["https://raw.githubusercontent.com/ArkEcosystem/peers/master/devnet.json"]
}
```

The `list` specifies initial peers, which our node will use to [discover](https://en.wikipedia.org/wiki/Service_discovery) the other peers in our network. Add existing `v1` and `v2.0` nodes to your list. Make sure these nodes are reliable, preferably hosted by you and your team.

`plugins.js` contains default configurations for your node. These are not very relevant to the migration. Make sure to check the most up-to-date tag to get a correct version.

```js
module.exports = {
    "@arkecosystem/core-event-emitter": {},
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
    "@arkecosystem/core-database-postgres": {
        connection: {
            host: process.env.CORE_DB_HOST || "localhost",
            port: process.env.CORE_DB_PORT || 5432,
            database: process.env.CORE_DB_DATABASE || `${process.env.CORE_TOKEN}_${process.env.CORE_NETWORK_NAME}`,
            user: process.env.CORE_DB_USERNAME || process.env.CORE_TOKEN,
            password: process.env.CORE_DB_PASSWORD || "password",
        },
    },
    "@arkecosystem/core-transaction-pool": {
        enabled: !process.env.CORE_TRANSACTION_POOL_DISABLED,
        maxTransactionsPerSender: process.env.CORE_TRANSACTION_POOL_MAX_PER_SENDER || 300,
        allowedSenders: [],
        dynamicFees: {
            enabled: true,
            minFeePool: 1000,
            minFeeBroadcast: 1000,
            addonBytes: {
                transfer: 100,
                secondSignature: 250,
                delegateRegistration: 400000,
                vote: 100,
                multiSignature: 500,
                ipfs: 250,
                timelockTransfer: 500,
                multiPayment: 500,
                delegateResignation: 400000,
            },
        },
    },
    "@arkecosystem/core-p2p": {
        host: process.env.CORE_P2P_HOST || "0.0.0.0",
        port: process.env.CORE_P2P_PORT || 4002,
        minimumNetworkReach: 5,
        coldStart: 5,
    },
    "@arkecosystem/core-blockchain": {
        fastRebuild: false,
    },
    "@arkecosystem/core-api": {
        enabled: !process.env.CORE_API_DISABLED,
        host: process.env.CORE_API_HOST || "0.0.0.0",
        port: process.env.CORE_API_PORT || 4003,
        whitelist: ["*"],
    },
    "@arkecosystem/core-webhooks": {
        enabled: process.env.CORE_WEBHOOKS_ENABLED,
        server: {
            enabled: process.env.CORE_WEBHOOKS_API_ENABLED,
            host: process.env.CORE_WEBHOOKS_HOST || "0.0.0.0",
            port: process.env.CORE_WEBHOOKS_PORT || 4004,
            whitelist: ["127.0.0.1", "::ffff:127.0.0.1"],
        },
    },
    "@arkecosystem/core-graphql": {
        enabled: process.env.CORE_GRAPHQL_ENABLED,
        host: process.env.CORE_GRAPHQL_HOST || "0.0.0.0",
        port: process.env.CORE_GRAPHQL_PORT || 4005,
    },
    "@arkecosystem/core-forger": {
        hosts: [`http://127.0.0.1:${process.env.CORE_P2P_PORT || 4002}`],
    },
    "@arkecosystem/core-json-rpc": {
        enabled: process.env.CORE_JSON_RPC_ENABLED,
        host: process.env.CORE_JSON_RPC_HOST || "0.0.0.0",
        port: process.env.CORE_JSON_RPC_PORT || 8080,
        allowRemote: false,
        whitelist: ["127.0.0.1", "::ffff:127.0.0.1"],
    },
    "@arkecosystem/core-snapshots": {},
};
```

Your directory `MyNet` should now contain `peers.json` and `plugins.js`. If you use the terms `mainnet`, `devnet` and `testnet` in your BridgeChain, you should create configuration directories for each of these networks, overriding the existing directories.

### Crypto

::: tip

If you run your own network and have a custom token, these next steps are especially relevant.

:::

We also need to move our initial block definition, the genesisBlock, to the correct location. In previous versions it was stored alongside our other files, however, crypto related files now reside in `packages/crypto/src/networks/{NETWORK}`. This directory contains the following four files:

- **exceptions.json:** lists blocks and transactions which are exempt from validation rules, usually because of historic forks and vulnerabilities.
- **genesisBlock.json:** defines the very first block of your network, and from it, your `networkhash` is derived, as it is the header of the first block.
- **index.ts:** exports these crypto definitions as a module.
- **milestones.json:** defines networkwide configuration changes based on certain milestones; i.e. a global reward reduction when block 1000000 has been forged.
- **network.json:** contains your network specific variables. (some may also be set from your env.process).

::: warning
Ensure that your `genesisBlock.json` is exactly the same. Your `v2.1` node only connects with nodes that have the same `genesisBlock.json`.
:::

You can copy the `index.ts` and `network.json` from an existing directory (i.e., mainnet) and edit them appropriately. The `genesisBlock.json` must be copied from your original configurations to correctly derive a network hash and initial state. If you do not require an `exceptions.json`, copy the file anyway, and empty the keys:

#### exceptions.json

```json
{
    "blocks": [],
    "transactions": [
    ],
    "outlookTable": {
    },
    "transactionIdFixTable": {
    }
}
```

If your BridgeChain was created during `v1.0.X`, you most likely copied Ark's milestones. If not, edit this file according to your own milestones.

#### milestones.json

```json
[
    {
        "height": 1,
        "reward": 0,
        "activeDelegates": 51,
        "blocktime": 8,
        "block": {
            "version": 0,
            "maxTransactions": 50,
            "maxPayload": 2097152
        },
        "epoch": "2017-03-21T13:00:00.000Z",
        "fees": {
            "staticFees": {
                "transfer": 10000000,
                "secondSignature": 500000000,
                "delegateRegistration": 2500000000,
                "vote": 100000000,
                "multiSignature": 500000000,
                "ipfs": 0,
                "timelockTransfer": 0,
                "multiPayment": 0,
                "delegateResignation": 0
            }
        }
    },
    {
        "height": 75600,
        "reward": 200000000
    },
    {
        "height": 6600000,
        "block": {
            "maxTransactions": 150,
            "maxPayload": 6300000
        }
    }
]
```

### p2p

The final file of interest to us is `packages/core-p2p/src/defaults.ts`, which contains the default parameters our node will use for the internal [p2p API](/api/p2p/).

We are interested in the following section:

```ts
    /**
     * The minimum peer version we expect
     */
    minimumVersion: ">=2.1.0",
```

`minimumVersion` specifies the minimum acceptable version of other peers in our network. Since the network is currently at `v1`, change it to `">=1.0.0"`. We will later set `minimumVersion` back to `">=2.1.0"` to force older peers to exit the network.

Open `packages/core/package.json`. Here the common startup scripts are defined. You can read more on how these work in the [node lifecycle](/guidebook/core/node-lifecycle.md) section. We are interested in the `scripts` key.

```json
"scripts": {
    "prepublishOnly": "yarn test && yarn build",
        "pretest": "yarn lint && yarn build",
        "compile": "../../node_modules/typescript/bin/tsc",
        "build": "yarn clean && yarn compile",
        "build:watch": "yarn clean && yarn compile -w",
        "clean": "del dist",
        "docs": "../../node_modules/typedoc/bin/typedoc src --out docs",
        "lint": "../../node_modules/tslint/bin/tslint -c ../../tslint.json 'src/**/*.ts' '__tests__/**/*.ts' --fix",
        "debug:start": "node --inspect-brk node ./dist/index.js start",
        "debug:relay": "node --inspect-brk node ./dist/index.js relay",
        "debug:forger": "node --inspect-brk node ./dist/index.js forger",
        "debug:snapshot": "node --inspect-brk node ./dist/index.js snapshot",
        "start": "node ./dist/index.js start",
        "start:mainnet": "node ./dist/index.js start --config ./src/config/mainnet --network mainnet",
        "start:devnet": "node ./dist/index.js start --config ./src/config/devnet --network devnet",
        "start:testnet": "cross-env CORE_ENV=test node ./dist/index.js start --config ./src/config/testnet --network testnet",
        "start:testnet:live": "node ./dist/index.js start --config ./src/config/testnet.live --network testnet",
        "relay": "node ./dist/index.js relay",
        "relay:mainnet": "node ./dist/index.js relay --config ./src/config/mainnet --network mainnet",
        "relay:devnet": "node ./dist/index.js relay --config ./src/config/devnet --network devnet",
        "relay:testnet": "cross-env CORE_ENV=test node ./dist/index.js relay --config ./src/config/testnet --network testnet",
        "relay:testnet:live": "node ./dist/index.js relay --config ./src/config/testnet.live --network testnet",
        "forger": "node ./dist/index.js forger",
        "forger:mainnet": "node ./dist/index.js forger --config ./src/config/mainnet --network mainnet",
        "forger:devnet": "node ./dist/index.js forger --config ./src/config/devnet --network devnet",
        "forger:testnet": "cross-env CORE_ENV=test node ./dist/index.js forger --config ./src/config/testnet --network testnet",
        "forger:testnet:live": "node ./dist/index.js forger --config ./src/config/testnet.live --network testnet",
        "snapshot": "node ./dist/index.js snapshot",
        "snapshot:mainnet": "node ./dist/index.js snapshot --config ./src/config/mainnet --network mainnet",
        "snapshot:devnet": "node ./dist/index.js snapshot --config ./src/config/devnet --network devnet",
        "snapshot:testnet": "node ./dist/index.js snapshot --config ./src/config/testnet --network testnet",
        "snapshot:testnet:live": "node ./dist/index.js snapshot --config ./src/config/testnet.live --network testnet",
        "full:testnet": "cross-env CORE_ENV=test node ./dist/index.js start --config ./src/config/testnet --network testnet --network-start",
        "full:testnet:live": "node ./dist/index.js start --config ./src/config/testnet.live --network testnet --network-start",
        "full:testnet:2tier:2": "cross-env CORE_ENV=test node ./dist/index.js start --config ./src/config/testnet.2 --network testnet --network-start",
        "full:testnet:2tier:1": "cross-env CORE_ENV=test node ./dist/index.js start --config ./src/config/testnet.1 --network testnet --network-start",
        "full:testnet:2tier": "cross-env CORE_ENV=test node ./dist/index.js start --config ./src/config/testnet.1 --network testnet --network-start && node ./dist/index.js start --config ./src/config/testnet.2 --network testnet --network-start",
        "test": "cross-env CORE_ENV=test jest --runInBand --forceExit",
        "test:coverage": "cross-env CORE_ENV=test jest --coverage --coveragePathIgnorePatterns='/(defaults.ts|index.ts)$' --runInBand --forceExit",
        "test:debug": "cross-env CORE_ENV=test node --inspect-brk ../../node_modules/.bin/jest --runInBand",
        "test:watch": "cross-env CORE_ENV=test jest --runInBand --watch",
        "test:watch:all": "cross-env CORE_ENV=test jest --runInBand --watchAll",
        "updates": "../../node_modules/npm-check-updates/bin/npm-check-updates -a"
  },
```

Some of these commands use the `--config` option. This accepts a relative directory as its parameter, pointing to our pre-created configuration directories. If you altered the existing `mainnet`, `devnet` and `testnet` directories, these commands will now work with your configurations.

We will continue this guide using the name `MyNet`, as that means we cover all options and places to edit. Add the following lines to `scripts`:

```json
"start:MyNet": "node ./dist/index.js start --config ./src/config/MyNet --network MyNet",
"relay:MyNet": "node ./dist/index.js relay --config ./src/config/MyNet --network MyNet",
"forger:MyNet": "node ./dist/index.js forger --config ./src/config/MyNet --network MyNet",
"snapshot:MyNet": "node ./dist/index.js snapshot --config ./src/config/MyNet --network MyNet",
```

These shortcut commands will use your custom configurations.

We will also need to edit our snapshot commands, which we will use later on to jumpstart our `v2` network. Go to `core/packages/core-snapshot-cli` and open `package.json`. Once again we are interested in the scripts section.

```json
"scripts": {
    "prepublishOnly": "yarn test && yarn build",
    "pretest": "yarn lint && yarn build",
    "compile": "../../node_modules/typescript/bin/tsc",
    "build": "yarn clean && yarn compile",
    "build:watch": "yarn clean && yarn compile -w",
    "clean": "del dist",
    "docs": "../../node_modules/typedoc/bin/typedoc src --out docs",
    "lint": "../../node_modules/tslint/bin/tslint -c ../../tslint.json 'src/**/*.ts' '__tests__/**/*.ts' --fix",
    "start": "node ./dist/index.js",
    "debug": "node --inspect-brk ./dist/index.js",
    "create:mainnet": "node ./dist/index.js create --config ../core/src/config/mainnet --network mainnet",
    "create:devnet": "node ./dist/index.js create --config ../core/src/config/devnet --network devnet",
    "create:testnet": "node ./dist/index.js create --config ../core/src/config/testnet --network testnet",
    "import:mainnet": "node ./dist/index.js import --config ../core/src/config/mainnet --network mainnet",
    "import:devnet": "node ./dist/index.js import --config ../core/src/config/devnet --network devnet",
    "import:testnet": "node ./dist/index.js import --config ../core/src/config/testnet --network testnet",
    "verify:mainnet": "node ./dist/index.js verify --config ../core/src/config/mainnet --network mainnet",
    "verify:devnet": "node ./dist/index.js verify --config ../core/src/config/devnet --network devnet",
    "verify:testnet": "node ./dist/index.js verify --config ../core/src/config/testnet --network testnet",
    "rollback:mainnet": "node ./dist/index.js rollback --config ../core/src/config/mainnet --network mainnet",
    "rollback:devnet": "node ./dist/index.js rollback --config ../core/src/config/devnet --network devnet",
    "rollback:testnet": "node ./dist/index.js rollback --config ../core/src/config/testnet --network testnet",
    "truncate:mainnet": "node ./dist/index.js truncate --config ../core/src/config/mainnet --network mainnet",
    "truncate:devnet": "node ./dist/index.js truncate --config ../core/src/config/devnet --network devnet",
    "truncate:testnet": "node ./dist/index.js truncate --config ../core/src/config/testnet --network testnet",
    "updates": "../../node_modules/npm-check-updates/bin/npm-check-updates -a"
  },
```

Add the following keys to the scripts section:

```json
"create:MyNet": "node ./dist/index.js create --config ../core/src/config/MyNet --network MyNet",
"import:MyNet": "node ./dist/index.js import --config ../core/src/config/MyNet --network MyNet",
"verify:MyNet": "node ./dist/index.js verify --config ../core/src/config/MyNet --network MyNet",
"rollback:MyNet": "node ./dist/index.js rollback --config ../core/src/config/MyNet --network MyNet",
"truncate:MyNet": "node ./dist/index.js truncate --config ../core/src/config/MyNet --network MyNet",
```

If you chose to override the existing `mainnet`, `testnet` and `devnet` configurations, you should omit this step.

Commit your changes and push them to your organizations' repository; your node operators may make these changes themselves, or clone the new configurations from this repository.

```bash
git remote set-url origin https://github.com/myorganization/mynet.git
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

All node operators, delegates and third-party services should do the same and create a `v2.1` node. Once enough participants are in sync, we can move to the next step.

## Migrating

::: warning

Once you proceed with the following steps, `v1.0` and `v2.0` nodes will not be able to join your network, nor will you be able to downgrade the network.

:::

Ensure that during this phase, all delegates and node operators are communicating with you. First, we need to collect all peers running `v2.1` nodes, and create an updated `peers.json`. Remove all `v1` nodes from your peers list, and add the `v2.1` nodes. (Only add reliable nodes, for example, the ones curated by your team).

Once we are passed the cutoff block, all node operators should create a snapshot of their blockchain:

```bash
(cd packages/core-snapshot-cli && yarn create:MyNet)
```

Stop the running node process, and proceed to truncate the existing blockchain database:

```bash
(cd packages/core-snapshot-cli && yarn truncate:MyNet)
```

Now we must ban all `v1` and `v2.0` nodes, by editing our `peers.json` file. Set the `minimumVersion` key to `">=2.1.0"`. We recommend committing this change to your repository after the migration is complete. Your `peers.json` should now only contain IP addresses of `v2.1` nodes and have the `minimumVersion` key set to something greater than 2.1.0.

::: tip
If you want your network to consist of both `v2.0` and `v2.1` nodes, set `minimumVersion` to `">=2.0.0"`.
:::

Import the snapshot up to the cutoff block:

```bash
(cd packages/core-snapshot-cli && yarn import:devnet -b 0-$CUTOFF_BLOCK_HEIGHT)
```

Your blockchain will now be up to the cutoff point. Restart the nodes, either using `start:MyNet` or `relay:MyNet`. The forging process should restart, and your network has been upgraded to `v2.1`. Pop a bottle of champagne and wipe the sweat of your brow.

## Considerations

The upgrading process is a vulnerable stage in your blockchains lifecycle. Ensure the following:

- `genesisBlock.json` must be exactly the same as the `v1` genesis block. Have each node operator verify this themselves.
- Snapshots should not be shared during the upgrade process. If you do this, use this command instead to decrease the risk of a malicious participant corrupting the chain:

```bash
(cd packages/core-snapshot-cli && \
    yarn import:devnet -b 0-$CUTOFF_BLOCK_HEIGHT --signature-verify)
    # --signature-verify forces our node to check each block.
```

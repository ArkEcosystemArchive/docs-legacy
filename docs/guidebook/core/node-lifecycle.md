# Examining the Node Lifecycle

Let's take a look inside Ark Core to understand better what's happening behind the scenes when we install and start our relays and forgers. From the moment Core Commander pings our node awake to the moment our node is brought offline, we'll look at the behavior that all Ark nodes share and examine differences and commonalities between relays and forgers.

## Starting Our Node

Whether you're installing your node using Core Commander or pulling the source code directly from GitHub, at some point, all startup processes run through the `core` package. To better understand what this process looks like, let's take a look at some of the scripts available in the `core` package's `package.json`:

```json
"scripts": {
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
}
```

There are quite a few scripts here, but a closer look reveals considerable overlap in their functionality. Let's take a look at one of the commands in more detail:

```json
"relay:devnet": "./bin/ark relay --config ./lib/config/devnet --network devnet",
```

We can see from the script name (the part before the colon) that this is a script designed to start a relay node on ARK devnet. The actual body of the command (the part after the colon) begins with the segment `./bin/ark relay`. This segment essentially tells our node, or whichever process is running this script, to look inside the `bin` directory and launch the `relay` command located in the `ark` file.

The rest of this command specifies a pair of arguments to pass to the `relay` command:

- config: `./lib/config/devnet`. This specifies a folder in which the configuration files for our node can be found.
- network: `devnet`. This specifies that we want to run a `devnet` node, and not a `mainnet` or `testnet` node.

If you look again at the scripts posted above, you'll notice that all of them contain this same basic formula, with only minor differences from script to script. Scripts may start `relays`,  `forgers`,  `testnet` nodes or `mainnet` nodes.

Let's look at segments of the `bin/ark` file in greater detail:

```js
const app = require('commander')

app.version(require('../package.json').version)

app
  .command('start')
  .description('start a relay node and the forger')
  .option('-d, --data <data>', 'data directory', '~/.ark')
  .option('-c, --config <config>', 'core config', '~/.ark/config')
  .option('-t, --token <token>', 'token name', 'ark')
  .option('-n, --network <network>', 'token network')
  .option('-b, --bip38 <bip38>', 'forger bip38')
  .option('-p, --password <password>', 'forger password')
  .option('--network-start', 'force genesis network start', false)
  .action(async (options) => require('../lib/start-relay-and-forger')(options))
```

For the sake of brevity, I've only included the `start` command here. Looking through the [ark file](https://github.com/ArkEcosystem/core/blob/develop/packages/core/bin/ark), however, reveals that these commands have closely linked functionality, similar to the npm scripts we inspected earlier.

Breaking down what's happening here:

- At the top of the file, we declare an `app` variable that is loaded from `commander`, a [popular CLI package](https://www.npmjs.com/package/commander) for NodeJS.
- We define `version` is defined to ensure all nodes are on the same page, have the same dependencies, and so on.
- Next, we begin registering CLI commands into our `app` variable. Our first one is `start`, which starts a single node with both forger and relay capacities.
- After describing this command's functionality, we specify options that can be passed into the command at runtime, and we define default values to fall back upon should these options not be provided.
- Recall from our `npm` script that we passed in two values: `config` and `network`. In the case of `config`, this means that the value defined in our `npm` script will override the default, which in the code above is `~/.ark/config`.
- Because we did not pass in any other arguments, our command will assume the defaults in each case. Notably, this means that `~/.ark/` will be used as our data directory, and `ark` will be used as our token name.
- Other configurable options here include `bip38`, primarily intended for forgers to pass in their delegate information, and `network-start`, which is used when spinning up a network for the first time.
- Finally, we compile all of the options into a single JavaScript object, load the JS file located at `../lib/start-relay-and-forger`, and run the command inside with our options.

## Bootstrapping Our Container

::: tip
The container in this context does not refer to packaged software such as [Docker](https://www.docker.com/resources/what-container) or [rkt](https://coreos.com/rkt/). Ark Core may be deployed any number of ways.
:::

We see from the analysis above that ultimately, what we've done so far is define a bundle of options and pass them into the function exported by `start-relay-and-forger.js`. However, what does this function do exactly?

Let's take a look:

```js
'use strict'

const container = require('@arkecosystem/core-container')

/**
  * Start a node.
  * @param  {Object} options
  * @return {void}
  */
module.exports = async (options) => {
  await container.setUp(options, {
    options: {
      '@arkecosystem/core-p2p': {
        networkStart: options.networkStart
      },
      '@arkecosystem/core-blockchain': {
        networkStart: options.networkStart
      },
      '@arkecosystem/core-forger': {
        bip38: options.bip38,
        address: options.address,
        password: options.password
      }
    }
  })
}
```

We can see that this code only requires one external dependency: a `container` object, pulled in from the `core-container` package of Ark Core. In the exported function, we take the options given to us by the `start` command in the previous section and pass them as the first argument into `container.setUp()`. The second argument to `setUp` defines values that are particular to the type of node we want to run. As this particular file is used to start a full node with both forging and relay capacities, our setup here is fairly straightforward as we want to use the full range of functions provided by Ark Core. We tell our `p2p` and `blockchain` packages whether this is the first time our network is being started based on the `network-start` option mentioned earlier, and we pass our delegate authentication information to `forger` so it can forge our blocks properly.

To understand how this setup differs between forgers and relays, let's look at the `setUp` commands in the `start-forger` and `start-relay` files:

```js
// forger only
await container.setUp(options, {
    include: [
      '@arkecosystem/core-event-emitter',
      '@arkecosystem/core-config',
      '@arkecosystem/core-logger',
      '@arkecosystem/core-logger-winston',
      '@arkecosystem/core-forger'
    ],
    options: {
      '@arkecosystem/core-forger': {
        bip38: options.bip38 || process.env.ARK_FORGER_BIP38,
        address: options.address,
        password: options.password || process.env.ARK_FORGER_PASSWORD
      }
    }
  })

// relay only
await container.setUp(options, {
    exclude: ['@arkecosystem/core-forger'],
    options: {
      '@arkecosystem/core-blockchain': {
        networkStart: options.networkStart
      }
    }
  })
```

The forger setup contains an `include` key, which tells the container to **only** load those specific plugins. This ensures that the forger keeps a light footprint; performance is critical to ensure all blocks are forged, particularly on less powerful servers.

By contrast, the relay setup contains an `exclude` key, which tells the container not to run the `forger` package but to include everything else.

An immediate takeaway from this review is that, while functionality might differ considerably between relays and forgers, the process used to initiate them is nearly identical. For BridgeChains looking to implement custom node types, the setup process for doing so is reasonably streamlined: specify a different set of included or excluded plugins in your `container.setUp` function.

## Using the Container to Initialize Our Node

We'll dive more into the mechanics of `core-container` in a future Guidebook chapter, but for now, suffice it to say that the `container` contains our plugins. It creates the proper environment for our plugins to run in, determines which plugins should be loaded, and loads them.

To illustrate this, let's look inside our container package. You can find the source code [here](https://github.com/ArkEcosystem/core/blob/develop/packages/core-container/lib/container.js), or follow along below:

```js
// inside the Container class in container.js

const Environment = require('./environment')

...

async setUp (variables, options = {}) {
    this.env = new Environment(variables)
    this.env.setUp()

    if (options.skipPlugins) {
      return
    }

    this.plugins = new PluginRegistrar(this, options)
    await this.plugins.setUp()
}
```

The `setUp` method takes two parameters; both covered above: the `variables` parameter represents the options we defined in our CLI command, and the `options` parameter represents the node-specific setup outlined in the previous section.

Our CLI options are passed into an `Environment` object and loaded using another `setUp` function. Let's take a brief look at this object:

```js
module.exports = class Environment {
  /**
    * Create a new environment instance.
    * @param  {Object} variables
    * @return {void}
    */
  constructor (variables) {
    this.variables = variables
  }

  /**
    * Set up the environment variables.
    */
  setUp () {
    this.__exportPaths()
    this.__exportNetwork()
    this.__exportVariables()
  }
...
}
```

Without going too much into the implementation details, the `setUp` function here effectively takes care of binding values into our `process.env` object, which is a global object used throughout our Node application. You can read more about the `process.env` object [here](https://nodejs.org/api/process.html#process_process_env), but the SparkNotes is that the `Environment.setUp` method defines the following variables for use throughout our node:

- ARK_PATH_CONFIG: the path to our configuration directory, pulled in from our NPM script and dependent on the network our node is running on
- ARK_PATH_DATA: the path to our data directory, which defaults to `~/.ark`
- ARK_NETWORK: a stringified version of the `network.json` file in our ARK_PATH_CONFIG directory
- ARK_NETWORK_NAME: the `name` property from our `network.json` file

Additionally, here is where we load any environment variables defined in our node's `.env` file. This `.env` file, located in your ARK_PATH_DATA directory, is where you can specify many of the optional settings for your node: whether to enable webhooks, GraphQL, and so on. All optional settings are loaded into the environment here, after the essential environment variables listed above.

## Loading Our Plugins

With the proper environment now set up, we can begin fleshing out our node's central capacities using plugins. We can see from our `Container.setUp` method that plugins are initialized using the `PluginRegistrar` and setup using the Registrar's `setUp` method.

Using the snippets below or the source code [here](https://github.com/ArkEcosystem/core/blob/develop/packages/core-container/lib/registrars/plugin.js), let's look at the constructor and `setUp` methods for `PluginRegistrar`:

```js
module.exports = class PluginRegistrars {
  /**
    * Create a new plugin manager instance.
    * @param  {Container} container
    * @param  {Object} options
    */
  constructor (container, options = {}) {
    this.container = container
    this.plugins = this.__loadPlugins()
    this.resolvedPlugins = []
    this.options = options
    this.deregister = []
  }

  //...

  async setUp () {
    for (const [name, options] of Object.entries(this.plugins)) {
      await this.register(name, options)

      if (this.options.exit && this.options.exit === name) {
        break
      }
    }
  }
//...
}
```

A deep-dive into the functionality of the PluginRegistrar will be included in another Guidebook chapter, but let's look quickly at the `__loadPlugins` method invoked in the constructor:

```js
/**
    * Load plugins from any of the available files (plugins.js or plugins.json).
    * @return {[Object|void]}
    */
  __loadPlugins () {
    const files = ['plugins.js', 'plugins.json']

    for (const file of files) {
      const configPath = path.resolve(expandHomeDir(`${process.env.ARK_PATH_CONFIG}/${file}`))

      if (fs.existsSync(configPath)) {
        this.pluginsConfigPath = configPath

        return require(configPath)
      }
    }

    throw new Error('An invalid configuration was provided or is inaccessible due to it\'s security settings.')
    process.exit(1) // eslint-disable-line no-unreachable
  }
```

This method effectively checks for the presence of a `plugins` file in our config directory, either as a JavaScript or JSON file, and assigns the result to `this.plugins` if it exists. Otherwise, an error is thrown and our node exits.

In the `PluginRegistrar.setUp` method, we loop through this plugins property and register each plugin into our container according to the settings defined in the previous steps.

This is the step in our node's lifecycle where the node's most essential functions are loaded: from the Public API to the P2P API to the blockchain itself. All plugins are booted up upon their inclusion in the container through the plugin registrar. To get a sense of the order in which these plugins are loaded, we can look at the file that's returned by the `__loadPlugins` method. You can view the full source code [here](https://github.com/ArkEcosystem/core/blob/develop/packages/core/lib/config/devnet/plugins.js), but here's a snippet:

```js
module.exports = {
  '@arkecosystem/core-event-emitter': {},
  '@arkecosystem/core-config': {},
  '@arkecosystem/core-logger-winston': {
    transports: {
      console: {
        options: {
          level: process.env.ARK_LOG_LEVEL || 'debug'
        }
      },
      dailyRotate: {
        options: {
          level: process.env.ARK_LOG_LEVEL || 'debug',
          filename: process.env.ARK_LOG_FILE || `${process.env.ARK_PATH_DATA}/logs/core/${process.env.ARK_NETWORK_NAME}/%DATE%.log`
        }
      }
    }
  },
  '@arkecosystem/core-database-postgres': {
    connection: {
      host: process.env.ARK_DB_HOST || 'localhost',
      port: process.env.ARK_DB_PORT || 5432,
      database: process.env.ARK_DB_DATABASE || `ark_${process.env.ARK_NETWORK_NAME}`,
      user: process.env.ARK_DB_USERNAME || 'ark',
      password: process.env.ARK_DB_PASSWORD || 'password'
    }
  },
  // ... more plugins here ...
  '@arkecosystem/core-forger': {
    hosts: [`http://127.0.0.1:${process.env.ARK_P2P_PORT || 4002}`]
  },
  '@arkecosystem/core-json-rpc': {
    enabled: process.env.ARK_JSON_RPC_ENABLED,
    host: process.env.ARK_JSON_RPC_HOST || '0.0.0.0',
    port: process.env.ARK_JSON_RPC_PORT || 8080,
    allowRemote: false,
    whitelist: ['127.0.0.1', '::ffff:127.0.0.1'],
    database: {
      uri: process.env.ARK_JSON_RPC_DATABASE || `sqlite://${process.env.ARK_PATH_DATA}/database/json-rpc.sqlite`,
      options: {}
    }
  }
}
```

Note that the order in which the plugins appear in this file is the order in which they're loaded. The essential plugins are included at the top, such as our event emitter and our database, and that the plugins which depend on the essentials are loaded afterward.

For this reason, if you're writing custom plugins, be sure to add them in this file below any other plugins that must be loaded for yours to function as intended.

Typically, you should try to add your plugin to the bottom of this file, with one notable exception: replacing default plugins with your implementations. In this particular case, including your config as close as possible to that of the plugin you're overriding will ensure that subsequent plugins will work without a hitch.

## Shutting Down Our Node

While the steps outlined above are enough to get our node up and running, there's one process we haven't looked at yet: the shutdown process. Typically you'll want your nodes to run forever so they can relay or forge as necessary. However, whether in preparation for an upgrade or to troubleshoot technical problems, sometimes you've got to shut everything down.

Fortunately, `core-container` registers a handler in its constructor that's designed to handle shutdowns in such a way as to not corrupt any data. Let's take a look at [this handler](https://github.com/ArkEcosystem/core/blob/a71f007fe13e5465f2a5ecc20203ded04b2bc783/packages/core-container/lib/container.js#L203-L247):

```js
/**
* Handle any exit signals.
* @return {void}
*/
__registerExitHandler () {
let shuttingDown = false

const handleExit = async () => {
    if (shuttingDown) {
      return
    }

    shuttingDown = true

    const logger = this.resolvePlugin('logger')
    logger.info('EXIT handled, trying to shut down gracefully')
    logger.info('Stopping Ark Core')

    try {
      const database = this.resolvePlugin('database')
      if (database) {
        const emitter = this.resolvePlugin('event-emitter')

        // Notify plugins about shutdown
        emitter.emit('shutdown')

        // Wait for event to be emitted and give time to finish
        await delay(1000)

        // Save dirty wallets
        await database.saveWallets(false)
      }
    } catch (error) {
      console.log(error.stack)
    }

    await this.plugins.tearDown()

    process.exit()
  }

  // Handle exit events
  ['SIGINT', 'exit'].forEach(eventType => process.on(eventType, handleExit))
}
```

In the case of a shutdown, the following application flow occurs:

1. The logger announces the beginning of the shutdown process.
2. The container checks for the existence of a database.
3. If a database is found, a `shutdown` event is emitted to give plugins time to clean up. Otherwise, all errors are logged to the console.
4. After waiting for plugins to finish, all wallets are saved as-is into the database. If this wallet information is incorrect upon reload, the node will resync with its network until all conflicts are resolved.
5. All plugins are torn down using their `deregister` commands.
6. Finally, our process exits, terminating our node's functionality as it does so.

After establishing this application flow, we attach it to the `SIGINT` and `exit` events using NodeJS' `process.on` listening functionality. This ensures that proper shutdown protocols are triggered regardless of how our node is shut down.

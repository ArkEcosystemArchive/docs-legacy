# Examining the Node Lifecycle

Let's take a look inside ARK Core to understand better what's happening behind the scenes when we install and start our relays and forgers. From the moment Core Commander pings our node awake to the moment our node is brought offline, we'll look at the behavior that all ARK nodes share and examine differences and commonalities between relays and forgers.

## Starting Our Node

Whether you're installing your node using Core Commander or pulling the source code directly from GitHub, at some point, all startup processes run through the `core` package. To better understand what this process looks like, let's take a look at some of the scripts available in the `core` package's `package.json`:

```json
"scripts": {
    "ark": "./bin/run",
    "start:mainnet": "cross-env CORE_PATH_CONFIG=./bin/config/mainnet yarn ark core:run",
    "start:devnet": "cross-env CORE_PATH_CONFIG=./bin/config/devnet yarn ark core:run",
    "start:testnet": "cross-env CORE_PATH_CONFIG=./bin/config/testnet CORE_ENV=test yarn ark core:run",
    "relay:mainnet": "cross-env CORE_PATH_CONFIG=./bin/config/mainnet yarn ark relay:run",
    "relay:devnet": "cross-env CORE_PATH_CONFIG=./bin/config/devnet yarn ark relay:run",
    "relay:testnet": "cross-env CORE_PATH_CONFIG=./bin/config/testnet CORE_ENV=test yarn ark relay:run",
    "forger:mainnet": "cross-env CORE_PATH_CONFIG=./bin/config/mainnet yarn ark forger:run",
    "forger:devnet": "cross-env CORE_PATH_CONFIG=./bin/config/devnet yarn ark forger:run",
    "forger:testnet": "cross-env CORE_PATH_CONFIG=./bin/config/testnet CORE_ENV=test yarn ark forger:run",
    "full:testnet": "cross-env CORE_PATH_CONFIG=./bin/config/testnet CORE_ENV=test yarn ark core:run --networkStart",
}
```

There are quite a few scripts here, but a closer look reveals considerable overlap in their functionality. Let's take a look at one of the commands in more detail:

```json
"relay:devnet": "cross-env CORE_PATH_CONFIG=./bin/config/devnet yarn ark relay:run",
```

We can see from the script name (the part before the colon) that this is a script designed to start a relay node on ARK devnet. The actual body of the command (the part after the colon) begins with the segment `yarn ark relay:run`. This segment essentially tells our node, or whichever process is running this script, to look inside the `bin` directory and launch the `relay:run` command located in the `src/commands/relay/run` file.

The rest of this command specifies a pair of arguments to pass to the `relay` command:

- config: `./bin/config/devnet`. This specifies a folder in which the configuration files for our node can be found.

If you look again at the scripts posted above, you'll notice that all of them contain this same basic formula, with only minor differences from script to script. Scripts may start `relays`, `forgers`, `testnet` nodes or `mainnet` nodes.

Let's look at the [relay:run](https://github.com/ARKEcosystem/core/blob/develop/packages/core/src/commands/relay/run.ts) command in greater detail:

```ts
import { app } from "@arkecosystem/core-container";
import { CommandFlags } from "../../types";
import { BaseCommand } from "../command";

export class RunCommand extends BaseCommand {
  public static description: string = "Run the relay (without pm2)";

  public static flags: CommandFlags = {
    ...BaseCommand.flagsNetwork,
    ...BaseCommand.flagsBehaviour
  };

  public async run(): Promise<void> {
    const { flags } = await this.parseWithNetwork(RunCommand);

    await this.buildApplication(app, flags, {
      exclude: ["@arkecosystem/core-forger"],
      options: {
        "@arkecosystem/core-p2p": this.buildPeerOptions(flags),
        "@arkecosystem/core-blockchain": {
          networkStart: flags.networkStart
        }
      }
    });
  }
}
```

For the sake of brevity, I've only included the `relay:run` command here. Looking through the [commands directory](https://github.com/ARKEcosystem/core/tree/develop/packages/core/src/commands), however, reveals that these commands have closely linked functionality, similar to the npm scripts we inspected earlier.

Breaking down what's happening here:

- We created a `RunCommand` which will be loaded by [oclif](https://oclif.io/) as `relay:run` because it is located in the `src/commands/relay` folder as `run.ts`.
- After describing this command's functionality, we specify options that can be passed into the command at runtime, and we define default values to fall back upon should these options not be provided.
- Recall from our `npm` script that we passed in the `CORE_PATH_CONFIG` environment variable. In the case of `config`, this means that the value defined in our `npm` script will override the default, which in the code above is `~/.config/ark-core/{network}`.
- Because we did not pass in any other arguments, our command will assume the defaults in each case. Notably, this means that `~/.local/share/ark-core/{network/` will be used as our data directory, and `ark` will be used as our token name.
- Other configurable options here include `bip38`, primarily intended for forgers to pass in their delegate information, and `network-start`, which is used when spinning up a network for the first time.
- Finally, we compile all of the options into a single JavaScript object, load the JS file located at `../lib/start-relay-and-forger`, and run the command inside with our options.

## Bootstrapping Our Container

::: tip
The container in this context does refer to IoC, not to packaged software such as [Docker](https://www.docker.com/resources/what-container) or [rkt](https://coreos.com/rkt/). ARK Core may be deployed any number of ways.
:::

We see from the analysis above that ultimately, what we've done so far is define a bundle of options and pass them to the CLI. However, what does this do exactly?

Let's take a look at the `buildApplication` method from the [BaseCommand](https://github.com/ARKEcosystem/core/blob/develop/packages/core/src/commands/command.ts#L91-L98):

```ts
protected async buildApplication(app, flags: CommandFlags, config: Options) {
    await app.setUp(version, flags, {
        ...{ skipPlugins: flags.skipPlugins },
        ...config,
    });

    return app;
}
```

We can see that this code only requires one external dependency: an `app` object, pulled in from the `core-container` package of ARK Core. In the exported function, we take the options given to us by the `relay:run` command in the previous section and pass them as the second argument into `app.setUp()`. The third argument to `setUp` defines values that are particular to the type of node we want to run. As this particular file is used to start a full node with both forging and relay capacities, our setup here is fairly straightforward as we want to use the full range of functions provided by ARK Core. We tell our `p2p` and `blockchain` packages whether this is the first time our network is being started based on the `network-start` option mentioned earlier, and we pass our delegate authentication information to `forger` so it can forge our blocks properly.

To understand how this setup differs between forgers and relays, let's look at the `buildApplication` call in the [forger:run](https://github.com/ARKEcosystem/core/blob/develop/packages/core/src/commands/forger/run.ts) command:

```ts
public async run(): Promise<void> {
    const { flags } = await this.parseWithNetwork(RunCommand);

    await this.buildApplication(app, flags, {
        include: [
            "@arkecosystem/core-event-emitter",
            "@arkecosystem/core-config",
            "@arkecosystem/core-logger",
            "@arkecosystem/core-logger-pino",
            "@arkecosystem/core-forger",
        ],
        options: {
            "@arkecosystem/core-forger": await this.buildBIP38(flags),
        },
    });
}
```

The forger setup contains an `include` key, which tells the container to **only** load those specific plugins. This ensures that the forger keeps a light footprint; performance is critical to ensure all blocks are forged, particularly on less powerful servers.

By contrast, the relay setup contains an `exclude` key, which tells the container not to run the `forger` package but to include everything else.

An immediate takeaway from this review is that, while functionality might differ considerably between relays and forgers, the process used to initiate them is nearly identical. For BridgeChains looking to implement custom node types, the setup process for doing so is reasonably streamlined: specify a different set of included or excluded plugins in your `app.setUp` function.

## Using the Container to Initialize Our Node

We'll dive more into the mechanics of `core-container` in a future Guidebook chapter, but for now, suffice it to say that the `container` contains our plugins. It creates the proper environment for our plugins to run in, determines which plugins should be loaded, and loads them.

To illustrate this, let's look inside our container package. You can find the source code [here](https://github.com/ARKEcosystem/core/blob/develop/packages/core-container/src/container.ts), or follow along below:

```ts
import { Environment } from "./environment";

...

public async setUp(version: string, variables: any, options: any = {}) {
    // Register any exit signal handling
    this.registerExitHandler(["SIGINT", "exit"]);

    // Set options and variables
    this.options = options;
    this.variables = variables;

    this.setVersion(version);

    // Register the environment variables
    const environment = new Environment(variables);
    environment.setUp();

    // Mainly used for testing environments!
    if (options.skipPlugins) {
        this.isReady = true;
        return;
    }

    // Setup the configuration
    this.config = await configManager.setUp(variables);

    // Setup the plugins
    this.plugins = new PluginRegistrar(this, options);
    await this.plugins.setUp();

    this.isReady = true;
}
```

The `setUp` method takes two parameters; both covered above: the `variables` parameter represents the options we defined in our CLI command, and the `options` parameter represents the node-specific setup outlined in the previous section.

Our CLI options are passed into an `Environment` object and loaded using another `setUp` function. Let's take a brief look at this object:

```ts
export class Environment {
  constructor(readonly variables: any) {}

  public setUp() {
    this.exportPaths();
    this.exportVariables();
  }

  // ...
}
```

Without going too much into the implementation details, the `setUp` function here effectively takes care of binding values into our `process.env` object, which is a global object used throughout our Node application. You can read more about the `process.env` object [here](https://nodejs.org/api/process.html#process_process_env), but the SparkNotes is that the `Environment.setUp` method defines the following variables for use throughout our node:

- CORE_PATH_CONFIG: the path to our configuration directory, pulled in from our NPM script and dependent on the network our node is running on
- CORE_PATH_DATA: the path to our data directory, which defaults to `~/.local/share/ark-core/{network}`
- CORE_NETWORK: a stringified version of the `network.json` file in our CORE_PATH_CONFIG directory
- CORE_NETWORK_NAME: the `name` property from our `network.json` file

Additionally, here is where we load any environment variables defined in our node's `.env` file. This `.env` file, located in your CORE_PATH_DATA directory, is where you can specify many of the optional settings for your node: whether to enable webhooks, GraphQL, and so on. All optional settings are loaded into the environment here, after the essential environment variables listed above.

## Loading Our Plugins

With the proper environment now set up, we can begin fleshing out our node's central capacities using plugins. We can see from our `Container.setUp` method that plugins are initialized using the `PluginRegistrar` and setup using the Registrar's `setUp` method.

Using the snippets below or the source code [here](https://github.com/ARKEcosystem/core/blob/develop/packages/core-container/src/registrars/plugin.ts), let's look at the constructor and `setUp` methods for `PluginRegistrar`:

```ts
import { asValue } from "awilix";
import Hoek from "hoek";
import isString from "lodash/isString";
import semver from "semver";

export class PluginRegistrar {
  private container: any;
  private plugins: any;
  private options: any;
  private deregister: any;

  constructor(container, options: any = {}) {
    this.container = container;
    this.plugins = container.config.get("plugins");
    this.options = this.__castOptions(options);
    this.deregister = [];
  }

  public async setUp() {
    for (const [name, options] of Object.entries(this.plugins)) {
      await this.register(name, options);

      if (
        (this.options.exit && this.options.exit === name) ||
        this.container.shuttingDown
      ) {
        break;
      }
    }
  }
}
```

In the `PluginRegistrar.setUp` method, we loop through this plugins property and register each plugin into our container according to the settings defined in the previous steps.

This is the step in our node's lifecycle where the node's most essential functions are loaded: from the Public API to the P2P API to the blockchain itself. All plugins are booted up upon their inclusion in the container through the plugin registrar. To get a sense of the order in which these plugins are loaded, we can look at the object that's returned by `container.config.get("plugins")`. You can view the full source code [here](https://github.com/ARKEcosystem/core/blob/develop/packages/core/bin/config/devnet/plugins.js), but here's a snippet:

```js
module.exports = {
  "@arkecosystem/core-event-emitter": {},
  "@arkecosystem/core-logger-pino": {},
  "@arkecosystem/core-database-postgres": {
    connection: {
      host: process.env.CORE_DB_HOST || "localhost",
      port: process.env.CORE_DB_PORT || 5432,
      database:
        process.env.CORE_DB_DATABASE ||
        `${process.env.CORE_TOKEN}_${process.env.CORE_NETWORK_NAME}`,
      user: process.env.CORE_DB_USERNAME || process.env.CORE_TOKEN,
      password: process.env.CORE_DB_PASSWORD || "password"
    }
  },
  "@arkecosystem/core-transaction-pool": {
    enabled: !process.env.CORE_TRANSACTION_POOL_DISABLED,
    maxTransactionsPerSender:
      process.env.CORE_TRANSACTION_POOL_MAX_PER_SENDER || 300,
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
        delegateResignation: 400000
      }
    }
  },
  "@arkecosystem/core-p2p": {
    host: process.env.CORE_P2P_HOST || "0.0.0.0",
    port: process.env.CORE_P2P_PORT || 4002,
    minimumNetworkReach: 5,
    coldStart: 5
  },
  "@arkecosystem/core-blockchain": {},
  "@arkecosystem/core-api": {
    enabled: !process.env.CORE_API_DISABLED,
    host: process.env.CORE_API_HOST || "0.0.0.0",
    port: process.env.CORE_API_PORT || 4003,
    whitelist: ["*"]
  },
  "@arkecosystem/core-forger": {
    hosts: [`http://127.0.0.1:${process.env.CORE_P2P_PORT || 4002}`]
  },
  "@arkecosystem/core-snapshots": {}
};
```

Note that the order in which the plugins appear in this file is the order in which they're loaded. The essential plugins are included at the top, such as our event emitter and our database, and that the plugins which depend on the essentials are loaded afterward.

For this reason, if you're writing custom plugins, be sure to add them in this file below any other plugins that must be loaded for yours to function as intended.

Typically, you should try to add your plugin to the bottom of this file, with one notable exception: replacing default plugins with your implementations. In this particular case, including your config as close as possible to that of the plugin you're overriding will ensure that subsequent plugins will work without a hitch.

## Shutting Down Our Node

While the steps outlined above are enough to get our node up and running, there's one process we haven't looked at yet: the shutdown process. Typically you'll want your nodes to run forever so they can relay or forge as necessary. However, whether in preparation for an upgrade or to troubleshoot technical problems, sometimes you've got to shut everything down.

Fortunately, `core-container` registers a handler in its constructor that's designed to handle shutdowns in such a way as to not corrupt any data. Let's take a look at [this handler](https://github.com/ARKEcosystem/core/blob/develop/packages/core-container/src/container.ts#L239-L281):

```ts
private registerExitHandler(exitEvents: string[]) {
    const handleExit = async () => {
        if (this.shuttingDown || !this.isReady) {
            return;
        }

        this.shuttingDown = true;

        const logger = this.resolvePlugin<Logger.ILogger>("logger");
        if (logger) {
            logger.suppressConsoleOutput(this.silentShutdown);
            logger.info("Core is trying to gracefully shut down to avoid data corruption");
        }

        try {
            /* TODO: core-database-postgres has a dep on core-container. Yet we have code in core-container fetching a reference to core-database-postgres.
            If we try to import core-database-postgres types, we create a circular dependency: core-container -> core-database-postgres -> core-container.
            The only thing we're doing here is trying to save the wallets upon shutdown. The code can and should be moved into core-database-postgres instead
            and leverage either the plugins `tearDown` method or the event-emitter's 'shutdown' event
              */
            const database = this.resolvePlugin("database");
            if (database) {
                const emitter = this.resolvePlugin<EventEmitter.EventEmitter>("event-emitter");

                // Notify plugins about shutdown
                emitter.emit("shutdown");

                // Wait for event to be emitted and give time to finish
                await delay(1000);
            }
        } catch (error) {
            // tslint:disable-next-line:no-console
            console.error(error.stack);
        }

        await this.plugins.tearDown();

        process.exit();
    };

    // Handle exit events
    exitEvents.forEach(eventType => process.on(eventType as any, handleExit));
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

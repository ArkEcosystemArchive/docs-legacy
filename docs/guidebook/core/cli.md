---
title: "Command Line Interface"
---

# Command Line Interface

[[toc]]

## Installation

Since Version 2.2.0 we distribute the ARK Core as an npm package, which has to be globally installed, which provides a built-in CLI.

### Prerequisites

In the next sections we will run you through an automated setup of a new server with a Core installation at the end of it but if you prefer to do a manual setup, take a look at [install.sh](https://raw.githubusercontent.com/ARKEcosystem/core/develop/install.sh) to see what dependencies need to be installed and configured.

**A global `pm2` installation is required as the CLI uses it to manage processes. Take a look at the [process manager](https://github.com/ARKEcosystem/core/blob/master/packages/core/src/process-manager.ts) to see how it works under the hood.**

### Existing Installation

If you are already owning a server that runs Core 2.1.0 or newer you can simply execute the following command.

```bash
yarn global add @arkecosystem/core
```

This command might take a while since all packages and dependencies need to be installed as well.

Once this command has finished you should stop all your existing core processes with `pm2 delete all` and start new ones with one of the commands that are documented further down on this page. If you are having any issues with the CLI, head down to the **Troubleshoot** section which covers the most common issues we know about.

### Fresh Installation

If you are planning to setup a new server you can execute the following steps.

```bash
adduser ark
usermod -aG sudo ark
su ark
cd ~
bash <(curl -s https://raw.githubusercontent.com/ARKEcosystem/core/master/install.sh)
```

Once this command has finished you should start your relay and forger with one of the commands that are documented further down on this page. If you are having any issues with the CLI, head down to the **Troubleshoot** section which covers the most common issues we know about.

> You can check [https://www.npmjs.com/package/@arkecosystem/core](https://www.npmjs.com/package/@arkecosystem/core) for new releases or use `ark update` to check for updates.

## Configuration

Before you can start using ARK Core you will need to publish the configuration of the network you wish to operate on.

```bash
ark config:publish
```

This will bring up an interactive UI which will ask a few questions to help you with the setup process. Once you have published the configuration you can start using the CLI. It will automatically detect which network you have configured.

## Troubleshooting

Most of the issues you will encounter are related to `pm2` not properly responding so the first thing you can try is to kill your pm2 daemon and refresh it.

```shell
pm2 kill && pm2 cleardump && pm2 reset
```

If this doesn't help, read the known issues below and see if any of those solve your issues.

### Command Not Found

If you are receiving a message to the effect of `ark command not found` your bash environment most likely doesn't have the yarn bin path registered. Execute the following command to resolve the issue.

`echo 'export PATH=$(yarn global bin):$PATH' >> ~/.bashrc && source ~/.bashrc`

If you are using a shell other then the default bash, like zsh, you will need to replace `~/.bashrc` with `~/.zshrc`.

### Process Fails to Start After Update

If the processes fail to start or restart after an update it is most likely an issue with pm2. Running `pm2 update` should usually resolve the issue.

If this doesn't resolve the issue you should run `pm2 delete all && ark relay:start && pm2 logs`, also `ark forger:start` if you are a delegate.

### Process Has Entered an Unknown State

If you are receiving a message to the effect of `The "..." process has entered an unknown state.` your pm2 instance is not responding properly. This is usually resolved by a simple `pm2 update`, if that doesn't help try `pm2 kill` to destroy the pm2 daemon so it gets restarted the next time an application tries to access it.

## Available Commands

### autocomplete

You might be used to tab completion, which the ARK CLI does support. Using this command does not configure autocompletion, but does show you instructions.

#### Usage

```bash
ark autocomplete
```

### config:cli

Configure the CLI

#### Usage

```bash
ark config:cli
```

#### Flags

| Name      | Description                                  | Required |
| :-------- | :------------------------------------------- | :------: |
| --token   | the name of the token that should be used    |   :x:    |
| --channel | the npm registry channel that should be used |   :x:    |

#### Examples

##### Use the "mine" token for configuration

```bash
ark config:cli --token="mine"
```

##### Switch to the Beta Channel

```bash
ark config:cli --channel="beta"
```

### config:database

Configure the database

#### Usage

```bash
ark config:database
```

::: tip
Omitting all flags will start the configuration in an interactive mode.
:::

#### Flags

| Name       | Description                                       | Required |
| :--------- | :------------------------------------------------ | :------: |
| --host     | the host of the database                          |   :x:    |
| --port     | the port of the database                          |   :x:    |
| --database | the name of the database that should be used      |   :x:    |
| --username | the name of the database user                     |   :x:    |
| --password | the password for the database that should be used |   :x:    |
| --network  | the name of the network that should be used       |   :x:    |
| --token    | the name of the token that should be used         |   :x:    |

#### Examples

```bash
ark config:database --host=localhost --port=5432 --database=ark_mainnet --username=ark --password=password
```

### config:forger

Configure the forging delegate

#### Usage

```bash
ark config:forger
```

::: tip
Omitting all flags will start the configuration in an interactive mode.
:::

#### Flags

| Name       | Description                                      | Required |
| :--------- | :----------------------------------------------- | :------: |
| --bip39    | the plain text bip39 passphrase                  |   :x:    |
| --password | the password for the encrypted bip38             |   :x:    |
| --method   | the configuration method to use (bip38 or bip39) |   :x:    |
| --network  | the name of the network that should be used      |   :x:    |
| --token    | the name of the token that should be used        |   :x:    |

#### Examples

##### Configure a Delegate Using an Encrypted BIP38

```bash
ark config:forger --method=bip38 --bip39="..." --password="..."
```

##### Configure a Delegate Using a BIP39 Passphrase

```bash
ark config:forger --method=bip39 --bip39="..."
```

### config:forger:bip38

Configure a delegate using an encrypted BIP38

#### Usage

```bash
ark config:forger:bip38
```

#### Flags

| Name       | Description                                 |      Required      |
| :--------- | :------------------------------------------ | :----------------: |
| --bip39    | the plain text bip39 passphrase             | :white_check_mark: |
| --password | the password for the encrypted bip38        | :white_check_mark: |
| --network  | the name of the network that should be used |        :x:         |
| --token    | the name of the token that should be used   |        :x:         |

#### Examples

```bash
ark config:forger:bip38 --bip38="..." --password="..."
```

### config:forger:bip39

Configure a delegate using a BIP39 passphrase

#### Usage

```bash
ark config:forger:bip39
```

#### Flags

| Name      | Description                                 |      Required      |
| :-------- | :------------------------------------------ | :----------------: |
| --bip39   | the plain text bip39 passphrase             | :white_check_mark: |
| --network | the name of the network that should be used |        :x:         |
| --token   | the name of the token that should be used   |        :x:         |

#### Examples

```bash
ark config:forger:bip39 --bip39="..."
```

### config:publish

Publish the configuration

#### Usage

```bash
ark config:publish
```

#### Flags

| Name      | Description                                 | Required |
| :-------- | :------------------------------------------ | :------: |
| --network | the name of the network that should be used |   :x:    |
| --token   | the name of the token that should be used   |   :x:    |

#### Examples

##### Publish the Configuration

```bash
ark config:publish
```

### config:reset

Reset the configuration

#### Usage

```bash
ark config:reset
```

#### Flags

| Name      | Description                                 | Required |
| :-------- | :------------------------------------------ | :------: |
| --network | the name of the network that should be used |   :x:    |
| --token   | the name of the token that should be used   |   :x:    |

#### Examples

##### Reset the Configuration for the Mainnet Network

```bash
ark config:reset --network=mainnet
```

### core:log

Show the core log

#### Usage

```bash
ark core:log
```

#### Flags

| Name      | Description                                 | Required |
| :-------- | :------------------------------------------ | :------: |
| --error   | only show error output                      |   :x:    |
| --network | the name of the network that should be used |   :x:    |
| --token   | the name of the token that should be used   |   :x:    |

#### Examples

```bash
ark core:log
```

### core:restart

Restart the core

#### Usage

```bash
ark core:restart
```

#### Flags

| Name      | Description                                 | Required |
| :-------- | :------------------------------------------ | :------: |
| --network | the name of the network that should be used |   :x:    |
| --token   | the name of the token that should be used   |   :x:    |

#### Examples

##### Restart the Core

```bash
ark core:restart
```

### core:start

Start the core

#### Usage

```bash
ark core:start
```

#### Flags

| Name                        | Description                                                      | Required |
| :-------------------------- | :--------------------------------------------------------------- | :------: |
| --bip39                     | the plain text bip39 passphrase                                  |   :x:    |
| --bip38                     | the encrypted bip38                                              |   :x:    |
| --password                  | the password for the encrypted bip38                             |   :x:    |
| --[no-]daemon               | start the process as a pm2 daemon                                |   :x:    |
| --disableDiscovery          | permanently disable any peer discovery                           |   :x:    |
| --ignoreMinimumNetworkReach | ignore the minimum network reach on start                        |   :x:    |
| --launchMode                | the mode the relay will be launched in (seed only at the moment) |   :x:    |
| --networkStart              | indicate that this is the first start of seeds                   |   :x:    |
| --skipDiscovery             | skip the initial peer discovery                                  |   :x:    |
| --network                   | the name of the network that should be used                      |   :x:    |
| --token                     | the name of the token that should be used                        |   :x:    |

#### Examples

##### Run Core With a Daemon

```bash
ark core:start
```

##### Run Core as Genesis

```bash
ark core:start --networkStart
```

##### Disable Any Discovery by Other Peers

```bash
ark core:start --disableDiscovery
```

##### Skip the Initial Discovery

```bash
ark core:start --skipDiscovery
```

##### Ignore the Minimum Network Reach

```bash
ark core:start --ignoreMinimumNetworkReach
```

##### Start a Seed

```bash
ark core:start --launchMode=seed
```

##### Run Core Without a Daemon

```bash
ark core:start --no-daemon
```

or use the following command, which supports the same set of flags.:

```bash
ark core:run
```

### core:stop

Stop the core

#### Usage

```bash
ark core:stop
```

#### Flags

| Name      | Description                                 | Required |
| :-------- | :------------------------------------------ | :------: |
| --daemon  | stop the process or pm2 daemon              |   :x:    |
| --network | the name of the network that should be used |   :x:    |
| --token   | the name of the token that should be used   |   :x:    |

#### Examples

##### Stop the Core

```bash
ark core:stop
```

##### Stop the Core Daemon

```bash
ark core:stop --daemon
```

### env:get

Get the value of an environment variable

#### Usage

```bash
ark env:get KEY
```

#### Flags

| Name      | Description                                 | Required |
| :-------- | :------------------------------------------ | :------: |
| --network | the name of the network that should be used |   :x:    |
| --token   | the name of the token that should be used   |   :x:    |

#### Examples

##### Get the Log Level

```bash
ark env:get CORE_LOG_LEVEL
```

### env:list

List all environment variables

#### Usage

```bash
ark env:list
```

#### Flags

| Name      | Description                                 | Required |
| :-------- | :------------------------------------------ | :------: |
| --network | the name of the network that should be used |   :x:    |
| --token   | the name of the token that should be used   |   :x:    |

#### Examples

##### List All Environment Variables

```bash
ark env:list
```

### env:paths

Get all of the environment paths

#### Usage

```bash
ark env:paths
```

#### Flags

| Name      | Description                                 | Required |
| :-------- | :------------------------------------------ | :------: |
| --network | the name of the network that should be used |   :x:    |
| --token   | the name of the token that should be used   |   :x:    |

#### Examples

##### List All Environment Paths

```bash
ark env:paths
```

### env:set

Set the value of an environment variable

#### Usage

```bash
ark env:set KEY VALUE
```

#### Flags

| Name      | Description                                 | Required |
| :-------- | :------------------------------------------ | :------: |
| --network | the name of the network that should be used |   :x:    |
| --token   | the name of the token that should be used   |   :x:    |

#### Examples

##### Set the Log Level

```bash
ark env:set CORE_LOG_LEVEL info
```

### forger:log

Show the forger log

#### Usage

```bash
ark forger:log
```

#### Flags

| Name      | Description                                 | Required |
| :-------- | :------------------------------------------ | :------: |
| --error   | only show error output                      |   :x:    |
| --network | the name of the network that should be used |   :x:    |
| --token   | the name of the token that should be used   |   :x:    |

#### Examples

```bash
ark forger:log
```

### forger:restart

Restart the forger

#### Usage

```bash
ark forger:restart
```

#### Flags

| Name      | Description                                 | Required |
| :-------- | :------------------------------------------ | :------: |
| --network | the name of the network that should be used |   :x:    |
| --token   | the name of the token that should be used   |   :x:    |

#### Examples

##### Restart the Forger

```bash
ark forger:restart
```

### forger:start

Start the forger

#### Usage

```bash
ark forger:start
```

or the equivalent, without invoking pm2:

```bash
ark forger:run
```

#### Flags

| Name          | Description                                 | Required |
| :------------ | :------------------------------------------ | :------: |
| --bip39       | the plain text bip39 passphrase             |   :x:    |
| --bip38       | the encrypted bip38                         |   :x:    |
| --password    | the password for the encrypted bip38        |   :x:    |
| --[no-]daemon | start the process as a pm2 daemon           |   :x:    |
| --network     | the name of the network that should be used |   :x:    |
| --token       | the name of the token that should be used   |   :x:    |

#### Examples

##### Run a Forger With a bip39 Passphrase

```bash
ark forger:start --bip39="..."
```

##### Run a Forger With an Encrypted bip38

```bash
ark forger:start --bip38="..." --password="..."
```

##### Run a Forger Without a Daemon

```bash
ark forger:start --no-daemon
```

### forger:stop

Stop the forger

#### Usage

```bash
ark forger:stop
```

#### Flags

| Name      | Description                                 | Required |
| :-------- | :------------------------------------------ | :------: |
| --daemon  | stop the process or pm2 daemon              |   :x:    |
| --network | the name of the network that should be used |   :x:    |
| --token   | the name of the token that should be used   |   :x:    |

#### Examples

##### Stop the Forger

```bash
ark forger:stop
```

##### Stop the Forger Daemon

```bash
ark forger:stop --daemon
```

### forger:status

Show the forger status.

#### Usage

```bash
ark forger:status
```

#### Flags

| Name      | Description                                 | Required |
| :-------- | :------------------------------------------ | :------: |
| --network | the name of the network that should be used |   :x:    |
| --token   | the name of the token that should be used   |   :x:    |

#### Example

```bash
ark forger:status
```

### relay:log

Show the relay log

#### Usage

```bash
ark relay:log
```

#### Flags

| Name      | Description                                 | Required |
| :-------- | :------------------------------------------ | :------: |
| --error   | only show error output                      |   :x:    |
| --network | the name of the network that should be used |   :x:    |
| --token   | the name of the token that should be used   |   :x:    |

#### Examples

```bash
ark relay:log
```

### relay:restart

Restart the relay

#### Usage

```bash
ark relay:restart
```

#### Flags

| Name      | Description                                 | Required |
| :-------- | :------------------------------------------ | :------: |
| --network | the name of the network that should be used |   :x:    |
| --token   | the name of the token that should be used   |   :x:    |

#### Examples

##### Restart the Relay

```bash
ark relay:restart
```

### relay:start

Start the relay

#### Usage

```bash
ark relay:start
```

or the equivalent without using pm2:

```bash
ark relay:run
```

#### Flags

| Name                        | Description                                                      | Required |
| :-------------------------- | :--------------------------------------------------------------- | :------: |
| --[no-]daemon               | start the process as a pm2 daemon                                |   :x:    |
| --disableDiscovery          | permanently disable any peer discovery                           |   :x:    |
| --ignoreMinimumNetworkReach | ignore the minimum network reach on start                        |   :x:    |
| --launchMode=launchMode     | the mode the relay will be launched in (seed only at the moment) |   :x:    |
| --networkStart              | indicate that this is the first start of seeds                   |   :x:    |
| --skipDiscovery             | skip the initial peer discovery                                  |   :x:    |
| --network                   | the name of the network that should be used                      |   :x:    |
| --token                     | the name of the token that should be used                        |   :x:    |

#### Examples

##### Run a Relay With a pm2 Daemon

```bash
ark relay:start --network=mainnet
```

##### Run a Genesis Relay

```bash
ark relay:start --networkStart
```

##### Disable Any Discovery by Other Peers

```bash
ark relay:start --disableDiscovery
```

##### Skip the Initial Discovery

```bash
ark relay:start --skipDiscovery
```

##### Ignore the Minimum Network Reach

```bash
ark relay:start --ignoreMinimumNetworkReach
```

##### Start a Seed

```bash
ark relay:start --launchMode=seed
```

##### Run a Relay Without a Daemon

```bash
ark relay:start --no-daemon
```

### relay:stop

Stop the relay

#### Usage

```bash
ark relay:stop
```

#### Flags

| Name      | Description                                 | Required |
| :-------- | :------------------------------------------ | :------: |
| --daemon  | stop the process or pm2 daemon              |   :x:    |
| --network | the name of the network that should be used |   :x:    |
| --token   | the name of the token that should be used   |   :x:    |

#### Examples

##### Stop the Relay

```bash
ark relay:stop
```

##### Stop the Relay Daemon

```bash
ark relay:stop --daemon
```

### top

List all core daemons

#### Usage

```bash
ark top
```

#### Examples

##### List All Core Daemons

```bash
ark top
```

### snapshot:dump

Create a dump of the database

#### Usage

```bash
ark snapshot:dump
```

#### Flags

| Name              | Description                                     | Required |
| :---------------- | :---------------------------------------------- | :------: |
| --blocks          | blocks to append to, correlates to folder name  |   :x:    |
| --start           | [default: -1] start network height to export    |   :x:    |
| --end             | [default: -1] end network height to export      |   :x:    |
| --skipCompression | skip gzip compression                           |   :x:    |
| --trace           | dumps generated queries and settings to console |   :x:    |
| --network         | the name of the network that should be used     |   :x:    |
| --token           | the name of the token that should be used       |   :x:    |

### snapshot:restore

Restore the database from a dump

#### Usage

```bash
ark snapshot:restore
```

#### Flags

| Name               | Description                                     | Required |
| :----------------- | :---------------------------------------------- | :------: |
| --verifySignatures | signature verification                          |   :x:    |
| --skipRestartRound | skip revert to current round                    |   :x:    |
| --blocks           | blocks to append to, correlates to folder name  |   :x:    |
| --start            | [default: -1] start network height to export    |   :x:    |
| --end              | [default: -1] end network height to export      |   :x:    |
| --skipCompression  | skip gzip compression                           |   :x:    |
| --trace            | dumps generated queries and settings to console |   :x:    |
| --network          | the name of the network that should be used     |   :x:    |
| --token            | the name of the token that should be used       |   :x:    |

### snapshot:rollback

Roll back the database to a specific height or by a specified number of blocks

#### Usage

```bash
ark snapshot:rollback
```

#### Flags

::: warning
Either `height` or `number` has to be provided.
:::

| Name      | Description                                     |        Required         |
| :-------- | :---------------------------------------------- | :---------------------: |
| --height  | block network height number to roll back to     | :ballot_box_with_check: |
| --number  | number of blocks to roll back                   | :ballot_box_with_check: |
| --trace   | dumps generated queries and settings to console |           :x:           |
| --network | the name of the network that should be used     |           :x:           |
| --token   | the name of the token that should be used       |           :x:           |

### snapshot:truncate

Truncate the database

#### Usage

```bash
ark snapshot:truncate
```

| Name      | Description                                 | Required |
| :-------- | :------------------------------------------ | :------: |
| --network | the name of the network that should be used |   :x:    |
| --token   | the name of the token that should be used   |   :x:    |

### snapshot:verify

Create a new snapshot

#### Usage

```bash
ark snapshot:verify
```

#### Flags

| Name               | Description                                     | Required |
| :----------------- | :---------------------------------------------- | :------: |
| --verifySignatures | signature verification                          |   :x:    |
| --blocks           | blocks to append to, correlates to folder name  |   :x:    |
| --start            | [default: -1] start network height to export    |   :x:    |
| --end              | [default: -1] end network height to export      |   :x:    |
| --skipCompression  | skip gzip compression                           |   :x:    |
| --trace            | dumps generated queries and settings to console |   :x:    |
| --network          | the name of the network that should be used     |   :x:    |
| --token            | the name of the token that should be used       |   :x:    |

## Plugins

Core itself is composed of multiple plugins that once stitched together provide the full system needed to interact with the ARK blockchain but any developer can create their own plugins and publish them.

### Publishment

The first step to make your plugin available to the world after completing development is to publish it to the npm regsitry. We recommend to use `yarn` for this, check the [official step-by-step guide](https://yarnpkg.com/lang/en/docs/publishing-a-package/) by the yarn team.

### Integration

Once your plugin is published it will be available to everyone via `yarn add`. Let's use the official, but optional, package `@arkecosystem/core-vote-report` as an example of how to install and configure a plugin.

#### Installation

First we will need to install the package using `yarn global add`. Since Release `2.2.0` Core is a global package that exposes a CLI, this is why we need to use `yarn global add` instead of `yarn add`, which is meant to be used during development.

```
yarn global add @arkecosystem/core-vote-report
```

Give it a second to download and install the plugin, once finished you can continue to the registration and configuration.

#### Configuration

Now that the plugin is downloaded and installed we can go ahead and register it in our `~/.config/ark-core/{NETWORK}/plugins.js` file. Open the file in your editor of choice, append the following contents and save the changes.

```js
{
    // some plugins...
    "@arkecosystem/core-vote-report": {},
}
```

Now run `ark relay:restart` and visit `http://ip:4006/` and you should see a vote report, that's it.

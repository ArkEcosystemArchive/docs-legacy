---
title: "Command Line Interface (Beta)"
---

# Command Line Interface

::: danger
Release 2.2.0 is currently in beta.
:::

## Installation

Since Version 2.2.0 we distribute the Ark Core as an npm package, which has to be globally installed, that provides a built-in CLI.

```sh
yarn global add @arkecosystem/core@beta
```

You can check [https://www.npmjs.com/package/@arkecosystem/core](https://www.npmjs.com/package/@arkecosystem/core) for new releases or use `ark update` to check for updates.

## Configuration

Before you can start using Ark Core you will need to publish the configuration of the network you wish to operate on.

```sh
ark config:publish
```

This will bring up an interative UI which will ask a few questions to help you with the setup process.

> Once you have published the configuration you can start using the CLI. It will automatically detect which network you have configured.

## Available Commands

### config:forger

Configure the forging delegate

#### Usage

```sh
ark config:forger
```

#### Flags

```sh
--bip38=bip38                             the encrypted bip38
--bip39=bip39                             the plain text bip39 passphrase
--method=method                           the configuration method to use (bip38 or bip39)
--network=devnet|mainnet|testnet|unitnet  the name of the network that should be used
--password=password                       the password for the encrypted bip38
--token=token                             (required) [default: ark] the name of the token that should be used
```

| Name       | Description                                 | Required           |
| ---------- | ------------------------------------------- |:------------------:|
| --bip39    | the plain text bip39 passphrase             | :white_check_mark: |
| --password | the password for the encrypted bip38        | :white_check_mark: |
| --network  | the name of the network that should be used | :x:                |
| --token    | the name of the token that should be used   | :x:                |

#### Examples

##### Configure a delegate using an encrypted BIP38

```sh
ark config:forger --method=bip38 --bip38="..." --password="..."
```

##### Configure a delegate using a BIP39 passphrase

```sh
ark config:forger --method=bip39 --bip39="..."
```

### config:forger:bip38

Configure a delegate using an encrypted BIP38

#### Usage

```sh
ark config:forger:bip38
```

#### Flags

| Name       | Description                                 | Required           |
| ---------- | ------------------------------------------- |:------------------:|
| --bip39    | the plain text bip39 passphrase             | :white_check_mark: |
| --password | the password for the encrypted bip38        | :white_check_mark: |
| --network  | the name of the network that should be used | :x:                |
| --token    | the name of the token that should be used   | :x:                |

#### Examples

```sh
ark config:forger:bip38 --bip38="..." --password="..."
```

### config:forger:bip39

Configure a delegate using a BIP39 passphrase

#### Usage

```sh
ark config:forger:bip39
```

#### Flags

| Name       | Description                                 | Required           |
| ---------- | ------------------------------------------- |:------------------:|
| --bip39    | the plain text bip39 passphrase             | :white_check_mark: |
| --network  | the name of the network that should be used | :x:                |
| --token    | the name of the token that should be used   | :x:                |

#### Examples

```sh
ark config:forger:bip39 --bip39="..."
```

### config:publish

Publish the configuration

#### Usage

```sh
ark config:publish
```

#### Flags

| Name       | Description                                 | Required           |
| ---------- | ------------------------------------------- |:------------------:|
| --force    | force the configuration to be overwritten   | :x:                |
| --network  | the name of the network that should be used | :x:                |
| --token    | the name of the token that should be used   | :x:                |

#### Examples

##### Publish the configuration

```sh
ark config:publish
```

### config:reset

Reset the configuration

#### Usage

```sh
ark config:reset
```

#### Flags

| Name       | Description                                 | Required           |
| ---------- | ------------------------------------------- |:------------------:|
| --force    | force the configuration to be reset         | :x:                |
| --network  | the name of the network that should be used | :x:                |
| --token    | the name of the token that should be used   | :x:                |

#### Examples

##### Reset the configuration for the mainnet network

```sh
ark config:reset --network=mainnet
```

### core:log

Show the core log

#### Usage

```sh
ark core:log
```

#### Flags

| Name       | Description                                 | Required           |
| ---------- | ------------------------------------------- |:------------------:|
| --error    | only show error output                      | :white_check_mark: |
| --network  | the name of the network that should be used | :x:                |
| --token    | the name of the token that should be used   | :x:                |

#### Examples

```sh
ark core:log
```

### core:restart

Restart the core

#### Usage

```sh
ark core:restart
```

#### Flags

| Name       | Description                                 | Required           |
| ---------- | ------------------------------------------- |:------------------:|
| --network  | the name of the network that should be used | :x:                |
| --token    | the name of the token that should be used   | :x:                |

#### Examples

##### Restart the core

```sh
ark core:restart
```

### core:start

Start the core

#### Usage

```sh
ark core:start
```

#### Flags

| Name                        | Description                                                      | Required           |
| --------------------------- | ---------------------------------------------------------------- |:------------------:|
| --bip39                     | the plain text bip39 passphrase                                  | :x:                |
| --bip38                     | the encrypted bip38                                              | :x:                |
| --password                  | the password for the encrypted bip38                             | :x:                |
| --[no-]daemon               | start the process as a pm2 daemon                                | :x:                |
| --disableDiscovery          | permanently disable any peer discovery                           | :x:                |
| --ignoreMinimumNetworkReach | ignore the minimum network reach on start                        | :x:                |
| --launchMode                | the mode the relay will be launched in (seed only at the moment) | :x:                |
| --networkStart              | indicate that this is the first start of seeds                   | :x:                |
| --skipDiscovery             | skip the initial peer discovery                                  | :x:                |
| --network                   | the name of the network that should be used                      | :x:                |
| --token                     | the name of the token that should be used                        | :x:                |


#### Examples

##### Run core with a daemon

```sh
ark core:start
```

##### Run core as genesis

```sh
ark core:start --networkStart
```

##### Disable any discovery by other peers

```sh
ark core:start --disableDiscovery
```

##### Skip the initial discovery

```sh
ark core:start --skipDiscovery
```

##### Ignore the minimum network reach

```sh
ark core:start --ignoreMinimumNetworkReach
```

##### Start a seed

```sh
ark core:start --launchMode=seed
```

##### Run core without a daemon

```sh
ark core:start --no-daemon
```

### core:stop

Stop the core

#### Usage

```sh
ark core:stop
```

#### Flags

| Name       | Description                                 | Required           |
| ---------- | ------------------------------------------- |:------------------:|
| --daemon   | stop the process or pm2 daemon              | :x:                |
| --network  | the name of the network that should be used | :x:                |
| --token    | the name of the token that should be used   | :x:                |

#### Examples

##### Stop the core

```sh
ark core:stop
```

##### Stop the core daemon

```sh
ark core:stop --daemon
```

### env:get

Get the value of an environment variable

#### Usage

```sh
ark env:get KEY
```

#### Flags

| Name       | Description                                 | Required           |
| ---------- | ------------------------------------------- |:------------------:|
| --network  | the name of the network that should be used | :x:                |
| --token    | the name of the token that should be used   | :x:                |

#### Examples

##### Get the log level

```sh
ark env:get CORE_LOG_LEVEL
```

### env:list

List all environment variables

#### Usage

```sh
ark env:list
```

#### Flags

| Name       | Description                                 | Required           |
| ---------- | ------------------------------------------- |:------------------:|
| --network  | the name of the network that should be used | :x:                |
| --token    | the name of the token that should be used   | :x:                |

#### Examples

##### List all environment variables

```sh
ark env:list
```

### env:paths

Get all of the environment paths

#### Usage

```sh
ark env:paths
```

#### Flags

| Name       | Description                                 | Required           |
| ---------- | ------------------------------------------- |:------------------:|
| --network  | the name of the network that should be used | :x:                |
| --token    | the name of the token that should be used   | :x:                |

#### Examples

##### List all environment paths

```sh
ark env:paths
```

### env:set

Set the value of an environment variable

#### Usage

```sh
ark env:set KEY VALUE
```

#### Flags

| Name       | Description                                 | Required           |
| ---------- | ------------------------------------------- |:------------------:|
| --force    | force the setting to be overwritten         | :white_check_mark: |
| --network  | the name of the network that should be used | :x:                |
| --token    | the name of the token that should be used   | :x:                |

#### Examples

##### Set the log level

```sh
ark env:set CORE_LOG_LEVEL info
```

### forger:log

Show the forger log

#### Usage

```sh
ark forger:log
```

#### Flags

| Name       | Description                                 | Required           |
| ---------- | ------------------------------------------- |:------------------:|
| --error    | only show error output                      | :white_check_mark: |
| --network  | the name of the network that should be used | :x:                |
| --token    | the name of the token that should be used   | :x:                |

#### Examples

```sh
ark forger:log
```

### forger:restart

Restart the forger

#### Usage

```sh
ark forger:restart
```

#### Flags

| Name       | Description                                 | Required           |
| ---------- | ------------------------------------------- |:------------------:|
| --network  | the name of the network that should be used | :x:                |
| --token    | the name of the token that should be used   | :x:                |

#### Examples

##### Restart the forger

```sh
ark forger:restart
```

### forger:start

Start the forger

#### Usage

```sh
ark forger:start
```

#### Flags

| Name          | Description                                 | Required           |
| ------------- | ------------------------------------------- |:------------------:|
| --bip39       | the plain text bip39 passphrase             | :x:                |
| --bip38       | the encrypted bip38                         | :x:                |
| --password    | the password for the encrypted bip38        | :x:                |
| --[no-]daemon | start the process as a pm2 daemon           | :x:                |
| --network     | the name of the network that should be used | :x:                |
| --token       | the name of the token that should be used   | :x:                |

#### Examples

##### Run a forger with a bip39 passphrase

```sh
ark forger:start --bip39="..."
```

##### Run a forger with an encrypted bip38

```sh
ark forger:start --bip38="..." --password="..."
```

##### Run a forger without a daemon
```sh
ark forger:start --no-daemon
```

### forger:stop

Stop the forger

#### Usage

```sh
ark forger:stop
```

#### Flags

| Name       | Description                                 | Required           |
| ---------- | ------------------------------------------- |:------------------:|
| --daemon   | stop the process or pm2 daemon              | :x:                |
| --network  | the name of the network that should be used | :x:                |
| --token    | the name of the token that should be used   | :x:                |

#### Examples

##### Stop the forger

```sh
ark forger:stop
```

##### Stop the forger daemon

```sh
ark forger:stop --daemon
```

### relay:log

Show the relay log

#### Usage

```sh
ark relay:log
```

#### Flags

| Name       | Description                                 | Required           |
| ---------- | ------------------------------------------- |:------------------:|
| --error    | only show error output                      | :white_check_mark: |
| --network  | the name of the network that should be used | :x:                |
| --token    | the name of the token that should be used   | :x:                |

#### Examples

```sh
ark relay:log
```

### relay:restart

Restart the relay

#### Usage

```sh
ark relay:restart
```

#### Flags

| Name       | Description                                 | Required           |
| ---------- | ------------------------------------------- |:------------------:|
| --network  | the name of the network that should be used | :x:                |
| --token    | the name of the token that should be used   | :x:                |

#### Examples

##### Restart the relay

```sh
ark relay:restart
```

### relay:start

Start the relay

#### Usage

```sh
ark relay:start
```

#### Flags

| Name                        | Description                                                      | Required           |
| --------------------------- | ---------------------------------------------------------------- |:------------------:|
| --[no-]daemon               | start the process as a pm2 daemon                                | :x:                |
| --disableDiscovery          | permanently disable any peer discovery                           | :x:                |
| --ignoreMinimumNetworkReach | ignore the minimum network reach on start                        | :x:                |
| --launchMode=launchMode     | the mode the relay will be launched in (seed only at the moment) | :x:                |
| --networkStart              | indicate that this is the first start of seeds                   | :x:                |
| --skipDiscovery             | skip the initial peer discovery                                  | :x:                |
| --network                   | the name of the network that should be used                      | :x:                |
| --token                     | the name of the token that should be used                        | :x:                |

#### Examples

##### Run a relay with a pm2 daemon

```sh
ark relay:start --network=mainnet
```

##### Run a genesis relay

```sh
ark relay:start --networkStart
```

##### Disable any discovery by other peers

```sh
ark relay:start --disableDiscovery
```

##### Skip the initial discovery

```sh
ark relay:start --skipDiscovery
```

##### Ignore the minimum network reach

```sh
ark relay:start --ignoreMinimumNetworkReach
```

##### Start a seed

```sh
ark relay:start --launchMode=seed
```

##### Run a relay without a daemon

```sh
ark relay:start --no-daemon
```

### relay:stop

Stop the relay

#### Usage

```sh
ark relay:stop
```

#### Flags

| Name       | Description                                 | Required           |
| ---------- | ------------------------------------------- |:------------------:|
| --daemon   | stop the process or pm2 daemon              | :x:                |
| --network  | the name of the network that should be used | :x:                |
| --token    | the name of the token that should be used   | :x:                |

#### Examples

##### Stop the relay
```sh
ark relay:stop
```

##### Stop the relay daemon

```sh
ark relay:stop --daemon
```

### top

List all core daemons

#### Usage

```sh
ark top
```

#### Examples

##### List all core daemons

```sh
ark top
```

### help

TBD

### update

TBD

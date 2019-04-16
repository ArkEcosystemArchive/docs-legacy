---
title: "Installing and Configuring a Relay Node (Bare Metal or VM)"
---

# Installing a Relay Node

## Introduction

A Relay Node is a full node in the ARK network; it maintains a complete copy of the ledger (blockchain). These nodes serve as a public API endpoint, use an internal service discovery mechanism to locate other nodes and keep each other in sync. Public nodes are used by the SPV clients to transmit signed transactions.

## Recommended Hardware Requirements

- 4GB RAM
- 40GB SSD
- 2 Cores

ARK Nodes execute many query intensive operations. The most cost-effective approach for running a high-performance node is choosing SSD over HDD. Increasing the total RAM improves cache performance.

## Configuration Requirements

- Stable internet connection
- Access to multiple open ports (actual ports may be configured)

  | Service    | Port |      Required      | Enabled by default |              Documentation              |
  | :--------- | :--: | :----------------: | :----------------:	| :-------------------------------------: |
  | p2p        | 4001 | :white_check_mark: | :white_check_mark: | [reference](/api/p2p/)                  |
  | public API | 4003 |        :x:         | :white_check_mark: | [reference](/exchanges/public-api.html) |
  | webhook    | 4004 |        :x:         |        :x:         | [reference](/api/webhooks/)             |
  | JSON-RPC   | 8080 |        :x:         |        :x:         | [reference](/exchanges/json-rpc.html)   |

## Using the official `Installation Script`

On a fresh Ubuntu installation, follow these commands.

### 1. Update and Upgrade

Always ensure your server has the latest set of updates, due to performance and security considerations.

```bash
sudo apt-get update && sudo apt-get upgrade
```

### 2. Add a New User and Add to the Sudo Group

It is best to create a specific ARK-related user, which can later own the required databases as well.

```bash
sudo adduser username
sudo usermod -aG sudo username
```

### 3. Switch to the New User

Switch to the new user account and go to the base directory.

```bash
sudo su - username
cd ~
```

### 4. Install Dependencies and ARK Core

We will use ARK installer script that will install all of the necessary dependencies, ARK Core onto your server and publish configuration files for it. To install essentials run this command.

```bash
bash <(curl -s https://raw.githubusercontent.com/ARKEcosystem/core/master/install.sh)
```

You will be asked to input your current users password for sudo privileges. Write or paste it and press enter to start installation process.

Process might take a while, don't interrupt it and wait for it to finish.

### 5. Selecting ARK Core Network

Once installation of dependencies and ARK Core is finished you will need to select on which network you wish to operate, since we are setting `mainnet` node select it. This can be achieved by pressing `up` or `down` arrow keys and confirming selection with `enter`.

After you made your selection you will need to confirm by pressing `y` and confirm with `enter`.

### 6. Configuring ARK Core Database

Last step of the ARK Core essential configuration is to configure database parameters. You will be presented with a prompt:

```bash
Would you like to configure the database? [y/N]:
```

Press `y` and confirm with `enter`.

You can input any custom database credentials you want to use or use the one provided below:

```bash
Enter the database username: ark
Enter the database password: password
Enter the database name: ark_mainnet
```

This will create PostgreSQL role and database to be used for storing blockchain data.

### 7. Starting ARK Relay Process

To start ARK relay process and with it synchronization process with ARK blockchain we need to start relay process with our integrated CLI:

```bash
ark relay:start
```

If the process has started you will get a message:

```bash
Starting ark-relay... done
```

::: tip
All CLI commands with description can be viewed at [CLI Commands](/guidebook/core/cli.html#available-commands) or by executing the `ark help` command.
:::

### 8. Checking to See if Everything Is Working

Now we want to see if the ARK relay process has started the synchronization process you can do that by running one of these two commands

```bash
ark relay:log
```

or

```bash
pm2 logs
```

If the process has started you will see a lot of messages like this (with actual data)

```bash
[YYYY-DD-MM hh:mm:ss][DEBUG]: Delegate <delegate name> (<public key>) allowed to forge block <#> 👍
```

::: tip
Synchronization of the blockchain can take upwards of 10 hours so let it run, once its synronized `allowed to forge block` messages will only pop-up every 8 seconds. A single round consists of 51 delegates each forging a single block.
:::

::: danger

Ensure you properly restart the node process when editing your `.env` file. Use the `--update-env` flag, for example:

```bash
pm2 restart all --update-env
```

:::

## Next Steps

::: warning
Please note that API will be available when the node has synced with the network, which can take up to 15 hours depending on your network speed.
:::

Now that the relay node has been configured, you should head over to the [JSON-RPC installation guide](/exchanges/json-rpc.html) or look at relevant [Public API endpoints](/exchanges/public-api.html) related to blockchain functionality to manage your wallets and transactions.

If you need to configure your node further, go to:

- [Rate Limiting](/exchanges/rate-limiting.html)
- [JSON-RPC](/exchanges/json-rpc.html)

## Notes

Please read the documentation pages for all of our [ARK API clients and cryptography libraries](/sdk/) (offered in many programming languages).

Also, read the [API documentation](/api/public/v2/).

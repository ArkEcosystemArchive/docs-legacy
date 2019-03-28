---
title: "Installing and configuring a Relay Node (Bare Metal or VM)"
---

# Installing a Relay Node

## Introduction

A Relay Node is a full node in the Ark Network; it maintains a complete copy of the ledger (blockchain). These nodes serve as a public API endpoint, use an internal service discovery mechanism to locate other nodes and keep each other in sync. Public nodes are used by the SPV clients to transmit signed transactions.


## Recommended Hardware Requirements

- 4GB RAM
- 40GB SSD
- 2 Cores

Ark Nodes execute many query intensive operations. The most cost-effective approach for running a high-performance Node is choosing SSD over HDD. Increasing the total RAM improves cache performance.

## Configuration Requirements

- Stable internet connection
- Access to multiple open ports (actual ports may be configured)

    | service    | port | required | enabled by default | documentation                             |
    |------------|------|----------|--------------------|-------------------------------------------|
    | p2p        | 4001 | yes      | yes                | [reference](/api/p2p/)                    |
    | public API | 4003 | no       | yes                | [reference](/exchanges/public-api.html)   |
    | webhook    | 4004 | no       | no                 | [reference](/api/webhooks/)               |
    | JSON-RPC   | 8080 | no       | no                 | [reference](/exchanges/json-rpc.html)     |

## Using the official `Installation Script`

On a fresh Ubuntu installation, follow these commands.

### 1. Update and Upgrade

Always ensure your server has the latest set of updates, due to performance and security considerations.

```bash
sudo apt-get update && sudo apt-get upgrade
```

### 2. Add a new user and add to the sudo group

It is best to create a specific Ark-related user, which can later own the required databases as well.

```bash
sudo adduser username
sudo usermod -aG sudo username
```

### 3. Switch to the new user

Switch to the new user account and go to the base directory.

```bash
sudo su - username
cd ~
```

### 4. Install dependencies and Ark Core

We will use Ark installer script that will install all of the necessary dependencies, Ark Core onto your server and publish configuration files for it. To install essentials run this command.

```bash
bash <(curl -s https://raw.githubusercontent.com/ArkEcosystem/core/master/install.sh)
```
You will be asked to input your current users password for sudo privileges. Write or paste it and press enter to start installation process.

Process might take a while, don't interrupt it and wait for it to finish.

### 5. Selecting Ark Core network

Once installation of dependencies and Ark Core is finished you will need to select on which network you wish to operate, since we are setting `mainnet` node select it. This can be achieved by pressing `up` or `down` arrow keys and confirming selection with `enter`.

After you made your selection you will need to confirm by pressing `y` and confirm with `enter`.

### 6. Configuring Ark Core database

Last step of the Ark Core essential configuration is to configure database parameters. You will be presented with a prompt:

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

### 7. Starting Ark Relay process

To start Ark relay process and with it synchronization process with Ark blockchain we need to start relay process with our integrated CLI:

```bash
ark relay:start
```

If the process has started you will get a message:

```bash
Starting ark-relay... done
```

::: tip
All CLI commands with description can be viewed at [CLI Commands](/guidebook/core/cli.html#available-commands) or by running `ark help` command.
:::

### 8. Checking to see if everything is working

Now we want to see if the Ark Relay process has started the synchronization process you can do that by running one of these two commands

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

Ensure you properly restart the node process when editing your .env file. Use the `--update-env` flag, for example:

```bash
pm2 restart all --update-env
```
:::

## Next steps

::: warning
Please note that API will be available when the node has synced with the network, which can take up to 15 hours depending on your network speed.
:::

Now that the relay node has been configured, you should head over to the [JSON-RPC installation guide](/exchanges/json-rpc.html) or look at relevant [Public API endpoints](/exchanges/public-api.html) related to blockchain functionality to manage your wallets and transactions.

If you need to configure your node further, go to:

- [Rate Limiting](/exchanges/rate-limiting.html)
- [JSON-RPC](/exchanges/json-rpc.html)

## Notes

Please read the documentation pages for all of our [Ark API clients and cryptography libraries](/sdk/) (offered in many programming languages).

Also, read the [API documentation](/api/public/v2/).

# Using Docker

## Running a Docker Relay Node 

::: tip
Prerequisites to be installed:

- [Docker Community Edition](https://docs.docker.com/install)
- [Docker Compose](https://docs.docker.com/compose/install)
:::

### TL;DR

## Install Docker Community Edition

On a fresh OS installation, follow these steps:

### Install Docker CE - Ubuntu / Debian 

- Preferably use latest stable OS version!

1. Uninstall old versions:
 
```bash
sudo apt-get remove docker docker-engine docker.io containerd runc
```

2. Install prerequisites:

```bash
sudo apt-get update && sudo apt-get install -y apt-transport-https ca-certificates curl gnupg2 software-properties-common
```

3. Add Docker’s official GPG key:

```bash
curl -fsSL https://download.docker.com/linux/$(grep "^ID=" /etc/os-release | cut -d\= -f2)/gpg | sudo apt-key add -
```

4. Add Docker's official repository:

```bash
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/$(grep "^ID=" /etc/os-release | cut -d\= -f2) $(lsb_release -cs) stable"
```

5. Install Docker CE:

```bash
sudo apt-get update && sudo apt-get install -y docker-ce docker-ce-cli containerd.io
```

6. Make Docker usage as a `non-root` user possible:

```bash
sudo usermod -aG docker ${USER}
```
:::warning
You'll have to logout and login again or just open another session in order to activate the last step.
:::

### Install Docker CE - CentOS 

- Preferably use latest stable OS version!

1. Uninstall old versions:

```bash
sudo yum remove docker docker-client docker-client-latest docker-common docker-latest docker-latest-logrotate docker-logrotate docker-engine 
```

2. Install prerequisites:

```bash
sudo yum install -y yum-utils device-mapper-persistent-data lvm2
```

4. Add Docker's official repository:

```bash
sudo yum-config-manager --add-repo  https://download.docker.com/linux/centos/docker-ce.repo
```

5. Install Docker CE:

```bash
sudo yum install docker-ce docker-ce-cli containerd.io
```

6. Start Docker CE:

```bash
sudo systemctl start docker && sudo systemctl enable docker
```

7. Make Docker usage as a `non-root` user possible:

```bash
sudo usermod -aG docker ${USER}
```
:::warning
You'll have to logout and login again or just open another session in order to activate the last step.
:::

## Install Docker Compose

### Docker Compose install (Ubuntu / Debian / CentOS latest stable releases)

```bash
 sudo curl -sL "https://github.com/docker/compose/releases/download/`curl -fsSLI -o /dev/null -w %{url_effective} https://github.com/docker/compose/releases/latest | sed 's#.*tag/##g' && echo`/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose && sudo chmod +x /usr/local/bin/docker-compose
```

## Using official ARK Core Docker image 

### Getting the needed files

```bash
mkdir mainnet &&
cd mainnet &&
curl -sOJ https://raw.githubusercontent.com/ArkEcosystem/core/master/docker/production/mainnet/docker-compose.yml &&
curl -sOJ https://raw.githubusercontent.com/ArkEcosystem/core/master/docker/production/mainnet/mainnet.env
```

### Running the Node 

:::warning
For normal Node operation, make sure TCP port 4001 is accessible from outside.
:::

- If you prefer ARK Core settings other than defaults, please make your changes prior running the Core `(file=mainnet.env)`

## Starting the Relay

```bash
docker-compose up -d
```
::: tip
If you prefer to use custom DB Name, DB User and DB Password simply adjust variables `POSTGRES_PASSWORD`, `POSTGRES_USER`, `POSTGRES_DB` `(file=docker-compose.yml)` and `CORE_DB_PASSWORD`, `CORE_DB_USERNAME` and `CORE_DB_DATABASE` `(file=mainnet.env)` correspondingly.
:::

- **In case you want to use a remote PostgreSQL server simply adjust variable `CORE_DB_HOST` in your `mainnet.env` and run only Core container:**

```bash
docker-compose up -d core
```

## Troubleshooting 

- Make sure your containers are up and running:

```bash
docker ps -a --format "table {{.Names}}\t{{.Status}}"
``` 

> You should see something similar to:

```bash 
NAMES               STATUS
core-mainnet        Up 4 minutes
postgres-mainnet    Up 4 minutes
```

- If some of the containers status is not `Up`, check docker logs:

```bash
docker logs core-mainnet
```
```bash
docker logs postgres-mainnet
```

## Maintenance 

### Monitoring Relay logs:

```bash
docker exec -it core-mainnet pm2 logs
```

## Update

### Docker live updates are now possible with [CLI](https://docs.ark.io/guidebook/core/cli.html)

- As a preliminary step, installation of development tools is necessary (only needed once, when doing initial update):

```bash
docker exec -it core-devnet sudo apk add make gcc g++ git python
```

- We are all set! Run the update and follow instructions:


```bash
docker exec -it core-devnet ark update
```

::: tip
Updates and all changes made to the containers are kept even on container or host restart.
:::

### FAQ

#### How do i start with empty DB?

Just execute the following code:

```bash
docker-compose down -v
docker-compose up -d
```

#### How do i start everything from scratch?

Just stop and trash all containers and images:

```bash
docker stop $(docker ps -aq)
docker rm $(docker ps -aq)
docker rmi $(docker images -q)
docker volume prune -f
docker network prune -f
```

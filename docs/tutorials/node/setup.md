---
title: "How To Setup Your Ark Node"
---

# How To Setup Your Ark Node

[[toc]]

## Introduction

Here we will help you set up an Ark Relay node, which relays transactions and secures the Ark Network.

## Bare-metal

### Minimum Requirements

The setup is not suitable as a Delegate Node but can function as a Relay Node.

- 1 Dedicated CPU Core
- 4GB Ram
- Linux
- 20GB Free HD Space

### Recommended Specifications

- 2 CPU Cores+
- 8GB Ram+
- Ubuntu 16.04
- 40GB+ SSD

### Prerequisite Setup

#### Provision a Linux Server

Running an Ark Node is not like Bitcoin mining, and thus there are more options to choose from. AWS, Linode, Digital Ocean, Vultr, Microsoft Azure, and OVH are just a few recommended choices.

Delegate Nodes have a higher minimum requirement on the hardware specifications. These nodes are the security of our network
so their uptime is of most importance in making sure the network runs smoothly.

The recommended specifications are what we would consider the minimum specs
for Delegate Nodes. Smaller nodes are fine for relays or development purposes. We recommend using Ubuntu 16.04 however you are free to use any version of Linux you're comfortable with. These guides use Debian flavored Linux variants though.

With each provider, the setup process for creating a new virtual server is going to
be different. If choosing one of the listed providers, we have created quick
links below to get started quickly.

- [Linode](https://www.linode.com/docs/getting-started/#provision-your-linode)
- [Digital Ocean](https://www.digitalocean.com/community/tutorials/how-to-create-your-first-digitalocean-droplet)
- [AWS](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/get-set-up-for-amazon-ec2.html)
- [Vultr](https://www.vultr.com/)
- [Microsoft Azure](https://docs.microsoft.com/en-us/azure/virtual-machines/linux/overview)
- [OVH](https://support.ovhcloud.com/hc/en-us/articles/115001520890-Getting-Started-with-Servers)

#### Connect to Your Server

After creating a server, we need to connect to it. Your provider should have given you an
`IP address`, `username`, and `password` to connect to your new server.

This information can usually be found somewhere in your provider's dashboard for your
new server.

![ssh information](./assets/setup/ssh_information.png)

Depending on your operating system you will connect to your server in different ways.
Windows users will want to use something like [PuTTy](https://putty.org/) or the newer [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10). When using the WSL, the Linux part of this guide should be relevant.

##### Windows

Open PuTTy and place the `IP address` given to you by your provider in the
`Host Name` field as shown below. You should probably save this host, so you don't
have to enter it every time.

![PuTTy Login](./assets/setup/puTTy_login.jpeg)

##### MacOS / Linux

Open up a new terminal window and type in the following to connect to your new
server via `SSH.`

```bash
ssh user@ipaddress
```

When first connecting to your new server you will be asked to cache the servers
host key and validate the RSA fingerprint, click yes. If this message appears after you have already configured your server, take precautions, it might have been compromised.

```bash
The authenticity of host '{SERVER_IP}' can't be established.
ECDSA key fingerprint is SHA256:kgjgjfihut985ht984754643354+hrQ.
Are you sure you want to continue connecting (yes/no)?
```

When prompted, use the password given to you by your cloud provider. Some providers
will require you to set up a root password when creating the VM, while others may
give you a temporary password.

#### Create a user

Executing this guide as the root user is not advised. Instead create a new, dedicated user to manage Ark-related software. On your server type the following into the command line and press enter. Where `username` is the name you want to log in with:

```bash
adduser username
```

You will be prompted to enter in the users `full name` and some other information.
Feel free to leave them all blank as they are optional. When prompted, type `Y` and press enter.

```bash
Adding user 'ark' ...
Adding new group 'ark' (1000) ...
Adding new user 'ark' (1000) with group 'ark' ...
Creating home directory '/home/ark' ...
Copying files from '/etc/skel' ...
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
Changing the user information for ark
Enter the new value, or press ENTER for the default
    Full Name []:
    Room Number []:
    Work Phone []:
    Home Phone []:
    Other []:
Is the information correct? [Y/n] Y
```

#### Granting sudo privileges

Next, we need to make sure that our user can do all the things it needs to do. Type
the command below into your command line and press enter. Where `username` is the
name of the new account you created. This will give our user `sudo` privileges.

Now you are allowed to run programs with the security privileges of another user.
By default, this is a `superuser`.

```bash
usermod -a -G sudo username
```

### Installing Ark Core

We're now ready to begin installing Ark. The initial install may take a while
and at times appear not to be doing anything. Please have patience and let the process
finish.

#### Switch to the Ark user

While installing Ark Core, we should use the Ark user that we created above. To switch to it, run:

```bash
sudo su - username
```

#### Download Ark Commander

[Git](https://git-scm.com/) is pre-bundled with Linux and a required dependency for Ark Core.

```bash
git clone https://github.com/ArkEcosystem/core-commander
```

#### Run `core-commander`

```bash
bash core-commander/commander.sh
```

##### Optional

`core-commander` may ask you for your `sudo` password depending on the version. This is
the password you used to login to the user account with. Enter your password
and press enter.

##### System Updates and Prerequisites

The first time you run Ark Commander, it is going to update your system and make sure
you have the latest updates to required dependencies.

```bash
    ___    ____  __ __    ______                   ___    ____
   /   |  / __ \/ //_/   / ____/___  ________     |__ \  / __ \
  / /| | / /_/ / ,<     / /   / __ \/ ___/ _ \    __/ / / / / /
 / ___ |/ _, _/ /| |   / /___/ /_/ / /  /  __/   / __/_/ /_/ /
/_/  |_/_/ |_/_/ |_|   \____/\____/_/   \___/   /____(_)____/

   ______                                          __
  / ____/___  ____ ___  ____ ___  ____ _____  ____/ /__  _____
 / /   / __ \/ __ `__ \/ __ `__ \/ __ `/ __ \/ __  / _ \/ ___/
/ /___/ /_/ / / / / / / / / / / / /_/ / / / / /_/ /  __/ /
\____/\____/_/ /_/ /_/_/ /_/ /_/\__,_/_/ /_/\__,_/\___/_/

===============================================================
==> Checking for system updates...

```

#### Rebooting your system

`core-commander` might request for you to reboot your system. Restart your system, and afterward, rerun `commander.sh`.

```bash
sudo reboot
```

#### Install Ark Core

Select option `A. Manage Ark Core`, then `I. Install Ark Core` to install the required dependencies for Ark Core. Again, don't interrupt this process as it
will take a few minutes to install the necessary packages. Afterward, you will be prompted to select a network.

```bash
===============================================================
==> Which network would you like to configure?
1) mainnet
2) devnet
3) testnet
#?
```

If you are tinkering with Ark for the first time, select `devnet` and request DARK coins in our public slack.

Now you should be prompted for database connection parameters. If you did not create a database, `core-commander` will attempt to create a new one using the provided parameters. Info is the preferred default log level.

```bash
...
Enter the database host, or press ENTER for the default [localhost]:
Enter the database port, or press ENTER for the default [5432]:
Enter the database username, or press ENTER for the default [$USER]:
Enter the database name, or press ENTER for the default [ark_mainnet]:
...

==> Which log level would you like to configure?
1) debug
2) info
3) warning
4) error
```

Afterward `lerna` will tidy unused dependencies. If you receive the following prompt, confirm to start the node.

```bash
Ark Core has been configured, would you like to start the relay? [Y/n] :
```

If you correctly executed all steps, you are returned at the main console, where `Relay` is displaying the status `On`.

```bash
===============================================================
Core: a71f007f             NodeJS: 10.15.0             PG: 10.6
===============================================================
Relay:  On         Forger: Off         NTP:  On         PG:  On
===============================================================
```

#### Setting up a Delegate Node

If you wish to configure your node as a Delegate Node, enter `F. Manage Forger` and then `C. Configure Forger`. You will be presented with the following prompts:

```bash
Would you like to use secure bip38 encryption? [Y/n] :
Please enter your delegate secret:
Please enter your bip38 password:
```

Ensure you use encryption if you are running a Delegate Node. Next, you are asked if you want to start the forging process. Reenter your password after confirming.

```bash
The forger has been configured, would you like to start the forger? [Y/n] :
Please enter your bip38 password:
```

::: warning
Incorrectly entering your BIP38 password will result in a forging process using an invalid private/public key pair, resulting in it possible data corruption.
:::

#### Creating and Restoring your Database from a Snapshot

You might want to regularly create a snapshot of the database, or restore from a snapshot to avoid longer synchronization times.

Documentation on this feature may be found [here](/tutorials/node/snapshots.md).

#### Checking to See if Everything is Working

Finally, go back to the main console and check the Delegate Node status. You should see the following.

```bash
===============================================================
Core: a71f007f             NodeJS: 10.15.0             PG: 10.6
===============================================================
Relay:  On         Forger: On         NTP:  On         PG:  On
===============================================================
```

### What's Next?

Great! You have a working node, but now you should think about securing it.
It is especially important if you plan on using this as your Delegate Node.

In our next section, we'll discuss making sure your Ark node is as secure as possible.
As the Ark network grows, hacking attempts on delegate and relay nodes will become
more prevalent. Defending against DDOS and other various attacks is extremely
important in securing the network.

## Docker

A more automated way to run an Ark Node is by using a Docker container to manage each service. Currently, the Ark team does not provide production images. However, Ark Core has Dockerfiles ready, and the community also offers public images. Due to security concerns, we recommend you only use the official images or your own for production usage.

::: warning
Only run container images that you have verified yourself. A malicious actor could have added a passphrase logger to his self-made image in an attempt to compromise your wallet.
:::

### Official Dockerfiles

Documentation on the Ark Core Dockerfiles may be found [here](/guidebook/core/docker.html)

### Example Dockerfile

You can create your Dockerfile to build an Ark Core image. Below we provide an example Dockerfile.

#### Dockerfile

```docker
FROM node:9

# you usually would use a separate docker container for the database and Redis server.
# this image is however intended for maximum hacking purposes, so we just put everything in it.
RUN apt update
RUN apt install postgresql postgresql-contrib -y

# Redis is used for the transaction pool. We build it ourselves, as that is the recommended way to obtain Redis.
RUN apt install redis-server -y


# Lerna grabs our dependencies for us. (it seems this one randomly fails sometimes when building the image)
RUN npm install --global lerna --loglevel verbose
RUN git clone -b master https://github.com/ArkEcosystem/core.git
RUN (cd core && lerna bootstrap)

# public API, this one is for developers
EXPOSE 4003

# webhook port
EXPOSE 4004

# JSON-RPC
EXPOSE 8080

# public GraphQL API, including GraphiQL explorer
EXPOSE 4005

# internal API, for nodes to communicate
EXPOSE 4000

# PostgreSQL port, if you want to query the DB directly
EXPOSE 5432

COPY entrypoint.sh /

RUN echo "listen_addresses = '*'" >> /etc/postgresql/9.4/main/postgresql.conf
RUN echo "host all all 0.0.0.0/0 trust" >> /etc/postgresql/9.4/main/pg_hba.conf
RUN mkdir .ark

# this will start an entire test network, including genesis block. To find the secrets, check out:
# https://github.com/ArkEcosystem/core/blob/develop/packages/core/lib/config/testnet/delegates.json
ENTRYPOINT ./entrypoint.sh
```

You can build this Dockerfile using the command `docker build -t mycontainer:tag .`, and push it to your personal repository by calling `docker push mycontainer:tag`. The entrypoint.sh script is called when you activate the container using `docker run mycontainer:tag`.

You pass your .env file to the container by providing the following flag:

```bash
docker run -v host/path/to/.env:/.ark/.env mycontainer:tag
```

#### entrypoint.sh

```bash
#!/usr/bin/env bash
redis-server &
service postgresql start

# Waiting for postgres to start. This usually takes a few seconds.
while ! pg_isready -h 0.0.0.0 -p 5432 > /dev/null 2> /dev/null; do
        sleep 1
done

# creating a postgresql user. See https://github.com/ArkEcosystem/core/blob/develop/packages/core/lib/config/testnet/plugins.js
# for the origin of the username and password.
su -c "psql -c \"CREATE USER ark WITH PASSWORD 'password' \"" postgres
su -c "psql -c \"CREATE DATABASE ark_testnet WITH OWNER ark \"" postgres

(cd core/packages/core && yarn full:testnet)
```

This configuration is not optimal for production usage. The images itself becomes quite heavy, and you should never combine multiple services inside a single Docker container. However, resulting container is very convenient for testing purposes.
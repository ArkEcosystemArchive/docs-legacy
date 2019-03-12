---
title: "How To Setup Your Ark Node"
---

# How To Setup Your Ark Node

[[toc]]

## Introduction

Here we will help you set up an Ark Relay node, which relays transactions and secures the Ark Network.

## Bare-metal

### Minimum Requirements

The setup is not suitable as a Delegate Node, but can function as a Relay Node.

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

Running an Ark Core node is not like Bitcoin mining, and thus there are more options to choose from. AWS, Linode, Digital Ocean, Vultr, Microsoft Azure, and OVH are just a few recommended choices.

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

Executing this guide as the root user should be avoided. Instead create a new, dedicated user to manage Ark related software. On your server type the following into the command line and press enter. Where `username` is the name you want to log in with:

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

While installing Ark Core, we should use the Ark user that we created above and go to the base directory. To switch to it, run:

```bash
sudo su - username
cd ~
```

#### Running Ark Core installation script

Installing Ark Core is a straightforward process. We will use Ark installer script that will install all of the necessary dependencies, Ark Core onto your server and publish configuration files for it. To install essentials run this command: 

```bash
bash <(curl -s https://raw.githubusercontent.com/ArkEcosystem/core/master/install.sh)
```
You will be asked to input your current users password for sudo privileges. Write or paste it and press `enter` to start installation process.

Process might take a while, don't interrupt it and wait for it to finish.

#### Selecting Ark Core network

Once installation of dependencies and Ark Core is finished you will need to select on which network you wish to operate. This can be achieved by pressing `up` or `down` arrow keys and confirming selection with `enter`.

`Mainnet` is public network, `Devnet` is development network for testing and `Testnet` is our private testing network.

```bash
? What network do you want to operate on? › - Use arrow-keys. Return to submit.
   devnet
❯  mainnet
   testnet
```

If you are tinkering and want to play with Ark for the first time, select `devnet` and request DARK coins in our [public Slack](https://ark.io/slack/).

After you made your selection you will need to confirm by pressing `y` and confirm with `enter`

```bash
? Can you confirm? › (y/N)
```

With that we have sucessfully installed Ark Core and published our configuration options.

#### Configuring Ark Core database

Last step of the Ark Core essential configuration is to configure database parameters. You will be presented with a prompt:

```bash
Would you like to configure the database? [y/N]:
```

Press `y` and confirm with `enter`.

You can input any custom database credentials you want to use or use the one provided below:

```bash
Enter the database username: ark
Enter the database password: ark
Enter the database name: ark
```

This will create PostgreSQL role and database to be used for storing blockchain data. That's it, you are all set!

#### Starting Ark Relay process

To start Ark relay process and with it synchronization process with Ark blockchain we need to start relay process with our integrated CLI:

```bash
ark relay:start
```

If the process has started you will get a message:

```bash
Starting ark-relay... done
```

::: tip
All CLI commands with description can be viewed at [CLI Commands](https://docs.ark.io/guidebook/core/cli.html#available-commands) or by running `ark help` command.
:::

#### Checking to see if everything is working

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

Note that depending on the network you use synchronization of the blockchain can take upwards of 10 hours.


### What's Next?

Great! You have a working node, but now you should think about securing it.
It is especially important if you plan on using this as your delegate/forging node.

In our next section, we'll discuss making sure your Ark node is as secure as possible.
As the Ark network grows, hacking attempts on delegate and relay nodes will become
more prevalent. Defending against DDOS and other various attacks is extremely
important in securing the network.

## Docker

Check our [official guide](/guidebook/core/docker.html) to get your node running with Docker.

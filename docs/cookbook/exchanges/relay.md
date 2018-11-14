---
title: "Relay Node"
---

# Running a Relay Node
Ark offers an easy to setup solution for running a relay node for v2 with [Core Commander](https://github.com/ArkEcosystem/core-commander).

The experience is similar to the old solution for v1: Ark Commander.

Core Commander only supports Ubuntu (16.04, 18.04).

Docker images for running a relay node with configurability can be found [there](./docker).

## Requirements
 - 4GB RAM
 - 40GB SSD
 - 2 Cores

## Instructions

On a fresh Ubuntu installation, follow these commands

```sh
sudo apt-get update && sudo apt-get upgrade
sudo adduser username
sudo usermod -aG sudo username
sudo su - username
git clone https://github.com/ArkEcosystem/core-commander
bash core-commander/commander.sh
```

You will be asked for your sudo password

After entering your password, it will immediately install dependencies and configure things like NTP and PostgreSQL

With dependencies installed, your system will be updated and upgraded

Once finished, you are asked to reboot your system

After logging back into `username` after the reboot, run Core Commander again

You will be told that your system is up to date

And brought to the main menu, where you can choose `I` to Install Ark Core

With password entered, it will clone and build the repo

Then ask you to choose your network version

And configure Ark Core settings (database host, database port, database username, database password, database name)

Also log level

And finally it will ask you to start the relay node when the database has been configured

Now that the relay is on, we can check its logs (`R`, `ENTER`, `L`, `ENTER`)

Then, the sync logs are shown

The node will sync and the messages will show you when it is ready to be used

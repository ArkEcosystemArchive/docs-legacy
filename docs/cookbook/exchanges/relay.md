---
title: "Relay Node"
---

# Running a Relay Node
Ark offers an easy to setup solution for running a relay node for v2 with [Core Commander](https://github.com/ArkEcosystem/core-commander).

The experience is similar to the old solution for v1: Ark Commander.

Core Commander only supports Ubuntu (16.04, 18.04).

Docker images for running a relay node with configurability can be found [there](/cookbook/exchanges/docker).

## Requirements
 - 4GB RAM
 - 40GB SSD
 - 2 Cores

## Instructions
On a fresh Ubuntu installation, follow these commands

1. Update and Upgrade
```sh
sudo apt-get update && sudo apt-get upgrade
```

2. Add new user and add to sudo group
```sh
sudo adduser username
sudo usermod -aG sudo username
```

3. Login to the new user account and clone Core Commander
```sh
sudo su - username
git clone https://github.com/ArkEcosystem/core-commander
```

4. Execute commander.sh with bash
```sh
bash core-commander/commander.sh
```

5. Enter your sudo password
![sudo password welcome screen Core Commander](./assets/relay/password_ask-07.png)

6. Let Core Commander install software dependencies
![dependency 1](./assets/relay/installing-deps-1.png)
![dependency 2](./assets/relay/installing-deps-2.png)
![dependency 3](./assets/relay/installing-deps-3.png)
![dependency 4](./assets/relay/installing-deps-5.png)

7. Reboot your system
![reboot when dependencies have installed](./assets/relay/ask_for_reboot-08.png)

8. Log back in and run Core Commander with bash again
```sh
bash core-commander/commander.sh
```

9. You will be told that your system is up to date
![system is up to date](./assets/relay/commander-after-install-first-boot-09.png)

10. Choose `I`, `ENTER` to Install Ark Core on the main menu
![main menu press I to install Ark Core](./assets/relay/install-main-menu-10.png)

11. Let Core Commander clone and build Ark Core
![build and clone Ark Core](./assets/relay/install-progress-11.png)

12. Choose your network version
![select network version (mainnet)](./assets/relay/configure-network-12.png)

13. Configure database settings and log level for your setup
![configure host, port, username, password and name for database](./assets/relay/configure-5.png)
![configure log level](./assets/relay/configure-6.png)

14. Start the relay node
![enter Y to start the relay node](./assets/relay/start-relay-13.png)

15. Monitor the sync progress with `R`, `ENTER`, `L`, `ENTER`
![enter R on main menu](./assets/relay/start-relay-14.png)
![enter L on Relay menu](./assets/relay/show-logs-16.png)
![relay syncing logs shown](./assets/relay/log-example-17.png)

The node will sync and the messages will show you when it is ready to be used.

## Notes
Please read the documentation pages for all of our [Ark Client and Crypto libraries](/api/sdk/) (offerred in many programming languages).

Also, read the [API documentation](/api/public/v2/).

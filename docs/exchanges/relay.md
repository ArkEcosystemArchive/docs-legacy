---
title: "Installing and configuring a Relay Node"
---

A Relay Node is a full node in the Ark Network; it maintains a complete copy of the ledger (blockchain). These nodes serve as a public API endpoint, use an internal service discovery mechanism to locate other nodes and keep each other in sync. Public nodes are used by the SPV clients to transmit signed transactions.

# Installing a Relay Node
Ark offers an easy to setup solution for running a v2 node using [core-commander](https://github.com/ArkEcosystem/core-commander). The experience is similar to the deprecated v1 [Ark Commander](https://github.com/ArkEcosystem/ARKcommander) and best suited for bare-metal deployments.

`core-commander` only supports Ubuntu (16.04, 18.04) and depends on [PostgreSQL](https://postgresql.org) as the persistent store.

## Hardware Requirements
 - 4GB RAM
 - 40GB SSD
 - 2 Cores

## Configuration Requirements
 - Stable internet connection
 - Access to multiple open ports (actual ports may be configured)
 <!-- TODO add links to the documenting tables -->
    | service    | port | required | enabled by default | documentation |
    |------------|------|----------|--------------------|---------------|
    | p2p        | 4001 | yes      | yes                | link          |
    | public API | 4003 | no       | yes                | link          |
    | webhook    | 4004 | no       | no                 | link          |
    | graphQL    | 4005 | no       | no                 | link          |
    | JSON-RPC   | 8080 | no       | no                 | link          |
<!-- https://www.tablesgenerator.com/markdown_tables -->
## Using the official `core-commander` tool
On a fresh Ubuntu installation, follow these commands

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

### 3. Obtain the installation script
Switch to the new user account and use `git` to obtain the installation script. Git is a required dependency of `core-commander`, as it relies on git to check for updates. 
```bash
sudo su - username
git clone https://github.com/ArkEcosystem/core-commander
```

### 4. Execute commander.sh using bash
```bash
bash core-commander/commander.sh
```

### 5. Install dependencies
Let `core-commander` install and update software dependencies. It might request sudo privileges depending on which version of the script you are using.
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
==> Installing system dependencies...
...

==> Installing node.js & npm...
...

==> Installed node.js & npm!
==> Installing Yarn...
...

==> Installed Yarn!
==> Installed system dependencies!
==> Installing program dependencies...
==> Dependencies [libcairo2-dev ] are not installed.
==> Installing program dependencies...
...

==> Program dependencies Installed!
==> Installing PostgreSQL...
...

==> Starting PostgreSQL...
==> Started PostgreSQL!
==> Installed PostgreSQL!
==> Installing NTP...
...

==> Stopping NTP...
==> Stopped NTP!
...

==> Starting NTP...
==> Started NTP!
==> Installed NTP!
==> Installed program dependencies!
==> Installing node.js dependencies...
==> [pm2 lerna ] are not installed.
==> Installing node.js dependencies...
...

==> Installed system updates!
==> All system dependencies have been installed!
Press any key to continue
```

### 6. Reboot your system
Depending on the installed dependencies, a reboot might be required.
```bash
...
==> Checking for system updates...
...

==> All system dependencies have been installed!
...

==> A reboot is required to complete the system update. It is recommended to reboot now.
```

If a reboot was required, log back in and run Core Commander with bash again. 
```bash
bash core-commander/commander.sh
```

If your repository is not at the current branch's `HEAD`, `core-commander` will inform you that an update is available.
```bash
An update is available for Ark Core, do you want to install it? [Y/n] :
``` 

### 7. Inspect the main console
Afterward, you will be told that your system is up to date and the command console is shown.
The top two rows display:

| Variable | Description                                                                         |
|----------|-------------------------------------------------------------------------------------|
| `core`   | the current `HEAD`                                                                    |
| `NodeJS` | version of NodeJS uses by the relay node                                            |
| `PG`     | version of the configured `PostgreSQL` database                                     |
| `Relay`  | status of the relay service                                                         |
| `Forger` | status of the forging service; indicates if this relay is configured as a delegate. |
| `NTP`    | `Network Time Protocol`                                                             |
| `PG`     | connection status with the `PostgreSQL`                                             |
<!-- generated using https://www.tablesgenerator.com/markdown_tables -->
```bash
===============================================================
Core: a71f007f             NodeJS: 10.15.0             PG: 10.6
===============================================================
Relay: Off         Forger: Off         NTP:  On         PG:  On
===============================================================
A. Manage Ark Core
R. Manage Relay
F. Manage Forger
E. Manage Explorer
C. Manage Commander
===============================================================
M. Miscellaneous
===============================================================
L. Show Log
P. Show Process Monitor
===============================================================
H. Show Help
===============================================================
X. Exit
===============================================================
Please enter your choice: 
```

### 8. Database configuration
Choose `A. Manage Ark Core` to configure the relay node, then `C. Configure Ark Core`. We will now configure the database connection parameters and logging level.
```bash
===============================================================
U. Update Ark Core
P. Uninstall Ark Core
C. Configure Ark Core
===============================================================
L. Configure Log Level
D. Configure Database
A. Configure Hosts & Ports
R. Reset Configuration
===============================================================
H. Show Help
===============================================================
X. Back to Main Menu
===============================================================
```

You will be presented with a selection of networks. `mainnet` is the actual Ark network, `devnet` and `testnet` are used by the core developers and community to develop Ark and test surrounding infrastructure. Choose `1. mainnet` for production use.
```bash
...
==> Which network would you like to configure?
1) mainnet
2) devnet
3) testnet
#? 
```

You will be requested to enter different settings by a series of prompts. 

::: warning
Credentials are not censored in the console, ensure they are not observed nor logged.
:::

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

### 9. Creating a database
`core-commander` will attempt to create the specified user and database. You may be prompted if the user or database already exists. Decline to overwrite existing users or databases.
```bash
==> Creating Database...
The database user $USER already exists, do you want to overwrite it? [y/N] : N
createdb: database creation failed: ERROR:  database "ark_mainnet" already exists
==> Created Database!
```

### 10. Final check
`Lerna` will perform a check on older dependencies and remove outdated/unused packages. Afterward, it will prompt you to start the relay node, enter `Y`.
```bash
lerna notice cli v3.5.0
lerna info versioning independent
lerna info clean removing /home/$USER/ark-core/packages/core-API/node_modules
lerna info clean removing /home/$USER/ark-core/packages/core-blockchain/node_mod
...

Ark Core has been configured, would you like to start the relay? [Y/n] : 
```

### 11. Verify status using the main console
Check the node status. Back in the main console, Relay should be set to `On`.
```bash
===============================================================
Core: a71f007f             NodeJS: 10.15.0             PG: 10.6
===============================================================
Relay:  On         Forger: Off         NTP:  On         PG:  On
===============================================================
```

### 12. Monitoring the synchronization process
Monitor the sync progress using the log stream. Enter `R. Manage Relay`, and then `L. Show Log`

```bash
1|ark-core-relay  | [2019-01-08 09:37:40][INFO]                       : Starting Round 898 🕊
1|ark-core-relay  | [2019-01-08 09:37:40][INFO]                       : Saving round 898
```

Each round represents ~51 blocks synced.
::: info
A single round consists of 51 delegates each forging a single block. Sometimes a delegate misses a block, and thus around contains < 51 blocks on average.
:::

## Generic Linux installation
If your organization policy doesn't allow the use of other installation tools - meaning requirements clearly state that a standalone installation is needed, then the following scripts will help you with the installation of the Ark blockchain. The script assumes you have configured the other services such as `PostgreSQL` and is not idempotent.

::: tip
The following scripts assume that NodeJs and `PostgreSQL` are already installed on your system. For minimum versions, please use `NodeJs >10` and `Postgres database >9.5`. Install them according to your operating system instructions. 
:::

### Installation script
The script bellow is an ARK Core install script. You can adjust it to your own needs and system requirements. 
```bash
sudo yarn global add pm2 lerna
sudo -u postgres psql -c "create user ark with password 'password';"
sudo -u postgres psql -c "create database ark_mainnet with owner 'ark';"
mkdir -p ~/.ark/config
cat > ~/.ark/.env <<EOL
ARK_LOG_LEVEL=debug
ARK_DB_HOST=localhost
ARK_DB_PORT=5432
ARK_DB_USERNAME=ark
ARK_P2P_HOST=0.0.0.0
ARK_P2P_PORT=4001
ARK_API_HOST=0.0.0.0
ARK_API_PORT=4003
ARK_API_RATE_LIMIT=false
ARK_API_ENABLED=true
ARK_WEBHOOKS_HOST=0.0.0.0
ARK_WEBHOOKS_PORT=4004
ARK_GRAPHQL_HOST=0.0.0.0
ARK_GRAPHQL_PORT=4005
ARK_JSON_RPC_HOST=0.0.0.0
ARK_JSON_RPC_PORT=8080
EOL
cd ~/
git clone https://github.com/ArkEcosystem/core.git ark-core
cp -f ~/ark-core/packages/core/lib/config/mainnet/* ~/.ark/config/
cp -f ~/ark-core/packages/crypto/lib/networks/ark/mainnet.json  ~/.ark/config/network.json
cd ark-core
lerna bootstrap
cd packages/core
pm2 --name 'ark-core-relay' start -l ~/ark-core.log --merge-logs ./bin/ark -- relay --config ~/.ark/config --network mainnet
```

### Update script
```bash
pm2 stop all
cd ark-core
git reset --hard
git pull
lerna bootstrap
rm -f ~/.ark/config/peers_backup.*
cp -f ~/ark-core/packages/core/lib/config/mainnet/* ~/.ark/config/.
cp -f /home/node/ark-core/packages/crypto/lib/networks/ark/mainnet.json /home/node/.ark/config/network.json
pm2 start all --update-env
```

## Next steps
::: warning
Please note that API will be available when the node has synced with the network. This can take up to 15 hours depending on your network speed.
:::
Now that the relay node has been configured, you should head over to the [JSON-RPC installation guide](/exchanges/json-rpc.html) or look at relevant [Public API endpoints](/exchanges/public-api.html) related to blockchain functionality to manage your wallets and transactions. 


## Notes
Please read the documentation pages for all of our [Ark API clients and cryptography libraries](/sdk/) (offered in many programming languages).

Also, read the [API documentation](/api/public/v2/).
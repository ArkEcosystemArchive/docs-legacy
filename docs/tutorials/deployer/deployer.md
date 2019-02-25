# Using our Custom Deployer

Installing your first node on a bare-metal server is the best way to become familiar with the underlying dependencies and configuration files. The `deployer` handles most work for you; it only requires some initial dependencies such as `NodeJS` and for you to properly configure it.

For this guide you will need a server with an Ubuntu installation, both 16.04 or 18.04 are well tested, but other versions and distributions may work as well. Running this tutorial locally is also possible, but not recommended for actual usage.

## Remote into your machine using SSH

Skip this step if you are carrying out this guide locally.

```bash
user@user:~$ ssh user@myserver

Last login: Thu Jan 17 13:18:41 2019 from 94.215.141.65
```

Download Ark Deployer. Git should be installed as it is bundled with Ubuntu and other Linux based distributions.

```bash
$ git clone https://github.com/ArkEcosystem/ark-deployer.git \
  && cd ark-deployer

Cloning into 'ark-deployer'...
remote: Enumerating objects: 6, done.
remote: Counting objects: 100% (6/6), done.
remote: Compressing objects: 100% (6/6), done.
remote: Total 694 (delta 1), reused 0 (delta 0), pack-reused 688
Receiving objects: 100% (694/694), 116.61 KiB | 612.00 KiB/s, done.
Resolving deltas: 100% (447/447), done.
```

`NodeJS` and `NPM` are required for most of the products produced by Ark. `nvm` is especially useful for managing different `NodeJS` versions on the same machine.

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
source ~/.profile
nvm install 8.9.1
sudo apt-get update && sudo apt-get install -y jq
```

Install and set up your BridgeChain. Note that you must replace the IP address with your server's public IP, and name it something appropriate.

```bash
$ ./bridgechain.sh install-node \
      --name MyTest \
      --database ark_mytest \
      --token MYTEST \
      --symbol MT \
      --node-ip 51.141.3.209 \
      --explorer-ip 51.141.3.209 \
      --autoinstall-deps

==> Checking Dependencies...
...
...
==> Installing Program Dependencies...

==> Program Dependencies Installed!
==> Installing NodeJS Dependencies...
...
...
```

There are many more options available when installing the node, which can be found [here](https://github.com/ArkEcosystem/ark-deployer#optional-parameters). You can also use a JSON config file, which you can learn about [here](https://github.com/ArkEcosystem/ark-deployer#json-config).

::: warning

Any changes to fees or the epoch time of the network currently prevent the Desktop Wallet from working with your chain.

:::

Once installed you will see output similar to this. The passphrase is the genesis passphrase which contains all pre-mined tokens. You will need this to distribute tokens to other wallets.

```
Your Genesis Details are:
  Passphrase: "cross neglect virtual bag waste evoke pumpkin mask tilt expect daughter come"
  Address: "MunwYrENGpa8itW3xvKg45Kabv89CJUjy2"
```

::: danger

Use this initial passphrase only during the setup or testing phase. Move all funds to a dedicated hardware wallet if you intend to use this network in production.

:::

## Start the BridgeChain

*Note: --name is important as it relates to the config files for your chain*

```bash
$ ./bridgechain.sh start-node --name MyTest

===> Starting...
warn:   --minUptime not set. Defaulting to: 1000ms
warn:   --spinSleepTime not set. Your script will exit if it does not stay up for at least 1000ms.
info:   Forever processing file: app.js
===> Start OK!
Watch Logs? [y/N]: y
```

Your logs should be showing the forging progress; where each virtualized Delegate awaits its turn before creating a new block.

### Set up another forging Node

You will need a new machine ready for us to set up. To make it easier, we will use `core-commander` to setup all dependencies then overwrite with our BridgeChain configuration.

First, install a node using the official [core-commander](/exchanges/relay.html)

### Set Custom configurations

in `core-commander/ecosystem.config.js` we can see what parameters are passed to the startup command when running the `relay`, `forger` or `explorer`.

The `--config` flag is of particular interest to us, as it passed the config files we wish to use. You can find real-world configurations in the [core repository](https://github.com/ArkEcosystem/core/tree/master/packages/core/bin/config). Each of the directories contains a full set of configuration files needed to run a node.

Edit/copy the `peers.json` and add the IP and port of your first node.

```json
{
  "minimumVersion": ">=2.0.15",
  "minimumNetworkReach": 20,
  "globalTimeout": 5000,
  "coldStart": 30,
  "whiteList": [],
  "blackList": [],
  "list": [
    {
      "ip": "my.intial.node.ip",
      "port": 4001
    },
    ],
  "sources": [
    "https://raw.githubusercontent.com/ArkEcosystem/peers/master/mainnet.json"
  ]
}
```

Next, edit/copy the genesisBlock.json and alter the initial values using the explorer or [Public API](/api/public/v2/blocks.html).

Leave the `delegates.json` empty, we do not want those passphrases public, as someone could use them to construct an alternate chain. Finally commit and push your new configurations, as others will use them to add nodes to your network.

## Conclusion

Next, you should head over to [Configuring GUI Services](wallet-explorer.md) configure the wallet and explorer.

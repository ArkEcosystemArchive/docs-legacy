# Vagrant Deployments

We have also provided a Vagrantfile which allows you to deploy your own BridgeChain and Explorer together with no configuration necessary.

*Note: This requires [Vagrant version 2+](https://www.vagrantup.com/downloads.html) to be installed.*

```bash
git clone https://github.com/ArkEcosystem/ark-deployer.git
```

To initiate a Vagrant Machine, execute:

```bash
vagrant up
```

And once you wish to tear down the `VM`, enter:

```bash
vagrant destroy
```

## Tweaking BridgeChain Options (Advanced)

Open up `~/ark-deployer/vagrant/config.json` and you will see all the possible options that you can change. These are all used when deploying the BridgeChain on Vagrant and can be customized. Refer to the [node options](https://github.com/ArkEcosystem/ark-deployer#optional-parameters) and [explorer options](https://github.com/ArkEcosystem/ark-deployer#optional-parameters-1) before continuing to get an idea of what each does. Once you are happy with your settings, go ahead and start the Vagrant environment as above.

## Next Steps

Tweak the configurations to your liking, and once you are ready for production deployment, ensure you have configured all GUI interfaces and secured the genesis funds.

Running a network of a single node is not possible. Add at least a node for each genesis delegate before publicly serving the network.
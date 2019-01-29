# FAQ

1. **Why do I need to “Force” my Network in the Desktop Wallet?** When your BridgeChain node is auto-forging, it uses loopback addresses (127.0.0.x) to connect to itself and act as a forging node. If the Force option isn’t enabled, the Desktop Wallet will try to connect to the loopback addresses as they show as peers when querying the /api/peers endpoint. Forcing a connection means you connect directly with your BridgeChain seed node, instead of having to launch a range of relay nodes to serve as peers.

2. **I lost my Genesis Passphrase. Where can I find it?** Take a look in your configuration file, in `delegates.json`. You will find it in there (unless you removed it).

3. **Will Deployer work on XYZ Operating System?** We recommend only running the Ark Node on Ubuntu 16.04. It may be possible on other Operating systems, but it is more specifically tested/used on this Operating System.

4. **Can I change the fees for my BridgeChain?** Yes you can which can be found under node options, however this causes issues with the Desktop Wallet (and anything that uses the ark-js package).

5. **What is a Seed Node?** A Seed Node is used as an initial peer facilitating `service discovery` of other peers. Something that is used as a basis for Nodes to connect with, to then become “attached” to the Network.

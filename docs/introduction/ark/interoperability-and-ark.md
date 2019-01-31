# Interoperability and Ark

For blockchain technology to be mass adopted, we need to deliver seamless communication between different blockchains. We need universal interoperability where solutions benefit from the reliability and trustlessness of public networks with the privacy and speed of private networks. Interoperability means inter- and cross-blockchain transfers and communication.

Interoperability should be addressed at different levels. Looking at Ark technology stack, we are addressing this with  [ARK ACES - Aces Contract Execution Services](https://arkaces.com/) for cross-chain communication with Ark SmartBridges. As for interchain communication (two different blockchains with the same technology stack should be able to "talk" with each other - i.e., enabling atomic swaps, sharing data, using the same consensus mechanism). We don't want to bloat the main network (we refrain from explaining the famous CryptoKitties fiasco) by pushing all the stakeholders on the same level of technology - there is no blockchain to rule them all.

Ark is at its core defined to address the challenge of interoperability with  [SmartBridges](/introduction/ark/how-does-ark-smartbridge-work)  architecture approach. ARK ACES is a perfect example of a solution addressing interoperability issues between different blockchains.

ACES is a community-based project solving the problem of interchain transactions and communication. ACES enables the blockchain economy by allowing micro-chain projects to connect to the liquidity and functionality of the entire blockchain ecosystem. We cannot achieve this with protocol-specific interoperability, but protocol-specific interoperability is almost certainly cheaper, faster, and possibly more trustless than protocol-agnostic interoperability. ACES focuses on protocol-agnostic interoperability because it allows us to integrate all potential future developments in the space. Protocol-agnostic interoperability combined with protocol-specific interoperability is a powerful concept that adds massive efficiencies to the entire crypto space.

![ACES](./assets/interoperability-and-ark/5536406-aces-linking-services.png)
*ACES Bridge Services concept using vendor field encoded listeners*

To address inter-chain communication, we deliver options to [clone](/guidebook/bridgechains/) our technology. Ark Deployer enables users, local communities, and other value chains to start their network where most of the workload will be done, and when needed the communication with the master chain will be used. By using the master chain, all the BridgeChains can use existing infrastructures, such as being already listed on exchanges, established trust and presence, and backend technology can be reused.

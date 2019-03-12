# The Ark Network

A blockchain network might seem a lot more complicated than it actually is. Here we describe the different components of the Ark Network. Note that in some cases, we might err on the side of simplicity as opposed to being correct. For the complete technical specification, you will have to wait for the revised Ark Whitepaper.

[[toc]]

## Relay Nodes

The backbone of the Ark Network is formed by `Relay Nodes`, servers hosting a complete copy of the Ark blockchain and serving as API endpoints. Each node holds a registry of all other nodes, which they use to pass on transactions and blocks.

The Desktop and Mobile wallets use these nodes to obtain data and send transactions forward.

Anyone can set up a `Relay Node` and strengthen the Ark Network. However, you are not able to earn ARK or stake through a normal node, for that, you must be elected to become a delegate and upgrade your node with a `forger` component.

## Delegate Nodes

The core of Ark is formed by its delegates and their nodes, which process transactions and add blocks to the blockchain. A Delegate Node consists of two parts, one or multiple `Relay Nodes`, and a single `forger` which processes the incoming transactions and forges the blocks.

To become a delegate, a node operator must accumulate a considerable amount of ARK (currently around 1.5 million). This is obviously quite an expensive, and thus individuals may choose to cooperate and vote on a single operator. They still control their ARK, but the operator obtains their vote weight. Most delegates are voted in by the community.

## Voting

A vote is a transaction, processed by `Relay Nodes` and `Delegate Nodes`, and thus visible in the blockchain. Every round, all votes are recounted to determine the next round's delegates. Although this recount occurs every 6.8 minutes, delegates do not often switch, unless their voters change their vote.

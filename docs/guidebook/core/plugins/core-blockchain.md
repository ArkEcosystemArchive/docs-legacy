---
title: "Blockchain"
---

# Blockchain

## Installation

```bash
yarn add @arkecosystem/core-blockchain
```

## **Alias**

`blockchain`

## **Implementation**

[core-blockchain](https://github.com/ArkEcosystem/core/tree/develop/packages/core-blockchain)

## **Notable Dependencies**

- [async](https://caolan.github.io/async/)
- [xstate](https://github.com/davidkpiano/xstate#readme)
- [immutable](http://facebook.github.io/immutable-js/)

## **Summary**

Blockchain is the primary "decision maker" of Ark Core. It receives updates on network state from the P2P API and the database, and uses this information to decide what processes should be run.

The blockchain is the central source of truth within Ark Core. This is true not because it holds the blockchain data directly (that responsibility falls to the database), but because the Blockchain API combines its knowledge of the network state with its local copy of the blockchain to determine the appropriate response to a given request.

## Usage

The blockchain API is primarily used to fetch the most up-to-date knowledge of the blockchain's current state. The most commonly utilized `core-blockchain` method throughout Ark Core is `getLastBlock()`, which returns the most recently created block on the chain. 

In general, `core-blockchain` should not be used by third-party plugins to update blockchain state directly. Any changes made to your internal blockchain representation will be reverted once your node connects to peers, as those peers will reject your node's changes and force it to rollback its database to match the network state.

For this reason the primary use of the Blockchain API should be to fetch the most up-to-date information about the current network state. If your custom plugin needs to access knowledge from blockchain history, the `core-database` package provides public methods spanning the full breadth and depth of possible queries. Advanced queries can utilize the `core-elasticsearch` package to harness the combined search power of Ark and ElasticSearch.

## Behind the Scenes

`core-blockchain` is an implementation of the State Machine design, and internally configures and extends the *xstate* library.

There are two primary components to the Blockchain API, and to state machines in general:

- **State** is the current status of the blockchain as understood by the Ark Core node
- **Actions** are dispatched by the blockchain in response to changes in state

The core of the `core-blockchain` package defines these states and actions. In addition, it specifies which actions should be taken as the state changes from one status to another.

If a node has recently rebooted and needs to collect blocks from peers, for example, the `core-blockchain` package oversees the synchronization process and watches the state for errors. In case of a network fork, `core-blockchain` initiates a rollback process to remove potentially faulty blocks before pinging peers.

A top-level overview of the possible states and actions can be found in the `machines` directory under [blockchain.js](https://github.com/ArkEcosystem/core/blob/develop/packages/core-blockchain/lib/machines/blockchain.js). There are many different components to `core-blockchain`, and anybody looking to better understand Ark Core's internals would be well serviced by studying this package in depth.

Here's a brief overview of how core functionality is divided throughout the package:

- The top-level [blockchain.js](https://github.com/ArkEcosystem/core/blob/develop/packages/core-blockchain/lib/blockchain.js) file contains the Blockchain class that is ultimately loaded into the container. This file implements the *xstate* library, inherits actions from the state-machine.js file, and dispatches events to queues to be fulfilled by other packages
- The [state-machine.js](https://github.com/ArkEcosystem/core/blob/develop/packages/core-blockchain/lib/state-machine.js) file is dedicated to providing many of the actions that the Blockchain class executes in response to changes in state. This is a good place to look to find the "meat" of the `core-blockchain` package, as much of the interaction with other Ark Core packages happens here.
- The Blockchain class maintains two queues: the [rebuild](https://github.com/ArkEcosystem/core/blob/develop/packages/core-blockchain/lib/queue/rebuild.js) queue and the [process](https://github.com/ArkEcosystem/core/blob/develop/packages/core-blockchain/lib/queue/process.js) queue. The process queue is used to add new blocks to the chain, while the rebuild queue is used to verify and synchronize blocks in the case of a fork or rollback. Both queues ultimately dispatch actions with block payloads to the Blockchain class for further processing.
- The [state-storage.js](https://github.com/ArkEcosystem/core/blob/develop/packages/core-blockchain/lib/state-storage.js) file provides a single, in-memory access point for all files in the `core-blockchain` package to read and update state as necessary. It utilizes the *immutable* library to prevent side effects from causing unwanted state mutations.

## **Default Settings**
```js
{
  fastRebuild: false,
  databaseRollback: {
    maxBlockRewind: 10000,
    steps: 1000,
  },
  state: {
    maxLastBlocks: 100,
    maxLastTransactionIds: 10000,
  },
}
```
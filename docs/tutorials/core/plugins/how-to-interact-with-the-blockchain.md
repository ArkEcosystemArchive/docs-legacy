---
title: "How to Interact With the Blockchain"
---

# How to Interact With the Blockchain

[[toc]]

## Getting Started

The `core-blockchain` package is the central entity around which everythign revolves. It provides a [state-machine](https://en.wikipedia.org/wiki/Finite-state_machine) that controls the state of your node and switches between states to sync, rollback or recover from a fork.

It holds all of the information that is important to know when you want to see what the current state of your node is. **Do not trust the database, trust the in-memory data it exposes as it's updated in real-time.**

## Interacting With the State of the Blockchain

```ts
import { app } from "@arkecosystem/core-container";

const blockchain = app.resolvePlugin("blockchain");

async function callBlockchainMethods() {
  // Check if the blockchain is fully synced
  blockchain.isSynced();

  // Get the last block we've received
  blockchain.getLastBlock();

  // Get the height of the last block we've received
  blockchain.getLastHeight();

  // Get the last block we've downloaded
  blockchain.getLastDownloadedBlock();

  // Get a list of events the blockchain emits
  blockchain.getEvents();
}

callBlockchainMethods();
```

## Conclusion

This guide should give you a rough idea of how to interact with the blockchain to get information about the state of your node.

**Treat the blockchain as a read-only entity when interacting with it through your plugin to avoid any unwanted side-effects.**.

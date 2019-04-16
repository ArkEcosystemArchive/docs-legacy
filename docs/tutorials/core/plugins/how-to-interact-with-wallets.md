---
title: "How to Interact With Wallets"
---

# How to Interact With Wallets

[[toc]]

## Getting Started

Almost all plugins will need to access wallets in one way or another. Core rebuilds all wallets from scratch based on transactions when it restarts and manages those wallets in-memory through the `WalletManager` that is exposed by `core-database`.

**Since 2.0 all interactions with wallets happen only in-memory as opposed to through the database like with 1.0.**

## Accessing Wallets

Below you can find a few examples of how to access wallets in different ways and perform checks on them.

```ts
import { app } from "@arkecosystem/core-container";

const walletManager = app.resolvePlugin("database").walletManager;

// This will contain all wallets that have an address
walletManager.allByAddress();

// This will contain all wallets that have a public key. This can differ from "allByAddress" as cold wallets have no addresses.
walletManager.allByPublicKey();

// This will contain all wallets that have a username, i.e. delegates.
walletManager.allByUsername();

// Retrieve a wallet by its address.
walletManager.findByAddress("ARMy9u1XvrZ124JzQq3oeJpjmBEnYkyU7D");

// Retrieve a wallet by its public key.
walletManager.findByPublicKey(
  "035217d8ff31d78992e0821667fed6d9298d2b923cd63b650e894e0bf11a0a6d7a"
);

// Retrieve a wallet by its username.
walletManager.findByUsername("boldninja");

// Check if a wallet for the given address is indexed.
walletManager.exists("ARMy9u1XvrZ124JzQq3oeJpjmBEnYkyU7D");

// Check if the given public is a delegate, i.e. it has a username.
walletManager.isDelegate(
  "035217d8ff31d78992e0821667fed6d9298d2b923cd63b650e894e0bf11a0a6d7a"
);
```

::: warning IMPORTANT
All wallets are based on in-memory transactions. They are not stored in the database!
:::

## Conclusion

This guide should give you a rough idea about how to access wallets from within your plugins through the `WalletManager` to build feature-rich plugins.

::: warning
Do not modify in-memory wallets through plugins as this can result in your node going out of sync or have other unwanted side-effects. Treat the wallet manager as a read-only entity!
:::

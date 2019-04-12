---
title: "Going Live!"
---

# Going Live!

Before going live with a new project or releasing a new version of an existing project it is important to ensure that all new features work as expected and old functionality is preserved unless it was intentionally removed or modified.

To make sure that everything is working as intended you should follow these checklists that are used whenever a project is going live or receives a new release. Having those checklists will make sure that you don't forget anything major.

**If you discover that something important is missing from the checklists send a PR to add it.**

## Checklist for Core

- Run tests and make sure CircleCI is passing
- Sync from 0 on mainnet
- Sync from 0 on devnet
- Deploy a fresh network from 0
- Test explorer with the `develop` branch of `core`
- Test that whitelist features are still working
- Test `core-json-rpc` to ensure it works for exchanges
- Run benchmarks on `master` and `develop` to see if there are crypto performance regressions

### Transactions

- Send a transfer transaction
  - 1 Passphrase
  - 2 Passphrases
- Send a vote transaction
  - 1 Passphrase
  - 2 Passphrases
- Send an unvote transaction
  - 1 Passphrase
  - 2 Passphrases
- Send a delegate registration transaction
  - 1 Passphrase
  - 2 Passphrases
- Send a second signature registration transaction
  - 1 Passphrase

## Checklist for Desktop Wallet

- Run tests and make sure CircleCI is passing
- Switching profile
- Sign & Verify a message
- Creating a new wallet
- Connect & Disconnect a ledger
- Setup the wallet from 0 **(delete the database / cache)**
- Browse news
- Switch networks
- Connect to custom peers and networks outside of ARK
- Test screenshot protection
- Create, browse, edit and remove contacts

### Wallets

- Browse wallets
- Create a new wallet
- Import a wallet
- Import a wallet **(with address only)**
- Import a wallet **(with passphrase only)**
- Protect with a password

### Transactions

- Browse transactions
- Send transactions with dynamic fees
- Send transactions with static fees
- Send a transfer transaction
  - 1 Passphrase
  - 2 Passphrases
  - Ledger
- Send a vote transaction
  - 1 Passphrase
  - 2 Passphrases
  - Ledger
- Send an unvote transaction
  - 1 Passphrase
  - 2 Passphrases
  - Ledger
- Send a delegate registration transaction
  - 1 Passphrase
  - 2 Passphrases
  - Ledger
- Send a second signature registration transaction
  - 1 Passphrase

---
title: "Migrating Your Tools from ARK Node to ARK Core"
---

# Migrating Your Tools from ARK Node to ARK Core

## Introduction

This article will guide you through the steps required to migrate your tools and applications from ARK Node to ARK Core v2.

## Posting Transactions

In ARK Node you would post your signed transactions to the P2P API at `http://127.0.0.1:4002/peer/transactions` and receive a list of transaction IDs.

This endpoint is still available in ARK Core. However, you are now advised to use `http://127.0.0.1:4003/api/v2/transactions` to post your transactions. It behaves the same way as the P2P API but has no risk of being deprecated as it is integrated into the new Public API.

**This new endpoint will return you three lists of transaction IDs:**

- Transactions that have been accepted to be processed.
- Transactions that have exceeded the throttle limit.
- Transactions that have been deemed as invalid.

Having those three lists allows you to stash excessive or invalid transactions and rebroadcast them at a later time or figure out what is wrong with them.

**Note on excessive transactions**
You can circumvent the transaction throttling that results in excessive transactions by whitelisting your wallets public key in the configuration.

## Paginating the 2.0 API

ARK Core currently supports both the 1.0 API from ARK Node which will be removed shortly and the new 2.0 API which provides proper pagination of data and indicates how much data is available.

If you interact with the 2.0 API and wish to paginate data you can append `?page=4&limit=25` to the URL. The response will contain a `meta` field that will contain the total count of records available, where you currently are and URLs to the next, previous, first and last page of items available.

Having those meta fields available will allow you to easily loop over all available pages without doing some wonky client-side calculations to figure out how many pages there are. Simply send requests until `meta.nextPage` is `null`.

## Client Libraries

The older SDKs consisted of different implementations per programming languages. ARK v2 also included a migration to a brand new SDK with a more consistent design across programming languages.

Each SDK consist of two libraries:

1. `{LANG}-client` library used to send and receive payloads to the public API, webhooks or JSON-RPC. (e.g [python-client](https://github.com/ARKEcosystem/python-client))

2. `{LANG}-crypto` library, which can create, sign and verify transactions. It also includes cryptographic functions to validate blocks.

When migrating to the newer SDKs, you will need to use both the new client and crypto libraries to sign and transmit transactions.

---
title: "Authentication"
---

# Authentication

[[toc]]

In order to communicate with the P2P API you will need to provide the nethash of the network you are working on, node version and port. Authenticating with an invalid nethash will return `{"success": false}`.

## Headers

| Name    | Type   | Description                                               | Required           |
|---------|:------:|-----------------------------------------------------------|:------------------:|
| nethash | string | The nethhash of the network you are making the request on | :white_check_mark: |
| version | string | The version of ArkEcosystem/ark-node.                     | :white_check_mark: |
| port    | int    | The port used for communication.                          | :white_check_mark: |

## Mainnet

| Name    | Value                                                            |
|---------|------------------------------------------------------------------|
| nethash | 6e84d08bd299ed97c212c886c98a57e36545c8f5d645ca7eeae63a8bd62d8988 |
| version | 1.0.3                                                            |
| port    | 1                                                                |

## Devnet

| Name    | Value                                                            |
|---------|------------------------------------------------------------------|
| nethash | 578e820911f24e039733b45e4882b73e301f813a0d2c31330dafda84534ffa23 |
| version | 1.0.3                                                            |
| port    | 1                                                                |

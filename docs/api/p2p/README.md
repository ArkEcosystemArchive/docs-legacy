---
title: "P2P"
---

## Introduction

This describes the resources that make up the internal P2P. If you have any problems or requests please [open an issue](https://github.com/ARKEcosystem/core/issues/new/choose).

### Public Testing Relay

If you are not running a relay yourself you can use [https://api.ark.io/peer/](https://api.ark.io/peer/) to test API calls. Happy developing!

## Authentication

In order to communicate with the P2P API you will need to provide the nethash of the network you are working on, node version and port. Authenticating with an invalid nethash will return `{"success": false}`.

### Headers

| Name    |  Type  | Description                                               |      Required      |
| ------- | :----: | --------------------------------------------------------- | :----------------: |
| nethash | string | The nethhash of the network you are making the request on | :white_check_mark: |
| version | string | The version of ARKEcosystem/ark-node.                     | :white_check_mark: |
| port    |  int   | The port used for communication.                          | :white_check_mark: |

### Mainnet

| Name    | Value                                                            |
| ------- | ---------------------------------------------------------------- |
| nethash | 6e84d08bd299ed97c212c886c98a57e36545c8f5d645ca7eeae63a8bd62d8988 |
| version | 1.0.3                                                            |
| port    | 1                                                                |

### Devnet

| Name    | Value                                                            |
| ------- | ---------------------------------------------------------------- |
| nethash | 578e820911f24e039733b45e4882b73e301f813a0d2c31330dafda84534ffa23 |
| version | 1.0.3                                                            |
| port    | 1                                                                |

## Create a transaction

### Endpoint

```
POST /peer/transactions
```

### Body Parameters

| Name         | Type  | Description                         |      Required      |
| ------------ | :---: | ----------------------------------- | :----------------: |
| transactions | array | The list of transactions to create. | :white_check_mark: |

### Response

```json
{
    "success": true,
    "transactionIds": [
        "15d4b3e933b79e5172bbf14c2bd3f92d927394cd8ebd102f18dcc2203af363ca",
        "c48862c4df75a8b0859b559658c757c1c289088488630494fe51613db0747e57",
        "bd10b25444363252e0787e46f5cac90797d08a0c34d507a10d064c94cccf6226",
        "ba9e1d4ad2db9f860deef0e5d5c46bbd9f16222295aafd468e23d4f3d04cfbb8",
        "27963debfa3ced1f606193e81fe3fae16c225c8607e0fd267266a448b5f38520",
        "e9fffd1536f43f36840b8fa2793d4ac473db97bd864bdd54910b4de19fd954db",
        "320111c0c0fd386907cd912e376690704ed118a559f86bd4e00e99db7b7ffc10",
        "176a6d425828f6e7120b790cd77f2a447e3e9b2ccf20808dcc97f027b6dd0eba",
        "dd7015b4bb3768e7ffc0c06a9b72f85f01abc69329e7990f864ebdc3daa1f9e3",
        "dad91ecf3e547cd6b7d7868d1c18b99b88f1f8d2c16ed5f1a7e96eb5a0010c0d"
    }
}
```

---
title: "Public Node API"
---

# Public Node API

The `node` resource is useful for service discovery, health checks, and obtaining network configurations, such as fees, API, and token information.

::: warning
Note that these parameters are returned by the specific Node and that other nodes might adhere to a different set of parameters.
:::

## Retrieve the Configuration

Used to access a Node's configuration and the network it is attached to (identified by the `nethash`).

### Endpoint

```
GET /api/node/configuration
```

### Response

```json
{
    "data": {
        "nethash": "578e820911f24e039733b45e4882b73e301f813a0d2c31330dafda84534ffa23",
        "token": "DARK",
        "symbol": "DѦ",
        "explorer": "https://dexplorer.ark.io",
        "version": 30,
        "ports": {
            "@arkecosystem/core-p2p": 4000,
            "@arkecosystem/core-api": 4003,
            "@arkecosystem/core-json-rpc": 8080
        },
        "constants": {
            "height": 75600,
            "reward": 200000000,
            "activeDelegates": 51,
            "blocktime": 8,
            "block": {
                "version": 0,
                "maxTransactions": 50,
                "maxPayload": 2097152
            },
            "epoch": "2017-03-21T13:00:00.000Z",
            "fees": {
                "staticFees": {
                    "transfer": 10000000,
                    "secondSignature": 500000000,
                    "delegateRegistration": 2500000000,
                    "vote": 100000000,
                    "multiSignature": 500000000,
                    "ipfs": 0,
                    "timelockTransfer": 0,
                    "multiPayment": 0,
                    "delegateResignation": 0
                }
            },
            "ignoreInvalidSecondSignatureField": false
        },
        "transactionPool": {
            "maxTransactionAge": 21600,
            "dynamicFees": {
                "enabled": true,
                "minFeePool": 1000,
                "minFeeBroadcast": 1000,
                "addonBytes": {
                    "transfer": 100,
                    "secondSignature": 250,
                    "delegateRegistration": 400000,
                    "vote": 100,
                    "multiSignature": 500,
                    "ipfs": 250,
                    "timelockTransfer": 500,
                    "multiPayment": 500,
                    "delegateResignation": 400000
                }
            }
        }
    }
}
```

## Retrieve the Fee Statistics

Used to access a Node's fee statistics.

### Endpoint

```
GET /api/node/fees
```

### Query Parameters

| Name   | Type   | Description                                | Required |
| :----- | :----: | :----------------------------------------- | :------: |
| days   | int    | The number of days which will be regarded. |   :x:    |

### Response

```json
{
    "meta": {
        "days": 7
    },
    "data": [
        {
            "type": "0",
            "min": "192309",
            "max": "100000000",
            "avg": "653891",
            "sum": "2820887339",
            "median": "460000"
        },
        {
            "type": "3",
            "min": "1822918",
            "max": "73422894",
            "avg": "59645587",
            "sum": "715747046",
            "median": "68488514"
        }
    ]
}
```

## Retrieve the Status

The status allows for health checking, showing if the node is in sync with the network.

### Endpoint

```
GET /api/node/status
```

### Response

```json
{
    "data": {
        "synced": false,
        "now": 3034451,
        "blocksCount": -36
    }
}
```

## Retrieve the Syncing Status

The `syncing` resource is very much alike `node/status`, providing information on the syncing progress. If a node is not syncing but significantly behind in blocks, it might be time to perform a check.

### Endpoint

```
GET /api/node/syncing
```

### Response

```json
{
    "data": {
        "syncing": true,
        "blocks": -36,
        "height": 3034451,
        "id": "5444078994968869529"
    }
}
```

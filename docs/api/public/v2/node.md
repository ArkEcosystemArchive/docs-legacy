---
title: Public Node API
---

# Public Node API

## Retrieve the configuration

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
          "@arkecosystem/core-graphql": 4005,
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
            "dynamic": true,
            "dynamicFees": {
              "minFeePool": 3000,
              "minFeeBroadcast": 3000,
              "addonBytes": {
                "transfer": 100,
                "secondSignature": 250,
                "delegateRegistration": 40000,
                "vote": 100,
                "multiSignature": 500,
                "ipfs": 250,
                "timelockTransfer": 500,
                "multiPayment": 500,
                "delegateResignation": 500
              }
            },
            "staticFees": {
              "transfer": 10000000,
              "secondSignature": 500000000,
              "delegateRegistration": 2500000000,
              "vote": 100000000,
              "multiSignature": 500000000,
              "ipfs": 0,
              "timelockTransfer": 0,
              "multiPayment":0,
              "delegateResignation": 0 
            }
          }
        }
        "feeStatistics": [
        {
          "type": 0,
          "fees": {
            "minFee": 155,
            "maxFee": 10000000,
            "avgFee": 3186765
          }
        },
        {
          "type": 3,
          "fees": {
            "minFee": 156,
            "maxFee": 100000000,
            "avgFee": 18470653
          }
        },
        {
          "type": 1,
          "fees": {
            "minFee": 500000000,
            "maxFee": 500000000,
            "avgFee": 500000000
          }
        },
        {
        "type": 2,
          "fees": {
            "minFee": 200,
            "maxFee": 2500000000,
            "avgFee": 127583435
          }
        }
        ],
    }
}
```

## Retrieve the status

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

## Retrieve the syncing status

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

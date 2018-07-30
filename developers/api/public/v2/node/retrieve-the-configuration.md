---
title: "Retrieve the configuration"
---

# Retrieve the configuration

[[toc]]

## Endpoint

```
GET /api/node/configuration
```

## Response

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
        "feeStatistics": [
          {
            "type": 0,
            "fees": {
              "minFee": 268421,
              "maxFee": 597781,
              "avgFee": 404591
            }
          }
        ],
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
                "send": 10000000,
                "vote": 100000000,
                "secondsignature": 500000000,
                "delegate": 2500000000,
                "multisignature": 500000000
            }
        }
    }
}
```

---
title: "List all transactions of a wallet"
---

# List all transactions of a wallet

[[toc]]

## Endpoint

```
GET /api/wallets/{id}/transactions
```

## Path Parameters

| Name | Type   | Description                                   | Required           |
|------|:------:|-----------------------------------------------|:------------------:|
| id   | string | The identifier of the wallet to be retrieved. | :white_check_mark: |

## Query Parameters

| Name  | Type | Description                                   | Required |
|-------|:----:|-----------------------------------------------|:--------:|
| page  | int  | The number of the page that will be returned. | :x:      |
| limit | int  | The number of resources per page.             | :x:      |

## Response

```json
{
    "meta": {
        "count": 2,
        "pageCount": 127430,
        "totalCount": 254860,
        "next": "/v2/wallets/boldninja/transactions?page=2",
        "previous": null,
        "self": "/v2/wallets/boldninja/transactions?page=1",
        "first": "/v2/wallets/boldninja/transactions?page=1",
        "last": "/v2/wallets/boldninja/transactions?page=127430"
    },
    "data": [
        {
            "id": "5c6ce775447a5acd22050d72e2615392494953bb1fb6287e9ffb3c33eaeb79aa",
            "blockId": "4271682877946294396",
            "type": 0,
            "amount": 32106400000,
            "fee": 10000000,
            "sender": "DDiTHZ4RETZhGxcyAi1VruCXZKxBFqXMeh",
            "recipient": "DQnQNoJuNCvpjYhxL7fsnGepHBqrumgsyP",
            "signature": "3044022047c39f6f45a46a87f91ca867f9551dbebf0035adcfcbdc1370222c7a1517fc0002206fb5ecc10460e0352a8b626a508e2fcc76e39e490b0a2581dd772ebc8079696e",
            "confirmations": 1683,
            "timestamp": {
                "epoch": 32794053,
                "unix": 1522895253,
                "human": "2018-04-05T02:27:33Z"
            }
        }
    ]
}
```

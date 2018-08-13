---
title: "List all sent transactions of a wallet"
---

# List all sent transactions of a wallet

[[toc]]

## Endpoint

```
GET /api/wallets/{id}/transactions/sent
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
        "pageCount": 2,
        "totalCount": 4,
        "next": "/v2/wallets/boldninja/transactions/sent?page=2",
        "previous": null,
        "self": "/v2/wallets/boldninja/transactions/sent?page=1",
        "first": "/v2/wallets/boldninja/transactions/sent?page=1",
        "last": "/v2/wallets/boldninja/transactions/sent?page=2"
    },
    "data": [
        {
            "id": "08c6b23f9edd97b613f17153fb97a316a4fb83136e9842655dafc8262f363e0e",
            "blockId": "14847399772737279404",
            "type": 3,
            "amount": 0,
            "fee": 100000000,
            "sender": "DARiJqhogp2Lu6bxufUFQQMuMyZbxjCydN",
            "recipient": "DARiJqhogp2Lu6bxufUFQQMuMyZbxjCydN",
            "signature": "304402207ba0e8aaee93695360081b7ce713f13d62b544038ac440bd46357398af86cae6022059ac74586738be1ef622e0baba992d0e417d9aed7ab980f374eb0c9d53e25f8e",
            "asset": {
                "votes": [
                    "+0257b7724e97cd832e0c28533a86da5220656f9b5122141daab20e8526decce01f"
                ]
            },
            "confirmations": 1636232,
            "timestamp": {
                "epoch": 17094358,
                "unix": 1507195558,
                "human": "2017-10-05T09:25:58Z"
            }
        }
    ]
}
```

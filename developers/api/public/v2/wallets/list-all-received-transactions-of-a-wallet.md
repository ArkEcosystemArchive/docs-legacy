---
title: "List all received transactions of a wallet"
---

# List all received transactions of a wallet

[[toc]]

## Endpoint

```
GET /api/wallets/{id}/transactions/received
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
        "pageCount": 4,
        "totalCount": 8,
        "next": "/v2/wallets/boldninja/transactions/received?page=2",
        "previous": null,
        "self": "/v2/wallets/boldninja/transactions/received?page=1",
        "first": "/v2/wallets/boldninja/transactions/received?page=1",
        "last": "/v2/wallets/boldninja/transactions/received?page=4"
    },
    "data": [
        {
            "id": "c46a6a83f7a358f269691c16f050beeab669767643634086bc12ad1182d54413",
            "blockId": "17271524574301696572",
            "type": 0,
            "amount": 5000000000,
            "fee": 10000000,
            "sender": "DK6Q1Lufhb939H9EshLViYbaaKUkswMiUz",
            "recipient": "DARiJqhogp2Lu6bxufUFQQMuMyZbxjCydN",
            "signature": "304402204b81411e507273f2a27e6135510abda5bff00a0d3121977df09363227c8fd2360220503cab4484a7db785d91a7adcfad681811e3d73f2d00b4dab7e4190ecd41cb34",
            "vendorField": "More monopoly money for EVERYONE!!",
            "confirmations": 1482069,
            "timestamp": {
                "epoch": 18382414,
                "unix": 1508483614,
                "human": "2017-10-20T07:13:34Z"
            }
        }
    ]
}
```

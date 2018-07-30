---
title: "List all top wallets"
---

# List all top wallets

[[toc]]

## Endpoint

```
GET /api/wallets/top
```

## Query Parameters

| Name  | Type | Description                                   | Required |
|-------|:----:|-----------------------------------------------|:--------:|
| page  | int  | The number of the page that will be returned. | :x:      |
| limit | int  | The number of resources per page.             | :x:      |

## Response

```json
{
    "data": [
        {
            "address": "DGihocTkwDygiFvmg6aG8jThYTic47GzU9",
            "publicKey": "024c8247388a02ecd1de2a3e3fd5b7c61ecc2797fa3776599d558333ef1802d231",
            "balance": 11499593462120632,
            "isDelegate": false
        },
        {
            "address": "DRac35wghMcmUSe5jDMLBDLWkVVjyKZFxK",
            "publicKey": "0374e9a97611540a9ce4812b0980e62d3c5141ea964c2cab051f14a78284570dcd",
            "balance": 554107676293547,
            "isDelegate": false
        },
        ...
    ]
}
```

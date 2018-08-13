---
title: "Search all blocks"
---

# Search all blocks

[[toc]]

## Endpoint

```
POST /api/blocks/search
```

## Query Parameters

| Name  | Type | Description                                   | Required |
|-------|:----:|-----------------------------------------------|:--------:|
| page  | int  | The number of the page that will be returned. | :x:      |
| limit | int  | The number of resources per page.             | :x:      |

## Body Parameters

| Name                      | Type   | Description  | Required |
|---------------------------|:------:|--------------|:--------:|
| id                        | string | ...          | :x:      |
| version                   | int    | ...          | :x:      |
| previousBlock             | int    | ...          | :x:      |
| payloadHash               | string | ...          | :x:      |
| generatorPublicKey        | string | ...          | :x:      |
| blockSignature            | string | ...          | :x:      |
| timestamp                 | object | ...          | :x:      |
| timestamp.from            | int    | ...          | :x:      |
| timestamp.to              | int    | ...          | :x:      |
| height                    | object | ...          | :x:      |
| height.from               | int    | ...          | :x:      |
| height.to                 | int    | ...          | :x:      |
| numberOfTransactions      | object | ...          | :x:      |
| numberOfTransactions.from | int    | ...          | :x:      |
| numberOfTransactions.to   | int    | ...          | :x:      |
| totalAmount               | object | ...          | :x:      |
| totalAmount.from          | int    | ...          | :x:      |
| totalAmount.to            | int    | ...          | :x:      |
| totalFee                  | object | ...          | :x:      |
| totalFee.from             | int    | ...          | :x:      |
| totalFee.to               | int    | ...          | :x:      |
| reward                    | object | ...          | :x:      |
| reward.from               | int    | ...          | :x:      |
| reward.to                 | int    | ...          | :x:      |
| payloadLength             | object | ...          | :x:      |
| payloadLength.from        | int    | ...          | :x:      |
| payloadLength.to          | int    | ...          | :x:      |

## Response

```json
{
    "meta": {
        "count": 1,
        "pageCount": 1,
        "totalCount": 1,
        "next": null,
        "previous": null,
        "self": "/v2/blocks/14126007750611341900/transactions/search?page=1",
        "first": "/v2/blocks/14126007750611341900/transactions/search?page=1",
        "last": "/v2/blocks/14126007750611341900/transactions/search?page=1"
    },
    "data": [
        {
            "id": "57415c61e6e7f10a6f9820d5124b3916f3c3a036b360f4802f0eb484f86f3369",
            "blockId": "14126007750611341900",
            "type": 0,
            "amount": 1000000000000000,
            "fee": 10000000,
            "sender": "DGihocTkwDygiFvmg6aG8jThYTic47GzU9",
            "recipient": "DRac35wghMcmUSe5jDMLBDLWkVVjyKZFxK",
            "signature": "3045022100878335a71ab6769f3c1e2895041ad24d6c58cdcfe1151c639e65289e5287b0a8022010800bcfdc3223a9c59a6b014e8adf72f1c34df8a46afe655b021930b03e214e",
            "vendorField": "yo",
            "confirmations": 3034848,
            "timestamp": {
                "epoch": 3909196,
                "unix": 1494010396,
                "human": "2017-05-05T18:53:16Z"
            }
        }
    ]
}
```

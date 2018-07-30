---
title: "List all transactions of a block"
---

# List all transactions of a block

[[toc]]

## Endpoint

```
GET /api/blocks/{id}/transactions
```

## Path Parameters

| Name | Type   | Description                                  | Required           |
|------|:------:|----------------------------------------------|:------------------:|
| id   | string | The identifier of the block to be retrieved. | :white_check_mark: |

## Query Parameters

| Name  | Type | Description                                   | Required |
|-------|:----:|-----------------------------------------------|:--------:|
| page  | int  | The number of the page that will be returned. | :x:      |
| limit | int  | The number of resources per page.             | :x:      |

## Response

```json
{
    "meta": {
        "count": 1,
        "pageCount": 1,
        "totalCount": 1,
        "next": null,
        "previous": null,
        "self": "/v2/blocks/14126007750611341900/transactions?page=1",
        "first": "/v2/blocks/14126007750611341900/transactions?page=1",
        "last": "/v2/blocks/14126007750611341900/transactions?page=1"
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

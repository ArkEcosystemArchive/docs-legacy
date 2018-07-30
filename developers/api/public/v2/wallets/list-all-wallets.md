---
title: "List all wallets"
---

# List all wallets

[[toc]]

## Endpoint

```
GET /api/wallets
```

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
        "pageCount": 421,
        "totalCount": 841,
        "next": "/v2/wallets?page=2",
        "previous": null,
        "self": "/v2/wallets?page=1",
        "first": "/v2/wallets?page=1",
        "last": "/v2/wallets?page=421"
    },
    "data": [
        {
            "address": "D59NTfV92ca9QevUydvMiFMFdubbCaAVCV",
            "publicKey": "037d035f08b3bad0d5bb605232c7aa41555693c480044dbeb797270a44c339da5a",
            "balance": 1023145260990,
            "isDelegate": false
        }
    ]
}
```

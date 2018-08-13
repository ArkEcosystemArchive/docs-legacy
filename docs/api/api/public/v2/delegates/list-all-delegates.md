---
title: "List all delegates"
---

# List all delegates

[[toc]]

## Endpoint

```
GET /api/delegates
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
        "pageCount": 99,
        "totalCount": 197,
        "next": "/v2/delegates?page=2",
        "previous": null,
        "self": "/v2/delegates?page=1",
        "first": "/v2/delegates?page=1",
        "last": "/v2/delegates?page=99"
    },
    "data": [
        {
            "username": "dark_jmc",
            "address": "D5PXQVeJmchVrZFHL7cALZK8mWWzjCaVfz",
            "publicKey": "02a9a0ac34a94f9d27fd9b4b56eb3c565a9a3f61e660f269775fb456f7f3301586",
            "votes": 0,
            "blocks": {
                "produced": 0,
                "missed": 0,
                "last": {
                    "id": "12383884455448354193",
                    "timestamp": {
                        "epoch": 31784600,
                        "unix": 1521885800,
                        "human": "2018-03-24T10:03:20Z"
                    }
                }
            },
            "production": {
                "approval": "0.08",
                "productivity": "0.00"
            }
        }
    ]
}
```

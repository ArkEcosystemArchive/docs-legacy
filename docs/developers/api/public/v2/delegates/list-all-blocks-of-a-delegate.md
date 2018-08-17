---
title: "List all blocks of a delegate"
---

# List all blocks of a delegate

[[toc]]

## Endpoint

```
GET /api/delegates/{id}/blocks
```

## Path Parameters

| Name  | Type   | Description                                     | Required           |
|-------|:------:|-------------------------------------------------|:------------------:|
| id^   | string | The identifier of the delegate to be retrieved. | :white_check_mark: |

^ id can be one of `username`, `address` or `publicKey`.

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
        "pageCount": 29919,
        "totalCount": 59838,
        "next": "/v2/delegates/boldninja/blocks?page=2",
        "previous": null,
        "self": "/v2/delegates/boldninja/blocks?page=1",
        "first": "/v2/delegates/boldninja/blocks?page=1",
        "last": "/v2/delegates/boldninja/blocks?page=29919"
    },
    "data": [
        {
            "id": "10652480998435361357",
            "version": 0,
            "height": 3035318,
            "previous": "12548322724277171379",
            "forged": {
                "reward": 200000000,
                "fee": 0,
                "total": 200000000
            },
            "payload": {
                "hash": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
                "length": 0
            },
            "generator": {
                "username": "boldninja",
                "address": "DARiJqhogp2Lu6bxufUFQQMuMyZbxjCydN",
                "publicKey": "022cca9529ec97a772156c152a00aad155ee6708243e65c9d211a589cb5d43234d"
            },
            "signature": "3044022034e754a3ff70adba6323517e1297c6a9f30176df2ac589661e9206fe60a203120220182c38da201fee20e803bb7725fe9618d6707547e6d7b757d4108f546934fe1c",
            "transactions": 0,
            "timestamp": {
                "epoch": 32816112,
                "unix": 1522917312,
                "human": "2018-04-05T08:35:12Z"
            }
        }
    ]
}
```

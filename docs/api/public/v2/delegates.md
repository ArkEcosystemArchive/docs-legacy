---
title: Public Delegates API
---

# Public Delegates API

## List all delegates

### Endpoint

```
GET /api/delegates
```

### Query Parameters

| Name  | Type | Description                                   | Required |
|-------|:----:|-----------------------------------------------|:--------:|
| page  | int  | The number of the page that will be returned. | :x:      |
| limit | int  | The number of resources per page.             | :x:      |

### Response

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

## Retrieve a delegate

### Endpoint

```
GET /api/delegates/{id}
```

### Path Parameters

| Name | Type   | Description                                     | Required           |
|------|:------:|-------------------------------------------------|:------------------:|
| id   | string | The identifier of the delegate to be retrieved. | :white_check_mark: |

### Response

```json
{
    "data": {
        "username": "boldninja",
        "address": "DARiJqhogp2Lu6bxufUFQQMuMyZbxjCydN",
        "publicKey": "022cca9529ec97a772156c152a00aad155ee6708243e65c9d211a589cb5d43234d",
        "votes": 0,
        "blocks": {
            "produced": 0,
            "missed": 0,
            "last": {
                "id": "10652480998435361357",
                "timestamp": {
                    "epoch": 32816112,
                    "unix": 1522917312,
                    "human": "2018-04-05T08:35:12Z"
                }
            }
        },
        "production": {
            "approval": "0.10",
            "productivity": "0.00"
        }
    }
}
```

## List all blocks of a delegate

### Endpoint

```
GET /api/delegates/{id}/blocks
```

### Path Parameters

| Name | Type   | Description                                     | Required           |
|------|:------:|-------------------------------------------------|:------------------:|
| id   | string | The identifier of the delegate to be retrieved. | :white_check_mark: |

### Query Parameters

| Name  | Type | Description                                   | Required |
|-------|:----:|-----------------------------------------------|:--------:|
| page  | int  | The number of the page that will be returned. | :x:      |
| limit | int  | The number of resources per page.             | :x:      |

### Response

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

## List all voters of a delegate

### Endpoint

```
GET /api/delegates/{id}/voters
```

### Path Parameters

| Name | Type   | Description                                     | Required           |
|------|:------:|-------------------------------------------------|:------------------:|
| id   | string | The identifier of the delegate to be retrieved. | :white_check_mark: |

### Query Parameters

| Name  | Type | Description                                   | Required |
|-------|:----:|-----------------------------------------------|:--------:|
| page  | int  | The number of the page that will be returned. | :x:      |
| limit | int  | The number of resources per page.             | :x:      |

### Response

```json
{
    "meta": {
        "count": 2,
        "pageCount": 10,
        "totalCount": 19,
        "next": "/v2/delegates/boldninja/voters?page=2",
        "previous": null,
        "self": "/v2/delegates/boldninja/voters?page=1",
        "first": "/v2/delegates/boldninja/voters?page=1",
        "last": "/v2/delegates/boldninja/voters?page=10"
    },
    "data": [
        {
            "address": "D5mbS6mpP5UheuciNscpDLgC127kYjRtkK",
            "publicKey": "03f7e0b1ab14985990416f72ed0b206c20b9efa35156e4528c8ff749fa0eea5d5a",
            "balance": 400000000,
            "isDelegate": false
        }
    ]
}
```

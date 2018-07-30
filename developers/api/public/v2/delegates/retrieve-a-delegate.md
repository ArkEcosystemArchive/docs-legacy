---
title: "Retrieve a delegate"
---

# Retrieve a delegate

[[toc]]

## Endpoint

```
GET /api/delegates/{id}
```

## Path Parameters

| Name | Type   | Description                                     | Required           |
|------|:------:|-------------------------------------------------|:------------------:|
| id   | string | The identifier of the delegate to be retrieved. | :white_check_mark: |

## Response

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

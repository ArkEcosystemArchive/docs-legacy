---
title: Public Votes API
---

# Public Votes API

## List all votes

### Endpoint

```
GET /api/votes
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
        "pageCount": 658,
        "totalCount": 1315,
        "next": "/v2/votes?page=2",
        "previous": null,
        "self": "/v2/votes?page=1",
        "first": "/v2/votes?page=1",
        "last": "/v2/votes?page=658"
    },
    "data": [
        {
            "id": "560959e435cbf8eec60691890f3dd55d141e76077e1fe803f65d137c91099240",
            "blockId": "12872155462883631430",
            "type": 3,
            "amount": 0,
            "fee": 100000000,
            "sender": "DAp7JjULVgqzd4jLofkUyLRovHRPUTQwiZ",
            "recipient": "DAp7JjULVgqzd4jLofkUyLRovHRPUTQwiZ",
            "signature": "30440220522eadff84b5b4b2fc6a3ef611bf093dbd0a06963c32c767ee28729898d0a1d302203f851594e5b2271a987e98daa4fc8b5f384fac65c41eb1c43739af2d4b5dc902",
            "asset": {
                "votes": [
                    "-032fe001dff675a6edfe3d0e51201b2900d3b5050a46d770306aefaa574c022672"
                ]
            },
            "confirmations": 39989,
            "timestamp": {
                "epoch": 32414926,
                "unix": 1522516126,
                "human": "2018-03-31T17:08:46Z"
            }
        }
    ]
}
```

## Retrieve a vote

### Endpoint

```
GET /api/votes/{id}
```

### Query Parameters

| Name | Type   | Description                                 | Required           |
|------|:------:|---------------------------------------------|:------------------:|
| id   | string | The identifier of the vote to be retrieved. | :white_check_mark: |

### Response

```json
{
    "data": {
        "id": "beb8dd43c640f562704090159154b2742afba7eacada9e8edee447e34e7675c6",
        "blockId": "13661015019049808045",
        "type": 3,
        "amount": 0,
        "fee": 100000000,
        "sender": "DAp7JjULVgqzd4jLofkUyLRovHRPUTQwiZ",
        "recipient": "DAp7JjULVgqzd4jLofkUyLRovHRPUTQwiZ",
        "signature": "3045022100e9a743c5aa0df427f49af61d35fe617182479f7e8d368ce23b7ec43ab6d269c80220193aafd4ccb3eedbd76ded7ea99f31629013dc3af60540029fe98b274d42d284",
        "asset": {
            "votes": [
                "+032fe001dff675a6edfe3d0e51201b2900d3b5050a46d770306aefaa574c022672"
            ]
        },
        "confirmations": 48189,
        "timestamp": {
            "epoch": 32338609,
            "unix": 1522439809,
            "human": "2018-03-30T19:56:49Z"
        }
    }
}
```


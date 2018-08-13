---
title: "Retrieve a vote"
---

# Retrieve a vote

[[toc]]

## Endpoint

```
GET /api/votes/{id}
```

## Query Parameters

| Name | Type   | Description                                 | Required           |
|------|:------:|---------------------------------------------|:------------------:|
| id   | string | The identifier of the vote to be retrieved. | :white_check_mark: |

## Response

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

---
title: "Public Votes API"
---

# Public Votes API

A vote is a specific type of transaction (type 3). A wallet votes on a different wallet, which has registered itself eligible to become a Delegate. Wallets may vote for themselves.

::: tip

Users are often confused by the voting mechanism and the fee associated with a vote. A Delegate does **not** receive ARK from their voters, nor is the number of blocks they produce proportional to their voting weight.

:::

## List All Votes

All voting transactions may be obtained through this API. This is the equivalent of `transactions/search` with the body parameter `type: 3`.

### Endpoint

```
GET /api/votes
```

### Query Parameters

| Name    | Type | Description                                   | Required |
| :------ | :--: | :-------------------------------------------- | :------: |
| page    | int  | The number of the page that will be returned. | :x:      |
| limit   | int  | The number of resources per page.             | :x:      |

### Examples

```sh
curl --header "API-Version: 2" https://api.ark.io/api/votes
```

### Response

```json
{
    "meta": {
        "count": 100,
        "pageCount": 288,
        "totalCount": 28702,
        "next": "/api/v2/votes?page=2&limit=100",
        "previous": null,
        "self": "/api/v2/votes?page=1&limit=100",
        "first": "/api/v2/votes?page=1&limit=100",
        "last": "/api/v2/votes?page=288&limit=100"
    },
    "data": [
        {
            "id": "d3462a5d5c9712d128847b5a26941f16718e0107fd41c9a99cb2fc7d03c5cc52",
            "blockId": "d39289ae5d037ae109b012c3fcd65f3f9151b486118af0265f5b7cb4021fb71f",
            "version": 1,
            "type": 3,
            "amount": 0,
            "fee": 23858371,
            "sender": "ALCT5ahUdfUwX6nw3H6yzuv7Dbb4HgYBGi",
            "senderPublicKey": "0355480237497cdb7925a9b497449dcdf9ac6273c218bbf997fc1ffb71153c54f6",
            "recipient": "ALCT5ahUdfUwX6nw3H6yzuv7Dbb4HgYBGi",
            "signature": "3045022100ebe55d6851cfec45f4ceb5dec26f45c7a8b27b7b397b518d2f95b382ce8dfe9c02203330447fb46b826981ec52b3d8f4c697185fbe9fab45ac5e7448d3f6616f88d0",
            "asset": {
                "votes": [
                    "+03cbf08dcbf09502ca015c99321f6fea8511d39c18684353feb9c3015825d7ec67"
                ]
            },
            "confirmations": 403,
            "timestamp": {
                "epoch": 70650961,
                "unix": 1560752161,
                "human": "2019-06-17T06:16:01.000Z"
            }
        },
        ...
    ]
}
```

## Retrieve a Vote

Votes may be retrieved using their transaction ID. Note the `asset` field, which contains the `votes` object. The first character of each item in the array indicates if it was a vote: `+`, or unvote: `-`, followed by the public key of the Delegate.

### Endpoint

```
GET /api/votes/{id}
```

### Query Parameters

| Name | Type   | Description                                 | Required           |
| :--- | :----: | :------------------------------------------ | :----------------: |
| id   | string | The identifier of the vote to be retrieved. | :white_check_mark: |

### Examples

```sh
curl --header "API-Version: 2" https://api.ark.io/api/votes/d3462a5d5c9712d128847b5a26941f16718e0107fd41c9a99cb2fc7d03c5cc52
```

### Response

```json
{
    "data": {
        "id": "d3462a5d5c9712d128847b5a26941f16718e0107fd41c9a99cb2fc7d03c5cc52",
        "blockId": "d39289ae5d037ae109b012c3fcd65f3f9151b486118af0265f5b7cb4021fb71f",
        "version": 1,
        "type": 3,
        "amount": 0,
        "fee": 23858371,
        "sender": "ALCT5ahUdfUwX6nw3H6yzuv7Dbb4HgYBGi",
        "senderPublicKey": "0355480237497cdb7925a9b497449dcdf9ac6273c218bbf997fc1ffb71153c54f6",
        "recipient": "ALCT5ahUdfUwX6nw3H6yzuv7Dbb4HgYBGi",
        "signature": "3045022100ebe55d6851cfec45f4ceb5dec26f45c7a8b27b7b397b518d2f95b382ce8dfe9c02203330447fb46b826981ec52b3d8f4c697185fbe9fab45ac5e7448d3f6616f88d0",
        "asset": {
            "votes": [
                "+03cbf08dcbf09502ca015c99321f6fea8511d39c18684353feb9c3015825d7ec67"
            ]
        },
        "confirmations": 407,
        "timestamp": {
            "epoch": 70650961,
            "unix": 1560752161,
            "human": "2019-06-17T06:16:01.000Z"
        }
    }
}
```

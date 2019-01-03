---
title: Public Blocks API
---

# Public Blocks API

## List all blocks

### Endpoint

```
GET /api/blocks
```

### Query Parameters

| Name   | Type   | Description                                   | Required |
|--------|:------:|-----------------------------------------------|:--------:|
| page   | int    | The number of the page that will be returned. | :x:      |
| limit  | int    | The number of resources per page.             | :x:      |
| id     | string | The identifier of the block to be retrieved.  | :x:      |
| height | int    | The identifier of the block to be retrieved.  | :x:      |

### Response

```json
{
    "meta": {
        "count": 2,
        "pageCount": 1517682,
        "totalCount": 3035363,
        "next": "/v2/blocks?limit=2&page=2",
        "previous": null,
        "self": "/v2/blocks?limit=2&page=1",
        "first": "/v2/blocks?limit=2&page=1",
        "last": "/v2/blocks?limit=2&page=1517682"
    },
    "data": [
        {
            "id": "6402736103893238690",
            "version": 0,
            "height": 3035363,
            "previous": "58328125061111756",
            "forged": {
                "reward": 200000000,
                "fee": 0,
                "total": 200000000,
                "amount": 0
            },
            "payload": {
                "hash": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
                "length": 0
            },
            "generator": {
                "username": "shawmishrak",
                "address": "D7P41dV7s259L3P7BVPNyqExqNDC7vdfx9",
                "publicKey": "030fa94238eb63db0247a9bd6a3fd810f690b449ee9ce4eb654b94b22875a9a612"
            },
            "signature": "304402204d0dbeb4e71a99a0f128a3480350014f0a9f250818dae908edd15bce99f49be00220257bf240c5d8578e9ffe144e7dbf0c2259d34e6571e6a83402edc01daec6228e",
            "transactions": 0,
            "timestamp": {
                "epoch": 32816552,
                "unix": 1522917752,
                "human": "2018-04-05T08:42:32Z"
            }
        }
    ]
}
```

## Retrieve a block

### Endpoint

```
GET /api/blocks/{id|height}
```

### Path Parameters

| Name | Type   | Description                                            | Required           |
|------|:------:|--------------------------------------------------------|:------------------:|
| id   | string | The identifier or height of the block to be retrieved. | :white_check_mark: |

### Response

```json
{
    "data": {
        "id": "58328125061111756",
        "version": 0,
        "height": 3035362,
        "previous": "3741191868092856237",
        "forged": {
            "reward": 200000000,
            "fee": 0,
            "total": 200000000,
            "amount": 0
        },
        "payload": {
            "hash": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
            "length": 0
        },
        "generator": {
            "username": "genesis_6",
            "address": "D5e2FzTPqdEHridjzpFZCCVyepAu6Vpmk4",
            "publicKey": "023e577a7b3362e0aba70e6911d230e86d729b4cb640f0e0b25637b812a3e38b53"
        },
        "signature": "3044022047aeb0c9cfbb5709aba4c177009bfdc7804ef597073fb9ca6cb614d7e3d1af2d02207234119d02ca26600ece045c59266945081b4c8237370576aaad7c61a09fe0ad",
        "transactions": 0,
        "timestamp": {
            "epoch": 32816544,
            "unix": 1522917744,
            "human": "2018-04-05T08:42:24Z"
        }
    }
}
```
## List all transactions of a block

### Endpoint

```
GET /api/blocks/{id}/transactions
```

### Path Parameters

| Name | Type   | Description                                  | Required           |
|------|:------:|----------------------------------------------|:------------------:|
| id   | string | The identifier of the block to be retrieved. | :white_check_mark: |

### Query Parameters

| Name  | Type | Description                                   | Required |
|-------|:----:|-----------------------------------------------|:--------:|
| page  | int  | The number of the page that will be returned. | :x:      |
| limit | int  | The number of resources per page.             | :x:      |

### Response

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

## Search all blocks

### Endpoint

```
POST /api/blocks/search
```

### Query Parameters

| Name  | Type | Description                                   | Required |
|-------|:----:|-----------------------------------------------|:--------:|
| page  | int  | The number of the page that will be returned. | :x:      |
| limit | int  | The number of resources per page.             | :x:      |

### Body Parameters

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

### Response

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

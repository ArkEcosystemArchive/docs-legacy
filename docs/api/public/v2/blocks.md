---
title: Public Blocks API
---

# Public Blocks API

Blocks are added every eight seconds to the blockchain by a Delegate Node. Due to network/technical errors, a Delegate might miss a block. The time between two blocks is then 16 seconds, as the round continues to the next Delegate.

All state changes to the blockchain are in the form of blocks; they contain a set of transactions and metadata. A block is rejected if one or more of the transactions is invalid; or if the metadata is invalid. Thus a block returned from the Public API is always valid.

## List all blocks

The Public API may be used to query for blocks. This dataset contains millions of blocks; thus for analytical purposes, we recommend you use the [Elasticsearch](/guidebook/core/plugins/optional/core-elasticsearch.md) plugin or query the database directly.

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
| height | int    | The height of the block to be retrieved.      | :x:      |

### Examples

```sh
curl --header "API-Version: 2" https://api.ark.io/api/blocks?limit=2
```

```json
{
    "meta": {
        "count": 2,
        "pageCount": 3927594,
        "totalCount": 7855187,
        "next": "/api/v2/blocks?limit=2&page=2",
        "previous": null,
        "self": "/api/v2/blocks?limit=2&page=1",
        "first": "/api/v2/blocks?limit=2&page=1",
        "last": "/api/v2/blocks?limit=2&page=3927594"
    },
    "data": [
        {
            "id": "10598610037719670879",
            "version": 0,
            "height": 7813396,
            "previous": "8441333128785068929",
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
                "username": "arkworld",
                "address": "AeaqhUKfBtVqNhtMct3piBiWfdhbRwbg4W",
                "publicKey": "0257581c82d1931c4b0b2df9d658ecd303fcf2a6ea4ec291669ed06f44fb75c8fe"
            },
            "signature": "30450221009ae77d6b1c3c0e1a7efa488b2f1448f0ec1160650d836014cb739a645586f42902207e426224159252497b335e57da65c1352a6164a897bec350ad175eedf55d779a",
            "transactions": 0,
            "timestamp": {
                "epoch": 63574994,
                "unix": 1553676194,
                "human": "2019-03-27T08:43:14.000Z"
            }
        },
        {
            "id": "8441333128785068929",
            "version": 0,
            "height": 7813395,
            "previous": "7893686533852805129",
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
                "username": "bioly",
                "address": "AbUdMhk96FbzxH7vDYAwdyqUELmLopZV5x",
                "publicKey": "02c0b645f19ab304d25aae3add139edd9f6ca9fd0d98e57a808100de0e93832181"
            },
            "signature": "3045022100ae93480145a56c3122a93d92c5504635a3cd86eead21bb6b75501b6e370e734c0220490ef1518ed4d70469868621bc41f33c0031953643ac64bde28e7dc4b55bf2ff",
            "transactions": 0,
            "timestamp": {
                "epoch": 63574986,
                "unix": 1553676186,
                "human": "2019-03-27T08:43:06.000Z"
            }
        }
    ]
}
```

```sh
curl --header "API-Version: 2" https://api.ark.io/api/blocks?height=7000042
```

```json
{
    "meta": {
        "count": 1,
        "pageCount": 1,
        "totalCount": 1,
        "next": null,
        "previous": null,
        "self": "/api/v2/blocks?height=7000042&page=1&limit=100",
        "first": "/api/v2/blocks?height=7000042&page=1&limit=100",
        "last": "/api/v2/blocks?height=7000042&page=1&limit=100"
    },
    "data": [
        {
            "id": "15447090855222023348",
            "version": 0,
            "height": 7000042,
            "previous": "2176620005503475756",
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
                "username": "arkworld",
                "address": "AeaqhUKfBtVqNhtMct3piBiWfdhbRwbg4W",
                "publicKey": "0257581c82d1931c4b0b2df9d658ecd303fcf2a6ea4ec291669ed06f44fb75c8fe"
            },
            "signature": "3045022100f564e103c7474d2f7af5782544664f7188a5aa4e7c5829a63b15a2094a9480ae022049d18c5455dddcb5838fcac42be2d55f870ff18dd17aee3cab643f067544fcdd",
            "transactions": 0,
            "timestamp": {
                "epoch": 57039818,
                "unix": 1547141018,
                "human": "2019-01-10T17:23:38.000Z"
            }
        }
    ]
}
```

## Retrieve a block

Blocks may be retrieved by ID or by height. The height is an incremental integer.

*When comparing the order of transactions and blocks, prefer using the `block.height` over transaction timestamps, as the height is guaranteed to be correctly ordered.*

### Endpoint

```
GET /api/blocks/{id|height}
```

### Path Parameters

| Name         | Type   | Description                                            | Required           |
|--------------|:------:|--------------------------------------------------------|:------------------:|
| {id\|height} | string | The ID or height of the block to be retrieved.         | :white_check_mark: |

### Examples

```sh
curl --header "API-Version: 2" https://api.ark.io/api/blocks/15447090855222023348
```

```sh
curl --header "API-Version: 2" https://api.ark.io/api/blocks/7000042
```

```json
{
    "data": {
        "id": "15447090855222023348",
        "version": 0,
        "height": 7000042,
        "previous": "2176620005503475756",
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
            "username": "arkworld",
            "address": "AeaqhUKfBtVqNhtMct3piBiWfdhbRwbg4W",
            "publicKey": "0257581c82d1931c4b0b2df9d658ecd303fcf2a6ea4ec291669ed06f44fb75c8fe"
        },
        "signature": "3045022100f564e103c7474d2f7af5782544664f7188a5aa4e7c5829a63b15a2094a9480ae022049d18c5455dddcb5838fcac42be2d55f870ff18dd17aee3cab643f067544fcdd",
        "transactions": 0,
        "timestamp": {
            "epoch": 57039818,
            "unix": 1547141018,
            "human": "2019-01-10T17:23:38.000Z"
        }
    }
}
```

## List all transactions in a block

Instead of deserializing the block's payload; you can also obtain the transactions of each block as proper transaction objects directly.

### Endpoint

```
GET /api/blocks/{id|height}/transactions
```

### Path Parameters

| Name         | Type   | Description                                  | Required           |
|--------------|:------:|----------------------------------------------|:------------------:|
| {id\|height} | string | The identifier of the block to be retrieved. | :white_check_mark: |

### Query Parameters

| Name  | Type | Description                                   | Required |
|-------|:----:|-----------------------------------------------|:--------:|
| page  | int  | The number of the page that will be returned. | :x:      |
| limit | int  | The number of resources per page.             | :x:      |

### Examples

```sh
curl --header "API-Version: 2" https://api.ark.io/api/blocks/12079944220667996670/transactions
```

```json
{
    "meta": {
        "count": 2,
        "pageCount": 1,
        "totalCount": 2,
        "next": null,
        "previous": null,
        "self": "/api/v2/blocks/12079944220667996670/transactions?page=1&limit=100",
        "first": "/api/v2/blocks/12079944220667996670/transactions?page=1&limit=100",
        "last": "/api/v2/blocks/12079944220667996670/transactions?page=1&limit=100"
    },
    "data": [
        {
            "id": "7ce77a3520250b3e8174786835cf61b5f62db436949bf46952ed0e17fd8f903d",
            "blockId": "12079944220667996670",
            "version": 1,
            "type": 0,
            "amount": 100059429,
            "fee": 816000,
            "sender": "AKATy581uXWrbm8B4DTQh4R9RbqaWRiKRY",
            "recipient": "AKp7Bu9Nzpq3idcatrLmjsS76E6WkZ2Q2a",
            "signature": "3045022100f9af677be546ec1645fe16f057bff7e06d9410ada259960d1e89fd9cc940221a022052023db0f829d13e43f614a1dab9b07559faa15e2e571494eaf9cf93813ea7f1",
            "signSignature": "3044022067d039dcda866eb89803c9c649308db755aec1d2f7d0894436c6a06511033daf0220348a50856be0902066f8686a78c667cf5c64c504124ed1576d8aa8b029649700",
            "vendorField": "Payout from arkmoon",
            "confirmations": 356,
            "timestamp": {
                "epoch": 63573682,
                "unix": 1553674882,
                "human": "2019-03-27T08:21:22.000Z"
            }
        },
        {
            "id": "da7b05c6a2787a7744345378d614eaad503543daba422c80fc6b929f8be61a91",
            "blockId": "12079944220667996670",
            "version": 1,
            "type": 0,
            "amount": 188600000,
            "fee": 10000000,
            "sender": "AUexKjGtgsSpVzPLs6jNMM6vJ6znEVTQWK",
            "recipient": "AFvsCDPsYYUSSqmnAT7bomdAwPrdq7vDHp",
            "signature": "30440220438bb7293731cbfb62e2229590b64bc9858879d47a34caf88b29eed7761864fc022042fb49ceb25ba7982cbdde6cf544a20a893ceed2378be0564c3405e52cd33d11",
            "confirmations": 356,
            "timestamp": {
                "epoch": 63573682,
                "unix": 1553674882,
                "human": "2019-03-27T08:21:22.000Z"
            }
        }
    ]
}
```

## Search all blocks

It is possible to filter for specifics blocks using the search resource. Filtering for blocks at the Node side is a lot more efficient than requesting a large payload and filtering it at the client side.

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

| Name                      | Type   | Description                                                                                                                      | Required |
|---------------------------|:------:|----------------------------------------------------------------------------------------------------------------------------------|:--------:|
| id                        | string | ID of the block.                                                                                                                 | :x:      |
| version                   | int    | Version of the block.                                                                                                            | :x:      |
| previousBlock             | int    | ID of the previous block.                                                                                                        | :x:      |
| payloadHash               | string | Hash of the payload.                                                                                                             | :x:      |
| generatorPublicKey        | string | Public key of the forger who forged the block.                                                                                   | :x:      |
| blockSignature            | string | Signature of the block.                                                                                                          | :x:      |
| timestamp                 | object | Timestamp range for block creation time. Measured in number of seconds since the genesis block.                                  | :x:      |
| timestamp.from            | int    | Block creation time must be bigger or equal to this.                                                                             | :x:      |
| timestamp.to              | int    | Block creation time must be smaller or equal to this.                                                                            | :x:      |
| height                    | object | Height range of the block. The genesis block has height 1.                                                                       | :x:      |
| height.from               | int    | Block height must be bigger or equal to this.                                                                                    | :x:      |
| height.to                 | int    | Block height must be smaller or equal to this.                                                                                   | :x:      |
| numberOfTransactions      | object | Ranage for number of transactions contained in the block.                                                                        | :x:      |
| numberOfTransactions.from | int    | The number of transactions in the block must be bigger or equal to this.                                                         | :x:      |
| numberOfTransactions.to   | int    | The number of transactions in the block must be smaller or equal to this.                                                        | :x:      |
| totalAmount               | object | Range for total amount transacted in the block, including block reward, transaction fees and transactions' amounts. In arktoshi. | :x:      |
| totalAmount.from          | int    | Block total amount must be bigger or equal to this.                                                                              | :x:      |
| totalAmount.to            | int    | Block total amount must be smaller or equal to this.                                                                             | :x:      |
| totalFee                  | object | Range for the sum of all transactions' fees in the block. In arktoshi.                                                           | :x:      |
| totalFee.from             | int    | The sum of all transactions' fees in the block must be bigger or equal to this.                                                  | :x:      |
| totalFee.to               | int    | The sum of all transactions' fees in the block must be smaller or equal to this.                                                 | :x:      |
| reward                    | object | Range for block reward. In arktoshi.                                                                                             | :x:      |
| reward.from               | int    | Block reward must be bigger or equal to this.                                                                                    | :x:      |
| reward.to                 | int    | Block reward must be smaller or equal to this.                                                                                   | :x:      |
| payloadLength             | object | Range for block payload length. In bytes.                                                                                        | :x:      |
| payloadLength.from        | int    | Block payload length must be bigger or equal to this.                                                                            | :x:      |
| payloadLength.to          | int    | Block payload length must be smaller or equal to this.                                                                           | :x:      |

### Examples

```sh
curl --header "API-Version: 2" --data 'numberOfTransactions={ "from": 100, "to": 110 }' --data 'timestamp={ "from": 60000000 }' https://api.ark.io/api/blocks/search?limit=2
```

```json
{
    "meta": {
        "count": 2,
        "pageCount": 4,
        "totalCount": 7,
        "next": "/api/v2/blocks/search?limit=2&page=2",
        "previous": null,
        "self": "/api/v2/blocks/search?limit=2&page=1",
        "first": "/api/v2/blocks/search?limit=2&page=1",
        "last": "/api/v2/blocks/search?limit=2&page=4"
    },
    "data": [
        {
            "id": "884117316712991715",
            "version": 0,
            "height": 7812000,
            "previous": "11133306790169853761",
            "forged": {
                "reward": 200000000,
                "fee": 46920000,
                "total": 246920000,
                "amount": 414375753
            },
            "payload": {
                "hash": "65b32bc2792f1c84613027503bc4534febeadce4e45612357086a46233a2199d",
                "length": 3264
            },
            "generator": {
                "username": "geops",
                "address": "AU1TGCYoWzBnGMyMK9GTS8BG6EFbgc5xxC",
                "publicKey": "02bf72c578a12c35a97ca1230b93017161ee42c3f0ab82f6fe7c95b3b43561a076"
            },
            "signature": "3044022007082f2d025c49a1daf30f8461daf0cca0fad3a67c1e0369d9438687670fbbd5022028e9cbaadc5a33c55111cf98aad23697c4618e38fa178cc8163bf8275b41632c",
            "transactions": 102,
            "timestamp": {
                "epoch": 63563826,
                "unix": 1553665026,
                "human": "2019-03-27T05:37:06.000Z"
            }
        },
        {
            "id": "14707858435494505009",
            "version": 0,
            "height": 7806541,
            "previous": "10644622929675679656",
            "forged": {
                "reward": 200000000,
                "fee": 112845000,
                "total": 312845000,
                "amount": 296221771579
            },
            "payload": {
                "hash": "9ffe089a0058c1a28f0b54643fcee66c8a8cce1c1b60253951e81170c80610ca",
                "length": 3360
            },
            "generator": {
                "username": "cams_yellow_jacket",
                "address": "AGvhBGb4cCZnP2wUo1oCSi83LUtGDG7Y6X",
                "publicKey": "02902de3fcb257e9248e2ae668d2e314027f0ca05c1eb21e1c5817c7580014669f"
            },
            "signature": "30440220715fdf928549266485e4a61bf1468d4a1fe1c6d4b9d452379ad8da742e58244b022059a9f586a2fc07521fa45bdf6dd122dc78cf594174c445648b254f4c3ef4fc29",
            "transactions": 105,
            "timestamp": {
                "epoch": 63520130,
                "unix": 1553621330,
                "human": "2019-03-26T17:28:50.000Z"
            }
        }
    ]
}
```

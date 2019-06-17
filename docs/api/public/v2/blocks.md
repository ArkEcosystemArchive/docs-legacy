---
title: "Public Blocks API"
---

# Public Blocks API

Blocks are added every eight seconds to the blockchain by a Delegate Node. Due to network/technical errors, a Delegate might miss a block. The time between two blocks is then 16 seconds, as the round continues to the next Delegate.

All state changes to the blockchain are in the form of blocks; they contain a set of transactions and metadata. A block is rejected if one or more of the transactions is invalid; or if the metadata is invalid. Thus a block returned from the Public API is always valid.

## List All Blocks

The Public API may be used to query for blocks. This dataset contains millions of blocks; thus for analytical purposes, we recommend you use the [Elasticsearch](/guidebook/core/plugins/optional/core-elasticsearch.md) plugin or query the database directly.

### Endpoint

```
GET /api/blocks
```

### Query Parameters

| Name   | Type   | Description                                   | Required |
| :----- | :----: | :-------------------------------------------- | :------: |
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
        "pageCount": 4412706,
        "totalCount": 8825411,
        "next": "/api/v2/blocks?limit=2&page=2",
        "previous": null,
        "self": "/api/v2/blocks?limit=2&page=1",
        "first": "/api/v2/blocks?limit=2&page=1",
        "last": "/api/v2/blocks?limit=2&page=4412706"
    },
    "data": [
        {
            "id": "b711bbdad2340c0926ff230b423db1e37264f7380fd7a28174c20e53fab84314",
            "version": 0,
            "height": 8691127,
            "previous": "d908c1a22fdbd6764051e7b9c0d52b2028a4d0bee425492f6c8598b9f31e4107",
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
                "username": "rising_sun",
                "address": "AJ1eWcCz8xnq1ZZxSunVBpe8r6kZcqWbCq",
                "publicKey": "03f25207238ef72cc3a0482af05a5296996da80c92dd0c1eb80e911281eedaf237"
            },
            "signature": "3044022065400e57e8061b45b1b5145a02b9848b6b13d033a737cc5efd24ebc663a930ff0220316b82b9376c1ddf7162524035d1977ba9d8b3879ef102fb6a507efb2946bb80",
            "confirmations": 0,
            "transactions": 0,
            "timestamp": {
                "epoch": 70647184,
                "unix": 1560748384,
                "human": "2019-06-17T05:13:04.000Z"
            }
        },
        {
            "id": "d908c1a22fdbd6764051e7b9c0d52b2028a4d0bee425492f6c8598b9f31e4107",
            "version": 0,
            "height": 8691126,
            "previous": "24ab4b7914a0dbaf4c0c8ed7aa25315670b189084d67a692fbce33940b757d52",
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
                "username": "tibonos",
                "address": "AMdPL5Br3nsWyJB4LCB5qZ9cYnKBdVXKJi",
                "publicKey": "02bd74ba354e4533cbbb0d03076622c15917e2e1d65fe4c4c8294d6b4c57d667b4"
            },
            "signature": "3045022100bdc1d4ea68e73a1c674c78ede7da849d741165b67243c9911b33aca775b8472402201817932308b356a70dbef5412aa6783c8e9f87e2fe4565c2279f8e5df6c49e6a",
            "confirmations": 1,
            "transactions": 0,
            "timestamp": {
                "epoch": 70647176,
                "unix": 1560748376,
                "human": "2019-06-17T05:12:56.000Z"
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
        "pageCount": 2,
        "totalCount": 101,
        "next": "/api/v2/blocks?height=7000042&page=2&limit=100",
        "previous": null,
        "self": "/api/v2/blocks?height=7000042&page=1&limit=100",
        "first": "/api/v2/blocks?height=7000042&page=1&limit=100",
        "last": "/api/v2/blocks?height=7000042&page=2&limit=100"
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
            "confirmations": 1691087,
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

## Retrieve a Block

Blocks may be retrieved by ID or by height. The height is an incremental integer.

*When comparing the order of transactions and blocks, prefer using the `block.height` over transaction timestamps, as the height is guaranteed to be correctly ordered.*

### Endpoint

```
GET /api/blocks/{id|height}
```

### Path Parameters

| Name         | Type   | Description                                    | Required           |
| :----------- | :----: | :--------------------------------------------- | :----------------: |
| {id\|height} | string | The ID or height of the block to be retrieved. | :white_check_mark: |

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
        "confirmations": 1691090,
        "transactions": 0,
        "timestamp": {
            "epoch": 57039818,
            "unix": 1547141018,
            "human": "2019-01-10T17:23:38.000Z"
        }
    }
}
```

## List All Transactions in a Block

Instead of deserializing the block's payload; you can also obtain the transactions of each block as proper transaction objects directly.

### Endpoint

```
GET /api/blocks/{id|height}/transactions
```

### Path Parameters

| Name         | Type   | Description                                  | Required           |
| :----------- | :----: | :------------------------------------------- | :----------------: |
| {id\|height} | string | The identifier of the block to be retrieved. | :white_check_mark: |

### Query Parameters

| Name  | Type | Description                                   | Required |
| :---- | :--: | :-------------------------------------------- | :------: |
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
        "pageCount": 2,
        "totalCount": 102,
        "next": "/api/v2/blocks/12079944220667996670/transactions?page=2&limit=100",
        "previous": null,
        "self": "/api/v2/blocks/12079944220667996670/transactions?page=1&limit=100",
        "first": "/api/v2/blocks/12079944220667996670/transactions?page=1&limit=100",
        "last": "/api/v2/blocks/12079944220667996670/transactions?page=2&limit=100"
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
            "senderPublicKey": "0232b96d57ac27f9a99242bc886e433baa89f596d435153c9dae47222c0d1cecc3",
            "recipient": "AKp7Bu9Nzpq3idcatrLmjsS76E6WkZ2Q2a",
            "signature": "3045022100f9af677be546ec1645fe16f057bff7e06d9410ada259960d1e89fd9cc940221a022052023db0f829d13e43f614a1dab9b07559faa15e2e571494eaf9cf93813ea7f1",
            "signSignature": "3044022067d039dcda866eb89803c9c649308db755aec1d2f7d0894436c6a06511033daf0220348a50856be0902066f8686a78c667cf5c64c504124ed1576d8aa8b029649700",
            "vendorField": "Payout from arkmoon",
            "confirmations": 877904,
            "timestamp": {
                "epoch": 63573384,
                "unix": 1553674584,
                "human": "2019-03-27T08:16:24.000Z"
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
            "senderPublicKey": "02ff171adaef486b7db9fc160b28433d20cf43163d56fd28fee72145f0d5219a4b",
            "recipient": "AFvsCDPsYYUSSqmnAT7bomdAwPrdq7vDHp",
            "signature": "30440220438bb7293731cbfb62e2229590b64bc9858879d47a34caf88b29eed7761864fc022042fb49ceb25ba7982cbdde6cf544a20a893ceed2378be0564c3405e52cd33d11",
            "confirmations": 877904,
            "timestamp": {
                "epoch": 63573683,
                "unix": 1553674883,
                "human": "2019-03-27T08:21:23.000Z"
            }
        }
    ]
}
```

## Search All Blocks

It is possible to filter for specifics blocks using the search resource. Filtering for blocks at the Node side is a lot more efficient than requesting a large payload and filtering it at the client side.

### Endpoint

```
POST /api/blocks/search
```

### Query Parameters

| Name  | Type | Description                                   | Required |
| :---- | :--: | :-------------------------------------------- | :------: |
| page  | int  | The number of the page that will be returned. | :x:      |
| limit | int  | The number of resources per page.             | :x:      |

### Body Parameters

| Name                      | Type   | Description                                                                                                                      | Required |
| :------------------------ | :----: | :------------------------------------------------------------------------------------------------------------------------------- | :------: |
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
        "pageCount": 219,
        "totalCount": 437,
        "next": "/api/v2/blocks/search?limit=2&page=2",
        "previous": null,
        "self": "/api/v2/blocks/search?limit=2&page=1",
        "first": "/api/v2/blocks/search?limit=2&page=1",
        "last": "/api/v2/blocks/search?limit=2&page=219"
    },
    "data": [
        {
            "id": "07f8047a302fb2e35635d48c453f2b044a92172bd9353f00483d59736765812d",
            "version": 0,
            "height": 8685636,
            "previous": "c1727a42f8b8f454c9b73b3f2508fd04d5feb38fcacaddcdcdb2f52fdabb0be5",
            "forged": {
                "reward": 200000000,
                "fee": 312000000,
                "total": 512000000,
                "amount": 41915645699
            },
            "payload": {
                "hash": "a9bf4a7ed669d4c02cc98b0540953a52fb30aaba8d1a4ef52686008a0ebcebb2",
                "length": 3328
            },
            "generator": {
                "username": "arkworld",
                "address": "AeaqhUKfBtVqNhtMct3piBiWfdhbRwbg4W",
                "publicKey": "0257581c82d1931c4b0b2df9d658ecd303fcf2a6ea4ec291669ed06f44fb75c8fe"
            },
            "signature": "30440220646552049201204efc86874ec777e125e0e7b47f44894bc700af35e2362ce7e602200f1b13a76b4ee4b8c6a127d14dcc05afef00164cb41d811ac7818f45e6357452",
            "confirmations": 5564,
            "transactions": 104,
            "timestamp": {
                "epoch": 70603216,
                "unix": 1560704416,
                "human": "2019-06-16T17:00:16.000Z"
            }
        },
        {
            "id": "ce7653769bee47e1bf9a68bfc7c5cd74186fb9745e04719581ba5559dbd7fc0e",
            "version": 0,
            "height": 8684282,
            "previous": "e02a02f1e51be05b1f527b6ff6ab6fdb5cc3151effe1d5370105c7a6b1f172c1",
            "forged": {
                "reward": 200000000,
                "fee": 27664,
                "total": 200027664,
                "amount": 42199100226
            },
            "payload": {
                "hash": "b341b8f941b06bd568aa8ae7bb3fffafd23fa49d18be2572fa5e103cc42c3a95",
                "length": 3328
            },
            "generator": {
                "username": "cryptology",
                "address": "Aa74QyqAFBsevReox3rMWy6FhMUyJVGPop",
                "publicKey": "03364c62f7c5a7948dcaacdc72bac595e8f6e79944e722d05c8346d68aa1331b4a"
            },
            "signature": "3045022100aa42be64786ad19e9e4e09911a463398a2f41fda8aa4bbe0e59f07e09eb060db02205b15e3b6207dc844b6f69c98eaf970c6969485d6d85d9411c81da9288161ca33",
            "confirmations": 6918,
            "transactions": 104,
            "timestamp": {
                "epoch": 70592360,
                "unix": 1560693560,
                "human": "2019-06-16T13:59:20.000Z"
            }
        }
    ]
}
```

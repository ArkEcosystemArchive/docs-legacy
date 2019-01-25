---
title: Public Wallets API
---

# Public Wallets API

Wallets are addresses containing, or previously having contained ARK. A wallet's public key may be unknown to the network, in that case, it is referred to as a `cold wallet`.

## List all wallets

A paginated API is provided to obtain all wallets, including empty ones.

### Endpoint

```
GET /api/wallets
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
        "pageCount": 421,
        "totalCount": 841,
        "next": "/v2/wallets?page=2",
        "previous": null,
        "self": "/v2/wallets?page=1",
        "first": "/v2/wallets?page=1",
        "last": "/v2/wallets?page=421"
    },
    "data": [
        {
            "address": "D59NTfV92ca9QevUydvMiFMFdubbCaAVCV",
            "publicKey": "037d035f08b3bad0d5bb605232c7aa41555693c480044dbeb797270a44c339da5a",
            "username": null,
            "secondPublicKey": null,
            "balance": 1023145260990,
            "isDelegate": false
        }
    ]
}
```

## Retrieve a wallet

Specific wallets can be obtained either by their `publicKey` or `address`.

### Endpoint

```
GET /api/wallets/{id}
```

### Path Parameters

| Name | Type   | Description                                   | Required           |
|------|:------:|-----------------------------------------------|:------------------:|
| id   | string | The identifier of the wallet to be retrieved. | :white_check_mark: |

### Response

```json
{
    "data": {
        "address": "D9YiyRYMBS2ofzqkufjrkB9nHofWgJLM7f",
        "publicKey": "0306950dae7158103814e3828b1ab97a87dbb3680db1b4c6998b8208865b2f9db7",
        "username": "bongoninja",
        "secondPublicKey": null,
        "balance": 12534670000000,
        "isDelegate": true
    }
}
```

## List all transactions of a wallet

All transactions belonging to a wallet can be obtained using this API. Equivalent to `transactions/search` with parameters `senderId` and `recipientId`.

### Endpoint

```
GET /api/wallets/{id}/transactions
```

### Path Parameters

| Name | Type   | Description                                   | Required           |
|------|:------:|-----------------------------------------------|:------------------:|
| id   | string | The identifier of the wallet to be retrieved. | :white_check_mark: |

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
        "pageCount": 127430,
        "totalCount": 254860,
        "next": "/v2/wallets/boldninja/transactions?page=2",
        "previous": null,
        "self": "/v2/wallets/boldninja/transactions?page=1",
        "first": "/v2/wallets/boldninja/transactions?page=1",
        "last": "/v2/wallets/boldninja/transactions?page=127430"
    },
    "data": [
        {
            "id": "261ec03a90e8c287fb2dcbb35bb8a842fe5ef1c7a6425319da7aa123c48dd929",
            "blockId": "15006101391552623930",
            "version": 1,
            "type": 0,
            "amount": 100000000,
            "fee": 10000000,
            "sender": "DHWBaG44rstymZjWFU4b7BiuTZjiKxfJpL",
            "recipient": "D9YiyRYMBS2ofzqkufjrkB9nHofWgJLM7f",
            "signature": "3045022100d7b59289b9576978fc0cbfea2f7f490409ef9455f2c4d28cc49f155c9ed69d6002206a32c4b668050f81b789b49fe5c29164872f9f1db63d7ba8604a6296f183a18a",
            "signSignature": "3045022100dae0598ff7dcab0184d36e3d8313da17401893b2b6b476276412f2682e66c34402205df085dae213c561e5db293cd5bc8930f6343783a99ce48c349e92abfd2e2fa1",
            "vendorField": ":bongocrazy"
            "confirmations": 347019,
            "timestamp": {
                "epoch": 51704908,
                "unix": 1541806108,
                "human": "2018-11-09T23:28:28.000Z"
            }
        }
    ]
}
```

## List all received transactions of a wallet

Incoming transactions can be obtained as well, Equivalent to `transactions/search` with parameter `recipientId` set.

### Endpoint

```
GET /api/wallets/{id}/transactions/received
```

### Path Parameters

| Name | Type   | Description                                   | Required           |
|------|:------:|-----------------------------------------------|:------------------:|
| id   | string | The identifier of the wallet to be retrieved. | :white_check_mark: |

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
        "pageCount": 4,
        "totalCount": 8,
        "next": "/v2/wallets/boldninja/transactions/received?page=2",
        "previous": null,
        "self": "/v2/wallets/boldninja/transactions/received?page=1",
        "first": "/v2/wallets/boldninja/transactions/received?page=1",
        "last": "/v2/wallets/boldninja/transactions/received?page=4"
    },
    "data": [
        {
            "id": "261ec03a90e8c287fb2dcbb35bb8a842fe5ef1c7a6425319da7aa123c48dd929",
            "blockId": "15006101391552623930",
            "version": 1,
            "type": 0,
            "amount": 100000000,
            "fee": 10000000,
            "sender": "DHWBaG44rstymZjWFU4b7BiuTZjiKxfJpL",
            "recipient": "D9YiyRYMBS2ofzqkufjrkB9nHofWgJLM7f",
            "signature": "3045022100d7b59289b9576978fc0cbfea2f7f490409ef9455f2c4d28cc49f155c9ed69d6002206a32c4b668050f81b789b49fe5c29164872f9f1db63d7ba8604a6296f183a18a",
            "signSignature": "3045022100dae0598ff7dcab0184d36e3d8313da17401893b2b6b476276412f2682e66c34402205df085dae213c561e5db293cd5bc8930f6343783a99ce48c349e92abfd2e2fa1",
            "vendorField": ":bongocrazy"
            "confirmations": 347019,
            "timestamp": {
                "epoch": 51704908,
                "unix": 1541806108,
                "human": "2018-11-09T23:28:28.000Z"
            }
        }
    ]
}
```

## List all sent transactions of a wallet

The inverse of `transactions/received`.

::: warning

Note that the balance of a wallet does not equal `totalIncoming - totalOutgoing` if the wallet is a Delegate. You must then also add the total reward from transaction fees and forged blocks to their balance.

:::

### Endpoint

```
GET /api/wallets/{id}/transactions/sent
```

### Path Parameters

| Name | Type   | Description                                   | Required           |
|------|:------:|-----------------------------------------------|:------------------:|
| id   | string | The identifier of the wallet to be retrieved. | :white_check_mark: |

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
        "pageCount": 2,
        "totalCount": 4,
        "next": "/v2/wallets/boldninja/transactions/sent?page=2",
        "previous": null,
        "self": "/v2/wallets/boldninja/transactions/sent?page=1",
        "first": "/v2/wallets/boldninja/transactions/sent?page=1",
        "last": "/v2/wallets/boldninja/transactions/sent?page=2"
    },
    "data": [
        {
            "id": "686b989f56ede8141289691d166b8158f0b2c3b272112fdf77198e394fa4b59a",
            "blockId": "16409699706603010399",
            "version": 1,
            "type": 3,
            "amount": 0,
            "fee": 100000000,
            "sender": "D9YiyRYMBS2ofzqkufjrkB9nHofWgJLM7f",
            "recipient": "D9YiyRYMBS2ofzqkufjrkB9nHofWgJLM7f",
            "signature": "304402202ad26e82b6b9c96babfb7fba4389d17e868cc802ada3a7d263848a8b7baa144402205e5571afdba7b1c0cad698620c5306e320f3dadcb9a82df6ebbd3af7df757904",
            "signSignature": null,
            "asset": {
                "votes": [
                    "+0306950dae7158103814e3828b1ab97a87dbb3680db1b4c6998b8208865b2f9db7"
                ]
            },
            "confirmations": 526006,
            "timestamp": {
                "epoch": 49663543,
                "unix": 1539764743,
                "human": "2018-10-17T08:25:43.000Z"
            }
        }
    ]
}
```

## List all votes of a wallet

Returns all votes made by the wallet. Often users create a new wallet instead of recasting their vote, as the former was historically cheaper.

### Endpoint

```
GET /api/wallets/{id}/votes
```

### Path Parameters

| Name | Type   | Description                                   | Required           |
|------|:------:|-----------------------------------------------|:------------------:|
| id   | string | The identifier of the wallet to be retrieved. | :white_check_mark: |

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
        "pageCount": 2,
        "totalCount": 3,
        "next": "/v2/wallets/boldninja/votes?page=2",
        "previous": null,
        "self": "/v2/wallets/boldninja/votes?page=1",
        "first": "/v2/wallets/boldninja/votes?page=1",
        "last": "/v2/wallets/boldninja/votes?page=2"
    },
    "data": [
        {
            "id": "08c6b23f9edd97b613f17153fb97a316a4fb83136e9842655dafc8262f363e0e",
            "blockId": "14847399772737279404",
            "version": 1,
            "type": 3,
            "amount": 0,
            "fee": 100000000,
            "sender": "DARiJqhogp2Lu6bxufUFQQMuMyZbxjCydN",
            "recipient": "DARiJqhogp2Lu6bxufUFQQMuMyZbxjCydN",
            "signature": "304402207ba0e8aaee93695360081b7ce713f13d62b544038ac440bd46357398af86cae6022059ac74586738be1ef622e0baba992d0e417d9aed7ab980f374eb0c9d53e25f8e",
            "asset": {
                "votes": [
                    "+0257b7724e97cd832e0c28533a86da5220656f9b5122141daab20e8526decce01f"
                ]
            },
            "confirmations": 1636029,
            "timestamp": {
                "epoch": 17094358,
                "unix": 1507195558,
                "human": "2017-10-05T09:25:58Z"
            }
        }
    ]
}
```

## List all top wallets

Sort the wallets by their balance. Most top wallets belong to exchanges and the frozen remainder from the Ark ICO.

### Endpoint

```
GET /api/wallets/top
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
        "count": 100,
        "pageCount": 1859,
        "totalCount": 185829,
        "next": "/api/v2/wallets/top?page=2&limit=100",
        "previous": null,
        "self": "/api/v2/wallets/top?page=1&limit=100",
        "first": "/api/v2/wallets/top?page=1&limit=100",
        "last": "/api/v2/wallets/top?page=1859&limit=100"
    },
    "data": [
        {
            "address": "DGihocTkwDygiFvmg6aG8jThYTic47GzU9",
            "publicKey": "024c8247388a02ecd1de2a3e3fd5b7c61ecc2797fa3776599d558333ef1802d231",
            "username": null,
            "secondPublicKey": null,
            "balance": 11499593462120632,
            "isDelegate": false
        },
        {
            "address": "DRac35wghMcmUSe5jDMLBDLWkVVjyKZFxK",
            "publicKey": "0374e9a97611540a9ce4812b0980e62d3c5141ea964c2cab051f14a78284570dcd",
            "username": null,
            "secondPublicKey": null,
            "balance": 554107676293547,
            "isDelegate": false
        },
        //... 98 more wallets
    ]
}
```

## Search all wallets

Searching for specific wallets is possible as well. A direct database query usually is more performant when the query expression becomes complicated.

### Endpoint

```
POST /api/wallets/search
```

### Query Parameters

| Name  | Type | Description                                   | Required |
|-------|:----:|-----------------------------------------------|:--------:|
| page  | int  | The number of the page that will be returned. | :x:      |
| limit | int  | The number of resources per page.             | :x:      |

### Body Parameters

| Name             | Type   | Description | Required |
|------------------|:------:|-------------|:--------:|
| address          | string | ...         | :x:      |
| publicKey        | string | ...         | :x:      |
| secondPublicKey  | string | ...         | :x:      |
| vote             | string | ...         | :x:      |
| username         | string | ...         | :x:      |
| balance          | object | ...         | :x:      |
| balance.from     | int    | ...         | :x:      |
| balance.to       | int    | ...         | :x:      |
| votebalance      | object | ...         | :x:      |
| votebalance.from | int    | ...         | :x:      |
| votebalance.to   | int    | ...         | :x:      |

### Response

```json
{
    "meta": {
        "count": 2,
        "pageCount": 2,
        "totalCount": 3,
        "next": "/v2/wallets/search?page=2",
        "previous": null,
        "self": "/v2/wallets/search?page=1",
        "first": "/v2/wallets/search?page=1",
        "last": "/v2/wallets/search?page=2"
    },
    "data": [
        {
            "address": "DGihocTkwDygiFvmg6aG8jThYTic47GzU9",
            "publicKey": "024c8247388a02ecd1de2a3e3fd5b7c61ecc2797fa3776599d558333ef1802d231",
            "username": null,
            "secondPublicKey": null,
            "balance": 351774803773,
            "isDelegate": false
        }
    ]
}
```

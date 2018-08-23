---
title: Public Wallets API
---

# Public Wallets API

## List all wallets

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
            "balance": 1023145260990,
            "isDelegate": false
        }
    ]
}
```

## Retrieve a wallet

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
        "address": "DARiJqhogp2Lu6bxufUFQQMuMyZbxjCydN",
        "publicKey": "022cca9529ec97a772156c152a00aad155ee6708243e65c9d211a589cb5d43234d",
        "balance": 12534670000000,
        "isDelegate": true
    }
}
```

## List all transactions of a wallet

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
            "id": "5c6ce775447a5acd22050d72e2615392494953bb1fb6287e9ffb3c33eaeb79aa",
            "blockId": "4271682877946294396",
            "type": 0,
            "amount": 32106400000,
            "fee": 10000000,
            "sender": "DDiTHZ4RETZhGxcyAi1VruCXZKxBFqXMeh",
            "recipient": "DQnQNoJuNCvpjYhxL7fsnGepHBqrumgsyP",
            "signature": "3044022047c39f6f45a46a87f91ca867f9551dbebf0035adcfcbdc1370222c7a1517fc0002206fb5ecc10460e0352a8b626a508e2fcc76e39e490b0a2581dd772ebc8079696e",
            "confirmations": 1683,
            "timestamp": {
                "epoch": 32794053,
                "unix": 1522895253,
                "human": "2018-04-05T02:27:33Z"
            }
        }
    ]
}
```

## List all received transactions of a wallet

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
            "id": "c46a6a83f7a358f269691c16f050beeab669767643634086bc12ad1182d54413",
            "blockId": "17271524574301696572",
            "type": 0,
            "amount": 5000000000,
            "fee": 10000000,
            "sender": "DK6Q1Lufhb939H9EshLViYbaaKUkswMiUz",
            "recipient": "DARiJqhogp2Lu6bxufUFQQMuMyZbxjCydN",
            "signature": "304402204b81411e507273f2a27e6135510abda5bff00a0d3121977df09363227c8fd2360220503cab4484a7db785d91a7adcfad681811e3d73f2d00b4dab7e4190ecd41cb34",
            "vendorField": "More monopoly money for EVERYONE!!",
            "confirmations": 1482069,
            "timestamp": {
                "epoch": 18382414,
                "unix": 1508483614,
                "human": "2017-10-20T07:13:34Z"
            }
        }
    ]
}
```

## List all sent transactions of a wallet

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
            "id": "08c6b23f9edd97b613f17153fb97a316a4fb83136e9842655dafc8262f363e0e",
            "blockId": "14847399772737279404",
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
            "confirmations": 1636232,
            "timestamp": {
                "epoch": 17094358,
                "unix": 1507195558,
                "human": "2017-10-05T09:25:58Z"
            }
        }
    ]
}
```
## List all votes of a wallet

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
    "data": [
        {
            "address": "DGihocTkwDygiFvmg6aG8jThYTic47GzU9",
            "publicKey": "024c8247388a02ecd1de2a3e3fd5b7c61ecc2797fa3776599d558333ef1802d231",
            "balance": 11499593462120632,
            "isDelegate": false
        },
        {
            "address": "DRac35wghMcmUSe5jDMLBDLWkVVjyKZFxK",
            "publicKey": "0374e9a97611540a9ce4812b0980e62d3c5141ea964c2cab051f14a78284570dcd",
            "balance": 554107676293547,
            "isDelegate": false
        },
        ...
    ]
}
```

## Search all wallets

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
            "id": "08c6b23f9edd97b613f17153fb97a316a4fb83136e9842655dafc8262f363e0e",
            "blockId": "14847399772737279404",
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

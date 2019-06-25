---
title: "Public Wallets API"
---

# Public Wallets API

Wallets are addresses containing, or previously having contained ARK. A wallet's public key may be unknown to the network, in that case, it is referred to as a `cold wallet`.

## List All Wallets

A paginated API is provided to obtain all wallets, including empty ones.

### Endpoint

```
GET /api/wallets
```

### Query Parameters

| Name    | Type   | Description                                       | Required |
| :------ | :----: | :------------------------------------------------ | :------: |
| page    | int    | The number of the page that will be returned.     | :x:      |
| limit   | int    | The number of resources per page.                 | :x:      |
| orderBy | string | The column by which the resources will be sorted. | :x:      |

::: tip
The `orderBy` parameter on this endpoint supports the following values: *address*, *balance*, *username*, *vote*
:::

### Examples

```sh
curl --header "API-Version: 2" https://api.ark.io/api/wallets
```

```json
{
    "meta": {
        "count": 100,
        "pageCount": 1186,
        "totalCount": 118536,
        "next": "/api/v2/wallets?page=2&limit=100",
        "previous": null,
        "self": "/api/v2/wallets?page=1&limit=100",
        "first": "/api/v2/wallets?page=1&limit=100",
        "last": "/api/v2/wallets?page=1186&limit=100"
    },
    "data": [
        {
            "address": "AUDud8tvyVZa67p3QY7XPRUTjRGnWQQ9Xv",
            "publicKey": "021d03bace0687a1a5e797f884b13fb46f817ec32de1374a7f223f24404401d220",
            "balance": 1969102010034762,
            "isDelegate": false
        },
        ...
    ]
}
```

```sh
curl --header "API-Version: 2" "https://api.ark.io/api/wallets?orderBy=balance&limit=5"
```

```json
{
    "meta": {
        "count": 5,
        "pageCount": 23733,
        "totalCount": 118664,
        "next": "/api/v2/wallets?orderBy=balance&limit=5&page=2",
        "previous": null,
        "self": "/api/v2/wallets?orderBy=balance&limit=5&page=1",
        "first": "/api/v2/wallets?orderBy=balance&limit=5&page=1",
        "last": "/api/v2/wallets?orderBy=balance&limit=5&page=23733"
    },
    "data": [
        {
            "address": "AUDud8tvyVZa67p3QY7XPRUTjRGnWQQ9Xv",
            "publicKey": "021d03bace0687a1a5e797f884b13fb46f817ec32de1374a7f223f24404401d220",
            "balance": 1969102010034762,
            "isDelegate": false
        },
        {
            "address": "AUexKjGtgsSpVzPLs6jNMM6vJ6znEVTQWK",
            "publicKey": "02ff171adaef486b7db9fc160b28433d20cf43163d56fd28fee72145f0d5219a4b",
            "balance": 1252766744221840,
            "isDelegate": false
        },
        {
            "address": "AdTyTzaXPtj1J1DzTgVksa9NYdUuXCRbm1",
            "publicKey": "02d4c5a7206d8298ef84a79b4c21a73ad5ae460cfff964f660f517960bb834040d",
            "balance": 875001440401317,
            "isDelegate": false
        },
        {
            "address": "AdS7WvzqusoP759qRo6HDmUz2L34u4fMHz",
            "publicKey": "03e7635481b035149829ef74f972e69eca75363bc96e75be57579b0e6fb3f22192",
            "balance": 686779104859574,
            "isDelegate": false
        },
        {
            "address": "Aakg29vVhQhJ5nrsAHysTUqkTBVfmgBSXU",
            "publicKey": "0394e9f4d4eb47e8cbfda6e0d1a4082973ae178e3a60662ac84591c39d06e059f5",
            "balance": 299230936869587,
            "isDelegate": false
        }
    ]
}
```

## Retrieve a Wallet

Specific wallets can be obtained either by their `publicKey` or `address`.

### Endpoint

```
GET /api/wallets/{id}
```

### Path Parameters

| Name |  Type  | Description                                   |      Required      |
| :--- | :----: | :-------------------------------------------- | :----------------: |
| id   | string | The identifier of the wallet to be retrieved. | :white_check_mark: |

### Examples

```sh
curl --header "API-Version: 2" https://api.ark.io/api/wallets/AKdr5d9AMEnsKYxpDcoHdyyjSCKVx3r9Nj
```

```sh
curl --header "API-Version: 2" https://api.ark.io/api/wallets/020431436cf94f3c6a6ba566fe9e42678db8486590c732ca6c3803a10a86f50b92
```

### Response

```json
{
    "data": {
        "address": "AKdr5d9AMEnsKYxpDcoHdyyjSCKVx3r9Nj",
        "publicKey": "020431436cf94f3c6a6ba566fe9e42678db8486590c732ca6c3803a10a86f50b92",
        "username": "biz_classic",
        "secondPublicKey": "024e3a261bba72f0a92dcf4bb6406fa7f2df2d6a8bfccb75652802b035244a0e17",
        "balance": 243543952431,
        "isDelegate": true,
        "vote": "03f25207238ef72cc3a0482af05a5296996da80c92dd0c1eb80e911281eedaf237"
    }
}
```

## List All Transactions of a Wallet

All transactions belonging to a wallet can be obtained using this API. Equivalent to `transactions/search` with parameters `senderId` and `recipientId`.

### Endpoint

```
GET /api/wallets/{id}/transactions
```

### Path Parameters

| Name |  Type  | Description                                   |      Required      |
| :--- | :----: | :-------------------------------------------- | :----------------: |
| id   | string | The identifier of the wallet to be retrieved. | :white_check_mark: |

### Query Parameters

| Name  | Type | Description                                   | Required |
| :---- | :--: | :-------------------------------------------- | :------: |
| page  | int  | The number of the page that will be returned. |   :x:    |
| limit | int  | The number of resources per page.             |   :x:    |

### Examples

```sh
curl --header "API-Version: 2" https://api.ark.io/api/wallets/AKdr5d9AMEnsKYxpDcoHdyyjSCKVx3r9Nj/transactions
```

### Response

```json
{
    "meta": {
        "count": 100,
        "pageCount": 41,
        "totalCount": 4057,
        "next": "/api/v2/wallets/AKdr5d9AMEnsKYxpDcoHdyyjSCKVx3r9Nj/transactions?page=2&limit=100",
        "previous": null,
        "self": "/api/v2/wallets/AKdr5d9AMEnsKYxpDcoHdyyjSCKVx3r9Nj/transactions?page=1&limit=100",
        "first": "/api/v2/wallets/AKdr5d9AMEnsKYxpDcoHdyyjSCKVx3r9Nj/transactions?page=1&limit=100",
        "last": "/api/v2/wallets/AKdr5d9AMEnsKYxpDcoHdyyjSCKVx3r9Nj/transactions?page=41&limit=100"
    },
    "data": [
        {
            "id": "fe7e6d56d735f06e9a60205726754966e10c03a2f219bec8295c3345b040a7b4",
            "blockId": "9b6129f1f988936a4ad52f5aaa5bf26a3df002d980e9f1893c8d0035e01e6fc0",
            "version": 1,
            "type": 0,
            "amount": 27575207,
            "fee": 5000000,
            "sender": "AKdr5d9AMEnsKYxpDcoHdyyjSCKVx3r9Nj",
            "senderPublicKey": "020431436cf94f3c6a6ba566fe9e42678db8486590c732ca6c3803a10a86f50b92",
            "recipient": "AZK5FQdAv973EBiFhei4fqHcW4aQdsdwtH",
            "signature": "30440220241cef6976955c676387edfa021d2552900262e52d10dfa6d1bb95ef980387b702201f54955dd4fc10a2d45c8fc429586d3f9ee05c866f9d6f3b9994c708d80fc1ed",
            "signSignature": "304402201050f009b0638d7a56100a0c5d6d34e7388b90cfa5488dc9c7917f6ca2d5c373022023314b02815881d8a754e6dc38fa853a725bd4d32ec5439281ee4910a806bace",
            "confirmations": 1255,
            "timestamp": {
                "epoch": 70643497,
                "unix": 1560744697,
                "human": "2019-06-17T04:11:37.000Z"
            }
        },
        ...
    ]
}
```

## List All Received Transactions of a Wallet

Incoming transactions can be obtained as well, Equivalent to `transactions/search` with parameter `recipientId` set.

### Endpoint

```
GET /api/wallets/{id}/transactions/received
```

### Path Parameters

| Name |  Type  | Description                                   |      Required      |
| :--- | :----: | :-------------------------------------------- | :----------------: |
| id   | string | The identifier of the wallet to be retrieved. | :white_check_mark: |

### Query Parameters

| Name  | Type | Description                                   | Required |
| :---- | :--: | :-------------------------------------------- | :------: |
| page  | int  | The number of the page that will be returned. |   :x:    |
| limit | int  | The number of resources per page.             |   :x:    |

### Examples

```sh
curl --header "API-Version: 2" https://api.ark.io/api/wallets/AKdr5d9AMEnsKYxpDcoHdyyjSCKVx3r9Nj/transactions/received
```

### Response

```json
{
    "meta": {
        "count": 100,
        "pageCount": 41,
        "totalCount": 4057,
        "next": "/api/v2/wallets/AKdr5d9AMEnsKYxpDcoHdyyjSCKVx3r9Nj/transactions/received?page=2&limit=100",
        "previous": null,
        "self": "/api/v2/wallets/AKdr5d9AMEnsKYxpDcoHdyyjSCKVx3r9Nj/transactions/received?page=1&limit=100",
        "first": "/api/v2/wallets/AKdr5d9AMEnsKYxpDcoHdyyjSCKVx3r9Nj/transactions/received?page=1&limit=100",
        "last": "/api/v2/wallets/AKdr5d9AMEnsKYxpDcoHdyyjSCKVx3r9Nj/transactions/received?page=41&limit=100"
    },
    "data": [
        {
            "id": "c4fa61d030b6a221e7ee900a5f65281e0bb9fa69d56a81e0714a863f0076b479",
            "blockId": "42eeae1a54d173414a0cf0011d2e019603d036662e8a802a2a4ab8b529d052bf",
            "version": 1,
            "type": 0,
            "amount": 10,
            "fee": 2988125,
            "sender": "AQ5JZnzggkCGY6hdszt2WietHCFVoLMdLB",
            "senderPublicKey": "03387dd2fa3f056e730ccb0e86ee75d488375c2c5c602dfc8b9258c1ee08377d29",
            "recipient": "AKdr5d9AMEnsKYxpDcoHdyyjSCKVx3r9Nj",
            "signature": "3044022045d0f09448823b78c255679f5660b402ee676bf26650de81380989d1643638ed02200f0ad3490c4612e6be0ff311e186d515473d2d4af6164cb279b54ec179f731a6",
            "vendorField": "4f19cf90-90b6-11e9-ab24-77ec6195107c",
            "confirmations": 1459,
            "timestamp": {
                "epoch": 70643725,
                "unix": 1560744925,
                "human": "2019-06-17T04:15:25.000Z"
            }
        },
        ...
    ]
}
```

## List All Sent Transactions of a Wallet

The inverse of `transactions/received`.

::: warning

Note that the balance of a wallet does not equal `totalIncoming - totalOutgoing` if the wallet is a Delegate. You must then also add the total reward from transaction fees and forged blocks to their balance.

:::

### Endpoint

```
GET /api/wallets/{id}/transactions/sent
```

### Path Parameters

| Name |  Type  | Description                                   |      Required      |
| :--- | :----: | :-------------------------------------------- | :----------------: |
| id   | string | The identifier of the wallet to be retrieved. | :white_check_mark: |

### Query Parameters

| Name  | Type | Description                                   | Required |
| :---- | :--: | :-------------------------------------------- | :------: |
| page  | int  | The number of the page that will be returned. |   :x:    |
| limit | int  | The number of resources per page.             |   :x:    |

### Examples

```sh
curl --header "API-Version: 2" https://api.ark.io/api/wallets/AKdr5d9AMEnsKYxpDcoHdyyjSCKVx3r9Nj/transactions/sent
```

### Response

```json
{
    "meta": {
        "count": 100,
        "pageCount": 2367,
        "totalCount": 236692,
        "next": "/api/v2/wallets/AKdr5d9AMEnsKYxpDcoHdyyjSCKVx3r9Nj/transactions/sent?page=2&limit=100",
        "previous": null,
        "self": "/api/v2/wallets/AKdr5d9AMEnsKYxpDcoHdyyjSCKVx3r9Nj/transactions/sent?page=1&limit=100",
        "first": "/api/v2/wallets/AKdr5d9AMEnsKYxpDcoHdyyjSCKVx3r9Nj/transactions/sent?page=1&limit=100",
        "last": "/api/v2/wallets/AKdr5d9AMEnsKYxpDcoHdyyjSCKVx3r9Nj/transactions/sent?page=2367&limit=100"
    },
    "data": [
        {
            "id": "fe7e6d56d735f06e9a60205726754966e10c03a2f219bec8295c3345b040a7b4",
            "blockId": "9b6129f1f988936a4ad52f5aaa5bf26a3df002d980e9f1893c8d0035e01e6fc0",
            "version": 1,
            "type": 0,
            "amount": 27575207,
            "fee": 5000000,
            "sender": "AKdr5d9AMEnsKYxpDcoHdyyjSCKVx3r9Nj",
            "senderPublicKey": "020431436cf94f3c6a6ba566fe9e42678db8486590c732ca6c3803a10a86f50b92",
            "recipient": "AZK5FQdAv973EBiFhei4fqHcW4aQdsdwtH",
            "signature": "30440220241cef6976955c676387edfa021d2552900262e52d10dfa6d1bb95ef980387b702201f54955dd4fc10a2d45c8fc429586d3f9ee05c866f9d6f3b9994c708d80fc1ed",
            "signSignature": "304402201050f009b0638d7a56100a0c5d6d34e7388b90cfa5488dc9c7917f6ca2d5c373022023314b02815881d8a754e6dc38fa853a725bd4d32ec5439281ee4910a806bace",
            "confirmations": 1276,
            "timestamp": {
                "epoch": 70643497,
                "unix": 1560744697,
                "human": "2019-06-17T04:11:37.000Z"
            }
        },
        ...
    ]
}
```

## List All Votes of a Wallet

Returns all votes made by the wallet. Often users create a new wallet instead of recasting their vote, as the former was historically cheaper.

### Endpoint

```
GET /api/wallets/{id}/votes
```

### Path Parameters

| Name |  Type  | Description                                   |      Required      |
| :--- | :----: | :-------------------------------------------- | :----------------: |
| id   | string | The identifier of the wallet to be retrieved. | :white_check_mark: |

### Query Parameters

| Name  | Type | Description                                   | Required |
| :---- | :--: | :-------------------------------------------- | :------: |
| page  | int  | The number of the page that will be returned. |   :x:    |
| limit | int  | The number of resources per page.             |   :x:    |

### Examples

```sh
curl --header "API-Version: 2" https://api.ark.io/api/wallets/AKdr5d9AMEnsKYxpDcoHdyyjSCKVx3r9Nj/votes?limit=2
```

### Response

```json
{
    "meta": {
        "count": 2,
        "pageCount": 1312,
        "totalCount": 2623,
        "next": "/api/v2/wallets/AKdr5d9AMEnsKYxpDcoHdyyjSCKVx3r9Nj/votes?limit=2&page=2",
        "previous": null,
        "self": "/api/v2/wallets/AKdr5d9AMEnsKYxpDcoHdyyjSCKVx3r9Nj/votes?limit=2&page=1",
        "first": "/api/v2/wallets/AKdr5d9AMEnsKYxpDcoHdyyjSCKVx3r9Nj/votes?limit=2&page=1",
        "last": "/api/v2/wallets/AKdr5d9AMEnsKYxpDcoHdyyjSCKVx3r9Nj/votes?limit=2&page=1312"
    },
    "data": [
        {
            "id": "266f3a67fa32c098f5db9674d78c77db54314e0eb9caee9b083132374ba3a770",
            "blockId": "16478765994703749209",
            "version": 1,
            "type": 3,
            "amount": 0,
            "fee": 10000000,
            "sender": "AKdr5d9AMEnsKYxpDcoHdyyjSCKVx3r9Nj",
            "senderPublicKey": "020431436cf94f3c6a6ba566fe9e42678db8486590c732ca6c3803a10a86f50b92",
            "recipient": "AKdr5d9AMEnsKYxpDcoHdyyjSCKVx3r9Nj",
            "signature": "3045022100878620caf54454625ddfa9c4b05c6c7fdba1d453b6971316822b700fd19a65f0022007e1f5617a2fdea7d4aa5e6f522768b9f805a2a8d6b247058c323645dad92a17",
            "signSignature": "30450221009faf7081db4f474e37bbee763875b2c987e92344d333750a9c15c4b400bbacd20220012d30f04e12c6d57b2e318ce0c46fb3f88d93e133e30990ef1423b90789673e",
            "asset": {
                "votes": [
                    "+03f25207238ef72cc3a0482af05a5296996da80c92dd0c1eb80e911281eedaf237"
                ]
            },
            "confirmations": 1698272,
            "timestamp": {
                "epoch": 56990275,
                "unix": 1547091475,
                "human": "2019-01-10T03:37:55.000Z"
            }
        },
        {
            "id": "7741140b12bc0560ca71ba7e5dcdb0fd2e1701e0c0d5475b2524f88b8ea9184f",
            "blockId": "13207144586696941140",
            "version": 1,
            "type": 3,
            "amount": 0,
            "fee": 10000000,
            "sender": "AKdr5d9AMEnsKYxpDcoHdyyjSCKVx3r9Nj",
            "senderPublicKey": "020431436cf94f3c6a6ba566fe9e42678db8486590c732ca6c3803a10a86f50b92",
            "recipient": "AKdr5d9AMEnsKYxpDcoHdyyjSCKVx3r9Nj",
            "signature": "3045022100dd3c84cc2f1dd70e397148d1e1be9683b68c5c5527b4d0e03657aa041a0650d00220584352285798086bd33d7c0c7be434a2fca0911b1eaa145d49331fa81c187085",
            "signSignature": "3045022100eb7179a05e461f9d4f2288cf971cf3733c688efece875f85f072ee17d4c5816e02205f88f9c03d444ed3b37cd6045f42bb7282fca408e8c4008ada1901ab002cbf1d",
            "asset": {
                "votes": [
                    "-0232b96d57ac27f9a99242bc886e433baa89f596d435153c9dae47222c0d1cecc3"
                ]
            },
            "confirmations": 1698277,
            "timestamp": {
                "epoch": 56990234,
                "unix": 1547091434,
                "human": "2019-01-10T03:37:14.000Z"
            }
        }
    ]
}
```

## List All Top Wallets

Sort the wallets by their balance. Most top wallets belong to exchanges and the frozen remainder from the ARK ICO.

### Endpoint

```
GET /api/wallets/top
```

### Query Parameters

| Name  | Type | Description                                   | Required |
| :---- | :--: | :-------------------------------------------- | :------: |
| page  | int  | The number of the page that will be returned. |   :x:    |
| limit | int  | The number of resources per page.             |   :x:    |

### Examples

```sh
curl --header "API-Version: 2" https://api.ark.io/api/wallets/top
```

### Response

```json
{
    "meta": {
        "count": 100,
        "pageCount": 1186,
        "totalCount": 118536,
        "next": "/api/v2/wallets/top?page=2&limit=100",
        "previous": null,
        "self": "/api/v2/wallets/top?page=1&limit=100",
        "first": "/api/v2/wallets/top?page=1&limit=100",
        "last": "/api/v2/wallets/top?page=1186&limit=100"
    },
    "data": [
        {
            "address": "AUDud8tvyVZa67p3QY7XPRUTjRGnWQQ9Xv",
            "publicKey": "021d03bace0687a1a5e797f884b13fb46f817ec32de1374a7f223f24404401d220",
            "balance": 1969102010034762,
            "isDelegate": false
        },
        {
            "address": "AUexKjGtgsSpVzPLs6jNMM6vJ6znEVTQWK",
            "publicKey": "02ff171adaef486b7db9fc160b28433d20cf43163d56fd28fee72145f0d5219a4b",
            "balance": 1218835378129161,
            "isDelegate": false
        },
        {
            "address": "AdTyTzaXPtj1J1DzTgVksa9NYdUuXCRbm1",
            "publicKey": "02d4c5a7206d8298ef84a79b4c21a73ad5ae460cfff964f660f517960bb834040d",
            "balance": 875001440401317,
            "isDelegate": false
        },
        ...
    ]
}
```

## Search All Wallets

Searching for specific wallets is possible as well. A direct database query usually is more performant when the query expression becomes complicated.

### Endpoint

```
POST /api/wallets/search
```

### Query Parameters

| Name  | Type | Description                                   | Required |
| :---- | :--: | :-------------------------------------------- | :------: |
| page  | int  | The number of the page that will be returned. |   :x:    |
| limit | int  | The number of resources per page.             |   :x:    |

### Body Parameters

| Name             |  Type  | Description | Required |
| :--------------- | :----: | :---------- | :------: |
| address          | string | ...         |   :x:    |
| publicKey        | string | ...         |   :x:    |
| secondPublicKey  | string | ...         |   :x:    |
| vote             | string | ...         |   :x:    |
| username         | string | ...         |   :x:    |
| balance          | object | ...         |   :x:    |
| balance.from     |  int   | ...         |   :x:    |
| balance.to       |  int   | ...         |   :x:    |
| votebalance      | object | ...         |   :x:    |
| votebalance.from |  int   | ...         |   :x:    |
| votebalance.to   |  int   | ...         |   :x:    |

### Examples

```sh
curl --header "API-Version: 2" --data 'balance={ "from": 200000000000000 }' https://api.ark.io/api/wallets/search
```

### Response

```json
{
    "meta": {
        "count": 5,
        "pageCount": 1,
        "totalCount": 5,
        "next": null,
        "previous": null,
        "self": "/api/v2/wallets/search?page=1&limit=100",
        "first": "/api/v2/wallets/search?page=1&limit=100",
        "last": "/api/v2/wallets/search?page=1&limit=100"
    },
    "data": [
        {
            "address": "AUDud8tvyVZa67p3QY7XPRUTjRGnWQQ9Xv",
            "publicKey": "021d03bace0687a1a5e797f884b13fb46f817ec32de1374a7f223f24404401d220",
            "balance": 1969102010034762,
            "isDelegate": false
        },
        {
            "address": "AUexKjGtgsSpVzPLs6jNMM6vJ6znEVTQWK",
            "publicKey": "02ff171adaef486b7db9fc160b28433d20cf43163d56fd28fee72145f0d5219a4b",
            "balance": 1218835378129161,
            "isDelegate": false
        },
        {
            "address": "AdTyTzaXPtj1J1DzTgVksa9NYdUuXCRbm1",
            "publicKey": "02d4c5a7206d8298ef84a79b4c21a73ad5ae460cfff964f660f517960bb834040d",
            "balance": 875001440401317,
            "isDelegate": false
        },
        {
            "address": "AdS7WvzqusoP759qRo6HDmUz2L34u4fMHz",
            "publicKey": "03e7635481b035149829ef74f972e69eca75363bc96e75be57579b0e6fb3f22192",
            "balance": 686779104859574,
            "isDelegate": false
        },
        {
            "address": "Aakg29vVhQhJ5nrsAHysTUqkTBVfmgBSXU",
            "publicKey": "0394e9f4d4eb47e8cbfda6e0d1a4082973ae178e3a60662ac84591c39d06e059f5",
            "balance": 324230940003474,
            "isDelegate": false
        }
    ]
}
```

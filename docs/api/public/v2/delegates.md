---
title: "Public Delegates API"
---

# Public Delegates API

Delegates are regular wallets (addresses) which have registered themselves eligible to become a Delegate by a [registration transaction](/introduction/ark/understanding-transactions-and-block-propagation.html#delegate-registration). If a Delegate is amongst the top 51 highest voted (by staked ARK), it may run a forging Node, which produces a block once every 6.8 minutes, awarding the Delegate two ARK + the transaction fees.

Genesis Delegates are the initial, virtualized Delegates. They were not registered nor voted in, and in the ARK `mainnet` has been replaced by actual Delegates a long time ago.

## List All Delegates

You can obtain all Delegates through this paginated API. Note that all registered Delegates are returned in this response, not just the top 51 forging Delegates.

If a Delegate Node is offline, it is still returned through this API; as the `delegate` resource is not concerned with the actual nodes, only with the on-chain registrations and wallets.

### Endpoint

```
GET /api/delegates
```

### Query Parameters

| Name  | Type | Description                                   | Required |
| :---- | :--: | :-------------------------------------------- | :------: |
| page  | int  | The number of the page that will be returned. |   :x:    |
| limit | int  | The number of resources per page.             |   :x:    |

### Examples

```sh
curl --header "API-Version: 2" https://api.ark.io/api/delegates
```

```json
{
    "meta": {
        "count": 100,
        "pageCount": 11,
        "totalCount": 1038,
        "next": "/api/v2/delegates?page=2&limit=100",
        "previous": null,
        "self": "/api/v2/delegates?page=1&limit=100",
        "first": "/api/v2/delegates?page=1&limit=100",
        "last": "/api/v2/delegates?page=11&limit=100"
    },
    "data": [
        {
            "username": "biz_classic",
            "address": "AKdr5d9AMEnsKYxpDcoHdyyjSCKVx3r9Nj",
            "publicKey": "020431436cf94f3c6a6ba566fe9e42678db8486590c732ca6c3803a10a86f50b92",
            "votes": 296139495328751,
            "rank": 1,
            "blocks": {
                "produced": 150581,
                "last": {
                    "id": "65fa7472f8977d48509ff9f721d815679b5d53236b218248b87233a59cf2ff61",
                    "height": 8691202,
                    "timestamp": {
                        "epoch": 70647784,
                        "unix": 1560748984,
                        "human": "2019-06-17T05:23:04.000Z"
                    }
                }
            },
            "production": {
                "approval": 2.35
            },
            "forged": {
                "fees": 1173040419815,
                "rewards": 30116200000000,
                "total": 31289240419815
            }
        },
        ...
    ]
}
```

```sh
curl --header "API-Version: 2" "https://api.ark.io/api/delegates?page=5&limit=2"
```

```json
{
    "meta": {
        "count": 2,
        "pageCount": 519,
        "totalCount": 1038,
        "next": "/api/v2/delegates?page=6&limit=2",
        "previous": "/api/v2/delegates?page=4&limit=2",
        "self": "/api/v2/delegates?page=5&limit=2",
        "first": "/api/v2/delegates?page=1&limit=2",
        "last": "/api/v2/delegates?page=519&limit=2"
    },
    "data": [
        {
            "username": "biz_private",
            "address": "AaAy8BZkjV86YN7xUtZ35iwyXRMQKtKoAy",
            "publicKey": "02fa6902e91e127d6d3410f6abc271a79ae24029079caa0db5819757e3c1c1c5a4",
            "votes": 169224664359522,
            "rank": 9,
            "blocks": {
                "produced": 124439,
                "last": {
                    "id": "6cc848e00e10cf870ece6f380a01f53e949fed0e1e4c1ef61db2f40b8de63016",
                    "height": 8691217,
                    "timestamp": {
                        "epoch": 70647904,
                        "unix": 1560749104,
                        "human": "2019-06-17T05:25:04.000Z"
                    }
                }
            },
            "production": {
                "approval": 1.34
            },
            "forged": {
                "fees": 1608233193755,
                "rewards": 24887800000000,
                "total": 26496033193755
            }
        },
        {
            "username": "goose",
            "address": "ALLZ3TQKTaHm2Bte4SrXL9C5cS8ZovqFfZ",
            "publicKey": "03c5d32dedf5441b3aafb2e0c6ad3e5568bb0b3e822807b133e2276e014d830e3c",
            "votes": 167925930087295,
            "rank": 10,
            "blocks": {
                "produced": 132468,
                "last": {
                    "id": "d8e08a70b91673eb02fc20b542b6a431cfbdbff33394710fbb33bdf0fe6a52ea",
                    "height": 8691245,
                    "timestamp": {
                        "epoch": 70648128,
                        "unix": 1560749328,
                        "human": "2019-06-17T05:28:48.000Z"
                    }
                }
            },
            "production": {
                "approval": 1.33
            },
            "forged": {
                "fees": 866998159298,
                "rewards": 26493600000000,
                "total": 27360598159298
            }
        }
    ]
}
```

## Retrieve a Delegate

You can query for a specific delegate by username, address, and public key; thus the following queries will result in an identical response. Note that public keys are always known for delegates, as they have previously transmitted a registration transaction. This is not the case for regular wallets.

### Endpoint

```
GET /api/delegates/{username|address|publicKey}
```

### Path Parameters

| Name                           |  Type  | Description                                     |      Required      |
| :----------------------------- | :----: | :---------------------------------------------- | :----------------: |
| {username\|address\|publicKey} | string | The identifier of the delegate to be retrieved. | :white_check_mark: |


### Examples

```sh
curl --header "API-Version: 2" https://api.ark.io/api/delegates/boldninja
```

```sh
curl --header "API-Version: 2" https://api.ark.io/api/delegates/ARMy9u1XvrZ124JzQq3oeJpjmBEnYkyU7D
```

```sh
curl --header "API-Version: 2" https://api.ark.io/api/delegates/035217d8ff31d78992e0821667fed6d9298d2b923cd63b650e894e0bf11a0a6d7a
```

```json
{
    "data": {
        "username": "boldninja",
        "address": "ARMy9u1XvrZ124JzQq3oeJpjmBEnYkyU7D",
        "publicKey": "035217d8ff31d78992e0821667fed6d9298d2b923cd63b650e894e0bf11a0a6d7a",
        "votes": 10000000,
        "rank": 184,
        "blocks": {
            "produced": 3,
            "last": {
                "id": "17262490796048771853",
                "height": 1058,
                "timestamp": {
                    "epoch": 19400,
                    "unix": 1490120600,
                    "human": "2017-03-21T18:23:20.000Z"
                }
            }
        },
        "production": {
            "approval": 0
        },
        "forged": {
            "fees": 0,
            "rewards": 0,
            "total": 0
        }
    }
}
```

## List All Blocks of a Delegate

The `delegate` resource allows you to obtain blocks from a specific Delegate. This is the equivalent of [searching for blocks](/api/public/v2/blocks.html#search-all-blocks) using the `generatorPublicKey`.

### Endpoint

```
GET /api/delegates/{username|address|publicKey}/blocks
```

### Path Parameters

| Name                           |  Type  | Description                                     |      Required      |
| :----------------------------- | :----: | :---------------------------------------------- | :----------------: |
| {username\|address\|publicKey} | string | The identifier of the delegate to be retrieved. | :white_check_mark: |

### Query Parameters

| Name  | Type | Description                                   | Required |
| :---- | :--: | :-------------------------------------------- | :------: |
| page  | int  | The number of the page that will be returned. |   :x:    |
| limit | int  | The number of resources per page.             |   :x:    |

### Examples

```sh
curl --header "API-Version: 2" "https://api.ark.io/api/delegates/ALLZ3TQKTaHm2Bte4SrXL9C5cS8ZovqFfZ/blocks?page=5&limit=2"
```

```json
{
    "meta": {
        "count": 2,
        "pageCount": 73400,
        "totalCount": 146799,
        "next": "/api/v2/delegates/ALLZ3TQKTaHm2Bte4SrXL9C5cS8ZovqFfZ/blocks?page=6&limit=2",
        "previous": "/api/v2/delegates/ALLZ3TQKTaHm2Bte4SrXL9C5cS8ZovqFfZ/blocks?page=4&limit=2",
        "self": "/api/v2/delegates/ALLZ3TQKTaHm2Bte4SrXL9C5cS8ZovqFfZ/blocks?page=5&limit=2",
        "first": "/api/v2/delegates/ALLZ3TQKTaHm2Bte4SrXL9C5cS8ZovqFfZ/blocks?page=1&limit=2",
        "last": "/api/v2/delegates/ALLZ3TQKTaHm2Bte4SrXL9C5cS8ZovqFfZ/blocks?page=73400&limit=2"
    },
    "data": [
        {
            "id": "a84a1174e52afed2de39c4847e0f147af56887f2925bc464408ff9012651c780",
            "version": 0,
            "height": 8690828,
            "previous": "626cdb1ddfa028920334c4f08aefcf42bd919cce209f9a900bf7831478237753",
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
                "username": "goose",
                "address": "ALLZ3TQKTaHm2Bte4SrXL9C5cS8ZovqFfZ",
                "publicKey": "03c5d32dedf5441b3aafb2e0c6ad3e5568bb0b3e822807b133e2276e014d830e3c"
            },
            "signature": "3045022100de78040331ab2ee01749c588fed181fd465e1d885c94a38bd69a1907cb9338e9022052f204fbc10f0a70d3b0c0fe8840c875c557ddc5165d95f3b52ab4aeadc0e317",
            "confirmations": 436,
            "transactions": 0,
            "timestamp": {
                "epoch": 70644792,
                "unix": 1560745992,
                "human": "2019-06-17T04:33:12.000Z"
            }
        },
        {
            "id": "29f42f6ce22aefb65cb94c2ce9a7ed60734cb2a65e38a51ab1923136355c1862",
            "version": 0,
            "height": 8690786,
            "previous": "c0b643ac7844fe7d527ccfdd2595083d0e32d44332afb4dafe7d7f8da79e2bcc",
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
                "username": "goose",
                "address": "ALLZ3TQKTaHm2Bte4SrXL9C5cS8ZovqFfZ",
                "publicKey": "03c5d32dedf5441b3aafb2e0c6ad3e5568bb0b3e822807b133e2276e014d830e3c"
            },
            "signature": "3045022100a07050e654533be78adbeae4ac3b6b7bb27e3549aaf749dc3f27b62e7aec67ae02200d9b530aefa3f2c5518792c63a8f25fae333dfe198ef26d2ce49e9bcb54f1e3d",
            "confirmations": 478,
            "transactions": 0,
            "timestamp": {
                "epoch": 70644456,
                "unix": 1560745656,
                "human": "2019-06-17T04:27:36.000Z"
            }
        }
    ]
}
```

## List All Voters of a Delegate

Obtaining the voters of a Delegate is trivial as well. This endpoint returns **active** voters. To acquire historical voters, it is better to query the database directly.

### Endpoint

```
GET /api/delegates/{username|address|publicKey}/voters
```

### Path Parameters

| Name                           |  Type  | Description                                     |      Required      |
| :----------------------------- | :----: | :---------------------------------------------- | :----------------: |
| {username\|address\|publicKey} | string | The identifier of the delegate to be retrieved. | :white_check_mark: |

### Query Parameters

| Name  | Type | Description                                   | Required |
| :---- | :--: | :-------------------------------------------- | :------: |
| page  | int  | The number of the page that will be returned. |   :x:    |
| limit | int  | The number of resources per page.             |   :x:    |

### Examples

```sh
curl --header "API-Version: 2" "https://api.ark.io/api/delegates/ALLZ3TQKTaHm2Bte4SrXL9C5cS8ZovqFfZ/voters?page=1&limit=1"
```

```json
{
    "meta": {
        "count": 1,
        "pageCount": 644,
        "totalCount": 644,
        "next": "/api/v2/delegates/ALLZ3TQKTaHm2Bte4SrXL9C5cS8ZovqFfZ/voters?page=2&limit=1",
        "previous": null,
        "self": "/api/v2/delegates/ALLZ3TQKTaHm2Bte4SrXL9C5cS8ZovqFfZ/voters?page=1&limit=1",
        "first": "/api/v2/delegates/ALLZ3TQKTaHm2Bte4SrXL9C5cS8ZovqFfZ/voters?page=1&limit=1",
        "last": "/api/v2/delegates/ALLZ3TQKTaHm2Bte4SrXL9C5cS8ZovqFfZ/voters?page=644&limit=1"
    },
    "data": [
        {
            "address": "Af1e7oavXTJs1RYs7DeRuphC6eSAUFpsWC",
            "publicKey": "02a589e02e853bb5b9c989b2935a63eab88d847addb35bcbd838597a7623ba5748",
            "balance": 16553077168251,
            "isDelegate": false,
            "vote": "03c5d32dedf5441b3aafb2e0c6ad3e5568bb0b3e822807b133e2276e014d830e3c"
        }
    ]
}
```

## Search for a Delegate

For fine-grained searches, use the `search` endpoint.

### Endpoint

```
POST /api/delegates/search
```

### Query Parameters

| Name  | Type | Description                                   | Required |
| :---- | :--: | :-------------------------------------------- | :------: |
| page  | int  | The number of the page that will be returned. |   :x:    |
| limit | int  | The number of resources per page.             |   :x:    |

### Body Parameters

| Name                |  Type  | Description                                                 | Required |
| :------------------ | :----: | :---------------------------------------------------------- | :------: |
| address             | string | The address of the delegate to be retrieved.                |   :x:    |
| publicKey           | string | The public key of the delegate to be retrieved.             |   :x:    |
| username            | string | The username of the delegate to be retrieved.               |   :x:    |
| usernames           | array  | The usernames of the delegates to be retrieved.             |   :x:    |
| approval            | object | The approval rate of the delegates to be retrieved.         |   :x:    |
| approval.from       | float  | The lower limit of the approval rate.                       |   :x:    |
| approval.to         | float  | The upper limit of the approval rate.                       |   :x:    |
| forgedFees          | object | The forged fees of the delegates to be retrieved.           |   :x:    |
| forgedFees.from     |  int   | The lower limit of the forged fees.                         |   :x:    |
| forgedFees.to       |  int   | The upper limit of the forged fees.                         |   :x:    |
| forgedRewards       | object | The forged rewards of the delegates to be retrieved.        |   :x:    |
| forgedRewards.from  |  int   | The lower limit of the forged rewards.                      |   :x:    |
| forgedRewards.to    |  int   | The upper limit of the forged rewards.                      |   :x:    |
| forgedTotal         | object | The forged total of the delegates to be retrieved.          |   :x:    |
| forgedTotal.from    |  int   | The lower limit of the forged total.                        |   :x:    |
| forgedTotal.to      |  int   | The upper limit of the forged total.                        |   :x:    |
| producedBlocks      | object | The produced blocks count of the delegates to be retrieved. |   :x:    |
| producedBlocks.from |  int   | The lower limit of the produced blocks count.               |   :x:    |
| producedBlocks.to   |  int   | The upper limit of the produced blocks count.               |   :x:    |
| voteBalance         | object | The vote balance of the delegates to be retrieved.          |   :x:    |
| voteBalance.from    |  int   | The lower limit of the vote balance.                        |   :x:    |
| voteBalance.to      |  int   | The upper limit of the vote balance.                        |   :x:    |

### Examples

```sh
curl --header "API-Version: 2" --data 'producedBlocks={ "from": 41100 }' https://api.ark.io/api/delegates/search
```

```json
{
    "meta": {
        "count": 67,
        "pageCount": 1,
        "totalCount": 67,
        "next": null,
        "previous": null,
        "self": "/api/v2/delegates/search?page=1&limit=100",
        "first": "/api/v2/delegates/search?page=1&limit=100",
        "last": "/api/v2/delegates/search?page=1&limit=100"
    },
    "data": [
        {
            "username": "biz_classic",
            "address": "AKdr5d9AMEnsKYxpDcoHdyyjSCKVx3r9Nj",
            "publicKey": "020431436cf94f3c6a6ba566fe9e42678db8486590c732ca6c3803a10a86f50b92",
            "votes": 296139495328751,
            "rank": 1,
            "blocks": {
                "produced": 150583,
                "last": {
                    "id": "ff4b099cc4793e21b015be251d8fd71b7196bb05038ea599adab86154f8c757e",
                    "height": 8691274,
                    "timestamp": {
                        "epoch": 70648360,
                        "unix": 1560749560,
                        "human": "2019-06-17T05:32:40.000Z"
                    }
                }
            },
            "production": {
                "approval": 2.35
            },
            "forged": {
                "fees": 1173040419815,
                "rewards": 30116600000000,
                "total": 31289640419815
            }
        },
        ...
    ]
}
```

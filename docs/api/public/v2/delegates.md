---
title: Public Delegates API
---

# Public Delegates API

Delegates are regular wallets which have registered themselves eligible to become a Delegate by a [registration transaction](/introduction/ark/understanding-transactions-and-block-propagation.html#delegate-registration). If a Delegate is amongst the top 51 highest voted (by staked ARK), it may run a forging Node, which produces a block once every 6.8 minutes, awarding the Delegate two ARK + the transaction fees.

Genesis Delegates are the initial, virtualized Delegates. They were not registered nor voted in, and in the Ark `mainnet` have been replaced by actual Delegates a long time ago.

## List all delegates

You can obtain all Delegates through this paginated API. Note that all registered Delegates are returned in this response, not just the top 51 forging Delegates.

If a Delegate Node is offline, it is still returned through this API; as the `delegate` resource is not concerned with the actual nodes, only with the on-chain registrations and wallets.

### Endpoint

```
GET /api/delegates
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
        "pageCount": 99,
        "totalCount": 197,
        "next": "/v2/delegates?page=2",
        "previous": null,
        "self": "/v2/delegates?page=1",
        "first": "/v2/delegates?page=1",
        "last": "/v2/delegates?page=99"
    },
    "data": [
        {
            "username": "dark_jmc",
            "address": "D5PXQVeJmchVrZFHL7cALZK8mWWzjCaVfz",
            "publicKey": "02a9a0ac34a94f9d27fd9b4b56eb3c565a9a3f61e660f269775fb456f7f3301586",
            "votes": 0,
            "rank": 1,
            "blocks": {
                "produced": 0,
                "missed": 0,
                "last": {
                    "id": "12383884455448354193",
                    "timestamp": {
                        "epoch": 31784600,
                        "unix": 1521885800,
                        "human": "2018-03-24T10:03:20Z"
                    }
                }
            },
            "production": {
                "approval": "0.08",
                "productivity": "0.00"
            },
            "forged": {
                "fees": 387586557812,
                "rewards": 19779600000000,
                "total": 20167186557812
            }
        }
    ]
}
```

## List active delegates

You can obtain all forging Delegates of the current and historic rounds through the API. As is the case with the above endpoint, if a Delegate Node is offline, it is still returned through this API; as the `delegate` resource is not concerned with the actual nodes, only with the on-chain registrations and wallets.

If the optional `height` query parameter is omitted, the response will correspond to the forging delegates of the current round. If the query includes the `height` parameter, the response will correspond to the forging order of the round that includes the given height.

### Endpoint

```
GET /api/delegates/active
```

### Query Parameters

| Name   | Type | Description                                                    | Required |
|--------|:----:|----------------------------------------------------------------|:--------:|
| height | int  | The height for which the forging delegates should be retrieved | :x:      |

### Response

```json
{
    "data": [
        {
            "username": "genesis_32",
            "address": "DRDyyHNmfF2vijmA3kmMp2JvmBVMLJTTBr",
            "publicKey": "02ff842d25fc8eec9e1382e6468188b3fd130ab6246240fc97958ce83d6d147eaf",
            "votes": 8187745297450,
            "rank": 18,
            "blocks": {
                "produced": 40649,
                "last": {
                    "id": "1cd834fcbb91cdcee85b3d6189b3d6e18372e3304fbae903923ca48d91ffb19b",
                    "height": 1929818,
                    "timestamp": {
                        "epoch": 63747960,
                        "unix": 1553849160,
                        "human": "2019-03-29T08:46:00.000Z"
                    }
                }
            },
            "production": {
                "approval": 0.07
            },
            "forged": {
                "fees": 98245297450,
                "rewards": 8086400000000,
                "total": 8184645297450
            }
        },
        {
            "username": "genesis_46",
            "address": "DGKgCQ1srb8HZyr47RqQqMvGZ4cDyr4eMo",
            "publicKey": "029a20963b506afabb2bd805830a46cef8d59218cd88c0dca9d2a0158045b1c3e0",
            "votes": 8223915957792,
            "rank": 17,
            "blocks": {
                "produced": 40564,
                "last": {
                    "id": "d5297615457a245369dfd66512715d37dfa555ca5f9fa06b71a1598c451fa304",
                    "height": 1929819,
                    "timestamp": {
                        "epoch": 63747968,
                        "unix": 1553849168,
                        "human": "2019-03-29T08:46:08.000Z"
                    }
                }
            },
            "production": {
               "approval": 0.07
            },
            "forged": {
                "fees": 147225957792,
                "rewards": 8070200000000,
                "total": 8217425957792
            }
        },
        ...
    ]
}
```

## Retrieve a delegate

You can query for a specific delegate by username, address, and public key; thus the following queries will result in an identical response. Note that public keys are always known for delegates, as they have previously transmitted a registration transaction. This is not the case for regular wallets.

#### Query by username

```bash
curl \
    -H "API-Version: 2" \
    https://explorer.ark.io:8443/api/delegates/boldninja
```

#### Query by address

```bash
curl \
    -H "API-Version: 2" \
    https://explorer.ark.io:8443/api/delegates/DARiJqhogp2Lu6bxufUFQQMuMyZbxjCydN
```

#### Query by public key

```bash
curl \
    -H "API-Version: 2" \
    https://explorer.ark.io:8443/api/delegates/022cca9529ec97a772156c152a00aad155ee6708243e65c9d211a589cb5d43234d
```

### Endpoint

```
GET /api/delegates/{id}
```

### Path Parameters

| Name | Type   | Description                                     | Required           |
|------|:------:|-------------------------------------------------|:------------------:|
| id   | string | The identifier of the delegate to be retrieved. | :white_check_mark: |

### Response

```json
{
    "data": {
        "username": "boldninja",
        "address": "DARiJqhogp2Lu6bxufUFQQMuMyZbxjCydN",
        "publicKey": "022cca9529ec97a772156c152a00aad155ee6708243e65c9d211a589cb5d43234d",
        "votes": 0,
        "rank": 29,
        "blocks": {
            "produced": 0,
            "missed": 0,
            "last": {
                "id": "10652480998435361357",
                "timestamp": {
                    "epoch": 32816112,
                    "unix": 1522917312,
                    "human": "2018-04-05T08:35:12Z"
                }
            }
        },
        "production": {
            "approval": "0.10",
            "productivity": "0.00"
        },
        "forged": {
            "fees": 387586557812,
            "rewards": 19779600000000,
            "total": 20167186557812
        }
    }
}
```

## List all blocks of a delegate

The `delegate` resource allows you to obtain blocks from a specific Delegate. This is the equivalent of [searching for blocks](/api/public/v2/blocks.html#search-all-blocks) using the `generatorPublicKey`.


### Endpoint

```
GET /api/delegates/{id}/blocks
```

### Path Parameters

| Name | Type   | Description                                     | Required           |
|------|:------:|-------------------------------------------------|:------------------:|
| id   | string | The identifier of the delegate to be retrieved. | :white_check_mark: |

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
        "pageCount": 29919,
        "totalCount": 59838,
        "next": "/v2/delegates/boldninja/blocks?page=2",
        "previous": null,
        "self": "/v2/delegates/boldninja/blocks?page=1",
        "first": "/v2/delegates/boldninja/blocks?page=1",
        "last": "/v2/delegates/boldninja/blocks?page=29919"
    },
    "data": [
        {
            "id": "10652480998435361357",
            "version": 0,
            "height": 3035318,
            "previous": "12548322724277171379",
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
                "username": "boldninja",
                "address": "DARiJqhogp2Lu6bxufUFQQMuMyZbxjCydN",
                "publicKey": "022cca9529ec97a772156c152a00aad155ee6708243e65c9d211a589cb5d43234d"
            },
            "signature": "3044022034e754a3ff70adba6323517e1297c6a9f30176df2ac589661e9206fe60a203120220182c38da201fee20e803bb7725fe9618d6707547e6d7b757d4108f546934fe1c",
            "transactions": 0,
            "timestamp": {
                "epoch": 32816112,
                "unix": 1522917312,
                "human": "2018-04-05T08:35:12Z"
            }
        }
    ]
}
```

## List all Voters of a Delegate

Obtaining the voters of a Delegate is trivial as well. This endpoint returns **active** voters. To acquire historical voters, it is better to query the database directly.

### Endpoint

```
GET /api/delegates/{id}/voters
```

### Path Parameters

| Name | Type   | Description                                     | Required           |
|------|:------:|-------------------------------------------------|:------------------:|
| id   | string | The identifier of the delegate to be retrieved. | :white_check_mark: |

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
        "pageCount": 10,
        "totalCount": 19,
        "next": "/v2/delegates/boldninja/voters?page=2",
        "previous": null,
        "self": "/v2/delegates/boldninja/voters?page=1",
        "first": "/v2/delegates/boldninja/voters?page=1",
        "last": "/v2/delegates/boldninja/voters?page=10"
    },
    "data": [
        {
            "address": "D5mbS6mpP5UheuciNscpDLgC127kYjRtkK",
            "publicKey": "03f7e0b1ab14985990416f72ed0b206c20b9efa35156e4528c8ff749fa0eea5d5a",
            "username": null,
            "secondPublicKey": null,
            "balance": 400000000,
            "isDelegate": false
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
|-------|:----:|-----------------------------------------------|:--------:|
| page  | int  | The number of the page that will be returned. | :x:      |
| limit | int  | The number of resources per page.             | :x:      |

### Body Parameters

| Name                | Type   | Description                                                 | Required |
|---------------------|:------:|-------------------------------------------------------------|:--------:|
| orderBy             | string | The column by which the delegates will be sorted.           | :x:      |
| address             | string | The address of the delegate to be retrieved.                | :x:      |
| publicKey           | string | The public key of the delegate to be retrieved.             | :x:      |
| username            | string | The username of the delegate to be retrieved.               | :x:      |
| usernames           | array  | The usernames of the delegates to be retrieved.             | :x:      |
| approval            | object | The approval rate of the delegates to be retrieved.         | :x:      |
| approval.from       | float  | The lower limit of the approval rate.                       | :x:      |
| approval.to         | float  | The upper limit of the approval rate.                       | :x:      |
| forgedFees          | object | The forged fees of the delegates to be retrieved.           | :x:      |
| forgedFees.from     | int    | The lower limit of the forged fees.                         | :x:      |
| forgedFees.to       | int    | The upper limit of the forged fees.                         | :x:      |
| forgedRewards       | object | The forged rewards of the delegates to be retrieved.        | :x:      |
| forgedRewards.from  | int    | The lower limit of the forged rewards.                      | :x:      |
| forgedRewards.to    | int    | The upper limit of the forged rewards.                      | :x:      |
| forgedTotal         | object | The forged total of the delegates to be retrieved.          | :x:      |
| forgedTotal.from    | int    | The lower limit of the forged total.                        | :x:      |
| forgedTotal.to      | int    | The upper limit of the forged total.                        | :x:      |
| missedBlocks        | object | The missed blocks count of the delegates to be retrieved.   | :x:      |
| missedBlocks.from   | int    | The lower limit of the missed blocks count.                 | :x:      |
| missedBlocks.to     | int    | The upper limit of the missed blocks count.                 | :x:      |
| producedBlocks      | object | The produced blocks count of the delegates to be retrieved. | :x:      |
| producedBlocks.from | int    | The lower limit of the produced blocks count.               | :x:      |
| producedBlocks.to   | int    | The upper limit of the produced blocks count.               | :x:      |
| productivity        | object | The productivity rate of the delegates to be retrieved.     | :x:      |
| productivity.from   | float  | The lower limit of the productivity rate.                   | :x:      |
| productivity.to     | float  | The upper limit of the productivity rate.                   | :x:      |
| voteBalance         | object | The vote balance of the delegates to be retrieved.          | :x:      |
| voteBalance.from    | int    | The lower limit of the vote balance.                        | :x:      |
| voteBalance.to      | int    | The upper limit of the vote balance.                        | :x:      |

### Response

```json
{
    "meta": {
        "count": 1, 
        "pageCount": 1, 
        "totalCount": 1, 
        "next": null, 
        "previous": null, 
        "self": "/api/v2/delegates/search?limit=100&page=1", 
        "first": "/api/v2/delegates/search?limit=100&page=1", 
        "last": "/api/v2/delegates/search?limit=100&page=1"
   }, 
   "data": [
        {
            "username": "darkgalp",
            "address": "DMzBk3g7ThVQPYmpYDTHBHiqYuTtZ9WdM3", 
            "publicKey": "037997a6553ea8073eb199e9f5ff23b8f0892e79433ef35e13966e0a12849d02e3", 
            "votes": 4635816197288,
            "rank": 24,
            "blocks": {
                "produced": 20903,
                "missed": 297,
                "last": {
                    "id": "13446764355635039339",
                    "height": 1087121,
                    "timestamp": {
                        "epoch": 56387658,
                        "unix": 1546488858,
                        "human": "2019-01-03T04:14:18.000Z"
                        }
                 }
            },
            "production": {
                "approval": 0.04,
                "productivity": 98.6
            },
            "forged": {
                "fees": 246004413320,
                "rewards": 4142200000000,
                "totat": 4388204413320
            }
        }
    ]
}
```

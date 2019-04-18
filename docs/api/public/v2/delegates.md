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
    "totalCount": 1022,
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
      "votes": 290192277300775,
      "rank": 1,
      "blocks": {
        "produced": 137929,
        "missed": 294,
        "last": {
          "id": "4969352721420908242",
          "height": 8051390,
          "timestamp": {
            "epoch": 65479992,
            "unix": 1555581192,
            "human": "2019-04-18T09:53:12.000Z"
          }
        }
      },
      "production": {
        "approval": 2.27,
        "productivity": 99.79
      },
      "forged": {
        "fees": 1173040419815,
        "rewards": 27585800000000,
        "total": 28758840419815
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
    "pageCount": 511,
    "totalCount": 1022,
    "next": "/api/v2/delegates?page=6&limit=2",
    "previous": "/api/v2/delegates?page=4&limit=2",
    "self": "/api/v2/delegates?page=5&limit=2",
    "first": "/api/v2/delegates?page=1&limit=2",
    "last": "/api/v2/delegates?page=511&limit=2"
  },
  "data": [
    {
      "username": "goose",
      "address": "ALLZ3TQKTaHm2Bte4SrXL9C5cS8ZovqFfZ",
      "publicKey": "03c5d32dedf5441b3aafb2e0c6ad3e5568bb0b3e822807b133e2276e014d830e3c",
      "votes": 171643014160739,
      "rank": 9,
      "blocks": {
        "produced": 119844,
        "missed": 337,
        "last": {
          "id": "4941983238011713644",
          "height": 8051380,
          "timestamp": {
            "epoch": 65479914,
            "unix": 1555581114,
            "human": "2019-04-18T09:51:54.000Z"
          }
        }
      },
      "production": {
        "approval": 1.34,
        "productivity": 99.72
      },
      "forged": {
        "fees": 846370414394,
        "rewards": 23968800000000,
        "total": 24815170414394
      }
    },
    {
      "username": "biz_private",
      "address": "AaAy8BZkjV86YN7xUtZ35iwyXRMQKtKoAy",
      "publicKey": "02fa6902e91e127d6d3410f6abc271a79ae24029079caa0db5819757e3c1c1c5a4",
      "votes": 168585645882892,
      "rank": 10,
      "blocks": {
        "produced": 111777,
        "missed": 368,
        "last": {
          "id": "9030517911522129229",
          "height": 8051409,
          "timestamp": {
            "epoch": 65480144,
            "unix": 1555581344,
            "human": "2019-04-18T09:55:44.000Z"
          }
        }
      },
      "production": {
        "approval": 1.32,
        "productivity": 99.67
      },
      "forged": {
        "fees": 1405755397853,
        "rewards": 22355400000000,
        "total": 23761155397853
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
    "rank": 180,
    "blocks": {
      "produced": 3,
      "missed": 4,
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
      "approval": 0,
      "productivity": 42.86
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
    "pageCount": 62029,
    "totalCount": 124057,
    "next": "/api/v2/delegates/ALLZ3TQKTaHm2Bte4SrXL9C5cS8ZovqFfZ/blocks?page=6&limit=2",
    "previous": "/api/v2/delegates/ALLZ3TQKTaHm2Bte4SrXL9C5cS8ZovqFfZ/blocks?page=4&limit=2",
    "self": "/api/v2/delegates/ALLZ3TQKTaHm2Bte4SrXL9C5cS8ZovqFfZ/blocks?page=5&limit=2",
    "first": "/api/v2/delegates/ALLZ3TQKTaHm2Bte4SrXL9C5cS8ZovqFfZ/blocks?page=1&limit=2",
    "last": "/api/v2/delegates/ALLZ3TQKTaHm2Bte4SrXL9C5cS8ZovqFfZ/blocks?page=62029&limit=2"
  },
  "data": [
    {
      "id": "15452336890126796922",
      "version": 0,
      "height": 8051452,
      "previous": "9864401348516061780",
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
      "signature": "3045022100b768b2a96868c4f442699f5b3978c8fb3ac94b31d44568ba9431be04611c5b8d02201d79cb91e5dd0fb88985a72f73643b96d34baaf196ec6ce6785308ce7a56e4b9",
      "transactions": 0,
      "timestamp": {
        "epoch": 65480490,
        "unix": 1555581690,
        "human": "2019-04-18T10:01:30.000Z"
      }
    },
    {
      "id": "4941983238011713644",
      "version": 0,
      "height": 8051380,
      "previous": "10030681307966151993",
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
      "signature": "304502210080ab4a74453a2fa456dea52188397a3f9a5edd64e592dd2e2fb0c0a9714eff9a0220216fb5aeeebc8189e5ee8dab643457a393f2874df8aff531f7b8377dd8d6deb1",
      "transactions": 0,
      "timestamp": {
        "epoch": 65479914,
        "unix": 1555581114,
        "human": "2019-04-18T09:51:54.000Z"
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
    "pageCount": 626,
    "totalCount": 626,
    "next": "/api/v2/delegates/ALLZ3TQKTaHm2Bte4SrXL9C5cS8ZovqFfZ/voters?page=2&limit=1",
    "previous": null,
    "self": "/api/v2/delegates/ALLZ3TQKTaHm2Bte4SrXL9C5cS8ZovqFfZ/voters?page=1&limit=1",
    "first": "/api/v2/delegates/ALLZ3TQKTaHm2Bte4SrXL9C5cS8ZovqFfZ/voters?page=1&limit=1",
    "last": "/api/v2/delegates/ALLZ3TQKTaHm2Bte4SrXL9C5cS8ZovqFfZ/voters?page=626&limit=1"
  },
  "data": [
    {
      "address": "Af1e7oavXTJs1RYs7DeRuphC6eSAUFpsWC",
      "publicKey": "02a589e02e853bb5b9c989b2935a63eab88d847addb35bcbd838597a7623ba5748",
      "username": null,
      "secondPublicKey": null,
      "balance": 16338033891543,
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
    "count": 8,
    "pageCount": 1,
    "totalCount": 8,
    "next": null,
    "previous": null,
    "self": "/api/v2/delegates/search?page=1&limit=100",
    "first": "/api/v2/delegates/search?page=1&limit=100",
    "last": "/api/v2/delegates/search?page=1&limit=100"
  },
  "data": [
    {
      "username": "geops",
      "address": "DJpFwW39QnQvQRQJF2MCfAoKvsX4DJ28jq",
      "publicKey": "027716e659220085e41389efc7cf6a05f7f7c659cf3db9126caabce6cda9156582",
      "votes": 9241946380207,
      "rank": 9,
      "blocks": {
        "produced": 41226,
        "last": {
          "id": "c71bdf9695cadd91ac45483bf343e15c69b65590d866972023370707ce3b950b",
          "height": 1961065,
          "timestamp": {
            "epoch": 63998664,
            "unix": 1554096264,
            "human": "2019-04-01T05:24:24.000Z"
          }
        }
      },
      "production": {
        "approval": 0.07
      },
      "forged": {
        "fees": 124498624079,
        "rewards": 8205200000000,
        "total": 8329698624079
      }
    },
    ...
  ]
}
```

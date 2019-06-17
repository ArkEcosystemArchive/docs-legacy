---
title: "Public Node API"
---

# Public Node API

The `node` resource is useful for service discovery, health checks, and obtaining network configurations, such as fees, API, and token information.

::: warning
Note that these parameters are returned by the specific Node and that other nodes might adhere to a different set of parameters.
:::

## Retrieve the Configuration

Used to access a Node's configuration and the network it is attached to (identified by the `nethash`).

### Endpoint

```
GET /api/node/configuration
```

### Examples

```sh
curl --header "API-Version: 2" https://api.ark.io/api/node/configuration
```

### Response

```json
{
    "data": {
        "nethash": "6e84d08bd299ed97c212c886c98a57e36545c8f5d645ca7eeae63a8bd62d8988",
        "slip44": 111,
        "wif": 170,
        "token": "ARK",
        "symbol": "Ѧ",
        "explorer": "https://explorer.ark.io",
        "version": 23,
        "ports": {
            "@arkecosystem/core-p2p": null,
            "@arkecosystem/core-api": 4203
        },
        "constants": {
            "height": 8204000,
            "reward": 200000000,
            "activeDelegates": 51,
            "blocktime": 8,
            "block": {
                "version": 0,
                "maxTransactions": 150,
                "maxPayload": 6300000,
                "idFullSha256": true
            },
            "epoch": "2017-03-21T13:00:00.000Z",
            "fees": {
                "staticFees": {
                    "transfer": 10000000,
                    "secondSignature": 500000000,
                    "delegateRegistration": 2500000000,
                    "vote": 100000000,
                    "multiSignature": 500000000,
                    "ipfs": 0,
                    "timelockTransfer": 0,
                    "multiPayment": 0,
                    "delegateResignation": 2500000000
                }
            },
            "vendorFieldLength": 255
        },
        "transactionPool": {
            "dynamicFees": {
                "enabled": true,
                "minFeePool": 3000,
                "minFeeBroadcast": 3000,
                "addonBytes": {
                    "transfer": 100,
                    "secondSignature": 250,
                    "delegateRegistration": 400000,
                    "vote": 100,
                    "multiSignature": 500,
                    "ipfs": 250,
                    "timelockTransfer": 500,
                    "multiPayment": 500,
                    "delegateResignation": 100
                }
            }
        }
    }
}
```

## Retrieve the Cryptography Configuration

Used to access a Node's configuration for the `@arkecosystem/crypto` package that handles all cryptography operations.

### Endpoint

```
GET /api/node/configuration/crypto
```

### Examples

```sh
curl --header "API-Version: 2" https://api.ark.io/api/node/configuration/crypto
```

### Response

```json
{
    "data": {
        "exceptions": {
            "blocks": [
                "10370119864814436559"
            ],
            "transactions": [
                "608c7aeba0895da4517496590896eb325a0b5d367e1b186b1c07d7651a568b9e",
                ...
            ],
            "outlookTable": {
                "5139199631254983076": "1000099631254983076",
                ...
            },
            "transactionIdFixTable": {
                "ca764c01dd78f93393b02f7f6c4f0c12ed8e7ca26d3098e91d6e461a238a6b33": "80d75c7b90288246199e4a97ba726bad6639595ef92ad7c2bd14fd31563241ab"
            },
            "wrongTransactionOrder": {
                "11773170219525190460": [
                    "bace38ea544678f951cdd4abc269be24b4f5bab925ff6d5b480657952eb5aa65",
                    "7a1a43098cd253db395514220f69e3b99afaabb2bfcf5ecfa3b99727b367344b"
                ],
                "5847703302374058501": [
                    "163c355844ced31ea62c86aeba033a1ba75f8a9657729990e17b06cbdf31f68a",
                    "ce3b901c5507993a282c36987cbf003769e962d721b70a9f550b9ac1654fcee7"
                ]
            }
        },
        "genesisBlock": {
            "version": 0,
            "totalAmount": "12500000000000004",
            "totalFee": "0",
            "reward": "0",
            "payloadHash": "6e84d08bd299ed97c212c886c98a57e36545c8f5d645ca7eeae63a8bd62d8988",
            "timestamp": 0,
            "numberOfTransactions": 1492,
            "payloadLength": 313052,
            "previousBlock": null,
            "generatorPublicKey": "03a4d147a417376742f9ab78c7c3891574d19376aa62e7bbddceaf12e096e79fe0",
            "transactions": [
                {
                    "type": 0,
                    "amount": "0",
                    "fee": "0",
                    "recipientId": "AU9BgcsCBDCkzPyY9EZXqiwukYq4Kor4oX",
                    "timestamp": 0,
                    "asset": {},
                    "senderPublicKey": "0235d486fea0193cbe77e955ab175b8f6eb9eaf784de689beffbd649989f5d6be3",
                    "signature": "3045022100ed57f27cabdb01f5398b30e63e3372735ee428e17e95de675c37586b6d1a5c12022062a0040ed189a4adac6c3d105e05180f7c74e8c68ca9912b3c60286c2226f3fa",
                    "id": "44d9d0a3093232b9368a24af90577741df8340b93732db23b90d44f6590d3e42"
                },
                ...
            ],
            "height": 1,
            "id": "4366553906931540162",
            "blockSignature": "3045022100c442ef265f2a7fa102d61e9a180e335fd17e8e3224307dadf8ac856e569c5c5102201a34cb1302cf4e0887b45784bfbdaf5cfbc44f6d6dad638d56bafa82ec96fd45"
        },
        "milestones": [
            {
                "height": 1,
                "reward": 0,
                "activeDelegates": 51,
                "blocktime": 8,
                "block": {
                    "version": 0,
                    "maxTransactions": 50,
                    "maxPayload": 2097152
                },
                "epoch": "2017-03-21T13:00:00.000Z",
                "fees": {
                    "staticFees": {
                        "transfer": 10000000,
                        "secondSignature": 500000000,
                        "delegateRegistration": 2500000000,
                        "vote": 100000000,
                        "multiSignature": 500000000,
                        "ipfs": 0,
                        "timelockTransfer": 0,
                        "multiPayment": 0,
                        "delegateResignation": 2500000000
                    }
                },
                "vendorFieldLength": 64
            },
            {
                "height": 75600,
                "reward": 200000000,
                "activeDelegates": 51,
                "blocktime": 8,
                "block": {
                    "version": 0,
                    "maxTransactions": 50,
                    "maxPayload": 2097152
                },
                "epoch": "2017-03-21T13:00:00.000Z",
                "fees": {
                    "staticFees": {
                        "transfer": 10000000,
                        "secondSignature": 500000000,
                        "delegateRegistration": 2500000000,
                        "vote": 100000000,
                        "multiSignature": 500000000,
                        "ipfs": 0,
                        "timelockTransfer": 0,
                        "multiPayment": 0,
                        "delegateResignation": 2500000000
                    }
                },
                "vendorFieldLength": 64
            },
            {
                "height": 6600000,
                "reward": 200000000,
                "activeDelegates": 51,
                "blocktime": 8,
                "block": {
                    "version": 0,
                    "maxTransactions": 150,
                    "maxPayload": 6300000
                },
                "epoch": "2017-03-21T13:00:00.000Z",
                "fees": {
                    "staticFees": {
                        "transfer": 10000000,
                        "secondSignature": 500000000,
                        "delegateRegistration": 2500000000,
                        "vote": 100000000,
                        "multiSignature": 500000000,
                        "ipfs": 0,
                        "timelockTransfer": 0,
                        "multiPayment": 0,
                        "delegateResignation": 2500000000
                    }
                },
                "vendorFieldLength": 64
            },
            {
                "height": 8128000,
                "reward": 200000000,
                "activeDelegates": 51,
                "blocktime": 8,
                "block": {
                    "version": 0,
                    "maxTransactions": 150,
                    "maxPayload": 6300000
                },
                "epoch": "2017-03-21T13:00:00.000Z",
                "fees": {
                    "staticFees": {
                        "transfer": 10000000,
                        "secondSignature": 500000000,
                        "delegateRegistration": 2500000000,
                        "vote": 100000000,
                        "multiSignature": 500000000,
                        "ipfs": 0,
                        "timelockTransfer": 0,
                        "multiPayment": 0,
                        "delegateResignation": 2500000000
                    }
                },
                "vendorFieldLength": 255
            },
            {
                "height": 8204000,
                "reward": 200000000,
                "activeDelegates": 51,
                "blocktime": 8,
                "block": {
                    "version": 0,
                    "maxTransactions": 150,
                    "maxPayload": 6300000,
                    "idFullSha256": true
                },
                "epoch": "2017-03-21T13:00:00.000Z",
                "fees": {
                    "staticFees": {
                        "transfer": 10000000,
                        "secondSignature": 500000000,
                        "delegateRegistration": 2500000000,
                        "vote": 100000000,
                        "multiSignature": 500000000,
                        "ipfs": 0,
                        "timelockTransfer": 0,
                        "multiPayment": 0,
                        "delegateResignation": 2500000000
                    }
                },
                "vendorFieldLength": 255
            }
        ],
        "network": {
            "name": "mainnet",
            "messagePrefix": "ARK message:\n",
            "bip32": {
                "public": 46090600,
                "private": 46089520
            },
            "pubKeyHash": 23,
            "nethash": "6e84d08bd299ed97c212c886c98a57e36545c8f5d645ca7eeae63a8bd62d8988",
            "wif": 170,
            "slip44": 111,
            "aip20": 0,
            "client": {
                "token": "ARK",
                "symbol": "Ѧ",
                "explorer": "https://explorer.ark.io"
            }
        }
    }
}
```

## Retrieve the Fee Statistics

Used to access a Node's fee statistics.

### Endpoint

```
GET /api/node/fees
```

### Examples

```sh
curl --header "API-Version: 2" https://api.ark.io/api/node/fees
```

### Query Parameters

| Name   | Type   | Description                                | Required |
| :----- | :----: | :----------------------------------------- | :------: |
| days   | int    | The number of days which will be regarded. |   :x:    |

### Response

```json
{
    "meta": {
        "days": 7
    },
    "data": [
        {
            "type": 0,
            "avg": "2983493",
            "min": "5000",
            "max": "100000000",
            "sum": "75658391245"
        },
        {
            "type": 1,
            "avg": "78826906",
            "min": "10000000",
            "max": "128243140",
            "sum": "472961434"
        },
        {
            "type": 2,
            "avg": "1003333333",
            "min": "10000000",
            "max": "2500000000",
            "sum": "3010000000"
        },
        {
            "type": 3,
            "avg": "23858371",
            "min": "100000",
            "max": "100000000",
            "sum": "10163666129"
        }
    ]
}
```

## Retrieve the Status

The status allows for health checking, showing if the node is in sync with the network.

### Endpoint

```
GET /api/node/status
```

### Examples

```sh
curl --header "API-Version: 2" https://api.ark.io/api/node/status
```

### Response

```json
{
    "data": {
        "synced": true,
        "now": 8691421,
        "blocksCount": -2
    }
}
```

## Retrieve the Syncing Status

The `syncing` resource is very much alike `node/status`, providing information on the syncing progress. If a node is not syncing but significantly behind in blocks, it might be time to perform a check.

### Endpoint

```
GET /api/node/syncing
```

```sh
curl --header "API-Version: 2" https://api.ark.io/api/node/syncing
```

### Response

```json
{
    "data": {
        "syncing": false,
        "blocks": 0,
        "height": 8691414,
        "id": "7df8f557733f05cbc5dda7ae3951672800f455e1d4b7988ceb94f14ec39b54be"
    }
}
```

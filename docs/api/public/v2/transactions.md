---
title: "Public Transactions API"
---

# Public Transactions API

Transactions are signed, serialized payloads; batched together to form a [block](/api/public/v2/blocks.md).

## Create a Transaction

Creating the correct payload for a transaction is non-trivial, as it requires cryptographic functions and a specific serialization protocol. Our [crypto SDKs](/sdk/cryptography/usage.html) provide the functionality needed in most major programming languages. You can read more about it in the [send transaction](/guidebook/developer/send-transaction.html) section.

### Endpoint

```
POST /api/transactions
```

### Body Parameters

| Name         | Type  | Description                         |      Required      |
| :----------- | :---: | :---------------------------------- | :----------------: |
| transactions | array | The list of transactions to create. | :white_check_mark: |

### Examples

```sh
curl --header 'API-Version: 2' --header "Content-type: application/json" --data '{"transactions":[{"id":"14e7ee53a8897cb352ecc371f2aeea865228ef14add45e750b1ed4e2b1db2043","signature":"304402200e5c92338ee7e0faf9510b51bb941d7d02fe0407518493b35be8def4b2b01da102204923ad3d7021075d5086ff76e220b8e0d13877522526967c18eeba063018166f","timestamp":70651828,"version":1,"type":0,"fee":"10000000","senderPublicKey":"033e6e27afd6336946b21a3f4fc1a03205a9a561fbd982ce38e6dfd771c983e70c","amount":"1","recipientId":"DJpFwW39QnQvQRQJF2MCfAoKvsX4DJ28jq","expiration":0}]}' 'https://api.ark.io/api/transactions'
```

### Response

```json
{
    "data": {
        "accept": [
            "14e7ee53a8897cb352ecc371f2aeea865228ef14add45e750b1ed4e2b1db2043"
        ],
        "broadcast": [
            "14e7ee53a8897cb352ecc371f2aeea865228ef14add45e750b1ed4e2b1db2043"
        ],
        "excess": [],
        "invalid": []
    }
}
```

## Retrieve a Transaction

Obtaining a transaction by ID does not require advanced logic; as the API does not return a serialized transaction, but a nicer [DTO](https://en.wikipedia.org/wiki/Data_transfer_object).

### Endpoint

```
GET /api/transactions/{id}
```

### Path Parameters

| Name |  Type  | Description                                        |      Required      |
| :--- | :----: | :------------------------------------------------- | :----------------: |
| id   | string | The identifier of the transaction to be retrieved. | :white_check_mark: |

### Examples

```sh
curl --header "API-Version: 2" https://api.ark.io/api/transactions/b618cb6add488140e89079ff05c5d7eb803a581a1de5ccd8ba09a5a554e3af80
```

### Response

```json
{
    "data": {
        "id": "b618cb6add488140e89079ff05c5d7eb803a581a1de5ccd8ba09a5a554e3af80",
        "blockId": "9fff572b86b5a3213cf23e549e5cc18565e3b4be82c457c8ce5edf6db23bc713",
        "version": 1,
        "type": 0,
        "amount": 100000000,
        "fee": 3057398,
        "sender": "AVL2SfiaaKPD6dV3KwFxqcBbzmtfeYDaoj",
        "senderPublicKey": "0273f311dce939562a92695583521b4782fdaf7c04f0a1d8643447adca76443111",
        "recipient": "ASoeoWpqKkHou4LL3JjGE7DzGgYn2bSP8M",
        "signature": "3044022053b7729c101187995e922ee4b473d180419012ea9d41bb52a525f2719e78e786022058eb7ca7240d7bc23b3365e0a346bd65a5d8a3f537e2d116d19500469a5e7a99",
        "vendorField": "Meow 🐈",
        "confirmations": 28525,
        "timestamp": {
            "epoch": 70425070,
            "unix": 1560526270,
            "human": "2019-06-14T15:31:10.000Z"
        }
    }
}
```

## List All Transactions

The paginated API is used to query for multiple transactions. You can apply _filters_ through the query parameter to search for specific transactions.

### Endpoint

```
GET /api/transactions
```

### Query Parameters

| Name    | Type | Description                                   | Required |
| :------ | :--: | :-------------------------------------------- | :------: |
| page    | int  | The number of the page that will be returned. |   :x:    |
| limit   | int  | The number of resources per page.             |   :x:    |
| type    | int  | The transaction type to be retrieved.         |   :x:    |
| blockId | int  | The block id to be retrieved.                 |   :x:    |
| id      | int  | The transaction id to be retrieved.           |   :x:    |

### Examples

```sh
curl --header "API-Version: 2" https://api.ark.io/api/transactions?limit=1
```

### Response

```json
{
    "meta": {
        "count": 1,
        "pageCount": 2589618,
        "totalCount": 2589618,
        "next": "/api/v2/transactions?limit=1&page=2",
        "previous": null,
        "self": "/api/v2/transactions?limit=1&page=1",
        "first": "/api/v2/transactions?limit=1&page=1",
        "last": "/api/v2/transactions?limit=1&page=2589618"
    },
    "data": [
        {
            "id": "e2b3cdf3c14461d63e06a75da2684613b12956726aebf8acc568b4d5f73d7d42",
            "blockId": "8719fddd52f5a6b58d9d1c7dd1e6539473efbf701378e99fc8c1054bd8b44ed2",
            "version": 1,
            "type": 0,
            "amount": 7035095055,
            "fee": 3029823,
            "sender": "AKLNnRKng648yyjFgUrikr6r7kn9xUm8Wi",
            "senderPublicKey": "02ee00d149a843faf01f6ad8b7625784be430cdddcb389ca35454d250390c326ac",
            "recipient": "AbMMpCtz5pd1kN7ES51sSnFQ2oAP4xEPd8",
            "signature": "3045022100e38dc4d220a57aafe57357330927b04d6fa08aad011376835fb92ce7699bb96b02206a31a96766a9e228b0d2dbd55c64b43102055a96fbf65a63d4aa5542d93555d4",
            "confirmations": 71,
            "timestamp": {
                "epoch": 70653281,
                "unix": 1560754481,
                "human": "2019-06-17T06:54:41.000Z"
            }
        }
    ]
}
```

## List All Unconfirmed Transaction

Unconfirmed transactions have not been incorporated in the blockchain, but reside in the mempool. Although usually the mempool is cleared within minutes, during high network load a transaction with a low fee will live here for a considerable time. If you have set the transaction with a fee of near zero, it might not be picked up by a Delegate and will time out.

### Endpoint

```
GET /api/transactions/unconfirmed/
```

### Query Parameters

| Name  | Type | Description                                   | Required |
| :---- | :--: | :-------------------------------------------- | :------: |
| page  | int  | The number of the page that will be returned. |   :x:    |
| limit | int  | The number of resources per page.             |   :x:    |

### Examples

```sh
curl --header "API-Version: 2" https://api.ark.io/api/transactions/unconfirmed
```

### Response

```json
{
    "meta": {
        "count": 1,
        "pageCount": 1,
        "totalCount": 1,
        "next": null,
        "previous": null,
        "self": "/api/transactions/unconfirmed?transform=true&page=1&limit=100",
        "first": "/api/transactions/unconfirmed?transform=true&page=1&limit=100",
        "last": "/api/transactions/unconfirmed?transform=true&page=1&limit=100"
    },
    "data": [
        {
            "id": "5685946299c426f68c6a6f007059e8f5f015538575b5ef05584963b5837b4c5d",
            "version": 1,
            "type": 0,
            "amount": 100000000,
            "fee": 673078,
            "sender": "DTQgqpnRkkJ2jKNB8DTNjAhhcwZx1JZrgx",
            "senderPublicKey": "033e6e27afd6336946b21a3f4fc1a03205a9a561fbd982ce38e6dfd771c983e70c",
            "recipient": "DFSByMjuFNQy1MkRyyBPxEr6fqsu2w5ava",
            "signature": "3045022100e47f4f1b33cc9376138d87529c24e37afd37a36c87f0b53a1700d1d24c6d629e022009bf60d8a99e9048b07bc9bedaef7c41b28154a0dff147ae10891b5f45bb4954",
            "vendorField": "🐭",
            "confirmations": 0,
            "timestamp": {
                "epoch": 70597829,
                "unix": 1560699029,
                "human": "2019-06-16T15:30:29.000Z"
            }
        }
    ]
}
```

## Get an Unconfirmed Transaction

As with confirmed transactions, you may query for unconfirmed transactions directly.

### Endpoint

```
GET /api/transactions/unconfirmed/{id}
```

### Path Parameters

| Name |  Type  | Description                                        |      Required      |
| :--- | :----: | :------------------------------------------------- | :----------------: |
| id   | string | The identifier of the transaction to be retrieved. | :white_check_mark: |

### Examples

```sh
curl --header "API-Version: 2" https://api.ark.io/api/transactions/unconfirmed/5685946299c426f68c6a6f007059e8f5f015538575b5ef05584963b5837b4c5d
```

### Response

```json
{
    "data": {
        "id": "5685946299c426f68c6a6f007059e8f5f015538575b5ef05584963b5837b4c5d",
        "version": 1,
        "type": 0,
        "amount": 100000000,
        "fee": 673078,
        "sender": "DTQgqpnRkkJ2jKNB8DTNjAhhcwZx1JZrgx",
        "senderPublicKey": "033e6e27afd6336946b21a3f4fc1a03205a9a561fbd982ce38e6dfd771c983e70c",
        "recipient": "DFSByMjuFNQy1MkRyyBPxEr6fqsu2w5ava",
        "signature": "3045022100e47f4f1b33cc9376138d87529c24e37afd37a36c87f0b53a1700d1d24c6d629e022009bf60d8a99e9048b07bc9bedaef7c41b28154a0dff147ae10891b5f45bb4954",
        "vendorField": "🐭",
        "confirmations": 0,
        "timestamp": {
            "epoch": 70597829,
            "unix": 1560699029,
            "human": "2019-06-16T15:30:29.000Z"
        }
    }
}
```

## Search for Transactions

For fine-grained searches, use the `search` endpoint. Note that unless you use specific body parameters, the response might contain a large number of transactions (hundreds of thousands). It is best to filter as many transactions node side, instead of dissecting the response client side.

### Endpoint

```
POST /api/transactions/search
```

### Query Parameters

| Name  | Type | Description                                   | Required |
| :---- | :--: | :-------------------------------------------- | :------: |
| page  | int  | The number of the page that will be returned. |   :x:    |
| limit | int  | The number of resources per page.             |   :x:    |

### Body Parameters

| Name            |  Type  | Description | Required |
| :-------------- | :----: | :---------- | :------: |
| orderBy         | string | ...         |   :x:    |
| id              | string | ...         |   :x:    |
| blockId         | string | ...         |   :x:    |
| type            |  int   | ...         |   :x:    |
| version         |  int   | ...         |   :x:    |
| senderPublicKey | string | ...         |   :x:    |
| senderId        | string | ...         |   :x:    |
| recipientId     | string | ...         |   :x:    |
| ownerId         | string | ...         |   :x:    |
| vendorFieldHex  | string | ...         |   :x:    |
| timestamp       | object | ...         |   :x:    |
| timestamp.from  |  int   | ...         |   :x:    |
| timestamp.to    |  int   | ...         |   :x:    |
| amount          | object | ...         |   :x:    |
| amount.from     |  int   | ...         |   :x:    |
| amount.to       |  int   | ...         |   :x:    |
| fee             | object | ...         |   :x:    |
| fee.from        |  int   | ...         |   :x:    |
| fee.to          |  int   | ...         |   :x:    |

### Examples

```sh
curl --header "API-Version: 2" --data 'amount={ "from": 1000000000000, "to": 20000000000000 }' https://api.ark.io/api/transactions/search
```

### Response

```json
{
    "meta": {
        "count": 100,
        "pageCount": 23,
        "totalCount": 2293,
        "next": "/api/v2/transactions/search?page=2&limit=100",
        "previous": null,
        "self": "/api/v2/transactions/search?page=1&limit=100",
        "first": "/api/v2/transactions/search?page=1&limit=100",
        "last": "/api/v2/transactions/search?page=23&limit=100"
    },
    "data": [
        {
            "id": "ba048820b13917d77c5ea37f36473d1d5691b60e21d8157f73a7bd7df15c36b8",
            "blockId": "aafc97d1c764fb75cf47cbebe4831e11efaa0ef9f31e254b4154c9822a8fb997",
            "version": 1,
            "type": 0,
            "amount": 2000000000000,
            "fee": 2984627,
            "sender": "AUExPezD13Ct7nQz2Rg2R8P9MJHjYccDYA",
            "senderPublicKey": "0209cd4a48aee3a76cd22db73ed94a2c7f02d20b8e0795b436f5982c24d528d2cd",
            "recipient": "ARmBvMowe6KoCkhLButPHPThmcNYKB8Htn",
            "signature": "304402205d64a2f9d1a1167b444d63fe79b952c64f1006de2316d6ca50795b3e5c09de1a02206638f7bccb18b757ebdcad274e0ad447eaeb43a42a572030e8fdbeb0f8996396",
            "confirmations": 1399,
            "timestamp": {
                "epoch": 70641585,
                "unix": 1560742785,
                "human": "2019-06-17T03:39:45.000Z"
            }
        },
        ...
    ]
}
```

## Get Transaction Types

The transaction types are network specific. ARK currently supports eight different types, but BridgeChains may define more or less if needed for their business purpose.

### Endpoint

```
GET /api/transactions/types
```

### Examples

```sh
curl --header "API-Version: 2" https://api.ark.io/api/transactions/types
```

### Response

```json
{
    "data": {
        "Transfer": 0,
        "SecondSignature": 1,
        "DelegateRegistration": 2,
        "Vote": 3,
        "MultiSignature": 4,
        "Ipfs": 5,
        "TimelockTransfer": 6,
        "MultiPayment": 7,
        "DelegateResignation": 8
    }
}
```

## Get Transaction Fees (Non-Dynamic)

The static transaction fees are significantly higher than the dynamic transaction fees. Use the [node resource](/api/public/v2/node.html#retrieve-the-configuration) to find dynamic fees, and prefer using these.

### Endpoint

```
GET /api/transactions/fees
```

### Examples

```sh
curl --header "API-Version: 2" https://api.ark.io/api/transactions/fees
```

### Response

```json
{
    "data": {
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
}
```

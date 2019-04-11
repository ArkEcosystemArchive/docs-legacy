---
title: Public Transactions API
---

# Public Transactions API

## Create transactions

The Public API 1.0 does not provide an endpoint for creating transactions. Take a look at the [P2P API](/api/p2p/).

## List all transactions

### Endpoint

```
GET /api/transactions
```

### Query Parameters

| Name            | Type   | Description                                                    | Required |
| :-------------- | :----: | :------------------------------------------------------------- | :------: |
| offset          | int    | The offset of resources that will be returned.                 | :x:      |
| limit           | int    | The number of resources per page.                              | :x:      |
| blockId         | int    | Unique identifier for the block.                               | :x:      |
| type            | int    | Unique identifier for the transaction type.                    | :x:      |
| orderBy         | string | The column by which the resources will be sorted.              | :x:      |
| senderPublicKey | string | The sender public key by which the resources will be filtered. | :x:      |
| vendorField     | string | The vendor field by which the resources will be filtered.      | :x:      |
| ownerPublicKey  | string | The owner public key by which the resources will be filtered.  | :x:      |
| ownerAddress    | string | The owner address by which the resources will be filtered.     | :x:      |
| senderId        | string | The sender address by which the resources will be filtered.    | :x:      |
| recipientId     | string | The recipient address by which the resources will be filtered. | :x:      |
| amount          | int    | The amount by which the resources will be filtered.            | :x:      |
| fee             | int    | The fee by which the resources will be filtered.               | :x:      |

### Response

```json
{
    "transactions": [
        {
            "id": "5c6ce775447a5acd22050d72e2615392494953bb1fb6287e9ffb3c33eaeb79aa",
            "blockid": "4271682877946294396",
            "type": 0,
            "timestamp": 32794053,
            "amount": 32106400000,
            "fee": 10000000,
            "recipientId": "DQnQNoJuNCvpjYhxL7fsnGepHBqrumgsyP",
            "senderId": "DDiTHZ4RETZhGxcyAi1VruCXZKxBFqXMeh",
            "senderPublicKey": "027742333b7f06acef9d3a7b3a9a924dbe6b9ddd3dd164c808546cacd49f6e8682",
            "signature": "3044022047c39f6f45a46a87f91ca867f9551dbebf0035adcfcbdc1370222c7a1517fc0002206fb5ecc10460e0352a8b626a508e2fcc76e39e490b0a2581dd772ebc8079696e",
            "confirmations": 2279
        }
    ],
    "success": true
}
```

### Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/transactions \
  -H "API-Version: 1"
```
</request-example>

## Retrieve a transaction

### Endpoint

```
GET /api/transactions/get
```

### Query Parameters

| Name | Type   | Description                                        | Required           |
| :--- | :----: | :------------------------------------------------- | :----------------: |
| id   | string | The identifier of the transaction to be retrieved. | :white_check_mark: |

### Response

```json
{
    "transaction": {
        "id": "5c6ce775447a5acd22050d72e2615392494953bb1fb6287e9ffb3c33eaeb79aa",
        "blockid": "4271682877946294396",
        "type": 0,
        "timestamp": 32794053,
        "amount": 32106400000,
        "fee": 10000000,
        "recipientId": "DQnQNoJuNCvpjYhxL7fsnGepHBqrumgsyP",
        "senderId": "DDiTHZ4RETZhGxcyAi1VruCXZKxBFqXMeh",
        "senderPublicKey": "027742333b7f06acef9d3a7b3a9a924dbe6b9ddd3dd164c808546cacd49f6e8682",
        "signature": "3044022047c39f6f45a46a87f91ca867f9551dbebf0035adcfcbdc1370222c7a1517fc0002206fb5ecc10460e0352a8b626a508e2fcc76e39e490b0a2581dd772ebc8079696e",
        "confirmations": 2279
    },
    "success": true
}
```

### Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/transactions/get?id=13786ab466a10e3fc39a57a2cc5425bd4b56f7564a253274292a3a4ec9a2a80f \
  -H "API-Version: 1"
```
</request-example>

## List all unconfirmed transactions

### Endpoint

```
GET /api/transactions/unconfirmed
```

### Query Parameters

| Name            | Type   | Description                                                    | Required        |
| :-------------- | :----: | :------------------------------------------------------------- | :-------------: |
| senderPublicKey | string | The sender public key by which the resources will be filtered. | :x:             |
| id              | string | The address by which the resources will be filtered.           | :x:             |

### Response

```json
{
    "success": true,
    "transactions": []
}
```

### Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/transactions/unconfirmed \
  -H "API-Version: 1"
```
</request-example>

## Retrieve an unconfirmed transaction

### Endpoint

```
GET /api/transactions/unconfirmed/get
```

### Query Parameters

| Name | Type   | Description                                        | Required           |
| :--- | :----: | :------------------------------------------------- | :----------------: |
| id   | string | The identifier of the transaction to be retrieved. | :white_check_mark: |

### Response

```json
{}
```

### Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/transactions/unconfirmed/get?id=13786ab466a10e3fc39a57a2cc5425bd4b56f7564a253274292a3a4ec9a2a80f \
  -H "API-Version: 1"
```
</request-example>

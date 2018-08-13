---
title: "Retrieve a transaction"
---

# Retrieve a transaction

[[toc]]

## Endpoint

```
GET /api/transactions/get
```

## Query Parameters

| Name | Type   | Description                                        | Required           |
|------|:------:|----------------------------------------------------|:------------------:|
| id   | string | The identifier of the transaction to be retrieved. | :white_check_mark: |

## Response

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

## Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/transactions/get?id=13786ab466a10e3fc39a57a2cc5425bd4b56f7564a253274292a3a4ec9a2a80f \
  -H "API-Version: 1"
```
</request-example>

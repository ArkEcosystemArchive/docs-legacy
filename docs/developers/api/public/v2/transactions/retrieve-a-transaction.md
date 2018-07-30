---
title: "Retrieve a transaction"
---

# Retrieve a transaction

[[toc]]

## Endpoint

```
GET /api/transactions/{id}
```

## Path Parameters

| Name | Type   | Description                                        | Required           |
|------|:------:|----------------------------------------------------|:------------------:|
| id   | string | The identifier of the transaction to be retrieved. | :white_check_mark: |

## Response

```json
{
    "data": {
        "id": "5c6ce775447a5acd22050d72e2615392494953bb1fb6287e9ffb3c33eaeb79aa",
        "blockId": "4271682877946294396",
        "type": 0,
        "amount": 32106400000,
        "fee": 10000000,
        "sender": "DDiTHZ4RETZhGxcyAi1VruCXZKxBFqXMeh",
        "recipient": "DQnQNoJuNCvpjYhxL7fsnGepHBqrumgsyP",
        "signature": "3044022047c39f6f45a46a87f91ca867f9551dbebf0035adcfcbdc1370222c7a1517fc0002206fb5ecc10460e0352a8b626a508e2fcc76e39e490b0a2581dd772ebc8079696e",
        "confirmations": 1928,
        "timestamp": {
            "epoch": 32794053,
            "unix": 1522895253,
            "human": "2018-04-05T02:27:33Z"
        }
    }
}
```

---
title: "Retrieve a wallet"
---

# Retrieve a wallet

[[toc]]

## Endpoint

```
GET /api/wallets/{id}
```

## Path Parameters

| Name | Type   | Description                                   | Required           |
|------|:------:|-----------------------------------------------|:------------------:|
| id   | string | The identifier of the wallet to be retrieved. | :white_check_mark: |

## Response

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

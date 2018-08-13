---
title: "Retrieve an account"
---

# Retrieve an account

[[toc]]

## Endpoint

```
GET /api/accounts
```

## Query Parameters

| Name    | Type   | Description                                    | Required           |
|---------|:------:|------------------------------------------------|:------------------:|
| address | string | The identifier of the account to be retrieved. | :white_check_mark: |

## Response

```json
{
    "account": {
        "address": "D59NTfV92ca9QevUydvMiFMFdubbCaAVCV",
        "publicKey": "037d035f08b3bad0d5bb605232c7aa41555693c480044dbeb797270a44c339da5a",
        "secondPublicKey": null,
        "vote": "0284a88da69cc04439633217c6961d2800df0f7dff7f85b9803848ee02d0743f1d",
        "username": null,
        "balance": 1023145260990,
        "votebalance": 0
    },
    "success": true
}
```

## Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/accounts?address=AUDud8tvyVZa67p3QY7XPRUTjRGnWQQ9Xv \
  -H "API-Version: 1"
```
</request-example>

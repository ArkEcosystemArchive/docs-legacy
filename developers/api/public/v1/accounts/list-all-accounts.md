---
title: "List all accounts"
---

# List all accounts

[[toc]]

## Endpoint

```
GET /api/accounts/getAllAccounts
```

## Query Parameters

| Name   | Type | Description                                    | Required |
|--------|:----:|------------------------------------------------|:--------:|
| offset | int  | The offset of resources that will be returned. | :x:      |
| limit  | int  | The number of resources per page.              | :x:      |

## Response

```json
{
    "wallets": [
        {
            "address": "D59NTfV92ca9QevUydvMiFMFdubbCaAVCV",
            "publicKey": "037d035f08b3bad0d5bb605232c7aa41555693c480044dbeb797270a44c339da5a",
            "secondPublicKey": null,
            "vote": "0284a88da69cc04439633217c6961d2800df0f7dff7f85b9803848ee02d0743f1d",
            "username": null,
            "balance": 1023145260990,
            "votebalance": 0
        }
    ],
    "success": true
}
```

## Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/accounts/getAllAccounts \
  -H "API-Version: 1"
```
</request-example>

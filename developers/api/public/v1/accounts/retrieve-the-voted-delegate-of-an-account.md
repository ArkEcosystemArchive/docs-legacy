---
title: "Retrieve the voted delegate of an account"
---

# Retrieve the voted delegate of an account

[[toc]]

## Endpoint

```
GET /api/accounts/delegates
```

## Query Parameters

| Name    | Type   | Description                                    | Required           |
|---------|:------:|------------------------------------------------|:------------------:|
| address | string | The identifier of the account to be retrieved. | :white_check_mark: |

## Response

```json
{
    "delegates": [
        {
            "username": "bioly",
            "address": "DRkVSeW5e2zh9v7R5msdLc26fo8axFALGT",
            "publicKey": "0284a88da69cc04439633217c6961d2800df0f7dff7f85b9803848ee02d0743f1d",
            "vote": "13475943400000",
            "producedblocks": 0,
            "missedblocks": 0,
            "rate": 15,
            "approval": "0.10",
            "productivity": "0.00"
        }
    ],
    "success": true
}
```

## Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/accounts/delegates?address=AUDud8tvyVZa67p3QY7XPRUTjRGnWQQ9Xv \
  -H "API-Version: 1"
```
</request-example>

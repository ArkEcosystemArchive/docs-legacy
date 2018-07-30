---
title: "List all top accounts"
---

# List all top accounts

[[toc]]

## Endpoint

```
GET /api/accounts/top
```

## Query Parameters

| Name   | Type | Description                                    | Required |
|--------|:----:|------------------------------------------------|:--------:|
| offset | int  | The offset of resources that will be returned. | :x:      |
| limit  | int  | The number of resources per page.              | :x:      |

## Response

```json
{
    "accounts": [
        {
            "address": "DGihocTkwDygiFvmg6aG8jThYTic47GzU9",
            "balance": 11499593462120632,
            "publicKey": "024c8247388a02ecd1de2a3e3fd5b7c61ecc2797fa3776599d558333ef1802d231"
        }
    ],
    "success": true
}
```

## Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/accounts/top \
  -H "API-Version: 1"
```
</request-example>

---
title: "List all unconfirmed transactions"
---

# List all unconfirmed transactions

[[toc]]

## Endpoint

```
GET /api/transactions/unconfirmed
```

## Query Parameters

| Name            | Type   | Description                                                    | Required        |
|-----------------|:------:|----------------------------------------------------------------|:---------------:|
| senderPublicKey | string | The sender public key by which the resources will be filtered. | :x:             |
| id              | string | The address by which the resources will be filtered.           | :x:             |

## Response

```json
{
    "success": true,
    "transactions": []
}
```

## Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/transactions/unconfirmed \
  -H "API-Version: 1"
```
</request-example>

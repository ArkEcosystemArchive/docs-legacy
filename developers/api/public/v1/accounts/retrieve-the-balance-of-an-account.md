---
title: "Retrieve the balance of an account"
---

# Retrieve the balance of an account

[[toc]]

## Endpoint

```
GET /api/accounts/getBalance
```

## Query Parameters

| Name    | Type   | Description                                    | Required           |
|---------|:------:|------------------------------------------------|:------------------:|
| address | string | The identifier of the account to be retrieved. | :white_check_mark: |

## Response

```json
{
    "balance": 1023145260990,
    "unconfirmedBalance": 1023145260990,
    "success": true
}
```

## Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/accounts/getBalance?address=AUDud8tvyVZa67p3QY7XPRUTjRGnWQQ9Xv \
  -H "API-Version: 1"
```
</request-example>

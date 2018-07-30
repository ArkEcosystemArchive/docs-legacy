---
title: "Retrieve the delegate registration fee"
---

# Retrieve the delegate registration fee

[[toc]]

## Endpoint

```
GET /api/accounts/delegates/fee
```

## Response

```json
{
    "fee": 2500000000,
    "success": true
}
```


## Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/accounts/delegates/fee \
  -H "API-Version: 1"
```
</request-example>

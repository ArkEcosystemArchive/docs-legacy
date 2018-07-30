---
title: "Retrieve the total count of accounts"
---

# Retrieve the total count of accounts

[[toc]]

## Endpoint

```
GET /api/accounts/count
```

## Response

```json
{
    "count": 841,
    "success": true
}
```


## Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/accounts/count \
  -H "API-Version: 1"
```
</request-example>

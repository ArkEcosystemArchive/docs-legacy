---
title: "Retrieve a fee"
---

# Retrieve a fee

[[toc]]

## Endpoint

```
GET /api/blocks/getFee
```

## Response

```json
{
    "fee": 10000000,
    "success": true
}
```

## Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/blocks/getFee \
  -H "API-Version: 1"
```
</request-example>

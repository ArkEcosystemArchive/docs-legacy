---
title: "Retrieve the nethash of the blockchain"
---

# Retrieve the nethash of the blockchain

[[toc]]

## Endpoint

```
GET /api/blocks/getNethash
```

## Response

```json
{
    "nethash": "578e820911f24e039733b45e4882b73e301f813a0d2c31330dafda84534ffa23",
    "success": true
}
```

## Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/blocks/getNethash \
  -H "API-Version: 1"
```
</request-example>

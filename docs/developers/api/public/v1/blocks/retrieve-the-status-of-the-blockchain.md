---
title: "Retrieve the status of the blockchain"
---

# Retrieve the status of the blockchain

[[toc]]

## Endpoint

```
GET /api/blocks/getStatus
```

## Response

```json
{
    "epoch": "2017-03-21T13:00:00.000Z",
    "height": 3035628,
    "fee": 10000000,
    "milestone": 1,
    "nethash": "578e820911f24e039733b45e4882b73e301f813a0d2c31330dafda84534ffa23",
    "reward": 200000000,
    "supply": 13092005600000000,
    "success": true
}
```

## Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/blocks/getStatus \
  -H "API-Version: 1"
```
</request-example>

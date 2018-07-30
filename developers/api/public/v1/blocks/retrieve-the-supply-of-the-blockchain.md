---
title: "Retrieve the supply of the blockchain"
---

# Retrieve the supply of the blockchain

[[toc]]

## Endpoint

```
GET /api/blocks/getSupply
```

## Response

```json
{
    "supply": 13092004200000000,
    "success": true
}
```

## Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/blocks/getSupply \
  -H "API-Version: 1"
```
</request-example>

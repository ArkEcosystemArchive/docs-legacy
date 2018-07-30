---
title: "Retrieve the height of the blockchain"
---

# Retrieve the height of the blockchain

[[toc]]

## Endpoint

```
GET /api/blocks/getHeight
```

## Response

```json
{
    "height": 3035616,
    "id": "4635377835812759465",
    "success": true
}
```

## Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/blocks/getHeight \
  -H "API-Version: 1"
```
</request-example>

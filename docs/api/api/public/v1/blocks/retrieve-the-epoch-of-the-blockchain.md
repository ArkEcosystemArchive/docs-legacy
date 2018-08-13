---
title: "Retrieve the epoch of the blockchain"
---

# Retrieve the epoch of the blockchain

[[toc]]

## Endpoint

```
GET /api/blocks/getEpoch
```

## Response

```json
{
    "epoch": "2017-03-21T13:00:00.000Z",
    "success": true
}
```

## Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/blocks/getEpoch \
  -H "API-Version: 1"
```
</request-example>

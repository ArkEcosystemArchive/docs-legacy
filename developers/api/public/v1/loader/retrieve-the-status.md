---
title: "Retrieve the status"
---

# Retrieve the status

[[toc]]

## Endpoint

```
GET /api/loader/status
```

## Response

```json
{
    "loaded": false,
    "now": 3034441,
    "blocksCount": -26,
    "success": true
}
```

## Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/loader/status \
  -H "API-Version: 1"
```
</request-example>

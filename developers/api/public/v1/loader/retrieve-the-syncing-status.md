---
title: "Retrieve the syncing status"
---

# Retrieve the syncing status

[[toc]]

## Endpoint

```
GET /api/loader/status/sync
```

## Response

```json
{
    "syncing": true,
    "blocks": -31,
    "height": 3034446,
    "id": "16245805386023811986",
    "success": true
}
```

## Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/loader/status/sync \
  -H "API-Version: 1"
```
</request-example>

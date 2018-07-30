---
title: "Retrieve the total count of delegates"
---

# Retrieve the total count of delegates

[[toc]]

## Endpoint

```
GET /api/delegates/count
```

## Response

```json
{
    "count": 197,
    "success": true
}
```


## Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/delegates/count \
  -H "API-Version: 1"
```
</request-example>

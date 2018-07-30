---
title: "Retrieve the core version"
---

# Retrieve the core version

[[toc]]

## Endpoint

```
GET /api/peers/version
```

## Response

```json
{
    "version": "1.0.0",
    "success": true
}
```

## Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/peers/version \
  -H "API-Version: 1"
```
</request-example>

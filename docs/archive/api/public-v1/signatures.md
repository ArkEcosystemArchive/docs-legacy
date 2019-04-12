---
title: "Public Signatures API"
---

# Public Signatures API

## Retrieve the Signature Registration Fee

### Endpoint

```
GET /api/signatures/fee
```

### Response

```json
{
    "fee": 500000000,
    "success": true
}
```

### Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/signatures/fee \
  -H "API-Version: 1"
```
</request-example>

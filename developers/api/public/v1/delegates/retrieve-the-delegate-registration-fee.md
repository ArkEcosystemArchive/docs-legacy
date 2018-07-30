---
title: "Retrieve the delegate registration fee"
---

# Retrieve the delegate registration fee

[[toc]]

## Endpoint

```
GET /api/delegates/fee
```

## Response

```json
{
    "delegate": {
        "username": "boldninja",
        "address": "DARiJqhogp2Lu6bxufUFQQMuMyZbxjCydN",
        "publicKey": "022cca9529ec97a772156c152a00aad155ee6708243e65c9d211a589cb5d43234d",
        "vote": "0257b7724e97cd832e0c28533a86da5220656f9b5122141daab20e8526decce01f"
    },
    "success": true
}
```

## Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/delegates/fee \
  -H "API-Version: 1"
```
</request-example>

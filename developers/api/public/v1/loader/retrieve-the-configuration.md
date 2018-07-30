---
title: "Retrieve the configuration"
---

# Retrieve the configuration

[[toc]]

## Endpoint

```
GET /api/loader/autoconfigure
```

## Response

```json
{
    "success": true,
    "network": {
        "nethash": "6e84d08bd299ed97c212c886c98a57e36545c8f5d645ca7eeae63a8bd62d8988",
        "token": "ARK",
        "symbol": "Ѧ",
        "explorer": "https://explorer.ark.io",
        "version": 23
    }
}
```

## Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/loader/autoconfigure \
  -H "API-Version: 1"
```
</request-example>

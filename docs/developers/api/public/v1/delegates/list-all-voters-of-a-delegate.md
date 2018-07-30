---
title: "List all voters of a delegate"
---

# List all voters of a delegate

[[toc]]

## Endpoint

```
GET /api/delegates/voters
```

## Query Parameters

| Name      | Type   | Description                                     | Required           |
|-----------|:------:|-------------------------------------------------|:------------------:|
| publicKey | string | The public key of the delegate to be retrieved. | :white_check_mark: |

## Response

```json
{
    "accounts": [
        {
            "username": null,
            "address": "D5mbS6mpP5UheuciNscpDLgC127kYjRtkK",
            "publicKey": "03f7e0b1ab14985990416f72ed0b206c20b9efa35156e4528c8ff749fa0eea5d5a",
            "balance": 400000000
        }
    ],
    "success": true
}
```

## Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/delegates/voters?publicKey=032fcfd19f0e095bf46bd3ada87e283720c405249b1be1a70bad1d5f20095a8515 \
  -H "API-Version: 1"
```
</request-example>

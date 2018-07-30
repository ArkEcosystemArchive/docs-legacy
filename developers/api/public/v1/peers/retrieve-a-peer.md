---
title: "Retrieve a peer"
---

# Retrieve a peer

[[toc]]

## Endpoint

```
GET /api/peers/get
```

## Query Parameters

| Name | Type | Description                                 | Required           |
|------|:----:|---------------------------------------------|:------------------:|
| ip   | int  | The IP address of the peer to be retrieved. | :white_check_mark: |
| port | int  | The port of the peer to be retrieved.       | :white_check_mark: |

## Response

```json
{
    "peer": {
        "ip": "145.239.88.101",
        "port": 4002,
        "version": "1.1.1",
        "status": "OK",
        "os": "linux4.4.0-109-generic",
        "delay": 254
    },
    "success": true
}
```

## Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/peers/get?ip=185.233.104.31&port=4001 \
  -H "API-Version: 1"
```
</request-example>

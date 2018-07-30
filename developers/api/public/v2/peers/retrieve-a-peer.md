---
title: "Retrieve a peer"
---

# Retrieve a peer

[[toc]]

## Endpoint

```
GET /api/peers/{ip}
```

## Query Parameters

| Name | Type   | Description                                  | Required           |
|------|:------:|----------------------------------------------|:------------------:|
| ip   | string | The IP address of the block to be retrieved. | :white_check_mark: |

## Response

```json
{
    "data": {
        "ip": "167.114.29.55",
        "port": 4002,
        "version": "1.1.1",
        "status": "OK",
        "latency": 355
    }
}
```

---
title: "List all peers"
---

# List all peers

[[toc]]

## Endpoint

```
GET /api/peers
```

## Query Parameters

| Name    | Type   | Description                                                   | Required |
|---------|:------:|---------------------------------------------------------------|:--------:|
| offset  | int    | The offset of resources that will be returned.                | :x:      |
| limit   | int    | The number of resources per page.                             | :x:      |
| port    | int    | The port by which the resources will be filtered.             | :x:      |
| status  | string | The status by which the resources will be filtered.           | :x:      |
| os      | string | The operating system by which the resources will be filtered. | :x:      |
| version | string | The node version by which the resources will be filtered.     | :x:      |
| orderBy | string | The column by which the resources will be sorted.             | :x:      |

## Response

```json
{
    "peers": [
        {
            "ip": "62.113.246.106",
            "port": 4002,
            "version": "1.1.1",
            "height": 3035375,
            "status": "OK",
            "os": "linux2.6.32-042stab127.2",
            "delay": 109
        }
    ],
    "success": true
}
```

## Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/peers \
  -H "API-Version: 1"
```
</request-example>

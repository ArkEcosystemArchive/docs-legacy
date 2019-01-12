---
title: Public Peers API
---

# Public Peers API

## List all peers

### Endpoint

```
GET /api/peers
```

### Query Parameters

| Name  | Type | Description                                   | Required |
|-------|:----:|-----------------------------------------------|:--------:|
| page  | int  | The number of the page that will be returned. | :x:      |
| limit | int  | The number of resources per page.             | :x:      |

### Response

```json
{
    "meta": {
        "count": 2,
        "pageCount": 1,
        "totalCount": 2,
        "next": null,
        "previous": null,
        "self": "/v2/peers?page=1",
        "first": "/v2/peers?page=1",
        "last": "/v2/peers?page=1"
    },
    "data": [
        {
            "ip": "167.114.29.53",
            "port": 4001,
            "version": "2.0.16",
            "height": 6881793,
            "status": 200,
            "os": "linux", 
            "latency": 1390
        }
    ]
}
```

## Retrieve a peer

### Endpoint

```
GET /api/peers/{ip}
```

### Query Parameters

| Name | Type   | Description                                  | Required           |
|------|:------:|----------------------------------------------|:------------------:|
| ip   | string | The IP address of the peer to be retrieved.  | :white_check_mark: |

### Response

```json
{
    "data": {
        "ip": "167.114.29.55",
        "port": 4001,
        "version": "2.0.16",
        "height": 6881793,
        "status": 200,
        "os": "linux", 
        "latency": 355
    }
}
```

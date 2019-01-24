---
title: Public Peers API
---

# Public Peers API

The `peers` resource is much like the [node](/api/public/v2/node.md) resource, but only exposes the IPs and ports of connected peers. Recursively traversing this API and its responses allow you to inspect the entire network.

## List all peers

Returns all peers known by the Node. These are not necessarily all peers; only public Nodes appear here.

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

Specific peers can be found by IP address. Note that a peer may have their Public API disabled, and thus they are only reachable by the internal `p2p` API.

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

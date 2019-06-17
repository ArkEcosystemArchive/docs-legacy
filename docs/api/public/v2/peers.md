---
title: "Public Peers API"
---

# Public Peers API

The `peers` resource is much like the [node](/api/public/v2/node.md) resource, but only exposes the IPs and ports of connected peers. Recursively traversing this API and its responses allow you to inspect the entire network.

## List All Peers

Returns all peers known by the Node. These are not necessarily all peers; only public Nodes appear here.

### Endpoint

```
GET /api/peers
```

### Query Parameters

| Name    | Type   | Description                                                   | Required |
| :------ | :----: | :------------------------------------------------------------ | :------: |
| page    | int    | The number of the page that will be returned.                 | :x:      |
| limit   | int    | The number of resources per page.                             | :x:      |
| port    | int    | The port by which the resources will be filtered.             | :x:      |
| status  | string | The status by which the resources will be filtered.           | :x:      |
| os      | string | The operating system by which the resources will be filtered. | :x:      |
| version | string | The node version by which the resources will be filtered.     | :x:      |
| orderBy | string | The column by which the resources will be sorted.             | :x:      |

### Examples

```sh
curl --header "API-Version: 2" https://api.ark.io/api/peers
```

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

## Retrieve a Peer

Specific peers can be found by IP address. Note that a peer may have their Public API disabled, and thus they are only reachable by the internal `p2p` API.

### Endpoint

```
GET /api/peers/{ip}
```

### Query Parameters

| Name | Type   | Description                                 | Required           |
| :--- | :----: | :------------------------------------------ | :----------------: |
| ip   | string | The IP address of the peer to be retrieved. | :white_check_mark: |


### Examples

```sh
curl --header "API-Version: 2" https://api.ark.io/api/peers/148.251.178.12
```

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

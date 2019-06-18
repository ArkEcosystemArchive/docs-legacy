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
        "count": 100,
        "pageCount": 2,
        "totalCount": 170,
        "next": "/api/v2/peers?page=2&limit=100",
        "previous": null,
        "self": "/api/v2/peers?page=1&limit=100",
        "first": "/api/v2/peers?page=1&limit=100",
        "last": "/api/v2/peers?page=2&limit=100"
    },
    "data": [
        {
            "ip": "178.32.65.139",
            "port": 4001,
            "ports": {
                "@arkecosystem/core-webhooks": -1,
                "@arkecosystem/core-exchange-json-rpc": -1,
                "@arkecosystem/core-wallet-api": 4040,
                "@arkecosystem/core-api": 4003
            },
            "version": "2.4.12",
            "height": 8691474,
            "latency": 11
        },
        ...
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
        "ip": "148.251.178.12",
        "port": 4001,
        "ports": {
            "@arkecosystem/core-api": 4003,
            "@arkecosystem/core-wallet-api": 4040,
            "@arkecosystem/core-webhooks": -1,
            "@arkecosystem/core-exchange-json-rpc": -1
        },
        "version": "2.4.12",
        "height": 8691462,
        "latency": 77
    }
}
```

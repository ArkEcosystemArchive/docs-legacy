---
title: "List all voters of a delegate"
---

# List all voters of a delegate

[[toc]]

## Endpoint

```
GET /api/delegates/{id}/voters
```

## Path Parameters

| Name | Type   | Description                                     | Required           |
|------|:------:|-------------------------------------------------|:------------------:|
| id   | string | The identifier of the delegate to be retrieved. | :white_check_mark: |

::: tip
id can be one of `username`, `address` or `publicKey`.
:::

## Query Parameters

| Name  | Type | Description                                   | Required |
|-------|:----:|-----------------------------------------------|:--------:|
| page  | int  | The number of the page that will be returned. | :x:      |
| limit | int  | The number of resources per page.             | :x:      |

## Response

```json
{
    "meta": {
        "count": 2,
        "pageCount": 10,
        "totalCount": 19,
        "next": "/v2/delegates/boldninja/voters?page=2",
        "previous": null,
        "self": "/v2/delegates/boldninja/voters?page=1",
        "first": "/v2/delegates/boldninja/voters?page=1",
        "last": "/v2/delegates/boldninja/voters?page=10"
    },
    "data": [
        {
            "address": "D5mbS6mpP5UheuciNscpDLgC127kYjRtkK",
            "publicKey": "03f7e0b1ab14985990416f72ed0b206c20b9efa35156e4528c8ff749fa0eea5d5a",
            "balance": 400000000,
            "isDelegate": false
        }
    ]
}
```

---
title: "List all webhooks"
---

# List all webhooks

[[toc]]

## Endpoint

```
GET /api/webhooks
```

## Query Parameters

| Name  | Type | Description                                   | Required |
|-------|:----:|-----------------------------------------------|:--------:|
| page  | int  | The number of the page that will be returned. | :x:      |
| limit | int  | The number of resources per page.             | :x:      |

## Response

```json
{
    "meta": {
        "count": 29,
        "pageCount": 1,
        "totalCount": 29,
        "next": null,
        "previous": null,
        "self": "/api/v2/webhooks?page=1&limit=100",
        "first": "/api/v2/webhooks?page=1&limit=100",
        "last": "/api/v2/webhooks?page=1&limit=100"
    },
    "data": [
        {
            "id": 1,
            "event": "block.forged",
            "target": "https://httpbin.org/post",
            "enabled": true,
            "conditions": [
                {
                    "key": "generatorPublicKey",
                    "condition": "eq",
                    "value": "032fcfd19f0e095bf46bd3ada87e283720c405249b1be1a70bad1d5f20095a8515"
                }
            ]
        }
    ]
}
```

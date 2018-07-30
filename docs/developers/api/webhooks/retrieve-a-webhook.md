---
title: "Retrieve a webhook"
---

# Retrieve a webhook

[[toc]]

## Endpoint

```
GET /api/webhooks/{id}
```

## Path Parameters

| Name | Type   | Description                                    | Required           |
|------|:------:|------------------------------------------------|:------------------:|
| id   | string | The identifier of the webhook to be retrieved. | :white_check_mark: |

## Response

```json
{
    "data": {
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
}
```

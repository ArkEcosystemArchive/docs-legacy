---
title: "Create a webhook"
---

# Create a webhook

[[toc]]

## Endpoint

```
POST /api/webhooks
```
## Body Parameters

| Name       | Type   | Description                                             | Required           |
|------------|:------:|---------------------------------------------------------|:------------------:|
| event      | string | The name of the event to be listened for.               | :white_check_mark: |
| target     | string | The target url for the HTTP payload.                    | :white_check_mark: |
| enabled    | string | The value to enable or disable the webhook.             | :x:                |
| conditions | array  | The list of conditions required to trigger the webhook. | :white_check_mark: |

## Response

```json
{
    "data": {
        "id": 1,
        "event": "block.forged",
        "target": "https://httpbin.org/post",
        "token": "7e66949f67b36c34a05eeb3a866957b3f1b6f8947fb215500b78e5091d4e484a",
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

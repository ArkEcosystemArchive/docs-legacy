---
title: "Update a webhook"
---

# Update a webhook

[[toc]]

## Endpoint

```
PUT /api/webhooks/{id}
```

## Path Parameters

| Name | Type   | Description                                  | Required           |
|------|:------:|----------------------------------------------|:------------------:|
| id   | string | The identifier of the webhook to be updated. | :white_check_mark: |

## Query Parameters

| Name       | Type   | Description                                             | Required |
|------------|:------:|---------------------------------------------------------|:--------:|
| event      | string | The name of the event to be listened for.               | :x:      |
| target     | string | The target url for the HTTP payload.                    | :x:      |
| enabled    | string | The value to enable or disable the webhook.             | :x:      |
| conditions | array  | The list of conditions required to trigger the webhook. | :x:      |

## Response

```json
{}
```

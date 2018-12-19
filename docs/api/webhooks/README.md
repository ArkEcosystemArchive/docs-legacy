---
title: "Webhooks"
---

# Webhooks

::: warning
All HTTP requests have to be send with the `Content-Type: application/json` header. If the header is not present it will result in malformed responses or request rejections.
:::

## Authentication

In order to communicate with the Webhooks API you will need to provide the token you configured on your node through the `Authorization` header. Authenticating with an invalid token will return `401 Unauthorized`.

### Headers

| Name          | Type   | Description                                          | Required           |
|---------------|:------:|------------------------------------------------------|:------------------:|
| Authorization | string | The webhook token defined in the node configuration. | :white_check_mark: |


## List all webhooks

### Endpoint

```
GET /api/webhooks
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

## Retrieve a webhook

### Endpoint

```
GET /api/webhooks/{id}
```

### Path Parameters

| Name | Type   | Description                                    | Required           |
|------|:------:|------------------------------------------------|:------------------:|
| id   | string | The identifier of the webhook to be retrieved. | :white_check_mark: |

### Response

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


## Create a webhook

### Endpoint

```
POST /api/webhooks
```
### Body Parameters

| Name       | Type   | Description                                             | Required           |
|------------|:------:|---------------------------------------------------------|:------------------:|
| event      | string | The name of the event to be listened for.               | :white_check_mark: |
| target     | string | The target url for the HTTP payload.                    | :white_check_mark: |
| enabled    | string | The value to enable or disable the webhook.             | :x:                |
| conditions | array  | The list of conditions required to trigger the webhook. | :white_check_mark: |

### Response

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

### Conditions  

| Condition   | Description                                         |
|-------------|-----------------------------------------------------|  
| between     | Check if the given value is between min and max     |
| contains    | Check if A contains B                               |
| eq          | Check if A equals B                                 |
| falsy       | Check if the given value is false                   |
| gt          | Check if A is greater than B                        |
| gte         | Check if A is greater than or equal to B            |
| lt          | Check if A is lesser than B                         |
| lte         | Check if A is lesser than or equal to B             |
| ne          | Check if A does not equal B                         |
| not-between | Check if the given value is not between min and max |
| regexp      | Check if the given value matches                    |
| truthy      | Check if the given value is true                    |
    
### Events  

| Event                | Description |
|----------------------|-------------|
| block.applied        |             |
| block.forged         |             |
| block.reverted       |             |
| delegate.registered  |             |
| delegate.resigned    |             |
| forger.failed        |             |
| forger.missing       |             |
| forger.started       |             |
| peer.added           |             |
| peer.removed         |             |
| round.created        |             |
| state:started        |             |
| transaction.applied  |             |
| transaction.expired  |             |
| transaction.forged   |             |
| transaction.reverted |             |
| wallet.saved         |             |
| wallet.created.cold  |             |

## Update a webhook

### Endpoint

```
PUT /api/webhooks/{id}
```

### Path Parameters

| Name | Type   | Description                                  | Required           |
|------|:------:|----------------------------------------------|:------------------:|
| id   | string | The identifier of the webhook to be updated. | :white_check_mark: |

### Body Parameters

| Name       | Type   | Description                                             | Required |
|------------|:------:|---------------------------------------------------------|:--------:|
| event      | string | The name of the event to be listened for.               | :x:      |
| target     | string | The target url for the HTTP payload.                    | :x:      |
| enabled    | string | The value to enable or disable the webhook.             | :x:      |
| conditions | array  | The list of conditions required to trigger the webhook. | :x:      |

### Response

```json
{}
```

## Delete a webhook

### Endpoint

```
DELETE /api/webhooks/{id}
```

### Path Parameters

| Name | Type   | Description                                  | Required           |
|------|:------:|----------------------------------------------|:------------------:|
| id   | string | The identifier of the webhook to be deleted. | :white_check_mark: |

### Response

```json
{}
```

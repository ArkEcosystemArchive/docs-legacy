---
title: "Webhooks"
---

# Webhooks

The webhooks API allows you to register a webhook in a specific node, which will send a payload to a predefined target when certain conditions are met. Webhooks ensure that you do not need to poll the public API periodically and are a robust way to stay up-to-date with the blockchain state.

::: warning
All HTTP requests have to be sent with the `Content-Type: application/json` header. If the header is not present, it will result in malformed responses or request rejections.
:::

## Authentication

To communicate with the Webhooks API, you will need to provide the token you configured on your node through the `Authorization` header. Authenticating with an invalid token will return `401 Unauthorized`.

### Headers

| Name          | Type   | Description                                          | Required           |
|---------------|:------:|------------------------------------------------------|:------------------:|
| Authorization | string | The webhook token defined in the node configuration. | :white_check_mark: |

## List all webhooks

The webhooks resource returns all enabled and disabled webhooks. There is thus no need to store all active webhooks client side; as the node maintains a register for you.

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

It is possible to query for a specific webhook by ID, which has to be saved client-side or obtained from another API call.

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

Before creating a webhook, ensure you have a backend service running which exposes the target. Some example setups are listed [here](/guidebook/core/webhooks.md). A webhook may be triggered by multiple conditions; as long as one of the conditions evaluates to `true`, the webhook will fire.

The returned `token` should be saved and used to validate the webhook origin. It is a secret value which should not be shared. For extra security, whitelist the IP of the node with your target service, ensuring other parties are not able to post webhook payloads.

### Endpoint

```
POST /api/webhooks
```

### Body Parameters

| Name       | Type   | Description                                             | Required           |
|------------|:------:|---------------------------------------------------------|:------------------:|
| event      | string | The name of the event to be listened for.               | :white_check_mark: |
| target     | string | The target URL for the HTTP payload.                    | :white_check_mark: |
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

### Events  

| Event                     | Description                                                                         | Implemented        |
|---------------------------|-------------------------------------------------------------------------------------|--------------------|
| block.applied             | Fires when a block is saved                                                         | :white_check_mark: |
| block.disregarded         | Fires when a block is disregarded                                                   | :white_check_mark: |
| block.forged              | Fires when a block is forged                                                        | :white_check_mark: |
| block.received            | Fires when a block is incoming                                                      | :white_check_mark: |
| block.reverted            | Fires when a block is removed from the database (e.g. on a rollback)                | :white_check_mark: |
| delegate.registered       | Fires when a new delegate is registered                                             | :white_check_mark: |
| delegate.resigned         | Fires when a delegate resigns                                                       | :white_check_mark: |
| forger.failed             | Fires when the forger module fails to start                                         | :white_check_mark: |
| forger.missing            | Fires when it is detected that the forger module isn't running                      | :white_check_mark: |
| forger.started            | Fires when the forger module forges a new block                                     | :x:                |
| peer.added                | Fires when a peer is added                                                          | :white_check_mark: |
| peer.removed              | Fires when a peer is removed                                                        | :white_check_mark: |
| round.created             | Fires when a new round is created and saved to the database                         | :white_check_mark: |
| state:started             |                                                                                     | :x:                |
| transaction.applied       | Fires when a transaction is saved                                                   | :white_check_mark: |
| transaction.expired       | Fires when an unconfirmed transaction expires                                       | :white_check_mark: |
| transaction.forged        | Fires when a transaction is forged by a delegate                                    | :white_check_mark: |
| transaction.pool.added    | Fires when transactions are added to the transaction pool                           | :white_check_mark: |
| transaction.pool.rejected | Fires when transactions are rejected and _not_ added to the transaction pool        | :white_check_mark: |
| transaction.pool.removed  | Fires when a transaction is removed from the transaction pool by its ID             | :white_check_mark: |
| transaction.reverted      | Fires when a transaction is removed from the database                               | :x:                |
| wallet.saved              | Fires when a wallet is updated (e.g. its balance changed, voted etc)                | :white_check_mark: |
| wallet.created.cold       | Fires when a wallet that never existed before is saved (e.g. received its first tx) | :white_check_mark: |

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

## Update a webhook

Existing webhooks may be updated. *Note that this is the equivalent of deleting and creating a webhook; but retaining the same token*. If you are often updating and creating webhooks; consider deleting and creating new webhooks instead of updating to rotate your validation token often.

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
| target     | string | The target URL for the HTTP payload.                    | :x:      |
| enabled    | string | The value to enable or disable the webhook.             | :x:      |
| conditions | array  | The list of conditions required to trigger the webhook. | :x:      |

### Response

```json
{}
```

## Delete a webhook

A webhook may be deleted by ID. Delete unused webhooks to save machine resources.

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

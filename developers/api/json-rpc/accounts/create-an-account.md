---
title: "Create an account"
---

# Create an account

[[toc]]

## Endpoint

```
POST /
```

## Body Parameters

| Name              | Type   | Description                                     | Required           |
|-------------------|:------:|-------------------------------------------------|:------------------:|
| jsonrpc           | string | The protocol version. **Has to be 2.0!**        | :white_check_mark: |
| id                | string | The identifier of the request.                  | :white_check_mark: |
| method            | string | The method name. **Has to be accounts.create!** | :white_check_mark: |
| params            | object | The parameters of the request.                  | :white_check_mark: |
| params.passphrase | string | The passphrase of the account to be created.    | :white_check_mark: |

## Response

```json
{
  "jsonrpc": "2.0",
  "id": "unique-request-id",
  "result": {
    ...
  }
}
```

## Error Response

```json
{
  "jsonrpc": "2.0",
  "id": "unique-request-id",
  "error": {
    "code": "unique-error-code",
    "message": "descriptive-error-message",
    "data": "detailed-error-information"
  }
}
```

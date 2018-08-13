---
title: "Create a transaction from a BIP38"
---

# Create a transaction from a BIP38

[[toc]]

## Endpoint

```
POST /
```

## Body Parameters

| Name               | Type   | Description                                       | Required           |
|--------------------|:------:|---------------------------------------------------|:------------------:|
| jsonrpc            | string | The protocol version. **Has to be 2.0!**          | :white_check_mark: |
| id                 | string | The identifier of the request.                    | :white_check_mark: |
| method             | string | The method name. **Has to be transactions.list!** | :white_check_mark: |
| params             | object | The parameters of the request.                    | :white_check_mark: |
| params.recipientId | string | The address of the recipient.                     | :white_check_mark: |
| params.amount      | string | The amount to be send.                            | :white_check_mark: |
| params.bip38       | string | The bip38 of the sender.                          | :white_check_mark: |
| params.userId      | string | The identifier of the sender.                     | :white_check_mark: |

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

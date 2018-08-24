---
title: JSON-RPC Transactions API
---

# JSON-RPC Transactions API

## List transactions

### Endpoint

```
POST /
```

### Body Parameters

| Name          | Type   | Description                                       | Required           |
|---------------|:------:|---------------------------------------------------|:------------------:|
| jsonrpc       | string | The protocol version. **Has to be 2.0!**          | :white_check_mark: |
| id            | string | The identifier of the request.                    | :white_check_mark: |
| method        | string | The method name. **Has to be transactions.list!** | :white_check_mark: |
| params        | object | The parameters of the request.                    | :white_check_mark: |
| params.offset | int    | The offset of transactions to be retrieved.       | :white_check_mark: |

### Response

```json
{
  "jsonrpc": "2.0",
  "id": "unique-request-id",
  "result": {
    ...
  }
}
```

### Error Response

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

## Get a transaction


### Endpoint

```
POST /
```

### Body Parameters

| Name      | Type   | Description                                        | Required           |
|-----------|:------:|----------------------------------------------------|:------------------:|
| jsonrpc   | string | The protocol version. **Has to be 2.0!**           | :white_check_mark: |
| id        | string | The identifier of the request.                     | :white_check_mark: |
| method    | string | The method name. **Has to be transaction.info!**   | :white_check_mark: |
| params    | object | The parameters of the request.                     | :white_check_mark: |
| params.id | string | The identifier of the transaction to be retrieved. | :white_check_mark: |

### Response

```json
{
  "jsonrpc": "2.0",
  "id": "unique-request-id",
  "result": {
    ...
  }
}
```

### Error Response

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

## Broadcast transactions


### Endpoint

```
POST /
```

### Body Parameters

| Name                | Type   | Description                                            | Required           |
|---------------------|:------:|--------------------------------------------------------|:------------------:|
| jsonrpc             | string | The protocol version. **Has to be 2.0!**               | :white_check_mark: |
| id                  | string | The identifier of the request.                         | :white_check_mark: |
| method              | string | The method name. **Has to be transactions.broadcast!** | :white_check_mark: |
| params              | object | The parameters of the request.                         | :white_check_mark: |
| params.transactions | array  | The list of transactions to be broadcasted.            | :white_check_mark: |

### Response

```json
{
  "jsonrpc": "2.0",
  "id": "unique-request-id",
  "result": {
    ...
  }
}
```

### Error Response

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

## Create a transaction

### Endpoint

```
POST /
```

### Body Parameters

| Name               | Type   | Description                                         | Required           |
|--------------------|:------:|-----------------------------------------------------|:------------------:|
| jsonrpc            | string | The protocol version. **Has to be 2.0!**            | :white_check_mark: |
| id                 | string | The identifier of the request.                      | :white_check_mark: |
| method             | string | The method name. **Has to be transactions.create!** | :white_check_mark: |
| params             | object | The parameters of the request.                      | :white_check_mark: |
| params.recipientId | string | The address of the recipient.                       | :white_check_mark: |
| params.amount      | string | The amount to be send.                              | :white_check_mark: |
| params.passphrase  | string | The passphrase of the sender.                       | :white_check_mark: |

### Response

```json
{
  "jsonrpc": "2.0",
  "id": "unique-request-id",
  "result": {
    ...
  }
}
```

### Error Response

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

## Create a transaction from a BIP38

### Endpoint

```
POST /
```

### Body Parameters

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

### Response

```json
{
  "jsonrpc": "2.0",
  "id": "unique-request-id",
  "result": {
    ...
  }
}
```

### Error Response

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

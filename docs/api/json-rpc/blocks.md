---
title: JSON-RPC Blocks API
---

# JSON-RPC Blocks API

## Get a block

### Endpoint

```
POST /
```

### Body Parameters

| Name      | Type   | Description                                  | Required           |
|-----------|:------:|----------------------------------------------|:------------------:|
| jsonrpc   | string | The protocol version. **Has to be 2.0!**     | :white_check_mark: |
| id        | string | The identifier of the request.               | :white_check_mark: |
| method    | string | The method name. **Has to be blocks.info!**  | :white_check_mark: |
| params    | object | The parameters of the request.               | :white_check_mark: |
| params.id | string | The identifier of the block to be retrieved. | :white_check_mark: |

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

## Get the latest block

### Endpoint

```
POST /
```

### Body Parameters

| Name          | Type   | Description                                           | Required           |
|---------------|:------:|-------------------------------------------------------|:------------------:|
| jsonrpc       | string | The protocol version. **Has to be 2.0!**              | :white_check_mark: |
| id            | string | The identifier of the request.                        | :white_check_mark: |
| method        | string | The method name. **Has to be blocks.latest!**         | :white_check_mark: |

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

## Get a blocks transactions

### Endpoint

```
POST /
```

### Body Parameters

| Name          | Type   | Description                                         | Required           |
|---------------|:------:|-----------------------------------------------------|:------------------:|
| jsonrpc       | string | The protocol version. **Has to be 2.0!**            | :white_check_mark: |
| id            | string | The identifier of the request.                      | :white_check_mark: |
| method        | string | The method name. **Has to be blocks.transactions!** | :white_check_mark: |
| params        | object | The parameters of the request.                      | :white_check_mark: |
| params.id     | string | The identifier of the block to be retrieved.        | :white_check_mark: |
| params.offset | int    | The offset of transactions to be retrieved.         | :white_check_mark: |

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

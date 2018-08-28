---
title: JSON-RPC Accounts API
---
# JSON-RPC Accounts API

## Get an account

### Endpoint

```
POST /
```

### Body Parameters

| Name           | Type   | Description                                   | Required           |
|----------------|:------:|-----------------------------------------------|:------------------:|
| jsonrpc        | string | The protocol version. **Has to be 2.0!**      | :white_check_mark: |
| id             | string | The identifier of the request.                | :white_check_mark: |
| method         | string | The method name. **Has to be accounts.info!** | :white_check_mark: |
| params         | object | The parameters of the request.                | :white_check_mark: |
| params.address | string | The address of the account to be retrieved.   | :white_check_mark: |

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

## Get an accounts transactions

### Endpoint

```
POST /
```

### Body Parameters

| Name           | Type   | Description                                           | Required           |
|----------------|:------:|-------------------------------------------------------|:------------------:|
| jsonrpc        | string | The protocol version. **Has to be 2.0!**              | :white_check_mark: |
| id             | string | The identifier of the request.                        | :white_check_mark: |
| method         | string | The method name. **Has to be accounts.transactions!** | :white_check_mark: |
| params         | object | The parameters of the request.                        | :white_check_mark: |
| params.address | string | The address of the transactions to be retrieved.      | :white_check_mark: |
| params.offset  | int    | The offset of transactions to be retrieved.           | :white_check_mark: |

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

## Create an account

### Endpoint

```
POST /
```

### Body Parameters

| Name              | Type   | Description                                     | Required           |
|-------------------|:------:|-------------------------------------------------|:------------------:|
| jsonrpc           | string | The protocol version. **Has to be 2.0!**        | :white_check_mark: |
| id                | string | The identifier of the request.                  | :white_check_mark: |
| method            | string | The method name. **Has to be accounts.create!** | :white_check_mark: |
| params            | object | The parameters of the request.                  | :white_check_mark: |
| params.passphrase | string | The passphrase of the account to be created.    | :white_check_mark: |

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

## Get a BIP38 account

### Endpoint

```
POST /
```

### Body Parameters

| Name          | Type   | Description                                         | Required           |
|---------------|:------:|-----------------------------------------------------|:------------------:|
| jsonrpc       | string | The protocol version. **Has to be 2.0!**            | :white_check_mark: |
| id            | string | The identifier of the request.                      | :white_check_mark: |
| method        | string | The method name. **Has to be accounts.bip38.info!** | :white_check_mark: |
| params        | object | The parameters of the request.                      | :white_check_mark: |
| params.userId | string | The identifier of the account to be retrieved.      | :white_check_mark: |

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

## Create a BIP38 account

### Endpoint

```
POST /
```

### Body Parameters

| Name          | Type   | Description                                           | Required           |
|---------------|:------:|-------------------------------------------------------|:------------------:|
| jsonrpc       | string | The protocol version. **Has to be 2.0!**              | :white_check_mark: |
| id            | string | The identifier of the request.                        | :white_check_mark: |
| method        | string | The method name. **Has to be accounts.bip38.create!** | :white_check_mark: |
| params        | object | The parameters of the request.                        | :white_check_mark: |
| params.bip38  | string | The bip38 of the account to be retrieved.             | :white_check_mark: |
| params.userId | string | The identifier of the account to be retrieved.        | :white_check_mark: |

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

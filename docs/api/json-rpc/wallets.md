---
title: JSON-RPC Wallets API
---
# JSON-RPC Wallets API

## Get a wallet

### Endpoint

```
POST /
```

### Body Parameters

| Name           | Type   | Description                                   | Required           |
|----------------|:------:|-----------------------------------------------|:------------------:|
| jsonrpc        | string | The protocol version. **Has to be 2.0!**      | :white_check_mark: |
| id             | string | The identifier of the request.                | :white_check_mark: |
| method         | string | The method name. **Has to be wallets.info!**  | :white_check_mark: |
| params         | object | The parameters of the request.                | :white_check_mark: |
| params.address | string | The address of the wallet to be retrieved.    | :white_check_mark: |

### Request

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "wallets.info",
    "params": {
        "address": "ANBkoGqWeTSiaEVgVzSKZd3jS7UWzv9PSo"
    }
}
```

### Response

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": {
        "address": "ANBkoGqWeTSiaEVgVzSKZd3jS7UWzv9PSo",
        "publicKey": "03287bfebba4c7881a0509717e71b34b63f31e40021c321f89ae04f84be6d6ac37",
        "secondPublicKey": null,
        "balance": 245100000000000,
        "isDelegate": true
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

## Get a wallets transactions

### Endpoint

```
POST /
```

### Body Parameters

| Name           | Type   | Description                                           | Required           |
|----------------|:------:|-------------------------------------------------------|:------------------:|
| jsonrpc        | string | The protocol version. **Has to be 2.0!**              | :white_check_mark: |
| id             | string | The identifier of the request.                        | :white_check_mark: |
| method         | string | The method name. **Has to be wallets.transactions!**  | :white_check_mark: |
| params         | object | The parameters of the request.                        | :white_check_mark: |
| params.address | string | The address of the transactions to be retrieved.      | :white_check_mark: |
| params.offset  | int    | The offset of transactions to be retrieved.           | :white_check_mark: |

### Request

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "wallets.transactions",
    "params": {
        "address": "ANBkoGqWeTSiaEVgVzSKZd3jS7UWzv9PSo"
    }
}
```

### Response

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": {
        "count": 153,
        "data": [{
            "id": "db1aa687737858cc9199bfa336f9b1c035915c30aaee60b1e0f8afadfdb946bd",
            "blockId": "17184958558311101492",
            "type": 0,
            "amount": 245098000000000,
            "fee": 0,
            "sender": "APnhwwyTbMiykJwYbGhYjNgtHiVJDSEhSn",
            "recipient": "AHXtmB84sTZ9Zd35h9Y1vfFvPE2Xzqj8ri",
            "signature": "304402205fcb0677e06bde7aac3dc776665615f4b93ef8c3ed0fddecef9900e74fcb00f302206958a0c9868ea1b1f3d151bdfa92da1ce24de0b1fcd91933e64fb7971e92f48d",
            "confirmations": 3,
            "timestamp": {
                "epoch": 0,
                "unix": 1490101200,
                "human": "2017-03-21T13:00:00Z"
            }
        }]
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

## Create a wallet

### Endpoint

```
POST /
```

### Body Parameters

| Name              | Type   | Description                                     | Required           |
|-------------------|:------:|-------------------------------------------------|:------------------:|
| jsonrpc           | string | The protocol version. **Has to be 2.0!**        | :white_check_mark: |
| id                | string | The identifier of the request.                  | :white_check_mark: |
| method            | string | The method name. **Has to be wallets.create!**  | :white_check_mark: |
| params            | object | The parameters of the request.                  | :white_check_mark: |
| params.passphrase | string | The passphrase of the wallet to be created.     | :white_check_mark: |

### Request

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "wallets.create",
    "params": {
        "passphrase": "this is a top secret passphrase"
    }
}
```

### Response

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": {
        "publicKey": "034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192",
        "address": "AGeYmgbg2LgGxRW2vNNJvQ88PknEJsYizC"
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

## Get a BIP38 wallet

### Endpoint

```
POST /
```

### Body Parameters

| Name          | Type   | Description                                         | Required           |
|---------------|:------:|-----------------------------------------------------|:------------------:|
| jsonrpc       | string | The protocol version. **Has to be 2.0!**            | :white_check_mark: |
| id            | string | The identifier of the request.                      | :white_check_mark: |
| method        | string | The method name. **Has to be wallets.bip38.info!**  | :white_check_mark: |
| params        | object | The parameters of the request.                      | :white_check_mark: |
| params.userId | string | The identifier of the wallet to be retrieved.       | :white_check_mark: |

### Request

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "wallets.bip38.info",
    "params": {
        "userId": "123"
    }
}
```

### Response

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": {
        "wif": "6PYTWME2aAJTx2NcRyS33zYrS79Hk7KiNbHZmGQWUYJYKWGZn4N36AdUMf"
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

## Create a BIP38 wallet

### Endpoint

```
POST /
```

### Body Parameters

| Name          | Type   | Description                                           | Required           |
|---------------|:------:|-------------------------------------------------------|:------------------:|
| jsonrpc       | string | The protocol version. **Has to be 2.0!**              | :white_check_mark: |
| id            | string | The identifier of the request.                        | :white_check_mark: |
| method        | string | The method name. **Has to be wallets.bip38.create!**  | :white_check_mark: |
| params        | object | The parameters of the request.                        | :white_check_mark: |
| params.bip38  | string | The bip38 of the wallet to be retrieved.              | :white_check_mark: |
| params.userId | string | The identifier of the wallet to be retrieved.         | :white_check_mark: |

### Request

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "wallets.bip38.create",
    "params": {
        "userId": "123",
        "bip38": "this is a top secret passphrase"
    }
}
```

### Response

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": {
        "publicKey": "022cf1c9de60c22c0b5a138b6545777cb2edaf82fe3906faa345580352000f84b6",
        "address": "AL4z4quXFVPR4ybDHeJ67HfSEmFrguQ6e5",
        "wif": "6PYTWME2aAJTx2NcRyS33zYrS79Hk7KiNbHZmGQWUYJYKWGZn4N36AdUMf"
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

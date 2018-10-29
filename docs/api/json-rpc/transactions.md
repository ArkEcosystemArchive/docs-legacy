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

### Request

```json
{
  "jsonrpc": "2.0",
  "id": "unique-request-id",
  "result": {
    ...
  }
}
```

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

### Request

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "transactions.info",
    "params": {
        "id": "49a4cc2b931e75da4676c5b06649543d3ea30f1097e944549e2ab3d67bc91e6a"
    }
}
```

### Response

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": {
        "id": "49a4cc2b931e75da4676c5b06649543d3ea30f1097e944549e2ab3d67bc91e6a",
        "blockId": "1957735382338577043",
        "type": 0,
        "amount": 1000000000,
        "fee": 10000000,
        "sender": "ANBkoGqWeTSiaEVgVzSKZd3jS7UWzv9PSo",
        "recipient": "ANBkoGqWeTSiaEVgVzSKZd3jS7UWzv9PSo",
        "signature": "304502210084484fc57bd1c0af1e6bf2fc79e1d5c210b29d7651e3482cc764d2160bbd887a0220776362194a30f4c04365061344dd4b4ac2cc6f5efc479afcda07d26be9621e04",
        "confirmations": 1,
        "timestamp": {
            "epoch": 50271515,
            "unix": 1540372715,
            "human": "2018-10-24T09:18:35Z"
        }
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
    "id": 1,
    "method": "transactions.broadcast",
    "params": {
        "id": "49a4cc2b931e75da4676c5b06649543d3ea30f1097e944549e2ab3d67bc91e6a"
    }
}
```

### Response

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": {
        "id": "49a4cc2b931e75da4676c5b06649543d3ea30f1097e944549e2ab3d67bc91e6a",
        "signature": "304502210084484fc57bd1c0af1e6bf2fc79e1d5c210b29d7651e3482cc764d2160bbd887a0220776362194a30f4c04365061344dd4b4ac2cc6f5efc479afcda07d26be9621e04",
        "timestamp": 50271515,
        "type": 0,
        "fee": 10000000,
        "senderPublicKey": "03287bfebba4c7881a0509717e71b34b63f31e40021c321f89ae04f84be6d6ac37",
        "amount": 1000000000,
        "recipientId": "ANBkoGqWeTSiaEVgVzSKZd3jS7UWzv9PSo"
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

### Request

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "transactions.create",
    "params": {
        "passphrase": "this is a top secret passphrase",
        "amount": 1000000000,
        "recipientId": "ANBkoGqWeTSiaEVgVzSKZd3jS7UWzv9PSo"
    }
}
```

### Response

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": {
        "id": "58f4f8ed866d2c6a42fc2b48d49fc5c949af6768b55d307376aaac61f930d8b6",
        "signature": "304402201ace9afcaf9d0ec64a31fd98c589767c76b5360d5b22dfe3cde2dfffdfef61dc022026d276a6140e6abbd80775541479cc71cf52590895bd24c0c577a9c57ecae581",
        "timestamp": 50686854,
        "type": 0,
        "fee": 10000000,
        "senderPublicKey": "034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192",
        "amount": 1000000000,
        "recipientId": "ANBkoGqWeTSiaEVgVzSKZd3jS7UWzv9PSo"
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
    "id": 1,
    "method": "transactions.bip38.create",
    "params": {
        "bip38": "this is a top secret passphrase",
        "userId": "123",
        "amount": 1000000000,
        "recipientId": "ANBkoGqWeTSiaEVgVzSKZd3jS7UWzv9PSo"
    }
}
```

### Response

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": {
        "id": "729d8f1974bd1eb517619fe9a4c45c3e769f49bbe1b682237ef3f049038c5421",
        "signature": "304402207a4877d3515b2dc3c2d8bc337b767cea62718e80d4b9ba02d8f2f873c82e2987022067951e8aa731fed8223b650419c29ef7e71460807920604ea23d3c2872328217",
        "timestamp": 50686826,
        "type": 0,
        "fee": 10000000,
        "senderPublicKey": "022cf1c9de60c22c0b5a138b6545777cb2edaf82fe3906faa345580352000f84b6",
        "amount": 1000000000,
        "recipientId": "ANBkoGqWeTSiaEVgVzSKZd3jS7UWzv9PSo"
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

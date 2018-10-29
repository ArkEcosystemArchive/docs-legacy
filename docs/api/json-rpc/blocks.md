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

### Request

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "blocks.info",
    "params": {
        "id": "9336364900436444611"
    }
}
```

### Response

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": {
        "id": "9336364900436444611",
        "version": 0,
        "height": 23,
        "previous": "17180650139879860733",
        "forged": {
            "reward": 0,
            "fee": 0,
            "total": 0
        },
        "payload": {
            "hash": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
            "length": 0
        },
        "generator": {
            "username": "genesis_43",
            "address": "AQBo4exLwyapRiDoDteh1fF2ctWWdxofSf",
            "publicKey": "034985f6f2167cc8c9df1204aaf6744bc97c0d7f3c07c43ee6c0978bc91b6c680e"
        },
        "signature": "3045022100b5c6ebb1c4c6694b82b98eea6c6eb889547908d8c1aff98d16f3f9df810fe34b02207266371081ffc6461da6fbb2811065aabe135c6e47863605416e6e5ddb4c7806",
        "transactions": 0,
        "timestamp": {
            "epoch": 50686634,
            "unix": 1540787834,
            "human": "2018-10-29T04:37:14Z"
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

### Request

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "blocks.latest"
}
```

### Response

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": {
        "id": "1453043075643523354",
        "version": 0,
        "height": 29,
        "previous": "14915069404850182157",
        "forged": {
            "reward": 0,
            "fee": 0,
            "total": 0
        },
        "payload": {
            "hash": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
            "length": 0
        },
        "generator": {
            "username": "genesis_42",
            "address": "AcmXmomxpP8NahbbFivq32QmLuKFkTkqRg",
            "publicKey": "0311077c86a98b67850e7ed2c81775d094cf81c6991082ddc33fc7be5347dc765d"
        },
        "signature": "3045022100d94630fc328f5e70a4fa6134fa8aadbaab42eff15b22e91ae17438b6f28cfd3a022014df10ff42cea9d02e549353c24a6207c3de10d85b4f91742b44ffb4f303592e",
        "transactions": 0,
        "timestamp": {
            "epoch": 50686712,
            "unix": 1540787912,
            "human": "2018-10-29T04:38:32Z"
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

### Request

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "blocks.transactions",
    "params": {
        "id": "17184958558311101492"
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

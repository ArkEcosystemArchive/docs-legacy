---
title: "JSON-RPC configuration"
---

# JSON-RPC configuration

[[toc]]

## Summary

> A [JSON-RPC 2.0 Specification](http://www.jsonrpc.org/specification) compliant server to interact with the ARK blockchain.

`core-json-rpc` offers a JSON-RPC interface to interact with the ARK blockchain. This functionality is primarily useful for exchange developers, as it provides functionality mirroring that of the popular Bitcoin JSON-RPC API.

::: warning
If you are looking to just broadcast transactions, you should take a look at how to [create a transaction](/api/public/v2/transactions.html#create-a-transaction) for the public API instead.
:::

## Usage

Using `core-json-rpc` requires an ARK Core relay node to connect to. For exchanges, this node should be run on internal servers whenever possible to guard against man-in-the-middle attacks such as [replay attacks](https://en.wikipedia.org/wiki/Replay_attack).

By default, ARK Core sets up the JSON-RPC node to run on port 8080. As all JSON-RPC requests are handled from a single endpoint, this means that your endpoint should be:

```
`{NODE_IP}:8080/`
```

Note that the JSON-RPC disables remote access by default. If you must connect to your node from a remote IP, add the IPs of all requester applications to your `whitelist` key.

```js
'@arkecosystem/core-json-rpc': {
    whitelist: ['192.168.1.*', '10.0.*.*']
}
```

Alternatively, you can enable access from all remote hosts by enabling the `allowRemote` key. This should be used with extreme caution, as it allows for anybody to make calls against your JSON-RPC API:

```js
'@arkecosystem/core-json-rpc': {
    allowRemote: true
}
```

Once whitelisted, access the JSON-RPC by sending a POST request to your node's endpoint containing a JSON object with the following parameters:

```json
{
  "jsonrpc": "2.0", // JSON-RPC API version
  "method": "transactions.create", // or any method listed below
  "id": "", // ID to be used as internal identifier, returned by the JSON-RPC
  "params": {} // the parameters for the specific request
}
```

Successful requests will receive a response with the `jsonrpc`, `id`, and `result` fields attached. Otherwise, the `jsonrpc` and `id` fields will be returned alongside an `error` object containing the error `code`, `message`, and `data`.

## Available Endpoints

You can access any of the following commands using the JSON-RPC interface. To specify which command you would like to utilize, include the command name in your request's `method` key.

All JSON-RPC responses are formatted as follows:

```json
{
  "jsonrpc": "2.0",
  "id": "id-of-the-request",
  "result": {}
}
```

A result is an object defined per RPC method.

### Create transaction

```js
transactions.create;
```

#### Description

Creates a transaction object for submission to the blockchain. Combine with `transactions.broadcast` to submit transactions to the network.

#### Parameters

| Name        |  Type  | Description                                  | Required |
| :---------- | :----: | :------------------------------------------- | :------: |
| amount      |  int   | The amount of ARK to transfer, in arktoshis. |   :x:    |
| recipientId | string | The receivers address                        |   :x:    |
| passphrase  | string | The passphrase of the signing wallet.        |   :x:    |

#### Request

```json
{
  "jsonrpc": "2.0",
  "id": "unique-request-id",
  "method": "transactions.create",
  "params": {
    "passphrase": "this is a top secret passphrase",
    "amount": 1000000000,
    "recipientId": "ANBkoGqWeTSiaEVgVzSKZd3jS7UWzv9PSo"
  }
}
```

#### Response

An example transaction from `034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192` to `ANBkoGqWeTSiaEVgVzSKZd3jS7UWzv9PSo`.

```json
{
  "jsonrpc": "2.0",
  "id": "unique-request-id",
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

### Broadcast transaction

```js
transactions.broadcast;
```

#### Description

Broadcasts a transaction to the network for approval. Note that transaction objects must be created using the `transactions.create` endpoint before using this method.

#### Parameters

| Name |  Type  | Description                                                                       | Required |
| :--- | :----: | :-------------------------------------------------------------------------------- | :------: |
| id   | string | The ID of the transaction object. Returned by the `transactions.create` endpoint. |   :x:    |

#### Request

```json
{
  "jsonrpc": "2.0",
  "id": "unique-request-id",
  "method": "transactions.broadcast",
  "params": {
    "id": "49a4cc2b931e75da4676c5b06649543d3ea30f1097e944549e2ab3d67bc91e6a"
  }
}
```

#### Response

```json
{
  "jsonrpc": "2.0",
  "id": "unique-request-id",
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

### Transaction info

```js
transactions.info;
```

#### Description

Returns metadata for a given transaction.

#### Parameters

| Name |  Type  | Description                       | Required |
| :--- | :----: | :-------------------------------- | :------: |
| id   | string | The ID of the transaction object. |   :x:    |

#### Request

```json
{
  "jsonrpc": "2.0",
  "id": "unique-request-id",
  "method": "transactions.info",
  "params": {
    "id": "49a4cc2b931e75da4676c5b06649543d3ea30f1097e944549e2ab3d67bc91e6a"
  }
}
```

#### Response

An example transaction from `ANBkoGqWeTSiaEVgVzSKZd3jS7UWzv9PSo` to `ANBkoGqWeTSiaEVgVzSKZd3jS7UWzv9PSo`. Note that instead of the `senderPublicKey`, the corresponding address is returned as `sender`. Confirmations should be used as a measure of the finality of the transaction. Most exchanges use 51 confirmations, which is incredibly secure.

```json
{
  "jsonrpc": "2.0",
  "id": "unique-request-id",
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

### Create a wallet

```js
wallets.create;
```

#### Description

Derives a public key and address from a given passphrase.

#### Parameters

| Name       |  Type  | Description                                                 | Required |
| :--------- | :----: | :---------------------------------------------------------- | :------: |
| passphrase | string | The account passphrase used to derive the keys and address. |   :x:    |

#### Request

```json
{
  "jsonrpc": "2.0",
  "id": "unique-request-id",
  "method": "wallets.create",
  "params": {
    "passphrase": "this is a top secret passphrase"
  }
}
```

#### Response

```json
{
  "jsonrpc": "2.0",
  "id": "unique-request-id",
  "result": {
    "publicKey": "034151a3ec46b5670a682b0a63394f863587d1bc97483b1b6c70eb58e7f0aed192",
    "address": "AGeYmgbg2LgGxRW2vNNJvQ88PknEJsYizC"
  }
}
```

### Wallet info

```js
wallets.info;
```

#### Description

Returns metadata for a given account.

#### Parameters

| Name    |  Type  | Description                                            | Required |
| :------ | :----: | :----------------------------------------------------- | :------: |
| address | string | The address of the account to return transactions for. |   :x:    |

#### Request

```json
{
  "jsonrpc": "2.0",
  "id": "unique-request-id",
  "method": "wallets.info",
  "params": {
    "address": "ANBkoGqWeTSiaEVgVzSKZd3jS7UWzv9PSo"
  }
}
```

#### Response

An example response for one of the genesis addresses:

```json
{
  "jsonrpc": "2.0",
  "id": "unique-request-id",
  "result": {
    "address": "ANBkoGqWeTSiaEVgVzSKZd3jS7UWzv9PSo",
    "publicKey": "03287bfebba4c7881a0509717e71b34b63f31e40021c321f89ae04f84be6d6ac37",
    "secondPublicKey": null,
    "balance": 245100000000000,
    "isDelegate": true
  }
}
```

### List wallet transactions

```js
wallets.transactions;
```

#### Description

Returns an array of all transactions associated with a given account.

#### Parameters

| Name    |  Type  | Description                                            | Required |
| :------ | :----: | :----------------------------------------------------- | :------: |
| address | string | The address of the account to return transactions for. |   :x:    |
| offset  |  int   | The offset to use when fetching transactions.          |   :x:    |

#### Request

```json
{
  "jsonrpc": "2.0",
  "id": "unique-request-id",
  "method": "wallets.transactions",
  "params": {
    "address": "ANBkoGqWeTSiaEVgVzSKZd3jS7UWzv9PSo"
  }
}
```

#### Response

```json
{
  "jsonrpc": "2.0",
  "id": "unique-request-id",
  "result": {
    "count": 153,
    "data": [
      {
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
      }
    ]
  }
}
```

### Get block info

```js
blocks.info;
```

#### Description

Returns metadata for a given block.

#### Parameters

| Name |  Type  | Description   | Required |
| :--- | :----: | :------------ | :------: |
| id   | string | The block ID. |   :x:    |

#### Request

```json
{
  "jsonrpc": "2.0",
  "id": "unique-request-id",
  "method": "blocks.info",
  "params": {
    "id": "9336364900436444611"
  }
}
```

#### Response

```json
{
  "jsonrpc": "2.0",
  "id": "unique-request-id",
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

### Get latest block

```js
blocks.latest;
```

#### Description

Returns the most recently forged block.

#### Parameters

No required nor optional parameters.

#### Request

```json
{
  "jsonrpc": "2.0",
  "id": "unique-request-id",
  "method": "blocks.latest"
}
```

#### Response

An example response for block number 29.

```json
{
  "jsonrpc": "2.0",
  "id": "unique-request-id",
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

### List block transactions

```js
blocks.transactions;
```

#### Description

Returns an array of the transactions of a given block.

#### Parameters

| Name   |  Type  | Description                                                                  | Required |
| :----- | :----: | :--------------------------------------------------------------------------- | :------: |
| id     | string | The block ID.                                                                |   :x:    |
| offset |  int   | Amount of transactions that will be offset in the returned transaction list. |   :x:    |

#### Request

```json
{
  "jsonrpc": "2.0",
  "id": "unique-request-id",
  "method": "blocks.transactions",
  "params": {
    "id": "17184958558311101492"
  }
}
```

#### Response

```json
{
  "jsonrpc": "2.0",
  "id": "unique-request-id",
  "result": {
    "count": 153,
    "data": [
      {
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
      }
    ]
  }
}
```

### Create BIP38 wallet

```js
wallets.bip38.create;
```

#### Description

Creates a wallet using the BIP38 standard. Combines a BIP38 password with a userId provided by an external application to create a private key that can only be unlocked with the password + userId combination.

Returns account `publicKey`, `address` and decrypted `WIF` of created account.

#### Parameters

| Name   |  Type  | Description                                                                                                                                                         | Required |
| :----- | :----: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------: |
| bip38  | string | The password that should be used to create the BIP38 wallet.                                                                                                        |   :x:    |
| userId |  any   | The user ID that should be combined with the `bip38` to create a secure password. Can be any value, exchanges typically use internal user IDs or something similar. |   :x:    |

#### Request

```json
{
  "jsonrpc": "2.0",
  "id": "unique-request-id",
  "method": "wallets.bip38.create",
  "params": {
    "userId": "123",
    "bip38": "this is a top secret passphrase"
  }
}
```

#### Response

```json
{
  "jsonrpc": "2.0",
  "id": "unique-request-id",
  "result": {
    "publicKey": "022cf1c9de60c22c0b5a138b6545777cb2edaf82fe3906faa345580352000f84b6",
    "address": "AL4z4quXFVPR4ybDHeJ67HfSEmFrguQ6e5",
    "wif": "6PYTWME2aAJTx2NcRyS33zYrS79Hk7KiNbHZmGQWUYJYKWGZn4N36AdUMf"
  }
}
```

### BIP38 wallet info

```js
wallets.bip38.info;
```

#### Description

Retrieves saved BIP38 wallet from the server. The wallet must be stored in JSON-RPC DB with `wallets.bip38.create` before this endpoint will work.

#### Parameters

| Name   |  Type  | Description                                                  | Required |
| :----- | :----: | :----------------------------------------------------------- | :------: |
| bip38  | string | The password that should be used to create the BIP38 wallet. |   :x:    |
| userId |  any   | The user ID associated with the BIP38 wallet.                |   :x:    |

#### Request

```json
{
  "jsonrpc": "2.0",
  "id": "unique-request-id",
  "method": "wallets.bip38.info",
  "params": {
    "userId": "123"
  }
}
```

#### Response

```json
{
  "jsonrpc": "2.0",
  "id": "unique-request-id",
  "result": {
    "wif": "6PYTWME2aAJTx2NcRyS33zYrS79Hk7KiNbHZmGQWUYJYKWGZn4N36AdUMf"
  }
}
```

### Create transaction using BIP38

```js
transactions.bip38.create;
```

#### Description

Creates a transaction using a saved BIP38 wallet. As with `transactions.create`, any transactions created using this method must be broadcasted using `transactions.broadcast` to be finalized.

#### Parameters

| Name        |  Type  | Description                                           | Required |
| :---------- | :----: | :---------------------------------------------------- | :------: |
| amount      |  int   | The amount of ARK to transfer, in arktoshis.          |   :x:    |
| recipientId | string | The receiver's address.                               |   :x:    |
| passphrase  | string | The bip38 password used to create the sender account. |   :x:    |
| userId      | string | The userID associated with the BIP38 wallet.          |   :x:    |

#### Request

```json
{
  "jsonrpc": "2.0",
  "id": "unique-request-id",
  "method": "transactions.bip38.create",
  "params": {
    "bip38": "this is a top secret passphrase",
    "userId": "123",
    "amount": 1000000000,
    "recipientId": "ANBkoGqWeTSiaEVgVzSKZd3jS7UWzv9PSo"
  }
}
```

#### Response

```json
{
  "jsonrpc": "2.0",
  "id": "unique-request-id",
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

## Default Values

The node uses variables defined in `~/.config/ark-core/{network}/.env` for configuration. All required variables have defaults set as well.

```ts
{
    enabled: process.env.CORE_JSON_RPC_ENABLED,
    host: process.env.CORE_JSON_RPC_HOST || "0.0.0.0",
    port: process.env.CORE_JSON_RPC_PORT || 8080,
    allowRemote: false,
    whitelist: ["127.0.0.1", "::ffff:127.0.0.1"],
    database: {
        uri: process.env.CORE_JSON_RPC_DATABASE || `sqlite://${process.env.CORE_PATH_DATA}/json-rpc.sqlite`,
        options: {},
    },
}
```

## Security

If you discover a security vulnerability within this package, please send an e-mail to <security@ark.io>. All security vulnerabilities will be promptly addressed.

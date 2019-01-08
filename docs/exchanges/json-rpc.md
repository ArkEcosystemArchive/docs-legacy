---
title: "JSON-RPC configuration"
---


# JSON-RPC configuration
[[toc]]

## Summary

> A [JSON-RPC 2.0 Specification](http://www.jsonrpc.org/specification) compliant server to interact with the Ark blockchain.

`core-json-rpc` offers a JSON-RPC interface to interact with the ARK blockchain. This functionality is primarily useful for exchange developers, as it offers functionality mirroring that of the popular Bitcoin JSON-RPC API.

::: warning
If you are looking to just broadcast transactions you should take a look at how to [create a transaction](/api/public/v2/transactions.html#create-a-transaction) for the public API instead.
:::

## Usage
Using `core-json-rpc` requires an Ark Core relay node to connect to. For exchanges, this node should be run on internal servers whenever possible to guard against man-in-the-middle attacks such as [replay attacks](https://en.wikipedia.org/wiki/Replay_attack).

By default, Ark Core sets up the JSON-RPC node to run on port 8080. As all JSON-RPC requests are handled from a single endpoint, this means that your endpoint should be:
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
    "jsonrpc": "2.0",                   // JSON-RPC API version
    "method": "transactions.create",    // or any method listed below
    "id": "",                           // ID to be used as internal identifier, returned by the JSON-RPC 
    "params": {},                       // the parameters for the specific request
}
```

Successful requests will receive a response with the `jsonrpc`, `id`, and `result` fields attached. Otherwise, the `jsonrpc` and `id` fields will be returned alongside an `error` object containing the error `code`, `message`, and `data`. 

## Available Endpoints
You can access any of the following commands using the JSON-RPC interface. To specify which command you would like to utilize, include the command name in your request's `method` key.


### Create transaction
```
transactions.create
```
#### Description
Creates a transaction object for submission to the blockchain. Combine with `transactions.broadcast` to submit transactions to the network.

#### Parameters

| Name          | Type   | Description                                      | Required |
|---------------|:------:|--------------------------------------------------|:--------:|
| amount        | int    | The amount of ARK to transfer, in arktoshis.     | :x:      |
| recipientId   | string | The receivers address                            | :x:      |
| passphrase    | string | The passphrase of the signing wallet.            | :x:      |

#### Response
An example transaction from `038082dad560a22ea003022015e3136b21ef1ffd9f2fd50049026cbe8e2258ca17` to `AMv3iLrvyvpi6d4wEfLqX8kzMxaRvxAcHT`.
```json
{
  "amount": "200000000",
  "fee": 10000000,
  "id": "b60525042509586151fac7e3c70fe7a75ca00ffdf9988f20d0c1c0f3db798e86",
  "recipientId": "AMv3iLrvyvpi6d4wEfLqX8kzMxaRvxAcHT",
  "senderPublicKey": "038082dad560a22ea003022015e3136b21ef1ffd9f2fd50049026cbe8e2258ca17",
  "signature": "304402204236a59a19266b5969e18f87d6d4b178180277c79beb5d4b42f272ee03fba0b702200c6c97ed5ab2e6231f3dce5cdfe740e72261b460f896fb4c5be0ca7ce6244c67",
  "timestamp": 54903765,
  "type": 0
}
```

### Broadcast transaction
```
transactions.broadcast
```
#### Description
Broadcasts a transaction to the network for approval. Note that transaction objects must be created using the `transactions.create` endpoint prior to using this method.

#### Parameters

| Name   | Type     | Description                                                                       | Required |
|------|:----------:|-----------------------------------------------------------------------------------|:--------:|
| id   | string     | The ID of the transaction object. Returned by the `transactions.create` endpoint. | :x:      |

### Transaction info
```
transactions.info
```
#### Description
Returns metadata for a given transaction.

#### Parameters

| Name   | Type     | Description                       | Required |
|------|:----------:|-----------------------------------|:--------:|
| id   | string     | The ID of the transaction object. | :x:      |

#### Response
An example transaction from `ARAibxGqLQJTo1bWMJfu5fCc88rdWWjqgv` to `AMv3iLrvyvpi6d4wEfLqX8kzMxaRvxAcHT`. Note that instead of the `senderPublicKey`, the corresponding address is returned as `sender`.
```json
{
  "amount": 200000000,
  "blockId": "16888082711050311577",
  "confirmations": 27,
  "fee": 10000000,
  "id": "b60525042509586151fac7e3c70fe7a75ca00ffdf9988f20d0c1c0f3db798e86",
  "recipient": "AMv3iLrvyvpi6d4wEfLqX8kzMxaRvxAcHT",
  "sender": "ARAibxGqLQJTo1bWMJfu5fCc88rdWWjqgv",
  "signature": "304402204236a59a19266b5969e18f87d6d4b178180277c79beb5d4b42f272ee03fba0b702200c6c97ed5ab2e6231f3dce5cdfe740e72261b460f896fb4c5be0ca7ce6244c67",
  "timestamp": {
    "epoch": 54903765,
    "human": "2018-12-17T00:02:45.000Z",
    "unix": 1545004965
  },
  "type": 0,
  "version": 1
}
```

### Create a wallet
```
wallets.create
```
#### Description
Derives a public key and address from a given passphrase.

#### Parameters

| Name          | Type          | Description                                                   | Required |
|---------------|:-------------:|---------------------------------------------------------------|:--------:|
| passphrase    | string        | The account passphrase used to derive the keys and address.   | :x:      |

### Wallet info
```
wallets.info
```
#### Description
Returns metadata for a given account.

#### Parameters

| Name          | Type             | Description                                                    | Required |
|---------------|:----------------:|----------------------------------------------------------------|:--------:|
| address       | string           | The address of the account to return transactions for.         | :x:      |

#### Response
An example response for one of the genesis addresses.
```json
{
  "address": "AMv3iLrvyvpi6d4wEfLqX8kzMxaRvxAcHT",
  "balance": 245098210000000,
  "isDelegate": true,
  "publicKey": "02532c68cd0842fb86b2202c1027eafc741bdd581517047d9d19319e6741c54883",
  "secondPublicKey": nil,
  "username": "genesis_30"
}
```

### List wallet transactions
```
wallets.transactions
```
#### Description
Returns an array of all transactions associated with a given account.

#### Parameters

| Name          | Type             | Description                                                    | Required |
|---------------|:----------------:|----------------------------------------------------------------|:--------:|
| address       | string           | The address of the account to return transactions for.         | :x:      |
| offset        | int              | The offset to use when fetching transactions.                  | :x:      |

### Get block info
```
blocks.info
```
#### Description
Returns metadata for a given block.

#### Parameters

| Name          | Type             | Description          | Required |
|---------------|:----------------:|----------------------|:--------:|
| id            | string           | The block ID.        | :x:      |

### Get latest block
```
blocks.latest
```
#### Description
Returns the most recently forged block.

#### Parameters
No required nor optional parameters.

#### Response
An example response for block number 20582.
```json
{
  "forged": {
    "amount": 0, 
    "fee": 0, 
    "reward": 0, 
    "total": 0
  },
  "generator": {
    "address": "AdWRsk7Lbo97jxGBKzLAFwevVHbqVbW1Cj",
    "publicKey": "03691178f8610d0a295e650201b62345056c788d7f9ac7e8570b69c6c90091b564",
    "username": "genesis_8"
  },
  "height": 20582,
  "id": "5897025410627682852",
  "payload": {
    "hash": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    "length": 0
  },
  "previous": "9643009166535029717",
  "signature": "30440220772362881112eb0ce65d2a91b92cbb6b404f83165edfc95aa2cfb19a02026a3a022010bec681e7b9abfca61a4961f0e29db6730e8d3f9c649b5ab4b7eee1b919897e",
  "timestamp": {
    "epoch": 54902770,
    "human": "2018-12-16T23:46:10.000Z",
    "unix": 1545003970
  },
  "transactions": 0,
  "version": 0
}
```

### List block transactions
```
blocks.transactions
```
#### Description
Returns an array of the transactions of a given block.

#### Parameters

| Name          | Type             | Description                                                                    | Required |
|---------------|:----------------:|--------------------------------------------------------------------------------|:--------:|
| id            | string           | The block ID.                                                                  | :x:      |
| offset        | int              | Amount of transactions that will be offset in the returned transaction list.   | :x:      |

### Create BIP38 wallet
```
wallets.bip38.create
```
#### Description
Creates a wallet using the BIP38 standard. This combines a BIP38 password with a userId provided by an external application to create a private key that can only be unlocked with the password + userId combination.

Returns account `publicKey`, `address` and decrypted `WIF` of created account.

#### Parameters

| Name          | Type             | Description                                                                    | Required |
|---------------|:----------------:|--------------------------------------------------------------------------------|:--------:|
| bip38         | string           | The password that should be used to create the BIP38 wallet.                   | :x:      |
| userId        | any              | The user ID that should be combined with the `bip38` to create a secure password. Can be any value, exchanges typically use internal user IDs or something similar.   | :x:      |

### BIP38 wallet info
```
wallets.bip38.info
```
#### Description
Retrieves saved BIP38 wallet from the server. Wallet must be stored in JSON-RPC DB with `wallets.bip38.create` before this endpoint will work.

#### Parameters

| Name          | Type             | Description                                                                    | Required |
|---------------|:----------------:|--------------------------------------------------------------------------------|:--------:|
| bip38         | string           | The password that should be used to create the BIP38 wallet.                   | :x:      |
| userId        | any              | The user ID associated with the BIP38 wallet.                                  | :x:      |

### Create transaction using BIP38
```
transactions.bip38.create
```
#### Description
Creates a transaction using a saved BIP38 wallet. As with `transactions.create`, any transactions created using this method must be broadcasted using `transactions.broadcast` to be finalized.
#### Parameters

| Name          | Type             | Description                                    | Required |
|---------------|:------:|----------------------------------------------------------|:--------:|
| amount        | int    | The amount of ARK to transfer, in arktoshis.             | :x:      |
| recipientId   | string | The receiver's address.                                   | :x:      |
| passphrase    | string | The bip38 password used to create the sender account.    | :x:      |
| userId        | string | The userID associated with the BIP38 wallet.             | :x:      |

## Default Values
The node uses variables defined in `~/.ark/.env` for configuration. All required variables have defaults set as well.
```js
{
    enabled: process.env.ARK_JSON_RPC_ENABLED,
    host: process.env.ARK_JSON_RPC_HOST || '0.0.0.0',
    port: process.env.ARK_JSON_RPC_PORT || 8080,
    allowRemote: false,
    whitelist: ['127.0.0.1', '::ffff:127.0.0.1'],
    database: {
    uri:
        process.env.ARK_JSON_RPC_DATABASE
        || `sqlite://${process.env.ARK_PATH_DATA}/database/json-rpc.sqlite`,
    options: {},
    },
}
```

## Security
If you discover a security vulnerability within this package, please send an e-mail to <security@ark.io>. All security vulnerabilities will be promptly addressed.
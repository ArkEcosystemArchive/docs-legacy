---
title: "JSON-RPC configuration"
---


# JSON RPC configuration

[[toc]]

## Summary

`core-json-rpc` offers a JSON-RPC interface to interact with the ARK blockchain. This functionality is primarily useful for exchange developers, as it offers functionality mirroring that of the popular Bitcoin JSON-RPC API.

::: tip
The majority of platforms utilising bitcoin use this RPC procedure. To accommodate these services and make the integration of Ark as user friendly as possible, it was our goal to develop a familiar process for use now, and in the future. The Ark RPC will minimise headaches and streamline the addition process for all.
:::

> A [JSON-RPC 2.0 Specification](http://www.jsonrpc.org/specification) compliant server to interact with the Ark blockchain.
> 
::: warning
If you are looking to just broadcast transactions you should take a look at [Create a transactions](/api/public/v2/transactions.html#create-a-transaction) for the public API instead.
:::

## Usage

Using `core-json-rpc` requires an Ark Core relay node to connect to. For exchanges, this node should be run on internal servers whenever possible, as this ensures maximal security.

By default, Ark Core sets up the JSON-RPC node to run on port 8080. As all JSON-RPC requests are handled from a single endpoint, this means that your endpoint should be:
```
`YOUR.NODE.IP.HERE:8080/`
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
```js
{
    jsonrpc: '2.0',
    method: 'transaction.create' // or any method listed below
    id: '', // ID to be used as internal identifier, returned by JSON RPC 
    params: {} // the parameters for the specific request
}
```

Successful requests will receive a response with the `jsonrpc`, `id`, and `result` fields attached. Otherwise, the `jsonrpc` and `id` fields will be returned alongside an `error` object containing the error `code`, `message`, and `data`. 

## Available Endpoints

You can access any of the following commands using the JSON-RPC interface. To specify which command you'd like to utilize, include the command name in your request's `method` key.

- `transactions.create`
    - Creates a transaction object for submission to the blockchain. Combine with `transactions.broadcast` to submit transactions to the network.
    - Required parameters:
        - `amount` - the amount of ARK to transfer, in arktoshis.
        - `recipientId` - the address of the receiving account
        - `passphrase` - the passphrase of the signing wallet
- `transactions.broadcast`
    - Broadcasts a transaction to the network for approval. Note that transaction objects must be be created using the `transactions.create` endpoint prior to using this method.
    - Required parameters:
        - `id` - the ID of the transaction object. Returned by the `transactions.create` endpoint.
- `transactions.info`
    - Returns metadata for a given transaction
    - Required parameters:
        - `id` - the transaction ID
- `wallets.create`
    - Derives a public key and address from a given passphrase
    - Required parameters:
        - `passphrase` - the account passphrase used to derive the keys and address
- `wallets.info`
    - Returns metadata for a given account.
    - Required parameters:
        - `address` - the address of the account to return transactions for
- `wallets.transactions`
    - Returns an array of all transactions associated with a given account.
    - Required parameters:
        - `address` - the address of the account to return transactions for
    - Optional parameters:
        - `offset` - the offset to use when fetching transactions
- `blocks.info`
    - Returns metadata for a given block
    - Required parameters:
        - `id` - the block ID
- `blocks.latest`
    - Returns the most recently forged block.
- `blocks.transactions`
    - Returns an array of the transactions of a given block.
    - Required parameters:
        - `id` - the block ID
    - Optional parameters:
        - `offset` - how many transactions will be offset in returning a transaction list
- `wallets.bip38.create`
    - Creates a wallet using the BIP38 standard. This combines a BIP38 password with a userId provided by an external application to create a private key that can only be unlocked with the password + userId combination.
    - Returns account `publicKey`, `address` and decrypted `WIF` of created account.
    - Required parameters:
        - `bip38` - the password that should be used to create the BIP38 wallet
        - `userId` - the user ID that should be combined with the `bip38` to create a secure password. Can be any value, exchanges typically use internal user IDs or something similar.
- `wallets.bip38.info`
    - Retrieves saved BIP38 wallet from server. Wallet must be stored in JSON-RPC DB with `wallets.bip38.create` before this endpoint will work.
    - Required parameters:
        - `bip38` - the password used to create the wallet
        - `userId` - the user ID associated with the BIP38 wallet
- `transactions.bip38.create`
    - Creates a transaction using a saved BIP38 wallet. As with `transactions.create`, any transactions created using this method must be broadcasted using `transactions.broadcast` to be finalized.
    - Required parameters:
        - `amount` - the amount of ARK that should be sent, in arktoshi.
        - `recipientId` - the address of the recipient account
        - `bip38` - the bip38 password used to create the sender account
        - `userId` - the userID associated with the BIP38 wallet

## Default Values
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
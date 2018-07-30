---
title: "Communication"
---

# Communication

[[toc]]

## Networks

Supported networks are `mainnet` and `devnet` all calls should start with the network you want to address, for instance, `/mainnet/account/AUDud8tvyVZa67p3QY7XPRUTjRGnWQQ9Xv` we call it `{network}` in the API description.

## Accounts

### Get account balance from `address`

```bash
GET /{network}/account/{address}
```

#### Path Parameters

| Name    | Type   | Description                    | Required           |
|---------|:------:|--------------------------------|:------------------:|
| network | string | The identifier of the network. | :white_check_mark: |
| address | string | The identifier of the account. | :white_check_mark: |

### Create account from `passphrase`

```bash
POST /{network}/account
```

#### Path Parameters

| Name    | Type   | Description                    | Required           |
|---------|:------:|--------------------------------|:------------------:|
| network | string | The identifier of the network. | :white_check_mark: |

#### Body Parameters

| Name       | Type   | Description                                  | Required           |
|------------|:------:|----------------------------------------------|:------------------:|
| passphrase | string | The passphrase of the account to be created. | :white_check_mark: |

### Get backup from `userid`

```bash
GET /{network}/account/bip38/{userid}
```

#### Path Parameters

| Name    | Type   | Description                    | Required           |
|---------|:------:|--------------------------------|:------------------:|
| network | string | The identifier of the network. | :white_check_mark: |
| userid  | string | The identifier of the account. | :white_check_mark: |

### Create (or get if already existing) account and encrypt using bip38

```bash
POST /{network}/account/bip38
```

#### Path Parameters

| Name    | Type   | Description                    | Required           |
|---------|:------:|--------------------------------|:------------------:|
| network | string | The identifier of the network. | :white_check_mark: |

#### Body Parameters

| Name   | Type   | Description                         | Required           |
|--------|:------:|-------------------------------------|:------------------:|
| bip38  | string | The password for the encrypted WIF. | :white_check_mark: |
| userid | string | The identifier of the account.      | :white_check_mark: |

> If you want to create several accounts for one user, you need to use a different userid.

## Transactions

### Get last 50 transactions from `address`

`GET /{network}/transactions/{address}`

#### Path Parameters

| Name    | Type   | Description                    | Required           |
|---------|:------:|--------------------------------|:------------------:|
| network | string | The identifier of the network. | :white_check_mark: |
| address | string | The identifier of the account. | :white_check_mark: |

### Create a transaction

`POST /{network}/transaction`

#### Path Parameters

| Name    | Type   | Description                    | Required           |
|---------|:------:|--------------------------------|:------------------:|
| network | string | The identifier of the network. | :white_check_mark: |

#### Body Parameters

| Name        | Type   | Description                                  | Required           |
|-------------|:------:|----------------------------------------------|:------------------:|
| recipientId | string | The recipient of the transaction.            | :white_check_mark: |
| amount      | int    | The amount of the transaction.               | :white_check_mark: |
| passphrase  | string | The passphrase used to sign the transaction. | :white_check_mark: |

### Create a transaction using `bip38` for `userid`

`POST /{network}/transaction/bip38`

#### Path Parameters

| Name    | Type   | Description                    | Required           |
|---------|:------:|--------------------------------|:------------------:|
| network | string | The identifier of the network. | :white_check_mark: |

### Body Parameters

| Name        | Type   | Description                                  | Required           |
|-------------|:------:|----------------------------------------------|:------------------:|
| recipientId | string | The recipient of the transaction.            | :white_check_mark: |
| amount      | string | The amount of the transaction.               | :white_check_mark: |
| bip38       | string | The password for the encrypted WIF.          | :white_check_mark: |
| userid      | string | The identifier of the account.               | :white_check_mark: |

### Broadcast transaction

`POST /{network}/broadcast`

#### Path Parameters

| Name    | Type   | Description                    | Required           |
|---------|:------:|--------------------------------|:------------------:|
| network | string | The identifier of the network. | :white_check_mark: |

#### Body Parameters

| Name | Type   | Description                        | Required           |
|------|:------:|------------------------------------|:------------------:|
| id   | string | The identifier of the transaction. | :white_check_mark: |

::: tip
Note that if the transaction has been created via the RPC it has been stored internally, as such only the transaction `id` is needed to broadcast/rebroadcast it. Otherwise if created outside of this RPC server, pass the whole transaction body as the POST payload.
:::

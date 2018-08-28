---
title: Public Accounts API
---

# Public Accounts API

## List all accounts

### Endpoint

```
GET /api/accounts/getAllAccounts
```

### Query Parameters

| Name   | Type | Description                                    | Required |
|--------|:----:|------------------------------------------------|:--------:|
| offset | int  | The offset of resources that will be returned. | :x:      |
| limit  | int  | The number of resources per page.              | :x:      |

### Response

```json
{
    "wallets": [
        {
            "address": "D59NTfV92ca9QevUydvMiFMFdubbCaAVCV",
            "publicKey": "037d035f08b3bad0d5bb605232c7aa41555693c480044dbeb797270a44c339da5a",
            "secondPublicKey": null,
            "vote": "0284a88da69cc04439633217c6961d2800df0f7dff7f85b9803848ee02d0743f1d",
            "username": null,
            "balance": 1023145260990,
            "votebalance": 0
        }
    ],
    "success": true
}
```

### Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/accounts/getAllAccounts \
  -H "API-Version: 1"
```
</request-example>

## Retrieve an account

### Endpoint

```
GET /api/accounts
```

### Query Parameters

| Name    | Type   | Description                                    | Required           |
|---------|:------:|------------------------------------------------|:------------------:|
| address | string | The identifier of the account to be retrieved. | :white_check_mark: |

### Response

```json
{
    "account": {
        "address": "D59NTfV92ca9QevUydvMiFMFdubbCaAVCV",
        "publicKey": "037d035f08b3bad0d5bb605232c7aa41555693c480044dbeb797270a44c339da5a",
        "secondPublicKey": null,
        "vote": "0284a88da69cc04439633217c6961d2800df0f7dff7f85b9803848ee02d0743f1d",
        "username": null,
        "balance": 1023145260990,
        "votebalance": 0
    },
    "success": true
}
```

### Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/accounts?address=AUDud8tvyVZa67p3QY7XPRUTjRGnWQQ9Xv \
  -H "API-Version: 1"
```
</request-example>

## List all top accounts

### Endpoint

```
GET /api/accounts/top
```

### Query Parameters

| Name   | Type | Description                                    | Required |
|--------|:----:|------------------------------------------------|:--------:|
| offset | int  | The offset of resources that will be returned. | :x:      |
| limit  | int  | The number of resources per page.              | :x:      |

### Response

```json
{
    "accounts": [
        {
            "address": "DGihocTkwDygiFvmg6aG8jThYTic47GzU9",
            "balance": 11499593462120632,
            "publicKey": "024c8247388a02ecd1de2a3e3fd5b7c61ecc2797fa3776599d558333ef1802d231"
        }
    ],
    "success": true
}
```

### Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/accounts/top \
  -H "API-Version: 1"
```
</request-example>

## Retrieve the balance of an account

### Endpoint

```
GET /api/accounts/getBalance
```

### Query Parameters

| Name    | Type   | Description                                    | Required           |
|---------|:------:|------------------------------------------------|:------------------:|
| address | string | The identifier of the account to be retrieved. | :white_check_mark: |

### Response

```json
{
    "balance": 1023145260990,
    "unconfirmedBalance": 1023145260990,
    "success": true
}
```

### Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/accounts/getBalance?address=AUDud8tvyVZa67p3QY7XPRUTjRGnWQQ9Xv \
  -H "API-Version: 1"
```
</request-example>

## Retrieve the delegate registration fee

### Endpoint

```
GET /api/accounts/delegates/fee
```

### Response

```json
{
    "fee": 2500000000,
    "success": true
}
```

### Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/accounts/delegates/fee \
  -H "API-Version: 1"
```
</request-example>

## Retrieve the public key of an account

### Endpoint

```
GET /api/accounts/getPublicKey
```

### Query Parameters

| Name    | Type   | Description                                    | Required           |
|---------|:------:|------------------------------------------------|:------------------:|
| address | string | The identifier of the account to be retrieved. | :white_check_mark: |

### Response

```json
{
    "publicKey": "037d035f08b3bad0d5bb605232c7aa41555693c480044dbeb797270a44c339da5a",
    "success": true
}
```

### Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/accounts/getPublicKey?address=AUDud8tvyVZa67p3QY7XPRUTjRGnWQQ9Xv \
  -H "API-Version: 1"
```
</request-example>

## Retrieve the total count of accounts

### Endpoint

```
GET /api/accounts/count
```

### Response

```json
{
    "count": 841,
    "success": true
}
```


### Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/accounts/count \
  -H "API-Version: 1"
```
</request-example>

## Retrieve the voted delegate of an account

### Endpoint

```
GET /api/accounts/delegates
```

### Query Parameters

| Name    | Type   | Description                                    | Required           |
|---------|:------:|------------------------------------------------|:------------------:|
| address | string | The identifier of the account to be retrieved. | :white_check_mark: |

### Response

```json
{
    "delegates": [
        {
            "username": "bioly",
            "address": "DRkVSeW5e2zh9v7R5msdLc26fo8axFALGT",
            "publicKey": "0284a88da69cc04439633217c6961d2800df0f7dff7f85b9803848ee02d0743f1d",
            "vote": "13475943400000",
            "producedblocks": 0,
            "missedblocks": 0,
            "rate": 15,
            "approval": "0.10",
            "productivity": "0.00"
        }
    ],
    "success": true
}
```

### Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/accounts/delegates?address=AUDud8tvyVZa67p3QY7XPRUTjRGnWQQ9Xv \
  -H "API-Version: 1"
```
</request-example>

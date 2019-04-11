---
title: Public Blocks API
---

# Public Blocks API

## List all blocks

### Endpoint

```
GET /api/blocks
```

### Query Parameters

| Name   | Type | Description                                    | Required |
| :----- | :--: | :--------------------------------------------- | :------: |
| offset | int  | The offset of resources that will be returned. | :x:      |
| limit  | int  | The number of resources per page.              | :x:      |

### Response

```json
{
    "blocks": [
        {
            "id": "17667031254892018837",
            "version": 0,
            "timestamp": 32818936,
            "previousBlock": "17683512654394589083",
            "height": 3035603,
            "numberOfTransactions": 0,
            "totalAmount": 0,
            "totalFee": 0,
            "reward": 200000000,
            "payloadLength": 0,
            "payloadHash": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
            "generatorPublicKey": "02af5e6341efc14f4ba39a9ff65e151cc7304fc742ce7b2678d9aa446c555ee9c1",
            "blockSignature": "3045022100b128be0f76ed92be93cd8ef2bb64e199ab25ee66f72c75190e0f679d85b92f07022048f9c161e0e2055f7e80a663897b05ac6289b309acf9720f232565323c200afd",
            "confirmations": 0
        },
        {
            "id": "17683512654394589083",
            "version": 0,
            "timestamp": 32818928,
            "previousBlock": "13631091596497440274",
            "height": 3035602,
            "numberOfTransactions": 0,
            "totalAmount": 0,
            "totalFee": 0,
            "reward": 200000000,
            "payloadLength": 0,
            "payloadHash": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
            "generatorPublicKey": "03f264a6d2ebb62279313a6fd7fec4e2244785839b625a0b0c261e689ce5401d87",
            "blockSignature": "3044022076b8af9b9b31fb9f96761a00afb28b8fd95c6815d53a10e906dc781a8ec4aa4102205d7125b7923966e7f8f2aa2a58c40006cf792aa6a3caee1cd80ddcad0b000e18",
            "confirmations": 1
        }
    ],
    "success": true
}
```

### Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/blocks \
  -H "API-Version: 1"
```
</request-example>

## Retrieve a block

### Endpoint

```
GET /api/blocks/get
```

### Query Parameters

| Name | Type   | Description                                  | Required           |
| :--- | :----: | :------------------------------------------- | :----------------: |
| id   | string | The identifier of the block to be retrieved. | :white_check_mark: |

### Response

```json
{
    "block": {
        "id": "17667031254892018837",
        "version": 0,
        "timestamp": 32818936,
        "previousBlock": "17683512654394589083",
        "height": 3035603,
        "numberOfTransactions": 0,
        "totalAmount": 0,
        "totalFee": 0,
        "reward": 200000000,
        "payloadLength": 0,
        "payloadHash": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
        "generatorPublicKey": "02af5e6341efc14f4ba39a9ff65e151cc7304fc742ce7b2678d9aa446c555ee9c1",
        "blockSignature": "3045022100b128be0f76ed92be93cd8ef2bb64e199ab25ee66f72c75190e0f679d85b92f07022048f9c161e0e2055f7e80a663897b05ac6289b309acf9720f232565323c200afd",
        "confirmations": 8
    },
    "success": true
}
```

### Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/blocks/get?id=7087584057375728132 \
  -H "API-Version: 1"
```
</request-example>

## List all fees of the blockchain

### Endpoint

```
GET /api/blocks/getFees
```

### Response

```json
{}
```

### Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/blocks/getFees \
  -H "API-Version: 1"
```
</request-example>

## Retrieve a fee

### Endpoint

```
GET /api/blocks/getFee
```

### Response

```json
{
    "fee": 10000000,
    "success": true
}
```

### Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/blocks/getFee \
  -H "API-Version: 1"
```
</request-example>

## Retrieve the epoch of the blockchain

### Endpoint

```
GET /api/blocks/getEpoch
```

### Response

```json
{
    "epoch": "2017-03-21T13:00:00.000Z",
    "success": true
}
```

### Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/blocks/getEpoch \
  -H "API-Version: 1"
```
</request-example>

## Retrieve the height of the blockchain

### Endpoint

```
GET /api/blocks/getHeight
```

### Response

```json
{
    "height": 3035616,
    "id": "4635377835812759465",
    "success": true
}
```

### Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/blocks/getHeight \
  -H "API-Version: 1"
```
</request-example>

## Retrieve the milestone of the blockchain

### Endpoint

```
GET /api/blocks/getMilestone
```

### Response

```json
{
    "milestone": 1,
    "success": true
}
```

### Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/blocks/getMilestone \
  -H "API-Version: 1"
```
</request-example>

## Retrieve the nethash of the blockchain

### Endpoint

```
GET /api/blocks/getNethash
```

### Response

```json
{
    "nethash": "578e820911f24e039733b45e4882b73e301f813a0d2c31330dafda84534ffa23",
    "success": true
}
```

### Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/blocks/getNethash \
  -H "API-Version: 1"
```
</request-example>

## Retrieve the reward of the blockchain

### Endpoint

```
GET /api/blocks/getReward
```

### Response

```json
{
    "reward": 200000000,
    "success": true
}
```

### Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/blocks/getReward \
  -H "API-Version: 1"
```
</request-example>

## Retrieve the status of the blockchain

### Endpoint

```
GET /api/blocks/getStatus
```

### Response

```json
{
    "epoch": "2017-03-21T13:00:00.000Z",
    "height": 3035628,
    "fee": 10000000,
    "milestone": 1,
    "nethash": "578e820911f24e039733b45e4882b73e301f813a0d2c31330dafda84534ffa23",
    "reward": 200000000,
    "supply": 13092005600000000,
    "success": true
}
```

### Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/blocks/getStatus \
  -H "API-Version: 1"
```
</request-example>

## Retrieve the supply of the blockchain

### Endpoint

```
GET /api/blocks/getSupply
```

### Response

```json
{
    "supply": 13092004200000000,
    "success": true
}
```

### Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/blocks/getSupply \
  -H "API-Version: 1"
```
</request-example>

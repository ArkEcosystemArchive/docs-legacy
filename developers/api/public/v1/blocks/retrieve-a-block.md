---
title: "Retrieve a block"
---

# Retrieve a block

[[toc]]

## Endpoint

```
GET /api/blocks/get
```

## Query Parameters

| Name | Type   | Description                                  | Required           |
|------|:------:|----------------------------------------------|:------------------:|
| id   | string | The identifier of the block to be retrieved. | :white_check_mark: |

## Response

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

## Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/blocks/get?id=7087584057375728132 \
  -H "API-Version: 1"
```
</request-example>

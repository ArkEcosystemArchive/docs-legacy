---
title: "List all blocks"
---

# List all blocks

[[toc]]

## Endpoint

```
GET /api/blocks
```

## Query Parameters

| Name   | Type | Description                                    | Required |
|--------|:----:|------------------------------------------------|:--------:|
| offset | int  | The offset of resources that will be returned. | :x:      |
| limit  | int  | The number of resources per page.              | :x:      |

## Response

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

## Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/blocks \
  -H "API-Version: 1"
```
</request-example>

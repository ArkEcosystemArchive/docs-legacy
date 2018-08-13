---
title: "Retrieve the total forged of a delegate"
---

# Retrieve the total forged of a delegate

[[toc]]

## Endpoint

```
GET /api/delegates/forging/getForgedByAccount
```

## Query Parameters

| Name               | Type      | Description                                 | Required           |
|--------------------|:---------:|---------------------------------------------|:------------------:|
| generatorPublicKey | string    | The public key of the delegate that forged. | :white_check_mark: |

## Response

```json
{
    "fees": 66670000000,
    "rewards": 11968200000000,
    "forged": 12034870000000,
    "success": true
}
```


## Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/delegates/forging/getForgedByAccount?generatorPublicKey=032fcfd19f0e095bf46bd3ada87e283720c405249b1be1a70bad1d5f20095a8515 \
  -H "API-Version: 1"
```
</request-example>

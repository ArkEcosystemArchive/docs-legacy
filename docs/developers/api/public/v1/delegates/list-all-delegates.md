---
title: "List all delegates"
---

# List all delegates

[[toc]]

## Endpoint

```
GET /api/delegates
```

## Query Parameters

| Name    | Type | Description                                       | Required |
|---------|:----:|---------------------------------------------------|:--------:|
| offset  | int  | The offset of resources that will be returned.    | :x:      |
| limit   | int  | The number of resources per page.                 | :x:      |
| orderBy | int  | The column by which the resources will be sorted. | :x:      |

## Response

```json
{
    "delegates": [
        {
            "username": "dark_jmc",
            "address": "D5PXQVeJmchVrZFHL7cALZK8mWWzjCaVfz",
            "publicKey": "02a9a0ac34a94f9d27fd9b4b56eb3c565a9a3f61e660f269775fb456f7f3301586",
            "vote": "02a9a0ac34a94f9d27fd9b4b56eb3c565a9a3f61e660f269775fb456f7f3301586"
        }
    ],
    "success": true
}
```

## Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/delegates \
  -H "API-Version: 1"
```
</request-example>

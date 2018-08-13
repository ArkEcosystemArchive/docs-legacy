---
title: "Retrieve a delegate"
---

# Retrieve a delegate

[[toc]]

## Endpoint

```
GET /api/delegates/get
```

## Query Parameters

| Name      | Type   | Description                                       | Required |
|-----------|:------:|---------------------------------------------------|:--------:|
| publicKey | string | The public key of the delegate to be retrieved.   | :o:      |
| username  | string | The username key of the delegate to be retrieved. | :o:      |

## Response

```json
{
    "delegates": [
        {
            "username": "dark_jmc",
            "address": "D5PXQVeJmchVrZFHL7cALZK8mWWzjCaVfz",
            "publicKey": "02a9a0ac34a94f9d27fd9b4b56eb3c565a9a3f61e660f269775fb456f7f3301586",
            "vote": "02a9a0ac34a94f9d27fd9b4b56eb3c565a9a3f61e660f269775fb456f7f3301586"
        },
        {
            "username": "pimoussefrnl_node_3",
            "address": "D5gqHU5UkDrugaemW2NNFH4hDyvfW2TEix",
            "publicKey": "022289579cd6336d9b940576170c016aa95c3003d9ceb16dbdb67098d35f6219d8",
            "vote": null
        }
    ],
    "success": true
}
```

## Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/delegates/get?username=arkx \
  -H "API-Version: 1"
```
</request-example>

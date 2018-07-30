---
title: "Retrieve the public key of an account"
---

# Retrieve the public key of an account

[[toc]]

## Endpoint

```
GET /api/accounts/getPublicKey
```

## Query Parameters

| Name    | Type   | Description                                    | Required           |
|---------|:------:|------------------------------------------------|:------------------:|
| address | string | The identifier of the account to be retrieved. | :white_check_mark: |

## Response

```json
{
    "publicKey": "037d035f08b3bad0d5bb605232c7aa41555693c480044dbeb797270a44c339da5a",
    "success": true
}
```

## Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/accounts/getPublicKey?address=AUDud8tvyVZa67p3QY7XPRUTjRGnWQQ9Xv \
  -H "API-Version: 1"
```
</request-example>

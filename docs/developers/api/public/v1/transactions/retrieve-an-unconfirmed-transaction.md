---
title: "Retrieve an unconfirmed transaction"
---

# Retrieve an unconfirmed transaction

[[toc]]

## Endpoint

```
GET /api/transactions/unconfirmed/get
```

## Query Parameters

| Name | Type   | Description                                        | Required           |
|------|:------:|----------------------------------------------------|:------------------:|
| id   | string | The identifier of the transaction to be retrieved. | :white_check_mark: |

## Response

```json
{}
```

## Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/transactions/unconfirmed/get?id=13786ab466a10e3fc39a57a2cc5425bd4b56f7564a253274292a3a4ec9a2a80f \
  -H "API-Version: 1"
```
</request-example>

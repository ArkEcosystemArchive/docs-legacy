---
title: "Search all delegates"
---

# Search all delegates

[[toc]]

## Endpoint

```
GET /api/delegates/search
```

## Query Parameters

| Name   | Type | Description                                               | Required           |
|--------|:----:|-----------------------------------------------------------|:------------------:|
| offset | int  | The offset of resources that will be returned.            | :x:                |
| limit  | int  | The number of resources per page.                         | :x:                |
| q      | int  | The search query by which the resources will be filtered. | :white_check_mark: |

## Response

```json
{
    "success": true,
    "delegates": [
        {
            "username": "arkx",
            "address": "AdVSe37niA3uFUPgCgMUH2tMsHF4LpLoiX",
            "publicKey": "032fcfd19f0e095bf46bd3ada87e283720c405249b1be1a70bad1d5f20095a8515",
            "vote": "140774167152283",
            "producedblocks": 67604,
            "missedblocks": 155
        }
    ]
}
```

## Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/delegates/search?q=arkx \
  -H "API-Version: 1"
```
</request-example>

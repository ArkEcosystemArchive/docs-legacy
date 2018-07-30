---
title: "Retrieve the milestone of the blockchain"
---

# Retrieve the milestone of the blockchain

[[toc]]

## Endpoint

```
GET /api/blocks/getMilestone
```

## Response

```json
{
    "milestone": 1,
    "success": true
}
```

## Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/blocks/getMilestone \
  -H "API-Version: 1"
```
</request-example>

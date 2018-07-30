---
title: "Retrieve the reward of the blockchain"
---

# Retrieve the reward of the blockchain

[[toc]]

## Endpoint

```
GET /api/blocks/getReward
```

## Response

```json
{
    "reward": 200000000,
    "success": true
}
```

## Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/blocks/getReward \
  -H "API-Version: 1"
```
</request-example>

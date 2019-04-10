---
title: Public Blockchain API
---

# Public Blockchain API

## Retrieve Information

Used to get the latest block and supply of the blockchain.

### Endpoint

```
GET /api/blockchain
```

### Response

```
{
  "data": {
    "block": { "height": 7968009, "id": "11184181948670407827" },
    "supply": 14078482000000004
  }
}
```

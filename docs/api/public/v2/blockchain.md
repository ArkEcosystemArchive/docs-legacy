---
title: "Public Blockchain API"
---

# Public Blockchain API

## Retrieve Latest Block and Supply

Used to get the latest block and supply of the blockchain.

### Endpoint

```
GET /api/blockchain
```

### Examples

```sh
curl --header "API-Version: 2" https://api.ark.io/api/blockchain
```

```json
{
  "data": {
    "block": {
      "height": 8051250,
      "id": "16024042256653583473"
    },
    "supply": 14095130200000004
  }
}
```

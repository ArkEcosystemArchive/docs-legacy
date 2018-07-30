---
title: "Retrieve a block"
---

# Retrieve a block

[[toc]]

## Endpoint

```
GET /api/blocks/{id}
```

## Path Parameters

| Name | Type   | Description                                  | Required           |
|------|:------:|----------------------------------------------|:------------------:|
| id   | string | The identifier of the block to be retrieved. | :white_check_mark: |

## Response

```json
{
    "data": {
        "id": "58328125061111756",
        "version": 0,
        "height": 3035362,
        "previous": "3741191868092856237",
        "forged": {
            "reward": 200000000,
            "fee": 0,
            "total": 200000000
        },
        "payload": {
            "hash": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
            "length": 0
        },
        "generator": {
            "username": "genesis_6",
            "address": "D5e2FzTPqdEHridjzpFZCCVyepAu6Vpmk4",
            "publicKey": "023e577a7b3362e0aba70e6911d230e86d729b4cb640f0e0b25637b812a3e38b53"
        },
        "signature": "3044022047aeb0c9cfbb5709aba4c177009bfdc7804ef597073fb9ca6cb614d7e3d1af2d02207234119d02ca26600ece045c59266945081b4c8237370576aaad7c61a09fe0ad",
        "transactions": 0,
        "timestamp": {
            "epoch": 32816544,
            "unix": 1522917744,
            "human": "2018-04-05T08:42:24Z"
        }
    }
}
```

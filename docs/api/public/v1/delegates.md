---
title: Public Delegates API
---

# Public Delegates API

## List all delegates

### Endpoint

```
GET /api/delegates
```

### Query Parameters

| Name    | Type | Description                                       | Required |
|---------|:----:|---------------------------------------------------|:--------:|
| offset  | int  | The offset of resources that will be returned.    | :x:      |
| limit   | int  | The number of resources per page.                 | :x:      |
| orderBy | int  | The column by which the resources will be sorted. | :x:      |

### Response

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

### Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/delegates \
  -H "API-Version: 1"
```
</request-example>

## List all voters of a delegate

### Endpoint

```
GET /api/delegates/voters
```

### Query Parameters

| Name      | Type   | Description                                     | Required           |
|-----------|:------:|-------------------------------------------------|:------------------:|
| publicKey | string | The public key of the delegate to be retrieved. | :white_check_mark: |

### Response

```json
{
    "accounts": [
        {
            "username": null,
            "address": "D5mbS6mpP5UheuciNscpDLgC127kYjRtkK",
            "publicKey": "03f7e0b1ab14985990416f72ed0b206c20b9efa35156e4528c8ff749fa0eea5d5a",
            "balance": 400000000
        }
    ],
    "success": true
}
```

### Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/delegates/voters?publicKey=032fcfd19f0e095bf46bd3ada87e283720c405249b1be1a70bad1d5f20095a8515 \
  -H "API-Version: 1"
```
</request-example>

## Retrieve a delegate

### Endpoint

```
GET /api/delegates/get
```

### Query Parameters

| Name      | Type   | Description                                       | Required |
|-----------|:------:|---------------------------------------------------|:--------:|
| publicKey | string | The public key of the delegate to be retrieved.   | :o:      |
| username  | string | The username key of the delegate to be retrieved. | :o:      |

### Response

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

### Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/delegates/get?username=arkx \
  -H "API-Version: 1"
```
</request-example>

## Retrieve the delegate registration fee

### Endpoint

```
GET /api/delegates/fee
```

### Response

```json
{
    "delegate": {
        "username": "boldninja",
        "address": "DARiJqhogp2Lu6bxufUFQQMuMyZbxjCydN",
        "publicKey": "022cca9529ec97a772156c152a00aad155ee6708243e65c9d211a589cb5d43234d",
        "vote": "0257b7724e97cd832e0c28533a86da5220656f9b5122141daab20e8526decce01f"
    },
    "success": true
}
```

### Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/delegates/fee \
  -H "API-Version: 1"
```
</request-example>

## Retrieve the total count of delegates

### Endpoint

```
GET /api/delegates/count
```

### Response

```json
{
    "count": 197,
    "success": true
}
```


### Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/delegates/count \
  -H "API-Version: 1"
```
</request-example>

## Retrieve the total forged of a delegate

### Endpoint

```
GET /api/delegates/forging/getForgedByAccount
```

### Query Parameters

| Name               | Type      | Description                                 | Required           |
|--------------------|:---------:|---------------------------------------------|:------------------:|
| generatorPublicKey | string    | The public key of the delegate that forged. | :white_check_mark: |

### Response

```json
{
    "fees": 66670000000,
    "rewards": 11968200000000,
    "forged": 12034870000000,
    "success": true
}
```


### Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/delegates/forging/getForgedByAccount?generatorPublicKey=032fcfd19f0e095bf46bd3ada87e283720c405249b1be1a70bad1d5f20095a8515 \
  -H "API-Version: 1"
```
</request-example>

## Search all delegates

### Endpoint

```
GET /api/delegates/search
```

### Query Parameters

| Name   | Type | Description                                               | Required           |
|--------|:----:|-----------------------------------------------------------|:------------------:|
| offset | int  | The offset of resources that will be returned.            | :x:                |
| limit  | int  | The number of resources per page.                         | :x:                |
| q      | int  | The search query by which the resources will be filtered. | :white_check_mark: |

### Response

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

### Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/delegates/search?q=arkx \
  -H "API-Version: 1"
```
</request-example>

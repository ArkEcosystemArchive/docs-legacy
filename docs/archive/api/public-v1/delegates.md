---
title: "Public Delegates API"
---

# Public Delegates API

## List All Delegates

### Endpoint

```
GET /api/delegates
```

### Query Parameters

| Name    | Type | Description                                       | Required |
| :------ | :--: | :------------------------------------------------ | :------: |
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

## List All Voters of a Delegate

### Endpoint

```
GET /api/delegates/voters
```

### Query Parameters

| Name      | Type   | Description                                     | Required           |
| :-------- | :----: | :---------------------------------------------- | :----------------: |
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

## Retrieve a Delegate

### Endpoint

```
GET /api/delegates/get
```

### Query Parameters

| Name      | Type   | Description                                       | Required |
| :-------- | :----: | :------------------------------------------------ | :------: |
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

## Retrieve the Delegate Registration Fee

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

## Retrieve the Total Count of Delegates

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

## Retrieve the Total Forged of a Delegate

### Endpoint

```
GET /api/delegates/forging/getForgedByAccount
```

### Query Parameters

| Name               | Type      | Description                                 | Required           |
| :----------------- | :-------: | :------------------------------------------ | :----------------: |
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

## Search All Delegates

### Endpoint

```
GET /api/delegates/search
```

### Query Parameters

| Name   | Type | Description                                               | Required           |
| :----- | :--: | :-------------------------------------------------------- | :----------------: |
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

## Retrieve the List of Next Forging Delegates

### Endpoint

```
GET /api/delegates/getNextForgers
```

### Response

```json
{
    "currentBlock": 279727,
    "currentSlot": 5921125,
    "delegates": [
        "03f08761f99892996c6771761955ec41ee6cdffadd43171228f5f28f8c76423b3d", "02d0244d939fad9004cc104f71b46b428d903e4f2988a65f39fdaa1b7482894c9e", "036f1cb6a811173e8d193e41a4ceb77253c3e4f2832e7a4ba3cf3f8f9e606f5f05", "02677f73453da6073f5cf76db8f65fabc1a3b7aadc7b06027e0df709f14e097790", "022e13de675e14a409ce636706c76d42857c673d8dc0dda4e5bfceffdbf86e13c9", "03ef692bb144c368b4844ceca3ffd30fb8c82b97b5b40220473e9009925637e9f9", "03153c994e5306b2fbba9bb533f22871e12e4c1d1d3960d1eeef385ab143b258b4", "03ea97a59522c4cb4bb3420fc94555f6223813d9817dd421bf533b390a7ea140db", "03120f521f7025f76341a09112f88a6c072411c549e4bfa8c92946fcf1c57cdf1e", "021b0f58eca7f123428a8647ffe0644a9454c510f066d3864c27d8c7ad8f5a8aa4"
    ],
    "success": true
}
```

### Example

<request-example>
```bash
curl -X GET https://explorer.ark.io:8443/api/delegates/getNextForgers \
  -H "API-Version: 1"
```
</request-example>

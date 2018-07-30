---
title: "Create a transaction"
---

# Create a transaction

[[toc]]

## Endpoint

```
POST /api/transactions
```

## Body Parameters

| Name         | Type  | Description                         | Required           |
|--------------|:-----:|-------------------------------------|:------------------:|
| transactions | array | The list of transactions to create. | :white_check_mark: |

## Response

```json
{
    "data": {
        "accept": [
            "15d4b3e933b79e5172bbf14c2bd3f92d927394cd8ebd102f18dcc2203af363ca",
            "c48862c4df75a8b0859b559658c757c1c289088488630494fe51613db0747e57",
            "bd10b25444363252e0787e46f5cac90797d08a0c34d507a10d064c94cccf6226",
            "ba9e1d4ad2db9f860deef0e5d5c46bbd9f16222295aafd468e23d4f3d04cfbb8",
            "27963debfa3ced1f606193e81fe3fae16c225c8607e0fd267266a448b5f38520",
            "e9fffd1536f43f36840b8fa2793d4ac473db97bd864bdd54910b4de19fd954db",
            "320111c0c0fd386907cd912e376690704ed118a559f86bd4e00e99db7b7ffc10",
            "176a6d425828f6e7120b790cd77f2a447e3e9b2ccf20808dcc97f027b6dd0eba",
            "dd7015b4bb3768e7ffc0c06a9b72f85f01abc69329e7990f864ebdc3daa1f9e3",
            "dad91ecf3e547cd6b7d7868d1c18b99b88f1f8d2c16ed5f1a7e96eb5a0010c0d"
        ],
        "excess": [],
        "invalid": []
    }
}
```

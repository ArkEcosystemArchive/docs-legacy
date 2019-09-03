---
title: "GraphQL"
---

# GraphQL

::: warning
This package is deprecated and is no longer maintained and supported.
:::

::: tip
You can find the source code of this package at [core-plugins-deprecated/core-graphql](https://github.com/ArkEcosystem/core-plugins-deprecated/tree/master/core-graphql).
:::

## Installation

```bash
yarn add @arkecosystem/core-graphql
```

## Alias

`graphql`

## Configuration

```ts
export const defaults = {
  enabled: false,
  host: process.env.CORE_GRAPHQL_HOST || "0.0.0.0",
  port: process.env.CORE_GRAPHQL_PORT || 4005,
  path: "/graphql"
};
```

## Usage

You can play with the data using the [GraphQL Playground](https://github.com/prisma/graphql-playground), or programmatically posting querys directly to the endpoint. By default the endpoint is `http://0.0.0.0:4005/graphql`, but can be changed in your configuration.

#### Query Examples

> Get first blocks

```
{
  blocks(orderBy: { field: "height", direction: ASC }) {
    id
    payloadHash
    height
    numberOfTransactions
  }
}
```

> Get the list of transactions from a specific block

```
{
  block(id: "13114381566690093367") {
    timestamp
    generatorPublicKey
    transactions {
      id
      type
      amount
    }
  }
}
```

> Get the recipient info of each transaction

```
{
  block(id: "13114381566690093367") {
    generatorPublicKey
    transactions {
      id
      recipient {
        address
        balance
      }
    }
  }
}
```

---
title: "JavaScript"
---

# JavaScript

::: warning
This project is still under development. This page will get more content as the project evolves. In the meantime you can view its source on [Github](https://github.com/ArkEcosystem/core/tree/master/packages/client).
:::

[[toc]]

## Installation

```bash
yarn add @arkecosystem/client
```

## Basics

```js
const Client = require('@arkecosystem/client')

const client = new Client('http://my.ark.node:port')
client.setVersion(2)

const init = await () => {
    try {
        const response = await client.resource('wallets').get('AFrPtEmzu6wdVpa2CnRDEKGQQMWgq8nE9V')

        if (response.data) {
            console.log(response.data.data.balance)
        }
    } catch (error) {
        console.log(error.message)
    }
}

init()
```

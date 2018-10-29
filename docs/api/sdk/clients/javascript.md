---
title: "JavaScript"
---

# JavaScript

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

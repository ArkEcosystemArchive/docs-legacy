---
title: "JSON-RPC"
---

# Introduction

::: danger
THESE DOCS ARE FOR [https://github.com/ArkEcosystem/core/tree/master/packages/core-json-rpc](https://github.com/ArkEcosystem/core/tree/master/packages/core-json-rpc) WHICH IS CURRENTLY UNDER DEVELOPMENT.

IF YOU ARE LOOKING FOR THE CURRENT RPC SERVER HEAD OVER OVER TO [https://github.com/ArkEcosystem/rpc-server](https://github.com/ArkEcosystem/rpc-server).
:::

# Example Request

```js
const axios = require('axios')

const init = async () => {
  try {
    const response = await axios.post('http://localhost:8080', {
      jsonrpc: '2.0',
      id: +new Date(),
      method: 'wallets.bip38.create',
      params: {
        userId: require('crypto').randomBytes(32).toString('hex'),
        bip38: 'this is a top secret passphrase'
      }
    })

    console.log(response.data.result.address)
    console.log(response.data.result.publicKey)
    console.log(response.data.result.wif)
  } catch(error) {
    console.error(error)
  }
}

init()
```

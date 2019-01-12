---
title: "JSON-RPC"
---

# Introduction

::: warning
All HTTP requests have to be sent with the `Content-Type: application/json` header. If the header is not present it will result in malformed responses or request rejections.
:::

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
    }, {
      headers: {
        'Content-Type': 'application/json'
      },
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

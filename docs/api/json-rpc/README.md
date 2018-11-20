---
title: "JSON-RPC"
---

# Introduction

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

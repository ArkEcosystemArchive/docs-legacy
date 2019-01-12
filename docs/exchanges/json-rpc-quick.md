---
title: "JSON-RPC Quick Actions"
---

# What is RPC?

Remote Procedure Call (RPC) is a protocol that allows one program to request a service from software located on another computer network without having to understand all of the network’s details. A procedure call is also sometimes known as a function call or a subroutine call.

By replacing dedicated protocols and communication methods with a standardized interface, RPC is designed to facilitate communication between client and server processes. The functions contained within RPC are accessible by any program that must communicate using a client/server methodology.

::: tip
The majority of platforms utilizing Bitcoin use the Bitcoind-RPC server. To accommodate these services and make the integration of Ark as user-friendly as possible, it was our goal to develop a familiar process for use now, and in the future. The Ark RPC will minimize headaches and streamlines the addition process of ARK to existing architectures.
:::

# JSON-RPC Quick Actions

## Setup

All JSON-RPC implementations should be built using the tools of your programming language of choice. A working code implementation is provided below in NodeJS, but the same principles can be applied to the language of your choice.

By default, the JSON-API listens on port 8080 for requests. This means that all JSON-RPC interactions should be POST requests to the URL `http://{NODE_IP}:{JSON-RPC_PORT}`, with the IP address of your node combined with the JSON-RPC port number.

If you're having trouble connecting, your JSON-RPC may be disabled. To enable it, log into your node and add the key `ARK_JSON_RPC_ENABLED=true` to the ***.env*** file in your config directory.

Your config directory is located at `~/.ark/.env` by default. If the .env file does not exist, create it, then restart your node to apply your changes.

All request should include the HTTP header `Content-Type: application/json` to inform the Ark Core node that your request body is formatted as JSON, which is necessary to use all JSON-RPC endpoints.

Each quick action will interact with the JSON-RPC in the same way - unless noted otherwise, any of these actions can be accessed with the following code:

:::: tabs

::: tab javascript

```js
const axios = require('axios') // install using npm: `npm install axios`
const url = "http://0.0.0.0:8080" // http://${NODE_IP}:${JSON-RPC_PORT}
const headers = {
  "Content-Type": "application/json"
}

const body = {} // this object is unique to each method described below

axios.post(url, body, headers)
  .then(response => {
    console.log(response.result)
  }
  .catch(error => {
    console.log(error)
  })
```

:::

::: tab golang

```go
package main

import (
    "bytes"
    "encoding/json"
    "net/http"
)

func post(URL string, body interface{}) (*http.Response, error) {
    b := new(bytes.Buffer)
    err := json.NewEncoder(b).Encode(u)
    if err != nil {
        return nil, err
    }
    return http.Post(URL, "application/json", b)
}

type request struct {
    Jsonrpc string      `json:"jsonrpc"`
    Method  string      `json:"method"`
    ID      int         `json:"id"`
    Params  interface{} `json:"params"`
}

func main() {
    resp, err := post(
        "http://0.0.0.0:8080",
        request{},
    )
}
```

:::

::: tab python

```python
import requests

r = requests.post("http://0.0.0.0:8080")
print(r)
```

:::

::::

To complete the template, replace the empty `body` object with the objects provided in each quick action. The `blocks.latest` method, for example, can be accessed by the following script:

:::: tabs

::: tab javascript

```js
const axios = require('axios')    // install from npm with `npm install axios`
const url = "http://0.0.0.0:8080" // http://${NODE_ID}:${JSON-RPC-PORT}
const headers = {
  "Content-Type": "application/json"
}

const body = {
  jsonrpc: "2.0",           // JSON-RPC API version.
  method: "blocks.latest",  // RPC method.
  id: 31                    // internal ID to track responses.
}

axios.post(url, body, headers)
  .then(response => {
    console.log(response.data)
  }
  .catch(error => {
    console.log(error)
  })
```

:::

::: tab golang

```go
package main

import (
    "bytes"
    "encoding/json"
    "net/http"
)

func post(URL string, body interface{}) (*http.Response, error) {
    b := new(bytes.Buffer)
    err := json.NewEncoder(b).Encode(u)
    if err != nil {
        return nil, err
    }
    return http.Post(URL, "application/json; charset=utf-8", b)
}

type request struct {
    Jsonrpc string      `json:"jsonrpc"`
    Method  string      `json:"method"`
    ID      int         `json:"id"`
    Params  interface{} `json:"params"`
}

func main() {
    resp, err := post(
        "http://0.0.0.0:8080",
        request{
            Jsonrpc: "2.0",
            Method:  "blocks.latest",
            ID:      31,
            Params:  nil,
        },
    )
}
```

:::

::: tab python

```python
import requests
r = requests.post(
  "http://0.0.0.0:8080", 
  json={"jsonrpc": "2.0", "method": "blocks.latest", "id": 31}
  )
print(r)
```

:::

::::

## Check Wallet Balance

This method can be used to check the account balance associated with a particular Ark address. To utilize it, use the following body payload:

:::: tabs

::: tab javascript

```js
const body = {
  jsonrpc: "2.0",
  method: "wallets.info",
  id: 31 // internal ID to track responses
  params: {
    address: "AMv3iLrvyvpi6d4wEfLqX8kzMxaRvxAcHT" // the address of the wallet being queried.
  }
}
```

:::

::: tab golang

```go
package main

...

type walletInfoParams struct {
  Address string `json:"address"`
}

func main() {
    resp, err := post(
        "http://0.0.0.0:8080",
        request{
            Jsonrpc: "2.0",
            Method:  "wallets.info",
            ID:      31,
            Params:  walletInfoParams{
        Address: "AMv3iLrvyvpi6d4wEfLqX8kzMxaRvxAcHT",
      },
        },
    )
}
```

:::

::: tab python

```python
r = requests.post(
  "http://0.0.0.0:8080", 
  json={"jsonrpc": "2.0", "method": "wallets.info", "id": 31, 
        "params": {
            "address": "AMv3iLrvyvpi6d4wEfLqX8kzMxaRvxAcHT",
      },
    }
  )
```

:::

::::

The response will contain the `jsonrpc` and `id` you used to call the request, along with a payload containing the following data:

```json
{
  "address": "AMv3iLrvyvpi6d4wEfLqX8kzMxaRvxAcHT",
  "balance": 245098210000000,
  "isDelegate": true,
  "publicKey": "02532c68cd0842fb86b2202c1027eafc741bdd581517047d9d19319e6741c54883",
  "secondPublicKey": null,
  "username": "genesis_30"
}
```

## Find Block Information

If you want to retrieve the latest block on the blockchain, call the `blocks.latest` method with no parameters:

:::: tabs

::: tab javascript

```js
const body = {
  jsonrpc: "2.0",
  method: "blocks.latest",
  id: 31 // internal ID to track responses
}
```

:::

::: tab golang

```go
package main

...

func main() {
    resp, err := post(
        "http://0.0.0.0:8080",
        request{
            Jsonrpc: "2.0",
            Method:  "blocks.latest",
            ID:      31,
            Params:  nil,
        },
    )
}
```

:::

::: tab python

```python
r = requests.post(
  "http://0.0.0.0:8080",
  json={"jsonrpc": "2.0", "method": "blocks.latest", "id": 31}
  )
```

:::

::::

This returns a response similar to the following:

```json
{
  "forged": {
    "amount": 0,
    "fee": 0,
    "reward": 0,
    "total": 0
  },
  "generator": {
    "address": "AdWRsk7Lbo97jxGBKzLAFwevVHbqVbW1Cj",
    "publicKey": "03691178f8610d0a295e650201b62345056c788d7f9ac7e8570b69c6c90091b564",
    "username": "genesis_8"
  },
  "height": 20582,
  "id": "5897025410627682852",
  "payload": {
    "hash": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    "length": 0
  },
  "previous": "9643009166535029717",
  "signature": "30440220772362881112eb0ce65d2a91b92cbb6b404f83165edfc95aa2cfb19a02026a3a022010bec681e7b9abfca61a4961f0e29db6730e8d3f9c649b5ab4b7eee1b919897e",
  "timestamp": {
    "epoch": 54902770,
    "human": "2018-12-16T23:46:10.000Z",
    "unix": 1545003970
  },
  "transactions": 0,
  "version": 0
}
```

## Create and Broadcast Transactions

Creating a transaction using the JSON-RPC is a two-step process:

1. Create the transaction object with `transactions.create`.
2. Broadcast the transaction to the network with `transactions.broadcast`.

The `transactions.create` endpoint accepts three parameters:

- RecipientId
- Amount
- Passphrase

An example transaction creation payload could look like this:

:::: tabs

::: tab javascript

```js
const body = {
  jsonrpc: "2.0",
  method: "transactions.create",
  id: 31
  params: {
    recipientId: "AMv3iLrvyvpi6d4wEfLqX8kzMxaRvxAcHT" // the address you want to send to,
    amount: "200000000", // 2 ARK * 100,000,000 arktoshi/ARK
    passphrase: "craft imitate step mixture patch forest volcano business charge around girl confirm"
  }
}
```

:::

::: tab golang

```go
package main

...

type transaction struct {
    RecipientId string `json:"recipientId"`
    Amount      string `json:"amount"`
    Passphrase  string `json:"passphrase"`
}

func main() {
    resp, err := post(
        "http://0.0.0.0:8080",
        request{
            Jsonrpc: "2.0",
            Method:  "transactions.create",
            ID:      31,
            Params: transaction{
                Address:    "AMv3iLrvyvpi6d4wEfLqX8kzMxaRvxAcHT",
                Amount:     "200000000", // 2 ARK * 100,000,000 arktoshi/ARK
                Passphrase: "craft imitate step mixture patch forest volcano business charge around girl confirm",
            },
        },
    )
}
```

:::

::: tab python

```python
r = requests.post(
  "http://0.0.0.0:8080",
  json={"jsonrpc": "2.0", "method": "transactions.create", "id": 31,
        "params": {
            "recipientId": "AMv3iLrvyvpi6d4wEfLqX8kzMxaRvxAcHT" # the address you want to send to,
            "amount": "200000000", # 2 ARK * 100,000,000 arktoshi/ARK
            "passphrase": "craft imitate step mixture patch forest volcano business charge around girl confirm"
      },
    }
  )
```

:::

::::

This endpoint will return a transaction object similar to the following:

```json
{
  "amount": "200000000",
  "fee": 10000000,
  "id": "b60525042509586151fac7e3c70fe7a75ca00ffdf9988f20d0c1c0f3db798e86",
  "recipientId": "AMv3iLrvyvpi6d4wEfLqX8kzMxaRvxAcHT",
  "senderPublicKey": "038082dad560a22ea003022015e3136b21ef1ffd9f2fd50049026cbe8e2258ca17",
  "signature": "304402204236a59a19266b5969e18f87d6d4b178180277c79beb5d4b42f272ee03fba0b702200c6c97ed5ab2e6231f3dce5cdfe740e72261b460f896fb4c5be0ca7ce6244c67",
  "timestamp": 54903765,
  "type": 0
}
```

Importantly, this does **not** mean your transaction has been added to the blockchain! To do so, we'll need to submit a second request to `transactions.broadcast`.

This request should have a `params` object with a single key: the `id` key returned by `transactions.create`.

With the returned ID, our second request body looks like this:

:::: tabs

::: tab javascript

```js
const body = {
  jsonrpc: "2.0",
  method: "transactions.broadcast",
  id: 31
  params: {
    id: "b60525042509586151fac7e3c70fe7a75ca00ffdf9988f20d0c1c0f3db798e86"
  }
}
```

:::

::: tab golang

```go
package main

...

type broadcast struct {
    Id string `json:"id"`
}

func main() {
    resp, err := post(
        "http://0.0.0.0:8080",
        request{
            Jsonrpc: "2.0",
            Method:  "transactions.broadcast",
            ID:      31,
            Params: broadcast{
                Id: "b60525042509586151fac7e3c70fe7a75ca00ffdf9988f20d0c1c0f3db798e86",
            },
        },
    )
}

```

:::

::: tab python

```python
r = requests.post(
  "http://0.0.0.0:8080",
  json={"jsonrpc": "2.0", "method": "transactions.broadcast", "id": 31,
        "params": {
            "id": "b60525042509586151fac7e3c70fe7a75ca00ffdf9988f20d0c1c0f3db798e86",
      },
    }
  )
```

:::

::::

If we receive the same transaction object as the call to `transactions.create`, our transaction was successful. Within your application, one way to confirm the result is to check that `result.id` matches the transaction ID you provided to the endpoint.

Otherwise, the `errors` key will contain more information on what went wrong.

## Check Transaction Confirmations

Checking the number of confirmations a transaction can be done via JSON-RPC by the `transactions.info` method.

The command accepts one parameter: the `id` of the transaction to query. A sample request could look like:

:::: tabs

::: tab javascript

```js
const body = {
  jsonrpc: "2.0",
  method: "transactions.info",
  id: 9,
  params: {
    id: "b60525042509586151fac7e3c70fe7a75ca00ffdf9988f20d0c1c0f3db798e86"
  }
}
```

:::

::: tab golang

```go
package main

...

type transactionInfo struct {
    Id string `json:"id"`
}

func main() {
    resp, err := post(
        "http://0.0.0.0:8080",
        request{
            Jsonrpc: "2.0",
            Method:  "transactions.info",
            ID:      31,
            Params: transactionInfo{
                id: "b60525042509586151fac7e3c70fe7a75ca00ffdf9988f20d0c1c0f3db798e86",
            },
        },
    )
}

```

:::

::: tab python

``` python
r = requests.post(
  "http://0.0.0.0:8080",
  json={"jsonrpc": "2.0", "method": "transactions.info", "id": 31,
        "params": {
            "id": "b60525042509586151fac7e3c70fe7a75ca00ffdf9988f20d0c1c0f3db798e86",
      },
    }
  )
```

:::

::::

If successful, you'll receive a response similar to the following:

```json
{
  "amount": 200000000,
  "blockId": "16888082711050311577",
  "confirmations": 27,
  "fee": 10000000,
  "id": "b60525042509586151fac7e3c70fe7a75ca00ffdf9988f20d0c1c0f3db798e86",
  "recipient": "AMv3iLrvyvpi6d4wEfLqX8kzMxaRvxAcHT",
  "sender": "ARAibxGqLQJTo1bWMJfu5fCc88rdWWjqgv",
  "signature": "304402204236a59a19266b5969e18f87d6d4b178180277c79beb5d4b42f272ee03fba0b702200c6c97ed5ab2e6231f3dce5cdfe740e72261b460f896fb4c5be0ca7ce6244c67",
  "timestamp": {
    "epoch": 54903765,
    "human": "2018-12-17T00:02:45.000Z",
    "unix": 1545004965
  },
  "type": 0,
  "version": 1
}
```

This particular transaction has 27 confirmations, meaning you can be confident that this transaction has been irreversibly included in the blockchain. Most exchanges use a minimum of 51 confirmations, which is one complete round.
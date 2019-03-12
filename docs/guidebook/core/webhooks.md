---
title: "Webhooks"
---

# Webhooks

[[toc]]

## Introduction

With the release of Ark Core 2.0, a new feature was introduced, called [Webhooks](https://en.wikipedia.org/wiki/Webhook) which allows you to create more flexible and automated systems while also reducing traffic/load on your server.

## Authorization

Before we start working on the implementation of a webhook handler, we will take a look at handling authorization.

To guarantee that only your server is allowed to send data to your webhook handler, an authorization token is generated on creation of a webhook. **The generated token will only be returned once and not be visible again.**

To generate an authorization token, you need to [create a webhook](/api/webhooks/#create-a-webhook).

Lets take the following token as an example `fe944e318edb02b979d6bf0c87978b640c8e74e1cbfe36404386d33a5bbd8b66` which is 64 characters long and breaks down into 2 parts at 32 characters length each.

The first 32 characters will be stored in the database and sent to you as a header `Authorization: fe944e318edb02b979d6bf0c87978b64` via a POST request.

The last 32 characters `0c8e74e1cbfe36404386d33a5bbd8b66` need to be stored by you and will serve as a way for you to verify that the request is authorized.

## Handling Webhooks

Now that we know how the token is structured and what it is used for we can continue with implementing a webhook handler.

A webhook handler is just a simple POST endpoint that you need to implement at the URL you specified when creating a webhook.

:::: tabs

::: tab javascript

```js
const webhookToken =
  "fe944e318edb02b979d6bf0c87978b640c8e74e1cbfe36404386d33a5bbd8b66";

const verification = "0c8e74e1cbfe36404386d33a5bbd8b66";

server.post("/blocks", jsonParser, (req, res) => {
  // This will be fe944e318edb02b979d6bf0c87978b64
  const authorization = req.headers["authorization"];

  // This will be authorization + verification
  const token = authorization + verification;

  // Make sure we block access if the token is invalid...
  if (token !== webhookToken) {
    return res.status(401).send("Unauthorized!");
  }

  // the datetime of when the webhook was sent
  console.log(req.body.created);

  // the data the webhook transfered, e.g. a block struct
  console.log(req.body.data);

  // the type of event that was sent, e.g. block.forged
  console.log(req.body.type);

  // do something with the above req.body data

  return res.status(200).send("Hello Webhook!");
});
```

:::

::: tab golang

```go
package main

import (
    "fmt"
    "log"
    "net/http"
)

const (
    webhookToken = "fe944e318edb02b979d6bf0c87978b640c8e74e1cbfe36404386d33a5bbd8b66"
    verification = "0c8e74e1cbfe36404386d33a5bbd8b66"
)

func validateOrigin(next http.Handler) http.Handler {
    return func(w http.ResponseWriter, r *http.Request) {
        if r.Header.Get("authorization") + verification != webhookToken {
            w.WriteHeader(http.StatusUnauthorized)
            w.Write([]byte("Unauthorized!"))
            return
        }
        return next(w, r)
    }
}

func handler(w http.ResponseWriter, r *http.Request) {
    decoder := json.NewDecoder(r.Body)

    var resp Response // some defined DTO
    err := decoder.Decode(&resp)
    if err != nil {
        handle(w, err)
    }

    // do something with the received block/transaction/wallet

}

func main() {
    http.HandleFunc("/blocks", validateOrigin(handler))
    log.Fatal(http.ListenAndServe(":8080", nil))
}

```

:::

::: tab python

```python
from flask import Flask, request
from werkzeug.exceptions import Unauthorized
from functools import wraps

app = Flask(__name__)

verification = "0c8e74e1cbfe36404386d33a5bbd8b66"
token = "fe944e318edb02b979d6bf0c87978b640c8e74e1cbfe36404386d33a5bbd8b66"

# This should be middleware if this app is dedicated to webhooks
def token_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if request.headers.get("authorization") + verification != token:
            raise Unauthorized("Unauthorized!")
        return f(*args, **kwargs)
    return decorated_function

@app.route("/blocks")
@token_required
def handle_block():
    block = request.get_json()
    # do something with the block

if __name__ == "__main__":
    app.run(debug=True, port=5000)
```

:::

::::

Let's break down the steps we took here:

- Grab the `Authorization` header.
- Create the full token based on the `Authorization` header and `Verification` string.
- Deny access if the `full token` does not equal the `webhook token`.
- Log and process the request body if the `full token` is valid.

## Closing

Now you should know enough on how to secure and handle incoming webhooks. Head over to the [API docs](/api/webhooks/) for webhooks to get started.

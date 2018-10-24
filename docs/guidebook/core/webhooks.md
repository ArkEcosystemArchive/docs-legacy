---
title: "Webhooks"
---

# Webhooks

[[toc]]

## Introduction

With the release of Ark Core 2.0 a new feature was introduced, called [Webhooks](https://en.wikipedia.org/wiki/Webhook) which allows you to create more flexible and automated systems while also reducing traffic/load on your server.

## Authorization

Before we start working on the implementation of a webhook handler we will take a look at handling authorization.

In order to guarantee that only your server is allowed to send data to your webhook handler, an authorization token is generated on creation of a webhook. **The generated token will only be returned once and not be visible again.**

Lets take the following token as an example `fe944e318edb02b979d6bf0c87978b640c8e74e1cbfe36404386d33a5bbd8b66` which is 64 characters long and breaks down into 2 parts at 32 characters length each.

The first 32 characters will be stored in the database and sent to you as a header `Authorization: fe944e318edb02b979d6bf0c87978b64` via a POST request.

The last 32 characters `0c8e74e1cbfe36404386d33a5bbd8b66` need to be stored by you and will serve as a way for you to verify that the request is authorized.

## Handling Webhooks

Now that we know how the token is structured and what it is used for we can continue with implementing a webhook handler.

A webhook handler is just a simple POST endpoint that you need to implement at the URL you specified when creating a webhook.

```js
const webhookToken = 'fe944e318edb02b979d6bf0c87978b640c8e74e1cbfe36404386d33a5bbd8b66'

const verification = '0c8e74e1cbfe36404386d33a5bbd8b66'

server.post('/blocks', jsonParser, (req, res) => {
    // This will be fe944e318edb02b979d6bf0c87978b64
    const authorization = req.headers['authorization']

    // This will be authorization + verification
    const token = authorization + verification

    // Make sure we block access if the token is invalid...
    if (token !== webhookToken) {
      return res.status(401).send('Unauthorized!')
    }

    // the datetime of when the webhook was sent
    console.log(req.body.created)

    // the data the webhook transfered, e.g. a block struct
    console.log(req.body.data)

    // the type of event that was sent, e.g. block.forged
    console.log(req.body.type)

    // do something with the above req.body data

    return res.status(200).send('Hello Webhook!')
})
```

Let's break down the steps we took here:

- Grab the `Authorization` header
- Create the full token based on the `Authorization` header and `Verification` string
- Deny access if the `full token` does not equal the `webhook token`
- Log and process the request body if the `full token` is valid

## Closing

This is all you need to know about how to secure and handle webhooks. Head over to the [API docs](/api/webhooks/) for webhooks to get started.

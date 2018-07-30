---
title: "Authentication"
---

# Authentication

[[toc]]

In order to communicate with the Webhooks API you will need to provide the token you configured on your node through the `Authorization` header. Authenticating with an invalid token will return `401 Unauthorized`.

## Headers

| Name          | Type   | Description                                          | Required           |
|---------------|:------:|------------------------------------------------------|:------------------:|
| Authorization | string | The webhook token defined in the node configuration. | :white_check_mark: |

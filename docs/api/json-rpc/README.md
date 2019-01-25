---
title: "JSON-RPC"
---

# Introduction

::: warning
All HTTP requests have to be sent with the `Content-Type: application/json` header. If the header is not present, it will result in malformed responses or request rejections.
:::

The JSON-RPC was created to aid organizations with the integration of Ark in their existing RPC based infrastructure. If you do not have anay restrictions in your IT architecture, we recommend using the [Public API](/api/public/v2) over the JSON-RPC. All operations provided by the JSON-RPC can be performed using the public API.

The formal specification for the JSON-RPC API is found here. For [examples](/exchanges/json-rpc.md) and [recommendations](/exchanges/json-rpc-quick.md) follow the links.

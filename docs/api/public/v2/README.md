---
title: "Public API 2.0"
---

# Public API 2.0: Introduction

::: warning
All HTTP requests have to be sent with the `Content-Type: application/json` header. If the header is not present it will result in malformed responses or request rejections.
:::

This describes the resources that make up the official Public API v2. If you have any problems or requests please [open an issue](https://github.com/ArkEcosystem/core/issues/new/choose).

## Current version

By default, all requests to a relay receive the v1 version of the Public API. We encourage you to explicitly request this version via the `API-Version` header.

You can also set the API version by adding the `v2` prefix:

```
GET /api/v2/blocks
```

## Pagination

Requests that return multiple items will be paginated to 100 items by default. You can specify further pages with the `?page` parameter. For some resources, you can also set a custom page size up to 100 with the `?limit` parameter. Note that for technical reasons not all endpoints respect the `?limit` parameter.

## Public Testing Relay

If you are not running a relay yourself you can use [https://node1.arknet.cloud/api/v2/](https://node1.arknet.cloud/api/v2/) to test API calls. Happy developing!

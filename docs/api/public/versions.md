---
title: "Versions"
---

# Versions

There are two stable versions of the Public API: the Public API v1 and the Public API v2.

When using the Public API v1, we encourage you to request v1 via the `API-Version: 1` header. Similarly, use `API-Version: 2` to request API v2.

## Current version

By default, all requests to a relay receive the v1 version of the Public API. We encourage you to explicitly request this version via the `API-Version` header.

You can also set the API version by adding the `v2` prefix:

```
GET /api/v2/blocks
```

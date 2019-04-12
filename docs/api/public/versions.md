---
title: "Versions"
---

# Versions

There are two stable versions of the Public API: the Public API v1 and the Public API v2.

When using the Public API v1, we encourage you to request v1 via the `API-Version: 1` header. Similarly, use `API-Version: 2` to request API v2.

## Current Version

By default, all requests to a relay receive the v1 version of the Public API. We encourage you to request this version via the `API-Version` header explicitly.

You can also set the API version by adding the `v2` prefix:

```
GET /api/v2/blocks
```

API v1 has been officially deprecated. Documentation on this API may be found in the [Archive](/archive/api/public-v1). If you are running v1 nodes or services dependent on the v1 API; attempt to migrate as soon as possible. You can read more on migration [here](/exchanges/migrating-to-ark-core.md).

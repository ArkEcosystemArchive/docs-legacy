---
title: "JSON-RPC"
---

# JSON RPC

[[toc]]

<p align="center">
    <img src="https://raw.githubusercontent.com/ArkEcosystem/ARK-JSON-RPC/master/banner.png" />
</p>

> A [JSON-RPC 2.0 Specification](http://www.jsonrpc.org/specification) compliant server to interact with the ARK blockchain.

## Installation

If you would like to use the JSON-RPC server, head over to your `~/.ark/config/plugins.js` and look for `@arkecosystem/json-rpc` which is installed by default. _Just change it to the following and start your ARK Core._

```js
'@arkecosystem/core-json-rpc': {
  enabled: true
}
```

## Remote Connections

**All calls should be made from the server where JSON-RPC is running at (i.e., `localhost` or `127.0.0.1`). The JSON-RPC server should never be publicly accessible.**

If you wish to access the JSON-RPC server from a remote address, you can whitelist the address in your `~/.ark/config/plugins.js` like the following.

```js
'@arkecosystem/core-json-rpc': {
  whitelist: ['192.168.1.*', '10.0.*.*']
}
```

If you do want to allow access from all remotes, set `allowRemote` to `true` in your `~/.ark/config/plugins.js` like the following.

```js
'@arkecosystem/core-json-rpc': {
  allowRemote: true
}
```

**This can be dangerous as it allows everyone to access your JSON-RPC server!**

## Security

If you discover a security vulnerability within this package, please send an e-mail to [security@ark.io](mailto:security@ark.io). All security vulnerabilities will be promptly addressed.

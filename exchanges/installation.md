---
title: "Installation"
---

# Installation

[[toc]]

::: danger
All calls should be made from the server where RPC is running at ( i.e., `localhost` or `127.0.0.1` ). The RPC server should never be publicly accessible. If you wish to access ark-rpc from a remote address, you can whitelist the address with `--allow <address>`. Addresses allow you to use wildcards, eg. `192.168.1.*` or `10.0.*.*`.
:::

If you do want to allow access from all remotes, start ark-rpc with the `--allow-remote` command-line switch. This can be dangerous.

## Installing and running the RPC server

- install Node.JS ( https://nodejs.org/en/download/package-manager/)
- install forever `npm install -g forever`
- install ark-rpc: `npm install arkecosystem/ark-rpc#master`
- start RPC server: `ark-rpc --port 8000` (default port is 8080)

## Docker installation

If you would like to run from a docker environment, you will first need to build the container by running:

```bash
docker build -t ark-rpc .
```

You will need to run the container with the `--allow-remote` option to allow the host machine to access the container.

```bash
docker run -d -p 8080:8080 ark-rpc --allow-remote
```

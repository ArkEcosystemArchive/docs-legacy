---
title: "Troubleshooting"
---

# Troubleshooting

If you're encountering some oddities in the API, here's a list of resolutions to some of the problems you may be experiencing.

## Why am I getting a 404 error on a resource that exists?

Typically, this means that the node you are sending your requests to is out of sync and missing data that exists on other nodes that are in sync.

To troubleshoot, ensure you're querying a node that is in sync and third-party application restrictions are not blocking access.

## Why am I not seeing all my results?

Most API calls accessing a list of resources (e.g., blocks, transactions, etc.) support pagination. If you're making requests and receiving an incomplete set of results, you're probably only seeing the first page. You'll need to request the remaining pages in order to get more results.

It's important to not try and guess the format of the pagination URL. Not every API call uses the same structure. Instead, extract the pagination information from the `meta` field, which is sent with every request.

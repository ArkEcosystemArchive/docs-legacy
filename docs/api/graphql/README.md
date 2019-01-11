---
title: GraphiQL
---

# Introduction

[GraphQL](https://graphql.org/) *is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.*

Using GraphQL instead of REST endpoints, you may precisely describe what data you exactly need. Using a query language as API allows Ark Core to determine the best way to obtain and transform that data, while only transmitting precisely what was requested for, saving bandwidth and lowering latency.

## Endpoints

By default (if enabled) an Ark Core node serves a GrapQL endpoint at `{NODE_IP}:{NODE_PORT}/graphql` and a GraphiQL endpoint at `{NODE_IP}:{NODE_PORT}/graphiql`.

## GraphiQL

Ark Core is bundled with GraphiQL; an IDE made specifically to explore GraphQL endpoints against live data. At this moment there is no public GraphQL endpoint accessible.
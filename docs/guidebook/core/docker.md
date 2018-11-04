---
title: "Docker"
---

# Docker

[[toc]]

Required prerequisites to be installed: *Docker Engine, Docker Compose*

## Use case #1

> Run PostgreSQL container, use NodeJS from your local environment.

::: danger
PostgreSQL port is mapped to your localhost, so you should not have PostgreSQL installed locally.
:::

```bash
cd docker/development
docker-compose up
```

To run the containers on the background:

```bash
docker-compose up -d
```

*In case you need to start with clean DB:*

```bash
docker-compose down -v
docker-compose up -d
```

## Use case #2

> Run PostgreSQL container, build and run Ark-Core container.

::: tip
Along with PostgreSQL container, now you have also NodeJS container which mounts your local ark-core git folder inside the container and installs all NPM prerequisites.
:::

```bash
cd docker/$NETWORK (NETWORK = testnet || devnet)
docker-compose up -d
```

*You can now enter your ark-core container and use nodejs in a Docker container (Linux environment).*

```bash
docker exec -it ark-$NETWORK-core bash
```

*Need to start everything from scratch and make sure there aren't any cached containers, images or volumes left, just use **purge_all.sh** script.*

::: warning
**Current files/preset are not Production ready. Official Production Ark-Core Docker images will be released soon after Ark-Core v2 goes live**.
:::

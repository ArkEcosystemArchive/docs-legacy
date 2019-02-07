---
title: "Docker"
---

# Docker

::: tip
Prerequisites to be installed:

- [Docker Engine](https://docs.docker.com/install/linux/docker-ce/ubuntu/)
- [Docker Compose](https://docs.docker.com/compose/)
  
:::

## Introduction

Docker is the de facto industry standard for packaging applications into a container. By doing so, all dependencies, such as the language runtimes, operating system, and libraries are combined with the product.

Different cloud providers offer specific products to host your Docker containers, such as:

- [Google App Engine](https://cloud.google.com/appengine/)
- [AWS Elastic Beanstalk](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/Welcome.html)
- [Azure](https://azure.microsoft.com/en-us/services/kubernetes-service/docker/)
- [Digital Ocean](https://www.digitalocean.com/products/one-click-apps/docker/)

Orchestrators with Docker as a first class citizen:

- [Kubernetes](https://kubernetes.io/)
- [Nomad](https://www.nomadproject.io/)
- [Mesos](http://mesos.apache.org/)

## Generate the Configurations

Ark Core include several `Dockerfile` and `docker-compose.yml` templates to ease development. They can be used to generate different configurations, depending on the network and token.

For instance, you could use this command:

```bash
yarn docker ark
```

This command creates a new directory (`docker`) that contains 1 folder per network.

## Containerize the Persistent Store

**Run a PostgreSQL container while using NodeJS from your local environment.**

This configuration is well suited when you are not developing Ark Core, but instead working with the API. By tearing down the PostgreSQL container, you reset the Nodes blockchain.

::: warning
The PostgreSQL main port is mapped to your host's default Postgresql port, so you should not have PostgreSQL installed locally.
:::

```bash
cd docker/development
docker-compose up
```

To run the containers in the [background](https://docs.docker.com/engine/reference/run/):

```bash
docker-compose up -d
```

*In case you need to start with a clean Database:*

```bash
docker-compose down -v
docker-compose up -d
```

## Serve Ark Core as a collection of Containers

**Run a PostgreSQL container, build and run Ark-Core using a mounted volume.**

When a container is built, all files are copied inside the container. It cannot interact with the host's filesystem unless a directory is specifically [mounted](https://docs.docker.com/storage/volumes/) during container start. This configuration works well when developing Ark Core itself, as you do not need to rebuild the container to test your changes.

::: tip
Along with PostgreSQL container, now you also have a NodeJS container which mounts your local ark-core git folder inside the container and installs all NPM prerequisites.
:::

```bash
cd docker/$NETWORK      # (NETWORK = testnet || devnet)
docker-compose up -d
```

*You can now enter your ark-core container and use NodeJS in a Docker container (Linux environment).*

```bash
docker exec -it ark-$NETWORK-core bash
```

*Need to start everything from scratch and make sure there are no remaining cached containers, images or volumes left? Just use the **purge_all.sh** script.*

::: warning
**Current files/presets are not Production ready. Official Production Ark-Core Docker images will be released soon after Ark-Core v2 goes live**.
:::

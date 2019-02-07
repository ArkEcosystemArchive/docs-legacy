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

## Production

- ARK Core Production ready Docker images are now available at [Docker Hub](https://hub.docker.com/r/arkecosystem/core)

::: warning
By default for both `relay` and `forger` modes, PostgreSQL is run in a separate container. It's port gets mapped to your `localhost`, so you should not have PostgreSQL running locally.
:::

### Run Relay only 

```bash
cd docker/production/$NETWORK     # (NETWORK = devnet || mainnet)
docker-compose up -d
```  

This will run two separate containers. One for Core itself and another one for PostgreSQL.

### Run Relay and a Forger

::: tip
Prerequisites to be installed:
- [OpenSSL](https://www.openssl.org/)  
:::

Two additional steps are needed to be able to run a forger:

1. `MODE` has to be set to `forger` `(MODE=forger)` in your `$NETWORK.env` file.

```bash
cd docker/production/$NETWORK     # (NETWORK = devnet || mainnet)
sed -i 's/^MODE=relay/MODE=forger/g $NETWORK.env
```

2. Configure your delegate secret and password. *Just use the additional script **enc.sh**.*  

```bash
bash enc.sh
```
You will be asked to enter your delegate secret, followed by entering your password twice.
Script will create a new folder named `enc`, containing set of encrypted public and private keys.

::: warning
Folder `enc` is needed during core container startup. After making sure your `forger` is up and running it is preferably to delete it. The disadvantage of this would be that if you your server gets rebooted or simply core container restarted, you will have repeat step 2.
:::

>Now let's run the forger:

```bash
docker-compose up -d
```

This will fire up two separate containers. One for Core itself and another one for PostgreSQL.

### Custom settinings

::: tip
If you prefer to use custom DB Name, DB User and DB Password simply adjust variables `POSTGRES_PASSWORD`, `POSTGRES_USER`, `POSTGRES_DB` `(file=docker-compose.yml)` and `CORE_DB_PASSWORD`, `CORE_DB_USERNAME` and `CORE_DB_DATABASE` `(file=$NETWORK.env)` correspondingly.
:::

**In case you want to use a remote PostgreSQL server simply adjust variable `CORE_DB_HOST` in your `$NETWORK.env` and run only Core container:

```bash
cd docker/production/$NETWORK     # (NETWORK = devnet || mainnet)
docker-compose up -d core
```

### FAQ 

- How do i start with empty DB?
 * Just execute the following code:
   ```bash
   docker-compose down -v
   docker-compose up -d
   ```
- Where are the config files and logs located?
 * ARK Core container mounts by default the following local paths as volumes:
   ```bash
   ~/.config/ark-core
   ~/.local/share/ark-core
   ~/.local/state/ark-core
   ```
   Having that said, your config files are locally accessible under:
   ```bash
   ~/.config/ark-core/$NETWORK/
   ```
   Pool database as well as db snapshots are locally accessible under:
   ```bash
   ~/.local/share/ark-core/$NETWORK/
   ```
   Log files are locally accessible under:
   ```bash
   ~/.local/state/ark-core/$NETWORK/
   ```
   Alternative way of following the logs would be, by using the command:
   ```bash
   docker exec -it core-$NETWORK pm2 logs
   ```
- How do i start everything from scratch?
 * Just use the **`purge_all.sh`** script. 
 
### Building your own ARK Core Docker image 

Custom Docker image builds of ARK Core are possible by using the file `docker-compose-build.yml`.
Make your own modifications of ARK Core source code and run your custom container by executing:

```bash
cd docker/production/$NETWORK     # (NETWORK = devnet || mainnet)
docker-compose -f docker-compose-build.yml up -d
``` 

This will build your ARK Core Docker image and run two separate containers. One for Core itself and another one for PostgreSQL.

## Development

### Generate the Configurations

Ark Core include several `Dockerfile` and `docker-compose.yml` templates to ease development. They can be used to generate different configurations, depending on the network and token.

For instance, you could use this command:

```bash
yarn docker ark
```

This command creates a new directory (`docker`) that contains 1 folder per network.

### Containerize the Persistent Store

**Run a PostgreSQL container while using NodeJS from your local environment.**

This configuration is well suited when you are not developing Ark Core, but instead working with the API. By tearing down the PostgreSQL container, you reset the Nodes blockchain.

::: warning
PostgreSQL is run in a separate container and it's port gets mapped to your `localhost`, so you should not have PostgreSQL running locally.
:::

```bash
cd docker/development/$NETWORK     # (NETWORK = testnet || devnet)
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

### Serve Ark Core as a collection of Containers

**Run a PostgreSQL container, build and run Ark-Core using a mounted volume.**

When a container is built, all files are copied inside the container. It cannot interact with the host's filesystem unless a directory is specifically [mounted](https://docs.docker.com/storage/volumes/) during container start. This configuration works well when developing Ark Core itself, as you do not need to rebuild the container to test your changes.

::: tip
Along with PostgreSQL container, now you also have a NodeJS container which mounts your local ark-core git folder inside the container and installs all NPM prerequisites.
:::

```bash
cd docker/development/$NETWORK      # (NETWORK = testnet || devnet)
docker-compose up -d
```

*You can now enter your ark-core container and use NodeJS in a Docker container (Linux environment).*

```bash
docker exec -it ark-$NETWORK-core bash
```

*Need to start everything from scratch and make sure there are no remaining cached containers, images or volumes left? Just use the **purge_all.sh** script.*

::: warning
**Development files/presets are not Production ready. Official Production Ark-Core Docker images are now available at [Docker Hub](https://hub.docker.com/r/arkecosystem/core) **.
:::

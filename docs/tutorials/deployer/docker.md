# Docker Deployments

Setting up a bridgechain can easily be accomplished using Docker. This provides the added advantage that you no longer need to run your node on Ubuntu 18.04.

## Installing Docker CE

Docker supports all major operating systems but functions best when ran and controlled from a Linux based distribution. You can find installation guides [here](https://docs.docker.com/install/).

## Clone the Deployer

The deployer is bundled with a Dockerfile and its dependencies, which we will build ourselves into an image. Clone the deployer to get started.

```bash
git clone git@github.com:arkecosystem/deployer
cd deployer
```

## Building the image

Inside `deployer/docker` you find the `Dockerfile` which specifies the build instructions for our image.

```docker
FROM ubuntu:xenial

ARG CONFIG_PATH=docker/config.json
ARG NODE_PORT=4100
ARG EXPLORER_PORT=4200
ARG USER=deployer

ENV USER $USER
ENV TERM linux

ENV DEPLOYER_HOME /home/$USER
ENV CONFIG_PATH $CONFIG_PATH
ENV NODE_PORT $NODE_PORT
ENV EXPLORER_PORT $EXPLORER_PORT
ENV NVM_DIR $DEPLOYER_HOME/.nvm

RUN apt-get update && \
    apt-get install -y jq git curl sudo

RUN useradd -m $USER && echo "$USER:$USER" | chpasswd && adduser $USER sudo && \
    echo "%$USER  ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

RUN echo "debconf debconf/frontend select Noninteractive" | sudo debconf-set-selections
RUN echo "#!/bin/sh\nexit 0" > /usr/sbin/policy-rc.d

USER $USER

COPY . $DEPLOYER_HOME
COPY ./docker/docker-entrypoint.sh /

RUN sudo chmod +x /docker-entrypoint.sh && \
    sudo chown $USER /docker-entrypoint.sh

RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash && \
    . $DEPLOYER_HOME/.nvm/nvm.sh && \
    nvm install 8.9.1 && \
    cd $DEPLOYER_HOME && \
    ./bridgechain.sh install-node --config "$CONFIG_PATH" --autoinstall-deps --non-interactive && \
    ./bridgechain.sh install-explorer --config "$CONFIG_PATH" --skip-deps --non-interactive

EXPOSE $NODE_PORT
EXPOSE $EXPLORER_PORT

ENTRYPOINT ["/bin/bash", "-c"]
CMD ["./docker-entrypoint.sh"]
```

To build the docker image, enter:

```bash
docker build -t $IMAGE_NAME .
```

Where IMAGE_NAME is whatever you want it to be. If you have a hub.docker.com account, `mydockerusername:deployer:latest` would be suitable so that you can push it to your registry later on.

## Running the deployer

To run your BridgeChain and associated services, execute:

```bash
$ docker run -p 4100:4100 -p 4200:4200 -d deployer

Node API (port forwarded): http://127.0.0.1:4100/api/ Explorer (port forwarded): http://127.0.0.1:4200/
```
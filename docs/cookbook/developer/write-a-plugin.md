# Ark Core Plugin

In this guide, you will find the information which can enable you to write a proper Ark Core plugin, for use in your own Ark deployments; both in the case of Ark Core nodes and your own Bridgechain nodes.

## Setup
Make sure you have an up-to-date version of the Ark Core repository
```sh
git clone https://github.com/ArkEcosystem/core
cd core/
```

Install yarn and lerna
```sh
npm i -g yarn #if you dont have yarn installed
yarn global add lerna #if you dont have lerna installed
```

Add ~/.yarn/bin to path
```sh
echo 'PATH=$PATH:~/.yarn/bin' >> ~/.profile
source ~/.profile
```

Add a submodule for the plugin skeleton
```sh
cd plugins/
git submodule add -f https://github.com/ArkEcosystem/core-plugin-skeleton
cd core-plugin-skeleton
```
## Configure
This is when you make changes to the plugin skeleton.

Make sure to modify the default names for the files:
 - README.md (header)
 - package.json (many fields)
 - lib/index.js (alias)
 - lib/defaults.js (exports)

Additionally, you should install all the dependencies for your plugin.

For this example, the above files will be changes to reflect the name of our plugin: demo-plugin.

We're also going to require express and build our own API.

After having changed the name of the plugin, make sure to run lerna bootstrap to expose the package name for scoped package installation
Run lerna bootstrap
```sh
lerna bootstrap
```

Add your dependencies **only to the specific plugin package**
```sh
lerna add --scope=@arkecosystem/demo-plugin express --dev
```

---
title: "Explorer"
---

# Explorer

<p align="center">
    <img src="https://github.com/ARKEcosystem/explorer/raw/master/ARKExplorer.png" />
</p>

> Designed and developed from the ground-up, using lean & fast developmental frameworks (Tailwind CSS & Vue.JS).

[![Build Status](https://badgen.now.sh/circleci/github/ArkEcosystem/explorer)](https://circleci.com/gh/ArkEcosystem/explorer)
[![Codecov](https://badgen.now.sh/codecov/c/github/arkecosystem/explorer)](https://codecov.io/gh/arkecosystem/explorer)
[![License: MIT](https://badgen.now.sh/badge/license/MIT/green)](https://opensource.org/licenses/MIT)

You can access it at [https://explorer.ark.io/](https://explorer.ark.io/).

## Build Setup

### 1. Clone the Repository

```bash
git clone https://github.com/ARKEcosystem/explorer
```

### 2. Install Dependencies

```bash
yarn install
```

### 3. Build for Production

#### 3.1 Mainnet

```bash
yarn build:mainnet
```

#### 3.2 Devnet

```bash
yarn build:devnet
```

#### 3.3 Custom

```bash
yarn build --network my-custom-network
```

#### 3.4 GitHub Pages

If you are going to host your explorer instance on GitHub Pages you will need to specify your base url in most cases as GitHub Pages serves repositories from sub-directories instead of sub-domains.

```bash
yarn build --base https://username.github.io/repository/
```

A running instance of the explorer on GitHub Pages can be found at https://arkecosystem.github.io/.

> This step is not required if you are hosting the explorer on your "root" repository which is usually your username https://username.github.io/.

#### 3.5 Run Express Server

You can run the explorer as an express server. This makes it a little more light-weight but not needing to have services such as apache or nginx.

```bash
EXPLORER_HOST="127.0.0.1" EXPLORER_PORT="4200" node express-server.js
```

> Keep in mind that this requires you to run your own server and a running instance of nginx.

### 4. Development

#### 4.1 Mainnet

```bash
yarn dev # or yarn dev:mainnet
```

#### 4.2 Devnet

```bash
yarn dev:devnet
```

#### 4.3 Custom

```bash
yarn dev --env.network=custom
```

### 5. History Mode

If you wish to remove the `/#/` from your URLs you can follow those steps https://router.vuejs.org/en/essentials/history-mode.html.

#### 5.1 Build

```bash
yarn build:mainnet --history
```

#### 5.2 Development

```bash
yarn dev --env.routerMode=history
```

## Running your own explorer

At ARK.io, we have a [mainnet](https://explorer.ark.io) and [devnet](https://dexplorer.ark.io) explorer running to show the current state of the network and what is happening on it. In addition, there is are official mirrors for the mainnet explorer too, which you can find on different services such as [GitHub pages](https://arkecosystem.github.io/explorer/) and [Netlify](https://ark-explorer.netlify.com/#/).

To run your own explorer, or an additional mirror of the ARK explorer, there are a couple of ways to achieve this:

### GitHub Pages
Our [explorer mirror](https://arkecosystem.github.io/explorer/) runs on GitHub pages and is simply said a branch that contains the `dist` directory that is generated when you build the explorer. To run the explorer on your own GitHub pages website, you can do one of the following:

#### GitHub Pages root repository
Your root repository for GitHub pages is one named `username.github.io`, for example [arkecosystem.github.io](https://github.com/ArkEcosystem/arkecosystem.github.io) (repo). After you've built the explorer by running `yarn build`, you can push the contents of the `dist` folder to your root repository and it will be served on `username.github.io`. That's it!

#### GitHub Pages with variable repository
When you don't use a root repository for GitHub pages (e.g. because it's already in use), you can still have it hosted in a sub-directory of your GitHub pages website. If you for example create a repository called `my-explorer`, it will become available on `username.github.io/my-explorer`. If you would then build the explorer by running `yarn build --base https://username.github.io/my-explorer/` and push the contents of the generated `dist` files to your repository `my-explorer`, it will be served on your GitHub pages website. The additional `--base` parameter is needed to point the explorer to the correct url, as it will use the root domain by default.

### Netlify
The explorer is also compatible with [Netlify](https://www.netlify.com). In order to run it on there, you'll need to:

1. link your explorer repository
2. choose the `master` branch
3. set `yarn build:mainnet` or (`devnet`, depending on what you need) as build command
4. set `dist` as publish directory
5. deploy, and your explorer will become visible on your netfily url

### Express Server
You can run the explorer as an express server. This makes it a little more light-weight but not needing to have services such as apache or nginx.

```bash
EXPLORER_HOST="127.0.0.1" EXPLORER_PORT="4200" node express-server.js
```

### ARK Core Plugin
If you run an ARK relay, you can also run an explorer as a core plugin. For this you'll need to follow the following steps:

1. Install the core-explorer package: `yarn global add @arkecosystem/core-explorer`
2. To enable the plugin, add `'@arkecosystem/core-explorer': {}` to the end of your `~/.config/ark-core/<mainnet|devnet|testnet>/plugins.js` file. After this you will need to point the plugin to a directory where it can find the built explorer files. For this you need to edit your `~/.config/ark-core/<mainnet|devnet|testnet>/.env` file and add a `CORE_EXPLORER_PATH` variable followed by the path to your explorer files. This means that you need to build the explorer first, and send the `dist` folder over to your server and use its location for the `CORE_EXPLORER_PATH` variable (for example `CORE_EXPLORER_PATH=/home/ark/explorer/dist/`).
3. Restart the relay and your explorer will become available on your node's ip on port 4200. This will be indicated by a message similar to `Explorer is listening on http://0.0.0.0:4200.` in your logs. For further customizations, the `.env` variables `CORE_EXPLORER_HOST` and `CORE_EXPLORER_PORT` can be set (e.g. to change the port).

### General website hosting
You can also run an explorer on any other server (e.g. at a website hosting company), as long as a service like `nginx` or `apache` is installed. The instructions on how to get it up and running will differ per service, but in general it comes down to having the contents of the `dist` folder being served on your website. This could be as easy as having it put inside a `www` or `html` folder, to having to specify configurations with `nginx` or another service. Keep in mind that if you run the explorer from a sub-directory, that you will need to build with the `--base` parameter. You can find more information on this in the README document in the [explorer repository](https://github.com/ArkEcosystem/explorer).

## Testing

```bash
$ yarn test
```

## Security

If you discover a security vulnerability within this package, please send an e-mail to security@ark.io. All security vulnerabilities will be promptly addressed.

## Contributing

- If you find any bugs, submit an [issue](https://github.com/ARKEcosystem/explorer/issues) or open a [pull-request](https://github.com/ARKEcosystem/explorer/pulls), helping us catch and fix them.
- Engage with other users and developers on the [ARKEcosystem Slack](https://ark.io/slack/).
- Join our [gitter](https://gitter.im/ark-developers/Lobby).
- [Contribute bounties](https://github.com/ARKEcosystem/bounty-program).

## Credits

- [Brian Faust](https://github.com/faustbrian)
- [Lúcio Rubens](https://github.com/luciorubeens)
- [Alex Barnsley](https://github.com/alexbarnsley)
- [All Contributors](https://github.com/ARKEcosystem/explorer/contributors)

## License

[MIT](https://github.com/ARKEcosystem/explorer/blob/master/LICENSE) © [ARK Ecosystem](https://ark.io)

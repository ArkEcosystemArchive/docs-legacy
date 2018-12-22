---
title: "Ark Desktop Wallet v2.x.x"
---

# Desktop Wallet

![Ark Desktop](./assets/desktop/banner.png)

[![Build Status](https://travis-ci.org/ArkEcosystem/desktop-wallet.svg?branch=master)](https://travis-ci.org/ArkEcosystem/desktop-wallet)
[![Github Latest Release](https://img.shields.io/github/release/ArkEcosystem/desktop-wallet.svg)](https://github.com/ArkEcosystem/desktop-wallet/releases/latest)
[![Github Downloads](https://img.shields.io/github/downloads/ArkEcosystem/desktop-wallet/latest/total.svg?logo=github)](https://github.com/ArkEcosystem/desktop-wallet/releases/latest)
[![Gitter Room](https://img.shields.io/gitter/room/ark-developers/Lobby.svg?logo=gitter-white&colorB=e53467)](https://gitter.im/ark-developers/Lobby)

### Pinned: Help us with translations
Collaborate with other translators on [our Transifex project](https://www.transifex.com/ark-ecosystem/ark-desktop-wallet/) and help us get wallet translated in other languages.

### More information
[Detailed overview of the Desktop Wallet](/cookbook/usage-guides/how-to-use-ark-desktop-wallet.md)

## Build

You will need to use
 - [Git](https://git-scm.org)
 - [NodeJS](https://nodejs.org) 9 LTS
 - [yarn](https://yarnpkg.com)

If you have NodeJS installed, the best way to install yarn is by running
```bash
npm install --global yarn
```

### Requirements
There are several tools required to successfully build the application. Installation details vary widely across different platforms.

#### Linux Debian/Ubuntu
```bash
sudo apt-get install build-essential libudev-dev libusb-1.0-0-dev
```

### Mac OS X
```bash
xcode-select --install
```

### Windows
[Python 2.7](https://www.python.org/download/releases/2.7/)

[Visual Studio 2017](https://visualstudio.microsoft.com/downloads/) **Build Tools**

## Cloning, Installing and Running
```bash
git clone https://github.com/ArkEcosystem/desktop-wallet
cd desktop-wallet
yarn install
yarn dev
```

If you change branch, rebase code, fail an install or otherwise destabilize a lot of the file structure abruptly, *especially when `yarn dev` is running*, you may have to `rm -rf node_modules && yarn install` before running `yarn dev` again.

The above commands remove the `node_modules` installed with `yarn install`, then reinstalls the dependencies with `yarn install` and runs the development environment again with `yarn dev`.

In case that there are still errors which you cannot fix with the above commands when installing/building the application, please [submit a bug report at the Ark Desktop Wallet Github repo](https://github.com/ArkEcosystem/desktop-wallet/issues/new?template=Bug_report.md).

## Developing

The Ark Desktop Wallet uses [Electron](https://electronjs.org/), [VueJS](https://vuejs.org/), [TailwindCSS](https://tailwindcss.com/).

Making changes to Vue Components will hot-reload that component only; getting feedback on changes made is very fast.

### Notes
 - Webpack configurations are found in `.electron-vue`
 - Global CSS colors and classes can be found in `src/renderer/styles`
 - Tailwind produces global classes for most CSS attributes in `tailwind.js`
 - PostCSS can be used directly in `<style lang="postcss"></style>`
 - Third party components are located in `src/renderer/components/utils`
 - Vuex is used to persist stored data with `this.$store.dispatch()` events
 - Vue Router is in charge of displaying `src/renderer/pages` when `this.$router.push({...}) occurs`

## Contributing

* Read [contributing](../contribution-guidelines/)
* Engage with other users and developers on [Slack](https://ark.io/slack/) or [Discord](https://discord.gg/SUXMw8)
* Join to our [gitter](https://gitter.im/ark-developers/Lobby)

## Authors
 - Oleg Shcherbyna <Oleg@ark.io>
 - Juan Martín <Juan@ARK.io>
 - Lúcio Rubens <Lucio@ARK.io>
 - Alex Barnsley <Alex@ARK.io>
 - [Various Community Contributors](https://github.com/ArkEcosystem/desktop-wallet/graphs/contributors)

## License

The Ark Desktop Wallet is licensed under the MIT License - see the [LICENSE](/LICENSE.md) file for details.

## Security

If you discover a security vulnerability within this project, please send an e-mail to <security@ark.io>. All security vulnerabilities will be promptly addressed.

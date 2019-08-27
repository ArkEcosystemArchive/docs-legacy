---
title: "ARK Desktop Wallet v2.x.x"
---

# Desktop Wallet

![ARK Desktop](./assets/desktop/banner.png)

[![Build Status](https://badgen.now.sh/circleci/github/ARKEcosystem/desktop-wallet)](https://circleci.com/gh/ARKEcosystem/desktop-wallet)
[![Latest Version](https://badgen.now.sh/github/release/ARKEcosystem/desktop-wallet)](https://github.com/ARKEcosystem/desktop-wallet/releases)
[![License: MIT](https://badgen.now.sh/badge/license/MIT/green)](https://opensource.org/licenses/MIT)

## Download

[Latest Release](https://github.com/ARKEcosystem/ark-desktop/releases)

## Installing via Package Managers

### Arch Linux

Install via [AUR](https://aur.archlinux.org/packages/ark-desktop):

> Manjaro

```shell
pamac build ark-desktop
```

### Mac OS X

Install via [Homebrew](https://brew.sh/):

```shell
brew cask install ark-desktop-wallet
```

## Translations

Translations are part of our [ARK Development and Security Bounty Program](https://blog.ark.io/ark-development-and-security-bounty-program-a95122d06879).

Full translations are considered to be `Tier 3`, while grammar fixes, typos, etc. are considered to be `Tier 6`.

<details>
<summary>
  <h4>Full translations should involve 5 tasks</h4>
</summary>

- Create a pull request for the language you are going to translate. If you have doubts about something, use English to explain them.
- Translate the textual content of the application, using the [English language file](https://github.com/ARKEcosystem/desktop-wallet/blob/develop/src/renderer/i18n/locales/en-US.js) as the reference. To do that, a new file, with the language locale code should be created. The name of the file should be a valid [RFC 5646](https://tools.ietf.org/html/rfc5646) and should be located at `src/renderer/i18n/locales/LANGUAGE.js`. Thanks to [vue-i18n-extract](https://github.com/pixari/vue-i18n-extract), it is possible to execute `yarn i18n src/renderer/i18n/locales/LANGUAGE.js` to find suggestions of missing translations.
- Add the language to the [English language file](https://github.com/ARKEcosystem/desktop-wallet/blob/develop/src/renderer/i18n/locales/en-US.js) at the `LANGUAGES` key.
- Update the [date and time formats file](https://github.com/ARKEcosystem/desktop-wallet/blob/develop/src/renderer/i18n/date-time-formats.js) to include the short and long format that are used commonly by native speakers.
- Update the [number formats file](https://github.com/ARKEcosystem/desktop-wallet/blob/develop/src/renderer/i18n/number-formats.js) to include the preferred way of displaying currencies used commonly by native speakers.
- Add the language at the `I18N.enabledLocales` array at the [main configuration file](https://github.com/ARKEcosystem/desktop-wallet/blob/develop/config/index.js). This step is necessary to make the language would not be available.
- Execute the application. Go to the [ development section](https://github.com/ARKEcosystem/desktop-wallet#development) to learn how to install the requirements and execute it.

</details>

## Development

### Requirements

#### Ubuntu

In Ubuntu the development files of `libudev` are necessary:

```
sudo apt-get install libudev-dev libusb-1.0-0-dev
```

#### Windows

- Python 2.7
- Visual Studio 2017

#### Node 12

To download, head over to [here](https://nodejs.org/en/) and download Node 12.

If you already have npm installed, you can run

```
npm install -g n
sudo n 12
```

#### Yarn

Install the Yarn dependency manager

```
npm install -g yarn
```

### Commands

<details>
<summary>
  <h4>List of commands</h4>
</summary>

```bash
# Install Dependencies
yarn install

# Execute the application. Making changes in the code, updates the application (hot reloading).
yarn dev

# Lint all JS/Vue files in `src` and `__tests__`
yarn lint

# Lint, and fix, all JS/Vue files in `src` and `__tests__`
yarn lint:fix

# Check That All Dependencies Are Used
yarn depcheck

# Collect the Code and Produce a Compressed File
yarn pack

# Build Electron Application for Production (Current OS)
yarn build

# Build Electron Application for Production (Windows)
yarn build:win

# Build Electron Application for Production (Mac)
yarn build:mac

# Build Electron Application for Production (Linux)
yarn build:linux

# Run Unit and End-to-End Tests
yarn test

# Run Unit Tests
yarn test:unit

# Run Unit Tests and Generate and Display the Coverage Report
yarn test:unit:coverage

# Run Unit Tests and Watch for Changes to Re-Run the Tests
yarn test:unit:watch

# Run end-to-end tests, without building the application
yarn test:e2e

# Build the Application and Run End-to-End Tests
yarn test:e2e:full

# List What Translations Are Missing or Unused on a Specific Language. It Could Capture Suggestions That Are Not Accurate
yarn i18n 'src/renderer/i18n/locales/LANGUAGE.js'

# List What English Messages Are Missing or Unused (English Is the Default Language)
yarn i18n:en-US

# List What Translations Are Missing or Unused on Every Language
yarn i18n:all
```

</details>

## Plugins

You can find a plugin template [here](https://github.com/ark-ecosystem-desktop-plugins/template) which will help get you started.

### File Structure

All plugins require at least the following files in order to work: 

- package.json
- src/index.js

### Installation

Plugins are to be installed inside of the `~/.ark-desktop/plugins` folder.

**Note: If running in development mode, the path used is `~/.ark-desktop/plugins-dev`.**

### Permissions

You also have the option of using the following permissions:

<details>
<summary>
  <h4>Accessibility permissions</h4>
</summary>

#### COMPONENTS
Load in custom components.

To be used in combination with other permissions:

- ROUTES
- MENU_ITEMS
- AVATARS
- WALLET_TABS

#### ROUTES

Loads additional routes into the Desktop Wallet.

To be used in combination with other permissions:

- COMPONENTS
- MENU_ITEMS

#### MENU_ITEMS

Loads custom menu items into the Desktop Wallet for the sidebar.

To be used in combination with other permissions:

- ROUTES (required)
- COMPONENTS

#### AVATARS

Plugin contains custom components.

Can be used in combination with the COMPONENTS permission.

#### WALLET_TABS

Allow showing an additional tab/page on the Wallet screen.

Can be used in combination with the COMPONENTS permission.

#### THEMES

Allow additional custom themes for the Desktop Wallet.

</details>

<details>
<summary>
  <h4>Wallet API permissions</h4>
</summary>

#### UI_COMPONENTS

Allow access to the standard Desktop Wallet components used throughout. This gives plugins the ability to look and feel like they are a part of the application.

**`walletApi.components.Button`**

Allows access to all of the Button components:

- ButtonClipboard
- ButtonClose
- ButtonGeneric
- ButtonLayout
- ButtonLetter
- ButtonModal
- ButtonReload
- ButtonSwitch

**`walletApi.components.Collapse`**

Allows access to all of the Collapse components:

- Collapse
- CollapseAccordion

**`walletApi.components.Input`**

Allows access to all of the Input components:

- InputAddress
- InputCurrency
- InputDelegate
- InputFee
- InputField
- InputLanguage
- InputPassword
- InputSelect
- InputSwitch
- InputText

**`walletApi.components.ListDivided`**

Allows access to all of the ListDivided components:

- ListDivided
- ListDividedItem

**`walletApi.components.Loader`**

Allows access to the Loader component

**`walletApi.components.Menu`**

Allows access to all of the Menu components:

- MenuDropdown
- MenuDropdownAlternativeHandler
- MenuDropdownHandler
- MenuDropdownItem
- MenuNavigation
- MenuNavigationItem
- MenuOptions
- MenuOptionsItem
- MenuStep
- MenuStepItem
- MenuTab
- MenuTabItem

**`walletApi.components.TableWrapper`**

Allows access to the TableWrapper component

#### WEBFRAME

Allow showing remote URL pages within a frame. For example, showing the explorer within a page on the Desktop Wallet.

**`walletApi.components.WebFrame`**

#### EVENTS

Allow access to the Desktop Wallet events. For example, an event is triggered every time a new transaction is received.

**`walletApi.eventBus.on(event, callback)`**

Used to listen for an event

**`walletApi.eventBus.off(event, callback)`**

Used to disable listening for an event

**`walletApi.eventBus.emit(event, data)`**

Used to send data to trigger events elsewhere

#### AUDIO

Allow access to play audio from within the Desktop Wallet. For example, they could be used as an announcement for a new transaction.

**`AudioContext`**

#### ALERTS

Allow access to the Desktop Wallet alerts. For example, they could be used for notifications.

**`walletApi.alert.error(...)`**

Trigger an error notification alert

**`walletApi.alert.success(...)`**

Trigger an success notification alert

**`walletApi.alert.info(...)`**

Trigger an info notification alert

**`walletApi.alert.warn(...)`**

Trigger an warn notification alert

#### MESSAGING

Allow WebFrame to have access to a one-way messaging system. E.g. trigger a plugin change when a button is pressed on an external page inside the WebFrame component.

Run `sendToHost(event, data)` from within a WebFrame to trigger a messaging event.

**`walletApi.messages.on(action, eventCallback)`**

Listen for a message from within the WebFrame

#### STORAGE

Allow storing data within the Desktop Wallet, using a key-value pair.

**`walletApi.storage.get(key)`**

Get a single value from the store based on key

**`walletApi.storage.set(key, value)`**

Set a value in the store.

**`walletApi.storage.getOptions()`**

Get all values from the store for the plugin.

#### HTTP

Allow performing external web requests. E.g. accessing the API of a third-party provider. 

**Note: This relies on a whitelist being provided within the `package.json` file**

**`sandbox.walletApi.http.get(url, opts)`**

Perform a GET request

**`sandbox.walletApi.http.post(url, opts)`**

Perform a POST request

#### PEER_CURRENT

Allows access to the currently connected peer. E.g. to fetch additional data from the network.

**`sandbox.walletApi.peers.current.get(url, timeout = 3000)`**

Perform a GET request on the network

**`sandbox.walletApi.peers.current.post(url, timeout = 3000)`**

Perform a POST request on the network

#### PROFILE_CURRENT

Get the currently active profile. E.g. to provide a list of wallets for the user to choose from.

**`sandbox.walletApi.profiles.getCurrent()`**

#### PROFILE_ALL

Get all available profiles. E.g. to provide a list of wallets for the user to choose from which could be network independent.

**`sandbox.walletApi.profiles.all`**

</details>

## Security

If you discover a security vulnerability within this project, please send an e-mail to security@ark.io. All security vulnerabilities will be promptly addressed.

## Credits

- [Alex Barnsley](https://github.com/alexbarnsley)
- [ItsANameToo](https://github.com/ItsANameToo)
- [Juan A. Martín](https://github.com/j-a-m-l)
- [Lúcio Rubens](https://github.com/luciorubeens)
- [Mario Vega](https://github.com/mvega3)

## License

[MIT](LICENSE) © [ARK Ecosystem](https://ark.io)

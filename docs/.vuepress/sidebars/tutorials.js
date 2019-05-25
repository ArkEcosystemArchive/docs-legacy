module.exports = [
  ['/', 'Back to Table of Contents'],
  ['/tutorials/', 'Tutorials Home'],
  {
    title: 'Usage Guides',
    collapsable: false,
    children: [
      '/tutorials/usage-guides/how-to-use-ark-explorer',
      '/tutorials/usage-guides/how-to-use-ark-desktop-wallet',
      '/tutorials/usage-guides/how-to-use-ark-mobile-wallet',
      '/tutorials/usage-guides/how-to-vote-in-the-ark-desktop-wallet'
    ]
  },
  {
    title: 'Core',
    collapsable: false,
    children: ['/tutorials/core/how-to-use-milestones']
  },
  {
    title: 'Core Plugins',
    collapsable: false,
    children: [
      '/tutorials/core/plugins/how-to-write-a-core-plugin',
      '/tutorials/core/plugins/how-to-interact-with-the-blockchain',
      '/tutorials/core/plugins/how-to-interact-with-the-database',
      '/tutorials/core/plugins/how-to-interact-with-the-transaction-pool',
      '/tutorials/core/plugins/how-to-interact-with-wallets',
      '/tutorials/core/plugins/how-to-interact-with-events',
      '/tutorials/core/plugins/how-to-create-http-servers'
    ]
  }, {
    title: 'Custom transactions',
    collapsable: false,
    children: [
      '/tutorials/core/how-to-write-custom-transactions'
    ]
  }, {
    title: 'Node',
    collapsable: false,
    children: [
      '/tutorials/node/setup',
      '/tutorials/node/secure',
      '/tutorials/node/snapshots',
      '/tutorials/node/dynamic-fees'
    ]
  },
  {
    title: 'Deployer',
    collapsable: false,
    children: [
      '/tutorials/deployer/deployer',
      '/tutorials/deployer/docker',
      '/tutorials/deployer/vagrant',
      '/tutorials/deployer/wallet-explorer',
      '/tutorials/deployer/azure',
      '/tutorials/deployer/faq'
    ]
  },
  {
    title: 'IoT',
    collapsable: false,
    children: [
      '/tutorials/iot/environment/arduino/',
      '/tutorials/iot/environment/os/',
      '/tutorials/iot/environment/cpp/',
      '/tutorials/iot/boards/esp32-adafruit/',
      '/tutorials/iot/boards/esp8266-adafruit/',
      '/tutorials/iot/storing-data-on-the-blockchain',
      '/tutorials/iot/reacting-to-data-on-the-blockchain'
    ]
  }
]

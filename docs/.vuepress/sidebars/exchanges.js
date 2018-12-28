module.exports = [
  ['/', 'Back to Table of Contents'],
  ["/exchanges/", "Exchanges Home"],
  {
    title: "Installation",
    collapsable: false,
    children: [
      "/exchanges/relay",
    ]
  },
  {
    title: "Communication endpoints",
    collapsable: false,
    children: [
      "/exchanges/public-api",
      "/exchanges/json-rpc-quick",
      "/exchanges/migrating-to-ark-core"
    ]
  },
  {
    title: "Advanced configuration",
    collapsable: false,
    children: [
      "/exchanges/json-rpc",
    ]
  },
];

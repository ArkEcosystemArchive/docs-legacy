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
    title: "Public API endpoints",
    collapsable: false,
    children: [
      "/exchanges/public-api",
      "/exchanges/json-rpc",
    ]
  },
];

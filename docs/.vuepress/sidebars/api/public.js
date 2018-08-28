module.exports = [
  ['/api/', 'Back to API Home'],
  {
    title: "Public API",
    collapsable: false,
    children: [
      ['/api/public/', 'Overview'],
      ['/api/public/versions', 'Versions'],
      ['/api/public/troubleshooting', 'Troubleshooting']
    ]
  },
  {
    title: "API 1.0",
    collapsable: false,
    children: [
      ['/api/public/v1/', 'Getting Started'],
      ['/api/public/v1/accounts', 'Accounts'],
      ['/api/public/v1/blocks', 'Blocks'],
      ['/api/public/v1/delegates', 'Delegates'],
      ['/api/public/v1/loader', 'Loader'],
      ['/api/public/v1/peers', 'Peers'],
      ['/api/public/v1/signatures', 'Signatures'],
      ['/api/public/v1/transactions', 'Transactions'],
    ]
  },
  {
    title: "API 2.0",
    collapsable: false,
    children: [
      ['/api/public/v2/', 'Getting Started'],
      ['/api/public/v2/blocks', 'Blocks'],
      ['/api/public/v2/delegates', 'Delegates'],
      ['/api/public/v2/node', 'Node'],
      ['/api/public/v2/peers', 'Peers'],
      ['/api/public/v2/transactions', 'Transactions'],
      ['/api/public/v2/votes', 'Votes'],
      ['/api/public/v2/wallets', 'Wallets'],
    ]
  },
]
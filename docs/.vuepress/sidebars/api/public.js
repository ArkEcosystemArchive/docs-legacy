module.exports = [
  ['/api/', 'Back to API Home'],
  {
    title: 'Public API',
    collapsable: false,
    children: [
      ['/api/public/', 'Overview'],
      ['/api/public/versions', 'Versions'],
      ['/api/public/troubleshooting', 'Troubleshooting']
    ]
  },
  {
    title: 'API 2.0',
    collapsable: false,
    children: [
      ['/api/public/v2/', 'Getting Started'],
      ['/api/public/v2/blockchain', 'Blockchain'],
      ['/api/public/v2/blocks', 'Blocks'],
      ['/api/public/v2/delegates', 'Delegates'],
      ['/api/public/v2/node', 'Node'],
      ['/api/public/v2/peers', 'Peers'],
      ['/api/public/v2/transactions', 'Transactions'],
      ['/api/public/v2/votes', 'Votes'],
      ['/api/public/v2/wallets', 'Wallets']
    ]
  }
]

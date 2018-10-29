module.exports = [
  ['/api/', 'Back to API Home'],
  ['/api/json-rpc/', 'JSON-RPC Home'],
  {
    title: "JSON-RPC API Reference",
    collapsable: false,
    children: [
      ['/api/json-rpc/blocks', 'Blocks'],
      ['/api/json-rpc/transactions', 'Transactions'],
      ['/api/json-rpc/wallets', 'Wallets'],
    ]
  },
]

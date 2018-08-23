module.exports = [
  ['/api/', 'Back to API'],
  ['/api/json-rpc/', 'JSON-RPC Home'],
  {
    title: "JSON-RPC API Reference",
    collapsable: false,
    children: [
      ['/api/json-rpc/accounts', 'Accounts'],
      ['/api/json-rpc/blocks', 'Blocks'],
      ['/api/json-rpc/transactions', 'Transactions'],
    ]
  },
]
module.exports = [
    ['/developers/api/json-rpc/', 'Introduction'], {
        title: 'Accounts',
        children: [
            '/developers/api/json-rpc/accounts/get-an-account',
            '/developers/api/json-rpc/accounts/get-an-accounts-transactions',
            '/developers/api/json-rpc/accounts/create-an-account',
            '/developers/api/json-rpc/accounts/get-a-bip38-account',
            '/developers/api/json-rpc/accounts/create-a-bip38-account',
        ]
    }, {
        title: 'Blocks',
        children: [
            '/developers/api/json-rpc/blocks/get-a-block',
            '/developers/api/json-rpc/blocks/get-the-latest-block',
            '/developers/api/json-rpc/blocks/get-a-blocks-transactions',
        ]
    }, {
        title: 'Transactions',
        children: [
            '/developers/api/json-rpc/transactions/list-transactions',
            '/developers/api/json-rpc/transactions/get-a-transaction',
            '/developers/api/json-rpc/transactions/broadcast-transactions',
            '/developers/api/json-rpc/transactions/create-a-transaction',
            '/developers/api/json-rpc/transactions/create-a-transaction-from-a-bip38',
        ]
    }
]

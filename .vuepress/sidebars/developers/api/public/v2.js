module.exports = [
    ['/developers/api/public/v2/', 'Introduction'],
    ['/developers/api/public/v2/versions', 'Versions'],
    ['/developers/api/public/v2/troubleshooting', 'Troubleshooting'], {
        title: 'Blocks',
        children: [
            '/developers/api/public/v2/blocks/list-all-blocks',
            '/developers/api/public/v2/blocks/retrieve-a-block',
            '/developers/api/public/v2/blocks/list-all-transactions-of-a-block',
            '/developers/api/public/v2/blocks/search-all-blocks',
        ]
    }, {
        title: 'Delegates',
        children: [
            '/developers/api/public/v2/delegates/list-all-delegates',
            '/developers/api/public/v2/delegates/retrieve-a-delegate',
            '/developers/api/public/v2/delegates/list-all-blocks-of-a-delegate',
            '/developers/api/public/v2/delegates/list-all-voters-of-a-delegate',
        ]
    }, {
        title: 'Node',
        children: [
            '/developers/api/public/v2/node/retrieve-the-configuration',
            '/developers/api/public/v2/node/retrieve-the-status',
            '/developers/api/public/v2/node/retrieve-the-syncing-status',
        ]
    }, {
        title: 'Peers',
        children: [
            '/developers/api/public/v2/peers/list-all-peers',
            '/developers/api/public/v2/peers/retrieve-a-peer',
        ]
    }, {
        title: 'Transactions',
        children: [
            '/developers/api/public/v2/transactions/create-a-transaction',
            '/developers/api/public/v2/transactions/list-all-transactions',
            '/developers/api/public/v2/transactions/retrieve-a-transaction',
            '/developers/api/public/v2/transactions/list-all-unconfirmed-transaction',
            '/developers/api/public/v2/transactions/retrieve-an-unconfirmed-transaction',
            '/developers/api/public/v2/transactions/search-all-transactions',
            '/developers/api/public/v2/transactions/list-all-transaction-types',
        ]
    }, {
        title: 'Transactions',
        children: [
            '/developers/api/public/v2/votes/list-all-votes',
            '/developers/api/public/v2/votes/retrieve-a-vote',
        ]
    }, {
        title: 'Transactions',
        children: [
            '/developers/api/public/v2/wallets/list-all-wallets',
            '/developers/api/public/v2/wallets/retrieve-a-wallet',
            '/developers/api/public/v2/wallets/list-all-transactions-of-a-wallet',
            '/developers/api/public/v2/wallets/list-all-received-transactions-of-a-wallet',
            '/developers/api/public/v2/wallets/list-all-sent-transactions-of-a-wallet',
            '/developers/api/public/v2/wallets/list-all-votes-of-a-wallet',
            '/developers/api/public/v2/wallets/list-all-top-wallets',
            '/developers/api/public/v2/wallets/search-all-wallets',
        ]
    }
]

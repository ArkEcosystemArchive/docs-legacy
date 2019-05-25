module.exports = [
  ['/', 'Back to Table of Contents'],
  ['/sdk/', 'SDK Overview'],

  {
    title: 'Clients',
    collapsable: false,
    children: ['/sdk/clients/guidelines.md', '/sdk/clients/usage.md']
  },
  {
    title: 'Cryptography',
    collapsable: false,
    children: ['/sdk/cryptography/guidelines.md', '/sdk/cryptography/usage.md']
  },
  {
    title: 'Frameworks',
    collapsable: false,
    children: ['/sdk/frameworks/laravel.md', '/sdk/frameworks/symfony.md']
  },
  {
    title: 'Examples',
    collapsable: false,
    children: ['/sdk/examples/sdk-demos.md']
  }
]

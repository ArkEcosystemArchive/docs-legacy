# Quick Start - tests

If you are a developer, the following steps will help you to validate your installation.

## Run Tests for the First Time (Core)

* Ensure primary dependencies installed:
  * Ensure `node -v` returns a version higher than or equal to the [minimum recommended version](https://github.com/ArkEcosystem/core/blob/master/.nvmrc)
  * Ensure yarn is installed. If yarn is not found, you may need to close, exit, and re-open your terminal.
* checkout git repository for core, located here: [https://github.com/ArkEcosystem/core](https://github.com/ArkEcosystem/core)
* `cd core`
* `yarn install`
* `yarn setup`
* `yarn docker ark`
* `(cd docker/environments/unitnet && docker-up -d postgres)`
  * Note: if you do not use the parenthesis in this command, you will need to ensure you return back to the core/ directory. 
* `yarn test:unit`
* `yarn test:integration`
* `yarn test:functional`

## Troubleshooting

* A few tests are deprecated. Errors on deprecated tests can be ignored.
* If you see an error about too many open files, use yarn to add 'watchman' library, and modify watchman flag in package.json
* Try to shut down any preexisting postgres database that may be running on your machine.
* Try the above steps again.
* If still failing, draft an email that contains your node version, your operating system version, your level of general experience, and anything that might be odd about your system.
* Copy and paste the error that appears. (More info is better!)
* Send it to: gsod@ark.io 

## Further testing commands

* `yarn test:unit:watch`
* `yarn test:unit:coverage`
* `yarn test:unit:debug`


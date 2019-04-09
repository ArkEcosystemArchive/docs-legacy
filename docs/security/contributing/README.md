# Patching a Vulnerability

ARK maintains strict code quality guidelines to ensure ease of development, but also lower the risk of vulnerabilities due to unclear code errors. When patching a vulnerability, we are even more strict concerning quality.

First of all, a patch must conform to our usual coding standards, which may be found [here](/guidebook/contribution-guidelines/clean-code-and-tests.html). To summarize:

- New additions must include tests using the `jest` test suite.
- Code must pass formatting checks by linters such as `JSLint`.
- Dependencies must not contain any vulnerabilities. (attempting to minimize dependencies is a decent way to prevent this.)
- Ensure the burden of maintainability is as low as possible, by ensuring the code is clear and logical.

The last point is of special interest ton patches. It might be convenient to add a code rule such as:

```js
// some pseudocode

if (block.id === someID) {
  patch(block);
}
```

However, over time such patches become cumbersome, difficult to maintain or are reverted due to a switch in developers and lack of understanding of the underlying problem. Attempt to minimize exceptional cases when writing patches.

## Procedure for a Patch

To be eligible for the [rewards program](/security/discovering/public-disclosure.md) and a bonus of up to 50%, ensure your patch satisfies the following conditions:

1. It describes the vulnerability in depth, including the cause and possible solutions. Do not forget to support your choice of a particular solution.
2. Complies with all ARK coding standards.
3. Provides adequate tests, ensuring the vulnerability has been fixed, and no new vulnerabilities have been introduced.
4. Makes use of the `git format-patch` feature by providing us with `git patch files`.

If these requirements daunt you, contact our developers on [slack](https://ark.io/slack) (after having properly disclosed the vulnerability). We will be able to assist you.

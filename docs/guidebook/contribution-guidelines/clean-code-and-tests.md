---
title: "Clean Code & Tests"
---

# Clean Code & Tests

While the following guidelines are not an absolute requirement, writing your code by these standards will ensure greater compatibility with the Ark Ecosystem and increases the likelihood your pull request will be accepted.

## Clean Code

Clean Code is as important as separation of concerns and testability when building an application.

Only through Clean Code you will achieve an application that is easy to navigate, reduces complexity and can be maintained by new and seasoned developers without losing time and money.

The core characteristics of a clean code are the following. You should aim to meet as many of them with your code as possible.

1. Clean code should be elegant, logical and pleasing to read since it is written by developers, for developers: your code should reflect this. **Another person is maintaining the code you have written, not a computer. Always keep that mind.**

2. Clean code should be focused. Every class function or module should only be concerned about a single responsibility. **The result will be clean, testable code with minimal to no duplication. **

3. Clean code should be taken care of by all developers. Keep it simple to make the next developer's life easier. **Making use of modern development patterns and paying attention to things like formatting or variable naming will help you to achieve this goal.**

## SOLID Code

To achieve intelligible, flexible, maintainable and testable applications, you should strive for a clear **Separation of Concerns** in every part of your application.

The [SOLID](https://en.wikipedia.org/wiki/SOLID) pattern comes from the realm of object-oriented programming but applies the same to [functional programming](https://softwareengineering.stackexchange.com/a/171534) as it is just a concept of how to design & build applications.

Here is a quick TLDR to sum SOLID application design up:

1. Each Entity should have a single responsibility.
2. Each Entity should be able to be extended, not modified.
3. Each Entity should be replaceable by a custom implementation without breaking the application.
4. Each Entity should follow a contract and always return the same output, no matter the implementation.
5. Each Entity should be as loosely coupled as possible.

### Defaults for Classes

Try to keep the **O** of **SOLID** in your mind: code should be open for extension, but closed for modification. That's why you should use `private` as the default visibility modifier.

This way you're encouraged to think before opening up your classes to the outside world. You should take a moment to think about possible other ways to solve a problem instead of opening up classes. You could for example rely more on composition, dependency injection and interfaces; instead of extending classes.

Especially in the context of open source, you're encouraged to think twice about making a method `public` or `protected`, or opening a class for extension. Every entry point in your code that is open for the public to use, is an entry point you'll have to maintain with backwards compatibility in mind.

## Comments

1. Comments should be avoided as much as possible by writing expressive code.
2. Don't use docblocks for methods that can be fully type hinted. If you find yourself to really need a description you should probably go back and refactor the piece of code you want to comment to reduce the complexity and need for a comment.
3. Only add a description when it provides more context than the method signature itself. Use full sentences for descriptions, including a period at the end.

## Test Suites

Writing a test suite for your application is fundamental for the maintainability of your application for future developers.

A test suite will make sure that everything is working as intended without you having to manually start the whole application to test that one small change you made to a database model. **A good test suite always takes less time than you think in the short term, and will save you from many long term headaches.**

Try to keep your naming conventions consistent and readable because keep in mind, code is maintained by people, not computers.

You should aim for high coverage of business-critical parts of your application and for at least sufficient enough coverage of utilities and smaller working parts to be confident that your test suite catches any bugs caused by future changes.

*If you are working on a JavaScript project we recommend you to use [jest](https://facebook.github.io/jest/) and follow the `it('should ...')` naming convention.*

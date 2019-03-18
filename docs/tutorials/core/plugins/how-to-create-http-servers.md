---
title: How to create HTTP servers
---

# How to create HTTP servers

[[toc]]

## Getting Started

A common use-case for a plugin is that you process some data from within core and want to make use of that data with an external application. The easiest way to do this is through an HTTP server that exposes an API from which you request the data.

Core provides a package called [core-http-utils](https://github.com/ArkEcosystem/core/tree/develop/packages/core-http-utils/src) which provides everything you will need to run an HTTP server with plugins. Core uses [hapi](https://hapijs.com/) for all its HTTP based services as it enables developers to focus on writing reusable application logic instead of spending time building infrastructure.

## Installing dependencies

As you've learned in [How to write a Core Plugin](/tutorials/core/plugins/how-to-write-a-core-plugin.html) you will need to install the required dependencies. For the example we will use we need `core-http-utils` which you can install with `lerna add @arkecosystem/core-http-utils --scope=@vendor/demo-plugin`.

## Creating our server

Now that `core-http-utils` is installed we can get started with starting our HTTP server, which is fairly simple.

```ts
import { createServer, mountServer } from "@arkecosystem/core-http-utils";

export async function startServer(config) {
  const server = await createServer({
    host: config.host,
    port: config.port
  });

  server.route({
    method: "GET",
    path: "/",
    handler(request, h) {
      return "Hello World";
    }
  });

  return mountServer("My HTTP Server", server);
}

startServer({ host: "localhost", port: 8000 });
```

This example will register a server with a single endpoint at `http://localhost:8000/` where `localhost` is the host and `8000` the port. When you run `curl http://localhost:8000/` you should get `Hello World` as response.

::: tip
Take a look at the [Implementation Guide](/tutorials/core/plugins/how-to-write-a-core-plugin.html#implementation) for plugins to see how to integrate this code example into your plugin.
:::

## Writing tests for your server

Now that you have your HTTP server up and running it is time to write tests for it to guarantee that it returns the data you expect it to.

Core makes use of [jest](https://jestjs.io/) to write and execute tests and [hapi.js request injection](https://hapijs.com/api#-await-serverinjectoptions) for testing all hapi based plugins. This allows us to send the requests directly to `hapi` rather then having to send a real request with something like axios.

```ts
import { startServer } from "./src/server";

let server;
beforeAll(async () => {
  server = await startServer({ host: "localhost", port: 8000 });
});

afterAll(async () => {
  await server.stop();
});

test("responds with 'Hello World' if '/' is hit", async () => {
  const { result } = await server.inject("/");

  expect(result).toBe("Hello World");
});
```

This test will do 3 things, lets break them down:

1. `beforeAll` will start a new instance of your server
2. `test` will inject a request to the `/` endpoint to your hapi server and expect the response body to be `Hello World`
3. `afterAll` will stop the instance that `beforeAll` created after all tests have finished

## Conclusion

This guide should give you a basic idea of how to create your own plugins that require a HTTP server with `hapi`, so head over to their [tutorials](https://hapijs.com/tutorials) or [API documentation](https://hapijs.com/api) if you want to dig deeper and learn how it all works to build feature-rich plugins.

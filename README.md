# comment-service

[Español](README.es.md)

Comment microservice for the educational blog, using MongoDB through Mongoose.

Part of an abandoned learning exercise exploring service boundaries and request/response communication. Kept without active maintenance; not intended for production.

## Stack

NestJS · TypeScript · TCP · MongoDB · Mongoose.

## Scope and configuration

Requires MONGO_URL. MICROSERVICE_HOST/MICROSERVICE_PORT default to localhost:4002. It exposes message handlers rather than a standalone REST API.

## Local development

Use a Node.js toolchain compatible with package.json and the dependency lockfile, when present.

```sh
npm install
npm run start:dev
npm run build
npm test
```

## Related repositories

- [Blog practice / Práctica de blog](https://github.com/matigaleanodev/blog-personal)

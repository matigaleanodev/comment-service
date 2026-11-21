# comment-service

[English](README.md)

Microservicio de comentarios del blog educativo, con MongoDB mediante Mongoose.

Forma parte de una práctica abandonada para explorar separación de servicios y comunicación solicitud/respuesta. Se conserva sin mantenimiento activo; no está destinada a producción.

## Stack

NestJS · TypeScript · TCP · MongoDB · Mongoose.

## Alcance y configuración

Requiere MONGO_URL. MICROSERVICE_HOST/MICROSERVICE_PORT usan localhost:4002 por defecto. Expone handlers de mensajes y no una API REST independiente.

## Desarrollo local

Usar un entorno Node.js compatible con package.json y el lockfile de dependencias, cuando exista.

```sh
npm install
npm run start:dev
npm run build
npm test
```

## Repositorios relacionados

- [Blog practice / Práctica de blog](https://github.com/matigaleanodev/blog-personal)

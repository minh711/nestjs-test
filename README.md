# About the Project

In progress...

---

# Create the Project

## 1. Create the NestJS Project

```
nest new [project name]
```

## 2. Install packages

```
npm install [package name]
```

For GraphQL:

- `@nestjs/graphql`: A robust **GraphQL** module for NestJS, streamlining API
  development with **decorators** and **utilities**.
- `@nestjs/apollo`: Seamlessly integrates Apollo GraphQL server into NestJS
  applications for efficient **server-side operations**.
- `@apollo/server`: Apollo's comprehensive GraphQL server implementation,
  facilitating the creation of **performant APIs**.
- `graphql`: JavaScript reference implementation of **GraphQL**, enabling API
  development and consumption across different environments.

For environment:

- `dotenv`: Zero-dependency module for loading **environment** variables from
  `.env `files, simplifying configuration management in Node.js apps.
- `@nestjs/config`: NestJS module for managing **configuration**, facilitating
  the loading of environment variables and config files.

TypeORM and Database (PostgresQL):

- `typeorm`: TypeScript **ORM** (Object-Relational Mapping) for Node.js,
  simplifying database interactions with features like entity management and
  query building.
- `pg`: Non-blocking **PostgreSQL** client for Node.js, enabling asynchronous
  database operations.

Validator:

- `class-validator`: ...
- `class-transformer`: ...

# 3. Create Module

```
nest g module [module name]

nest g service [service name]

nest g resolver [resolver name]
```

`g` is for generate.

---

# Others

## Fix end of line error in `prettier`

Add this settings in the `rules` section inside `.eslintrc.js`

```js
"prettier/prettier": [
  "error",
  {
    "endOfLine": "auto"
  },
],
```

The result will be look like this:

```js
rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      },
    ],
  },
```

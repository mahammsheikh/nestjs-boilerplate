# NestJS REST API boilerplate

![github action status](https://github.com/brocoders/nestjs-boilerplate/actions/workflows/docker-e2e.yml/badge.svg)
[![renovate](https://img.shields.io/badge/renovate-enabled-%231A1F6C?logo=renovatebot)](https://app.renovatebot.com/dashboard)

## Description 
NestJS REST API boilerplate for a typical project
Demo: <https://nestjs-boilerplate-test.herokuapp.com/docs>

Compatible [React](https://github.com/Conrad-Labs/react-material-ui-seed-template) project can be found here.

<https://github.com/user-attachments/assets/a66f114a-c714-4036-8eeb-20cbf04ae985>

## Description of the module structure

```txt
.
├── domain
│   └── [DOMAIN_ENTITY].ts
├── dto
│   ├── create.dto.ts
│   ├── find-all.dto.ts
│   └── update.dto.ts
├── infrastructure
│   └── persistence
│       ├── relational
│       │   ├── entities
│       │   │   └── [ENTITY].ts
│       │   ├── mappers
│       │   │   └── [MAPPER].ts
│       │   ├── relational-persistence.module.ts
│       │   └── repositories
│       │       └── [ADAPTER].repository.ts
│       └── [PORT].repository.ts
├── controller.ts
├── module.ts
└── service.ts
```

`[DOMAIN ENTITY].ts` represents an entity used in the business logic. Domain entity has no dependencies on the database or any other infrastructure.

`[SCHEMA].ts` represents the **database structure**. It is used in the document-oriented database (MongoDB).

`[ENTITY].ts` represents the **database structure**. It is used in the relational database (PostgreSQL).

`[MAPPER].ts` is a mapper that converts **database entity** to **domain entity** and vice versa.

`[PORT].repository.ts` is a repository **port** that defines the methods for interacting with the database.

`[ADAPTER].repository.ts` is a repository that implements the `[PORT].repository.ts`. It is used to interact with the database.

`infrastructure` folder - contains all the infrastructure-related components such as `persistence`, `uploader`, `senders`, etc.

Each component has `port` and `adapters`. `Port` is interface that define the methods for interacting with the infrastructure. `Adapters` are implementations of the `port`.

## Features

- [x] Database. Support [TypeORM](https://www.npmjs.com/package/typeorm) and [Mongoose](https://www.npmjs.com/package/mongoose).
- [x] Seeding.
- [x] Config Service ([@nestjs/config](https://www.npmjs.com/package/@nestjs/config)).
- [x] Mailing ([nodemailer](https://www.npmjs.com/package/nodemailer)).
- [x] Sign in and sign up via email.
- [x] Social sign in With Google/Email.
- [x] Admin and User roles.
- [x] Internationalization/Translations (I18N) ([nestjs-i18n](https://www.npmjs.com/package/nestjs-i18n)).
- [x] File uploads. Support local and Amazon S3 drivers.
- [x] Swagger.
- [x] Units tests.
- [x] Docker.
- [x] CI (Github Actions).


# Installation

NestJS Boilerplate supports [TypeORM](https://www.npmjs.com/package/typeorm) and [Mongoose](https://www.npmjs.com/package/mongoose) for working with databases. By default, TypeORM uses [PostgreSQL](https://www.postgresql.org/) as the main database, but you can use any relational database.

## Development Workflow (PostgreSQL + TypeORM)

1. Fork repository https://github.com/Conrad-Labs/nestjs-boilerplate OR You can choose the following to replicate the template
<img width="883" alt="Screenshot 2024-09-16 at 1 36 09 PM" src="https://github.com/user-attachments/assets/afdbae34-9189-4f75-8f1b-f410febddc07">

1. Go to folder, and copy `env-example-relational` as `.env`.

   ```bash
   cd my-app/
   cp env-example-relational .env
   ```

1. Change `DATABASE_HOST=postgres` to `DATABASE_HOST=localhost`

   Change `MAIL_HOST=maildev` to `MAIL_HOST=localhost`

1. Run additional container:

   ```bash
   docker compose up -d postgres adminer maildev
   ```

1. Install dependency

   ```bash
   npm install
   ```

1. Run app configuration

   > You should run this command only the first time on initialization of your project, all next time skip it.

   ```bash
   npm run app:config
   ```

1. Run migrations

   ```bash
   npm run migration:run
   ```

1. Run seeds

   ```bash
   npm run seed:run:relational
   ```

1. Run app in dev mode

   ```bash
   npm run start:dev
   ```

1. Open <http://localhost:3000>

### Video guideline (PostgreSQL + TypeORM)

<https://github.com/user-attachments/assets/136a16aa-f94a-4b20-8eaf-6b4262964315>

---

## Generate resource

Generate resource with the following commands:

### For relational database (PostgreSQL + TypeORM)

```bash
npm run generate:resource:relational -- --name=ResourceName
```

Example:

```bash
npm run generate:resource:relational -- --name=Category
```

#### Video guideline for relational database (PostgreSQL + TypeORM)

<https://github.com/user-attachments/assets/f7f91a7d-f9ff-4653-a78a-152ac5e7a95d>

## Add property to resource

### Property for relational database (PostgreSQL + TypeORM)

```bash
npm run add:property:to-relational
```

#### Video guideline how to add property for relational database (PostgreSQL + TypeORM)

<https://github.com/user-attachments/assets/95b9d70a-70cf-442a-b8bf-a73d32810e0c>


## Generate migration


1. Once you have created the entity file with extension `.entity.ts`. For example `post.entity.ts` (as suggested in the previous section):

   ```ts
   // /src/posts/infrastructure/persistence/relational/entities/post.entity.ts

   import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
   import { EntityRelationalHelper } from '../../../../../utils/relational-entity-helper';

   @Entity()
   export class Post extends EntityRelationalHelper {
     @PrimaryGeneratedColumn()
     id: number;

     @Column()
     title: string;

     @Column()
     body: string;

     // Here any fields that you need
   }
   ```

1. Next, generate migration file:

   ```bash
   npm run migration:generate -- src/database/migrations/CreatePostTable
   ```

1. Apply this migration to database via [npm run migration:run](#run-migration).

### Run migration

```bash
npm run migration:run
```

### Revert migration

```bash
npm run migration:revert
```

### Drop all tables in database

```bash
npm run schema:drop
```

## Links

- Swagger (API docs): <http://localhost:3000/docs>
- Adminer (client for DB): <http://localhost:8080>
- Maildev: <http://localhost:1080>

---

Next: [Architecture](architecture.md)

# NestJS REST API boilerplate

![github action status](https://github.com/brocoders/nestjs-boilerplate/actions/workflows/docker-e2e.yml/badge.svg)
[![renovate](https://img.shields.io/badge/renovate-enabled-%231A1F6C?logo=renovatebot)](https://app.renovatebot.com/dashboard)

## Description 
NestJS REST API boilerplate for a typical project
Demo: <https://nestjs-boilerplate-test.herokuapp.com/docs>

Compatible [React](https://github.com/Conrad-Labs/react-material-ui-seed-template) project can be found here.

<https://github.com/user-attachments/assets/a66f114a-c714-4036-8eeb-20cbf04ae985>

## Things You Should Know
- [Port And Adapter Pattern](https://www.youtube.com/watch?v=bDWApqAUjEI&t=64s), which is being used to generate `Entity` classes and `Repository` interfaces.
- [NestJs TypeORM Integration & Repository Pattern](https://docs.nestjs.com/techniques/database)

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

1. Install Node.js

   To install **Node.js**, follow these steps:
   - Visit the official Node.js website: [Node.js Downloads](https://nodejs.org/).
   - Choose the appropriate version for your operating system (LTS is recommended for most users).
   - **Windows/macOS/Linux**: Download the installer and run it.
   
   Alternatively, you can use a package manager:
   - macOS (with Homebrew)
      ```bash
      brew install node
     ``` 
   - Ensure that **Node.js** is installed on your system. You can check if Node.js and npm are installed by running:
      ```bash
      node -v
      npm -v
2.  Install the NestJS CLI
   - Once Node.js is installed, you can install the NestJS CLI globally using npm:
   ```bash
   npm install -g @nestjs/cli
   ```
   - After installation, verify that the NestJS CLI is installed by checking the version:
   ```bash
   nest --version
   ```
   - You can use the following NestJS CLI commands to get started with the project

| Command                        |Description                                                                 |
|---------------------------------|-----------------------------------------------------------------------------|
| `nest new <project-name>`       | Creates a new NestJS project.                                               |
| `nest build`                    | Compiles the NestJS project to JavaScript.                                  |
| `nest start`                    | Starts the NestJS application.                                              |
| `nest start --watch`            | Starts the application in watch mode (auto-restart on changes).             |
| `nest generate <schematic> <name>` or `nest g <schematic> <name>` | Generates a new file using a schematic (e.g., `module`, `controller`, `service`). |
| `nest add <library>`            | Adds an external library to the project.                                    |
| `nest update`                   | Updates the NestJS project dependencies.                                    |
| `nest info`                     | Displays NestJS project information.                                        |
| `nest build --watch`            | Builds the application in watch mode.                                       |
| `nest test`                     | Runs unit tests in the project.                                             |
| `nest test --watch`             | Runs unit tests in watch mode.                                              |
| `nest e2e`                      | Runs end-to-end tests.                                                      |
| `nest e2e --watch`              | Runs end-to-end tests in watch mode.                                        |
| `nest lint`                     | Lints the project using configured linter rules.                            |
---

3. Fork repository https://github.com/Conrad-Labs/nestjs-boilerplate OR You can choose the following to replicate the template
<img width="883" alt="Screenshot 2024-09-16 at 1 36 09 PM" src="https://github.com/user-attachments/assets/afdbae34-9189-4f75-8f1b-f410febddc07">

4. Go to folder, and copy `env-example-relational` as `.env`.

   ```bash
   cd my-app/
   cp env-example-relational .env
   ```

5. Change `DATABASE_HOST=postgres` to `DATABASE_HOST=localhost`

   Change `MAIL_HOST=maildev` to `MAIL_HOST=localhost`

6. Run additional container:

   ```bash
   docker compose up -d postgres adminer maildev
   ```

7. Install dependency

   ```bash
   npm install
   ```

9. Run migrations

   ```bash
   npm run migration:run
   ```

10. Run seeds

   ```bash
   npm run seed:run:relational
   ```

11. Run app in dev mode

   ```bash
   npm run start:dev
   ```

12. Open <http://localhost:3000>

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

#!/usr/bin/env bash
set -e

# Wait for the database to be ready before proceeding
/opt/wait-for-it.sh "${DATABASE_HOST}:${DATABASE_PORT:-5432}"

# Run migrations and seeds, then start the application
npm run migration:run
npm run seed:run:relational
npm run start:prod


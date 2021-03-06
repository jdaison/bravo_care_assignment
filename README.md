# BRAVO CARE API

Bravocare api is a service to create hospitals, nurses, shift assignments and get report by hospital.

## Start π

If yuo are a developer ask for environment variables
- .env

## Using docker compose to build for production π

Create a .env in the root with these values
PORT=3000
KEY_PRIVATE_JWT=hello12345

Run next command in the folder then use the postman collection to do some tests
```bash
$ docker-compose up               
```

## development

### Install π§

```bash
$ npm install
```

### watch mode

```bash
$ npm run start:dev
```

### Test

# unit tests

```bash
$ npm run test
```

## Folder structure

```bash
ββββroot-repo
βΒ Β  βββ config              // sequelize config
βΒ Β  βββ migrations          // files to generate database
βΒ Β  βββ models              // models for sequelize
βΒ Β  βββ postman             // collection to do test with postman
βΒ Β  βββ seeders             // files to populate database
βΒ Β  βββ __src__
βΒ Β      βββ controllers
βΒ Β      βββ routes
βΒ Β      βββ utils
βΒ Β      βββ app.js          // entry point 
βΒ Β  βββ tests               // files with tests
βΒ Β  βββ .env
βΒ Β  βββ .gitignore
βΒ Β  βββ .index.js
βΒ Β  βββ wait-for-it.sh      //script to wait to be ready database and apply migrations and seeders
βββ βββ package.json
```

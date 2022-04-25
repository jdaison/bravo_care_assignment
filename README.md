# BRAVO CARE API

Bravocare api is a service to create hospitals, nurses, shift assignments and get report by hospital.

## Start 🚀

If yuo are a developer ask for environment variables
- .env

## Using docker compose to build for production 📋

Run next command in the folder then use the postman collection to do some tests
```bash
$ docker-compose up               
```

## development

### Install 🔧

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

## Estructura del proyecto

```bash
├───root-repo
│   ├── config              // sequelize config
│   ├── migrations          // files to generate database
│   ├── models              // models for sequelize
│   ├── postman             // collection to do test with postman
│   ├── seeders             // files to populate database
│   ├── __src__
│       ├── controllers
│       ├── routes
│       ├── utils
│       ├── app.js          // entry point 
│   ├── tests               // files with tests
│   ├── .env
│   ├── .gitignore
│   ├── .index.js
└── └── package.json
```

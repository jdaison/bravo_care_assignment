# BRAVO CARE API

Bravocare api is a service to create hospitals, nurses, shift assignments and get report by hospital.

## Start 🚀

If yuo are a developer ask for environment variables
- .env

## Using docker compose to build for production 📋

Create a .env in the root with these values
PORT=3000
KEY_PRIVATE_JWT=hello12345

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

## Folder structure

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
│   ├── wait-for-it.sh      //script to wait to be ready database and apply migrations and seeders
└── └── package.json
```

## Description

Common Store App Management Backend Application

## Content:
- Mongoose library and Mongo database connection available.
- Error handling mechanism.
- Swagger documentation available.
- Logging mechanism available.
- User authorisation
- Data encryption


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Use Case
 - User creation
 - Market creation
    - User can have only one market.
    - Market name, email, market location and userId which belongs to the market. +
 - Category creation
    - Category name, active, marketId.
 - Product creation
    - Product name, stockAmount, price, priceWithDiscount, categoryId, marketId
 

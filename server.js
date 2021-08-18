'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');
const mongoose=require('mongoose')
const homeController=require('./controllers/home.controller')
const booksController=require('./controllers/books.controller')
const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

const PORT=process.env.PORT;
const {
        getUsers,
        createUserController,
        deleteUserController
    }=require("./controllers/User.controller");
  // TODO: 
  // STEP 1: get the jwt from the headers
  // STEP 2. use the jsonwebtoken library to verify that it is a valid jwt
  // jsonwebtoken dock - https://www.npmjs.com/package/jsonwebtoken
  // STEP 3: to prove that everything is working correctly, send the opened jwt back to the front-end
app.get('/test', (request, response) => {
 
})

app.get('/',homeController);
app.get('/books',booksController);
app.get("/get-users",getUsers);
app.post("/create-user",createUserController);
app.delete("/delete-user/:id",deleteUserController);

 app.listen(PORT, () => console.log(`listening on ${PORT}`));

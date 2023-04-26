require('dotenv').config();
const express = require('express');
const routes = express.Router('../src/Routes/routes.js');
const app = express();
app.use(express.json());
app.use('/register', routes);
console.log('servidor rodando')
app.listen(3000);


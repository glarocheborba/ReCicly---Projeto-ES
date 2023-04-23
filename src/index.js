const express = require('express');
const app = express();
app.use(express.json());
const routes = express.Router('../src');
app.use(routes);
console.log('aqui')
app.listen(3333);


const express = require('express');
const UsersController = require('../Controllers/UsersController');
const knex = require('../Database')
const User = require('../Models/Users');
const routes = express.Router();

const UserModel = new User();
const UserController = new UsersController();

routes.post('/register', async (req, res) =>{
    const {nome, cpf, data_nascimento, status_desconto} = req.body;
    const clientes  = await UserController.register(nome, cpf, data_nascimento, status_desconto);
    return res.send(clientes);
});

module.exports = routes;
const express = require('express');
const UsersController = require('../Controllers/UsersController');
const knex = require('../Database')
const User = require('../Models/Users');
const routes = express.Router();

const UserModel = new User();
const UserController = new UsersController();

routes.post('/register', async (req, res) =>{
    const {cpf, nome, data_nascimento, status_desconto, senha} = req.body;
    const clientes  = await UserController.register(cpf, nome, data_nascimento, status_desconto, senha);
    return res.send(clientes);
});

routes.get('/list-users', async (req, res) => {
    const clientes = await UserController.clientesList();
    return res.send({ clientes });
}); 

module.exports = routes;
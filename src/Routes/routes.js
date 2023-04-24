const express = require('express');
const UsersController = require('../Controllers/UsersController');
const User = require('../Models/Users');
const routes = express.Router();

const UserModel = new User();
const UserController = new UsersController();

routes.post('/register', async (req, res) =>{
    const {nome, data_nascimento, email, status_desconto} = req.body;
    const user  = await UserController.register(nome, data_nascimento, email, status_desconto);
    return res.send(user);
});
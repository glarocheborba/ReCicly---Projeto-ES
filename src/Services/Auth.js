const {default:axios} = require("axios");
const Users = require("../Models/Users");

module.exports = {
    login: async (req, res) => {
        const {nome, email, senha} = req.body;
        const query = await knex('clientes').withSchema('public').where({nome, email, senha }).first();


    }
}


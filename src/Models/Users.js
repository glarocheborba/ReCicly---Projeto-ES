const {knex} = require("knex");
const knex = require ("../Database")

class User  {

    async findByUser(){
        let clientes = await knex('clientes')
            .withSchema('public')
            .select(['nome', 'cpf', 'data_nascimento', 'status_desconto', 'id'])
            return clientes;
        }
}

module.exports = User;
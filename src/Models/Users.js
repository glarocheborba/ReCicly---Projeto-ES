const {knex} = require("knex");
const knex = require ("../Database")

class User  {

    async findByUser(){
        let clientes = await knex('clientes')
            .withSchema('public')
            .select(['cpf', 'nome', 'data_nascimento', 'status_desconto', 'id', 'senha'])
            return clientes;
        }
}

module.exports = User;
const {knex} = require("knex");
const knex = require ("../Database")

class User  {

    async findByUser(){
        let clientes = await knex('clientes')
            .withSchema('public')
            .select(['cpf', 'nome', 'data_nascimento', 'status_desconto', 'id', 'senha'])
            return clientes;
        }

    async findByIdLogin(email){
        return await knex('clientes')
            .withSchema('public')
            .select(['cpf'])
            .where({ email })
            .first();
        }
}

module.exports = User;
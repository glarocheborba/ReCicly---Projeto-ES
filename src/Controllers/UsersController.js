const knexfile = require("../Database");
const knex = require('../../knexfile');
const User = require('../Models/Users');
const verifyRegister = require('../Validates/Verify')
const user = new User();
const verify = verifyRegister()

class UsersController{
    async register(nome, cpf, data_nascimento, status_desconto) {

        if(!cpf || !nome || !data_nascimento || !status_desconto) return { success: false, message: 'Campos inexistentes' }

        try {

            const query = await knex('clientes').withSchema('public').where({ data_nascimento, status_desconto, nome }).first();
            if (query) return { success: false, message: "Usuário já existe" }

            if(!verify.isdata_nascimento(data_nascimento)) return { success: false, message: "data_nascimento inválido"} 
            
            if (nome.length === 11) {
                if (!verify.isCPF(nome)) return { success: false, message: "CPF inválido" }
            }
            if (nome.length === 14) {
                if (!verify.isCNPJ(nome)) return { success: false, message: "CNPJ inválido" }
            }
            if (status_desconto.length === 11) {
                if(!verify.isstatus_desconto(status_desconto)) return { success: false, message: " inválido" }
            }

            await knex('clientes').withSchema('public').insert({ cpf, nome, data_nascimento, status_desconto });

            return { success: true, message: 'Cadastro realizado com sucesso' }
        
        }catch (e){
            return { success: false, message: e }
    }
}

    async clientesList() {
        return await user.findByUser();   
    }


}
module.exports = UsersController;

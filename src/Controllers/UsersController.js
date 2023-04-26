const knexfile = require("../Database");
const knex = require('../../knexfile');
const User = require('../Models/Users');
const verifyRegister = require('../Validates/Verify')
const user = new User();
const verify = verifyRegister()

class UsersController{
    async register(cpf, nome, data_nascimento, status_desconto, senha) {

        if(!cpf || !nome || !data_nascimento || !status_desconto) return { success: false, message: 'Campos inexistentes' }

        try {

            const query = await knex('clientes').withSchema('public').where({ cpf, nome, data_nascimento, status_desconto, senha }).first();
            if (query) return { success: false, message: "Usuário já existe" }

            if(!verify.isdata_nascimento(data_nascimento)) return { success: false, message: "data_nascimento inválido"} 
            
            if (cpf.length === 11) {
                if (!verify.isCPF(cpf)) return { success: false, message: "CPF inválido" }
            }
            if (cpnj.length === 14) {
                if (!verify.isCNPJ(cpf)) return { success: false, message: "CNPJ inválido" }
            }
            if (cpf.length === 11) {
                if(!verify.iscpf(cpf)) return { success: false, message: " inválido" }
            }

            await knex('clientes').withSchema('public').insert({ cpf, nome, data_nascimento, status_desconto, senha});

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

const express = require('express');

class UsersController{
    async register(name, document, email, phone) {

        if(!name || !document || !email || !phone) return { success: false, message: 'Campos inexistentes' }

        try {

            const query = await knex('persons').withSchema('insole_pay').where({ email, phone, document }).first();
            if (query) return { success: false, message: "Usuário já existe" }

            if(!verify.isEmail(email)) return { success: false, message: "Email inválido"} 
            
            if (document.length === 11) {
                if (!verify.isCPF(document)) return { success: false, message: "CPF inválido" }
            }
            if (document.length === 14) {
                if (!verify.isCNPJ(document)) return { success: false, message: "CNPJ inválido" }
            }
            if (phone.length === 11) {
                if(!verify.isPhone(phone)) return { success: false, message: "Telefone inválido" }
            }

            await knex('persons').withSchema('insole_pay').insert({ name, document, email, phone });

            return { success: true, message: 'Cadastro realizado com sucesso' }
        
        }catch (e){
            return { success: false, message: e }
    }
}

async personsList() {
    return await user.findByUser();   
}

async personsEmail(email){
    return await user.findByEmail(email);
}
}
module.exports = UsersController;

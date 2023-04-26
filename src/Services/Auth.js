const {default:axios} = require("axios");
const Users = require("../Models/Users");
const {knex} = require("knex");
const knex = require ("../Database")

const user = new Users()

module.exports = {
    
    login: async (req, res) => {
        const {nome, email, senha} = req.body;
        try{        
            if(request.status === 200){
                const uuid = await user.findByIdLogin(user.email);
                if(uuid){
                    return res.status(200).send({success: true})
                }
            }
            else{
                return res.status(400).send({ success: false, message: 'Email ou senha inválidos' })
                
            }
        }
        catch (e) {
            return res.status(400).send({ success: false, message: e})
        }
    }
}

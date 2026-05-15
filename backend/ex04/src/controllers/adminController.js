const users = require("../models/mockUsers")

module.exports = {
    // GET /admin/listar
    getUsers: (req, res) => {
        return res.json(users)
    },


    // POST /admin/criar
    createAdmin: (req, res) => {
        const { nome, email, senha} = req.body
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: "Formato de e-mail inválido" });
        }
        const userExists = users.find((user => user.email === email))

        if(userExists) {
            return res.status(400).json({message: "Já existe usuário com esse email"})
        }

        const newAdmin = {
            nome, email, senha, papel: "admin"
        }

        users.push(newAdmin)

        res.status(201).json({adminCreated: newAdmin})
    },


    // DELETE /admin/deletar/:email

    deletarUser: (req, res) => {
        const { email } = req.params

        const emailExistIndex = users.findIndex(user => user.email === email)

        if (emailExistIndex !== -1) { 
            users.splice(emailExistIndex, 1)
            return res.status(200).json({ message: `Usuário deletado com sucesso`})
        }

        return res.status(400).json({message: "email inválido"})
    }
}
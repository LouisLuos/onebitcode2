const secretKey = require("../key/secretKey");
const users = require("../models/mockUsers")
const jwt = require('jsonwebtoken')

module.exports = {
    
    // POST /cadastro
    register: (req, res) => {
    const { nome, email, senha } = req.body;

    // Regex para validação de formato de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Formato de e-mail inválido" });
    }

    const emailExiste = users.find((user) => user.email === email);

    if (!emailExiste) {
        const newUser = {
            nome, email, senha, papel: "user"
        };
        
        users.push(newUser);
        return res.status(201).json(newUser);
    }

    return res.status(400).json({ message: "E-mail já cadastrado no sistema" });
},

    // POST /login
    login: (req, res) => {
        const { email, senha } = req.body
        const user = users.find((user) => user.email.toLocaleLowerCase() === email.toLocaleLowerCase())

        if (!user || user.senha !== senha) {
            return res.status(401).json({message: "credenciais inválidas"})
        }
        
        const payload = { nome: user.nome, email: user.email, papel: user.papel}
        const token = jwt.sign(payload, secretKey, { expiresIn: "1hr" } )

        return res.json(token)
    } 
}
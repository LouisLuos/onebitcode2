const jwt = require('jsonwebtoken')
const users = require('../models/mockUsers')
const secretKey = require('../key/secretKey')
// Verifica se qualquer tipo de usuário tem um token para fazer login 
const authLogin = (req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader) {
        
        return res.status(200).json({ message: 'Bem vindo ao sistema, Visitante' })
    }

    const token = authHeader.split(' ')[1]

    try {
        const decodedToken = jwt.verify(token, secretKey)
        const user = users.find(user => user.email === decodedToken.email)

        if (user) {
            req.user = {nome: user.nome, email: user.email, papel: user.papel}
            next()
        } else {
            return res.status(401).json({ message: "usuário inválido"})
        }
    } catch (error) {
        return res.status(401).json({ message: "token inválido"})
    }
}

module.exports = authLogin
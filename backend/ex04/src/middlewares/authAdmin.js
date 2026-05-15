const jwt = require('jsonwebtoken')
const users = require('../models/mockUsers')
const secretKey = require('../key/secretKey')

const authAdmin = (req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader) {
        
        return res.status(401).json({ message: 'rota inválida' })
    }

    const token = authHeader.split(' ')[1]

    try {
        const decodedToken = jwt.verify(token, secretKey)
        const user = users.find(user => user.email === decodedToken.email)

        if (user && user.papel === "admin") {
            req.user = {nome: user.nome, email: user.email, papel: user.papel}
            next()
        } else {
            return res.status(401).json({ message: "usuário não tem permissão"})
        }
    } catch (error) {
        return res.status(401).json({ message: "token inválido"})
    }
}


module.exports = authAdmin
const express = require('express')
const authController = require('../controllers/authController')
const authLogin = require('../middlewares/authMiddleware')


const authRouter = express.Router()

authRouter.post('/cadastro', authController.register)
authRouter.post('/login', authController.login)

authRouter.get('/dashboard', authLogin, (req, res) => {
    res.json({message: `Bem vindo ao sistema, ${req.user.nome}`})
})

module.exports = authRouter
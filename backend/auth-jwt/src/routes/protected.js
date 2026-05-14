const express = require('express')
const authMiddleare = require('../middleware/auth-middleware')

const protectedRouter = express.Router()

protectedRouter.get('/dashboard', authMiddleare, (req, res) => {
    const user = req.authorUser
    res.json({ message: `Bem vindo, ${user.username} você está protegido!`})
})


module.exports = protectedRouter
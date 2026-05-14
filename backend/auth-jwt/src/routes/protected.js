const express = require('express')
const authMiddleare = require('../middleware/auth-middleware')

const protectedRouter = express.Router()

protectedRouter.get('/dashboard', authMiddleare, (req, res) => {
    res.json({ message: "vc esta protegido"})
})


module.exports = protectedRouter
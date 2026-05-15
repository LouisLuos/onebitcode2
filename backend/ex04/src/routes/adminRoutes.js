const express = require('express')
const adminController = require('../controllers/adminController')
const authAdmin = require('../middlewares/authAdmin')

const adminRouter = express.Router()


adminRouter.get('/listar',  authAdmin, adminController.getUsers)
adminRouter.post('/criar', authAdmin, adminController.createAdmin)
adminRouter.delete('/deletar/:email', authAdmin, adminController.deletarUser)


module.exports = adminRouter
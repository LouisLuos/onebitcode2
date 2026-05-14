const express = require("express")
const dashboardController = require("./controllers/dashboardController")
const authController = require("./controllers/authController")
const {authMiddleare, isAdmin} = require("./middlewares/authMiddleware")
const router = express.Router()

router.get('/', authController.index)
router.get('/dashboard/users', authMiddleare, isAdmin, dashboardController.users)
router.post('/auth/register', authController.register)
router.post('/auth/login', authController.login)
router.get('/dashboard', authMiddleare, dashboardController.dashboard)
router.get('/auth/logout', dashboardController.logout)

module.exports = router
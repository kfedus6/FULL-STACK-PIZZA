const Router = require('express')
const userController = require('../controller/userController')
const authMiddleware = require('../middleware/authMiddleware')

const router = new Router()

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.post('/logout', userController.logout)
router.get('/refresh', authMiddleware, userController.refresh)

module.exports = router
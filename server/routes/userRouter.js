const Router = require('express')
const router = new Router()
const authMiddleware = require('../middleware/authMiddleware')
const userController = require('../controller/userController')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/authorization', authMiddleware, userController.authorization)

module.exports = router
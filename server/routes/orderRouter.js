const Router = require('express')
const router = new Router()
const orderProductController = require('../controller/orderController')

router.post('/', orderProductController.orderCreate)

module.exports = router
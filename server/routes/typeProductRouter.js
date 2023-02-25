const Router = require('express')
const router = new Router()
const adminMiddleware = require('../middleware//adminMiddleware')
const typeProductController = require('../controller/typeController')

router.post('/', adminMiddleware(true), typeProductController.createTypeProduct)
router.get('/', typeProductController.getTypeProduct)

module.exports = router
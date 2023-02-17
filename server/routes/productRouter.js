const Router = require('express')
const router = new Router()
const adminMiddleware = require('../middleware//adminMiddleware')
const productController = require('../controller/productController')

router.post('/', productController.createProduct)
router.get('/', productController.getProducts)
router.get('/:id')
router.put('/:id')
router.delete('/:id')

module.exports = router
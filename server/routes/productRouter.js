const Router = require('express')
const router = new Router()
const adminMiddleware = require('../middleware//adminMiddleware')
const productController = require('../controller/productController')

router.post('/', adminMiddleware(true), productController.createProduct)
router.get('/', productController.getProducts)
router.get('/:id', productController.getProductId)
router.put('/:id')
router.delete('/:id', adminMiddleware(true), productController.deleteProductId)

module.exports = router
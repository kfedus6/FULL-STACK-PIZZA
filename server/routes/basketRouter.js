const Router = require('express')
const router = new Router()
const basketController = require('../controller/basketController')

router.post('/:id', basketController.addBasketProduct)
router.get('/:id', basketController.getBasketProduct)
router.delete('/:id', basketController.deleteBasketProduct)
router.delete('/products/:id', basketController.deleteAllBasketProduct)

module.exports = router
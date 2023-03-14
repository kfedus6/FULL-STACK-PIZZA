const Router = require('express')
const router = new Router()
const basketController = require('../controller/basketController')

router.post('/:id', basketController.addBasketProduct)
router.get('/', basketController.getBasketProduct)
router.delete('/:id', basketController.deleteBasketProduct)
router.delete('/basket/:id', basketController.deleteAllBasketProduct)

module.exports = router
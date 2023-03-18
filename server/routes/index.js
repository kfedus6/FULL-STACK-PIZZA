const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const productRouter = require('./productRouter')
const typeProductRouter = require('./typeProductRouter')
const basketRouter = require('./basketRouter')
const orderRouter = require('./orderRouter')

router.use('/user', userRouter)
router.use('/product', productRouter)
router.use('/typeProduct', typeProductRouter)
router.use('/basket', basketRouter)
router.use('/order', orderRouter)

module.exports = router
const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const productRouter = require('./productRouter')
const typeProductRouter = require('./typeProductRouter')

router.use('/user', userRouter)
router.use('/product', productRouter)
router.use('/typeProduct', typeProductRouter)

module.exports = router
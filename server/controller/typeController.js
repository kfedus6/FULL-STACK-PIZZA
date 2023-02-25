const TypeProduct = require('../models/TypeProduct')
const ApiError = require('../error/apiError')

class TypeProductController {
    async createTypeProduct(req, res, next) {
        try {
            const { type } = req.body

            const typeProduct = await TypeProduct.create({ type: type })
            await typeProduct.save()

            return res.json({ status: 200, typeProduct })

        } catch (e) {
            console.log(e)
            return next(ApiError.internal('Create type product error'))
        }
    }

    async getTypeProduct(req, res, next) {
        try {
            const typeProduct = await TypeProduct.find()
            return res.json({ status: 200, typeProduct })
        } catch (e) {
            console.log(e)
            return next(ApiError.internal('Get type product error'))
        }
    }
}

const typeProductController = new TypeProductController()
module.exports = typeProductController
const ApiError = require('../error/apiError')
const BasketProduct = require('../models/BasketProduct')
const Basket = require('../models/Basket')
const Product = require('../models/Product')

class BasketController {
    async addBasketProduct(req, res, next) {
        try {
            const { id } = req.params
            const { userId, changePrice, changeWeight, changeSize } = req.body

            const basket = await Basket.findOne({ userId: userId })
            const product = await Product.findOne({ _id: id })

            const basketProduct = await BasketProduct.create({
                basketId: basket.id,
                productId: product.id,
                size: changeSize,
                weight: changeWeight,
                price: changePrice
            })
            basketProduct.save()

            return res.json({ status: 200, basketProduct })
        } catch (e) {
            console.log(e)
            return next(ApiError.internal('Add basket product error'))
        }
    }

    async getBasketProduct(req, res, next) {
        try {

        } catch (e) {
            console.log(e)
            return next(ApiError.internal('Get basket product error'))
        }
    }

    async deleteBasketProduct(req, res, next) {
        try {

        } catch (e) {
            console.log(e)
            return next(ApiError.internal('Delete basket product error'))
        }
    }

    async deleteAllBasketProduct(req, res, next) {
        try {

        } catch (e) {
            console.log(e)
            return next(ApiError.internal('Delete all basket product error'))
        }
    }
}

const basketController = new BasketController()
module.exports = basketController
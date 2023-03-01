const Product = require('../models/Product')
const ApiError = require('../error/apiError')
const uuid = require('uuid')
const path = require('path')
const { db } = require('../models/Product')

class ProductController {
    async createProduct(req, res, next) {
        try {
            let { title, description, price, typeId } = req.body
            const { img } = req.files
            const fileNameImg = uuid.v4() + '.jpg'
            img.mv(path.resolve(__dirname, '..', 'static', fileNameImg))

            const product = await Product.create({ title: title, description: description, price: price, status: 1, img: fileNameImg, typeId: typeId })
            await product.save()

            return res.json({ status: 200, product })

        } catch (e) {
            console.log(e)
            return next(ApiError.internal('Create product error'))
        }
    }

    async getProducts(req, res, next) {
        try {
            let { limit, page, typeId } = req.query

            if (limit == undefined) {
                limit = 6
            }

            if (page == undefined) {
                page = 0
            }

            let products = []
            let count
            if (typeId == undefined) {
                count = await Product.find().count()
                products = await Product.find().skip((page - 1) * limit).limit(limit)
            } else {
                count = await Product.find({ typeId: typeId }).count()
                products = await Product.find({ typeId: typeId }).skip((page - 1) * limit).limit(limit)
            }

            return res.json({ status: 200, products, count })

        } catch (e) {
            console.log(e)
            return next(ApiError.internal('Get products error'))
        }
    }

    async putProductId(req, res, next) {

    }

    async deleteProductId(req, res, next) {
        try {
            const { id } = req.params

            const product = await Product.deleteOne({ _id: id })

            return res.json({ status: 200, product })

        } catch (e) {
            console.log(e)
            return next(ApiError.internal('Delete product error'))
        }
    }
}

const productController = new ProductController()
module.exports = productController
const Product = require('../models/Product')
const ApiError = require('../error/apiError')
const uuid = require('uuid')
const path = require('path')
const { db } = require('../models/Product')

class ProductController {
    async createProduct(req, res, next) {
        try {
            const { title, description, price, } = req.body
            const { img } = req.files
            const fileNameImg = uuid.v4() + '.jpg'
            img.mv(path.resolve(__dirname, '..', 'static', fileNameImg))

            const product = await Product.create({ title: title, description: description, price: price, status: 1, img: fileNameImg })
            await product.save()

            return res.json({ status: 200, product })

        } catch (e) {
            console.log(e)
            return next(ApiError.internal('Create product error'))
        }
    }

    async getProducts(req, res, next) {
        try {
            let { limit, page } = req.body

            if (limit == undefined) {
                limit = 3
            }

            if (page == undefined) {
                page = 0
            }

            let products = []

            const count = await Product.find().count()

            db.collection('products')
                .find()
                .skip(page * limit)
                .limit(limit)
                .forEach(product => products.push(product))
                .then(() => {
                    res.json({ status: 200, products, count })
                })
                .catch(() => {
                    next(ApiError.internal('Pagination products error'))
                })

        } catch (e) {
            console.log(e)
            return next(ApiError.internal('Get products error'))
        }
    }

    async getProductId(req, res, next) {

    }

    async putProductId(req, res, next) {

    }

    async deleteProductId(req, res, next) {

    }
}

const productController = new ProductController()
module.exports = productController
const Product = require('../models/Product')
const ApiError = require('../error/apiError')
const uuid = require('uuid')
const path = require('path')
const { db } = require('../models/Product')

class ProductController {
    async createProduct(req, res, next) {
        try {
            let {
                title,
                description,
                priceFirst, priceSecond, priceThird,
                sizeFirst, sizeSecond, sizeThird,
                weightFirst, weightSecond, weightThird,
                typeId
            } = req.body
            const { img } = req.files
            const fileNameImg = uuid.v4() + '.jpg'
            img.mv(path.resolve(__dirname, '..', 'static', fileNameImg))

            const product = await Product.create({
                title: title,
                description: description,
                priceFirst: priceFirst,
                priceSecond: priceSecond,
                priceThird: priceThird,
                sizeFirst: sizeFirst,
                sizeSecond: sizeSecond,
                sizeThird: sizeThird,
                weightFirst: weightFirst,
                weightSecond: weightSecond,
                weightThird: weightThird,
                status: 1,
                img: fileNameImg,
                typeId: typeId
            })
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
        try {
            const { id } = req.params
            const {
                title,
                description,
                priceFirst: priceFirst,
                priceSecond: priceSecond,
                priceThird: priceThird,
                sizeFirst: sizeFirst,
                sizeSecond: sizeSecond,
                sizeThird: sizeThird,
                weightFirst: weightFirst,
                weightSecond: weightSecond,
                weightThird: weightThird,
                status } = req.body
            const newProduct = {}
            if (status) {
                newProduct = await Product.updateOne({ _id: id }, { $set: { status: status } })
            } else {
                let product = await Product.findOne({ _id: id })
                newProduct = await Product.updateOne({ _id: id },
                    {
                        $set:
                        {
                            title: title ? title : product.title,
                            description: description ? description : product.description,
                            priceFirst: priceFirst ? priceFirst : product.priceFirst,
                            priceSecond: priceSecond ? priceSecond : product.priceSecond,
                            priceThird: priceThird ? priceThird : product.priceThird,
                            sizeFirst: sizeFirst ? sizeFirst : product.sizeFirst,
                            sizeSecond: sizeSecond ? sizeSecond : product.sizeSecond,
                            sizeThird: sizeThird ? sizeThird : product.sizeThird,
                            weightFirst: weightFirst ? weightFirst : product.weightFirst,
                            weightFirstSecond: weightSecond ? weightSecond : product.weightSecond,
                            weightThird: weightThird ? weightThird : product.weightThird
                        }
                    })
            }

            return res.json({ status: 200, newProduct })
        } catch (e) {
            console.log(e)
            return next(ApiError.internal('Update product error'))
        }
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
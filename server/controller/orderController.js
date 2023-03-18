const Order = require('../models/Order')
const OrderProduct = require('../models/OrderProduct')
const ApiError = require('../error/apiError')

class OrderProductController {
    async orderCreate(req, res, next) {
        try {
            const { name, phone, address, payment, products, sum, userId } = req.body

            const order = await Order.create({
                name: name,
                phone: phone,
                address: address,
                payment: payment,
                userId: userId,
                sum: sum,
                status: false
            })

            for (let product of products) {
                await OrderProduct.create({
                    orderId: order.id,
                    productId: product.product.productId,
                    count: product.count,
                    title: product.product.title,
                    image: product.product.image,
                    size: product.product.size,
                    weight: product.product.weight,
                    price: product.product.price
                })
            }

            return res.json({ status: 200, order })
        } catch (e) {
            console.log(e)
            return next(ApiError.internal('Create order product error'))
        }
    }
}

const orderProductController = new OrderProductController()
module.exports = orderProductController
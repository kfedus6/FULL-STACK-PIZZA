const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    orderId: { type: Types.ObjectId, ref: 'Order' },
    productId: { type: Types.ObjectId, ref: 'Product' },
    count: { type: Number, required: true },
    title: { type: String, required: true },
    image: { type: String, required: true },
    size: { type: Number, required: true },
    weight: { type: Number, required: true },
    price: { type: Number, required: true }
})

module.exports = model('OrderProduct', schema)
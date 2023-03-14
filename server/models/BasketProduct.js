const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    basketId: { type: Types.ObjectId, ref: 'Basket' },
    productId: { type: Types.ObjectId, ref: 'Product' },
    size: { type: Number, required: true },
    weight: { type: Number, required: true },
    price: { type: Number, required: true }
})

module.exports = model('BasketProduct', schema)
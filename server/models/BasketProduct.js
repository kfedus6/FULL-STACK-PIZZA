const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    basketId: { type: Types.ObjectId, ref: 'Basket' },
    productId: { type: Types.ObjectId, ref: 'Product' }
})

module.exports = model('BasketProduct', schema)
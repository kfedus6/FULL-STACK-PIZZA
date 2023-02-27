const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    size: { type: String, required: true },
    productId: { type: Types.ObjectId, ref: 'Product' }
})

module.exports = model('Size', schema)
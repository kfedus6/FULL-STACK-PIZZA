const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    clientName: { type: String, required: true },
    comment: { type: String, required: true },
    productId: { type: Types.ObjectId, required: true, ref: 'Product' }
})

module.exports = model('Comment', schema)
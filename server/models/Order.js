const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    userId: { type: Types.ObjectId, ref: 'User' },
    sum: { type: Number, required: true },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    payment: { type: String, required: true },
    status: { type: Boolean, defaultValue: 0 }
})

module.exports = model('Order', schema)
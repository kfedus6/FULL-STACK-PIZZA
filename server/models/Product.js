const { Schema, model } = require('mongoose')

const schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
    price: { type: Number, required: true },
    status: { type: Boolean, defaultValue: 1 }
})

module.exports = model('Product', schema)
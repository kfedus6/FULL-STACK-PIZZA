const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
    sizeFirst: { type: Number, required: true },
    sizeSecond: { type: Number, required: true },
    sizeThird: { type: Number, required: true },
    weightFirst: { type: Number, required: true },
    weightSecond: { type: Number, required: true },
    weightThird: { type: Number, required: true },
    priceFirst: { type: Number, required: true },
    priceSecond: { type: Number, required: true },
    priceThird: { type: Number, required: true },
    typeId: { type: Types.ObjectId, ref: 'TypeProduct' },
    status: { type: Boolean, defaultValue: 1 }
})

module.exports = model('Product', schema)
const { Schema, model } = require('mongoose')

const schema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: Number, required: true, unique: true },
    admin: { type: Boolean, default: 0 },
    isActivated: { type: Boolean, default: false },
    activationLink: { type: String }
})

module.exports = model('User', schema)
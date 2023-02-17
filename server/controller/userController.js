const User = require('../models/User')
const Basket = require('../models/Basket')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const ApiError = require('../error/apiError')

class UserController {
    async registration(req, res, next) {
        try {
            const { username, email, password, phone } = req.body

            if (!username && !email && !password && !phone) {
                return next(ApiError.badRequest('Invalid data'))
            }

            const candidate = await User.findOne({ email: email })
            if (candidate) {
                return next(ApiError.badRequest('This email is registered'))
            }

            const hashPassword = await bcrypt.hash(password, 7)
            const user = await User.create({ username: username, email: email, password: hashPassword, phone: phone, admin: 0 })
            const basket = await Basket.create({ userId: user.id })
            await user.save()
            await basket.save()
            const token = jwt.sign({ userId: user.id, admin: user.admin }, process.env.CODE_SECRET, { expiresIn: '1h' })

            return res.json({ status: 200, token })

        } catch (e) {
            console.log(e)
            return next(ApiError.internal('Registration error'))
        }
    }

    async login(req, res, next) {
        try {
            const { email, password } = req.body

            const user = await User.findOne({ email: email })
            if (!user) {
                return next(ApiError.badRequest('This email is not registered'))
            }

            const validPassword = bcrypt.compareSync(password, user.password)
            if (!validPassword) {
                return next(ApiError.badRequest('Incorrect password'))
            }

            const token = jwt.sign({ userId: user.id, admin: user.admin }, process.env.CODE_SECRET, { expiresIn: '1h' })
            return res.json({ status: 200, token })

        } catch (e) {
            console.log(e)
            return next(ApiError.internal('Login error'))
        }
    }

    async authorization(req, res, next) {
        try {
            const token = jwt.sign({ userId: req.user.id, admin: req.user.admin }, process.env.CODE_SECRET, { expiresIn: '1h' })
            return res.json({ status: 200, token })
        } catch (e) {
            console.log(e)
            return next(ApiError.internal('Authorization error'))
        }
    }
}

const userController = new UserController()
module.exports = userController
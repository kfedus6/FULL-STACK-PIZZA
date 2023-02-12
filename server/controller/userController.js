const User = require('../models/models')

class UserController {
    async registration(req, res) {
        const { username, email, password, phone } = req.body

        const user = await User.create({ username: username, email: email, password: password, phone: phone })

        return res.json('yes')
    }

    async login(req, res) {

    }

    async authorization(req, res) {

    }
}

const userController = new UserController()

module.exports = userController
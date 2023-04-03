const ApiError = require('../error/apiError')
const userService = require('../servise/userService')

class UserController {
    async registration(req, res, next) {
        try {
            const { username, email, password, phone } = req.body
            const userData = await userService.registration(username, email, password, phone)
            res.cookie('refreshToken', userData.tokens.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })
            return res.json({ status: 200, userData })
        } catch (e) {
            console.log(e)
            return next(ApiError.internal('Registration error'))
        }
    }

    async login(req, res, next) {
        try {
            const { email, password } = req.body
            const userData = await userService.login(email, password)
            res.cookie('refreshToken', userData.tokens.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })
            return res.json({ status: 200, userData })
        } catch (e) {
            console.log(e)
            return next(ApiError.internal('Login error'))
        }
    }

    async logout(req, res, next) {
        try {
            const { refreshToken } = req.cookies
            const token = await userService.logout(refreshToken)
            res.clearCookie('refreshToken')
            return res.json({ status: 200, token })
        } catch (e) {
            return next(ApiError.internal('Logout error'))
        }
    }

    async refresh(req, res, next) {
        try {
            const { refreshToken } = req.cookies
            const userData = await userService.refresh(refreshToken);
            res.cookie('refreshToken', userData.tokens.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })
            return res.json(userData);
        } catch (e) {
            return next(ApiError.internal('Refresh error'))
        }
    }
}

const userController = new UserController()
module.exports = userController
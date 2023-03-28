const tokenService = require('../servise/tokenService')
const ApiError = require('../error/apiError')

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        if (!token) {
            return next(ApiError.forbidden('The user is not registered token'))
        }
        const userData = tokenService.validateAccessToken(token)
        if (!userData) {
            return next(ApiError.forbidden('The user is not registered access token'))
        }

        req.user = userData
        next()
    } catch (e) {
        console.log(e)
        return next(ApiError.forbidden('The user is not registered error'))
    }
}
const tokenService = require('../servise/tokenService')
const ApiError = require('../error/apiError')
const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        if (token) {
            return next(ApiError.unauthorized('The user is not registered token'))
        }
        /*
            const userData = tokenService.validateAccessToken(token)
            if (!userData) {
                return next(ApiError.unauthorized('The user is not registered access token'))
            }
        */
        req.user = jwt.verify(token, process.env.JWT_ACCESS_SECRET)
        //req.user = userData
        next()
    } catch (e) {
        console.log(e)
        return next(ApiError.unauthorized('The user is not registered error'))
    }
};
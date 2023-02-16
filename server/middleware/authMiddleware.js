const jwt = require('jsonwebtoken')
const ApiError = require('../error/apiError')

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        if (!token) {
            return next(ApiError.forbidden('The user is not registered'))
        }
        req.user = jwt.verify(token, process.env.CODE_SECRET)
        next()
    } catch (e) {
        console.log(e)
        return next(ApiError.forbidden('The user is not registered'))
    }
}
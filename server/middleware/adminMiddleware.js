const jwt = require('jsonwebtoken')
const ApiError = require('../error/apiError')

module.exports = (admin, next) => {
    return (req, res, next) => {
        try {
            const token = req.headers.authorization.split(' ')[1]
            if (!token) {
                return next(ApiError.forbidden('The user is not registered'))
            }

            decoded = jwt.verify(token, process.env.CODE_SECRET)
            if (decoded.admin !== admin) {
                return next(ApiError.forbidden('You are not allowed'))
            }

            req.user = decoded
            next()

        } catch (e) {
            console.log(e)
            return next(ApiError.forbidden('The user is not registered error'))
        }
    }
}
const User = require('../models/User')
const Basket = require('../models/Basket')
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const tokenService = require('./tokenService')
const UserDto = require('../dtos/userDtos')
const ApiError = require('../error/apiError')

class UserService {
    async registration(username, email, password, phone) {
        const condidate = await User.findOne({ email })
        if (condidate) {
            throw ApiError.badRequest(`This ${email} is registered`)
        }

        const hashPassword = await bcrypt.hash(password, 7)
        const activationLink = uuid.v4()

        const user = await User.create({
            username: username,
            email: email,
            password: hashPassword,
            phone: phone,
            activationLink: activationLink,
            admin: 0
        })
        const basket = await Basket.create({ userId: user.id })

        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({ ...userDto })
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return { tokens, user: userDto }
    }

    async login(email, password) {
        const user = await User.findOne({ email })
        if (!user) {
            throw ApiError.badRequest(`User with this ${email} not found`)
        }
        const isPassEquals = await bcrypt.compare(password, user.password)
        if (!isPassEquals) {
            throw ApiError.badRequest('Wrong password')
        }
        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({ ...userDto })
        await tokenService.saveToken(userDto.id, tokens.refreshToken)
        return { tokens, user: userDto }
    }

    async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken)
        return token
    }

    async refresh(refreshToken) {
        if (!refreshToken) {
            throw ApiError.unauthorized('User not authorization');
        }
        const userData = tokenService.validateRefreshToken(refreshToken);
        const tokenFromDb = await tokenService.findToken(refreshToken);
        if (!userData || !tokenFromDb) {
            throw ApiError.unauthorized('User not authorization');
        }
        const user = await User.findOne({ _id: userData.id });
        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({ ...userDto });

        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        return { tokens, user: userDto }
    }
}

module.exports = new UserService
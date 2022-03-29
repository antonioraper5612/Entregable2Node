
const { body } = require("express-validator")
const { validationResult } = require("express-validator")
const { AppError } = require('../utils/appError')


//VALIDACIONES USUARIOS

exports.createUserValidations = [
    body('username').isString().notEmpty(),
    body('email').isEmail().notEmpty(),
    body('password').isString().notEmpty(),
    body('status').notEmpty(),
]


exports.deleteUserValidations = [
    body('status').isString().notEmpty(),
]


//VALIDACIONES ACTORS

exports.createActorValidations = [
    body('name').isString().notEmpty(),
    body('country').isString().notEmpty(),
    body('rating').isNumeric().notEmpty(),
    body('age').isNumeric().notEmpty(),
    body('profilePic').isString().notEmpty(),
    body('status').isString().notEmpty()
]


exports.validateResult = (req, res, next) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        const message = errors.array().map(({ msg, param }) => `${msg} - ${param}`).join('. ');
        return next(new AppError(400, message))
    }
    next();
}
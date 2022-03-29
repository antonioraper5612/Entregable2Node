// Utils
const { catchAsync } = require('../utils/catchAsync');
const { AppError } = require('../utils/appError')
const { filterObj } = require('../utils/filterObj')

//Models
const { User } = require('../models/user.model')


exports.getAllUsers = catchAsync(async (req, res, next) => {
    const user = await User.findAll({
        where: { status: "active" }, attributes: { exclude: ['password'] }
    })

    res.status(200).json({ data: user, status: "success" })

});

exports.getUserById = catchAsync(async (req, res, next) => {
    const { id } = req.params
    const user = await User.findOne({ where: { id, status: "active" } })

    if (!user) {
        return next(new AppError(404, "invalid id "))
    }
    res.status(200).json({ data: user, status: "success" })
});

exports.createUser = catchAsync(async (req, res, next) => {
    const {
        username,
        email,
        password,
        status,
    } = req.body

    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newuser = await User.create({
        username,
        email,
        password: hashedPassword,
        status,
        roles: "guest"
    })

    if (!newuser) {
        return next(new AppError(404, "Error create Users"))
    }

    newuser.password = undefined

    res.status(200).json({ data: newuser, status: "success" })

});

exports.updateUser = catchAsync(async (req, res, next) => {
    const { id } = req.params
    const { username, email } = req.body

    const newUser = filterObj(req.body, "username", "email")

    const user = await User.findOne({ where: { id, status: "active" } })
    await user.update({ ...newUser })

    res.status(200).json({ data: newUser })

});

exports.deleteUser = catchAsync(async (req, res, next) => {
    const { id } = req.params
    const { status } = req.body
    const user = await User.findOne({ where: { id, status: "active" } })
    await user.update({ status })

    res.status(204).json()
});

// Utils
const { catchAsync } = require('../utils/catchAsync');

//Models
const { Actor } = require('../models/actor.model');
const { AppError } = require('../utils/appError');
const { filterObj } = require('../utils/filterObj')

exports.getAllActors = catchAsync(async (req, res, next) => {
    const actors = await Actor.findAll({ where: { status: "active" } })
    res.status(200).json({ data: actors, status: "success" })

});

exports.getActorById = catchAsync(async (req, res, next) => {
    const { id } = req.params
    const actors = await Actor.findOne({ where: { id, status: "active" } })
    if (!actors) {
        return next(new AppError(404, "id Invalid"))
    }
    res.status(200).json({ data: actors, status: "success" })

});

exports.createActor = catchAsync(async (req, res, next) => {
    const { name, country, rating, age, profilePic, status } = req.body

    const actors = await Actor.create({ name, country, rating, age, profilePic, status })

    if (!actors) {
        return next(new AppError(404, "Error al crear Actors"))
    }
    res.status(200).json({ data: actors, status: "success" })

});

exports.updateActor = catchAsync(async (req, res, next) => {
    const { id } = req.params
    const actors = await Actor.findOne({ where: { id, status: "active" } })
    if (!actors) {
        return next(new AppError(404, ""))
    }
    const actorsUpdate = filterObj(req.body, 'name', 'country', 'rating', 'age', 'profilePic')
    await actors.update({ ...actorsUpdate })

    res.status(204).json()
});

exports.deleteActor = catchAsync(async (req, res, next) => {
    const { id } = req.params
    const { status } = req.body
    const actors = await Actor.findOne({ where: { id, status: "active" } })
    if (!actors) {
        return next(new AppError(404, ""))
    }
    await actors.update({ status })

    res.status(204).json()
});

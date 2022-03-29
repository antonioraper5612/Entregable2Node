

// Utils
const { catchAsync } = require('../utils/catchAsync');


//Models
const { Movie } = require('../models/movies.model');
const { AppError } = require('../utils/appError');
const { filterObj } = require('../utils/filterObj');


exports.getAllMovies = catchAsync(async (req, res, next) => {
    const movie = await Movie.findAll({ where: { status: "active" } })
    res.status(200).json({ data: movie, status: "success" })

});


exports.getMovieById = catchAsync(async (req, res, next) => {
    const { id } = req.params
    const movie = await Movie.findOne({ where: { id, status: "active" } })
    if (!movie) {
        return next(new AppError(404, "invalid id Movie"))
    }

    res.status(200).json({ data: movie, status: "success" })
});

exports.createMovie = catchAsync(async (req, res, next) => {
    const { title, description, duration, rating, img, genre, status } = req.body
    const movie = await Movie.create({ title, description, duration, rating, genre, img, status })

    if (!movie) {
        return next(new AppError(404, "Error create Movies"))
    }

    res.status(200).json({ data: movie, status: "success" })


});

exports.updateMovie = catchAsync(async (req, res, next) => {
    const { id } = req.params
    const movie = await Movie.findOne({ where: { id, status: "active" } })

    if (!movie) {
        return next(new AppError(404, "error update movie"))
    }

    movieUpdate = filterObj(req.body, "title", "description", "duration", "rating", "img", "genre", "status")

    await movie.update({ ...movieUpdate })

    res.status(204).json()
});

exports.deleteMovie = catchAsync(async (req, res, next) => {
    const { id } = req.params
    const { status } = req.body
    const movie = await Movie.findOne({ where: { id, status: "active" } })
    if (!movie) {
        return next(new AppError(404, "error delete Movie"))
    }
    await movie.update({ status })

    res.status(204).json()
});

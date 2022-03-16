const { db } = require('../utils/database')
const { DataTypes } = require('sequelize')


const ActorInMovies = db.define('ActorInMovies', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER(),
        allowNull: false
    },
    actorId: {
        type: DataTypes.INTEGER(),
        allowNull: false
    },
    movieId: {
        type: DataTypes.INTEGER(),
        allowNull: false
    },


}, { timestamps: false })

module.exports = { ActorInMovies }
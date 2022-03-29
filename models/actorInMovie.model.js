const { DataTypes } = require('sequelize')
const { db } = require('../utils/database')


const ActorInMovie = db.define('actorInMovie', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    actorId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    movieId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },


}, { timestamps: false })

module.exports = { ActorInMovie }
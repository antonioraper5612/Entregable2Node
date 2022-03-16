const { db } = require('../utils/database')
const { DataTypes } = require('sequelize')


const Movie = db.define('movie', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER(),
        allowNull: false
    },
    title: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    duration: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    rating: {
        type: DataTypes.STRING(11),
        allowNull: false
    },
    img: {
        type: DataTypes.STRING(),
        allowNull: false
    },
    genre: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    status: {
        type: DataTypes.STRING(11),
        allowNull: false
    },



}, { timestamps: false })

module.exports = { Movie }
const { db } = require('../utils/database')
const { DataTypes } = require('sequelize')


const Movie = db.define('movie', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
    img: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    genre: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    status: {
        type: DataTypes.STRING(11),
        allowNull: false,
        defaultValue: "active"
    },



}, { timestamps: false })

module.exports = { Movie }
const { db } = require('../utils/database')
const { DataTypes } = require('sequelize')


const Review = db.define('Review', {
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
    comment: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    rating: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    status: {
        type: DataTypes.STRING(11),
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER(),
        allowNull: false
    },
    movieId: {
        type: DataTypes.INTEGER(),
        allowNull: false
    },




}, { timestamps: false })

module.exports = { Review }
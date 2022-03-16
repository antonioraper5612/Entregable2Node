const { db } = require('../utils/database')
const { DataTypes } = require('sequelize')


const Actor = db.define('Actor', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER(),
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(),
        allowNull: false
    },
    country: {
        type: DataTypes.STRING(),
        allowNull: false
    },
    rating: {
        type: DataTypes.STRING(),
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER(),
        allowNull: false
    },
    profilePic: {
        type: DataTypes.STRING(),
        allowNull: false
    },
    status: {
        type: DataTypes.STRING(11),
        allowNull: false
    },


}, { timestamps: false })

module.exports = { Actor }
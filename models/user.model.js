const { db } = require('../utils/database')
const { DataTypes } = require('sequelize')


const User = db.define('user', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER(),
        allowNull: false
    },
    username: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(150),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    status: {
        type: DataTypes.STRING(11),
        allowNull: false
        //activo suspendido
    },
    roles: {
        type: DataTypes.STRING(11),
        allowNull: false
        // admin visitante
    }


}, { timestamps: false })

module.exports = { User }
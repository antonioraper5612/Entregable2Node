const express = require('express')


const app = express()
app.use(express.urlencoded())
app.use(express.json())

//Rutas


module.exports = { app }
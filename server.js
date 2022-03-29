
const { db } = require('./utils/database')
const { initModels } = require('./utils/initModels')

const { app } = require('./app')


initModels()

db.sync().then(() => {
    console.log("database corriendo")

}).catch((error) => console.log(error))


app.listen(4000, () => {
    console.log("Server Corriendo")
})

const express = require('express')

// Controllers
const { globalErrorHandler } = require('./controllers/error.controller');




const app = express()
app.use(express.urlencoded())
app.use(express.json())


// Routers
const { usersRouter } = require('./routes/users.router');
const { actorsRouter } = require('./routes/actors.router');
const { moviesRouter } = require('./routes/movies.router');

// Endpoints
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/actors', actorsRouter);
app.use('/api/v1/movies', moviesRouter);

app.use('*', (req, res, next) => {
    next(new AppError(404, `${req.originalUrl} not found in this server.`));
});

// Error handler (err -> AppError)
app.use(globalErrorHandler);

module.exports = { app }
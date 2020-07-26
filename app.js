const express = require('express');
const globalErrorController = require('./controllers/globalErrorController');
const AppError = require('./utils/appError');
const postRouter = require('./routers/postRouter');

const app = express();

app.use(express.json());

app.use('/api/v1/posts', postRouter)

app.use('*', (req, res, next) => {
    next(new AppError(`Cant find ${req.originalUrl}`));
});

app.use(globalErrorController);

module.exports = app;

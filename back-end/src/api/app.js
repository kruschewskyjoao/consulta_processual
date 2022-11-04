require('express-async-errors');
const express = require('express');

const processosRoute = require('../routes/processosRoute');
const errorHandlerMiddleware = require('../middlewares/errorHandlerMiddleware');

const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/consulta', processosRoute);

app.use(errorHandlerMiddleware);

module.exports = app;

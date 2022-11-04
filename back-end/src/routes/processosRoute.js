const { Router } = require('express');
const processosController = require('../controllers/processosController');

const processosRoute = Router();

processosRoute.get('/:cnj', processosController.processoUnico);

module.exports = processosRoute;
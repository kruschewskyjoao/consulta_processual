const processosService = require('../services/processosService');

const processosController = {
  async processoUnico(req, res) {
    const listaTodosProcessos = await processosService.processoUnico(req.params);
    return res.status(200).json(listaTodosProcessos)
  }
}

module.exports = processosController

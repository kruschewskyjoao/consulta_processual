const lista = require('../database/models');
const NotFoundError = require('../middlewares/errors');

const processosService = {
  async processoUnico(data) {
    const { cnj } = data;
    const todosProcessos = await lista.processos.findOne({
      where: { cnj },
      raw: true,
    });
    if(!todosProcessos) {
      return NotFoundError('Não foi encontrado nenhum processo');
    }
    const todasMovimentacoes = await lista.movimentacoes.findAll({
      attributes: {
        exclude: ['CNJ', 'id']
      },
      where: { cnj },
      raw: true,
    });
    return {
      ...todosProcessos,
        todasMovimentacoes,
    };
  },
}

module.exports = processosService

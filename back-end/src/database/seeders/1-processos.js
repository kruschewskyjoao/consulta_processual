'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert("processos", [
      {
        id: 1,
        CNJ: '1008126-92.2015.8.26.0132',
        tribunalOrigem: 'TJSP',
        dataInicial: '09/11/2017',
        autor: 'Nelson Willians',
        reu: 'Rafael Sganzeria',
      },
      {
        id: 2,
        CNJ: '2428331-12.2016.6.23.1102',
        tribunalOrigem: 'TJBA',
        dataInicial: '12/03/2012',
        autor: 'Rodrigo Fernando',
        reu: 'Pedro Rodrigo',
      },
      {
        id: 3,
        CNJ: '3387126-32.2011.2.12.2313',
        tribunalOrigem: 'TJBA',
        dataInicial: '22/06/2013',
        autor: 'Fernando Alves',
        reu: 'Thiago Santos',
      },
    ], {
      timestamps: false
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete("processos", null, {});
  }
};
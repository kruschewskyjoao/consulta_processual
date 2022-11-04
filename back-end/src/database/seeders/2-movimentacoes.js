'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert("movimentacoes", [
      {
        CNJ: '1008126-92.2015.8.26.0132',
        dataMov: '04/04/2015',
        descricao: 'Suspensão do Prazo referente ao usuário foi alterado para 18/07/2018'
      },
      {
        CNJ: '1008126-92.2015.8.26.0132',
        dataMov: '19/04/2015',
        descricao: 'Suspensão do Prazo referente ao usuário foi alterado para 18/07/2018'
      },
      {
        CNJ: '1008126-92.2015.8.26.0132',
        dataMov: '22/04/2015',
        descricao: 'Suspensão do Prazo referente ao usuário foi alterado para 18/07/2018'
      },
      {
        CNJ: '1008126-92.2015.8.26.0132',
        dataMov: '20/12/2018',
        descricao:`Remetido ao DJE Relação: 01/09/2018 Teor do ato: Vistos. Na forme do artigo 513
        2, intime-se a executada, por seu advogado, para que no prazo de 15(quinze) dias pague o valor
        indicado no demonstrativo discriminado.`
      },
      {
        CNJ: '2428331-12.2016.6.23.1102',
        dataMov: '03/02/2016',
        descricao: 'O processo está ok'
      },
      {
        CNJ: '2428331-12.2016.6.23.1102',
        dataMov: '11/12/2017',
        descricao: `Remetido ao DJE Relação: 01/09/2018 Teor do ato: Vistos. Na forme do artigo 513
        2`
      },
      {
        CNJ: '3387126-32.2011.2.12.2313',
        dataMov: '13/06/2018',
        descricao: 'O processo está ok'
      },
    ], {
      timestamps: false
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete("movimentacoes", null, {});
  }
};
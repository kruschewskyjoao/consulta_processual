'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('processos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CNJ: {
        allowNull: false,
        type: Sequelize.STRING
      },
      tribunalOrigem: {
        allowNull: false,
        type: Sequelize.STRING
      },
      dataInicial: {
        allowNull: false,
        type: Sequelize.STRING
      },
      autor: {
        allowNull: false,
        type: Sequelize.STRING
      },
      reu: {
        allowNull: false,
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('processos');
  }
};
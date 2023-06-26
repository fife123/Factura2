'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cliente', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Nomb_cliente: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Dir_cliente: {
        type: Sequelize.STRING
      },
      
      Cuidad_cliente: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Telf_cliente: {
        type: Sequelize.INTEGER,
        validate:{
          len:[8,8]
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Cliente');
  }
};
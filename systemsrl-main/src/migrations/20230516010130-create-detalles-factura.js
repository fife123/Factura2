'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Detalles_factura', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Categoria_producto: {
        type: Sequelize.STRING
      },
      Cantidad: {
        type: Sequelize.INTEGER,
        min :0
      },
      Precio: {
        type: Sequelize.INTEGER
      },
      id_Num_factura: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model:"Factura",
          Key:"id"
        }, 
      },
      id_Codigo_producto: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model:"Producto",
          Key:"id"
        }, 
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
    await queryInterface.dropTable('Detalles_factura');
  }
};
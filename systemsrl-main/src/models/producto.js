'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Producto.hasOne(models.Detalles_factura,{
        Foreignkey:'id_Codigo_producto'
      })
    }
  }
  Producto.init({
    id:{
        type:DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
    Descripcion_producto: DataTypes.STRING,
    Valor_Unitario: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Producto',
    //Sirve para congela el nombre de tabla 
    freezeTableName:true
  });
  return Producto;
};
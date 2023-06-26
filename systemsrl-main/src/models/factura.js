'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Factura extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Factura.belongsTo(models.Cliente,{
        foreignKey:'id'
      })
      models.Factura.hasOne(models.Detalles_factura,{
        foreignKey:'id_Num_factura'
      })
  }}
  Factura.init({
    id:{type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey:true
    },
    Fecha_factura: DataTypes.DATE,
    id_Cedula_cliente:{type: DataTypes.INTEGER,
    allowNull: false}
  }, {
    sequelize,
    modelName: 'Factura',
    freezeTableName:true
  });
  return Factura;
};
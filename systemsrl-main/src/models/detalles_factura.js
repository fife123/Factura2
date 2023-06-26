'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Detalles_factura extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    models.Detalles_factura.belongsTo(models.Factura,{
      foreignKey:'id'
    });
    models.Detalles_factura.hasMany(models.Producto,{
      foreignKey:'id'
    });
    }
  }
  Detalles_factura.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    Categoria_producto: DataTypes.STRING,
    Cantidad: {
      type: DataTypes.INTEGER,
      min: 0
    },
    Precio: DataTypes.INTEGER,
    id_Num_factura:{ type:DataTypes.INTEGER,
    allowNull: false
  },
    id_Codigo_producto:{type: DataTypes.INTEGER,
    allowNull: false
  },
  }, {
    sequelize,
    modelName: 'Detalles_factura',
    freezeTableName:true
  });
  return Detalles_factura;
};
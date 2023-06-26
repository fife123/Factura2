'use strict';
const {Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Cliente.hasMany(models.Factura,{
        foreignKey:'id_Cedula_cliente'
      })
    }
  }
  Cliente.init({
    id:{ 
      allowNull: false,
      primaryKey: true,
      type:DataTypes.INTEGER
    },
    Nomb_cliente:{
      type:DataTypes.STRING,
      allowNull: false,
      },
    Dir_cliente: DataTypes.STRING,
    Cuidad_cliente:{
      type:DataTypes.STRING,
      allowNull: false
    },
    Telf_cliente: {type:DataTypes.INTEGER,
      validate:{
        len:[8,8]
      }
    }
  }, {
    sequelize,
    modelName: 'Cliente',
    //sirve para no cambiar nombre              
    freezeTableName:true
  });
  return Cliente;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cart.belongsTo(models.User)
      Cart.belongsTo(models.Type)
      Cart.belongsTo(models.Photografer)
    }
  }
  Cart.init({
    UserId: DataTypes.INTEGER,
    PhotograferId: DataTypes.INTEGER,
    TypeId: DataTypes.INTEGER,
    address: DataTypes.TEXT,
    date: DataTypes.STRING,
    price: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};
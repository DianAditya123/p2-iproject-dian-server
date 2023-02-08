'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Photografer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Photografer.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    skill: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Photografer',
  });
  return Photografer;
};
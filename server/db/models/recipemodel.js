'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class recipeModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  recipeModel.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    img: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'recipeModel',
  });
  return recipeModel;
};